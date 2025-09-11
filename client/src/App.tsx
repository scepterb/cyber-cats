
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Notes from "./pages/Notes";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import './App.css';

export default function App() {

  return (
    <>
      < NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />

        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
