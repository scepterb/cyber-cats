import { Link, NavLink } from "react-router-dom";
import { useState} from "react";

import AuthButton from "./AuthButton";
import AuthMenuItem from "./AuthMenuItem";
import { useTheme } from "../useTheme";
import lightLogo from "../assets/hack-cat-logo-light.png";
import darkLogo from "../assets/hack-cat-logo-dark.png";

import './NavBar.css';
import './NavButton.css';
import './NavMenu.css';

type DarkModeButtonProps = {
  theme: string;
  toggleTheme: () => void;
};
function DarkModeButton({theme, toggleTheme }: DarkModeButtonProps) {
  return (
    <button className="darkmode-btn" onClick={toggleTheme} aria-label="Toggle dark mode">
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  )
}

export default function NavBar() {
  const { theme, toggle: toggleTheme } = useTheme();    // destructuring: not using the settheme var
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      { /* Small screens */}
      <div className="nav-small">
        <div className="n-left">
          <Link to="/" className="logo" onClick={() => setOpen(false)}>
            <img src={theme == "dark" ? darkLogo : lightLogo} alt="Hack Cats Logo" className="logo-image" />
          </Link>
        </div>

        <div className="n-right">
          <DarkModeButton theme={theme} toggleTheme={toggleTheme} aria-label="Toggle menu" aria-expanded={open} />

          {/* Hamburger */}
          <button className={`hamburger ${open ? "open" : ""}`} onClick={() => setOpen(v => !v)} aria-label="Open menu">
            <div className="line top-line" />
            <div className="line mid-line" />
            <div className="line bot-line" />
          </button>
        </div>
      </div>

      { /* Large screens */}
      <div className="nav-large">
        <div className="n-left n-pill">
          <Link to="/" className="logo" onClick={() => setOpen(false)}>
            <img src={theme == "dark" ? darkLogo : lightLogo} alt="Hack Cats Logo" className="logo-image" />
          </Link>
          
          <div className="pill-divider" />

          <nav className="headings">
            <NavLink to="/about" className="heading">About</NavLink>
            <NavLink to="/resources" className="heading">Resources</NavLink>
            <NavLink to="/notes" className="heading">Notes</NavLink>
            <NavLink to="/the-box" className="heading">The Box</NavLink>
          </nav>           
        </div>

        <div className="n-right">
          <DarkModeButton theme={theme} toggleTheme={toggleTheme} />
          
          <AuthButton />
        </div>
      </div>

      {/* mobile dropdown attached to the navbar */}
      <div
        className={`menu ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      >
        <nav className="menu-list" onClick={e => e.stopPropagation()}>
          <NavLink to="/about" className="menu-item" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/resources" className="menu-item" onClick={() => setOpen(false)}>Resources</NavLink>
          <NavLink to="/notes" className="menu-item" onClick={() => setOpen(false)}>Notes</NavLink>
          <NavLink to="/the-box" className="menu-item" onClick={() => setOpen(false)}>The Box</NavLink>

          <AuthMenuItem />

        </nav>
      </div>
    </header>

  );
}