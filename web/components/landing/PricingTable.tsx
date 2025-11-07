import { CTALink } from '@/components/CTALink';

export interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

export interface PricingTableProps {
  tiers: PricingTier[];
  headline?: string;
  profession?: string;
}

export default function PricingTable({
  tiers,
  headline = 'Simple, Transparent Pricing',
  profession,
}: PricingTableProps) {
  return (
    <section id="pricing" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {headline}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {profession
              ? `Everything you need to form your ${profession} PLLC. No hidden fees.`
              : 'Everything you need to form your PLLC. No hidden fees.'}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-lg border-2 p-8 w-full md:w-[calc(50%-1rem)] lg:w-[calc(50%-3rem)] max-w-md ${
                tier.highlighted
                  ? 'border-blue-600 bg-blue-50 shadow-lg scale-105'
                  : 'border-gray-200 bg-white'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ${tier.price}
                  </span>
                  <span className="text-gray-600 ml-2">all-inclusive</span>
                </div>
                <p className="text-gray-600 text-sm">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <CTALink
                href={tier.ctaLink || '/checkout'}
                className={`block w-full text-center py-3 px-6 rounded-md font-medium transition-colors ${
                  tier.highlighted
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
                profession={profession}
                price={tier.price}
                ctaText={tier.ctaText || 'Get Started'}
                location={`pricing-${tier.name.toLowerCase()}`}
                trackAsCheckout={true}
              >
                {tier.ctaText || 'Get Started'}
              </CTALink>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            All packages include our 48-hour filing guarantee and satisfaction guarantee.
          </p>
        </div>
      </div>
    </section>
  );
}

