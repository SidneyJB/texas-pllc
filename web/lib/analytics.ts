// Google Analytics 4 Event Tracking Utilities

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

// GA4 Measurement ID - Set via environment variable
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Initialize GA4
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_MEASUREMENT_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    });
  }
};

// Track page view
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
  ...otherParams
}: {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
}) => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      ...otherParams,
    });
  }
};

// Track checkout start
export const trackCheckoutStart = (profession?: string, price?: number) => {
  event({
    action: 'begin_checkout',
    category: 'ecommerce',
    label: profession || 'unknown',
    value: price,
    profession: profession,
    currency: 'USD',
    items: [
      {
        item_name: profession ? `${profession} PLLC Formation` : 'PLLC Formation',
        item_category: profession || 'general',
        price: price || 749,
        quantity: 1,
      },
    ],
  });
};

// Track purchase completion
export const trackPurchase = (
  transactionId: string,
  profession?: string,
  price?: number,
  currency = 'USD'
) => {
  event({
    action: 'purchase',
    category: 'ecommerce',
    label: profession || 'unknown',
    value: price,
    transaction_id: transactionId,
    profession: profession,
    currency: currency,
    items: [
      {
        item_name: profession ? `${profession} PLLC Formation` : 'PLLC Formation',
        item_category: profession || 'general',
        price: price || 749,
        quantity: 1,
      },
    ],
  });
};

// Track CTA clicks
export const trackCTAClick = (ctaText: string, location: string, profession?: string) => {
  event({
    action: 'click',
    category: 'CTA',
    label: ctaText,
    location: location,
    profession: profession,
  });
};

// Track phone call (if phone number is clicked)
export const trackPhoneCall = (phoneNumber: string, duration?: number) => {
  event({
    action: 'phone_call',
    category: 'engagement',
    label: phoneNumber,
    value: duration,
  });
};

// Track chat start (if chat widget is added)
export const trackChatStart = () => {
  event({
    action: 'chat_start',
    category: 'engagement',
  });
};

// Privacy-compliant: Check if user has consented to tracking
export const hasConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  // Check for consent cookie or localStorage
  // For MVP, we'll assume consent (can be enhanced with cookie banner)
  return true;
};

// Track only if consent is given
export const trackWithConsent = (
  trackingFn: () => void,
  requireConsent = true
) => {
  if (!requireConsent || hasConsent()) {
    trackingFn();
  }
};

