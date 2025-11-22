import { useState } from "react";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { themeClasses } from "@/contexts/ThemeContext";
import { useThemeSafe } from "@/hooks/useThemeSafe";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useThemeSafe();

  const navLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "/commercial-debt-recovery" },
    { label: "Sectors", href: "/industries" },
    { label: "Compliance", href: "/compliance" },
    { label: "Risk Checker", href: "/winding-up-check" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 left-0 right-0 z-50"
    >
      <div className="absolute inset-0 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md border-b border-slate-200 dark:border-neutral-800"></div>

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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-inter font-500 transition-all duration-200 px-4 py-2 rounded-lg ${
                  theme === "light"
                    ? "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    : "text-slate-300 hover:bg-neutral-800 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Section: Theme Toggle & CTAs */}
          <div className="flex items-center space-x-3 lg:space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${
                theme === "light"
                  ? "text-slate-600 hover:bg-slate-100"
                  : "text-slate-400 hover:bg-neutral-800"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>

            {/* Free Consultation Button - Secondary CTA */}
            <Button
              onClick={() => window.location.href = "/contact"}
              className="hidden sm:inline-flex bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-manrope font-bold text-xs px-5 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg gap-2"
            >
              Get Started
            </Button>

            {/* Risk Checker Button - Primary CTA */}
            <Button
              onClick={() => window.location.href = "/winding-up-check"}
              className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-manrope font-bold text-xs px-5 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg gap-2"
            >
              Risk Checker
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                theme === "light"
                  ? "text-slate-600 hover:bg-slate-100"
                  : "text-slate-400 hover:bg-neutral-800"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Slide-out Menu from Left */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.3 }}
          className="fixed lg:hidden top-20 left-0 bottom-0 w-64 bg-white dark:bg-neutral-950 shadow-2xl z-40 overflow-y-auto"
        >
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-base font-inter font-500 rounded-lg transition-all duration-200 ${
                  theme === "light"
                    ? "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    : "text-slate-300 hover:bg-neutral-800 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-6 space-y-3 border-t border-slate-200 dark:border-neutral-800">
              <Button
                onClick={() => {
                  setIsMenuOpen(false);
                  window.location.href = "/contact";
                }}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-manrope font-bold text-sm py-3 rounded-lg transition-all duration-200"
              >
                Get Started
              </Button>

              <Button
                onClick={() => {
                  setIsMenuOpen(false);
                  window.location.href = "/winding-up-check";
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-manrope font-bold text-sm py-3 rounded-lg transition-all duration-200"
              >
                Risk Checker
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Mobile Menu Backdrop */}
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
    </motion.header>
  );
};

export default Header;
