import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insurance Claims Help",
  description:
    "Filing an insurance claim after a collision? We bill your insurer directly, handle adjuster communication, and fight for OEM parts and fair pricing.",
  alternates: {
    canonical: "/insurance-claims",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you bill my insurance company directly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. In most cases we bill your insurance company directly for the approved repair amount, so you typically only pay your deductible.",
      },
    },
    {
      "@type": "Question",
      name: "Can I choose Second Chance Collision even if my insurer suggests another shop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Under Minnesota law you have the right to choose any licensed repair shop for your vehicle, regardless of your insurer's preferred list.",
      },
    },
    {
      "@type": "Question",
      name: "Which insurance companies do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We regularly work with all major carriers, including State Farm, Progressive, Allstate, GEICO, Farmers, Liberty Mutual, American Family, and Travelers, along with regional and local providers.",
      },
    },
  ],
};

const carriers = [
  "State Farm",
  "Progressive",
  "Allstate",
  "GEICO",
  "Farmers",
  "Liberty Mutual",
  "American Family",
  "Travelers",
  "Auto-Owners",
  "USAA",
];

export default function InsuranceClaimsPage() {
  return (
    <div className="space-y-10 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl shadow-xl">
        <div className="absolute inset-0">
          <Image
            src="/Gallery/IMG_20260301_113707 (4).webp"
            alt="Freshly painted vehicle in the Second Chance Collision paint booth"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-br from-[#12171b]/90 via-[#12171b]/85 to-[#0f1419]/90" />
        </div>
        <div className="relative max-w-3xl space-y-4 p-8 md:p-12">
          <p className="text-xs font-bold uppercase tracking-wider text-red-300">
            Insurance Claims
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            We Handle Your Insurance Claim So You Don&apos;t Have To
          </h1>
          <p className="text-lg leading-relaxed text-neutral-300">
            Direct billing, adjuster coordination, and paperwork handled by our team - from first estimate to final walkthrough. You focus on your day, we&apos;ll handle your claim.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="tel:612-913-6594"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-red px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-red-700 cursor-pointer"
            >
              Call (612) 913-6594
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10 cursor-pointer"
            >
              Start an Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-accent-dark">Direct Billing With Your Insurer</h2>
            <p className="text-neutral-700 leading-relaxed">
              We work with all major insurance carriers and most regional providers. In most cases we bill your
              insurance company directly for the approved repair amount, so you typically only pay your deductible
              out of pocket - no reimbursement paperwork to chase down.
            </p>
          </div>
          <div className="space-y-3">
              <h2 className="text-2xl font-bold text-accent-dark">You Choose the Shop - It&apos;s the Law</h2>
            <p className="text-neutral-700 leading-relaxed">
              Minnesota Statute 72A.201 gives you the right to choose your own repair shop. Insurers cannot legally
              steer you toward a &ldquo;preferred&rdquo; shop. See our{" "}
              <Link href="/right-to-know" className="font-semibold text-accent-red hover:underline">
                full breakdown of your rights
              </Link>{" "}
              for details.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="rounded-2xl bg-neutral-900 p-8 shadow-lg md:p-12">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">How a Claim Works With Us</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { step: "1", title: "File Your Claim", body: "Report the damage to your insurer and get a claim number, or bring the vehicle in first and we'll help you start the claim." },
            { step: "2", title: "We Write the Estimate", body: "We inspect the vehicle, document all damage, and submit a detailed repair estimate to your adjuster." },
            { step: "3", title: "We Coordinate With Your Adjuster", body: "We handle supplement requests, approvals, and any back-and-forth with the insurance company directly." },
            { step: "4", title: "Direct Billing at Pickup", body: "We bill your insurer for the covered amount. You pay your deductible, we handle the rest." },
          ].map((item) => (
            <div key={item.step} className="rounded-xl bg-neutral-800 border border-white/10 p-6">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-accent-red text-sm font-bold text-white">
                {item.step}
              </div>
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Carriers */}
      <section className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
        <h2 className="text-2xl font-bold text-accent-dark">Carriers We Regularly Work With</h2>
        <p className="mt-2 text-neutral-700">
          We coordinate claims with all major insurance companies, including:
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {carriers.map((carrier) => (
            <span key={carrier} className="rounded-full bg-neutral-100 px-3 py-1.5 text-sm font-medium text-neutral-700">
              {carrier}
            </span>
          ))}
          <span className="rounded-full bg-neutral-100 px-3 py-1.5 text-sm font-medium text-neutral-700">
            and more
          </span>
        </div>
        <p className="mt-4 text-xs text-neutral-500">
          Carrier names are used to describe the insurers we routinely coordinate claims with and do not imply
          endorsement or affiliation.
        </p>
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-accent-red p-8 text-center shadow-lg sm:p-12">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Get Your Claim Moving Today</h2>
        <p className="mx-auto mt-3 max-w-2xl text-red-100">
          Call us or send a few photos of the damage and we&apos;ll walk you through next steps - insurance
          paperwork included.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="tel:612-913-6594"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-accent-red shadow-md transition hover:bg-neutral-100 cursor-pointer"
          >
            Call (612) 913-6594
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10 cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
