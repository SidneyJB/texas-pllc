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
    headline: 'Get Your Texas Physician PLLC Filed in 48 Hours — Everything Included for $749',
    subheadline:
      'State filing, EIN, Operating Agreement, and Registered Agent—all handled for you. Start seeing patients faster with physician-specific expertise.',
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
    'Operating Agreement included',
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
        'Operating Agreement',
        'First-year Registered Agent',
        'Banking packet',
        'TMB filing guidance',
        'Compliance checklist',
        '48-hour filing guarantee',
      ],
      highlighted: true,
      ctaText: 'Start My Formation - $749',
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
      ctaText: 'Start My Formation - $949',
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
        'Everything you need: Texas Form 206 filing ($300 state fee included), EIN issuance, Operating Agreement, first-year Registered Agent service, banking packet, TMB filing guidance, and compliance checklist. No hidden fees.',
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
        'Yes, we support multi-owner PLLCs. Our Operating Agreement can accommodate multiple owners and includes proper ownership structure.',
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
      <ProblemSection profession="Physician" problems={problems} headline="Why Most Physicians Struggle with PLLC Formation" />
      
      {/* Profession-Specific Content Section */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Texas Physicians Need a PLLC for Medical Practice
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If you're a licensed physician, physician assistant, or medical doctor in Texas, forming a Professional Limited Liability Company (PLLC) is essential for protecting your personal assets while practicing medicine. Texas law requires licensed medical professionals to form a PLLC, not a regular LLC, when operating a medical practice under a business entity.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A PLLC provides crucial liability protection for your medical practice. While it doesn't protect you from malpractice claims (you still need professional liability insurance), it does protect your personal assets—your home, savings, retirement accounts, and other personal property—from business debts, lawsuits unrelated to malpractice, and other practice liabilities. This separation is critical for physicians who may face employment disputes, contract issues, or other business-related legal matters.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Texas Medical Board (TMB) requires physicians to properly register their PLLC before practicing under a business name. The filing sequence is critical: you must form your PLLC with the Texas Secretary of State first, then file with TMB. Getting this order wrong can delay your practice launch by weeks or even months, costing you potential patients and revenue.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              What Makes Our Physician PLLC Formation Different
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We specialize in PLLC formation for physicians and medical practices. We handle all the paperwork and filings, ensuring your formation meets Texas requirements and TMB expectations. Our Operating Agreement includes all necessary clauses to get your practice started.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              TMB Board Filing Requirements for Texas Physicians
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              After your PLLC is formed with the Texas Secretary of State, you must file with the Texas Medical Board. The correct sequence is:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Form your PLLC</strong> with the Texas Secretary of State (we handle this)</li>
              <li><strong>Obtain your EIN</strong> from the IRS (we handle this)</li>
              <li><strong>File Form 1305</strong> with TMB to register your PLLC</li>
              <li><strong>Update your TMB registration</strong> to reflect your PLLC entity</li>
              <li><strong>Credential with insurance panels</strong> using your PLLC information</li>
            </ol>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our Complete package includes TMB filing guidance, and our Premium package includes TMB board filing assistance. We understand TMB requirements and ensure your formation documents meet all medical practice standards.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Multi-Physician and PA Joint Practices
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If you're forming a practice with other physicians or physician assistants, proper ownership structure is critical. Texas allows PAs to be members of a physician PLLC under specific conditions. Our Operating Agreement can accommodate multi-member practices and includes proper ownership percentages, decision-making processes, and buy-sell provisions. We ensure compliance with TMB rules regarding PA ownership and supervision requirements.
            </p>
          </div>
        </div>
      </section>

      <SolutionSection profession="Physician" features={solutionFeatures} />
      <BenefitsSection profession="Physician" benefits={benefits} />
      <HowItWorks steps={steps} />
      
      {/* Additional Profession-Specific Content */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Common Questions About Physician PLLC Formation in Texas
            </h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Can I practice medicine without forming a PLLC?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Yes, you can practice as a sole proprietor under your own name without forming a PLLC. However, this provides no liability protection for your personal assets. Most physicians form a PLLC to protect personal assets and to practice under a business name. Additionally, many insurance panels and hospitals require you to practice under a business entity for credentialing purposes.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              What about insurance credentialing and billing?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Once your PLLC is formed, you'll need to credential your PLLC with insurance panels (Medicare, Medicaid, and private insurers) and set up billing under your PLLC's EIN. This process requires your formation documents, EIN letter, and TMB registration. Our banking packet includes all documents needed for insurance credentialing, making the process faster. Many physicians find that having their PLLC formed correctly upfront prevents delays in getting credentialed and seeing patients.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Can physician assistants be owners of a physician PLLC?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Yes, under Texas law, physician assistants can be members of a physician PLLC, but there are specific requirements. The PLLC must have at least one physician member, and the Operating Agreement must comply with TMB rules regarding PA supervision and ownership. We can help structure your PLLC to accommodate PA ownership while ensuring compliance with all TMB requirements.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              What happens if I need to add or remove physicians later?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Your Operating Agreement should include provisions for adding or removing members. We can help with amendments to your PLLC if you need to make changes after formation. It's important to have a properly structured Operating Agreement from the start that addresses member changes, buy-sell provisions, and practice transitions.
            </p>
          </div>
        </div>
      </section>
      
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

