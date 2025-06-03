import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AS</span>
                </div>
                <div>
                  <div className="text-white font-bold text-lg">
                    A.S. Collections
                  </div>
                  <div className="text-slate-300 text-xs uppercase tracking-wide">
                    Commercial Debt Recovery
                  </div>
                </div>
              </div>
              <p className="text-slate-300 mb-4 max-w-md">
                Commercial debt recovery done differently. We use a blend of
                high-tech and tenacity to ensure we collect your debt.
              </p>
              <p className="text-blue-400 font-semibold">
                If we can't collect it, nobody can.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>Commercial Debt Collection</li>
                <li>Accounts Receivable Management</li>
                <li>Court Claims & Legal Action</li>
                <li>Insolvency Services</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-slate-300 text-sm">
                <p>Liverpool, UK</p>
                <p>info@ascollections.co.uk</p>
                <p>24/7 Emergency Line Available</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 A.S. Collections. All rights reserved. | Authorised and
              regulated for debt collection services.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
