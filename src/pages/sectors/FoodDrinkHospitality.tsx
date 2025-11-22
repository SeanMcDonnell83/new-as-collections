import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Utensils,
  Clock,
  AlertOctagon,
  ChefHat,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FoodDrinkHospitality = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-green-500 selection:text-white overflow-x-hidden">
      <Helmet>
        <title>Hospitality Debt Collection | Food & Drink Specialists</title>
        <meta
          name="description"
          content="Fast-paced debt recovery for the food, drink, and hospitality sector. We recover debts from restaurants, wholesalers, and caterers before insolvency strikes."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section: Fresh & Fast */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
          {/* Fresh Accents */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-green-50/50 skew-x-12 transform origin-top-right" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-800 text-sm font-bold mb-6 tracking-wide uppercase">
                  Hospitality & Food Service
                </span>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]">
                  SERVED <br />
                  <span className="text-green-600 italic">FRESH.</span> <br />
                  PAID <br />
                  <span className="text-green-600 italic">FAST.</span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 max-w-lg font-medium leading-relaxed">
                  In hospitality, speed is everything. Restaurants close
                  overnight. We move immediately to secure your payment before
                  the shutters come down.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/winding-up-check">
                    <Button className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-all">
                      Check Insolvency Risk
                    </Button>
                  </Link>
                  <Link to="/services/credit-control-insolvency">
                    <Button
                      variant="ghost"
                      className={`${themeClasses.text.primary} hover:${themeClasses.bg.accent} font-bold text-lg px-8 py-6 rounded-full`}
                    >
                      Insolvency Services
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Masonry Grid Visual */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div style={{ y: y1 }} className="space-y-4">
                  <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                    <Utensils className="w-8 h-8 text-green-500 mb-4" />
                    <h3 className="font-bold text-lg">Restaurants</h3>
                    <p className="text-sm text-slate-500">
                      High turnover, high risk.
                    </p>
                  </div>
                  <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl">
                    <ChefHat className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="font-bold text-lg">Caterers</h3>
                    <p className="text-sm text-slate-400">
                      Seasonal cash flow gaps.
                    </p>
                  </div>
                </motion.div>
                <motion.div style={{ y: y2 }} className="space-y-4 mt-12">
                  <div className="bg-green-600 text-white p-6 rounded-2xl shadow-xl">
                    <Truck className="w-8 h-8 text-white mb-4" />
                    <h3 className="font-bold text-lg">Wholesalers</h3>
                    <p className="text-sm text-green-100">
                      Razor-thin margins.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                    <Clock className="w-8 h-8 text-red-500 mb-4" />
                    <h3 className="font-bold text-lg">Speed</h3>
                    <p className="text-sm text-slate-500">
                      Critical response time.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pain Points: The Menu of Problems */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4">THE MENU OF EXCUSES</h2>
              <p className="text-xl text-slate-500">
                Common problems we solve daily.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Insolvency Risk",
                  desc: "Restaurants and bars go bust overnight. If you wait, you get nothing.",
                  icon: AlertOctagon,
                  color: "text-red-500",
                },
                {
                  title: "Razor-Thin Margins",
                  desc: "You can't afford to write off a £5k invoice on a low-margin food order.",
                  icon: Utensils,
                  color: "text-orange-500",
                },
                {
                  title: '"Cheque in the Post"',
                  desc: "Constant excuses from busy chefs and managers while they order from your competitor.",
                  icon: Clock,
                  color: "text-blue-500",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all"
                >
                  <item.icon className={`w-12 h-12 ${item.color} mb-6`} />
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section: Speed */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-green-600/10 blur-3xl transform -skew-y-12" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black mb-8 italic">
                  WE MOVE <br />
                  <span className="text-green-500">FASTER.</span>
                </h2>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  In hospitality, being the first creditor to act is the
                  difference between payment and a bad debt write-off. We handle
                  the awkwardness so you can maintain the supplier relationship
                  if you want to.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-lg font-bold">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    Immediate Action
                  </li>
                  <li className="flex items-center gap-3 text-lg font-bold">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    Relationship Preservation
                  </li>
                  <li className="flex items-center gap-3 text-lg font-bold">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    No Win, No Fee
                  </li>
                </ul>
                <Link to="/services/credit-control-insolvency">
                  <Button className="bg-white text-slate-900 hover:bg-green-50 font-bold px-8 py-4 rounded-full">
                    Start Recovery <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                {/* Motion Blur Effect Visual */}
                <motion.div
                  animate={{ x: [-20, 20, -20] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="bg-green-600 p-12 rounded-3xl transform rotate-3 blur-sm opacity-50 absolute inset-0"
                />
                <div className="bg-slate-800 p-12 rounded-3xl border border-slate-700 relative shadow-2xl">
                  <h3 className="text-2xl font-bold mb-4">The A.S. Promise</h3>
                  <p className="text-slate-400">
                    "We don't wait for the second excuse. We secure your
                    position immediately."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-black text-slate-900 mb-6">
              Don't Let Your Invoices Expire.
            </h2>
            <p className="text-xl text-slate-600 mb-10">
              Check if your customer is showing signs of insolvency.
            </p>
            <Link to="/winding-up-check">
              <Button className="bg-slate-900 text-white hover:bg-slate-800 font-bold text-xl px-10 py-8 rounded-full shadow-xl transition-all transform hover:-translate-y-1">
                Check Winding-Up List Free
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FoodDrinkHospitality;
