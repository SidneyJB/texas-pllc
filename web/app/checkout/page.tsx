import type { Metadata } from 'next';
import { Suspense } from 'react';
import CheckoutContent from './CheckoutContent';

export const metadata: Metadata = {
  title: 'Checkout | Texas PLLC Formation',
  description:
    'Complete your Texas PLLC formation order. $749 all-inclusive. Secure checkout. 48-hour filing guarantee.',
  robots: {
    index: false, // Don't index checkout pages
    follow: false,
  },
};

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ profession?: string }>;
}) {
  const params = await searchParams;
  return (
    <Suspense fallback={<CheckoutLoadingState />}>
      <CheckoutContent profession={params.profession} />
    </Suspense>
  );
}

function CheckoutLoadingState() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="h-96 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

