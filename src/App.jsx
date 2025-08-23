// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import FullPage from "./pages/FullPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function AppRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDark } = useTheme();

  useEffect(() => {
    const navEntry = performance.getEntriesByType("navigation")[0];
    const isReload = navEntry?.type === "reload";
    const isNotRoot = location.pathname !== "/";

    if (isReload && isNotRoot) {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <main className={`flex-1 min-h-screen p-4 pt-24 overflow-y-auto no-scrollbar transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-[#F2F2FC]'
    }`}>
      <Routes>
        <Route path="/" element={<FullPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col w-full h-screen overflow-hidden">
          <Sidebar />
          <AppRoutes />
        </div>
      </Router>
    </ThemeProvider>
  );
}
