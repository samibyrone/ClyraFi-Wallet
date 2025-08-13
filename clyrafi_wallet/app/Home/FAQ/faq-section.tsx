import { faqs } from "@/app/Home/FAQ/faq-stats"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/component/ui/accordion"

export default function FAQSection() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Frequently asked questions</h2>
          <p className="text-lg text-gray-600">Everything you need to know about ClyariFi and our platform</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
