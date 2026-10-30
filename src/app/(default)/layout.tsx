import type { Metadata } from "next";
import "../globals.css";
import { buildMetadata, localeSeo } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("pt");

export default function PortugueseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={localeSeo.pt.htmlLang}>
      <body>{children}</body>
    </html>
  );
}
