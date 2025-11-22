import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Papa from 'papaparse';
import { AlertTriangle, CheckCircle, AlertCircle, Loader, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { themeClasses } from '@/contexts/ThemeContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/CookieConsent';

interface WindingUpCompany {
  'Company Name': string;
  Status: string;
  'Date Listed': string;
}

interface MatchResult {
  name: string;
  status: string;
  dateListed: string;
}

const WindingUpSearch = () => {
  const [companies, setCompanies] = useState<WindingUpCompany[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetched, setIsFetched] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [matches, setMatches] = useState<MatchResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSdpHNh87M01OCBlmVcpEdh4rdYmGO7o6QGoWtd6oq5cuSJxp5QPVYEuGyGIH1GFqGTAS32gX30RLW3/pub?output=csv';

  // Normalise company name for matching
  const normaliseCompanyName = (name: string): string => {
    return name
      .toLowerCase()
      .trim()
      .replace(/\b(ltd|limited|plc|llp|inc|corporation|corp|co|company)\b/gi, '')
      .replace(/[.,\-]/g, '')
      .trim();
  };

  // Calculate similarity score (simple Levenshtein-inspired approach)
  const getSimilarityScore = (str1: string, str2: string): number => {
    const s1 = normaliseCompanyName(str1);
    const s2 = normaliseCompanyName(str2);

    if (s1 === s2) return 100;
    if (s1.includes(s2) || s2.includes(s1)) return 85;

    // Simple character overlap scoring
    let matches = 0;
    for (let char of s1) {
      if (s2.includes(char)) {
        matches++;
      }
    }
    return (matches / Math.max(s1.length, s2.length)) * 100;
  };

  // Fetch CSV on mount
  useEffect(() => {
    const fetchCSV = async () => {
      try {
        setIsLoading(true);
        setFetchError(null);
        const response = await fetch(CSV_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const data = results.data as WindingUpCompany[];
            setCompanies(data.filter(row => row['Company Name'] && row['Company Name'].trim()));
            setIsFetched(true);
            setIsLoading(false);
          },
          error: (error: Error) => {
            setFetchError(`Failed to parse CSV: ${error.message}`);
            setIsLoading(false);
          }
        });
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : 'Unknown error occurred';
        setFetchError(`Failed to fetch winding-up data: ${errorMsg}`);
        setIsLoading(false);
      }
    };

    fetchCSV();
  }, []);

  const handleScanList = () => {
    setIsSearching(true);
    setMatches([]);

    setTimeout(() => {
      // Split by both commas and newlines, handle multiple separators
      const userCompanies = userInput
        .split(/[,\n]+/)
        .map(name => name.trim())
        .filter(name => name.length > 0);

      const foundMatches: MatchResult[] = [];
      const threshold = 70; // Similarity score threshold

      for (const userCompany of userCompanies) {
        for (const csvCompany of companies) {
          const similarity = getSimilarityScore(userCompany, csvCompany['Company Name']);
          if (similarity >= threshold) {
            foundMatches.push({
              name: csvCompany['Company Name'],
              status: csvCompany.Status || 'Unknown',
              dateListed: csvCompany['Date Listed'] || 'N/A'
            });
            break; // Stop after first match for this company
          }
        }
      }

      setMatches(foundMatches);
      setHasSearched(true);
      setIsSearching(false);
    }, 500);
  };

  return (
    <div className={`min-h-screen ${themeClasses.bg.primary}`}>
      <Helmet>
        <title>Risk Checker - Winding-Up Petition Search | A.S. Collections</title>
        <meta
          name="description"
          content="Instantly screen your client list against our live UK winding-up database. Identify insolvency risks before they impact your business."
        />
        <meta name="keywords" content="winding-up petition search, company insolvency check, UK winding-up database, credit check, business risk assessment" />
        <link rel="canonical" href="https://ascollections.co.uk/winding-up-check" />
        <meta property="og:title" content="Risk Checker - Winding-Up Petition Search | A.S. Collections" />
        <meta property="og:description" content="Instantly check if your clients face winding-up petitions. Live UK company insolvency database." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ascollections.co.uk/winding-up-check" />
      </Helmet>

      <Header />
      <main className="pt-20">
        {/* Hero Section - Dark Dashboard Style */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative bg-slate-900 dark:bg-slate-950 text-white py-32 overflow-hidden"
        >
          {/* Grid pattern background */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Gradient orbs */}
          <div className="absolute top-20 -right-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-40 w-80 h-80 bg-red-600/20 rounded-full blur-3xl"></div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 rounded-full px-4 py-2 mb-8"
            >
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-montserrat font-700 uppercase tracking-widest text-blue-300">
                Live Risk Detection
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold mb-6 font-montserrat font-800"
            >
              Insolvency Risk Checker
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-slate-300 max-w-2xl mx-auto mb-4 leading-relaxed font-inter"
            >
              Screen your entire client list against our live UK winding-up database in seconds.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-slate-400 font-inter"
            >
              Identify insolvency risks instantly. Protect your business. Make informed credit decisions.
            </motion.p>
          </div>
        </motion.section>

        {/* Main Scan Interface */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Loading State */}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl p-12 text-center border border-slate-100 dark:border-neutral-800"
              >
                <Loader className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
                <p className={`${themeClasses.text.secondary} font-inter text-lg`}>
                  Initializing Risk Detection System...
                </p>
              </motion.div>
            )}

            {/* Fetch Error State */}
            {fetchError && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-red-50 dark:bg-red-950/20 rounded-2xl shadow-2xl p-8 border border-red-200 dark:border-red-800"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-600 dark:bg-red-500 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-900 dark:text-red-200 font-montserrat mb-2">
                      System Error
                    </h3>
                    <p className={`${themeClasses.text.secondary} font-inter mb-4`}>
                      {fetchError}
                    </p>
                    <p className={`text-sm ${themeClasses.text.tertiary} font-inter`}>
                      Please try again later or contact us for assistance.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Scan Interface */}
            {isFetched && !fetchError && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Floating Card */}
                <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl p-8 md:p-12 border border-slate-100 dark:border-neutral-800 -translate-y-16 relative z-10">
                  <div className="mb-8">
                    <h2 className={`text-2xl md:text-3xl font-bold ${themeClasses.text.primary} mb-3 font-montserrat font-800`}>
                      Scan Your Client List
                    </h2>
                    <p className={`${themeClasses.text.secondary} font-inter`}>
                      Enter company names below. We'll instantly check each against our live winding-up database.
                    </p>
                  </div>

                  {/* Input Field - Code Editor Style */}
                  <div className="mb-8">
                    <label htmlFor="companyList" className={`block text-sm font-montserrat font-700 uppercase tracking-wider ${themeClasses.text.primary} mb-3`}>
                      Company Names
                    </label>
                    <textarea
                      id="companyList"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      placeholder="Acme Ltd&#10;Smith & Co&#10;ABC Solutions Ltd"
                      className={`w-full h-40 p-4 rounded-lg bg-slate-50 dark:bg-neutral-950 border-2 border-slate-200 dark:border-neutral-800 ${themeClasses.text.primary} font-mono text-sm leading-relaxed placeholder-slate-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none`}
                      disabled={isSearching}
                    />
                    <p className={`text-xs ${themeClasses.text.tertiary} mt-2 font-inter`}>
                      Separate entries with commas or new lines. One company per line or comma-separated.
                    </p>
                  </div>

                  {/* Scan Button */}
                  <Button
                    onClick={handleScanList}
                    disabled={!userInput.trim() || isSearching}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-montserrat font-700 text-sm uppercase tracking-widest py-4 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:from-gray-500 disabled:to-gray-600 shadow-lg hover:shadow-xl disabled:shadow-none"
                  >
                    {isSearching ? (
                      <>
                        <Loader className="w-5 h-5 animate-spin mr-2" />
                        SCANNING DATABASE...
                      </>
                    ) : (
                      'SCAN FOR RISK'
                    )}
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Results Section */}
            {hasSearched && !isSearching && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {matches.length > 0 ? (
                  <>
                    {/* CRITICAL RISK STATE */}
                    <div className="bg-white dark:bg-neutral-900 rounded-2xl border-2 border-red-500 overflow-hidden shadow-2xl">
                      <div className="bg-gradient-to-r from-red-50 to-red-100/50 dark:from-red-950 dark:to-red-900/50 px-8 py-6 border-b border-red-500">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-red-600 dark:bg-red-500 flex items-center justify-center flex-shrink-0 animate-pulse">
                            <AlertTriangle className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-red-900 dark:text-red-100 font-montserrat font-800 mb-2">
                              CRITICAL INSOLVENCY RISK DETECTED
                            </h3>
                            <p className="text-red-800 dark:text-red-200 font-inter leading-relaxed max-w-2xl">
                              One or more companies on your list are currently flagged for winding-up action. <strong>Do not extend further credit.</strong> Contact us immediately to secure your position.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Results Table */}
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className={`${themeClasses.bg.secondary} border-b ${themeClasses.border.primary}`}>
                              <th className="text-left px-6 py-4 font-montserrat font-700 uppercase text-xs tracking-wider text-slate-600 dark:text-slate-400">
                                Company Name
                              </th>
                              <th className="text-left px-6 py-4 font-montserrat font-700 uppercase text-xs tracking-wider text-slate-600 dark:text-slate-400">
                                Status
                              </th>
                              <th className="text-left px-6 py-4 font-montserrat font-700 uppercase text-xs tracking-wider text-slate-600 dark:text-slate-400">
                                Date Listed
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {matches.map((match, index) => (
                              <motion.tr
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className={`border-b ${themeClasses.border.primary} hover:${themeClasses.bg.secondary} transition-colors duration-200`}
                              >
                                <td className={`px-6 py-4 font-bold ${themeClasses.text.primary} font-montserrat`}>
                                  {match.name}
                                </td>
                                <td className="px-6 py-4">
                                  <span className="inline-block bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-xs font-montserrat font-700 uppercase">
                                    {match.status}
                                  </span>
                                </td>
                                <td className={`px-6 py-4 ${themeClasses.text.secondary} font-inter`}>
                                  {match.dateListed}
                                </td>
                              </motion.tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Action CTA */}
                      <div className="bg-gradient-to-r from-red-50 to-red-100/50 dark:from-red-950 dark:to-red-900/50 px-8 py-8 border-t border-red-500">
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                          <div className="flex-1">
                            <p className={`font-montserrat font-700 text-lg ${themeClasses.text.primary} mb-2`}>
                              Need Expert Guidance?
                            </p>
                            <p className={`${themeClasses.text.secondary} font-inter text-sm`}>
                              Our insolvency specialists are ready to help you assess your exposure and take immediate action.
                            </p>
                          </div>
                          <Button
                            onClick={() => window.location.href = 'tel:+441513290946'}
                            className="bg-red-600 hover:bg-red-700 text-white font-montserrat font-700 text-sm uppercase tracking-wider px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap flex-shrink-0"
                          >
                            Speak to Expert Now
                            <span className="text-xl ml-2">0151 329 0946</span>
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Compliance Note */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800 p-6"
                    >
                      <p className="text-xs font-montserrat font-700 uppercase tracking-wider text-amber-900 dark:text-amber-200 mb-2">
                        Compliance Note
                      </p>
                      <p className={`text-sm ${themeClasses.text.secondary} font-inter leading-relaxed`}>
                        This tool uses 'fuzzy matching' to detect potential insolvency risks. <strong>Always verify the exact legal entity name and company number via Companies House before taking legal action.</strong> We accept no liability for identity errors based on similar trading names.
                      </p>
                    </motion.div>
                  </>
                ) : (
                  <>
                    {/* SAFE STATE */}
                    <div className="bg-white dark:bg-neutral-900 rounded-2xl border-2 border-green-500 overflow-hidden shadow-2xl">
                      <div className="bg-gradient-to-r from-green-50 to-green-100/50 dark:from-green-950 dark:to-green-900/50 px-8 py-6 border-b border-green-500">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-green-600 dark:bg-green-500 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-green-900 dark:text-green-100 font-montserrat font-800 mb-2">
                              No Risks Detected
                            </h3>
                            <p className="text-green-800 dark:text-green-200 font-inter leading-relaxed">
                              None of the companies scanned appear on our current winding-up register. Your credit exposure looks secure at this time.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="px-8 py-6">
                        <p className={`${themeClasses.text.secondary} font-inter mb-2`}>
                          Keep your business protected. Run regular checks on your client list and monitor for changes.
                        </p>
                        <p className={`text-sm ${themeClasses.text.tertiary} font-inter`}>
                          Our database is updated daily with the latest Companies House filings.
                        </p>
                      </div>
                    </div>

                    {/* Compliance Note */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800 p-6"
                    >
                      <p className="text-xs font-montserrat font-700 uppercase tracking-wider text-amber-900 dark:text-amber-200 mb-2">
                        Compliance Note
                      </p>
                      <p className={`text-sm ${themeClasses.text.secondary} font-inter leading-relaxed`}>
                        This tool uses 'fuzzy matching' to detect potential insolvency risks. <strong>Always verify the exact legal entity name and company number via Companies House before taking legal action.</strong> We accept no liability for identity errors based on similar trading names.
                      </p>
                    </motion.div>
                  </>
                )}

                {/* New Scan Button */}
                <div className="text-center">
                  <Button
                    onClick={() => {
                      setUserInput('');
                      setMatches([]);
                      setHasSearched(false);
                    }}
                    className={`${themeClasses.button.secondary} font-montserrat font-700 text-sm uppercase tracking-wider px-8 py-3 rounded-lg transition-all duration-200`}
                  >
                    Scan Another List
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Information Section */}
        {isFetched && !fetchError && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`py-20 ${themeClasses.bg.secondary}`}
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className={`text-4xl font-bold ${themeClasses.text.primary} mb-4 font-montserrat font-800`}>
                  How Risk Detection Works
                </h2>
                <p className={`text-lg ${themeClasses.text.secondary} max-w-2xl mx-auto font-inter`}>
                  Our intelligent screening system processes your client list in real-time against live UK government data.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    num: "01",
                    title: "Real-Time Database",
                    description: "Live data updated daily from Companies House with the latest winding-up petitions and insolvency filings."
                  },
                  {
                    num: "02",
                    title: "Smart Matching Engine",
                    description: "Our AI-powered fuzzy matching detects company names even with slight variations in spelling or formatting."
                  },
                  {
                    num: "03",
                    title: "Instant Results",
                    description: "Scan dozens of companies in seconds. Get immediate insights to protect your business and credit exposure."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className={`${themeClasses.bg.primary} rounded-xl p-8 border ${themeClasses.border.primary} h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                      <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 font-montserrat mb-4 opacity-50">
                        {item.num}
                      </div>
                      <h3 className={`text-lg font-bold ${themeClasses.text.primary} mb-3 font-montserrat font-700`}>
                        {item.title}
                      </h3>
                      <p className={`${themeClasses.text.secondary} font-inter leading-relaxed`}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`${themeClasses.bg.primary} rounded-xl p-8 border ${themeClasses.border.primary} mt-12`}
              >
                <h3 className={`text-lg font-bold ${themeClasses.text.primary} mb-4 font-montserrat font-700`}>
                  Questions About Your Results?
                </h3>
                <p className={`${themeClasses.text.secondary} font-inter mb-6`}>
                  Our team of insolvency and debt recovery experts are ready to help you understand your findings and develop a strategy to protect your business.
                </p>
                <Button
                  onClick={() => window.location.href = '/contact'}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-montserrat font-700 text-sm uppercase tracking-wider px-6 py-3 rounded-lg transition-all duration-200"
                >
                  Get Expert Consultation
                </Button>
              </motion.div>
            </div>
          </motion.section>
        )}
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default WindingUpSearch;
