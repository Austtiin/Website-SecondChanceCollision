"use client";

import Image from "next/image";
import Link from "next/link";
import { EmailLink } from "./EmailConfirmationModal";

export default function FooterContent() {
  return (
    <footer className="relative border-t border-black/5 bg-gradient-to-br from-[#0f1419] via-[#12171b] to-[#1a2129] text-sm text-neutral-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(230,20,31,0.08),_transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo and tagline */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="relative h-32 w-64 sm:h-32 sm:w-64 md:h-36 md:w-72 lg:h-40 lg:w-80">
                <Image
                  src="/SCC.png"
                  alt="Second Chance Collision logo"
                  fill
                  className="object-contain object-center sm:object-left"
                />
              </div>
            </div>
            <p className="max-w-md text-base leading-relaxed text-neutral-300 text-center sm:text-left">
              Expert collision repair and auto body services in Circle Pines, MN. Quality workmanship, fair pricing, and exceptional customer service since day one.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-base font-bold uppercase tracking-wider text-white">Contact</h3>
            <div className="space-y-2 text-base text-neutral-200">
              <p>416 Lilac St</p>
              <p>Circle Pines, MN 55014</p>
              <p className="pt-2">
                <a href="tel:0000000000" className="text-red-400 hover:text-red-300 font-medium transition">(000) 000-0000</a>
              </p>
              <p>
                <EmailLink className="text-red-400 hover:text-red-300 font-medium transition">
                  info@secondchancecollision.com
                </EmailLink>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-3">
            <h3 className="text-base font-bold uppercase tracking-wider text-white">Hours</h3>
            <div className="space-y-1.5 text-base text-neutral-200">
              <p><span className="font-medium text-white">Mon-Fri:</span> 8:00 AM - 5:00 PM</p>
              <p><span className="font-medium text-white">Sat:</span> 9:00 AM - 2:00 PM</p>
              <p><span className="font-medium text-white">Sun:</span> Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom bar with legal links */}
        <div className="mt-8 border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-neutral-300">
            © {new Date().getFullYear()} Second Chance Collision. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/privacy" className="text-neutral-300 hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="text-neutral-300 hover:text-white transition">Terms & Conditions</Link>
          </div>
        </div>
        
        {/* Legal Disclaimer */}
        <div className="mt-6 pt-6 border-t border-white/5">
          <p className="text-xs text-neutral-400 text-center max-w-4xl mx-auto leading-relaxed">
            All estimates and information provided are subject to change and are for informational purposes only. 
            Final pricing, terms, and service details must be agreed upon in writing and signed before becoming binding. 
            Second Chance Collision reserves the right to modify estimates based on actual vehicle inspection and repair requirements.
          </p>
        </div>
        
        {/* Designer credit */}
        <div className="mt-4 pt-4 border-t border-white/5 text-center">
          <p className="text-xs text-neutral-400">
            Designed and developed by{' '}
            <a 
              href="https://github.com/Austtiin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 font-medium transition"
            >
              AS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
