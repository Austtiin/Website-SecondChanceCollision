import Link from "next/link";

export default function RightToKnowPage() {
  return (
    <div className="space-y-12 py-12">
      {/* Page Header */}
      <section className="text-center space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-red)]">
          Your Rights
        </p>
        <h1 className="text-4xl font-bold text-[var(--accent-dark)] sm:text-5xl">
          Know Your Insurance Rights
        </h1>
        <p className="text-neutral-600 max-w-3xl mx-auto text-lg">
          Understanding your rights as a vehicle owner helps ensure you get the quality repairs you deserve. 
          Here&apos;s what you need to know when dealing with insurance claims.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto space-y-8">
        {/* Your Choice Matters */}
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-6 sm:p-8">
          <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--accent-red)]/10 blur-3xl" />
          
          <div className="relative z-10 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 rounded-full bg-[var(--accent-red)] p-2">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="space-y-2 flex-1">
                <h2 className="text-2xl font-bold text-[var(--accent-dark)]">
                  You Have the Right to Choose Your Repair Shop
                </h2>
                <p className="text-neutral-700 leading-relaxed">
                  According to Minnesota state law, you have the right to choose any repair shop to fix your vehicle. 
                  Once you&apos;ve chosen a repair facility and informed the insurance representative, it&apos;s illegal for them 
                  to try to influence you to take it somewhere else.
                </p>
                <p className="text-sm text-neutral-600 italic">
                  Minnesota Statute 72A.201, Subd. 6
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Scare Tactics */}
        <div className="rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 p-6 sm:p-8 border-2 border-red-100">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <svg className="h-6 w-6 text-[var(--accent-red)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div className="space-y-3 flex-1">
                <h2 className="text-2xl font-bold text-[var(--accent-dark)]">
                  Don&apos;t Fall for False Scare Tactics
                </h2>
                <p className="text-neutral-700 leading-relaxed">
                  Insurance companies may try to influence your shop decision through misleading statements. 
                  Here are common tactics and the truth:
                </p>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              {/* Tactic 1 */}
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">❌</span>
                  <div className="space-y-2 flex-1">
                    <p className="font-bold text-neutral-800">
                      &ldquo;We cannot guarantee the work performed at that shop.&rdquo;
                    </p>
                    <div className="flex items-start gap-2">
                      <span className="text-2xl">✅</span>
                      <p className="text-neutral-700">
                        <strong>The Truth:</strong> Second Chance Collision offers a lifetime warranty on all repairs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tactic 2 */}
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">❌</span>
                  <div className="space-y-2 flex-1">
                    <p className="font-bold text-neutral-800">
                      &ldquo;We cannot find that shop on our list.&rdquo;
                    </p>
                    <div className="flex items-start gap-2">
                      <span className="text-2xl">✅</span>
                      <p className="text-neutral-700">
                        <strong>The Truth:</strong> You have the legal right to choose any licensed repair shop, 
                        regardless of their &ldquo;preferred&rdquo; list.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tactic 3 */}
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">❌</span>
                  <div className="space-y-2 flex-1">
                    <p className="font-bold text-neutral-800">
                      &ldquo;Your repairs may be delayed up to a week by not choosing a preferred shop.&rdquo;
                    </p>
                    <div className="flex items-start gap-2">
                      <span className="text-2xl">✅</span>
                      <p className="text-neutral-700">
                        <strong>The Truth:</strong> We work efficiently with all insurance companies and provide 
                        timely repairs regardless of your insurer&apos;s preferences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tactic 4 */}
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">❌</span>
                  <div className="space-y-2 flex-1">
                    <p className="font-bold text-neutral-800">
                      &ldquo;You may incur additional charges by choosing your own shop.&rdquo;
                    </p>
                    <div className="flex items-start gap-2">
                      <span className="text-2xl">✅</span>
                      <p className="text-neutral-700">
                        <strong>The Truth:</strong> Insurance companies must pay for quality repairs. 
                        You won&apos;t face extra charges for choosing the shop you trust.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Rights */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* No Multiple Estimates */}
          <div className="rounded-xl bg-white shadow-lg ring-1 ring-black/5 p-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-[var(--accent-red)]/10 p-2">
                  <svg className="h-5 w-5 text-[var(--accent-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[var(--accent-dark)]">
                  No Multiple Estimates Needed
                </h3>
              </div>
              <p className="text-neutral-700 text-sm leading-relaxed">
                You do not need to get more than one estimate. Once you choose your repair facility, 
                simply drop off your vehicle with a claim number and the shop can handle the rest.
              </p>
            </div>
          </div>

          {/* No Claims Center Visit */}
          <div className="rounded-xl bg-white shadow-lg ring-1 ring-black/5 p-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-[var(--accent-red)]/10 p-2">
                  <svg className="h-5 w-5 text-[var(--accent-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[var(--accent-dark)]">
                  No Claims Center Required
                </h3>
              </div>
              <p className="text-neutral-700 text-sm leading-relaxed">
                You do not have to travel to an insurance claims center. Insurance companies have representatives 
                that will come to your chosen repair facility.
              </p>
            </div>
          </div>

          {/* Original Parts */}
          <div className="rounded-xl bg-white shadow-lg ring-1 ring-black/5 p-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-[var(--accent-red)]/10 p-2">
                  <svg className="h-5 w-5 text-[var(--accent-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[var(--accent-dark)]">
                  Quality Parts Required
                </h3>
              </div>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Your insurance company is required to have your vehicle repaired to pre-accident condition 
                using original equipment parts (OEM). You do not have to agree to aftermarket parts.
              </p>
            </div>
          </div>

          {/* Like Kind Quality */}
          <div className="rounded-xl bg-white shadow-lg ring-1 ring-black/5 p-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-[var(--accent-red)]/10 p-2">
                  <svg className="h-5 w-5 text-[var(--accent-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[var(--accent-dark)]">
                  Like Kind and Quality
                </h3>
              </div>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Insurance companies must pay for parts of like, kind, and quality. This means parts that match 
                the original manufacturer specifications and quality standards.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <svg
              className="h-6 w-6 text-[var(--accent-red)] flex-shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-[var(--accent-dark)]">
                Important Notice
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                While we provide this information to help you understand your rights, please refer to your written contract 
                and insurance policy for exact terms and conditions. Some details may differ based on your specific situation 
                and insurance agreement. If you have any questions, concerns, or need clarification on anything related to 
                your repair or insurance claim, please contact our shop directly using the contact information listed on our site. 
                We&apos;re here to advocate for your rights and ensure you receive the quality repairs you deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--accent-red)] via-red-600 to-[#c00a17] p-8 shadow-2xl sm:p-12 max-w-4xl mx-auto">
        <div className="pointer-events-none absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1), transparent 50%)',
        }} />

        <div className="relative z-10 text-center space-y-6">
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              We&apos;ll Fight for Your Rights
            </h3>
            <p className="text-base sm:text-lg text-red-100 leading-relaxed max-w-2xl mx-auto">
              Let us handle the insurance paperwork and negotiations. We&apos;ll make sure you get the quality repairs 
              you&apos;re entitled to under Minnesota law.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="tel:612-913-6594"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-[var(--accent-red)] shadow-xl transition hover:bg-neutral-100 hover:scale-105 cursor-pointer"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white bg-transparent px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white shadow-xl transition hover:bg-white/10 hover:scale-105 cursor-pointer"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

