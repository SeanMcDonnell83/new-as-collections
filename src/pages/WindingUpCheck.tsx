import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Papa from "papaparse";
import {
  AlertTriangle,
  CheckCircle,
  AlertCircle,
  Loader,
  Shield,
  Bookmark,
  X,
  Phone,
  Zap,
  Search,
  AlertOctagon,
  Eye,
  TrendingDown,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { themeClasses } from "@/contexts/ThemeContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/CookieConsent";

interface WindingUpCompany {
  "Company Name": string;
  Status: string;
  "Date Listed": string;
}

interface MatchResult {
  userInput: string;
  name: string;
  status: string;
  dateListed: string;
  matchType: "exact" | "potential" | "none";
}

const WindingUpCheck = () => {
  const [companies, setCompanies] = useState<WindingUpCompany[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetched, setIsFetched] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [allResults, setAllResults] = useState<MatchResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [showHighRiskModal, setShowHighRiskModal] = useState(false);
  const [callbackName, setCallbackName] = useState("");
  const [callbackPhone, setCallbackPhone] = useState("");
  const [isSubmittingCallback, setIsSubmittingCallback] = useState(false);
  const [callbackError, setCallbackError] = useState<string | null>(null);
  const [hasAcknowledgedDisclaimer, setHasAcknowledgedDisclaimer] =
    useState(false);
  const [showDisclaimerModal, setShowDisclaimerModal] = useState(false);
  const { toast } = useToast();

  const CSV_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdpHNh87M01OCBlmVcpEdh4rdYmGO7o6QGoWtd6oq5cuSJxp5QPVYEuGyGIH1GFqGTAS32gX30RLW3/pub?output=csv";

  // Normalise company name for matching
  const normaliseCompanyName = (name: string): string => {
    return name
      .toLowerCase()
      .trim()
      .replace(
        /\b(ltd|limited|plc|llp|inc|corporation|corp|co|company)\b/gi,
        "",
      )
      .replace(/[.,\-]/g, "")
      .trim();
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
  const classifyMatch = (
    userCompany: string,
    csvCompany: WindingUpCompany,
  ): "exact" | "potential" | "none" => {
    const normalisedUser = normaliseCompanyName(userCompany);
    const normalisedCSV = normaliseCompanyName(csvCompany["Company Name"]);

    // Check for exact match
    if (normalisedUser === normalisedCSV) {
      return "exact";
    }

    // Get words for both
    const userWords = normalisedUser.split(/\s+/).filter((w) => w.length > 0);
    const csvWords = normalisedCSV.split(/\s+/).filter((w) => w.length > 0);

    // Check if any significant user words appear in CSV name
    let bestMatchLength = 0;
    userWords.forEach((uWord) => {
      csvWords.forEach((cWord) => {
        if (cWord === uWord) {
          bestMatchLength = Math.max(bestMatchLength, uWord.length);
        } else if (cWord.startsWith(uWord)) {
          bestMatchLength = Math.max(bestMatchLength, uWord.length);
        } else if (uWord.startsWith(cWord)) {
          bestMatchLength = Math.max(bestMatchLength, cWord.length);
        }
      });
    });

    // If we found a word match, it's a potential match
    if (bestMatchLength >= 1) {
      const similarity = getSimilarityScore(
        userCompany,
        csvCompany["Company Name"],
      );
      // Lower threshold when we have a word match
      if (similarity >= 40) {
        return "potential";
      }
    }

    // Or if overall similarity is very high (but not exact)
    const similarity = getSimilarityScore(
      userCompany,
      csvCompany["Company Name"],
    );
    if (similarity >= 85) {
      return "potential";
    }

    return "none";
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
            setCompanies(
              data.filter(
                (row) => row["Company Name"] && row["Company Name"].trim(),
              ),
            );
            setIsFetched(true);
            setIsLoading(false);
          },
          error: (error: Error) => {
            setFetchError(`Failed to parse CSV: ${error.message}`);
            setIsLoading(false);
          },
        });
      } catch (error) {
        const errorMsg =
          error instanceof Error ? error.message : "Unknown error occurred";
        setFetchError(`Failed to fetch winding-up data: ${errorMsg}`);
        setIsLoading(false);
      }
    };

    fetchCSV();
  }, []);

  const handleScanClick = () => {
    if (!hasAcknowledgedDisclaimer) {
      setShowDisclaimerModal(true);
      return;
    }
    handleScanList();
  };

  const handleScanList = () => {
    setIsSearching(true);
    setAllResults([]);

    setTimeout(() => {
      // Split by both commas and newlines
      const userCompanies = userInput
        .split(/[,\n]+/)
        .map((name) => name.trim())
        .filter((name) => name.length > 0);

      const results: MatchResult[] = [];
      let hasHighRisk = false;

      // Process each user company
      for (const userCompany of userCompanies) {
        let bestMatch: MatchResult | null = null;
        let bestMatchType: "exact" | "potential" | "none" = "none";

        // Find the best match in the database
        for (const csvCompany of companies) {
          const matchType = classifyMatch(userCompany, csvCompany);

          // Prefer exact matches, then potential, then none
          if (matchType === "exact") {
            bestMatch = {
              userInput: userCompany,
              name: csvCompany["Company Name"],
              status: csvCompany.Status || "Unknown",
              dateListed: csvCompany["Date Listed"] || "N/A",
              matchType: "exact",
            };
            bestMatchType = "exact";
            hasHighRisk = true;
            break; // Stop on exact match
          } else if (matchType === "potential" && bestMatchType !== "exact") {
            bestMatch = {
              userInput: userCompany,
              name: csvCompany["Company Name"],
              status: csvCompany.Status || "Unknown",
              dateListed: csvCompany["Date Listed"] || "N/A",
              matchType: "potential",
            };
            bestMatchType = "potential";
          }
        }

        // If no match found, create a "none" result
        if (!bestMatch) {
          results.push({
            userInput: userCompany,
            name: userCompany,
            status: "Not Found",
            dateListed: "N/A",
            matchType: "none",
          });
        } else {
          results.push(bestMatch);
        }
      }

      setAllResults(results);
      setHasSearched(true);
      setIsSearching(false);

      if (hasHighRisk) {
        setShowHighRiskModal(true);
      }
    }, 800);
  };

  const addToBookmarks = () => {
    const url = window.location.href;
    const title = "AS Collections - Winding-Up Search";

    if (window.sidebar && window.sidebar.addPanel) {
      window.sidebar.addPanel(title, url, "");
    } else if ((navigator as any).bookmark) {
      (navigator as any).bookmark(url, title);
    } else {
      // Fallback: show keyboard shortcut
      const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      const shortcut = isMac ? "Cmd+D" : "Ctrl+D";
      alert(
        `Press ${shortcut} to bookmark this page, or use your browser's bookmark menu.`,
      );
    }
  };

  // Separate results by type
  const exactMatches = allResults.filter((r) => r.matchType === "exact");
  const potentialMatches = allResults.filter(
    (r) => r.matchType === "potential",
  );
  const clearCompanies = allResults.filter((r) => r.matchType === "none");
  const flaggedCompanies = [...exactMatches, ...potentialMatches];

  return (
    <div className="min-h-screen bg-slate-900 text-white font-inter">
      <Helmet>
        <title>
          Winding-Up Search | Insolvency Register Check | A.S. Collections
        </title>
        <meta
          name="description"
          content="Free UK Insolvency Risk Checker. Check your client list against the latest winding-up petitions and bad debtor data. Updated weekly."
        />
        <link
          rel="canonical"
          href="https://ascollections.co.uk/winding-up-check"
        />
      </Helmet>

      <Header />

      <main className="pt-40 pb-20">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-mono text-green-400 uppercase tracking-wider">
                  Database Online (Updated Weekly)
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-manrope tracking-tight">
                Insolvency Risk Radar
              </h1>

              <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light mb-4">
                Check your ledger. Paste your client list below to scan for
                active Winding-Up Petitions.
              </p>
              <p className="text-sm text-slate-500 max-w-xl mx-auto font-light">
                Separate company names with <strong>commas</strong> or{" "}
                <strong>new lines</strong>. One per entry recommended for
                clarity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Risk Console */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Console Header */}
              <div className="bg-white/5 border-b border-white/5 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-mono text-blue-300 uppercase tracking-wider">
                    SECURE SCAN
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                {/* Input Area */}
                <div className="mb-6">
                  <textarea
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Paste company names here..."
                    className="w-full h-64 bg-slate-800 text-white font-mono text-sm p-4 rounded-xl border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none placeholder:text-slate-500 transition-all"
                    disabled={isSearching}
                  />
                  <p className="text-xs text-slate-500 mt-2 font-mono text-right">
                    {userInput.split(/[,\n]+/).filter((l) => l.trim()).length}{" "}
                    ENTRIES DETECTED
                  </p>
                </div>

                {/* Action Button */}
                <Button
                  onClick={handleScanClick}
                  disabled={!userInput.trim() || isSearching}
                  className="w-full bg-red-600 hover:bg-red-500 text-white font-manrope font-bold text-lg py-6 rounded-xl transition-all shadow-lg shadow-red-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSearching ? (
                    <div className="flex items-center gap-2">
                      <Loader className="w-5 h-5 animate-spin" />
                      SCANNING DATABASE...
                    </div>
                  ) : (
                    "SCAN FOR RISK"
                  )}
                </Button>
              </div>
            </motion.div>

            {/* Results Section */}
            {hasSearched && !isSearching && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-12 space-y-8"
              >
                <div className="text-center mb-8">
                  <p className="text-sm text-slate-400 font-mono bg-slate-800/50 inline-block px-4 py-2 rounded-lg border border-slate-700">
                    ⚠️ Matches are indicative. Verify with Companies House.
                  </p>
                </div>

                {/* High Risk Results */}
                {exactMatches.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-red-500 font-manrope font-bold text-xl flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      HIGH RISK DETECTED ({exactMatches.length})
                    </h3>
                    {exactMatches.map((match, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-red-950/30 border border-red-500/30 rounded-xl p-4 hover:bg-red-950/50 transition-colors"
                      >
                        <div>
                          <p className="font-bold text-white font-mono text-lg">
                            {match.name}
                          </p>
                          <p className="text-red-400 text-sm font-mono mt-1">
                            STATUS: {match.status} | LISTED: {match.dateListed}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mt-6"
                    >
                      <p className="text-red-200 text-sm mb-4 leading-relaxed">
                        These companies have been flagged as high-risk. Do not
                        extend credit. Contact our specialists immediately for
                        urgent guidance.
                      </p>
                      <Button
                        onClick={() => setShowHighRiskModal(true)}
                        className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        Request Urgent Callback
                      </Button>
                    </motion.div>
                  </div>
                )}

                {/* Warning Results */}
                {potentialMatches.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-amber-500 font-manrope font-bold text-xl flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      POTENTIAL MATCHES ({potentialMatches.length})
                    </h3>
                    {potentialMatches.map((match, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-amber-950/30 border border-amber-500/30 rounded-xl p-4"
                      >
                        <div>
                          <p className="font-bold text-white font-mono text-lg">
                            {match.name}
                          </p>
                          <p className="text-amber-400 text-sm font-mono mt-1">
                            SIMILAR TO: "{match.userInput}"
                          </p>
                        </div>
                      </motion.div>
                    ))}

                    {/* Potential Matches Advice */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mt-6"
                    >
                      <p className="text-amber-200 text-sm font-semibold mb-2">
                        ⚠️ Verification Required
                      </p>
                      <p className="text-amber-200 text-sm leading-relaxed">
                        These companies are not an exact match but share
                        similarities with our register. We recommend verifying
                        the company number and full legal entity name via
                        Companies House before making credit decisions. If
                        unsure, contact our team for manual verification.
                      </p>
                    </motion.div>
                  </div>
                )}

                {/* Clear Results */}
                {clearCompanies.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-green-500 font-manrope font-bold text-xl flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      NO MATCHES FOUND ({clearCompanies.length})
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {clearCompanies.map((match, idx) => (
                        <div
                          key={idx}
                          className="bg-green-950/10 border border-green-500/20 rounded-lg p-3"
                        >
                          <p className="text-slate-300 font-mono text-sm">
                            {match.userInput}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Clear Companies Advice */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mt-6"
                    >
                      <p className="text-green-200 text-sm font-semibold mb-2">
                        ℹ️ Continued Monitoring Recommended
                      </p>
                      <p className="text-green-200 text-sm leading-relaxed">
                        These companies are not currently flagged in our
                        winding-up register. However, credit risk is always
                        present in business. We recommend monitoring their
                        status regularly and conducting standard credit checks.
                        If you have concerns about any company, please contact
                        us immediately.
                      </p>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </section>

        {/* Advice & Compliance Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800 bg-slate-900/50">
          <div className="max-w-3xl mx-auto space-y-16 text-slate-300">
            {/* Main Info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 font-manrope">
                What is the Winding-Up Search?
              </h2>
              <p className="leading-relaxed font-light">
                This tool checks your client list against the latest UK
                Winding-Up Petitions and insolvency notices. It acts as a free
                bad debtor register, helping you identify companies at risk of
                insolvency before they default on payments.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4 font-manrope">
                Why check credit status?
              </h2>
              <p className="leading-relaxed font-light">
                Checking the Gazette winding up list manually is slow and prone
                to error. Our tool automates this process, flagging high-risk
                companies instantly so you can take proactive measures to
                protect your cash flow.
              </p>
            </div>

            {/* Compliance Notice */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4 font-manrope flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                Compliance & Legal Disclaimer
              </h3>
              <ul className="space-y-3 text-sm leading-relaxed font-light">
                <li>
                  <strong>Indicative Results:</strong> This tool uses 'fuzzy
                  matching' and provides indicative results only. Always verify
                  the exact legal entity name and company number via{" "}
                  <a
                    href="https://beta.companieshouse.gov.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-semibold"
                  >
                    Companies House
                  </a>{" "}
                  before taking any legal action.
                </li>
                <li>
                  <strong>No Liability:</strong> We accept no liability for
                  identity errors based on similar trading names. If you are
                  unsure about any result, please contact us for manual
                  verification.
                </li>
                <li>
                  <strong>Ongoing Risk:</strong> The absence of a company from
                  our register does not guarantee creditworthiness. Standard
                  credit checks and ongoing monitoring are recommended.
                </li>
                <li>
                  <strong>Data Accuracy:</strong> Our data is not 100%
                  real-time. For the most current information, always
                  cross-check with official sources.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Compliance Disclaimer Modal */}
      <AnimatePresence>
        {showDisclaimerModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDisclaimerModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative bg-slate-900 border border-blue-500/50 rounded-2xl p-8 max-w-2xl w-full shadow-2xl shadow-blue-900/20"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white font-manrope mb-2">
                  Important Disclaimer
                </h2>
                <p className="text-slate-400 text-sm">
                  Before using this tool, please review and confirm you
                  understand our disclaimer.
                </p>
              </div>

              {/* Disclaimer Content */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-6 space-y-4 text-sm text-slate-300 leading-relaxed">
                <div>
                  <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    Fuzzy Matching Technology
                  </h3>
                  <p>
                    This tool uses advanced 'fuzzy matching' to identify
                    companies with similar names. Results are{" "}
                    <strong>indicative only</strong> and may include partial or
                    similar matches that are not exact.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                    <Search className="w-4 h-4 text-blue-400" />
                    Verification Required
                  </h3>
                  <p>
                    Always verify the exact legal entity name and company number
                    via{" "}
                    <a
                      href="https://beta.companieshouse.gov.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-semibold"
                    >
                      Companies House
                    </a>{" "}
                    before taking any legal action.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                    <AlertOctagon className="w-4 h-4 text-red-400" />
                    No Liability
                  </h3>
                  <p>
                    We accept no liability for identity errors based on similar
                    trading names. If unsure about any result, contact us for
                    manual verification.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-purple-400" />
                    Ongoing Monitoring
                  </h3>
                  <p>
                    The absence of a company from our register does not
                    guarantee creditworthiness. Standard credit checks and
                    ongoing monitoring are recommended.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-cyan-400" />
                    Data Accuracy
                  </h3>
                  <p>
                    Our data is not 100% real-time. For the most current
                    information, always cross-check with official sources.
                  </p>
                </div>
              </div>

              {/* Acknowledgment Checkbox */}
              <div className="flex items-start gap-3 mb-6 bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                <input
                  type="checkbox"
                  id="disclaimer-confirm"
                  defaultChecked={false}
                  onChange={(e) => {
                    // State for this modal is local; we just need to enable the button
                  }}
                  className="w-4 h-4 mt-1 cursor-pointer accent-blue-500"
                />
                <label
                  htmlFor="disclaimer-confirm"
                  className="text-sm text-slate-300 cursor-pointer"
                >
                  I understand and accept these terms. I will verify all results
                  via Companies House and use this tool responsibly.
                </label>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  onClick={() => {
                    const checkbox = document.getElementById(
                      "disclaimer-confirm",
                    ) as HTMLInputElement;
                    if (checkbox && checkbox.checked) {
                      setHasAcknowledgedDisclaimer(true);
                      setShowDisclaimerModal(false);
                      setTimeout(() => handleScanList(), 300);
                    } else {
                      toast({
                        title: "Please confirm",
                        description:
                          "You must acknowledge the disclaimer to proceed.",
                        variant: "destructive",
                      });
                    }
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-4 h-4" />I Understand - Proceed to
                  Scan
                </Button>
                <Button
                  onClick={() => setShowDisclaimerModal(false)}
                  variant="outline"
                  className="w-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white py-3 rounded-lg transition-all"
                >
                  Cancel
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* High Risk Callback Modal */}
      <AnimatePresence>
        {showHighRiskModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowHighRiskModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-slate-900 border border-red-500/50 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-red-900/20"
            >
              <button
                onClick={() => setShowHighRiskModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-white font-manrope mb-3">
                  High Risk Companies Detected
                </h3>
                <div className="bg-red-950/30 border border-red-500/30 rounded-lg p-3 mb-4">
                  <p className="text-xs font-mono text-red-300 uppercase tracking-wider mb-2">
                    Companies Flagged:
                  </p>
                  <ul className="space-y-1">
                    {flaggedCompanies.map((match, idx) => (
                      <li key={idx} className="text-sm text-red-200 font-mono">
                        • {match.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-red-200 text-sm leading-relaxed mb-4">
                  <strong>
                    We suggest that you do not extend credit to these companies.
                  </strong>{" "}
                  They are currently listed on the UK winding-up register,
                  indicating active insolvency proceedings. Our specialists will
                  guide you on next steps.
                </p>
                <p className="text-slate-400 text-sm">
                  Please provide your contact details below, and our team will
                  contact you within the hour.
                </p>
              </div>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setCallbackError(null);

                  if (!callbackName.trim() || !callbackPhone.trim()) {
                    setCallbackError(
                      "Please enter your name and phone number.",
                    );
                    return;
                  }

                  setIsSubmittingCallback(true);
                  try {
                    const response = await fetch("/api/urgent-callback", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        name: callbackName,
                        phone: callbackPhone,
                        companies: flaggedCompanies.map((m) => m.name),
                      }),
                    });

                    if (!response.ok) {
                      throw new Error("Failed to submit");
                    }

                    toast({
                      title: "Alert sent",
                      description: "An expert will call you immediately.",
                    });

                    setShowHighRiskModal(false);
                    setCallbackName("");
                    setCallbackPhone("");
                  } catch (error) {
                    setCallbackError(
                      "Failed to submit callback request. Please try again or call 0151 329 0946.",
                    );
                  } finally {
                    setIsSubmittingCallback(false);
                  }
                }}
                className="space-y-4"
              >
                <div className="border-t border-slate-700 pt-4">
                  <label className="block text-sm font-mono text-slate-300 mb-2 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={callbackName}
                    onChange={(e) => setCallbackName(e.target.value)}
                    placeholder="Your name"
                    className="w-full bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
                    disabled={isSubmittingCallback}
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono text-slate-300 mb-2 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={callbackPhone}
                    onChange={(e) => setCallbackPhone(e.target.value)}
                    placeholder="0151 329 0946"
                    className="w-full bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
                    disabled={isSubmittingCallback}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmittingCallback}
                  className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                >
                  {isSubmittingCallback ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Phone className="w-4 h-4" />
                      Request Callback
                    </>
                  )}
                </Button>
                {callbackError && (
                  <p className="mt-3 text-xs text-red-400 font-mono">
                    {callbackError}
                  </p>
                )}
              </form>

              <div className="mt-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <p className="text-xs text-slate-300 font-mono mb-2 font-semibold">
                  Urgent? Call immediately:
                </p>
                <a
                  href="tel:+441513290946"
                  className="text-red-400 hover:text-red-300 font-bold text-sm"
                >
                  0151 329 0946
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WindingUpCheck;
