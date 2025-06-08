import { Link, useNavigate } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { themeClasses } from "@/contexts/ThemeContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useEffect, useState } from "react";

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // Auto redirect to homepage after 10 seconds
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate("/", { replace: true });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);
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
            <p
              className={`${themeClasses.text.tertiary} mt-2 font-noto-sans text-sm`}
            >
              Redirecting to homepage in {countdown} seconds...
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
