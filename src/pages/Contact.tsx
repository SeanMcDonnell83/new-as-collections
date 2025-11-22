import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import CookieConsent from "@/components/CookieConsent";
import { themeClasses } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Mail, Clock, Plus, Minus, Globe } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["0151 329 0946"],
      sub: "Free consultation available",
      action: "tel:+441513290946",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@ascollections.co.uk"],
      sub: "24/7 email support",
      action: "mailto:info@ascollections.co.uk",
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["Liverpool, UK"],
      sub: "Serving England, Scotland, Wales",
      action: null,
    },
  ];

  return (
    <div className={`min-h-screen ${themeClasses.bg.primary}`}>
      <Helmet>
        <title>
          Contact Us | Free Debt Recovery Consultation | A.S. Collections
        </title>
        <meta
          name="description"
          content="Contact A.S. Collections for free no win no fee debt recovery consultation. Call 0151 329 0946. Liverpool-based, serving all UK."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "A.S. Collections",
            image:
              "https://ascollections.co.uk/AS-collections-Brand-Logos-Mono-1750-x-750-px-dark.png",
            telephone: "0151 329 0946",
            email: "info@ascollections.co.uk",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Liverpool",
              addressCountry: "UK",
            },
            url: "https://ascollections.co.uk/contact",
          })}
        </script>
      </Helmet>

      <Header />
      <main>
        {/* Hero Section: The Concierge */}
        <section
          className="relative pt-24 pb-16 bg-slate-900 overflow-hidden min-h-auto flex items-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
                GET YOUR FREE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  NO WIN NO FEE
                </span>
                <br /> CONSULTATION
              </h1>
              <p className="text-slate-300 text-lg">
                No obligation, completely free consultation to assess your unpaid
                invoice recovery UK needs.
              </p>
            </motion.div>

            {/* Floating Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-10 shadow-2xl"
            >
              <Contact />
            </motion.div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-24">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-slate-600 font-semibold text-lg mb-1">
                    {info.details[0]}
                  </p>
                  <p className="text-slate-500 text-sm">{info.sub}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-900 mb-4">
                COVERAGE ACROSS THE UK
              </h2>
              <p className="text-lg text-slate-600 mb-12">
                We serve all regions of the United Kingdom
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                {[
                  "London",
                  "Manchester",
                  "Birmingham",
                  "Liverpool",
                  "Leeds",
                  "Scotland",
                  "Wales",
                  "Northern Ireland",
                ].map((city, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-center justify-center gap-2 text-slate-700 font-medium"
                  >
                    <span className="inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                    {city}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "How much does it cost?",
                  a: "We operate on a No Win, No Fee basis. If we don't recover your money, you don't pay us a penny for the collection service.",
                },
                {
                  q: "How long does it take?",
                  a: "Most debts are recovered within 14 days. However, complex cases may take longer. We keep you updated at every step.",
                },
                {
                  q: "Can you recover debts from individuals?",
                  a: "Yes, we recover both B2B (commercial) and B2C (consumer) debts, provided they are legally enforceable.",
                },
                {
                  q: "Do you cover my area?",
                  a: "Yes, we cover the entire UK including England, Scotland, Wales, and Northern Ireland, as well as international debts.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                  >
                    <span className="font-bold text-slate-900">{item.q}</span>
                    {openFaq === idx ? (
                      <Minus className="w-5 h-5 text-blue-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-slate-400" />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="p-6 bg-white text-slate-600 leading-relaxed border-t border-slate-200">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default ContactPage;
