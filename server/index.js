import express from "express";
import cors from "cors";

import agentsRouter from "./routes/agents.js";
import chatRouter from "./routes/chat.js";
import usageRouter from "./routes/usage.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/agents", agentsRouter);
app.use("/api/chat", chatRouter);
app.use("/api/usage", usageRouter);

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "KuberAI Mock Backend is running",
    timestamp: new Date().toISOString()
  });
});

app.use("/api/*", (req, res) => {
  res.status(404).json({
    success: false,
    code: "API_NOT_FOUND",
    message: "API endpoint not found"
  });
});

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    code: "INTERNAL_SERVER_ERROR",
    message: "Something went wrong on the server"
  });
});

app.listen(PORT, () => {
  console.log("======================================");
  console.log(" KuberAI Mock Backend");
  console.log("======================================");
  console.log(` Server: http://localhost:${PORT}`);
  console.log("");
  console.log(" APIs:");
  console.log(" GET  /api/agents");
  console.log(" GET  /api/agents/:slug");
  console.log(" POST /api/chat");
  console.log(" GET  /api/usage");
  console.log("");
});