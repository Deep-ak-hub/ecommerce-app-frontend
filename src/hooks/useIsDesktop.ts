import { useMediaQuery } from "@/hooks/useMediaQuery";

/** True when the window is at least 1024px wide (Tailwind's `lg` breakpoint). */
export function useIsDesktop() {
  return useMediaQuery("(min-width: 1024px)");
}
