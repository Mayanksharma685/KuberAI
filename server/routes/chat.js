import express from "express";
import agents from "../data/agents.js";
import { generateReply } from "../utils/responses.js";

const router = express.Router();

router.post("/", (req, res) => {
  const {
    userId,
    agentId,
    message
  } = req.body;

  if (!userId) {
    return res.status(400).json({
      success: false,
      code: "USER_ID_REQUIRED",
      message: "userId is required"
    });
  }

  if (!agentId) {
    return res.status(400).json({
      success: false,
      code: "AGENT_ID_REQUIRED",
      message: "agentId is required"
    });
  }

  if (!message || !message.trim()) {
    return res.status(400).json({
      success: false,
      code: "MESSAGE_REQUIRED",
      message: "message is required"
    });
  }

  const agent = agents.find(
    (item) => item.id === agentId
  );

  if (!agent) {
    return res.status(404).json({
      success: false,
      code: "AGENT_NOT_FOUND",
      message: "Requested agent does not exist"
    });
  }

  const reply = generateReply(
    agentId,
    message
  );

  res.status(200).json({
    success: true,
    agentId,
    userId,
    message: reply,
    timestamp: new Date().toISOString()
  });
});

export default router;