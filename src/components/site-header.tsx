"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import type { Locale } from "@/i18n/config";

const sectionIds = ["about", "work", "journey", "contact"];

export function SiteHeader({
  locale,
  navigation,
}: {
  locale: Locale;
  navigation: string[];
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 grid min-h-[66px] grid-cols-[1fr_auto_auto] items-center gap-2.5 border-y border-ink bg-paper/95 px-[clamp(20px,3.3vw,64px)] md:min-h-[76px] md:grid-cols-[1fr_auto_1fr] md:gap-0">
      <a
        className="w-max text-[21px] font-black uppercase"
        href="#cover"
        aria-label="Laura — início"
      >
        Laura{" "}
        <span className="ml-2.5 hidden font-mono text-xs font-normal md:inline">
          Issue nº 01
        </span>
      </a>
      <button
        className="order-3 grid size-10 place-items-center rounded-full border border-ink bg-transparent transition-colors hover:bg-ink hover:text-paper md:hidden"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="main-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? (
          <X aria-hidden="true" size={20} />
        ) : (
          <Menu aria-hidden="true" size={20} />
        )}
        <span className="sr-only">Menu</span>
      </button>
      <nav
        id="main-menu"
        className={`${menuOpen ? "flex" : "hidden"} absolute inset-x-0 top-[65px] flex-col gap-[18px] border-b border-ink bg-paper px-[clamp(20px,3.3vw,64px)] py-[26px] font-mono text-[15px] font-bold md:static md:flex md:flex-row md:gap-8 md:border-0 md:bg-transparent md:p-0 md:text-xs`}
        aria-label="Navegação principal"
      >
        {navigation.map((item, index) => (
          <a
            className="py-2.5 transition-opacity hover:underline hover:underline-offset-[5px]"
            key={sectionIds[index]}
            href={`#${sectionIds[index]}`}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </nav>
      <div
        className="order-2 justify-self-end rounded-full border border-ink p-[3px] font-mono text-xs uppercase md:order-none"
        aria-label="Idioma"
      >
        <div className="flex gap-[3px]">
          {(["pt", "en", "es"] as const).map((item) => (
            <Link
              key={item}
              className={`grid size-8 place-items-center rounded-full md:size-10 ${locale === item ? "bg-ink text-paper" : ""}`}
              href={`/${item}`}
              aria-current={locale === item ? "page" : undefined}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
