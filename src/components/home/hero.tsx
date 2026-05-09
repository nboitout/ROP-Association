import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";

export function Hero() {
  const t = useTranslations("home");

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-0 -z-0 h-[600px] w-[600px] opacity-[0.04]">
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <line x1="20" y1="200" x2="380" y2="200" stroke="currentColor" strokeWidth="0.5" />
          <line x1="200" y1="20" x2="200" y2="380" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-12 lg:pt-32 lg:pb-24">
        <p className="eyebrow rise rise-delay-1">Institut de Formation</p>

        <h1 className="rise rise-delay-2 mt-6 max-w-5xl font-display text-5xl leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]">
          R.O.P. <em>Réflexologie</em> Occipito-Podale
        </h1>

        <p className="rise rise-delay-3 mt-8 max-w-3xl font-display text-xl italic leading-relaxed text-ink-muted md:text-2xl">
          Une technique de massage basée sur la représentation du corps sur le pied
          et l'arrière de la tête (l'occiput).
        </p>

        <p className="rise rise-delay-3 mt-3 text-sm tracking-wide text-ink">
          Institut de Formation animé par <strong className="font-medium">Guy BOITOUT</strong>
        </p>

        <div className="rise rise-delay-4 mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/methode"
            className="inline-flex items-center justify-center rounded-md bg-oxblood px-8 py-4 text-sm font-medium tracking-wide text-parchment-light transition-colors hover:bg-oxblood-deep"
          >
            {t("hero_cta_method")}
          </Link>
          <Link
            href="/praticiens"
            className="inline-flex items-center justify-center rounded-md border border-ink-soft/40 px-8 py-4 text-sm font-medium tracking-wide text-ink hover:border-oxblood hover:text-oxblood transition-colors"
          >
            {t("hero_cta_practitioners")}
          </Link>
        </div>

        <div className="rise rise-delay-5 mt-16 grid gap-8 border-t border-ink-soft/20 pt-8 text-sm md:grid-cols-3">
          <div>
            <p className="eyebrow mb-2">Concepteurs</p>
            <p className="text-ink">Guy BOITOUT &amp; Jean-Pierre VADALA</p>
          </div>
          <div>
            <p className="eyebrow mb-2">Publications</p>
            <p className="text-ink">3 ouvrages — Éditions Elsevier-Masson</p>
          </div>
          <div>
            <p className="eyebrow mb-2">Praticiens certifiés</p>
            <p className="text-ink">70+ — France &amp; Espagne</p>
          </div>
        </div>
      </div>
    </section>
  );
}
