import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "../src/pages/LandingPage";
import DiscussProjectPage from "../src/pages/DiscussProjectPage";
import NotFoundPage from "../src/pages/NotFoundPage";

import "./assets/css/styles.css";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/discuss-project" element={<DiscussProjectPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
