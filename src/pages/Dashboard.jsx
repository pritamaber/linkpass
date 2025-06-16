// src/pages/Dashboard.jsx

import { useAuth } from "../context/AuthContext";
import LinkGrid from "../components/LinkGrid";
import { Link } from "react-router-dom";

/**
 * Dashboard - main app page after login
 * Shows the user's saved links and option to add a new one
 */
export default function Dashboard() {
  const { user } = useAuth(); // Access the current logged-in user

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Welcome to your Link Vault 🔐
        </h1>

        {/* Add New Link Button */}
        <div className="mt-6 flex justify-center">
          <Link
            to="/new-link"
            className="text-sm text-blue-600 hover:underline font-medium"
          >
            Add a new link
          </Link>
        </div>

        {/* Link Grid Display */}
        <div id="link-grid">
          <LinkGrid />
        </div>
      </div>
    </div>
  );
}
