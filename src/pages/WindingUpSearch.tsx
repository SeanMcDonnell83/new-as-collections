import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Papa from 'papaparse';
import { AlertTriangle, CheckCircle, AlertCircle, Loader, Shield, Bookmark } from 'lucide-react';
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
  userInput: string;
  name: string;
  status: string;
  dateListed: string;
  matchType: 'exact' | 'potential' | 'none';
}

const WindingUpSearch = () => {
  const [companies, setCompanies] = useState<WindingUpCompany[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetched, setIsFetched] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [allResults, setAllResults] = useState<MatchResult[]>([]);
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

  // Get first 2 words of normalised name
  const getFirstTwoWords = (name: string): string => {
    const normalised = normaliseCompanyName(name);
    const words = normalised.split(/\s+/).slice(0, 2).join(' ');
    return words;
  };

  // Calculate similarity score (simple Levenshtein-inspired approach)
  const getSimilarityScore = (str1: string, str2: string): number => {
    const s1 = normaliseCompanyName(str1);
    const s2 = normaliseCompanyName(str2);

    if (s1 === s2) return 100;

    // Simple character overlap scoring
    let matches = 0;
    for (let char of s1) {
      if (s2.includes(char)) {
        matches++;
      }
    }
    return (matches / Math.max(s1.length, s2.length)) * 100;
  };

  // 3-tier matching logic
  const classifyMatch = (userCompany: string, csvCompany: WindingUpCompany): 'exact' | 'potential' | 'none' => {
    const normalisedUser = normaliseCompanyName(userCompany);
    const normalisedCSV = normaliseCompanyName(csvCompany['Company Name']);

    // Check for exact match
    if (normalisedUser === normalisedCSV) {
      return 'exact';
    }

    // Get words for both
    const userWords = normalisedUser.split(/\s+/).filter(w => w.length > 0);
    const csvWords = normalisedCSV.split(/\s+/).filter(w => w.length > 0);

    // Check if any significant user words appear in CSV name
    // Find the strongest match between user and CSV words
    let bestMatchLength = 0;
    userWords.forEach(uWord => {
      csvWords.forEach(cWord => {
        if (cWord === uWord) {
          bestMatchLength = Math.max(bestMatchLength, uWord.length);
        } else if (cWord.startsWith(uWord)) {
          bestMatchLength = Math.max(bestMatchLength, uWord.length);
        } else if (uWord.startsWith(cWord)) {
          bestMatchLength = Math.max(bestMatchLength, cWord.length);
        }
      });
    });

    // If we found a meaningful word match (at least 2 characters), it's a potential match
    if (bestMatchLength >= 2) {
      const similarity = getSimilarityScore(userCompany, csvCompany['Company Name']);
      // Lower threshold when we have a word match
      if (similarity >= 45) {
        return 'potential';
      }
    }

    // Or if overall similarity is very high (but not exact)
    const similarity = getSimilarityScore(userCompany, csvCompany['Company Name']);
    if (similarity >= 85) {
      return 'potential';
    }

    return 'none';
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
    setAllResults([]);

    setTimeout(() => {
      // Split by both commas and newlines
      const userCompanies = userInput
        .split(/[,\n]+/)
        .map(name => name.trim())
        .filter(name => name.length > 0);

      const results: MatchResult[] = [];

      // Process each user company
      for (const userCompany of userCompanies) {
        let bestMatch: MatchResult | null = null;
        let bestMatchType: 'exact' | 'potential' | 'none' = 'none';

        // Find the best match in the database
        for (const csvCompany of companies) {
          const matchType = classifyMatch(userCompany, csvCompany);

          // Prefer exact matches, then potential, then none
          if (matchType === 'exact') {
            bestMatch = {
              userInput: userCompany,
              name: csvCompany['Company Name'],
              status: csvCompany.Status || 'Unknown',
              dateListed: csvCompany['Date Listed'] || 'N/A',
              matchType: 'exact'
            };
            bestMatchType = 'exact';
            break; // Stop on exact match
          } else if (matchType === 'potential' && bestMatchType !== 'exact') {
            bestMatch = {
              userInput: userCompany,
              name: csvCompany['Company Name'],
              status: csvCompany.Status || 'Unknown',
              dateListed: csvCompany['Date Listed'] || 'N/A',
              matchType: 'potential'
            };
            bestMatchType = 'potential';
          }
        }

        // If no match found, create a "none" result
        if (!bestMatch) {
          results.push({
            userInput: userCompany,
            name: userCompany,
            status: 'Not Found',
            dateListed: 'N/A',
            matchType: 'none'
          });
        } else {
          results.push(bestMatch);
        }
      }

      setAllResults(results);
      setHasSearched(true);
      setIsSearching(false);
    }, 500);
  };

  const addToBookmarks = () => {
    const url = window.location.href;
    const title = 'AS Collections - Winding-Up Search';
    
    if (window.sidebar && window.sidebar.addPanel) {
      window.sidebar.addPanel(title, url, '');
    } else if ((navigator as any).bookmark) {
      (navigator as any).bookmark(url, title);
    } else {
      // Fallback: show keyboard shortcut
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const shortcut = isMac ? 'Cmd+D' : 'Ctrl+D';
      alert(`Press ${shortcut} to bookmark this page, or use your browser's bookmark menu.`);
    }
  };

  // Separate results by type
  const exactMatches = allResults.filter(r => r.matchType === 'exact');
  const potentialMatches = allResults.filter(r => r.matchType === 'potential');
  const clearCompanies = allResults.filter(r => r.matchType === 'none');

  const hasRiskAlerts = exactMatches.length > 0 || potentialMatches.length > 0;

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

            {/* Compliance Notice - BEFORE Scan Card */}
            {isFetched && !fetchError && !hasSearched && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800 p-6 mb-8"
              >
                <p className="text-xs font-montserrat font-700 uppercase tracking-wider text-amber-900 dark:text-amber-200 mb-2">
                  ⚠️ Compliance & Accuracy Notice
                </p>
                <p className={`text-sm ${themeClasses.text.secondary} font-inter leading-relaxed`}>
                  <strong>Results are indicative only.</strong> This tool uses 'fuzzy matching' to detect potential insolvency risks. Always verify the exact legal entity name and company number via <a href="https://beta.companieshouse.gov.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Companies House</a> before taking legal action. We accept no liability for identity errors based on similar trading names. If unsure about any result, please <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">contact us</a> and we will verify for you.
                </p>
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
                {/* DATA UPDATED WEEKLY - AT TOP OF RESULTS */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-950 dark:to-blue-900/50 rounded-2xl border border-blue-200 dark:border-blue-800 p-8 text-center"
                >
                  <h4 className="text-2xl font-bold text-blue-900 dark:text-blue-100 font-montserrat font-800 mb-2">
                    Data Updated Weekly
                  </h4>
                  <p className={`${themeClasses.text.secondary} font-inter max-w-2xl mx-auto`}>
                    Our database is refreshed every week with the latest Companies House filings. We recommend checking your client ledger every Monday morning.
                  </p>
                </motion.div>

                {/* SECTION A: RISK ALERTS (Red + Amber) */}
                {hasRiskAlerts && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="space-y-6"
                  >
                    <h3 className={`text-2xl font-bold ${themeClasses.text.primary} font-montserrat font-800 flex items-center gap-2`}>
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                      Risk Alerts
                    </h3>

                    {/* RED - Exact Matches */}
                    {exactMatches.length > 0 && (
                      <div className="bg-white dark:bg-neutral-900 rounded-2xl border-2 border-red-500 overflow-hidden shadow-2xl">
                        <div className="bg-gradient-to-r from-red-50 to-red-100/50 dark:from-red-950 dark:to-red-900/50 px-8 py-6 border-b border-red-500">
                          <h4 className="text-xl font-bold text-red-900 dark:text-red-100 font-montserrat font-800 flex items-center gap-2 mb-1">
                            🔴 CRITICAL: Exact Match Found
                          </h4>
                          <p className="text-sm text-red-800 dark:text-red-200 font-inter">
                            Do not extend credit. These companies match exactly with our winding-up register.
                          </p>
                        </div>

                        <div className="p-6 space-y-4">
                          {exactMatches.map((match, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="border-l-4 border-red-600 pl-4 py-3"
                            >
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                  <p className={`font-bold ${themeClasses.text.primary} font-montserrat mb-1`}>
                                    {match.name}
                                  </p>
                                  <p className={`text-sm ${themeClasses.text.secondary} font-inter`}>
                                    Listed: {match.dateListed}
                                  </p>
                                </div>
                                <span className="inline-block bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-xs font-montserrat font-700 uppercase whitespace-nowrap flex-shrink-0">
                                  {match.status}
                                </span>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Critical Action Section */}
                        <div className="bg-red-100/50 dark:bg-red-950/30 border-t border-red-300 dark:border-red-700 px-8 py-6">
                          <p className="text-red-900 dark:text-red-200 font-montserrat font-700 mb-3 text-sm uppercase tracking-wider">
                            ⚠️ Immediate Action Required
                          </p>
                          <p className={`${themeClasses.text.secondary} font-inter text-sm mb-4 leading-relaxed`}>
                            Stop all credit extension to these companies immediately. Cease any new trading arrangements and review your existing exposure. Our insolvency specialists are standing by to help you manage this risk and secure your position.
                          </p>
                          <Button
                            onClick={() => window.location.href = 'tel:+441513290946'}
                            className="bg-red-600 hover:bg-red-700 text-white font-montserrat font-700 text-xs uppercase tracking-wider px-4 py-2 rounded-lg transition-all duration-200 w-full sm:w-auto"
                          >
                            Speak to Expert Now: 0151 329 0946
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* AMBER - Potential Matches */}
                    {potentialMatches.length > 0 && (
                      <div className="bg-white dark:bg-neutral-900 rounded-2xl border-2 border-amber-500 overflow-hidden shadow-lg">
                        <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 dark:from-amber-950 dark:to-amber-900/50 px-8 py-6 border-b border-amber-500">
                          <h4 className="text-xl font-bold text-amber-900 dark:text-amber-100 font-montserrat font-800 flex items-center gap-2 mb-1">
                            🟠 WARNING: Potential Match (Exercise Caution)
                          </h4>
                          <p className="text-sm text-amber-800 dark:text-amber-200 font-inter">
                            Similar name found. Please verify company number manually via Companies House.
                          </p>
                        </div>

                        <div className="p-6 space-y-4">
                          {potentialMatches.map((match, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="border-l-4 border-amber-500 pl-4 py-3"
                            >
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                  <div className="mb-2">
                                    <p className={`text-sm ${themeClasses.text.secondary} font-inter mb-1`}>
                                      You searched for: <strong>{match.userInput}</strong>
                                    </p>
                                    <p className={`font-bold ${themeClasses.text.primary} font-montserrat`}>
                                      Similar to: {match.name}
                                    </p>
                                  </div>
                                  <p className={`text-sm ${themeClasses.text.secondary} font-inter`}>
                                    Listed: {match.dateListed}
                                  </p>
                                </div>
                                <span className="inline-block bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full text-xs font-montserrat font-700 uppercase whitespace-nowrap flex-shrink-0">
                                  {match.status}
                                </span>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Caution Action Section */}
                        <div className="bg-amber-100/50 dark:bg-amber-950/30 border-t border-amber-300 dark:border-amber-700 px-8 py-6">
                          <p className="text-amber-900 dark:text-amber-200 font-montserrat font-700 mb-3 text-sm uppercase tracking-wider">
                            ⚠️ Manual Verification Required
                          </p>
                          <p className={`${themeClasses.text.secondary} font-inter text-sm mb-4 leading-relaxed`}>
                            These companies are not an exact match but share similarities with our register. Visit Companies House to verify the company number and full legal entity name before making credit decisions. If unsure, our team can help.
                          </p>
                          <Button
                            onClick={() => window.location.href = '/contact'}
                            className="bg-amber-600 hover:bg-amber-700 text-white font-montserrat font-700 text-xs uppercase tracking-wider px-4 py-2 rounded-lg transition-all duration-200 w-full sm:w-auto"
                          >
                            Get Verification Help
                          </Button>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* SECTION B: CLEAR COMPANIES (Green) */}
                {clearCompanies.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: hasRiskAlerts ? 0.2 : 0.1 }}
                    className="space-y-4"
                  >
                    <h3 className={`text-2xl font-bold ${themeClasses.text.primary} font-montserrat font-800 flex items-center gap-2`}>
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      Clear Companies
                    </h3>

                    <div className="bg-white dark:bg-neutral-900 rounded-2xl border-2 border-green-500 overflow-hidden shadow-lg">
                      <div className="bg-gradient-to-r from-green-50 to-green-100/50 dark:from-green-950 dark:to-green-900/50 px-8 py-6 border-b border-green-500">
                        <h4 className="text-lg font-bold text-green-900 dark:text-green-100 font-montserrat font-800 flex items-center gap-2 mb-1">
                          🟢 CLEAR: No Match Found
                        </h4>
                        <p className="text-sm text-green-800 dark:text-green-200 font-inter">
                          These companies do not appear in our current winding-up database. Safe to proceed with caution.
                        </p>
                      </div>

                      <div className="p-6 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {clearCompanies.map((match, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: index * 0.05 }}
                              className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4"
                            >
                              <p className={`font-semibold ${themeClasses.text.primary} font-montserrat`}>
                                {match.userInput}
                              </p>
                              <p className="text-xs text-green-700 dark:text-green-300 font-inter mt-1">
                                ✓ Not found in database
                              </p>
                            </motion.div>
                          ))}
                        </div>

                        {/* Warning for clear companies */}
                        <div className="border-t border-green-200 dark:border-green-800 pt-6">
                          <p className={`${themeClasses.text.secondary} font-inter mb-4 text-sm leading-relaxed`}>
                            While these companies aren't currently on our winding-up register, we recommend continuing to monitor their status. Credit risk is always present in business. If you have concerns about any company, or if you believe one should be on our register, please <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">contact us</a> immediately.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-3">
                            <Button
                              onClick={() => window.location.href = '/contact'}
                              className="bg-green-600 hover:bg-green-700 text-white font-montserrat font-700 text-xs uppercase tracking-wider px-4 py-2 rounded-lg transition-all duration-200 flex-1 sm:flex-initial"
                            >
                              Report Risk or Verify
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Bottom CTA & Bookmark - Bookmark & Scan Again */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
                >
                  <Button
                    onClick={addToBookmarks}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-montserrat font-700 text-sm uppercase tracking-wider px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
                  >
                    <Bookmark className="w-4 h-4" />
                    Bookmark This Page
                  </Button>
                  <Button
                    onClick={() => {
                      setUserInput('');
                      setAllResults([]);
                      setHasSearched(false);
                    }}
                    className={`${themeClasses.button.secondary} font-montserrat font-700 text-sm uppercase tracking-wider px-6 py-3 rounded-lg transition-all duration-200`}
                  >
                    Scan Another List
                  </Button>
                </motion.div>
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

              {/* SEO Content Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`${themeClasses.bg.primary} rounded-2xl p-12 border ${themeClasses.border.primary}`}
              >
                <h2 className={`text-3xl font-bold ${themeClasses.text.primary} mb-6 font-montserrat font-800`}>
                  About the Insolvency Register Check
                </h2>

                <div className={`${themeClasses.text.secondary} font-inter space-y-4 leading-relaxed`}>
                  <p>
                    The Insolvency Register Check tool helps UK businesses protect themselves from trading with financially distressed companies. Whether you're concerned about "bad debtors" or companies facing "winding-up petitions," this tool provides instant visibility into which of your clients may be at risk.
                  </p>

                  <p>
                    Winding-up petitions are filed at Companies House when creditors seek to force a company into insolvency proceedings. By identifying these companies early, you can take proactive steps to secure outstanding payments, stop extending credit, and mitigate financial loss.
                  </p>

                  <p>
                    Our database is continuously updated with the latest insolvency filings, ensuring you always have access to current information about potential credit risks. With our intelligent matching system, we can detect companies even when names vary slightly—whether due to trading names, abbreviations, or other variations.
                  </p>

                  <p>
                    This tool is essential for businesses in Construction, Logistics, Manufacturing, and other sectors where credit risk management is critical. Regular checks—we recommend weekly—help you maintain a healthy ledger and protect your cash flow.
                  </p>

                  <p>
                    <strong>Remember:</strong> Always verify results via Companies House before taking legal action. Contact our insolvency specialists for guidance on managing identified risks.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`${themeClasses.bg.secondary} rounded-xl p-8 border ${themeClasses.border.primary} mt-8`}
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
