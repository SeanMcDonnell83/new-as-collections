import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { themeClasses } from "@/contexts/ThemeContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle2,
  HardHat,
  Ruler,
  FileText,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ConstructionEngineering = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-montserrat selection:bg-blue-500 selection:text-white overflow-x-hidden">
      <Helmet>
        <title>Construction Debt Recovery | JCT & Retention Specialists</title>
        <meta
          name="description"
          content="Specialist construction debt recovery. We resolve JCT contract disputes, recover unpaid retentions, and enforce adjudication awards. No Win, No Fee."
        />
        <meta
          property="og:title"
          content="Construction Debt Recovery | JCT & Retention Specialists"
        />
        <meta
          property="og:description"
          content="Specialist construction debt recovery. We resolve JCT contract disputes, recover unpaid retentions, and enforce adjudication awards. No Win, No Fee."
        />
        <meta
          property="og:url"
          content="https://ascollections.co.uk/sectors/construction-engineering"
        />
        <link
          rel="canonical"
          href="https://ascollections.co.uk/sectors/construction-engineering"
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section: The Blueprint */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          {/* Blueprint Grid Background */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
                backgroundSize: "200px 200px",
              }}
            />
          </div>

          {/* Animated Blueprint Lines */}
          <svg className="absolute inset-0 w-full h-full z-0 opacity-30 pointer-events-none">
            <motion.path
              d="M0 100 H 1000 M 200 0 V 1000"
              stroke="white"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            <motion.rect
              x="20%"
              y="20%"
              width="60%"
              height="60%"
              stroke="white"
              strokeWidth="2"
              fill="transparent"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, delay: 1, ease: "easeInOut" }}
            />
          </svg>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/50 border border-blue-700 text-blue-200 text-sm font-bold mb-6">
                <HardHat className="w-4 h-4" />
                <span>Construction & Engineering Specialists</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight">
                BUILDING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  CASH FLOW.
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-lg font-medium">
                We recover unpaid applications, retentions, and variations.
                Don't let "Pay When Paid" clauses destroy your margins.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/winding-up-check">
                  <Button className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg px-8 py-6 rounded-none border-2 border-blue-400 shadow-[4px_4px_0px_0px_rgba(59,130,246,1)] hover:translate-y-1 hover:shadow-none transition-all">
                    CHECK WINDING-UP LIST
                  </Button>
                </Link>
                <Link to="/services/commercial-debt-recovery">
                  <Button
                    variant="outline"
                    className="bg-transparent border-2 border-slate-600 text-white hover:bg-slate-800 font-bold text-lg px-8 py-6 rounded-none"
                  >
                    OUR SERVICES
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Retention Calculator Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-slate-900/80 backdrop-blur-md border-2 border-blue-500/30 p-8 rounded-sm shadow-2xl">
                <div className="flex items-center justify-between mb-6 border-b border-slate-700 pb-4">
                  <h3 className="text-xl font-bold text-blue-400 flex items-center gap-2">
                    <Ruler className="w-5 h-5" />
                    RETENTION CALCULATOR
                  </h3>
                  <span className="text-xs font-mono text-slate-500">
                    EST. LOCKED CASH
                  </span>
                </div>
                <div className="space-y-6 font-mono">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Contract Value</span>
                    <span className="text-white font-bold">£500,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Retention (5%)</span>
                    <span className="text-red-400 font-bold">-£25,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Defects Period</span>
                    <span className="text-white">12 Months</span>
                  </div>
                  <div className="pt-4 border-t border-slate-700">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-400 font-bold">
                        CASH LOCKED UP
                      </span>
                      <span className="text-3xl font-bold text-white">
                        £25,000
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">
                      *Typical retention held past practical completion.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pain Points: The "Snag List" */}
        <section className="py-24 bg-slate-900 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                  <AlertTriangle className="w-10 h-10 text-yellow-500" />
                  THE SNAG LIST
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      title: '"Pay When Paid" Clauses',
                      desc: "Main contractors using this illegal excuse to withhold your funds while they sit on the cash.",
                    },
                    {
                      title: "Indefinite Retentions",
                      desc: "Money held for years after the defects liability period has ended, often forgotten or ignored.",
                    },
                    {
                      title: "Spurious Disputes",
                      desc: "Complex disputes hiding behind minor 'quality issues' just to delay payment applications.",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 }}
                      className="flex gap-4"
                    >
                      <div className="w-1 h-full bg-red-500/50 rounded-full" />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg transform rotate-3" />
                <div className="relative bg-slate-800 p-8 rounded-lg border border-slate-700">
                  <h3 className="text-2xl font-bold mb-6 text-blue-400">
                    Our Solution
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                      <span className="text-slate-300">
                        We understand the Housing Grants, Construction and
                        Regeneration Act.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                      <span className="text-slate-300">
                        We know how to enforce Adjudication to get paid fast
                        without court.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                      <span className="text-slate-300">
                        We recover unpaid retentions effectively.
                      </span>
                    </li>
                  </ul>
                  <div className="mt-8 pt-8 border-t border-slate-700">
                    <Link to="/services/commercial-debt-recovery">
                      <Button className="w-full bg-white text-slate-900 hover:bg-slate-200 font-bold py-4">
                        VIEW RECOVERY SOLUTIONS{" "}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Scroll Section */}
        <section className="py-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-12">
              WE SPEAK <span className="text-blue-500">JCT</span> &{" "}
              <span className="text-blue-500">NEC</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: FileText, label: "Payment Notices" },
                { icon: Ruler, label: "Final Accounts" },
                { icon: HardHat, label: "Sub-Contracts" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-slate-900 p-8 border border-slate-800 hover:border-blue-500 transition-colors group"
                >
                  <item.icon className="w-12 h-12 text-slate-600 group-hover:text-blue-500 mb-4 mx-auto transition-colors" />
                  <h3 className="text-xl font-bold text-white">{item.label}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              STOP FUNDING YOUR CLIENT'S CASH FLOW.
            </h2>
            <p className="text-xl text-blue-100 mb-10 font-medium">
              Check if your debtor is already on the winding-up list. It's free
              and instant.
            </p>
            <Link to="/winding-up-check">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 font-black text-xl px-10 py-8 rounded-none shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                CHECK WINDING-UP LIST NOW
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ConstructionEngineering;
