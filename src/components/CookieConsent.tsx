import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";
import { themeClasses } from "@/contexts/ThemeContext";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed bottom-0 left-0 right-0 z-50 p-4 ${themeClasses.bg.primary} ${themeClasses.border.primary} border-t shadow-lg`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex items-start space-x-3 flex-1">
              <Cookie
                className={`w-6 h-6 ${themeClasses.text.accent} flex-shrink-0 mt-1`}
              />
              <div className="flex-1">
                <h3
                  className={`font-semibold ${themeClasses.text.primary} font-noto-sans mb-1`}
                >
                  Cookie Preferences
                </h3>
                <p
                  className={`text-sm ${themeClasses.text.secondary} font-noto-sans leading-relaxed`}
                >
                  We use cookies to enhance your experience, analyse site usage,
                  and assist with marketing. By clicking "Accept All", you
                  consent to our use of cookies.
                  {!showDetails && (
                    <button
                      onClick={() => setShowDetails(true)}
                      className={`ml-1 ${themeClasses.text.accent} hover:underline font-medium`}
                    >
                      Learn more
                    </button>
                  )}
                </p>

                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg"
                  >
                    <div className="space-y-2 text-xs font-noto-sans">
                      <div>
                        <strong className={themeClasses.text.primary}>
                          Essential Cookies:
                        </strong>
                        <span className={themeClasses.text.secondary}>
                          {" "}
                          Required for site functionality
                        </span>
                      </div>
                      <div>
                        <strong className={themeClasses.text.primary}>
                          Analytics Cookies:
                        </strong>
                        <span className={themeClasses.text.secondary}>
                          {" "}
                          Google Analytics (G-W25JEYL7K9) for site improvement
                        </span>
                      </div>
                      <div>
                        <strong className={themeClasses.text.primary}>
                          Preference Cookies:
                        </strong>
                        <span className={themeClasses.text.secondary}>
                          {" "}
                          Remember your theme and settings
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-3 w-full lg:w-auto">
              <Button
                onClick={rejectCookies}
                variant="outline"
                size="sm"
                className={`${themeClasses.button.outline} font-noto-sans text-xs px-4 py-2`}
              >
                Reject All
              </Button>
              <Button
                onClick={acceptCookies}
                size="sm"
                className={`${themeClasses.button.primary} font-noto-sans text-xs px-4 py-2`}
              >
                Accept All
              </Button>
              <button
                onClick={() => setIsVisible(false)}
                className={`p-1 ${themeClasses.text.tertiary} hover:${themeClasses.text.primary} transition-colors`}
                aria-label="Close cookie banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;
