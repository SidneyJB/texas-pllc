import type { Metadata } from 'next';
import Link from 'next/link';
import { CTALink } from '@/components/CTALink';
import { Shield, ClipboardList, FileCheck2, CheckCircle, ArrowRight } from 'lucide-react';

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

const PRICE = 749;

const ATTORNEY_FAQ = [
  {
    question: 'Do attorneys need State Bar approval before forming a PLLC?',
      answer:
      'In Texas, you form your PLLC with the Secretary of State first, then update your State Bar registration. We handle the state filing and provide guidance for State Bar updates. The sequence matters: state filing → EIN → State Bar update.',
    },
    {
    question: 'Who can own or manage an attorney PLLC in Texas?',
      answer:
      'Ownership and control are generally limited to licensed attorneys who can lawfully provide legal services. We help you structure members/managers to align with Texas rules and State Bar requirements.',
    },
    {
    question: 'Can I include non-attorney staff in my PLLC?',
      answer:
      'While support staff may work with your practice, PLLC ownership and professional control are generally restricted to licensed attorneys. We structure your documents to reflect compliant governance.',
    },
    {
    question: 'What naming issues commonly delay attorney PLLC approvals?',
      answer:
      'Names must include "PLLC" or "Professional Limited Liability Company", comply with State Bar advertising rules, and reflect your actual legal scope. We provide compliant options and conduct name screening to avoid state objections.',
    },
    {
    question: 'Is the 48-hour filing guarantee included in the price?',
      answer:
      `Yes. We submit your filing within 48 business hours, or you get a $100 credit automatically. It's fully included in the $${PRICE} flat fee — no surprise add-ons.`,
    },
    {
    question: 'What documents will I get for banking, IOLTA setup, and leasing?',
      answer:
      'You receive EIN confirmation, filed Form 206, Operating Agreement, and Registered Agent information — the standard bank-ready set. These are also commonly requested for IOLTA account setup and landlords.',
    },
    {
    question: 'Can one attorney PLLC operate multiple locations in Texas?',
      answer:
      'Yes. Many law firms add locations as they grow. We set up your formation to support expansion and explain any State Bar notification requirements if you later add offices in different areas.',
    },
    {
    question: 'How long does attorney PLLC formation usually take?',
      answer:
      'We submit your filing within 48 business hours after you complete your order. You\'ll receive your complete packet with filing confirmation, EIN, and all documents within that timeframe.',
  },
];

