import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import Header from "./components/Header";

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
            {/* Decorative background shapes */}
            <div className="pointer-events-none fixed inset-0 overflow-hidden">
              <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-[var(--accent-red)]/[0.03] blur-3xl" />
              <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-[var(--accent-dark)]/[0.02] blur-3xl" />
              <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-[var(--accent-red)]/[0.04] blur-3xl" />
              <div className="absolute right-1/3 top-1/3 h-64 w-64 rounded-full bg-neutral-200/30 blur-2xl" />
            </div>
            
            {/* Diagonal accent stripes */}
            <div className="pointer-events-none fixed inset-0 opacity-[0.015]">
              <div className="absolute -right-32 top-0 h-full w-1 rotate-12 bg-[var(--accent-red)]" />
              <div className="absolute right-1/4 top-0 h-full w-0.5 rotate-12 bg-[var(--accent-dark)]" />
              <div className="absolute left-1/3 top-0 h-full w-1 -rotate-12 bg-[var(--accent-red)]" />
            </div>
            
          <Header />

          <main className="relative flex-1">
            <div className="mx-auto max-w-7xl px-4 py-10">{children}</div>
          </main>

          <footer className="relative border-t border-black/5 bg-gradient-to-br from-[#0f1419] via-[#12171b] to-[#1a2129] text-sm text-neutral-200">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(230,20,31,0.08),_transparent_50%)]" />
            <div className="relative mx-auto max-w-7xl px-4 py-12">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {/* Logo and tagline */}
                <div className="space-y-4 lg:col-span-2">
                  <div className="flex items-center gap-3">
                    <div className="relative h-20 w-40">
                      <Image
                        src="/SCC.png"
                        alt="Second Chance Collision logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <p className="max-w-md text-sm leading-relaxed text-neutral-400">
                    Expert collision repair and auto body services in Circle Pines, MN. Quality workmanship, fair pricing, and exceptional customer service since day one.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
                  <div className="space-y-2 text-sm text-neutral-300">
                    <p>416 Lilac St</p>
                    <p>Circle Pines, MN 55014</p>
                    <p className="pt-2">
                      <a href="tel:0000000000" className="text-[var(--accent-red)] hover:text-red-400 font-medium transition">(000) 000-0000</a>
                    </p>
                    <p>
                      <a href="mailto:info@secondchancecollision.com" className="text-[var(--accent-red)] hover:text-red-400 font-medium transition">info@secondchancecollision.com</a>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">Hours</h3>
                  <div className="space-y-1.5 text-sm text-neutral-300">
                    <p><span className="font-medium text-neutral-200">Mon-Fri:</span> 8:00 AM - 5:00 PM</p>
                    <p><span className="font-medium text-neutral-200">Sat:</span> 9:00 AM - 2:00 PM</p>
                    <p><span className="font-medium text-neutral-200">Sun:</span> Closed</p>
                  </div>
                </div>
              </div>

              {/* Bottom bar with legal links */}
              <div className="mt-8 border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-xs text-neutral-400">
                  © {new Date().getFullYear()} Second Chance Collision. All rights reserved.
                </p>
                <div className="flex flex-wrap gap-4 text-xs">
                  <Link href="/privacy" className="text-neutral-400 hover:text-white transition">Privacy Policy</Link>
                  <Link href="/terms" className="text-neutral-400 hover:text-white transition">Terms & Conditions</Link>
                </div>
              </div>
            </div>
          </footer>
          </div>
        </React.StrictMode>
      </body>
    </html>
  );
}
