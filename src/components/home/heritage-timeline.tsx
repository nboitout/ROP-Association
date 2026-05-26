import { useTranslations } from "next-intl";

type Event = { year: string; title: string; body: string };

export function HeritageTimeline() {
  const t = useTranslations("home");
  const events = t.raw("heritage_events") as Event[];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
      <div className="max-w-3xl">
        <p className="eyebrow">{t("heritage_eyebrow")}</p>
        <h2
          className="mt-4 font-display text-4xl leading-[1.1] tracking-tight md:text-5xl"
          dangerouslySetInnerHTML={{ __html: t.raw("heritage_title_html") as string }}
        />
        <p className="mt-6 font-display text-xl italic leading-relaxed text-ink-muted md:text-2xl">
          {t("heritage_intro")}
        </p>
      </div>

      <ol className="mt-16 grid gap-0 border-l border-ink-soft/30 md:grid-cols-1">
        {events.map((e, i) => (
          <li key={i} className="relative grid gap-4 pb-12 pl-8 md:grid-cols-[120px_1fr] md:gap-12 md:pl-12">
            <span className="absolute left-[-5px] top-1 h-2.5 w-2.5 rounded-full bg-oxblood md:left-[-7px]" />
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-oxblood md:pt-1">
              {e.year}
            </p>
            <div>
              <h3 className="font-display text-2xl tracking-tight md:text-3xl">{e.title}</h3>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
                {e.body}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-4 pl-8 md:pl-12">
        <a
          href="https://www.guy-boitout.com"
          target="_blank"
          rel="noreferrer"
          className="text-sm tracking-wide text-oxblood hover:text-oxblood-deep"
        >
          {t("heritage_link")}
        </a>
      </p>
    </section>
  );
}
