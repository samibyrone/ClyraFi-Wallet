import Link from "next/link";
import Image from "next/image";
import pics from "@/public/sample-pics.png";
import { Button } from "@/components/ui/button";
import { features } from "@/app/Home/Features/features-stats";

export default function FeaturesSection() {
  return (
    <section className="px-4 py-12 sm:py-20 md:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl mb-20 sm:mb-30">
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 sm:mb-12 text-2xl sm:text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
              Made for African teams building modern payment flows
            </h2>

            <div className="space-y-6 sm:space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="border-l-2 border-purple-700 pl-4 sm:pl-8">
                  <h3 className="mb-2 sm:mb-3 text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
            <Link href="/Dashboard">
              <Button className="mt-8 sm:mt-12 h-10 sm:h-12 bg-gray-900 px-6 sm:px-8 text-white hover:bg-gray-800">Start building</Button>
            </Link>
          </div>

          <div className="flex justify-center">
            <Image src={pics} alt="image" className="h-48 sm:h-200 w-full max-w-xs sm:max-w-lg rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-sm" />
          </div>
        </div>
      </div>
    </section>
  );
};
