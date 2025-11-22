import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/CookieConsent";
import { themeClasses } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FileText,
  Calculator,
  Gavel,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const services = [
    {
      icon: FileText,
      title: "Commercial B2B Debt Collection",
      description:
        "Professional business debt collection services UK wide, specialising in Construction, Food & Drink, Oil & Gas industries.",
      href: "/services/commercial-debt-recovery",
      stats: "98% success rate",
    },
    {
      icon: Calculator,
      title: "International Debt Recovery",
      description:
        "Cross-border commercial debt recovery UK specialists with global reach and expertise in international business debt collection.",
      href: "/services/international-debt-collection",
      stats: "14+ countries",
    },
    {
      icon: Gavel,
      title: "Debtor Tracing & Legal Action",
      description:
        "Advanced debtor tracing combined with court claims and legal enforcement across all UK jurisdictions.",
      href: "/services/debtor-tracing",
      stats: "£50M+ recovered",
    },
    {
      icon: AlertTriangle,
      title: "Credit Control & Insolvency",
      description:
        "Complete credit control outsourcing and specialist insolvency services for complex commercial situations.",
      href: "/services/credit-control-insolvency",
      stats: "Expert guidance",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className={`min-h-screen ${themeClasses.bg.primary}`}>
      <Helmet>
        <title>Debt Recovery Services | A.S. Collections UK</title>
        <meta
          name="description"
          content="Explore our comprehensive debt recovery services: Commercial B2B, International, Debtor Tracing, Credit Control & Insolvency. 98% success rate, No Win No Fee."
        />
        <meta
          name="keywords"
          content="debt recovery services, commercial debt collection, international recovery, debtor tracing, insolvency services"
        />
        <link rel="canonical" href="https://ascollections.co.uk/services" />
      </Helmet>

      <Header />
      <main>
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`py-32 ${themeClasses.bg.secondary}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1
              className={`text-5xl md:text-6xl font-manrope font-bold ${themeClasses.text.primary} mb-6`}
            >
              Our Recovery Services
            </h1>
            <p
              className={`text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto font-inter leading-relaxed`}
            >
              Comprehensive debt recovery solutions tailored to your business
              needs. From commercial collections to international recovery, we
              deliver results.
            </p>
          </div>
        </motion.section>

        {/* Services Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`py-20 ${themeClasses.bg.primary}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`${themeClasses.bg.secondary} rounded-2xl border ${themeClasses.border.primary} p-8 hover:shadow-lg transition-all duration-300 group`}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`w-14 h-14 rounded-xl ${themeClasses.bg.accent} flex items-center justify-center transition-transform group-hover:scale-110`}
                      >
                        <IconComponent
                          className={`w-7 h-7 ${themeClasses.text.accent}`}
                        />
                      </div>
                      <span className="text-xs font-montserrat font-bold text-red-600 dark:text-red-400">
                        {service.stats}
                      </span>
                    </div>

                    <h2
                      className={`text-2xl font-manrope font-bold ${themeClasses.text.primary} mb-3`}
                    >
                      {service.title}
                    </h2>

                    <p
                      className={`${themeClasses.text.secondary} mb-6 font-inter leading-relaxed`}
                    >
                      {service.description}
                    </p>

                    <Link
                      to={service.href}
                      className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 font-montserrat font-bold hover:gap-3 transition-all"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`py-16 ${themeClasses.bg.secondary}`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className={`text-3xl md:text-4xl font-manrope font-bold ${themeClasses.text.primary} mb-6`}
            >
              Ready to recover your debts?
            </h2>
            <p
              className={`text-lg ${themeClasses.text.secondary} mb-8 font-inter`}
            >
              Check if your client is on the winding-up list or get in touch
              with our team for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/winding-up-check">
                <Button className="bg-red-700 hover:bg-red-800 text-white font-manrope font-bold px-8 py-3 rounded-full">
                  Check Winding-Up List
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="font-manrope font-bold px-8 py-3 rounded-full"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default ServicesOverview;
