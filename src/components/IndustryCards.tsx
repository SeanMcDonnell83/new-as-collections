import { motion } from "framer-motion";
import { themeClasses } from "@/contexts/ThemeContext";
import { 
  Building2, 
  UtensilsCrossed, 
  Flame, 
  Zap, 
  Pill, 
  Warehouse,
  TrendingUp,
  Package
} from "lucide-react";

interface IndustryCard {
  name: string;
  description: string;
  icon: React.ComponentType<{ className: string }>;
}

const industries: IndustryCard[] = [
  {
    name: "Construction",
    description: "Specialist debt recovery for construction and property sectors",
    icon: Building2,
  },
  {
    name: "Food & Drink",
    description: "Expert collection for hospitality and food service industries",
    icon: UtensilsCrossed,
  },
  {
    name: "Oil & Gas",
    description: "Complex recovery solutions for energy sector B2B debts",
    icon: Flame,
  },
  {
    name: "Manufacturing",
    description: "Industrial debt collection with supply chain expertise",
    icon: Zap,
  },
  {
    name: "Pharmaceuticals",
    description: "Specialized recovery for healthcare and pharma sectors",
    icon: Pill,
  },
  {
    name: "Logistics",
    description: "Transport and warehousing sector debt specialists",
    icon: Warehouse,
  },
  {
    name: "Technology",
    description: "B2B debt recovery for tech and software companies",
    icon: TrendingUp,
  },
  {
    name: "Retail & Distribution",
    description: "Multi-channel retail and wholesale debt collection",
    icon: Package,
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
      className={`py-24 ${themeClasses.bg.secondary}`}
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
            Specialized debt recovery across all major UK business sectors. Our sector-focused teams understand industry-specific challenges and opportunities.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)" }}
                  transition={{ duration: 0.3 }}
                  className={`${themeClasses.bg.primary} rounded-xl p-6 h-full border ${themeClasses.border.primary} cursor-pointer transition-all duration-300`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-14 h-14 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:shadow-lg"
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className={`text-lg font-bold ${themeClasses.text.primary} mb-2 font-montserrat font-700`}>
                    {industry.name}
                  </h3>
                  <p className={`${themeClasses.text.secondary} text-sm leading-relaxed font-inter`}>
                    {industry.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};
