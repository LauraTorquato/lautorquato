"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, Asterisk } from "lucide-react";
import { useTranslation } from "react-i18next";
import editorialCollage from "../../public/editorial-collage.png";
import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import type { PortfolioCopy } from "@/i18n/resources";
import { LanguageProvider } from "./language-provider";
import { SiteHeader } from "./site-header";

const sectionIds = ["about", "work", "journey", "contact"];
const labelClass = "m-0 font-mono text-xs font-bold uppercase leading-[1.3]";
const pillsClass = "mt-[34px] flex list-none flex-wrap gap-2 p-0";
const pillClass =
  "rounded-full border border-current px-[13px] py-2 font-mono text-[11px] font-bold uppercase";
const featureTone = {
  red: "bg-editorial-red lg:row-span-2",
  green: "bg-editorial-green text-paper",
  yellow: "bg-editorial-yellow",
} as const;

function SectionLabel({ children }: { children: string }) {
  return <p className={labelClass}>{children}</p>;
}

function Portfolio({ locale }: { locale: Locale }) {
  const { i18n } = useTranslation();
  const copy = i18n.getResourceBundle(locale, "translation") as PortfolioCopy;

  return (
    <>
      <SiteHeader locale={locale} navigation={copy.nav} />
      <main id="cover">
        <section
          className="overflow-hidden px-[clamp(20px,3.3vw,64px)] pt-5 pb-9 md:pt-6"
          aria-labelledby="cover-title"
        >
          <div className="grid grid-cols-2 font-mono text-xs font-bold uppercase md:grid-cols-3">
            <span>{copy.cover.role}</span>
            <span className="text-right md:text-center">
              {copy.cover.location}
            </span>
            <span className="hidden text-right md:block">
              {copy.cover.date}
            </span>
          </div>
          <p className="mt-7 mb-[52px] flex items-center gap-2 font-mono text-xs uppercase md:mb-[4vh]">
            <span
              className="size-[11px] rounded-full border-2 border-[#91d9ab] bg-[#00a958]"
              aria-hidden="true"
            />
            {copy.cover.available}
          </p>
          <h1
            className="relative z-[2] mx-auto mb-4 flex w-max max-w-full text-[clamp(80px,29vw,180px)] leading-[.74] font-black tracking-[-.075em] uppercase md:-mb-[1.5vw] md:text-[clamp(110px,20vw,390px)]"
            aria-label="Laura"
          >
            {Array.from("Laura").map((letter, index) => (
              <span
                className="animate-letter-dance motion-reduce:animate-none inline-block origin-bottom"
                style={{ animationDelay: `${index * -0.16}s` }}
                aria-hidden="true"
                key={`${letter}-${index}`}
              >
                {letter}
              </span>
            ))}
          </h1>
          <span className="relative z-[3] mr-[1.2vw] mb-6 ml-auto block w-max -rotate-3 rounded-full border border-ink bg-editorial-yellow px-[18px] pt-2.5 pb-2 font-mono text-[13px] font-black tracking-[.15em] uppercase shadow-[5px_5px_0_var(--color-editorial-red)] md:mb-3 md:text-lg">
            Torquato
          </span>

          <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-[1.05fr_1.45fr_.66fr]">
            <article className="flex min-w-0 flex-col rounded-[34px_34px_7px_34px] border border-ink bg-editorial-red p-6 [container-type:inline-size] md:min-h-[480px] md:p-8">
              <p className={labelClass}>{copy.cover.kicker}</p>
              <h2
                id="cover-title"
                className="mt-6 mb-7 text-[clamp(32px,11cqw,78px)] leading-[.88] font-bold tracking-[-.055em] md:mt-auto"
              >
                {copy.cover.title[0]}{" "}
                <mark className="mt-2 mr-2 inline-block max-w-[calc(100%-0.5rem)] -rotate-[1.5deg] rounded-full bg-paper px-2 pt-px pb-2 text-inherit">
                  {copy.cover.title[1]}
                </mark>
              </h2>
              <p className="max-w-[540px] text-[clamp(15px,1.2vw,19px)] leading-[1.45]">
                {copy.cover.summary}
              </p>
              <a
                className="mt-12 flex aspect-square w-[108px] -rotate-[7deg] items-center gap-1 rounded-full border border-ink bg-editorial-yellow p-[19px] font-mono text-[11px] leading-[1.1] font-black uppercase md:mt-auto"
                href="#about"
              >
                {copy.cover.start}
                <ArrowDown aria-hidden="true" size={18} />
              </a>
            </article>

            <figure className="relative m-0 flex min-w-0 flex-col overflow-hidden rounded-[7px] border border-ink bg-paper px-2.5 pt-2.5 md:col-auto">
              <span className="absolute top-0 left-2.5 z-[2] bg-editorial-green px-2 py-[11px] font-mono text-[11px] text-paper uppercase [writing-mode:vertical-rl]">
                Original
              </span>
              <Image
                className="aspect-[4/5] h-auto min-h-0 w-full flex-1 object-cover object-center md:aspect-auto"
                src={editorialCollage}
                alt={copy.cover.artworkAlt}
                width={1024}
                height={1280}
                priority
                sizes="(max-width:800px) 100vw,44vw"
              />
              <figcaption className="flex justify-between gap-4 py-[11px] font-mono text-[11px] uppercase">
                <span>{copy.cover.artworkCaption}</span>
                <span>Colagem original · 2026</span>
              </figcaption>
            </figure>

            <aside className="min-w-0 rounded-[7px_34px_34px_7px] border border-ink bg-editorial-yellow px-[25px] py-[30px] md:col-span-2 lg:col-span-1">
              <p className={labelClass}>{copy.cover.contents}</p>
              <ol className="mt-[25px] grid list-none grid-cols-1 p-0 md:grid-cols-2 lg:mt-[54px] lg:block">
                {copy.cover.items.map((item, index) => (
                  <li className="border-t border-ink last:border-b" key={item}>
                    <a
                      className="flex gap-[15px] py-5 font-mono text-xs"
                      href={`#${sectionIds[index]}`}
                    >
                      <span className="text-editorial-red">0{index + 1}</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </section>

        <div className="overflow-hidden py-3" aria-hidden="true">
          <div className="-mx-4 -rotate-1 overflow-hidden bg-editorial-green py-[13px] text-paper">
            <div className="animate-marquee motion-reduce:animate-none flex w-max">
              {[...copy.marquee, ...copy.marquee].map((item, index) => (
                <span
                  className="pr-4 font-mono text-sm font-bold uppercase"
                  key={`${item}-${index}`}
                >
                  {item} ✦
                </span>
              ))}
            </div>
          </div>
        </div>

        <section
          className="px-5 py-16 md:px-[clamp(36px,5.8vw,112px)] lg:pt-[110px] lg:pb-[120px]"
          id="about"
        >
          <SectionLabel>{copy.about.label}</SectionLabel>
          <div className="mx-0 mt-[45px] mb-20 grid grid-cols-1 gap-[55px] md:mx-[3vw] md:mt-[55px] md:mb-[100px] md:grid-cols-2 md:gap-[clamp(60px,14vw,250px)]">
            <div>
              <h2 className="m-0 text-[clamp(52px,20vw,130px)] leading-[.78] font-black tracking-[-.075em] md:text-[clamp(72px,8.5vw,164px)]">
                {copy.about.hello}
                <mark className="mt-5 block w-max -rotate-2 rounded-full bg-editorial-pink px-6 pt-1.5 pb-[15px] text-inherit">
                  {copy.about.name}
                </mark>
              </h2>
              <p className="mt-12 max-w-[500px] text-lg leading-[1.5]">
                {copy.about.intro}
              </p>
            </div>
            <div>
              <p className="mt-0 mb-[42px] text-[clamp(36px,4vw,65px)] leading-[1.02] font-extrabold tracking-[-.055em]">
                {copy.about.statement}
              </p>
              {copy.about.paragraphs.map((paragraph) => (
                <p
                  className="max-w-[720px] text-[17px] leading-[1.62]"
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
              <ul className={pillsClass}>
                {copy.about.tags.map((tag) => (
                  <li className={pillClass} key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <blockquote className="m-0 rounded-[40px] border border-ink bg-editorial-yellow px-6 py-[42px] text-center text-[clamp(36px,12vw,110px)] leading-[.92] font-extrabold tracking-[-.05em] md:rounded-[70px] md:px-[clamp(24px,10vw,200px)] md:py-[52px] md:text-[clamp(48px,6.5vw,110px)] md:tracking-[-.06em]">
            {copy.about.quote}
          </blockquote>
        </section>

        <section
          className="px-[clamp(20px,3.3vw,64px)] py-16 lg:py-[120px]"
          id="work"
        >
          <header className="mb-[70px] grid grid-cols-1 items-start gap-[38px] md:grid-cols-[1fr_2fr] md:gap-[50px] lg:grid-cols-[.7fr_1.25fr_.9fr]">
            <SectionLabel>{copy.work.label}</SectionLabel>
            <h2 className="m-0 text-[clamp(38px,13vw,120px)] leading-[.8] font-black tracking-[-.055em] md:text-[clamp(68px,7.5vw,140px)] md:leading-[.78] md:tracking-[-.075em]">
              {copy.work.title[0]}
              <strong className="block text-editorial-red">
                {copy.work.title[1]}
              </strong>
            </h2>
            <p className="m-0 max-w-[460px] text-[17px] leading-[1.55] md:col-start-2 lg:col-start-auto">
              {copy.work.intro}
            </p>
          </header>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.35fr_1fr] lg:grid-rows-2">
            {copy.work.cards.map((card, index) => (
              <article
                className={`relative flex min-w-0 flex-col overflow-hidden rounded-[7px_55px_7px_55px] border border-ink p-6 [container-type:inline-size] md:p-[30px] lg:min-h-[430px] ${featureTone[card.tone]}`}
                key={card.title}
              >
                <span className="font-mono text-xs uppercase">
                  Feature
                  <br />0{index + 1}
                </span>
                <div className="relative z-[2] mt-6 lg:mt-auto">
                  <p className={labelClass}>{card.eyebrow}</p>
                  <h3 className="my-[26px] mr-2 max-w-[calc(100%-0.5rem)] text-[clamp(24px,9cqw,88px)] leading-[.94] font-black tracking-[-.045em] md:tracking-[-.06em]">
                    {card.title}
                  </h3>
                  <p className="max-w-[720px] text-base leading-[1.5]">
                    {card.description}
                  </p>
                  <ul className={`${pillsClass} pr-[24%]`}>
                    {card.tags.map((tag) => (
                      <li className={pillClass} key={tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <ArrowUpRight
                  className="pointer-events-none absolute right-[3%] bottom-0 z-[1] h-auto w-[24%] opacity-15 [stroke-width:1]"
                  aria-hidden="true"
                />
              </article>
            ))}
          </div>
        </section>

        <section
          className="mt-[30px] rounded-t-[45px] bg-editorial-blue px-[clamp(20px,3.3vw,64px)] py-16 lg:mt-20 lg:rounded-t-[75px] lg:pt-[120px] lg:pb-[130px]"
          id="journey"
        >
          <div className="mb-12 grid grid-cols-1 gap-6 md:mb-20 md:grid-cols-[.65fr_1.8fr] md:gap-[30px]">
            <SectionLabel>{copy.journey.label}</SectionLabel>
            <h2 className="m-0 text-[clamp(38px,13vw,120px)] leading-[.8] font-black tracking-[-.055em] md:text-[clamp(68px,7.5vw,140px)] md:leading-[.78] md:tracking-[-.075em]">
              {copy.journey.title[0]}
              <strong className="text-editorial-red">
                {copy.journey.title[1]}
              </strong>
            </h2>
          </div>
          <div>
            {copy.journey.roles.map((role, index) => (
              <article
                className="grid grid-cols-[1fr_auto] gap-x-5 gap-y-6 border-t border-ink py-8 last:border-b md:grid-cols-[.55fr_1.4fr_auto] md:gap-[45px] md:py-[38px]"
                key={role.company}
              >
                <div className="flex flex-col gap-3.5 font-mono text-xs uppercase">
                  <span>{copy.journey.timeLabels[index]}</span>
                  <strong>{role.period}</strong>
                </div>
                <div className="col-span-2 row-start-2 md:col-span-1 md:col-start-2 md:row-start-1">
                  <h3 className="m-0 text-[clamp(36px,14vw,88px)] leading-none font-black tracking-[-.05em] md:text-[clamp(50px,5vw,88px)] md:tracking-[-.06em]">
                    {role.company}
                  </h3>
                  <h4 className="mt-3 mb-4 text-base text-editorial-green md:mt-4 md:mb-6">
                    {role.role}
                  </h4>
                  <p className="m-0 max-w-[700px] text-[17px] leading-[1.55]">
                    {role.description}
                  </p>
                </div>
                <span className="font-mono text-xs font-bold">
                  0{index + 1}
                </span>
              </article>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-8 pt-12 md:grid-cols-[.5fr_repeat(3,1fr)] md:gap-[42px] md:pt-[76px]">
            <SectionLabel>{copy.journey.toolbox}</SectionLabel>
            {copy.journey.toolGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mt-0 mb-3 font-mono text-xs font-bold uppercase md:mb-5">
                  {group.title}
                </h3>
                <p className="m-0 text-sm leading-[1.55]">{group.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="relative overflow-hidden bg-editorial-orange px-5 py-[50px] md:min-h-[810px] md:px-[clamp(40px,5.8vw,112px)] md:py-[70px]"
          id="contact"
        >
          <p className="max-w-[330px] text-[17px] leading-[1.45]">
            {copy.contact.prompt}
          </p>
          <div
            className="relative mt-6 ml-auto aspect-square w-[130px] overflow-hidden rounded-full border border-ink bg-editorial-yellow md:absolute md:top-8 md:right-[5%] md:mt-0 md:ml-0 md:w-[clamp(150px,15vw,230px)]"
            aria-label={copy.contact.sun}
          >
            <div className="animate-greeting-spin motion-reduce:animate-none relative size-full">
              {[
                { text: "Hi", lang: "en", rotation: 20 },
                { text: "Hola", lang: "es", rotation: 140 },
                { text: "Olá", lang: "pt", rotation: 260 },
              ].map((greeting) => (
                <span
                  className="absolute inset-[10%] flex justify-center font-mono text-[10px] font-bold uppercase md:text-[11px]"
                  style={{ transform: `rotate(${greeting.rotation}deg)` }}
                  lang={greeting.lang}
                  key={greeting.lang}
                >
                  {greeting.text}
                </span>
              ))}
              <Asterisk
                className="absolute top-1/2 left-1/2 size-[48px] -translate-1/2 [stroke-width:2] md:size-[62px]"
                aria-hidden="true"
              />
            </div>
          </div>
          <h2 className="mt-10 mb-0 text-[clamp(44px,18vw,180px)] leading-[.74] font-black tracking-[-.06em] md:mt-[35px] md:text-[clamp(120px,17vw,320px)] md:leading-[.62] md:tracking-[-.08em]">
            {copy.contact.title[0]}
            <span className="block text-paper [-webkit-text-stroke:2px_var(--color-ink)]">
              {copy.contact.title[1]}
            </span>
          </h2>
          <div className="relative mt-16 w-full md:absolute md:right-[6%] md:bottom-[70px] md:mt-0 md:w-[min(560px,36vw)]">
            {(
              Object.keys(profile.contacts) as Array<
                keyof typeof profile.contacts
              >
            ).map((contact) => (
              <a
                className="group flex items-center justify-between border-t border-ink py-5 font-mono text-xs uppercase transition-[padding] hover:px-2 focus-visible:px-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink last:border-b"
                href={profile.contacts[contact]}
                key={contact}
                rel={contact === "email" ? undefined : "noreferrer"}
                target={contact === "email" ? undefined : "_blank"}
              >
                <span>{copy.contact.links[contact]}</span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ))}
          </div>
        </section>
      </main>
      <footer className="grid min-h-[60px] grid-cols-2 items-center gap-5 bg-ink px-[clamp(20px,3.3vw,64px)] py-[22px] font-mono text-[11px] text-paper uppercase md:grid-cols-3 md:py-0">
        <span>{profile.name} © 2026</span>
        <span className="hidden text-center md:block">{copy.footer.made}</span>
        <a className="justify-self-end" href="#cover">
          {copy.footer.back}
        </a>
      </footer>
    </>
  );
}

export function PortfolioPage({ locale }: { locale: Locale }) {
  return (
    <LanguageProvider locale={locale}>
      <Portfolio locale={locale} />
    </LanguageProvider>
  );
}
