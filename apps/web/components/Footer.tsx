"use client";

// ─────────────────────────────────────────────────────────────────────────────
// components/Footer.tsx
// Footer de la landing ESDEC.
// Layout: logo + tagline | grupos de links | social + legal + copyright.
// ─────────────────────────────────────────────────────────────────────────────

import { FOOTER, BRAND } from "@/content/landing";
import { cn } from "@/lib/utils";
import FingerprintSVG from "@/components/FingerprintSVG";
import BrandLines from "@/components/BrandLines";

// ── Logo mark (mismas 3 líneas del Navbar) ────────────────────────────────────

function LogoMark({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-[5px]", className)} aria-hidden="true">
      <div className="h-[5px] w-[22px] rounded-[2.5px] bg-[var(--logo-l)]" />
      <div className="ml-[3px] h-[5px] w-[16px] rounded-[2.5px] bg-[var(--logo-l)]" />
      <div className="ml-[6px] h-[5px] w-[11px] rounded-[2.5px] bg-[var(--logo-l)]" />
    </div>
  );
}

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
    <footer className="relative overflow-hidden bg-[var(--bg)] pt-16 pb-8">

      {/* Huella watermark — esquina inferior derecha */}
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 right-[-8%] opacity-[0.04]",
          "[--fps:rgba(255,255,255,1)] [--fpg:rgba(255,255,255,0.1)]"
        )}
        aria-hidden="true"
      >
        <FingerprintSVG animate={false} className="w-[420px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-landing px-6">

        {/* ── Fila principal: brand + grupos de links ── */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand block */}
          <div className="sm:col-span-2 lg:col-span-2">
            {/* Logo */}
            <div className="mb-4 flex items-center gap-2.5">
              <LogoMark />
              <span
                className="font-condensed text-[22px] font-black leading-none tracking-[1.5px]"
                style={{ color: "var(--logo-t)" }}
              >
                {BRAND.name}
              </span>
            </div>

            <BrandLines className="mb-4 [--bl-color:var(--p1)]" />

            <p className="max-w-xs font-sans text-sm leading-[1.7] text-[var(--t2)]">
              {FOOTER.tagline}
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              {FOOTER.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full",
                    "border border-white/20 text-[var(--t2)]",
                    "transition-all duration-200 hover:border-[var(--p1)] hover:text-[var(--p1)]"
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
              <p className="mb-4 font-condensed text-[10px] font-bold uppercase tracking-[3px] text-[var(--p1)]">
                {group.label}
              </p>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="font-sans text-sm text-[var(--t2)] transition-colors duration-200 hover:text-[var(--t1)]"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* ── Fila inferior: legal + location + copyright ── */}
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

          {/* Location + copy */}
          <div className="flex flex-col items-start gap-1 sm:items-end">
            <p className="font-condensed text-[10px] font-bold uppercase tracking-[3px] text-[var(--p1)]/60">
              {FOOTER.location}
            </p>
            <p className="font-sans text-xs text-[var(--t2)]/60">
              {FOOTER.copy}
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
