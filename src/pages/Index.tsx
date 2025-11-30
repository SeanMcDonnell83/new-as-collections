import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/Hero";
import { IndustryCards } from "@/components/IndustryCards";
import { HorizontalStepper } from "@/components/HorizontalStepper";
import GoogleReviewWall from "@/components/GoogleReviewWall";
import CookieConsent from "@/components/CookieConsent";
import { themeClasses } from "@/contexts/ThemeContext";
import { useThemeSafe } from "@/hooks/useThemeSafe";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  FileText,
  Calculator,
  Gavel,
  AlertTriangle,
  ChevronDown,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const Index = () => {
  const { theme } = useThemeSafe();

  const scrollToContact = () => {
    window.location.href = "/contact";
  };

  const services = [
    {
      icon: FileText,
      title: "Commercial B2B Debt Collection",
      description:
        "Specialised commercial debt recovery services across the UK, on a no win, no fee basis for Construction, Food & Drink and Oil & Gas businesses.",
      href: "/services/commercial-debt-recovery",
    },
    {
      icon: Calculator,
      title: "International Debt Recovery",
      description:
        "Cross-border commercial debt recovery UK specialists with global reach and expertise in international business debt collection.",
      href: "/services/international-debt-collection",
    },
    {
      icon: Gavel,
      title: "Debtor Tracing & Legal Action",
      description:
        "Advanced debtor tracing combined with court claims and legal enforcement across all UK jurisdictions.",
      href: "/services/debtor-tracing",
    },
    {
      icon: AlertTriangle,
      title: "Credit Control & Insolvency",
      description:
        "Complete credit control outsourcing and specialist insolvency services for complex commercial situations.",
      href: "/services/credit-control-insolvency",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assessment",
      description:
        "Free consultation and comprehensive debt analysis to determine the best recovery strategy for your specific situation.",
    },
    {
      step: "02",
      title: "Strategy",
      description:
        "Tailored recovery plan development based on debtor profile, debt type, and your business relationship requirements.",
    },
    {
      step: "03",
      title: "Action",
      description:
        "Professional debt recovery execution using proven methodologies whilst preserving valuable client relationships.",
    },
    {
      step: "04",
      title: "Resolution",
      description:
        "Successful debt collection with comprehensive reporting and ongoing account management support.",
    },
  ];

  return (
    <div
      className={`min-h-screen pt-8 ${theme === "light" ? "bg-slate-50" : "bg-slate-950"}`}
    >
      <Helmet>
        <title>
          A.S. Collections | No Win No Fee Commercial Debt Recovery UK
        </title>
        <meta
          name="description"
          content="UK's leading commercial debt recovery specialists. No win no fee debt collection services. 98% success rate, 14-day average recovery. Free consultation."
        />
        <meta
          name="keywords"
          content="commercial debt recovery UK, business debt collection services, debt collection agency UK, no win no fee debt collection, B2B debt recovery"
        />
        <link rel="canonical" href="https://ascollections.co.uk/" />
        <meta
          property="og:title"
          content="A.S. Collections | No Win No Fee Commercial Debt Recovery UK"
        />
        <meta
          property="og:description"
          content="UK's leading commercial debt recovery specialists. 98% success rate, 14-day average recovery."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ascollections.co.uk/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "A.S. Collections",
            "alternateName": "AS Collections",
            "description": "UK's leading commercial debt recovery specialists. No win no fee debt collection services. 98% success rate, 14-day average recovery.",
            "url": "https://ascollections.co.uk",
            "logo": "https://ascollections.co.uk/as-collections-logo.png",
            "image": "https://ascollections.co.uk/as-collections-logo.png",
            "telephone": "+441513290946",
            "priceRange": "No Win No Fee",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Liverpool",
              "addressRegion": "Merseyside",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "addressCountry": "GB"
            },
            "areaServed": {
              "@type": "Country",
              "name": "United Kingdom"
            },
            "serviceType": ["Commercial Debt Recovery", "Business Debt Collection", "International Debt Recovery", "Debtor Tracing", "Credit Control", "Insolvency Services"],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "127"
            }
          })}
        </script>
      </Helmet>

      <Header />
      <main>
        <Hero />

        {/* Wave Divider: Hero → Services */}
        <div className="relative -mt-6">
          <svg
            className="w-full h-16 text-white dark:text-slate-950"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,224L80,197.3C160,171,320,117,480,96C640,75,800,85,960,101.3C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
        </div>

        {/* Business Debt Collection Services UK - Bento Grid Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`py-24 ${theme === "light" ? "bg-white" : "bg-slate-950"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2
                className={`text-4xl md:text-5xl font-bold ${themeClasses.text.primary} mb-6 font-montserrat font-800`}
              >
                Commercial Debt Recovery Services UK
              </h2>
              <p
                className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto font-inter leading-relaxed`}
              >
                Professional debt collection specialists serving London,
                Manchester, Birmingham, Glasgow, and Edinburgh with proven
                expertise across all sectors.
              </p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const isPrimary = index === 0;
                const spanClass = isPrimary
                  ? "lg:col-span-2 lg:row-span-2"
                  : "lg:col-span-1";
                const cardBackground =
                  theme === "light"
                    ? isPrimary
                      ? "bg-gradient-to-br from-white to-slate-50"
                      : "bg-white"
                    : "bg-slate-900";

                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`group ${spanClass}`}
                  >
                    <div
                      className={`${cardBackground} rounded-2xl border ${
                        theme === "light"
                          ? "border-slate-200"
                          : "border-slate-800"
                      } p-8 h-full flex flex-col hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                    >
                      <div className="flex flex-col h-full">
                        <div className="w-12 h-12 rounded-full bg-blue-600/10 text-blue-700 dark:text-blue-300 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mb-4">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <h3
                          className={`text-lg font-bold ${themeClasses.text.primary} mb-3 font-montserrat font-700`}
                        >
                          {service.title}
                        </h3>
                        <p
                          className={`${themeClasses.text.secondary} leading-relaxed font-inter text-sm flex-grow mb-4`}
                        >
                          {service.description}
                        </p>
                        {service.href && (
                          <Link
                            to={service.href}
                            className="mt-auto inline-flex items-center text-sm font-semibold text-blue-700 dark:text-blue-300 group/link"
                          >
                            <span className="group-hover/link:translate-x-0.5 transition-transform">
                              Learn more
                            </span>
                            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        <IndustryCards />

        {/* Wave Divider: Industries → Reviews */}
        <div className="relative -mt-8">
          <svg
            className="w-full h-16 text-white dark:text-slate-900"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,64L80,80C160,96,320,128,480,133.3C640,139,800,117,960,96C1120,75,1280,53,1360,42.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
        </div>

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
          className={`${theme === "light" ? "bg-slate-50" : "bg-slate-950"} -mt-8 pt-8 pb-12`}
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

        <GoogleReviewWall />

        {/* Top 5 FAQs Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`py-24 ${theme === "light" ? "bg-slate-50" : "bg-slate-900"}`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className={`text-4xl md:text-5xl font-bold ${themeClasses.text.primary} mb-6 font-montserrat font-800`}
              >
                Frequently Asked Questions
              </h2>
              <p
                className={`text-lg ${themeClasses.text.secondary} max-w-2xl mx-auto font-inter leading-relaxed`}
              >
                Find answers to common questions about our commercial debt
                recovery services and processes.
              </p>
            </div>

            <div
              className={`${theme === "light" ? "bg-slate-50" : "bg-slate-800"} rounded-2xl p-8 border ${theme === "light" ? "border-slate-200" : "border-slate-700"}`}
            >
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "How does the No Win, No Fee model work?",
                    answer:
                      "Under our No Win, No Fee guarantee, we only charge you when we successfully recover your debt. If we cannot collect, you pay nothing. This aligns our success with yours and removes the financial risk from pursuing debt recovery.",
                  },
                  {
                    question: "What is your success rate?",
                    answer:
                      "We maintain a 98% success rate across all sectors and debt types. This is achieved through our combination of cutting-edge technology, expert knowledge, and tailored recovery strategies for each unique situation.",
                  },
                  {
                    question:
                      "How long does the debt recovery process typically take?",
                    answer:
                      "Most debts are recovered within 14 days on average. However, timescales vary depending on the complexity of the case, the debtor's circumstances, and whether legal action is required. We provide regular updates throughout the process.",
                  },
                  {
                    question:
                      "Will pursuing debt recovery damage my client relationships?",
                    answer:
                      "We specialise in ethical debt recovery that preserves business relationships. Our professional approach maintains your reputation whilst recovering the debt. We handle all communication and negotiations, protecting your client relationships.",
                  },
                  {
                    question: "What industries do you specialise in?",
                    answer:
                      "We have sector-specific expertise across Construction, Food & Drink, Oil & Gas, Manufacturing, Recruitment, Logistics, Technology, and many more. Our industry knowledge enables us to achieve higher success rates and understand sector-specific challenges.",
                  },
                ].map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b last:border-0"
                  >
                    <AccordionTrigger
                      className={`py-4 hover:no-underline group ${themeClasses.text.primary} font-montserrat font-700 text-left`}
                    >
                      <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pb-4 ${themeClasses.text.secondary} font-inter leading-relaxed`}
                    >
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
          className={`py-24 ${theme === "light" ? "bg-slate-50" : "bg-slate-950"}`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className={`text-4xl md:text-5xl font-bold ${themeClasses.text.primary} mb-6 font-montserrat font-800`}
            >
              Still Have Questions?
            </h2>
            <p
              className={`text-lg ${themeClasses.text.secondary} mb-4 leading-relaxed font-inter`}
            >
              Get answers from our commercial debt recovery specialists.
            </p>
            <p
              className={`text-lg ${themeClasses.text.secondary} mb-8 leading-relaxed font-inter`}
            >
              Free consultation with no obligation. Speak to our team today to
              discuss your specific debt recovery requirements and discover how
              we can help.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Phone,
                  title: "Free Consultation",
                  desc: "No obligation discussion about your needs",
                },
                {
                  icon: CheckCircle,
                  title: "No Win, No Fee",
                  desc: "We only get paid when you get paid",
                },
                {
                  icon: ArrowRight,
                  title: "Quick Response",
                  desc: "Same-day response to all enquiries",
                },
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
                    <IconComponent
                      className={`w-8 h-8 ${themeClasses.text.accent} mx-auto mb-4`}
                    />
                    <h3
                      className={`text-lg font-bold ${themeClasses.text.primary} mb-2 font-montserrat font-700`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`${themeClasses.text.secondary} font-inter text-sm leading-relaxed`}
                    >
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
                <span
                  className={`text-sm ${themeClasses.text.secondary} font-inter`}
                >
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
