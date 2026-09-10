import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Header({ compact = false }) {
  return (
    <header className="header">
      {compact ? (
        <Link to="/" className="back-brand"><Logo /></Link>
      ) : (
        <Link to="/" className="brand-link"><Logo /></Link>
      )}

      {!compact && (
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#agents">Agents</a>
          <a href="#about">About</a>
        </nav>
      )}

      <a className="app-btn" href="https://example.com/app" target="_blank" rel="noreferrer">
        Get the App
      </a>
    </header>
  );
}