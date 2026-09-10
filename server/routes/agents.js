import express from "express";
import agents from "../data/agents.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    agents
  });
});

router.get("/:slug", (req, res) => {
  const { slug } = req.params;

  const agent = agents.find(
    (item) => item.slug === slug
  );

  if (!agent) {
    return res.status(404).json({
      success: false,
      code: "AGENT_NOT_FOUND",
      message: "Agent not found"
    });
  }

  res.status(200).json({
    success: true,
    agent
  });
});

export default router;