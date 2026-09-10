import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import AgentIcon from "./AgentIcon";

export default function AgentCard({ agent }) {
  return (
    <article className={`agent-card ${agent.theme}`}>
      <div className="agent-card-icon">
        <AgentIcon type={agent.type} />
      </div>

      <h3>{agent.name}</h3>
      <p className="agent-pitch">{agent.pitch}</p>

      <div className="tag-list">
        {agent.tags.map(tag => <span key={tag}>{tag}</span>)}
      </div>

      <Link to={`/agents/${agent.slug}`} className="chat-button">
        Chat <ArrowUpRight size={14}/>
      </Link>
    </article>
  );
}