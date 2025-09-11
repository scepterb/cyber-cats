
import { Routes, Route } from "react-router-dom";

import Weeks from "./pages/Weeks";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

import './App.css';

export default function App() {

  return (
    <>
      < NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weeks" element={<Weeks />} />
      </Routes>
    </>
  );
}
