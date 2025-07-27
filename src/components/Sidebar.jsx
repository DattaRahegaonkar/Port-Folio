import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const toggleSidebar = () => setOpen(!open);
  const closeSidebar = () => setOpen(false);

  return (
    <>
      {/* Toggle Button - Top Right on Mobile */}
      <div
        onClick={toggleSidebar}
        className="sm:hidden fixed top-5 right-4 z-50 border border-gray-300 bg-white w-[45px] h-[40px] flex items-center justify-center rounded-md cursor-pointer"
      >
        <div className={`relative w-[18px] h-[2px] bg-gray-700 transition-all duration-300 ${open ? "bg-transparent" : ""}`}>
          <span
            className={`absolute top-[-6px] left-0 w-[18px] h-[2.5px] bg-gray-700 transition-transform duration-300 ${
              open ? "rotate-45 top-0" : ""
            }`}
          />
          <span
            className={`absolute top-[6px] left-0 w-[18px] h-[2.5px] bg-gray-700 transition-transform duration-300 ${
              open ? "-rotate-45 top-0" : ""
            }`}
          />
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[270px] z-40 border-r transition-all duration-300
        ${open ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}
        bg-[#fdf9ff] border-[#e8dfec]`}
      >
        <div className="absolute top-0 left-0 w-full h-full p-[30px] overflow-y-auto">
          {/* Logo */}
          <div className="logo py-[30px]">
            <Link
              to="/"
              onClick={closeSidebar}
              className="text-[40px] font-bold font-[Rubik] px-[10px] inline-block leading-[50px] text-[#302e4d]"
            >
              Folio
            </Link>
          </div>

          {/* Navigation */}
          <ul className="nav mt-[80px] space-y-1">
            {[
              { name: "Home", href: "/home", icon: "fa-home" },
              { name: "About", href: "/about", icon: "fa-user" },
              { name: "Skills", href: "/skill", icon: "fa-list" },
              { name: "Projects", href: "/project", icon: "fa-envelope" },
              { name: "Contact", href: "/contact", icon: "fa-comments" },
            ].map(({ name, href, icon }) => (
              <li key={href} onClick={closeSidebar}>
                <Link
                  to={href}
                  className={`block text-[16px] font-semibold leading-[45px] border-b capitalize transition-all duration-300 hover:pl-[5px]
                    border-[#e8dfec] text-[#302e4d]
                    ${path === href ? "text-blue-600 font-bold" : ""}
                  `}
                >
                  <i className={`fa ${icon} mr-[5px]`} />
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
