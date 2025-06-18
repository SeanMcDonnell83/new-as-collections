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
      className={`fixed top-0 left-0 right-0 z-50 ${themeClasses.bg.primary} backdrop-blur-md ${themeClasses.border.primary} border-b shadow-sm`}
      style={{ paddingBottom: "1rem" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 pt-4">
          {/* Logo - larger and clickable */}
          <div className="flex items-center">
            <Link to="/" className="block">
              <img
                loading="lazy"
                src={
                  theme === "light"
                    ? "/AS-collections-Brand-Logos-Mono-1750-x-750-px-light.png"
                    : "/AS-collections-Brand-Logos-Mono-1750-x-750-px-dark.png"
                }
                className="h-12 w-auto object-contain transition-all duration-200 hover:scale-105"
                alt="AS Collections Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation - centered */}
          <nav className="hidden md:flex items-center space-x-8 mx-auto">
            <button
              onClick={() => scrollToSection("services")}
              className={`${themeClasses.text.secondary} hover:${themeClasses.text.accent} hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-200 font-medium font-noto-sans px-4 py-2 rounded-lg`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`${themeClasses.text.secondary} hover:${themeClasses.text.accent} hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-200 font-medium font-noto-sans px-4 py-2 rounded-lg`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`${themeClasses.text.secondary} hover:${themeClasses.text.accent} hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-200 font-medium font-noto-sans px-4 py-2 rounded-lg`}
            >
              Contact
            </button>
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
              onClick={() => scrollToSection("contact")}
              className={`${themeClasses.button.primary} font-semibold px-6 py-2 transition-colors duration-200 font-noto-sans`}
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
              <button
                onClick={() => scrollToSection("services")}
                className={`block w-full text-left px-3 py-2 ${themeClasses.text.secondary} hover:${themeClasses.text.accent} hover:${themeClasses.bg.secondary} transition-colors duration-200 font-medium font-noto-sans rounded-md`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`block w-full text-left px-3 py-2 ${themeClasses.text.secondary} hover:${themeClasses.text.accent} hover:${themeClasses.bg.secondary} transition-colors duration-200 font-medium font-noto-sans rounded-md`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`block w-full text-left px-3 py-2 ${themeClasses.text.secondary} hover:${themeClasses.text.accent} hover:${themeClasses.bg.secondary} transition-colors duration-200 font-medium font-noto-sans rounded-md`}
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className={`w-full ${themeClasses.button.primary} font-semibold transition-colors duration-200 font-noto-sans`}
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
