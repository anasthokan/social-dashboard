// backend/routes/emailRoutes.js
import express from "express";
import { sendCampaignEmail } from "../controllers/emailController.js";

const router = express.Router();

router.post("/send", sendCampaignEmail);

export default router;
