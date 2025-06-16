// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Main App component which contains all routes
import App from "./App";

// Global Tailwind CSS import
import "./index.css";

// Render the app inside the root div
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* App contains all the routes */}
    </BrowserRouter>
  </React.StrictMode>
);
