"use client";

import { Button } from "@/components/ui/button";
import { LogoutButton } from "@/features/auth/components/logout-button";
import { useTRPC } from "@/trpc/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function Home() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data } = useQuery(trpc.getWorkflows.queryOptions());
  const testAi = useMutation(trpc.testAi.mutationOptions({
    onSuccess: () => {
      toast.success("Ai Job Queued");
    }
  }));
  const create = useMutation(trpc.createWorkflow.mutationOptions({
    onSuccess: () => {
      queryClient.invalidateQueries(trpc.getWorkflows.queryOptions());
    }
  }))

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-4">
      <Button disabled={testAi.isPending} onClick={() => testAi.mutate()}>Test AI</Button>
      <p>protected server</p>
      <div className="bg-gray-100 p-4 rounded-md overflow-auto max-w-full">
        {JSON.stringify(data, null, 2)}
      </div>
      <Button disabled={create.isPending} onClick={() => create.mutate()}>Create Workflow</Button>
      <LogoutButton />
    </div>
  );
}
