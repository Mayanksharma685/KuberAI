import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  const {
    userId,
    agentId
  } = req.query;

  if (!userId || !agentId) {
    return res.status(400).json({
      success: false,
      code: "INVALID_USAGE_QUERY",
      message: "userId and agentId are required"
    });
  }

  res.status(200).json({
    success: true,
    userId,
    agentId,
    usedToday: 0,
    limitToday: 5,
    remainingToday: 5
  });
});

export default router;