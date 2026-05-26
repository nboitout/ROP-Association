import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { allCourses } from "@/lib/courses";
import praticiens from "@/data/praticiens.json";

const SITE_URL = "https://www.reflexo-occipitopodale.com";

const STATIC_PATHS = [
  "/",
  "/la-methode",
  "/la-methode/fondements",
  "/la-methode/technique",
  "/la-methode/cartographie",
  "/la-methode/indications",
  "/la-methode/livres",
  "/se-former",
  "/se-former/formation-de-base",
  "/se-former/post-gradues",
  "/se-former/calendrier",
  "/se-former/initiations",
  "/trouver-un-praticien",
  "/enseignants",
  "/recherche",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const path of STATIC_PATHS) {
    for (const locale of locales) {
      const localePrefix = locale === "fr" ? "" : `/${locale}`;
      entries.push({
        url: `${SITE_URL}${localePrefix}${path === "/" ? "" : path}` || `${SITE_URL}/`,
        lastModified: now,
        changeFrequency: "monthly",
      });
    }
  }

  for (const course of allCourses().filter((c) => c.type === "postgrad")) {
    for (const locale of locales) {
      const localePrefix = locale === "fr" ? "" : `/${locale}`;
      entries.push({
        url: `${SITE_URL}${localePrefix}/se-former/post-gradues/${course.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
      });
    }
  }

  for (const p of praticiens as Array<{ id: string }>) {
    entries.push({
      url: `${SITE_URL}/praticiens/${p.id}`,
      lastModified: now,
      changeFrequency: "yearly",
    });
  }

  return entries;
}
