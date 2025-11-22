import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Services from "@/components/Services";
import CookieConsent from "@/components/CookieConsent";
import { themeClasses } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";

const CommercialDebtRecovery = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact-cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const serviceFeatures = [
    {
      title: "International Debt Recovery",
      description:
        "Cross-border commercial debt collection specialists with global reach and expertise in international trade disputes.",
      features: [
        "Multi-currency debt recovery",
        "International legal frameworks",
        "Global enforcement network",
        "Cross-border trade expertise",
        "Foreign judgment enforcement",
        "Cultural sensitivity protocols",
      ],
    },
    {
      title: "Professional Debtor Tracing",
      description:
        "Advanced debtor location services using cutting-edge technology and extensive databases to track down elusive debtors.",
      features: [
        "Comprehensive database searches",
        "Asset investigation services",
        "Director and shareholder tracing",
        "Address verification services",
        "Commercial credit checks",
        "Litigation support documentation",
      ],
    },
    {
      title: "Credit Control & Insolvency",
      description:
        "Complete outsourced credit control solutions and specialist insolvency services for complex commercial situations.",
      features: [
        "Outsourced credit control",
        "Insolvency proceedings support",
        "CVA negotiations",
        "Administrative procedures",
        "Liquidation claim submissions",
        "Proof of debt preparation",
      ],
    },
  ];

  return (
    <div className={`min-h-screen ${themeClasses.bg.primary}`}>
      <Helmet>
        <title>Commercial B2B Debt Recovery Services | A.S. Collections</title>
        <meta
          name="description"
          content="Professional B2B commercial debt recovery services UK. No win no fee debt collection with 98% success rate. International recovery, debtor tracing, credit control."
        />
        <meta
          name="keywords"
          content="commercial debt recovery UK, B2B debt collection, international debt recovery, debtor tracing, credit control, insolvency services"
        />
        <link
          rel="canonical"
          href="https://ascollections.co.uk/commercial-debt-recovery"
        />
        <meta
          property="og:title"
          content="Commercial B2B Debt Recovery Services | A.S. Collections"
        />
        <meta
          property="og:description"
          content="Professional B2B commercial debt recovery services UK. No win no fee, 98% success rate."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ascollections.co.uk/commercial-debt-recovery"
        />
      </Helmet>

      <Header />
      <main>
        {/* Page Header */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`pt-32 pb-16 ${themeClasses.bg.primary}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1
                  className={`text-5xl md:text-6xl font-bold ${themeClasses.text.primary} mb-6 font-montserrat font-800`}
                >
                  Commercial Debt Recovery Services UK
                </h1>
                <p
                  className={`text-lg ${themeClasses.text.secondary} mb-4 font-inter leading-relaxed`}
                >
                  Professional B2B debt collection services with a 98% success
                  rate.
                </p>
                <p
                  className={`text-lg ${themeClasses.text.secondary} mb-8 font-inter leading-relaxed`}
                >
                  Our no win, no fee commercial debt recovery specialists help
                  UK businesses recover outstanding invoices quickly and
                  ethically whilst preserving valuable client relationships.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={scrollToContact}
                    size="lg"
                    className={`${themeClasses.button.primary} font-semibold px-8 py-4 transition-colors duration-200 font-inter`}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Get Free Consultation
                  </Button>
                  <div
                    className={`text-sm ${themeClasses.text.secondary} flex items-center font-noto-sans`}
                  >
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    No Win, No Fee Guarantee
                  </div>
                </div>
              </div>

              {/* Stats Panel */}
              <div
                className={`${themeClasses.bg.secondary} rounded-2xl p-8 border ${themeClasses.border.primary}`}
              >
                <h3
                  className={`text-2xl font-bold ${themeClasses.text.primary} mb-6 font-noto-serif text-center`}
                >
                  Our Track Record
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div
                      className={`text-3xl font-bold ${themeClasses.text.accent} font-noto-serif`}
                    >
                      98%
                    </div>
                    <div
                      className={`text-sm ${themeClasses.text.secondary} font-noto-sans`}
                    >
                      Success Rate
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className={`text-3xl font-bold ${themeClasses.text.accent} font-noto-serif`}
                    >
                      14 Days
                    </div>
                    <div
                      className={`text-sm ${themeClasses.text.secondary} font-noto-sans`}
                    >
                      Average Recovery
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className={`text-3xl font-bold ${themeClasses.text.accent} font-noto-serif`}
                    >
                      £50M+
                    </div>
                    <div
                      className={`text-sm ${themeClasses.text.secondary} font-noto-sans`}
                    >
                      Total Recovered
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className={`text-3xl font-bold ${themeClasses.text.accent} font-noto-serif`}
                    >
                      2,500+
                    </div>
                    <div
                      className={`text-sm ${themeClasses.text.secondary} font-noto-sans`}
                    >
                      Clients Served
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <Services />

        {/* Additional Services */}
        <section className={`py-20 ${themeClasses.bg.secondary}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2
                className={`text-4xl font-bold ${themeClasses.text.primary} mb-6 font-noto-serif`}
              >
                Specialist Debt Recovery Services
              </h2>
              <p
                className={`text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto font-noto-sans font-light`}
              >
                Comprehensive commercial debt collection solutions tailored to
                your specific business needs and industry requirements across
                the UK and internationally.
              </p>
            </motion.div>

            <div className="space-y-12">
              {serviceFeatures.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`${themeClasses.bg.primary} rounded-2xl border ${themeClasses.border.primary} p-8`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <h3
                        className={`text-2xl font-bold ${themeClasses.text.primary} mb-4 font-noto-serif`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`${themeClasses.text.secondary} leading-relaxed font-noto-sans text-lg mb-6`}
                      >
                        {service.description}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span
                            className={`${themeClasses.text.secondary} text-sm font-noto-sans`}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          id="contact-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`py-20 ${themeClasses.bg.primary}`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className={`text-4xl font-bold ${themeClasses.text.primary} mb-6 font-noto-serif`}
            >
              Get Your Free No Win No Fee Consultation
            </h2>
            <p
              className={`text-xl ${themeClasses.text.secondary} mb-8 font-noto-sans`}
            >
              Speak to our commercial debt recovery specialists today. Free
              consultation with no obligation and no upfront costs. We only get
              paid when we successfully recover your debt.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                onClick={() => (window.location.href = "/contact")}
                size="lg"
                className={`${themeClasses.button.primary} font-semibold px-8 py-4 transition-colors duration-200 font-noto-sans`}
              >
                <Phone className="w-5 h-5 mr-2" />
                Start Your Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <div className="flex flex-col text-center">
                <a
                  href="tel:+441513290946"
                  className={`text-2xl font-bold ${themeClasses.text.accent} hover:underline font-noto-serif`}
                >
                  0151 329 0946
                </a>
                <span
                  className={`text-sm ${themeClasses.text.secondary} font-noto-sans`}
                >
                  Mon-Fri 9AM-6PM
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

export default CommercialDebtRecovery;
