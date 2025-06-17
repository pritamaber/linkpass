// src/pages/Home.jsx

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome to LinkPass
        </h1>
        <p className="text-gray-600">Your smart bookmarking tool.</p>
        <Link
          to="/login"
          className="w-full text-sm px-3 py-2 rounded bg-blue-100 text-blue-600 hover:bg-blue-200 transition disabled:opacity-50"
        >
          Login to continue
        </Link>
      </div>
    </div>
  );
}
