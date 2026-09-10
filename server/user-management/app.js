import express from "express";
import cors from "cors";

import agentsRouter from "../routes/agents.js";

import {
  getClientIp,
  createUserId
} from "./userIdentity.js";

import {
  getUsage
} from "./usageStore.js";

import {
  checkRateLimit,
  recordMessage
} from "./rateLimiter.js";

const app = express();

const PORT =
  process.env.USER_MANAGEMENT_PORT ||
  5001;

app.use(cors());

app.use(
  express.json()
);

app.use(
  express.urlencoded({
    extended: true
  })
);

/*
|--------------------------------------------------------------------------
| AGENTS
|--------------------------------------------------------------------------
|
| Reuses the existing Task 2 agents route.
|
*/

app.use(
  "/api/agents",
  agentsRouter
);

/*
|--------------------------------------------------------------------------
| GET /api/usage
|--------------------------------------------------------------------------
*/

app.get(
  "/api/usage",
  (req, res) => {
    try {
      const {
        agentId,
        localToken
      } = req.query;

      if (!agentId) {
        return res.status(400).json({
          success: false,
          code:
            "AGENT_ID_REQUIRED",
          message:
            "agentId is required"
        });
      }

      if (!localToken) {
        return res.status(400).json({
          success: false,
          code:
            "LOCAL_TOKEN_REQUIRED",
          message:
            "localToken is required"
        });
      }

      const ip =
        getClientIp(req);

      const userId =
        createUserId(
          ip,
          localToken
        );

      const usage =
        getUsage(
          userId,
          agentId
        );

      return res.status(200).json({
        success: true,

        userId,

        agentId,

        usedToday:
          usage.usedToday,

        limitToday:
          usage.limitToday,

        remainingToday:
          usage.remainingToday
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        code: "USAGE_ERROR",
        message:
          "Unable to retrieve usage"
      });
    }
  }
);

/*
|--------------------------------------------------------------------------
| POST /api/chat
|--------------------------------------------------------------------------
*/

app.post(
  "/api/chat",
  (req, res) => {
    try {
      const {
        agentId,
        message,
        localToken
      } = req.body;

      if (!agentId) {
        return res.status(400).json({
          success: false,
          code:
            "AGENT_ID_REQUIRED",
          message:
            "agentId is required"
        });
      }

      if (
        !message ||
        !message.trim()
      ) {
        return res.status(400).json({
          success: false,
          code:
            "MESSAGE_REQUIRED",
          message:
            "message is required"
        });
      }

      if (!localToken) {
        return res.status(400).json({
          success: false,
          code:
            "LOCAL_TOKEN_REQUIRED",
          message:
            "localToken is required"
        });
      }

      /*
      |--------------------------------------------------------------
      | Identify user
      |--------------------------------------------------------------
      */

      const ip =
        getClientIp(req);

      const userId =
        createUserId(
          ip,
          localToken
        );

      /*
      |--------------------------------------------------------------
      | Check 5-message limit
      |--------------------------------------------------------------
      */

      const limit =
        checkRateLimit(
          userId,
          agentId
        );

      if (
        !limit.allowed
      ) {
        return res
          .status(429)
          .json(
            limit.body
          );
      }

      /*
      |--------------------------------------------------------------
      | Record message
      |--------------------------------------------------------------
      */

      const usage =
        recordMessage(
          userId,
          agentId
        );

      /*
      |--------------------------------------------------------------
      | Mock responses
      |--------------------------------------------------------------
      */

      let reply =
        "Thanks for your question. This is a mock KuberAI response.";

      if (
        agentId ===
        "tax-agent"
      ) {
        reply =
          "ITR stands for Income Tax Return. It is used to report your income, deductions and taxes paid to the Income Tax Department.";
      }

      if (
        agentId ===
        "mf-advisor"
      ) {
        reply =
          "Mutual funds pool money from investors and invest it across assets according to the fund's objective.";
      }

      if (
        agentId ===
        "equity-insights"
      ) {
        reply =
          "Equity investing involves buying shares of companies. Consider the company's fundamentals, valuation and risk before investing.";
      }

      return res.status(200).json({
        success: true,

        userId,

        agentId,

        message: reply,

        usage: {
          usedToday:
            usage.usedToday,

          limitToday:
            usage.limitToday,

          remainingToday:
            usage.remainingToday
        },

        timestamp:
          new Date().toISOString()
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        success: false,

        code:
          "INTERNAL_SERVER_ERROR",

        message:
          "Something went wrong on the server"
      });
    }
  }
);

/*
|--------------------------------------------------------------------------
| HEALTH CHECK
|--------------------------------------------------------------------------
*/

app.get(
  "/api/health",
  (req, res) => {
    res.status(200).json({
      success: true,

      message:
        "KuberAI User Management Backend is running",

      timestamp:
        new Date().toISOString()
    });
  }
);

/*
|--------------------------------------------------------------------------
| SERVER
|--------------------------------------------------------------------------
*/

app.listen(
  PORT,
  () => {
    console.log(
      "======================================"
    );

    console.log(
      " KuberAI User Management Backend"
    );

    console.log(
      "======================================"
    );

    console.log(
      ` Server: http://localhost:${PORT}`
    );

    console.log("");

    console.log(
      " GET  /api/agents"
    );

    console.log(
      " GET  /api/agents/:slug"
    );

    console.log(
      " GET  /api/usage"
    );

    console.log(
      " POST /api/chat"
    );

    console.log("");
  }
);