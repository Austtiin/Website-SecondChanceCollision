export default function PrivacyPolicy() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="rounded-2xl bg-gradient-to-br from-[var(--accent-dark)] to-[#1a2129] p-8 text-white shadow-xl md:p-12">
        <h1 className="text-3xl font-bold sm:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-neutral-300">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Content */}
      <div className="space-y-6 rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5 md:p-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">Introduction</h2>
          <p className="leading-relaxed text-neutral-700">
            Second Chance Collision (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or use our services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">Information We Collect</h2>
          <p className="leading-relaxed text-neutral-700">
            We may collect the following types of information:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-neutral-700">
            <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address when you contact us or request services</li>
            <li><strong>Vehicle Information:</strong> Make, model, year, VIN, and details about repair needs</li>
            <li><strong>Insurance Information:</strong> Insurance provider details and claim information when applicable</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our website, collected through cookies and analytics tools</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">Google Analytics</h2>
          <p className="leading-relaxed text-neutral-700">
            We use Google Analytics to understand how visitors use our website. Google Analytics collects information such as:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-neutral-700">
            <li>Pages visited and time spent on each page</li>
            <li>How you arrived at our website (search engine, direct link, etc.)</li>
            <li>Your approximate geographic location</li>
            <li>Device type and browser information</li>
          </ul>
          <p className="leading-relaxed text-neutral-700">
            This data is anonymous and aggregated. Google Analytics uses cookies to track this information. You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-red)] hover:underline">Google Analytics Opt-out Browser Add-on</a>.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">How We Use Your Information</h2>
          <p className="leading-relaxed text-neutral-700">
            We use the information we collect to:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-neutral-700">
            <li>Provide and improve our auto body repair services</li>
            <li>Communicate with you about estimates, repairs, and appointments</li>
            <li>Process insurance claims on your behalf</li>
            <li>Analyze website traffic and improve user experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">Information Sharing</h2>
          <p className="leading-relaxed text-neutral-700">
            We do not sell, trade, or rent your personal information to third parties. We may share your information with:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-neutral-700">
            <li><strong>Insurance Companies:</strong> When processing claims with your authorization</li>
            <li><strong>Service Providers:</strong> Third-party vendors who assist with our business operations (e.g., payment processing, website hosting)</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">Cookies</h2>
          <p className="leading-relaxed text-neutral-700">
            Our website uses cookies to enhance your browsing experience and gather analytics data. Cookies are small text files stored on your device. You can control cookie settings through your browser preferences, but disabling cookies may limit some website functionality.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">Data Security</h2>
          <p className="leading-relaxed text-neutral-700">
            We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">Your Rights</h2>
          <p className="leading-relaxed text-neutral-700">
            You have the right to:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-neutral-700">
            <li>Access the personal information we hold about you</li>
            <li>Request corrections to inaccurate information</li>
            <li>Request deletion of your personal information (subject to legal requirements)</li>
            <li>Opt out of marketing communications</li>
          </ul>
          <p className="leading-relaxed text-neutral-700">
            To exercise these rights, please contact us at <a href="mailto:info@secondchancecollision.com" className="text-[var(--accent-red)] hover:underline">info@secondchancecollision.com</a> or call <a href="tel:0000000000" className="text-[var(--accent-red)] hover:underline">(000) 000-0000</a>.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">Children&apos;s Privacy</h2>
          <p className="leading-relaxed text-neutral-700">
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">Changes to This Policy</h2>
          <p className="leading-relaxed text-neutral-700">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Last updated&quot; date. We encourage you to review this policy periodically.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--accent-dark)]">Contact Us</h2>
          <p className="leading-relaxed text-neutral-700">
            If you have questions or concerns about this Privacy Policy, please contact us:
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
      </div>
    </div>
  );
}
