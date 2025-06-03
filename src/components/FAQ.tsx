import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is no win no fee debt collection UK?",
      answer:
        "No win no fee debt collection means you only pay our fees when we successfully recover your debt. There are no upfront costs, making it a risk-free commercial debt recovery solution for UK businesses.",
    },
    {
      question: "How quickly can you recover commercial debts?",
      answer:
        "We typically recover debts within 7-14 days using our proven methodology. Our streamlined approach and advanced technology enables faster results than traditional debt collection agencies.",
    },
    {
      question:
        "Do you cover London, Manchester, Birmingham and other UK cities?",
      answer:
        "Yes, we provide commercial debt recovery services across the entire UK, including London, Manchester, Birmingham, Glasgow, Edinburgh, and all other major cities and regions.",
    },
    {
      question: "What types of businesses do you help with debt recovery?",
      answer:
        "We specialise in various industries including Construction, Food & Drink, Oil & Gas, Engineering, Independent Schools, Recruitment, and Shipping/Logistics sectors across the UK.",
    },

    {
      question: "Will debt collection damage my client relationships?",
      answer:
        "No, we use ethical practices specifically designed to preserve your valuable business relationships whilst recovering outstanding debts. Client relationship preservation is a core part of our service.",
    },
    {
      question: "What is your success rate for debt recovery?",
      answer:
        "We maintain an 80%+ success rate across all commercial debt recovery cases. Our expertise and proven methodology makes us one of the best commercial debt collection UK specialists.",
    },
    {
      question: "Do you handle international debt recovery?",
      answer:
        "Yes, we provide international debt recovery services with a global enforcement network, specialising in cross-border commercial debts and multi-currency collections.",
    },
    {
      question: "What legal action can you take for debt recovery?",
      answer:
        "We can pursue County Court claims, High Court enforcement, statutory demands, and insolvency proceedings when necessary. Our legal team handles all court proceedings on your behalf.",
    },
    {
      question: "How do I start the debt recovery process?",
      answer:
        "Simply contact us for a free consultation. We'll assess your case, explain our no win no fee terms, and begin recovery action immediately if you decide to proceed.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Common questions about our no win no fee debt collection UK services
            and commercial debt recovery process.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-slate-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-slate-600 mb-6">
              Speak to one of our commercial debt recovery experts for
              personalised advice.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Get Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
