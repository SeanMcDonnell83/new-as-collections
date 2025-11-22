import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowRight, BookOpen, GraduationCap, School, ShieldCheck, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PrivateSchoolsEducation = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-serif selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      <Helmet>
        <title>School Fee Debt Recovery | Independent Education Specialists</title>
        <meta
          name="description"
          content="Discreet and diplomatic debt recovery for independent schools. We recover unpaid fees while protecting parental relationships and your school's reputation."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section: Discretion & Dignity */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-100">
          <div className="absolute inset-0 bg-[url('/paper-texture.png')] opacity-50 mix-blend-multiply" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <School className="w-6 h-6 text-indigo-900" />
                  <span className="text-indigo-900 font-sans font-bold tracking-widest text-sm uppercase">Independent Education Sector</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-serif font-medium text-slate-900 mb-8 leading-tight">
                  Discretion. <br />
                  <span className="italic text-indigo-800">Dignity.</span> <br />
                  Recovery.
                </h1>
                <p className="text-xl text-slate-600 mb-10 max-w-lg font-sans leading-relaxed">
                  We understand the delicate balance between financial necessity and pastoral care. 
                  Recover unpaid fees without damaging your school's reputation or parental relationships.
                </p>
                <div className="flex flex-wrap gap-6 font-sans">
                  <Link to="/contact">
                    <Button className="bg-indigo-900 hover:bg-indigo-800 text-white font-medium text-lg px-8 py-6 rounded-sm shadow-sm transition-all">
                      Confidential Consultation
                    </Button>
                  </Link>
                  <Link to="/services/commercial-debt-recovery">
                    <Button variant="outline" className="bg-transparent border-indigo-900 text-indigo-900 hover:bg-indigo-50 font-medium text-lg px-8 py-6 rounded-sm">
                      Our Approach
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Visual: The Open Book */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="absolute inset-0 bg-indigo-200 rounded-full blur-3xl opacity-20" />
                <div className="relative bg-white p-12 rounded-sm shadow-2xl border border-slate-200 max-w-md mx-auto rotate-1 hover:rotate-0 transition-transform duration-700">
                  <div className="border-b-2 border-indigo-100 pb-6 mb-6">
                    <h3 className="font-serif text-2xl text-slate-900 italic">The Bursar's Dilemma</h3>
                  </div>
                  <div className="space-y-6 font-sans text-slate-600">
                    <p>
                      "How do we chase the fees when the child is still in the classroom?"
                    </p>
                    <p>
                      "We can't send bailiffs to a parent's door—the reputation damage would be immense."
                    </p>
                    <div className="pt-6 border-t border-slate-100">
                      <p className="font-bold text-indigo-900">
                        We act as the diplomatic buffer.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pain Points: The "Quiet" Crisis */}
        <section className="py-24 bg-white font-sans">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-medium text-slate-900 mb-4">The Challenges of School Fees</h2>
              <div className="w-24 h-1 bg-indigo-100 mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "Reputation Risk",
                  desc: "You can't use aggressive tactics. It looks bad for the school and upsets the community.",
                  icon: ShieldCheck
                },
                {
                  title: "The Relationship",
                  desc: "You often still have to teach the child while chasing the parents for money. It's an awkward conflict of interest.",
                  icon: HeartHandshake
                },
                {
                  title: "Budget Holes",
                  desc: "Unpaid term fees leave a massive hole in the school's budget, affecting resources for other students.",
                  icon: BookOpen
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="text-center px-6"
                >
                  <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6 text-indigo-900">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution: The Diplomatic Approach */}
        <section className="py-24 bg-slate-900 text-white font-sans">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-serif mb-8 text-indigo-100">
                  Firm, Fair, and Final.
                </h2>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed font-light">
                  We use a "soft" but firm approach. We act as a third party to separate the financial dispute from the educational relationship, allowing your staff to focus on the students.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-800 flex items-center justify-center shrink-0">
                      <span className="font-serif text-xl">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-indigo-200 mb-2">Diplomatic Outreach</h3>
                      <p className="text-slate-400">We contact parents respectfully, understanding that circumstances change.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-800 flex items-center justify-center shrink-0">
                      <span className="font-serif text-xl">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-indigo-200 mb-2">Contract Enforcement</h3>
                      <p className="text-slate-400">We enforce terms regarding notice periods and interest without aggression.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-800 flex items-center justify-center shrink-0">
                      <span className="font-serif text-xl">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-indigo-200 mb-2">Resolution</h3>
                      <p className="text-slate-400">Securing payment plans or full settlement so the child's education continues.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-full min-h-[400px] bg-slate-800 rounded-sm p-8 border border-slate-700">
                <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500" />
                <h3 className="font-serif text-2xl text-white mb-8">Our Promise to Schools</h3>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                    Total Confidentiality
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                    Reputation Protection
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                    Ethical Collection Practices
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                    No Win, No Fee Service
                  </li>
                </ul>
                <div className="mt-12">
                  <Link to="/services/commercial-debt-recovery">
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-4">
                      Learn More About Our Methods
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-indigo-50 font-sans">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <GraduationCap className="w-16 h-16 text-indigo-900 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-slate-900 mb-6">
              Protect Your School's Financial Future.
            </h2>
            <p className="text-xl text-slate-600 mb-10">
              Speak to our education sector specialists today for a confidential discussion.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-indigo-900 text-white hover:bg-indigo-800 font-medium text-lg px-10 py-6 rounded-sm shadow-lg">
                  Request a Call Back
                </Button>
              </Link>
              <Link to="/winding-up-check">
                <Button variant="outline" className="bg-white border-indigo-200 text-indigo-900 hover:bg-indigo-50 font-medium text-lg px-10 py-6 rounded-sm">
                  Check Debtor Solvency
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

export default PrivateSchoolsEducation;
