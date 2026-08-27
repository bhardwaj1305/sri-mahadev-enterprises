const express = require("express");
const Lead = require("../models/Lead");
const { Resend } = require("resend");

const router = express.Router();

const resend = new Resend(process.env.RESEND_API_KEY);
router.post("/", async (req, res) => {
  try {
    const lead = await Lead.create(req.body);

    const { data, error } = await resend.emails.send({
      from: "Sri Mahadev Enterprises <noreply@srimahadeventerprises.com>",
      to: ["ampol.eswar@gmail.com"],
      subject: `New Pricing Request - ${lead.product || "Product Enquiry"}`,
      html: `
        <h2>New Pricing Request</h2>

        <p><strong>Name:</strong> ${lead.name}</p>
        <p><strong>Phone:</strong> ${lead.phone}</p>
        <p><strong>Email:</strong> ${lead.email}</p>
        <p><strong>Business Name:</strong> ${lead.businessName || "Not provided"}</p>
        <p><strong>City:</strong> ${lead.city || "Not provided"}</p>
        <p><strong>State:</strong> ${lead.state || "Not provided"}</p>
        <p><strong>Business Type:</strong> ${lead.businessType || "Not provided"}</p>
        <p><strong>Product:</strong> ${lead.product || "Not specified"}</p>
        <p><strong>Message:</strong> ${lead.message || "No message"}</p>
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);

      return res.status(500).json({
        success: false,
        message: "Request saved, but email failed",
        error: error.message,
      });
    }

    // Send confirmation email to customer
await resend.emails.send({
  from: "Sri Mahadev Enterprises <noreply@srimahadeventerprises.com>",
  to: [lead.email],
  subject: "Thank you for contacting Sri Mahadev Enterprises",
  html: `
    <h2>Thank you for your enquiry!</h2>

    <p>Hi ${lead.name},</p>

    <p>
      Thank you for contacting <strong>Sri Mahadev Enterprises</strong>.
    </p>

    <p>
      We have received your pricing request for
      <strong>${lead.product || "our products"}</strong>.
    </p>

    <p>
      Our team will review your request and contact you shortly.
    </p>

    <br>

    <p>
      Regards,<br>
      <strong>Sri Mahadev Enterprises</strong>
    </p>
  `,
});

    res.status(201).json({
      success: true,
      message: "Pricing request submitted successfully",
      lead,
    });

  } catch (error) {
    console.error("LEAD ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to submit pricing request",
    });
  }
});
module.exports = router;