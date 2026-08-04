// sections/market/MarketComingSoonSection.tsx
// Landing "proximamente" para Market Deportivo — explica el concepto del area
// sin simular que ya esta en funcionamiento (a diferencia de las areas ya lanzadas).

import Link from "next/link";
import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import ScrollReveal from "@/components/ScrollReveal";
import FingerprintSVG from "@/components/FingerprintSVG";
import IconFeatureCard from "@/components/ui/IconFeatureCard";
import FAQSection from "@/components/FAQSection";
import { type AreaPageConfig } from "@/content/areas";
import { getAreaPath, getAreaWhatsappHref } from "@/lib/areas";

interface MarketComingSoonSectionProps {
  area: AreaPageConfig;
}

export default function MarketComingSoonSection({ area }: MarketComingSoonSectionProps) {
  const whatsappHref = getAreaWhatsappHref(area);

  return (
    <main className="overflow-hidden bg-[var(--bg)] text-[var(--t1)]">
      <section className="relative isolate overflow-hidden bg-[var(--bg)] px-6 pb-20 pt-32 md:pb-28 md:pt-40">
        <div
          className="pointer-events-none absolute -right-24 top-20 hidden w-[38vw] max-w-[480px] opacity-[0.14] [--fpg:rgba(90,200,255,0.05)] [--fps:rgba(90,200,255,0.42)] lg:block"
          aria-hidden="true"
        >
          <FingerprintSVG animate className="w-full animate-fp-float" strokeOpacity={0.5} />
        </div>

        <div className="relative z-10 mx-auto max-w-landing">
          <ScrollReveal direction="up" className="max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <BrandLines size="md" animated />
              <Kicker withDot>Próximamente</Kicker>
            </div>
            <h1 className="font-condensed text-[clamp(2.6rem,5.5vw,4.6rem)] font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
              {area.h1}
            </h1>
            {area.keyword && (
              <h2 className="mt-4 font-condensed text-[0.78rem] font-bold uppercase tracking-[0.28em] text-[var(--p1)] md:text-[0.85rem]">
                {area.keyword}
              </h2>
            )}
            <p className="mt-6 max-w-[56ch] font-sans text-[1rem] leading-[1.9] text-[var(--t2)]">
              {area.intro}
            </p>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-[56px] items-center justify-center rounded-full bg-[var(--p1)] px-8 font-sans text-[0.86rem] font-semibold uppercase tracking-[0.04em] text-[#06275f] no-underline transition-all duration-300 hover:-translate-y-1 hover:brightness-110 hover:no-underline"
            >
              {area.contactCtaLabel} →
            </a>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--bg2)] px-6 py-20 md:py-24">
        <div className="relative z-10 mx-auto max-w-landing">
          <ScrollReveal cascade cascadeDelay={80} className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {area.sections.map((block) => (
              <IconFeatureCard key={block.title} title={block.title} body={block.body} />
            ))}
          </ScrollReveal>
        </div>
      </section>

      {area.faq && area.faq.length > 0 && (
        <FAQSection
          id="preguntas-frecuentes"
          eyebrow="Preguntas frecuentes"
          headline="MARKET DEPORTIVO,"
          headlineAccent="SIN VUELTAS."
          items={area.faq}
        />
      )}

      <section className="relative overflow-hidden bg-[var(--bg)] px-6 py-20 md:py-24">
        <div className="relative z-10 mx-auto max-w-landing">
          <ScrollReveal direction="up" className="mb-10 max-w-2xl">
            <Kicker className="mb-3">Mientras tanto</Kicker>
            <h2 className="font-condensed text-[clamp(1.8rem,3.5vw,2.6rem)] font-black uppercase leading-[0.95] tracking-tight text-[var(--t1)]">
              {area.relatedTitle}
            </h2>
          </ScrollReveal>

          <div className="border-t border-white/12">
            {area.relatedLinks.map((link) => (
              <Link
                key={link.slug}
                href={getAreaPath(link.slug)}
                className="group flex flex-col gap-2 border-b border-white/12 py-6 transition-colors duration-200 hover:text-white md:flex-row md:items-center md:justify-between md:gap-6"
              >
                <h3 className="font-condensed text-[1.3rem] font-semibold uppercase leading-[1] tracking-[0.01em] text-[var(--t1)] transition-colors duration-200 group-hover:text-[var(--p1)]">
                  {link.label}
                </h3>
                <p className="max-w-[46ch] font-sans text-[0.9rem] leading-[1.7] text-[var(--t2)]">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
