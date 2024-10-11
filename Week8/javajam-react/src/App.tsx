import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import MusicPage from "./pages/MusicPage";
import JobsPage from "./pages/JobsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/MenuPage" element={<MenuPage />} />
        <Route path="/MusicPage" element={<MusicPage />} />
        <Route path="/JobsPage" element={<JobsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
