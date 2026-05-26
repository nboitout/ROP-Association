import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Link } from "@/lib/navigation";
import praticiens from "@/data/praticiens.json";

// Phase-1 stub for individual practitioner pages.
// Phase 2 will replace this with the full profile schema (§6.2 of the
// spec): photo, certifications[], specialties[], bio, booking_url,
// consent_to_list, etc.

type P = {
  id: string;
  name: string;
  address?: string;
  postalCode?: string;
  city?: string;
  department?: string;
  phone?: string;
  email?: string;
  website?: string;
};

export function generateStaticParams() {
  return (praticiens as P[]).map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = (praticiens as P[]).find((x) => x.id === slug);
  if (!p) return {};
  return {
    title: `${p.name} — Praticien R.O.P. certifié`,
    description: `${p.name}, praticien certifié en Réflexologie Occipito-Podale${p.city ? ` à ${p.city}` : ""}.`,
  };
}

export default async function PractitionerPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const p = (praticiens as P[]).find((x) => x.id === slug);
  if (!p) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-20 lg:px-12 lg:py-32">
      <Link href="/trouver-un-praticien" className="eyebrow text-ink-muted hover:text-oxblood">
        ← Annuaire
      </Link>

      <p className="eyebrow mt-8">{p.department}</p>
      <h1 className="mt-3 font-display text-5xl leading-tight tracking-tight md:text-6xl">
        {p.name}
      </h1>
      <p className="mt-4 font-display text-xl italic text-ink-muted">
        Praticien certifié en Réflexologie Occipito-Podale
      </p>

      <div className="mt-12 grid gap-6 border-y border-ink-soft/30 py-6 md:grid-cols-2">
        <div>
          <p className="eyebrow">Adresse</p>
          <address className="mt-2 not-italic text-base text-ink">
            {p.address && (<>{p.address}<br /></>)}
            {p.postalCode} {p.city}
          </address>
        </div>
        <div>
          <p className="eyebrow">Contact</p>
          <div className="mt-2 space-y-1 text-base">
            {p.phone && (
              <a href={`tel:${p.phone.replace(/\s/g, "")}`} className="block font-mono text-sm text-ink hover:text-oxblood">
                {p.phone}
              </a>
            )}
            {p.email && (
              <a href={`mailto:${p.email}`} className="block break-all text-sm text-oxblood hover:text-oxblood-deep">
                {p.email}
              </a>
            )}
            {p.website && (
              <a href={p.website} target="_blank" rel="noreferrer" className="block break-all text-sm text-ink-muted hover:text-oxblood">
                {p.website.replace(/^https?:\/\//, "")} ↗
              </a>
            )}
          </div>
        </div>
      </div>

      <p className="mt-10 text-sm italic text-ink-soft">
        Fiche détaillée enrichie (spécialités, certifications, biographie) prochainement.
      </p>
    </article>
  );
}
