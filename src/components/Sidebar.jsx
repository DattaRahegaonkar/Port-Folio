import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeSidebar = () => setOpen(false);

  const navLinks = [
    { name: "Home",     href: "/",        icon: "fa-home" },
    { name: "About",    href: "/about",   icon: "fa-user" },
    { name: "Skills",   href: "/skill",   icon: "fa-list" },
    { name: "Projects", href: "/project", icon: "fa-envelope" },
    { name: "Contact",  href: "/contact", icon: "fa-comments" },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <div
        onClick={() => setOpen(!open)}
        className="sm:hidden fixed top-5 right-4 z-50 border border-gray-600 bg-gray-800/80 backdrop-blur-md w-[45px] h-[40px] flex items-center justify-center rounded-md cursor-pointer transition-all duration-300"
      >
        <div className={`relative w-[18px] h-[2px] bg-gray-300 transition-all duration-300 ${open ? "bg-transparent" : ""}`}>
          <span className={`absolute left-0 w-[18px] h-[2.5px] bg-gray-300 transition-transform duration-300 ${open ? "rotate-45 top-0" : "top-[-6px]"}`} />
          <span className={`absolute left-0 w-[18px] h-[2.5px] bg-gray-300 transition-transform duration-300 ${open ? "-rotate-45 top-0" : "top-[6px]"}`} />
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
            ? "bg-gray-900/80 backdrop-blur-md border-gray-700/50 shadow-lg shadow-black/20"
            : "bg-gray-900 border-gray-700"
          }`}
      >
        <div className="w-full h-full px-[30px] flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/" onClick={closeSidebar} className="text-[28px] font-bold font-[Rubik] gradient-text">
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
                  className={`relative flex items-center text-[15px] font-semibold capitalize transition-all duration-300 px-3 py-1.5 rounded-md
                    text-gray-200 hover:text-blue-400 ${path === href ? "text-blue-400 font-bold" : ""}`}
                >
                  <i className={`fa ${icon} mr-[8px]`} />
                  {name}
                  {path === href && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-md -z-10 bg-blue-500/15"
                    />
                  )}
                </Link>
              </motion.li>
            ))}
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
              className="sm:hidden absolute top-full left-0 right-0 border-b border-gray-700 bg-gray-900/95 backdrop-blur-md shadow-lg overflow-hidden"
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
                      className={`block text-[16px] font-semibold capitalize transition-all duration-300 px-6 py-3
                        text-gray-200 hover:bg-gray-800 hover:text-blue-400 ${path === href ? "text-blue-400 bg-gray-800" : ""}`}
                    >
                      <i className={`fa ${icon} mr-[8px]`} />
                      {name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Sidebar;
