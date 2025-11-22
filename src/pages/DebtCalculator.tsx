import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DebtCalculator from "@/components/DebtCalculator";
import { themeClasses } from "@/contexts/ThemeContext";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const DebtCalculatorPage = () => {
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen ${themeClasses.bg.primary}`}>
      <Helmet>
        <title>Debt Recovery Calculator | A.S. Collections</title>
        <meta
          name="description"
          content="Calculate your potential debt recovery, including statutory interest and compensation. Free online tool."
        />
        <link rel="canonical" href="https://ascollections.co.uk/debt-calculator" />
      </Helmet>

      <Header />
      <main className="pt-32 pb-16 min-h-screen flex items-center justify-center">
        <DebtCalculator isOpen={true} onClose={() => navigate("/")} />
      </main>
      <Footer />
    </div>
  );
};

export default DebtCalculatorPage;
