
import { Routes, Route, Link } from "react-router-dom";
import { Weeks } from "./Weeks";
import { Home } from "./Home";

import { useTheme } from "./useTheme";

import './App.css';

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <nav style={{ padding: 12 }}>
        <Link to="/">Home</Link> | 
        <Link to="/links">Links</Link>
        <button aria-label="Toggle dark mode" onClick={toggle}>
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Weeks />} />
      </Routes>
    </>
  );
}
