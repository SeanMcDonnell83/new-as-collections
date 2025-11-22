import { useState } from "react";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { themeClasses } from "@/contexts/ThemeContext";
import { useThemeSafe } from "@/hooks/useThemeSafe";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useThemeSafe();

  const services = [
    {
      title: "Commercial B2B Debt Collection",
      href: "/services/commercial-debt-recovery",
      description: "UK-wide business debt recovery"
    },
    {
      title: "International Debt Recovery",
      href: "/services/international-debt-collection",
      description: "Cross-border debt solutions"
    },
    {
      title: "Debtor Tracing & Legal Action",
      href: "/services/debtor-tracing",
      description: "Advanced tracing & enforcement"
    },
    {
      title: "Credit Control & Insolvency",
      href: "/services/credit-control-insolvency",
      description: "Specialist insolvency services"
    },
    {
      title: "Winding-Up Search",
      href: "/winding-up-check",
      description: "Check company insolvency risk",
      badge: "Tool"
    }
  ];

  const sectors = [
    {
      title: "Construction & Engineering",
      href: "/sectors/construction-engineering"
    },
    {
      title: "Food & Drink Industry",
      href: "/sectors/food-drink-hospitality"
    },
    {
      title: "Oil & Gas Sector",
      href: "/sectors/oil-gas-energy"
    },
    {
      title: "Independent Schools",
      href: "/sectors/private-schools-education"
    },
    {
      title: "Recruitment Agencies",
      href: "/sectors/recruitment-agencies"
    },
    {
      title: "Shipping & Logistics",
      href: "/sectors/shipping-logistics"
    }
  ];

  const mainNavLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Compliance", href: "/compliance" },
    { label: "Contact", href: "/contact" },
  ];

  const megaMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 left-0 right-0 z-50"
    >
      {/* Frosted Glass Background */}
      <div className="absolute inset-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="block transition-all duration-200 hover:opacity-80 active:scale-95">
              <img
                loading="lazy"
                src={theme === "light" ? "/AS-collections-Brand-Logos-Mono-1750-x-750-px-dark.png" : "/AS-collections-Brand-Logos-Mono-1750-x-750-px-light.png"}
                className="h-9 w-auto object-contain"
                alt="AS Collections Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation with Mega Menus - Pill Style */}
          <nav className="hidden lg:flex items-center gap-0 mx-auto bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm rounded-full border border-white/60 dark:border-slate-700/40 px-2 py-1.5">
            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/services"
                className={`font-montserrat font-bold text-sm px-4 py-2 rounded-full transition-all duration-200 ${
                  theme === "light"
                    ? "text-slate-900 hover:bg-slate-100/80"
                    : "text-white hover:bg-slate-700/60"
                }`}
              >
                Services
              </Link>

              {/* Services Mega Menu */}
              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    variants={megaMenuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={`absolute top-full left-0 w-screen max-w-4xl mt-2 rounded-xl shadow-2xl border ${
                      theme === "light"
                        ? "bg-white border-slate-200"
                        : "bg-slate-900 border-slate-800"
                    }`}
                    style={{ backdropFilter: "blur(10px)" }}
                  >
                    <div className="grid grid-cols-2 gap-0">
                      {/* Services List */}
                      <div className="p-6 border-r border-slate-200 dark:border-slate-800">
                        <p className={`text-xs font-montserrat font-bold uppercase tracking-wider mb-4 ${
                          theme === "light" ? "text-slate-600" : "text-slate-400"
                        }`}>
                          Our Services
                        </p>
                        <div className="space-y-2">
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              to={service.href}
                              onClick={() => setActiveDropdown(null)}
                              className={`block p-3 rounded-lg transition-all duration-200 group/item ${
                                theme === "light"
                                  ? "hover:bg-slate-50"
                                  : "hover:bg-slate-800"
                              }`}
                            >
                              <div className="flex items-start justify-between">
                                <div>
                                  <p className={`font-montserrat font-bold text-sm ${
                                    theme === "light" ? "text-slate-900" : "text-white"
                                  }`}>
                                    {service.title}
                                  </p>
                                  <p className={`text-xs mt-1 ${
                                    theme === "light" ? "text-slate-600" : "text-slate-400"
                                  }`}>
                                    {service.description}
                                  </p>
                                </div>
                                {service.badge && (
                                  <span className="ml-2 px-2 py-1 bg-red-600 text-white text-xs font-montserrat font-bold rounded-full whitespace-nowrap">
                                    {service.badge}
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Featured CTA Card */}
                      <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 flex flex-col justify-between">
                        <div>
                          <h3 className={`font-montserrat font-bold text-lg mb-2 ${
                            theme === "light" ? "text-red-700" : "text-red-400"
                          }`}>
                            Need Immediate Help?
                          </h3>
                          <p className={`text-sm ${
                            theme === "light" ? "text-slate-700" : "text-slate-300"
                          }`}>
                            Check if your client is on the winding-up list now.
                          </p>
                        </div>
                        <Link
                          to="/winding-up-check"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center gap-2 text-red-700 dark:text-red-400 font-montserrat font-bold text-sm mt-4 hover:gap-3 transition-all"
                        >
                          Check Now <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sectors Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("sectors")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/industries"
                className={`font-montserrat font-bold text-sm px-4 py-2 rounded-full transition-all duration-200 ${
                  theme === "light"
                    ? "text-slate-900 hover:bg-slate-100/80"
                    : "text-white hover:bg-slate-700/60"
                }`}
              >
                Sectors
              </Link>

              {/* Sectors Mega Menu */}
              <AnimatePresence>
                {activeDropdown === "sectors" && (
                  <motion.div
                    variants={megaMenuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={`absolute top-full left-0 w-screen max-w-3xl mt-2 rounded-xl shadow-2xl border ${
                      theme === "light"
                        ? "bg-white border-slate-200"
                        : "bg-slate-900 border-slate-800"
                    }`}
                    style={{ backdropFilter: "blur(10px)" }}
                  >
                    <div className="p-6">
                      <p className={`text-xs font-montserrat font-bold uppercase tracking-wider mb-4 ${
                        theme === "light" ? "text-slate-600" : "text-slate-400"
                      }`}>
                        Industries We Serve
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {sectors.map((sector) => (
                          <Link
                            key={sector.href}
                            to={sector.href}
                            onClick={() => setActiveDropdown(null)}
                            className={`p-3 rounded-lg transition-all duration-200 ${
                              theme === "light"
                                ? "hover:bg-slate-50 text-slate-900"
                                : "hover:bg-slate-800 text-white"
                            }`}
                          >
                            <p className="font-montserrat font-bold text-sm">
                              {sector.title}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Nav Links */}
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-montserrat font-bold text-sm px-4 py-2 rounded-full transition-all duration-200 ${
                  theme === "light"
                    ? "text-slate-900 hover:bg-slate-100/80"
                    : "text-white hover:bg-slate-700/60"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Section: Theme Toggle & CTAs */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${
                theme === "light"
                  ? "text-slate-600 hover:bg-slate-100"
                  : "text-slate-400 hover:bg-slate-800"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>

            {/* Get in Touch Button - Navy Blue Pill */}
            <Button
              onClick={() => window.location.href = "/contact"}
              className="hidden sm:inline-flex bg-slate-900 hover:bg-slate-950 text-white font-manrope font-bold text-xs px-5 py-2.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </Button>

            {/* Risk Checker Button - Red Pill with Pulse Animation */}
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Button
                onClick={() => window.location.href = "/winding-up-check"}
                className="hidden md:inline-flex bg-red-700 hover:bg-red-800 text-white font-manrope font-bold text-xs px-5 py-2.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Risk Checker
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                theme === "light"
                  ? "text-slate-600 hover:bg-slate-100"
                  : "text-slate-400 hover:bg-slate-800"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Slide-out Menu from Left */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed lg:hidden top-20 left-0 bottom-0 w-72 bg-white dark:bg-slate-950 shadow-2xl z-40 overflow-y-auto"
          >
            {/* Header with Close Button and Theme Toggle */}
            <div className={`sticky top-0 flex items-center justify-between px-6 py-4 border-b ${
              theme === "light"
                ? "bg-white border-slate-100"
                : "bg-slate-950 border-slate-800"
            }`}>
              <h2 className={`text-sm font-montserrat font-bold ${
                theme === "light" ? "text-slate-900" : "text-white"
              }`}>
                Menu
              </h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    theme === "light"
                      ? "text-slate-600 hover:bg-slate-100"
                      : "text-slate-400 hover:bg-slate-800"
                  }`}
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? (
                    <Moon className="w-4 h-4" />
                  ) : (
                    <Sun className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    theme === "light"
                      ? "text-slate-600 hover:bg-slate-100"
                      : "text-slate-400 hover:bg-slate-800"
                  }`}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Menu Content */}
            <div className="px-3 py-6 space-y-6">
              {/* Services Section */}
              <div>
                <p className={`text-xs font-montserrat font-bold uppercase tracking-wider px-3 py-2 mb-2 ${
                  theme === "light" ? "text-slate-500" : "text-slate-500"
                }`}>
                  Services
                </p>
                <div className="space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                        theme === "light"
                          ? "text-slate-700 hover:bg-slate-100"
                          : "text-slate-200 hover:bg-slate-800"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{service.title}</span>
                        {service.badge && (
                          <span className="ml-2 px-2 py-0.5 bg-red-600 text-white text-xs font-montserrat font-bold rounded-full">
                            {service.badge}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sectors Section */}
              <div>
                <p className={`text-xs font-montserrat font-bold uppercase tracking-wider px-3 py-2 mb-2 ${
                  theme === "light" ? "text-slate-500" : "text-slate-500"
                }`}>
                  Industries
                </p>
                <div className="space-y-1">
                  {sectors.map((sector) => (
                    <Link
                      key={sector.href}
                      to={sector.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                        theme === "light"
                          ? "text-slate-700 hover:bg-slate-100"
                          : "text-slate-200 hover:bg-slate-800"
                      }`}
                    >
                      {sector.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other Links */}
              <div>
                <p className={`text-xs font-montserrat font-bold uppercase tracking-wider px-3 py-2 mb-2 ${
                  theme === "light" ? "text-slate-500" : "text-slate-500"
                }`}>
                  More
                </p>
                <div className="space-y-1">
                  {mainNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                        theme === "light"
                          ? "text-slate-700 hover:bg-slate-100"
                          : "text-slate-200 hover:bg-slate-800"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile CTA Buttons - Sticky Bottom */}
            <div className={`sticky bottom-0 px-4 py-4 space-y-3 border-t ${
              theme === "light"
                ? "bg-white border-slate-100"
                : "bg-slate-950 border-slate-800"
            }`}>
              <Button
                onClick={() => {
                  setIsMenuOpen(false);
                  window.location.href = "/contact";
                }}
                className="w-full bg-slate-900 hover:bg-slate-950 text-white font-manrope font-bold text-sm py-2.5 rounded-full transition-all duration-200"
              >
                Get in Touch
              </Button>

              <Button
                onClick={() => {
                  setIsMenuOpen(false);
                  window.location.href = "/winding-up-check";
                }}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-manrope font-bold text-sm py-2.5 rounded-full transition-all duration-200"
              >
                Risk Checker
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/20 lg:hidden z-30"
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
