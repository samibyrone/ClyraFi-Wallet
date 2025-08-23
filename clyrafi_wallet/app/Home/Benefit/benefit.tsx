import { benefits } from "./benefit-stats"

export default function BenefitsSection() {
  return (
    <section className="bg-purple-50 px-4 py-12 sm:py-20 md:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-16 text-center">
          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-4xl font-bold text-gray-900 md:text-5xl">Control every transaction, every wallet</h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Everything you need to build, launch, and scale your payment infrastructure
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow border-none">
              <div className="mb-4 sm:mb-6 inline-flex h-12 sm:h-14 w-12 sm:w-14 items-center justify-center rounded-xl bg-purple-100">
                <benefit.icon className="h-6 sm:h-7 w-6 sm:w-7 text-purple-700" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-xl font-semibold text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
