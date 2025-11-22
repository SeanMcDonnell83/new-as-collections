import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Papa from 'papaparse';
import { AlertTriangle, CheckCircle, AlertCircle, Loader } from 'lucide-react';
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
      const userCompanies = userInput
        .split('\n')
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
        <title>Winding-Up Petition Search | Check Company Insolvency | A.S. Collections</title>
        <meta
          name="description"
          content="Instantly check if your clients face winding-up petitions. Live UK company insolvency database. Protect your business with our free winding-up search tool."
        />
        <meta name="keywords" content="winding-up petition search, company insolvency check, UK winding-up database, credit check, business risk assessment" />
        <link rel="canonical" href="https://ascollections.co.uk/winding-up-check" />
        <meta property="og:title" content="Winding-Up Petition Search | Check Company Insolvency | A.S. Collections" />
        <meta property="og:description" content="Instantly check if your clients face winding-up petitions. Live UK company insolvency database." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ascollections.co.uk/winding-up-check" />
      </Helmet>

      <Header />
      <main className="pt-32">
        {/* Hero Section - Professional Alert Style */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 dark:from-blue-900 dark:via-blue-800 dark:to-slate-900 text-white py-24"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat font-800 leading-tight">
              Winding-Up Petition Search
            </h1>
            <p className="text-xl text-blue-100 mb-4 leading-relaxed max-w-2xl mx-auto font-inter">
              Protect your business by screening your client list against our live database of UK companies facing winding-up action.
            </p>
            <p className="text-lg text-blue-100 font-inter max-w-2xl mx-auto opacity-90">
              Identify insolvency risks early and take proactive measures to safeguard your cash flow and business relationships.
            </p>
          </div>
        </motion.section>

        {/* Main Content */}
        <section className={`py-20 ${themeClasses.bg.primary}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* CSV Fetch Status */}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={`${themeClasses.bg.secondary} rounded-lg p-6 mb-8 border ${themeClasses.border.primary} text-center`}
              >
                <Loader className="w-6 h-6 animate-spin mx-auto mb-4 text-blue-600" />
                <p className={`${themeClasses.text.secondary} font-inter`}>
                  Loading winding-up database...
                </p>
              </motion.div>
            )}

            {fetchError && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-red-50 dark:bg-red-950 rounded-lg p-6 mb-8 border border-red-200 dark:border-red-800"
              >
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 mr-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-montserrat font-700 text-red-800 dark:text-red-200 mb-2">
                      Unable to Load Database
                    </h3>
                    <p className={`${themeClasses.text.secondary} font-inter text-sm`}>
                      {fetchError} Please try again later or contact us for assistance.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Search Tool */}
            {isFetched && !fetchError && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className={`${themeClasses.bg.secondary} rounded-2xl p-8 md:p-12 border ${themeClasses.border.primary} mb-8`}>
                  <h2 className={`text-3xl font-bold ${themeClasses.text.primary} mb-6 font-montserrat font-800`}>
                    Bulk Company Search
                  </h2>
                  <p className={`${themeClasses.text.secondary} mb-8 font-inter leading-relaxed`}>
                    Paste a list of company names below (one per line) to check them against our winding-up database. We'll identify any matches instantly.
                  </p>

                  <div className="mb-6">
                    <label htmlFor="companyList" className={`block text-sm font-semibold ${themeClasses.text.primary} mb-3 font-montserrat font-700`}>
                      Company Names
                    </label>
                    <textarea
                      id="companyList"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      placeholder="Paste your list of company names here (one per line)..."
                      className={`w-full h-48 p-4 rounded-lg border-2 ${themeClasses.border.primary} ${themeClasses.bg.primary} ${themeClasses.text.primary} font-inter placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
                      disabled={isSearching}
                    />
                  </div>

                  <Button
                    onClick={handleScanList}
                    disabled={!userInput.trim() || isSearching}
                    className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 font-inter disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSearching ? (
                      <>
                        <Loader className="w-5 h-5 animate-spin mr-2" />
                        Scanning List...
                      </>
                    ) : (
                      'Scan List'
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
              >
                {matches.length > 0 ? (
                  <>
                    {/* Warning - Matches Found */}
                    <div className="bg-red-50 dark:bg-red-950 rounded-2xl p-8 border-2 border-red-200 dark:border-red-800 mb-8">
                      <div className="flex items-start mb-6">
                        <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400 mr-4 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-2xl font-bold text-red-800 dark:text-red-200 font-montserrat font-800 mb-2">
                            ⚠️ Warning: {matches.length} Match{matches.length !== 1 ? 'es' : ''} Found
                          </h3>
                          <p className="text-red-700 dark:text-red-300 font-inter">
                            The following companies appear on our winding-up register. Immediate action is recommended.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4 mb-8">
                        {matches.map((match, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className={`${themeClasses.bg.primary} rounded-lg p-4 border-l-4 border-red-600 dark:border-red-400`}
                          >
                            <h4 className={`font-bold ${themeClasses.text.primary} font-montserrat font-700 mb-2`}>
                              {match.name}
                            </h4>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className={`${themeClasses.text.secondary} font-inter`}>Status:</span>
                                <p className={`font-semibold ${themeClasses.text.primary} font-montserrat font-700`}>
                                  {match.status}
                                </p>
                              </div>
                              <div>
                                <span className={`${themeClasses.text.secondary} font-inter`}>Date Listed:</span>
                                <p className={`font-semibold ${themeClasses.text.primary} font-montserrat font-700`}>
                                  {match.dateListed}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <div className={`${themeClasses.bg.secondary} rounded-lg p-6 border ${themeClasses.border.primary}`}>
                        <p className={`${themeClasses.text.primary} font-semibold mb-4 font-montserrat font-700`}>
                          Next Steps:
                        </p>
                        <ul className={`${themeClasses.text.secondary} space-y-2 font-inter text-sm`}>
                          <li>✓ Suspend credit immediately to affected companies</li>
                          <li>✓ Review existing credit exposure and liabilities</li>
                          <li>✓ Prepare claims for insolvency proceedings</li>
                          <li>✓ Contact us for specialist debt recovery advice</li>
                        </ul>
                      </div>

                      <div className="mt-8 text-center">
                        <Button
                          onClick={() => window.location.href = '/contact'}
                          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 font-inter"
                        >
                          Contact Us Immediately
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* All Clear - No Matches */}
                    <div className="bg-green-50 dark:bg-green-950 rounded-2xl p-8 border-2 border-green-200 dark:border-green-800 mb-8">
                      <div className="flex items-start mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400 mr-4 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 font-montserrat font-800 mb-2">
                            ✓ No Matches Found
                          </h3>
                          <p className="text-green-700 dark:text-green-300 font-inter">
                            None of the companies listed appear on our current winding-up register. Your credit exposure appears safe.
                          </p>
                        </div>
                      </div>

                      <div className={`${themeClasses.bg.secondary} rounded-lg p-6 border ${themeClasses.border.primary}`}>
                        <p className={`${themeClasses.text.primary} font-semibold mb-4 font-montserrat font-700`}>
                          Recommendation:
                        </p>
                        <p className={`${themeClasses.text.secondary} font-inter mb-4`}>
                          Continue to monitor these companies and run regular checks. We update our winding-up database daily to ensure you have the latest information.
                        </p>
                        <p className={`${themeClasses.text.secondary} font-inter text-sm`}>
                          Want to set up automated alerts? <a href="/contact" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Contact our team</a> for more information.
                        </p>
                      </div>
                    </div>
                  </>
                )}

                {/* New Search Button */}
                <div className="text-center">
                  <Button
                    onClick={() => {
                      setUserInput('');
                      setMatches([]);
                      setHasSearched(false);
                    }}
                    className={`${themeClasses.button.primary} font-semibold px-8 py-3 rounded-lg transition-all duration-200 font-inter`}
                  >
                    Search Another List
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
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className={`text-3xl font-bold ${themeClasses.text.primary} mb-12 text-center font-montserrat font-800`}>
                How It Works
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Real-Time Data',
                    description: 'Our database is updated daily with the latest winding-up petitions filed at Companies House.'
                  },
                  {
                    title: 'Fast Results',
                    description: 'Scan multiple companies instantly and identify risks before they impact your business.'
                  },
                  {
                    title: 'Expert Support',
                    description: 'Get guidance from our debt recovery specialists on managing companies facing insolvency.'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`${themeClasses.bg.primary} rounded-xl p-6 border ${themeClasses.border.primary}`}
                  >
                    <h3 className={`text-lg font-bold ${themeClasses.text.primary} mb-3 font-montserrat font-700`}>
                      {item.title}
                    </h3>
                    <p className={`${themeClasses.text.secondary} font-inter leading-relaxed`}>
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
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
