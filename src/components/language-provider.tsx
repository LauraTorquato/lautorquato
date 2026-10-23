"use client";

import i18next from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { useEffect, useState, type PropsWithChildren } from "react";
import type { Locale } from "@/i18n/config";
import { portfolioCopy } from "@/i18n/resources";

const resources = Object.fromEntries(
  Object.entries(portfolioCopy).map(([locale, translation]) => [
    locale,
    { translation },
  ]),
);

function createI18n(locale: Locale) {
  const instance = i18next.createInstance();
  void instance.use(initReactI18next).init({
    lng: locale,
    fallbackLng: "pt",
    resources,
    interpolation: { escapeValue: false },
  });
  return instance;
}

export function LanguageProvider({
  locale,
  children,
}: PropsWithChildren<{ locale: Locale }>) {
  const [instance] = useState(() => createI18n(locale));

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return <I18nextProvider i18n={instance}>{children}</I18nextProvider>;
}
