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
        "Over £3.2 million recovered annually with a 98% success rate across all sectors.",
    },
    {
      icon: User,
      title: "Expert Leadership",
      description:
        "Led by Emilie Campbell, with decades of experience in commercial debt recovery.",
    },
  ];

  return (
    <section id="about" className={`py-20 ${themeClasses.bg.primary}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl font-bold ${themeClasses.text.primary} mb-6 font-noto-serif`}
          >
            Our Expertise - UK Debt Recovery Specialist
          </h2>
          <p
            className={`text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto font-noto-sans font-light`}
          >
            Recovery expert for hire UK with decades of experience in commercial
            debt recovery. We take the complexity away from debt recovery by
            heavily investing in technology and delivering bespoke approaches
            with innovative solutions across the UK.
          </p>
        </motion.div>

        {/* Emilie Campbell Introduction - Fixed for dark mode */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div {...useScrollAnimation({ delay: 0.2 })}>
            <div
              className={`${themeClasses.bg.secondary} border-2 ${themeClasses.border.primary} rounded-2xl p-8 shadow-lg`}
            >
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
                className={`${themeClasses.text.primary} text-lg italic leading-relaxed font-noto-serif border-l-4 border-blue-500 pl-4`}
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
            <div className="space-y-4">
              <p
                className={`${themeClasses.text.primary} leading-relaxed font-noto-sans text-lg`}
              >
                Under Emilie Campbell's leadership, A.S. Collections has become
                the UK's most trusted commercial debt recovery agency. With
                decades of experience in financial services and debt recovery,
                Emilie has built a team and system that delivers unparalleled
                results.
              </p>
              <p
                className={`${themeClasses.text.primary} leading-relaxed font-noto-sans text-lg`}
              >
                Our approach focuses on taking complexity away from our clients
                by heavily investing in technology and delivering bespoke
                solutions. We understand that every business is unique, and our
                tailored strategies reflect this understanding.
              </p>
              <p
                className={`${themeClasses.text.primary} leading-relaxed font-noto-sans text-lg`}
              >
                We maintain the highest professional standards while ensuring
                ethical practices that preserve your valuable client
                relationships. Our comprehensive approach combines traditional
                debt recovery methods with innovative digital solutions.
              </p>
            </div>

            {/* External Links for SEO */}
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="https://www.fca.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${themeClasses.text.accent} text-sm font-medium hover:underline transition-colors font-noto-sans`}
              >
                Financial Conduct Authority
              </a>
              <a
                href="https://www.cicm.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${themeClasses.text.accent} text-sm font-medium hover:underline transition-colors font-noto-sans`}
              >
                CICM Accreditation
              </a>
              <a
                href="https://www.csa-uk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${themeClasses.text.accent} text-sm font-medium hover:underline transition-colors font-noto-sans`}
              >
                Credit Services Association
              </a>
            </div>
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
          <h3
            className={`text-3xl font-bold ${themeClasses.text.primary} text-center mb-12 font-noto-serif`}
          >
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
                  <h4
                    className={`text-xl font-bold ${themeClasses.text.primary} mb-4 font-noto-serif`}
                  >
                    {value.title}
                  </h4>
                  <p
                    className={`${themeClasses.text.secondary} leading-relaxed font-noto-sans`}
                  >
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
          className={`bg-gradient-to-r ${themeClasses.bg.secondary} rounded-2xl p-8 md:p-12`}
        >
          <h3
            className={`text-3xl font-bold ${themeClasses.text.primary} text-center mb-12 font-noto-serif`}
          >
            Why Businesses Trust Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div
                    className={`w-14 h-14 mx-auto mb-4 ${themeClasses.bg.primary} rounded-xl shadow-lg flex items-center justify-center`}
                  >
                    <IconComponent
                      className={`w-7 h-7 ${themeClasses.text.accent}`}
                    />
                  </div>
                  <h4
                    className={`text-lg font-bold ${themeClasses.text.primary} mb-3 font-noto-serif`}
                  >
                    {achievement.title}
                  </h4>
                  <p
                    className={`${themeClasses.text.secondary} text-sm leading-relaxed font-noto-sans`}
                  >
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
            <h3
              className={`text-3xl font-bold ${themeClasses.text.primary} mb-6 font-noto-serif`}
            >
              Our Mission
            </h3>
            <p
              className={`text-xl ${themeClasses.text.secondary} leading-relaxed mb-8 font-noto-sans`}
            >
              To revolutionise commercial debt recovery through innovative
              technology, ethical practices, and unmatched expertise. We believe
              in doing business differently – faster, smarter, and with
              integrity at every step.
            </p>
            <div
              className={`${themeClasses.bg.accent} text-blue-600 dark:text-blue-400 rounded-xl p-6 inline-block`}
            >
              <p className={`text-lg font-semibold font-noto-serif`}>
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
