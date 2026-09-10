import crypto from "crypto";

export function getClientIp(req) {
  const forwardedFor =
    req.headers["x-forwarded-for"];

  if (forwardedFor) {
    return forwardedFor
      .split(",")[0]
      .trim();
  }

  const realIp =
    req.headers["x-real-ip"];

  if (realIp) {
    return realIp;
  }

  return (
    req.socket?.remoteAddress ||
    "unknown"
  );
}

export function createUserId(
  ip,
  localToken
) {
  if (!localToken) {
    throw new Error(
      "localToken is required"
    );
  }

  const value =
    `${ip}:${localToken}`;

  return crypto
    .createHash("sha256")
    .update(value)
    .digest("hex");
}