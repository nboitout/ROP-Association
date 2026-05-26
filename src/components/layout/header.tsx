"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/lib/navigation";

export function Header() {
  const t = useTranslations("nav");
  const tSite = useTranslations("site");
  const locale = useLocale();
  const pathname = usePathname();
  const [methodOpen, setMethodOpen] = useState(false);
  const [trainOpen, setTrainOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const otherLocale = locale === "fr" ? "en" : "fr";

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
            <span>Tél : {tSite("phone")}</span>
            <a
              href="https://www.guy-boitout.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-oxblood"
            >
              {t("publications_external")}
            </a>
            <Link href={pathname} locale={otherLocale} className="font-mono uppercase hover:text-oxblood">
              {otherLocale}
            </Link>
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
          <div
            className="relative"
            onMouseEnter={() => setMethodOpen(true)}
            onMouseLeave={() => setMethodOpen(false)}
          >
            <Link href="/la-methode" className="text-ink-muted hover:text-oxblood transition-colors">
              {t("method")}
            </Link>
            {methodOpen && (
              <div className="absolute left-0 top-full pt-3">
                <div className="min-w-[260px] border border-ink-soft/20 bg-parchment-light shadow-lg">
                  <DropLink href="/la-methode/fondements">{t("method_foundations")}</DropLink>
                  <DropLink href="/la-methode/technique">{t("method_technique")}</DropLink>
                  <DropLink href="/la-methode/cartographie">{t("method_cartography")}</DropLink>
                  <DropLink href="/la-methode/indications">{t("method_indications")}</DropLink>
                  <DropLink href="/la-methode/livres">{t("method_books")}</DropLink>
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setTrainOpen(true)}
            onMouseLeave={() => setTrainOpen(false)}
          >
            <Link href="/se-former" className="text-ink-muted hover:text-oxblood transition-colors">
              {t("training")}
            </Link>
            {trainOpen && (
              <div className="absolute left-0 top-full pt-3">
                <div className="min-w-[260px] border border-ink-soft/20 bg-parchment-light shadow-lg">
                  <DropLink href="/se-former/formation-de-base">{t("training_base")}</DropLink>
                  <DropLink href="/se-former/post-gradues">{t("training_postgrads")}</DropLink>
                  <DropLink href="/se-former/calendrier">{t("training_calendar")}</DropLink>
                  <DropLink href="/se-former/initiations">{t("training_initiations")}</DropLink>
                </div>
              </div>
            )}
          </div>

          <Link href="/trouver-un-praticien" className="text-ink-muted hover:text-oxblood transition-colors">
            {t("directory")}
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
            <li><MobileLink href="/" onClick={() => setMobileOpen(false)}>{t("home")}</MobileLink></li>
            <li><MobileLink href="/la-methode" onClick={() => setMobileOpen(false)}>{t("method")}</MobileLink></li>
            <li className="ml-4 space-y-2 text-xs normal-case tracking-normal">
              <MobileLink href="/la-methode/fondements" onClick={() => setMobileOpen(false)}>{t("method_foundations")}</MobileLink>
              <MobileLink href="/la-methode/technique" onClick={() => setMobileOpen(false)}>{t("method_technique")}</MobileLink>
              <MobileLink href="/la-methode/cartographie" onClick={() => setMobileOpen(false)}>{t("method_cartography")}</MobileLink>
              <MobileLink href="/la-methode/indications" onClick={() => setMobileOpen(false)}>{t("method_indications")}</MobileLink>
              <MobileLink href="/la-methode/livres" onClick={() => setMobileOpen(false)}>{t("method_books")}</MobileLink>
            </li>
            <li><MobileLink href="/se-former" onClick={() => setMobileOpen(false)}>{t("training")}</MobileLink></li>
            <li className="ml-4 space-y-2 text-xs normal-case tracking-normal">
              <MobileLink href="/se-former/formation-de-base" onClick={() => setMobileOpen(false)}>{t("training_base")}</MobileLink>
              <MobileLink href="/se-former/post-gradues" onClick={() => setMobileOpen(false)}>{t("training_postgrads")}</MobileLink>
              <MobileLink href="/se-former/calendrier" onClick={() => setMobileOpen(false)}>{t("training_calendar")}</MobileLink>
              <MobileLink href="/se-former/initiations" onClick={() => setMobileOpen(false)}>{t("training_initiations")}</MobileLink>
            </li>
            <li><MobileLink href="/trouver-un-praticien" onClick={() => setMobileOpen(false)}>{t("directory")}</MobileLink></li>
            <li><MobileLink href="/contact" onClick={() => setMobileOpen(false)}>{t("contact")}</MobileLink></li>
            <li className="border-t border-ink-soft/20 pt-3">
              <Link href={pathname} locale={otherLocale} onClick={() => setMobileOpen(false)} className="font-mono text-xs uppercase text-ink-soft hover:text-oxblood">
                {otherLocale === "en" ? "English" : "Français"}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function DropLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block px-5 py-3 text-xs normal-case tracking-normal text-ink-muted hover:bg-parchment hover:text-oxblood"
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} onClick={onClick} className="block text-ink-muted hover:text-oxblood">
      {children}
    </Link>
  );
}
