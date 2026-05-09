import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import formations from "@/data/formations.json";

export function NextTrainings() {
  const t = useTranslations("home");

  // Show next 3 upcoming formations (sorted by start date)
  const upcoming = [...formations]
    .filter((f) => new Date(f.startDate) >= new Date())
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
    .slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
      <div className="flex items-end justify-between">
        <div>
          <p className="eyebrow">{t("trainings_eyebrow")}</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
            {t("trainings_title")}
          </h2>
        </div>
        <Link
          href="/formations"
          className="hidden text-sm tracking-wide text-oxblood hover:text-oxblood-deep md:inline-flex"
        >
          {t("trainings_link")}
        </Link>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {upcoming.map((f) => (
          <article
            key={f.slug}
            className="group relative flex flex-col border-t border-ink-soft/30 pt-6 transition-colors hover:border-oxblood"
          >
            <p className="font-mono text-xs text-oxblood">{f.code}</p>
            <h3 className="mt-3 font-display text-2xl leading-tight">{f.title}</h3>
            <p className="mt-3 text-sm text-ink-muted">{f.location}</p>
            <p className="mt-2 font-mono text-xs text-ink">
              {formatDateRange(f.startDate, f.endDate)}
            </p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted line-clamp-3">
              {f.summary}
            </p>
            <Link
              href={`/formations/${f.slug}`}
              className="mt-6 text-sm text-oxblood group-hover:text-oxblood-deep"
            >
              Programme →
            </Link>
          </article>
        ))}
      </div>

      <Link
        href="/formations"
        className="mt-12 inline-flex text-sm tracking-wide text-oxblood md:hidden"
      >
        {t("trainings_link")}
      </Link>
    </section>
  );
}

function formatDateRange(start: string, end: string) {
  const s = new Date(start);
  const e = new Date(end);
  const fmt = (d: Date) =>
    d.toLocaleDateString("fr-FR", { day: "numeric", month: "long" });
  if (s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear()) {
    return `${s.getDate()} – ${fmt(e)} ${s.getFullYear()}`;
  }
  return `${fmt(s)} – ${fmt(e)} ${s.getFullYear()}`;
}
