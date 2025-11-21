import { useState } from "react";
import { sendEmail } from "../../services/emailApi";

export default function CampaignForm({ onCreate }) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("email");
  const [description, setDescription] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [emailTarget, setEmailTarget] = useState(""); // only for email
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Step 1: Create campaign according to backend schema
      const campaignData = {
        title,
        type,
        description,
        scheduleDate: scheduleDate || null,
        status: "Active",
      };

      const createdCampaign = await onCreate(campaignData);

      // Step 2: If email → send via Mailgun
      if (type === "email" && emailTarget.trim()) {
        try {
          await sendEmail({
            to: emailTarget,
            subject: title,
            text: description,
          });

          alert("Email Sent Successfully!");
        } catch (err) {
          console.error("Email Error:", err);
          alert("Mailgun error! Check backend logs.");
        }
      }

      // Step 3: Reset form
      setTitle("");
      setType("email");
      setDescription("");
      setScheduleDate("");
      setEmailTarget("");

    } catch (err) {
      console.error("Campaign Create Error:", err);
      alert("Error creating campaign.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-700/60 shadow-lg p-6">
      <h3 className="text-lg font-semibold text-slate-100 mb-4">
        Create New Campaign
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
        
        {/* Title */}
        <div>
          <label className="text-slate-300">Campaign Title</label>
          <input
            className="w-full mt-1 px-3 py-2 rounded-lg bg-slate-800/50 text-slate-100 border border-slate-700"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Type */}
        <div>
          <label className="text-slate-300">Campaign Type</label>
          <select
            className="w-full mt-1 px-3 py-2 rounded-lg bg-slate-800/50 text-slate-100 border border-slate-700"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="email">Email</option>
            <option value="social">Social Media</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
        </div>

        {/* Email Target (only if email channel) */}
        {type === "email" && (
          <div>
            <label className="text-slate-300">Recipient Email</label>
            <input
              className="w-full mt-1 px-3 py-2 rounded-lg bg-slate-800/50 text-slate-100 border border-slate-700"
              placeholder="example@gmail.com"
              value={emailTarget}
              onChange={(e) => setEmailTarget(e.target.value)}
              required={type === "email"}
            />
          </div>
        )}

        {/* Description */}
        <div>
          <label className="text-slate-300">Description / Message</label>
          <textarea
            rows={4}
            className="w-full mt-1 px-3 py-2 rounded-lg bg-slate-800/50 text-slate-100 border border-slate-700"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write your campaign message..."
            required
          />
        </div>

        {/* Schedule Date */}
        <div>
          <label className="text-slate-300">Schedule Date (optional)</label>
          <input
            type="datetime-local"
            className="w-full mt-1 px-3 py-2 rounded-lg bg-slate-800/50 text-slate-100 border border-slate-700"
            value={scheduleDate}
            onChange={(e) => setScheduleDate(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button
          disabled={loading}
          className="w-full py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:opacity-90 transition"
        >
          {loading ? "Saving..." : "Create Campaign"}
        </button>
      </form>
    </div>
  );
}
