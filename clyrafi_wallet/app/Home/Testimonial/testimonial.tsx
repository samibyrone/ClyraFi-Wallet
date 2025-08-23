import { testimonials } from "./testimonial-stats";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 px-4 py-12 sm:py-16 md:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="mb-3 sm:mb-5 text-2xl sm:text-3xl font-bold text-gray-900 md:text-4xl">What are people saying</h2>
          <p className="text-base sm:text-lg mb-5 max-w-2xl text-gray-600 text-center mx-auto">
            Developers love our thorough, well-documented APIs that let you build everything from simple weekend projects.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 px-2 sm:px-5 py-5">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg bg-white p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow border-none">
              <blockquote className="mb-4 sm:mb-6 text-base sm:text-lg text-gray-700">"{testimonial.quote}"</blockquote>
              <div className="flex items-center">
                <Avatar className="mr-3 sm:mr-4 h-10 sm:h-12 w-10 sm:w-12 bg-purple-800">
                  <AvatarImage src={testimonial.Image.src as string} alt={testimonial.author} />
                  <AvatarFallback>
                    {testimonial.author
                      .split(" ")
                      .map((testimony) => testimony[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.author}</div>
                  <div className="text-gray-600 text-xs sm:text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 flex justify-center">
          <div className="flex space-x-1 sm:space-x-2">
            <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-purple-800"></div>
            <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-gray-300"></div>
            <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
