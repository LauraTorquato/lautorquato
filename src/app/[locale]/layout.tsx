import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { isLocale } from "@/i18n/config";
import { buildMetadata, localeSeo } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? buildMetadata(locale) : {};
}

export default async function LocalizedLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={localeSeo[locale].htmlLang}>
      <body>{children}</body>
    </html>
  );
}
