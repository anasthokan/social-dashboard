import { useState } from "react";
import axios from "axios";

export default function WhatsApp() {
  const [form, setForm] = useState({
    to: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    try {
      const res = await axios.post("http://localhost:5000/api/whatsapp/send", form);

      setResponse(res.data.success ? "Message sent successfully!" : "Failed to send message.");
    } catch (err) {
      setResponse("Error sending message: " + err.message);
    }

    setLoading(false);
  };

  return (
    <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-700/60 shadow-lg p-6">
      
      <h3 className="text-lg font-semibold text-slate-100 mb-4">
        WhatsApp Messaging
      </h3>

      <form onSubmit={handleSend} className="space-y-4 text-sm">

        {/* Receiver Number */}
        <div>
          <label className="text-slate-300">Receiver Number (with country code)</label>
          <input
            type="text"
            name="to"
            placeholder="+91XXXXXXXXXX"
            value={form.to}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 rounded-lg bg-slate-800/50 text-slate-100 border border-slate-700"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className="text-slate-300">Message</label>
          <textarea
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            placeholder="Enter your message..."
            className="w-full mt-1 px-3 py-2 rounded-lg bg-slate-800/50 text-slate-100 border border-slate-700"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          disabled={loading}
          className="w-full py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:opacity-90 transition"
        >
          {loading ? "Sending..." : "Send WhatsApp Message"}
        </button>
      </form>

      {/* Response */}
      {response && (
        <p className="mt-4 text-center font-medium text-indigo-300 bg-slate-800/40 p-2 rounded-lg">
          {response}
        </p>
      )}
    </div>
  );
}
