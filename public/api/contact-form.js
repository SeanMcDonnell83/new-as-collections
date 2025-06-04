// Contact form API endpoint
// This would typically be implemented with a proper backend framework

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Parse form data (in real implementation, use proper multipart parser)
    const formData = req.body;

    // Extract form fields
    const contactData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      debtAmount: formData.get("debtAmount"),
      message: formData.get("message"),
      fileCount: parseInt(formData.get("fileCount")) || 0,
    };

    // Process uploaded files
    const files = [];
    for (let i = 0; i < contactData.fileCount; i++) {
      const file = formData.get(`file_${i}`);
      if (file) {
        files.push({
          name: file.name,
          size: file.size,
          type: file.type,
        });
      }
    }

    // Create email content
    const emailContent = `
New Debt Enquiry Submission

CONTACT DETAILS:
Name: ${contactData.firstName} ${contactData.lastName}
Company: ${contactData.company}
Email: ${contactData.email}
Phone: ${contactData.phone}
Debt Amount: £${contactData.debtAmount || "Not specified"}

MESSAGE:
${contactData.message}

FILES ATTACHED: ${files.length}
${files.map((f) => `- ${f.name} (${(f.size / 1024).toFixed(1)}KB, ${f.type})`).join("\n")}

Submitted: ${new Date().toLocaleString("en-GB")}
Source: AS Collections Website Contact Form
    `;

    // In a real implementation, you would:
    // 1. Save files to secure storage (AWS S3, etc.)
    // 2. Send email via service (SendGrid, AWS SES, etc.)
    // 3. Store contact in database
    // 4. Send confirmation email to customer

    console.log("Contact form submission processed:", {
      contactData,
      filesCount: files.length,
      timestamp: new Date().toISOString(),
    });

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return res.status(200).json({
      success: true,
      message: "Contact form submitted successfully",
      enquiryId: `ENQ-${Date.now()}`,
    });
  } catch (error) {
    console.error("Contact form processing error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
