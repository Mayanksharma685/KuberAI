import {
  getLocalToken
} from "../utils/localToken.js";

const API_URL =
  "http://localhost:5001";

export async function getUsage(
  agentId
) {
  const localToken =
    getLocalToken();

  const response =
    await fetch(
      `${API_URL}/api/usage?agentId=${encodeURIComponent(
        agentId
      )}&localToken=${encodeURIComponent(
        localToken
      )}`
    );

  const data =
    await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
}

export async function sendMessage(
  agentId,
  message
) {
  const localToken =
    getLocalToken();

  const response =
    await fetch(
      `${API_URL}/api/chat`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          agentId,
          message,
          localToken
        })
      }
    );

  const data =
    await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
}