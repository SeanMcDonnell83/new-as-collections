import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X, Calculator, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const debtCalculatorSchema = z.object({
  debtAmount: z.number().min(1, "Please enter a valid debt amount"),
  interestRate: z
    .number()
    .min(0)
    .max(50, "Interest rate must be between 0-50%"),
  monthlyPayment: z.number().min(1, "Please enter a valid monthly payment"),
  repaymentTerm: z
    .number()
    .min(1)
    .max(360, "Repayment term must be between 1-360 months"),
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  comments: z.string().optional(),
  consent: z
    .boolean()
    .refine(
      (val) => val === true,
      "You must consent to debt information review",
    ),
});

type DebtCalculatorData = z.infer<typeof debtCalculatorSchema>;

interface DebtCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

const DebtCalculator = ({ isOpen, onClose }: DebtCalculatorProps) => {
  const [calculations, setCalculations] = useState({
    totalInterest: 0,
    totalAmount: 0,
    actualRepaymentTime: 0,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    setValue,
  } = useForm<DebtCalculatorData>({
    resolver: zodResolver(debtCalculatorSchema),
    defaultValues: {
      debtAmount: 10000,
      interestRate: 8,
      monthlyPayment: 500,
      repaymentTerm: 24,
      consent: false,
    },
  });

  const watchedValues = watch([
    "debtAmount",
    "interestRate",
    "monthlyPayment",
    "repaymentTerm",
  ]);

  useEffect(() => {
    const [debtAmount, interestRate, monthlyPayment, repaymentTerm] =
      watchedValues;

    if (
      debtAmount &&
      interestRate !== undefined &&
      monthlyPayment &&
      repaymentTerm
    ) {
      calculateDebt(debtAmount, interestRate, monthlyPayment, repaymentTerm);
    }
  }, [watchedValues]);

  const calculateDebt = (
    principal: number,
    annualRate: number,
    payment: number,
    term: number,
  ) => {
    const monthlyRate = annualRate / 100 / 12;

    if (monthlyRate === 0) {
      // No interest case
      const actualTime = principal / payment;
      setCalculations({
        totalInterest: 0,
        totalAmount: principal,
        actualRepaymentTime: Math.ceil(actualTime),
      });
      return;
    }

    // Calculate actual repayment time needed
    let remainingBalance = principal;
    let months = 0;
    let totalInterestPaid = 0;

    while (remainingBalance > 0.01 && months < 600) {
      // Safety limit
      const interestPayment = remainingBalance * monthlyRate;
      const principalPayment = Math.min(
        payment - interestPayment,
        remainingBalance,
      );

      if (principalPayment <= 0) {
        // Payment too low to cover interest
        months = -1;
        break;
      }

      totalInterestPaid += interestPayment;
      remainingBalance -= principalPayment;
      months++;
    }

    setCalculations({
      totalInterest: totalInterestPaid,
      totalAmount: principal + totalInterestPaid,
      actualRepaymentTime: months,
    });
  };

  const onSubmit = async (data: DebtCalculatorData) => {
    setIsSubmitting(true);

    try {
      // Create comprehensive email body
      const emailBody = `
DEBT RECOVERY CALCULATION REQUEST

=== DEBT CALCULATION DETAILS ===
Original Debt Amount: £${data.debtAmount.toLocaleString()}
Interest Rate: ${data.interestRate}% per annum
Proposed Monthly Payment: £${data.monthlyPayment.toLocaleString()}
Proposed Repayment Term: ${data.repaymentTerm} months

=== CALCULATED RESULTS ===
Estimated Repayment Time: ${calculations.actualRepaymentTime > 0 ? `${calculations.actualRepaymentTime} months` : "Unable to calculate (payment too low)"}
Total Interest Payable: £${calculations.totalInterest.toLocaleString(undefined, { maximumFractionDigits: 2 })}
Total Amount to be Paid: £${calculations.totalAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}

=== CONTACT INFORMATION ===
Full Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}

=== ADDITIONAL COMMENTS ===
${data.comments || "No additional comments provided"}

=== CONSENT ===
Consent to debt information review: ${data.consent ? "YES" : "NO"}

This enquiry was submitted on ${new Date().toLocaleString("en-GB")} via the AS Collections debt calculator.
      `.trim();

      // Send to backend API (mock for now - in real implementation, this would be a proper API endpoint)
      const response = await fetch("/api/submit-debt-calculation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          calculationData: data,
          results: calculations,
          emailBody,
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      toast({
        title: "Calculation submitted successfully!",
        description:
          "Our debt recovery specialists will review your case and contact you within 24 hours.",
      });

      reset();
      onClose();
    } catch (error) {
      // Fallback to email client if API fails
      const emailSubject = `Debt Recovery Calculation - ${data.fullName}`;
      const mailtoLink = `mailto:info@ascollections.co.uk?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

      window.location.href = mailtoLink;

      toast({
        title: "Email client opened",
        description:
          "Please send the email from your email client to complete your enquiry.",
      });

      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Calculator className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 font-serif">
                  Debt Recovery Calculator
                </h2>
                <p className="text-slate-600 font-sans">
                  Calculate your debt recovery options
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-slate-500" />
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-6">
            {/* Calculator Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Input Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-slate-900 font-sans">
                  Debt Information
                </h3>

                <div>
                  <Label
                    htmlFor="debtAmount"
                    className="flex items-center space-x-2"
                  >
                    <span>Total Debt Amount (£)</span>
                    <div className="group relative">
                      <Info className="w-4 h-4 text-slate-400" />
                      <div className="absolute bottom-6 left-0 bg-slate-800 text-white text-xs p-2 rounded hidden group-hover:block w-48 z-10">
                        Enter the full amount owed by the debtor
                      </div>
                    </div>
                  </Label>
                  <Input
                    id="debtAmount"
                    type="number"
                    step="0.01"
                    {...register("debtAmount", { valueAsNumber: true })}
                    className="mt-1"
                  />
                  {errors.debtAmount && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.debtAmount.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="interestRate"
                    className="flex items-center space-x-2"
                  >
                    <span>Interest Rate (% per annum)</span>
                    <div className="group relative">
                      <Info className="w-4 h-4 text-slate-400" />
                      <div className="absolute bottom-6 left-0 bg-slate-800 text-white text-xs p-2 rounded hidden group-hover:block w-48 z-10">
                        Annual interest rate applicable to the debt
                      </div>
                    </div>
                  </Label>
                  <Input
                    id="interestRate"
                    type="number"
                    step="0.01"
                    {...register("interestRate", { valueAsNumber: true })}
                    className="mt-1"
                  />
                  {errors.interestRate && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.interestRate.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="monthlyPayment"
                    className="flex items-center space-x-2"
                  >
                    <span>Proposed Monthly Payment (£)</span>
                    <div className="group relative">
                      <Info className="w-4 h-4 text-slate-400" />
                      <div className="absolute bottom-6 left-0 bg-slate-800 text-white text-xs p-2 rounded hidden group-hover:block w-48 z-10">
                        Amount the debtor can pay monthly
                      </div>
                    </div>
                  </Label>
                  <Input
                    id="monthlyPayment"
                    type="number"
                    step="0.01"
                    {...register("monthlyPayment", { valueAsNumber: true })}
                    className="mt-1"
                  />
                  {errors.monthlyPayment && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.monthlyPayment.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="repaymentTerm"
                    className="flex items-center space-x-2"
                  >
                    <span>Proposed Repayment Term (months)</span>
                    <div className="group relative">
                      <Info className="w-4 h-4 text-slate-400" />
                      <div className="absolute bottom-6 left-0 bg-slate-800 text-white text-xs p-2 rounded hidden group-hover:block w-48 z-10">
                        Desired timeframe for full repayment
                      </div>
                    </div>
                  </Label>
                  <Input
                    id="repaymentTerm"
                    type="number"
                    {...register("repaymentTerm", { valueAsNumber: true })}
                    className="mt-1"
                  />
                  {errors.repaymentTerm && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.repaymentTerm.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Results Section */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-900 font-sans mb-6">
                  Calculation Results
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="text-slate-600">
                      Estimated Repayment Time:
                    </span>
                    <span className="font-semibold text-slate-900">
                      {calculations.actualRepaymentTime > 0
                        ? `${calculations.actualRepaymentTime} months`
                        : "Unable to calculate"}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="text-slate-600">Total Interest:</span>
                    <span className="font-semibold text-slate-900">
                      £
                      {calculations.totalInterest.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-600">Total Amount:</span>
                    <span className="font-bold text-lg text-blue-600">
                      £
                      {calculations.totalAmount.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                </div>

                {calculations.actualRepaymentTime <= 0 && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 text-sm">
                      ⚠️ Monthly payment is too low to cover interest charges.
                      Please increase the monthly payment amount.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="border-t border-slate-200 pt-8">
              <h3 className="text-xl font-semibold text-slate-900 font-sans mb-6">
                Get Professional Debt Recovery Assistance
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    {...register("fullName")}
                    className="mt-1"
                  />
                  {errors.fullName && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

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
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="comments">Additional Comments</Label>
                  <Textarea
                    id="comments"
                    {...register("comments")}
                    rows={3}
                    className="mt-1"
                    placeholder="Tell us about the debt situation..."
                  />
                </div>
              </div>

              <div className="flex items-start space-x-3 mt-6">
                <Checkbox
                  id="consent"
                  checked={watch("consent")}
                  onCheckedChange={(checked) => setValue("consent", !!checked)}
                />
                <Label
                  htmlFor="consent"
                  className="text-sm text-slate-600 leading-relaxed"
                >
                  I consent to having my debt information reviewed by the debt
                  collection team at A.S. Collections. This information will be
                  used to provide personalized debt recovery advice and
                  services. *
                </Label>
              </div>
              {errors.consent && (
                <p className="text-red-600 text-sm mt-1 ml-6">
                  {errors.consent.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4 mt-8">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="px-6 py-2"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </div>
                ) : (
                  "Submit Calculation"
                )}
              </Button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DebtCalculator;
