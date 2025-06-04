import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
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
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="mb-6">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe4ae46bbd81b4b95bef54d66dd9748cc%2F2e4607f765394e439f0cc9d25ab3ef79?width=400"
                  className="h-12 w-auto"
                  alt="AS Collections Logo"
                />
              </div>
              <p className="text-slate-300 mb-4 max-w-md">
                Leading commercial debt recovery UK specialists. No win no fee
                debt collection services across London, Manchester, Birmingham,
                Glasgow, and Edinburgh.
              </p>
              <p className="text-blue-400 font-semibold mb-6">
                Recovery experts for hire UK - If we can't collect it, nobody
                can.
              </p>

              {/* External Links */}
              <div className="flex space-x-4">
                <a
                  href="https://www.fca.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
                >
                  FCA
                </a>
                <a
                  href="https://www.cicm.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
                >
                  CICM
                </a>
                <a
                  href="https://www.csa-uk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
                >
                  CSA
                </a>
                <a
                  href="https://www.gov.uk/government/organisations/hm-courts-and-tribunals-service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
                >
                  HMCTS
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>Commercial B2B Debt Collection</li>
                <li>Construction & Engineering Recovery</li>
                <li>International Debt Recovery</li>
                <li>Independent Schools Collections</li>
                <li>Food & Drink Sector Recovery</li>
                <li>Oil & Gas Debt Collection</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Industry Links</h4>
              <div className="space-y-2 text-slate-300 text-sm">
                <a
                  href="https://www.legislation.gov.uk/ukpga/1984/28/contents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-blue-400 transition-colors"
                >
                  Data Protection Act
                </a>
                <a
                  href="https://www.gov.uk/late-commercial-payments-interest-debt-recovery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-blue-400 transition-colors"
                >
                  Late Payment Legislation
                </a>
                <a
                  href="https://www.gov.uk/statutory-demands"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-blue-400 transition-colors"
                >
                  Statutory Demands
                </a>
                <a
                  href="https://www.gov.uk/county-court-judgments-ccj-for-debt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-blue-400 transition-colors"
                >
                  County Court Claims
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-slate-300 text-sm">
                <p>Liverpool, UK</p>
                <p>London | Manchester | Birmingham</p>
                <a
                  href="mailto:info@ascollections.co.uk"
                  className="block hover:text-blue-400 transition-colors"
                >
                  info@ascollections.co.uk
                </a>
                <a
                  href="tel:+441513290946"
                  className="block hover:text-blue-400 transition-colors"
                >
                  0151 329 0946
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2025 A.S. Collections. All rights reserved. | Authorised and
              regulated for commercial debt recovery UK. FCA/CSA/CICM
              accredited.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
