import { authClient } from "@/lib/auth-client";

export function useHasActiveSubscription() {
  const { data: session, isPending } = authClient.useSession();

  // better-auth with the Polar plugin exposes activeSubscriptions on the session user
  const activeSubscriptions =
    (session?.user as any)?.activeSubscriptions ?? [];

  const hasActiveSubscription =
    Array.isArray(activeSubscriptions) && activeSubscriptions.length > 0;

  return {
    hasActiveSubscription,
    isLoading: isPending,
  };
}
