import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeSidebar = () => setOpen(false);

  const navLinks = [
    { name: "Home", href: "/", icon: "fa-home" },
    { name: "About", href: "/about", icon: "fa-user" },
    { name: "Skills", href: "/skill", icon: "fa-list" },
    { name: "Projects", href: "/project", icon: "fa-envelope" },
    { name: "Contact", href: "/contact", icon: "fa-comments" },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <div
        onClick={() => setOpen(!open)}
        className={`sm:hidden fixed top-5 right-4 z-50 border transition-all duration-300 w-[45px] h-[40px] flex items-center justify-center rounded-md cursor-pointer ${
          isDark ? "border-gray-600 bg-gray-800/80" : "border-gray-300 bg-white/80"
        } backdrop-blur-md`}
      >
        <div className={`relative w-[18px] h-[2px] transition-all duration-300 ${isDark ? "bg-gray-300" : "bg-gray-700"} ${open ? "bg-transparent" : ""}`}>
          <span className={`absolute top-[-6px] left-0 w-[18px] h-[2.5px] transition-transform duration-300 ${isDark ? "bg-gray-300" : "bg-gray-700"} ${open ? "rotate-45 top-0" : ""}`} />
          <span className={`absolute top-[6px] left-0 w-[18px] h-[2.5px] transition-transform duration-300 ${isDark ? "bg-gray-300" : "bg-gray-700"} ${open ? "-rotate-45 top-0" : ""}`} />
        </div>
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 h-[60px] z-40 border-b transition-all duration-300
          ${open ? "translate-y-0" : "-translate-y-full sm:translate-y-0"}
          ${scrolled
            ? isDark
              ? "bg-gray-900/80 backdrop-blur-md border-gray-700/50 shadow-lg shadow-black/20"
              : "bg-white/80 backdrop-blur-md border-gray-200/50 shadow-lg shadow-black/10"
            : isDark
              ? "bg-gray-900 border-gray-700"
              : "bg-[#fdf9ff] border-[#e8dfec]"
          }`}
      >
        <div className="w-full h-full px-[30px] flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              onClick={closeSidebar}
              className={`text-[28px] font-bold font-[Rubik] transition-colors duration-300 gradient-text`}
            >
              Portfolio
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <ul className="hidden sm:flex items-center space-x-2">
            {navLinks.map(({ name, href, icon }, i) => (
              <motion.li
                key={href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.3 }}
              >
                <Link
                  to={href}
                  className={`relative flex items-center text-[15px] font-semibold capitalize transition-all duration-300 px-3 py-1.5 rounded-md group ${
                    isDark
                      ? `text-gray-200 hover:text-blue-400 ${path === href ? "text-blue-400 font-bold" : ""}`
                      : `text-[#302e4d] hover:text-blue-600 ${path === href ? "text-blue-600 font-bold" : ""}`
                  }`}
                >
                  <i className={`fa ${icon} mr-[8px]`} />
                  {name}
                  {path === href && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-md -z-10"
                      style={{ background: isDark ? "rgba(59,130,246,0.15)" : "rgba(108,99,255,0.1)" }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}

            <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.15, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                className={`w-[35px] h-[35px] rounded-full flex items-center justify-center transition-all duration-300 ${
                  isDark ? "bg-gray-700 text-yellow-300 hover:bg-gray-600" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                <i className={`fa ${isDark ? "fa-sun" : "fa-moon"} text-[16px]`}></i>
              </motion.button>
            </motion.li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`sm:hidden absolute top-full left-0 right-0 border-b shadow-lg overflow-hidden ${
                isDark ? "bg-gray-900/95 backdrop-blur-md border-gray-700" : "bg-white/95 backdrop-blur-md border-[#e8dfec]"
              }`}
            >
              <ul className="py-4 space-y-1">
                {navLinks.map(({ name, href, icon }, i) => (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={closeSidebar}
                  >
                    <Link
                      to={href}
                      className={`block text-[16px] font-semibold capitalize transition-all duration-300 px-6 py-3 ${
                        isDark
                          ? `text-gray-200 hover:bg-gray-800 hover:text-blue-400 ${path === href ? "text-blue-400 bg-gray-800" : ""}`
                          : `text-[#302e4d] hover:bg-blue-50 hover:text-blue-600 ${path === href ? "text-blue-600 bg-blue-50" : ""}`
                      }`}
                    >
                      <i className={`fa ${icon} mr-[8px]`} />
                      {name}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="px-6 py-3"
                >
                  <button
                    onClick={toggleTheme}
                    className={`flex items-center text-[16px] font-semibold capitalize ${
                      isDark ? "text-yellow-300" : "text-[#302e4d]"
                    }`}
                  >
                    <i className={`fa ${isDark ? "fa-sun" : "fa-moon"} mr-[8px]`}></i>
                    {isDark ? "Light Mode" : "Dark Mode"}
                  </button>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Sidebar;
