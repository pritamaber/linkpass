// src/components/LinkGrid.jsx

import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { db } from "../services/firebase";
import { useAuth } from "../context/AuthContext";
import LinkCard from "./LinkCard";

/**
 * LinkGrid - shows all saved links for the logged-in user
 * Filters results using the `searchTerm` prop
 */
export default function LinkGrid({ searchTerm = "" }) {
  const { user } = useAuth();
  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (!user) return;

    // Firestore query: only user’s links, ordered by createdAt desc
    const q = query(
      collection(db, "links"),
      where("userId", "==", user.uid),
      orderBy("createdAt", "desc")
    );

    // Real-time snapshot listener
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLinks(items);
    });

    return () => unsubscribe();
  }, [user]);

  // Filter client-side using debounced searchTerm
  const filteredLinks = links.filter(
    (link) =>
      link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      link.url.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredLinks.length === 0) {
    return (
      <p className="text-center text-gray-500">
        {searchTerm
          ? "No matching links found."
          : "No links saved yet. Start adding!"}
      </p>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
      {filteredLinks.map((link) => (
        <LinkCard key={link.id} link={link} />
      ))}
    </div>
  );
}
