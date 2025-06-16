// src/App.jsx
import { Routes, Route } from "react-router-dom";

// Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

// Components
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import RedirectIfAuth from "./components/RedirectIfAuth";
import NewLink from "./pages/NewLink";

// Route tree for the app
export default function App() {
  return (
    <>
      <Navbar /> {/* ✅ Always show Navbar on top */}
      <Routes>
        {/* {Login route + redirect on already auth} */}
        <Route
          path="/login"
          element={
            <RedirectIfAuth>
              <Login />
            </RedirectIfAuth>
          }
        />
        {/* {Register route + redirect on already auth} */}
        <Route
          path="/signup"
          element={
            <RedirectIfAuth>
              <Signup />
            </RedirectIfAuth>
          }
        />
        {/* 🔐 Protect the new link route */}
        <Route
          path="/new-link"
          element={
            <ProtectedRoute>
              <NewLink />
            </ProtectedRoute>
          }
        />

        {/* 🔐 Protect the dashboard route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}
