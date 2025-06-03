import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Upload,
  X,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

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
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter((file) => {
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      const maxSize = 10 * 1024 * 1024; // 10MB

      if (!validTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: `${file.name} is not a valid file type. Please upload PDF or DOC files only.`,
          variant: "destructive",
        });
        return false;
      }

      if (file.size > maxSize) {
        toast({
          title: "File too large",
          description: `${file.name} is too large. Please upload files smaller than 10MB.`,
          variant: "destructive",
        });
        return false;
      }

      return true;
    });

    setUploadedFiles((prev) => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast({
        title: "Consultation request sent!",
        description:
          "Thank you for contacting A.S. Collections. We'll be in touch within 24 hours.",
      });

      reset();
      setUploadedFiles([]);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
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
      details: ["0151 XXX XXXX", "Available 24/7"],
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@ascollections.co.uk", "Response within 2 hours"],
      action: "Send Email",
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["Liverpool, UK", "In-person consultations available"],
      action: "Get Directions",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      details: ["Instant support", "Monday - Friday, 9am - 6pm"],
      action: "Start Chat",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Get Your Free No Win No Fee Consultation
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            No obligation, completely free consultation to assess your unpaid
            invoice recovery UK needs. Upload your invoices and let us show you
            how our commercial debt recovery UK specialists can help.
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
            <div className="bg-white rounded-2xl border border-slate-200 p-8 h-fit">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 mb-1">
                          {info.title}
                        </h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-slate-600 text-sm">
                            {detail}
                          </p>
                        ))}
                        <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors mt-1">
                          {info.action}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="flex items-center space-x-2 text-slate-600 mb-4">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">Business Hours</span>
                </div>
                <div className="space-y-1 text-sm text-slate-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergency Line</span>
                    <span>24/7</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 text-sm font-medium text-center">
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
            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
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
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      {...register("firstName")}
                      className="mt-1"
                    />
                    {errors.firstName && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      {...register("lastName")}
                      className="mt-1"
                    />
                    {errors.lastName && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="mt-1"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      className="mt-1"
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      {...register("company")}
                      className="mt-1"
                    />
                    {errors.company && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.company.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="debtAmount">
                      Approximate Debt Amount (£)
                    </Label>
                    <Input
                      id="debtAmount"
                      {...register("debtAmount")}
                      placeholder="e.g., 5,000"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">
                    Tell us about your situation *
                  </Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    rows={4}
                    placeholder="Please provide details about the debt, debtor, and any previous collection attempts..."
                    className="mt-1"
                  />
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* File Upload */}
                <div>
                  <Label htmlFor="files">Upload Documents (Optional)</Label>
                  <div className="mt-1">
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                      <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                      <p className="text-slate-600 mb-2">
                        Upload invoices, contracts, or other relevant documents
                      </p>
                      <p className="text-sm text-slate-500 mb-4">
                        PDF, DOC, DOCX up to 10MB each
                      </p>
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload">
                        <Button
                          type="button"
                          variant="outline"
                          className="cursor-pointer"
                        >
                          Choose Files
                        </Button>
                      </label>
                    </div>

                    {/* Uploaded Files List */}
                    {uploadedFiles.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {uploadedFiles.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between bg-slate-50 rounded-lg p-3"
                          >
                            <div className="flex items-center space-x-3">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-slate-700">
                                {file.name}
                              </span>
                              <span className="text-xs text-slate-500">
                                ({(file.size / 1024 / 1024).toFixed(1)} MB)
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="text-slate-400 hover:text-red-500 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 transition-colors duration-200"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="w-4 h-4 mr-2" />
                      Send Free Consultation Request
                    </div>
                  )}
                </Button>

                <p className="text-xs text-slate-500 text-center">
                  By submitting this form, you agree to our privacy policy and
                  terms of service. We'll contact you within 24 hours to
                  schedule your free consultation.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
