import { requireAuth } from "@/lib/auth-utils";

const page = async () => {
    await requireAuth();
    return (
        <div>
            <h1>Workflows</h1>
        </div>
    )
}

export default page;