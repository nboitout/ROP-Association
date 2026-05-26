import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/lib/i18n.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "static.wixstatic.com" },
      { protocol: "https", hostname: "rop-pi.vercel.app" },
    ],
  },
  async redirects() {
    return [
      // Preserve inbound links from the previous Wix site.
      { source: "/welcome", destination: "/#welcome", permanent: true },
      { source: "/:locale(fr|en)/welcome", destination: "/:locale#welcome", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
