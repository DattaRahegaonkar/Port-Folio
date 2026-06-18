import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./components/Sidebar";
import FullPage from "./pages/FullPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit:    { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

function PageWrapper({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
}

function AppRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDark } = useTheme();

  useEffect(() => {
    const navEntry = performance.getEntriesByType("navigation")[0];
    if (navEntry?.type === "reload" && location.pathname !== "/") {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <main className={`flex-1 min-h-screen p-4 pt-24 overflow-y-auto no-scrollbar transition-colors duration-300 ${
      isDark ? "bg-gray-900" : "bg-[#F2F2FC]"
    }`}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/"        element={<PageWrapper><FullPage /></PageWrapper>} />
          <Route path="/home"    element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about"   element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/skill"   element={<PageWrapper><Skills /></PageWrapper>} />
          <Route path="/project" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
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
