import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";

export function MethodSummary() {
  const t = useTranslations("home");

  return (
    <section className="border-y border-ink-soft/20 bg-parchment-light/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-20 lg:px-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">{t("method_eyebrow")}</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
            {t("method_title")}
          </h2>
        </div>

        <div className="lg:col-span-7">
          <p className="font-display text-xl italic leading-relaxed text-ink-muted md:text-2xl">
            {t("method_body")}
          </p>
          <Link
            href="/methode"
            className="mt-8 inline-flex items-center text-sm tracking-wide text-oxblood hover:text-oxblood-deep transition-colors"
          >
            {t("method_link")}
          </Link>

          {/* Three pillars */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <Pillar
              num="01"
              title="Cartographie 3D"
              body="Représentation tridimensionnelle du corps en position fœtale sur les pieds."
            />
            <Pillar
              num="02"
              title="Voies réflexes"
              body="Lecture du système nerveux somatique et autonome via les zones podales et occipitales."
            />
            <Pillar
              num="03"
              title="Geste juste"
              body="Pression progressive et brève — la qualité de la stimulation prime sur la quantité."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillar({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div className="border-l border-oxblood/40 pl-4">
      <p className="font-mono text-xs text-oxblood">{num}</p>
      <h3 className="mt-2 font-display text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
    </div>
  );
}
