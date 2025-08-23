import { faqs } from "@/app/Home/FAQ/faq-stats"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/component/ui/accordion"

export default function FAQSection() {
  return (
    <section className="px-4 py-12 sm:py-16 md:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-bold text-gray-900 md:text-4xl">Frequently asked questions</h2>
          <p className="text-base sm:text-lg text-gray-600">Everything you need to know about ClyariFi and our platform</p>
        </div>

        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="rounded-lg shadow-sm px-4 sm:px-6 py-2 sm:py-0">
              <AccordionTrigger className="text-left text-gray-900 font-semibold text-base sm:text-lg py-3">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600 font-medium text-sm sm:text-base pb-3">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
