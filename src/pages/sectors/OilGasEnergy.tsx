import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/CookieConsent";
import { themeClasses } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Flame, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OilGasEnergy = () => {
  return (
    <div className={`min-h-screen ${themeClasses.bg.primary}`}>
      <Helmet>
        <title>Oil & Gas Energy Sector Debt Recovery | A.S. Collections</title>
        <meta name="description" content="Complex debt recovery for oil, gas and energy sector. Specialists in supply chain disputes, contract disputes, equipment leasing debts." />
        <meta name="keywords" content="oil and gas debt recovery, energy sector debt collection, supply chain debt, contract dispute recovery" />
        <link rel="canonical" href="https://ascollections.co.uk/sectors/oil-gas-energy" />
      </Helmet>

      <Header />
      <main>
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className={`py-24 ${themeClasses.bg.secondary}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <h1 className={`text-5xl md:text-6xl font-manrope font-bold ${themeClasses.text.primary} mb-6`}>
                  Oil, Gas & Energy Debt Recovery Specialists
                </h1>
                <p className={`text-xl ${themeClasses.text.secondary} mb-8 font-inter leading-relaxed`}>
                  High-value commercial debt recovery for operators, contractors and suppliers in the oil, gas and wider energy sector. We deal with complex, multi‑jurisdictional supply chains and technical contracts.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className={`font-inter ${themeClasses.text.secondary}`}>Supply chain debt recovery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className={`font-inter ${themeClasses.text.secondary}`}>Complex equipment disputes</span>
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="hidden lg:flex justify-center">
                <div className={`w-64 h-64 rounded-2xl ${themeClasses.bg.secondary} flex items-center justify-center border ${themeClasses.border.primary}`}>
                  <Flame className="w-32 h-32 opacity-20" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className={`py-20 ${themeClasses.bg.primary}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-4xl font-manrope font-bold ${themeClasses.text.primary} mb-6 text-center`}>
              Why collecting in oil & gas is difficult
            </h2>
            <p className={`text-lg ${themeClasses.text.secondary} mb-10 font-inter leading-relaxed text-center max-w-3xl mx-auto`}>
              Oil and gas debts are high‑value and high‑stakes. Long project lifecycles, complex contracting chains and multiple jurisdictions mean payments often get stuck at the top while smaller contractors carry the risk.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Tiered contracting chains where liability is unclear","Major operators slow‑rolling approvals and payment runs","Cross‑border contracts governed by different legal systems","Disputes over day‑rates, downtime and variation orders","Joint venture structures obscuring who actually owes the money","Reluctance to challenge blue‑chip names despite mounting arrears"].map((item, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }} className={`${themeClasses.bg.secondary} rounded-lg border ${themeClasses.border.primary} p-6`}>
                  <p className={`font-manrope font-bold ${themeClasses.text.primary}`}>{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className={`py-16 ${themeClasses.bg.secondary}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className={`text-3xl md:text-4xl font-manrope font-bold ${themeClasses.text.primary} mb-4`}>
              Our approach to oil, gas & energy debt recovery
            </h2>
            <p className={`text-lg ${themeClasses.text.secondary} mb-8 font-inter leading-relaxed`}>
              We have the legal weight to cut through supply chain bureaucracy and demand payment from major operators and contractors. Our commercial debt recovery strategies protect your position without jeopardising future project work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/winding-up-check">
                <Button className="bg-red-700 hover:bg-red-800 text-white font-manrope font-bold px-8 py-3 rounded-full">Check Winding-Up List</Button>
              </Link>
              <Link to="/services/commercial-debt-recovery">
                <Button variant="outline" className="font-manrope font-bold px-8 py-3 rounded-full">View Our Services</Button>
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

export default OilGasEnergy;
