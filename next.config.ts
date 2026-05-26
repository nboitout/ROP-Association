import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/lib/i18n.ts");

// All redirects use permanent: true (308) — these are migrations from
// the previous Wix site and from older slugs in this repo, and we want
// search engines to update.
const LOCALE = "/:locale(fr|en)";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "static.wixstatic.com" },
      { protocol: "https", hostname: "rop-pi.vercel.app" },
    ],
  },
  async redirects() {
    const mappings: Array<{ from: string; to: string }> = [
      // Wix → new IA (per spec §7.3)
      { from: "/accueil", to: "/" },
      { from: "/welcome", to: "/en" },
      { from: "/méthode-reflexo-occipito-podale", to: "/la-methode" },
      { from: "/fondements-théoriques-réflexo-occipitopodale", to: "/la-methode/fondements" },
      { from: "/technique-de-massage", to: "/la-methode/technique" },
      { from: "/cartographie-reflexo-occipitopodale", to: "/la-methode/cartographie" },
      { from: "/indications-reflexo-occipito-podale", to: "/la-methode/indications" },
      { from: "/livres-boitout-vadala", to: "/la-methode/livres" },
      { from: "/formations-réflexo-occipito-podale", to: "/se-former" },
      { from: "/base-reflexo-occipito-podale", to: "/se-former/formation-de-base" },
      { from: "/post-gradue-nerfs-spinaux-rop", to: "/se-former/post-gradues/nerfs-spinaux" },
      { from: "/post-gradué-nerfs-craniens-rop", to: "/se-former/post-gradues/nerfs-craniens" },
      { from: "/post-gradué-uro-génital-réflexo-occipito-podale", to: "/se-former/post-gradues/uro-genital" },
      { from: "/post-gradue-viscero-émotionnel-rop", to: "/se-former/post-gradues/viscero-glandulaire-sna" },
      { from: "/post-gradué-problématiques-orl-rop", to: "/se-former/post-gradues/orl-respiratoires" },
      { from: "/post-gradue-stress", to: "/se-former/initiations" },
      { from: "/enseignant-boitout-rop", to: "/enseignants" },
      { from: "/praticiens-rop", to: "/trouver-un-praticien" },
      { from: "/réflexologie-problèmes-articulaires", to: "/recherche" },
      { from: "/contact-réflexo-occipito-podale", to: "/contact" },

      // Old in-repo slugs → new IA
      { from: "/methode", to: "/la-methode" },
      { from: "/methode/fondements", to: "/la-methode/fondements" },
      { from: "/methode/technique", to: "/la-methode/technique" },
      { from: "/methode/cartographie", to: "/la-methode/cartographie" },
      { from: "/indications", to: "/la-methode/indications" },
      { from: "/livres", to: "/la-methode/livres" },
      { from: "/formations", to: "/se-former" },
      { from: "/formations/:slug", to: "/se-former/post-gradues/:slug" },
      { from: "/praticiens", to: "/trouver-un-praticien" },
    ];

    // Emit both the unprefixed and the locale-prefixed variants so links
    // like /fr/methode also redirect correctly.
    return mappings.flatMap(({ from, to }) => [
      { source: from, destination: to, permanent: true },
      {
        source: `${LOCALE}${from}`,
        destination: `/:locale${to === "/" ? "" : to}`,
        permanent: true,
      },
    ]);
  },
};

export default withNextIntl(nextConfig);
