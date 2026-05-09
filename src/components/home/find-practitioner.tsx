import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import praticiens from "@/data/praticiens.json";

export function FindPractitioner() {
  const t = useTranslations("home");

  const regions = Array.from(new Set(praticiens.map((p) => p.department))).sort();
  const totalCount = praticiens.length;

  return (
    <section className="border-y border-ink-soft/20 bg-oxblood/5">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-20 lg:px-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">{t("find_eyebrow")}</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
            <em className="text-oxblood">Annuaire</em> des praticiens R.O.P.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            {t("find_body")}
          </p>
          <Link
            href="/praticiens"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-ink px-8 py-4 text-sm font-medium tracking-wide text-parchment-light transition-colors hover:bg-oxblood"
          >
            {t("find_link")}
          </Link>
        </div>

        <div className="lg:col-span-7">
          <div className="border border-ink-soft/30 bg-parchment-light/60 p-8">
            <div className="flex items-baseline justify-between">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
                Couverture territoriale
              </p>
              <p className="font-display text-3xl text-oxblood">{totalCount}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {regions.slice(0, 28).map((d) => (
                <span
                  key={d}
                  className="rounded-sm border border-ink-soft/30 bg-parchment px-3 py-1 font-mono text-xs text-ink-muted"
                >
                  {d}
                </span>
              ))}
              {regions.length > 28 && (
                <span className="font-mono text-xs text-ink-muted">
                  + {regions.length - 28}
                </span>
              )}
            </div>
            <p className="mt-6 text-xs italic text-ink-soft">
              Recherche par nom, ville ou code postal disponible dans l'annuaire complet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
