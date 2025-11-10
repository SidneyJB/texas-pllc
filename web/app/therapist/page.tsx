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
    headline: 'Get Your Texas Therapist PLLC Filing Submitted in 48 Hours — Everything Included for $749',
    subheadline:
      'State filing, EIN, Operating Agreement, and Registered Agent—all handled for you. Start seeing clients faster with profession-specific expertise.',
    ctaText: 'Get Started',
    ctaLink: '/checkout?profession=therapist',
  };

  // Problem section content
  const problems = [
    {
      title: 'Confusion About PLLC vs LLC',
      description:
        'One filing error could delay your practice launch by 2-4 weeks. Choose the wrong entity type and you face compliance issues that threaten your license.',
    },
    {
      title: 'Fear of Making Mistakes',
      description:
        'One mistake in your formation documents could delay your practice launch or cause compliance problems. Every day you wait is a day you can\'t see clients.',
    },
    {
      title: 'Limited Budget',
      description:
        'Starting a practice is expensive. Hidden fees and surprise costs can blow your budget, leaving you scrambling to cover unexpected expenses.',
    },
    {
      title: 'Time-Consuming Paperwork',
      description:
        'Every hour spent on paperwork is an hour not spent with clients. You don\'t have 10+ hours to waste researching forms and navigating confusing state websites.',
    },
    {
      title: 'Uncertainty About Requirements',
      description:
        'Miss a requirement and you\'re stuck waiting weeks for corrections. You\'re not sure what documents you need or how to structure your Operating Agreement.',
    },
  ];

  // Solution section content
  const solutionFeatures = [
    'Complete state filing with Texas Secretary of State',
    'EIN (Employer Identification Number) obtained for you',
    'Operating Agreement included',
    'First-year Registered Agent service',
    'Banking packet and compliance checklist',
    '48-hour filing guarantee',
  ];

  // Benefits section content
  const benefits = [
    {
      title: 'Launch Your Practice in 48 Hours',
      description:
        'While competitors take 2-3 weeks, we submit your filing in 48 hours so you can start seeing clients faster. No waiting weeks or months.',
    },
    {
      title: 'Keep Your Home and Savings Protected',
      description:
        'A PLLC separates your personal assets from your practice. If something goes wrong, your home, savings, and retirement accounts stay protected.',
    },
    {
      title: 'Skip 10+ Hours of Paperwork',
      description:
        'We handle all the paperwork and filings. Save 10+ hours of research and form-filling—time you can spend building your practice instead.',
    },
    {
      title: 'Stay Compliant',
      description:
        'We know the specific requirements for therapist PLLCs in Texas. Your formation meets all state and board requirements, so you stay compliant.',
    },
    {
      title: 'Clear, Transparent Pricing',
      description:
        'One price covers everything. No surprise fees. No upsells. You know exactly what you\'re paying upfront—$749 all-inclusive.',
    },
    {
      title: 'Expert Support',
      description:
        'Our team specializes in therapist PLLC formations. We understand your profession\'s unique needs and requirements, so you get expert guidance.',
    },
    {
      title: 'Satisfaction Guarantee',
      description:
        'If we make an error on our end, we\'ll fix it at no cost or provide a full refund. We stand behind our work and will make things right.',
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
      date: 'Formed March 2024',
    },
    {
      name: 'Michael R.',
      profession: 'Marriage and Family Therapist',
      rating: 5,
      text: 'The price was clear from the start - no surprises. The Operating Agreement was tailored for therapists, which gave me confidence everything was done right.',
      location: 'Houston, TX',
      date: 'Formed February 2024',
    },
    {
      name: 'Jennifer L.',
      profession: 'Clinical Social Worker',
      rating: 5,
      text: 'I needed my PLLC fast to start a new practice. They filed it in 48 hours exactly as promised. Received my EIN in 36 hours. The whole process was stress-free.',
      location: 'Dallas, TX',
      date: 'Formed January 2024',
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
        'Compliance checklist',
        '48-hour filing guarantee',
      ],
      highlighted: true,
      ctaText: 'Start My Formation - $749',
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
      ctaText: 'Start My Formation - $949',
      ctaLink: '/checkout?profession=therapist&tier=premium',
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
      question: 'What\'s the difference between a PLLC and an LLC?',
      answer:
        'A PLLC (Professional Limited Liability Company) is specifically for licensed professionals like therapists. It provides the same liability protection as an LLC but is designed for your profession. In Texas, therapists must form a PLLC, not a regular LLC.',
    },
    {
      question: 'How long does PLLC formation take?',
      answer:
        'We submit your filing within 48 business hours after you complete your order. You\'ll receive your complete packet with filing confirmation, EIN, and all documents within that timeframe.',
    },
    {
      question: 'What\'s included in the $749 price?',
      answer:
        'Everything you need: Texas Form 206 filing ($300 state fee included), EIN issuance, Operating Agreement, first-year Registered Agent service, banking packet, and compliance checklist. No hidden fees.',
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
        'Yes, but our Operating Agreement includes all necessary clauses. It saves you time and ensures compliance.',
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
      <ProblemSection profession="Therapist" problems={problems} headline="Why Most Therapists Struggle with PLLC Formation" />
      
      {/* Profession-Specific Content Section */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Texas Therapists Need a PLLC, Not an LLC
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If you're a Licensed Professional Counselor (LPC), Licensed Marriage and Family Therapist (LMFT), Licensed Clinical Social Worker (LCSW), or another licensed mental health professional in Texas, you must form a Professional Limited Liability Company (PLLC), not a regular LLC. This isn't optional—it's required by Texas law for licensed professionals.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A PLLC provides the same liability protection as an LLC, but it's specifically designed for licensed professionals. When you form a PLLC, you protect your personal assets—your home, savings, and retirement accounts—from business liabilities. If a client files a complaint or lawsuit, your personal assets remain protected. However, malpractice claims against your professional services are not protected by the PLLC structure, which is why professional liability insurance remains essential.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Texas requires all licensed mental health professionals to form a PLLC if they want to practice under a business entity. The Texas State Board of Examiners of Professional Counselors (TSBEPC), Texas State Board of Examiners of Marriage and Family Therapists (TSBEMFT), and Texas State Board of Social Worker Examiners (TSBSWE) all require proper entity formation before you can practice under a business name.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              What Makes Our Therapist PLLC Formation Different
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We specialize in PLLC formation for therapists and mental health professionals. We handle all the paperwork and filings, ensuring your formation meets Texas requirements and your licensing board's expectations. Our Operating Agreement includes all necessary clauses to get your practice started.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Board Filing Requirements for Texas Therapists
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              After your PLLC is formed with the Texas Secretary of State, you'll need to file with your licensing board. The filing sequence matters:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Form your PLLC</strong> with the Texas Secretary of State (we handle this)</li>
              <li><strong>Obtain your EIN</strong> from the IRS (we handle this)</li>
              <li><strong>File with your licensing board</strong> (TSBEPC for LPCs, TSBEMFT for LMFTs, TSBSWE for LCSWs)</li>
              <li><strong>Update your board registration</strong> to reflect your PLLC entity</li>
            </ol>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our Complete package includes guidance for board filings, and our Premium package includes board filing assistance. We understand the specific requirements for each licensing board and ensure your formation documents align with board expectations.
            </p>
          </div>
        </div>
      </section>

      <SolutionSection
        profession="Therapist"
        features={solutionFeatures}
      />
      <BenefitsSection profession="Therapist" benefits={benefits} />
      <HowItWorks steps={steps} />
      
      {/* Additional Profession-Specific Content */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Common Questions About Therapist PLLC Formation in Texas
            </h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Can I practice under my own name without a PLLC?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Yes, you can practice as a sole proprietor under your own name without forming a PLLC. However, this means you have no liability protection—your personal assets are at risk if something goes wrong. Most therapists choose to form a PLLC to protect their personal assets and to practice under a business name.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              What if I'm part of a group practice?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If you're joining an existing group practice, you typically don't need to form your own PLLC—you'll be an employee or contractor of the existing practice. However, if you're starting a new group practice with other therapists, you'll need a multi-member PLLC with a properly structured Operating Agreement that addresses profit sharing, decision-making, and what happens if a member leaves.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Do I need a PLLC if I'm an associate-licensed therapist?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Associate-licensed therapists (LPC-Associate, LMFT-Associate, LMSW) can form a PLLC, but they must have a supervisor who is also a member or manager of the PLLC. The Operating Agreement must clearly outline the supervision relationship and ensure compliance with board requirements. We can help structure this properly.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              What about insurance credentialing?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Once your PLLC is formed, you'll need to credential your PLLC with insurance panels if you plan to accept insurance. This process requires your EIN, formation documents, and board registration. Our banking packet includes all the documents you'll need for insurance credentialing, making the process smoother.
            </p>
          </div>
        </div>
      </section>
      
      <SocialProof testimonials={testimonials} />
      <PricingTable tiers={pricingTiers} profession="Therapist" />
      <Guarantee guarantees={guarantees} />
      <FAQ items={faqItems} />
      <FinalCTA
        profession="Therapist"
        ctaLink="/checkout?profession=therapist"
        ctaText="Get Started"
      />
    </>
  );
}

