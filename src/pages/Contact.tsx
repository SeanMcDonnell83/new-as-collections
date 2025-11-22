import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import CookieConsent from "@/components/CookieConsent";
import { themeClasses } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["0151 329 0946", "Free consultation available"],
      action: "tel:+441513290946"
    },
    {
      icon: Mail,
      title: "Email", 
      details: ["info@ascollections.co.uk", "24/7 email support"],
      action: "mailto:info@ascollections.co.uk"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["Liverpool, UK", "Serving England, Scotland, Wales"],
      action: null
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Emergency consultations available"],
      action: null
    }
  ];

  return (
    <div className={`min-h-screen ${themeClasses.bg.primary}`}>
      <Helmet>
        <title>Contact Us | Free Debt Recovery Consultation | A.S. Collections</title>
        <meta
          name="description"
          content="Contact A.S. Collections for free no win no fee debt recovery consultation. Call 0151 329 0946. Liverpool-based, serving all UK. 24/7 email support available."
        />
        <meta name="keywords" content="contact debt recovery, free consultation, A.S. Collections contact, Liverpool debt recovery, 0151 329 0946" />
        <link rel="canonical" href="https://ascollections.co.uk/contact" />
        <meta property="og:title" content="Contact Us | Free Debt Recovery Consultation | A.S. Collections" />
        <meta property="og:description" content="Free no win no fee debt recovery consultation. Call 0151 329 0946 or email." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ascollections.co.uk/contact" />
      </Helmet>
      
      <Header />
      <main>
        {/* Page Header */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`pt-32 pb-16 ${themeClasses.bg.primary}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className={`text-5xl font-bold ${themeClasses.text.primary} mb-6 font-montserrat font-700`}>
              Contact A.S. Collections
            </h1>
            <p className={`text-xl ${themeClasses.text.secondary} max-w-4xl mx-auto font-inter font-light mb-8`}>
              Get your free, no-obligation consultation with the UK's leading commercial debt recovery 
              specialists. We're here to help you recover your outstanding debts quickly and professionally.
            </p>
            
            {/* Quick Contact CTA */}
            <div className={`${themeClasses.bg.secondary} rounded-2xl p-6 border ${themeClasses.border.primary} max-w-2xl mx-auto`}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="text-center">
                  <a 
                    href="tel:+441513290946"
                    className={`text-2xl font-bold ${themeClasses.text.accent} hover:underline font-montserrat font-700 block`}
                  >
                    0151 329 0946
                  </a>
                  <span className={`text-sm ${themeClasses.text.secondary} font-inter`}>
                    Call for immediate consultation
                  </span>
                </div>
                <div className={`hidden sm:block w-px h-12 ${themeClasses.border.primary} border-l`}></div>
                <div className="text-center">
                  <div className={`text-lg font-bold ${themeClasses.text.primary} font-montserrat font-700`}>
                    No Win, No Fee
                  </div>
                  <span className={`text-sm ${themeClasses.text.secondary} font-inter`}>
                    Free consultation guaranteed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Information */}
        <section className={`py-20 ${themeClasses.bg.secondary}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className={`text-4xl font-bold ${themeClasses.text.primary} mb-6 font-montserrat font-700`}>
                Get In Touch
              </h2>
              <p className={`text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto font-inter font-light`}>
                Multiple ways to reach our debt recovery specialists. Choose the method that works best for you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`${themeClasses.bg.primary} rounded-xl border ${themeClasses.border.primary} p-6 text-center hover:shadow-lg transition-all duration-300 ${info.action ? 'cursor-pointer' : ''}`}
                    onClick={() => info.action && window.open(info.action)}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-3 font-montserrat font-700`}>
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <div 
                          key={detailIndex}
                          className={`${detailIndex === 0 ? `font-semibold ${themeClasses.text.primary}` : `text-sm ${themeClasses.text.secondary}`} font-inter`}
                        >
                          {detail}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Floating Contact Form */}
        <div className={`relative ${themeClasses.bg.primary} pb-20`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
            <div className={`${themeClasses.bg.primary} rounded-2xl shadow-2xl border ${themeClasses.border.primary} p-8`}>
              <Contact />
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`py-20 ${themeClasses.bg.secondary}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className={`text-4xl font-bold ${themeClasses.text.primary} mb-6 font-montserrat font-700`}>
                UK-Wide Service Coverage
              </h2>
              <p className={`text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto font-inter font-light`}>
                Based in Liverpool, we provide commercial debt recovery services across the entire United Kingdom.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  region: "England",
                  cities: ["London", "Manchester", "Birmingham", "Liverpool", "Leeds", "Sheffield", "Bristol", "Newcastle"],
                  description: "Comprehensive coverage across all English counties and major commercial centers."
                },
                {
                  region: "Scotland", 
                  cities: ["Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Stirling", "Perth"],
                  description: "Full Scottish coverage with understanding of Scottish legal procedures and commercial practices."
                },
                {
                  region: "Wales & Northern Ireland",
                  cities: ["Cardiff", "Swansea", "Newport", "Belfast", "Londonderry", "Armagh"],
                  description: "Extending our services throughout Wales and Northern Ireland with local expertise."
                }
              ].map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${themeClasses.bg.primary} rounded-xl border ${themeClasses.border.primary} p-6`}
                >
                  <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-4 font-montserrat font-700`}>
                    {area.region}
                  </h3>
                  <p className={`${themeClasses.text.secondary} font-inter text-sm mb-4 leading-relaxed`}>
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.cities.map((city, cityIndex) => (
                      <span 
                        key={cityIndex}
                        className={`px-3 py-1 rounded-full ${themeClasses.bg.accent} ${themeClasses.text.secondary} text-xs font-inter`}
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <FAQ />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default ContactPage;
