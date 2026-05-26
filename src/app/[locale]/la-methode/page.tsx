import { setRequestLocale } from "next-intl/server";
import { Link } from "@/lib/navigation";

export default async function MethodePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <article className="mx-auto max-w-4xl px-6 py-20 lg:px-12 lg:py-32">
      <p className="eyebrow rise">La méthode</p>
      <h1 className="rise rise-delay-1 mt-6 font-display text-5xl leading-tight tracking-tight md:text-7xl">
        La méthode <em className="text-oxblood">R.O.P.</em>
      </h1>

      <div className="rule mt-12" />

      <section className="mt-12">
        <h2 className="font-display text-2xl tracking-tight md:text-3xl">
          La Réflexologie Occipito-Podale s'adresse :
        </h2>

        <ul className="mt-8 space-y-6">
          <li className="border-l border-oxblood/40 pl-6">
            <p className="text-lg leading-relaxed text-ink">
              <strong className="font-medium">Aux professionnels de santé :</strong>{" "}
              <span className="text-ink-muted">
                la Réflexologie Occipito-Podale est spécialement conçue pour les
                kinésithérapeutes, infirmières et ostéopathes, offrant un outil
                complémentaire à forte vocation thérapeutique.
              </span>
            </p>
          </li>
          <li className="border-l border-oxblood/40 pl-6">
            <p className="text-lg leading-relaxed text-ink">
              <strong className="font-medium">Aux réflexologues et naturopathes :</strong>{" "}
              <span className="text-ink-muted">
                cette méthode est également ouverte à ceux qui souhaitent explorer son
                potentiel exceptionnel pour combattre efficacement les états de stress.
              </span>
            </p>
          </li>
        </ul>

        <div className="mt-10 space-y-5 text-lg leading-relaxed text-ink-muted">
          <p>
            Chacun a pu faire l'expérience que les massages des pieds et de l'arrière de
            la tête (l'occiput) sont parmi les plus relaxants, et ce n'est pas un
            hasard.
          </p>
          <p>
            Ces deux zones possèdent une connexion intime avec le système nerveux central,
            ce qui leur confère un rôle unique pour activer un bien-être global.
          </p>
          <p>
            Les pieds, riches en terminaisons nerveuses, permettent à la réflexologie de
            stimuler des points spécifiques reliés à différentes parties du corps, offrant
            ainsi une approche non invasive pour harmoniser les fonctions corporelles. En
            outre, ces massages favorisent la circulation sanguine et lymphatique, tout en
            induisant une relaxation profonde.
          </p>
          <p>
            L'occiput, quant à lui, constitue une zone stratégique pour accéder à la
            formation réticulée du tronc cérébral, un centre névralgique régulant des
            fonctions autonomes comme la respiration et le rythme cardiaque. Les massages
            de cette région permettent de libérer les tensions musculaires, d'améliorer la
            communication entre le cerveau et le reste du corps, et de soulager le stress.
          </p>
          <p>
            En stimulant cette zone, on agit directement sur le système nerveux central,
            ce qui en fait une technique puissante pour rétablir un équilibre global.
            Ainsi, un massage combinant techniques sur les pieds et l'occiput permet
            d'induire des bienfaits profonds et durables.
          </p>
        </div>
      </section>

      <div className="rule mt-20" />

      <section className="mt-16">
        <h2 className="font-display text-3xl tracking-tight md:text-4xl">
          L'origine de la <em className="text-oxblood">Réflexologie Occipito-Podale</em>
        </h2>

        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-muted">
          <p>
            Depuis des milliers d'années, les humains ont observé que stimuler certaines
            zones du corps pouvait soulager la douleur et améliorer le fonctionnement des
            différents systèmes biologiques. Bien qu'ils ne comprenaient pas encore les
            mécanismes réflexes mis en œuvre, ces pratiques ont été utilisées de manière
            empirique dans de nombreuses civilisations.
          </p>
          <p>
            La réflexologie moderne, telle que nous la connaissons, a été définie en 1951
            par <strong className="font-medium text-ink">Eunice Ingham</strong>, une
            kinésithérapeute américaine. Elle a popularisé cette méthode en publiant deux
            ouvrages, <em>Stories the Feet Can Tell</em> (1938) et{" "}
            <em>Stories the Feet Had Told</em> (1951), qui décrivent comment le massage
            des pieds peut influencer le bien-être global.
          </p>
          <p>
            En France, <strong className="font-medium text-ink">Guy Boitout</strong> alors
            kinésithérapeute, a découvert la méthode d'Ingham en 1978 grâce à Martine
            Faure-Alderson qui enseigne la technique Ingham à Paris et à Londres. Guy
            devient rapidement son assistante et ensuite enseignant à part entière.
          </p>
          <p>
            <strong className="font-medium text-ink">Jean-Pierre Vadala</strong> s'est
            aussi formé à cette technique en 1992, et il enseigne aux côtés de Martine et
            de Guy à partir de 1994. Guy poursuit en parallèle des études d'ostéopathie
            entre 1988 et 1995 au Collège International d'Ostéopathie (CIDO — Saint-Étienne
            et Maidstone, Royaume-Uni).
          </p>
          <p>
            Ensemble, Guy et Jean-Pierre ont montré que les techniques de réflexologie
            améliorent les dysfonctionnements vertébraux et viscéraux, tout en offrant
            des effets relaxants. Cependant, ils ont également constaté certaines limites
            dans le traitement des troubles ostéo-musculo-articulaires, ce qui les a
            conduits à revoir la cartographie des pieds de la réflexologie « classique » —
            ce qui a donné naissance plus tard à la Réflexothérapie Occipito-Podale.
          </p>
        </div>
      </section>

      <div className="rule mt-20" />

      <section className="mt-16">
        <h2 className="font-display text-3xl tracking-tight md:text-4xl">
          Une approche révisée pour plus de précision
        </h2>

        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-muted">
          <p>
            Au fil des pratiques, il est devenu évident que la cartographie des zones
            réflexes développée par Eunice Ingham comportait des erreurs, notamment dans
            sa représentation du système ostéo-musculo-articulaire. De plus, les fondements
            théoriques et les mécanismes d'action de la réflexologie classique n'étaient
            pas scientifiquement prouvés, ce qui a poussé les deux praticiens à chercher
            une approche plus rigoureuse.
          </p>
          <p>
            Ils ont alors développé une méthode fondée sur des bases scientifiques solides,
            s'appuyant sur l'embryologie et la neurophysiologie. Cette nouvelle approche
            inclut une cartographie en 3D, fidèle à l'anatomie réelle, validée par des
            comparaisons cliniques entre tests ostéopathiques et réflexologiques. Elle
            s'accompagne d'une technique spécifique ciblant les mécano-récepteurs situés
            dans les couches superficielles de la peau, afin de transmettre des
            informations aux centres nerveux supérieurs et d'aider à corriger les
            dysfonctionnements du corps.
          </p>
          <p>
            Cette méthode intègre également des zones réflexes situées à l'arrière de la
            tête (l'occiput), en lien direct avec la formation réticulée du tronc
            cérébral, un relais essentiel pour les informations sensitives entre les pieds
            et le cerveau.
          </p>
          <p className="border-l-2 border-oxblood pl-6 font-display text-xl italic text-ink">
            Ces avancées ont abouti en 1998 à la création de la Réflexothérapie
            Occipito-Podale, et en 2000 à la fondation de l'Association Française de
            Réflexologie (AFR), dédiée à la promotion et à l'enseignement de cette
            nouvelle approche.
          </p>
        </div>
      </section>

      {/* Sub-pages */}
      <div className="rule mt-20" />

      <nav className="mt-16">
        <p className="eyebrow">Pour aller plus loin</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link
            href="/la-methode/fondements"
            className="group block border border-ink-soft/30 p-6 transition-colors hover:border-oxblood"
          >
            <p className="font-mono text-xs text-oxblood">§ 01</p>
            <h3 className="mt-2 font-display text-xl">Les fondements théoriques</h3>
            <p className="mt-2 text-sm text-ink-muted">
              Embryologie, neurophysiologie et concept holistique.
            </p>
          </Link>
          <Link
            href="/la-methode/technique"
            className="group block border border-ink-soft/30 p-6 transition-colors hover:border-oxblood"
          >
            <p className="font-mono text-xs text-oxblood">§ 02</p>
            <h3 className="mt-2 font-display text-xl">La technique de massage</h3>
            <p className="mt-2 text-sm text-ink-muted">
              Une technique manuelle réflexe spécifique, précise et non douloureuse.
            </p>
          </Link>
          <Link
            href="/la-methode/cartographie"
            className="group block border border-ink-soft/30 p-6 transition-colors hover:border-oxblood"
          >
            <p className="font-mono text-xs text-oxblood">§ 03</p>
            <h3 className="mt-2 font-display text-xl">La cartographie</h3>
            <p className="mt-2 text-sm text-ink-muted">
              Une cartographie 3D du corps humain — bébé en siège décomplété.
            </p>
          </Link>
        </div>
      </nav>
    </article>
  );
}
