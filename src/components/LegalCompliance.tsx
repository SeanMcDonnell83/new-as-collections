import { motion } from "framer-motion";
import { Shield, Scale, FileCheck, BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { themeClasses } from "@/contexts/ThemeContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LegalCompliance = () => {
  const { ref, animationProps } = useScrollAnimation();

  const standards = [
    {
      icon: Shield,
      title: "GDPR Compliance",
      description:
        "Full compliance with UK GDPR and Data Protection Act 2018 for all client and debtor data handling. We maintain strict data security protocols and privacy safeguards throughout the debt recovery process.",
      authority: "Information Commissioner's Office",
      reference: "UK GDPR Compliance Framework",
      link: "https://ico.org.uk",
    },
    {
      icon: BookOpen,
      title: "Consumer Credit Act",
      description:
        "Operating within the framework of the Consumer Credit Act 1974 for all debt collection activities. Our practices ensure fair treatment of debtors while maximizing recovery for creditors.",
      authority: "UK Government Legislation",
      reference: "Consumer Credit Act 1974",
      link: "https://www.legislation.gov.uk",
    },
    {
      icon: Scale,
      title: "Industry Best Practice",
      description:
        "Following industry best practices and ethical guidelines for commercial debt recovery. Our methods prioritize professional standards whilst achieving optimal results for clients.",
      authority: "Debt Collection Industry Standards",
      reference: "Professional Practice Guidelines",
      link: "https://www.gov.uk",
    },
    {
      icon: FileCheck,
      title: "Legal Documentation",
      description:
        "Comprehensive legal documentation and proper procedures for all debt recovery actions. We ensure all activities are properly documented and legally compliant throughout the process.",
      authority: "UK Legal Framework",
      reference: "Debt Recovery Legal Requirements",
      link: "https://www.gov.uk",
    },
  ];

  const legalServices = [
    {
      title: "Legal Letter Before Action",
      description:
        "Professionally drafted legal letters demanding payment before commencing court proceedings. Clear, compliant documentation that demonstrates serious intent whilst providing final opportunity for settlement.",
      process: "7-14 days response period",
    },
    {
      title: "County Court Claims Support",
      description:
        "Professional support for County Court Judgment applications for commercial debts. We assist with documentation, evidence preparation, and procedural guidance throughout the claims process.",
      process: "Court fee and documentation support",
    },
    {
      title: "Statutory Demand Preparation",
      description:
        "Expert preparation of statutory demands under the Insolvency Act 1986. Professional documentation and service arrangements for formal demands as preliminary to insolvency proceedings.",
      process: "21-day statutory period",
    },
    {
      title: "Legal Recovery Consultation",
      description:
        "Professional consultation on legal options for debt recovery. Expert guidance on the most appropriate legal routes and procedural requirements for your specific circumstances.",
      process: "Initial consultation available",
    },
  ];

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} {...animationProps} className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold ${themeClasses.text.primary} mb-6 font-montserrat font-800`}
          >
            Legal Compliance & Professional Standards
          </h2>
          <p
            className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto font-inter leading-relaxed mb-4`}
          >
            Maintaining the highest professional standards in commercial debt
            recovery across England, Scotland, Wales, and Northern Ireland.
          </p>
          <p
            className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto font-inter leading-relaxed`}
          >
            Full compliance with UK legislation and industry best practices
            ensuring ethical and effective debt collection services.
          </p>
        </motion.div>

        {/* Standards Grid - Paper Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {standards.map((standard, index) => {
            const IconComponent = standard.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${themeClasses.bg.primary} rounded-xl border-2 border-gray-300 dark:border-gray-700 p-8 shadow-md hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-2xl font-bold ${themeClasses.text.primary} mb-3 font-montserrat font-800`}
                    >
                      {standard.title}
                    </h3>
                    <p
                      className={`${themeClasses.text.secondary} mb-4 leading-relaxed font-inter text-sm`}
                    >
                      {standard.description}
                    </p>
                    <div className="space-y-2 py-4 border-t border-gray-200 dark:border-gray-700">
                      <div
                        className={`text-sm ${themeClasses.text.secondary} font-inter`}
                      >
                        <span className="font-semibold">Authority:</span>{" "}
                        {standard.authority}
                      </div>
                      <div
                        className={`text-sm ${themeClasses.text.secondary} font-inter`}
                      >
                        <span className="font-semibold">Reference:</span>{" "}
                        {standard.reference}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className={`${themeClasses.button.outline} text-xs font-inter mt-4`}
                      onClick={() => window.open(standard.link, "_blank")}
                    >
                      View Details
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Legal Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`${themeClasses.bg.accent} rounded-2xl p-8 mb-16`}
        >
          <div className="text-center mb-12">
            <h3
              className={`text-3xl font-bold ${themeClasses.text.primary} mb-4 font-montserrat font-700`}
            >
              Professional Debt Recovery Services
            </h3>
            <p
              className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto font-inter`}
            >
              Professional debt recovery services with legal support and
              guidance throughout the process. From initial contact through to
              legal documentation, we provide comprehensive support for
              commercial debt collection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${themeClasses.bg.primary} rounded-lg border ${themeClasses.border.primary} p-6`}
              >
                <h4
                  className={`text-lg font-bold ${themeClasses.text.primary} mb-3 font-montserrat font-700`}
                >
                  {service.title}
                </h4>
                <p
                  className={`${themeClasses.text.secondary} mb-4 text-sm leading-relaxed font-inter`}
                >
                  {service.description}
                </p>
                <div
                  className={`text-xs ${themeClasses.text.accent} font-medium font-inter`}
                >
                  {service.process}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Standards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`${themeClasses.bg.secondary} rounded-2xl p-8`}
        >
          <div className="text-center mb-8">
            <h3
              className={`text-2xl font-bold ${themeClasses.text.primary} mb-4 font-montserrat font-700`}
            >
              Our Professional Commitments
            </h3>
            <p
              className={`${themeClasses.text.secondary} font-inter max-w-2xl mx-auto`}
            >
              We operate under comprehensive policies ensuring fair, ethical,
              and effective commercial debt recovery services across the United
              Kingdom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div
                className={`text-2xl font-bold ${themeClasses.text.accent} mb-2 font-montserrat font-700`}
              >
                100%
              </div>
              <div
                className={`text-sm ${themeClasses.text.secondary} font-inter`}
              >
                Legal Compliance
              </div>
            </div>
            <div className="text-center">
              <div
                className={`text-2xl font-bold ${themeClasses.text.accent} mb-2 font-montserrat font-700`}
              >
                GDPR
              </div>
              <div
                className={`text-sm ${themeClasses.text.secondary} font-inter`}
              >
                Data Protection
              </div>
            </div>
            <div className="text-center">
              <div
                className={`text-2xl font-bold ${themeClasses.text.accent} mb-2 font-montserrat font-700`}
              >
                UK-Wide
              </div>
              <div
                className={`text-sm ${themeClasses.text.secondary} font-inter`}
              >
                Professional Coverage
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p
              className={`text-xs ${themeClasses.text.tertiary} font-inter max-w-4xl mx-auto`}
            >
              All our debt recovery activities are conducted in accordance with
              the Consumer Credit Act 1974, Data Protection Act 2018, UK GDPR
              regulations, and professional industry standards for ethical debt
              collection practices across England, Scotland, Wales, and Northern
              Ireland.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LegalCompliance;
