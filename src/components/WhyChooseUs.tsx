import { motion } from "framer-motion";
import { Clock, Headphones, Gift, Shield, Zap, Target } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Clock,
      title: "Faster Recovery Times",
      description:
        "We collect debts in a fraction of the time compared to the rest. Our streamlined process gets results quickly.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Round-the-clock support via phone, chat, and email. We're always here when you need us.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Gift,
      title: "Free Consultation",
      description:
        "No obligation, completely free initial consultation to assess your debt recovery needs.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Shield,
      title: "Ethical Standards",
      description:
        "We protect your customer relationships with ethical practices that maintain your business reputation.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Zap,
      title: "High-Tech Solutions",
      description:
        "Cutting-edge technology combined with proven strategies for maximum debt recovery efficiency.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Target,
      title: "Proven Results",
      description:
        "Track record of success with 98% recovery rate. If we can't collect it, nobody can.",
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Why Choose A.S. Collections?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We're not just another debt collection agency. We're your strategic
            partner in recovering what's rightfully yours, faster and more
            efficiently than anyone else.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-xl border border-slate-200 p-8 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">14</div>
              <div className="text-blue-100">Average Days to Recovery</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">£10M+</div>
              <div className="text-blue-100">Recovered This Year</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
