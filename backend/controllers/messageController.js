import Message from "../models/Message.js";

export const sendMessage = async (req, res) => {
  try {
    const { sender, receiver, isGroup, content } = req.body;

    if (!sender || !receiver || !content) {
      return res.status(400).json({ message: "sender, receiver and content required" });
    }

    const msg = await Message.create({ sender, receiver, isGroup, content });
    res.status(201).json(msg);
  } catch (err) {
    res.status(400).json({ message: "Error sending message", error: err.message });
  }
};

export const getOneToOneMessages = async (req, res) => {
  try {
    const { user1, user2 } = req.query;

    if (!user1 || !user2) {
      return res.status(400).json({ message: "user1 and user2 query params required" });
    }

    const messages = await Message.find({
      isGroup: false,
      $or: [
        { sender: user1, receiver: user2 },
        { sender: user2, receiver: user1 },
      ],
    }).sort({ createdAt: 1 });

    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: "Error fetching messages", error: err.message });
  }
};

export const getGroupMessages = async (req, res) => {
  try {
    const groupName = req.params.groupName;

    const messages = await Message.find({
      isGroup: true,
      receiver: groupName,
    }).sort({ createdAt: 1 });

    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: "Error fetching group messages", error: err.message });
  }
};
