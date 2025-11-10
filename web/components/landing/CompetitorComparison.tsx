'use client';

import { useEffect, useRef } from 'react';
import { CTALink } from '@/components/CTALink';
import { event } from '@/lib/analytics';

export interface CompetitorRow {
  feature: string;
  us: string | boolean;
  legalzoom: string | boolean;
  localAttorney: string | boolean;
  diy: string | boolean;
}

export interface ComparisonTestimonial {
  name: string;
  profession: string;
  text: string;
  previousService?: string;
}

export interface CompetitorComparisonProps {
  profession?: string;
  competitors?: CompetitorRow[];
  testimonials?: ComparisonTestimonial[];
  whyChooseUs?: {
    title: string;
    outcomes: Array<{
      metric: string;
      value: string;
      description: string;
    }>;
  };
}

const defaultCompetitors: CompetitorRow[] = [
  {
    feature: 'Base Price',
    us: '$749',
    legalzoom: '$329',
    localAttorney: '$1,500-$3,000',
    diy: '$300',
  },
  {
    feature: 'State Filing Fee ($300)',
    us: 'Included',
    legalzoom: '+$300',
    localAttorney: '+$300',
    diy: '+$300',
  },
  {
    feature: 'EIN Service',
    us: 'Included',
    legalzoom: '+$79',
    localAttorney: '+$0-$100',
    diy: 'Free (DIY)',
  },
  {
    feature: 'Operating Agreement',
    us: 'Included',
    legalzoom: '+$99',
    localAttorney: 'Included',
    diy: 'Free (DIY)',
  },
  {
    feature: 'Registered Agent (1st Year)',
    us: 'Included',
    legalzoom: '+$299',
    localAttorney: '+$150-$300',
    diy: '+$0-$150',
  },
  {
    feature: 'True Total Cost (Everything Included)',
    us: '$749',
    legalzoom: '$1,006-$1,306',
    localAttorney: '$1,950-$3,400',
    diy: '$300-$750 + 10+ hours',
  },
  {
    feature: 'Filing Speed',
    us: '48 hours',
    legalzoom: '7-10 business days',
    localAttorney: '2-4 weeks',
    diy: '1-2 weeks',
  },
  {
    feature: '48-Hour Filing Guarantee',
    us: true,
    legalzoom: false,
    localAttorney: false,
    diy: false,
  },
  {
    feature: 'Profession-Specific Expertise',
    us: true,
    legalzoom: false,
    localAttorney: 'Varies',
    diy: false,
  },
  {
    feature: 'Board Filing Guidance',
    us: true,
    legalzoom: false,
    localAttorney: 'Varies',
    diy: false,
  },
  {
    feature: 'Transparent Pricing (No Upsells)',
    us: true,
    legalzoom: false,
    localAttorney: true,
    diy: true,
  },
  {
    feature: 'Satisfaction Guarantee',
    us: true,
    legalzoom: false,
    localAttorney: 'Varies',
    diy: false,
  },
];

const defaultWhyChooseUs = {
  title: 'Why Professionals Choose Us',
  outcomes: [
    {
      metric: 'Average Days Saved',
      value: '10-12 days',
      description: 'Faster than competitors who take 7-14 business days',
    },
    {
      metric: 'Revision Rate',
      value: '< 2%',
      description: 'First-time filing success rate of 98%+',
    },
    {
      metric: 'Compliance Success',
      value: '100%',
      description: 'All formations meet Texas SOS and board requirements',
    },
    {
      metric: 'Customer Satisfaction',
      value: '4.9/5',
      description: 'Based on verified customer reviews',
    },
  ],
};

const defaultTestimonials: ComparisonTestimonial[] = [
  {
    name: 'Dr. Sarah M.',
    profession: 'Licensed Professional Counselor',
    text: 'I tried LegalZoom first, but they kept adding fees. Switched to Texas PLLC Formation and got everything for one price. Filing submitted in 48 hours exactly as promised.',
    previousService: 'LegalZoom',
  },
  {
    name: 'Michael R.',
    profession: 'Marriage and Family Therapist',
    text: 'My local attorney quoted $2,500 and said it would take 3 weeks. Found this service and had my PLLC filed in 2 days for $749. No regrets.',
    previousService: 'Local Attorney',
  },
  {
    name: 'Jennifer L.',
    profession: 'Clinical Social Worker',
    text: 'I was going to do it myself to save money, but after researching all the requirements, I realized I\'d spend 15+ hours. Worth every penny to have experts handle it.',
    previousService: 'DIY',
  },
];

