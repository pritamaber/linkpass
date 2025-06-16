import { createContext, useContext } from "react";

// Create a context object
export const AuthContext = createContext(null);

// Custom hook to use AuthContext easily
export function useAuth() {
  return useContext(AuthContext);
}
