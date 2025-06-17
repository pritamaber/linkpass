import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200 px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-sm font-semibold text-blue-700 bg-blue-100 px-3 py-1.5 rounded hover:bg-blue-200 transition"
        >
          LinkPass
        </Link>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              {/* Profile Icon */}

              <Link to="/profile">
                <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-700 hover:ring-2 hover:ring-blue-400 transition">
                  {user.email[0].toUpperCase()}
                </div>
              </Link>
              {/* Logout Button */}
              <button
                onClick={logout}
                className="text-sm px-3 py-1 rounded bg-red-100 text-red-600 hover:bg-red-200 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm px-3 py-1 rounded bg-blue-100 text-blue-600 hover:bg-blue-200"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-sm px-3 py-1 rounded bg-green-100 text-green-600 hover:bg-green-200"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
