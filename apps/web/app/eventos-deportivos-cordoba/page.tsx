// app/eventos-deportivos-cordoba/page.tsx
// Commercial landing page for the ESDEC events vertical.

import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { EVENTS_PAGE } from "@/content/eventos";
import { SITE_URL } from "@/lib/constants";
import EventsLandingPage from "@/sections/events/EventsLandingPage";

const pageUrl = `${SITE_URL}/eventos-deportivos-cordoba`;

export const metadata: Metadata = {
  title: EVENTS_PAGE.seo.title,
  description: EVENTS_PAGE.seo.description,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: pageUrl,
    title: EVENTS_PAGE.seo.title,
    description: EVENTS_PAGE.seo.description,
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: EVENTS_PAGE.seo.title,
    description: EVENTS_PAGE.seo.description,
    images: ["/images/og-image.png"],
  },
};

export default function EventosDeportivosCordobaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: EVENTS_PAGE.seo.title,
    url: pageUrl,
    description: EVENTS_PAGE.seo.description,
    isPartOf: {
      "@type": "WebSite",
      name: "ESDEC",
      url: SITE_URL,
    },
    about: {
      "@type": "SportsEvent",
      name: EVENTS_PAGE.nextEvent.name,
      eventStatus: "https://schema.org/EventScheduled",
      startDate: "2026-05-09T08:00:00-03:00",
      location: {
        "@type": "Place",
        name: EVENTS_PAGE.nextEvent.venue,
        address: {
          "@type": "PostalAddress",
          addressLocality: EVENTS_PAGE.nextEvent.city,
          addressCountry: "AR",
        },
      },
    },
  };

  return (
    <>
      <div className="dark">
        <div className="nav-visible [--btn-bg:#5ac8ff] [--btn-t:#0c2d7a]">
          <Navbar audience="deportista" />
        </div>
        <EventsLandingPage />
        <Footer />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
