import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/CookieConsent";
import { themeClasses } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Warehouse, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ShippingLogistics = () => {
  return (
    <div className={`min-h-screen ${themeClasses.bg.primary}`}>
      <Helmet>
        <title>Shipping & Logistics Debt Recovery | A.S. Collections</title>
        <meta name="description" content="Specialist debt recovery for shipping and logistics companies. Recover freight charges, shipping disputes, warehouse fees, and transport debts." />
        <meta name="keywords" content="logistics debt recovery, shipping fee collection, freight charge recovery, transport debt recovery, warehouse fee disputes" />
        <link rel="canonical" href="https://ascollections.co.uk/sectors/shipping-logistics" />
      </Helmet>

      <Header />
      <main>
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className={`py-24 ${themeClasses.bg.secondary}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <h1 className={`text-5xl md:text-6xl font-manrope font-bold ${themeClasses.text.primary} mb-6`}>Shipping & Logistics Debt Recovery</h1>
                <p className={`text-xl ${themeClasses.text.secondary} mb-8 font-inter leading-relaxed`}>
                  Specialist recovery services for the logistics sector. We handle freight charges, shipping disputes, warehouse fees, and transport company debts.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className={`font-inter ${themeClasses.text.secondary}`}>Freight and shipping charges recovery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className={`font-inter ${themeClasses.text.secondary}`}>Fast-track dispute resolution</span>
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="hidden lg:flex justify-center">
                <div className={`w-64 h-64 rounded-2xl ${themeClasses.bg.secondary} flex items-center justify-center border ${themeClasses.border.primary}`}>
                  <Warehouse className="w-32 h-32 opacity-20" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className={`py-20 ${themeClasses.bg.primary}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-4xl font-manrope font-bold ${themeClasses.text.primary} mb-12 text-center`}>Logistics Sector Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Freight Charge Disputes", "Warehouse Fee Recovery", "Port & Terminal Fees", "Customs Clearance Charges", "Rapid Resolution", "Commercial Relationships"].map((item, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }} className={`${themeClasses.bg.secondary} rounded-lg border ${themeClasses.border.primary} p-6`}>
                  <p className={`font-manrope font-bold ${themeClasses.text.primary}`}>{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className={`py-16 ${themeClasses.bg.secondary}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className={`text-3xl md:text-4xl font-manrope font-bold ${themeClasses.text.primary} mb-6`}>Recover Your Logistics Debts</h2>
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

export default ShippingLogistics;
