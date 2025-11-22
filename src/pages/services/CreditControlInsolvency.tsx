import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/CookieConsent";
import { themeClasses } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { CheckCircle, TrendingUp, Briefcase, AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CreditControlInsolvency = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Credit Control Outsourcing",
      description: "Complete credit management and customer account handling"
    },
    {
      icon: Briefcase,
      title: "Specialist Insolvency",
      description: "Expert guidance through company insolvency procedures"
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment",
      description: "Identify and manage credit risk in your customer base"
    },
  ];

  return (
    <div className={`min-h-screen ${themeClasses.bg.primary}`}>
      <Helmet>
        <title>Credit Control & Insolvency Services | A.S. Collections</title>
        <meta
          name="description"
          content="Specialist credit control and insolvency services. Outsource your credit management, manage company insolvency risks. Expert guidance and support."
        />
        <meta name="keywords" content="credit control, insolvency services, credit management, company insolvency, credit risk" />
        <link rel="canonical" href="https://ascollections.co.uk/services/credit-control-insolvency" />
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
          <div className="absolute inset-0 opacity-10 dark:opacity-5">
            <svg width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="pattern" x="40" y="40" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#475569" strokeWidth="1" opacity="0.1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#pattern)" />
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className={`text-5xl md:text-6xl font-manrope font-bold ${themeClasses.text.primary} mb-6 leading-tight`}>
                  Credit Control & Insolvency Services
                </h1>
                <p className={`text-xl ${themeClasses.text.secondary} mb-8 font-inter leading-relaxed`}>
                  Complete outsourced credit management and specialist insolvency services. Protect your business from bad debt and manage insolvency risks effectively.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className={`font-inter ${themeClasses.text.secondary}`}>
                      Full credit control outsourcing
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className={`font-inter ${themeClasses.text.secondary}`}>
                      Expert insolvency specialists
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
                <svg
                  viewBox="0 0 300 300"
                  className="w-full max-w-sm h-auto"
                  style={{
                    filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))"
                  }}
                >
                  {/* Dynamic chart visualization */}
                  <motion.rect
                    x="30" y="200" width="40" height="30"
                    fill="#059669"
                    animate={{ height: [30, 60, 30] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.rect
                    x="85" y="180" width="40" height="50"
                    fill="#2563eb"
                    animate={{ height: [50, 80, 50] }}
                    transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
                  />
                  <motion.rect
                    x="140" y="160" width="40" height="70"
                    fill="#dc2626"
                    animate={{ height: [70, 100, 70] }}
                    transition={{ duration: 2, delay: 0.6, repeat: Infinity }}
                  />
                  <motion.rect
                    x="195" y="140" width="40" height="90"
                    fill="#f59e0b"
                    animate={{ height: [90, 120, 90] }}
                    transition={{ duration: 2, delay: 0.9, repeat: Infinity }}
                  />
                  <motion.rect
                    x="250" y="120" width="25" height="110"
                    fill="#10b981"
                    animate={{ height: [110, 140, 110] }}
                    transition={{ duration: 2, delay: 1.2, repeat: Infinity }}
                  />

                  {/* Baseline */}
                  <line x1="20" y1="230" x2="280" y2="230" stroke="#475569" strokeWidth="2" />
                  {/* Y-axis */}
                  <line x1="20" y1="50" x2="20" y2="230" stroke="#475569" strokeWidth="2" />
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Service Overview */}
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
                  Manage Credit Risk Proactively
                </h2>
                <p className={`text-lg ${themeClasses.text.secondary} mb-8 font-inter leading-relaxed`}>
                  Our credit control outsourcing takes the burden of customer account management off your team. Combined with specialist insolvency guidance, we help you avoid costly bad debts.
                </p>
                <ul className="space-y-4">
                  {[
                    "Proactive credit management systems",
                    "Customer account monitoring and follow-up",
                    "Insolvency risk identification",
                    "Strategic credit policy implementation"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className={`font-inter ${themeClasses.text.secondary}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {benefits.map((benefit, idx) => {
                  const IconComponent = benefit.icon;
                  return (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className={`${themeClasses.bg.secondary} rounded-xl border ${themeClasses.border.primary} p-6 flex items-start gap-4`}
                    >
                      <div className={`w-10 h-10 rounded-lg ${themeClasses.bg.accent} flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className={`w-6 h-6 ${themeClasses.text.accent}`} />
                      </div>
                      <div>
                        <h3 className={`font-manrope font-bold ${themeClasses.text.primary} mb-1`}>
                          {benefit.title}
                        </h3>
                        <p className={`text-sm ${themeClasses.text.secondary} font-inter`}>
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
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
              Strengthen Your Credit Management
            </h2>
            <p className={`text-lg ${themeClasses.text.secondary} mb-8 font-inter`}>
              Get expert guidance on credit control and insolvency management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/winding-up-check">
                <Button className="bg-red-700 hover:bg-red-800 text-white font-manrope font-bold px-8 py-3 rounded-full">
                  Check Winding-Up List
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="font-manrope font-bold px-8 py-3 rounded-full">
                  Get in Touch
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

export default CreditControlInsolvency;
