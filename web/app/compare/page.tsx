import type { Metadata } from 'next';
import { CompetitorComparison } from '@/components/landing';
import { CTALink } from '@/components/CTALink';

export const metadata: Metadata = {
  title: 'Compare Your Options | Texas PLLC Formation vs Competitors',
  description:
    'Compare Texas PLLC Formation with LegalZoom, Incfile, local attorneys, and DIY options. See transparent pricing, speed, and what\'s included.',
  keywords: [
    'PLLC formation comparison',
    'LegalZoom vs Texas PLLC',
    'Incfile vs Texas PLLC',
    'PLLC formation cost comparison',
    'best PLLC formation service',
  ],
  alternates: {
    canonical: 'https://www.texaspllc.com/compare',
  },
  openGraph: {
    title: 'Compare Your Options | Texas PLLC Formation vs Competitors',
    description:
      'Compare Texas PLLC Formation with LegalZoom, Incfile, local attorneys, and DIY options.',
    type: 'website',
    url: 'https://www.texaspllc.com/compare',
    siteName: 'Texas PLLC Formation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compare Your Options | Texas PLLC Formation vs Competitors',
    description:
      'Compare Texas PLLC Formation with LegalZoom, Incfile, local attorneys, and DIY options.',
  },
};

export default function ComparePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Compare Your Options
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            See how Texas PLLC Formation compares to LegalZoom, Incfile, local
            attorneys, and DIY options. We believe in transparent pricing and
            fast, reliable service.
          </p>
        </div>
      </section>

      {/* Comparison Component */}
      <CompetitorComparison />

      {/* Final CTA Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Get started with your Texas PLLC formation today. $749 all-inclusive with our 48-hour filing guarantee.
          </p>
          <CTALink
            href="/checkout"
            className="bg-[#f88b00] text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-[#d97706] transition-colors inline-block"
            ctaText="Get Started"
            location="compare-page-cta"
            trackAsCheckout={true}
          >
            Get Started - $749 All-Inclusive
          </CTALink>
        </div>
      </section>
    </>
  );
}

