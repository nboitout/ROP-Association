import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Fraunces, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import { locales } from "@/lib/i18n";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = "https://www.reflexo-occipitopodale.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "site" });
  return {
    title: { default: t("title"), template: `%s · ${t("name")}` },
    description: t("tagline"),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: locale === "fr" ? "/" : `/${locale}`,
      languages: { fr: "/", en: "/en" },
    },
    openGraph: {
      title: t("title"),
      description: t("tagline"),
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      siteName: t("name"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("tagline"),
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!(locales as readonly string[]).includes(locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "site" });

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: t("name"),
    url: SITE_URL,
    description: t("tagline"),
    founder: { "@type": "Person", name: "Guy Boitout" },
    address: {
      "@type": "PostalAddress",
      streetAddress: t("address_line1"),
      postalCode: "45600",
      addressLocality: "Sully-sur-Loire",
      addressRegion: "Centre-Val de Loire",
      addressCountry: "FR",
    },
    telephone: t("phone"),
    sameAs: [
      "https://www.guy-boitout.com",
      "https://www.facebook.com/reflexotherapie.occipitopodale.5/",
    ],
  };

  return (
    <html lang={locale} className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="grain antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="relative z-10 min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
