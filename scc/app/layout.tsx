import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import Header from "./components/Header";
import FooterContent from "./components/FooterContent";
import FloatingElements from "./components/FloatingElements";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Second Chance Collision | Auto Body Repair - Circle Pines, MN",
  description:
    "Second Chance Collision is a locally owned auto body repair shop in Circle Pines, MN providing collision repair, paint, and refinishing services.",
  keywords: "auto body repair, collision repair, auto paint, Circle Pines MN, car repair, vehicle refinishing, insurance claims",
  openGraph: {
    title: "Second Chance Collision | Auto Body Repair - Circle Pines, MN",
    description: "Locally owned auto body repair shop in Circle Pines, MN providing quality collision repair, paint, and refinishing services.",
    type: "website",
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
      >
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
            <div className="mx-auto max-w-7xl px-4 py-10">{children}</div>
          </main>

          <FooterContent />
          </div>
        </React.StrictMode>
      </body>
    </html>
  );
}
