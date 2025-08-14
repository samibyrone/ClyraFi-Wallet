import { testimonials } from "./testimonial-stats";
import { Avatar, AvatarFallback, AvatarImage } from "../../../component/ui/avatar";

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 px-4 py-16 md:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-5 text-3xl font-bold text-gray-900 md:text-4xl">What are people saying</h2>
          <p className="text-lg mb-5 text-gray-600">
            Developers love our thorough, well-documented APIs that let you to build everything from simple weekend projects,
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 px-5 py-5">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg bg-white p-8 shadow-sm">
              <blockquote className="mb-6 text-lg text-gray-700">"{testimonial.quote}"</blockquote>
              <div className="flex items-center">
                <Avatar className="mr-4 h-12 w-12 bg-purple-500">
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                  <AvatarFallback>
                    {testimonial.author
                      .split(" ")
                      .map((testimony) => testimony[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            <div className="h-2 w-2 rounded-full bg-purple-500"></div>
            <div className="h-2 w-2 rounded-full bg-gray-300"></div>
            <div className="h-2 w-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
