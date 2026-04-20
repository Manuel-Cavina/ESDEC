"use client";

// sections/ecosistema/WhoWeAreSection.tsx
// Seccion editorial "Quienes somos" con titulo protagonista y cards sinteticas.

import Image from "next/image";
import BrandLines from "@/components/BrandLines";
import FingerprintSVG from "@/components/FingerprintSVG";
import ScrollReveal from "@/components/ScrollReveal";
import { ECOSISTEMA_MVV, ECOSISTEMA_OVERVIEW } from "@/content/ecosistema";

export default function WhoWeAreSection() {
  const { whoWeAre } = ECOSISTEMA_OVERVIEW;
  const { columns } = ECOSISTEMA_MVV;

  return (
    <section className="relative overflow-hidden bg-[#01305c] px-6 py-24 md:py-28 [--p1:#5ac8ff] [--p2:#7de8a8] [--t1:#ffffff] [--t2:rgba(255,255,255,0.78)]">
      <div
        className="pointer-events-none absolute right-[-4%] top-10 hidden opacity-[0.14] lg:block [--fps:rgba(90,200,255,0.28)] [--fpg:rgba(90,200,255,0.02)]"
        aria-hidden="true"
      >
        <FingerprintSVG animate={false} className="w-[340px]" />
      </div>

      <div className="mx-auto max-w-landing">
        <ScrollReveal direction="up">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)] xl:items-end">
            <div className="max-w-5xl">
              <div className="mb-4 flex items-center gap-3">
                <BrandLines size="sm" animated />
                <p className="ecos-kicker">{whoWeAre.eyebrow}</p>
              </div>

              <h2 className="ecos-title">
                <span className="block">{whoWeAre.headlinePre}</span>
                <span className="ecos-title-accent block">{whoWeAre.headlineAccent}</span>
                <span className="block">{whoWeAre.headlinePost}</span>
              </h2>

              <p className="mt-6 max-w-[44ch] font-sans text-[0.98rem] leading-[1.95] text-[var(--t2)]">
                {whoWeAre.subtext}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[30px] border border-white/12 bg-white/[0.05] p-5 shadow-[0_24px_56px_-34px_rgba(0,0,0,0.55)] backdrop-blur-md">
              <span
                className="pointer-events-none absolute left-0 top-0 h-px w-full bg-[linear-gradient(90deg,rgba(125,232,168,0.9)_0%,rgba(90,200,255,0.92)_100%)]"
                aria-hidden="true"
              />
              <div className="relative aspect-[1.18/1] overflow-hidden rounded-[22px]">
                <Image
                  src={whoWeAre.image}
                  alt={whoWeAre.imageAlt}
                  fill
                  quality={92}
                  sizes="(min-width: 1280px) 34vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,48,92,0.08)_0%,rgba(1,48,92,0.34)_56%,rgba(1,48,92,0.82)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p2)]">
                    Lo que sostiene ESDEC
                  </p>
                  <p className="mt-3 max-w-[26ch] font-condensed text-[1.45rem] font-semibold uppercase leading-[0.98] tracking-[0.02em] text-white">
                    Profesionales, tecnologia y criterio dentro de una misma lectura.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal cascade cascadeDelay={100} className="mt-16">
          <div className="grid gap-5 md:grid-cols-3">
            {columns.map((item) => (
              <article
                key={item.id}
                className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.05] p-6 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <span
                  className="pointer-events-none absolute left-0 top-0 h-px w-full origin-left bg-[linear-gradient(90deg,rgba(125,232,168,0.9)_0%,rgba(90,200,255,0.92)_100%)] transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <p className="font-display text-[4.7rem] leading-none text-white/92 md:text-[5.4rem]">
                  {item.number}
                </p>
                <p className="mt-5 font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
                  {item.label}
                </p>
                <h3 className="mt-4 font-condensed text-[1.95rem] uppercase leading-[0.96] tracking-[0.01em] text-[var(--t1)]">
                  {item.headlineAccent}
                </h3>
                <p className="mt-4 max-w-[24ch] font-sans text-[0.92rem] leading-[1.85] text-[var(--t2)]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
