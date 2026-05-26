import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";
import { initiations, formatDateRange } from "@/lib/courses";

export default async function InitiationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("training");

  const items = initiations();

  return (
    <article className="mx-auto max-w-5xl px-6 py-20 lg:px-12 lg:py-32">
      <Link href="/se-former" className="eyebrow text-ink-muted hover:text-oxblood">
        {t("back_to_list")}
      </Link>

      <h1
        className="mt-8 font-display text-5xl leading-tight tracking-tight md:text-7xl"
        dangerouslySetInnerHTML={{ __html: t.raw("initiations_title_html") as string }}
      />
      <p className="mt-8 max-w-3xl font-display text-xl italic leading-relaxed text-ink-muted md:text-2xl">
        {t("initiations_intro")}
      </p>

      <div className="mt-16 space-y-12">
        {items.map((c) => {
          const cy = c.cycles[0];
          return (
            <article key={c.slug} className="border-t border-ink-soft/30 pt-8">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-oxblood">
                {formatDateRange(cy.start_date, cy.end_date, locale === "en" ? "en-GB" : "fr-FR")}
              </p>
              <h2 className="mt-2 font-display text-3xl tracking-tight">{c.title}</h2>
              <p className="mt-2 text-base text-ink-muted">{cy.city}</p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-muted">
                {c.full_description ?? c.summary}
              </p>
              {(cy.contact_name || cy.contact_email || cy.contact_phone) && (
                <div className="mt-6 border-l-2 border-oxblood/40 pl-5 text-sm">
                  <p className="eyebrow">{t("registration_title")}</p>
                  {cy.contact_name && <p className="mt-2 font-display text-lg">{cy.contact_name}</p>}
                  {cy.contact_email && (
                    <a href={`mailto:${cy.contact_email}`} className="block text-oxblood hover:text-oxblood-deep">
                      {cy.contact_email}
                    </a>
                  )}
                  {cy.contact_phone && (
                    <a href={`tel:${cy.contact_phone.replace(/\s/g, "")}`} className="block font-mono text-xs text-ink">
                      {cy.contact_phone}
                    </a>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </article>
  );
}
