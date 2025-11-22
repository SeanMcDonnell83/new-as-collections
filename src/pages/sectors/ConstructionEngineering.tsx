import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/CookieConsent";
import { themeClasses } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Building2, CheckCircle, TrendingUp, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ConstructionEngineering = () => {
  return (
    <div className={`min-h-screen ${themeClasses.bg.primary}`}>
      <Helmet>
        <title>Construction Debt Recovery Specialists | A.S. Collections</title>
        <meta
          name="description"
          content="Expert debt recovery for construction and engineering businesses. Specialists in sub-contractor payments, supplier debts, project overruns. UK-wide service."
        />
        <meta name="keywords" content="construction debt recovery, engineering debt collection, sub-contractor debt, construction payment recovery" />
        <link rel="canonical" href="https://ascollections.co.uk/sectors/construction-engineering" />
      </Helmet>

      <Header />
      <main>
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`py-24 ${themeClasses.bg.secondary} relative overflow-hidden`}
        >
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className={`text-5xl md:text-6xl font-manrope font-bold ${themeClasses.text.primary} mb-6 leading-tight`}>
                  Construction Debt Recovery
                </h1>
                <p className={`text-xl ${themeClasses.text.secondary} mb-8 font-inter leading-relaxed`}>
                  Specialist debt recovery for construction and engineering sectors. We understand project payment disputes, sub-contractor debts, and material supplier issues.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className={`font-inter ${themeClasses.text.secondary}`}>
                      Sub-contractor payment recovery
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className={`font-inter ${themeClasses.text.secondary}`}>
                      Project dispute resolution
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden lg:flex justify-center"
              >
                <div className={`w-64 h-64 rounded-2xl ${themeClasses.bg.secondary} flex items-center justify-center border ${themeClasses.border.primary}`}>
                  <Building2 className="w-32 h-32 opacity-20" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Sector Overview */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`py-20 ${themeClasses.bg.primary}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className={`text-4xl font-manrope font-bold ${themeClasses.text.primary} mb-6`}>
                  Why We Excel in Construction Recovery
                </h2>
                <p className={`text-lg ${themeClasses.text.secondary} mb-8 font-inter leading-relaxed`}>
                  The construction industry presents unique challenges: project timelines, contractor disputes, payment terms variations. We specialise in understanding and resolving these complex situations.
                </p>
                <ul className="space-y-4">
                  {[
                    "25+ years experience in construction sector recovery",
                    "Expert knowledge of JCT contracts and payment terms",
                    "Rapid response to project delay disputes",
                    "Relationships with major construction bodies"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className={`font-inter ${themeClasses.text.secondary}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                {[
                  { title: "98% Recovery Rate", stat: "In construction sector" },
                  { title: "£100M+", stat: "Recovered for construction clients" },
                  { title: "500+ Projects", stat: "Successfully resolved" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`${themeClasses.bg.secondary} rounded-xl border ${themeClasses.border.primary} p-6`}
                  >
                    <h3 className={`text-3xl font-manrope font-bold text-green-600 mb-1`}>
                      {item.title}
                    </h3>
                    <p className={`${themeClasses.text.secondary} font-inter`}>
                      {item.stat}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Common Issues */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`py-16 ${themeClasses.bg.secondary}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-manrope font-bold ${themeClasses.text.primary} mb-12 text-center`}>
              Construction Payment Issues We Recover
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Unpaid invoices from main contractors",
                "Sub-contractor payment disputes",
                "Supply chain payment delays",
                "Project completion payment disagreements",
                "Retention payment recovery",
                "Defects liability period disputes"
              ].map((issue, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`${themeClasses.bg.primary} rounded-lg border ${themeClasses.border.primary} p-4 flex items-center gap-4`}
                >
                  <TrendingUp className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className={`font-inter ${themeClasses.text.secondary}`}>{issue}</span>
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
          className={`py-16 ${themeClasses.bg.secondary}`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className={`text-3xl md:text-4xl font-manrope font-bold ${themeClasses.text.primary} mb-6`}>
              Recover Your Construction Debts
            </h2>
            <p className={`text-lg ${themeClasses.text.secondary} mb-8 font-inter`}>
              Get specialist help with your construction sector debt recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/winding-up-check">
                <Button className="bg-red-700 hover:bg-red-800 text-white font-manrope font-bold px-8 py-3 rounded-full">
                  Check Winding-Up List
                </Button>
              </Link>
              <Link to="/services/commercial-debt-recovery">
                <Button variant="outline" className="font-manrope font-bold px-8 py-3 rounded-full">
                  View Our Services
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

export default ConstructionEngineering;
