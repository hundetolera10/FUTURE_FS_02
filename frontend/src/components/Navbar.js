import { logout } from "../auth";

function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white/5 backdrop-blur-lg px-6 py-3 rounded-xl shadow-md">

      {/* Left: Page Title */}
      <h1 className="text-lg font-bold text-teal-400">
        Dashboard
      </h1>

      {/* Right: Profile + Logout */}
      <div className="flex items-center gap-4">

        {/* Profile */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
            H
          </div>
          <span className="text-sm">Admin</span>
        </div>

        {/* Logout */}
        <button
          onClick={() => {
            logout();
            window.location.href = "/login";
          }}
          className="bg-red-500 hover:bg-red-600 transition px-3 py-1 rounded text-sm"
        >
          Logout
        </button>

      </div>
    </div>
  );
}

export default Navbar;