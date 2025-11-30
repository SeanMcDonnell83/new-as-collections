import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/CookieConsent";
import { themeClasses } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Radar,
  CheckCircle,
  Database,
  Target,
  Lock,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DebtorTracing = () => {
  const radarVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const pulseVariants = {
    animate: {
      r: [30, 60, 90],
      opacity: [1, 0.5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
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
      icon: Database,
      title: "Advanced Databases",
      description:
        "Access to comprehensive UK and international debtor databases",
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Pinpoint debtor locations and assets with advanced tracing",
    },
    {
      icon: Lock,
      title: "Legal Enforcement",
      description: "Court claims and legal action backed by expert solicitors",
    },
  ];

  return (
    <div className={`min-h-screen ${themeClasses.bg.primary}`}>
      <Helmet>
        <title>Debtor Tracing & Legal Action Services | A.S. Collections</title>
        <meta
          name="description"
          content="Professional debtor tracing and legal action services. Find debtors and enforce claims across UK courts. Expert legal enforcement specialists."
        />
        <meta
          name="keywords"
          content="debtor tracing, skip tracing, legal action, court claims, debtor location services"
        />
        <link
          rel="canonical"
          href="https://ascollections.co.uk/services/debtor-tracing"
        />
      </Helmet>

      <Header />
      <main className="pt-24">
        {/* Hero Section with Radar Animation */}
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
                <h1
                  className={`text-5xl md:text-6xl font-manrope font-bold ${themeClasses.text.primary} mb-6 leading-tight`}
                >
                  Debtor Tracing & Legal Action
                </h1>
                <p
                  className={`text-xl ${themeClasses.text.secondary} mb-8 font-inter leading-relaxed`}
                >
                  Advanced debtor tracing combined with court claims and legal
                  enforcement. We locate debtors and pursue recovery through the
                  courts when necessary.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span
                      className={`font-inter ${themeClasses.text.secondary}`}
                    >
                      UK-wide court enforcement
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span
                      className={`font-inter ${themeClasses.text.secondary}`}
                    >
                      Expert solicitor-backed claims
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
                  viewBox="0 0 400 400"
                  className="w-full max-w-sm h-auto"
                  style={{
                    filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
                  }}
                >
                  {/* Radar background circles */}
                  <circle
                    cx="200"
                    cy="200"
                    r="20"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                    opacity="0.5"
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
                  <circle
                    cx="200"
                    cy="200"
                    r="100"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="1"
                    opacity="0.2"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="140"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="1"
                    opacity="0.1"
                  />

                  {/* Radar grid */}
                  <line
                    x1="200"
                    y1="60"
                    x2="200"
                    y2="340"
                    stroke="#2563eb"
                    strokeWidth="1"
                    opacity="0.2"
                  />
                  <line
                    x1="60"
                    y1="200"
                    x2="340"
                    y2="200"
                    stroke="#2563eb"
                    strokeWidth="1"
                    opacity="0.2"
                  />
                  <line
                    x1="100"
                    y1="100"
                    x2="300"
                    y2="300"
                    stroke="#2563eb"
                    strokeWidth="1"
                    opacity="0.2"
                  />
                  <line
                    x1="300"
                    y1="100"
                    x2="100"
                    y2="300"
                    stroke="#2563eb"
                    strokeWidth="1"
                    opacity="0.2"
                  />

                  {/* Center point */}
                  <circle cx="200" cy="200" r="4" fill="#dc2626" />

                  {/* Rotating radar sweep */}
                  <motion.g
                    variants={radarVariants}
                    animate="animate"
                    origin="center"
                    style={{ transformOrigin: "200px 200px" }}
                  >
                    <line
                      x1="200"
                      y1="200"
                      x2="200"
                      y2="60"
                      stroke="#dc2626"
                      strokeWidth="2"
                      opacity="0.8"
                    />
                    <path
                      d="M 200 200 L 280 140 A 100 100 0 0 1 200 100"
                      fill="none"
                      stroke="#dc2626"
                      strokeWidth="1"
                      opacity="0.3"
                    />
                  </motion.g>

                  {/* Pulse circles - target locations */}
                  {[150, 200, 250].map((x, i) => (
                    <motion.circle
                      key={`target-${i}`}
                      cx={x}
                      cy="200"
                      r="30"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="2"
                      variants={pulseVariants}
                      animate="animate"
                      transition={{ delay: i * 0.5 }}
                    />
                  ))}

                  {/* Found targets */}
                  <circle cx="150" cy="200" r="6" fill="#059669" />
                  <circle cx="200" cy="140" r="6" fill="#059669" />
                  <circle cx="260" cy="240" r="6" fill="#059669" />
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
                <h2
                  className={`text-4xl font-manrope font-bold ${themeClasses.text.primary} mb-6`}
                >
                  Locate & Pursue Debtors
                </h2>
                <p
                  className={`text-lg ${themeClasses.text.secondary} mb-8 font-inter leading-relaxed`}
                >
                  When standard collection fails, we deploy advanced tracing
                  techniques combined with legal action. Our expert team locates
                  debtors and pursues recovery through the courts.
                </p>
                <ul className="space-y-4">
                  {[
                    "Advanced debtor location technology",
                    "Solicitor-backed court proceedings",
                    "Enforcement action support",
                    "Secured costs recovery",
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
              Track Down and Recover Your Debt
            </h2>
            <p
              className={`text-lg ${themeClasses.text.secondary} mb-8 font-inter`}
            >
              Use our advanced tracing and legal enforcement services.
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

export default DebtorTracing;
