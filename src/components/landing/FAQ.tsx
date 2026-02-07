import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What exactly is a slab leak in a Dallas home?",
    answer: "A slab leak occurs when a water or sewer pipe beneath your concrete foundation fails. In Dallas, this is often caused by the heavy clay soil shifting the house, which can snap or corrode older copper and cast-iron lines."
  },
  {
    question: "How do you detect a slab leak without breaking my Dallas foundation?",
    answer: "We use non-destructive electronic sonar and acoustic technology to 'hear' the leak. We also use thermal imaging to identify heat signatures from hot water leaks and gas-based tracer tests to find exact break points under the concrete."
  },
  {
    question: "Will my Dallas homeowner's insurance cover slab leak repair?",
    answer: "Usually, Dallas insurance policies cover the 'access' and 'reconstruction' (getting to the pipe and fixing the floor), but may not cover the actual pipe repair itself. We provide detailed documentation to help you maximize your claim."
  },
  {
    question: "How long does it take to detect a slab leak in Dallas?",
    answer: "A professional detection typically takes 1.5 to 3 hours. We provide a full report on-site and can often begin repairs the same day to prevent further foundation damage."
  },
  {
    question: "Is it better to repair the slab leak or re-route the pipe?",
    answer: "In Dallas homes with multiple leaks or older copper plumbing, re-routing (running new lines through walls/attics) is often the superior choice. It eliminates the risk of future leaks in that line permanently. We evaluate both options for every customer."
  },
  {
    question: "What are the first signs of a slab leak to watch for in Dallas?",
    answer: "Watch for hot spots on the floor, a running water sound when nothing is on, cracks appearing in your drywall or tiles, or a significant jump in your Dallas utility bill."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Dallas Slab Leak FAQ
          </h2>
          <p className="text-lg text-slate-600">
            Expert answers to the most common questions about foundation leaks in North Texas.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-xl px-4 bg-white shadow-sm overflow-hidden">
              <AccordionTrigger className="text-left font-heading font-bold text-slate-900 hover:text-blue-600 py-6 transition-colors font-semibold leading-relaxed">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
