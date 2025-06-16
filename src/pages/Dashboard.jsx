// src/pages/Dashboard.jsx

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import LinkGrid from "../components/LinkGrid";
import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import useDebounceSearch from "../hooks/useDebounceSearch"; // ✅ import hook

export default function Dashboard() {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Debounced value (delayed by 500ms)
  const debouncedSearch = useDebounceSearch(searchTerm);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Welcome to your Link Vault 🔐
        </h1>

        <Searchbar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="mt-6 flex justify-center">
          <Link
            to="/new-link"
            className="text-sm text-blue-600 hover:underline font-medium"
          >
            Add a new link
          </Link>
        </div>

        {/* ✅ Pass debounced search term to LinkGrid */}
        <div id="link-grid">
          <LinkGrid searchTerm={debouncedSearch} />
        </div>
      </div>
    </div>
  );
}
