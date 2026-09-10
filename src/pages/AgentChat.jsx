import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Smartphone } from "lucide-react";
import Header from "../components/Header";
import AgentIcon from "../components/AgentIcon";
import Quota from "../components/Quota";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import { agents } from "../data/agents";

const time = () => new Date().toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"});

export default function AgentChat() {
  const { slug } = useParams();
  const agent = agents.find(a => a.slug === slug) || agents[0];

  const [remaining, setRemaining] = useState(4);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {role:"agent", content:agent.greeting, time:"10:00 AM"},
    {role:"user", content:agent.suggested[0], time:"10:01 AM"},
    {role:"agent", content:agent.replies[0], time:"10:01 AM"},
    {role:"user", content:agent.suggested[1], time:"10:02 AM"},
    {role:"agent", content:agent.replies[1], time:"10:02 AM"}
  ]);

  function sendMessage() {
    if (!text.trim() || remaining === 0 || loading) return;

    const question = text.trim();
    setText("");
    setMessages(m => [...m, {role:"user", content:question, time:time()}]);
    setLoading(true);

    setTimeout(() => {
      setMessages(m => [...m, {
        role:"agent",
        content: agent.replies[(m.length - 1) % agent.replies.length],
        time: time()
      }]);
      setRemaining(v => Math.max(0, v - 1));
      setLoading(false);
    }, 600);
  }

  return (
    <div className="page chat-page">
      <Header compact/>

      <main className="chat-main">
        <div className="chat-toolbar">
          <Link to="/" className="back-link"><ArrowLeft size={15}/> Back to Agents</Link>
          <Quota remaining={remaining}/>
        </div>

        <section className="agent-heading">
          <div className={`large-avatar ${agent.theme}`}><AgentIcon type={agent.type}/></div>
          <div>
            <h1>{agent.name}</h1>
            <p>{agent.pitch}</p>
          </div>
        </section>

        <section className="chat-card">
          <div className="messages">
            {messages.map((item, i) => <ChatMessage key={i} item={item} agent={agent}/>)}
            {loading && (
              <div className="message-line">
                <div className={`small-avatar ${agent.theme}`}><AgentIcon type={agent.type} size={16}/></div>
                <div className="message agent-message typing">Thinking <span>•••</span></div>
              </div>
            )}
          </div>

          {remaining === 0 ? (
            <div className="limit-box">
              <div className="limit-icon"><Smartphone size={18}/></div>
              <div><b>You’ve used all 5 messages for today.</b><p>Continue your financial journey with the KuberAI app.</p></div>
              <a href="https://example.com/app" target="_blank" rel="noreferrer">Get the App</a>
            </div>
          ) : (
            <ChatInput value={text} setValue={setText} onSend={sendMessage} disabled={remaining === 0} loading={loading}/>
          )}
        </section>
      </main>
    </div>
  );
}