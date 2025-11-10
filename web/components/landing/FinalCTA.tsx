import { CTALink } from '@/components/CTALink';
import Link from 'next/link';

export interface FinalCTAProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaLink?: string;
  profession?: string;
}

export default function FinalCTA({
  headline,
  subheadline,
  ctaText = 'Get Your Filing Submitted in 48 Hours — Guaranteed',
  ctaLink = '/checkout',
  profession,
}: FinalCTAProps) {
  const defaultHeadline = profession
    ? `Ready to Form Your ${profession} PLLC?`
    : 'Ready to Form Your PLLC?';
  const defaultSubheadline =
    'Join hundreds of professionals who trust us with their PLLC formation. Get started today.';

  return (
    <section className="bg-[#f88b00] py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          {headline || defaultHeadline}
        </h2>
        <p className="text-xl text-orange-50 mb-10 max-w-2xl mx-auto">
          {subheadline || defaultSubheadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTALink
            href={ctaLink}
            className="bg-white text-[#f88b00] px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors inline-block"
            profession={profession}
            price={749}
            ctaText={ctaText}
            location="final-cta"
            trackAsCheckout={ctaLink.includes('/checkout')}
          >
            {ctaText}
          </CTALink>
          <Link
            href="#pricing"
            className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white/10 transition-colors inline-block"
          >
            View Pricing
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-orange-50">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
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
            <span>48-Hour Filing</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
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
            <span>Satisfaction Guaranteed</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
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
            <span>$749 All-Inclusive</span>
          </div>
        </div>
      </div>
    </section>
  );
}

