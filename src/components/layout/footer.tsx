import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-32 border-t border-ink-soft/20 bg-parchment-dark/50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl tracking-tight">
              R.O.P. <em className="text-oxblood">Réflexologie Occipito-Podale</em>
            </h3>
            <p className="mt-3 max-w-sm text-sm text-ink-muted">{t("site.tagline")}</p>
            <p className="mt-4 text-sm font-medium text-ink">{t("site.founder")}</p>

            <address className="not-italic mt-6 text-sm leading-relaxed text-ink-muted">
              {t("site.address_line1")}<br />
              {t("site.address_line2")}<br />
              <span className="mt-2 inline-block">
                Tél : <a href={`tel:${t("site.phone").replace(/\s/g, "")}`} className="hover:text-oxblood">{t("site.phone")}</a>
              </span>
            </address>
            <p className="mt-4 text-xs leading-relaxed text-ink-soft">
              {t("site.siret")}<br />
              {t("site.agrement")}
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">{t("footer.links_title")}</p>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li><Link href="/la-methode" className="hover:text-oxblood">{t("nav.method")}</Link></li>
              <li><Link href="/se-former" className="hover:text-oxblood">{t("nav.training")}</Link></li>
              <li><Link href="/trouver-un-praticien" className="hover:text-oxblood">{t("nav.directory")}</Link></li>
              <li><Link href="/enseignants" className="hover:text-oxblood">{t("nav.teachers")}</Link></li>
              <li><Link href="/recherche" className="hover:text-oxblood">{t("nav.research")}</Link></li>
              <li><Link href="/contact" className="hover:text-oxblood">{t("nav.contact")}</Link></li>
            </ul>

            <p className="eyebrow mb-3 mt-8">{t("footer.partners_title")}</p>
            <ul className="space-y-1 text-xs text-ink-soft">
              <li><a href="https://www.data-dock.fr" target="_blank" rel="noreferrer" className="hover:text-oxblood">Datadock</a></li>
              <li><a href="https://syndicat-reflexologues.com" target="_blank" rel="noreferrer" className="hover:text-oxblood">Syndicat des Réflexologues</a></li>
              <li><a href="https://reflexology-europe.org" target="_blank" rel="noreferrer" className="hover:text-oxblood">Reflexology in Europe</a></li>
              <li><a href="https://www.osteopathie.org/" target="_blank" rel="noreferrer" className="hover:text-oxblood">Registre des Ostéopathes</a></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">{t("footer.publications_title")}</p>
            <p className="text-sm leading-relaxed text-ink-muted">
              {t("footer.publications_blurb")}
            </p>
            <a
              href="https://www.guy-boitout.com"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm tracking-wide text-oxblood hover:text-oxblood-deep"
            >
              {t("footer.publications_link")}
            </a>
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
