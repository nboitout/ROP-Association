import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";
import { allUpcomingCycles, formatDateRange } from "@/lib/courses";

export default async function CalendarPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("training");

  const cycles = allUpcomingCycles();

  const byMonth = new Map<string, typeof cycles>();
  for (const cy of cycles) {
    const d = new Date(cy.start_date);
    const key = d.toLocaleDateString(locale === "en" ? "en-GB" : "fr-FR", {
      month: "long",
      year: "numeric",
    });
    if (!byMonth.has(key)) byMonth.set(key, []);
    byMonth.get(key)!.push(cy);
  }

  return (
    <article className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-32">
      <Link href="/se-former" className="eyebrow text-ink-muted hover:text-oxblood">
        {t("back_to_list")}
      </Link>

      <h1
        className="mt-8 font-display text-5xl leading-tight tracking-tight md:text-7xl"
        dangerouslySetInnerHTML={{ __html: t.raw("calendar_title_html") as string }}
      />
      <p className="mt-8 max-w-3xl font-display text-xl italic leading-relaxed text-ink-muted md:text-2xl">
        {t("calendar_intro")}
      </p>

      <div className="mt-16 space-y-16">
        {Array.from(byMonth.entries()).map(([month, items]) => (
          <section key={month}>
            <h2 className="font-display text-3xl capitalize tracking-tight text-ink-muted">
              {month}
            </h2>
            <ul className="mt-6 divide-y divide-ink-soft/20 border-t border-ink-soft/30">
              {items.map((cy, i) => (
                <li key={i} className="grid gap-3 py-5 md:grid-cols-[200px_1fr_180px_auto] md:items-center md:gap-8">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-oxblood">
                    {formatDateRange(cy.start_date, cy.end_date, locale === "en" ? "en-GB" : "fr-FR")}
                  </p>
                  <Link
                    href={cy.course.type === "postgrad"
                      ? `/se-former/post-gradues/${cy.course.slug}`
                      : cy.course.type === "base"
                        ? "/se-former/formation-de-base"
                        : "/se-former/initiations"}
                    className="font-display text-lg hover:text-oxblood"
                  >
                    {cy.course.title}
                  </Link>
                  <p className="text-sm text-ink-muted">{cy.city}</p>
                  <p className="text-right text-sm text-ink-muted">{cy.price}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
        {cycles.length === 0 && (
          <p className="italic text-ink-muted">{t("no_upcoming")}</p>
        )}
      </div>
    </article>
  );
}
