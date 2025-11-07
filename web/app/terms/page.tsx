import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Texas PLLC Formation Service',
  description:
    'Terms of Service for Texas PLLC Formation Service. Review our SLA terms, refund policy, and service disclaimers.',
  alternates: {
    canonical: 'https://www.texaspllc.com/terms',
  },
  openGraph: {
    title: 'Terms of Service | Texas PLLC Formation',
    description:
      'Terms of Service for Texas PLLC Formation Service. Review our SLA terms, refund policy, and service disclaimers.',
    type: 'website',
    url: 'https://www.texaspllc.com/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Terms of Service
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
              1. Agreement to Terms
            </h2>
            <p className="text-gray-700 mb-4">
              By accessing or using Texas PLLC Formation&apos;s service
              (&quot;Service&quot;), you agree to be bound by these Terms of
              Service (&quot;Terms&quot;). If you disagree with any part of
              these terms, you may not access the Service.
            </p>
            <p className="text-gray-700">
              These Terms apply to all users of the Service, including without
              limitation users who are browsers, customers, merchants, and
              contributors of content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Service Description
            </h2>
            <p className="text-gray-700 mb-4">
              Texas PLLC Formation provides professional formation services for Texas
              Professional Limited Liability Companies (PLLCs). Our service
              includes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Filing Form 206 with the Texas Secretary of State</li>
              <li>Obtaining an EIN (Employer Identification Number) from the IRS</li>
              <li>Preparing Operating Agreement</li>
              <li>Providing first-year Registered Agent service (if included)</li>
              <li>Delivering banking packet and compliance checklist</li>
            </ul>
            <p className="text-gray-700">
              <strong>Important:</strong> Texas PLLC is not a law firm and does
              not provide legal advice. Our service is a document preparation
              and filing service. We recommend consulting with a qualified
              attorney for legal advice specific to your situation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Service-Level Agreement (SLA)
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              3.1 48-Hour Filing Guarantee
            </h3>
            <p className="text-gray-700 mb-4">
              We guarantee that your complete PLLC order will be filed with the
              Texas Secretary of State within <strong>48 business hours</strong>{' '}
              after the following conditions are met:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>You have completed the intake form with all required information</li>
              <li>Registered Agent consent has been obtained</li>
              <li>Name availability has been confirmed</li>
              <li>Payment has been successfully processed</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>Business hours</strong> are defined as Monday through
              Friday, excluding federal holidays, 9:00 AM to 5:00 PM Central
              Time.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              3.2 SLA Credit Policy
            </h3>
            <p className="text-gray-700 mb-4">
              If we fail to file your PLLC within 48 business hours (as defined
              above), we will automatically issue a <strong>$100 credit</strong>{' '}
              to your account. This credit can be applied to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Future services</li>
              <li>Registered Agent renewal</li>
              <li>Additional filings or amendments</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>Important Notes:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>
                Texas Secretary of State (SOS) system outages or maintenance do
                not pause the SLA clock. If filing is delayed due to SOS
                unavailability, the credit will still be issued.
              </li>
              <li>
                The SLA applies only to state filing (Form 206). Board filings
                (e.g., TSBEP, TMB) are separate and not covered by this SLA.
              </li>
              <li>
                Delays caused by incomplete information, name conflicts, or
                client-requested changes may pause the SLA clock until resolved.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Refund Policy
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              4.1 Satisfaction Guarantee
            </h3>
            <p className="text-gray-700 mb-4">
              We stand behind our work. If we make an error on our end, we will
              fix it at no cost or provide a full refund. This includes errors in
              filing, document preparation, or service delivery.
            </p>
            <p className="text-gray-700 mb-4">
              To request a refund due to our error, please contact us at{' '}
              <a
                href="mailto:support@texaspllc.com"
                className="text-[#f88b00] hover:underline"
              >
                support@texaspllc.com
              </a>
              . Refunds will be processed within 10 business days after we verify
              the error.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              4.2 Refund Limitations
            </h3>
            <p className="text-gray-700 mb-4">
              Refunds are only available if we make an error on our end. Refunds
              may be limited or denied in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>
                If your PLLC has already been filed with the Texas Secretary of
                State and the filing was completed correctly (state filing fees are non-refundable)
              </li>
              <li>
                If we have already obtained your EIN from the IRS and the EIN was issued correctly (EIN issuance
                cannot be reversed)
              </li>
              <li>
                If you have received and used your completed documents and the service was completed as promised
              </li>
              <li>
                If the issue is due to incorrect information provided by you
              </li>
              <li>
                If the issue is due to changes in your requirements after service has begun
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              4.3 Partial Refunds
            </h3>
            <p className="text-gray-700">
              In cases where we make a partial error but complete other aspects
              of the service correctly, we may offer a partial refund at
              our discretion, excluding non-refundable state fees and correctly completed
              services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Pricing and Payment
            </h2>
            <p className="text-gray-700 mb-4">
              Our base service price is <strong>$749 all-inclusive</strong>,
              which includes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Texas Secretary of State filing fee ($300)</li>
              <li>EIN issuance</li>
              <li>Operating Agreement</li>
              <li>First-year Registered Agent service</li>
              <li>Banking packet and compliance checklist</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Additional add-on services may be available at additional cost.
              All prices are in U.S. dollars and are subject to change without
              notice, though changes will not affect orders already placed.
            </p>
            <p className="text-gray-700">
              Payment is processed securely through our payment processor,
              spiffy.co. By placing an order, you authorize us to charge your
              payment method for the total amount due.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. User Responsibilities
            </h2>
            <p className="text-gray-700 mb-4">
              You are responsible for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>
                Providing accurate and complete information for your PLLC
                formation
              </li>
              <li>
                Ensuring you have the legal authority to form a PLLC and that
                all members/owners are properly licensed professionals
              </li>
              <li>
                Verifying that your proposed business name is available and
                complies with Texas requirements
              </li>
              <li>
                Reviewing all documents before signing or filing
              </li>
              <li>
                Complying with all applicable laws, regulations, and
                professional licensing requirements
              </li>
              <li>
                Maintaining your PLLC in good standing with the Texas Secretary
                of State and relevant professional boards
              </li>
              <li>
                Keeping your contact information up to date
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Service Disclaimers
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              7.1 Not a Law Firm
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>Texas PLLC Formation is not a law firm and does not provide legal
              advice.</strong> We are a document preparation and filing service.
              Our service does not create an attorney-client relationship.
            </p>
            <p className="text-gray-700 mb-4">
              We recommend consulting with a qualified attorney for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Legal advice specific to your situation</li>
              <li>Complex ownership structures or tax planning</li>
              <li>Dispute resolution or litigation matters</li>
              <li>Compliance with professional ethics rules</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              7.2 No Guarantee of Approval
            </h3>
            <p className="text-gray-700 mb-4">
              While we strive for accuracy and compliance, we cannot guarantee
              that:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Your PLLC filing will be approved by the Texas Secretary of State</li>
              <li>Your proposed business name will be available</li>
              <li>Your EIN application will be approved by the IRS</li>
              <li>Your PLLC will meet all requirements of your professional licensing board</li>
            </ul>
            <p className="text-gray-700">
              If your filing is rejected, we will work with you to resolve the
              issue and resubmit at no additional charge (excluding any
              additional state fees).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, TEXAS PLLC SHALL NOT BE
              LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER
              INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE,
              GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Your use or inability to use the Service</li>
              <li>Any errors or omissions in documents prepared</li>
              <li>Delays in filing or processing</li>
              <li>Rejection of filings by government agencies</li>
              <li>Any unauthorized access to or use of our servers</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Our total liability for any claims arising from or related to the
              Service shall not exceed the amount you paid for the Service.
            </p>
            <p className="text-gray-700">
              Some jurisdictions do not allow the exclusion or limitation of
              incidental or consequential damages, so the above limitation may
              not apply to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Indemnification
            </h2>
            <p className="text-gray-700">
              You agree to indemnify, defend, and hold harmless Incaroo, its
              officers, directors, employees, and agents from and against any
              claims, liabilities, damages, losses, and expenses, including
              reasonable attorneys&apos; fees, arising out of or in any way
              connected with your use of the Service, violation of these Terms,
              or violation of any law or regulation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Intellectual Property
            </h2>
            <p className="text-gray-700 mb-4">
              All content, features, and functionality of the Service, including
              but not limited to text, graphics, logos, and software, are the
              exclusive property of Incaroo and are protected by copyright,
              trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-700">
              Documents prepared for you (Operating Agreement, etc.) become your
              property upon delivery. However, templates and forms remain our
              intellectual property.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. Modifications to Service
            </h2>
            <p className="text-gray-700">
              We reserve the right to modify, suspend, or discontinue the
              Service, or any part thereof, at any time with or without notice.
              We shall not be liable to you or any third party for any
              modification, suspension, or discontinuance of the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              12. Changes to Terms
            </h2>
            <p className="text-gray-700">
              We reserve the right to modify these Terms at any time. We will
              notify you of any material changes by posting the new Terms on
              this page and updating the &quot;Last updated&quot; date. Your
              continued use of the Service after any changes constitutes
              acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              13. Governing Law
            </h2>
            <p className="text-gray-700">
              These Terms shall be governed by and construed in accordance with
              the laws of the State of Texas, without regard to its conflict of
              law provisions. Any disputes arising from these Terms or the
              Service shall be resolved in the state and federal courts located
              in Texas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              14. Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please
              contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:support@texaspllc.com"
                  className="text-[#f88b00] hover:underline"
                >
                  support@texaspllc.com
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Mailing Address:</strong>
                <br />
                Incaroo
                <br />
                [Address to be provided]
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

