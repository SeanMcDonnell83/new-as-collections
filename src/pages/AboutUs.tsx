import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/CookieConsent";
import { themeClasses } from "@/contexts/ThemeContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  CheckCircle,
  TrendingUp,
  Shield,
  Award,
  Users,
  Lightbulb,
} from "lucide-react";

const AboutUs = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <div
      className={`min-h-screen ${themeClasses.bg.primary} overflow-x-hidden`}
    >
      <Helmet>
        <title>
          About Us | Leading UK Debt Collection Agency | A.S. Collections
        </title>
        <meta
          name="description"
          content="Meet Emilie Campbell and the A.S. Collections team. Leading UK debt recovery specialists with 98% success rate, £50M+ recovered. Our mission, values and expertise."
        />
      </Helmet>

      <Header />
      <main>
        {/* Hero Section: The Legacy */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/80 to-slate-900 z-10" />
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="London Skyline"
              className="w-full h-full object-cover opacity-40"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
                LEADING UK <br />
                COMMERCIAL DEBT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  RECOVERY SPECIALISTS.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                Decades of experience. Millions recovered. One clear mission.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Leadership Section: Split Screen */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/40 to-purple-600/40 rounded-2xl transform rotate-3 translate-x-4 translate-y-4" />
                <div className="relative z-10 rounded-2xl shadow-2xl w-full h-[600px] bg-gradient-to-br from-slate-900 via-slate-800 to-black flex items-center justify-center overflow-hidden">
                  {/* Animated SVG Shape */}
                  <svg
                    className="absolute w-64 h-64 opacity-20"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="grad1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#60a5fa"
                          stopOpacity="0.5"
                        />
                        <stop
                          offset="100%"
                          stopColor="#a78bfa"
                          stopOpacity="0.5"
                        />
                      </linearGradient>
                    </defs>
                    <circle cx="100" cy="100" r="90" fill="url(#grad1)" />
                    <rect
                      x="30"
                      y="30"
                      width="140"
                      height="140"
                      fill="none"
                      stroke="url(#grad1)"
                      strokeWidth="2"
                      opacity="0.3"
                    />
                  </svg>
                  <div className="relative z-10 text-center">
                    <p className="text-slate-400 text-sm font-montserrat font-700 uppercase tracking-widest mb-2">
                      Leadership
                    </p>
                    <h3 className="text-4xl font-black text-white font-montserrat">
                      Emilie Campbell
                    </h3>
                    <p className="text-slate-300 text-sm mt-2 font-inter">
                      Managing Director
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                  LEADERSHIP <br />
                  WITH <span className="text-blue-600">VISION.</span>
                </h2>
                <blockquote className="text-2xl text-slate-600 italic font-serif mb-8 border-l-4 border-blue-600 pl-6">
                  "Our mission is simple: To revolutionize commercial debt
                  recovery by combining cutting-edge technology with time-tested
                  human expertise."
                </blockquote>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  We deliver exceptional results whilst preserving the
                  relationships that matter most to our clients' businesses. We
                  believe effective debt recovery shouldn't damage business
                  relationships.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our mission is to provide ethical, professional, and highly
                  effective commercial debt collection services that protect and
                  enhance reputation whilst maximizing recovery rates.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section: Horizontal Scroll */}
        <section className="py-24 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <h2 className="text-4xl font-black text-slate-900">
              OUR CORE VALUES
            </h2>
          </div>

          <div className="flex gap-8 px-4 overflow-x-auto pb-12 snap-x">
            {[
              {
                title: "Perseverance",
                desc: "We don't give up. If the debt is recoverable, we will recover it.",
                icon: TrendingUp,
                color: "bg-blue-500",
              },
              {
                title: "Professionalism",
                desc: "We represent your brand with the highest standards of conduct.",
                icon: Award,
                color: "bg-purple-500",
              },
              {
                title: "Innovation",
                desc: "Using the latest tracing technology to find debtors who don't want to be found.",
                icon: Lightbulb,
                color: "bg-orange-500",
              },
              {
                title: "Integrity",
                desc: "Transparent pricing. No hidden fees. Honest advice.",
                icon: Shield,
                color: "bg-green-500",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="min-w-[350px] bg-white p-8 rounded-2xl shadow-xl border border-slate-100 snap-center"
              >
                <div
                  className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Sticky Trust Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white py-4 z-40 border-t border-slate-800 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex gap-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-bold">£3.2M+ Recovered</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-bold">98% Success Rate</span>
              </div>
            </div>
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-6 py-2 rounded-full transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </main>
      <div className="mb-16">
        <Footer />
      </div>
      <CookieConsent />
    </div>
  );
};

export default AboutUs;
