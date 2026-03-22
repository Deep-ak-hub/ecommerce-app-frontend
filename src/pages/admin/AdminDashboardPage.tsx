import {
  ArrowPathIcon,
  ArrowTrendingUpIcon,
  BanknotesIcon,
  ClockIcon,
  CubeIcon,
  ExclamationTriangleIcon,
  PrinterIcon,
} from "@heroicons/react/24/outline";
import {
  kpiCards,
  lowStockItems,
  peakHourHeights,
  recentOrders,
  topProducts,
} from "@/pages/admin/adminDashboardSampleData";

function orderStatusClass(status: string) {
  switch (status) {
    case "Completed":
      return "bg-primary/15 text-primary ring-1 ring-primary/25";
    case "Processing":
      return "bg-muted text-muted-foreground ring-1 ring-border";
    case "Shipped":
      return "bg-secondary/40 text-secondary-foreground ring-1 ring-secondary/50";
    case "Refunded":
      return "bg-destructive/10 text-destructive ring-1 ring-destructive/20";
    default:
      return "bg-muted text-muted-foreground ring-1 ring-border";
  }
}

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <header>
        <h2 className="text-base font-semibold text-foreground sm:text-lg md:text-xl">
          POS &amp; ecommerce overview
        </h2>
        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
          Sample data for layout only — connect your API when ready.
        </p>
      </header>

      <section aria-label="Key performance indicators">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
          {kpiCards.map(
            ({ label, value, sub, change, icon: Icon, accent }) => (
              <article
                key={label}
                className="relative overflow-hidden rounded-xl border border-border bg-card p-4 text-card-foreground shadow-sm sm:p-5"
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-linear-to-br ${accent} opacity-95`}
                  aria-hidden
                />
                <div className="relative flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {label}
                    </p>
                    <p className="mt-2 text-xl font-semibold tracking-tight tabular-nums text-foreground sm:text-2xl">
                      {value}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>
                    <p className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary">
                      <ArrowTrendingUpIcon className="size-3.5" aria-hidden />
                      {change} vs yesterday
                    </p>
                  </div>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-background/85 text-primary shadow-sm ring-1 ring-border">
                    <Icon className="size-5" aria-hidden />
                  </span>
                </div>
              </article>
            ),
          )}
        </div>
      </section>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 xl:grid-cols-3">
        <section
          className="min-w-0 overflow-hidden rounded-xl border border-border bg-card shadow-sm xl:col-span-2"
          aria-labelledby="orders-heading"
        >
          <div className="flex flex-col gap-3 border-b border-border px-3 py-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:px-4 sm:py-4 md:px-5">
            <div className="min-w-0">
              <h3
                id="orders-heading"
                className="text-sm font-semibold text-foreground sm:text-base"
              >
                Latest orders
              </h3>
              <p className="text-xs text-muted-foreground sm:text-sm">
                Recent POS and web checkouts
              </p>
            </div>
            <button
              type="button"
              className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-lg border border-border bg-background cursor-pointer px-3 py-2 text-xs font-medium text-foreground shadow-sm transition hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-auto sm:text-sm"
            >
              <ArrowPathIcon className="size-4" aria-hidden />
              Refresh
            </button>
          </div>

          <p className="border-b border-border px-3 pb-2 text-center text-[11px] text-muted-foreground sm:hidden">
            Scroll sideways to see all columns
          </p>

          <div className="overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch]">
            <table className="w-full min-w-160 text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40 text-muted-foreground">
                  <th className="px-4 py-3 font-medium md:px-5">Order</th>
                  <th className="px-4 py-3 font-medium md:px-5">Customer</th>
                  <th className="px-4 py-3 font-medium md:px-5">Amount</th>
                  <th className="px-4 py-3 font-medium md:px-5">Channel</th>
                  <th className="px-4 py-3 font-medium md:px-5">Status</th>
                  <th className="px-4 py-3 font-medium md:px-5">When</th>
                  <th className="px-4 py-3 font-medium md:px-5">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {recentOrders.map((row) => (
                  <tr
                    key={row.id}
                    className="bg-card text-foreground transition hover:bg-muted/30"
                  >
                    <td className="whitespace-nowrap px-4 py-3 font-mono text-xs md:px-5">
                      {row.id}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 md:px-5">
                      {row.customer}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 tabular-nums md:px-5">
                      {row.amount}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 md:px-5">
                      <span className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                        {row.channel}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 md:px-5">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${orderStatusClass(row.status)}`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-muted-foreground md:px-5">
                      {row.time}
                    </td>
                    <td className="px-4 py-3 align-top md:px-5">
                      <div className="flex min-w-34 flex-col gap-1.5 sm:min-w-0 sm:flex-row sm:flex-wrap">
                        <button
                          type="button"
                          className="rounded-md bg-primary px-2.5 py-1.5 text-xs font-medium text-primary-foreground shadow-sm transition cursor-pointer hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:py-1"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center justify-center gap-1 rounded-md border border-border bg-background px-2.5 py-1.5 text-xs font-medium text-foreground transition cursor-pointer hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:py-1"
                        >
                          <PrinterIcon className="size-3.5" aria-hidden />
                          Print
                        </button>
                        <button
                          type="button"
                          className="rounded-md border border-border px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition cursor-pointer hover:bg-destructive/10 hover:text-destructive focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:py-1"
                        >
                          Refund
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="space-y-6">
          <section
            className="rounded-xl border border-border bg-card p-4 shadow-sm sm:p-5"
            aria-labelledby="cashflow-heading"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3
                  id="cashflow-heading"
                  className="text-base font-semibold text-foreground"
                >
                  Settlement snapshot
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Card batches vs cash drawer
                </p>
              </div>
              <BanknotesIcon
                className="size-8 shrink-0 text-primary opacity-90"
                aria-hidden
              />
            </div>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Card (settled)</dt>
                <dd className="font-semibold tabular-nums text-foreground">
                  $3,120.00
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Cash drawer</dt>
                <dd className="font-semibold tabular-nums text-foreground">
                  $1,166.40
                </dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-border pt-3">
                <dt className="font-medium text-foreground">Pending capture</dt>
                <dd className="font-semibold tabular-nums text-primary">
                  $412.80
                </dd>
              </div>
            </dl>
          </section>

          <section
            className="rounded-xl border border-amber-500/35 bg-card p-4 shadow-sm sm:p-5"
            aria-labelledby="stock-heading"
          >
            <div className="flex items-start gap-3">
              <ExclamationTriangleIcon
                className="size-6 shrink-0 text-amber-600 dark:text-amber-400"
                aria-hidden
              />
              <div>
                <h3
                  id="stock-heading"
                  className="text-base font-semibold text-foreground"
                >
                  Low stock
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Reorder before shelves run dry
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {lowStockItems.map((item) => (
                <li
                  key={item.sku}
                  className="flex items-center justify-between gap-2 rounded-lg border border-border bg-muted/30 px-3 py-2"
                >
                  <span className="min-w-0 truncate font-medium text-foreground">
                    {item.name}
                  </span>
                  <span className="shrink-0 tabular-nums text-muted-foreground">
                    {item.qty} left
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section
            className="rounded-xl border border-border bg-card p-4 shadow-sm sm:p-5"
            aria-labelledby="top-products-heading"
          >
            <h3
              id="top-products-heading"
              className="text-base font-semibold text-foreground"
            >
              Top movers (7d)
            </h3>
            <ul className="mt-4 space-y-3">
              {topProducts.map((p, i) => (
                <li
                  key={p.name}
                  className="flex items-center justify-between gap-3 text-sm"
                >
                  <span className="flex min-w-0 items-center gap-2">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-primary/15 text-xs font-semibold text-primary">
                      {i + 1}
                    </span>
                    <span className="truncate text-foreground">{p.name}</span>
                  </span>
                  <span className="shrink-0 tabular-nums text-muted-foreground">
                    {p.units} · {p.rev}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section
            className="rounded-xl border border-dashed border-border bg-muted/20 p-4 sm:p-5"
            aria-labelledby="hours-heading"
          >
            <div className="flex items-center gap-2">
              <ClockIcon
                className="size-5 text-muted-foreground"
                aria-hidden
              />
              <h3
                id="hours-heading"
                className="text-sm font-semibold text-foreground"
              >
                Peak hours (today)
              </h3>
            </div>
            <div className="mt-4 flex h-24 items-end gap-1.5">
              {peakHourHeights.map((heightPercent, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm bg-primary/80"
                  style={{ height: `${heightPercent}%` }}
                  title={`Slot ${i + 1}`}
                />
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Placeholder bars — replace with a chart when you add analytics.
            </p>
          </section>

          <section
            className="rounded-xl border border-border bg-linear-to-br from-vibrant-start/30 to-vibrant-end/20 p-4 text-foreground shadow-sm sm:p-5"
            aria-labelledby="quick-heading"
          >
            <div className="flex items-center gap-2">
              <CubeIcon className="size-5" aria-hidden />
              <h3 id="quick-heading" className="font-semibold">
                Quick actions
              </h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                className="rounded-lg bg-background/90 px-3 py-2 text-sm font-medium text-foreground shadow-sm ring-1 ring-border transition hover:bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                New POS sale
              </button>
              <button
                type="button"
                className="rounded-lg bg-background/90 px-3 py-2 text-sm font-medium text-foreground shadow-sm ring-1 ring-border transition hover:bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Register payout
              </button>
              <button
                type="button"
                className="rounded-lg bg-background/90 px-3 py-2 text-sm font-medium text-foreground shadow-sm ring-1 ring-border transition hover:bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                End of day
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
