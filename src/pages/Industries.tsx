import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import IndustryExpertise from "@/components/IndustryExpertise";
import CookieConsent from "@/components/CookieConsent";
import { themeClasses } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const Industries = () => {
  const additionalIndustries = [
    "Manufacturing", "Technology", "Healthcare", "Professional Services", 
    "Retail & E-commerce", "Property & Real Estate", "Financial Services", 
    "Media & Entertainment", "Automotive", "Telecommunications",
    "Agriculture", "Hospitality", "Legal Services", "Accountancy",
    "Marketing & Advertising", "Pharmaceuticals", "Energy & Utilities"
  ];

  return (
    <div className={`min-h-screen ${themeClasses.bg.primary}`}>
      <Helmet>
        <title>Industry Specific Debt Recovery Services UK | A.S. Collections</title>
        <meta 
          name="description" 
          content="Specialist debt recovery services for UK industries. Construction, food & drink, oil & gas, independent schools, recruitment agencies, shipping & logistics. Sector-specific expertise." 
        />
        <meta name="keywords" content="industry specific debt recovery, construction debt collection UK, food drink sector debt recovery, oil gas debt collection, school debt recovery, recruitment debt collection" />
        <link rel="canonical" href="https://ascollections.co.uk/industries" />
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className={`text-5xl font-bold ${themeClasses.text.primary} mb-6 font-noto-serif`}>
              Sectors We Serve
            </h1>
            <p className={`text-xl ${themeClasses.text.secondary} max-w-4xl mx-auto font-noto-sans font-light mb-8`}>
              Industry-specific debt recovery expertise across all UK business sectors. Our specialists 
              understand the unique challenges, regulations, and relationship dynamics within each industry, 
              enabling us to achieve higher success rates whilst protecting your valuable business relationships.
            </p>
            
            {/* Key Industries Overview */}
            <div className={`${themeClasses.bg.secondary} rounded-2xl p-8 border ${themeClasses.border.primary} max-w-4xl mx-auto`}>
              <h2 className={`text-2xl font-bold ${themeClasses.text.primary} mb-6 font-noto-serif`}>
                Our Specialist Sectors
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
                {[
                  "Construction & Engineering",
                  "Food & Drink Industry", 
                  "Oil & Gas Sector",
                  "Independent Schools",
                  "Recruitment Agencies",
                  "Shipping & Logistics"
                ].map((industry, index) => (
                  <div key={index} className={`${themeClasses.text.secondary} font-noto-sans flex items-center`}>
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3 flex-shrink-0"></div>
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <IndustryExpertise />

        {/* Additional Industries Section */}
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
                Don't See Your Industry Listed?
              </h2>
              <p className={`text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto font-noto-sans font-light mb-8`}>
                Our commercial debt recovery expertise extends across all UK business sectors. We adapt 
                our proven methodologies to suit your industry's specific requirements and challenges.
              </p>
            </div>

            <div className={`${themeClasses.bg.primary} rounded-2xl border ${themeClasses.border.primary} p-8 mb-12`}>
              <h3 className={`text-2xl font-bold ${themeClasses.text.primary} mb-6 font-noto-serif text-center`}>
                Additional Sectors We Serve
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {additionalIndustries.map((industry, index) => (
                  <span 
                    key={index}
                    className={`px-4 py-2 rounded-full ${themeClasses.bg.accent} ${themeClasses.text.secondary} font-noto-sans text-sm border ${themeClasses.border.primary}`}
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            {/* Industry Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Sector Knowledge",
                  description: "Deep understanding of industry-specific challenges, payment terms, and business practices ensures more effective debt recovery strategies."
                },
                {
                  title: "Relationship Preservation", 
                  description: "We understand the importance of maintaining client relationships within your industry and tailor our approach accordingly."
                },
                {
                  title: "Regulatory Compliance",
                  description: "Full compliance with sector-specific regulations and professional standards ensures ethical and legal debt collection practices."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${themeClasses.bg.primary} rounded-xl border ${themeClasses.border.primary} p-6 text-center`}
                >
                  <h4 className={`text-xl font-bold ${themeClasses.text.primary} mb-4 font-noto-serif`}>
                    {benefit.title}
                  </h4>
                  <p className={`${themeClasses.text.secondary} font-noto-sans leading-relaxed`}>
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`py-20 ${themeClasses.bg.primary}`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className={`text-4xl font-bold ${themeClasses.text.primary} mb-6 font-noto-serif`}>
              Discuss Your Industry Requirements
            </h2>
            <p className={`text-xl ${themeClasses.text.secondary} mb-8 font-noto-sans`}>
              Contact our specialists to discuss your specific industry requirements. We'll explain how 
              our sector-focused approach can help recover your outstanding debts whilst protecting your 
              business relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                onClick={() => window.location.href = '/contact'}
                size="lg"
                className={`${themeClasses.button.primary} font-semibold px-8 py-4 transition-colors duration-200 font-noto-sans`}
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Industry-Specific Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { stat: "6+", label: "Specialist Sectors" },
                { stat: "98%", label: "Success Rate" },
                { stat: "2,500+", label: "Businesses Helped" },
                { stat: "£50M+", label: "Total Recovered" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-bold ${themeClasses.text.accent} font-noto-serif mb-1`}>
                    {item.stat}
                  </div>
                  <div className={`text-sm ${themeClasses.text.secondary} font-noto-sans`}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Industries;
