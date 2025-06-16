// src/components/Navbar.jsx

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/**
 * Navbar - shows logo, login/signup or logout based on auth state
 */
export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate("/login");
  }

  return (
    <nav className="bg-white shadow-md px-4 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
      {/* Logo */}
      <Link to="/dashboard" className="text-xl font-bold text-gray-800">
        🔐 LinkPass
      </Link>

      {/* Navigation buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0">
        {!user ? (
          <>
            <Link
              to="/login"
              className="text-gray-700 hover:text-black text-sm"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-gray-700 hover:text-black text-sm"
            >
              Signup
            </Link>
          </>
        ) : (
          <>
            <span className="text-gray-700 text-sm truncate max-w-[180px] sm:max-w-xs overflow-hidden">
              Hi, {user.email}
            </span>
            <button
              onClick={handleLogout}
              className="bg-black text-white text-sm px-4 py-1 rounded hover:bg-gray-800 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
