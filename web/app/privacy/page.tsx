import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Texas PLLC Formation Service',
  description:
    'Privacy Policy for Texas PLLC Formation Service. Learn how we handle your personal information, EIN data, and protect your privacy.',
  alternates: {
    canonical: 'https://www.texaspllc.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Texas PLLC Formation',
    description:
      'Privacy Policy for Texas PLLC Formation Service. Learn how we handle your personal information, EIN data, and protect your privacy.',
    type: 'website',
    url: 'https://www.texaspllc.com/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 mb-4">
              Incaroo (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
              committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information
              when you use our Texas PLLC Formation service.
            </p>
            <p className="text-gray-700">
              By using our service, you agree to the collection and use of
              information in accordance with this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Information We Collect
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2.1 Personal Identifiable Information (PII)
            </h3>
            <p className="text-gray-700 mb-4">
              We collect the following personal information necessary to provide
              our PLLC formation service:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>
                <strong>Contact Information:</strong> Name, email address,
                phone number, mailing address
              </li>
              <li>
                <strong>Professional Information:</strong> Professional license
                numbers, license types, license expiration dates
              </li>
              <li>
                <strong>Business Information:</strong> Proposed business name,
                business purpose, ownership structure, member/owner names
              </li>
              <li>
                <strong>Payment Information:</strong> Payment method details
                (processed securely through our payment processor, spiffy.co)
              </li>
              <li>
                <strong>Registered Agent Information:</strong> Registered agent
                name and address (if using our service)
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2.2 EIN (Employer Identification Number) Data
            </h3>
            <p className="text-gray-700 mb-4">
              As part of our service, we obtain an EIN from the IRS on your
              behalf. We collect and store:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>EIN application information</li>
              <li>EIN confirmation number</li>
              <li>EIN issuance date</li>
            </ul>
            <p className="text-gray-700">
              EIN data is highly sensitive and is encrypted both in transit and
              at rest. We only use this information to complete your PLLC
              formation and deliver your documents.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>
                To process and file your Texas PLLC formation documents
              </li>
              <li>To obtain your EIN from the IRS</li>
              <li>To prepare your Operating Agreement and other documents</li>
              <li>To provide Registered Agent services (if purchased)</li>
              <li>To communicate with you about your order status</li>
              <li>To send you important updates and compliance reminders</li>
              <li>To process payments and prevent fraud</li>
              <li>To comply with legal obligations</li>
              <li>To improve our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Data Protection and Security
            </h2>
            <p className="text-gray-700 mb-4">
              We implement industry-standard security measures to protect your
              personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>
                <strong>Encryption:</strong> All data is encrypted in transit
                (SSL/TLS) and at rest
              </li>
              <li>
                <strong>Access Controls:</strong> Only authorized personnel have
                access to your information
              </li>
              <li>
                <strong>Secure Storage:</strong> Data is stored on secure
                servers with regular backups
              </li>
              <li>
                <strong>EIN Protection:</strong> EIN data receives additional
                security measures and is only accessed when necessary to
                complete your order
              </li>
            </ul>
            <p className="text-gray-700">
              However, no method of transmission over the Internet or electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your information, we cannot guarantee
              absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Information Sharing and Disclosure
            </h2>
            <p className="text-gray-700 mb-4">
              We do not sell your personal information. We may share your
              information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>
                <strong>Service Providers:</strong> With third-party service
                providers who assist us in operating our service (e.g., payment
                processors, hosting providers). These providers are contractually
                obligated to protect your information.
              </li>
              <li>
                <strong>Government Agencies:</strong> With Texas Secretary of
                State and IRS as required to submit your filing and obtain your EIN
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law,
                court order, or government regulation
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a
                merger, acquisition, or sale of assets (with notice to users)
              </li>
              <li>
                <strong>With Your Consent:</strong> When you explicitly consent
                to sharing
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Improve our website functionality</li>
              <li>Provide personalized content</li>
            </ul>
            <p className="text-gray-700 mb-4">
              You can control cookies through your browser settings. However,
              disabling cookies may limit your ability to use certain features
              of our website.
            </p>
            <p className="text-gray-700">
              We use Google Analytics to analyze website usage. Google Analytics
              uses cookies to collect information about how visitors use our
              site. You can opt out of Google Analytics by installing the Google
              Analytics Opt-out Browser Add-on.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Your Rights and Choices
            </h2>
            <p className="text-gray-700 mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>
                <strong>Access:</strong> Request access to your personal
                information we hold
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate
                or incomplete information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                information (subject to legal retention requirements)
              </li>
              <li>
                <strong>Opt-Out:</strong> Opt out of marketing communications
                (you can still receive transactional emails)
              </li>
              <li>
                <strong>Data Portability:</strong> Request a copy of your data
                in a portable format
              </li>
            </ul>
            <p className="text-gray-700">
              To exercise these rights, please contact us at{' '}
              <a
                href="mailto:privacy@texaspllc.com"
                className="text-[#f88b00] hover:underline"
              >
                privacy@texaspllc.com
              </a>
              . We will respond to your request within 30 days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Data Retention
            </h2>
            <p className="text-gray-700 mb-4">
              We retain your personal information for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Complete your PLLC formation service</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Provide ongoing Registered Agent services (if applicable)</li>
            </ul>
            <p className="text-gray-700">
              EIN and filing documents are retained in accordance with legal
              requirements. We may retain certain information for up to 7 years
              for tax and legal compliance purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Children&apos;s Privacy
            </h2>
            <p className="text-gray-700">
              Our service is not intended for individuals under the age of 18.
              We do not knowingly collect personal information from children. If
              you believe we have collected information from a child, please
              contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will
              notify you of any material changes by posting the new Privacy
              Policy on this page and updating the &quot;Last updated&quot; date.
              You are advised to review this Privacy Policy periodically for
              any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:privacy@texaspllc.com"
                  className="text-[#f88b00] hover:underline"
                >
                  privacy@texaspllc.com
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Mailing Address:</strong>
                <br />
                Incaroo
                <br />
                8911 N Capital of Texas Hwy, Suite 4200
                <br />
                Austin, TX 78759
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

