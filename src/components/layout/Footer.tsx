import { themeClasses } from "@/contexts/ThemeContext";
import { useThemeSafe } from "@/hooks/useThemeSafe";
import { Link } from "react-router-dom";
import { CheckCircle, TrendingUp, Shield } from "lucide-react";

const Footer = () => {
  const { theme } = useThemeSafe();

  const services = [
    { label: "Commercial Debt Recovery", href: "/services/commercial-debt-recovery" },
    { label: "International Recovery", href: "/services/international-debt-collection" },
    { label: "Debtor Tracing", href: "/services/debtor-tracing" },
    { label: "Credit Control & Insolvency", href: "/services/credit-control-insolvency" },
  ];

  const sectors = [
    { label: "Construction & Engineering", href: "/sectors/construction-engineering" },
    { label: "Food & Drink Industry", href: "/sectors/food-drink-hospitality" },
    { label: "Oil & Gas Sector", href: "/sectors/oil-gas-energy" },
    { label: "Independent Schools", href: "/sectors/private-schools-education" },
    { label: "Recruitment Agencies", href: "/sectors/recruitment-agencies" },
    { label: "Shipping & Logistics", href: "/sectors/shipping-logistics" },
  ];

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Column 1: Logo & Company Info */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <img
                loading="lazy"
                src="/AS-collections-Brand-Logos-Mono-1750-x-750-px-light.png"
                className="h-10 w-auto"
                alt="AS Collections Logo"
              />
            </div>
            <p className="text-slate-300 text-sm mb-6 font-inter leading-relaxed">
              Recovery experts for hire UK. Professional debt collection services across England, Scotland, Wales and Northern Ireland.
            </p>

            {/* Trust Signals */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm font-inter text-slate-300">98% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm font-inter text-slate-300">14-Day Average Recovery</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm font-inter text-slate-300">No Win, No Fee Guarantee</span>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="md:col-span-1">
            <h3 className="font-manrope font-bold text-white text-sm uppercase tracking-wider mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-slate-300 hover:text-white text-sm font-inter transition-colors duration-200"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-red-500 hover:text-red-400 text-sm font-inter font-bold transition-colors duration-200"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Sectors */}
          <div className="md:col-span-1">
            <h3 className="font-manrope font-bold text-white text-sm uppercase tracking-wider mb-6">Sectors</h3>
            <ul className="space-y-3">
              {sectors.map((sector) => (
                <li key={sector.href}>
                  <Link
                    to={sector.href}
                    className="text-slate-300 hover:text-white text-sm font-inter transition-colors duration-200"
                  >
                    {sector.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Tools & Resources */}
          <div className="md:col-span-1">
            <h3 className="font-manrope font-bold text-white text-sm uppercase tracking-wider mb-6">Tools</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/winding-up-check"
                  className="text-slate-300 hover:text-white text-sm font-inter transition-colors duration-200"
                >
                  Check Winding-Up List
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-slate-300 hover:text-white text-sm font-inter transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/compliance"
                  className="text-slate-300 hover:text-white text-sm font-inter transition-colors duration-200"
                >
                  Compliance
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-300 hover:text-white text-sm font-inter transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div className="md:col-span-1">
            <h3 className="font-manrope font-bold text-white text-sm uppercase tracking-wider mb-6">Contact</h3>
            <ul className="space-y-3">
              <li>
                <div className="text-slate-300 text-sm font-inter">Liverpool, UK</div>
                <div className="text-slate-400 text-xs font-inter">Serving all UK regions</div>
              </li>
              <li>
                <a
                  href="tel:+441513290946"
                  className="text-red-500 hover:text-red-400 text-sm font-inter font-bold transition-colors duration-200"
                >
                  0151 329 0946
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ascollections.co.uk"
                  className="text-slate-300 hover:text-white text-sm font-inter transition-colors duration-200 break-all"
                >
                  info@ascollections.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* No Win No Fee CTA Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-manrope font-bold text-white mb-3">No Win, No Fee</div>
            <p className="text-slate-300 text-base font-inter mb-6 max-w-2xl mx-auto">
              We only succeed when you succeed. Zero upfront costs, no hidden fees. You pay only when we recover your debt.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-slate-900 font-manrope font-bold text-sm rounded-full hover:bg-slate-100 transition-all duration-200"
            >
              Get Your Free Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Left: Copyright & Legal */}
            <div className="text-slate-400 text-xs font-inter">
              <p className="mb-2">
                © {new Date().getFullYear()} OVAS NW. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-slate-300 transition-colors">Complaints</a>
              </div>
            </div>

            {/* Right: Website Credit */}
            <div className="text-slate-400 text-xs font-inter md:text-right">
              <p>
                Website created by{" "}
                <a
                  href="https://kaizenweb.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-400 transition-colors font-bold"
                >
                  Kaizen
                </a>
              </p>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center text-slate-500 text-xs font-inter italic">
            <p>"If we can't collect it, nobody can." – A.S. Collections</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
