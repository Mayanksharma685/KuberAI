import { Link } from "react-router-dom";
import NoidaSEO from "../seo/NoidaSEO.jsx";

export default function NoidaHelpdesk() {
  return (
    <div className="page">

      <NoidaSEO />

      <header className="header">

        <Link
          to="/"
          className="brand-link"
        >
          <div className="logo">

            <span className="logo-star">
              ✦
            </span>

            KuberAI

          </div>
        </Link>

        <nav className="nav">
          <Link to="/">
            Home
          </Link>

          <Link to="/#agents">
            Agents
          </Link>

          <Link to="/noida">
            Noida Helpdesk
          </Link>
        </nav>

        <a
          href="#download"
          className="app-btn"
        >
          Get the app
        </a>

      </header>

      <main>

        <section className="hero">

          <div className="hero-copy">

            <div className="eyebrow">
              KUBERAI • NOIDA HELPDESK
            </div>

            <h1>
              Tax Filing Helpdesk
              <br />
              — Noida
            </h1>

            <p>
              Get simple, accessible guidance
              for common tax-filing questions
              with KuberAI.
            </p>

          </div>

          <div className="hero-visual">

            <div className="glow glow-a" />
            <div className="glow glow-b" />

            <div className="floating-card card-a">

              <div className="float-icon">
                ₹
              </div>

              <div>
                <b>
                  Tax Guidance
                </b>

                <small>
                  Understand your filing
                  requirements
                </small>
              </div>

            </div>

            <div className="floating-card card-b">

              <div className="float-icon blue">
                ✓
              </div>

              <div>
                <b>
                  Noida Helpdesk
                </b>

                <small>
                  Local assistance for
                  common questions
                </small>
              </div>

            </div>

          </div>

        </section>

        <section className="benefits">

          <div className="benefit">

            <span>✓</span>

            <div>
              <b>
                Tax filing guidance
              </b>

              <small>
                Understand common ITR questions
              </small>
            </div>

          </div>

          <div className="benefit">

            <span>⌁</span>

            <div>
              <b>
                Local Noida support
              </b>

              <small>
                Designed for the Noida community
              </small>
            </div>

          </div>

          <div className="benefit">

            <span>✦</span>

            <div>
              <b>
                AI-powered assistance
              </b>

              <small>
                Chat with a KuberAI agent
              </small>
            </div>

          </div>

        </section>

        <section className="agents-section">

          <div className="section-title">

            <div>
              <div className="eyebrow">
                GET HELP
              </div>

              <h2>
                Talk to KuberAI
              </h2>
            </div>

            <p>
              Start with the Tax Agent
            </p>

          </div>

          <div className="agent-grid">

            <article className="agent-card tax">

              <div className="agent-card-icon">
                ₹
              </div>

              <h3>
                Tax Agent
              </h3>

              <p className="agent-pitch">
                Get general guidance on ITR
                filing, documents, deductions
                and tax-related questions.
              </p>

              <div className="tag-list">

                <span>
                  ITR
                </span>

                <span>
                  Tax
                </span>

                <span>
                  Filing
                </span>

              </div>

              <Link
                to="/agents/tax-agent"
                className="chat-button"
              >
                Chat with Tax Agent
              </Link>

            </article>

          </div>

        </section>

        <section
          className="download-banner"
          id="download"
        >

          <div className="download-icon">
            ↗
          </div>

          <div>

            <h3>
              Want help beyond the helpdesk?
            </h3>

            <p>
              Get KuberAI on your phone for
              convenient access.
            </p>

          </div>

          <a href="#">
            Get the app
          </a>

          <div className="phone">
            ◫
          </div>

        </section>

        <section
          className="agents-section"
          id="contact"
        >

          <div className="section-title">

            <div>

              <div className="eyebrow">
                PARTNER WITH US
              </div>

              <h2>
                Bring KuberAI to Noida
              </h2>

            </div>

          </div>

          <div className="agent-grid">

            <article className="agent-card mf">

              <div className="agent-card-icon">
                +
              </div>

              <h3>
                Host a helpdesk
              </h3>

              <p className="agent-pitch">
                Bring KuberAI financial guidance
                to your office or community.
              </p>

              <a
                href="mailto:hello@kuberai.in"
                className="chat-button"
              >
                Host a helpdesk
              </a>

            </article>

            <article className="agent-card equity">

              <div className="agent-card-icon">
                ↗
              </div>

              <h3>
                Partner with KuberAI
              </h3>

              <p className="agent-pitch">
                Connect your organisation with
                accessible financial assistance.
              </p>

              <a
                href="mailto:hello@kuberai.in"
                className="chat-button"
              >
                Become a partner
              </a>

            </article>

          </div>

        </section>

      </main>

      <footer>

        <div className="footer-left">

          <b>
            KuberAI
          </b>

          <span>
            Financial assistance,
            simplified.
          </span>

        </div>

        <div className="footer-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/noida">
            Noida
          </Link>

        </div>

      </footer>

    </div>
  );
}