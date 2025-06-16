// src/components/AuthLayout.jsx

import { Link } from "react-router-dom";

/**
 * AuthLayout - wraps around login/signup forms
 * Provides centered form layout with optional heading and link
 */
export default function AuthLayout({
  title,
  children,
  subtitle,
  linkText,
  linkTo,
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-gray-600 mb-6 text-center">
            {subtitle}{" "}
            <Link
              to={linkTo}
              className="text-blue-500 hover:underline font-medium"
            >
              {linkText}
            </Link>
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
