"use client";

// components/Navbar.tsx
// Navbar principal de ESDEC con dropdown compacto en "Sobre nosotros".

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AREA_PAGE_ORDER, AREA_PAGES } from "@/content/areas";
import { NAV } from "@/content/landing";
import { cn } from "@/lib/utils";

interface NavbarProps {
  audience?: "deportista" | "profesional" | null;
}

interface NavLinkItem {
  label: string;
  href: string;
}

const navLinks = NAV.groups as readonly NavLinkItem[];
const aboutAreas = AREA_PAGE_ORDER.map((slug) => AREA_PAGES[slug]);

export default function Navbar({ audience = null }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const isAudiencePage =
    pathname === "/deportistas" || pathname === "/profesionales";

  const isProfessionalPalette =
    audience === "profesional" || pathname === "/profesionales";
  const isAthletePalette =
    audience === "deportista" || pathname === "/deportistas";

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false);
        setIsAboutOpen(false);
      }
    };

    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const ctaConfig = useMemo(() => {
    if (audience === "deportista") {
      return {
        label: NAV.audienceCtas.deportista,
        href: "#footprint",
      };
    }

    if (audience === "profesional") {
      return {
        label: NAV.audienceCtas.profesional,
        href: "#footprint",
      };
    }

    return {
      label: NAV.cta,
      href: "/ecosistema-deportivo-cordoba",
    };
  }, [audience]);

  const handleNavigate = (href: string) => {
    setIsMobileOpen(false);

    if (href.startsWith("#") && isAudiencePage) {
      const targetId = href.slice(1);
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    router.push(href);
  };

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const navToneClass = isProfessionalPalette
    ? "bg-[rgba(10,47,90,0.82)] text-[#E8F0FC]"
    : isAthletePalette
      ? "bg-[rgba(50,105,199,0.82)] text-white"
      : "bg-[rgba(50,105,199,0.82)] text-white";

  const navMutedTextClass = isProfessionalPalette
    ? "text-[#7A9EC4]"
    : "text-[rgba(255,255,255,0.72)]";

  const navHoverClass = isProfessionalPalette
    ? "hover:text-[#E8F0FC]"
    : "hover:text-white";

  const navActiveClass = isProfessionalPalette
    ? "text-[#E8F0FC]"
    : "text-white";

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-[880] bg-[rgba(0,12,26,0.46)] backdrop-blur-[6px] transition-opacity duration-300 lg:hidden",
          isMobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        aria-hidden={!isMobileOpen}
        onClick={() => setIsMobileOpen(false)}
      />

      <nav
        aria-label="Navegacion principal"
        className={cn(
          "fixed left-1/2 top-4 z-[900] w-[min(1240px,calc(100%-24px))] -translate-x-1/2 border-0 outline-none ring-0 backdrop-blur-[18px] transition-all duration-300",
          "h-16 rounded-[24px] shadow-[0_16px_36px_rgba(0,0,0,0.16)] sm:h-[68px] sm:w-[min(1240px,calc(100%-32px))] lg:h-[76px] lg:rounded-[26px]",
          navToneClass,
        )}
      >
        <div className="mx-auto grid h-full w-full max-w-[1240px] grid-cols-[132px_1fr_auto] items-center gap-3 px-3 sm:grid-cols-[148px_1fr_auto] sm:px-4 lg:grid-cols-[208px_1fr_208px] lg:px-6">
          <div className="flex h-full items-center">
            <Link
              href="/"
              aria-label="Ir al inicio de ESDEC"
              className="group flex items-center"
            >
              <div
                className={cn(
                  "relative h-[34px] w-[132px] overflow-hidden rounded-[12px]",
                  "sm:h-[38px] sm:w-[148px]",
                  "lg:h-[50px] lg:w-[196px]"
                )}
              >
                <Image
                  src="/images/Logo.png"
                  alt="ESDEC"
                  fill
                  priority
                  quality={100}
                  sizes="(max-width: 639px) 132px, (max-width: 1023px) 148px, 196px"
                  className="object-contain object-left transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
            </Link>
          </div>

          <div className="hidden h-full items-center justify-center lg:flex">
            <ul className="flex items-center gap-2">
              {navLinks.map((link) => {
                const active = isActiveLink(link.href);
                const isAboutLink = link.label === "Sobre nosotros";

                return (
                  <li
                    key={link.href}
                    className={cn("relative", isAboutLink && "group")}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "group/link relative inline-flex h-11 items-center gap-2 px-5 font-sans text-[13px] font-semibold tracking-[0.01em] transition-all duration-200",
                        active
                          ? navActiveClass
                          : cn(navMutedTextClass, navHoverClass)
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute left-5 top-[9px] h-px w-0 bg-[var(--p1)] transition-[width] duration-300",
                          active ? "w-6" : "group-hover/link:w-6"
                        )}
                      />
                      {link.label}
                      {isAboutLink ? (
                        <span
                          aria-hidden="true"
                          className="text-[10px] transition-transform duration-200 group-hover/link:translate-y-[1px]"
                        >
                          ▾
                        </span>
                      ) : null}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute bottom-[6px] left-5 right-5 h-[2px] origin-left rounded-full bg-[var(--p1)] transition-transform duration-200",
                          active ? "scale-x-100" : "scale-x-0"
                        )}
                      />
                    </Link>

                    {isAboutLink ? (
                      <div className="pointer-events-none absolute left-0 top-full z-[920] pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                        <div className="w-[280px] overflow-hidden rounded-[22px] bg-[rgba(50,105,199,0.96)] p-3 text-white shadow-[0_20px_48px_rgba(0,0,0,0.26)] backdrop-blur-[20px]">
                          <div className="px-3 pb-3">
                            <p className="font-condensed text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--p1)]">
                              Areas del ecosistema
                            </p>
                          </div>
                          <div className="grid grid-cols-2 gap-1 pt-2">
                            {aboutAreas.map((item) => (
                              <Link
                                key={item.slug}
                                href={`/${item.slug}`}
                                className="group/item relative flex min-h-[54px] items-center overflow-hidden rounded-[16px] px-3 py-2 font-condensed text-[13px] font-bold uppercase leading-[1] tracking-[0.04em] text-white/84 transition-all duration-200 hover:text-white"
                              >
                                <span
                                  aria-hidden="true"
                                  className="absolute left-0 top-0 h-px w-0 bg-[linear-gradient(90deg,rgba(122,208,255,0.95)_0%,rgba(255,255,255,0.24)_100%)] transition-[width] duration-300 group-hover/item:w-full"
                                />
                                <span
                                  aria-hidden="true"
                                  className="mr-3 h-px w-0 bg-[var(--p1)] transition-[width] duration-300 group-hover/item:w-4"
                                />
                                {item.navLabel}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex h-full items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => handleNavigate(ctaConfig.href)}
              className={cn(
                "btn-shimmer relative hidden h-11 items-center justify-center overflow-hidden rounded-full px-5 sm:inline-flex",
                "bg-[var(--btn-bg)] font-condensed text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--btn-t)]",
                "shadow-[0_10px_28px_rgba(0,0,0,0.14)] transition-all duration-200 hover:-translate-y-px hover:brightness-110",
                "lg:min-w-[184px]"
              )}
            >
              {ctaConfig.label}
            </button>

            <button
              type="button"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              aria-label={isMobileOpen ? "Cerrar menu" : "Abrir menu"}
              aria-expanded={isMobileOpen}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-current transition-colors duration-200 hover:bg-white/14 lg:hidden"
              )}
            >
              <span className="relative block h-4 w-4">
                <span
                  className={cn(
                    "absolute left-0 top-[2px] h-[1.5px] w-4 rounded-full bg-current transition-all duration-200",
                    isMobileOpen && "top-[7px] rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[7px] h-[1.5px] w-4 rounded-full bg-current transition-all duration-200",
                    isMobileOpen && "opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[12px] h-[1.5px] w-4 rounded-full bg-current transition-all duration-200",
                    isMobileOpen && "top-[7px] -rotate-45"
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={cn(
          "fixed left-1/2 top-[84px] z-[890] w-[min(1240px,calc(100%-24px))] -translate-x-1/2 lg:hidden sm:top-[92px] sm:w-[min(1240px,calc(100%-32px))]",
          "transition-all duration-300",
          isMobileOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        )}
      >
        <div
          className={cn(
            "overflow-hidden rounded-[24px] border-0 outline-none ring-0 p-3 shadow-[0_22px_44px_rgba(0,0,0,0.22)] backdrop-blur-[20px]",
            navToneClass
          )}
        >
          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = isActiveLink(link.href);
              const isAboutLink = link.label === "Sobre nosotros";

              if (isAboutLink) {
                return (
                  <div key={link.href} className="rounded-[18px] bg-white/[0.03]">
                    <button
                      type="button"
                      onClick={() => setIsAboutOpen((prev) => !prev)}
                      className={cn(
                        "flex min-h-[54px] w-full items-center justify-between rounded-[18px] px-4 font-condensed text-[18px] font-bold uppercase tracking-[0.08em] transition-all duration-200",
                        active
                          ? cn(navActiveClass, "bg-white/10")
                          : cn(navMutedTextClass, navHoverClass)
                      )}
                    >
                      <span>{link.label}</span>
                      <span
                        aria-hidden="true"
                        className={cn(
                          "text-[12px] transition-transform duration-200",
                          isAboutOpen && "rotate-180"
                        )}
                      >
                        ▾
                      </span>
                    </button>

                    <div
                      className={cn(
                        "grid overflow-hidden transition-all duration-200",
                        isAboutOpen ? "grid-rows-[1fr] pb-2" : "grid-rows-[0fr]"
                      )}
                    >
                      <div className="min-h-0">
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileOpen(false)}
                          className="mx-2 mb-1 flex min-h-[42px] items-center rounded-[14px] px-3 font-sans text-sm font-medium text-white/72 transition-colors hover:text-white"
                        >
                          Ver ecosistema
                        </Link>
                        {aboutAreas.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/${item.slug}`}
                            onClick={() => setIsMobileOpen(false)}
                            className="group/item mx-2 mb-1 flex min-h-[42px] items-center rounded-[14px] px-3 font-sans text-sm font-medium text-white/72 transition-colors hover:text-white"
                          >
                            <span
                              aria-hidden="true"
                              className="mr-2 h-px w-0 bg-[var(--p1)] transition-[width] duration-300 group-hover/item:w-4"
                            />
                            {item.navLabel}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "group/mobile flex min-h-[54px] items-center rounded-[18px] px-4 font-condensed text-[18px] font-bold uppercase tracking-[0.08em] transition-all duration-200",
                    active
                      ? cn(navActiveClass, "bg-white/10")
                      : cn(navMutedTextClass, navHoverClass)
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="mr-3 h-px w-0 bg-[var(--p1)] transition-[width] duration-300 group-hover/mobile:w-5"
                  />
                  {link.label}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => handleNavigate(ctaConfig.href)}
            className={cn(
              "btn-shimmer relative mt-3 flex h-12 w-full items-center justify-center overflow-hidden rounded-[18px]",
              "bg-[var(--btn-bg)] font-condensed text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--btn-t)]",
              "shadow-[0_10px_24px_rgba(0,0,0,0.14)] transition-all duration-200 hover:brightness-110"
            )}
          >
            {ctaConfig.label}
          </button>
        </div>
      </div>
    </>
  );
}
