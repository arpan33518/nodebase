import { LogoutButton } from "@/features/auth/components/logout-button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold">Home</h1>
      <LogoutButton />
    </div>
  );
}
