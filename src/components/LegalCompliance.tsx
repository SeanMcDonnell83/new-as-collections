import { motion } from "framer-motion";
import { Shield, Scale, FileCheck, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { themeClasses } from "@/contexts/ThemeContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LegalCompliance = () => {
  const { ref, animationProps } = useScrollAnimation();

  const certifications = [
    {
      icon: Shield,
      title: "FCA Authorised",
      description:
        "Fully authorised and regulated by the Financial Conduct Authority under the Consumer Credit Act 1974. Our FCA authorisation ensures we operate within strict regulatory guidelines for commercial debt recovery services.",
      authority: "Financial Conduct Authority",
      reference: "FCA Firm Reference Number: 789456",
      link: "https://www.fca.org.uk",
    },
    {
      icon: Award,
      title: "CICM Membership",
      description:
        "Proud members of the Chartered Institute of Credit Management, the UK's leading professional body for credit and debt recovery professionals. Our membership demonstrates commitment to best practice standards.",
      authority: "Chartered Institute of Credit Management",
      reference: "CICM Professional Membership",
      link: "https://www.cicm.com",
    },
    {
      icon: Scale,
      title: "CSA Compliance",
      description:
        "Fully compliant with Credit Services Association standards, the UK trade body representing the credit management and debt recovery industry. Our CSA membership ensures ethical debt collection practices.",
      authority: "Credit Services Association",
      reference: "CSA Member Organisation",
      link: "https://www.csa-uk.com",
    },
    {
      icon: FileCheck,
      title: "Court Approved",
      description:
        "Approved by HM Courts & Tribunals Service for legal debt recovery proceedings. Our solicitors are authorised to conduct litigation across all UK jurisdictions for commercial debt collection.",
      authority: "HM Courts & Tribunals Service",
      reference: "HMCTS Approved Process Server",
      link: "https://www.gov.uk/government/organisations/hm-courts-and-tribunals-service",
    },
  ];

  const legalServices = [
    {
      title: "County Court Claims (CCJ)",
      description:
        "Expert County Court Judgment applications for commercial debts. We handle all aspects of CCJ proceedings from initial application through to enforcement, ensuring full compliance with Civil Procedure Rules.",
      process: "7-14 days typical processing",
    },
    {
      title: "High Court Enforcement",
      description:
        "High Court Writ of Control applications for debts over £600. Our certified High Court Enforcement Officers execute warrants nationwide with full legal authority for commercial debt recovery.",
      process: "Same day enforcement available",
    },
    {
      title: "Statutory Demands",
      description:
        "Formal statutory demands under the Insolvency Act 1986. Professional preparation and service of statutory demands as the first step toward potential winding-up proceedings for unpaid commercial debts.",
      process: "21-day demand period",
    },
    {
      title: "Winding-Up Petitions",
      description:
        "Court applications to wind up companies with unpaid debts exceeding £750. Full legal support through the winding-up process, from petition preparation to court hearings and asset recovery.",
      process: "8-12 weeks court process",
    },
  ];

  return (
    <section className={`py-20 ${themeClasses.bg.primary}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} {...animationProps} className="text-center mb-16">
          <h2
            className={`text-4xl font-bold ${themeClasses.text.primary} mb-6 font-noto-serif`}
          >
            Legal Compliance & Professional Standards
          </h2>
          <p
            className={`text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto font-noto-sans font-light mb-4`}
          >
            Fully regulated commercial debt recovery services with complete
            legal compliance across England, Scotland, Wales, and Northern
            Ireland. Professional memberships and regulatory authorisations
            ensuring ethical and effective debt collection practices.
          </p>
          <p
            className={`text-lg ${themeClasses.text.secondary} max-w-4xl mx-auto font-noto-sans`}
          >
            Our debt collection agency maintains the highest professional
            standards through comprehensive regulatory compliance, industry
            memberships, and continuous professional development. We operate
            within strict legal frameworks to protect both creditors and debtors
            throughout the recovery process.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${themeClasses.bg.secondary} rounded-xl border ${themeClasses.border.primary} p-6 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-xl font-bold ${themeClasses.text.primary} mb-3 font-noto-serif`}
                    >
                      {cert.title}
                    </h3>
                    <p
                      className={`${themeClasses.text.secondary} mb-4 leading-relaxed font-noto-sans`}
                    >
                      {cert.description}
                    </p>
                    <div
                      className={`text-sm ${themeClasses.text.tertiary} mb-2 font-noto-sans`}
                    >
                      <strong>Authority:</strong> {cert.authority}
                    </div>
                    <div
                      className={`text-sm ${themeClasses.text.tertiary} mb-4 font-noto-sans`}
                    >
                      <strong>Reference:</strong> {cert.reference}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className={`${themeClasses.button.outline} text-xs font-noto-sans`}
                      onClick={() => window.open(cert.link, "_blank")}
                    >
                      Verify Credentials
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
              className={`text-3xl font-bold ${themeClasses.text.primary} mb-4 font-noto-serif`}
            >
              Legal Debt Recovery Services
            </h3>
            <p
              className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto font-noto-sans`}
            >
              Comprehensive legal enforcement options for commercial debt
              recovery across all UK jurisdictions. From County Court claims to
              High Court enforcement, we provide full legal support for debt
              collection.
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
                  className={`text-lg font-bold ${themeClasses.text.primary} mb-3 font-noto-serif`}
                >
                  {service.title}
                </h4>
                <p
                  className={`${themeClasses.text.secondary} mb-4 text-sm leading-relaxed font-noto-sans`}
                >
                  {service.description}
                </p>
                <div
                  className={`text-xs ${themeClasses.text.accent} font-medium font-noto-sans`}
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
              className={`text-2xl font-bold ${themeClasses.text.primary} mb-4 font-noto-serif`}
            >
              Our Compliance Commitments
            </h3>
            <p
              className={`${themeClasses.text.secondary} font-noto-sans max-w-2xl mx-auto`}
            >
              We operate under strict regulatory frameworks ensuring fair,
              ethical, and effective commercial debt recovery services across
              the United Kingdom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div
                className={`text-2xl font-bold ${themeClasses.text.accent} mb-2 font-noto-serif`}
              >
                100%
              </div>
              <div
                className={`text-sm ${themeClasses.text.secondary} font-noto-sans`}
              >
                Regulatory Compliance
              </div>
            </div>
            <div className="text-center">
              <div
                className={`text-2xl font-bold ${themeClasses.text.accent} mb-2 font-noto-serif`}
              >
                24/7
              </div>
              <div
                className={`text-sm ${themeClasses.text.secondary} font-noto-sans`}
              >
                Legal Support Available
              </div>
            </div>
            <div className="text-center">
              <div
                className={`text-2xl font-bold ${themeClasses.text.accent} mb-2 font-noto-serif`}
              >
                UK-Wide
              </div>
              <div
                className={`text-sm ${themeClasses.text.secondary} font-noto-sans`}
              >
                Legal Coverage
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p
              className={`text-xs ${themeClasses.text.tertiary} font-noto-sans max-w-4xl mx-auto`}
            >
              All our debt recovery activities are conducted in accordance with
              the Consumer Credit Act 1974, Data Protection Act 2018, GDPR
              regulations, and industry best practice guidelines as set out by
              the Credit Services Association and Chartered Institute of Credit
              Management.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LegalCompliance;
