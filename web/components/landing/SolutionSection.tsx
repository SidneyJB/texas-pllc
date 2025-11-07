export interface SolutionSectionProps {
  profession: string;
  headline?: string;
  description?: string;
  features: string[];
}

export default function SolutionSection({
  profession,
  headline,
  description,
  features,
}: SolutionSectionProps) {
  const defaultHeadline = `We Handle Everything for Your ${profession} PLLC`;
  const defaultDescription = `You focus on your practice. We handle all the paperwork, filings, and compliance details.`;

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {headline || defaultHeadline}
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {description || defaultDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-orange-50 p-8 rounded-lg border border-orange-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#f88b00] rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 font-medium leading-relaxed">{feature}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

