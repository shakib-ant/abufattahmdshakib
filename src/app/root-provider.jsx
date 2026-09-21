"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const RootWrapper = ({ children }) => {
  useEffect(() => {
    // Lenis class
    document.documentElement.classList.add("lenis", "lenis-smooth");

    const lenis = new Lenis({
      duration: 1.6, // Smooth glide duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.2,
      infinite: false,
    });

    window.lenis = lenis;

    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement, {
            offset: -40,
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
      document.documentElement.classList.remove("lenis", "lenis-smooth");
      window.lenis = null;
    };
  }, []);

  return <>{children}</>;
};

export default RootWrapper;
