import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/CookieConsent";
import { themeClasses } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Shield, Globe, Search, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const services = [
    {
      icon: Shield,
      title: "Commercial B2B Debt Collection",
      description:
        "UK-wide business debt recovery specialising in Construction, Food & Drink, Oil & Gas, and more. No Win, No Fee service.",
      href: "/services/commercial-debt-recovery",
      badge: "98% Success Rate",
      badgeColor: "from-blue-600 to-slate-600",
      accentColor: "from-blue-600 to-slate-700",
      borderColor: "border-blue-600",
      textColor: "text-blue-600",
    },
    {
      icon: Globe,
      title: "International Debt Recovery",
      description:
        "Cross-border debt recovery with expertise in 14+ countries. Multi-jurisdictional enforcement.",
      href: "/services/international-debt-collection",
      badge: "14+ Countries",
      badgeColor: "from-slate-600 to-slate-700",
      accentColor: "from-slate-600 to-blue-600",
      borderColor: "border-slate-600",
      textColor: "text-slate-600",
    },
    {
      icon: Search,
      title: "Debtor Tracing & Legal Action",
      description:
        "Advanced tracing combined with court claims and legal enforcement across UK jurisdictions.",
      href: "/services/debtor-tracing",
      badge: "£50M+ Recovered",
      badgeColor: "from-slate-700 to-slate-600",
      accentColor: "from-slate-700 to-blue-700",
      borderColor: "border-slate-700",
      textColor: "text-slate-700",
    },
    {
      icon: AlertCircle,
      title: "Credit Control & Insolvency",
      description:
        "Complete credit control outsourcing and specialist insolvency guidance for complex situations.",
      href: "/services/credit-control-insolvency",
      badge: "Expert Guidance",
      badgeColor: "from-blue-700 to-slate-700",
      accentColor: "from-blue-700 to-slate-600",
      borderColor: "border-blue-700",
      textColor: "text-blue-700",
    },
  ];

  return (
    <div className={`min-h-screen ${themeClasses.bg.primary}`}>
      <Helmet>
        <title>Commercial Debt Recovery Services UK | A.S. Collections</title>
        <meta
          name="description"
          content="Comprehensive debt recovery solutions tailored to your business. From commercial B2B collections to international recovery and debtor tracing. 98% success rate."
        />
        <meta
          name="keywords"
          content="debt recovery services, commercial debt collection, international recovery, debtor tracing, credit control, insolvency"
        />
        <link rel="canonical" href="https://ascollections.co.uk/services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Our Recovery Services",
            description: "Comprehensive debt recovery solutions",
          })}
        </script>
      </Helmet>

      <Header />
      <main>
        {/* Hero Section with Network Animation */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`relative pt-12 pb-32 ${themeClasses.bg.primary} overflow-hidden`}
        >
          {/* Network Animation Background */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient
                  id="nodeGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className={`text-5xl md:text-6xl font-black ${themeClasses.text.primary} mb-6 font-montserrat`}>
                OUR RECOVERY <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                  SERVICES.
                </span>
              </h1>
              <p className={`text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto font-light`}>
                Comprehensive debt recovery solutions tailored to your business.
                From commercial collections to international recovery and
                beyond.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Services Bento Grid */}
        <section className={`py-24 ${themeClasses.bg.primary}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: Commercial (Large) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 lg:row-span-2"
              >
                <Link to={services[0].href}>
                  <div
                    className={`h-full ${themeClasses.bg.primary} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer relative overflow-hidden group border-l-4 ${services[0].borderColor}`}
                  >
                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${services[0].accentColor} opacity-10 blur-3xl -mr-32 -mt-32 group-hover:opacity-20 transition-opacity duration-300`} />
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-8">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${services[0].accentColor}`}>
                          <Shield className="w-8 h-8 text-white" />
                        </div>
                        <motion.span
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className={`bg-gradient-to-r ${services[0].badgeColor} text-white text-xs font-montserrat font-bold px-3 py-1 rounded-full uppercase tracking-wider`}
                        >
                          {services[0].badge}
                        </motion.span>
                      </div>
                      <h3 className={`text-3xl font-black mb-4 font-montserrat leading-tight ${themeClasses.text.primary}`}>
                        {services[0].title}
                      </h3>
                      <p className={`text-lg mb-8 leading-relaxed font-medium ${themeClasses.text.secondary}`}>
                        {services[0].description}
                      </p>
                      <div className={`flex items-center gap-2 font-bold group-hover:gap-3 transition-all ${services[0].textColor}`}>
                        Learn More <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Card 2: International */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Link to={services[1].href}>
                  <div
                    className={`h-full ${themeClasses.bg.primary} rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer relative overflow-hidden group border-l-4 border-purple-600`}
                  >
                    <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${services[1].accentColor} opacity-10 blur-2xl -mr-16 -mt-16 group-hover:opacity-20 transition-opacity duration-300`} />
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${services[1].accentColor}`}>
                          <Globe className="w-6 h-6 text-white" />
                        </div>
                        <span
                          className={`bg-gradient-to-r ${services[1].badgeColor} text-white text-xs font-montserrat font-bold px-2 py-1 rounded-full uppercase tracking-wider`}
                        >
                          {services[1].badge}
                        </span>
                      </div>
                      <h3 className={`text-xl font-bold mb-3 font-montserrat ${themeClasses.text.primary}`}>
                        {services[1].title}
                      </h3>
                      <p className={`text-sm mb-auto leading-relaxed ${themeClasses.text.secondary}`}>
                        {services[1].description}
                      </p>
                      <div className="flex items-center gap-2 font-bold text-sm mt-4 group-hover:gap-3 transition-all text-purple-600">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Card 3: Debtor Tracing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Link to={services[2].href}>
                  <div
                    className={`h-full ${themeClasses.bg.primary} rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer relative overflow-hidden group border-l-4 border-orange-600`}
                  >
                    <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${services[2].accentColor} opacity-10 blur-2xl -mr-16 -mt-16 group-hover:opacity-20 transition-opacity duration-300`} />
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${services[2].accentColor}`}>
                          <Search className="w-6 h-6 text-white" />
                        </div>
                        <span
                          className={`bg-gradient-to-r ${services[2].badgeColor} text-white text-xs font-montserrat font-bold px-2 py-1 rounded-full uppercase tracking-wider`}
                        >
                          {services[2].badge}
                        </span>
                      </div>
                      <h3 className={`text-xl font-bold mb-3 font-montserrat ${themeClasses.text.primary}`}>
                        {services[2].title}
                      </h3>
                      <p className={`text-sm mb-auto leading-relaxed ${themeClasses.text.secondary}`}>
                        {services[2].description}
                      </p>
                      <div className="flex items-center gap-2 font-bold text-sm mt-4 group-hover:gap-3 transition-all text-orange-600">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Card 4: Credit Control (Large) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-2"
              >
                <Link to={services[3].href}>
                  <div
                    className={`h-full ${themeClasses.bg.primary} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer relative overflow-hidden group border-l-4 border-indigo-600`}
                  >
                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${services[3].accentColor} opacity-10 blur-3xl -mr-32 -mt-32 group-hover:opacity-20 transition-opacity duration-300`} />
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${services[3].accentColor}`}>
                          <AlertCircle className="w-8 h-8 text-white" />
                        </div>
                        <motion.span
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className={`bg-gradient-to-r ${services[3].badgeColor} text-white text-xs font-montserrat font-bold px-3 py-1 rounded-full uppercase tracking-wider`}
                        >
                          {services[3].badge}
                        </motion.span>
                      </div>
                      <h3 className={`text-3xl font-black mb-4 font-montserrat leading-tight ${themeClasses.text.primary}`}>
                        {services[3].title}
                      </h3>
                      <p className={`text-lg mb-6 leading-relaxed font-medium ${themeClasses.text.secondary}`}>
                        {services[3].description}
                      </p>
                      <div className="flex items-center gap-2 font-bold group-hover:gap-3 transition-all text-indigo-600">
                        Learn More <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Risk Checker Band */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`py-20 ${themeClasses.bg.primary} border-t ${themeClasses.border.primary}`}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className={`text-3xl md:text-4xl font-black ${themeClasses.text.primary} mb-6 font-montserrat`}>
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

export default ServicesOverview;
