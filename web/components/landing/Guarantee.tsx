export interface GuaranteeProps {
  headline?: string;
  description?: string;
  guarantees: Array<{
    title: string;
    description: string;
    icon?: React.ReactNode;
  }>;
}

export default function Guarantee({
  headline = 'Our Guarantees',
  description,
  guarantees,
}: GuaranteeProps) {
  const defaultDescription =
    'We stand behind our service with these guarantees:';

  return (
    <section className="bg-[#f88b00] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {headline}
          </h2>
          <p className="text-lg text-orange-50 max-w-2xl mx-auto">
            {description || defaultDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-start gap-4">
                {guarantee.icon || (
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {guarantee.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{guarantee.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

