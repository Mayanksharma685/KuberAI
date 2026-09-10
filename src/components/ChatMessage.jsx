import AgentIcon from "./AgentIcon";

export default function ChatMessage({ item, agent }) {
  const isUser = item.role === "user";

  return (
    <div className={`message-line ${isUser ? "user-line" : ""}`}>
      {!isUser && (
        <div className={`small-avatar ${agent.theme}`}>
          <AgentIcon type={agent.type} size={16}/>
        </div>
      )}
      <div className="message-wrap">
        <div className={`message ${isUser ? "user-message" : "agent-message"}`}>
          {item.content}
        </div>
        <div className={`time ${isUser ? "right" : ""}`}>{item.time}</div>
      </div>
    </div>
  );
}