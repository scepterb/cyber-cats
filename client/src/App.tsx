
import { Routes, Route, Link } from "react-router-dom";
import { Weeks } from "./Weeks";
import { Home } from "./Home";
import './App.css'





export default function App() {
  return (
    <>
      <nav style={{ padding: 12 }}>
        <Link to="/">Home</Link> | <Link to="/links">Links</Link>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Weeks />} />
      </Routes>
    </>
  );
}
