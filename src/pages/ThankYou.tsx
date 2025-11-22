import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Helmet>
        <title>Thank You | A.S. Collections</title>
      </Helmet>

      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200 relative"
      >
        {/* Ticket Stub Visual */}
        <div className="bg-slate-900 p-8 text-white relative overflow-hidden">
          <div className="absolute -bottom-4 left-0 w-full h-4 bg-[radial-gradient(circle,transparent_50%,#fff_50%)] bg-[length:20px_20px] rotate-180" />
          <div className="flex items-center gap-4 mb-6">
            <CheckCircle className="w-12 h-12 text-green-400" />
            <div>
              <h1 className="text-3xl font-black uppercase">Submission Received</h1>
              <p className="text-slate-400 font-mono text-sm">TICKET ID: #{Math.floor(Math.random() * 100000)}</p>
            </div>
          </div>
        </div>

        <div className="p-8 pt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">We're on the case.</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            One of our debt recovery specialists will review your details and contact you shortly (usually within 2 hours during business hours).
          </p>

          <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Recommended Next Steps</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/winding-up-check" className="flex items-center justify-between group">
                  <span className="text-slate-600 group-hover:text-blue-600 transition-colors">Check Winding-Up List</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <Link to="/services/commercial-debt-recovery" className="flex items-center justify-between group">
                  <span className="text-slate-600 group-hover:text-blue-600 transition-colors">View Recovery Process</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          <Link to="/">
            <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ThankYou;
