import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ObfuscatedMailto } from "@/components/ui/ObfuscatedMailto";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { themeClasses } from "@/contexts/ThemeContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(1, "Company name is required"),
  debtAmount: z.string().optional(),
  message: z
    .string()
    .min(10, "Please provide more details about your situation"),
  honeypot: z.string().optional(), // Anti-spam honeypot
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { toast } = useToast();
  const animationProps = useScrollAnimation({ delay: 0.2 });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    if (data.honeypot) {
      console.log("Bot detected");
      toast({
        title: "Success!",
        description:
          "Your consultation request has been sent. We'll be in touch shortly.",
      });
      reset();
      setTimeout(() => {
        window.location.href = "/thank-you";
      }, 1500);
      setIsSubmitting(false);
      return;
    }

    try {
      const name = `${data.firstName} ${data.lastName}`.trim();
      const message = `Situation: ${data.message}${data.debtAmount ? ` | Debt Amount: £${data.debtAmount}` : ""}`;

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      reset();
      window.location.href = "/thank-you";
    } catch (error) {
      setSubmitError("Connection failed. Please call 0151 329 0946.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["0151 329 0946", "Available 24/7"],
      action: "Call Now",
      link: "tel:+441513290946",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["Email our team", "Response within 2 hours"],
      action: "Send Email",
      link: "",
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["Liverpool, UK", "In-person consultations available"],
      action: "",
      link: "",
    },
  ];

  return (
    <section id="contact" className={`py-20 ${themeClasses.bg.secondary}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...animationProps} className="text-center mb-16">
          <h2
            className={`text-4xl font-bold ${themeClasses.text.primary} mb-6 font-montserrat font-700`}
          >
            Get Your Free No Win No Fee Consultation
          </h2>
          <p
            className={`text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto font-inter font-light`}
          >
            No obligation, completely free consultation to assess your unpaid
            invoice recovery UK needs. Let us show you how our commercial debt
            recovery UK specialists can help.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div
            className={`${themeClasses.bg.primary} rounded-2xl ${themeClasses.border.primary} border p-8`}
          >
            <h3
              className={`text-2xl font-bold ${themeClasses.text.primary} mb-8 font-montserrat font-700`}
            >
              Request Your Free Consultation
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Honeypot field for spam protection */}
              <input
                {...register("honeypot")}
                type="text"
                className="opacity-0 absolute -z-10 h-0 w-0 pointer-events-none"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label
                    htmlFor="firstName"
                    className={`${themeClasses.text.primary} font-inter`}
                  >
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    {...register("firstName")}
                    className={`mt-1 ${themeClasses.bg.secondary} ${themeClasses.border.primary} ${themeClasses.text.primary} font-inter`}
                  />
                  {errors.firstName && (
                    <p className="text-red-600 dark:text-red-400 text-sm mt-1 font-inter">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="lastName"
                    className={`${themeClasses.text.primary} font-inter`}
                  >
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    {...register("lastName")}
                    className={`mt-1 ${themeClasses.bg.secondary} ${themeClasses.border.primary} ${themeClasses.text.primary} font-inter`}
                  />
                  {errors.lastName && (
                    <p className="text-red-600 dark:text-red-400 text-sm mt-1 font-inter">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label
                    htmlFor="email"
                    className={`${themeClasses.text.primary} font-inter`}
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={`mt-1 ${themeClasses.bg.secondary} ${themeClasses.border.primary} ${themeClasses.text.primary} font-inter`}
                  />
                  {errors.email && (
                    <p className="text-red-600 dark:text-red-400 text-sm mt-1 font-inter">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="phone"
                    className={`${themeClasses.text.primary} font-inter`}
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className={`mt-1 ${themeClasses.bg.secondary} ${themeClasses.border.primary} ${themeClasses.text.primary} font-inter`}
                  />
                  {errors.phone && (
                    <p className="text-red-600 dark:text-red-400 text-sm mt-1 font-inter">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label
                    htmlFor="company"
                    className={`${themeClasses.text.primary} font-inter`}
                  >
                    Company Name *
                  </Label>
                  <Input
                    id="company"
                    {...register("company")}
                    className={`mt-1 ${themeClasses.bg.secondary} ${themeClasses.border.primary} ${themeClasses.text.primary} font-inter`}
                  />
                  {errors.company && (
                    <p className="text-red-600 dark:text-red-400 text-sm mt-1 font-inter">
                      {errors.company.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="debtAmount"
                    className={`${themeClasses.text.primary} font-inter`}
                  >
                    Approximate Debt Amount (£)
                  </Label>
                  <Input
                    id="debtAmount"
                    {...register("debtAmount")}
                    placeholder="e.g., 5,000"
                    className={`mt-1 ${themeClasses.bg.secondary} ${themeClasses.border.primary} ${themeClasses.text.primary} font-inter`}
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className={`${themeClasses.text.primary} font-inter`}
                >
                  Tell us about your situation *
                </Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  placeholder="Please provide details about the debt, debtor, and any previous collection attempts..."
                  className={`mt-1 ${themeClasses.bg.secondary} ${themeClasses.border.primary} ${themeClasses.text.primary} font-inter`}
                />
                {errors.message && (
                  <p className="text-red-600 dark:text-red-400 text-sm mt-1 font-inter">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${themeClasses.button.primary} font-semibold py-3 transition-colors duration-200 font-inter`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="w-4 h-4 mr-2" />
                    Send Consultation Request
                  </div>
                )}
              </Button>
              {submitError && (
                <p className="mt-3 text-sm text-red-500 font-inter text-center">
                  {submitError}
                </p>
              )}

              <p
                className={`text-xs ${themeClasses.text.muted} text-center font-inter`}
              >
                We'll get back to you within 2 hours during business hours.
              </p>

              {/* GDPR Notice */}
              <div
                className={`mt-4 p-3 ${themeClasses.bg.secondary} rounded-lg`}
              >
                <p
                  className={`text-xs ${themeClasses.text.tertiary} font-inter`}
                >
                  <strong>GDPR Notice:</strong> Your personal data will be
                  processed in accordance with our privacy policy. You have the
                  right to access, rectify, or delete your data. For data
                  protection enquiries, please email {""}
                  <ObfuscatedMailto
                    user="info"
                    domain="ascollections.co.uk"
                    className="underline underline-offset-2"
                  />
                  .
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
