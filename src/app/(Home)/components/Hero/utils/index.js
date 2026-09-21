"use client";

import { useState, useEffect } from "react";

// Dot Hook
export const useHeroDot = (delay = 2000) => {
  const [showDot, setShowDot] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDot(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return { showDot };
};
