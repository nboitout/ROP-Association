import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Link } from "@/lib/navigation";
import { postgrads, findPostgrad, formatDateRange } from "@/lib/courses";
import { specialtyLabel } from "@/lib/specialties";

export function generateStaticParams() {
  return postgrads().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = findPostgrad(slug);
  if (!course) return {};
  return { title: course.title, description: course.summary };
}

export default async function PostgradDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("training");

  const course = findPostgrad(slug);
  if (!course) notFound();

  const upcoming = course.cycles.filter((cy) => new Date(cy.end_date) >= new Date());

  return (
    <article className="mx-auto max-w-4xl px-6 py-20 lg:px-12 lg:py-32">
      <Link href="/se-former/post-gradues" className="eyebrow text-ink-muted hover:text-oxblood">
        {t("back_to_list")}
      </Link>

      <p className="eyebrow mt-8 text-moss">{course.subtitle}</p>
      <h1 className="mt-3 font-display text-5xl leading-tight tracking-tight md:text-7xl">
        {course.title}
      </h1>

      <p className="mt-10 max-w-3xl text-lg leading-relaxed text-ink-muted">
        {course.full_description ?? course.summary}
      </p>

      <div className="mt-10 grid gap-6 border-y border-ink-soft/30 py-6 md:grid-cols-2">
        <div>
          <p className="eyebrow">{t("prereq_label")}</p>
          <p className="mt-2 text-base text-ink">
            {course.prerequisites.length === 0
              ? t("prereq_none")
              : course.prerequisites.includes("formation-de-base")
                ? "Formation de base R.O.P."
                : course.prerequisites.join(", ")}
          </p>
        </div>
        {course.specialty_tags.length > 0 && (
          <div>
            <p className="eyebrow">Spécialités couvertes</p>
            <p className="mt-2 text-base text-ink">
              {course.specialty_tags
                .map((s) => specialtyLabel(s, locale === "en" ? "en" : "fr"))
                .join(" · ")}
            </p>
          </div>
        )}
      </div>

      <section className="mt-12">
        <h2 className="font-display text-2xl tracking-tight">{t("cycles_title")}</h2>
        {upcoming.length === 0 ? (
          <p className="mt-4 italic text-ink-muted">{t("no_upcoming")}</p>
        ) : (
          <ul className="mt-6 divide-y divide-ink-soft/20">
            {upcoming.map((cy, i) => (
              <li key={i} className="grid gap-2 py-5 md:grid-cols-[200px_1fr_auto] md:items-center md:gap-8">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-oxblood">
                  {formatDateRange(cy.start_date, cy.end_date)}
                </p>
                <p className="text-base text-ink">{cy.city}</p>
                <p className="text-sm text-ink-muted">{cy.price}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-12 border border-oxblood/40 bg-oxblood/5 p-8">
        <p className="eyebrow">{t("registration_title")}</p>
        <Link
          href="/contact"
          className="mt-4 inline-flex items-center justify-center rounded-md bg-oxblood px-8 py-3 text-sm font-medium tracking-wide text-parchment-light transition-colors hover:bg-oxblood-deep"
        >
          {t("register_button")} →
        </Link>
      </section>
    </article>
  );
}
