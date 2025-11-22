import { useState } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  ArrowRight,
  Radar,
  Calculator,
  Shield,
  Globe,
  Users,
  Building2,
  Utensils,
  Zap,
  Layers,
  Briefcase,
  Ship,
} from "lucide-react";
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
      description: "UK-wide business debt recovery",
      icon: Shield,
      color: "text-blue-500",
    },
    {
      title: "International Debt Recovery",
      href: "/services/international-debt-collection",
      description: "Cross-border debt solutions",
      icon: Globe,
      color: "text-cyan-500",
    },
    {
      title: "Debtor Tracing & Legal Action",
      href: "/services/debtor-tracing",
      description: "Advanced tracing & enforcement",
      icon: Users,
      color: "text-blue-400",
    },
    {
      title: "Credit Control & Insolvency",
      href: "/services/credit-control-insolvency",
      description: "Specialist insolvency services",
      icon: Building2,
      color: "text-indigo-500",
    },
  ];

  const tools = [
    {
      title: "Insolvency Radar",
      href: "/winding-up-check",
      description: "Check company insolvency risk",
      icon: Radar,
      color: "text-green-500",
    },
    {
      title: "Debt Calculator",
      href: "/debt-calculator",
      description: "Calculate potential recovery",
      icon: Calculator,
      color: "text-emerald-500",
    },
  ];

  const sectors = [
    {
      title: "Construction & Engineering",
      href: "/sectors/construction-engineering",
      icon: Building2,
      color: "text-orange-500",
    },
    {
      title: "Food & Drink Industry",
      href: "/sectors/food-drink-hospitality",
      icon: Utensils,
      color: "text-red-500",
    },
    {
      title: "Oil & Gas Sector",
      href: "/sectors/oil-gas-energy",
      icon: Zap,
      color: "text-amber-500",
    },
    {
      title: "Other Industries",
      href: "/sectors/other-industries",
      icon: Layers,
      color: "text-purple-500",
    },
    {
      title: "Recruitment Agencies",
      href: "/sectors/recruitment-agencies",
      icon: Briefcase,
      color: "text-pink-500",
    },
    {
      title: "Shipping & Logistics",
      href: "/sectors/shipping-logistics",
      icon: Ship,
      color: "text-blue-600",
    },
  ];

  const mainNavLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Contact", href: "/contact" },
  ];

  const megaMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating Pill Container */}
        <div className="relative">
          {/* Frosted Glass Background */}
          <div
            className={`absolute inset-0 ${
              theme === "light" ? "bg-white/90" : "bg-slate-900/90"
            } backdrop-blur-xl border ${
              theme === "light"
                ? "border-white/20 shadow-xl"
                : "border-slate-700/40 shadow-2xl"
            } rounded-full`}
          ></div>

          <div className="relative flex justify-between items-center h-24 px-8">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link
                to="/"
                className="block transition-all duration-200 hover:opacity-80 active:scale-95"
              >
                <img
                  loading="lazy"
                  src={
                    theme === "light"
                      ? "/AS-collections-Brand-Logos-Mono-1750-x-750-px-dark.png"
                      : "/AS-collections-Brand-Logos-Mono-1750-x-750-px-light.png"
                  }
                  className="h-16 w-auto object-contain"
                  alt="A.S. Collections Logo"
                />
              </Link>
            </div>

            {/* Desktop Navigation with Mega Menus */}
            <nav className="hidden lg:flex items-center gap-1 mx-auto">
              {/* Home Link */}
              <Link
                to="/"
                className={`font-montserrat font-bold text-sm px-4 py-2 rounded-full transition-all duration-200 ${
                  theme === "light"
                    ? "text-slate-900 hover:bg-slate-100/60"
                    : "text-white hover:bg-slate-700/50"
                }`}
              >
                Home
              </Link>

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
                      ? "text-slate-900 hover:bg-slate-100/60"
                      : "text-white hover:bg-slate-700/50"
                  }`}
                >
                  Services
                </Link>

                {/* Services Mega Menu with Icons */}
                <AnimatePresence>
                  {activeDropdown === "services" && (
                    <motion.div
                      variants={megaMenuVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className={`absolute top-full left-0 w-screen max-w-2xl mt-3 rounded-2xl shadow-2xl border ${
                        theme === "light"
                          ? "bg-white border-slate-200"
                          : "bg-slate-900 border-slate-800"
                      }`}
                      style={{ backdropFilter: "blur(10px)" }}
                    >
                      <div className="p-6">
                        <p
                          className={`text-xs font-montserrat font-bold uppercase tracking-wider mb-4 ${
                            theme === "light"
                              ? "text-slate-600"
                              : "text-slate-400"
                          }`}
                        >
                          Our Services
                        </p>
                        <div className="space-y-3">
                          {services.map((service) => {
                            const IconComponent = service.icon;
                            return (
                              <Link
                                key={service.href}
                                to={service.href}
                                onClick={() => setActiveDropdown(null)}
                                className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-200 ${
                                  theme === "light"
                                    ? "hover:bg-slate-50"
                                    : "hover:bg-slate-800"
                                }`}
                              >
                                <div
                                  className={`w-5 h-5 mt-0.5 flex-shrink-0 ${service.color}`}
                                >
                                  <IconComponent className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                  <p
                                    className={`font-montserrat font-bold text-sm ${
                                      theme === "light"
                                        ? "text-slate-900"
                                        : "text-white"
                                    }`}
                                  >
                                    {service.title}
                                  </p>
                                  <p
                                    className={`text-xs mt-0.5 ${
                                      theme === "light"
                                        ? "text-slate-600"
                                        : "text-slate-400"
                                    }`}
                                  >
                                    {service.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
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
                      ? "text-slate-900 hover:bg-slate-100/60"
                      : "text-white hover:bg-slate-700/50"
                  }`}
                >
                  Industries
                </Link>

                {/* Sectors Mega Menu with Icons */}
                <AnimatePresence>
                  {activeDropdown === "sectors" && (
                    <motion.div
                      variants={megaMenuVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className={`absolute top-full left-0 w-screen max-w-2xl mt-3 rounded-2xl shadow-2xl border ${
                        theme === "light"
                          ? "bg-white border-slate-200"
                          : "bg-slate-900 border-slate-800"
                      }`}
                      style={{ backdropFilter: "blur(10px)" }}
                    >
                      <div className="p-6">
                        <p
                          className={`text-xs font-montserrat font-bold uppercase tracking-wider mb-4 ${
                            theme === "light"
                              ? "text-slate-600"
                              : "text-slate-400"
                          }`}
                        >
                          Industries We Serve
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                          {sectors.map((sector) => {
                            const IconComponent = sector.icon;
                            return (
                              <Link
                                key={sector.href}
                                to={sector.href}
                                onClick={() => setActiveDropdown(null)}
                                className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                                  theme === "light"
                                    ? "hover:bg-slate-50 text-slate-900"
                                    : "hover:bg-slate-800 text-white"
                                }`}
                              >
                                <div
                                  className={`w-4 h-4 flex-shrink-0 ${sector.color}`}
                                >
                                  <IconComponent className="w-4 h-4" />
                                </div>
                                <p className="font-montserrat font-bold text-sm">
                                  {sector.title}
                                </p>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Tools Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown("tools")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`font-montserrat font-bold text-sm px-4 py-2 rounded-full transition-all duration-200 ${
                    theme === "light"
                      ? "text-slate-900 hover:bg-slate-100/60"
                      : "text-white hover:bg-slate-700/50"
                  }`}
                >
                  Tools
                </button>

                {/* Tools Mega Menu with Icons */}
                <AnimatePresence>
                  {activeDropdown === "tools" && (
                    <motion.div
                      variants={megaMenuVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className={`absolute top-full left-0 w-screen max-w-2xl mt-3 rounded-2xl shadow-2xl border ${
                        theme === "light"
                          ? "bg-white border-slate-200"
                          : "bg-slate-900 border-slate-800"
                      }`}
                      style={{ backdropFilter: "blur(10px)" }}
                    >
                      <div className="p-6">
                        <p
                          className={`text-xs font-montserrat font-bold uppercase tracking-wider mb-4 ${
                            theme === "light"
                              ? "text-slate-600"
                              : "text-slate-400"
                          }`}
                        >
                          Free Tools
                        </p>
                        <div className="space-y-3">
                          {tools.map((tool) => {
                            const IconComponent = tool.icon;
                            return (
                              <Link
                                key={tool.href}
                                to={tool.href}
                                onClick={() => setActiveDropdown(null)}
                                className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-200 ${
                                  theme === "light"
                                    ? "hover:bg-slate-50"
                                    : "hover:bg-slate-800"
                                }`}
                              >
                                <div
                                  className={`w-5 h-5 mt-0.5 flex-shrink-0 ${tool.color}`}
                                >
                                  <IconComponent className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                  <p
                                    className={`font-montserrat font-bold text-sm ${
                                      theme === "light"
                                        ? "text-slate-900"
                                        : "text-white"
                                    }`}
                                  >
                                    {tool.title}
                                  </p>
                                  <p
                                    className={`text-xs mt-0.5 ${
                                      theme === "light"
                                        ? "text-slate-600"
                                        : "text-slate-400"
                                    }`}
                                  >
                                    {tool.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
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
                      ? "text-slate-900 hover:bg-slate-100/60"
                      : "text-slate-400 hover:bg-slate-700/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Section: Theme Toggle & CTAs */}
            <div className="flex items-center space-x-2 ml-auto">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-200 ${
                  theme === "light"
                    ? "text-slate-600 hover:bg-slate-100/60"
                    : "text-slate-400 hover:bg-slate-700/50"
                }`}
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4" />
                )}
              </button>

              {/* Get in Touch Button */}
              <Button
                onClick={() => (window.location.href = "/contact")}
                className="hidden sm:inline-flex bg-slate-900 hover:bg-slate-950 text-white font-manrope font-bold text-xs px-5 py-2 rounded-full transition-all duration-200"
              >
                Get in Touch
              </Button>

              {/* Risk Checker Button - Red with Pulse */}
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Button
                  onClick={() => (window.location.href = "/winding-up-check")}
                  className="hidden md:inline-flex bg-red-600 hover:bg-red-700 text-white font-manrope font-bold text-xs px-5 py-2 rounded-full transition-all duration-200"
                >
                  Check List
                </Button>
              </motion.div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 rounded-full transition-colors duration-200 ${
                  theme === "light"
                    ? "text-slate-600 hover:bg-slate-100/60"
                    : "text-slate-400 hover:bg-slate-700/50"
                }`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Full Screen Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 lg:hidden z-30 top-6"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`fixed lg:hidden top-24 left-4 right-4 z-40 max-h-[90vh] overflow-y-auto ${
              theme === "light" ? "bg-white" : "bg-slate-900"
            } rounded-2xl shadow-2xl border ${
              theme === "light" ? "border-slate-200" : "border-slate-800"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-sm font-montserrat font-bold ${
                    theme === "light" ? "text-slate-900" : "text-white"
                  }`}
                >
                  Menu
                </span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    theme === "light"
                      ? "text-slate-600 hover:bg-slate-100/60"
                      : "text-slate-300 hover:bg-slate-800/70"
                  }`}
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Services Section */}
              <div>
                <p
                  className={`text-xs font-montserrat font-bold uppercase tracking-wider px-3 py-2 mb-3 ${
                    theme === "light" ? "text-slate-600" : "text-slate-400"
                  }`}
                >
                  Services
                </p>
                <div className="space-y-2">
                  {services.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <Link
                        key={service.href}
                        to={service.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-start gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                          theme === "light"
                            ? "text-slate-700 hover:bg-slate-50"
                            : "text-slate-200 hover:bg-slate-800"
                        }`}
                      >
                        <IconComponent className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="font-montserrat font-bold text-sm">
                            {service.title}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Industries Section */}
              <div>
                <p
                  className={`text-xs font-montserrat font-bold uppercase tracking-wider px-3 py-2 mb-3 ${
                    theme === "light" ? "text-slate-600" : "text-slate-400"
                  }`}
                >
                  Industries
                </p>
                <div className="space-y-2">
                  {sectors.map((sector) => {
                    const IconComponent = sector.icon;
                    return (
                      <Link
                        key={sector.href}
                        to={sector.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                          theme === "light"
                            ? "text-slate-700 hover:bg-slate-50"
                            : "text-slate-200 hover:bg-slate-800"
                        }`}
                      >
                        <IconComponent className="w-4 h-4 flex-shrink-0" />
                        <p className="font-montserrat font-bold text-sm">
                          {sector.title}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Tools Section */}
              <div>
                <p
                  className={`text-xs font-montserrat font-bold uppercase tracking-wider px-3 py-2 mb-3 ${
                    theme === "light" ? "text-slate-600" : "text-slate-400"
                  }`}
                >
                  Tools
                </p>
                <div className="space-y-2">
                  {tools.map((tool) => {
                    const IconComponent = tool.icon;
                    return (
                      <Link
                        key={tool.href}
                        to={tool.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-start gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                          theme === "light"
                            ? "text-slate-700 hover:bg-slate-50"
                            : "text-slate-200 hover:bg-slate-800"
                        }`}
                      >
                        <IconComponent className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-600 dark:text-red-400" />
                        <div className="flex-1">
                          <p className="font-montserrat font-bold text-sm">
                            {tool.title}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Other Links */}
              <div>
                <p
                  className={`text-xs font-montserrat font-bold uppercase tracking-wider px-3 py-2 mb-3 ${
                    theme === "light" ? "text-slate-600" : "text-slate-400"
                  }`}
                >
                  Company
                </p>
                <div className="space-y-2">
                  <Link
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                      theme === "light"
                        ? "text-slate-700 hover:bg-slate-50"
                        : "text-slate-200 hover:bg-slate-800"
                    }`}
                  >
                    <p className="font-montserrat font-bold text-sm">Home</p>
                  </Link>
                  {mainNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                        theme === "light"
                          ? "text-slate-700 hover:bg-slate-50"
                          : "text-slate-200 hover:bg-slate-800"
                      }`}
                    >
                      <p className="font-montserrat font-bold text-sm">
                        {link.label}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <Button
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.location.href = "/contact";
                  }}
                  className="w-full bg-slate-900 hover:bg-slate-950 text-white font-manrope font-bold text-sm py-3 rounded-full transition-all duration-200"
                >
                  Get in Touch
                </Button>

                {/* Theme Toggle in Mobile Menu */}
                <button
                  onClick={toggleTheme}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full transition-all duration-200 border-2 ${
                    theme === "light"
                      ? "border-slate-300 text-slate-700 hover:bg-slate-100"
                      : "border-slate-700 text-slate-200 hover:bg-slate-800"
                  }`}
                >
                  {theme === "light" ? (
                    <>
                      <Moon className="w-4 h-4" />
                      Dark Mode
                    </>
                  ) : (
                    <>
                      <Sun className="w-4 h-4" />
                      Light Mode
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
