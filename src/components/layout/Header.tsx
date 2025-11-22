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
      <div className="absolute inset-0 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-[12px] border-b border-slate-200 dark:border-neutral-800"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="block transition-transform duration-200 hover:scale-105">
              <img
                loading="lazy"
                src={theme === "light" ? "/AS-collections-Brand-Logos-Mono-1750-x-750-px-dark.png" : "/AS-collections-Brand-Logos-Mono-1750-x-750-px-light.png"}
                className="h-10 w-auto object-contain"
                alt="AS Collections Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0 mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-xs font-montserrat font-700 uppercase tracking-widest ${
                  theme === "light" ? "text-slate-700 hover:text-slate-900" : "text-slate-300 hover:text-white"
                } px-5 py-2 relative group transition-colors duration-200`}
              >
                {link.label}
                <span className="absolute bottom-1 left-5 h-0.5 bg-red-600 w-0 group-hover:w-[calc(100%-40px)] transition-all duration-300 ease-out"></span>
              </Link>
            ))}
          </nav>

          {/* Right Section: Theme Toggle & CTA */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-200 ${
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

            {/* Free Consultation Button - Pill Shape */}
            <Button
              onClick={() => window.location.href = "/contact"}
              className="hidden md:inline-flex bg-red-600 hover:bg-red-700 text-white font-montserrat font-700 text-xs uppercase tracking-wider px-6 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              Free Consultation
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

      {/* Mobile Navigation - Slide-out Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-[12px] border-b border-slate-200 dark:border-neutral-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-montserrat font-600 uppercase tracking-wide rounded-lg transition-all duration-200 ${
                  theme === "light"
                    ? "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    : "text-slate-300 hover:bg-neutral-800 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={() => {
                setIsMenuOpen(false);
                window.location.href = "/contact";
              }}
              className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-montserrat font-700 text-xs uppercase tracking-wider py-3 rounded-full transition-all duration-200 shadow-md"
            >
              <Phone className="w-4 h-4 mr-2" />
              Free Consultation
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
