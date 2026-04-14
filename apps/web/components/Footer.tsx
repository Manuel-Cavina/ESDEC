"use client";

// ─────────────────────────────────────────────────────────────────────────────
// components/Footer.tsx
// Footer rediseñado: pre-footer CTA band | brand + links + contacto | legal
// Redes: Instagram, TikTok, Twitter/X, WhatsApp — SVGs propios
// ─────────────────────────────────────────────────────────────────────────────

import { FOOTER, BRAND } from "@/content/landing";
import { cn } from "@/lib/utils";
import FingerprintSVG from "@/components/FingerprintSVG";
import BrandLines from "@/components/BrandLines";

// ── Íconos sociales SVG ───────────────────────────────────────────────────────

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconTikTok() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
    </svg>
  );
}

function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[17px] w-[17px]" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.736l7.737-8.859L2.11 2.25H8.08l4.274 5.651 5.89-5.651zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "ig") return <IconInstagram />;
  if (icon === "tt") return <IconTikTok />;
  if (icon === "x")  return <IconX />;
  if (icon === "wa") return <IconWhatsApp />;
  return null;
}

// ── Footer principal ──────────────────────────────────────────────────────────
export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Pre-footer: banda motivacional ── */}
      

      {/* ── Footer principal ── */}
      <footer className="relative overflow-hidden bg-[var(--bg)] pt-16 pb-8">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--p1)]/30 to-transparent" />

        {/* Huella watermark */}
        <div
          className="pointer-events-none absolute bottom-0 right-[-8%] opacity-[0.04] [--fps:rgba(255,255,255,1)] [--fpg:rgba(255,255,255,0.05)]"
          aria-hidden="true"
        >
          <FingerprintSVG animate={false} className="w-[400px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-landing px-6">

          {/* ── Fila principal ── */}
          <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-5">

            {/* Brand block — 2 cols */}
            <div className="sm:col-span-2">
              {/* Logo */}
              <div className="mb-5 flex items-center gap-2.5">
                <div className="[--fps:var(--logo-l)] [--fpg:transparent]">
                  <FingerprintSVG animate={false} className="h-8 w-7" strokeOpacity={1} />
                </div>
                <span className="font-condensed text-[24px] font-black leading-none tracking-[1.5px]" style={{ color: "var(--logo-t)" }}>
                  {BRAND.name}
                </span>
              </div>

              <p className="mb-1 font-condensed text-[11px] font-bold uppercase tracking-[3px] text-[var(--p1)]">
                {FOOTER.tagline}
              </p>
              <p className="mb-2 font-condensed text-[10px] font-bold uppercase tracking-[3px] text-[var(--t2)]/40">
                {FOOTER.location}
              </p>

              {/* Contacto */}
              <div className="mb-6 mt-4 space-y-1.5">
                <a href={`mailto:${FOOTER.contact.email}`}
                  className="flex items-center gap-2 font-sans text-xs text-[var(--t2)] transition-colors hover:text-[var(--t1)]">
                  <span className="text-[var(--p1)]">✉</span> {FOOTER.contact.email}
                </a>
                <p className="flex items-center gap-2 font-sans text-xs text-[var(--t2)]">
                  <span className="text-[var(--p1)]">📍</span> {FOOTER.contact.location}
                </p>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-2">
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
                      "transition-all duration-200",
                      "hover:border-[var(--p1)] hover:text-[var(--p1)] hover:bg-[var(--p1)]/8 hover:scale-110"
                    )}
                  >
                    <SocialIcon icon={s.icon} />
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
                        type="button"
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

            {/* Columna extra: tagline + BrandLines */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="mb-5 font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
                  ESDEC
                </p>
                <div className="mb-4">
                  <BrandLines animated size="md" />
                </div>
                <p className="font-condensed text-[13px] font-bold uppercase leading-snug text-[var(--t2)]/60">
                  Elite Sports<br />Development
                </p>
              </div>
              <p className="mt-6 font-condensed text-[9px] font-bold uppercase tracking-[3px] text-[var(--t2)]/30">
                Córdoba · 2025
              </p>
            </div>
          </div>

          {/* ── Fila inferior ── */}
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
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
            <p className="font-sans text-xs text-[var(--t2)]/50">
              {FOOTER.copy}
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}
