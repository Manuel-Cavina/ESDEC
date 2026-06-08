// sections/ecosistema/ConvictionBannerSection.tsx
// Franja full-width con imagen de fondo y las tres ideas fuerza.

import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import { ECOSISTEMA_OVERVIEW } from "@/content/ecosistema";

export default function ConvictionBannerSection() {
  const { whatIs } = ECOSISTEMA_OVERVIEW;

  return (
    <section className="relative isolate overflow-hidden bg-[#01305c] px-6 py-24 md:py-28 [--p1:#0580D3] [--p2:#0CD25E]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,26,51,0.88) 0%, rgba(1,37,71,0.8) 28%, rgba(0,26,51,0.92) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-landing text-center">
        <div className="mb-6 flex items-center justify-center gap-3">
          <BrandLines size="sm" animated centered />
          <Kicker>Conviccion con estructura</Kicker>
        </div>

        <h2 className="mx-auto max-w-[14ch] font-condensed text-[2.2rem] font-bold uppercase leading-[0.96] tracking-[-0.03em] text-white md:text-[3rem]">
          <span className="block">{whatIs.headlinePre}</span>
          <span className="block text-[var(--p1)]">{whatIs.headlineAccent}</span>
          <span className="block">{whatIs.headlinePost}</span>
        </h2>

        <p className="mx-auto mt-6 max-w-[50ch] font-sans text-[1rem] leading-[1.8] text-white/82 md:text-[1.04rem]">
          {whatIs.body}
        </p>

        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {whatIs.highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-[18px] bg-white/[0.06] px-5 py-5 text-left shadow-[0_16px_42px_-24px_rgba(0,0,0,0.45)] backdrop-blur-sm"
            >
              <Kicker className="mb-2">{item.label}</Kicker>
              <p className="mt-3 font-condensed text-[1rem] font-semibold uppercase leading-[1.05] tracking-[0.01em] text-white">
                {item.title}
              </p>
              <p className="mt-2 font-sans text-[0.88rem] leading-[1.75] text-white/72">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
