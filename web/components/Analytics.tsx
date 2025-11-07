'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { pageview, GA_MEASUREMENT_ID } from '@/lib/analytics';

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname && GA_MEASUREMENT_ID) {
      pageview(pathname);
    }
  }, [pathname]);

  return null;
}

