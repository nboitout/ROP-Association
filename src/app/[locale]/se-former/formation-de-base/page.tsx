import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/lib/navigation";
import { baseCourse, formatDateRange } from "@/lib/courses";

export default async function FormationDeBasePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("training");

  const course = baseCourse();
  if (!course) notFound();

  return (
    <article className="mx-auto max-w-4xl px-6 py-20 lg:px-12 lg:py-32">
      <Link href="/se-former" className="eyebrow text-ink-muted hover:text-oxblood">
        {t("back_to_list")}
      </Link>

      <p className="eyebrow mt-8 text-oxblood">{t("type_base")}</p>
      <h1
        className="mt-3 font-display text-5xl leading-tight tracking-tight md:text-7xl"
        dangerouslySetInnerHTML={{ __html: t.raw("base_title_html") as string }}
      />
      <p className="mt-6 font-display text-xl italic leading-relaxed text-ink-muted md:text-2xl">
        {course.subtitle}
      </p>

      <p className="mt-10 max-w-3xl text-lg leading-relaxed text-ink-muted">
        {course.full_description}
      </p>

      {course.agrement && (
        <p className="mt-6 inline-block border border-moss/40 bg-moss/5 px-4 py-2 text-xs uppercase tracking-[0.16em] text-moss">
          {course.agrement}
        </p>
      )}

      <section className="mt-16">
        <h2 className="font-display text-3xl tracking-tight">{t("cycles_title")}</h2>
        <ul className="mt-6 divide-y divide-ink-soft/20">
          {course.cycles.map((cy, i) => (
            <li key={i} className="grid gap-2 py-5 md:grid-cols-[200px_1fr_auto] md:items-center md:gap-8">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-oxblood">
                {formatDateRange(cy.start_date, cy.end_date)}
              </p>
              <p className="text-base text-ink">{cy.city}</p>
              <p className="text-sm text-ink-muted">{cy.price}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border border-oxblood/40 bg-oxblood/5 p-8">
        <p className="eyebrow">{t("registration_title")}</p>
        <p className="mt-3 text-base text-ink-muted">
          Pour vous inscrire ou recevoir le programme détaillé, écrivez à l'Institut.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-oxblood px-8 py-3 text-sm font-medium tracking-wide text-parchment-light transition-colors hover:bg-oxblood-deep"
        >
          {t("register_button")} →
        </Link>
      </section>
    </article>
  );
}
