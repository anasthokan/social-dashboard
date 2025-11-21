 // backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import whatsappRoutes from "./routes/whatsappRoutes.js";

// Routes
import campaignRoutes from "./routes/campaignRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import emailRoutes from "./routes/emailRoutes.js";

// Load ENV
dotenv.config();
console.log("MAILGUN API KEY:", process.env.MAILGUN_API_KEY);
console.log("DEBUG MAILGUN KEY =", process.env.MAILGUN_API_KEY);
console.log("DEBUG DOMAIN =", process.env.MAILGUN_DOMAIN);
console.log("DEBUG FROM =", process.env.FROM_EMAIL);


// Initialize App
const app = express();

// DB Connect
connectDB();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

// Routes
app.get("/", (_req, res) => {
  res.send("API is running...");
});

app.use("/api/campaigns", campaignRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/whatsapp", whatsappRoutes);


// Global Error Handler
app.use((err, _req, res, _next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({
    message: "Server error",
    error: err.message,
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
