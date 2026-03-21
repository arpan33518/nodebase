import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combine multiple `clsx`-compatible class values into a single Tailwind-safe className string.
 *
 * @param inputs - One or more values accepted by `clsx` (strings, arrays, objects, etc.) to be combined
 * @returns The combined className with Tailwind CSS class conflicts resolved
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
