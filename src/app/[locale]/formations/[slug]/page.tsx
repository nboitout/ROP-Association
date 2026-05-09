import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/lib/navigation";
import formations from "@/data/formations.json";

export function generateStaticParams() {
  return formations.map((f) => ({ slug: f.slug }));
}

export default async function FormationDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const formation = formations.find((f) => f.slug === slug);
  if (!formation) notFound();

  return (
    <article className="mx-auto max-w-4xl px-6 py-20 lg:px-12 lg:py-32">
      <Link href="/formations" className="eyebrow text-ink-muted hover:text-oxblood">
        ← Retour aux formations
      </Link>

      <p className="font-mono text-xs text-oxblood mt-8">{formation.code}</p>
      <h1 className="mt-3 font-display text-5xl leading-tight tracking-tight md:text-7xl">
        {formation.title}
      </h1>

      <div className="mt-12 grid gap-8 border-y border-ink-soft/30 py-8 md:grid-cols-3">
        <div>
          <p className="eyebrow">Dates</p>
          <p className="mt-2 font-display text-xl">
            {formatDateRange(formation.startDate, formation.endDate)}
          </p>
        </div>
        <div>
          <p className="eyebrow">Lieu</p>
          <p className="mt-2 font-display text-xl">{formation.location}</p>
        </div>
        <div>
          <p className="eyebrow">Tarif</p>
          <p className="mt-2 font-display text-xl">{formation.price}</p>
        </div>
      </div>

      <p className="mt-12 max-w-3xl font-display text-2xl italic leading-relaxed text-ink-muted">
        {formation.summary}
      </p>

      {formation.registration && (
        <section className="mt-16 border border-oxblood/40 bg-oxblood/5 p-8">
          <p className="eyebrow">Inscription</p>
          <p className="mt-3 font-display text-xl">{formation.registration.contactName}</p>
          <div className="mt-4 space-y-1 text-sm">
            <a
              href={`mailto:${formation.registration.email}`}
              className="block text-oxblood hover:text-oxblood-deep"
            >
              {formation.registration.email}
            </a>
            <a
              href={`tel:${formation.registration.phone.replace(/\s/g, "")}`}
              className="block font-mono text-ink"
            >
              {formation.registration.phone}
            </a>
          </div>
        </section>
      )}
    </article>
  );
}

function formatDateRange(start: string, end: string) {
  const s = new Date(start);
  const e = new Date(end);
  const fmt = (d: Date) =>
    d.toLocaleDateString("fr-FR", { day: "numeric", month: "long" });
  if (s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear()) {
    return `${s.getDate()} – ${fmt(e)} ${s.getFullYear()}`;
  }
  return `${fmt(s)} – ${fmt(e)} ${s.getFullYear()}`;
}