export default function CompetitorComparison({
  profession,
  competitors = defaultCompetitors,
  testimonials = defaultTestimonials,
  whyChooseUs = defaultWhyChooseUs,
}: CompetitorComparisonProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const hasTrackedView = useRef(false);

  useEffect(() => {
    // Track when comparison section is viewed
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTrackedView.current) {
            event({
              action: 'comparison_viewed',
              category: 'engagement',
              label: profession || 'general',
            });
            hasTrackedView.current = true;
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [profession]);

  const handleDownloadPDF = () => {
    event({
      action: 'comparison_downloaded',
      category: 'engagement',
      label: profession || 'general',
    });
    window.print();
  };

  const handleExpandRow = (feature: string) => {
    event({
      action: 'comparison_expanded',
      category: 'engagement',
      label: feature,
      profession: profession,
    });
  };

  const renderCell = (value: string | boolean, isOurColumn = false) => {
    if (typeof value === 'boolean') {
      return value ? (
        <span className="text-green-600 font-semibold">✓ Included</span>
      ) : (
        isOurColumn ? (
          <span className="text-gray-400">—</span>
        ) : (
          <span className="text-red-600 font-semibold text-xl">✗</span>
        )
      );
    }
    return <span className="text-gray-700">{value}</span>;
  };

  return (
    <section
      ref={sectionRef}
      id="comparison"
      className="bg-gray-50 py-20 sm:py-24 print:bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cost Savings Highlight */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 border-2 border-[#f88b00]">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The Hidden Cost of "Cheap" Base Prices
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              Competitors advertise low base prices, but you'll pay hundreds more for add-ons that we include for free. Here's what you actually pay when you need everything:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-orange-50 rounded-lg border-2 border-[#f88b00]">
              <div className="text-3xl font-bold text-green-600 mb-2">$749</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Texas PLLC Formation</div>
              <div className="text-xs text-gray-600">Everything included</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-3xl font-bold text-red-600 mb-2">Up to $1,306</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">LegalZoom</div>
              <div className="text-xs text-gray-600">+$557 more</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-3xl font-bold text-red-600 mb-2">Up to $3,400</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Local Attorney</div>
              <div className="text-xs text-gray-600">+$2,651 more</div>
            </div>
          </div>
        </div>

        {/* Comparison Table - Desktop */}
        <div className="hidden lg:block overflow-x-auto mb-12">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg shadow-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 bg-orange-50 border-2 border-[#f88b00]">
                    Texas PLLC Formation
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    LegalZoom
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Local Attorney
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    DIY
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {competitors.map((row, index) => {
                  const isTotalCostRow = row.feature.includes('True Total Cost');
                  return (
                    <tr
                      key={index}
                      className={`hover:bg-gray-50 transition-colors ${
                        isTotalCostRow ? 'bg-orange-50 font-semibold' : ''
                      }`}
                      onClick={() => handleExpandRow(row.feature)}
                    >
                      <td className={`px-6 py-4 text-sm font-medium ${
                        isTotalCostRow ? 'text-gray-900 text-base' : 'text-gray-900'
                      }`}>
                        {row.feature}
                      </td>
                      <td className={`px-6 py-4 text-sm text-center border-2 border-[#f88b00] ${
                        isTotalCostRow ? 'bg-orange-100 font-bold text-base' : 'bg-orange-50'
                      }`}>
                        {renderCell(row.us, true)}
                      </td>
                      <td className={`px-6 py-4 text-sm text-center ${
                        isTotalCostRow ? 'bg-red-50 font-bold text-base text-red-600' : ''
                      }`}>
                        {renderCell(row.legalzoom, false)}
                      </td>
                      <td className={`px-6 py-4 text-sm text-center ${
                        isTotalCostRow ? 'bg-red-50 font-bold text-base text-red-600' : ''
                      }`}>
                        {renderCell(row.localAttorney, false)}
                      </td>
                      <td className={`px-6 py-4 text-sm text-center ${
                        isTotalCostRow ? 'bg-red-50 font-bold text-base text-red-600' : ''
                      }`}>
                        {renderCell(row.diy, false)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Comparison Cards - Mobile */}
        <div className="lg:hidden space-y-6 mb-12">
          {competitors.map((row, index) => {
            const isTotalCostRow = row.feature.includes('True Total Cost');
            return (
              <div
                key={index}
                className={`rounded-lg shadow-sm p-6 border ${
                  isTotalCostRow
                    ? 'bg-orange-50 border-2 border-[#f88b00]'
                    : 'bg-white border-gray-200'
                }`}
                onClick={() => handleExpandRow(row.feature)}
              >
                <h3 className={`mb-4 ${
                  isTotalCostRow
                    ? 'text-xl font-bold text-gray-900'
                    : 'text-lg font-semibold text-gray-900'
                }`}>
                  {row.feature}
                </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded border-2 border-[#f88b00]">
                  <span className="text-sm font-medium text-gray-700">
                    Texas PLLC Formation
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {typeof row.us === 'boolean'
                      ? row.us
                        ? '✓ Included'
                        : '—'
                      : row.us}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="text-sm text-gray-700">LegalZoom</span>
                  <span className="text-sm text-red-600 font-semibold text-xl">
                    {typeof row.legalzoom === 'boolean'
                      ? row.legalzoom
                        ? '✓ Included'
                        : '✗'
                      : row.legalzoom}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="text-sm text-gray-700">Local Attorney</span>
                  <span className="text-sm text-red-600 font-semibold text-xl">
                    {typeof row.localAttorney === 'boolean'
                      ? row.localAttorney
                        ? '✓ Included'
                        : '✗'
                      : row.localAttorney}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="text-sm text-gray-700">DIY</span>
                  <span className="text-sm text-red-600 font-semibold text-xl">
                    {typeof row.diy === 'boolean'
                      ? row.diy
                        ? '✓ Included'
                        : '✗'
                      : row.diy}
                  </span>
                </div>
              </div>
            </div>
          );
          })}
        </div>

        {/* Why Professionals Choose Us */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {whyChooseUs.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.outcomes.map((outcome, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[#f88b00] mb-2">
                  {outcome.value}
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  {outcome.metric}
                </div>
                <div className="text-sm text-gray-600">{outcome.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof - Switching from Competitors */}
        {testimonials.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Professionals Who Switched to Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-gray-600">
                        {testimonial.profession}
                      </div>
                    </div>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    "{testimonial.text}"
                  </p>
                  {testimonial.previousService && (
                    <div className="text-xs text-gray-500">
                      Previously used: {testimonial.previousService}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Guarantee & SLA Microcopy */}
        <div className="bg-white rounded-lg shadow-sm p-8 border-2 border-[#f88b00]">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              48-Hour Filing Guarantee
            </h3>
            <p className="text-gray-700 mb-4">
              We submit your filing within 48 business hours, or you get a $100 credit
              automatically. No excuses. No delays.
            </p>
            <p className="text-sm text-gray-600 mb-6">
              <a
                href="/terms#sla"
                className="text-[#f88b00] hover:text-[#d97706] underline"
                onClick={() =>
                  event({
                    action: 'sla_link_clicked',
                    category: 'engagement',
                    label: 'comparison_section',
                  })
                }
              >
                View detailed SLA terms
              </a>
              {' • '}
              <a
                href="/terms#guarantee"
                className="text-[#f88b00] hover:text-[#d97706] underline"
                onClick={() =>
                  event({
                    action: 'guarantee_link_clicked',
                    category: 'engagement',
                    label: 'comparison_section',
                  })
                }
              >
                Satisfaction guarantee details
              </a>
            </p>
            <CTALink
              href={`/checkout?profession=${profession || 'therapist'}`}
              className="inline-block bg-[#f88b00] text-white px-8 py-3 rounded-md font-medium hover:bg-[#d97706] transition-colors"
              profession={profession}
              price={749}
              location="comparison-cta"
              trackAsCheckout={true}
            >
              Get Started - $749 All-Inclusive
            </CTALink>
          </div>
        </div>

        {/* Footnote */}
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>
            * Competitor pricing based on publicly available information as of{' '}
            {new Date().toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric',
            })}
            . Actual pricing may vary. True total cost includes base price plus
            common upsells (EIN, Operating Agreement, Registered Agent, etc.).
          </p>
        </div>
      </div>
    </section>
  );
}

