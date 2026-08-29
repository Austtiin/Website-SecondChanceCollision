import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bumper-to-Bumper Collision Repair",
  description:
    "Need bumper-to-bumper collision repair in Minnesota? Second Chance Collision provides complete car collision repairs, bumper replacement, paint refinishing, and insurance support.",
  alternates: {
    canonical: "/bumper-to-bumper-collision-repair",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is included in bumper-to-bumper collision repair?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bumper-to-bumper collision repair can include front and rear bumper repair, panel alignment, paint refinishing, and final quality checks after accident damage.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer collision services for Blaine and Lino Lakes drivers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We regularly help drivers from Circle Pines, Blaine, Lino Lakes, and nearby communities with accident repair and collision services.",
      },
    },
  ],
};

export default function BumperToBumperCollisionRepairPage() {
  return (
    <div className="space-y-10 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="rounded-3xl bg-gradient-to-br from-[#12171b] via-[#1a2027] to-[#0f1419] p-8 shadow-2xl md:p-12">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-300">
            Full-service collision work
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Bumper-to-Bumper Collision Repair
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral-300">
            From front-end impact damage to rear bumper repair, we provide complete bumper-to-bumper collision services for drivers across Circle Pines, Blaine, and the surrounding Minnesota north metro.
          </p>
        </div>
      </section>

      <section className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
        <h2 className="text-2xl font-bold text-[var(--accent-dark)]">Complete Collision Services</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
          <li>Front bumper and rear bumper repair or replacement</li>
          <li>Panel and alignment correction after an accident</li>
          <li>Paint matching and refinishing for repaired areas</li>
          <li>Coordination with insurance adjusters and claims teams</li>
          <li>Final quality checks before vehicle pickup</li>
        </ul>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
          <h2 className="text-xl font-bold text-[var(--accent-dark)]">Serving Minnesota Drivers</h2>
          <p className="mt-4 text-neutral-700">
            We regularly help customers searching for accident repair, collision services, and car collision repairs in Circle Pines, Blaine, Lino Lakes, and nearby communities.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
          <h2 className="text-xl font-bold text-[var(--accent-dark)]">Request an Estimate</h2>
          <p className="mt-4 text-neutral-700">
            Call <a href="tel:612-913-6594" className="font-semibold text-[var(--accent-red)] hover:underline">(612) 913-6594</a> or start on our <Link href="/contact" className="font-semibold text-[var(--accent-red)] hover:underline">contact page</Link>.
          </p>
          <p className="mt-3 text-neutral-700">
            We can review damage photos and guide you through the next best step.
          </p>
        </div>
      </section>

      <section className="rounded-2xl bg-neutral-50 p-6 ring-1 ring-black/5">
        <p className="text-sm text-neutral-700">
          See also: <Link href="/collision-repair-blaine-mn" className="font-semibold text-[var(--accent-red)] hover:underline">Collision Repair in Blaine</Link>, <Link href="/collision-repair-lino-lakes-mn" className="font-semibold text-[var(--accent-red)] hover:underline">Collision Repair in Lino Lakes</Link>, <Link href="/collision-repair-ramsey-county-mn" className="font-semibold text-[var(--accent-red)] hover:underline">Collision Repair in Ramsey County</Link>, and <Link href="/insurance-claims" className="font-semibold text-[var(--accent-red)] hover:underline">Insurance Claims Help</Link>.
        </p>
      </section>
    </div>
  );
}
