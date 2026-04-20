// sections/ecosistema/RecorridosSection.tsx
// Sección final: tres recorridos. Paleta CSS vars (= /deportistas).

import Link from "next/link";
import BrandLines from "@/components/BrandLines";
import ScrollReveal from "@/components/ScrollReveal";
import { ECOSISTEMA_RECORRIDOS } from "@/content/ecosistema";

export default function RecorridosSection() {
  const { eyebrow, headline, headlineAccent, subtext, items } = ECOSISTEMA_RECORRIDOS;

  return (
    <section className="bg-[#01305c] px-6 py-24 [--p1:#5ac8ff] [--p2:#7de8a8] [--t1:#ffffff] [--t2:rgba(255,255,255,0.78)] [--card-bg:rgba(255,255,255,0.05)] [--card-bg2:rgba(255,255,255,0.08)]">
      <div className="mx-auto max-w-landing">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="mb-14 max-w-xl">
            <div className="mb-3 flex items-center gap-3">
              <BrandLines size="sm" animated />
              <p className="ecos-kicker">
                {eyebrow}
              </p>
            </div>
            <h2 className="ecos-title-compact mt-3">
              {headline}{" "}
              <span className="ecos-title-accent">
                {headlineAccent}
              </span>
            </h2>
            <p className="mt-4 font-sans text-[0.93rem] leading-[1.8] text-[var(--t2)]">
              {subtext}
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <ScrollReveal cascade cascadeDelay={100}>
          <div className="grid gap-5 sm:grid-cols-3">
            {items.map((item) => (
              <Link
                key={item.number}
                href={item.href}
                className="group spec-card-accent relative flex flex-col overflow-hidden rounded-[24px] bg-[var(--card-bg)] p-7 shadow-[0_22px_54px_-30px_rgba(0,0,0,0.52)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--card-bg2)] hover:shadow-[0_28px_64px_-30px_rgba(0,0,0,0.62)]"
                style={{ "--p1": item.accent } as React.CSSProperties}
              >
                {/* Number */}
                <span
                  className="mb-4 block font-display text-[3.5rem] leading-none"
                  style={{ color: item.accent, opacity: 0.12 }}
                >
                  {item.number}
                </span>

                {/* Eyebrow */}
                <p
                  className="font-condensed text-[10px] font-semibold uppercase tracking-[4px]"
                  style={{ color: item.accent }}
                >
                  {item.eyebrow}
                </p>

                {/* Title */}
                <h3 className="mt-2 font-condensed text-[1.45rem] uppercase leading-[1.05] tracking-[-0.01em] text-[var(--t1)]">
                  {item.title}
                </h3>

                {/* Body */}
                <p className="mt-3 flex-1 font-sans text-[0.9rem] leading-[1.75] text-[var(--t2)]">
                  {item.body}
                </p>

                {/* CTA */}
                <div className="mt-6 flex items-center gap-2">
                  <span
                    className="font-condensed text-[0.82rem] font-semibold uppercase tracking-[2px] transition-colors duration-200"
                    style={{ color: item.accent }}
                  >
                    {item.cta}
                  </span>
                  <span
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    style={{ color: item.accent }}
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
