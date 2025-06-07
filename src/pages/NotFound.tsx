import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { themeClasses } from "@/contexts/ThemeContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  return (
    <div className={`min-h-screen ${themeClasses.bg.primary}`}>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-24">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <div
              className={`text-8xl font-bold ${themeClasses.text.accent} font-noto-serif`}
            >
              404
            </div>
            <h1
              className={`text-3xl font-bold ${themeClasses.text.primary} mt-4 font-noto-serif`}
            >
              Page Not Found
            </h1>
            <p className={`${themeClasses.text.secondary} mt-4 font-noto-sans`}>
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className={`${themeClasses.button.primary} font-noto-sans`}
            >
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className={`${themeClasses.button.outline} font-noto-sans`}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
