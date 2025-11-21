import express from "express";
import {
  sendMessage,
  getOneToOneMessages,
  getGroupMessages,
} from "../controllers/messageController.js";

const router = express.Router();

router.post("/", sendMessage);

router.get("/one-to-one", getOneToOneMessages);

router.get("/group/:groupName", getGroupMessages);

export default router;
