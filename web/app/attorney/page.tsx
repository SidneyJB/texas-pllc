import type { Metadata } from 'next';
import {
  Hero,
  ProblemSection,
  SolutionSection,
  BenefitsSection,
  HowItWorks,
  SocialProof,
  PricingTable,
  Guarantee,
  FAQ,
  FinalCTA,
} from '@/components/landing';

export const metadata: Metadata = {
  title: 'Attorney PLLC Formation Texas | $749 All-Inclusive | 48-Hour Filing',
  description:
    'Form your Texas Attorney PLLC in 48 hours. $749 all-inclusive pricing. We handle everything - state filing, EIN, Operating Agreement, Registered Agent. No confusion. No hidden fees.',
  keywords: [
    'attorney PLLC Texas',
    'lawyer PLLC formation',
    'Texas attorney LLC',
    'PLLC formation service',
    'attorney business formation',
    'law firm PLLC',
  ],
  alternates: {
    canonical: 'https://www.texaspllc.com/attorney',
  },
  openGraph: {
    title: 'Attorney PLLC Formation Texas | $749 All-Inclusive',
    description:
      'Form your Texas Attorney PLLC in 48 hours. $749 all-inclusive. We handle everything.',
    type: 'website',
    url: 'https://www.texaspllc.com/attorney',
    siteName: 'Texas PLLC Formation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Attorney PLLC Formation Texas | $749 All-Inclusive',
    description:
      'Form your Texas Attorney PLLC in 48 hours. $749 all-inclusive. We handle everything.',
  },
};

