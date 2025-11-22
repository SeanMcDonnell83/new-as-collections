export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { firstName, lastName, email, phone, company, debtAmount, message } =
      req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !company || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email address" });
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

    // Send email using a service like SendGrid, Mailgun, or AWS SES
    // For now, we'll use a simple SMTP or webhook approach
    // You should configure your email service here

    // Example using fetch to an email service:
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
      message: "Contact form submitted successfully",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      error: "An error occurred while processing your request",
    });
  }
};
