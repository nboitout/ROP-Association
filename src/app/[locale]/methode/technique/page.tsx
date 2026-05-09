import { setRequestLocale } from "next-intl/server";
import { Link } from "@/lib/navigation";

export default async function TechniquePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <article className="mx-auto max-w-4xl px-6 py-20 lg:px-12 lg:py-32">
      <Link href="/methode" className="eyebrow text-ink-muted hover:text-oxblood">
        ← La méthode
      </Link>

      <h1 className="mt-8 font-display text-5xl leading-tight tracking-tight md:text-7xl">
        La <em className="text-oxblood">technique</em> de massage
      </h1>
      <p className="mt-6 max-w-2xl font-display text-xl italic leading-relaxed text-ink-muted md:text-2xl">
        Une technique manuelle réflexe spécifique. Un massage des zones réflexes précis,
        non agressif, et non douloureux.
      </p>

      <div className="rule mt-12" />

      <section className="mt-12 space-y-5 text-lg leading-relaxed text-ink-muted">
        <p>
          Notre technique fonctionne par écoute et induction des zones réflexes du
          revêtement cutané podal et occipital.
        </p>
        <p>
          Uniquement manuelle, sans adjuvant, outil ou matériel, elle est pratiquée avec
          la pulpe du pouce ou l'inter-phalangienne proximale de l'index.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl tracking-tight md:text-3xl">
          Les trois temps de la séance
        </h2>

        <div className="mt-8 space-y-8">
          <div className="border-l-2 border-oxblood/60 pl-6">
            <p className="font-mono text-xs text-oxblood">Temps 1</p>
            <h3 className="mt-2 font-display text-xl">Le diagnostic textural</h3>
            <p className="mt-3 leading-relaxed text-ink-muted">
              La modification de la texture de la peau avec, souvent, la perception
              palpable de micro-cristaux au niveau de la couche épidermo-dermique, signe
              l'existence d'une région du corps en dysfonction.
            </p>
          </div>
          <div className="border-l-2 border-oxblood/60 pl-6">
            <p className="font-mono text-xs text-oxblood">Temps 2</p>
            <h3 className="mt-2 font-display text-xl">L'action</h3>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Solliciter cette zone réflexe par une technique de massage spécifique,
              appliquée au niveau de la couche épidermo-dermique riche en
              mécano-récepteurs et point de départ de la boucle réflexe d'auto-régulation
              de la voie lemniscale, véhiculant la sensibilité tactile fine et épicritique
              de la non-douleur. Ainsi, la technique de massage à distance la plus
              appropriée doit être précise, non agressive et non douloureuse.
            </p>
          </div>
          <div className="border-l-2 border-oxblood/60 pl-6">
            <p className="font-mono text-xs text-oxblood">Temps 3</p>
            <h3 className="mt-2 font-display text-xl">Le « rien faire » et le « laisser faire »</h3>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Dans l'attente de la réponse des tissus cutanés.
            </p>
          </div>
        </div>

        <p className="mt-10 font-display text-xl italic leading-relaxed text-ink">
          Le but de ce massage est de déstructurer les boucles réflexes pathologiques
          passant par les voies extra-lemniscales. Le cerveau, réinformé, envoie les
          ordres correctifs nécessaires aux régions du corps en dysfonction.
        </p>
      </section>

      <div className="rule mt-20" />

      <section className="mt-16">
        <h2 className="font-display text-3xl tracking-tight md:text-4xl">
          Un exemple : le système <em className="text-oxblood">crânio-sacré</em>
        </h2>

        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-muted">
          <p>
            La découverte des zones réflexes du crâne et du sacrum sur les pieds met à
            jour la possibilité, par la Réflexo Occipito-Podale, de relancer le mécanisme
            respiratoire primaire du système crânio-sacré, resté jusqu'alors l'exclusivité
            de l'ostéopathie appliquée au champ crânien.
          </p>
          <p>
            Cette possibilité élargit de façon significative le champ d'action de la
            Réflexo Occipito-Podale aux nerfs crâniens, aux whiplashs traumatiques et
            émotionnels et aux troubles fonctionnels du nouveau-né en relation avec les
            traumatismes de la naissance.
          </p>
          <div className="border border-ink-soft/30 bg-parchment-light/60 p-6">
            <p className="font-medium text-ink">Exemple clinique : le foramen jugulaire</p>
            <p className="mt-3 leading-relaxed">
              C'est le passage de trois nerfs crâniens (IX, X, XI) et de la veine
              jugulaire. Cette zone est très importante à traiter chez les nourrissons qui
              souffrent de reflux gastriques et de coliques.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
