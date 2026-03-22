import { useIsDesktop } from "@/hooks/useIsDesktop";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export function useAdminLayout() {
  const isDesktop = useIsDesktop();
  const { pathname } = useLocation();

  const [desktopNarrowSidebar, setDesktopNarrowSidebar] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isDesktop) setMobileMenuOpen(false);
  }, [isDesktop]);

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
