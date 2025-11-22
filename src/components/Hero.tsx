import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, BookOpen, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "./AnimatedCounter";
import DebtCalculator from "./DebtCalculator";
import { themeClasses } from "@/contexts/ThemeContext";
import { useThemeSafe } from "@/hooks/useThemeSafe";

const Hero = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className={`relative min-h-screen bg-gradient-to-br from-neutral-50 via-blue-50 to-neutral-100 dark:from-neutral-900 dark:via-blue-950 dark:to-neutral-800 flex items-center pt-24`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(99,102,241)_1px,transparent_0)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Tagline */}
              <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 rounded-full bg-green-200 dark:bg-green-900 border border-green-300 dark:border-green-700 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8 font-inter">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                No Win, No Fee · UK Wide Coverage
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                variants={itemVariants}
                className={`text-5xl md:text-6xl lg:text-7xl font-bold ${themeClasses.text.primary} leading-[0.9] mb-8 font-montserrat font-800`}
              >
                Debt Recovery
                <motion.span
                  variants={itemVariants}
                  className={`block ${themeClasses.text.accent} font-montserrat font-800 tracking-tight`}
                >
                  Done Right
                </motion.span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                variants={itemVariants}
                className={`text-lg md:text-xl ${themeClasses.text.secondary} mb-8 leading-relaxed max-w-2xl font-inter font-light`}
              >
                UK's leading commercial debt recovery specialists.
                <span className={`font-semibold ${themeClasses.text.primary}`}>
                  <br />
                  Zero upfront costs, maximum results.
                </span>
              </motion.p>

              {/* Key Benefits */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span
                    className={`${themeClasses.text.secondary} font-medium font-inter text-sm`}
                  >
                    Recover debts fast
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span
                    className={`${themeClasses.text.secondary} font-medium font-inter text-sm`}
                  >
                    98%+ success rate
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span
                    className={`${themeClasses.text.secondary} font-medium font-inter text-sm`}
                  >
                    Accredited specialists
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span
                    className={`${themeClasses.text.secondary} font-medium font-inter text-sm`}
                  >
                    No win, no fee guarantee*
                  </span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                  className={`${themeClasses.button.primary} font-inter font-semibold px-8 py-5 text-lg transition-all duration-200 transform hover:scale-105 rounded-xl shadow-lg`}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Started
                </Button>
                <Button
                  onClick={() => setIsCalculatorOpen(true)}
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-500 text-white font-inter font-semibold px-8 py-5 text-lg transition-all duration-200 transform hover:scale-105 rounded-xl shadow-lg"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Debt Calculator
                </Button>
                <Button
                  onClick={() => scrollToSection("about")}
                  size="lg"
                  className="border-2 border-neutral-800 dark:border-neutral-200 text-neutral-900 dark:text-neutral-100 bg-neutral-900 dark:bg-neutral-100 hover:bg-neutral-800 dark:hover:bg-neutral-200 font-inter font-semibold px-8 py-5 text-lg transition-all duration-200 rounded-xl"
                >
                  <BookOpen className="w-5 h-5 mr-2 text-white dark:text-neutral-900" />
                  <span className="text-white dark:text-neutral-900">
                    Learn More
                  </span>
                </Button>
              </motion.div>

              {/* Disclaimer */}
              <motion.p
                variants={itemVariants}
                className={`text-sm ${themeClasses.text.muted} font-inter`}
              >
                *No win no fee guarantee - debt assessed on collection viability
              </motion.p>
            </motion.div>
          </div>

          {/* Right side - Visual Element */}
          <div className="lg:col-span-5 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <div
                className={`relative ${themeClasses.bg.primary} rounded-2xl shadow-2xl p-8 ${themeClasses.border.primary} border`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div
                      className={`text-sm ${themeClasses.text.muted} font-noto-sans`}
                    >
                      Success Rate
                    </div>
                    <div className="text-2xl font-bold text-green-600 font-noto-sans">
                      98%
                    </div>
                  </div>
                  <div
                    className={`w-full ${themeClasses.bg.tertiary} rounded-full h-3`}
                  >
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full w-[98%]"></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div
                      className={`text-sm ${themeClasses.text.muted} font-noto-sans`}
                    >
                      Average Recovery Time
                    </div>
                    <div className="text-2xl font-bold text-blue-600 font-noto-sans">
                      14 Days
                    </div>
                  </div>
                  <div
                    className={`w-full ${themeClasses.bg.tertiary} rounded-full h-3`}
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full w-[85%]"></div>
                  </div>

                  <div
                    className={`pt-4 ${themeClasses.border.primary} border-t`}
                  >
                    <div className="text-center">
                      <div
                        className={`text-2xl font-bold ${themeClasses.text.primary} mb-1 font-noto-sans`}
                      >
                        £
                        {(
                          (Math.floor(Date.now() / 100000) % 100) +
                          250
                        ).toLocaleString()}
                        k+
                      </div>
                      <div
                        className={`text-sm ${themeClasses.text.muted} font-noto-sans`}
                      >
                        Recovered This Month
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 dark:bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-500 dark:bg-green-400 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Debt Calculator Modal */}
      <DebtCalculator
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />
    </section>
  );
};

export default Hero;
