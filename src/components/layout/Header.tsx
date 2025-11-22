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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`sticky top-0 left-0 right-0 z-50 ${themeClasses.bg.primary} backdrop-blur-md ${themeClasses.border.primary} border-b shadow-md`}
      style={{ paddingBottom: "1rem" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 pt-4">
          {/* Logo - larger and clickable */}
          <div className="flex items-center">
            <Link to="/" className="block">
              <img
                loading="lazy"
                src={theme === "light" ? "/AS-collections-Brand-Logos-Mono-1750-x-750-px-dark.png" : "/AS-collections-Brand-Logos-Mono-1750-x-750-px-light.png"}
                className="h-12 w-auto object-contain transition-all duration-200 hover:scale-105"
                alt="AS Collections Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation - centered */}
          <nav className="hidden md:flex items-center space-x-1 mx-auto">
            <Link
              to="/about-us"
              className={`${themeClasses.text.secondary} transition-all duration-200 font-medium font-inter px-4 py-2 rounded-lg relative group`}
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/commercial-debt-recovery"
              className={`${themeClasses.text.secondary} transition-all duration-200 font-medium font-inter px-4 py-2 rounded-lg relative group`}
            >
              Our Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/industries"
              className={`${themeClasses.text.secondary} transition-all duration-200 font-medium font-inter px-4 py-2 rounded-lg relative group`}
            >
              Sectors
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/compliance"
              className={`${themeClasses.text.secondary} transition-all duration-200 font-medium font-inter px-4 py-2 rounded-lg relative group`}
            >
              Compliance
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/winding-up-check"
              className={`${themeClasses.text.secondary} transition-all duration-200 font-medium font-inter px-4 py-2 rounded-lg relative group`}
            >
              Winding-Up Search
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/contact"
              className={`${themeClasses.text.secondary} transition-all duration-200 font-medium font-inter px-4 py-2 rounded-lg relative group`}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Theme Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${themeClasses.button.secondary} transition-colors duration-200`}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>
            <Button
              onClick={() => window.location.href = '/contact'}
              className={`${themeClasses.button.primary} font-semibold px-6 py-2 transition-colors duration-200 font-inter`}
            >
              <Phone className="w-4 h-4 mr-2" />
              Free Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${themeClasses.button.secondary} transition-colors duration-200`}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${themeClasses.text.secondary} hover:${themeClasses.text.accent} transition-colors duration-200`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden ${themeClasses.border.primary} border-t ${themeClasses.bg.primary}`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-3 py-2 ${themeClasses.text.secondary} hover:text-blue-600 dark:hover:text-blue-400 hover:${themeClasses.bg.secondary} transition-colors duration-200 font-medium font-inter rounded-md`}
              >
                Home
              </Link>
              <Link
                to="/about-us"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-3 py-2 ${themeClasses.text.secondary} hover:text-blue-600 dark:hover:text-blue-400 hover:${themeClasses.bg.secondary} transition-colors duration-200 font-medium font-inter rounded-md`}
              >
                About Us
              </Link>
              <Link
                to="/commercial-debt-recovery"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-3 py-2 ${themeClasses.text.secondary} hover:text-blue-600 dark:hover:text-blue-400 hover:${themeClasses.bg.secondary} transition-colors duration-200 font-medium font-inter rounded-md`}
              >
                Our Services
              </Link>
              <Link
                to="/industries"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-3 py-2 ${themeClasses.text.secondary} hover:text-blue-600 dark:hover:text-blue-400 hover:${themeClasses.bg.secondary} transition-colors duration-200 font-medium font-inter rounded-md`}
              >
                Sectors
              </Link>
              <Link
                to="/compliance"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-3 py-2 ${themeClasses.text.secondary} hover:text-blue-600 dark:hover:text-blue-400 hover:${themeClasses.bg.secondary} transition-colors duration-200 font-medium font-inter rounded-md`}
              >
                Compliance
              </Link>
              <Link
                to="/winding-up-check"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-3 py-2 ${themeClasses.text.secondary} hover:text-blue-600 dark:hover:text-blue-400 hover:${themeClasses.bg.secondary} transition-colors duration-200 font-medium font-inter rounded-md`}
              >
                Winding-Up Search
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-3 py-2 ${themeClasses.text.secondary} hover:text-blue-600 dark:hover:text-blue-400 hover:${themeClasses.bg.secondary} transition-colors duration-200 font-medium font-inter rounded-md`}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.location.href = '/contact';
                  }}
                  className={`w-full ${themeClasses.button.primary} font-semibold transition-colors duration-200 font-inter`}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Free Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
