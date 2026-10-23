import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Laura Torquato · Front-end Developer",
    template: "%s · Laura Torquato",
  },
  description:
    "Portfólio de Laura Torquato, desenvolvedora front-end especializada em React, Next.js e TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
