import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import CookieConsent from "@/components/CookieConsent";
import { themeClasses } from "@/contexts/ThemeContext";

const Index = () => {
  return (
    <ThemeProvider>
      <div className={`min-h-screen ${themeClasses.bg.primary}`}>
        <Header />
        <main>
          <Hero />
          <WhyChooseUs />
          <Services />
          <About />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <CookieConsent />

        {/* GDPR Notice */}
        <div className="hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <p
              className={`text-xs ${themeClasses.text.muted} text-center font-noto-sans`}
            >
              Your privacy is important to us. We process personal data in
              accordance with GDPR. Contact us at info@ascollections.co.uk for
              data protection enquiries.
            </p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
