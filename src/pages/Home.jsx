// import { Shield, Sparkles, Users, Smartphone, ArrowRight } from "lucide-react";
// import Header from "../components/Header";
// import AgentCard from "../components/AgentCard";
// import { agents } from "../data/agents";

// export default function Home() {
//   return (
//     <div className="page">
//       <Header />

//       <main id="home">
//         <section className="hero">
//           <div className="hero-copy">
//             <div className="eyebrow">SIMPLE ANSWERS. BRIGHTER MONEY MOVES.</div>
//             <h1>Meet Your<br/>Financial AI Agents</h1>
//             <p>Get simple, accessible answers about taxes,<br className="desktop"/> mutual funds, and equity markets.</p>
//           </div>

//           <div className="hero-visual" aria-hidden="true">
//             <div className="glow glow-a"></div>
//             <div className="glow glow-b"></div>
//             <div className="floating-card card-a">
//               <span className="float-icon">₹</span>
//               <div><b>Money, simplified.</b><small>Answers when you need them.</small></div>
//             </div>
//             <div className="floating-card card-b">
//               <span className="float-icon blue">✦</span>
//               <div><b>AI-powered guidance</b><small>Built for everyday decisions.</small></div>
//             </div>
//           </div>
//         </section>

//         <section className="benefits">
//           <div className="benefit">
//             <span><Sparkles size={16}/></span>
//             <div><b>Ask Anything</b><small>Get instant answers</small></div>
//           </div>
//           <div className="benefit">
//             <span><Shield size={16}/></span>
//             <div><b>Trusted Guidance</b><small>Backed by real knowledge</small></div>
//           </div>
//           <div className="benefit">
//             <span><Users size={16}/></span>
//             <div><b>Built for Everyone</b><small>Students, professionals, families</small></div>
//           </div>
//         </section>

//         <section className="agents-section" id="agents">
//           <div className="section-title">
//             <div>
//               <div className="eyebrow">YOUR MONEY, YOUR AGENT</div>
//               <h2>Choose an Agent</h2>
//             </div>
//             <p>Select an agent and start a one-to-one conversation.</p>
//           </div>

//           <div className="agent-grid">
//             {agents.map(agent => <AgentCard agent={agent} key={agent.id}/>)}
//           </div>
//         </section>

//         <section className="download-banner" id="about">
//           <div className="download-icon"><Smartphone size={22}/></div>
//           <div>
//             <h3>Take KuberAI with you</h3>
//             <p>Get deeper insights, unlimited chats and more on our app.</p>
//           </div>
//           <a href="https://example.com/app" target="_blank" rel="noreferrer">
//             Get the App <ArrowRight size={14}/>
//           </a>
//           <div className="phone">◢</div>
//         </section>
//       </main>

//       <footer>
//         <div className="footer-left"><b>KuberAI</b><span>© 2026 KuberAI. All rights reserved.</span></div>
//         <div className="footer-links"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Contact</a></div>
//       </footer>
//     </div>
//   );
// }

import { Shield, Sparkles, Users, Smartphone, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import AgentCard from "../components/AgentCard";
import { agents } from "../data/agents";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page">
      <Header />

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">SIMPLE ANSWERS. BRIGHTER MONEY MOVES.</div>
            <h1>Meet Your<br/>Financial AI Agents</h1>
            <p>Get simple, accessible answers about taxes,<br className="desktop"/> mutual funds, and equity markets.</p>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="glow glow-a"></div>
            <div className="glow glow-b"></div>
            <div className="floating-card card-a">
              <span className="float-icon">₹</span>
              <div><b>Money, simplified.</b><small>Answers when you need them.</small></div>
            </div>
            <div className="floating-card card-b">
              <span className="float-icon blue">✦</span>
              <div><b>AI-powered guidance</b><small>Built for everyday decisions.</small></div>
            </div>
          </div>
        </section>

        <section className="benefits">
          <div className="benefit">
            <span><Sparkles size={16}/></span>
            <div><b>Ask Anything</b><small>Get instant answers</small></div>
          </div>
          <div className="benefit">
            <span><Shield size={16}/></span>
            <div><b>Trusted Guidance</b><small>Backed by real knowledge</small></div>
          </div>
          <div className="benefit">
            <span><Users size={16}/></span>
            <div><b>Built for Everyone</b><small>Students, professionals, families</small></div>
          </div>
        </section>

        <section className="agents-section" id="agents">
          <div className="section-title">
            <div>
              <div className="eyebrow">YOUR MONEY, YOUR AGENT</div>
              <h2>Choose an Agent</h2>
            </div>
            <p>Select an agent and start a one-to-one conversation.</p>
          </div>

          <div className="agent-grid">
            {agents.map(agent => <AgentCard agent={agent} key={agent.id}/>)}
          </div>
        </section>

        {/* Task 4 — Noida Helpdesk */}
        <section className="location-section">
          <div className="location-cta">
            <div>
              <span>📍 NOIDA HELPDESK</span>
              <h3>Tax Filing Helpdesk — Noida</h3>
              <p>Get local tax filing guidance with KuberAI.</p>
            </div>

            <Link to="/noida" className="location-cta-button">
              Visit Helpdesk →
            </Link>
          </div>
        </section>

        <section className="download-banner" id="about">
          <div className="download-icon"><Smartphone size={22}/></div>
          <div>
            <h3>Take KuberAI with you</h3>
            <p>Get deeper insights, unlimited chats and more on our app.</p>
          </div>
          <a href="https://example.com/app" target="_blank" rel="noreferrer">
            Get the App <ArrowRight size={14}/>
          </a>
          <div className="phone">◢</div>
        </section>
      </main>

      <footer>
        <div className="footer-left"><b>KuberAI</b><span>© 2026 KuberAI. All rights reserved.</span></div>
        <div className="footer-links"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Contact</a></div>
      </footer>
    </div>
  );
}