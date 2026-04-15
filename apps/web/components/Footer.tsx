"use client";

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// components/Footer.tsx
// Footer rediseñado: pre-footer CTA band | brand + links + contacto | legal
// Redes: Instagram, TikTok, Twitter/X, WhatsApp â€” SVGs propios
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

import { FOOTER, BRAND } from "@/content/landing";
import FingerprintSVG from "@/components/FingerprintSVG";
import BrandLines from "@/components/BrandLines";
import StickerIcon from "@/components/StickerIcon";

// â”€â”€ Footer principal â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export default function Footer() {
  const whatsappHref =
    FOOTER.social.find((item) => item.icon === "whatsapp")?.href ?? "#";

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* â”€â”€ Pre-footer: banda motivacional â”€â”€ */}
      

      {/* â”€â”€ Footer principal â”€â”€ */}
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

          {/* â”€â”€ Fila principal â”€â”€ */}
          <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-5">

            {/* Brand block â€” 2 cols */}
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
                <a
                  href={`mailto:${FOOTER.contact.email}`}
                  className="contact-link flex items-center gap-2.5 font-sans text-xs text-[var(--t2)] transition-colors hover:text-[var(--t1)]"
                >
                  <StickerIcon name="mail" size="xs" className="contact-link__icon text-[var(--p1)]" />
                  {FOOTER.contact.email}
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link flex items-center gap-2.5 font-sans text-xs text-[var(--t2)] transition-colors hover:text-[var(--t1)]"
                >
                  <StickerIcon
                    name="whatsapp"
                    size="xs"
                    className="contact-link__icon text-[var(--p1)]"
                  />
                  {FOOTER.contact.phone}
                </a>
                <p className="contact-link flex items-center gap-2.5 font-sans text-xs text-[var(--t2)]">
                  <StickerIcon name="maps" size="xs" className="contact-link__icon text-[var(--p1)]" />
                  {FOOTER.contact.location}
                </p>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {FOOTER.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    data-social={s.icon}
                    className="social-pill social-pill--compact inline-flex shrink-0 items-center gap-2 px-2 py-2"
                  >
                    <span className="social-pill__orb">
                      <StickerIcon name={s.icon} size="sm" className="text-white" />
                    </span>
                    <span className="font-condensed text-[10px] font-black uppercase tracking-[2.5px] text-[var(--t1)]">
                      {s.label}
                    </span>
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

          {/* â”€â”€ Fila inferior â”€â”€ */}
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

