import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { themeClasses } from "@/contexts/ThemeContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const GoogleReviewWall = () => {
  const { ref, animationProps } = useScrollAnimation();

  const getInitialColor = (initial: string): string => {
    const colors = {
      'B': 'bg-blue-500',
      'G': 'bg-green-500',
      'Z': 'bg-purple-500',
      'J': 'bg-pink-500',
      'Y': 'bg-orange-500'
    };
    return colors[initial as keyof typeof colors] || 'bg-slate-500';
  };

  const reviews = [
    {
      name: "Ben Nahum",
      initial: "B",
      review: "After many failed attempts with other agencies, A.S. Collections successfully helped us recover unpaid invoices from non-paying customers. Alex Scott has been very helpful and communication is great."
    },
    {
      name: "Geoff Fletcher",
      initial: "G",
      review: "A swift and effective recovery service. The situation was made more complicated by the client being based in France and Japan but Alex engaged directly and was able to gain a quick and full settlement."
    },
    {
      name: "Zerina",
      initial: "Z",
      review: "After over 2 years of chasing bad debt, I found A.S. Collections. After 3 weeks (yes 3 weeks!) they have collected debt from one customer and are working on the rest. Absolutely incredible results."
    },
    {
      name: "Beryl Genner",
      initial: "B",
      review: "After 3 years of trying to retrieve our £5,000, we contacted Paul at A.S. Collections. He did everything else. We are delighted to say he got us all our money back."
    },
    {
      name: "James Mounsey",
      initial: "J",
      review: "Very good service—got me paid within 24 hours. Definitely recommend Alex. Professional, fast, and results-driven. Couldn't ask for better support."
    },
    {
      name: "Yvonne Chorlton",
      initial: "Y",
      review: "We had tried unsuccessfully to obtain payment from a contractor for weeks. One email from A.S. Collections and we were paid in full. Outstanding service."
    }
  ];

  return (
    <section className={`py-20 ${themeClasses.bg.primary}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badge */}
        <motion.div
          ref={ref}
          {...animationProps}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center gap-3 bg-white dark:bg-neutral-900 rounded-full px-6 py-3 shadow-sm border border-gray-100 dark:border-neutral-800">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <span className="font-semibold text-gray-800 dark:text-gray-200 font-montserrat">
              Google Reviews
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400 font-inter">
              Excellent
            </span>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          ref={ref}
          {...animationProps}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${themeClasses.text.primary} mb-4 font-montserrat font-800`}>
            Rated 5 Stars by UK Businesses
          </h2>
          <p className={`text-lg md:text-xl ${themeClasses.text.secondary} max-w-2xl mx-auto font-inter leading-relaxed`}>
            Don't just take our word for it. See what our clients say on Google.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-6 h-full flex flex-col border border-gray-100 dark:border-neutral-800">
                {/* Card Header */}
                <div className="flex items-center gap-4 mb-4">
                  {/* Avatar */}
                  <div className={`w-12 h-12 rounded-full ${getInitialColor(review.initial)} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-lg font-montserrat">
                      {review.initial}
                    </span>
                  </div>

                  {/* Name and Review Count */}
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 font-montserrat">
                      {review.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-inter">
                      1 review
                    </p>
                  </div>

                  {/* Google Icon */}
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <text
                        x="12"
                        y="18"
                        textAnchor="middle"
                        fontSize="16"
                        fontWeight="bold"
                        className="fill-blue-600 dark:fill-blue-400"
                      >
                        G
                      </text>
                    </svg>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 dark:text-gray-400 font-inter text-sm leading-relaxed flex-1">
                  {review.review}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button
            onClick={() => window.open('https://maps.google.com/?cid=YOUR_GOOGLE_BUSINESS_ID', '_blank')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 font-inter inline-block"
          >
            Read All Google Reviews
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviewWall;
