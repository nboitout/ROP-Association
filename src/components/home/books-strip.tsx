import { useTranslations } from "next-intl";

export function BooksStrip() {
  const t = useTranslations("home");

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">{t("books_eyebrow")}</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
            <em>Trois ouvrages</em> publiés
          </h2>
          <p className="mt-4 text-sm text-ink-muted">
            Éditions Elsevier-Masson · Guy Boitout &amp; Jean-Pierre Vadala
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 lg:col-span-8">
          <BookCard
            num="I"
            title="Système ostéo-musculo-articulaire"
            year="—"
            href="https://www.amazon.fr/-/en/R%C3%A9flexoth%C3%A9rapie-occipito-podale-Guy-Boitout/dp/2294743814"
            external
          />
          <BookCard
            num="II"
            title="Système neuro-méningé"
            year="—"
            href="https://www.amazon.fr/-/en/R%C3%A9flexoth%C3%A9rapie-occipito-podale-syst%C3%A8me-neuro-m%C3%A9ning%C3%A9-Boitout/dp/2294775791"
            external
          />
          <BookCard
            num="III"
            title="Viscères des cavités abdominale et pelvienne"
            year="2026"
            href="https://rop-pi.vercel.app"
            external
            featured
          />
        </div>
      </div>
    </section>
  );
}

function BookCard({
  num,
  title,
  year,
  href,
  external,
  featured,
}: {
  num: string;
  title: string;
  year: string;
  href: string;
  external?: boolean;
  featured?: boolean;
}) {
  const cls = featured
    ? "border-oxblood bg-oxblood/5"
    : "border-ink-soft/30 hover:border-oxblood";
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`group flex flex-col border ${cls} p-6 transition-colors`}
    >
      <p className="font-display text-3xl italic text-oxblood">{num}</p>
      <h3 className="mt-4 flex-1 font-display text-lg leading-tight">{title}</h3>
      <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
        {year}
        {external && <span className="ml-2">↗</span>}
      </p>
    </a>
  );
}
