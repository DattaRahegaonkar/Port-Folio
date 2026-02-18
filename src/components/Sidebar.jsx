import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const { isDark, toggleTheme } = useTheme();

  const toggleSidebar = () => setOpen(!open);
  const closeSidebar = () => setOpen(false);

  return (
    <>
      {/* Toggle Button - Top Right on Mobile */}
      <div
        onClick={toggleSidebar}
        className={`sm:hidden fixed top-5 right-4 z-50 border transition-all duration-300 w-[45px] h-[40px] flex items-center justify-center rounded-md cursor-pointer ${
          isDark 
            ? 'border-gray-600 bg-gray-800' 
            : 'border-gray-300 bg-white'
        }`}
      >
        <div
          className={`relative w-[18px] h-[2px] transition-all duration-300 ${
            isDark ? 'bg-gray-300' : 'bg-gray-700'
          } ${open ? "bg-transparent" : ""}`}
        >
          <span
            className={`absolute top-[-6px] left-0 w-[18px] h-[2.5px] transition-transform duration-300 ${
              isDark ? 'bg-gray-300' : 'bg-gray-700'
            } ${open ? "rotate-45 top-0" : ""}`}
          />
          <span
            className={`absolute top-[6px] left-0 w-[18px] h-[2.5px] transition-transform duration-300 ${
              isDark ? 'bg-gray-300' : 'bg-gray-700'
            } ${open ? "-rotate-45 top-0" : ""}`}
          />
        </div>
      </div>

      {/* Top Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 h-[60px] z-40 border-b transition-all duration-300
        ${open ? "translate-y-0" : "-translate-y-full sm:translate-y-0"}
        ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-[#fdf9ff] border-[#e8dfec]'} shadow-sm`}
      >
        <div className="w-full h-full px-[30px] flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <Link
              to="/"
              onClick={closeSidebar}
              className={`text-[28px] font-bold font-[Rubik] transition-colors duration-300 ${
                isDark ? 'text-white hover:text-blue-400' : 'text-[#302e4d] hover:text-blue-600'
              }`}
            >
              PortFolio
            </Link>
          </div>

          {/* Navigation Links - Hidden on mobile, visible on desktop */}
          <ul className="hidden sm:flex items-center space-x-8">
            {[
              { name: "Home", href: "/", icon: "fa-home" },
              { name: "About", href: "/about", icon: "fa-user" },
              { name: "Skills", href: "/skill", icon: "fa-list" },
              { name: "Projects", href: "/project", icon: "fa-envelope" },
              { name: "Contact", href: "/contact", icon: "fa-comments" },
            ].map(({ name, href, icon }) => (
              <li key={href}>
                <Link
                  to={href}
                  className={`flex items-center text-[15px] font-semibold capitalize transition-all duration-300 px-3 py-1.5 rounded-md ${
                    isDark 
                      ? `text-gray-200 hover:text-blue-400 hover:bg-gray-800 ${
                          path === href ? "text-blue-400 font-bold bg-gray-800" : ""
                        }`
                      : `text-[#302e4d] hover:text-blue-600 hover:bg-blue-50 ${
                          path === href ? "text-blue-600 font-bold bg-blue-50" : ""
                        }`
                  }`}
                >
                  <i className={`fa ${icon} mr-[8px]`} />
                  {name}
                </Link>
              </li>
            ))}
            
            {/* Theme Toggle Button */}
            <li>
              <button
                onClick={toggleTheme}
                className={`w-[35px] h-[35px] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  isDark 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                <i className={`fa ${isDark ? 'fa-sun' : 'fa-moon'} text-[16px]`}></i>
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu - Slides down from top */}
        <div className={`sm:hidden absolute top-full left-0 right-0 border-b shadow-lg transition-all duration-300 ${
          isDark ? 'bg-gray-900 border-gray-700' : 'bg-[#fdf9ff] border-[#e8dfec]'
        } ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
          <ul className="py-4 space-y-2">
            {[
              { name: "Home", href: "/", icon: "fa-home" },
              { name: "About", href: "/about", icon: "fa-user" },
              { name: "Skills", href: "/skill", icon: "fa-list" },
              { name: "Projects", href: "/project", icon: "fa-envelope" },
              { name: "Contact", href: "/contact", icon: "fa-comments" },
            ].map(({ name, href, icon }) => (
              <li key={href} onClick={closeSidebar}>
                <Link
                  to={href}
                  className={`block text-[16px] font-semibold capitalize transition-all duration-300 px-6 py-3 ${
                    isDark 
                      ? `text-gray-200 hover:bg-gray-800 hover:text-blue-400 ${
                          path === href ? "text-blue-400 font-bold bg-gray-800" : ""
                        }`
                      : `text-[#302e4d] hover:bg-blue-50 hover:text-blue-600 ${
                          path === href ? "text-blue-600 font-bold bg-blue-50" : ""
                        }`
                  }`}
                >
                  <i className={`fa ${icon} mr-[8px]`} />
                  <span>{name}</span>
                </Link>
              </li>
            ))}
            
            {/* Mobile Theme Toggle */}
            <li className="px-6 py-3">
              <button
                onClick={toggleTheme}
                className={`flex items-center text-[16px] font-semibold capitalize transition-all duration-300 ${
                  isDark 
                    ? 'text-gray-200 hover:text-blue-400' 
                    : 'text-[#302e4d] hover:text-blue-600'
                }`}
              >
                <i className={`fa ${isDark ? 'fa-sun' : 'fa-moon'} mr-[8px]`}></i>
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
