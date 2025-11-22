import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import CookieConsent from "@/components/CookieConsent";
import { themeClasses } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <div className={`min-h-screen ${themeClasses.bg.primary}`}>
      <Helmet>
        <title>About Us - Leading UK Commercial Debt Recovery | A.S. Collections</title>
        <meta 
          name="description" 
          content="Meet Emilie Campbell and the A.S. Collections team. Leading UK debt recovery specialists with 98% success rate. Our mission, values and why businesses choose us for commercial debt collection." 
        />
        <meta name="keywords" content="about us debt recovery UK, Emilie Campbell managing director, commercial debt collection team, debt recovery specialists UK, professional debt collection services" />
        <link rel="canonical" href="https://ascollections.co.uk/about-us" />
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
            <h1 className={`text-5xl font-bold ${themeClasses.text.primary} mb-6 font-noto-serif`}>
              About A.S. Collections
            </h1>
            <p className={`text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto font-noto-sans font-light`}>
              Leading UK commercial debt recovery specialists with decades of experience helping businesses 
              recover outstanding invoices. Meet our team and discover why we're the trusted choice for 
              professional debt collection across England, Scotland, Wales, and Northern Ireland.
            </p>
          </div>
        </motion.section>

        <About />
        <WhyChooseUs />
        
        {/* Mission Statement Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`py-20 ${themeClasses.bg.secondary}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold ${themeClasses.text.primary} mb-6 font-noto-serif`}>
                Our Mission
              </h2>
              <div className={`max-w-4xl mx-auto ${themeClasses.bg.primary} rounded-2xl p-8 border ${themeClasses.border.primary}`}>
                <blockquote className={`text-2xl ${themeClasses.text.primary} italic leading-relaxed font-noto-serif mb-6`}>
                  "To revolutionize commercial debt recovery by combining cutting-edge technology with 
                  time-tested human expertise, delivering exceptional results whilst preserving the 
                  relationships that matter most to our clients' businesses."
                </blockquote>
                <p className={`text-lg ${themeClasses.text.secondary} font-noto-sans`}>
                  We believe that effective debt recovery shouldn't come at the cost of damaged business 
                  relationships. Our mission is to provide ethical, professional, and highly effective 
                  commercial debt collection services that protect and enhance our clients' reputation 
                  whilst maximizing recovery rates.
                </p>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "98%", label: "Success Rate", description: "Outstanding debt recovery" },
                { number: "2,500+", label: "Businesses Helped", description: "Across all UK sectors" },
                { number: "£50M+", label: "Total Recovered", description: "For our valued clients" },
                { number: "14 Days", label: "Average Recovery", description: "Quick professional results" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`text-center p-6 ${themeClasses.bg.primary} rounded-xl border ${themeClasses.border.primary}`}
                >
                  <div className={`text-4xl font-bold ${themeClasses.text.accent} font-noto-serif mb-2`}>
                    {stat.number}
                  </div>
                  <div className={`text-lg font-semibold ${themeClasses.text.primary} font-noto-sans mb-1`}>
                    {stat.label}
                  </div>
                  <div className={`text-sm ${themeClasses.text.secondary} font-noto-sans`}>
                    {stat.description}
                  </div>
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

export default AboutUs;
