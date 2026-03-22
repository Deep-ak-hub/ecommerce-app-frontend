type AdminPlaceholderPageProps = {
  title: string;
  description?: string;
};

export default function AdminPlaceholderPage({
  title,
  description = "This section is ready for your CMS modules and API integration.",
}: Readonly<AdminPlaceholderPageProps>) {
  return (
    <div className="rounded-xl border border-border bg-card p-8 text-center text-card-foreground shadow-sm md:p-12">
      <h2 className="text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
