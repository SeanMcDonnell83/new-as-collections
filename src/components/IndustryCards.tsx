import { motion } from "framer-motion";
import { themeClasses } from "@/contexts/ThemeContext";
import {
  Building2,
  UtensilsCrossed,
  Flame,
  GraduationCap,
  Briefcase,
  Ship
} from "lucide-react";
import { Link } from "react-router-dom";

interface IndustryCard {
  name: string;
  description: string;
  icon: React.ComponentType<{ className: string }>;
  href: string;
}

const industries: IndustryCard[] = [
  {
    name: "Construction & Engineering",
    description: "Specialised commercial debt recovery for contractors, sub-contractors and suppliers on JCT and bespoke contracts.",
    icon: Building2,
    href: "/sectors/construction-engineering",
  },
  {
    name: "Food & Drink / Hospitality",
    description: "No win, no fee debt recovery for restaurants, pubs, hotels and wholesalers in a high-insolvency sector.",
    icon: UtensilsCrossed,
    href: "/sectors/food-drink-hospitality",
  },
  {
    name: "Oil & Gas / Energy",
    description: "High-value, multi-jurisdictional commercial debt recovery for complex energy supply chains.",
    icon: Flame,
    href: "/sectors/oil-gas-energy",
  },
  {
    name: "Independent Schools & Education",
    description: "Sensitive fee and bursary arrears recovery that protects parent relationships and school reputation.",
    icon: GraduationCap,
    href: "/sectors/private-schools-education",
  },
  {
    name: "Recruitment Agencies",
    description: "Enforcement of backdoor hires, transfer fees and disputed timesheets across permanent and temp placements.",
    icon: Briefcase,
    href: "/sectors/recruitment-agencies",
  },
  {
    name: "Shipping & Logistics",
    description: "Commercial debt recovery for freight charges, demurrage, warehousing and cross-border transport disputes.",
    icon: Ship,
    href: "/sectors/shipping-logistics",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const IndustryCards = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-slate-100 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-4xl md:text-5xl font-bold ${themeClasses.text.primary} mb-6 font-montserrat font-800`}
          >
            Industry-Specific Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto font-inter`}
          >
            Specialised commercial debt recovery across key UK business sectors. Our sector-focused teams understand industry-specific challenges and operate on a transparent, no win, no fee basis where appropriate.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            const staggerClass = index % 3 === 1 ? "lg:-mt-8" : "";
            return (
              <motion.div
                key={industry.name}
                variants={itemVariants}
                className={`group h-full ${staggerClass}`}
              >
                <Link to={industry.href} className="block h-full">
                  <motion.div
                    whileHover={{ y: -10, boxShadow: "0 25px 45px rgba(15, 23, 42, 0.25)" }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-slate-900 rounded-3xl p-8 h-full shadow-lg cursor-pointer transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-5">
                      <IconComponent className="w-8 h-8 text-slate-900 dark:text-red-400" />
                    </div>
                    <h3 className={`text-lg font-bold ${themeClasses.text.primary} mb-3 font-montserrat font-700`}>
                      {industry.name}
                    </h3>
                    <p className={`${themeClasses.text.secondary} text-sm leading-relaxed font-inter`}>
                      {industry.description}
                    </p>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};
