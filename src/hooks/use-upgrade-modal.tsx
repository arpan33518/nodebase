"use client";

import { useState } from "react";

/**
 * useUpgradeModal
 *
 * A hook that provides:
 * - `modal`: a React element that renders the upgrade modal (null when not open)
 * - `handleError`: a function to call on mutation errors; if the error indicates
 *   the user has hit a plan limit, it opens the upgrade modal automatically.
 *
 * Replace the stub modal UI below with your real UpgradeModal component
 * once you build it.
 */
export const useUpgradeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleError = (error: unknown) => {
    // Check if the error is a plan-limit / forbidden error from your tRPC backend.
    // Adjust the condition to match your actual error codes/messages.
    const message =
      error instanceof Error
        ? error.message
        : (error as { message?: string })?.message ?? "";

    if (
      message.toLowerCase().includes("upgrade") ||
      message.toLowerCase().includes("limit") ||
      message.toLowerCase().includes("forbidden")
    ) {
      setIsOpen(true);
    }
  };

  const modal = isOpen ? (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
      onClick={() => setIsOpen(false)}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 12,
          padding: "2rem",
          maxWidth: 400,
          width: "90%",
          textAlign: "center",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ marginBottom: "0.5rem" }}>Upgrade your plan</h2>
        <p style={{ color: "#666", marginBottom: "1.5rem" }}>
          You&apos;ve reached the limit of your current plan. Upgrade to create
          more workflows.
        </p>
        <button
          style={{
            background: "#000",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "0.6rem 1.5rem",
            cursor: "pointer",
            marginRight: "0.5rem",
          }}
          onClick={() => {
            // TODO: redirect to your billing/upgrade page
            setIsOpen(false);
          }}
        >
          Upgrade
        </button>
        <button
          style={{
            background: "transparent",
            border: "1px solid #ccc",
            borderRadius: 8,
            padding: "0.6rem 1.5rem",
            cursor: "pointer",
          }}
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  ) : null;

  return { handleError, modal };
};
