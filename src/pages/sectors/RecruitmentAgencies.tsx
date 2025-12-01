import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Network,
  Search,
  FileCheck,
  Users,
  UserX,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RecruitmentAgencies = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Helmet>
        <title>Recruitment Debt Collection | Backdoor Hire Specialists</title>
        <meta
          name="description"
          content="Specialist debt recovery for recruitment agencies. We trace backdoor hires, enforce terms of business, and recover unpaid placement fees."
        />
        <meta
          property="og:title"
          content="Recruitment Debt Collection | Backdoor Hire Specialists"
        />
        <meta
          property="og:description"
          content="Specialist debt recovery for recruitment agencies. We trace backdoor hires, enforce terms of business, and recover unpaid placement fees."
        />
        <meta
          property="og:url"
          content="https://ascollections.co.uk/sectors/recruitment-agencies"
        />
        <link rel="canonical" href="https://ascollections.co.uk/sectors/recruitment-agencies" />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section: The Network */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900 text-white">
          {/* Abstract Network Animation Background */}
          <div className="absolute inset-0 z-0 opacity-20">
            <svg className="w-full h-full">
              <pattern
                id="grid"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
              {/* Connecting Lines Animation */}
              <motion.path
                d="M100,100 L300,300 L500,100 L700,400"
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/50 border border-purple-500 text-purple-300 text-xs font-bold mb-6 uppercase tracking-wider">
                  <Network className="w-3 h-3" />
                  Recruitment & Staffing
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
                  THEY HIRED. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    YOU GET PAID.
                  </span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 max-w-lg font-medium">
                  Backdoor hires? Disputed rebates? Unsigned timesheets? We
                  trace the candidate, prove the placement, and enforce your
                  Terms of Business.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/services/debtor-tracing">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-purple-500/20 transition-all">
                      Start Tracing
                    </Button>
                  </Link>
                  <Link to="/winding-up-check">
                    <Button
                      variant="outline"
                      className="bg-transparent border-slate-600 text-white hover:bg-slate-800 font-bold text-lg px-8 py-6 rounded-lg"
                    >
                      Check Client Risk
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Split Screen Visual */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                  <div className="grid grid-cols-2 h-80">
                    {/* Left: The Problem */}
                    <div className="bg-slate-900 p-6 flex flex-col justify-center items-center text-center border-r border-slate-700">
                      <UserX className="w-12 h-12 text-red-500 mb-4" />
                      <h3 className="font-bold text-white mb-2">
                        The "Missing" Fee
                      </h3>
                      <p className="text-xs text-slate-400">
                        Client claims they never hired your candidate.
                      </p>
                    </div>
                    {/* Right: The Solution */}
                    <div className="bg-purple-900/20 p-6 flex flex-col justify-center items-center text-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-purple-500/10 animate-pulse" />
                      <Search className="w-12 h-12 text-purple-400 mb-4 relative z-10" />
                      <h3 className="font-bold text-white mb-2 relative z-10">
                        We Find Them
                      </h3>
                      <p className="text-xs text-purple-200 relative z-10">
                        LinkedIn tracing & employment verification.
                      </p>
                    </div>
                  </div>
                  <div className="bg-slate-950 p-4 text-center border-t border-slate-700">
                    <p className="text-sm font-mono text-green-400">
                      STATUS: PLACEMENT CONFIRMED
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pain Points: The Recruitment Racket */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4 text-slate-900">
                THE RECRUITMENT RACKET
              </h2>
              <p className="text-xl text-slate-500">
                Don't let clients exploit your hard work.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "The Backdoor Hire",
                  desc: "A client secretly hires your candidate 3 months later to avoid the fee. We find out.",
                  icon: UserX,
                },
                {
                  title: "Rebate Disputes",
                  desc: "Clients inventing reasons to fire a candidate just before the rebate period ends to get a refund.",
                  icon: FileCheck,
                },
                {
                  title: "Timesheet Delays",
                  desc: "Using 'unsigned timesheets' as an excuse not to pay temp fees. We don't accept that.",
                  icon: Briefcase,
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-purple-500 transition-colors group"
                >
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution: Trace & Collect */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-black mb-8">
                  WE KNOW WHERE <br />
                  <span className="text-purple-400">TO LOOK.</span>
                </h2>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  We have tools to prove a "backdoor hire" occurred. LinkedIn
                  tracking, employment verification, and digital footprint
                  analysis. Once we prove the candidate is working there, your
                  Terms of Business are enforceable.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
                    <Search className="w-6 h-6 text-purple-400" />
                    <span className="font-bold">
                      Digital Investigation & Tracing
                    </span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
                    <FileCheck className="w-6 h-6 text-purple-400" />
                    <span className="font-bold">
                      Strict Contract Enforcement
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 opacity-30 blur-2xl rounded-full" />
                <div className="relative bg-slate-950 p-8 rounded-2xl border border-slate-800">
                  <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                    <span className="text-sm font-mono text-slate-500">
                      CASE FILE: #88291
                    </span>
                    <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">
                      FOUND
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="h-2 bg-slate-800 rounded w-3/4" />
                    <div className="h-2 bg-slate-800 rounded w-1/2" />
                    <div className="h-2 bg-slate-800 rounded w-5/6" />
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-800">
                    <p className="text-purple-400 font-bold text-lg">
                      Fee Recovered: £12,500
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-purple-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Users className="w-16 h-16 text-purple-200 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Stop Working for Free.
            </h2>
            <p className="text-xl text-purple-100 mb-10">
              If you suspect a backdoor hire, we can help you prove it and get
              paid.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/services/debtor-tracing">
                <Button className="bg-white text-purple-600 hover:bg-purple-50 font-bold text-xl px-10 py-8 rounded-lg shadow-xl">
                  Start Investigation
                </Button>
              </Link>
              <Link to="/winding-up-check">
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 font-bold text-xl px-10 py-8 rounded-lg"
                >
                  Check Client Solvency
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RecruitmentAgencies;
