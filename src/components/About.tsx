import { motion } from "framer-motion";
import {
  User,
  Award,
  Target,
  Lightbulb,
  Shield,
  TrendingUp,
} from "lucide-react";
import { themeClasses } from "@/contexts/ThemeContext";
import {
  useScrollAnimation,
  useStaggeredScrollAnimation,
} from "@/hooks/useScrollAnimation";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Perseverance",
      description:
        "We never give up on your debt. Our tenacious approach ensures every avenue is explored.",
    },
    {
      icon: Shield,
      title: "Professionalism",
      description:
        "Maintaining the highest ethical standards while protecting your business relationships.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Cutting-edge technology and bespoke solutions tailored to your specific needs.",
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: "Industry Recognition",
      description:
        "Leading debt recovery agency with multiple industry awards and certifications.",
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description:
        "Over £10 million recovered annually with a 98% success rate across all sectors.",
    },
    {
      icon: User,
      title: "Expert Leadership",
      description:
        "Led by Paul Taylor, with decades of experience in commercial debt recovery.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6 font-serif">
            Our Expertise - UK Debt Recovery Specialist
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-sans font-light">
            Recovery expert for hire UK with decades of experience in commercial
            debt recovery. We take the complexity away from debt recovery by
            heavily investing in technology and delivering bespoke approaches
            with innovative solutions across the UK.
          </p>
        </motion.div>

        {/* Emilie Campbell Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div {...useScrollAnimation({ delay: 0.2 })}>
            <div className={`${themeClasses.bg.secondary} rounded-2xl p-8`}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3
                    className={`text-2xl font-bold ${themeClasses.text.primary} font-noto-serif`}
                  >
                    Emilie Campbell
                  </h3>
                  <p
                    className={`${themeClasses.text.accent} font-semibold font-noto-sans`}
                  >
                    Managing Director
                  </p>
                </div>
              </div>
              <blockquote
                className={`${themeClasses.text.secondary} text-lg italic leading-relaxed font-noto-serif`}
              >
                "Our mission is simple: recover what's rightfully yours while
                maintaining the relationships that matter to your business. We
                achieve this through a perfect blend of cutting-edge technology
                and time-tested human expertise."
              </blockquote>
            </div>
          </motion.div>

          <motion.div
            {...useScrollAnimation({ delay: 0.4 })}
            className="space-y-6"
          >
            <h3
              className={`text-2xl font-bold ${themeClasses.text.primary} font-noto-serif`}
            >
              Leadership with Vision
            </h3>
            <p
              className={`${themeClasses.text.secondary} leading-relaxed font-noto-sans`}
            >
              Under Emilie Campbell's leadership, A.S. Collections has become
              the UK's most trusted commercial debt recovery agency. With
              decades of experience in financial services and debt recovery,
              Emilie has built a team and system that delivers unparalleled
              results.
            </p>
            <p
              className={`${themeClasses.text.secondary} leading-relaxed font-noto-sans`}
            >
              Our approach focuses on taking complexity away from our clients by
              heavily investing in technology and delivering bespoke solutions.
              We understand that every business is unique, and our tailored
              strategies reflect this understanding.
            </p>
          </motion.div>
        </div>
        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">
                    {value.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Why Businesses Trust Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-white rounded-xl shadow-lg flex items-center justify-center">
                    <IconComponent className="w-7 h-7 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">
                    {achievement.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Company Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Our Mission
            </h3>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              To revolutionize commercial debt recovery through innovative
              technology, ethical practices, and unmatched expertise. We believe
              in doing business differently – faster, smarter, and with
              integrity at every step.
            </p>
            <div className="bg-blue-600 text-white rounded-xl p-6 inline-block">
              <p className="text-lg font-semibold">
                "You might not need us now, but there will come a time you
                will."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
