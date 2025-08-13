import { benefits } from "./benefit-stats"

export default function BenefitsSection() {
  return (
    <section className="bg-purple-50 px-4 py-20 md:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Control every transaction, every wallet</h2>
          <p className="text-xl text-gray-600">
            Everything you need to build, launch, and scale your payment infrastructure
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100">
                <benefit.icon className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
