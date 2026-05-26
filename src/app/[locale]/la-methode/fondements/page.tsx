import { setRequestLocale } from "next-intl/server";
import { Link } from "@/lib/navigation";

export default async function FondementsPage({
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
        Les <em className="text-oxblood">fondements théoriques</em>
      </h1>

      <div className="rule mt-12" />

      <section className="mt-12">
        <h2 className="font-display text-3xl tracking-tight">L'embryologie</h2>

        <blockquote className="mt-6 border-l-2 border-oxblood pl-6 font-display text-xl italic leading-relaxed text-ink">
          « Les organes sensoriels sont de réels prolongements embryologiques, innés de
          notre cerveau archaïque, acquis et entretenus de façon automatique. »
          <footer className="mt-3 text-sm not-italic text-ink-soft">
            — Guy Boitout et Jean-Pierre Vadala
          </footer>
        </blockquote>

        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-muted">
          <p>
            Le système nerveux, les épithéliums des organes sensoriels et la peau
            dérivent du même feuillet embryologique : l'ectoblaste.
          </p>
          <p>
            Les organes sensoriels (la peau incluse) ont, de la même manière que le
            cortex cérébral, conservé l'organisation topique du corps, ce que l'on appelle
            <em> somatotopie</em> et <em>viscérotopie</em>, obéissant à la loi, émise par
            le Professeur Jean Bossy, sur la conservation de l'organisation générale du
            système nerveux dans les centres, les faisceaux de substance blanche et à la
            périphérie au niveau des organes sensoriels.
          </p>
          <p>
            Comme le pavillon de l'oreille (l'auriculothérapie), l'iris de l'œil
            (l'iridologie) ou les fosses nasales (la sympathicothérapie endonasale), les
            pieds ont conservé cette organisation topique prenant l'apparence d'un bébé en
            siège décomplété.
          </p>
          <p className="font-display text-xl italic text-ink">
            Ainsi, les zones réflexes podales et occipitales sont de réels prolongements
            embryologiques de notre cerveau archaïque.
          </p>
        </div>
      </section>

      <div className="rule mt-20" />

      <section className="mt-16">
        <h2 className="font-display text-3xl tracking-tight">La neurophysiologie</h2>

        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-muted">
          <p>
            Les différentes parties du corps, le système nerveux central et le revêtement
            cutané, podal et occipital, sont reliés par des boucles réflexes
            d'action-réaction, rétroaction-action physiologiques, pathologiques et
            thérapeutiques. Toute action réflexe, dont le massage réflexe, met en jeu des
            circuits anatomiques par lesquels les messages nerveux alimentent le phénomène
            du macrocosme corporel dans le microcosme occipital et podal. Ces circuits
            anatomiques sont ceux du système nerveux autonome (systèmes sympathique et
            parasympathique) et ceux du système nerveux somatique.
          </p>
          <p>
            C'est au système sympathique, présent dans tout le corps et assurant le lien
            entre les systèmes nerveux somatique et autonome, que revient la propriété de
            faire le lien entre les différentes parties du corps, les centres nerveux et
            la peau occipitale et podale. Il est le transporteur de la représentation
            topique. Par son rôle sur la vasomotricité cutanée et sur sa nociception, il
            est le responsable des modifications de la texture de la peau et de la
            présence de microcristaux témoins de dysfonctions dans le corps.
          </p>
          <p>
            La région occipitale est le témoin de l'action de l'activité réflexe de la
            formation réticulaire du tronc cérébral.
          </p>

          <div className="my-8 border border-ink-soft/30 bg-parchment-light/60 p-6">
            <p className="font-medium text-ink">La peau occipitale et podale est à la fois :</p>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3">
                <span className="mt-3 h-px w-3 flex-shrink-0 bg-oxblood" />
                <span>
                  <strong className="font-medium text-ink">Réceptrice</strong>{" "}
                  d'informations provenant de tout l'organisme via le système nerveux
                  central. La peau occipitale et la peau des pieds sont de véritables
                  écrans où se réverbère l'image que le cerveau a lui-même de l'ensemble
                  du corps : ce sont des écrans récepteurs.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-3 h-px w-3 flex-shrink-0 bg-oxblood" />
                <span>
                  <strong className="font-medium text-ink">Émettrice</strong>, car les
                  deux écrans deviennent des claviers, à partir desquels l'image (le
                  similum réflexe) est renvoyée, par un message spécifique, dans les
                  centres intégrateurs de notre cerveau archaïque du diencéphale —
                  thalamus, hypothalamus, épiphyse — et du cerveau limbique, qui renvoient
                  en retour les ordres correctifs vers les parties du corps en
                  dysfonction.
                </span>
              </li>
            </ul>
          </div>

          <p className="font-display text-xl italic text-ink">
            La lecture de ces zones réflexes et leur traitement constituent la Réflexo
            Occipito-Podale.
          </p>
        </div>
      </section>

      <div className="rule mt-20" />

      <section className="mt-16">
        <h2 className="font-display text-3xl tracking-tight">
          Un concept <em className="text-oxblood">holistique</em> et vitalistique
        </h2>

        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-muted">
          <p>
            La R.O.P. est soumise aux lois et principes communs à l'homéopathie, la
            naturopathie et l'ostéopathie.
          </p>
          <p>
            <strong className="font-medium text-ink">Comme l'homéopathie,</strong> elle
            fait appel, par la Loi de Hering, à la mémoire de la cellule. Cette loi
            constitue le fil conducteur de la Réflexo Occipito-Podale pour remonter à la
            cause du dysfonctionnement et la traiter.
          </p>
          <p>
            <strong className="font-medium text-ink">Comme la naturopathie,</strong> la
            R.O.P. fait appel aux capacités d'autorégulation et considère «&nbsp;l'individu
            qui a la maladie, plutôt que la maladie qui atteint l'individu&nbsp;» (Harold
            Magoun).
          </p>
          <p>
            <strong className="font-medium text-ink">Comme l'ostéopathie,</strong> elle
            conçoit «&nbsp;l'organisme humain comme un tout, une unité, ce qui implique que
            toutes les parties du corps soient en relation correcte les unes par rapport
            aux autres et libres de bouger dans leur amplitude normale&nbsp;» (Harold
            Magoun). C'est la fameuse loi : «&nbsp;la structure gouverne la fonction et est
            influencée par elle&nbsp;» (Dr Andrew Taylor Still, fondateur de
            l'ostéopathie).
          </p>
          <p>
            Les trois niveaux de maturation de l'être humain — physique, émotionnel et
            psychique — se matérialisent sur les pieds par trois diaphragmes : pelvien,
            thoracique et crânien.
          </p>
          <p className="font-display text-xl italic text-ink">
            La vraie santé repose sur l'harmonie entre ces trois niveaux. La R.O.P. offre
            de traiter l'être humain dans sa globalité physique, émotionnelle et psychique.
            C'est dans cet esprit que nous l'enseignons.
          </p>
        </div>
      </section>
    </article>
  );
}
