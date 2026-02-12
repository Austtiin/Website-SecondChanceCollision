import Image from "next/image";
import Link from "next/link";
import AnimatedGallery from "./components/AnimatedGallery";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden rounded-3xl shadow-2xl min-h-[75vh] sm:min-h-[80vh] flex flex-col">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/painter.jpg"
            alt="Professional auto body work"
            fill
            className="object-cover"
            priority
          />
          {/* Multi-layered overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#12171b]/95 via-[#12171b]/90 to-[#0a0d10]/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12171b] via-transparent to-transparent" />
        </div>
        
        {/* Decorative Elements - Geometric Shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Red accent shapes */}
          <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-[var(--accent-red)]/20 blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-[var(--accent-red)]/15 blur-3xl" />
          <div className="absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-[var(--accent-red)]/10 blur-3xl" />
          
          {/* Subtle diagonal lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-red)]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-red)]/20 to-transparent" />
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 h-32 w-32 border-t-2 border-l-2 border-[var(--accent-red)]/30 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 h-32 w-32 border-b-2 border-r-2 border-[var(--accent-red)]/30 rounded-br-3xl" />
        </div>
        
        <div className="relative flex-1 flex items-center py-10 px-5 sm:py-10 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-7 w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-red)]/20 px-4 py-2 ring-1 ring-[var(--accent-red)]/30">
              <div className="h-2 w-2 animate-pulse rounded-full bg-[var(--accent-red)]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-300">
                Circle Pines, MN • Serving North Metro
              </span>
            </div>
            
            {/* Hero Title */}
            <div className="space-y-4 sm:space-y-5">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Expert Collision Repair &<br />Auto Body Services
              </h1>
              <p className="text-base sm:text-xl leading-relaxed text-neutral-300 max-w-2xl mx-auto">
                Quality workmanship, fair pricing, and exceptional service. From minor dents to major collision damage, we restore your vehicle with precision and care.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href="tel:0000000000"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent-red)] px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white shadow-xl transition hover:bg-red-700 hover:scale-105"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Get Free Estimate
              </a>
              <a
                href="mailto:info@secondchancecollision.com?subject=Appointment Request"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white bg-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-[#12171b] shadow-xl transition hover:bg-neutral-100 hover:scale-105"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Appointment
              </a>
            </div>
            
            {/* Quick Info Grid - Pyramid on mobile: 2 cards top, 1 bottom */}
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 pt-5 sm:pt-5 max-w-3xl mx-auto">
              <div className="text-center space-y-2 mx-auto max-w-xs sm:max-w-none">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[var(--accent-red)]/20 ring-1 ring-[var(--accent-red)]/30 mx-auto">
                  <svg className="h-6 w-6 text-[var(--accent-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-white">Insurance Assistance</p>
                <p className="text-xs text-neutral-400">We work with all providers</p>
              </div>
              <div className="text-center space-y-2 mx-auto max-w-xs sm:max-w-none">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[var(--accent-red)]/20 ring-1 ring-[var(--accent-red)]/30 mx-auto">
                  <svg className="h-6 w-6 text-[var(--accent-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-white">Open 6 Days a Week</p>
                <p className="text-xs text-neutral-400">Mon-Sat for your convenience</p>
              </div>
              <div className="text-center space-y-2 mx-auto max-w-xs sm:max-w-none col-span-2 sm:col-span-1">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[var(--accent-red)]/20 ring-1 ring-[var(--accent-red)]/30 mx-auto">
                  <svg className="h-6 w-6 text-[var(--accent-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-white">416 Lilac St, Circle Pines</p>
                <p className="text-xs text-neutral-400">Easy access from I-35W</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="relative pb-6 sm:pb-6 z-20">
          <div className="flex flex-col items-center gap-2 sm:gap-2 animate-bounce">
            <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">
              Scroll for more
            </span>
            <svg className="h-6 w-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>
      
      {/* Spacer for next section */}
      <div className="relative">

      </div>

      {/* Services overview - redesigned with black/red theme */}
      <section className="relative space-y-8">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-red)]">
            Complete auto care
          </p>
          <h2 className="text-3xl font-bold text-[var(--accent-dark)] sm:text-4xl">Our Auto Care Services</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            From collision repair to paint work and maintenance, we're your complete auto care partner
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Collision Repair */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-50 to-white p-6 shadow-lg ring-1 ring-red-100 transition hover:shadow-xl">
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--accent-red)]/10 blur-2xl" />
            <div className="relative space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent-red)] to-red-600 shadow-lg">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--accent-red)]">Collision Repair</p>
                <h3 className="text-lg font-bold text-[var(--accent-dark)]">Complete Body Work</h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  Structural and cosmetic repairs for all types of collision damage
                </p>
              </div>
            </div>
          </div>

          {/* Paint & Refinishing */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-neutral-50 p-6 shadow-lg ring-1 ring-black/5 transition hover:shadow-xl">
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--accent-red)]/10 blur-2xl" />
            <div className="relative space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent-red)] to-red-600 shadow-lg">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--accent-red)]">Paint & Refinishing</p>
                <h3 className="text-lg font-bold text-[var(--accent-dark)]">Factory-Quality Finish</h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  Precision color matching and professional paint application
                </p>
              </div>
            </div>
          </div>

          {/* Dent Repair */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-neutral-50 p-6 shadow-lg ring-1 ring-black/5 transition hover:shadow-xl">
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--accent-dark)]/10 blur-2xl" />
            <div className="relative space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent-dark)] to-[#1f252c] shadow-lg">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--accent-red)]">Dent Removal</p>
                <h3 className="text-lg font-bold text-[var(--accent-dark)]">Paintless Dent Repair</h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  Quick, cost-effective dent removal without repainting
                </p>
              </div>
            </div>
          </div>

          {/* Auto Maintenance */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-neutral-50 p-6 shadow-lg ring-1 ring-black/5 transition hover:shadow-xl">
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--accent-dark)]/10 blur-2xl" />
            <div className="relative space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent-dark)] to-[#1f252c] shadow-lg">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--accent-red)]">General Maintenance</p>
                <h3 className="text-lg font-bold text-[var(--accent-dark)]">Routine Service</h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  Oil changes, fluid checks, and preventive maintenance
                </p>
              </div>
            </div>
          </div>

          {/* ADAS Calibration */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-50 to-white p-6 shadow-lg ring-1 ring-red-100 transition hover:shadow-xl">
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--accent-red)]/10 blur-2xl" />
            <div className="relative space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent-red)] to-red-600 shadow-lg">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--accent-red)]">Advanced Tech</p>
                <h3 className="text-lg font-bold text-[var(--accent-dark)]">ADAS Calibration</h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  Safety system calibration and diagnostic scanning
                </p>
              </div>
            </div>
          </div>

          {/* Fleet Services */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-neutral-50 p-6 shadow-lg ring-1 ring-black/5 transition hover:shadow-xl">
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--accent-red)]/10 blur-2xl" />
            <div className="relative space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent-dark)] to-[#1f252c] shadow-lg">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--accent-red)]">Commercial</p>
                <h3 className="text-lg font-bold text-[var(--accent-dark)]">Fleet Services</h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  Business fleet maintenance with flexible scheduling
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Gallery Showcase */}
      <AnimatedGallery />

      {/* Featured repair image */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-red-50/20 to-neutral-50 p-6 shadow-lg ring-1 ring-red-100/50 md:flex md:items-center md:gap-8 md:p-8">
        {/* Decorative corner accents */}
        <div className="pointer-events-none absolute -left-4 -top-4 h-32 w-32 rounded-full border-8 border-[var(--accent-red)]/5" />
        <div className="pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 rotate-45 rounded-3xl border-4 border-[var(--accent-dark)]/5" />
        <div className="absolute right-0 top-0 h-96 w-96 -translate-y-32 translate-x-32 rounded-full bg-[var(--accent-red)]/5 blur-3xl" />
        <div className="relative mb-4 h-56 w-full overflow-hidden rounded-2xl bg-neutral-900 md:mb-0 md:h-64 md:flex-1">
          <Image
            src="/porche.jpg"
            alt="Freshly refinished Porsche in the Second Chance Collision shop"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-3 md:flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-red)]">
            Attention to detail
          </p>
          <p className="text-sm font-semibold text-[var(--accent-dark)]">
            From everyday drivers to performance cars
          </p>
          <p className="text-sm text-neutral-700">
            Whether it&apos;s your daily vehicle or a weekend car, we treat every
            repair with the same care&mdash;panel gaps, reflections, and color
            match all matter.
          </p>
        </div>
      </section>

      {/* Estimate / CTA */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#12171b] via-[#1a2129] to-[#0f1419] p-6 text-sm text-neutral-100 shadow-xl md:flex md:items-center md:justify-between md:gap-6 md:p-7">
        {/* Subtle dot pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, #e6141f 1px, transparent 1px)', backgroundSize: '20px 20px'}} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(230,20,31,0.15),_transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(230,20,31,0.1),_transparent_40%)]" />
        <div className="relative z-10 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-300">
            Ready for an estimate?
          </p>
          <p className="text-sm text-neutral-100">
            Call, email, or use the contact page to send a few photos of the
            damage. We'll review them and follow up with next steps.
          </p>
        </div>
        <div className="relative z-10 mt-4 flex flex-wrap gap-3 md:mt-0 md:justify-end">
          <a
            href="tel:0000000000"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent-red)] px-5 py-2.5 text-xs font-bold text-white shadow-lg transition hover:bg-red-700 hover:shadow-xl active:scale-95 cursor-pointer"
          >
            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call us
          </a>
          <a
            href="mailto:info@secondchancecollision.com"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-transparent px-5 py-2 text-xs font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email us
          </a>
          <a
            href="https://maps.google.com/?q=416+Lilac+St+Circle+Pines+MN+55014"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-transparent px-5 py-2 text-xs font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Get directions
          </a>
        </div>
      </section>
    </div>
  );
}
