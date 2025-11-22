import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import CookieConsent from "@/components/CookieConsent";
import { themeClasses } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone, FileText, Calculator, Gavel, AlertTriangle } from "lucide-react";

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
          className={`py-20 ${themeClasses.bg.secondary}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold ${themeClasses.text.primary} mb-6 font-noto-serif`}>
                Business Debt Collection Services UK
              </h2>
              <p className={`text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto font-noto-sans font-light mb-4`}>
                Comprehensive commercial debt recovery UK solutions across London, Manchester, Birmingham, 
                Glasgow, and Edinburgh. From initial unpaid invoice recovery UK to legal enforcement, our 
                debt collection agency UK handles it all.
              </p>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-4xl mx-auto font-noto-sans`}>
                Our professional debt collection services are fully compliant with UK legislation and industry 
                standards. We specialise in B2B debt recovery, helping businesses across all sectors recover 
                outstanding invoices efficiently and ethically. With over 98% success rate and average recovery 
                times of just 14 days, we're the trusted choice for businesses nationwide.
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
                    <div className={`${themeClasses.bg.primary} rounded-xl border ${themeClasses.border.primary} p-8 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-3`}>
                            {service.title}
                          </h3>
                          <p className={`${themeClasses.text.secondary} leading-relaxed`}>
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

        {/* Our Recovery Process - 4-step infographic */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`py-20 ${themeClasses.bg.primary}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold ${themeClasses.text.primary} mb-6 font-noto-serif`}>
                Our Recovery Process
              </h2>
              <p className={`text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto font-noto-sans font-light`}>
                A proven 4-step approach that maximizes recovery rates while preserving valuable business relationships. 
                Our systematic methodology ensures optimal results for every debt recovery case.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg font-noto-serif">
                      {step.step}
                    </span>
                  </div>
                  <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-4 font-noto-serif`}>
                    {step.title}
                  </h3>
                  <p className={`${themeClasses.text.secondary} leading-relaxed font-noto-sans`}>
                    {step.description}
                  </p>
                  {index < 3 && (
                    <ArrowRight className="hidden lg:block absolute top-8 -right-4 w-6 h-6 text-blue-300" />
                  )}
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 transition-colors duration-200 font-noto-sans"
              >
                Start Your Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </motion.section>

        <Testimonials />

        {/* Still Have Questions? CTA Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`py-20 ${themeClasses.bg.secondary}`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className={`text-4xl font-bold ${themeClasses.text.primary} mb-6 font-noto-serif`}>
              Still Have Questions?
            </h2>
            <p className={`text-xl ${themeClasses.text.secondary} mb-8 font-noto-sans`}>
              Get answers from our commercial debt recovery specialists. Free consultation with no obligation. 
              Speak to our team today to discuss your specific debt recovery requirements and discover how we 
              can help recover your outstanding invoices.
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
                    className={`${themeClasses.bg.primary} rounded-xl p-6 border ${themeClasses.border.primary}`}
                  >
                    <IconComponent className={`w-8 h-8 ${themeClasses.text.accent} mx-auto mb-4`} />
                    <h3 className={`text-lg font-bold ${themeClasses.text.primary} mb-2 font-noto-serif`}>
                      {item.title}
                    </h3>
                    <p className={`${themeClasses.text.secondary} font-noto-sans text-sm`}>
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
                className={`${themeClasses.button.primary} font-semibold px-8 py-4 transition-colors duration-200 font-noto-sans`}
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Your Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <div className="flex flex-col text-center">
                <a 
                  href="tel:+441513290946"
                  className={`text-2xl font-bold ${themeClasses.text.accent} hover:underline font-noto-serif`}
                >
                  0151 329 0946
                </a>
                <span className={`text-sm ${themeClasses.text.secondary} font-noto-sans`}>
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
