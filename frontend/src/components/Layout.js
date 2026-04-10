import { useState } from "react";
import Navbar from "./Navbar";
import { Link, useLocation } from "react-router-dom";

function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex h-screen bg-[#0f172a] text-white">

      {/* 📱 MOBILE HEADER */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-[#020617]">
        <h1 className="text-lg font-bold text-teal-400">CRM</h1>
        <button onClick={() => setOpen(!open)}>☰</button>
      </div>

      {/* 📌 SIDEBAR */}
      <div
        className={`
          fixed md:relative z-40 top-0 left-0 h-full w-64 bg-[#020617] p-6
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          flex flex-col justify-between
        `}
      >
        {/* Top Section */}
        <div>
          <h1 className="text-2xl font-bold text-teal-400 mb-10 hidden md:block">
            CRM
          </h1>

          <ul className="space-y-4">
            <Link to="/">
              <li
                className={`p-2 rounded cursor-pointer ${
                  location.pathname === "/"
                    ? "bg-teal-500"
                    : "hover:bg-white/10"
                }`}
              >
                Dashboard
              </li>
            </Link>

            <Link to="/new">
              <li
                className={`p-2 rounded cursor-pointer ${
                  location.pathname === "/new"
                    ? "bg-teal-500"
                    : "hover:bg-white/10"
                }`}
              >
                New Lead
              </li>
            </Link>
          </ul>
        </div>

        {/* Bottom Footer */}
        <div className="text-sm text-gray-400 mt-10">
          © 2026 CRM System
        </div>
      </div>

      {/* 🧭 MAIN CONTENT */}
      <div className="flex-1 flex flex-col w-full">

        {/* push content below mobile header */}
        <div className="md:hidden h-16"></div>

        <div className="px-4 md:px-8 py-6 space-y-6 overflow-y-auto">
          <Navbar />

          <div className="space-y-6">
            {children}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Layout;