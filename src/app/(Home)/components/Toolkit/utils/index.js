import { useState, useEffect, useRef } from "react";

// Scroll Reveal
export function useScrollReveal(options = { threshold: 0.2 }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, options);

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return [sectionRef, isVisible];
}

// Cell Info
export function getGridCellInfo(r, c, data = []) {
  const isContent = r >= 1 && r <= 4 && c >= 1 && c <= 5;
  const rowIndex = r - 1;
  const colIndex = c - 1;
  const dataIndex = rowIndex * 5 + colIndex;
  const item = isContent ? data[dataIndex] || null : null;

  // Cell Pattern
  const isShaded =
    isContent &&
    (((r === 1 || r === 3) && (c === 2 || c === 4)) ||
      ((r === 2 || r === 4) && c === 3));

  // Line Delay
  const lineDelay = r * 180 + c * 90;

  return {
    isContent,
    item,
    isShaded,
    lineDelay,
    hasRightBorder: c < 6,
    hasBottomBorder: r < 5,
  };
}
