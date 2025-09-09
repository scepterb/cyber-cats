
import { Routes, Route } from "react-router-dom";

import Weeks from "./Weeks";
import Home from "./Home";
import NavBar from "./NavBar";

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
