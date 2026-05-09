import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-32 border-t border-ink-soft/20 bg-parchment-dark/50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="font-display text-2xl tracking-tight">
              R.O.P. <em className="text-oxblood">Réflexologie Occipito-Podale</em>
            </h3>
            <p className="mt-3 text-sm text-ink-muted">{t("site.tagline")}</p>
            <p className="mt-4 text-sm font-medium text-ink">{t("site.founder")}</p>
          </div>

          <div>
            <p className="eyebrow mb-4">{t("nav.contact")}</p>
            <address className="not-italic text-sm leading-relaxed text-ink-muted">
              {t("site.address_line1")}<br />
              {t("site.address_line2")}<br />
              <span className="mt-2 inline-block">Tél : <a href={`tel:${t("site.phone").replace(/\s/g, "")}`} className="hover:text-oxblood">{t("site.phone")}</a></span>
            </address>
            <p className="mt-4 text-xs leading-relaxed text-ink-soft">
              {t("site.siret")}<br />
              {t("site.agrement")}
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">{t("footer.links_title")}</p>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li><Link href="/methode" className="hover:text-oxblood">{t("nav.method")}</Link></li>
              <li><Link href="/formations" className="hover:text-oxblood">{t("nav.trainings")}</Link></li>
              <li><Link href="/praticiens" className="hover:text-oxblood">{t("nav.practitioners")}</Link></li>
              <li><Link href="/livres" className="hover:text-oxblood">{t("nav.books")}</Link></li>
              <li>
                <a href="https://rop-pi.vercel.app" className="hover:text-oxblood" target="_blank" rel="noreferrer">
                  3ᵉ ouvrage de Guy Boitout ↗
                </a>
              </li>
            </ul>

            <p className="eyebrow mb-3 mt-8">{t("footer.partners_title")}</p>
            <ul className="space-y-1 text-xs text-ink-soft">
              <li><a href="https://www.data-dock.fr" target="_blank" rel="noreferrer" className="hover:text-oxblood">Datadock</a></li>
              <li><a href="https://syndicat-reflexologues.com" target="_blank" rel="noreferrer" className="hover:text-oxblood">Syndicat Professionnel des Réflexologues</a></li>
              <li><a href="https://reflexology-europe.org" target="_blank" rel="noreferrer" className="hover:text-oxblood">RIEN — Reflexology in Europe</a></li>
              <li><a href="https://www.osteopathie.org/" target="_blank" rel="noreferrer" className="hover:text-oxblood">Registre des Ostéopathes de France</a></li>
            </ul>
          </div>
        </div>

        <div className="rule mt-12" />
        <div className="mt-6 flex flex-col items-start justify-between gap-2 text-xs text-ink-soft md:flex-row">
          <span>{t("footer.copyright", { year })}</span>
          <span className="font-mono">Sully-sur-Loire · Loiret · France</span>
        </div>
      </div>
    </footer>
  );
}
