"use client";

import React, { useState, useEffect, useRef } from "react";

// Star Icon
export const FourPointStar = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#E25822] shrink-0 mt-1"
  >
    <path
      d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
      fill="currentColor"
    />
  </svg>
);

// Tab Variants
export const tabContentVariants = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: { duration: 0.25, ease: "easeInOut" },
};

// Tab Hook
export const useAboutTabs = (defaultTab = "experience") => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  return { activeTab, setActiveTab };
};

// Counter Hook
export function CountUpItem({ targetNumber, suffix = "+" }) {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let current = 0;
          const step = Math.max(1, Math.floor(targetNumber / 25));
          const timer = setInterval(() => {
            current += step;
            if (current >= targetNumber) {
              setCount(targetNumber);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, 50);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [targetNumber]);

  return (
    <span
      ref={containerRef}
      className="font-fustat text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#E25822] leading-none shrink-0"
    >
      {count}
      {suffix}
    </span>
  );
}
