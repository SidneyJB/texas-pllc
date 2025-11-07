export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface HowItWorksProps {
  steps: Step[];
  headline?: string;
}

export default function HowItWorks({
  steps,
  headline = 'How It Works',
}: HowItWorksProps) {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {headline}
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Get your PLLC formed in three simple steps
          </p>
        </div>

        <div className="relative">
          {/* Connection Line (hidden on mobile) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gray-200">
            <div className="absolute top-0 left-1/3 w-1/3 h-full bg-[#f88b00]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white text-center">
                  {/* Step Number */}
                  <div className="w-20 h-20 bg-[#f88b00] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                    <span className="text-3xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

