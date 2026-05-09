"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";

export function Header() {
  const t = useTranslations("nav");
  const tSite = useTranslations("site");
  const [methodOpen, setMethodOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-20 border-b border-ink-soft/20 bg-parchment/85 backdrop-blur-md">
      <div className="hidden border-b border-ink-soft/15 bg-parchment-dark/40 px-6 py-2 text-[11px] text-ink-soft md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 lg:px-12">
          <div className="flex items-center gap-4">
            <span>{tSite("address_line1")} — {tSite("address_line2")}</span>
            <span className="text-ink-soft/40">·</span>
            <span>{tSite("siret")}</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Tél : {tSite("phone")}</span>
            <a
              href="https://www.facebook.com/reflexotherapie.occipitopodale.5/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-oxblood"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="https://youtu.be/rrdEmooeXAo"
              target="_blank"
              rel="noreferrer"
              className="hover:text-oxblood"
              aria-label="YouTube"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <Link href="/" className="font-display tracking-tight text-ink hover:text-oxblood transition-colors">
          <span className="text-xl">R.O.P.</span>
          <span className="ml-2 hidden text-[11px] uppercase tracking-[0.22em] text-ink-muted sm:inline">
            Réflexologie Occipito-Podale
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm uppercase tracking-[0.12em] lg:flex">
          <Link href="/" className="text-ink-muted hover:text-oxblood transition-colors">
            {t("home")}
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setMethodOpen(true)}
            onMouseLeave={() => setMethodOpen(false)}
          >
            <Link
              href="/methode"
              className="text-ink-muted hover:text-oxblood transition-colors"
            >
              {t("method")}
            </Link>
            {methodOpen && (
              <div className="absolute left-0 top-full pt-3">
                <div className="min-w-[260px] border border-ink-soft/20 bg-parchment-light shadow-lg">
                  <Link href="/methode/fondements" className="block px-5 py-3 text-xs normal-case tracking-normal text-ink-muted hover:bg-parchment hover:text-oxblood">
                    {t("method_foundations")}
                  </Link>
                  <Link href="/methode/technique" className="block px-5 py-3 text-xs normal-case tracking-normal text-ink-muted hover:bg-parchment hover:text-oxblood">
                    {t("method_technique")}
                  </Link>
                  <Link href="/methode/cartographie" className="block px-5 py-3 text-xs normal-case tracking-normal text-ink-muted hover:bg-parchment hover:text-oxblood">
                    {t("method_cartography")}
                  </Link>
                  <Link href="/livres" className="block px-5 py-3 text-xs normal-case tracking-normal text-ink-muted hover:bg-parchment hover:text-oxblood">
                    {t("method_books")}
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/indications" className="text-ink-muted hover:text-oxblood transition-colors">
            {t("indications")}
          </Link>
          <Link href="/formations" className="text-ink-muted hover:text-oxblood transition-colors">
            {t("trainings")}
          </Link>
          <Link href="/enseignants" className="text-ink-muted hover:text-oxblood transition-colors">
            {t("teachers")}
          </Link>
          <Link href="/praticiens" className="text-ink-muted hover:text-oxblood transition-colors">
            {t("practitioners")}
          </Link>
          <Link href="/recherche" className="text-ink-muted hover:text-oxblood transition-colors">
            {t("research")}
          </Link>
          <Link href="/contact" className="text-ink-muted hover:text-oxblood transition-colors">
            {t("contact")}
          </Link>
        </nav>

        <button
          className="lg:hidden text-ink"
          aria-label="Menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1.5" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-ink-soft/20 bg-parchment-light px-6 py-4 lg:hidden">
          <ul className="space-y-3 text-sm uppercase tracking-[0.12em]">
            <li><Link href="/" onClick={() => setMobileOpen(false)} className="block text-ink-muted hover:text-oxblood">{t("home")}</Link></li>
            <li><Link href="/methode" onClick={() => setMobileOpen(false)} className="block text-ink-muted hover:text-oxblood">{t("method")}</Link></li>
            <li className="ml-4 space-y-2 text-xs normal-case tracking-normal">
              <Link href="/methode/fondements" onClick={() => setMobileOpen(false)} className="block text-ink-soft hover:text-oxblood">{t("method_foundations")}</Link>
              <Link href="/methode/technique" onClick={() => setMobileOpen(false)} className="block text-ink-soft hover:text-oxblood">{t("method_technique")}</Link>
              <Link href="/methode/cartographie" onClick={() => setMobileOpen(false)} className="block text-ink-soft hover:text-oxblood">{t("method_cartography")}</Link>
              <Link href="/livres" onClick={() => setMobileOpen(false)} className="block text-ink-soft hover:text-oxblood">{t("method_books")}</Link>
            </li>
            <li><Link href="/indications" onClick={() => setMobileOpen(false)} className="block text-ink-muted hover:text-oxblood">{t("indications")}</Link></li>
            <li><Link href="/formations" onClick={() => setMobileOpen(false)} className="block text-ink-muted hover:text-oxblood">{t("trainings")}</Link></li>
            <li><Link href="/enseignants" onClick={() => setMobileOpen(false)} className="block text-ink-muted hover:text-oxblood">{t("teachers")}</Link></li>
            <li><Link href="/praticiens" onClick={() => setMobileOpen(false)} className="block text-ink-muted hover:text-oxblood">{t("practitioners")}</Link></li>
            <li><Link href="/recherche" onClick={() => setMobileOpen(false)} className="block text-ink-muted hover:text-oxblood">{t("research")}</Link></li>
            <li><Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-ink-muted hover:text-oxblood">{t("contact")}</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
