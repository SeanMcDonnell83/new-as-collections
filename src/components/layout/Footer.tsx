import { themeClasses } from "@/contexts/ThemeContext";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-6">
              <img
                loading="lazy"
                src="/as-collections-logo.png"
                className="h-12 w-auto"
                alt="AS Collections Logo"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p className="text-neutral-300 mb-4 max-w-md font-noto-sans">
              Leading commercial debt recovery UK specialists. No win no fee
              debt collection services across London, Manchester, Birmingham,
              Glasgow, and Edinburgh. Professional B2B debt recovery with 98%
              success rate and ethical approach.
            </p>
            <p className="text-blue-400 font-semibold mb-6 font-noto-sans">
              Recovery experts for hire UK - If we can't collect it, nobody can.
            </p>

            {/* External Links */}
            <div className="flex flex-wrap space-x-4 mb-6">
              <a
                href="https://www.fca.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-blue-400 transition-colors text-sm font-noto-sans"
              >
                FCA
              </a>
              <a
                href="https://www.cicm.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-blue-400 transition-colors text-sm font-noto-sans"
              >
                CICM
              </a>
              <a
                href="https://www.csa-uk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-blue-400 transition-colors text-sm font-noto-sans"
              >
                CSA
              </a>
              <a
                href="https://www.gov.uk/government/organisations/hm-courts-and-tribunals-service"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-blue-400 transition-colors text-sm font-noto-sans"
              >
                HMCTS
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-noto-sans">
              Services
            </h4>
            <div className="space-y-2 text-neutral-300 text-sm font-noto-sans">
              <div>Commercial B2B Debt Collection</div>
              <div>Construction & Engineering Recovery</div>
              <div>International Debt Recovery</div>
              <div>Independent Schools Collections</div>
              <div>Food & Drink Sector Recovery</div>
              <div>Oil & Gas Debt Collection</div>
              <div>Debtor Tracing Services</div>
              <div>Legal Action & Enforcement</div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-noto-sans">
              Industry Links
            </h4>
            <div className="space-y-2 text-neutral-300 text-sm font-noto-sans">
              <a
                href="https://www.legislation.gov.uk/ukpga/1998/20/contents"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-blue-400 transition-colors"
              >
                Late Payment of Commercial Debts Act
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

            <div className="mt-6">
              <h5 className="text-white font-semibold mb-2 font-noto-sans">
                Contact
              </h5>
              <div className="space-y-1 text-neutral-300 text-sm font-noto-sans">
                <div>Liverpool, UK</div>
                <div>London | Manchester | Birmingham</div>
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
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-8 text-center">
          <p className="text-neutral-400 text-sm font-noto-sans">
            © {new Date().getFullYear()} OVAS NW. All rights reserved. |
            Professional debt collection services across England, Scotland,
            Wales and Northern Ireland.
            <br />
            Website created by{" "}
            <a
              href="https://kaizenweb.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Kaizen
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
