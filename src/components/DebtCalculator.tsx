import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
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

type ContactFormData = z.infer<typeof contactFormSchema>;

interface DebtCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

const DebtCalculator = ({ isOpen, onClose }: DebtCalculatorProps) => {
  const [activeTab, setActiveTab] = useState<
    "statutory" | "contractual" | "noInterest"
  >("statutory");
  const [isCalculated, setIsCalculated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Statutory Interest State
  const [statutoryData, setStatutoryData] = useState({
    amountOwed: 0,
    numberOfInvoices: 1,
    chargeCompensation: false,
    oldestInvoiceDate: "",
    overdueDate: "",
    invoiceAmounts: [0],
  });

  const [statutoryResults, setStatutoryResults] = useState({
    interest: 0,
    compensation: 0,
    total: 0,
    dailyInterest: 0,
    collectionCosts: 0,
    recoverableCosts: 0,
  });

  // Contractual Interest State
  const [contractualData, setContractualData] = useState({
    amountOwed: 0,
    oldestInvoiceDate: "",
    overdueDate: "",
    interestRate: 0,
    interestPeriod: "annual" as "daily" | "weekly" | "monthly" | "annual",
  });

  const [contractualResults, setContractualResults] = useState({
    interest: 0,
    total: 0,
    collectionCosts: 0,
  });

  // No Interest State
  const [noInterestData, setNoInterestData] = useState({
    amountOwed: 0,
    oldestInvoiceDate: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      consent: false,
    },
  });

  // Calculate Statutory Interest
  const calculateStatutoryInterest = () => {
    if (!statutoryData.oldestInvoiceDate || !statutoryData.overdueDate) {
      toast({
        title: "Missing dates",
        description: "Please enter both invoice date and overdue date",
        variant: "destructive",
      });
      return;
    }

    const startDate = new Date(statutoryData.overdueDate);
    const endDate = new Date();
    const daysDiff = Math.floor(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
    );

    if (daysDiff < 0) {
      toast({
        title: "Invalid dates",
        description: "Overdue date cannot be in the future",
        variant: "destructive",
      });
      return;
    }

    // UK statutory interest rate (8% + base rate, currently around 8.5%)
    const annualRate = 0.085;
    const dailyRate = annualRate / 365;

    const totalAmount = statutoryData.chargeCompensation
      ? statutoryData.invoiceAmounts.reduce((sum, amount) => sum + amount, 0)
      : statutoryData.amountOwed;

    const interest = totalAmount * dailyRate * daysDiff;

    // Late payment compensation
    let compensation = 0;
    if (statutoryData.chargeCompensation) {
      statutoryData.invoiceAmounts.forEach((amount) => {
        if (amount < 1000) compensation += 40;
        else if (amount < 10000) compensation += 70;
        else compensation += 100;
      });
    }

    const collectionCosts = totalAmount * 0.15; // 15% collection fee
    const recoverableCosts = Math.min(collectionCosts, totalAmount * 0.08); // Up to 8% recoverable

    setStatutoryResults({
      interest: Math.round(interest * 100) / 100,
      compensation,
      total: Math.round((totalAmount + interest + compensation) * 100) / 100,
      dailyInterest: Math.round(totalAmount * dailyRate * 100) / 100,
      collectionCosts: Math.round(collectionCosts * 100) / 100,
      recoverableCosts: Math.round(recoverableCosts * 100) / 100,
    });

    setIsCalculated(true);
  };

  // Calculate Contractual Interest
  const calculateContractualInterest = () => {
    if (!contractualData.oldestInvoiceDate || !contractualData.overdueDate) {
      toast({
        title: "Missing dates",
        description: "Please enter both invoice date and overdue date",
        variant: "destructive",
      });
      return;
    }

    const startDate = new Date(contractualData.overdueDate);
    const endDate = new Date();
    const daysDiff = Math.floor(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
    );

    if (daysDiff < 0) {
      toast({
        title: "Invalid dates",
        description: "Overdue date cannot be in the future",
        variant: "destructive",
      });
      return;
    }

    let periodicRate = contractualData.interestRate / 100;
    let periods = daysDiff;

    switch (contractualData.interestPeriod) {
      case "daily":
        break;
      case "weekly":
        periodicRate = periodicRate / 7;
        break;
      case "monthly":
        periodicRate = periodicRate / 30;
        break;
      case "annual":
        periodicRate = periodicRate / 365;
        break;
    }

    const interest = contractualData.amountOwed * periodicRate * periods;
    const collectionCosts = contractualData.amountOwed * 0.15;

    setContractualResults({
      interest: Math.round(interest * 100) / 100,
      total: Math.round((contractualData.amountOwed + interest) * 100) / 100,
      collectionCosts: Math.round(collectionCosts * 100) / 100,
    });

    setIsCalculated(true);
  };

  // Calculate Commission (No Interest)
  const calculateCommission = () => {
    setIsCalculated(true);
  };

  const onSubmit = async (data: ContactFormData) => {
    if (!isCalculated) {
      toast({
        title: "Please calculate first",
        description: "You must calculate the debt before submitting",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      let calculationDetails = "";

      if (activeTab === "statutory") {
        calculationDetails = `
STATUTORY INTEREST CALCULATION
Amount Owed: £${statutoryData.amountOwed.toLocaleString()}
Number of Invoices: ${statutoryData.numberOfInvoices}
Charge Compensation: ${statutoryData.chargeCompensation ? "Yes" : "No"}
Oldest Invoice Date: ${statutoryData.oldestInvoiceDate}
Overdue Date: ${statutoryData.overdueDate}

RESULTS:
Interest: £${statutoryResults.interest.toLocaleString()}
Late Payment Compensation: £${statutoryResults.compensation.toLocaleString()}
Total: £${statutoryResults.total.toLocaleString()}
Daily Interest: £${statutoryResults.dailyInterest.toLocaleString()}
Collection Costs: £${statutoryResults.collectionCosts.toLocaleString()}
Recoverable Costs: £${statutoryResults.recoverableCosts.toLocaleString()}
        `;
      } else if (activeTab === "contractual") {
        calculationDetails = `
CONTRACTUAL INTEREST CALCULATION
Amount Owed: £${contractualData.amountOwed.toLocaleString()}
Oldest Invoice Date: ${contractualData.oldestInvoiceDate}
Overdue Date: ${contractualData.overdueDate}
Interest Rate: ${contractualData.interestRate}% ${contractualData.interestPeriod}

RESULTS:
Interest: £${contractualResults.interest.toLocaleString()}
Total: £${contractualResults.total.toLocaleString()}
Collection Costs: £${contractualResults.collectionCosts.toLocaleString()}
        `;
      } else {
        calculationDetails = `
NO INTEREST COLLECTION
Amount Owed: £${noInterestData.amountOwed.toLocaleString()}
Oldest Invoice Date: ${noInterestData.oldestInvoiceDate}
Commission: No collection, no fee basis
        `;
      }

      const emailBody = `
DEBT RECOVERY CALCULATION SUBMISSION

${calculationDetails}

CONTACT DETAILS:
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Comments: ${data.comments || "None"}

Submitted: ${new Date().toLocaleString("en-GB")}
      `;

      const response = await fetch("/api/submit-debt-calculation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: activeTab,
          calculationData:
            activeTab === "statutory"
              ? statutoryData
              : activeTab === "contractual"
                ? contractualData
                : noInterestData,
          results:
            activeTab === "statutory"
              ? statutoryResults
              : activeTab === "contractual"
                ? contractualResults
                : null,
          contactData: data,
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
      setIsCalculated(false);
      onClose();
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again or call us directly at 0151 329 0946.",
        variant: "destructive",
      });
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
          className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[95vh] overflow-y-auto"
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

          {/* Tab Navigation */}
          <div className="border-b border-slate-200">
            <div className="flex">
              <button
                onClick={() => {
                  setActiveTab("statutory");
                  setIsCalculated(false);
                }}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === "statutory"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                Statutory Interest
              </button>
              <button
                onClick={() => {
                  setActiveTab("contractual");
                  setIsCalculated(false);
                }}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === "contractual"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                Contractual Interest
              </button>
              <button
                onClick={() => {
                  setActiveTab("noInterest");
                  setIsCalculated(false);
                }}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === "noInterest"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                No Interest
              </button>
            </div>
          </div>

          <div className="p-6">
            {/* Statutory Interest Tab */}
            {activeTab === "statutory" && (
              <div>
                <div className="mb-6">
                  <p className="text-slate-600 mb-4">
                    Our statutory interest calculator will determine the
                    statutory interest and late payment compensation you are
                    entitled to charge. If you have contractual interest
                    provisions, please use the Contractual Interest tab above.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="statutory-amount">Amount Owed (£)</Label>
                      <Input
                        id="statutory-amount"
                        type="number"
                        step="0.01"
                        value={statutoryData.amountOwed}
                        onChange={(e) =>
                          setStatutoryData((prev) => ({
                            ...prev,
                            amountOwed: parseFloat(e.target.value) || 0,
                          }))
                        }
                      />
                    </div>

                    <div>
                      <Label htmlFor="invoice-count">
                        How Many Invoices Does This Debt Relate To?
                      </Label>
                      <Input
                        id="invoice-count"
                        type="number"
                        min="1"
                        value={statutoryData.numberOfInvoices}
                        onChange={(e) => {
                          const count = parseInt(e.target.value) || 1;
                          setStatutoryData((prev) => ({
                            ...prev,
                            numberOfInvoices: count,
                            invoiceAmounts: new Array(count).fill(
                              prev.amountOwed / count,
                            ),
                          }));
                        }}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="charge-compensation"
                        checked={statutoryData.chargeCompensation}
                        onCheckedChange={(checked) =>
                          setStatutoryData((prev) => ({
                            ...prev,
                            chargeCompensation: !!checked,
                          }))
                        }
                      />
                      <Label htmlFor="charge-compensation">
                        Do you want to charge late payment compensation on each
                        invoice?
                      </Label>
                    </div>

                    {statutoryData.chargeCompensation && (
                      <div>
                        <Label>Please enter the amount for each invoice</Label>
                        {statutoryData.invoiceAmounts.map((amount, index) => (
                          <Input
                            key={index}
                            type="number"
                            step="0.01"
                            value={amount}
                            onChange={(e) => {
                              const newAmounts = [
                                ...statutoryData.invoiceAmounts,
                              ];
                              newAmounts[index] =
                                parseFloat(e.target.value) || 0;
                              setStatutoryData((prev) => ({
                                ...prev,
                                invoiceAmounts: newAmounts,
                              }));
                            }}
                            className="mt-2"
                            placeholder={`Invoice ${index + 1} amount`}
                          />
                        ))}
                        <div className="mt-2 text-sm text-slate-600">
                          Total: £
                          {statutoryData.invoiceAmounts
                            .reduce((sum, amount) => sum + amount, 0)
                            .toLocaleString()}
                        </div>
                      </div>
                    )}

                    <div>
                      <Label htmlFor="oldest-invoice">
                        Oldest Invoice Date
                      </Label>
                      <Input
                        id="oldest-invoice"
                        type="date"
                        value={statutoryData.oldestInvoiceDate}
                        onChange={(e) =>
                          setStatutoryData((prev) => ({
                            ...prev,
                            oldestInvoiceDate: e.target.value,
                          }))
                        }
                      />
                    </div>

                    <div>
                      <Label htmlFor="overdue-date">
                        Date Payment Became Overdue
                      </Label>
                      <Input
                        id="overdue-date"
                        type="date"
                        value={statutoryData.overdueDate}
                        onChange={(e) =>
                          setStatutoryData((prev) => ({
                            ...prev,
                            overdueDate: e.target.value,
                          }))
                        }
                      />
                    </div>

                    <Button
                      onClick={calculateStatutoryInterest}
                      className="w-full"
                    >
                      Calculate Interest
                    </Button>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Results</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Interest (£)</span>
                        <span>
                          £{statutoryResults.interest.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Late Payment Compensation (£)</span>
                        <span>
                          £{statutoryResults.compensation.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between font-semibold text-lg border-t pt-3">
                        <span>Total (£)</span>
                        <span>£{statutoryResults.total.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm text-slate-600">
                        <span>Daily interest amount (£)</span>
                        <span>
                          £{statutoryResults.dailyInterest.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm text-slate-600">
                        <span>Successful collection cost (£)*</span>
                        <span>
                          £{statutoryResults.collectionCosts.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm text-slate-600">
                        <span>Recoverable costs (£)</span>
                        <span>
                          £{statutoryResults.recoverableCosts.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 rounded text-sm text-blue-800">
                      <strong>Please Note:</strong> The Late Payment of
                      Commercial Debts (Interest) Act 1998 only applies to
                      business-to-business transactions. You cannot claim
                      interest or compensation from a private individual.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Contractual Interest Tab */}
            {activeTab === "contractual" && (
              <div>
                <div className="mb-6">
                  <p className="text-slate-600 mb-4">
                    If you have not made provision for charging interest on late
                    payment in your contract with the debtor, please use the
                    Statutory Interest Calculator tab above.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="contractual-amount">
                        Amount Owed (£)
                      </Label>
                      <Input
                        id="contractual-amount"
                        type="number"
                        step="0.01"
                        value={contractualData.amountOwed}
                        onChange={(e) =>
                          setContractualData((prev) => ({
                            ...prev,
                            amountOwed: parseFloat(e.target.value) || 0,
                          }))
                        }
                      />
                    </div>

                    <div>
                      <Label htmlFor="contractual-oldest">
                        Oldest Invoice Date
                      </Label>
                      <Input
                        id="contractual-oldest"
                        type="date"
                        value={contractualData.oldestInvoiceDate}
                        onChange={(e) =>
                          setContractualData((prev) => ({
                            ...prev,
                            oldestInvoiceDate: e.target.value,
                          }))
                        }
                      />
                    </div>

                    <div>
                      <Label htmlFor="contractual-overdue">
                        Date Payment Became Overdue
                      </Label>
                      <Input
                        id="contractual-overdue"
                        type="date"
                        value={contractualData.overdueDate}
                        onChange={(e) =>
                          setContractualData((prev) => ({
                            ...prev,
                            overdueDate: e.target.value,
                          }))
                        }
                      />
                    </div>

                    <div>
                      <Label htmlFor="interest-rate">
                        Stipulated Contractual Interest Rate
                      </Label>
                      <Input
                        id="interest-rate"
                        type="number"
                        step="0.01"
                        value={contractualData.interestRate}
                        onChange={(e) =>
                          setContractualData((prev) => ({
                            ...prev,
                            interestRate: parseFloat(e.target.value) || 0,
                          }))
                        }
                      />
                    </div>

                    <div>
                      <Label>
                        Is the interest rate daily, weekly, monthly or annual?
                      </Label>
                      <div className="flex space-x-4 mt-2">
                        {["daily", "weekly", "monthly", "annual"].map(
                          (period) => (
                            <label
                              key={period}
                              className="flex items-center space-x-2"
                            >
                              <input
                                type="radio"
                                name="interest-period"
                                value={period}
                                checked={
                                  contractualData.interestPeriod === period
                                }
                                onChange={(e) =>
                                  setContractualData((prev) => ({
                                    ...prev,
                                    interestPeriod: e.target.value as any,
                                  }))
                                }
                              />
                              <span className="capitalize">{period}</span>
                            </label>
                          ),
                        )}
                      </div>
                    </div>

                    <Button
                      onClick={calculateContractualInterest}
                      className="w-full"
                    >
                      Calculate Interest
                    </Button>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Results</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Interest (£)</span>
                        <span>
                          £{contractualResults.interest.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between font-semibold text-lg border-t pt-3">
                        <span>Total (£)</span>
                        <span>
                          £{contractualResults.total.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm text-slate-600">
                        <span>Successful collection cost (£)*</span>
                        <span>
                          £{contractualResults.collectionCosts.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* No Interest Tab */}
            {activeTab === "noInterest" && (
              <div>
                <div className="mb-6">
                  <p className="text-slate-600 mb-4">
                    Struggling to get paid? Our team of collection experts have
                    years of experience in recovering debts across all
                    industries. Our 'no collection, no fee' service is
                    proactive, professional and effective.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="no-interest-amount">
                        Amount Owed (£)
                      </Label>
                      <Input
                        id="no-interest-amount"
                        type="number"
                        step="0.01"
                        value={noInterestData.amountOwed}
                        onChange={(e) =>
                          setNoInterestData((prev) => ({
                            ...prev,
                            amountOwed: parseFloat(e.target.value) || 0,
                          }))
                        }
                      />
                    </div>

                    <div>
                      <Label htmlFor="no-interest-oldest">
                        Oldest Invoice Date
                      </Label>
                      <Input
                        id="no-interest-oldest"
                        type="date"
                        value={noInterestData.oldestInvoiceDate}
                        onChange={(e) =>
                          setNoInterestData((prev) => ({
                            ...prev,
                            oldestInvoiceDate: e.target.value,
                          }))
                        }
                      />
                    </div>

                    <Button onClick={calculateCommission} className="w-full">
                      Calculate Commission
                    </Button>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      No Win, No Fee Service
                    </h3>
                    <div className="space-y-3 text-slate-700">
                      <p>
                        Debt Amount: £
                        {noInterestData.amountOwed.toLocaleString()}
                      </p>
                      <p>Commission: No collection, no fee</p>
                      <p>Success Rate: 98%</p>
                      <p>Average Recovery Time: 14 days</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Form - Only show after calculation */}
            {isCalculated && (
              <div className="border-t border-slate-200 pt-8 mt-8">
                <h3 className="text-xl font-semibold text-slate-900 font-sans mb-6">
                  Submit Your Debt for Recovery
                </h3>

                <form onSubmit={handleSubmit(onSubmit)}>
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
                      onCheckedChange={(checked) =>
                        setValue("consent", !!checked)
                      }
                    />
                    <Label
                      htmlFor="consent"
                      className="text-sm text-slate-600 leading-relaxed"
                    >
                      I consent to having my debt information reviewed by the
                      debt collection team at A.S. Collections. *
                    </Label>
                  </div>
                  {errors.consent && (
                    <p className="text-red-600 text-sm mt-1 ml-6">
                      {errors.consent.message}
                    </p>
                  )}

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
                        "Submit for Recovery"
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DebtCalculator;
