import type { Metadata } from 'next';
import Link from 'next/link';
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
      streetAddress: '8911 N Capital of Texas Hwy, Suite 4200',
      addressLocality: 'Austin',
      addressRegion: 'TX',
      postalCode: '78759',
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
      <section className="relative py-8 lg:py-24" aria-labelledby="hero-heading">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#f88b00]/5 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-6 lg:grid-cols-3">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              <div className="flex max-w-2xl flex-col gap-3 sm:gap-4 lg:gap-5">
                <p className="text-sm font-medium uppercase tracking-wide text-[#f88b00]/90">
                  Texas PLLC Formation
                </p>
                <h1 id="hero-heading" className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  <span className="rounded-lg bg-[#f88b00]/10 px-2 py-1 text-[#f88b00]">Texas PLLC</span> formation with profession-specific expertise.
                </h1>
                <p className="text-xl leading-8 text-gray-700">
                  We navigate the Texas PLLC formation process for licensed professionals. Flat{' '}
                  <strong className="text-gray-900">$749</strong> all-inclusive. No surprise fees.
                </p>
                <div className="mt-0">
                  <div className="mb-0 flex items-center gap-2">
                    <span className="text-sm font-medium">Includes:</span>
                  </div>
                  <ul className="grid grid-cols-1 gap-0.5 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 h-3 w-3 text-[#f88b00] flex-shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span>Texas Secretary of State filing (Form 206, $300 fee included)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 h-3 w-3 text-[#f88b00] flex-shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span>Guidance for Texas&apos;s naming requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 h-3 w-3 text-[#f88b00] flex-shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span>Accurate and efficient filing to minimize processing time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 h-3 w-3 text-[#f88b00] flex-shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span>
                        Everything you need to open your practice (EIN, Operating Agreement, Registered Agent end-to-end)
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mt-0 flex flex-wrap items-center gap-1">
                  <CTALink
                    href="/checkout"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all bg-[#f88b00] text-white hover:bg-[#d97706] h-10 rounded-md px-6"
                    profession="Professional"
                    price={749}
                    ctaText="Start your PLLC"
                    location="hero"
                    trackAsCheckout={true}
                  >
                    Start your PLLC — $749
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </CTALink>
                  <Link
                    aria-label="See how it works step by step"
                    href="#how-it-works"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all border border-gray-300 bg-white shadow-sm hover:bg-gray-50 hover:text-gray-900 h-10 rounded-md px-6"
                  >
                    How it works
                  </Link>
                </div>
                <p className="text-sm text-gray-600">
                  ~5–7 minutes to complete • Licensed professionals only (PLLC) • No hidden fees
                </p>
              </div>
            </div>

            {/* Right Column - Sidebar Card */}
            <aside className="lg:col-span-1 lg:sticky lg:top-24" id="how-it-works">
              <div className="bg-white flex flex-col gap-6 rounded-xl border py-6 border-[#f88b00]/10 shadow-sm">
                <div className="p-6 sm:p-7">
                  <span className="text-xl font-medium mb-3 block">
                    We&apos;ve helped form many Texas PLLCs
                  </span>
                  <div className="mt-3 mb-3 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 h-8 w-7 text-[#f88b00] flex-shrink-0"
                      aria-hidden="true"
                    >
                      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                      <path d="M12 11h4"></path>
                      <path d="M12 16h4"></path>
                      <path d="M8 11h.01"></path>
                      <path d="M8 16h.01"></path>
                    </svg>
                    <span className="text-lg font-medium">Here&apos;s what you get with our expertise:</span>
                  </div>
                  <div className="my-6 h-px w-full bg-gray-200/70"></div>
                  <div>
                    <ul className="grid grid-cols-1 gap-2 text-lg text-gray-700">
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mt-0.5 h-3 w-3 text-[#f88b00] flex-shrink-0"
                          aria-hidden="true"
                        >
                          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span>Pre-approval of filing package</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mt-0.5 h-3 w-3 text-[#f88b00] flex-shrink-0"
                          aria-hidden="true"
                        >
                          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span>PLLC Articles of Organization prepared & filed</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mt-0.5 h-3 w-3 text-[#f88b00] flex-shrink-0"
                          aria-hidden="true"
                        >
                          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span>Federal Tax ID Number</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mt-0.5 h-3 w-3 text-[#f88b00] flex-shrink-0"
                          aria-hidden="true"
                        >
                          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span>Free first year registered agent service</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mt-0.5 h-3 w-3 text-[#f88b00] flex-shrink-0"
                          aria-hidden="true"
                        >
                          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span>Signature-ready Operating Agreement</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mt-0.5 h-3 w-3 text-[#f88b00] flex-shrink-0"
                          aria-hidden="true"
                        >
                          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span>Email updates at each milestone</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mt-0.5 h-3 w-3 text-[#f88b00] flex-shrink-0"
                          aria-hidden="true"
                        >
                          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span>Delivery of all documents required to open a bank account and start doing business</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <CTALink
                      href="/checkout"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-[#f88b00] text-white hover:bg-[#d97706] h-9 px-4 py-2 w-full"
                      profession="Professional"
                      price={749}
                      ctaText="Begin your order"
                      location="hero-sidebar"
                      trackAsCheckout={true}
                    >
                      Begin your order
                    </CTALink>
                  </div>
                  <p className="mt-3 text-center text-xs leading-6 text-gray-600">
                    We are not a law firm and do not provide legal advice.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need, All-Inclusive
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
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
                description: 'Operating Agreement tailored to your needs',
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
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Process Section */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Get your PLLC formed in three simple steps. We handle all the details so you can focus on your practice.
            </p>
          </div>

          {/* Vertical Process Flow */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200">
              <div className="absolute top-0 left-0 w-full h-1/3 bg-[#f88b00]"></div>
            </div>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#f88b00] rounded-full flex items-center justify-center relative z-10 shadow-lg">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Complete Your Order
                  </h3>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    Tell us about your practice and provide your license information. The whole process takes about 6 minutes.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-sm font-semibold text-gray-900 mb-2">What you'll provide:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#f88b00] mt-1">•</span>
                        <span>Your professional license number</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#f88b00] mt-1">•</span>
                        <span>Preferred business name (we'll check availability)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#f88b00] mt-1">•</span>
                        <span>Business address and contact information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#f88b00] mt-1">•</span>
                        <span>Ownership structure (single member or multi-member)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#f88b00] rounded-full flex items-center justify-center relative z-10 shadow-lg">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    We Handle Everything
                  </h3>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    Once your order is complete, we immediately begin processing your PLLC formation. Our team handles all the paperwork, filings, and compliance details.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-sm font-semibold text-gray-900 mb-2">What we do:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#f88b00] mt-1">•</span>
                        <span>File Form 206 with Texas Secretary of State ($300 fee included)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#f88b00] mt-1">•</span>
                        <span>Obtain your EIN (Employer Identification Number) from the IRS</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#f88b00] mt-1">•</span>
                        <span>Create your Operating Agreement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#f88b00] mt-1">•</span>
                        <span>Set up your first-year Registered Agent service</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#f88b00] mt-1">•</span>
                        <span>Prepare your complete banking packet</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#f88b00] mt-1">•</span>
                        <span>Create your compliance checklist</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4 bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <p className="text-sm text-gray-900">
                      <span className="font-semibold">48-Hour Filing Guarantee:</span> We submit your filing within 48 business hours, or you get a $100 credit automatically.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#f88b00] rounded-full flex items-center justify-center relative z-10 shadow-lg">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Receive Your Complete Packet
                  </h3>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    Within 48 hours, you'll receive your complete PLLC formation packet with everything you need to start your practice.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Your packet includes:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#f88b00] mt-1">•</span>
                        <span>Texas Secretary of State filing confirmation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#f88b00] mt-1">•</span>
                        <span>EIN letter from the IRS</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#f88b00] mt-1">•</span>
                        <span>Operating Agreement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#f88b00] mt-1">•</span>
                        <span>Registered Agent information and confirmation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#f88b00] mt-1">•</span>
                        <span>Banking resolution and all documents needed to open your business bank account</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#f88b00] mt-1">•</span>
                        <span>Compliance checklist with step-by-step guide</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-gray-900">
                      <span className="font-semibold">Next Steps:</span> Open your business bank account, complete any board filings if required, and start seeing clients!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profession Cards */}
      <section className="bg-white py-20 sm:py-24">
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
                className="group bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#f88b00] hover:shadow-lg transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#f88b00] transition-colors">
                    <div className="text-[#f88b00] group-hover:text-white transition-colors">
                      {profession.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {profession.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {profession.description}
                  </p>
                  <span className="text-[#f88b00] font-medium group-hover:text-[#d97706]">
                    Get Started →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-[#f88b00] py-16 sm:py-24">
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
                  'We submit your filing within 48 business hours, or you get a $100 credit automatically.',
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
                <p className="text-orange-50">{item.description}</p>
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
              className="bg-[#f88b00] text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-[#d97706] transition-colors inline-block"
              ctaText="Get Started"
              location="homepage-final-cta"
            >
              Get Started
            </CTALink>
            <Link
              href="#pricing"
              className="bg-white text-[#f88b00] border-2 border-[#f88b00] px-8 py-4 rounded-md text-lg font-medium hover:bg-orange-50 transition-colors inline-block"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
