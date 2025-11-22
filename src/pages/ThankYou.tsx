import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/CookieConsent";
import { themeClasses } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { CheckCircle, Clock, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className={`min-h-screen ${themeClasses.bg.primary}`}>
      <Helmet>
        <title>Thank You | A.S. Collections</title>
        <meta
          name="description"
          content="Thank you for your consultation request. We'll be in touch shortly."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Header />
      <main>
        {/* Thank You Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`py-32 ${themeClasses.bg.primary}`}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto">
                <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h1
                className={`text-5xl font-bold ${themeClasses.text.primary} mb-6 font-manrope`}
              >
                Thank You!
              </h1>
              <p
                className={`text-2xl ${themeClasses.text.secondary} mb-8 font-manrope font-600`}
              >
                Your consultation request has been received
              </p>
              <p
                className={`text-lg ${themeClasses.text.secondary} max-w-2xl mx-auto mb-12 font-inter leading-relaxed`}
              >
                We've successfully received your consultation request. Our team
                will review your enquiry and get back to you shortly.
              </p>
            </motion.div>

            {/* Next Steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`${themeClasses.bg.secondary} rounded-2xl border ${themeClasses.border.primary} p-8 mb-12`}
            >
              <h2
                className={`text-2xl font-bold ${themeClasses.text.primary} mb-8 font-manrope`}
              >
                What happens next?
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold font-manrope">
                      1
                    </div>
                  </div>
                  <div className="flex-1 text-left">
                    <h3
                      className={`text-lg font-bold ${themeClasses.text.primary} mb-2 font-manrope`}
                    >
                      Review & Assessment
                    </h3>
                    <p className={`${themeClasses.text.secondary} font-inter`}>
                      Our team will review your enquiry and assess your debt
                      recovery situation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold font-manrope">
                      2
                    </div>
                  </div>
                  <div className="flex-1 text-left">
                    <h3
                      className={`text-lg font-bold ${themeClasses.text.primary} mb-2 font-manrope`}
                    >
                      Initial Consultation
                    </h3>
                    <p className={`${themeClasses.text.secondary} font-inter`}>
                      We'll contact you to discuss your situation and outline a
                      recovery strategy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold font-manrope">
                      3
                    </div>
                  </div>
                  <div className="flex-1 text-left">
                    <h3
                      className={`text-lg font-bold ${themeClasses.text.primary} mb-2 font-manrope`}
                    >
                      No Win, No Fee Agreement
                    </h3>
                    <p className={`${themeClasses.text.secondary} font-inter`}>
                      We'll outline our no win, no fee terms and start your
                      recovery journey.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            >
              <div
                className={`${themeClasses.bg.secondary} rounded-xl border ${themeClasses.border.primary} p-6`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Clock className={`w-5 h-5 ${themeClasses.text.accent}`} />
                  <h3
                    className={`font-bold ${themeClasses.text.primary} font-manrope`}
                  >
                    Expected Response Time
                  </h3>
                </div>
                <p className={`${themeClasses.text.secondary} font-inter`}>
                  Within 2 hours during business hours (Mon-Fri, 9am-5pm)
                </p>
              </div>

              <div
                className={`${themeClasses.bg.secondary} rounded-xl border ${themeClasses.border.primary} p-6`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Phone className={`w-5 h-5 ${themeClasses.text.accent}`} />
                  <h3
                    className={`font-bold ${themeClasses.text.primary} font-manrope`}
                  >
                    Need Help Sooner?
                  </h3>
                </div>
                <p className={`${themeClasses.text.secondary} font-inter`}>
                  Call us directly at{" "}
                  <a
                    href="tel:+441513290946"
                    className={`font-bold ${themeClasses.text.accent} hover:underline`}
                  >
                    0151 329 0946
                  </a>
                </p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-manrope font-bold px-8 py-3 rounded-lg inline-flex items-center gap-2">
                  Back to Home
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Link to="/contact">
                <Button
                  variant="outline"
                  className="font-manrope font-bold px-8 py-3 rounded-lg"
                >
                  Return to Contact
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Additional Info Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`py-20 ${themeClasses.bg.secondary}`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className={`text-3xl font-bold ${themeClasses.text.primary} mb-4 font-manrope`}
              >
                Why Choose A.S. Collections?
              </h2>
              <p
                className={`text-lg ${themeClasses.text.secondary} font-inter`}
              >
                We're the UK's trusted commercial debt recovery specialists
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "98% Success Rate",
                  description:
                    "Industry-leading recovery success rate with proven methodologies.",
                },
                {
                  title: "No Win, No Fee",
                  description:
                    "You only pay when we recover your debt. Completely risk-free.",
                },
                {
                  title: "14-Day Average",
                  description:
                    "Average recovery time of just 14 days for successful cases.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${themeClasses.bg.primary} rounded-xl border ${themeClasses.border.primary} p-6 text-center`}
                >
                  <h3
                    className={`text-lg font-bold ${themeClasses.text.primary} mb-3 font-manrope`}
                  >
                    {item.title}
                  </h3>
                  <p className={`${themeClasses.text.secondary} font-inter`}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default ThankYou;
