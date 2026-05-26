import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";
import { postgrads } from "@/lib/courses";

export default async function PostgradsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("training");

  const modules = postgrads();

  return (
    <article className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-32">
      <Link href="/se-former" className="eyebrow text-ink-muted hover:text-oxblood">
        {t("back_to_list")}
      </Link>

      <h1
        className="mt-8 font-display text-5xl leading-tight tracking-tight md:text-7xl"
        dangerouslySetInnerHTML={{ __html: t.raw("postgrads_title_html") as string }}
      />
      <p className="mt-8 max-w-3xl font-display text-xl italic leading-relaxed text-ink-muted md:text-2xl">
        {t("postgrads_intro")}
      </p>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((m) => (
          <Link
            key={m.slug}
            href={`/se-former/post-gradues/${m.slug}`}
            className="group flex flex-col border-t border-ink-soft/30 pt-6 transition-colors hover:border-oxblood"
          >
            <p className="eyebrow text-moss">{m.subtitle}</p>
            <h2 className="mt-3 font-display text-2xl leading-tight tracking-tight">{m.title}</h2>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">{m.summary}</p>
            <span className="mt-6 text-sm text-oxblood group-hover:text-oxblood-deep">
              Programme &amp; dates →
            </span>
          </Link>
        ))}
      </div>
    </article>
  );
}
