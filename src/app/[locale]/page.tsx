import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/hero";
import { WhatIsRop } from "@/components/home/what-is-rop";
import { HeritageTimeline } from "@/components/home/heritage-timeline";
import { TwoTracks } from "@/components/home/two-tracks";
import { Testimonials } from "@/components/home/testimonials";
import { CredibilityBand } from "@/components/home/credibility-band";
import { LeadCapture } from "@/components/home/lead-capture";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <WhatIsRop />
      <HeritageTimeline />
      <TwoTracks />
      <Testimonials />
      <CredibilityBand />
      <LeadCapture />
    </>
  );
}
