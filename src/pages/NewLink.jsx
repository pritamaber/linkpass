// src/pages/NewLink.jsx

import LinkForm from "../components/LinkForm";
import { useAuth } from "../context/AuthContext";

export default function NewLink() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-xl mx-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
          📎 Add New Link
        </h2>
        <LinkForm user={user} />
      </div>
    </div>
  );
}
