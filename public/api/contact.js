// Contact form API endpoint
// Handles form submissions and sends them to the configured email service

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, error: "Method not allowed" });
  }

  try {
    const { firstName, lastName, email, phone, company, debtAmount, message } =
      req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !company || !message) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: "Invalid email address",
      });
    }

    // Prepare email body
    const emailBody = `
New Debt Enquiry from A.S. Collections Website

CONTACT DETAILS:
Name: ${firstName} ${lastName}
Company: ${company}
Email: ${email}
Phone: ${phone}
Debt Amount: ${debtAmount ? `£${debtAmount}` : "Not specified"}

MESSAGE:
${message}

ADDITIONAL INFORMATION:
- Submitted: ${new Date().toLocaleString("en-GB")}
- Source: A.S. Collections Website Contact Form

Please respond to this enquiry within 2 hours as per our service commitment.

Best regards,
A.S. Collections Website System
    `.trim();

    // TODO: Configure email service integration
    // Example using fetch to an email service like SendGrid, Mailgun, or AWS SES:
    // const emailResponse = await fetch("https://your-email-service/send", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     to: "info@ascollections.co.uk",
    //     from: "noreply@ascollections.co.uk",
    //     subject: `New Debt Enquiry - ${company}`,
    //     text: emailBody,
    //     replyTo: email,
    //   }),
    // });

    // For development/testing, log the submission
    console.log("Contact form submission:", {
      firstName,
      lastName,
      email,
      phone,
      company,
      debtAmount,
      message,
      timestamp: new Date().toISOString(),
    });

    // Return success response
    return res.status(200).json({
      success: true,
      message:
        "Contact form submitted successfully. We'll be in touch shortly.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      success: false,
      error: "An error occurred while processing your request",
    });
  }
}
