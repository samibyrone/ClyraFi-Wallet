import { benefits } from "./benefit-stats"

export default function BenefitsSection() {
  return (
    <section className="bg-purple-50 px-4 py-12 md:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:mb-6 md:text-5xl">Control every transaction, every wallet</h2>
          <p className="text-lg text-gray-600 sm:text-xl">
            Everything you need to build, launch, and scale your payment infrastructure
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="rounded-2xl bg-white p-6 shadow-sm sm:p-8 border border-gray-100">
              <div className="mb-4 sm:mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 sm:h-14 sm:w-14">
                <benefit.icon className="h-6 w-6 text-purple-600 sm:h-7 sm:w-7" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 sm:mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
