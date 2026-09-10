import { Sparkles } from "lucide-react";

export default function Logo() {
  return (
    <div className="logo">
      <span className="logo-star"><Sparkles size={13} strokeWidth={2.7}/></span>
      <span>KuberAI</span>
    </div>
  );
}