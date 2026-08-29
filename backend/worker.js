import { MongoClient } from "mongodb";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // CORS
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    // Health check
    if (request.method === "GET" && url.pathname === "/") {
      return Response.json(
        {
          success: true,
          message: "Sri Mahadev Enterprises API is running",
        },
        { headers: corsHeaders }
      );
    }

    // Create lead
    if (request.method === "POST" && url.pathname === "/api/leads") {
      try {
        const body = await request.json();

        const {
          name,
          phone,
          email,
          businessName,
          businessType,
          product,
          message,
        } = body;

        // Basic validation
        if (!name || !phone || !email || !businessType || !product) {
          return Response.json(
            {
              success: false,
              message: "Please fill all required fields.",
            },
            {
              status: 400,
              headers: corsHeaders,
            }
          );
        }

        // MongoDB
        const client = new MongoClient(env.MONGO_URI);

        await client.connect();

        const db = client.db();
        const leads = db.collection("leads");

        const lead = {
          name: String(name).trim(),
          phone: String(phone).trim(),
          email: String(email).trim().toLowerCase(),
          businessName: businessName
            ? String(businessName).trim()
            : "",
          businessType: String(businessType).trim(),
          product: String(product).trim(),
          message: message ? String(message).trim() : "",
          createdAt: new Date(),
          updatedAt: new Date(),
        };

        const result = await leads.insertOne(lead);

        await client.close();

        // Send email to business using Resend API
        const businessEmail = await fetch(
          "https://api.resend.com/emails",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${env.RESEND_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: "Sri Mahadev Enterprises <noreply@srimahadeventerprises.com>",
              to: ["ampol.eswar@gmail.com"],
              subject: `New Pricing Request - ${
                lead.product || "Product Enquiry"
              }`,
              html: `
                <h2>New Pricing Request</h2>

                <p><strong>Name:</strong> ${lead.name}</p>
                <p><strong>Phone:</strong> ${lead.phone}</p>
                <p><strong>Email:</strong> ${lead.email}</p>
                <p><strong>Business Name:</strong> ${
                  lead.businessName || "Not provided"
                }</p>
                <p><strong>Business Type:</strong> ${
                  lead.businessType || "Not provided"
                }</p>
                <p><strong>Product:</strong> ${
                  lead.product || "Not specified"
                }</p>
                <p><strong>Message:</strong> ${
                  lead.message || "No message"
                }</p>
              `,
            }),
          }
        );

        // Customer confirmation email
        const customerEmail = await fetch(
          "https://api.resend.com/emails",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${env.RESEND_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: "Sri Mahadev Enterprises <noreply@srimahadeventerprises.com>",
              to: [lead.email],
              subject:
                "Thank you for contacting Sri Mahadev Enterprises",
              html: `
                <h2>Thank you for your enquiry!</h2>

                <p>Hi ${lead.name},</p>

                <p>
                  Thank you for contacting
                  <strong>Sri Mahadev Enterprises</strong>.
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
            }),
          }
        );

        if (!businessEmail.ok || !customerEmail.ok) {
          return Response.json(
            {
              success: true,
              message:
                "Request saved, but email delivery failed.",
              leadId: result.insertedId,
            },
            {
              status: 201,
              headers: corsHeaders,
            }
          );
        }

        return Response.json(
          {
            success: true,
            message: "Pricing request submitted successfully",
            leadId: result.insertedId,
          },
          {
            status: 201,
            headers: corsHeaders,
          }
        );
      } catch (error) {
        console.error("LEAD ERROR:", error);

        return Response.json(
          {
            success: false,
            message: "Failed to submit pricing request",
          },
          {
            status: 500,
            headers: corsHeaders,
          }
        );
      }
    }

    return Response.json(
      {
        success: false,
        message: "Route not found",
      },
      {
        status: 404,
        headers: corsHeaders,
      }
    );
  },
};
