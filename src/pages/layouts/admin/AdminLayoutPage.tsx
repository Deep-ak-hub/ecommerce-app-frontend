import { cn } from "@/lib/utils";
import { AdminFooter } from "@/pages/layouts/admin/AdminFooter";
import { AdminHeader } from "@/pages/layouts/admin/AdminHeader";
import { AdminSidebar } from "@/pages/layouts/admin/AdminSidebar";
import { getAdminPageTitle } from "@/pages/layouts/admin/adminNav";
import { useAdminLayout } from "@/pages/layouts/admin/useAdminLayout";
import { Outlet, useLocation } from "react-router";
import { useMemo } from "react";

/**
 * Shell for all /admin/* routes: sidebar + header + footer stay mounted;
 * the active feature page renders inside <Outlet /> (see router.config.tsx).
 * Same idea as AuthLayoutPage + Outlet for /auth/*.
 */
export default function AdminLayoutPage() {
  const { pathname } = useLocation();
  const layout = useAdminLayout();

  const pageTitle = useMemo(() => getAdminPageTitle(pathname), [pathname]);

  const mainOffsetClass = layout.desktopNarrowSidebar
    ? "lg:pl-[4.5rem]"
    : "lg:pl-60";

  return (
    <div className="flex min-h-screen w-full bg-background text-foreground">
      {!layout.isDesktop && layout.mobileMenuOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[1px] lg:hidden"
          onClick={() => layout.setMobileMenuOpen(false)}
        />
      )}

      <AdminSidebar
        isDesktop={layout.isDesktop}
        desktopNarrow={layout.desktopNarrowSidebar}
        mobileOpen={layout.mobileMenuOpen}
        showText={layout.showSidebarText}
        onCloseMobile={() => layout.setMobileMenuOpen(false)}
      />

      <div
        className={cn(
          "flex min-h-screen w-0 min-w-0 flex-1 flex-col transition-[padding] duration-200 ease-out",
          mainOffsetClass,
        )}
      >
        <AdminHeader
          pageTitle={pageTitle}
          isDesktop={layout.isDesktop}
          desktopNarrow={layout.desktopNarrowSidebar}
          mobileMenuOpen={layout.mobileMenuOpen}
          onToggleSidebar={layout.toggleSidebar}
        />

        <main className="flex-1 p-3 sm:p-4 md:p-6">
          <Outlet />
        </main>

        <AdminFooter />
      </div>
    </div>
  );
}
