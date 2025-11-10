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
    headline: 'Get Your Texas Engineer PLLC Filing Submitted in 48 Hours — Everything Included for $749',
    subheadline:
      'State filing, EIN, Operating Agreement, and Registered Agent—all handled for you. Start taking projects faster with engineer-specific expertise.',
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
    'Operating Agreement included',
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
        'Operating Agreement',
        'First-year Registered Agent',
        'Banking packet',
        'TBPELS filing guidance',
        'Compliance checklist',
        '48-hour filing guarantee',
      ],
      highlighted: true,
      ctaText: 'Start My Formation - $749',
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
      ctaText: 'Start My Formation - $949',
      ctaLink: '/checkout?profession=engineer&tier=premium',
    },
  ];

  // Guarantee content
  const guarantees = [
    {
      title: '48-Hour Filing Guarantee',
      description:
        'We submit your filing within 48 business hours, or you get a $100 credit automatically. No excuses. No delays.',
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
        'We submit your filing within 48 business hours after you complete your order. You\'ll receive your complete packet with filing confirmation, EIN, and all documents within that timeframe.',
    },
    {
      question: 'What\'s included in the $749 price?',
      answer:
        'Everything you need: Texas Form 206 filing ($300 state fee included), EIN issuance, Operating Agreement, first-year Registered Agent service, banking packet, TBPELS filing guidance, and compliance checklist. No hidden fees.',
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
        'Yes, but our Operating Agreement includes all necessary clauses. It saves you time and ensures compliance.',
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
      <ProblemSection profession="Engineer" problems={problems} headline="Why Most Engineers Struggle with PLLC Formation" />
      
      {/* Profession-Specific Content Section */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Texas Professional Engineers Need a PLLC
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If you're a Professional Engineer (PE) licensed in Texas, forming a Professional Limited Liability Company (PLLC) is essential for protecting your personal assets while practicing engineering. Texas law requires licensed Professional Engineers to form a PLLC, not a regular LLC, when operating an engineering practice under a business entity. This requirement is mandated by the Texas Board of Professional Engineers and Land Surveyors (TBPELS) and is part of the Texas Engineering Practice Act.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A PLLC provides crucial liability protection for your engineering practice. While it doesn't protect you from professional liability claims related to your engineering work (you still need professional liability insurance), it does protect your personal assets—your home, savings, retirement accounts, and other personal property—from business debts, contract disputes, employment matters, and other practice liabilities unrelated to professional errors. This separation is critical for engineers who may face contract disputes, employment issues, or other business-related legal matters.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              TBPELS requires Professional Engineers to properly register their PLLC and ensure compliance with engineering practice rules. The filing sequence is critical: you must form your PLLC with the Texas Secretary of State first, then file with TBPELS. Getting this order wrong can delay your firm launch by weeks or even months, costing you potential projects and revenue. Additionally, you cannot properly stamp engineering documents until your PLLC is correctly formed and registered with TBPELS.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              What Makes Our Engineer PLLC Formation Different
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We specialize in PLLC formation for Professional Engineers and engineering firms. We handle all the paperwork and filings, ensuring your formation meets Texas requirements and TBPELS expectations. Our Operating Agreement includes all necessary clauses to get your practice started.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              TBPELS Board Filing Requirements for Texas Engineers
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              After your PLLC is formed with the Texas Secretary of State, you must file with TBPELS. The correct sequence is:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Form your PLLC</strong> with the Texas Secretary of State (we handle this)</li>
              <li><strong>Obtain your EIN</strong> from the IRS (we handle this)</li>
              <li><strong>File Form 1305</strong> with TBPELS to register your PLLC</li>
              <li><strong>Update your TBPELS registration</strong> to reflect your PLLC entity</li>
              <li><strong>Register your PLLC</strong> for stamping and seal purposes</li>
            </ol>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our Complete package includes TBPELS filing guidance, and our Premium package includes TBPELS board filing assistance. We understand TBPELS requirements and ensure your formation documents meet all engineering practice standards. You cannot properly stamp engineering documents until your PLLC is correctly formed and registered with TBPELS.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Stamping and Seal Requirements for Engineering Documents
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Texas requires Professional Engineers to stamp engineering documents with their PE seal. You cannot properly stamp documents under a business name until your PLLC is formed and registered with TBPELS. Our Operating Agreement includes provisions that address stamping requirements and ensure compliance with TBPELS rules regarding document preparation and sealing under a business entity.
            </p>
          </div>
        </div>
      </section>

      <SolutionSection profession="Engineer" features={solutionFeatures} />
      <BenefitsSection profession="Engineer" benefits={benefits} />
      <HowItWorks steps={steps} />
      
      {/* Additional Profession-Specific Content */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Common Questions About Engineer PLLC Formation in Texas
            </h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Can I practice engineering without forming a PLLC?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Yes, you can practice as a sole proprietor under your own name without forming a PLLC. However, this provides no liability protection for your personal assets. Most Professional Engineers form a PLLC to protect personal assets and to practice under a firm name. Additionally, many clients and government agencies prefer working with a formal business entity, and some contracts require a business entity structure.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              What about stamping engineering documents?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Texas requires Professional Engineers to stamp engineering documents with their PE seal. You cannot properly stamp documents under a business name until your PLLC is formed and registered with TBPELS. Our formation process ensures your PLLC is properly structured to support stamping requirements, and our TBPELS filing guidance helps you complete the registration process quickly so you can start stamping documents under your firm name.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Can multiple engineers form a PLLC together?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Yes, multiple Professional Engineers can form a multi-member PLLC. Our Operating Agreement can accommodate multiple members and includes proper ownership percentages, profit-sharing arrangements, decision-making processes, and buy-sell provisions. We ensure compliance with TBPELS rules regarding multi-engineer firms and help structure your Operating Agreement to address project ownership, intellectual property, and firm transitions.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              What about professional liability insurance?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A PLLC does not protect you from professional liability claims related to your engineering work. You still need professional liability insurance (errors and omissions insurance) to protect against claims of professional negligence. However, your PLLC protects your personal assets from business debts, contract disputes, and other non-professional liabilities. Our Operating Agreement includes provisions that support proper insurance coverage and risk management.
            </p>
          </div>
        </div>
      </section>
      
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

