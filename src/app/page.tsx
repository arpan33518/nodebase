import { LogoutButton } from "@/features/auth/components/logout-button";

/**
 * Renders the Home page with a centered heading and logout control.
 *
 * Displays a full-height, vertically centered container containing an `h1`
 * with the text "Home" and the `LogoutButton` component.
 *
 * @returns A JSX element representing the Home page layout.
 */
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold">Home</h1>
      <LogoutButton />
    </div>
  );
}
