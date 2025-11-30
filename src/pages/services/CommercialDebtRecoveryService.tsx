import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/CookieConsent";
import { themeClasses } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  CheckCircle,
  TrendingUp,
  Shield,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CommercialDebtRecoveryService = () => {
  // Blueprint animation variants
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.1, duration: 1.5, ease: "easeInOut" },
        opacity: { delay: i * 0.1, duration: 0.5 },
      },
    }),
  };

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
      title: "98% Success Rate",
      description:
        "Industry-leading recovery success with proven methodologies",
    },
    {
      icon: Clock,
      title: "14-Day Average Recovery",
      description: "Fast turnaround on successful collections",
    },
    {
      icon: Shield,
      title: "Professional Approach",
      description:
        "Specialist debt collectors protecting your business relationships",
    },
    {
      icon: CheckCircle,
      title: "No Win, No Fee",
      description: "Zero upfront costs, you only pay when we recover your debt",
    },
  ];

  return (
    <div className={`min-h-screen ${themeClasses.bg.primary}`}>
      <Helmet>
        <title>Commercial B2B Debt Collection UK | A.S. Collections</title>
        <meta
          name="description"
          content="Professional commercial B2B debt collection services UK-wide. Specialising in Construction, Food & Drink, Oil & Gas industries. 98% success rate, No Win No Fee."
        />
        <meta
          name="keywords"
          content="commercial debt collection, B2B debt recovery, business debt collection UK, commercial debt agency"
        />
        <link
          rel="canonical"
          href="https://ascollections.co.uk/services/commercial-debt-recovery"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://ascollections.co.uk",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: "https://ascollections.co.uk/services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Commercial Debt Recovery",
                item: "https://ascollections.co.uk/services/commercial-debt-recovery",
              },
            ],
          })}
        </script>
      </Helmet>

      <Header />
      <main>
        {/* Hero Section with Blueprint Animation */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`py-24 ${themeClasses.bg.secondary} relative overflow-hidden`}
        >
          <div className="absolute inset-0 opacity-10 dark:opacity-5">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1200 600"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Blueprint grid */}
              <defs>
                <pattern
                  id="blueprint"
                  x="40"
                  y="40"
                  width="80"
                  height="80"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 80 0 L 0 0 0 80"
                    fill="none"
                    stroke="#475569"
                    strokeWidth="1"
                    opacity="0.1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#blueprint)" />
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1
                  className={`text-5xl md:text-6xl font-manrope font-bold ${themeClasses.text.primary} mb-6 leading-tight`}
                >
                  Commercial B2B Debt Collection
                </h1>
                <p
                  className={`text-xl ${themeClasses.text.secondary} mb-8 font-inter leading-relaxed`}
                >
                  UK-wide specialist debt recovery service for businesses. We
                  understand commercial relationships matter—our expert
                  collectors recover your debts professionally and discreetly.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span
                      className={`font-inter ${themeClasses.text.secondary}`}
                    >
                      Specialising in Construction, Food & Drink, Oil & Gas
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span
                      className={`font-inter ${themeClasses.text.secondary}`}
                    >
                      Proven track record across all UK regions
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Right: Animated Blueprint Drawing */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden lg:block"
              >
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-auto"
                  style={{
                    filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
                  }}
                >
                  {/* Blueprint background */}
                  <rect
                    width="400"
                    height="400"
                    fill="none"
                    stroke="#475569"
                    strokeWidth="2"
                    opacity="0.3"
                  />

                  {/* Components - animated drawing lines */}
                  <motion.path
                    d="M 50 100 L 150 100 L 150 150 L 50 150 Z"
                    fill="none"
                    stroke="#dc2626"
                    strokeWidth="2"
                    custom={0}
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                  />

                  <motion.path
                    d="M 200 100 L 350 100 L 350 150 L 200 150 Z"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                    custom={1}
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                  />

                  <motion.path
                    d="M 50 200 L 150 200 L 150 300 L 50 300 Z"
                    fill="none"
                    stroke="#059669"
                    strokeWidth="2"
                    custom={2}
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                  />

                  <motion.path
                    d="M 200 200 L 350 200 L 350 300 L 200 300 Z"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    custom={3}
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                  />

                  {/* Connection lines */}
                  <motion.path
                    d="M 150 125 L 200 125"
                    fill="none"
                    stroke="#6b7280"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    custom={4}
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                  />

                  <motion.path
                    d="M 100 150 L 100 200"
                    fill="none"
                    stroke="#6b7280"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    custom={5}
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                  />

                  <motion.path
                    d="M 275 150 L 275 200"
                    fill="none"
                    stroke="#6b7280"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    custom={6}
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                  />
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Service Overview Section */}
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
                <h2
                  className={`text-4xl font-manrope font-bold ${themeClasses.text.primary} mb-6`}
                >
                  Why Choose Our Commercial Debt Collection Service?
                </h2>
                <p
                  className={`text-lg ${themeClasses.text.secondary} mb-8 font-inter leading-relaxed`}
                >
                  With 98% success rate and an average recovery time of 14 days,
                  our experienced team specialises in complex commercial debts.
                  We work discreetly to preserve your business relationships
                  whilst ensuring payment.
                </p>
                <ul className="space-y-4">
                  {[
                    "Nationwide coverage across England, Scotland, Wales",
                    "Sector specialists: Construction, Food & Drink, Oil & Gas",
                    "Expert negotiators with legal backup",
                    "No Win, No Fee guarantee",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span
                        className={`font-inter ${themeClasses.text.secondary}`}
                      >
                        {item}
                      </span>
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
                      <div
                        className={`w-10 h-10 rounded-lg ${themeClasses.bg.accent} flex items-center justify-center flex-shrink-0`}
                      >
                        <IconComponent
                          className={`w-6 h-6 ${themeClasses.text.accent}`}
                        />
                      </div>
                      <div>
                        <h3
                          className={`font-manrope font-bold ${themeClasses.text.primary} mb-1`}
                        >
                          {benefit.title}
                        </h3>
                        <p
                          className={`text-sm ${themeClasses.text.secondary} font-inter`}
                        >
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
            <h2
              className={`text-3xl md:text-4xl font-manrope font-bold ${themeClasses.text.primary} mb-6`}
            >
              Let's Recover Your Debts
            </h2>
            <p
              className={`text-lg ${themeClasses.text.secondary} mb-8 font-inter`}
            >
              Get your free consultation or check if your client is on the
              winding-up list.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/winding-up-check">
                <Button className="bg-red-700 hover:bg-red-800 text-white font-manrope font-bold px-8 py-3 rounded-full">
                  Check Winding-Up List
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="font-manrope font-bold px-8 py-3 rounded-full"
                >
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

export default CommercialDebtRecoveryService;
