// src/components/RedirectIfAuth.jsx

import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/**
 * RedirectIfAuth - if already logged in, redirect to /dashboard
 */
export default function RedirectIfAuth({ children }) {
  const { user } = useAuth();

  // If already logged in, redirect to dashboard
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
