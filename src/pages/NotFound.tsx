import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { themeClasses } from "@/contexts/ThemeContext";
import { Home, Phone } from "lucide-react";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404: Page Not Found | A.S. Collections</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />

      <div className={`min-h-screen ${themeClasses.bg.primary} flex flex-col items-center justify-center pt-32 pb-20 px-4`}>
        <div className="max-w-2xl mx-auto text-center">
          <h1 className={`text-9xl font-black mb-6 ${themeClasses.text.primary} font-montserrat`}>
            404
          </h1>
          <h2 className={`text-3xl md:text-4xl font-bold ${themeClasses.text.primary} mb-4 font-montserrat`}>
            Page Not Found
          </h2>
          <p className={`text-lg ${themeClasses.text.secondary} mb-8 max-w-md mx-auto font-inter`}>
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className={`${themeClasses.button.primary} font-bold px-8 py-3 rounded-full font-montserrat`}>
                <Home className="w-5 h-5 mr-2" />
                Return Home
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="font-bold px-8 py-3 rounded-full font-montserrat"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NotFound;
