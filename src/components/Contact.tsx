import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  honeypot: z.string().max(0, "Bot detected"), // Anti-spam honeypot
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
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

    try {
      // Create comprehensive email body
      const emailBody = `
New Debt Enquiry from A.S. Collections Website

CONTACT DETAILS:
Name: ${data.firstName} ${data.lastName}
Company: ${data.company}
Email: ${data.email}
Phone: ${data.phone}
Debt Amount: £${data.debtAmount || "Not specified"}

MESSAGE:
${data.message}

ADDITIONAL INFORMATION:
- Submitted: ${new Date().toLocaleString("en-GB")}
- Source: A.S. Collections Website Contact Form
- IP Address: [Automatically captured]

Please respond to this enquiry within 2 hours as per our service commitment.

Best regards,
A.S. Collections Website System
      `.trim();

      // Create mailto link with pre-populated content
      const emailSubject = `New Debt Enquiry - ${data.company}`;
      const mailtoLink = `mailto:info@ascollections.co.uk?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

      // Open email client
      window.location.href = mailtoLink;

      // Show success message
      toast({
        title: "Email client opened!",
        description:
          "Your email client should now be open with the enquiry details pre-filled. Please send the email to complete your submission.",
      });

      // Reset form after successful preparation
      reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly at 0151 329 0946.",
        variant: "destructive",
      });
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
      details: ["info@ascollections.co.uk", "Response within 2 hours"],
      action: "Send Email",
      link: "mailto:info@ascollections.co.uk",
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
            className={`text-4xl font-bold ${themeClasses.text.primary} mb-6 font-noto-serif`}
          >
            Get Your Free No Win No Fee Consultation
          </h2>
          <p
            className={`text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto font-noto-sans font-light`}
          >
            No obligation, completely free consultation to assess your unpaid
            invoice recovery UK needs. Let us show you how our commercial debt
            recovery UK specialists can help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div
              className={`${themeClasses.bg.primary} rounded-2xl ${themeClasses.border.primary} border p-8 h-fit`}
            >
              <h3
                className={`text-2xl font-bold ${themeClasses.text.primary} mb-8 font-noto-serif`}
              >
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 ${themeClasses.bg.accent} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <IconComponent
                          className={`w-6 h-6 ${themeClasses.text.accent}`}
                        />
                      </div>
                      <div className="flex-1">
                        <h4
                          className={`font-semibold ${themeClasses.text.primary} mb-1 font-noto-sans`}
                        >
                          {info.title}
                        </h4>
                        {info.details.map((detail, idx) => (
                          <p
                            key={idx}
                            className={`${themeClasses.text.secondary} text-sm font-noto-sans`}
                          >
                            {detail}
                          </p>
                        ))}
                        {info.action && (
                          <a
                            href={info.link}
                            className={`${themeClasses.text.accent} text-sm font-medium hover:underline transition-colors mt-1 inline-block font-noto-sans`}
                          >
                            {info.action}
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                className={`mt-8 pt-8 ${themeClasses.border.primary} border-t`}
              >
                <div
                  className={`flex items-center space-x-2 ${themeClasses.text.secondary} mb-4`}
                >
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium font-noto-sans">
                    Business Hours
                  </span>
                </div>
                <div
                  className={`space-y-1 text-sm ${themeClasses.text.secondary} font-noto-sans`}
                >
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>

              <div className={`mt-6 p-4 ${themeClasses.bg.accent} rounded-lg`}>
                <p
                  className={`${themeClasses.text.accent} text-sm font-medium text-center font-noto-sans`}
                >
                  "You might not need us now, but there will come a time you
                  will."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div
              className={`${themeClasses.bg.primary} rounded-2xl ${themeClasses.border.primary} border p-8`}
            >
              <h3
                className={`text-2xl font-bold ${themeClasses.text.primary} mb-8 font-noto-serif`}
              >
                Request Your Free Consultation
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Honeypot field for spam protection */}
                <input
                  {...register("honeypot")}
                  type="text"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="firstName"
                      className={`${themeClasses.text.primary} font-noto-sans`}
                    >
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      {...register("firstName")}
                      className={`mt-1 ${themeClasses.bg.secondary} ${themeClasses.border.primary} ${themeClasses.text.primary} font-noto-sans`}
                    />
                    {errors.firstName && (
                      <p className="text-red-600 dark:text-red-400 text-sm mt-1 font-noto-sans">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="lastName"
                      className={`${themeClasses.text.primary} font-noto-sans`}
                    >
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      {...register("lastName")}
                      className={`mt-1 ${themeClasses.bg.secondary} ${themeClasses.border.primary} ${themeClasses.text.primary} font-noto-sans`}
                    />
                    {errors.lastName && (
                      <p className="text-red-600 dark:text-red-400 text-sm mt-1 font-noto-sans">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="email"
                      className={`${themeClasses.text.primary} font-noto-sans`}
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={`mt-1 ${themeClasses.bg.secondary} ${themeClasses.border.primary} ${themeClasses.text.primary} font-noto-sans`}
                    />
                    {errors.email && (
                      <p className="text-red-600 dark:text-red-400 text-sm mt-1 font-noto-sans">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="phone"
                      className={`${themeClasses.text.primary} font-noto-sans`}
                    >
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      className={`mt-1 ${themeClasses.bg.secondary} ${themeClasses.border.primary} ${themeClasses.text.primary} font-noto-sans`}
                    />
                    {errors.phone && (
                      <p className="text-red-600 dark:text-red-400 text-sm mt-1 font-noto-sans">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="company"
                      className={`${themeClasses.text.primary} font-noto-sans`}
                    >
                      Company Name *
                    </Label>
                    <Input
                      id="company"
                      {...register("company")}
                      className={`mt-1 ${themeClasses.bg.secondary} ${themeClasses.border.primary} ${themeClasses.text.primary} font-noto-sans`}
                    />
                    {errors.company && (
                      <p className="text-red-600 dark:text-red-400 text-sm mt-1 font-noto-sans">
                        {errors.company.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="debtAmount"
                      className={`${themeClasses.text.primary} font-noto-sans`}
                    >
                      Approximate Debt Amount (£)
                    </Label>
                    <Input
                      id="debtAmount"
                      {...register("debtAmount")}
                      placeholder="e.g., 5,000"
                      className={`mt-1 ${themeClasses.bg.secondary} ${themeClasses.border.primary} ${themeClasses.text.primary} font-noto-sans`}
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className={`${themeClasses.text.primary} font-noto-sans`}
                  >
                    Tell us about your situation *
                  </Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    rows={4}
                    placeholder="Please provide details about the debt, debtor, and any previous collection attempts..."
                    className={`mt-1 ${themeClasses.bg.secondary} ${themeClasses.border.primary} ${themeClasses.text.primary} font-noto-sans`}
                  />
                  {errors.message && (
                    <p className="text-red-600 dark:text-red-400 text-sm mt-1 font-noto-sans">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full ${themeClasses.button.primary} font-semibold py-3 transition-colors duration-200 font-noto-sans`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Preparing Email...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="w-4 h-4 mr-2" />
                      Send Free Consultation Request
                    </div>
                  )}
                </Button>

                <p
                  className={`text-xs ${themeClasses.text.muted} text-center font-noto-sans`}
                >
                  By clicking submit, your email client will open with a
                  pre-filled message to info@ascollections.co.uk. Simply send
                  the email to complete your consultation request.
                </p>

                {/* GDPR Notice */}
                <div
                  className={`mt-4 p-3 ${themeClasses.bg.secondary} rounded-lg`}
                >
                  <p
                    className={`text-xs ${themeClasses.text.tertiary} font-noto-sans`}
                  >
                    <strong>GDPR Notice:</strong> Your personal data will be
                    processed in accordance with our privacy policy. You have
                    the right to access, rectify, or delete your data. Contact
                    info@ascollections.co.uk for data protection enquiries.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
