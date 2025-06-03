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

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Commercial Debt Collection",
      description:
        "Professional recovery of outstanding commercial debts with a focus on maintaining business relationships while achieving results.",
      features: [
        "B2B debt recovery",
        "Trade creditor services",
        "Late payment solutions",
        "Relationship preservation",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Calculator,
      title: "Accounts Receivable Management",
      description:
        "Comprehensive management of your accounts receivable to improve cash flow and reduce outstanding debt levels.",
      features: [
        "Credit control outsourcing",
        "Invoice management",
        "Payment tracking",
        "Cash flow optimization",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Gavel,
      title: "Court Claims & Legal Action",
      description:
        "When necessary, we pursue legal remedies to recover debts, handling all court proceedings and enforcement actions.",
      features: [
        "County court claims",
        "High court enforcement",
        "Statutory demands",
        "Bankruptcy proceedings",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: AlertTriangle,
      title: "Insolvency Services",
      description:
        "Specialized handling of insolvency cases to maximize recovery rates when debtors face financial difficulties.",
      features: [
        "Administration claims",
        "Liquidation proceedings",
        "CVA negotiations",
        "Asset recovery",
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
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive debt recovery solutions tailored to your business
            needs. From initial collection to legal enforcement, we handle it
            all.
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
                <div className="bg-white rounded-xl border border-slate-200 p-8 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-slate-700"
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
          className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Our Recovery Process
            </h3>
            <p className="text-lg text-slate-600">
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
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-sm">{item.description}</p>
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
