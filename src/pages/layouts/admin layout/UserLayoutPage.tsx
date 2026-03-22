import { LogoComponent } from "@/components/LogoComponent";
import { cn } from "@/lib/utils";
import { getAdminPageTitle, adminNavItems } from "@/pages/layouts/admin layout/adminNav";
import { useAdminLayout } from "@/pages/layouts/admin layout/useAdminLayout";
import {
  Bars3Icon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronRightIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { useMemo } from "react";

type SidebarProps = {
  isDesktop: boolean;
  desktopNarrow: boolean;
  mobileOpen: boolean;
  showText: boolean;
  onCloseMobile: () => void;
};

/** Left column: logo, menu links, link back to the store. */
function AdminSidebar({
  isDesktop,
  desktopNarrow,
  mobileOpen,
  showText,
  onCloseMobile,
}: SidebarProps) {
  const offScreenMobile = !isDesktop && !mobileOpen;

  return (
    <aside
      id="admin-sidebar"
      aria-label="Admin navigation"
      aria-hidden={offScreenMobile || undefined}
      className={cn(
        "fixed inset-y-0 left-0 z-50 flex w-60 max-w-[min(18rem,calc(100vw-2.5rem))] flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-[transform,width] duration-200 ease-out",
        isDesktop && desktopNarrow && "lg:w-18",
        isDesktop
          ? "translate-x-0"
          : mobileOpen
            ? "translate-x-0"
            : "-translate-x-full",
      )}
    >
      <div
        className={cn(
          "flex h-14 shrink-0 items-center border-b border-sidebar-border px-3",
          isDesktop && desktopNarrow && "justify-center px-2",
        )}
      >
        <Link
          to="/admin"
          title="Admin home"
          onClick={() => !isDesktop && onCloseMobile()}
          className={cn(
            "flex min-w-0 flex-1 items-center gap-2.5 rounded-lg py-1.5 text-sidebar-foreground transition hover:bg-sidebar-accent/15",
            isDesktop && desktopNarrow && "justify-center px-0",
          )}
        >
          <LogoComponent className="size-8 shrink-0" />
          {showText && (
            <span className="truncate text-sm font-semibold tracking-tight">
              CMS Admin
            </span>
          )}
        </Link>

        {!isDesktop && (
          <button
            type="button"
            aria-label="Close menu"
            onClick={onCloseMobile}
            className="ml-1 inline-flex size-9 shrink-0 items-center justify-center rounded-lg text-sidebar-foreground transition hover:bg-sidebar-accent/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring lg:hidden"
          >
            <XMarkIcon className="size-5" aria-hidden />
          </button>
        )}
      </div>

      <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto overflow-x-hidden overscroll-contain p-2">
        {adminNavItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            title={isDesktop && desktopNarrow ? label : undefined}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isDesktop && desktopNarrow && "justify-center px-2",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                  : "text-sidebar-foreground/90 hover:bg-sidebar-accent/20 hover:text-sidebar-accent-foreground",
              )
            }
          >
            <Icon className="size-5 shrink-0 opacity-90" aria-hidden />
            {showText && <span className="truncate">{label}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-sidebar-border p-2">
        <Link
          to="/"
          title={isDesktop && desktopNarrow ? "Storefront" : undefined}
          className={cn(
            "flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-sidebar-accent/15 hover:text-sidebar-foreground",
            isDesktop && desktopNarrow && "justify-center px-2",
          )}
        >
          <HomeIcon className="size-5 shrink-0" aria-hidden />
          {showText && <span>Back to store</span>}
        </Link>
      </div>
    </aside>
  );
}

type HeaderProps = {
  pageTitle: string;
  isDesktop: boolean;
  desktopNarrow: boolean;
  mobileMenuOpen: boolean;
  onToggleSidebar: () => void;
};

/** Sticky top bar: menu button, title, user menu. */
function AdminHeader({
  pageTitle,
  isDesktop,
  desktopNarrow,
  mobileMenuOpen,
  onToggleSidebar,
}: HeaderProps) {
  const menuExpanded = isDesktop ? !desktopNarrow : mobileMenuOpen;

  return (
    <header className="sticky top-0 z-30 flex min-h-14 shrink-0 flex-wrap items-center justify-between gap-2 border-b border-border bg-card/90 px-3 py-2 shadow-sm backdrop-blur-md supports-backdrop-filter:bg-card/75 sm:gap-4 sm:px-4 md:px-6 md:py-0">
      <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
        <button
          type="button"
          aria-controls="admin-sidebar"
          aria-expanded={menuExpanded}
          aria-label={
            isDesktop
              ? desktopNarrow
                ? "Expand sidebar"
                : "Collapse sidebar"
              : mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
          }
          onClick={onToggleSidebar}
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground shadow-sm transition hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:size-8"
        >
          {isDesktop ? (
            desktopNarrow ? (
              <ChevronDoubleRightIcon className="size-4" aria-hidden />
            ) : (
              <ChevronDoubleLeftIcon className="size-4" aria-hidden />
            )
          ) : mobileMenuOpen ? (
            <XMarkIcon className="size-5 sm:size-4" aria-hidden />
          ) : (
            <Bars3Icon className="size-5 sm:size-4" aria-hidden />
          )}
        </button>

        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <LogoComponent className="size-7 shrink-0 sm:size-8 lg:hidden" />
          <div className="min-w-0">
            <p className="truncate text-[10px] font-medium uppercase tracking-wide text-muted-foreground sm:text-xs">
              Administration
            </p>
            <h1 className="truncate text-sm font-semibold tracking-tight text-foreground sm:text-base md:text-lg">
              {pageTitle}
            </h1>
          </div>
        </div>
      </div>

      <details className="group relative shrink-0">
        <summary className="flex max-w-[100vw] cursor-pointer list-none items-center gap-1.5 rounded-lg border border-border bg-background px-1.5 py-1.5 text-left text-sm transition hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:gap-2 sm:px-2 [&::-webkit-details-marker]:hidden">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary text-xs font-semibold text-primary-foreground">
            AD
          </span>
          <span className="hidden min-w-0 sm:block sm:max-w-40 md:max-w-none">
            <span className="block truncate font-medium text-foreground">
              Admin User
            </span>
            <span className="hidden truncate text-xs text-muted-foreground sm:block">
              admin@example.com
            </span>
          </span>
          <ChevronRightIcon
            className="hidden size-4 shrink-0 text-muted-foreground transition group-open:rotate-90 sm:block"
            aria-hidden
          />
        </summary>
        <div className="absolute right-0 z-50 mt-2 w-[min(13rem,calc(100vw-1.5rem))] rounded-lg border border-border bg-popover p-1 text-popover-foreground shadow-lg sm:w-52">
          <button
            type="button"
            className="flex w-full rounded-md cursor-pointer px-3 py-2 text-left text-sm text-foreground hover:bg-muted"
          >
            Account settings
          </button>
          <button
            type="button"
            className="flex w-full rounded-md cursor-pointer px-3 py-2 text-left text-sm text-destructive hover:bg-destructive/10"
          >
            Sign out
          </button>
        </div>
      </details>
    </header>
  );
}

/** Simple footer with version and links. */
function AdminFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="shrink-0 border-t border-border bg-muted/40 px-3 py-5 sm:px-4 md:px-6 md:py-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-xs sm:flex-row sm:items-center sm:justify-between sm:text-sm">
        <div className="text-muted-foreground">
          <p className="font-medium text-foreground">CMS Admin</p>
          <p className="mt-1 max-w-prose">
            Point-of-sale &amp; ecommerce control panel.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2">
          <span>v1.0.0</span>
          <a
            href="#"
            className="rounded hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Documentation
          </a>
          <a
            href="#"
            className="rounded hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Support
          </a>
          <span className="tabular-nums">© {year} All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}

/**
 * Admin area layout: sidebar + main column (header, page content, footer).
 * Page content comes from React Router `<Outlet />`.
 */
export default function UserLayoutPage() {
  const { pathname } = useLocation();
  const layout = useAdminLayout();

  const pageTitle = useMemo(() => getAdminPageTitle(pathname), [pathname]);

  const mainOffsetClass = layout.desktopNarrowSidebar
    ? "lg:pl-[4.5rem]"
    : "lg:pl-60";

  return (
    <div className="flex min-h-screen w-full bg-background text-foreground">
      {/* Dark overlay when the mobile drawer is open */}
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
