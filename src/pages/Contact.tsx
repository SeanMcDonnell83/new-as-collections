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
import { ObfuscatedMailto } from "@/components/ui/ObfuscatedMailto";

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
      details: ["Email our team"],
      sub: "24/7 email support",
      action: null,
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
        <meta
          property="og:title"
          content="Contact Us | Free Debt Recovery Consultation | A.S. Collections"
        />
        <meta
          property="og:description"
          content="Contact A.S. Collections for free no win no fee debt recovery consultation. Call 0151 329 0946. Liverpool-based, serving all UK."
        />
        <meta property="og:url" content="https://ascollections.co.uk/contact" />
        <link rel="canonical" href="https://ascollections.co.uk/contact" />
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
          className="relative pt-32 pb-20 bg-slate-900 overflow-hidden min-h-screen flex items-center justify-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Sidebar (Desktop) */}
              <div className="lg:col-span-4 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-4xl font-black text-white mb-2">
                    GET YOUR FREE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                      NO WIN NO FEE
                    </span>
                    <br /> CONSULTATION
                  </h1>
                  <p className="text-slate-400 text-sm mb-8">
                    No obligation, completely free consultation to assess your
                    unpaid invoice recovery UK needs.
                  </p>

                  <div className="space-y-4">
                    {contactInfo.map((info, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-4 rounded-xl flex items-center gap-4 hover:bg-slate-800 transition-colors cursor-pointer"
                        onClick={() =>
                          info.action &&
                          window.location.href !== info.action &&
                          window.open(info.action)
                        }
                      >
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                          <info.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-bold text-sm">
                            {info.title}
                          </p>
                          {info.title === "Email" ? (
                            <ObfuscatedMailto
                              user="info"
                              domain="ascollections.co.uk"
                              className="text-slate-300 text-xs underline underline-offset-2"
                            />
                          ) : (
                            <p className="text-slate-300 text-xs">
                              {info.details[0]}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Floating Form */}
              <div className="lg:col-span-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl"
                >
                  <Contact />
                </motion.div>
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
