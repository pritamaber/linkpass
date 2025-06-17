// src/pages/Profile.jsx

import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Your Profile
        </h2>

        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <span className="font-medium text-gray-900">Email:</span>
            <p className="mt-1 break-words">{user.email}</p>
          </div>

          <div>
            <span className="font-medium text-gray-900">User ID:</span>
            <p className="mt-1 break-words">{user.uid}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
