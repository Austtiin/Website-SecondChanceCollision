export default function TermsAndConditions() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="rounded-2xl bg-gradient-to-br from-[var(--accent-dark)] to-[#1a2129] p-8 text-white shadow-xl md:p-12">
        <h1 className="text-3xl font-bold sm:text-4xl">Terms & Conditions</h1>
        <p className="mt-3 text-neutral-300">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Content */}
      <div className="space-y-6 rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5 md:p-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">Agreement to Terms</h2>
          <p className="leading-relaxed text-neutral-700">
            By accessing or using the Second Chance Collision website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">Information Subject to Change</h2>
          <div className="rounded-xl bg-red-50 border-l-4 border-[var(--accent-red)] p-6">
            <p className="font-semibold text-[var(--accent-dark)] mb-2">Important Notice:</p>
            <p className="leading-relaxed text-neutral-700">
              All information provided on this website, including but not limited to pricing, services, hours of operation, contact information, and service descriptions, is subject to change without notice. We make every effort to keep information current and accurate, but discrepancies may occur.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">No Sales or Transactions on Website</h2>
          <div className="rounded-xl bg-neutral-50 p-6">
            <p className="leading-relaxed text-neutral-700">
              This website is informational only and does not constitute an offer for sale or a binding contract for services. No sales, purchases, or service agreements are made through this website. All service requests, estimates, and agreements must be confirmed directly with Second Chance Collision through:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-neutral-700">
              <li>Phone: <a href="tel:0000000000" className="text-[var(--accent-red)] hover:underline font-medium">(000) 000-0000</a></li>
              <li>Email: <a href="mailto:info@secondchancecollision.com" className="text-[var(--accent-red)] hover:underline font-medium">info@secondchancecollision.com</a></li>
              <li>In-person visit: 416 Lilac St, Circle Pines, MN 55014</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">Services and Estimates</h2>
          <p className="leading-relaxed text-neutral-700">
            Any estimates, pricing information, or service descriptions provided on this website or through initial communications are approximate and non-binding. Final pricing and service agreements will be determined after:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-neutral-700">
            <li>Physical inspection of the vehicle</li>
            <li>Assessment of damage and repair requirements</li>
            <li>Consultation with insurance providers (if applicable)</li>
            <li>Written estimate approval</li>
          </ul>
          <p className="leading-relaxed text-neutral-700 mt-4">
            We reserve the right to refuse service or modify estimates based on actual conditions, parts availability, and other factors discovered during the repair process.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">Intellectual Property</h2>
          <p className="leading-relaxed text-neutral-700">
            The content on this website, including text, images, logos, and graphics, is the property of Second Chance Collision and is protected by copyright and trademark laws. Unauthorized use, reproduction, or distribution of this content is prohibited.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">External Links</h2>
          <p className="leading-relaxed text-neutral-700">
            Our website may contain links to third-party websites (such as Google Maps, insurance provider sites, etc.). We are not responsible for the content, privacy practices, or terms of service of these external sites. Accessing external links is at your own risk.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">Disclaimer of Warranties</h2>
          <p className="leading-relaxed text-neutral-700">
            This website and its content are provided &quot;as is&quot; without warranties of any kind, either express or implied, including but not limited to:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-neutral-700">
            <li>Accuracy or completeness of information</li>
            <li>Fitness for a particular purpose</li>
            <li>Uninterrupted or error-free operation</li>
            <li>Availability of services or products</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">Limitation of Liability</h2>
          <p className="leading-relaxed text-neutral-700">
            To the fullest extent permitted by law, Second Chance Collision shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of this website or services, including but not limited to:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-neutral-700">
            <li>Errors or omissions in website content</li>
            <li>Service delays or cancellations</li>
            <li>Reliance on information provided on the website</li>
            <li>Technical issues or website downtime</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">Service Agreements</h2>
          <p className="leading-relaxed text-neutral-700">
            Actual auto body repair services are governed by separate written service agreements provided at the time of service authorization. Those agreements supersede any general information on this website and contain specific terms regarding:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-neutral-700">
            <li>Scope of work and pricing</li>
            <li>Payment terms and methods</li>
            <li>Warranty coverage</li>
            <li>Customer responsibilities</li>
            <li>Liability limitations</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">Payment and Billing</h2>
          <p className="leading-relaxed text-neutral-700">
            Payment terms will be outlined in your service agreement. We accept various payment methods and offer flexible payment options for qualifying customers. All payments are due upon completion of services unless otherwise agreed upon in writing.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">Insurance Claims</h2>
          <p className="leading-relaxed text-neutral-700">
            We work with most major insurance providers. However, insurance claim approval, coverage amounts, and payment timelines are determined by your insurance company, not Second Chance Collision. You are ultimately responsible for all charges, regardless of insurance coverage.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">Appointment Scheduling</h2>
          <p className="leading-relaxed text-neutral-700">
            Appointments requested through this website, email, or phone are not confirmed until you receive direct confirmation from Second Chance Collision. We reserve the right to reschedule appointments due to unforeseen circumstances, parts availability, or scheduling conflicts.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">Privacy</h2>
          <p className="leading-relaxed text-neutral-700">
            Your use of this website is also governed by our <a href="/privacy" className="text-[var(--accent-red)] hover:underline font-medium">Privacy Policy</a>, which explains how we collect, use, and protect your personal information.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">Changes to Terms</h2>
          <p className="leading-relaxed text-neutral-700">
            We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on this page with an updated &quot;Last updated&quot; date. Your continued use of our website after changes are posted constitutes acceptance of the modified terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">Governing Law</h2>
          <p className="leading-relaxed text-neutral-700">
            These Terms and Conditions are governed by the laws of the State of Minnesota. Any disputes arising from these terms or your use of our services shall be resolved in the courts of Minnesota.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">Contact Information</h2>
          <p className="leading-relaxed text-neutral-700">
            If you have questions about these Terms and Conditions, please contact us:
          </p>
          <div className="rounded-xl bg-neutral-50 p-6 text-sm">
            <p className="font-bold text-[var(--accent-dark)]">Second Chance Collision</p>
            <p className="text-neutral-700">416 Lilac St</p>
            <p className="text-neutral-700">Circle Pines, MN 55014</p>
            <p className="mt-2 text-neutral-700">
              Phone: <a href="tel:0000000000" className="text-[var(--accent-red)] hover:underline">(000) 000-0000</a>
            </p>
            <p className="text-neutral-700">
              Email: <a href="mailto:info@secondchancecollision.com" className="text-[var(--accent-red)] hover:underline">info@secondchancecollision.com</a>
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">Severability</h2>
          <p className="leading-relaxed text-neutral-700">
            If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
          </p>
        </section>
      </div>
    </div>
  );
}
