import { useTranslations } from "next-intl";

export function Welcome() {
  const t = useTranslations("home");

  return (
    <section className="border-y border-ink-soft/20 bg-parchment-light/40">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-12 text-center">
        <p className="eyebrow">Bienvenue</p>
        <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight md:text-4xl">
          {t("welcome_title")}
        </h2>

        <div className="mx-auto mt-10 max-w-2xl space-y-6 text-left text-lg leading-relaxed text-ink-muted">
          <p>
            Explorez :
          </p>
          <ul className="ml-4 space-y-2">
            <li className="flex gap-3">
              <span className="mt-3 h-px w-3 flex-shrink-0 bg-oxblood" />
              <span>notre programme de formation en réflexologie,</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-3 h-px w-3 flex-shrink-0 bg-oxblood" />
              <span>nos post-gradués,</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-3 h-px w-3 flex-shrink-0 bg-oxblood" />
              <span>et nos ressources pédagogiques en ligne pour progresser à votre rythme.</span>
            </li>
          </ul>
          <p>{t("welcome_community")}</p>
          <p>{t("welcome_close")}</p>
        </div>

        <p className="mt-10 font-display text-xl italic text-oxblood">
          {t("welcome_signoff")}
        </p>
      </div>
    </section>
  );
}
