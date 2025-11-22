import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Anchor, Container, Globe, Map, Ship } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ShippingLogistics = () => {
  const { scrollY } = useScroll();
  const xMove = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <div className={`min-h-screen ${themeClasses.bg.primary} ${themeClasses.text.primary} font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden`}>
      <Helmet>
        <title>Logistics Debt Recovery | Shipping & Freight Specialists</title>
        <meta
          name="description"
          content="Global debt recovery for shipping and logistics. We handle demurrage disputes, port liens, and cross-border freight debts."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section: Global Motion */}
        <section className={`relative min-h-screen flex items-center pt-20 overflow-hidden ${themeClasses.bg.primary} ${themeClasses.text.primary}`}>
          {/* Animated Globe/Map Background */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center opacity-30" />
            <motion.div
              className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)]"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/50 border border-blue-500 text-blue-300 text-xs font-bold mb-6 uppercase tracking-wider">
                  <Ship className="w-3 h-3" />
                  Shipping & Logistics
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
                  KEEP YOUR <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    CASH MOVING.
                  </span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 max-w-lg font-medium">
                  Demurrage charges? Port liens? Cross-border disputes? We
                  enforce payment across the global supply chain, from sender to
                  receiver.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/services/international-debt-collection">
                    <Button className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg px-8 py-6 rounded-none skew-x-[-10deg] hover:skew-x-0 transition-all">
                      <span className="skew-x-[10deg] hover:skew-x-0 inline-block">
                        GLOBAL RECOVERY
                      </span>
                    </Button>
                  </Link>
                  <Link to="/winding-up-check">
                    <Button
                      variant="outline"
                      className="bg-transparent border-slate-500 text-white hover:bg-slate-800 font-bold text-lg px-8 py-6 rounded-none skew-x-[-10deg] hover:skew-x-0 transition-all"
                    >
                      <span className="skew-x-[10deg] hover:skew-x-0 inline-block">
                        CHECK RISK
                      </span>
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* 3D Globe Visual Placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative hidden lg:flex justify-center items-center"
              >
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-blue-900 shadow-[0_0_100px_rgba(59,130,246,0.5)] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30 mix-blend-overlay" />
                  <Globe className="w-40 h-40 text-white opacity-80 animate-pulse" />
                  {/* Orbiting Elements */}
                  <motion.div
                    className="absolute w-full h-full border border-blue-400/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="w-3 h-3 bg-white rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1.5 shadow-[0_0_10px_white]" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Horizontal Motion Section: The Supply Chain */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <h2 className="text-4xl font-black text-slate-900">
              THE SUPPLY CHAIN BREAKDOWN
            </h2>
          </div>

          <motion.div
            style={{ x: xMove }}
            className="flex gap-8 px-4 w-[200vw]"
          >
            {[
              {
                title: "Demurrage Charges",
                desc: "Clients refusing to pay port storage charges that weren't your fault.",
                icon: Container,
              },
              {
                title: "Border Issues",
                desc: "The debtor is in a different country to the cargo. We bridge the gap.",
                icon: Map,
              },
              {
                title: "Fuel Costs",
                desc: "You've already paid for the fuel/driver; unpaid invoices kill your cash flow instantly.",
                icon: Anchor,
              },
              {
                title: "Port Liens",
                desc: "Understanding when you can legally hold cargo to enforce payment.",
                icon: Ship,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="w-[400px] bg-slate-50 p-8 border border-slate-200 rounded-none flex-shrink-0 hover:bg-blue-50 transition-colors"
              >
                <item.icon className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Solution: Global Reach */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-black mb-8">
                  WE KNOW <br />
                  <span className="text-blue-500">MARITIME LAW.</span>
                </h2>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  We operate globally. We understand maritime liens, Bills of
                  Lading, and freight law, allowing us to hold cargo or enforce
                  payment across borders effectively before losses escalate.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-slate-800 border-l-4 border-blue-500">
                    <h3 className="font-bold text-lg mb-1">Lien Rights</h3>
                    <p className="text-sm text-slate-400">
                      Legal cargo holding
                    </p>
                  </div>
                  <div className="p-4 bg-slate-800 border-l-4 border-blue-500">
                    <h3 className="font-bold text-lg mb-1">Global Reach</h3>
                    <p className="text-sm text-slate-400">Sender or Receiver</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-blue-600 p-12 transform rotate-2 shadow-2xl">
                  <h3 className="text-3xl font-black mb-4 uppercase">
                    No Win, No Fee
                  </h3>
                  <p className="text-blue-100 text-lg">
                    We take the risk. You get paid. It's that simple.
                  </p>
                  <div className="mt-8 w-full h-2 bg-blue-400/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-white"
                      animate={{ width: ["0%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-black text-slate-900 mb-6">
              Don't Let Your Cargo Sail Unpaid.
            </h2>
            <p className="text-xl text-slate-600 mb-10">
              Check the financial health of your shipping clients instantly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/winding-up-check">
                <Button className="bg-blue-900 text-white hover:bg-blue-800 font-bold text-xl px-10 py-8 rounded-none shadow-xl">
                  CHECK WINDING-UP LIST
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="bg-transparent border-blue-900 text-blue-900 hover:bg-blue-100 font-bold text-xl px-10 py-8 rounded-none"
                >
                  GET A QUOTE
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ShippingLogistics;
