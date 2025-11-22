import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { themeClasses } from "@/contexts/ThemeContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Layers,
  Zap,
  Globe,
  Briefcase,
  Monitor,
  Film,
  Car,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OtherIndustries = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <div className={`min-h-screen ${themeClasses.bg.primary} ${themeClasses.text.primary} font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden`}>
      <Helmet>
        <title>Bespoke Debt Recovery | Media, Tech, Automotive & More</title>
        <meta
          name="description"
          content="Specialist debt recovery for niche sectors including Media, Technology, Automotive, and Manufacturing. Bespoke solutions for complex B2B disputes."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section: The Collage */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900 text-white">
          {/* Dynamic Background Collage */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="grid grid-cols-4 grid-rows-4 h-full w-full gap-1 transform -rotate-12 scale-125">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-br ${i % 2 === 0 ? "from-indigo-600 to-purple-600" : "from-blue-600 to-cyan-600"} opacity-${(i % 5) * 20 + 20}`}
                />
              ))}
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/50 border border-indigo-500 text-indigo-300 text-xs font-bold mb-6 uppercase tracking-wider">
                  <Layers className="w-3 h-3" />
                  Bespoke Recovery Solutions
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
                  DON'T SEE <br />
                  YOUR SECTOR? <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    WE COVER IT.
                  </span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 max-w-lg font-medium">
                  From Media & Tech to Automotive & Manufacturing. If it's a B2B
                  debt, we have the expertise to recover it.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-indigo-500/20 transition-all">
                      Get a Quote
                    </Button>
                  </Link>
                  <Link to="/services/commercial-debt-recovery">
                    <Button
                      variant="outline"
                      className="bg-transparent border-slate-500 text-white hover:bg-slate-800 font-bold text-lg px-8 py-6 rounded-lg"
                    >
                      Our Services
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Visual: The Sector Grid */}
              <motion.div
                style={{ y }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:grid grid-cols-2 gap-4"
              >
                {[
                  { icon: Monitor, label: "Technology", color: "bg-blue-500" },
                  {
                    icon: Film,
                    label: "Media & Creative",
                    color: "bg-purple-500",
                  },
                  { icon: Car, label: "Automotive", color: "bg-red-500" },
                  {
                    icon: Briefcase,
                    label: "Professional Services",
                    color: "bg-emerald-500",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className={`${item.color} p-8 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center aspect-square`}
                  >
                    <item.icon className="w-12 h-12 text-white mb-4" />
                    <h3 className="font-bold text-xl">{item.label}</h3>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Niche Markets Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4 text-slate-900">
                SPECIALIST EXPERTISE
              </h2>
              <p className="text-xl text-slate-500">
                We understand the nuances of your industry.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Media & Creative",
                  desc: "Recovering unpaid invoices for agencies, freelancers, and production houses. We understand intellectual property leverage.",
                  icon: Film,
                },
                {
                  title: "Technology & SaaS",
                  desc: "Handling subscription defaults, software licensing disputes, and development contract arrears.",
                  icon: Monitor,
                },
                {
                  title: "Automotive & Transport",
                  desc: "From fleet leasing debts to garage repair invoices. We know the vehicle recovery laws.",
                  icon: Car,
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-indigo-500 transition-colors group"
                >
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution: Supplier Disputes */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-black mb-8">
                  SUPPLIER DISPUTES <br />
                  <span className="text-indigo-400">RESOLVED.</span>
                </h2>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Complex B2B disputes often hide behind "quality issues" or
                  "contractual technicalities." We cut through the noise to get
                  to the truth: the money is owed, and it needs to be paid.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                    <span className="font-bold">Contract Analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                    <span className="font-bold">Dispute Mediation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                    <span className="font-bold">Legal Enforcement</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-indigo-600/20 blur-2xl rounded-full" />
                <div className="relative bg-slate-950 p-8 rounded-2xl border border-slate-800">
                  <h3 className="text-2xl font-bold mb-6">Our Approach</h3>
                  <p className="text-slate-400 mb-6">
                    "We don't just send letters. We understand your business
                    model and apply the right pressure points to secure
                    payment."
                  </p>
                  <Link to="/services/commercial-debt-recovery">
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4">
                      View Recovery Process
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-indigo-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Globe className="w-16 h-16 text-indigo-200 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Whatever Your Industry.
            </h2>
            <p className="text-xl text-indigo-100 mb-10">
              If you have a B2B debt, we have a solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-white text-indigo-600 hover:bg-indigo-50 font-bold text-xl px-10 py-8 rounded-lg shadow-xl">
                  Speak to a Specialist
                </Button>
              </Link>
              <Link to="/winding-up-check">
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 font-bold text-xl px-10 py-8 rounded-lg"
                >
                  Check Debtor Risk
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

export default OtherIndustries;