export default function AttorneyLandingPage() {
  // Hero content
  const heroContent = {
    profession: 'Attorney',
    headline: 'Form Your Texas Attorney PLLC in 48 Hours — $749 All-Inclusive',
    subheadline:
      'You focus on practicing law. We handle all the paperwork, filings, and compliance details. No confusion. No hidden fees. Just fast, reliable PLLC formation.',
    ctaText: 'Get Started',
    ctaLink: '/checkout?profession=attorney',
  };

  // Problem section content
  const problems = [
    {
      title: 'State Bar Compliance Requirements',
      description:
        'You need to ensure your PLLC formation complies with State Bar rules and ethics requirements. One misstep could lead to compliance issues or disciplinary action.',
    },
    {
      title: 'IOLTA Account Setup Complexity',
      description:
        'Setting up your IOLTA (Interest on Lawyers Trust Accounts) requires proper entity formation first. You need your PLLC formed correctly before opening trust accounts.',
    },
    {
      title: 'Malpractice Protection Concerns',
      description:
        'You want proper liability protection for your practice. Forming a PLLC correctly ensures your personal assets are protected from business liabilities.',
    },
    {
      title: 'Time Away from Billable Hours',
      description:
        'Every hour spent on paperwork is an hour not spent on client work. You need fast, reliable PLLC formation so you can get back to practicing law.',
    },
    {
      title: 'Advertising Rules Compliance',
      description:
        'Texas has specific rules about attorney advertising and firm names. You need to ensure your PLLC name complies with State Bar advertising regulations.',
    },
  ];

  // Solution section content
  const solutionFeatures = [
    'Complete state filing with Texas Secretary of State',
    'EIN (Employer Identification Number) obtained for you',
    'Attorney-specific Operating Agreement included',
    'First-year Registered Agent service',
    'Banking packet and IOLTA setup guidance',
    'Compliance checklist for State Bar requirements',
    '48-hour filing guarantee',
  ];

  // Benefits section content
  const benefits = [
    {
      title: 'Get Started Faster',
      description:
        'Your PLLC is filed within 48 hours, so you can open your IOLTA account and start practicing sooner. No waiting weeks or months.',
    },
    {
      title: 'Protect Your Personal Assets',
      description:
        'A PLLC separates your personal assets from your practice. If something goes wrong, your home and savings stay protected.',
    },
    {
      title: 'Save Time and Stress',
      description:
        'We handle all the paperwork and filings. You don\'t spend hours researching forms or navigating confusing state websites.',
    },
    {
      title: 'Stay Compliant',
      description:
        'We know the specific requirements for attorney PLLCs in Texas, including State Bar rules and ethics requirements.',
    },
    {
      title: 'Clear, Transparent Pricing',
      description:
        'One price covers everything. No surprise fees. No upsells. You know exactly what you\'re paying upfront.',
    },
    {
      title: 'Expert Support',
      description:
        'Our team specializes in attorney PLLC formations. We understand your profession\'s unique needs and State Bar requirements.',
    },
    {
      title: 'Satisfaction Guarantee',
      description:
        'If we make an error on our end, we\'ll fix it at no cost or provide a full refund. We stand behind our work.',
    },
  ];

  // How It Works content
  const steps = [
    {
      number: 1,
      title: 'Complete Your Order',
      description:
        'Tell us about your practice and provide your State Bar number. The whole process takes about 6 minutes.',
    },
    {
      number: 2,
      title: 'We Handle Everything',
      description:
        'We file your Form 206 with Texas, get your EIN, create your Operating Agreement, and set up your Registered Agent.',
    },
    {
      number: 3,
      title: 'Receive Your Complete Packet',
      description:
        'Within 48 hours, you get everything you need: filing confirmation, EIN letter, Operating Agreement, and banking documents.',
    },
  ];

  // Social Proof content
  const testimonials = [
    {
      name: 'David K.',
      profession: 'Criminal Defense Attorney',
      rating: 5,
      text: 'I needed my PLLC formed quickly to start my solo practice. They handled everything perfectly and I had my documents in 48 hours. The Operating Agreement was tailored for attorneys, which gave me confidence.',
      location: 'Dallas, TX',
    },
    {
      name: 'Maria S.',
      profession: 'Family Law Attorney',
      rating: 5,
      text: 'The price was clear from the start - no surprises. They understood State Bar requirements and made sure everything was compliant. Highly recommend.',
      location: 'Houston, TX',
    },
    {
      name: 'Robert T.',
      profession: 'Personal Injury Attorney',
      rating: 5,
      text: 'I was worried about compliance issues, but they knew exactly what attorneys need. The process was smooth and I could focus on my cases instead of paperwork.',
      location: 'Austin, TX',
    },
  ];

  // Pricing tiers
  const pricingTiers = [
    {
      name: 'Complete',
      price: 749,
      description: 'Everything you need (Most Popular)',
      features: [
        'State filing (Form 206) - $300 fee included',
        'EIN issuance',
        'Attorney-specific Operating Agreement',
        'First-year Registered Agent',
        'Banking packet & IOLTA guidance',
        'Compliance checklist',
        '48-hour filing guarantee',
      ],
      highlighted: true,
      ctaText: 'Get Started',
      ctaLink: '/checkout?profession=attorney',
    },
    {
      name: 'Premium',
      price: 949,
      description: 'Complete + priority support',
      features: [
        'Everything in Complete',
        'Priority support',
        'Rush processing available',
        'Additional compliance review',
      ],
      ctaText: 'Get Started',
      ctaLink: '/checkout?profession=attorney&tier=premium',
    },
  ];

  // Guarantee content
  const guarantees = [
    {
      title: '48-Hour Filing Guarantee',
      description:
        'We file your PLLC within 48 business hours, or you get a $100 credit automatically. No excuses. No delays.',
    },
    {
      title: 'Satisfaction Guarantee',
      description:
        'If we make an error on our end, we\'ll fix it at no cost or provide a full refund. We stand behind our work.',
    },
  ];

  // FAQ content
  const faqItems = [
    {
      question: 'What\'s the difference between a PLLC and an LLC for attorneys?',
      answer:
        'A PLLC (Professional Limited Liability Company) is specifically for licensed professionals like attorneys. It provides the same liability protection as an LLC but is designed for your profession. In Texas, attorneys must form a PLLC, not a regular LLC, to comply with State Bar rules.',
    },
    {
      question: 'How long does PLLC formation take?',
      answer:
        'We file your PLLC within 48 business hours after you complete your order. You\'ll receive your complete packet with filing confirmation, EIN, and all documents within that timeframe.',
    },
    {
      question: 'What\'s included in the $749 price?',
      answer:
        'Everything you need: Texas Form 206 filing ($300 state fee included), EIN issuance, attorney-specific Operating Agreement, first-year Registered Agent service, banking packet, IOLTA setup guidance, and compliance checklist. No hidden fees.',
    },
    {
      question: 'Do I need a Registered Agent?',
      answer:
        'Yes, Texas requires all PLLCs to have a Registered Agent. We include your first year of Registered Agent service in the Complete package. This ensures you receive important legal and tax documents on time.',
    },
    {
      question: 'What State Bar information do I need?',
      answer:
        'You\'ll need your Texas State Bar number. We verify your license is active before filing to ensure compliance with State Bar requirements.',
    },
    {
      question: 'Will my PLLC name comply with State Bar advertising rules?',
      answer:
        'We check name availability and ensure it meets Texas requirements. However, you should review State Bar advertising rules for your specific practice area to ensure full compliance.',
    },
    {
      question: 'Can I use my own Operating Agreement?',
      answer:
        'Yes, but our attorney-specific Operating Agreement is designed for law practices and includes all necessary clauses. It saves you time and ensures compliance.',
    },
    {
      question: 'Do you help with IOLTA account setup?',
      answer:
        'The Complete package includes guidance for IOLTA account setup, but you\'ll need to open the account directly with your bank. We provide all the documents you need.',
    },
    {
      question: 'What happens after my PLLC is formed?',
      answer:
        'You\'ll receive your complete packet with filing confirmation, EIN letter, Operating Agreement, Registered Agent information, and banking documents. You can then open your IOLTA account and start practicing.',
    },
    {
      question: 'Is there ongoing support after formation?',
      answer:
        'Yes, we provide a compliance checklist and ongoing Registered Agent service. We also send reminders for important deadlines like annual reports.',
    },
    {
      question: 'What if I need to make changes later?',
      answer:
        'We can help with amendments, name changes, or other modifications. Contact us for assistance with any changes to your PLLC.',
    },
    {
      question: 'Do you offer refunds?',
      answer:
        'Yes, if we make an error on our end, we\'ll fix it at no cost or provide a full refund. We stand behind our work and will make things right if something goes wrong.',
    },
  ];

  // Schema markup for SEO
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Attorney PLLC Formation Texas',
    description:
      'Professional Texas PLLC formation service for attorneys and law firms. $749 all-inclusive. 48-hour filing guarantee.',
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
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <Hero {...heroContent} />
      <ProblemSection profession="Attorney" problems={problems} />
      <SolutionSection profession="Attorney" features={solutionFeatures} />
      <BenefitsSection profession="Attorney" benefits={benefits} />
      <HowItWorks steps={steps} />
      <SocialProof testimonials={testimonials} />
      <PricingTable tiers={pricingTiers} profession="Attorney" />
      <Guarantee guarantees={guarantees} />
      <FAQ items={faqItems} />
      <FinalCTA
        profession="Attorney"
        ctaLink="/checkout?profession=attorney"
      />
    </>
  );
}

