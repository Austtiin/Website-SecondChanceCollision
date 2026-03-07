"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Do you provide a warranty on repairs?",
    answer: "Yes! We stand behind our work with a comprehensive warranty on all collision repairs and paintwork. Our modern ISO-certified paintbooth ensures factory-quality finishes that last. We'll discuss specific warranty details when you bring your vehicle in.",
  },
  {
    question: "How long does it take to repair my vehicle?",
    answer: "Repair time depends on damage severity, required parts, parts availability, and any hidden damage discovered during teardown. We'll provide you with the most accurate timeframe possible and keep you updated throughout the entire process. Most minor repairs can be completed within days.",
  },
  {
    question: "Do I need more than one estimate?",
    answer: "No. You can choose us as your repair facility and let us handle the rest. We work directly with all major insurance companies on your behalf, managing the entire claims process so you don't have to.",
  },
  {
    question: "What if my vehicle isn't driveable?",
    answer: "No problem! Contact us and we'll recommend a trustworthy local towing company to bring your vehicle to us. All vehicles are stored securely inside our shop during non-business hours for your peace of mind.",
  },
  {
    question: "Do you offer loaner vehicles?",
    answer: "Yes! We offer free loaner vehicles to our customers while your vehicle is being repaired. We maintain a variety of vehicles to meet your transportation needs during the repair process.",
  },
  {
    question: "Do I need an appointment for an estimate?",
    answer: "No appointment needed! Stop by anytime during business hours for a free estimate. Our team will assess your vehicle and provide you with honest, transparent pricing—no surprises.",
  },
  {
    question: "When can I drop off my vehicle?",
    answer: "You can drop off your vehicle anytime during our business hours (Mon-Fri: 8AM-5PM, Sat: 9AM-2PM). For after-hours drop-offs, we have a secure key drop at our back door.",
  },
  {
    question: "Do you work with insurance companies?",
    answer: "Absolutely. We're experienced working with all major insurance carriers. We handle the claims coordination, documentation, and communication with your insurance adjuster, making the process as smooth as possible for you.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-12 py-12">
      {/* Page Header */}
      <section className="text-center space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-red)]">
          Have Questions?
        </p>
        <h1 className="text-4xl font-bold text-[var(--accent-dark)] sm:text-5xl">
          Frequently Asked Questions
        </h1>
        <p className="text-neutral-600 max-w-3xl mx-auto text-lg">
          Find answers to common questions about our repair process, warranty, services, and more. 
          If you don&apos;t find what you&apos;re looking for, feel free to reach out to us directly.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="relative space-y-6 max-w-4xl mx-auto">
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition hover:shadow-xl"
            >
              {/* Decorative element */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--accent-red)]/10 blur-2xl" />

              <button
                onClick={() => toggleFAQ(index)}
                className="relative z-10 w-full px-6 py-5 sm:px-8 flex items-center justify-between text-left transition hover:bg-neutral-50 cursor-pointer"
              >
                <h3 className="text-base sm:text-lg font-bold text-[var(--accent-dark)] pr-6">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg
                    className="h-6 w-6 text-[var(--accent-red)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="relative z-10 border-t border-neutral-100 px-6 py-5 sm:px-8 bg-neutral-50 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-4xl mx-auto">
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
                While we strive to provide accurate information, please refer to your written contract for exact terms and conditions. 
                Some details may differ based on your specific repair needs and insurance agreement. If you have any questions, 
                concerns, or need clarification on anything, please contact our shop directly using the contact information listed on our site. 
                We&apos;re here to ensure you have all the information you need.
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
              Still Have Questions?
            </h3>
            <p className="text-base sm:text-lg text-red-100 leading-relaxed max-w-2xl mx-auto">
              Our friendly team is here to help. Reach out anytime with your questions about repairs, estimates, or any of our services.
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
              Schedule Estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

