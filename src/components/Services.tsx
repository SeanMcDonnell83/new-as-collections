import { motion } from "framer-motion";
import {
  FileText,
  Calculator,
  Gavel,
  AlertTriangle,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { themeClasses } from "@/contexts/ThemeContext";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Commercial B2B Debt Collection",
      description:
        "Professional business debt collection services UK wide, specialising in Construction, Food & Drink, Oil & Gas industries. Maintain client relationships whilst achieving results.",
      features: [
        "Construction industry debt recovery",
        "Food & Drink sector collections",
        "Engineering debt solutions",
        "Trade creditor services",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Calculator,
      title: "International Debt Recovery",
      description:
        "Cross-border commercial debt recovery UK specialists with global reach. Expertise in international business debt collection services.",
      features: [
        "Shipping & Logistics debt recovery",
        "International trade debts",
        "Multi-currency collections",
        "Global enforcement network",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Gavel,
      title: "Debtor Tracing & Legal Action",
      description:
        "Advanced debtor tracing combined with court claims and legal enforcement. County court claims to High Court enforcement.",
      features: [
        "Professional debtor tracing",
        "County court claims",
        "High Court enforcement",
        "Statutory demands",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: AlertTriangle,
      title: "Credit Control & Insolvency",
      description:
        "Complete credit control outsourcing for Independent Schools, Recruitment agencies. Specialist insolvency services and CVA negotiations.",
      features: [
        "Independent Schools debt recovery",
        "Recruitment sector collections",
        "Insolvency proceedings",
        "CVA negotiations",
      ],
      color: "from-orange-500 to-orange-600",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className={`py-20 ${themeClasses.bg.secondary}`}>
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
            Business Debt Collection Services UK
          </h2>
          <p
            className={`text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto font-noto-sans font-light mb-4`}
          >
            Comprehensive commercial debt recovery UK solutions across London,
            Manchester, Birmingham, Glasgow, and Edinburgh. From initial unpaid
            invoice recovery UK to legal enforcement, our debt collection agency
            UK handles it all.
          </p>
          <p
            className={`text-lg ${themeClasses.text.secondary} max-w-4xl mx-auto font-noto-sans`}
          >
            Our professional debt collection services are fully compliant with
            UK legislation and industry standards. We specialise in B2B debt
            recovery, helping businesses across all sectors recover outstanding
            invoices efficiently and ethically. With over 98% success rate and
            average recovery times of just 14 days, we're the trusted choice for
            businesses nationwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
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
                <div
                  className={`${themeClasses.bg.primary} rounded-xl border ${themeClasses.border.primary} p-8 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-bold ${themeClasses.text.primary} mb-3`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`${themeClasses.text.secondary} mb-4 leading-relaxed`}
                      >
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className={`flex items-center ${themeClasses.text.secondary}`}
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`${themeClasses.bg.primary} rounded-2xl border ${themeClasses.border.primary} p-8 md:p-12`}
        >
          <div className="text-center mb-12">
            <h3
              className={`text-3xl font-bold ${themeClasses.text.primary} mb-4`}
            >
              Our Recovery Process
            </h3>
            <p className={`text-lg ${themeClasses.text.secondary}`}>
              A proven 4-step approach that maximizes recovery while preserving
              relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "Free consultation and debt analysis",
              },
              {
                step: "02",
                title: "Strategy",
                description: "Tailored recovery plan development",
              },
              {
                step: "03",
                title: "Action",
                description: "Professional debt recovery execution",
              },
              {
                step: "04",
                title: "Resolution",
                description: "Successful collection and reporting",
              },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {item.step}
                  </span>
                </div>
                <h4
                  className={`text-lg font-bold ${themeClasses.text.primary} mb-2`}
                >
                  {item.title}
                </h4>
                <p className={`${themeClasses.text.secondary} text-sm`}>
                  {item.description}
                </p>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 w-6 h-6 text-blue-300" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 transition-colors duration-200"
            >
              Start Your Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
