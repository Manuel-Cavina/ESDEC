// ─────────────────────────────────────────────────────────────────────────────
// app/layout.tsx
// Root layout: fonts, meta, OG, dark mode class management
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Barlow_Condensed, Barlow } from "next/font/google";
import { BRAND } from "@/content/landing";
import { SITE_URL } from "@/lib/constants";
import "@/styles/globals.css";

// ── Fuentes
const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const barlow = Barlow({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

// ── JSON-LD: Organization schema (Google Rich Results)
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "ESDEC",
  alternateName: "Elite Sports Development",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/og-image.png`,
    width: 1200,
    height: 630,
  },
  description:
    "Ecosistema deportivo que integra entrenamiento, nutrición, mentalidad y profesionales en un solo sistema. Córdoba, Argentina.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Córdoba",
    addressRegion: "Córdoba",
    addressCountry: "AR",
  },
  areaServed: ["Córdoba", "Argentina"],
  sameAs: [],
};

// ── Metadata
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `ESDEC — ${BRAND.fullName}`,
    template: `%s | ESDEC`,
  },
  description:
    "El ecosistema deportivo de Córdoba que conecta entrenamiento, nutrición, mentalidad y profesionales en un solo sistema. El futuro del deportista no se improvisa, se construye.",
  keywords: [
    "ecosistema deportivo córdoba",
    "entrenamiento deportivo córdoba",
    "plan entrenamiento personalizado",
    "app entrenamiento deportivo",
    "nutrición deportiva córdoba",
    "rendimiento deportivo",
    "profesionales deportivos córdoba",
    "eventos deportivos córdoba",
    "ESDEC",
    "Elite Sports Development",
    "deportista amateur argentina",
    "sistema deportivo integral",
  ],
  authors: [{ name: "ESDEC" }],
  creator: "ESDEC",
  publisher: "ESDEC",

  // ── Canonical URL
  alternates: {
    canonical: SITE_URL,
  },

  // ── Geo targeting (Córdoba, Argentina)
  other: {
    "geo.region": "AR-X",
    "geo.placename": "Córdoba, Argentina",
    "geo.position": "-31.4167;-64.1833",
    ICBM: "-31.4167, -64.1833",
  },

  // ── Open Graph
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: "ESDEC",
    title: `ESDEC — ${BRAND.fullName}`,
    description:
      "El ecosistema deportivo que conecta entrenamiento, nutrición, mentalidad y profesionales en un solo sistema. Córdoba, Argentina.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "ESDEC — Elite Sports Development",
      },
    ],
  },

  // ── Twitter/X
  twitter: {
    card: "summary_large_image",
    title: `ESDEC — ${BRAND.fullName}`,
    description:
      "El ecosistema deportivo que conecta entrenamiento, nutrición, mentalidad y profesionales en un solo sistema.",
    images: ["/images/og-image.png"],
  },

  // ── Icons
  icons: {
    icon: [
      { url: "/images/favicon.ico", sizes: "any" },
      { url: "/images/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/images/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/images/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/images/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/images/apple-touch-icon.png",
  },

  // ── Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1556d4" },
    { media: "(prefers-color-scheme: dark)", color: "#001A33" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
    >
      <body
        className={`
          ${bebasNeue.variable}
          ${barlowCondensed.variable}
          ${barlow.variable}
          font-sans antialiased
        `}
      >
        {children}

        {/* JSON-LD: Organization schema para Google Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
