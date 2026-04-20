// app/page.tsx
// Home ESDEC — portada pura.
// Navbar + hero split + bridge mínimo.
// Server Component.

import Link from "next/link";
import HeroSectionRouted from "@/sections/HeroSectionRouted";

export default function HomePage() {
  return (
    <main>
      <HeroSectionRouted />

      <section className="border-t border-white/10 bg-[linear-gradient(180deg,var(--bg2)_0%,color-mix(in_srgb,var(--bg2)_74%,#09142d)_100%)] px-6 py-7">
        <div className="mx-auto flex max-w-[920px] flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="font-sans text-[0.84rem] leading-relaxed text-[var(--t2)]">
            El futuro del deportista no se improvisa. Se construye.
          </p>
          <Link
            href="/ecosistema-deportivo-cordoba"
            className="font-condensed text-[11px] font-semibold uppercase tracking-[3px] text-[var(--p1)] transition-colors duration-200 hover:text-white"
          >
            Conocer ESDEC →
          </Link>
        </div>
      </section>
    </main>
  );
}
