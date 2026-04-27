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
    default: "Second Chance Collision | Auto Body Repair in Circle Pines, MN",
    template: "%s | Second Chance Collision",
  },
  description:
    "Second Chance Collision is a locally owned auto body repair shop in Circle Pines, MN serving Blaine and the north metro with collision repair, paint, dent, and refinishing services.",
  keywords: [
    "auto body repair MN",
    "auto body repair Blaine",
    "collision repair Circle Pines",
    "auto body shop near Blaine MN",
    "auto body shop Anoka County",
    "collision repair Ramsey County",
    "auto body repair Coon Rapids",
    "auto body repair Shoreview",
    "bumper repair Minnesota",
    "paint and body shop Circle Pines",
    "frame straightening MN",
    "dent repair Blaine",
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
    title: "Second Chance Collision | Auto Body Repair in Circle Pines, MN",
    description:
      "Trusted auto body and collision repair shop serving Circle Pines, Blaine, Anoka County, Ramsey County, and nearby Minnesota communities.",
    url: "/",
    siteName: "Second Chance Collision",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/SCC.png",
        width: 1200,
        height: 630,
        alt: "Second Chance Collision logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Second Chance Collision | Auto Body Repair in Circle Pines, MN",
    description:
      "Auto body and collision repair for Circle Pines, Blaine, Anoka County, Ramsey County, and the north metro.",
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
          <div className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-neutral-100 text-[var(--foreground)]">
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
              <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-[var(--accent-red)]/[0.05] blur-3xl" />
              <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-[var(--accent-dark)]/[0.03] blur-3xl" />
              <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-[var(--accent-red)]/[0.06] blur-3xl" />
              <div className="absolute right-1/3 top-1/3 h-64 w-64 rounded-full bg-neutral-200/50 blur-2xl" />
              <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-red)]/[0.02] blur-3xl" />
            </div>
            
            {/* Diagonal accent stripes */}
            <div className="pointer-events-none fixed inset-0 opacity-[0.02]">
              <div className="absolute -right-32 top-0 h-full w-1 rotate-12 bg-gradient-to-b from-[var(--accent-red)] to-transparent" />
              <div className="absolute right-1/4 top-0 h-full w-0.5 rotate-12 bg-gradient-to-b from-[var(--accent-dark)] to-transparent" />
              <div className="absolute left-1/3 top-0 h-full w-1 -rotate-12 bg-gradient-to-b from-[var(--accent-red)] to-transparent" />
              <div className="absolute left-1/2 top-0 h-full w-2 rotate-6 bg-gradient-to-b from-neutral-300 to-transparent" />
            </div>
            
            {/* Corner decorative elements */}
            <div className="pointer-events-none fixed inset-0 opacity-[0.04]">
              <div className="absolute top-0 left-0 h-64 w-64 border-t-2 border-l-2 border-[var(--accent-red)] rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 h-64 w-64 border-b-2 border-r-2 border-[var(--accent-red)] rounded-br-3xl" />
            </div>
            
          <Header />

          <main className="relative flex-1">
            <div className="mx-auto max-w-7xl px-4 pt-[5px] pb-10">{children}</div>
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
