"use client";

// ─────────────────────────────────────────────────────────────────────────────
// components/Footer.tsx
// Footer de la landing ESDEC.
// Layout: pre-footer CTA band | brand block + link groups | legal bar
// ─────────────────────────────────────────────────────────────────────────────

import { FOOTER, BRAND } from "@/content/landing";
import { cn } from "@/lib/utils";
import FingerprintSVG from "@/components/FingerprintSVG";
import BrandLines from "@/components/BrandLines";

// ── Icono Instagram ───────────────────────────────────────────────────────────

function IconInstagram() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

// ── Footer principal ──────────────────────────────────────────────────────────

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Footer principal ──────────────────────────────────────────────────── */}
      <footer className="relative overflow-hidden bg-[var(--bg)] pt-16 pb-8">

        {/* Accent line superior */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--p1)]/50 to-transparent" />

        {/* Huella watermark — esquina inferior derecha */}
        <div
          className={cn(
            "pointer-events-none absolute bottom-0 right-[-8%]",
            "opacity-[0.04] [--fps:rgba(255,255,255,1)] [--fpg:rgba(255,255,255,0.1)]"
          )}
          aria-hidden="true"
        >
          <FingerprintSVG animate={false} className="w-[420px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-landing px-6">

          {/* ── Fila principal ── */}
          <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">

            {/* Brand block */}
            <div className="sm:col-span-2 lg:col-span-2">

              {/* Logo */}
              <div className="mb-5 flex items-center gap-2.5">
                <div className="[--fps:var(--logo-l)] [--fpg:transparent]">
                  <FingerprintSVG animate={false} className="w-7 h-8" strokeOpacity={1} />
                </div>
                <span
                  className="font-condensed text-[24px] font-black leading-none tracking-[1.5px]"
                  style={{ color: "var(--logo-t)" }}
                >
                  {BRAND.name}
                </span>
              </div>

              {/* Tagline */}
              <p className="mb-1 font-condensed text-[11px] font-bold uppercase tracking-[3px] text-[var(--p1)]">
                {FOOTER.tagline}
              </p>

              {/* Location */}
              <p className="mb-6 font-condensed text-[10px] font-bold uppercase tracking-[3px] text-[var(--t2)]/40">
                {FOOTER.location}
              </p>

              {/* Social */}
              <div className="flex items-center gap-3">
                {FOOTER.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full",
                      "border border-white/20 text-[var(--t2)]",
                      "transition-all duration-200",
                      "hover:border-[var(--p1)] hover:text-[var(--p1)] hover:bg-[var(--p1)]/8 hover:scale-110"
                    )}
                  >
                    <IconInstagram />
                  </a>
                ))}
              </div>
            </div>

            {/* Grupos de links */}
            {FOOTER.groups.map((group) => (
              <div key={group.label}>
                <p className="mb-5 font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
                  {group.label}
                </p>
                <ul className="flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => scrollTo(link.href)}
                        className="group flex items-center gap-0 font-sans text-sm text-[var(--t2)] transition-colors duration-200 hover:text-[var(--t1)]"
                      >
                        <span className="block h-px w-0 bg-[var(--p1)] transition-[width] duration-300 group-hover:w-3 group-hover:mr-2" />
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

          {/* ── Fila inferior ── */}
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">

            {/* Legal */}
            <div className="flex items-center gap-4">
              {FOOTER.legal.map((item, i) => (
                <span key={item.label} className="flex items-center gap-4">
                  <a
                    href={item.href}
                    className="font-sans text-xs text-[var(--t2)] transition-colors duration-200 hover:text-[var(--t1)]"
                  >
                    {item.label}
                  </a>
                  {i < FOOTER.legal.length - 1 && (
                    <span className="text-[var(--t2)]/30" aria-hidden="true">·</span>
                  )}
                </span>
              ))}
            </div>

            {/* Copyright */}
            <p className="font-sans text-xs text-[var(--t2)]/50">
              {FOOTER.copy}
            </p>

          </div>

        </div>
      </footer>
    </>
  );
}
