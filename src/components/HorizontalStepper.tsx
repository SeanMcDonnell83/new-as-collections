import { motion } from "framer-motion";
import { themeClasses } from "@/contexts/ThemeContext";

interface StepItem {
  step: string;
  title: string;
  description: string;
}

interface HorizontalStepperProps {
  steps: StepItem[];
  title: string;
  subtitle: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export const HorizontalStepper = ({
  steps,
  title,
  subtitle,
}: HorizontalStepperProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`py-24 ${themeClasses.bg.primary}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold ${themeClasses.text.primary} mb-6 font-montserrat font-800`}
          >
            {title}
          </h2>
          <p
            className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto font-inter`}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Desktop Horizontal Stepper */}
        <div className="hidden lg:block">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Connecting Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="absolute top-8 left-8 right-8 h-1 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300"
              style={{ transformOrigin: "left" }}
            />

            <div className="grid grid-cols-4 gap-8 relative z-10">
              {steps.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  {/* Circle with number */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg relative"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      className="text-white font-bold text-2xl font-montserrat font-800"
                    >
                      {item.step}
                    </motion.span>
                    {/* Outer ring animation */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-300 border-r-blue-300"
                    />
                  </motion.div>

                  {/* Content */}
                  <h3
                    className={`text-xl font-bold ${themeClasses.text.primary} mb-4 font-montserrat font-700`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`${themeClasses.text.secondary} leading-relaxed font-inter text-sm`}
                  >
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile Vertical Stepper */}
        <div className="lg:hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {steps.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-6"
              >
                {/* Left side - Circle and line */}
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
                  >
                    <span className="text-white font-bold text-xl font-montserrat font-800">
                      {item.step}
                    </span>
                  </motion.div>
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: 80 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      className="w-1 bg-gradient-to-b from-blue-500 to-blue-300 mt-4"
                    />
                  )}
                </div>

                {/* Right side - Content */}
                <div className="flex-1 pt-2">
                  <h3
                    className={`text-lg font-bold ${themeClasses.text.primary} mb-2 font-montserrat font-700`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`${themeClasses.text.secondary} leading-relaxed font-inter text-sm`}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
