import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, BookOpen, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import DebtCalculator from "./DebtCalculator";

const Hero = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(99,102,241)_1px,transparent_0)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Tagline */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8 font-sans">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                No Win, No Fee · UK Wide Coverage
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[0.9] mb-8 font-serif">
                Debt Recovery
                <span className="block text-blue-600 font-sans font-extrabold tracking-tight">
                  Done Right
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed max-w-2xl font-sans font-light">
                UK's leading commercial debt recovery specialists.
                <span className="font-semibold text-slate-800">
                  <br />
                  Zero upfront costs, maximum results.
                </span>
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-slate-700 font-medium">
                    Recover debts fast - typically 7-14 days
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-slate-700 font-medium">
                    80%+ success rate across UK
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-slate-700 font-medium">
                    Accredited for peace of mind
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-slate-700 font-medium">
                    No win no fee guarantee*
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-sans font-semibold px-8 py-5 text-lg transition-all duration-200 transform hover:scale-105 rounded-xl shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Started
                </Button>
                <Button
                  onClick={() => setIsCalculatorOpen(true)}
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white font-sans font-semibold px-8 py-5 text-lg transition-all duration-200 transform hover:scale-105 rounded-xl shadow-lg"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Debt Calculator
                </Button>
                <Button
                  onClick={() => scrollToSection("about")}
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-sans font-semibold px-8 py-5 text-lg transition-all duration-200 rounded-xl"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Learn More
                </Button>
              </div>

              {/* Disclaimer */}
              <p className="text-sm text-slate-500 font-sans">
                *No win no fee guarantee - debt assessed on collection viability
              </p>
            </motion.div>
          </div>

          {/* Right side - Visual Element */}
          <div className="lg:col-span-5 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-500">Success Rate</div>
                    <div className="text-2xl font-bold text-green-600">98%</div>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full w-[98%]"></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-500">Average Recovery Time</div>
                    <div className="text-2xl font-bold text-blue-600">14 Days</div>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full w-[85%]"></div>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-800 mb-1">
                        £{(Math.floor(Date.now() / 100000) % 100 + 250).toLocaleString()}k+
                      </div>
                      <div className="text-sm text-slate-500">
                        Recovered This Month
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-500 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Debt Calculator Modal */}
      <DebtCalculator
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />
            </motion.div>
          </div>

          {/* Right side - Visual Element */}
          <div className="lg:col-span-5 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-500">Success Rate</div>
                    <div className="text-2xl font-bold text-green-600">98%</div>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full w-[98%]"></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-500">
                      Average Recovery Time
                    </div>
                    <div className="text-2xl font-bold text-blue-600">
                      14 Days
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full w-[85%]"></div>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-800 mb-1">
                        £
                        {(
                          (Math.floor(Date.now() / 100000) % 100) +
                          250
                        ).toLocaleString()}
                        k+
                      </div>
                      <div className="text-sm text-slate-500">
                        Recovered This Month
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-500 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;