import {
  getUsage,
  incrementUsage,
  getResetAt
} from "./usageStore.js";

export function checkRateLimit(
  userId,
  agentId
) {
  const usage =
    getUsage(
      userId,
      agentId
    );

  if (
    usage.remainingToday <= 0
  ) {
    return {
      allowed: false,

      status: 429,

      body: {
        success: false,

        code: "RATE_LIMITED",

        message:
          "You have reached your 5-message daily limit for this agent.",

        remainingToday: 0,

        resetAt:
          getResetAt()
      }
    };
  }

  return {
    allowed: true,
    usage
  };
}

export function recordMessage(
  userId,
  agentId
) {
  return incrementUsage(
    userId,
    agentId
  );
}