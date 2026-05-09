import { setRequestLocale } from "next-intl/server";

export default async function RecherchePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <article className="mx-auto max-w-4xl px-6 py-20 lg:px-12 lg:py-32">
      <p className="eyebrow rise">Recherche</p>
      <h1 className="rise rise-delay-1 mt-6 font-display text-5xl leading-tight tracking-tight md:text-7xl">
        Recherche &amp; <em className="text-oxblood">publications</em>
      </h1>
      <p className="rise rise-delay-2 mt-8 max-w-3xl font-display text-xl italic leading-relaxed text-ink-muted md:text-2xl">
        Travaux cliniques, observations et publications autour de la méthode R.O.P.
      </p>

      <p className="mt-16 text-ink-muted">
        Section en cours de construction — articles, études de cas et bibliographies à venir.
      </p>
    </article>
  );
}
