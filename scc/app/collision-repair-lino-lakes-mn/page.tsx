import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Collision Repair in Lino Lakes, MN",
  description:
    "Looking for collision repair in Lino Lakes, MN? Second Chance Collision provides car collision repairs, accident repair, bumper work, and insurance claim support nearby.",
  alternates: {
    canonical: "/collision-repair-lino-lakes-mn",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you provide collision repair services near Lino Lakes, MN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve Lino Lakes drivers with collision repair, bumper repair, paint refinishing, and claim-support services from our Circle Pines location.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get an estimate for accident repair quickly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can call us for a fast estimate and next steps. We can also help coordinate information needed for insurance claims.",
      },
    },
  ],
};

export default function CollisionRepairLinoLakesPage() {
  return (
    <div className="space-y-10 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="rounded-3xl bg-gradient-to-br from-[#12171b] via-[#1a2027] to-[#0f1419] p-8 shadow-2xl md:p-12">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-300">
            Lino Lakes service area
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Collision Repair in Lino Lakes, MN
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral-300">
            Need reliable collision repair near Lino Lakes? We help local drivers with car collision repairs, bumper-to-bumper restoration, and clear communication from estimate to delivery.
          </p>
        </div>
      </section>

      <section className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
        <h2 className="text-2xl font-bold text-[var(--accent-dark)]">
          Accident and Car Collision Repairs for Lino Lakes Drivers
        </h2>
        <div className="mt-4 space-y-3 text-neutral-700">
          <p>
            We provide complete collision services including body work, panel alignment, paint matching, and bumper repair for customers in Lino Lakes and surrounding communities.
          </p>
          <p>
            If your vehicle is part of an insurance claim, we help with documentation and communication to keep repairs moving efficiently.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
          <h2 className="text-xl font-bold text-[var(--accent-dark)]">Local Collision Services</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
            <li>Collision and accident damage repair</li>
            <li>Bumper repair and replacement</li>
            <li>Paint refinishing and color matching</li>
            <li>Structural and cosmetic repair support</li>
            <li>Insurance estimate assistance</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
          <h2 className="text-xl font-bold text-[var(--accent-dark)]">Get Started</h2>
          <p className="mt-4 text-neutral-700">
            Call <a href="tel:612-913-6594" className="font-semibold text-[var(--accent-red)] hover:underline">(612) 913-6594</a> or request details on the <Link href="/contact" className="font-semibold text-[var(--accent-red)] hover:underline">contact page</Link>.
          </p>
          <p className="mt-3 text-neutral-700">
            Our shop at 416 Lilac St in Circle Pines is close to Lino Lakes and easy to reach.
          </p>
        </div>
      </section>

      <section className="rounded-2xl bg-neutral-50 p-6 ring-1 ring-black/5">
        <p className="text-sm text-neutral-700">
          Related services: <Link href="/collision-repair-blaine-mn" className="font-semibold text-[var(--accent-red)] hover:underline">Collision Repair in Blaine</Link>, <Link href="/collision-repair-ramsey-county-mn" className="font-semibold text-[var(--accent-red)] hover:underline">Collision Repair in Ramsey County</Link>, <Link href="/bumper-to-bumper-collision-repair" className="font-semibold text-[var(--accent-red)] hover:underline">Bumper-to-Bumper Collision Repair</Link>, and <Link href="/insurance-claims" className="font-semibold text-[var(--accent-red)] hover:underline">Insurance Claims Help</Link>.
        </p>
      </section>
    </div>
  );
}
