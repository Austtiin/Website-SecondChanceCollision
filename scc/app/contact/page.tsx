import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="space-y-10">
      {/* Hero banner with black/red theme */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#12171b] via-[#1a2027] to-[#0f1419] p-8 shadow-2xl md:p-12">
        {/* Decorative shapes */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[var(--accent-red)]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[var(--accent-red)]/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'linear-gradient(#e6141f 1px, transparent 1px), linear-gradient(90deg, #e6141f 1px, transparent 1px)', backgroundSize: '80px 80px'}} />
        
        <div className="relative space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-red)]/20 px-5 py-2 ring-1 ring-[var(--accent-red)]/30">
            <div className="h-2 w-2 animate-pulse rounded-full bg-[var(--accent-red)]" />
            <span className="text-xs font-bold uppercase tracking-wider text-red-300">
              Get in touch
            </span>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's Get Your Vehicle Back on the Road
          </h1>
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-[var(--accent-red)] to-red-400" />
          <p className="max-w-3xl text-lg leading-relaxed text-neutral-300">
            Call, email, or visit us for an estimate. We work with all major insurance companies and provide honest, transparent pricing.
          </p>
        </div>
      </section>

      {/* Contact Information Cards with decorative theme */}
      <section className="grid gap-6 lg:grid-cols-2">
        {/* Contact Details Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-neutral-50 p-8 shadow-lg ring-1 ring-black/5">
          <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-[var(--accent-red)]/10 blur-2xl" />
          
          <div className="relative space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-red)]">
                Contact Information
              </p>
              <h2 className="text-2xl font-bold text-[var(--accent-dark)]">
                Reach Out Today
              </h2>
            </div>

            <div className="space-y-4">
              {/* Phone */}
              <a href="tel:0000000000" className="group flex items-start gap-4 rounded-xl p-4 transition hover:bg-neutral-50">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent-red)] to-red-600 shadow-lg">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Phone</p>
                  <p className="text-lg font-bold text-[var(--accent-dark)] group-hover:text-[var(--accent-red)]">(000) 000-0000</p>
                  <p className="text-sm text-neutral-600">Mon-Fri: 8AM-5PM, Sat: 9AM-2PM</p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:info@secondchancecollision.com" className="group flex items-start gap-4 rounded-xl p-4 transition hover:bg-neutral-50">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent-dark)] to-[#1f252c] shadow-lg">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Email</p>
                  <p className="text-sm font-bold text-[var(--accent-dark)] group-hover:text-[var(--accent-red)] break-all">info@secondchancecollision.com</p>
                  <p className="text-sm text-neutral-600">We respond within 24 hours</p>
                </div>
              </a>

              {/* Address */}
              <a href="https://maps.google.com/?q=416+Lilac+St+Circle+Pines+MN+55014" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 rounded-xl p-4 transition hover:bg-neutral-50">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent-red)] to-red-600 shadow-lg">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Location</p>
                  <p className="text-sm font-bold text-[var(--accent-dark)] group-hover:text-[var(--accent-red)]">416 Lilac St<br />Circle Pines, MN 55014</p>
                  <p className="text-sm text-neutral-600">Click for directions →</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Process Card with dark theme */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0a0d10] via-[#12171b] to-[#1a2028] p-8 shadow-2xl ring-1 ring-white/10">
          <div className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-[var(--accent-red)]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-[var(--accent-red)]/10 blur-2xl" />
          
          <div className="relative space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-red-300">
                What to expect
              </p>
              <h2 className="text-2xl font-bold text-white">
                Our Process
              </h2>
              <div className="h-0.5 w-16 rounded-full bg-gradient-to-r from-[var(--accent-red)] to-transparent" />
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--accent-red)]/20 ring-1 ring-[var(--accent-red)]/30">
                  <span className="text-lg font-bold text-[var(--accent-red)]">1</span>
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-white">Contact Us</p>
                  <p className="text-sm text-neutral-400">Call, email, or stop by with photos of the damage</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--accent-red)]/20 ring-1 ring-[var(--accent-red)]/30">
                  <span className="text-lg font-bold text-[var(--accent-red)]">2</span>
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-white">Get an Estimate</p>
                  <p className="text-sm text-neutral-400">We'll provide a detailed, honest estimate</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--accent-red)]/20 ring-1 ring-[var(--accent-red)]/30">
                  <span className="text-lg font-bold text-[var(--accent-red)]">3</span>
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-white">Schedule Repair</p>
                  <p className="text-sm text-neutral-400">We work with your insurance and schedule</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--accent-red)]/20 ring-1 ring-[var(--accent-red)]/30">
                  <span className="text-lg font-bold text-[var(--accent-red)]">4</span>
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-white">Quality Repair</p>
                  <p className="text-sm text-neutral-400">Expert technicians restore your vehicle to pre-accident condition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to home */}
      <section className="text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-600 transition hover:text-[var(--accent-red)]"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to home page
        </Link>
      </section>
    </div>
  );
}
