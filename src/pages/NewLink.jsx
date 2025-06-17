// src/pages/NewLink.jsx

import { Link } from "react-router-dom";
import LinkForm from "../components/LinkForm";
import { useAuth } from "../context/AuthContext";

export default function NewLink() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-xl mx-auto">
        {/* Top row: Heading + Back */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800 text-center w-full">
            📎 Add New Link
          </h2>

          {/* Back to Dashboard Button */}
          <Link
            to="/dashboard"
            className="absolute left-4 top-4 text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition"
          >
            ← Back
          </Link>
        </div>

        <LinkForm user={user} />
      </div>
    </div>
  );
}
