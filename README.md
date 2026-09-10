# KuberAI — Financial AI Assistant

KuberAI is a financial AI assistant developed as part of the **Simplify Money assignment**. The application provides specialised financial agents for **Tax, Mutual Funds, and Equity Insights**, together with a Noida Tax Filing Helpdesk, backend APIs, user identification, rate limiting, AEO/SEO/GEO optimisation, product evidence, feedback, and referral documentation.

The project was developed progressively across **Tasks 1–5**, with each task building on the previous implementation while keeping the existing application structure and class/component naming consistent.

---

## Project Overview

KuberAI provides a simple and accessible financial-assistance experience where users can explore financial AI agents, start conversations, view usage information, and access location-specific assistance.

The completed application includes:

- Financial AI agent landing page
- Tax Agent
- Mutual Fund Advisor
- Equity Insights
- Agent chat interface
- Responsive navigation and UI
- Usage tracking
- User identification
- Rate limiting
- Mock backend APIs
- Noida Tax Filing Helpdesk
- FAQ JSON-LD structured data
- LocalBusiness JSON-LD structured data
- SEO metadata
- Canonical URLs
- Open Graph and Twitter metadata
- Application screenshots
- Honest product feedback
- Referral introduction drafts
- Referral feedback documentation

---

## Technology Stack

**Frontend:** React, Vite, React Router, Lucide React  
**Backend:** Node.js, Express.js, REST APIs  
**Optimisation:** JSON-LD, FAQPage Schema, LocalBusiness Schema, Canonical URLs, Open Graph, Twitter metadata

---

## Development & Task Implementation

### Task 1 — Frontend & Agent Experience

The project started with the core KuberAI frontend built using **React and Vite**. The initial implementation established the main user experience and navigation structure.

The frontend includes the KuberAI landing page, hero section, responsive navigation, benefits section, financial AI agent cards, agent chat interface, app download CTA, and footer.

The application supports the following agent routes:

`/agents/tax-agent`  
`/agents/mf-advisor`  
`/agents/equity-insights`

The main frontend is organised under:

`src/components/`  
`src/data/`  
`src/pages/`  
`src/services/`  
`src/utils/`  
`src/styles/`

The primary frontend files include:

`src/App.jsx`  
`src/main.jsx`  
`src/pages/Home.jsx`  
`src/pages/AgentChat.jsx`  
`src/components/AgentCard.jsx`  
`src/components/AgentIcon.jsx`  
`src/components/ChatInput.jsx`  
`src/components/ChatMessage.jsx`  
`src/components/Header.jsx`  
`src/components/Logo.jsx`  
`src/components/Quota.jsx`  
`src/data/agents.js`  
`src/styles/index.css`

---

### Task 2 — Mock Backend & APIs

The frontend was extended with a **Node.js/Express mock backend** to provide the required API functionality.

The implemented APIs are:

`GET /api/health`  
`GET /api/agents`  
`GET /api/agents/:slug`  
`GET /api/usage`  
`POST /api/chat`

The backend is organised as:

`server/index.js`  
`server/data/agents.js`  
`server/routes/agents.js`  
`server/routes/chat.js`  
`server/routes/usage.js`  
`server/utils/responses.js`

The main backend runs on:

`http://localhost:{port}`

---

### Task 3 — User Identification & Rate Limiting

User-management functionality was then added without replacing the existing frontend or mock backend implementation.

The implementation provides:

- User identification
- Usage tracking
- Rate limiting
- Separate user-management backend

The user-management functionality is contained in:

`server/user-management/app.js`  
`server/user-management/rateLimiter.js`  
`server/user-management/usageStore.js`  
`server/user-management/userIdentity.js`

The user-management backend runs on:

`http://localhost:5001`

This keeps user identification, usage tracking, and rate limiting separated from the main backend while allowing the existing application flow to remain intact.

---

### Task 4 — AEO, SEO & GEO

The application was enhanced with **Answer Engine Optimisation (AEO), Search Engine Optimisation (SEO), and Generative Engine Optimisation (GEO)** while preserving the existing agent structure.

For AEO, agent pages use **FAQPage JSON-LD structured data** containing common questions and answers for the available agents:

- Tax Agent
- MF Advisor
- Equity Insights

The AEO implementation is contained in:

`src/seo/AgentSEO.jsx`  
`src/utils/schema.js`

The FAQ content covers topics such as ITR filing, required tax documents, mutual funds, SIPs, equity investing, stocks, and related financial concepts.

For SEO, the agent pages include:

