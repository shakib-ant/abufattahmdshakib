"use client";

import React, { useState, useEffect, useRef } from "react";

// Star Icon
export const FourPointStar = ({ className = "" }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-[calc((20/375)*100vw)] h-[calc((20/375)*100vw)] lg:w-[calc((32/1920)*100vw)] lg:h-[calc((32/1920)*100vw)] shrink-0 opacity-100 ${className}`}
  >
    <path
      d="M14.4994 4.05521C15.0149 2.66222 16.9851 2.66222 17.5006 4.05521L20.0661 10.9886C20.2282 11.4265 20.5735 11.7718 21.0114 11.9339L27.9448 14.4994C29.3378 15.0149 29.3378 16.9851 27.9448 17.5006L21.0114 20.0661C20.5735 20.2282 20.2282 20.5735 20.0661 21.0114L17.5006 27.9448C16.9851 29.3378 15.0149 29.3378 14.4994 27.9448L11.9339 21.0114C11.7718 20.5735 11.4265 20.2282 10.9886 20.0661L4.05521 17.5006C2.66222 16.9851 2.66222 15.0149 4.05521 14.4994L10.9886 11.9339C11.4265 11.7718 11.7718 11.4265 11.9339 10.9886L14.4994 4.05521Z"
      fill="#D0481C"
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
      className="inline-flex items-start font-bebas-neue font-normal font-[400] text-[calc((40/375)*100vw)] lg:text-[calc((60/1920)*100vw)] leading-[130%] tracking-[0%] text-[#D0481C] shrink-0 opacity-100 select-none"
    >
      <span>{count}</span>
      {suffix && (
        <span className="inline-flex items-start justify-center font-bebas-neue font-normal font-[400] text-[calc((40/375)*100vw)] lg:text-[calc((60/1920)*100vw)] leading-[100%] tracking-[0%] text-[#D0481C] opacity-100 lg:w-[calc((25/1920)*100vw)] lg:h-[calc((42/1920)*100vw)]">
          {suffix}
        </span>
      )}
    </span>
  );
}
