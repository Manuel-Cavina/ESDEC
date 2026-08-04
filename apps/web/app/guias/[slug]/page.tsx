// app/guias/[slug]/page.tsx
// Pagina individual de guia ESDEC — contenido long-form autosuficiente (capa AEO).

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GUIDES } from "@/content/guias";
import { getAreaBySlug, getAreaPath } from "@/lib/areas";
import { buildGuideJsonLd, buildGuideMetadata } from "@/lib/guides";

interface GuiaPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }));
}

function getGuide(slug: string) {
  return GUIDES.find((guide) => guide.slug === slug);
}

export function generateMetadata({ params }: GuiaPageProps): Metadata {
  const guide = getGuide(params.slug);
  if (!guide) return {};
  return buildGuideMetadata(guide);
}

export default function GuiaPage({ params }: GuiaPageProps) {
  const guide = getGuide(params.slug);
  if (!guide) notFound();

  const area = getAreaBySlug(guide.pillar);
  const jsonLd = buildGuideJsonLd(guide);

  return (
    <>
      <div className="nav-visible">
        <Navbar audience={null} />
      </div>
      <main className="bg-[var(--bg2)] px-6 pb-24 pt-32 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[72ch]">
          <Link
            href="/guias"
            className="font-condensed text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[var(--p1)] no-underline transition-colors hover:text-white"
          >
            ← Guías
          </Link>

          <p className="mt-6 font-condensed text-[12px] font-bold uppercase tracking-[3px] text-[var(--p1)]">
            {area.shortName} · ESDEC — Ecosistema Deportivo de Córdoba
          </p>
          <h1 className="mt-3 font-condensed text-[clamp(2rem,4.5vw,3.2rem)] font-black uppercase leading-[1.02] tracking-tight text-[var(--t1)]">
            {guide.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-[0.82rem] text-[var(--t2)]">
            <span>Por {guide.author}</span>
            <span aria-hidden="true">·</span>
            <span>Actualizado el {guide.updatedAt}</span>
          </div>

          <p className="mt-8 font-sans text-[1.05rem] leading-[1.9] text-[var(--t1)]/90">
            {guide.intro}
          </p>

          <div className="mt-12 flex flex-col gap-10">
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-condensed text-[1.2rem] font-bold uppercase tracking-tight text-[var(--t1)]">
                  {section.heading}
                </h2>
                <div className="mt-3 flex flex-col gap-3">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="font-sans text-[0.97rem] leading-[1.85] text-[var(--t2)]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 border-t border-white/10 pt-8">
            <Link
              href={getAreaPath(guide.pillar)}
              className="inline-flex items-center gap-2 font-condensed text-[0.85rem] font-bold uppercase tracking-[0.1em] text-[var(--p1)] no-underline transition-colors hover:text-white"
            >
              Conocer {area.shortName} en ESDEC →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
