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
 */
export default function LinkGrid() {
  const { user } = useAuth();
  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (!user) return;

    // Query links collection where userId == current user, order by date
    const q = query(
      collection(db, "links"),
      where("userId", "==", user.uid),
      orderBy("createdAt", "desc")
    );

    // Real-time listener
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLinks(items);
    });

    return () => unsubscribe();
  }, [user]);

  if (links.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No links saved yet. Start adding!
      </p>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
      {links.map((link) => (
        <LinkCard key={link.id} link={link} />
      ))}
    </div>
  );
}
