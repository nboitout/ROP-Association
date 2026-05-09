import { setRequestLocale } from "next-intl/server";

const systems = [
  "L'appareil locomoteur",
  "Le système hormonal",
  "Le système cardio-circulatoire",
  "Le système ORL et pulmonaire",
  "Le système nerveux cérébro-spinal — traumatisme des nerfs crâniens et des nerfs rachidiens",
  "Le système digestif",
  "La peau",
  "Le système urinaire",
  "Le système génital",
  "Les organes sensoriels",
  "Les céphalées de tension, migraines",
  "Les troubles psycho-fonctionnels ou psycho-somatiques",
  "Les whiplashs traumatiques (coup du lapin) et les chocs émotionnels",
  "La petite enfance",
];

export default async function IndicationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <article className="mx-auto max-w-4xl px-6 py-20 lg:px-12 lg:py-32">
      <p className="eyebrow rise">Cliniques</p>
      <h1 className="rise rise-delay-1 mt-6 font-display text-5xl leading-tight tracking-tight md:text-7xl">
        Les <em className="text-oxblood">indications</em>
      </h1>

      <p className="rise rise-delay-2 mt-8 max-w-3xl font-display text-xl italic leading-relaxed text-ink-muted md:text-2xl">
        La R.O.P. est une technique non médicamenteuse qui peut intervenir dans les cas
        de douleurs et de troubles fonctionnels.
      </p>

      <div className="rule mt-16" />

      <blockquote className="mt-16 border-l-2 border-oxblood pl-6 font-display text-xl italic leading-relaxed text-ink md:text-2xl">
        « Le besoin fondamental pour le praticien est de considérer l'individu qui a la
        maladie, plutôt que la maladie qui atteint l'individu. »
        <footer className="mt-3 text-sm not-italic text-ink-soft">
          — Harold Yves Magoun, ostéopathe américain
        </footer>
      </blockquote>

      <section className="mt-16 space-y-5 text-lg leading-relaxed text-ink-muted">
        <p>
          L'être humain est biologiquement programmé pour répondre à une situation de
          stress en mettant en marche les mécanismes d'adaptation (ou{" "}
          <em>mécanisme de stress</em>). La maladie est la conséquence de l'échec du
          mécanisme d'adaptation face à une situation de stress. Notre rôle est de
          renforcer la santé pour prévenir ou combattre la maladie.
        </p>
        <p className="font-medium text-ink">
          Tous les systèmes de l'organisme peuvent être concernés :
        </p>
      </section>

      <ul className="mt-8 grid gap-3 md:grid-cols-2">
        {systems.map((s, i) => (
          <li key={s} className="flex gap-4 border-l border-oxblood/40 pl-4">
            <span className="font-mono text-xs text-oxblood">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-base leading-relaxed text-ink">{s}</span>
          </li>
        ))}
      </ul>

      <section className="mt-16 space-y-5 text-lg leading-relaxed text-ink-muted">
        <p>
          La R.O.P. ne prétend pas remplacer la médecine, mais elle a sa place dans le
          vaste champ complémentaire à la médecine allopathique. Elle fait partie des
          médecines dites maintenant <em>intégratives</em>.
        </p>
        <p className="font-display text-xl italic text-ink">
          La R.O.P. a, non seulement, un rôle de soulagement mais également un rôle
          préventif car elle est en avance sur l'apparition des symptômes : les zones
          réflexes sont présentes avant que le patient n'en prenne conscience par les
          symptômes.
        </p>
      </section>

      <div className="rule mt-20" />

      <section className="mt-16">
        <h2 className="font-display text-3xl tracking-tight md:text-4xl">
          Les <em className="text-oxblood">contre-indications</em>
        </h2>

        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-muted">
          <p>
            Plutôt que de contre-indications, ce sont le plus souvent des{" "}
            <em>non-indications</em>.
          </p>
          <p>
            Agissant à distance, à partir des pieds et de la région occipitale, loin de
            l'organe malade, il n'y a pas à proprement parler de danger à pratiquer la
            R.O.P.
          </p>
          <p>
            Celle-ci ne doit pas cependant se substituer à d'autres thérapies dans les
            maladies graves (anomalies congénitales, ulcères, cancers, maladies
            dégénératives et auto-immunes — sclérose en plaques, Parkinson, Alzheimer,
            etc.) mais elle peut les accompagner pour réduire les effets secondaires des
            traitements, réduire les troubles fonctionnels et apporter un réconfort
            physique et psychique.
          </p>
        </div>
      </section>
    </article>
  );
}
