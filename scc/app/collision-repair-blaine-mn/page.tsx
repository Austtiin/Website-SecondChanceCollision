import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Collision Repair in Blaine, MN",
  description:
    "Looking for collision repair in Blaine, MN? Second Chance Collision provides car collision repairs, dent repair, paint matching, and insurance claim support near Blaine.",
  alternates: {
    canonical: "/collision-repair-blaine-mn",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you provide car collision repairs near Blaine, MN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide complete collision repair services for Blaine-area drivers, including body work, bumper repair, paint refinishing, and insurance support.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with insurance claims for collision repair?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We regularly coordinate with major insurance carriers and help document the repair process to keep your claim moving.",
      },
    },
  ],
};

export default function CollisionRepairBlainePage() {
  return (
    <div className="space-y-10 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="rounded-3xl bg-gradient-to-br from-[#12171b] via-[#1a2027] to-[#0f1419] p-8 shadow-2xl md:p-12">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-300">
            Blaine service area
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Collision Repair in Blaine, MN
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral-300">
            If you need trusted collision repair in Blaine, our Circle Pines shop is nearby and ready to help with everything from minor dents to major car collision repairs.
          </p>
        </div>
      </section>

      <section className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
        <div className="space-y-4 text-neutral-700">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">
            Car Collision Repairs Near Blaine
          </h2>
          <p>
            Second Chance Collision works with drivers across Blaine, Lino Lakes, and the north metro who are searching for a dependable car collision shop with clear communication and quality workmanship.
          </p>
          <p>
            We handle structural and cosmetic collision damage, bumper repair and replacement, paint refinishing, and final quality checks before delivery.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
          <h2 className="text-xl font-bold text-[var(--accent-dark)]">What We Help With</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
            <li>Accident and collision damage repair</li>
            <li>Panel replacement and alignment</li>
            <li>Bumper-to-bumper collision repair</li>
            <li>Paint matching and refinishing</li>
            <li>Insurance estimate and documentation support</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
          <h2 className="text-xl font-bold text-[var(--accent-dark)]">Need a Fast Estimate?</h2>
          <p className="mt-4 text-neutral-700">
            Call us at <a href="tel:612-913-6594" className="font-semibold text-[var(--accent-red)] hover:underline">(612) 913-6594</a> or visit our <Link href="/contact" className="font-semibold text-[var(--accent-red)] hover:underline">contact page</Link>.
          </p>
          <p className="mt-3 text-neutral-700">
            We are located at 416 Lilac St, Circle Pines, MN, with quick access for Blaine-area drivers.
          </p>
        </div>
      </section>

      <section className="rounded-2xl bg-neutral-50 p-6 ring-1 ring-black/5">
        <p className="text-sm text-neutral-700">
          Related services: <Link href="/collision-repair-lino-lakes-mn" className="font-semibold text-[var(--accent-red)] hover:underline">Collision Repair in Lino Lakes</Link>, <Link href="/collision-repair-ramsey-county-mn" className="font-semibold text-[var(--accent-red)] hover:underline">Collision Repair in Ramsey County</Link>, <Link href="/bumper-to-bumper-collision-repair" className="font-semibold text-[var(--accent-red)] hover:underline">Bumper-to-Bumper Collision Repair</Link>, and <Link href="/insurance-claims" className="font-semibold text-[var(--accent-red)] hover:underline">Insurance Claims Help</Link>.
        </p>
      </section>
    </div>
  );
}
