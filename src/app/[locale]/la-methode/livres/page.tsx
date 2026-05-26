import { setRequestLocale } from "next-intl/server";

const books = [
  {
    num: "I",
    title: "Réflexothérapie occipito-podale — Système ostéo-musculo-articulaire",
    publisher: "Éditions Elsevier-Masson",
    href: "https://www.amazon.fr/-/en/R%C3%A9flexoth%C3%A9rapie-occipito-podale-Guy-Boitout/dp/2294743814",
  },
  {
    num: "II",
    title: "Réflexothérapie occipito-podale — Système neuro-méningé",
    publisher: "Éditions Elsevier-Masson",
    href: "https://www.amazon.fr/-/en/R%C3%A9flexoth%C3%A9rapie-occipito-podale-syst%C3%A8me-neuro-m%C3%A9ning%C3%A9-Boitout/dp/2294775791",
  },
  {
    num: "III",
    title: "Réflexothérapie occipito-podale et viscères des cavités abdominale et pelvienne",
    publisher: "2026 · Site dédié",
    href: "https://rop-pi.vercel.app",
    featured: true,
  },
];

export default async function LivresPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <article className="mx-auto max-w-5xl px-6 py-20 lg:px-12 lg:py-32">
      <p className="eyebrow rise">Bibliographie</p>
      <h1 className="rise rise-delay-1 mt-6 font-display text-5xl leading-tight tracking-tight md:text-7xl">
        Trois <em className="text-oxblood">ouvrages</em>
      </h1>
      <p className="rise rise-delay-2 mt-8 max-w-3xl font-display text-xl italic leading-relaxed text-ink-muted md:text-2xl">
        Guy Boitout &amp; Jean-Pierre Vadala — Éditions Elsevier-Masson.
      </p>

      <div className="mt-20 space-y-8">
        {books.map((b) => (
          <a
            key={b.num}
            href={b.href}
            target="_blank"
            rel="noreferrer"
            className={`group flex items-start gap-8 border-t border-ink-soft/30 pt-8 transition-colors hover:border-oxblood ${
              b.featured ? "border-t-oxblood" : ""
            }`}
          >
            <p className="font-display text-6xl italic text-oxblood">{b.num}</p>
            <div className="flex-1">
              <h2 className="font-display text-2xl leading-tight md:text-3xl">
                {b.title}
              </h2>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
                {b.publisher}
              </p>
              <p className="mt-3 text-sm text-oxblood group-hover:text-oxblood-deep">
                Consulter ↗
              </p>
            </div>
          </a>
        ))}
      </div>
    </article>
  );
}
