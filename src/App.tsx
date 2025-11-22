import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";

// Lazy Load Pages
const AboutUs = lazy(() => import("./pages/AboutUs"));
const CommercialDebtRecovery = lazy(
  () => import("./pages/CommercialDebtRecovery"),
);
const Industries = lazy(() => import("./pages/Industries"));
const Compliance = lazy(() => import("./pages/Compliance"));
const ContactPage = lazy(() => import("./pages/Contact"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const WindingUpCheck = lazy(() => import("./pages/WindingUpCheck"));
const DebtCalculatorPage = lazy(() => import("./pages/DebtCalculator"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Service Pages
const ServicesOverview = lazy(
  () => import("./pages/services/ServicesOverview"),
);
const CommercialDebtRecoveryService = lazy(
  () => import("./pages/services/CommercialDebtRecoveryService"),
);
const InternationalDebtRecovery = lazy(
  () => import("./pages/services/InternationalDebtRecovery"),
);
const DebtorTracing = lazy(() => import("./pages/services/DebtorTracing"));
const CreditControlInsolvency = lazy(
  () => import("./pages/services/CreditControlInsolvency"),
);

// Sector Pages
const ConstructionEngineering = lazy(
  () => import("./pages/sectors/ConstructionEngineering"),
);
const FoodDrinkHospitality = lazy(
  () => import("./pages/sectors/FoodDrinkHospitality"),
);
const OilGasEnergy = lazy(() => import("./pages/sectors/OilGasEnergy"));
const OtherIndustries = lazy(() => import("./pages/sectors/OtherIndustries"));
const RecruitmentAgencies = lazy(
  () => import("./pages/sectors/RecruitmentAgencies"),
);
const ShippingLogistics = lazy(
  () => import("./pages/sectors/ShippingLogistics"),
);

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
            <Suspense
              fallback={
                <div className="min-h-screen flex items-center justify-center bg-slate-50">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
              }
            >
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
                <Route path="/winding-up-check" element={<WindingUpCheck />} />
                <Route
                  path="/debt-calculator"
                  element={<DebtCalculatorPage />}
                />

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
                  path="/sectors/other-industries"
                  element={<OtherIndustries />}
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
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
