import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { AuthContext } from "./AuthContext";

// ✅ AuthProvider component to wrap around the app
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Firebase user object
  const [loading, setLoading] = useState(true); // Track auth state loading

  useEffect(() => {
    // ✅ Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Done loading once state is known
    });

    // ✅ Cleanup listener on component unmount
    return () => unsubscribe();
  }, []);

  // ✅ Logout function
  function logout() {
    return signOut(auth);
  }

  const value = {
    user,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
      {/* ✅ Render children only after auth state is known */}
    </AuthContext.Provider>
  );
}
