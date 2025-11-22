import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/CookieConsent";
import { themeClasses } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  Utensils,
  Zap,
  Briefcase,
  Ship,
  Layers,
} from "lucide-react";
import { Link } from "react-router-dom";

const Industries = () => {
  const sectors = [
    {
      title: "Construction & Engineering",
      href: "/sectors/construction-engineering",
      icon: Building2,
      stat: "£12.5M Recovered",
      color: "from-slate-700 to-slate-800",
      accentColor: "from-orange-500 to-orange-600",
    },
    {
      title: "Food & Drink Industry",
      href: "/sectors/food-drink-hospitality",
      icon: Utensils,
      stat: "450+ Cases",
      color: "from-slate-700 to-slate-800",
      accentColor: "from-emerald-500 to-emerald-600",
    },
    {
      title: "Oil & Gas Sector",
      href: "/sectors/oil-gas-energy",
      icon: Zap,
      stat: "£8.3M Recovered",
      color: "from-slate-700 to-slate-800",
      accentColor: "from-amber-500 to-amber-600",
    },
    {
      title: "Recruitment Agencies",
      href: "/sectors/recruitment-agencies",
      icon: Briefcase,
      stat: "97% Success",
      color: "from-slate-700 to-slate-800",
      accentColor: "from-purple-500 to-purple-600",
    },
    {
      title: "Shipping & Logistics",
      href: "/sectors/shipping-logistics",
      icon: Ship,
      stat: "380+ Recoveries",
      color: "from-slate-700 to-slate-800",
      accentColor: "from-blue-500 to-blue-600",
    },
    {
      title: "Other Industries",
      href: "/sectors/other-industries",
      icon: Layers,
      stat: "Custom Solutions",
      color: "from-slate-700 to-slate-800",
      accentColor: "from-indigo-500 to-indigo-600",
    },
  ];

  const additionalIndustries = [
    "Manufacturing",
    "Technology",
    "Healthcare",
    "Professional Services",
    "Retail & E-commerce",
    "Property & Real Estate",
    "Financial Services",
    "Media & Entertainment",
    "Automotive",
    "Telecommunications",
    "Agriculture",
    "Hospitality",
    "Legal Services",
    "Accountancy",
    "Marketing & Advertising",
    "Pharmaceuticals",
    "Energy & Utilities",
  ];

  return (
    <div className={`min-h-screen ${themeClasses.bg.primary}`}>
      <Helmet>
        <title>
          Debt Collection by Industry | Construction, Logistics & More | A.S.
          Collections
        </title>
        <meta
          name="description"
          content="Industry-specialised debt recovery expertise across UK sectors. Construction, food & drink, oil & gas, recruitment, logistics, and more."
        />
        <meta
          name="keywords"
          content="sector-specific debt recovery, construction debt collection, food drink debt recovery, recruitment debt collection, oil gas collections"
        />
        <link rel="canonical" href="https://ascollections.co.uk/industries" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Industries We Serve",
            description: "Industry-specialised debt recovery",
          })}
        </script>
      </Helmet>

      <Header />
      <main>
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative pt-12 pb-32 bg-gradient-to-b from-slate-900 to-slate-800 text-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-black mb-6 font-montserrat"
            >
              SECTORS WE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                SERVE.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-300 max-w-4xl mx-auto font-light mb-4"
            >
              Industry-specialised debt recovery expertise across all UK
              business sectors.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-slate-400 max-w-4xl mx-auto font-medium"
            >
              Our specialists understand your industry's unique challenges. We
              adapt proven methodologies to suit your requirements.
            </motion.p>
          </div>
        </motion.section>

        {/* Interactive Tiles Grid */}
        <section className={`py-24 ${themeClasses.bg.primary}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectors.map((sector, index) => {
                const IconComponent = sector.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link to={sector.href}>
                      <div
                        className={`relative h-72 rounded-3xl overflow-hidden cursor-pointer group shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4`}
                        style={{
                          borderLeftColor: sector.accentColor.includes('orange') ? '#f97316' :
                                          sector.accentColor.includes('emerald') ? '#10b981' :
                                          sector.accentColor.includes('amber') ? '#f59e0b' :
                                          sector.accentColor.includes('purple') ? '#a855f7' :
                                          sector.accentColor.includes('indigo') ? '#6366f1' :
                                          '#3b82f6'
                        }}
                      >
                        {/* Background Gradient */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${sector.color} z-0`}
                        />

                        {/* Accent Gradient Top Right */}
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${sector.accentColor} opacity-20 blur-3xl -mr-16 -mt-16`} />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300 z-10" />

                        {/* Content */}
                        <div className="relative z-20 h-full flex flex-col justify-between p-8">
                          {/* Icon & Stat */}
                          <div className="flex items-start justify-between">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${sector.accentColor}`}>
                              <IconComponent className="w-7 h-7 text-white" />
                            </div>
                            <motion.span
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{
                                duration: 0.6,
                                delay: index * 0.1 + 0.3,
                              }}
                              className={`text-xs font-montserrat font-bold bg-gradient-to-r ${sector.accentColor} bg-clip-text text-transparent px-3 py-1 rounded-full uppercase tracking-wider border border-white/20`}
                            >
                              {sector.stat}
                            </motion.span>
                          </div>

                          {/* Title & Arrow */}
                          <div>
                            <h3 className="text-2xl font-black text-white mb-4 font-montserrat group-hover:translate-y-1 transition-transform duration-300">
                              {sector.title}
                            </h3>
                            <div className="flex items-center gap-2 text-white font-bold group-hover:gap-3 transition-all duration-300">
                              Explore <ArrowRight className="w-5 h-5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* "Don't See Your Industry" Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`py-32 ${themeClasses.bg.secondary}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`text-5xl md:text-6xl font-black ${themeClasses.text.primary} mb-6 font-montserrat leading-tight`}
              >
                DON'T SEE YOUR<br />
                INDUSTRY LISTED?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto font-medium`}
              >
                Our commercial debt recovery expertise extends across all UK
                business sectors.
              </motion.p>
            </div>

            {/* Additional Industries Grid - Less Boxy */}
            <div className="mb-20">
              <h3
                className={`text-2xl font-bold ${themeClasses.text.primary} mb-12 font-montserrat text-center`}
              >
                Additional Sectors We Serve
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {additionalIndustries.map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    className={`relative group`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                    <div className={`relative ${themeClasses.bg.primary} border-l-4 border-blue-600 px-6 py-4 rounded-lg hover:shadow-lg transition-all duration-300 group-hover:translate-x-1`}>
                      <p className={`${themeClasses.text.primary} font-semibold text-lg`}>
                        {industry}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA and Benefits Combined */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className={`text-3xl font-black ${themeClasses.text.primary} mb-8 font-montserrat`}>
                  Comprehensive <br />
                  <span className="text-blue-600">Sector Expertise</span>
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Sector Knowledge",
                      description:
                        "Deep understanding of industry-specific challenges, payment terms, and business practices.",
                    },
                    {
                      title: "Relationship Preservation",
                      description:
                        "We tailor our approach to maintain the client relationships that matter most to your business.",
                    },
                    {
                      title: "Regulatory Compliance",
                      description:
                        "Full compliance with sector-specific regulations and professional standards.",
                    },
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="w-1 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full shrink-0" />
                      <div>
                        <h4 className={`text-xl font-bold ${themeClasses.text.primary} mb-2 font-montserrat`}>
                          {benefit.title}
                        </h4>
                        <p className={`${themeClasses.text.secondary}`}>
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`${themeClasses.bg.primary} rounded-2xl p-12 border border-blue-600/30 shadow-xl`}
              >
                <div className="mb-8">
                  <p className={`text-lg ${themeClasses.text.secondary} font-medium mb-6`}>
                    If your industry isn't listed, we still have the expertise you
                    need.
                  </p>
                  <Link to="/contact">
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-montserrat font-bold text-lg py-6 rounded-xl transition-all shadow-lg hover:shadow-xl"
                    >
                      Discuss Your Industry Requirements
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>

                <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
                  <p className={`text-sm font-semibold ${themeClasses.text.secondary} mb-4 uppercase tracking-widest`}>
                    No Win, No Fee
                  </p>
                  <p className={`text-sm ${themeClasses.text.secondary}`}>
                    We only get paid when we recover your money. It's our confidence backed up by legal guarantee.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Risk Checker Band */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`py-20 ${themeClasses.bg.primary} border-t ${themeClasses.border.primary}`}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className={`text-3xl md:text-4xl font-black mb-6 font-montserrat ${themeClasses.text.primary}`}>
              CHECK YOUR CLIENT LIST BEFORE YOU TRADE.
            </h2>
            <p className={`text-lg ${themeClasses.text.secondary} mb-10 font-medium`}>
              Use our free Insolvency Radar to instantly identify debtors on the
              winding-up register.
            </p>
            <Link to="/winding-up-check">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold text-lg px-10 py-6 rounded-full transition-all shadow-2xl">
                Open Insolvency Radar
              </Button>
            </Link>
          </div>
        </motion.section>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Industries;