- Page titles
- H1/H2 structure
- Meta descriptions
- Canonical URLs
- Open Graph metadata
- Twitter metadata
- Clean agent URL slugs

The clean agent URLs are:

`/agents/tax-agent`  
`/agents/mf-advisor`  
`/agents/equity-insights`

For GEO, a dedicated **Noida Tax Filing Helpdesk** landing page was created.

The page is:

`src/pages/NoidaHelpdesk.jsx`

Route:

`/noida`

The Noida Helpdesk provides:

- Noida-specific tax filing guidance
- Tax Agent CTA
- Local helpdesk CTA
- Organisation/community partnership CTA
- Navigation between the helpdesk and main KuberAI application

LocalBusiness structured data was added through:

`src/seo/NoidaSEO.jsx`  
`src/utils/schema.js`

The LocalBusiness schema includes:

- Business name
- Area served
- Placeholder address
- `sameAs`
- Opening hours

The Noida page also provides a direct path to the Tax Agent through:

`/agents/tax-agent`

---

### Task 5 — App Proof, Feedback & Referrals

The final stage focused on documenting and demonstrating the completed KuberAI experience.

Application screenshots were captured for the major user flows, including:

- Home
- Agents
- Tax Agent
- Mutual Fund
- Equity
- Noida Helpdesk

The screenshots are stored under:

`evidence/Task/app-proof/app-screenshot/`

The evidence includes:

`Home.png`  
`Agents.png`  
`Agents with footer.png`  
`TaxAgent1.png`  
`TaxAgent2.png`  
`MutualFund1.png`  
`MutualFund2.png`  
`Equity1.png`  
`Equity2.png`  
`Equity3.png`  
`Helpdesk.png`  
`Helpdesk2.png`

A dedicated honest product feedback document was also created at:

`evidence/Task/feedback/honestFeedback`

The feedback covers the product experience, strengths, weaknesses, and potential improvements.

For the referral requirement, two warm-introduction drafts and referral feedback documentation were created under:

`evidence/Task/referrals/`

Files:

`referral-intro-1.md`  
`referral-intro-2.md`  
`feedback.md`

The referral documentation contains draft introduction messages and documented feedback. Any simulated or assignment-based feedback is identified accordingly.

---

## Project Structure

text
KuberAI/
│
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── seo/
│   ├── services/
│   ├── utils/
│   └── styles/
│
├── server/
│   ├── data/
│   ├── routes/
│   ├── utils/
│   └── user-management/
│
├── evidence/
│   └── Task/
│       ├── app-proof/
│       ├── feedback/
│       └── referrals/
│
├── tasks/
│   ├── task-2-mock-backend/
│   ├── task-3-user-identification-rate-limit/
│   ├── task-4-seo-aeo-geo/
│   └── task-5-evidence-referrals/
│
├── docs/
│   └── evidence/
│
├── index.html
├── vite.config.js
├── package.json
├── package-lock.json
├── TASK_STATUS.md
└── README.md


Running the Application

Install dependencies from the project root:

npm install

Start the frontend:

npm run dev

Frontend:

http://localhost:5173

Start the main backend in another terminal:

npm run server

Main backend:

http://localhost:{port}

Start the user-management backend in another terminal:

npm run user-management

User-management backend:

http://localhost:{port}

For the complete development setup:

Terminal 1 → npm run dev
Terminal 2 → npm run server
Terminal 3 → npm run user-management
Main Application Routes
Page	Route
Home	/
Tax Agent	/agents/tax-agent
Mutual Fund Advisor	/agents/mf-advisor
Equity Insights	/agents/equity-insights
Noida Helpdesk	/noida
Evidence & Documentation

Assignment evidence is organised under:

evidence/Task/

This includes application screenshots, product feedback, referral introduction drafts, and referral feedback.

Task-specific documentation is maintained under:

tasks/task-2-mock-backend/
tasks/task-3-user-identification-rate-limit/
tasks/task-4-seo-aeo-geo/
tasks/task-5-evidence-referrals/

Completion Status
Task	Implementation	Status
Task 1	Frontend & Agent Experience	✅ Completed
Task 2	Mock Backend & APIs	✅ Completed
Task 3	User Identification & Rate Limiting	✅ Completed
Task 4	AEO / SEO / GEO	✅ Completed
Task 5	App Proof / Feedback / Referrals	✅ Completed
Future Improvements

The current implementation is an assignment-ready prototype. Possible future improvements include production AI integration, database-backed user accounts, production authentication, advanced analytics, real-time usage limits, automated testing, production deployment, improved accessibility, expanded financial knowledge sources, real organisation/community partnerships, and production-grade security and monitoring.
