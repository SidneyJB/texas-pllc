'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { trackCheckoutStart } from '@/lib/analytics';

interface CheckoutContentProps {
  profession?: string;
}

const PROFESSIONS: Record<string, string> = {
  therapist: 'Therapist',
  physician: 'Physician',
  engineer: 'Engineer',
  attorney: 'Attorney',
};

const BASE_PRICE = 749;

export default function CheckoutContent({ profession }: CheckoutContentProps) {
  const professionName = profession
    ? PROFESSIONS[profession.toLowerCase()] || 'Professional'
    : 'Professional';

  useEffect(() => {
    // Track checkout page view
    trackCheckoutStart(profession || undefined, BASE_PRICE);
  }, [profession]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-[#f88b00] hover:text-[#d97706] text-sm font-medium mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Complete Your Order
          </h1>
          <p className="text-lg text-gray-600">
            {professionName} PLLC Formation — $749 All-Inclusive
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Order Details
              </h2>

              {/* Spiffy.co Embed Placeholder */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-6">
                <div className="text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400 mb-4"
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
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Spiffy.co Checkout Form
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    The spiffy.co embedded checkout form will be placed here.
                  </p>
                  <div className="bg-gray-50 rounded-md p-4 text-left">
                    <p className="text-xs font-mono text-gray-500 mb-2">
                      Placeholder for spiffy.co embed code:
                    </p>
                    <pre className="text-xs text-gray-700 overflow-x-auto">
                      {`<!-- Spiffy.co embed code goes here -->
<script src="https://spiffy.co/embed.js"></script>
<div id="spiffy-checkout"></div>
<script>
  // Initialize spiffy checkout with profession context
  // Profession: ${profession || 'none'}
  // Price: $${BASE_PRICE}
</script>`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="border-t border-gray-200 pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <svg
                      className="w-8 h-8 text-green-600 mb-2"
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
                    <p className="text-sm font-medium text-gray-900">
                      Secure Checkout
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      SSL Encrypted
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg
                      className="w-8 h-8 text-[#f88b00] mb-2"
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
                    <p className="text-sm font-medium text-gray-900">
                      48-Hour Filing
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      Guaranteed
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg
                      className="w-8 h-8 text-green-600 mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-sm font-medium text-gray-900">
                      Satisfaction Guarantee
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      We stand behind our work
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">
                      {professionName} PLLC Formation
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Complete formation service
                    </p>
                  </div>
                  <p className="font-semibold text-gray-900">$749</p>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-600">
                      <span>State filing fee</span>
                      <span>Included</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>EIN application</span>
                      <span>Included</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Operating Agreement</span>
                      <span>Included</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Registered Agent (1st year)</span>
                      <span>Included</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Banking packet</span>
                      <span>Included</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Compliance checklist</span>
                      <span>Included</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-baseline">
                  <span className="text-lg font-semibold text-gray-900">
                    Total
                  </span>
                  <span className="text-2xl font-bold text-gray-900">
                    $749
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  All-inclusive pricing. No hidden fees.
                </p>
              </div>

              {/* Guarantee Badge */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#f88b00] mt-0.5 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-orange-900">
                      48-Hour Filing Guarantee
                    </p>
                    <p className="text-xs text-orange-700 mt-1">
                      We'll submit your filing within 48 business hours or you'll
                      receive a $100 credit.
                    </p>
                  </div>
                </div>
              </div>

              {/* Support Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-600 text-center">
                  Questions?{' '}
                  <Link
                    href="mailto:support@texaspllc.com"
                    className="text-[#f88b00] hover:text-[#d97706]"
                  >
                    Contact Support
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Trust Signals */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-gray-900 mb-1">127+</p>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 mb-1">48hrs</p>
              <p className="text-sm text-gray-600">Average Filing Time</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 mb-1">100%</p>
              <p className="text-sm text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

