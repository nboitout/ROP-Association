"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import praticiens from "@/data/praticiens.json";

type Practitioner = (typeof praticiens)[number];

export default function DirectoryPage() {
  const t = useTranslations("directory");
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState<string>("all");

  const departments = useMemo(
    () =>
      Array.from(new Set(praticiens.map((p) => p.department))).sort((a, b) =>
        a.localeCompare(b, "fr"),
      ),
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return praticiens.filter((p) => {
      if (region !== "all" && p.department !== region) return false;
      if (!q) return true;
      return [p.name, p.city, p.postalCode, p.address].some((field) =>
        field?.toLowerCase().includes(q),
      );
    });
  }, [query, region]);

  const grouped = useMemo(() => {
    const map = new Map<string, Practitioner[]>();
    for (const p of filtered) {
      if (!map.has(p.department)) map.set(p.department, []);
      map.get(p.department)!.push(p);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b, "fr"));
  }, [filtered]);

  return (
    <article className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-32">
      <p className="eyebrow rise">{t("eyebrow")}</p>
      <h1
        className="rise rise-delay-1 mt-6 font-display text-5xl leading-tight tracking-tight md:text-7xl"
        dangerouslySetInnerHTML={{ __html: t.raw("title_html") as string }}
      />
      <p className="rise rise-delay-2 mt-8 max-w-3xl font-display text-xl italic leading-relaxed text-ink-muted md:text-2xl">
        {t("intro")}
      </p>

      <div className="rule mt-12" />

      <div className="sticky top-0 z-10 -mx-6 mt-8 border-y border-ink-soft/20 bg-parchment/95 px-6 py-4 backdrop-blur-md lg:-mx-12 lg:px-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("search_placeholder")}
            className="w-full flex-1 border-b border-ink-soft/40 bg-transparent py-2 font-display text-lg italic text-ink placeholder:text-ink-soft focus:border-oxblood focus:outline-none"
          />
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="border border-ink-soft/30 bg-parchment-light px-4 py-2 text-sm text-ink focus:border-oxblood focus:outline-none"
          >
            <option value="all">{t("filter_all")}</option>
            {departments.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
            {t("results_count", { count: filtered.length })}
          </span>
        </div>
      </div>

      <div className="mt-12 space-y-12">
        {grouped.map(([dept, items]) => (
          <section key={dept}>
            <h2 className="font-display text-2xl tracking-tight">{dept}</h2>
            <div className="rule mt-3" />
            <ul className="mt-6 grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
              {items.map((p) => (
                <PractitionerCard key={p.id} p={p} />
              ))}
            </ul>
          </section>
        ))}
        {grouped.length === 0 && (
          <p className="py-12 text-center font-display italic text-ink-muted">
            {t("no_results")}
          </p>
        )}
      </div>

      <p className="mt-16 border-t border-ink-soft/20 pt-6 text-sm italic text-ink-muted">
        {t("add_yourself")}{" "}
        <Link href="/contact" className="text-oxblood hover:text-oxblood-deep">
          Contact →
        </Link>
      </p>
    </article>
  );
}

function PractitionerCard({ p }: { p: Practitioner }) {
  return (
    <li>
      <Link href={`/praticiens/${p.id}`} className="font-display text-lg leading-tight hover:text-oxblood">
        {p.name}
      </Link>
      {p.address && (
        <p className="mt-1 text-sm leading-snug text-ink-muted">{p.address}</p>
      )}
      <p className="mt-1 text-sm text-ink-muted">
        {p.postalCode} {p.city}
      </p>
      <div className="mt-3 space-y-1 text-sm">
        {p.phone && (
          <a
            href={`tel:${p.phone.replace(/\s/g, "")}`}
            className="block font-mono text-xs text-ink hover:text-oxblood"
          >
            Tél : {p.phone}
          </a>
        )}
        {p.email && (
          <a
            href={`mailto:${p.email}`}
            className="block break-all text-xs text-oxblood hover:text-oxblood-deep"
          >
            {p.email}
          </a>
        )}
        {p.website && (
          <a
            href={p.website}
            target="_blank"
            rel="noreferrer"
            className="block break-all text-xs text-ink-muted hover:text-oxblood"
          >
            {p.website.replace(/^https?:\/\//, "")} ↗
          </a>
        )}
      </div>
    </li>
  );
}
