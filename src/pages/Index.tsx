import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/Hero";
import { IndustryCards } from "@/components/IndustryCards";
import { HorizontalStepper } from "@/components/HorizontalStepper";
import Testimonials from "@/components/Testimonials";
import CookieConsent from "@/components/CookieConsent";
import { themeClasses } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone, FileText, Calculator, Gavel, AlertTriangle, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  const services = [
    {
      icon: FileText,
      title: "Commercial B2B Debt Collection",
      description: "Professional business debt collection services UK wide, specialising in Construction, Food & Drink, Oil & Gas industries.",
    },
    {
      icon: Calculator,
      title: "International Debt Recovery", 
      description: "Cross-border commercial debt recovery UK specialists with global reach and expertise in international business debt collection.",
    },
    {
      icon: Gavel,
      title: "Debtor Tracing & Legal Action",
      description: "Advanced debtor tracing combined with court claims and legal enforcement across all UK jurisdictions.",
    },
    {
      icon: AlertTriangle,
      title: "Credit Control & Insolvency",
      description: "Complete credit control outsourcing and specialist insolvency services for complex commercial situations.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assessment",
      description: "Free consultation and comprehensive debt analysis to determine the best recovery strategy for your specific situation.",
    },
    {
      step: "02", 
      title: "Strategy",
      description: "Tailored recovery plan development based on debtor profile, debt type, and your business relationship requirements.",
    },
    {
      step: "03",
      title: "Action",
      description: "Professional debt recovery execution using proven methodologies whilst preserving valuable client relationships.",
    },
    {
      step: "04",
      title: "Resolution",
      description: "Successful debt collection with comprehensive reporting and ongoing account management support.",
    },
  ];

  return (
    <div className={`min-h-screen ${themeClasses.bg.primary}`}>
      <Helmet>
        <title>Commercial Debt Recovery UK - No Win No Fee | A.S. Collections 2025</title>
        <meta 
          name="description" 
          content="Leading commercial debt recovery UK specialists. No win no fee debt collection services across London, Manchester, Birmingham. 98% success rate. Free consultation." 
        />
        <meta name="keywords" content="commercial debt recovery UK, business debt collection services, debt collection agency UK, no win no fee debt collection, B2B debt recovery specialists" />
        <link rel="canonical" href="https://ascollections.co.uk/" />
      </Helmet>
      
      <Header />
      <main>
        <Hero />

        {/* Business Debt Collection Services UK - Intro Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`py-24 ${themeClasses.bg.secondary}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className={`text-4xl md:text-5xl font-bold ${themeClasses.text.primary} mb-6 font-montserrat font-800`}>
                Business Debt Collection Services UK
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto font-inter leading-relaxed mb-4`}>
                Comprehensive commercial debt recovery UK solutions across London, Manchester, Birmingham, Glasgow, and Edinburgh.
              </p>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto font-inter leading-relaxed mb-4`}>
                From initial unpaid invoice recovery to legal enforcement, our debt collection agency handles it all.
              </p>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto font-inter leading-relaxed`}>
                Our professional debt collection services are fully compliant with UK legislation. With over 98% success rate and average recovery times of just 14 days, we're the trusted choice for businesses nationwide.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="group"
                  >
                    <div className={`${themeClasses.bg.primary} rounded-xl border ${themeClasses.border.primary} p-8 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm`}>
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-lg font-bold ${themeClasses.text.primary} mb-3 font-montserrat font-700`}>
                            {service.title}
                          </h3>
                          <p className={`${themeClasses.text.secondary} leading-relaxed font-inter text-sm`}>
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        <IndustryCards />

        <HorizontalStepper
          steps={processSteps}
          title="Our Recovery Process"
          subtitle="A proven 4-step approach that maximises recovery rates whilst preserving valuable business relationships. Our systematic methodology ensures optimal results for every debt recovery case."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`${themeClasses.bg.primary} -mt-8 pt-8 pb-12`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 transition-colors duration-200 font-inter"
            >
              Start Your Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>

        <Testimonials />

        {/* Top 5 FAQs Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`py-24 ${themeClasses.bg.primary}`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-bold ${themeClasses.text.primary} mb-6 font-montserrat font-800`}>
                Frequently Asked Questions
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-2xl mx-auto font-inter leading-relaxed`}>
                Find answers to common questions about our commercial debt recovery services and processes.
              </p>
            </div>

            <div className={`${themeClasses.bg.secondary} rounded-2xl p-8 border ${themeClasses.border.primary}`}>
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "How does the No Win, No Fee model work?",
                    answer: "Under our No Win, No Fee guarantee, we only charge you when we successfully recover your debt. If we cannot collect, you pay nothing. This aligns our success with yours and removes the financial risk from pursuing debt recovery."
                  },
                  {
                    question: "What is your success rate?",
                    answer: "We maintain a 98% success rate across all sectors and debt types. This is achieved through our combination of cutting-edge technology, expert knowledge, and tailored recovery strategies for each unique situation."
                  },
                  {
                    question: "How long does the debt recovery process typically take?",
                    answer: "Most debts are recovered within 14 days on average. However, timescales vary depending on the complexity of the case, the debtor's circumstances, and whether legal action is required. We provide regular updates throughout the process."
                  },
                  {
                    question: "Will pursuing debt recovery damage my client relationships?",
                    answer: "We specialise in ethical debt recovery that preserves business relationships. Our professional approach maintains your reputation whilst recovering the debt. We handle all communication and negotiations, protecting your client relationships."
                  },
                  {
                    question: "What industries do you specialise in?",
                    answer: "We have sector-specific expertise across Construction, Food & Drink, Oil & Gas, Manufacturing, Recruitment, Logistics, Technology, and many more. Our industry knowledge enables us to achieve higher success rates and understand sector-specific challenges."
                  }
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-0">
                    <AccordionTrigger className={`py-4 hover:no-underline group ${themeClasses.text.primary} font-montserrat font-700 text-left`}>
                      <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className={`pb-4 ${themeClasses.text.secondary} font-inter leading-relaxed`}>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="text-center mt-12">
              <p className={`${themeClasses.text.secondary} mb-6 font-inter`}>
                Can't find the answer you're looking for?
              </p>
              <Button
                onClick={scrollToContact}
                className={`${themeClasses.button.primary} font-semibold px-8 py-4 transition-colors duration-200 font-inter`}
              >
                Contact Our Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </motion.section>

        {/* Still Have Questions? CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`py-24 ${themeClasses.bg.secondary}`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className={`text-4xl md:text-5xl font-bold ${themeClasses.text.primary} mb-6 font-montserrat font-800`}>
              Still Have Questions?
            </h2>
            <p className={`text-lg ${themeClasses.text.secondary} mb-4 leading-relaxed font-inter`}>
              Get answers from our commercial debt recovery specialists.
            </p>
            <p className={`text-lg ${themeClasses.text.secondary} mb-8 leading-relaxed font-inter`}>
              Free consultation with no obligation. Speak to our team today to discuss your specific debt recovery requirements and discover how we can help.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: Phone, title: "Free Consultation", desc: "No obligation discussion about your needs" },
                { icon: CheckCircle, title: "No Win, No Fee", desc: "We only get paid when you get paid" },
                { icon: ArrowRight, title: "Quick Response", desc: "Same-day response to all enquiries" }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`${themeClasses.bg.primary} rounded-xl p-8 border ${themeClasses.border.primary} backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
                  >
                    <IconComponent className={`w-8 h-8 ${themeClasses.text.accent} mx-auto mb-4`} />
                    <h3 className={`text-lg font-bold ${themeClasses.text.primary} mb-2 font-montserrat font-700`}>
                      {item.title}
                    </h3>
                    <p className={`${themeClasses.text.secondary} font-inter text-sm leading-relaxed`}>
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                onClick={scrollToContact}
                size="lg"
                className={`${themeClasses.button.primary} font-semibold px-8 py-4 transition-colors duration-200 font-inter`}
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Your Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <div className="flex flex-col text-center">
                <a
                  href="tel:+441513290946"
                  className={`text-2xl font-bold ${themeClasses.text.accent} hover:underline font-montserrat font-800`}
                >
                  0151 329 0946
                </a>
                <span className={`text-sm ${themeClasses.text.secondary} font-inter`}>
                  Call now for immediate assistance
                </span>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
