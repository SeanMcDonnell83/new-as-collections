import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/CookieConsent";
import { themeClasses } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { BookOpen, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PrivateSchoolsEducation = () => {
  return (
    <div className={`min-h-screen ${themeClasses.bg.primary}`}>
      <Helmet>
        <title>Independent Schools Education Debt Recovery | A.S. Collections</title>
        <meta name="description" content="Specialist debt recovery for independent schools and educational institutions. Sensitive handling of student fee disputes and supplier debts." />
        <meta name="keywords" content="school fee debt recovery, education debt collection, independent schools payment recovery, student fee disputes" />
        <link rel="canonical" href="https://ascollections.co.uk/sectors/private-schools-education" />
      </Helmet>

      <Header />
      <main>
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className={`py-24 ${themeClasses.bg.secondary}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <h1 className={`text-5xl md:text-6xl font-manrope font-bold ${themeClasses.text.primary} mb-6`}>
                  Independent Schools Debt Recovery Specialists
                </h1>
                <p className={`text-xl ${themeClasses.text.secondary} mb-8 font-inter leading-relaxed`}>
                  Specialist commercial debt recovery for independent schools and colleges. We recover unpaid term fees, bursary shortfalls and ancillary charges with discretion and care.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className={`font-inter ${themeClasses.text.secondary}`}>Discreet student fee recovery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className={`font-inter ${themeClasses.text.secondary}`}>Institution reputation protection</span>
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="hidden lg:flex justify-center">
                <div className={`w-64 h-64 rounded-2xl ${themeClasses.bg.secondary} flex items-center justify-center border ${themeClasses.border.primary}`}>
                  <BookOpen className="w-32 h-32 opacity-20" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className={`py-20 ${themeClasses.bg.primary}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-4xl font-manrope font-bold ${themeClasses.text.primary} mb-6 text-center`}>
              Why collecting in education is difficult
            </h2>
            <p className={`text-lg ${themeClasses.text.secondary} mb-10 font-inter leading-relaxed text-center max-w-3xl mx-auto`}>
              Chasing parents for unpaid school fees is delicate. You need to recover funds without damaging the school’s reputation or disrupting the pupil’s education. Term dates, bursaries and parental contracts all add legal and emotional complexity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Parents falling into arrears over multiple terms","Unclear parental contracts and responsibility for fees","Bursary and scholarship shortfalls that were never budgeted","Reluctance to escalate for fear of reputational damage","International parents leaving the UK without settling balances","Balancing fee recovery with safeguarding and pastoral duties"].map((item, idx) => (
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
              Our approach to education debt recovery
            </h2>
            <p className={`text-lg ${themeClasses.text.secondary} mb-8 font-inter leading-relaxed`}>
              We operate with absolute discretion. Our soft collection strategy preserves the parent–school relationship whilst ensuring fees, extras and boarding costs are settled before the next term begins.
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

export default PrivateSchoolsEducation;
