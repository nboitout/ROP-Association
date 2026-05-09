import { useTranslations } from "next-intl";

const testimonials = [
  {
    body: "Merci Guy, kiné-ostéo, d'avoir su t'interroger, observer, émettre des hypothèses et expérimenter une nouvelle réflexologie. Le traitement par ta technique, la R.O.P. (Réflexo Occipito Podale) est particulièrement efficace !",
    author: "Karine",
    context: "Cours de base R.O.P., décembre 2024",
  },
  {
    body: "Certification validée en Réflexo Occipito Podale, un dernier weekend de formation sur les nerfs spinaux, riche en connaissances et en émotions. Un grand merci à M. Guy Boitout pour sa formation R.O.P. d'une excellente qualité, merci pour cet enseignement et ces partages passionnants. Je suis bluffée par cette technique si pointue et précise, mes prises en charge ont évolué, elles sont plus efficaces et plus rapides au niveau des bienfaits.",
    author: "Céline",
    context: "Cours de base R.O.P., novembre 2024",
  },
];

export function Testimonials() {
  const t = useTranslations("home");

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
      <p className="eyebrow">Témoignages</p>
      <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
        Ce que disent nos <em className="text-oxblood">étudiants</em>
      </h2>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <figure key={i} className="border-l-2 border-oxblood/60 pl-6">
            <blockquote className="font-display text-lg leading-relaxed italic text-ink-muted md:text-xl">
              « {t.body} »
            </blockquote>
            <figcaption className="mt-6">
              <p className="font-medium text-ink">{t.author}</p>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
                {t.context}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
