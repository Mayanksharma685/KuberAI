const DAILY_LIMIT = 5;

const usageStore = new Map();

function getServerDate() {
  const now = new Date();

  return [
    now.getFullYear(),
    String(
      now.getMonth() + 1
    ).padStart(2, "0"),
    String(
      now.getDate()
    ).padStart(2, "0")
  ].join("-");
}

function createUsageKey(
  userId,
  agentId
) {
  return `${getServerDate()}:${userId}:${agentId}`;
}

export function getUsage(
  userId,
  agentId
) {
  const key =
    createUsageKey(
      userId,
      agentId
    );

  const usedToday =
    usageStore.get(key) || 0;

  return {
    usedToday,
    limitToday: DAILY_LIMIT,
    remainingToday:
      Math.max(
        DAILY_LIMIT -
          usedToday,
        0
      )
  };
}

export function incrementUsage(
  userId,
  agentId
) {
  const key =
    createUsageKey(
      userId,
      agentId
    );

  const currentUsage =
    usageStore.get(key) || 0;

  const newUsage =
    currentUsage + 1;

  usageStore.set(
    key,
    newUsage
  );

  return {
    usedToday: newUsage,
    limitToday: DAILY_LIMIT,
    remainingToday:
      Math.max(
        DAILY_LIMIT -
          newUsage,
        0
      )
  };
}

export function getResetAt() {
  const reset =
    new Date();

  reset.setHours(
    24,
    0,
    0,
    0
  );

  return reset.toISOString();
}