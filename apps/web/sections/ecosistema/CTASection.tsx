// sections/ecosistema/CTASection.tsx
// Cierre editorial con accesos directos a los recorridos principales.

import Link from "next/link";
import BrandLines from "@/components/BrandLines";
import { ECOSISTEMA_HERO, ECOSISTEMA_OVERVIEW } from "@/content/ecosistema";

export default function CTASection() {
  const { cta } = ECOSISTEMA_OVERVIEW;
  const { ctaDeportista, ctaProfesional } = ECOSISTEMA_HERO;

  return (
    <section className="relative overflow-hidden bg-[#01305c] px-6 py-24 md:py-28 [--p1:#5ac8ff] [--p2:#7de8a8] [--t1:#ffffff] [--t2:rgba(255,255,255,0.78)] [--btn-bg:#5ac8ff] [--btn-t:#01305c]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-landing rounded-[32px] bg-[#234d9e]/70 px-6 py-10 text-center shadow-[0_26px_60px_-34px_rgba(0,0,0,0.6)] backdrop-blur-sm md:px-10 md:py-14">
        <div className="mb-5 flex items-center justify-center gap-3">
          <BrandLines size="sm" animated centered />
          <p className="ecos-kicker">
            {cta.eyebrow}
          </p>
        </div>

        <h2 className="ecos-title-compact">
          {cta.headlinePre}{" "}
          <span className="ecos-title-accent">
            {cta.headlineAccent}
          </span>
          <br />
          {cta.headlinePost}
        </h2>

        <p className="mx-auto mt-5 max-w-[52ch] font-sans text-[0.94rem] leading-[1.9] text-[var(--t2)]">
          {cta.body}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
          <Link
            href={cta.primaryHref}
            className="inline-flex min-h-[54px] w-full max-w-[320px] items-center justify-center rounded-[18px] bg-[#78d0ff] px-8 py-3 font-condensed text-[0.84rem] font-bold uppercase tracking-[0.3em] text-[#0f326f] transition-all duration-200 hover:-translate-y-px hover:brightness-105 md:min-w-[320px]"
          >
            {ctaDeportista}
          </Link>
          <Link
            href={cta.secondaryHref}
            className="inline-flex min-h-[54px] w-full max-w-[320px] items-center justify-center rounded-[18px] bg-[#15dc62] px-8 py-3 font-condensed text-[0.84rem] font-bold uppercase tracking-[0.3em] text-[#05213d] transition-all duration-200 hover:-translate-y-px hover:brightness-105 md:min-w-[320px]"
          >
            {ctaProfesional}
          </Link>
        </div>
      </div>
    </section>
  );
}
