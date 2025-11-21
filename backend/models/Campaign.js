// backend/models/Campaign.js
import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: {
      type: String,
      enum: ["social", "email", "whatsapp"],
      required: true,
    },
    description: { type: String, required: true },
    scheduleDate: { type: Date },
    status: { type: String, default: "Active" },
  },
  { timestamps: true }
);

export default mongoose.model("Campaign", campaignSchema);
