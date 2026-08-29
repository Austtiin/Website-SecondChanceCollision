import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import FooterContent from "./components/FooterContent";
import CookieConsent from "./components/CookieConsent";
import MicrosoftClarity from "./components/MicrosoftClarity";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://secondchance-collision.com";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoBodyShop",
  name: "Second Chance Collision",
  "@id": `${siteUrl}/#autobodyshop`,
  url: siteUrl,
  telephone: "+1-612-913-6594",
  image: [
    `${siteUrl}/SCC.png`,
    `${siteUrl}/Gallery/IMG_20260222_165739.webp`,
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "416 Lilac St",
    addressLocality: "Circle Pines",
    addressRegion: "MN",
    postalCode: "55014",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.16053,
    longitude: -93.14396,
  },
  hasMap: "https://maps.google.com/?q=416+Lilac+St+Circle+Pines+MN+55014",
  areaServed: [
    "Circle Pines, MN",
    "Blaine, MN",
    "Lino Lakes, MN",
    "Lexington, MN",
    "Centerville, MN",
    "Coon Rapids, MN",
    "Mounds View, MN",
    "Shoreview, MN",
    "Anoka County, MN",
    "Ramsey County, MN",
    "North Metro Minneapolis, MN",
  ],
  sameAs: [
    "https://github.com/Austtiin",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Second Chance Collision | Auto Body Repair, Circle Pines MN",
    template: "%s | Second Chance Collision",
  },
  description:
    "Insurance-approved auto body shop in Circle Pines, MN. Collision repair, bumper repair, dent removal & paint services for Blaine, Lino Lakes & the North Metro.",
  keywords: [
    // Core "near me" terms
    "auto body repair near me",
    "collision repair near me",
    "body shop near me",
    "auto paint near me",
    "bumper repair near me",
    "dent repair near me",
    
    // Primary locations
    "auto body repair circle pines mn",
    "collision repair blaine minnesota",
    "body shop lino lakes",
    "auto repair coon rapids",
    "collision shop shoreview",
    "auto body mounds view",
    "body shop centerville mn",
    "auto repair lexington mn",
    
    // Extended service area
    "collision repair spring lake park",
    "auto body fridley mn",
    "body shop columbia heights",
    "collision repair new brighton mn",
    "auto body arden hills",
    "body shop white bear lake",
    "auto repair ham lake",
    "collision shop hugo mn",
    
    // Services
    "bumper repair and replacement",
    "paintless dent removal",
    "hail damage repair",
    "frame straightening",
    "auto paint matching",
    "scratch and dent repair",
    "fender replacement",
    "door panel repair",
    "hood repair",
    "rear quarter panel repair",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Second Chance Collision | Auto Body Repair, Circle Pines MN",
    description:
      "Collision repair, bumper repair, dent removal & paint services for Circle Pines, Blaine, Lino Lakes & the North Metro. Insurance-approved shop.",
    url: "/",
    siteName: "Second Chance Collision",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/SCC.png",
        width: 1200,
        height: 630,
        alt: "Second Chance Collision - Auto Body Repair Circle Pines MN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Second Chance Collision | Auto Body Repair, Circle Pines MN",
    description:
      "Collision repair, bumper repair, dent removal & paint services for Circle Pines, Blaine, Lino Lakes & the North Metro.",
    images: ["/SCC.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >        {/* Google Analytics with Consent Mode */}
        <Script id="google-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Set default consent to 'denied' as a placeholder
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'wait_for_update': 500
            });
            
            // Check if user has previously consented
            if (typeof window !== 'undefined') {
              const consent = localStorage.getItem('cookie-consent');
              if (consent === 'accepted') {
                gtag('consent', 'update', {
                  'analytics_storage': 'granted'
                });
              }
            }
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V7X7BFHZ24"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V7X7BFHZ24', {
              'anonymize_ip': true
            });
          `}
        </Script>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <React.StrictMode>
          <div className="relative min-h-screen flex flex-col bg-neutral-50 text-foreground">
          <Header />

          <main className="relative flex-1">
            <div className="mx-auto max-w-7xl px-4 pt-1.25 pb-10">{children}</div>
          </main>

          <FooterContent />
          
          {/* Cookie Consent Banner */}
          <CookieConsent />
          {/* Microsoft Clarity */}
          <MicrosoftClarity />
          </div>
        </React.StrictMode>
      </body>
    </html>
  );
}

