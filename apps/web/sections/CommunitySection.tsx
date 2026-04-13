"use client";

// ─────────────────────────────────────────────────────────────────────────────
// sections/CommunitySection.tsx
// Sección — Comunidad / Header + galería full-bleed del equipo.
// ─────────────────────────────────────────────────────────────────────────────

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import BrandLines from "@/components/BrandLines";
import { COMMUNITY } from "@/content/landing";

const BLUR =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";

export default function CommunitySection() {
  return (
    <section id="community" className="bg-[var(--bg)]">

      {/* Header */}
      <div className="mx-auto max-w-landing px-6 pb-10 pt-20">
        <ScrollReveal direction="up">
          <BrandLines animated className="mb-5" />
          <p className="mb-3 font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
            {COMMUNITY.eyebrow}
          </p>
          <h2
            className="font-condensed font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]"
            style={{ fontSize: "clamp(36px, 5.5vw, 80px)" }}
          >
            {COMMUNITY.headline}{" "}
            <span className="text-[var(--p1)]">{COMMUNITY.headlineAccent}</span>
          </h2>
        </ScrollReveal>
      </div>

      {/* Galería */}
      <div className="community-gallery">
        {COMMUNITY.photos.map((photo, i) => (
          <div key={photo.src} className="community-panel">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="community-img"
              placeholder="blur"
              blurDataURL={BLUR}
              priority={i === 0}
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="community-overlay" />
            {i < COMMUNITY.photos.length - 1 && (
              <div className="community-sep" />
            )}
          </div>
        ))}
      </div>

    </section>
  );
}
