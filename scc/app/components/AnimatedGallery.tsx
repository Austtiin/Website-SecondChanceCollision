"use client";

import Image from "next/image";
import Link from "next/link";

export default function AnimatedGallery() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-neutral-50 p-8 shadow-xl md:p-12">
      <div className="relative space-y-6">
        {/* Header */}
        <div className="text-center space-y-3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-red)]">
            Our Work & Team
          </p>
          <h2 className="text-3xl font-bold text-[var(--accent-dark)] sm:text-4xl">
            Professional Craftsmanship
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Meet our skilled professionals and see the quality work we deliver every day
          </p>
        </div>

        {/* Card Deck Gallery */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="relative aspect-[4/3]">
              <Image
                src="/Gallery/car-mechanic-painting-car-with-spray-gun.jpg"
                alt="Professional mechanic painting car"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-semibold">Expert Paint Application</p>
              </div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="relative aspect-[4/3]">
              <Image
                src="/Gallery/painter.jpg"
                alt="Skilled painter at work"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-semibold">Professional Technicians</p>
              </div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="relative aspect-[4/3]">
              <Image
                src="/Gallery/side-view-man-wearing-protection-equipment.jpg"
                alt="Professional with safety equipment"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-semibold">Safety First Approach</p>
              </div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="relative aspect-[4/3]">
              <Image
                src="/Gallery/porsche-4891966_1280.jpg"
                alt="High-end vehicle repair"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-semibold">Quality Results</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center pt-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent-red)] px-8 py-4 text-base font-bold text-white shadow-xl transition hover:bg-red-700 hover:scale-105"
          >
            See What We Can Do For You
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
