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
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-gray-800">
        🔐 LinkPass
      </Link>

      {/* Navigation buttons */}
      <div className="space-x-4">
        {!user ? (
          <>
            <Link to="/login" className="text-gray-700 hover:text-black">
              Login
            </Link>
            <Link to="/signup" className="text-gray-700 hover:text-black">
              Signup
            </Link>
          </>
        ) : (
          <>
            <span className="text-gray-700 text-sm">Hi, {user.email}</span>
            <button
              onClick={handleLogout}
              className="bg-black text-white px-4 py-1 rounded hover:bg-gray-800 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
