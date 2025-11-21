// backend/controllers/emailController.js
import formData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(formData);

// --- Fallback: use env OR hard-coded key ---
const FALLBACK_KEY = "fallbackley";
const FALLBACK_DOMAIN = "fallbackdomain";
const FALLBACK_FROM = "fallbackfrom";

const apiKey = process.env.MAILGUN_API_KEY || FALLBACK_KEY;
const domain = process.env.MAILGUN_DOMAIN || FALLBACK_DOMAIN;
const fromEmail = process.env.FROM_EMAIL || FALLBACK_FROM;

console.log("Loaded MAILGUN KEY (length):", apiKey ? apiKey.length : "undefined");
console.log("Using DOMAIN:", domain);
console.log("Using FROM:", fromEmail);

const mg = mailgun.client({
  username: "api",
  key: apiKey,
});

export const sendCampaignEmail = async (req, res) => {
  try {
    const { to, subject, text, html } = req.body;

    if (!to || !subject || (!text && !html)) {
      return res.status(400).json({
        success: false,
        message: "to, subject, text/html required",
      });
    }

    const msgData = {
      from: fromEmail,
      to,
      subject,
      text: text || undefined,
      html: html || undefined,
    };

    const response = await mg.messages.create(domain, msgData);

    return res.json({
      success: true,
      message: "Email sent via Mailgun",
      id: response.id,
      status: response.status,
    });
  } catch (err) {
    console.error("Mailgun Error:", err);
    return res.status(500).json({
      success: false,
      message: "Error sending email",
      error: err.message,
    });
  }
};
