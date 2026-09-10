import { Routes, Route, Navigate } from "react-router-dom";
import NoidaHelpdesk from "./pages/NoidaHelpdesk";
import Home from "./pages/Home";
import AgentChat from "./pages/AgentChat";

export default function App() {
  return (
    <Routes>
      {/* Task 1 — Home / Agents Directory */}
      <Route path="/" element={<Home />} />

      {/* Task 2 / Task 3 — Agent Chat */}
      <Route path="/agents/:slug" element={<AgentChat />} />

      {/* Task 4 — GEO / Noida Helpdesk */}
      <Route path="/noida" element={<NoidaHelpdesk />} />

      {/* Invalid routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}