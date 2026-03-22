export function AdminFooter() {
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
