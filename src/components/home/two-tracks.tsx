import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";

export function TwoTracks() {
  const t = useTranslations("home");

  return (
    <section className="border-y border-ink-soft/20 bg-parchment-light/40">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <div className="max-w-3xl">
          <p className="eyebrow">{t("tracks_eyebrow")}</p>
          <h2
            className="mt-4 font-display text-4xl leading-[1.1] tracking-tight md:text-5xl"
            dangerouslySetInnerHTML={{ __html: t.raw("tracks_title_html") as string }}
          />
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <TrackCard
            label={t("tracks_train_label")}
            title={t("tracks_train_title")}
            body={t("tracks_train_body")}
            ctaText={t("tracks_train_cta")}
            href="/se-former"
            accent="sage"
          />
          <TrackCard
            label={t("tracks_directory_label")}
            title={t("tracks_directory_title")}
            body={t("tracks_directory_body")}
            ctaText={t("tracks_directory_cta")}
            href="/trouver-un-praticien"
            accent="clay"
          />
        </div>
      </div>
    </section>
  );
}

function TrackCard({
  label,
  title,
  body,
  ctaText,
  href,
  accent,
}: {
  label: string;
  title: string;
  body: string;
  ctaText: string;
  href: string;
  accent: "sage" | "clay";
}) {
  const accentClass = accent === "sage" ? "text-sage" : "text-clay";
  const borderClass = accent === "sage" ? "group-hover:border-sage" : "group-hover:border-clay";

  return (
    <Link
      href={href}
      className={`group flex flex-col border border-ink-soft/30 bg-parchment p-10 transition-colors ${borderClass}`}
    >
      <p className={`eyebrow ${accentClass}`}>{label}</p>
      <h3 className="mt-4 font-display text-3xl leading-tight tracking-tight md:text-4xl">
        {title}
      </h3>
      <p className="mt-6 flex-1 text-base leading-relaxed text-ink-muted">{body}</p>
      <span className={`mt-8 text-sm tracking-wide ${accentClass}`}>{ctaText} →</span>
    </Link>
  );
}