export default function AttorneyLandingPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#f88b00]/5 via-white to-white py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Form your <span className="text-[#f88b00]">Attorney PLLC</span> in Texas — compliant, clear, and built for law practice
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Built for Texas attorneys launching or growing a law practice. We handle state filing, guide compliant naming that meets State Bar advertising rules,
            file precisely with the Secretary of State, and deliver a bank-ready package —
            all for <strong>${PRICE}</strong>. No hidden fees.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-600">
            <span className="rounded-full border border-gray-300 px-3 py-1">Texas Secretary of State Filing</span>
            <span className="rounded-full border border-gray-300 px-3 py-1">EIN Included</span>
            <span className="rounded-full border border-gray-300 px-3 py-1">Operating Agreement</span>
            <span className="rounded-full border border-gray-300 px-3 py-1">48-Hour Filing</span>
            <span className="rounded-full border border-gray-300 px-3 py-1">State Bar Compliant</span>
          </div>

          <div className="mt-10 flex justify-center">
            <CTALink
              href="/checkout?profession=attorney"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-[#f88b00] text-white hover:bg-[#d97706] h-10 px-6"
              profession="Attorney"
              price={PRICE}
              ctaText="Start your Attorney PLLC"
              location="attorney-hero"
              trackAsCheckout={true}
            >
              Start your Attorney PLLC — ${PRICE}
              <ArrowRight className="ml-2 h-4 w-4" />
            </CTALink>
          </div>
          <p className="mt-3 text-sm text-gray-600">Licensed professionals only • Secure checkout • No upsells</p>
        </div>
      </section>

      {/* WHY IT'S DIFFERENT FOR ATTORNEYS */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Built for Texas Law Practices</h2>
            <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
              Texas rules for legal entities are specific — from state filing to State Bar compliance and bank documentation.
              We form attorney PLLCs that pass review, support solo and group practices, and scale with you as you add attorneys or locations.
            </p>
            <p className="mt-6 text-base text-gray-700 max-w-3xl mx-auto">
              Expect a structured, transparent process: name vetting → state filing → EIN → State Bar update guidance → bank-ready package.
              We explain each step in plain English and send timely updates so you always know what's next.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-5 w-5 text-[#f88b00]" />
                <h3 className="text-lg font-semibold text-gray-900">State Filing, Done Right</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                We prepare your Form 206 submission — scope-accurate purpose language and ownership that aligns with law practice rules.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <ClipboardList className="h-5 w-5 text-[#f88b00]" />
                <h3 className="text-lg font-semibold text-gray-900">Naming That Clears Review</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                We help you avoid restricted terms, misleading claims, and designator mistakes. Names must include "PLLC" and comply with State Bar advertising rules.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FileCheck2 className="h-5 w-5 text-[#f88b00]" />
                <h3 className="text-lg font-semibold text-gray-900">Accurate Filing & Documents</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Form 206 written specifically for attorneys and filed correctly with the Texas Secretary of State — with plain-English updates at each milestone.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-5 w-5 text-[#f88b00]" />
                <h3 className="text-lg font-semibold text-gray-900">State Bar Compliance</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                We ensure your formation documents align with State Bar requirements and provide guidance for IOLTA setup and bar updates after formation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU RECEIVE */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to open and grow your law practice</h2>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            A complete, bank-ready formation package designed for IOLTA setup, leasing, and business operations.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4 justify-center">
                <FileCheck2 className="h-5 w-5 text-[#f88b00]" />
                <h3 className="text-lg font-semibold text-gray-900">Full Formation</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Form 206 preparation, state filing, and EIN — end-to-end, without templates or guesswork.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4 justify-center">
                <ClipboardList className="h-5 w-5 text-[#f88b00]" />
                <h3 className="text-lg font-semibold text-gray-900">Operating Agreement</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                A signature-ready Operating Agreement for solo or group law practices — ready for lender and landlord review.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4 justify-center">
                <CheckCircle className="h-5 w-5 text-[#f88b00]" />
                <h3 className="text-lg font-semibold text-gray-900">Bank-Ready Package</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                EIN confirmation, filed Form 206, Operating Agreement, and Registered Agent information — exactly what most banks request for IOLTA setup.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <CTALink
              href="/checkout?profession=attorney"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-[#f88b00] text-white hover:bg-[#d97706] h-10 px-6"
              profession="Attorney"
              price={PRICE}
              ctaText="Start your Attorney PLLC"
              location="attorney-what-you-receive"
              trackAsCheckout={true}
            >
              Start your Attorney PLLC — ${PRICE}
            </CTALink>
          </div>
        </div>
      </section>

      {/* PROFESSION-SPECIFIC FAQ */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Attorney PLLC FAQs</h2>
            <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
              Clear answers to common questions attorneys ask about forming a Professional Limited Liability Company in Texas.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {ATTORNEY_FAQ.map((item) => (
              <div key={item.question} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{item.question}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <CTALink
              href="/checkout?profession=attorney"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-[#f88b00] text-white hover:bg-[#d97706] h-10 px-6"
              profession="Attorney"
              price={PRICE}
              ctaText="Start your Attorney PLLC"
              location="attorney-faq"
              trackAsCheckout={true}
            >
              Start your Attorney PLLC — ${PRICE}
            </CTALink>
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">This is general information, not legal advice.</p>
        </div>
      </section>
      
      {/* TRUST & CTA */}
      <section className="bg-gray-100 py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We understand Texas law practices</h2>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            From state filing to EIN and bank-ready documents, our process is built for attorneys — solo practice, group practice,
            or multi-location growth.
          </p>
          <p className="mt-6 text-gray-700 max-w-2xl mx-auto">
            We're based in Texas and actually answer questions. No scripts. No bots. Just experienced help for licensed professionals.
          </p>

          <div className="mt-10 flex justify-center">
            <CTALink
              href="/checkout?profession=attorney"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-[#f88b00] text-white hover:bg-[#d97706] h-10 px-6"
        profession="Attorney"
              price={PRICE}
              ctaText="Start now"
              location="attorney-final-cta"
              trackAsCheckout={true}
            >
              Start now — ${PRICE}
            </CTALink>
          </div>
          <p className="mt-4 text-sm text-gray-600">We are not a law firm and do not provide legal advice.</p>
        </div>
      </section>
    </>
  );
}
