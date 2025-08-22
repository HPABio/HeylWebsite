import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();

    // Extract form data
    const firstName = data.get("firstName") as string;
    const lastName = data.get("lastName") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const subject = data.get("subject") as string;
    const message = data.get("message") as string;
    const privacy = data.get("privacy") as string;

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message || !privacy) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Bitte füllen Sie alle erforderlichen Felder aus.",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password (not regular password)
      },
    });

    // Email content
    const subjectMap: { [key: string]: string } = {
      "tour-booking": "Tour-Buchung",
      "tour-inquiry": "Tour-Anfrage",
      "group-booking": "Gruppenbuchung",
      "custom-tour": "Individuelle Tour",
      general: "Allgemeine Anfrage",
    };

    const emailSubject = `Neue Kontaktanfrage: ${
      subjectMap[subject] || subject
    }`;

    const emailBody = `
Neue Kontaktanfrage von der Website:

Name: ${firstName} ${lastName}
E-Mail: ${email}
Telefon: ${phone || "Nicht angegeben"}
Betreff: ${subjectMap[subject] || subject}

Nachricht:
${message}

---
Diese Nachricht wurde automatisch von der Website heyl-weintouren.de gesendet.
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "hendrikcooper@gmx.de", // Your email address
      subject: emailSubject,
      text: emailBody,
      replyTo: email, // So you can reply directly to the sender
    });

    return new Response(
      JSON.stringify({
        success: true,
        message:
          "Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message:
          "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
