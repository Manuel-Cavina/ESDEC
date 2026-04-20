// components/areas/AreaInDevelopmentPage.tsx
// Minimal editorial landing for temporary ESDEC area pages.

import Link from "next/link";
import BrandLines from "@/components/BrandLines";
import FingerprintSVG from "@/components/FingerprintSVG";
import ScrollReveal from "@/components/ScrollReveal";
import { AREA_PAGE_ORDER, AREA_PAGES, type AreaPageConfig } from "@/content/areas";
import { getAreaPath, getAreaWhatsappHref } from "@/lib/areas";

interface AreaInDevelopmentPageProps {
  area: AreaPageConfig;
}

export default function AreaInDevelopmentPage({
  area,
}: AreaInDevelopmentPageProps) {
  const whatsappHref = getAreaWhatsappHref(area);
  const ecosystemAreas = AREA_PAGE_ORDER.map((slug) => AREA_PAGES[slug]);

  return (
    <main className="overflow-hidden bg-[var(--bg)] text-[var(--t1)]">
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-[var(--bg)]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(38,92,197,0.96) 0%, rgba(50,105,199,0.94) 48%, rgba(36,82,168,0.98) 100%)",
          }}
          aria-hidden="true"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 34%, rgba(90,200,255,0.14) 0%, rgba(90,200,255,0.05) 24%, transparent 58%)",
          }}
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.12] [--fps:rgba(255,255,255,0.95)] [--fpg:rgba(255,255,255,0.04)]"
          aria-hidden="true"
        >
          <FingerprintSVG animate={false} className="w-[58vw] max-w-[520px]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-landing flex-col justify-center px-6 pb-14 pt-28 md:pb-20 md:pt-32">
          <div className="mx-auto max-w-5xl text-center">
            <ScrollReveal direction="up">
              <div className="mb-8 flex items-center justify-center gap-3">
                <BrandLines size="sm" animated centered />
              </div>

              <div className="font-condensed text-[clamp(44px,7vw,108px)] font-black uppercase leading-[0.88] tracking-tight">
                <span className="block text-[var(--t1)]">AREA EN</span>
                <span className="block text-[var(--p1)]">DESARROLLO.</span>
                <span className="mt-2 block text-[0.55em] font-bold tracking-normal text-[rgba(255,255,255,0.72)]">
                  -
                </span>
                <span className="mt-2 block text-[0.48em] text-[var(--t1)]">NO SON PAGINAS</span>
                <span className="block text-[0.48em] text-[var(--t1)]">VACIAS.</span>
                <div className="mx-auto mt-8 max-w-[14ch] text-[0.82em] leading-[0.92] text-[var(--t1)]">
                  <span className="block">
                    SON LA BASE DE <span className="text-[var(--p2)]">TU</span>
                  </span>
                  <span className="block">
                    BIENESTAR Y <span className="text-[var(--p2)]">EVOLUCION.</span>
                  </span>
                </div>
              </div>

              <div className="mt-10 flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-6">
                <Link
                  href="/deportistas"
                  className="inline-flex min-h-[54px] w-full max-w-[320px] items-center justify-center rounded-[18px] bg-[#78d0ff] px-8 py-3 font-condensed text-[0.84rem] font-bold uppercase tracking-[0.3em] text-[#0f326f] transition-all duration-200 hover:-translate-y-px hover:brightness-105 md:min-w-[320px]"
                >
                  {area.athleteCtaLabel}
                </Link>
                <Link
                  href="/profesionales"
                  className="inline-flex min-h-[54px] w-full max-w-[320px] items-center justify-center rounded-[18px] bg-[#15dc62] px-8 py-3 font-condensed text-[0.84rem] font-bold uppercase tracking-[0.3em] text-[#05213d] transition-all duration-200 hover:-translate-y-px hover:brightness-105 md:min-w-[320px]"
                >
                  {area.professionalCtaLabel}
                </Link>
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-condensed text-[11px] font-bold uppercase tracking-[0.26em] text-white/74 transition-colors duration-200 hover:text-[var(--p1)]"
              >
                {area.contactCtaLabel}
                <span aria-hidden="true">→</span>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--bg2)] py-24 md:py-28">
        <div className="relative z-10 mx-auto max-w-landing px-6">
          <ScrollReveal direction="up" className="mb-12 max-w-3xl">
            <BrandLines animated className="mb-5" />
            <p className="font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
              Ecosistema ESDEC
            </p>
            <h2 className="font-condensed text-[clamp(40px,5vw,72px)] font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
              Todas las areas.
            </h2>
            <p className="mt-5 max-w-[56ch] font-sans text-[0.96rem] leading-[1.9] text-[var(--t2)]">
              Explora las 6 areas del ecosistema ESDEC.
            </p>
          </ScrollReveal>

          <div className="border-t border-white/12">
            {ecosystemAreas.map((item, index) => (
              <ScrollReveal key={item.slug} direction="up" delay={index * 70}>
                <Link
                  href={getAreaPath(item.slug)}
                  className={`group grid gap-4 border-b border-white/12 py-6 transition-colors duration-200 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start md:gap-6 ${
                    item.slug === area.slug ? "pointer-events-none opacity-55" : "hover:text-white"
                  }`}
                >
                  <div>
                    <p className="font-condensed text-[11px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
                      {item.slug === area.slug ? "Area actual" : "Area del ecosistema"}
                    </p>
                    <h3 className="mt-3 font-condensed text-[28px] font-semibold uppercase leading-[0.98] tracking-[0.02em] text-[var(--t1)] transition-colors duration-200 group-hover:text-[var(--p1)]">
                      {item.navLabel}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-6">
                    <p className="max-w-[48ch] font-sans text-[0.95rem] leading-[1.9] text-[var(--t2)] transition-colors duration-200 group-hover:text-white/82">
                      {item.intro}
                    </p>
                    <div className="flex flex-col gap-2 md:min-w-[170px] md:items-end md:text-right">
                      <span className="font-condensed text-[0.78rem] font-bold uppercase tracking-[0.24em] text-[var(--t2)]">
                        En desarrollo
                      </span>
                      {item.slug !== area.slug ? (
                        <span className="font-condensed text-[0.74rem] font-bold uppercase tracking-[0.24em] text-[var(--p1)] transition-colors duration-200 group-hover:text-white">
                          Ver area
                        </span>
                      ) : null}
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={120}>
            <div className="mt-12 text-center">
              <Link
                href="/ecosistema-deportivo-cordoba"
                className="inline-flex items-center gap-2 font-condensed text-[11px] font-bold uppercase tracking-[0.26em] text-white/68 transition-colors duration-200 hover:text-[var(--p1)]"
              >
                Volver al ecosistema completo
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
