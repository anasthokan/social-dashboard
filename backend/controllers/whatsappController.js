// backend/controllers/whatsappController.js
import Twilio from "twilio";

const accountSid = "Assid";
const authToken = "auth";

const client = Twilio(accountSid, authToken);

export const sendWhatsAppMessage = async (req, res) => {
  try {
    const { to, message } = req.body;

    if (!to || !message) {
      return res.status(400).json({ success: false, message: "to and message required" });
    }

    const response = await client.messages.create({
      from: "whatsapp:+14155238886", // Twilio sandbox number
      to: `whatsapp:${to}`,
      body: message,
    });

    return res.json({ success: true, sid: response.sid });
  } catch (err) {
    console.error("WhatsApp Error:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
};
