import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/landing/Hero';
import { CTALink } from '@/components/CTALink';

export const metadata: Metadata = {
  title: 'Texas PLLC Formation | $749 All-Inclusive | 48-Hour Filing Guarantee',
  description:
    'Form your Texas Professional Limited Liability Company in 48 hours. $749 all-inclusive pricing. Transparent, profession-specific expertise for Therapists, Physicians, Engineers, and Attorneys.',
  keywords: [
    'Texas PLLC formation',
    'PLLC formation service',
    'Texas professional LLC',
    'therapist PLLC',
    'physician PLLC',
    'engineer PLLC',
    'attorney PLLC',
  ],
  alternates: {
    canonical: 'https://www.texaspllc.com',
  },
  openGraph: {
    title: 'Texas PLLC Formation | $749 All-Inclusive | 48-Hour Filing',
    description:
      'Form your Texas PLLC in 48 hours. $749 all-inclusive. Transparent pricing. Profession-specific expertise.',
    type: 'website',
    url: 'https://www.texaspllc.com',
    siteName: 'Texas PLLC Formation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Texas PLLC Formation | $749 All-Inclusive | 48-Hour Filing',
    description:
      'Form your Texas PLLC in 48 hours. $749 all-inclusive. Transparent pricing. Profession-specific expertise.',
  },
};

const professions = [
  {
    name: 'Therapists',
    slug: 'therapist',
    description: 'Licensed Professional Counselors, LMFTs, LCSWs, and other mental health professionals',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    name: 'Physicians',
    slug: 'physician',
    description: 'Doctors, Physician Assistants, and medical practice groups',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    name: 'Engineers',
    slug: 'engineer',
    description: 'Professional Engineers (PE) and engineering firms',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    name: 'Attorneys',
    slug: 'attorney',
    description: 'Lawyers and law firms forming Texas PLLCs',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
];

export default function HomePage() {
  // Schema markup for SEO
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Incaroo',
    url: 'https://www.texaspllc.com',
    logo: 'https://www.texaspllc.com/logo.png',
    description: 'Professional Texas PLLC formation service. $749 all-inclusive. 48-hour filing guarantee.',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    sameAs: [
      // Add social media links when available
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Texas PLLC Formation Service',
    description:
      'Professional Texas PLLC formation service. $749 all-inclusive. 48-hour filing guarantee.',
    provider: {
      '@type': 'Organization',
      name: 'Incaroo',
    },
    areaServed: {
      '@type': 'State',
      name: 'Texas',
    },
    offers: {
      '@type': 'Offer',
      price: '749',
      priceCurrency: 'USD',
      description: 'Complete PLLC formation service',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section */}
      <Hero
        profession="Professional"
        headline="Form Your Texas PLLC in 48 Hours — $749 All-Inclusive"
        subheadline="Transparent pricing. Profession-specific expertise. No hidden fees. We handle everything so you can focus on your practice."
        ctaText="Get Started"
        ctaLink="/therapist"
      />

      {/* Service Overview */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need, All-Inclusive
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              One price covers everything. No surprises. No upsells.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'State Filing',
                description: 'Form 206 filed with Texas Secretary of State ($300 fee included)',
              },
              {
                title: 'EIN Issuance',
                description: 'Employer Identification Number obtained from the IRS',
              },
              {
                title: 'Operating Agreement',
                description: 'Profession-specific Operating Agreement tailored to your needs',
              },
              {
                title: 'Registered Agent',
                description: 'First-year Registered Agent service included',
              },
              {
                title: 'Banking Packet',
                description: 'All documents needed to open your business bank account',
              },
              {
                title: 'Compliance Checklist',
                description: 'Step-by-step guide to stay compliant with Texas requirements',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profession Cards */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Profession
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We specialize in PLLC formation for licensed professionals. Select your profession to get started.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {professions.map((profession) => (
              <Link
                key={profession.slug}
                href={`/${profession.slug}`}
                className="group bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <div className="text-blue-600 group-hover:text-white transition-colors">
                      {profession.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {profession.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {profession.description}
                  </p>
                  <span className="text-blue-600 font-medium group-hover:text-blue-700">
                    Get Started →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-blue-600 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '48-Hour Filing Guarantee',
                description:
                  'We file your PLLC within 48 business hours, or you get a $100 credit automatically.',
                icon: (
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: 'Satisfaction Guarantee',
                description:
                  'If we make an error on our end, we\'ll fix it at no cost or provide a full refund. We stand behind our work.',
                icon: (
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
              },
              {
                title: 'Transparent Pricing',
                description:
                  '$749 all-inclusive. No hidden fees. No upsells. You know exactly what you\'re paying.',
                icon: (
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Form Your PLLC?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join hundreds of professionals who trust us with their PLLC formation. Get started today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTALink
              href="/therapist"
              className="bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors inline-block"
              ctaText="Get Started"
              location="homepage-final-cta"
            >
              Get Started
            </CTALink>
            <Link
              href="#pricing"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-md text-lg font-medium hover:bg-blue-50 transition-colors inline-block"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
