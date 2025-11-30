import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/CookieConsent";
import { themeClasses } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Globe,
  CheckCircle,
  Zap,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const InternationalDebtRecovery = () => {
  // Globe rotation animation
  const globeRotateVariants = {
    animate: {
      rotateZ: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
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
      icon: Globe,
      title: "Global Network",
      description: "Access to recovery networks across 14+ countries",
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description: "Expedited international recovery processes",
    },
    {
      icon: Users,
      title: "Local Expertise",
      description: "Regional specialists in each jurisdiction",
    },
    {
      icon: Award,
      title: "Legal Compliance",
      description: "Full compliance with international debt recovery laws",
    },
  ];

  return (
    <div className={`min-h-screen ${themeClasses.bg.primary}`}>
      <Helmet>
        <title>International Debt Recovery Services | A.S. Collections</title>
        <meta
          name="description"
          content="Cross-border debt recovery specialists. International business debt collection with expertise across 14+ countries. No Win No Fee service."
        />
        <meta
          name="keywords"
          content="international debt recovery, cross-border debt collection, export debt recovery, international business debt"
        />
        <link
          rel="canonical"
          href="https://ascollections.co.uk/services/international-debt-collection"
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
                name: "International Debt Recovery",
                item: "https://ascollections.co.uk/services/international-debt-collection",
              },
            ],
          })}
        </script>
      </Helmet>

      <Header />
      <main className="pt-24">
        {/* Hero Section with Globe Animation */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`py-24 ${themeClasses.bg.secondary} relative overflow-hidden`}
        >
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
                  International Debt Recovery
                </h1>
                <p
                  className={`text-xl ${themeClasses.text.secondary} mb-8 font-inter leading-relaxed`}
                >
                  Cross-border commercial debt recovery with expertise across
                  Europe, Asia, Americas and beyond. We navigate complex
                  international regulations to recover your debts.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span
                      className={`font-inter ${themeClasses.text.secondary}`}
                    >
                      14+ countries covered
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span
                      className={`font-inter ${themeClasses.text.secondary}`}
                    >
                      Multi-lingual team of specialists
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Right: Animated Globe */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden lg:flex justify-center"
              >
                <motion.svg
                  viewBox="0 0 400 400"
                  className="w-full max-w-sm h-auto"
                  variants={globeRotateVariants}
                  animate="animate"
                  style={{
                    filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
                  }}
                >
                  {/* Outer circle */}
                  <circle
                    cx="200"
                    cy="200"
                    r="180"
                    fill="none"
                    stroke="#475569"
                    strokeWidth="2"
                    opacity="0.3"
                  />

                  {/* Inner latitude lines */}
                  <circle
                    cx="200"
                    cy="200"
                    r="140"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="100"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="60"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="1"
                    opacity="0.3"
                  />

                  {/* Longitude lines */}
                  <line
                    x1="200"
                    y1="20"
                    x2="200"
                    y2="380"
                    stroke="#2563eb"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                  <line
                    x1="20"
                    y1="200"
                    x2="380"
                    y2="200"
                    stroke="#2563eb"
                    strokeWidth="1"
                    opacity="0.3"
                  />

                  {/* Diagonal longitude lines */}
                  <line
                    x1="85"
                    y1="85"
                    x2="315"
                    y2="315"
                    stroke="#2563eb"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                  <line
                    x1="315"
                    y1="85"
                    x2="85"
                    y2="315"
                    stroke="#2563eb"
                    strokeWidth="1"
                    opacity="0.3"
                  />

                  {/* Network connection points */}
                  {[
                    { x: 200, y: 80, label: "UK" },
                    { x: 280, y: 150, label: "Europe" },
                    { x: 320, y: 250, label: "Asia" },
                    { x: 200, y: 320, label: "Australia" },
                    { x: 80, y: 250, label: "Americas" },
                    { x: 100, y: 150, label: "Africa" },
                  ].map((point, idx) => (
                    <motion.g
                      key={idx}
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        delay: idx * 0.2,
                        repeat: Infinity,
                      }}
                    >
                      <circle cx={point.x} cy={point.y} r="8" fill="#dc2626" />
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r="12"
                        fill="none"
                        stroke="#dc2626"
                        strokeWidth="2"
                        opacity="0.5"
                      />
                    </motion.g>
                  ))}

                  {/* Connection lines between points */}
                  <line
                    x1="200"
                    y1="80"
                    x2="280"
                    y2="150"
                    stroke="#2563eb"
                    strokeWidth="1.5"
                    opacity="0.4"
                    strokeDasharray="5,5"
                  />
                  <line
                    x1="280"
                    y1="150"
                    x2="320"
                    y2="250"
                    stroke="#2563eb"
                    strokeWidth="1.5"
                    opacity="0.4"
                    strokeDasharray="5,5"
                  />
                  <line
                    x1="320"
                    y1="250"
                    x2="200"
                    y2="320"
                    stroke="#2563eb"
                    strokeWidth="1.5"
                    opacity="0.4"
                    strokeDasharray="5,5"
                  />
                  <line
                    x1="200"
                    y1="320"
                    x2="80"
                    y2="250"
                    stroke="#2563eb"
                    strokeWidth="1.5"
                    opacity="0.4"
                    strokeDasharray="5,5"
                  />
                  <line
                    x1="80"
                    y1="250"
                    x2="100"
                    y2="150"
                    stroke="#2563eb"
                    strokeWidth="1.5"
                    opacity="0.4"
                    strokeDasharray="5,5"
                  />
                  <line
                    x1="100"
                    y1="150"
                    x2="200"
                    y2="80"
                    stroke="#2563eb"
                    strokeWidth="1.5"
                    opacity="0.4"
                    strokeDasharray="5,5"
                  />
                </motion.svg>
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
                  Global Debt Recovery Expertise
                </h2>
                <p
                  className={`text-lg ${themeClasses.text.secondary} mb-8 font-inter leading-relaxed`}
                >
                  We understand the complexities of cross-border debt recovery.
                  Our international team navigates different legal systems,
                  currencies and languages to secure your payments.
                </p>
                <ul className="space-y-4">
                  {[
                    "Experience with EU, US, Asian and Commonwealth jurisdictions",
                    "Direct relationships with local recovery agents",
                    "Multi-currency payment solutions",
                    "Expert knowledge of international trade disputes",
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

        {/* Covered Regions */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`py-16 ${themeClasses.bg.secondary}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className={`text-3xl font-manrope font-bold ${themeClasses.text.primary} mb-12 text-center`}
            >
              Regions We Cover
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "UK",
                "Europe",
                "USA",
                "Canada",
                "Australia",
                "Asia",
                "Middle East",
                "Africa",
                "South America",
                "New Zealand",
                "India",
                "Singapore",
              ].map((region) => (
                <motion.div
                  key={region}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className={`${themeClasses.bg.primary} rounded-lg border ${themeClasses.border.primary} p-4 text-center font-montserrat font-bold ${themeClasses.text.primary}`}
                >
                  {region}
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
            <h2
              className={`text-3xl md:text-4xl font-manrope font-bold ${themeClasses.text.primary} mb-6`}
            >
              Recover Your International Debts
            </h2>
            <p
              className={`text-lg ${themeClasses.text.secondary} mb-8 font-inter`}
            >
              Get expert assistance with your cross-border debt recovery today.
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

export default InternationalDebtRecovery;
