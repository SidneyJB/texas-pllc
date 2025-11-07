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
  title: 'Engineer PLLC Formation Texas | $749 All-Inclusive | 48-Hour Filing',
  description:
    'Form your Texas Engineer PLLC in 48 hours. $749 all-inclusive pricing. We handle everything - state filing, EIN, Operating Agreement, Registered Agent. No confusion. No hidden fees.',
  keywords: [
    'engineer PLLC Texas',
    'PE PLLC formation',
    'Texas engineer LLC',
    'PLLC formation service',
    'engineer business formation',
    'professional engineer PLLC',
  ],
  alternates: {
    canonical: 'https://www.texaspllc.com/engineer',
  },
  openGraph: {
    title: 'Engineer PLLC Formation Texas | $749 All-Inclusive',
    description:
      'Form your Texas Engineer PLLC in 48 hours. $749 all-inclusive. We handle everything.',
    type: 'website',
    url: 'https://www.texaspllc.com/engineer',
    siteName: 'Texas PLLC Formation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineer PLLC Formation Texas | $749 All-Inclusive',
    description:
      'Form your Texas Engineer PLLC in 48 hours. $749 all-inclusive. We handle everything.',
  },
};

export default function EngineerLandingPage() {
  // Hero content
  const heroContent = {
    profession: 'Engineer',
    headline: 'Form Your Texas Engineer PLLC in 48 Hours — $749 All-Inclusive',
    subheadline:
      'You focus on engineering projects. We handle all the paperwork, filings, and compliance details. No confusion. No hidden fees. Just fast, reliable PLLC formation.',
    ctaText: 'Get Started',
    ctaLink: '/checkout?profession=engineer',
  };

  // Problem section content
  const problems = [
    {
      title: 'TBPELS Board Filing Sequence',
      description:
        'You need to file with TBPELS (Texas Board of Professional Engineers and Land Surveyors) in the right order. Getting the sequence wrong can delay your firm launch or cause compliance issues.',
    },
    {
      title: 'Professional Liability Protection',
      description:
        'As a PE, you need proper liability protection for your engineering work. Forming a PLLC correctly ensures your personal assets are protected from business liabilities.',
    },
    {
      title: 'Stamping and Seal Requirements',
      description:
        'You need your PLLC formed correctly before you can properly stamp engineering documents. One mistake could affect your ability to practice.',
    },
    {
      title: 'Time Away from Projects',
      description:
        'Every hour spent on paperwork is an hour not spent on engineering work. You need fast, reliable PLLC formation so you can get back to your projects.',
    },
    {
      title: 'Uncertainty About Requirements',
      description:
        'You\'re not sure what documents you need, which licenses to include, or how to structure your Operating Agreement for an engineering firm.',
    },
  ];

  // Solution section content
  const solutionFeatures = [
    'Complete state filing with Texas Secretary of State',
    'EIN (Employer Identification Number) obtained for you',
    'Engineer-specific Operating Agreement included',
    'First-year Registered Agent service',
    'Banking packet and compliance checklist',
    'TBPELS filing guidance included',
    '48-hour filing guarantee',
  ];

  // Benefits section content
  const benefits = [
    {
      title: 'Get Started Faster',
      description:
        'Your PLLC is filed within 48 hours, so you can complete your TBPELS filing and start taking projects sooner. No waiting weeks or months.',
    },
    {
      title: 'Protect Your Personal Assets',
      description:
        'A PLLC separates your personal assets from your engineering practice. If something goes wrong, your home and savings stay protected.',
    },
    {
      title: 'Save Time and Stress',
      description:
        'We handle all the paperwork and filings. You don\'t spend hours researching forms or navigating confusing state websites.',
    },
    {
      title: 'Stay Compliant',
      description:
        'We know the specific requirements for engineer PLLCs in Texas, including TBPELS rules and professional standards.',
    },
    {
      title: 'Clear, Transparent Pricing',
      description:
        'One price covers everything. No surprise fees. No upsells. You know exactly what you\'re paying upfront.',
    },
    {
      title: 'Expert Support',
      description:
        'Our team specializes in engineer PLLC formations. We understand your profession\'s unique needs and TBPELS requirements.',
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
        'Tell us about your engineering practice and provide your PE license number. The whole process takes about 6 minutes.',
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
      name: 'James W.',
      profession: 'Civil Engineer (PE)',
      rating: 5,
      text: 'I needed my PLLC formed quickly to start my consulting firm. They handled everything perfectly and I had my documents in 48 hours. The TBPELS filing guidance was especially helpful.',
      location: 'Houston, TX',
    },
    {
      name: 'Patricia L.',
      profession: 'Structural Engineer (PE)',
      rating: 5,
      text: 'The price was clear from the start - no surprises. They understood TBPELS requirements and made sure everything was compliant. Highly recommend.',
      location: 'Dallas, TX',
    },
    {
      name: 'Michael C.',
      profession: 'Mechanical Engineer (PE)',
      rating: 5,
      text: 'I was worried about the filing sequence with TBPELS, but they knew exactly what engineers need. The process was smooth and I could focus on my projects.',
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
        'Engineer-specific Operating Agreement',
        'First-year Registered Agent',
        'Banking packet',
        'TBPELS filing guidance',
        'Compliance checklist',
        '48-hour filing guarantee',
      ],
      highlighted: true,
      ctaText: 'Get Started',
      ctaLink: '/checkout?profession=engineer',
    },
    {
      name: 'Premium',
      price: 949,
      description: 'Complete + board filing support',
      features: [
        'Everything in Complete',
        'TBPELS board filing assistance',
        'Priority support',
        'Rush processing available',
      ],
      ctaText: 'Get Started',
      ctaLink: '/checkout?profession=engineer&tier=premium',
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
      question: 'What\'s the difference between a PLLC and an LLC for engineers?',
      answer:
        'A PLLC (Professional Limited Liability Company) is specifically for licensed professionals like Professional Engineers. It provides the same liability protection as an LLC but is designed for your profession. In Texas, PEs must form a PLLC, not a regular LLC.',
    },
    {
      question: 'How long does PLLC formation take?',
      answer:
        'We file your PLLC within 48 business hours after you complete your order. You\'ll receive your complete packet with filing confirmation, EIN, and all documents within that timeframe.',
    },
    {
      question: 'What\'s included in the $749 price?',
      answer:
        'Everything you need: Texas Form 206 filing ($300 state fee included), EIN issuance, engineer-specific Operating Agreement, first-year Registered Agent service, banking packet, TBPELS filing guidance, and compliance checklist. No hidden fees.',
    },
    {
      question: 'Do I need a Registered Agent?',
      answer:
        'Yes, Texas requires all PLLCs to have a Registered Agent. We include your first year of Registered Agent service in the Complete package. This ensures you receive important legal and tax documents on time.',
    },
    {
      question: 'What license information do I need?',
      answer:
        'You\'ll need your Texas PE (Professional Engineer) license number. We verify your license is active before filing to ensure compliance.',
    },
    {
      question: 'Do you handle TBPELS board filings?',
      answer:
        'The Complete package includes guidance for TBPELS board filings. Board filings can be added as an add-on if you need assistance with the actual filing process.',
    },
    {
      question: 'Can I use my own Operating Agreement?',
      answer:
        'Yes, but our engineer-specific Operating Agreement is designed for engineering practices and includes all necessary clauses. It saves you time and ensures compliance.',
    },
    {
      question: 'What if my preferred business name isn\'t available?',
      answer:
        'We check name availability before filing. If your first choice isn\'t available, we\'ll work with you to find an alternative that meets Texas requirements.',
    },
    {
      question: 'What happens after my PLLC is formed?',
      answer:
        'You\'ll receive your complete packet with filing confirmation, EIN letter, Operating Agreement, Registered Agent information, and banking documents. You can then complete your TBPELS filing and start taking projects.',
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
    name: 'Engineer PLLC Formation Texas',
    description:
      'Professional Texas PLLC formation service for engineers and engineering firms. $749 all-inclusive. 48-hour filing guarantee.',
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
      <ProblemSection profession="Engineer" problems={problems} />
      <SolutionSection profession="Engineer" features={solutionFeatures} />
      <BenefitsSection profession="Engineer" benefits={benefits} />
      <HowItWorks steps={steps} />
      <SocialProof testimonials={testimonials} />
      <PricingTable tiers={pricingTiers} profession="Engineer" />
      <Guarantee guarantees={guarantees} />
      <FAQ items={faqItems} />
      <FinalCTA
        profession="Engineer"
        ctaLink="/checkout?profession=engineer"
      />
    </>
  );
}

