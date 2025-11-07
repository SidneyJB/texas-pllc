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
  title: 'Physician PLLC Formation Texas | $749 All-Inclusive | 48-Hour Filing',
  description:
    'Form your Texas Physician PLLC in 48 hours. $749 all-inclusive pricing. We handle everything - state filing, EIN, Operating Agreement, Registered Agent. No confusion. No hidden fees.',
  keywords: [
    'physician PLLC Texas',
    'doctor PLLC formation',
    'Texas physician LLC',
    'PLLC formation service',
    'physician business formation',
    'medical practice PLLC',
  ],
  alternates: {
    canonical: 'https://www.texaspllc.com/physician',
  },
  openGraph: {
    title: 'Physician PLLC Formation Texas | $749 All-Inclusive',
    description:
      'Form your Texas Physician PLLC in 48 hours. $749 all-inclusive. We handle everything.',
    type: 'website',
    url: 'https://www.texaspllc.com/physician',
    siteName: 'Texas PLLC Formation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Physician PLLC Formation Texas | $749 All-Inclusive',
    description:
      'Form your Texas Physician PLLC in 48 hours. $749 all-inclusive. We handle everything.',
  },
};

export default function PhysicianLandingPage() {
  // Hero content
  const heroContent = {
    profession: 'Physician',
    headline: 'Form Your Texas Physician PLLC in 48 Hours — $749 All-Inclusive',
    subheadline:
      'You focus on patient care. We handle all the paperwork, filings, and compliance details. No confusion. No hidden fees. Just fast, reliable PLLC formation.',
    ctaText: 'Get Started',
    ctaLink: '/checkout?profession=physician',
  };

  // Problem section content
  const problems = [
    {
      title: 'TMB Board Filing Requirements',
      description:
        'You need to file with TMB (Texas Medical Board) in the right sequence. Getting the order wrong can delay your practice launch or cause compliance issues with your medical license.',
    },
    {
      title: 'Multi-Owner Practice Complexity',
      description:
        'If you\'re forming a practice with other physicians or PAs, you need proper ownership structure and Operating Agreement. One mistake could affect your practice operations.',
    },
    {
      title: 'Malpractice Protection Needs',
      description:
        'As a physician, you need proper liability protection for your medical practice. Forming a PLLC correctly ensures your personal assets are protected from business liabilities.',
    },
    {
      title: 'Time Away from Patients',
      description:
        'Every hour spent on paperwork is an hour not spent with patients. You need fast, reliable PLLC formation so you can get back to practicing medicine.',
    },
    {
      title: 'Insurance and Billing Setup',
      description:
        'You need your PLLC formed correctly before you can set up insurance contracts and billing. One mistake could delay your ability to see patients.',
    },
  ];

  // Solution section content
  const solutionFeatures = [
    'Complete state filing with Texas Secretary of State',
    'EIN (Employer Identification Number) obtained for you',
    'Physician-specific Operating Agreement included',
    'First-year Registered Agent service',
    'Banking packet and compliance checklist',
    'TMB filing guidance included',
    'Multi-owner support available',
    '48-hour filing guarantee',
  ];

  // Benefits section content
  const benefits = [
    {
      title: 'Get Started Faster',
      description:
        'Your PLLC is filed within 48 hours, so you can complete your TMB filing and start seeing patients sooner. No waiting weeks or months.',
    },
    {
      title: 'Protect Your Personal Assets',
      description:
        'A PLLC separates your personal assets from your medical practice. If something goes wrong, your home and savings stay protected.',
    },
    {
      title: 'Save Time and Stress',
      description:
        'We handle all the paperwork and filings. You don\'t spend hours researching forms or navigating confusing state websites.',
    },
    {
      title: 'Stay Compliant',
      description:
        'We know the specific requirements for physician PLLCs in Texas, including TMB rules and medical practice standards.',
    },
    {
      title: 'Clear, Transparent Pricing',
      description:
        'One price covers everything. No surprise fees. No upsells. You know exactly what you\'re paying upfront.',
    },
    {
      title: 'Expert Support',
      description:
        'Our team specializes in physician PLLC formations. We understand your profession\'s unique needs and TMB requirements.',
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
        'Tell us about your practice and provide your medical license number. The whole process takes about 6 minutes.',
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
      name: 'Dr. Sarah M.',
      profession: 'Family Medicine Physician',
      rating: 5,
      text: 'I needed my PLLC formed quickly to start my practice. They handled everything perfectly and I had my documents in 48 hours. The TMB filing guidance was especially helpful.',
      location: 'San Antonio, TX',
    },
    {
      name: 'Dr. Robert K.',
      profession: 'Internal Medicine Physician',
      rating: 5,
      text: 'The price was clear from the start - no surprises. They understood TMB requirements and made sure everything was compliant. Highly recommend.',
      location: 'Houston, TX',
    },
    {
      name: 'Dr. Jennifer L.',
      profession: 'Pediatrician',
      rating: 5,
      text: 'I was forming a practice with another physician, and they helped us structure everything correctly. The process was smooth and we could focus on our patients.',
      location: 'Dallas, TX',
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
        'Physician-specific Operating Agreement',
        'First-year Registered Agent',
        'Banking packet',
        'TMB filing guidance',
        'Compliance checklist',
        '48-hour filing guarantee',
      ],
      highlighted: true,
      ctaText: 'Get Started',
      ctaLink: '/checkout?profession=physician',
    },
    {
      name: 'Premium',
      price: 949,
      description: 'Complete + board filing support',
      features: [
        'Everything in Complete',
        'TMB board filing assistance',
        'Multi-owner support',
        'Priority support',
        'Rush processing available',
      ],
      ctaText: 'Get Started',
      ctaLink: '/checkout?profession=physician&tier=premium',
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
      question: 'What\'s the difference between a PLLC and an LLC for physicians?',
      answer:
        'A PLLC (Professional Limited Liability Company) is specifically for licensed professionals like physicians. It provides the same liability protection as an LLC but is designed for your profession. In Texas, physicians must form a PLLC, not a regular LLC.',
    },
    {
      question: 'How long does PLLC formation take?',
      answer:
        'We file your PLLC within 48 business hours after you complete your order. You\'ll receive your complete packet with filing confirmation, EIN, and all documents within that timeframe.',
    },
    {
      question: 'What\'s included in the $749 price?',
      answer:
        'Everything you need: Texas Form 206 filing ($300 state fee included), EIN issuance, physician-specific Operating Agreement, first-year Registered Agent service, banking packet, TMB filing guidance, and compliance checklist. No hidden fees.',
    },
    {
      question: 'Do I need a Registered Agent?',
      answer:
        'Yes, Texas requires all PLLCs to have a Registered Agent. We include your first year of Registered Agent service in the Complete package. This ensures you receive important legal and tax documents on time.',
    },
    {
      question: 'What license information do I need?',
      answer:
        'You\'ll need your Texas medical license number. We verify your license is active before filing to ensure compliance.',
    },
    {
      question: 'Do you handle TMB board filings?',
      answer:
        'The Complete package includes guidance for TMB board filings. Board filings can be added as an add-on if you need assistance with the actual filing process.',
    },
    {
      question: 'Can I form a PLLC with other physicians or PAs?',
      answer:
        'Yes, we support multi-owner PLLCs. Our physician-specific Operating Agreement can accommodate multiple owners and includes proper ownership structure.',
    },
    {
      question: 'Can I use my own Operating Agreement?',
      answer:
        'Yes, but our physician-specific Operating Agreement is designed for medical practices and includes all necessary clauses. It saves you time and ensures compliance.',
    },
    {
      question: 'What if my preferred business name isn\'t available?',
      answer:
        'We check name availability before filing. If your first choice isn\'t available, we\'ll work with you to find an alternative that meets Texas requirements.',
    },
    {
      question: 'What happens after my PLLC is formed?',
      answer:
        'You\'ll receive your complete packet with filing confirmation, EIN letter, Operating Agreement, Registered Agent information, and banking documents. You can then complete your TMB filing and start seeing patients.',
    },
    {
      question: 'Is there ongoing support after formation?',
      answer:
        'Yes, we provide a compliance checklist and ongoing Registered Agent service. We also send reminders for important deadlines like annual reports.',
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
    name: 'Physician PLLC Formation Texas',
    description:
      'Professional Texas PLLC formation service for physicians and medical practices. $749 all-inclusive. 48-hour filing guarantee.',
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
      <ProblemSection profession="Physician" problems={problems} />
      <SolutionSection profession="Physician" features={solutionFeatures} />
      <BenefitsSection profession="Physician" benefits={benefits} />
      <HowItWorks steps={steps} />
      <SocialProof testimonials={testimonials} />
      <PricingTable tiers={pricingTiers} profession="Physician" />
      <Guarantee guarantees={guarantees} />
      <FAQ items={faqItems} />
      <FinalCTA
        profession="Physician"
        ctaLink="/checkout?profession=physician"
      />
    </>
  );
}

