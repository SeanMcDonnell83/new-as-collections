import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Flame, Globe, Anchor, ShieldAlert, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OilGasEnergy = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
      <Helmet>
        <title>Oil & Gas Debt Recovery | Energy Sector Specialists</title>
        <meta
          name="description"
          content="High-value debt recovery for the Oil, Gas & Energy sectors. We handle complex supply chain disputes, cross-border payments, and operator debts."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section: Heavy Industry */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          {/* Parallax Background */}
          <motion.div 
            style={{ y: backgroundY }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-black opacity-90 z-10" />
            {/* Abstract Industrial Shapes */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,100,0,0.1),transparent_70%)]" />
          </motion.div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-1 w-20 bg-orange-500" />
                  <span className="text-orange-500 font-bold tracking-widest uppercase">Heavy Industry Recovery</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
                  HIGH STAKES. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
                    COMPLEX CHAINS.
                  </span>
                </h1>
                <p className="text-2xl text-slate-400 mb-10 max-w-2xl font-light leading-relaxed">
                  We cut through the corporate bureaucracy of major operators. 
                  Cross-border enforcement for the energy sector's most complex disputes.
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link to="/winding-up-check">
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-10 py-6 rounded-none border border-orange-500 transition-all">
                      CHECK RISK REGISTER
                    </Button>
                  </Link>
                  <Link to="/services/international-debt-collection">
                    <Button variant="outline" className="bg-transparent border-slate-600 text-white hover:bg-slate-800 font-bold text-lg px-10 py-6 rounded-none">
                      GLOBAL RECOVERY
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pain Points: The Pressure Cooker */}
        <section className="py-32 bg-black relative border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-4xl font-bold mb-6 text-white">
                  SECTOR <br />
                  CHALLENGES
                </h2>
                <p className="text-slate-400 text-lg">
                  These aren't £500 invoices. They are £50k - £500k+ liabilities that threaten your operational stability.
                </p>
              </div>
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Complex Supply Chains",
                    desc: "Getting paid by the Tier 1 contractor when the Operator hasn't paid them. The classic 'pay when paid' trap.",
                    icon: Layers
                  },
                  {
                    title: "International Law",
                    desc: "The debtor is in Aberdeen, the HQ in Texas, and the project in the North Sea. Jurisdictional nightmares.",
                    icon: Globe
                  },
                  {
                    title: "Corporate Bureaucracy",
                    desc: "Invoices lost in the system of major operators. We know how to bypass the helpdesk and reach decision makers.",
                    icon: ShieldAlert
                  },
                  {
                    title: "High Value Risk",
                    desc: "Large exposure on single projects. One bad debt can sink a service company.",
                    icon: Flame
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-slate-900/50 p-8 border border-slate-800 hover:border-orange-500/50 transition-colors"
                  >
                    <item.icon className="w-10 h-10 text-orange-500 mb-6" />
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solution: The Heavyweights */}
        <section className="py-32 bg-slate-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 to-black opacity-50" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="relative">
                  <div className="absolute -inset-4 bg-orange-500/20 blur-xl rounded-full" />
                  <Globe className="w-64 h-64 text-slate-800 mx-auto relative z-10" strokeWidth={0.5} />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <Anchor className="w-32 h-32 text-orange-500" />
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  GLOBAL REACH. <br />
                  LOCAL ENFORCEMENT.
                </h2>
                <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                  We have the legal weight to cut through the noise. Whether it's a drilling contractor in the North Sea or an equipment rental firm in the Middle East, we handle the cross-border complexity.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-1 bg-orange-500" />
                    <span className="text-lg font-bold">Multi-Jurisdictional Support</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-1 bg-orange-500" />
                    <span className="text-lg font-bold">Supply Chain Dispute Resolution</span>
                  </div>
                </div>
                <div className="mt-12">
                  <Link to="/services/international-debt-collection">
                    <Button className="bg-white text-black hover:bg-slate-200 font-bold px-8 py-4 rounded-none">
                      EXPLORE INTERNATIONAL SERVICES <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-orange-600">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
              SECURE YOUR SUPPLY CHAIN.
            </h2>
            <p className="text-xl text-orange-100 mb-12 max-w-2xl mx-auto">
              Don't let a single operator failure bring down your business. Check their solvency now.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/winding-up-check">
                <Button className="bg-black text-white hover:bg-slate-900 font-bold text-xl px-12 py-6 rounded-none border border-black transition-all">
                  CHECK WINDING-UP LIST
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-bold text-xl px-12 py-6 rounded-none">
                  SPEAK TO A SPECIALIST
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

export default OilGasEnergy;
