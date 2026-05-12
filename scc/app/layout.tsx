import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import FooterContent from "./components/FooterContent";
import FloatingElements from "./components/FloatingElements";
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
  url: siteUrl,
  telephone: "+1-612-913-6594",
  image: `${siteUrl}/SCC.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "416 Lilac St",
    addressLocality: "Circle Pines",
    addressRegion: "MN",
    postalCode: "55014",
    addressCountry: "US",
  },
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
    default: "Second Chance Collision | Auto Body & Collision Repair Near Me - Circle Pines, Blaine MN",
    template: "%s | Second Chance Collision",
  },
  description:
    "Trusted auto body repair shop near you in Circle Pines, MN. We provide collision repair, bumper repair, paintless dent removal, frame straightening, hail damage repair, and paint refinishing for Blaine, Lino Lakes, Coon Rapids, Shoreview, Mounds View, Centerville, Lexington, and all of Anoka & Ramsey County. Insurance approved collision shop with certified technicians.",
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
    title: "Auto Body & Collision Repair Near Me | Circle Pines, Blaine MN - Second Chance Collision",
    description:
      "Professional auto body repair, collision repair, bumper repair, dent removal & paint services serving Circle Pines, Blaine, Lino Lakes, Coon Rapids, Shoreview, Anoka County, and Ramsey County Minnesota. Insurance approved collision shop.",
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
    title: "Collision Repair Near Me | Auto Body Shop Circle Pines, Blaine MN",
    description:
      "Expert collision repair, bumper repair, dent removal & auto paint services for Circle Pines, Blaine, Lino Lakes, Coon Rapids, Anoka & Ramsey County MN.",
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
          <div className="relative min-h-screen flex flex-col overflow-hidden bg-linear-to-br from-neutral-50 via-white to-neutral-100 text-foreground">
            {/* Floating animated elements */}
            <FloatingElements />
            
            {/* Modern grid pattern background */}
            <div className="pointer-events-none fixed inset-0 opacity-[0.03]">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(to right, #e6141f 1px, transparent 1px), linear-gradient(to bottom, #e6141f 1px, transparent 1px)',
                backgroundSize: '80px 80px'
              }} />
            </div>
            
            {/* Decorative background shapes */}
            <div className="pointer-events-none fixed inset-0 overflow-hidden">
              <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-(--accent-red)/5 blur-3xl" />
              <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-(--accent-dark)/3 blur-3xl" />
              <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-(--accent-red)/6 blur-3xl" />
              <div className="absolute right-1/3 top-1/3 h-64 w-64 rounded-full bg-neutral-200/50 blur-2xl" />
              <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--accent-red)/2 blur-3xl" />
            </div>
            
            {/* Diagonal accent stripes */}
            <div className="pointer-events-none fixed inset-0 opacity-[0.02]">
              <div className="absolute -right-32 top-0 h-full w-1 rotate-12 bg-linear-to-b from-accent-red to-transparent" />
              <div className="absolute right-1/4 top-0 h-full w-0.5 rotate-12 bg-linear-to-b from-accent-dark to-transparent" />
              <div className="absolute left-1/3 top-0 h-full w-1 -rotate-12 bg-linear-to-b from-accent-red to-transparent" />
              <div className="absolute left-1/2 top-0 h-full w-2 rotate-6 bg-linear-to-b from-neutral-300 to-transparent" />
            </div>
            
            {/* Corner decorative elements */}
            <div className="pointer-events-none fixed inset-0 opacity-[0.04]">
              <div className="absolute top-0 left-0 h-64 w-64 border-t-2 border-l-2 border-accent-red rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 h-64 w-64 border-b-2 border-r-2 border-accent-red rounded-br-3xl" />
            </div>
            
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
