// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

// Components
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import RedirectIfAuth from "./components/RedirectIfAuth";
import NewLink from "./pages/NewLink";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";

// Route tree for the app
export default function App() {
  return (
    <>
      <Navbar /> {/* ✅ Always show Navbar on top */}
      <Routes>
        {/* {Home page route or "/"} */}
        <Route
          path="/"
          element={
            <RedirectIfAuth redirectTo="/dashboard">
              <Home />
            </RedirectIfAuth>
          }
        />

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
        {/* 🔐 Protect the profile route */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* {Footer } */}
      <Footer />
    </>
  );
}
