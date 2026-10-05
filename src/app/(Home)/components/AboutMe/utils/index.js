"use client";

import React, { useState, useEffect, useRef } from "react";

// Star Icon
export const FourPointStar = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[calc((16/375)*100vw)] h-[calc((16/375)*100vw)] lg:w-[calc((20/1920)*100vw)] lg:h-[calc((20/1920)*100vw)] text-[#E25822] shrink-0 mt-[calc((3/375)*100vw)] lg:mt-[calc((4/1920)*100vw)]"
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
      className="font-fustat text-[calc((32/375)*100vw)] lg:text-[calc((54/1920)*100vw)] font-bold text-[#E25822] leading-none shrink-0"
    >
      {count}
      {suffix}
    </span>
  );
}
