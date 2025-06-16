import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import AuthProvider from "./context/AuthProvider"; // ✅ import AuthProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        {/* ✅ provide auth context */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
