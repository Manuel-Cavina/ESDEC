// ─────────────────────────────────────────────────────────────────────────────
// app/eventos-deportivos/page.tsx
// Stub MVP 2 — la URL existe y es crawleable. Contenido real en la siguiente fase.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/constants";

export const revalidate = 86400; // revalidar cada 24hs cuando haya contenido real

export const metadata: Metadata = {
  title: "Eventos Deportivos en Córdoba — ESDEC",
  description:
    "Próximamente: eventos deportivos en Córdoba organizados por ESDEC. Activaciones, clínicas, y experiencias para deportistas y profesionales del ecosistema.",
  keywords: [
    "eventos deportivos córdoba",
    "activaciones deportivas córdoba",
    "clínicas deportivas córdoba",
    "ESDEC eventos",
  ],
  alternates: {
    canonical: `${SITE_URL}/eventos-deportivos`,
  },
};

export default function EventosPage() {
  return (
    <main>
      <div className="nav-visible">
        <Navbar audience={null} />
      </div>

      <section
        className="flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center"
        style={{ background: "var(--bg)" }}
      >
        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full border border-[var(--p1)]/40 bg-[var(--p1)]/10 px-4 py-1.5 font-condensed text-[11px] font-bold uppercase tracking-[5px] text-[var(--p1)]">
            Próximamente
          </span>

          <h1 className="font-condensed text-[clamp(2.5rem,8vw,5.5rem)] font-black uppercase leading-[0.9] tracking-tight text-[var(--t1)]">
            EVENTOS
            <br />
            <span style={{ color: "var(--p1)" }}>DEPORTIVOS</span>
            <br />
            CÓRDOBA
          </h1>

          <p className="mx-auto mt-6 max-w-md font-sans text-[1rem] leading-relaxed text-[var(--t2)]">
            Activaciones, clínicas y experiencias para deportistas y profesionales del ecosistema ESDEC.
            Seguinos para no perderte ninguna novedad.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/5493515117555"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[var(--btn-bg)] px-8 py-3.5 font-condensed text-[14px] font-bold uppercase tracking-[3px] text-[var(--btn-t)] transition-all duration-200 hover:-translate-y-px hover:brightness-110"
            >
              Recibir novedades →
            </a>
            <Link
              href="/"
              className="rounded-md border border-[var(--bd2)] px-8 py-3.5 font-condensed text-[14px] font-bold uppercase tracking-[3px] text-[var(--t1)] transition-all duration-200 hover:border-[var(--p1)] hover:text-[var(--p1)]"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
