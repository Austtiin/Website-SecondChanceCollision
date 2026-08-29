import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Collision Repair in Ramsey County, MN",
  description:
    "Need collision repair in Ramsey County, MN? Second Chance Collision offers trusted auto body repair, certified technicians, and insurance claim support for local drivers.",
  alternates: {
    canonical: "/collision-repair-ramsey-county-mn",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you serve customers across Ramsey County for collision repair?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve drivers from Ramsey County and nearby communities for accident repair, body work, and refinishing services.",
      },
    },
    {
      "@type": "Question",
      name: "Are your technicians experienced with insurance claim repairs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our team works with major insurance carriers and helps with documentation and claim coordination throughout the repair process.",
      },
    },
  ],
};

export default function CollisionRepairRamseyCountyPage() {
  return (
    <div className="space-y-10 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="rounded-3xl bg-gradient-to-br from-[#12171b] via-[#1a2027] to-[#0f1419] p-8 shadow-2xl md:p-12">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-300">
            Ramsey County service area
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Collision Repair in Ramsey County, MN
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral-300">
            Second Chance Collision helps Ramsey County drivers recover from accidents with high-quality collision services, straight-forward estimates, and reliable repair timelines.
          </p>
        </div>
      </section>

      <section className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
        <h2 className="text-2xl font-bold text-[var(--accent-dark)]">
          Trusted Collision Repair Center Serving Ramsey County
        </h2>
        <div className="mt-4 space-y-3 text-neutral-700">
          <p>
            If you are searching for trusted collision repair in Ramsey County, we provide complete accident repair services including body work, paint correction, bumper repair, and structural repair support.
          </p>
          <p>
            Our team works with major insurance carriers and helps coordinate documentation so your repair process stays as smooth as possible.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
          <h2 className="text-xl font-bold text-[var(--accent-dark)]">Why Drivers Choose Us</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
            <li>Certified auto body technicians</li>
            <li>Transparent pricing and clear communication</li>
            <li>Insurance claim coordination support</li>
            <li>Quality-focused repairs and refinishing</li>
            <li>Convenient access from Ramsey County communities</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
          <h2 className="text-xl font-bold text-[var(--accent-dark)]">Start Your Repair</h2>
          <p className="mt-4 text-neutral-700">
            Call <a href="tel:612-913-6594" className="font-semibold text-[var(--accent-red)] hover:underline">(612) 913-6594</a> or request details on our <Link href="/contact" className="font-semibold text-[var(--accent-red)] hover:underline">contact page</Link>.
          </p>
          <p className="mt-3 text-neutral-700">
            We are based in Circle Pines and regularly serve customers from Ramsey County and the surrounding north metro.
          </p>
        </div>
      </section>

      <section className="rounded-2xl bg-neutral-50 p-6 ring-1 ring-black/5">
        <p className="text-sm text-neutral-700">
          Related services: <Link href="/collision-repair-blaine-mn" className="font-semibold text-[var(--accent-red)] hover:underline">Collision Repair in Blaine</Link>, <Link href="/collision-repair-lino-lakes-mn" className="font-semibold text-[var(--accent-red)] hover:underline">Collision Repair in Lino Lakes</Link>, <Link href="/bumper-to-bumper-collision-repair" className="font-semibold text-[var(--accent-red)] hover:underline">Bumper-to-Bumper Collision Repair</Link>, and <Link href="/insurance-claims" className="font-semibold text-[var(--accent-red)] hover:underline">Insurance Claims Help</Link>.
        </p>
      </section>
    </div>
  );
}
