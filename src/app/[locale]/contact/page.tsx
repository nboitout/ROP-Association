import { setRequestLocale, getTranslations } from "next-intl/server";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("site");

  return (
    <article className="mx-auto max-w-4xl px-6 py-20 lg:px-12 lg:py-32">
      <p className="eyebrow rise">Contact</p>
      <h1 className="rise rise-delay-1 mt-6 font-display text-5xl leading-tight tracking-tight md:text-7xl">
        Institut <em className="text-oxblood">R.O.P.</em>
      </h1>

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <div>
          <p className="eyebrow">Adresse</p>
          <address className="mt-3 not-italic text-lg leading-relaxed">
            {t("address_line1")}
            <br />
            {t("address_line2")}
          </address>
          <p className="mt-6 eyebrow">Téléphone</p>
          <a
            href={`tel:${t("phone").replace(/\s/g, "")}`}
            className="mt-3 block font-display text-2xl text-oxblood hover:text-oxblood-deep"
          >
            {t("phone")}
          </a>
        </div>

        <div>
          <p className="eyebrow">Identifiants</p>
          <p className="mt-3 font-mono text-sm leading-relaxed text-ink-muted">
            {t("siret")}
            <br />
            {t("agrement")}
          </p>
          <p className="mt-6 eyebrow">Réseaux</p>
          <ul className="mt-3 space-y-1 text-sm">
            <li>
              <a
                href="https://www.facebook.com/reflexotherapie.occipitopodale.5/"
                className="text-ink-muted hover:text-oxblood"
                target="_blank"
                rel="noreferrer"
              >
                Facebook ↗
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/rrdEmooeXAo"
                className="text-ink-muted hover:text-oxblood"
                target="_blank"
                rel="noreferrer"
              >
                YouTube ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
