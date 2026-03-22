import { LogoComponent } from "@/components/LogoComponent";
import { cn } from "@/lib/utils";
import { adminNavItems } from "@/pages/layouts/admin/adminNav";
import { HomeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router";

export type AdminSidebarProps = {
  isDesktop: boolean;
  desktopNarrow: boolean;
  mobileOpen: boolean;
  showText: boolean;
  onCloseMobile: () => void;
};

export function AdminSidebar({
  isDesktop,
  desktopNarrow,
  mobileOpen,
  showText,
  onCloseMobile,
}: AdminSidebarProps) {
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
