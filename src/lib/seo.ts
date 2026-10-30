import type { Metadata } from "next";
import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import { portfolioCopy } from "@/i18n/resources";

export const siteUrl = "https://lauratorquato.com";

export const localeSeo = {
  pt: {
    htmlLang: "pt-BR",
    openGraphLocale: "pt_BR",
    path: "/",
    role: "Desenvolvedora Front-end",
  },
  en: {
    htmlLang: "en",
    openGraphLocale: "en_US",
    path: "/en/",
    role: "Front-end Developer",
  },
  es: {
    htmlLang: "es",
    openGraphLocale: "es_ES",
    path: "/es/",
    role: "Desarrolladora Front-end",
  },
} as const satisfies Record<
  Locale,
  {
    htmlLang: string;
    openGraphLocale: string;
    path: string;
    role: string;
  }
>;

const languageAlternates = {
  "pt-BR": "/",
  en: "/en/",
  es: "/es/",
  "x-default": "/",
};

export function buildMetadata(locale: Locale): Metadata {
  const copy = portfolioCopy[locale];
  const seo = localeSeo[locale];
  const alternateLocales = Object.values(localeSeo)
    .filter((item) => item.openGraphLocale !== seo.openGraphLocale)
    .map((item) => item.openGraphLocale);

  return {
    metadataBase: new URL(siteUrl),
    title: copy.meta.title,
    description: copy.meta.description,
    applicationName: profile.name,
    authors: [{ name: profile.name, url: siteUrl }],
    creator: profile.name,
    publisher: profile.name,
    alternates: {
      canonical: seo.path,
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      url: seo.path,
      siteName: profile.name,
      title: copy.meta.title,
      description: copy.meta.description,
      locale: seo.openGraphLocale,
      alternateLocale: alternateLocales,
      images: [
        {
          url: "/editorial-collage.png",
          width: 1024,
          height: 1280,
          alt: copy.cover.artworkAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.meta.title,
      description: copy.meta.description,
      images: ["/editorial-collage.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function buildProfileStructuredData(locale: Locale) {
  const copy = portfolioCopy[locale];
  const seo = localeSeo[locale];
  const canonicalUrl = new URL(seo.path, siteUrl).toString();

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${canonicalUrl}#profile-page`,
    url: canonicalUrl,
    name: copy.meta.title,
    description: copy.meta.description,
    inLanguage: seo.htmlLang,
    mainEntity: {
      "@type": "Person",
      "@id": `${siteUrl}/#laura-torquato`,
      name: profile.name,
      url: siteUrl,
      jobTitle: seo.role,
      sameAs: [profile.contacts.linkedin, profile.contacts.github],
      knowsAbout: [
        "Front-end development",
        "React",
        "TypeScript",
        "Next.js",
        "Design systems",
        "Web accessibility",
        "Web performance",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "São Paulo",
        addressCountry: "BR",
      },
      worksFor: {
        "@type": "Organization",
        name: "Sympla",
      },
    },
  };
}
