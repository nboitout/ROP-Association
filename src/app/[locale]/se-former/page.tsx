import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";
import { baseCourse, postgrads, initiations, allUpcomingCycles, formatDateRange } from "@/lib/courses";

export default async function TrainingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("training");

  const base = baseCourse();
  const upcoming = allUpcomingCycles().slice(0, 6);

  return (
    <article className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-32">
      <h1
        className="rise rise-delay-1 font-display text-5xl leading-tight tracking-tight md:text-7xl"
        dangerouslySetInnerHTML={{ __html: t.raw("title_html") as string }}
      />
      <p className="rise rise-delay-2 mt-8 max-w-3xl font-display text-xl italic leading-relaxed text-ink-muted md:text-2xl">
        {t("intro")}
      </p>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        <TrackCard
          eyebrow={t("type_base")}
          title={base?.title ?? "Formation de base"}
          body={base?.summary ?? ""}
          href="/se-former/formation-de-base"
          cta={t("see_base")}
          accent="oxblood"
        />
        <TrackCard
          eyebrow={t("type_postgrad")}
          title="Catalogue des post-gradués"
          body={`${postgrads().length} modules cliniques pour approfondir après la formation de base.`}
          href="/se-former/post-gradues"
          cta={t("see_postgrads")}
          accent="moss"
        />
        <TrackCard
          eyebrow={t("type_initiation")}
          title="Initiations & présentations"
          body={`${initiations().length} week-ends d'introduction, ouverts à un public élargi.`}
          href="/se-former/initiations"
          cta={t("see_initiations")}
          accent="stone"
        />
      </div>

      <section className="mt-24">
        <div className="flex items-end justify-between gap-4 border-b border-ink-soft/30 pb-4">
          <h2 className="font-display text-3xl tracking-tight">{t("cycles_title")}</h2>
          <Link href="/se-former/calendrier" className="text-sm text-oxblood hover:text-oxblood-deep">
            {t("see_calendar")} →
          </Link>
        </div>

        <ul className="mt-8 divide-y divide-ink-soft/20">
          {upcoming.map((cy, i) => (
            <li key={i} className="grid gap-3 py-5 md:grid-cols-[160px_1fr_auto] md:items-center md:gap-8">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-oxblood">
                {formatDateRange(cy.start_date, cy.end_date)}
              </p>
              <div>
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
              </div>
              <span className="text-sm text-ink-muted">{cy.price}</span>
            </li>
          ))}
          {upcoming.length === 0 && (
            <li className="py-8 text-center italic text-ink-muted">{t("no_upcoming")}</li>
          )}
        </ul>
      </section>
    </article>
  );
}

function TrackCard({
  eyebrow, title, body, href, cta, accent,
}: {
  eyebrow: string; title: string; body: string; href: string; cta: string; accent: "oxblood" | "moss" | "stone";
}) {
  const accentText = accent === "oxblood" ? "text-oxblood" : accent === "moss" ? "text-moss" : "text-ink-muted";
  return (
    <Link href={href} className="group flex flex-col border border-ink-soft/30 bg-parchment-light p-8 transition-colors hover:border-oxblood">
      <p className={`eyebrow ${accentText}`}>{eyebrow}</p>
      <h3 className="mt-3 font-display text-2xl leading-tight tracking-tight">{title}</h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">{body}</p>
      <span className={`mt-6 text-sm tracking-wide ${accentText}`}>{cta} →</span>
    </Link>
  );
}
