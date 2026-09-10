import { FileText, BarChart3, CandlestickChart } from "lucide-react";

export default function AgentIcon({ type, size = 28 }) {
  const Icon = type === "mf" ? BarChart3 : type === "equity" ? CandlestickChart : FileText;
  return <Icon size={size} strokeWidth={1.8} />;
}