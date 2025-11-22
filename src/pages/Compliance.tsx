import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LegalCompliance from "@/components/LegalCompliance";
import CookieConsent from "@/components/CookieConsent";
import { themeClasses } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ExternalLink, Shield, CheckCircle } from "lucide-react";

const Compliance = () => {
  const accreditations = [
    {
      name: "Financial Conduct Authority",
      description: "Regulatory oversight for consumer credit activities and professional standards in financial services.",
      link: "https://www.fca.org.uk",
      logo: "FCA"
    },
    {
      name: "Chartered Institute of Credit Management", 
      description: "Professional body representing credit management and debt recovery professionals across the UK.",
      link: "https://www.cicm.com",
      logo: "CICM"
    },
    {
      name: "Credit Services Association",
      description: "Trade association representing the credit management and debt recovery industry with ethical standards.",
      link: "https://www.csa-uk.com", 
      logo: "CSA"
    },
    {
      name: "HM Courts & Tribunals Service",
      description: "Government department managing the administration of criminal, civil and family courts and tribunals.",
      link: "https://www.gov.uk/government/organisations/hm-courts-and-tribunals-service",
      logo: "HMCTS"
    }
  ];

  const complianceAreas = [
    {
      title: "Data Protection & GDPR",
      description: "Full compliance with UK GDPR and Data Protection Act 2018 ensuring all personal and business data is handled securely and lawfully.",
      requirements: [
        "Secure data processing systems",
        "Privacy impact assessments", 
        "Data subject rights compliance",
        "Breach notification protocols",
        "Staff training programs",
        "Regular compliance audits"
      ]
    },
    {
      title: "Consumer Credit Act 1974",
      description: "Operating within the regulatory framework governing credit and debt collection activities in the UK.",
      requirements: [
        "Fair debt collection practices",
        "Proper documentation standards",
        "Debtor rights protection",
        "Interest and charges compliance",
        "Statutory notice requirements",
        "Dispute resolution procedures"
      ]
    },
    {
      title: "Professional Standards",
      description: "Maintaining the highest ethical standards in all aspects of commercial debt recovery services.",
      requirements: [
        "Ethical debt collection methods",
        "Professional communication standards",
        "Transparent fee structures",
        "Conflicts of interest management",
        "Continuous professional development", 
        "Quality assurance processes"
      ]
    }
  ];

  return (
    <div className={`min-h-screen ${themeClasses.bg.primary}`}>
      <Helmet>
        <title>Legal Compliance & Professional Standards | A.S. Collections</title>
        <meta 
          name="description" 
          content="A.S. Collections maintains the highest legal compliance and professional standards. GDPR compliant, Consumer Credit Act 1974 adherence, FCA, CICM & CSA professional memberships." 
        />
        <meta name="keywords" content="debt collection compliance UK, GDPR debt recovery, Consumer Credit Act, professional debt collection standards, ethical debt collection, legal compliance UK" />
        <link rel="canonical" href="https://ascollections.co.uk/compliance" />
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
              Compliance & Professional Standards
            </h1>
            <p className={`text-xl ${themeClasses.text.secondary} max-w-4xl mx-auto font-noto-sans font-light mb-8`}>
              A.S. Collections maintains the highest legal compliance and professional standards in 
              commercial debt recovery. We operate within comprehensive regulatory frameworks ensuring 
              ethical, lawful, and effective debt collection services across the United Kingdom.
            </p>
            
            {/* Compliance Badge */}
            <div className={`${themeClasses.bg.secondary} rounded-2xl p-6 border ${themeClasses.border.primary} max-w-2xl mx-auto`}>
              <div className="flex items-center justify-center mb-4">
                <Shield className={`w-12 h-12 ${themeClasses.text.accent} mr-4`} />
                <div className="text-left">
                  <div className={`text-2xl font-bold ${themeClasses.text.primary} font-noto-serif`}>
                    100% Compliant
                  </div>
                  <div className={`${themeClasses.text.secondary} font-noto-sans`}>
                    Fully regulated debt recovery services
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Professional Accreditations */}
        <section className={`py-20 ${themeClasses.bg.secondary}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className={`text-4xl font-bold ${themeClasses.text.primary} mb-6 font-noto-serif`}>
                Professional Accreditations & Regulatory Bodies
              </h2>
              <p className={`text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto font-noto-sans font-light`}>
                Our professional memberships and regulatory compliance demonstrates our commitment to 
                maintaining the highest standards in commercial debt recovery services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {accreditations.map((accreditation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${themeClasses.bg.primary} rounded-xl border ${themeClasses.border.primary} p-6 hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className={`text-xl font-bold ${themeClasses.text.primary} mb-2 font-noto-serif`}>
                        {accreditation.name}
                      </div>
                      <div className={`w-16 h-8 ${themeClasses.bg.accent} rounded flex items-center justify-center mb-3`}>
                        <span className={`text-xs font-bold ${themeClasses.text.primary}`}>
                          {accreditation.logo}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(accreditation.link, '_blank')}
                      className={`${themeClasses.button.outline} text-xs`}
                    >
                      Visit Website
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </Button>
                  </div>
                  <p className={`${themeClasses.text.secondary} font-noto-sans leading-relaxed`}>
                    {accreditation.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <LegalCompliance />

        {/* Detailed Compliance Areas */}
        <section className={`py-20 ${themeClasses.bg.secondary}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className={`text-4xl font-bold ${themeClasses.text.primary} mb-6 font-noto-serif`}>
                Our Compliance Framework
              </h2>
              <p className={`text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto font-noto-sans font-light`}>
                Comprehensive compliance policies and procedures ensuring all debt recovery activities 
                meet the highest legal and ethical standards.
              </p>
            </motion.div>

            <div className="space-y-12">
              {complianceAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`${themeClasses.bg.primary} rounded-2xl border ${themeClasses.border.primary} p-8`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className={`text-2xl font-bold ${themeClasses.text.primary} mb-4 font-noto-serif`}>
                        {area.title}
                      </h3>
                      <p className={`${themeClasses.text.secondary} leading-relaxed font-noto-sans text-lg`}>
                        {area.description}
                      </p>
                    </div>
                    <div>
                      <h4 className={`text-lg font-semibold ${themeClasses.text.primary} mb-4 font-noto-serif`}>
                        Key Requirements:
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {area.requirements.map((requirement, reqIndex) => (
                          <div key={reqIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className={`${themeClasses.text.secondary} font-noto-sans`}>
                              {requirement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Assurance */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`py-20 ${themeClasses.bg.primary}`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className={`text-4xl font-bold ${themeClasses.text.primary} mb-6 font-noto-serif`}>
              Your Assurance of Compliance
            </h2>
            <p className={`text-xl ${themeClasses.text.secondary} mb-8 font-noto-sans`}>
              When you choose A.S. Collections, you can be confident that all debt recovery activities 
              are conducted in full compliance with UK legislation and professional standards.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {[
                { title: "Legal Protection", desc: "Full legal compliance protects your business" },
                { title: "Ethical Standards", desc: "Professional approach preserves relationships" },
                { title: "Transparent Process", desc: "Clear procedures and documentation" }
              ].map((item, index) => (
                <div key={index} className={`${themeClasses.bg.secondary} rounded-xl p-6 border ${themeClasses.border.primary}`}>
                  <h3 className={`text-lg font-bold ${themeClasses.text.primary} mb-2 font-noto-serif`}>
                    {item.title}
                  </h3>
                  <p className={`${themeClasses.text.secondary} font-noto-sans text-sm`}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <Button
              onClick={() => window.location.href = '/contact'}
              size="lg"
              className={`${themeClasses.button.primary} font-semibold px-8 py-4 transition-colors duration-200 font-noto-sans`}
            >
              Discuss Compliance Requirements
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.section>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Compliance;
