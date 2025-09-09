import { Link, NavLink } from "react-router-dom";
//import { useState } from "react";

import AuthButton from "./AuthButton";
import { useTheme } from "./useTheme";
import lightLogo from "./assets/hack-cat-logo-light.png";
import darkLogo from "./assets/hack-cat-logo-dark.png";

import './NavBar.css';

type DarkModeButtonProps = {
  theme: string;
  toggleTheme: () => void;
};
function DarkModeButton({theme, toggleTheme }: DarkModeButtonProps) {
  return (
    <button className="nav-button" onClick={toggleTheme} aria-label="Toggle dark mode">
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  )
}

function Hamburger({ onClick } : { onClick: () => void}) {
  return (
    <button className="hamburger" onClick={onClick} aria-label="Open menu">
      <div className="line" />
      <div className="line" />
      <div className="line" />
    </button>
  );
}

export default function NavBar() {
  const { theme, toggle: toggleTheme } = useTheme();    // destructuring: not using the settheme var

  //const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav-wrap">
      { /* Small screens */}
      <div className="nav-small">
        <div className="n-left">
          <Link to="/" className="logo">
            <img src={theme == "dark" ? darkLogo : lightLogo} alt="Hack Cats Logo" className="logo-image" />
          </Link>
        </div>

        <div className="n-right">
          <DarkModeButton theme={theme} toggleTheme={toggleTheme} />
          {/* FIX THIS */}
          <Hamburger onClick={toggleTheme} />  
        </div>
      </div>

      { /* Large screens */}
      <div className="nav-large">
        <div className="n-left n-pill">
          <Link to="/" className="logo">
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
    </header>

  );
}