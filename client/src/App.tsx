
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Notes from "./pages/Notes";
import TheBox from "./pages/TheBox";
import NotFound from "./pages/NotFound";

export default function App() {

  return (
    <>
      < NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/the-box" element={<TheBox />} />

        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
