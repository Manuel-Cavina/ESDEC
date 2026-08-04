// app/eventos-deportivos-cordoba/page.tsx
// Commercial landing page for the ESDEC events vertical.

import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { EVENTS_PAGE } from "@/content/eventos";
import { SITE_URL } from "@/lib/constants";
import EventsLandingPage from "@/sections/events/EventsLandingPage";
import { buildFaqJsonLd } from "@/lib/faq";

const pageUrl = `${SITE_URL}/eventos-deportivos-cordoba`;
const hasUpcomingEvent =
  new Date(EVENTS_PAGE.nextEvent.startsAt).getTime() > Date.now();

export const revalidate = 3600;

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
  const collectionJsonLd = {
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
    ...(hasUpcomingEvent
      ? {
          about: {
            "@type": "SportsEvent",
            name: EVENTS_PAGE.nextEvent.name,
            eventStatus: "https://schema.org/EventScheduled",
            startDate: EVENTS_PAGE.nextEvent.startsAt,
            location: {
              "@type": "Place",
              name: EVENTS_PAGE.nextEvent.venue,
              address: {
                "@type": "PostalAddress",
                addressLocality: EVENTS_PAGE.nextEvent.venue,
                addressCountry: "AR",
              },
            },
          },
        }
      : {}),
  };

  const jsonLd = [collectionJsonLd, buildFaqJsonLd(EVENTS_PAGE.faq)];

  return (
    <>
      <div className="nav-visible">
        <Navbar audience={null} />
      </div>
      <EventsLandingPage />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
