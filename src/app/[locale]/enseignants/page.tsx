import { setRequestLocale } from "next-intl/server";

export default async function EnseignantsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <article className="mx-auto max-w-4xl px-6 py-20 lg:px-12 lg:py-32">
      <p className="eyebrow rise">Équipe pédagogique</p>
      <h1 className="rise rise-delay-1 mt-6 font-display text-5xl leading-tight tracking-tight md:text-7xl">
        Les <em className="text-oxblood">enseignants</em>
      </h1>
      <p className="rise rise-delay-2 mt-8 max-w-3xl font-display text-xl italic leading-relaxed text-ink-muted md:text-2xl">
        Guy BOITOUT et Jean-Pierre VADALA sont les concepteurs de la Réflexo
        Occipito-Podale.
      </p>

      <div className="rule mt-16" />

      <section className="mt-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-oxblood">
          Concepteur · Enseignant
        </p>
        <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
          Guy <em>BOITOUT</em>
        </h2>

        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-muted">
          <p>
            Après l'obtention de son diplôme de masseur-kinésithérapeute en 1970, il
            s'intéresse très vite aux thérapies manuelles réflexes.
          </p>
          <p>
            Il étudie le massage du tissu conjonctif (méthode Dicke), puis se forme à la
            Réflexologie, méthode Ingham, en 1978. Il devient enseignant de cette méthode
            aux côtés de Martine Faure-Alderson.
          </p>
          <p>
            En 1988, il étudie l'ostéopathie au Collège International d'Ostéopathie de
            Saint-Étienne (42) et à l'European School of Osteopathy de Maidstone, Kent,
            Angleterre.
          </p>
          <p className="font-display text-xl italic text-ink">
            Guy est donc ostéopathe et réflexologue. Il assure l'enseignement de cette
            méthode.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="border border-ink-soft/30 bg-parchment-light/40 p-6">
            <p className="font-mono text-xs text-oxblood">2015</p>
            <h3 className="mt-2 font-display text-lg leading-tight">
              Réflexothérapie Occipito-Podale
            </h3>
            <p className="mt-2 text-sm text-ink-muted">
              par Guy BOITOUT et Jean-Pierre VADALA<br />
              Édition Elsevier-Masson
            </p>
          </div>
          <div className="border border-ink-soft/30 bg-parchment-light/40 p-6">
            <p className="font-mono text-xs text-oxblood">2021</p>
            <h3 className="mt-2 font-display text-lg leading-tight">
              Réflexothérapie Occipito-Podale et système neuro-méningé
            </h3>
            <p className="mt-2 text-sm text-ink-muted">
              par Guy BOITOUT et Jean-Pierre VADALA<br />
              Édition Elsevier-Masson
            </p>
          </div>
        </div>
      </section>

      <div className="rule mt-20" />

      <section className="mt-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-oxblood">
          Co-concepteur
        </p>
        <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
          Jean-Pierre <em>VADALA</em>
        </h2>

        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-muted">
          <p>
            Jean-Pierre est diplômé masseur-kinésithérapeute en 1974, spécialiste en
            thérapie manuelle et en micro-kinésithérapie.
          </p>
          <p>
            Jean-Pierre est non-voyant et possède une sensibilité sensorielle
            exceptionnelle au niveau des mains. Il se forme à la Réflexologie méthode
            Ingham en 1992.
          </p>
          <p>
            Leurs recherches communes les amènent à poser les bases théoriques d'une
            réflexologie moderne qu'ils appellent <em>Réflexo Occipito-Podale</em>{" "}
            (R.O.P.) en 1998.
          </p>
          <p className="font-display text-xl italic text-ink">
            Ensemble, ils fondent l'Association Française de Réflexologie en 2000, pour
            promouvoir et enseigner la R.O.P.
          </p>
        </div>
      </section>
    </article>
  );
}
