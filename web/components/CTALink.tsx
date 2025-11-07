'use client';

import Link from 'next/link';
import { trackCheckoutStart, trackCTAClick } from '@/lib/analytics';

interface CTALinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  profession?: string;
  price?: number;
  ctaText?: string;
  location?: string;
  trackAsCheckout?: boolean;
}

export function CTALink({
  href,
  children,
  className,
  profession,
  price,
  ctaText,
  location,
  trackAsCheckout = false,
}: CTALinkProps) {
  const handleClick = () => {
    if (trackAsCheckout || href.includes('/checkout')) {
      trackCheckoutStart(profession, price);
    } else if (ctaText) {
      trackCTAClick(ctaText, location || href, profession);
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}

