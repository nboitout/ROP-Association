import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";

export function WhatIsRop() {
  const t = useTranslations("home");

  return (
    <section className="border-y border-ink-soft/20 bg-parchment-light/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-20 lg:px-12 lg:py-32">
        <div className="lg:col-span-5">
          <p className="eyebrow">{t("what_eyebrow")}</p>
          <h2
            className="mt-4 font-display text-4xl leading-[1.1] tracking-tight md:text-5xl"
            dangerouslySetInnerHTML={{ __html: t.raw("what_title_html") as string }}
          />

          {/* Anatomical schematic — foot + occiput cartography */}
          <div className="mt-10 hidden lg:block">
            <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full opacity-70">
              {/* Foot outline (left) */}
              <g stroke="currentColor" strokeWidth="0.8" fill="none" className="text-ink-muted">
                <path d="M40 30 C30 60 30 100 50 140 C70 170 110 175 120 160 C130 145 130 120 125 95 C120 70 115 45 100 30 C85 18 55 18 40 30 Z" />
                <circle cx="80" cy="50" r="6" />
                <circle cx="62" cy="62" r="4" />
                <circle cx="94" cy="62" r="4" />
                <circle cx="58" cy="82" r="3" />
                <circle cx="86" cy="86" r="3" />
                <circle cx="74" cy="110" r="4" />
                <circle cx="86" cy="135" r="5" />
                <path d="M70 30 L 80 160" strokeDasharray="2 3" />
              </g>
              {/* Occiput outline (right) */}
              <g stroke="currentColor" strokeWidth="0.8" fill="none" className="text-ink-muted">
                <path d="M200 100 C200 60 230 35 260 35 C290 35 310 60 310 100 C310 140 290 165 260 165 C230 165 200 140 200 100 Z" />
                <path d="M210 100 C210 70 235 50 260 50 C285 50 300 70 300 100" strokeDasharray="3 3" />
                <circle cx="240" cy="80" r="3" />
                <circle cx="260" cy="70" r="3" />
                <circle cx="280" cy="80" r="3" />
                <circle cx="245" cy="105" r="2.5" />
                <circle cx="265" cy="100" r="2.5" />
                <circle cx="285" cy="105" r="2.5" />
                <circle cx="255" cy="135" r="3" />
                <circle cx="275" cy="135" r="3" />
              </g>
              <text x="80" y="195" textAnchor="middle" className="fill-ink-soft" fontSize="9" letterSpacing="2">
                PIED
              </text>
              <text x="255" y="195" textAnchor="middle" className="fill-ink-soft" fontSize="9" letterSpacing="2">
                OCCIPUT
              </text>
            </svg>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="font-display text-xl italic leading-relaxed text-ink-muted md:text-2xl">
            {t("what_body")}
          </p>
          <Link
            href="/la-methode/fondements"
            className="mt-8 inline-flex items-center text-sm tracking-wide text-oxblood hover:text-oxblood-deep transition-colors"
          >
            {t("what_link")} →
          </Link>
        </div>
      </div>
    </section>
  );
}
