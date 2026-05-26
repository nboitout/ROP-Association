import { useTranslations } from "next-intl";

export function Welcome() {
  const t = useTranslations("home.welcome");

  const pillars = ["formation", "postgrad", "community"] as const;

  return (
    <section
      id="welcome"
      className="relative border-y border-ink-soft/20 bg-parchment-light/40"
    >
      {/* Faint anatomical ornament — echoes Hero's concentric circles */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-4rem] top-1/2 -z-0 hidden h-[420px] w-[420px] -translate-y-1/2 opacity-[0.05] lg:block"
      >
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="0.4" fill="none" />
          <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="0.4" fill="none" />
          <circle cx="200" cy="200" r="110" stroke="currentColor" strokeWidth="0.4" fill="none" />
          <circle cx="200" cy="200" r="70" stroke="currentColor" strokeWidth="0.4" fill="none" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ─── Left rail: portrait + identity ─────────────────────── */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              {/* Portrait placeholder — square, soft frame.
                  Drop a file at /public/portrait-guy-boitout.jpg later
                  and swap the div for <Image>. */}
              <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-full border border-ink-soft/30 bg-parchment-dark/60 shadow-[0_1px_0_rgba(0,0,0,0.04)] lg:mx-0 lg:w-56">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    aria-hidden
                    viewBox="0 0 100 100"
                    className="h-20 w-20 text-ink-soft/30"
                  >
                    <circle cx="50" cy="38" r="16" fill="currentColor" />
                    <path d="M20 88c0-18 13-30 30-30s30 12 30 30" fill="currentColor" />
                  </svg>
                </div>
              </div>

              <div className="mt-6 text-center lg:text-left">
                <p className="font-display text-2xl tracking-tight">Guy Boitout</p>
                <p className="mt-1 text-sm italic text-ink-muted">
                  {t("founder_role")}
                </p>
              </div>

              <div className="mt-6 hidden h-px w-16 bg-ink-soft/40 lg:block" />

              <p className="mt-6 hidden text-xs uppercase tracking-[0.18em] text-ink-soft lg:block">
                {t("lineage")}
              </p>
            </div>
          </aside>

          {/* ─── Right column: the letter ───────────────────────────── */}
          <div className="lg:col-span-8">
            <p className="eyebrow">{t("eyebrow")}</p>

            <h2 className="display mt-4 max-w-3xl font-display text-3xl leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
              {t.rich("title", {
                em: (chunks) => <em>{chunks}</em>,
              })}
            </h2>

            <div className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed text-ink-muted">
              <p className="first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-[4.5rem] first-letter:leading-[0.85] first-letter:text-oxblood md:first-letter:text-[5.5rem]">
                {t("intro_1")}
              </p>
              <p>{t("intro_2")}</p>
              <p>{t("close")}</p>
            </div>

            {/* Signature block */}
            <div className="mt-12 max-w-2xl">
              <div className="h-px w-24 bg-ink-soft/40" />
              {/* Signature placeholder — replace with /public/signature.svg
                  via <Image> when available. */}
              <p className="mt-6 font-display text-2xl italic text-ink">
                Guy Boitout
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ink-soft">
                {t("founder_role")}
              </p>
            </div>

            {/* ─── Three pillars ──────────────────────────────────── */}
            <div className="mt-16 grid gap-8 border-t border-ink-soft/20 pt-10 md:grid-cols-3">
              {pillars.map((key) => (
                <div key={key}>
                  <p className="eyebrow mb-2">{t(`pillar_${key}_label`)}</p>
                  <p className="font-display text-xl leading-snug tracking-tight">
                    {t(`pillar_${key}_title`)}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {t(`pillar_${key}_body`)}
                  </p>
                </div>
              ))}
            </div>

            {/* Signoff */}
            <p className="mt-14 font-display text-xl italic text-oxblood">
              {t("signoff")}
            </p>
          </div>
        </div>

        {/* ─── Trust strip ─────────────────────────────────────────── */}
        <div className="mt-20 border-t border-ink-soft/20 pt-6">
          <p className="text-center text-xs uppercase tracking-[0.18em] text-ink-soft">
            <span>{t("trust_agrement")}</span>
            <span className="mx-3 text-ink-soft/50">·</span>
            <span>{t("trust_siret")}</span>
            <span className="mx-3 text-ink-soft/50">·</span>
            <span>{t("trust_location")}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
