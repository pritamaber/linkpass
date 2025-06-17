// src/components/Footer.jsx

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-sm text-gray-600 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
        {/* Left - Text */}
        <p className="text-center">
          © {new Date().getFullYear()} Pritam A. – All rights reserved.
        </p>

        {/* Right - Links */}
        <div className="flex gap-4 text-blue-600">
          <a
            href="https://impritam.com"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            impritam.com
          </a>
          <a
            href="https://projects.impritam.com"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Projects
          </a>
          <a
            href="https://github.com/pritamaber/linkpass"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
