// src/hooks/useDebounceSearch.js

import { useState, useEffect } from "react";

/**
 * Custom debounce hook for search inputs
 * @param {string} value - The search term
 * @param {number} delay - Delay in ms (default 500ms)
 * @returns {string} - Debounced value
 */
export default function useDebounceSearch(value, delay = 500) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => clearTimeout(timeout); // cleanup
  }, [value, delay]);

  return debounced;
}
