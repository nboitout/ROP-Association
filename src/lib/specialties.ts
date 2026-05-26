// Single source of truth for the specialty / certification taxonomy
// (spec §6.3). Shared between courses (specialty_tags) and practitioners
// (specialties) so "completed course X" maps to "filter for practitioners
// who do X". Extending this list = update the courses + practitioners that
// reference it.

export const SPECIALTIES = [
  "fondamentale",
  "nerfs-spinaux",
  "nerfs-craniens",
  "uro-genital",
  "viscero-glandulaire-sna",
  "orl-respiratoires",
  "stress",
  "pediatrie-mrp",
] as const;

export type Specialty = (typeof SPECIALTIES)[number];

export const SPECIALTY_LABELS: Record<Specialty, { fr: string; en: string }> = {
  "fondamentale": { fr: "Réflexologie de base (R.O.P. fondamentale)", en: "Foundation reflexology (core R.O.P.)" },
  "nerfs-spinaux": { fr: "Nerfs spinaux", en: "Spinal nerves" },
  "nerfs-craniens": { fr: "Nerfs crâniens", en: "Cranial nerves" },
  "uro-genital": { fr: "Troubles uro-génitaux (H / F / enfant)", en: "Uro-genital disorders (M / F / child)" },
  "viscero-glandulaire-sna": { fr: "Système viscéro-glandulaire + SNA", en: "Viscero-glandular system + ANS" },
  "orl-respiratoires": { fr: "Troubles ORL et respiratoires", en: "ENT & respiratory disorders" },
  "stress": { fr: "Gestion du stress", en: "Stress management" },
  "pediatrie-mrp": { fr: "Pédiatrie & MRP", en: "Pediatrics & PRM" },
};

export function specialtyLabel(s: Specialty, locale: "fr" | "en" = "fr") {
  return SPECIALTY_LABELS[s][locale];
}
