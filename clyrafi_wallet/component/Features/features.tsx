import { Button } from "@/component/ui/Button";
import { features } from "@/component/Features/features-stats";

export default function FeaturesSection() {
  return (
    <section className="bg-gray-50 px-4 py-20 md:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-12 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Made for African teams building modern payment flows
            </h2>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="border-l-4 border-purple-500 pl-8">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <Button className="mt-12 h-12 bg-gray-900 px-8 text-white hover:bg-gray-800">Start building</Button>
          </div>

          <div className="flex justify-center">
            <div className="h-200 w-full max-w-lg rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-sm"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
