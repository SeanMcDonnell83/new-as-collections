import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import CommercialDebtRecovery from "./pages/CommercialDebtRecovery";
import Industries from "./pages/Industries";
import Compliance from "./pages/Compliance";
import ContactPage from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import WindingUpSearch from "./pages/WindingUpSearch";

// Service Pages
import ServicesOverview from "./pages/services/ServicesOverview";
import CommercialDebtRecoveryService from "./pages/services/CommercialDebtRecoveryService";
import InternationalDebtRecovery from "./pages/services/InternationalDebtRecovery";
import DebtorTracing from "./pages/services/DebtorTracing";
import CreditControlInsolvency from "./pages/services/CreditControlInsolvency";

// Sector Pages
import ConstructionEngineering from "./pages/sectors/ConstructionEngineering";
import FoodDrinkHospitality from "./pages/sectors/FoodDrinkHospitality";
import OilGasEnergy from "./pages/sectors/OilGasEnergy";
import PrivateSchoolsEducation from "./pages/sectors/PrivateSchoolsEducation";
import RecruitmentAgencies from "./pages/sectors/RecruitmentAgencies";
import ShippingLogistics from "./pages/sectors/ShippingLogistics";

import DebtCalculatorPage from "./pages/DebtCalculator";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route
                path="/commercial-debt-recovery"
                element={<CommercialDebtRecovery />}
              />
              <Route path="/industries" element={<Industries />} />
              <Route path="/compliance" element={<Compliance />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/winding-up-check" element={<WindingUpSearch />} />
              <Route path="/debt-calculator" element={<DebtCalculatorPage />} />

              {/* Service Routes */}
              <Route path="/services" element={<ServicesOverview />} />
              <Route
                path="/services/commercial-debt-recovery"
                element={<CommercialDebtRecoveryService />}
              />
              <Route
                path="/services/international-debt-collection"
                element={<InternationalDebtRecovery />}
              />
              <Route
                path="/services/debtor-tracing"
                element={<DebtorTracing />}
              />
              <Route
                path="/services/credit-control-insolvency"
                element={<CreditControlInsolvency />}
              />

              {/* Sector Routes */}
              <Route
                path="/sectors/construction-engineering"
                element={<ConstructionEngineering />}
              />
              <Route
                path="/sectors/food-drink-hospitality"
                element={<FoodDrinkHospitality />}
              />
              <Route
                path="/sectors/oil-gas-energy"
                element={<OilGasEnergy />}
              />
              <Route
                path="/sectors/private-schools-education"
                element={<PrivateSchoolsEducation />}
              />
              <Route
                path="/sectors/recruitment-agencies"
                element={<RecruitmentAgencies />}
              />
              <Route
                path="/sectors/shipping-logistics"
                element={<ShippingLogistics />}
              />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
