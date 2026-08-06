// app/privacidad/page.tsx
// Política de privacidad: qué datos recolecta ESDEC y cómo se ejercen los derechos ARCO.

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRIVACY_POLICY } from "@/content/landing";
import { SITE_URL } from "@/lib/constants";

const PAGE_URL = `${SITE_URL}/privacidad`;

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Qué datos recolecta ESDEC — ecosistema deportivo de Córdoba — a través de su sitio, con qué finalidad y cómo ejercer tus derechos sobre ellos.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: PAGE_URL,
    siteName: "ESDEC",
    title: "Política de privacidad - ESDEC",
    description:
      "Qué datos recolecta ESDEC a través de su sitio, con qué finalidad y cómo ejercer tus derechos sobre ellos.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Política de privacidad - ESDEC",
  url: PAGE_URL,
  description:
    "Política de privacidad de ESDEC, ecosistema deportivo de Córdoba, Argentina.",
  isPartOf: {
    "@type": "WebSite",
    name: "ESDEC",
    url: SITE_URL,
  },
  inLanguage: "es-AR",
};

export default function PrivacidadPage() {
  return (
    <>
      <div className="nav-visible">
        <Navbar audience={null} />
      </div>
      <main className="bg-[var(--bg2)] px-6 pb-24 pt-32 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[72ch]">
          <p className="font-condensed text-[12px] font-bold uppercase tracking-[3px] text-[var(--p1)]">
            ESDEC — Ecosistema Deportivo de Córdoba
          </p>
          <h1 className="mt-3 font-condensed text-[clamp(2.2rem,5vw,3.4rem)] font-black uppercase leading-[0.95] tracking-tight text-[var(--t1)]">
            Política de privacidad
          </h1>
          <p className="mt-4 font-sans text-sm text-[var(--t2)]">
            Última actualización: {PRIVACY_POLICY.updatedAt}
          </p>

          <p className="mt-8 font-sans text-base leading-[1.9] text-[var(--t2)]">
            {PRIVACY_POLICY.intro}
          </p>

          <div className="mt-12 flex flex-col gap-10">
            {PRIVACY_POLICY.sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-condensed text-[1.1rem] font-bold uppercase tracking-tight text-[var(--t1)]">
                  {section.title}
                </h2>
                <div className="mt-3 flex flex-col gap-3">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="font-sans text-[0.95rem] leading-[1.85] text-[var(--t2)]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
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
