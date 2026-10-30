import { notFound } from "next/navigation";
import { PortfolioPage } from "@/components/portfolio-page";
import { ProfileStructuredData } from "@/components/profile-structured-data";
import { isLocale, locales, type Locale } from "@/i18n/config";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalizedPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <>
      <ProfileStructuredData locale={locale as Locale} />
      <PortfolioPage locale={locale as Locale} />
    </>
  );
}
