// src/pages/Home.jsx

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white rounded-xl shadow p-6 space-y-6 border border-gray-200">
        {/* Title */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold text-gray-800">
            🔗 Welcome to LinkPass
          </h1>
          <p className="text-sm text-gray-600">
            A smarter way to save and organize links — with tags, search, and
            mobile-friendly UI.
          </p>
        </div>

        {/* Author Info */}
        <div className="bg-gray-100 rounded-md p-4 text-sm text-gray-700 space-y-1">
          <p>
            Built with 💻 by{" "}
            <span className="font-medium text-gray-800">Pritam Das.</span>
          </p>
          <p>
            Portfolio:{" "}
            <a
              href="https://impritam.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              impritam.com
            </a>
          </p>
          <p>
            Projects:{" "}
            <a
              href="https://projects.impritam.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              projects.impritam.com
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/pritamaber/linkpass"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/pritamaber/linkpass
            </a>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <Link
            to="/login"
            className="text-center w-full text-sm px-3 py-2 rounded bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="text-center w-full text-sm px-3 py-2 rounded bg-green-100 text-green-700 hover:bg-green-200 transition"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
