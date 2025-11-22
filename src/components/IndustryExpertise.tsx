import { motion } from "framer-motion";
import {
  Building2,
  Utensils,
  Fuel,
  GraduationCap,
  Users,
  Ship,
} from "lucide-react";
import { themeClasses } from "@/contexts/ThemeContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const IndustryExpertise = () => {
  const { ref, animationProps } = useScrollAnimation();

  const industries = [
    {
      icon: Building2,
      title: "Construction & Engineering Debt Recovery",
      description:
        "Specialist construction industry debt collection across the UK. We understand retention funds, progress payments, and complex sub-contractor relationships. Our construction debt recovery experts handle everything from small trade debts to major project payment disputes.",
      specialties: [
        "Main contractor payment disputes",
        "Sub-contractor debt recovery",
        "Retention fund collection",
        "Progress payment claims",
        "Construction Act compliance",
        "Adjudication support",
      ],
      stats: {
        recovered: "£12.5M",
        clients: "450+",
        rate: "97%",
      },
    },
    {
      icon: Utensils,
      title: "Food & Drink Industry Collections",
      description:
        "Comprehensive debt recovery for food and beverage businesses throughout the UK. From restaurant suppliers to major food manufacturers, we recover outstanding invoices whilst protecting crucial supply chain relationships and maintaining industry reputation.",
      specialties: [
        "Restaurant & hospitality debts",
        "Food supplier collections",
        "Brewery & distillery debts",
        "Wholesale food recovery",
        "Catering service debts",
        "Agricultural payment disputes",
      ],
      stats: {
        recovered: "£8.2M",
        clients: "320+",
        rate: "96%",
      },
    },
    {
      icon: Fuel,
      title: "Oil & Gas Sector Debt Recovery",
      description:
        "Specialised commercial debt collection for the oil and gas industry across the UK and internationally. Our expertise covers upstream, midstream, and downstream operations with deep understanding of complex contractual arrangements and international jurisdictions.",
      specialties: [
        "Upstream operation debts",
        "Drilling contractor recovery",
        "Equipment supplier debts",
        "Service company collections",
        "International energy debts",
        "Joint venture disputes",
      ],
      stats: {
        recovered: "£15.8M",
        clients: "180+",
        rate: "98%",
      },
    },
    {
      icon: GraduationCap,
      title: "Independent Schools Debt Collection",
      description:
        "Discreet and professional debt recovery services for independent schools across England, Scotland, and Wales. We handle outstanding tuition fees, boarding costs, and additional charges with sensitivity appropriate to the education sector.",
      specialties: [
        "Tuition fee recovery",
        "Boarding cost collection",
        "School trip payments",
        "Additional charges recovery",
        "Parent payment plans",
        "Bursary recoveries",
      ],
      stats: {
        recovered: "£4.7M",
        clients: "85+",
        rate: "99%",
      },
    },
    {
      icon: Users,
      title: "Recruitment Agency Collections",
      description:
        "Expert debt recovery for recruitment agencies and staffing companies throughout the UK. We understand placement fees, temporary worker charges, and the importance of maintaining client relationships in the competitive recruitment sector.",
      specialties: [
        "Placement fee recovery",
        "Temporary worker charges",
        "Executive search fees",
        "Contract staffing debts",
        "International recruitment debts",
        "Contractor payment disputes",
      ],
      stats: {
        recovered: "£6.3M",
        clients: "275+",
        rate: "97%",
      },
    },
    {
      icon: Ship,
      title: "Shipping & Logistics Debt Recovery",
      description:
        "International shipping and logistics debt collection specialists. Our global network and understanding of maritime law, freight forwarding, and international trade enables successful recovery of complex cross-border commercial debts.",
      specialties: [
        "Freight forwarding debts",
        "Shipping line collections",
        "Port charges recovery",
        "Logistics service debts",
        "International freight claims",
        "Maritime lien enforcement",
      ],
      stats: {
        recovered: "£11.4M",
        clients: "195+",
        rate: "95%",
      },
    },
  ];

  return (
    <section className={`py-20 ${themeClasses.bg.secondary}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} {...animationProps} className="text-center mb-16">
          <h2
            className={`text-4xl font-bold ${themeClasses.text.primary} mb-6 font-montserrat font-700`}
          >
            Industry-Specific Debt Recovery Expertise
          </h2>
          <p
            className={`text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto font-inter font-light mb-4`}
          >
            Deep sector knowledge and specialised debt collection strategies for
            UK businesses across construction, food & drink, oil & gas,
            education, recruitment, and shipping industries.
          </p>
          <p
            className={`text-lg ${themeClasses.text.secondary} max-w-4xl mx-auto font-inter`}
          >
            Our commercial debt recovery specialists understand the unique
            challenges, regulations, and relationship dynamics within each
            industry. This sector-specific expertise enables us to achieve
            higher success rates whilst protecting your valuable business
            relationships and industry reputation.
          </p>
        </motion.div>

        <div className="space-y-12">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${themeClasses.bg.primary} rounded-2xl border ${themeClasses.border.primary} p-8 hover:shadow-lg transition-all duration-300`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3
                          className={`text-2xl font-bold ${themeClasses.text.primary} mb-3 font-montserrat font-700`}
                        >
                          {industry.title}
                        </h3>
                        <p
                          className={`${themeClasses.text.secondary} leading-relaxed font-inter`}
                        >
                          {industry.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {industry.specialties.map((specialty, specialtyIndex) => (
                        <div key={specialtyIndex} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mr-3 flex-shrink-0"></div>
                          <span
                            className={`${themeClasses.text.secondary} text-sm font-inter`}
                          >
                            {specialty}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`${themeClasses.bg.accent} rounded-xl p-6`}>
                    <h4
                      className={`text-lg font-bold ${themeClasses.text.primary} mb-4 font-montserrat font-700 text-center`}
                    >
                      Industry Results
                    </h4>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div
                          className={`text-2xl font-bold ${themeClasses.text.accent} font-montserrat font-700`}
                        >
                          {industry.stats.recovered}
                        </div>
                        <div
                          className={`text-sm ${themeClasses.text.secondary} font-inter`}
                        >
                          Total Recovered
                        </div>
                      </div>
                      <div className="text-center">
                        <div
                          className={`text-2xl font-bold ${themeClasses.text.accent} font-montserrat font-700`}
                        >
                          {industry.stats.clients}
                        </div>
                        <div
                          className={`text-sm ${themeClasses.text.secondary} font-inter`}
                        >
                          Clients Served
                        </div>
                      </div>
                      <div className="text-center">
                        <div
                          className={`text-2xl font-bold ${themeClasses.text.accent} font-montserrat font-700`}
                        >
                          {industry.stats.rate}
                        </div>
                        <div
                          className={`text-sm ${themeClasses.text.secondary} font-inter`}
                        >
                          Success Rate
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`mt-16 ${themeClasses.bg.primary} rounded-2xl border ${themeClasses.border.primary} p-8 text-center`}
        >
          <h3
            className={`text-2xl font-bold ${themeClasses.text.primary} mb-4 font-montserrat font-700`}
          >
            Don't See Your Industry Listed?
          </h3>
          <p
            className={`${themeClasses.text.secondary} mb-6 font-inter max-w-2xl mx-auto`}
          >
            Our commercial debt recovery expertise extends across all UK
            business sectors. Contact our specialists to discuss your specific
            industry requirements and discover how our proven debt collection
            strategies can be tailored to your sector's unique challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              "Manufacturing",
              "Technology",
              "Healthcare",
              "Professional Services",
              "Retail & E-commerce",
              "Property & Real Estate",
              "Financial Services",
              "Media & Entertainment",
              "Automotive",
              "Telecommunications",
            ].map((sector, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full ${themeClasses.bg.accent} ${themeClasses.text.secondary} font-inter`}
              >
                {sector}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryExpertise;
