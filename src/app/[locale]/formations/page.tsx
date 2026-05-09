import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";
import formations from "@/data/formations.json";

const TYPE_COLORS: Record<string, string> = {
  base: "border-oxblood text-oxblood",
  postgrad: "border-moss text-moss",
  initiation: "border-stone text-ink-muted",
};

export default async function FormationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("trainings");

  const upcoming = [...formations]
    .filter((f) => new Date(f.endDate) >= new Date())
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

  // Group by month for calendar feel
  const byMonth = new Map<string, typeof formations>();
  for (const f of upcoming) {
    const d = new Date(f.startDate);
    const key = d.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
    if (!byMonth.has(key)) byMonth.set(key, []);
    byMonth.get(key)!.push(f);
  }

  return (
    <article className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-32">
      <p className="eyebrow rise">Calendrier 2026</p>
      <h1 className="rise rise-delay-1 mt-6 font-display text-5xl leading-tight tracking-tight md:text-7xl">
        {t("title")}
      </h1>
      <p className="rise rise-delay-2 mt-8 max-w-3xl font-display text-xl italic leading-relaxed text-ink-muted md:text-2xl">
        {t("intro")}
      </p>

      <div className="rule mt-16" />

      <div className="mt-16 space-y-16">
        {Array.from(byMonth.entries()).map(([month, items]) => (
          <section key={month}>
            <h2 className="font-display text-3xl capitalize tracking-tight text-ink-muted">
              {month}
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {items.map((f) => (
                <Link
                  key={f.slug}
                  href={`/formations/${f.slug}`}
                  className="group flex flex-col border-t border-ink-soft/30 pt-6 transition-colors hover:border-oxblood"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-block border px-2 py-1 font-mono text-[10px] uppercase tracking-widest ${TYPE_COLORS[f.type] ?? TYPE_COLORS.initiation}`}
                    >
                      {t(`type_${f.type}` as "type_base" | "type_postgrad" | "type_initiation")}
                    </span>
                    <span className="font-mono text-xs text-ink">{f.code}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl leading-tight">{f.title}</h3>
                  <p className="mt-3 text-sm text-ink-muted">{f.location}</p>
                  <p className="mt-1 font-mono text-xs text-ink">
                    {formatDateRange(f.startDate, f.endDate)}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted line-clamp-3">
                    {f.summary}
                  </p>
                  <span className="mt-6 text-sm text-oxblood group-hover:text-oxblood-deep">
                    Programme &amp; inscription →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
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
