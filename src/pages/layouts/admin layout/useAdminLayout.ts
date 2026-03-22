import { useIsDesktop } from "@/hooks/useIsDesktop";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

/**
 * Holds all state for the admin shell:
 * - On small screens: the sidebar is a drawer (open / closed).
 * - On large screens: the sidebar is fixed and can be narrow (icons only) or wide.
 */
export function useAdminLayout() {
  const isDesktop = useIsDesktop();
  const { pathname } = useLocation();

  const [desktopNarrowSidebar, setDesktopNarrowSidebar] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close the mobile drawer when the user navigates to another page.
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // If the window becomes desktop-sized, hide the mobile drawer.
  useEffect(() => {
    if (isDesktop) setMobileMenuOpen(false);
  }, [isDesktop]);

  // Prevent background scrolling while the mobile menu is open.
  useEffect(() => {
    if (isDesktop || !mobileMenuOpen) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isDesktop, mobileMenuOpen]);

  function toggleSidebar() {
    if (isDesktop) {
      setDesktopNarrowSidebar((prev) => !prev);
    } else {
      setMobileMenuOpen((prev) => !prev);
    }
  }

  // On mobile we always show text labels in the drawer. On desktop, hide labels when the sidebar is narrow.
  const showSidebarText = !desktopNarrowSidebar || !isDesktop;

  return {
    isDesktop,
    desktopNarrowSidebar,
    mobileMenuOpen,
    setMobileMenuOpen,
    toggleSidebar,
    showSidebarText,
  };
}
