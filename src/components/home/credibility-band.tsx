import { useTranslations } from "next-intl";

const PARTNERS = [
  { name: "Datadock", href: "https://www.data-dock.fr" },
  { name: "Syndicat Professionnel des Réflexologues", href: "https://syndicat-reflexologues.com" },
  { name: "Reflexology in Europe (RiEN)", href: "https://reflexology-europe.org" },
  { name: "Registre des Ostéopathes de France", href: "https://www.osteopathie.org/" },
];

export function CredibilityBand() {
  const t = useTranslations("home");
  const tSite = useTranslations("site");

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">{t("credibility_eyebrow")}</p>
          <h2
            className="mt-4 font-display text-3xl leading-tight tracking-tight md:text-4xl"
            dangerouslySetInnerHTML={{ __html: t.raw("credibility_title_html") as string }}
          />
          <p className="mt-6 text-base leading-relaxed text-ink-muted">
            {t("credibility_body")}
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">
            {tSite("agrement")}
          </p>
        </div>

        <div className="lg:col-span-7">
          <ul className="grid gap-px overflow-hidden border border-ink-soft/20 bg-ink-soft/20 sm:grid-cols-2">
            {PARTNERS.map((p) => (
              <li key={p.name} className="bg-parchment-light">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-full flex-col justify-between gap-4 px-6 py-8 transition-colors hover:bg-parchment"
                >
                  <p className="font-display text-lg leading-tight tracking-tight">
                    {p.name}
                  </p>
                  <span className="text-xs tracking-wide text-ink-soft">
                    {new URL(p.href).hostname.replace(/^www\./, "")} ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
