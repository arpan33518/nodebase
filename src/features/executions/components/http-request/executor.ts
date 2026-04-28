import Handlebars from "handlebars";
import type { NodeExecutor } from "@/features/executions/types";
import { NonRetriableError } from "inngest";
import ky, { type Options as KyOptions } from "ky";

// Register a "json" helper so users can stringify objects in templates
// Usage in body: {{json myVariable}} → outputs JSON string
Handlebars.registerHelper("json", (context) => {
    return new Handlebars.SafeString(JSON.stringify(context, null, 2));
});

type HttpRequestData = {
    variableName?: string;
    endpoint?: string;
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    body?: string;
};

export const httpRequestExecutor: NodeExecutor<HttpRequestData> = async ({
    data,
    nodeId,
    context,
    step,
}) => {
    // TODO: Publish "loading" state for httpRequest

    if (!data.endpoint) {
        // TODO: Publish "error" state for http request
        throw new NonRetriableError("HTTP Request node: No endpoint configured");
    }

    const result = await step.run("http-request",
        async () => {
            // TEMPLATING: resolve {{variables}} in the endpoint URL
            const endpoint = Handlebars.compile(data.endpoint!)(context);
            const method = data.method || "GET";

            const options: KyOptions = { method };

            if (["POST", "PUT", "PATCH"].includes(method)) {
                if (data.body) {
                    // TEMPLATING: resolve {{variables}} in the request body
                    const resolvedBody = Handlebars.compile(data.body)(context);
                    options.body = resolvedBody;
                    options.headers = {
                        "Content-Type": "application/json",
                    };
                }
            }

            const response = await ky(endpoint, options);
            const contentType = response.headers.get("content-type");
            const responseData = contentType?.includes("application/json")
                ? await response.json()
                : await response.text();

            // VARIABLENAME REFACTOR: nest result under user's chosen name
            const variableName = data.variableName || "httpRequest";

            return {
                ...context,
                [variableName]: {
                    httpResponse: {
                        status: response.status,
                        statusText: response.statusText,
                        data: responseData,
                    }
                }
            };
        }
    );
    return result;
};