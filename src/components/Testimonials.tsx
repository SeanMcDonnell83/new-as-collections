import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { themeClasses } from "@/contexts/ThemeContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Testimonials = () => {
  const { ref, animationProps } = useScrollAnimation();

  const testimonials = [
    {
      name: "Sarah Mitchell",
      title: "Finance Director",
      company: "Mitchell Construction Ltd",
      industry: "Construction",
      content:
        "A.S. Collections recovered over £180,000 in outstanding construction project payments for us. Their professional approach maintained our client relationships whilst achieving outstanding results. The team's expertise in construction industry debt recovery is unmatched.",
      rating: 5,
      location: "Birmingham",
    },
    {
      name: "James Thompson",
      title: "Managing Director",
      company: "Thompson Logistics Group",
      industry: "Shipping & Logistics",
      content:
        "Outstanding commercial debt recovery service. They successfully collected international shipping debts across multiple currencies that other agencies couldn't touch. 98% success rate isn't just marketing - it's reality. Highly recommend for any UK business.",
      rating: 5,
      location: "Manchester",
    },
    {
      name: "Rachel Davies",
      title: "Head of Finance",
      company: "Premier Independent School",
      industry: "Education",
      content:
        "A.S. Collections provided discreet and professional debt collection services for our independent school. They recovered outstanding tuition fees whilst maintaining the sensitive relationships crucial to our sector. Exceptional service from start to finish.",
      rating: 5,
      location: "London",
    },
    {
      name: "Michael Roberts",
      title: "Operations Manager",
      company: "Elite Recruitment Solutions",
      industry: "Recruitment",
      content:
        "Their recruitment sector expertise is outstanding. Recovered placement fees that were 6 months overdue within just 2 weeks. The no win, no fee structure gave us confidence to proceed. Professional, efficient, and results-driven debt recovery specialists.",
      rating: 5,
      location: "Glasgow",
    },
    {
      name: "Emma Wilson",
      title: "Financial Controller",
      company: "Wilson Food & Beverage Ltd",
      industry: "Food & Drink",
      content:
        "Exceptional commercial debt collection service for our food and drink business. A.S. Collections understood our industry challenges and recovered significant outstanding invoices from major retailers. Their approach protected our ongoing trade relationships.",
      rating: 5,
      location: "Edinburgh",
    },
    {
      name: "David Clarke",
      title: "Project Director",
      company: "Clarke Engineering Solutions",
      industry: "Oil & Gas",
      content:
        "Outstanding debt recovery results for our oil and gas engineering projects. They successfully navigated complex international contracts and recovered substantial project payments. Their industry knowledge and legal expertise delivered exceptional outcomes.",
      rating: 5,
      location: "London",
    },
  ];

  return (
    <section className={`py-20 ${themeClasses.bg.primary}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} {...animationProps} className="text-center mb-16">
          <h2
            className={`text-4xl font-bold ${themeClasses.text.primary} mb-6 font-montserrat font-700`}
          >
            Client Success Stories & Reviews
          </h2>
          <p
            className={`text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto font-inter font-light mb-4`}
          >
            See why businesses across London, Manchester, Birmingham, Glasgow,
            and Edinburgh trust A.S. Collections for their commercial debt
            recovery needs. Real testimonials from real clients across diverse
            industries.
          </p>
          <p
            className={`text-lg ${themeClasses.text.secondary} max-w-4xl mx-auto font-inter`}
          >
            Our professional debt collection services have helped over 2,500 UK
            businesses recover outstanding invoices worth millions of pounds.
            From construction companies to independent schools, our
            sector-specific expertise delivers results whilst preserving
            valuable client relationships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`${themeClasses.bg.secondary} rounded-xl border ${themeClasses.border.primary} p-6 h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex items-center mb-4">
                  <Quote
                    className={`w-8 h-8 ${themeClasses.text.accent} mr-3`}
                  />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>

                <p
                  className={`${themeClasses.text.primary} mb-6 font-inter leading-relaxed text-sm`}
                >
                  "{testimonial.content}"
                </p>

                <div className={`border-t ${themeClasses.border.primary} pt-4`}>
                  <div
                    className={`font-semibold ${themeClasses.text.primary} font-inter`}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    className={`text-sm ${themeClasses.text.secondary} font-inter`}
                  >
                    {testimonial.title}
                  </div>
                  <div
                    className={`text-sm ${themeClasses.text.accent} font-inter font-medium`}
                  >
                    {testimonial.company}
                  </div>
                  <div
                    className={`text-xs ${themeClasses.text.tertiary} font-inter mt-1`}
                  >
                    {testimonial.industry} • {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`mt-16 text-center ${themeClasses.bg.accent} rounded-2xl p-8`}
        >
          <h3
            className={`text-2xl font-bold ${themeClasses.text.primary} mb-4 font-montserrat font-700`}
          >
            Join Over 2,500 Satisfied UK Businesses
          </h3>
          <p
            className={`${themeClasses.text.secondary} mb-6 font-inter max-w-2xl mx-auto`}
          >
            Our commercial debt recovery success rate of 98% speaks for itself.
            From small businesses to large corporations across construction,
            food & drink, oil & gas, recruitment, and education sectors - we
            deliver results that matter to your bottom line.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div
                className={`text-3xl font-bold ${themeClasses.text.accent} font-montserrat font-700`}
              >
                2,500+
              </div>
              <div
                className={`text-sm ${themeClasses.text.secondary} font-inter`}
              >
                Businesses Helped
              </div>
            </div>
            <div>
              <div
                className={`text-3xl font-bold ${themeClasses.text.accent} font-montserrat font-700`}
              >
                98%
              </div>
              <div
                className={`text-sm ${themeClasses.text.secondary} font-inter`}
              >
                Success Rate
              </div>
            </div>
            <div>
              <div
                className={`text-3xl font-bold ${themeClasses.text.accent} font-montserrat font-700`}
              >
                £50M+
              </div>
              <div
                className={`text-sm ${themeClasses.text.secondary} font-inter`}
              >
                Total Recovered
              </div>
            </div>
            <div>
              <div
                className={`text-3xl font-bold ${themeClasses.text.accent} font-montserrat font-700`}
              >
                14 Days
              </div>
              <div
                className={`text-sm ${themeClasses.text.secondary} font-inter`}
              >
                Average Recovery
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
