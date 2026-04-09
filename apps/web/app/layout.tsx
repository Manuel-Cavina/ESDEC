// ─────────────────────────────────────────────────────────────────────────────
// app/layout.tsx
// Root layout: fonts, meta, OG, dark mode class management
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Barlow_Condensed, Barlow } from "next/font/google";
import { BRAND } from "@/content/landing";
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

// ── Metadata
export const metadata: Metadata = {
  title: `ESDEC — ${BRAND.fullName}`,
  description:
    "El sistema que conecta al deportista amateur con especialistas coordinados, datos reales y comunidad. El futuro del deportista no se improvisa, se construye.",
  keywords: [
    "deportista amateur",
    "entrenamiento",
    "nutrición deportiva",
    "psicología deportiva",
    "kinesiología",
    "ESDEC",
    "Elite Sports Development",
    "Córdoba",
  ],
  authors: [{ name: "ESDEC" }],
  creator: "ESDEC",
  publisher: "ESDEC",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://esdec.app",
    siteName: "ESDEC",
    title: `ESDEC — ${BRAND.fullName}`,
    description:
      "El sistema integral para deportistas amateurs. Especialistas coordinados, datos reales, comunidad.",
    images: [
      {
        url: "/og-image.png", // 1200×630
        width: 1200,
        height: 630,
        alt: "ESDEC — Elite Sports Development",
      },
    ],
  },

  // Twitter/X
  twitter: {
    card: "summary_large_image",
    title: `ESDEC — ${BRAND.fullName}`,
    description:
      "El sistema integral para deportistas amateurs. Especialistas coordinados, datos reales, comunidad.",
    images: ["/og-image.png"],
  },

  // PWA / favicon
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Robots
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
    { media: "(prefers-color-scheme: dark)",  color: "#001A33" },
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
      // La clase "dark" se maneja desde ThemeProvider (client-side)
      // Por defecto: light (azul eléctrico) según diseño MVP 0
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
      </body>
    </html>
  );
}
