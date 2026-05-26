import { setRequestLocale } from "next-intl/server";
import { Link } from "@/lib/navigation";

export default async function CartographiePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <article className="mx-auto max-w-4xl px-6 py-20 lg:px-12 lg:py-32">
      <Link href="/la-methode" className="eyebrow text-ink-muted hover:text-oxblood">
        ← La méthode
      </Link>

      <h1 className="mt-8 font-display text-5xl leading-tight tracking-tight md:text-7xl">
        La <em className="text-oxblood">cartographie</em>
      </h1>
      <p className="mt-6 max-w-2xl font-display text-xl italic leading-relaxed text-ink-muted md:text-2xl">
        Une cartographie 3D du corps humain sur les pieds — bébé en siège décomplété.
      </p>

      <div className="rule mt-12" />

      <section className="mt-12 space-y-5 text-lg leading-relaxed text-ink-muted">
        <p>
          Les cartographies classiques — en 2D des zones réflexes sur les pieds — ne
          permettent pas de représenter fidèlement la complexité tridimensionnelle du
          corps humain.
        </p>

        <h2 className="mt-12 font-display text-2xl tracking-tight text-ink md:text-3xl">
          Absence de profondeur et de perspective
        </h2>
        <p>
          La 2D ne permet pas de visualiser la profondeur ou la position relative des
          organes par rapport aux autres structures corporelles. Cette limitation peut
          restreindre la compréhension globale des interactions entre les différentes
          zones réflexes.
        </p>

        <h2 className="mt-12 font-display text-2xl tracking-tight text-ink md:text-3xl">
          Une cartographie 3D, couplée à de solides compétences anatomiques
        </h2>
        <p>
          Cette approche est privilégiée dans des méthodes comme la Réflexothérapie
          Occipito-Podale. Elle permet une meilleure précision dans l'identification et
          la stimulation des zones réflexes, facilitant ainsi une prise en charge plus
          efficace des dysfonctionnements corporels.
        </p>

        <ul className="mt-8 space-y-4">
          <li className="border-l border-oxblood/40 pl-6">
            <strong className="font-medium text-ink">Intervention non invasive :</strong>{" "}
            en agissant à distance de la zone en dysfonction, notre méthode est totalement
            indolore et élimine tout risque d'effet indésirable ou iatrogène.
          </li>
          <li className="border-l border-oxblood/40 pl-6">
            <strong className="font-medium text-ink">Sécurité et confort :</strong> cette
            approche garantit une grande sécurité et un confort optimal pour le client,
            même dans des cas de douleurs aiguës comme le torticolis, le lumbago ou les
            névralgies — elle permet de soulager sans aggraver la douleur.
          </li>
        </ul>

        <h2 className="mt-12 font-display text-2xl tracking-tight text-ink md:text-3xl">
          Le bébé en siège décomplété
        </h2>
        <p>
          Pourquoi est-ce notre représentation favorite du corps humain sur les pieds ?
          En position fœtale, les membres du corps sont aussi représentés sur le pied,
          aux côtés des autres organes.
        </p>

        <p className="mt-12 italic text-ink-soft">
          Schémas anatomiques et cartographies illustrées en cours d'intégration.
        </p>
      </section>
    </article>
  );
}
