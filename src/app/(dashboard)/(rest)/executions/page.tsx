import { requireAuth } from "@/lib/auth-utils";

const page = async () => {
    await requireAuth();
    return (
        <div>
            <h1>Executions</h1>
        </div>
    )
}

export default page;