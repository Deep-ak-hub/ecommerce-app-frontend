type AdminFeatureShellProps = {
  title: string;
  description?: string;
};

export function AdminFeatureShell({
  title,
  description,
}: AdminFeatureShellProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      {description ? (
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
