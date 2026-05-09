import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/hero";
import { Welcome } from "@/components/home/welcome";
import { NextTrainings } from "@/components/home/next-trainings";
import { Testimonials } from "@/components/home/testimonials";
import { FindPractitioner } from "@/components/home/find-practitioner";
import { BooksStrip } from "@/components/home/books-strip";

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
      <Welcome />
      <NextTrainings />
      <Testimonials />
      <FindPractitioner />
      <BooksStrip />
    </>
  );
}
