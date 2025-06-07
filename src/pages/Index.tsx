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
    </div>
  );
};
export default Index;
