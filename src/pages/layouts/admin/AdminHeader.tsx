import { LogoComponent } from "@/components/LogoComponent";
import {
  Bars3Icon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export type AdminHeaderProps = {
  pageTitle: string;
  isDesktop: boolean;
  desktopNarrow: boolean;
  mobileMenuOpen: boolean;
  onToggleSidebar: () => void;
};

export function AdminHeader({
  pageTitle,
  isDesktop,
  desktopNarrow,
  mobileMenuOpen,
  onToggleSidebar,
}: AdminHeaderProps) {
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
            className="flex w-full cursor-pointer rounded-md px-3 py-2 text-left text-sm text-foreground hover:bg-muted"
          >
            Account settings
          </button>
          <button
            type="button"
            className="flex w-full cursor-pointer rounded-md px-3 py-2 text-left text-sm text-destructive hover:bg-destructive/10"
          >
            Sign out
          </button>
        </div>
      </details>
    </header>
  );
}
