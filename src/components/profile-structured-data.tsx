import type { Locale } from "@/i18n/config";
import { buildProfileStructuredData } from "@/lib/seo";

export function ProfileStructuredData({ locale }: { locale: Locale }) {
  const structuredData = buildProfileStructuredData(locale);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
