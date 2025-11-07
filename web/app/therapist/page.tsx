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
  title: 'Therapist PLLC Formation Texas | $749 All-Inclusive | 48-Hour Filing',
  description:
    'Form your Texas Therapist PLLC in 48 hours. $749 all-inclusive pricing. We handle everything - state filing, EIN, Operating Agreement, Registered Agent. No confusion. No hidden fees.',
  keywords: [
    'therapist PLLC Texas',
    'counselor PLLC formation',
    'Texas therapist LLC',
    'PLLC formation service',
    'therapist business formation',
  ],
  alternates: {
    canonical: 'https://www.texaspllc.com/therapist',
  },
  openGraph: {
    title: 'Therapist PLLC Formation Texas | $749 All-Inclusive',
    description:
      'Form your Texas Therapist PLLC in 48 hours. $749 all-inclusive. We handle everything.',
    type: 'website',
    url: 'https://www.texaspllc.com/therapist',
    siteName: 'Texas PLLC Formation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Therapist PLLC Formation Texas | $749 All-Inclusive',
    description:
      'Form your Texas Therapist PLLC in 48 hours. $749 all-inclusive. We handle everything.',
  },
};

export default function TherapistLandingPage() {
  // Hero content
  const heroContent = {
    profession: 'Therapist',
    headline: 'Form Your Texas Therapist PLLC in 48 Hours — $749 All-Inclusive',
    subheadline:
      'You focus on helping clients. We handle all the paperwork, filings, and compliance details. No confusion. No hidden fees. Just fast, reliable PLLC formation.',
    ctaText: 'Get Started',
    ctaLink: '/checkout?profession=therapist',
  };

  // Problem section content
  const problems = [
    {
      title: 'Confusion About PLLC vs LLC',
      description:
        'You know you need a PLLC, but the difference between PLLC and LLC isn\'t clear. You worry about making the wrong choice and facing compliance issues later.',
    },
    {
      title: 'Fear of Making Mistakes',
      description:
        'Forming a PLLC involves complex legal requirements. One mistake could delay your practice launch or cause compliance problems. You don\'t want to risk it.',
    },
    {
      title: 'Limited Budget',
      description:
        'Starting a practice is expensive. You need affordable PLLC formation without hidden fees or surprise costs that blow your budget.',
    },
    {
      title: 'Time-Consuming Paperwork',
      description:
        'Between seeing clients and running your practice, you don\'t have hours to spend filling out forms and navigating state websites.',
    },
    {
      title: 'Uncertainty About Requirements',
      description:
        'You\'re not sure what documents you need, which licenses to include, or how to structure your Operating Agreement for a therapy practice.',
    },
  ];

  // Solution section content
  const solutionFeatures = [
    'Complete state filing with Texas Secretary of State',
    'EIN (Employer Identification Number) obtained for you',
    'Therapist-specific Operating Agreement included',
    'First-year Registered Agent service',
    'Banking packet and compliance checklist',
    '48-hour filing guarantee',
  ];

  // Benefits section content
  const benefits = [
    {
      title: 'Get Started Faster',
      description:
        'Your PLLC is filed within 48 hours, so you can start seeing clients sooner. No waiting weeks or months.',
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
        'We know the specific requirements for therapist PLLCs in Texas. Your formation meets all state and board requirements.',
    },
    {
      title: 'Clear, Transparent Pricing',
      description:
        'One price covers everything. No surprise fees. No upsells. You know exactly what you\'re paying upfront.',
    },
    {
      title: 'Expert Support',
      description:
        'Our team specializes in therapist PLLC formations. We understand your profession\'s unique needs and requirements.',
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
        'Tell us about your practice and provide your license information. The whole process takes about 6 minutes.',
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
      name: 'Sarah M.',
      profession: 'Licensed Professional Counselor',
      rating: 5,
      text: 'I was worried about making mistakes with my PLLC formation. This service made it so easy. I had everything I needed in 2 days, and I could focus on my clients instead of paperwork.',
      location: 'Austin, TX',
    },
    {
      name: 'Michael R.',
      profession: 'Marriage and Family Therapist',
      rating: 5,
      text: 'The price was clear from the start - no surprises. The Operating Agreement was tailored for therapists, which gave me confidence everything was done right.',
      location: 'Houston, TX',
    },
    {
      name: 'Jennifer L.',
      profession: 'Clinical Social Worker',
      rating: 5,
      text: 'I needed my PLLC fast to start a new practice. They filed it in 48 hours exactly as promised. The whole process was stress-free.',
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
        'Therapist-specific Operating Agreement',
        'First-year Registered Agent',
        'Banking packet',
        'Compliance checklist',
        '48-hour filing guarantee',
      ],
      highlighted: true,
      ctaText: 'Get Started',
      ctaLink: '/checkout?profession=therapist',
    },
    {
      name: 'Premium',
      price: 949,
      description: 'Complete + board filing support',
      features: [
        'Everything in Complete',
        'Board filing assistance',
        'Priority support',
        'Rush processing available',
      ],
      ctaText: 'Get Started',
      ctaLink: '/checkout?profession=therapist&tier=premium',
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
      question: 'What\'s the difference between a PLLC and an LLC?',
      answer:
        'A PLLC (Professional Limited Liability Company) is specifically for licensed professionals like therapists. It provides the same liability protection as an LLC but is designed for your profession. In Texas, therapists must form a PLLC, not a regular LLC.',
    },
    {
      question: 'How long does PLLC formation take?',
      answer:
        'We file your PLLC within 48 business hours after you complete your order. You\'ll receive your complete packet with filing confirmation, EIN, and all documents within that timeframe.',
    },
    {
      question: 'What\'s included in the $749 price?',
      answer:
        'Everything you need: Texas Form 206 filing ($300 state fee included), EIN issuance, therapist-specific Operating Agreement, first-year Registered Agent service, banking packet, and compliance checklist. No hidden fees.',
    },
    {
      question: 'Do I need a Registered Agent?',
      answer:
        'Yes, Texas requires all PLLCs to have a Registered Agent. We include your first year of Registered Agent service in the Complete package. This ensures you receive important legal and tax documents on time.',
    },
    {
      question: 'What license information do I need?',
      answer:
        'You\'ll need your Texas professional license number (LPC, LMFT, LCSW, etc.). We verify your license is active before filing to ensure compliance.',
    },
    {
      question: 'Can I use my own Operating Agreement?',
      answer:
        'Yes, but our therapist-specific Operating Agreement is designed for therapy practices and includes all necessary clauses. It saves you time and ensures compliance.',
    },
    {
      question: 'What if my preferred business name isn\'t available?',
      answer:
        'We check name availability before filing. If your first choice isn\'t available, we\'ll work with you to find an alternative that meets Texas requirements.',
    },
    {
      question: 'Do you handle board filings?',
      answer:
        'The Complete package includes state filing. Board filings (like TSBEP for LPCs) are separate and can be added as an add-on if needed.',
    },
    {
      question: 'What happens after my PLLC is formed?',
      answer:
        'You\'ll receive your complete packet with filing confirmation, EIN letter, Operating Agreement, Registered Agent information, and banking documents. You can then open a business bank account and start seeing clients.',
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
    name: 'Therapist PLLC Formation Texas',
    description:
      'Professional Texas PLLC formation service for therapists and counselors. $749 all-inclusive. 48-hour filing guarantee.',
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
      <ProblemSection profession="Therapist" problems={problems} />
      <SolutionSection
        profession="Therapist"
        features={solutionFeatures}
      />
      <BenefitsSection profession="Therapist" benefits={benefits} />
      <HowItWorks steps={steps} />
      <SocialProof testimonials={testimonials} />
      <PricingTable tiers={pricingTiers} profession="Therapist" />
      <Guarantee guarantees={guarantees} />
      <FAQ items={faqItems} />
      <FinalCTA
        profession="Therapist"
        ctaLink="/checkout?profession=therapist"
      />
    </>
  );
}

