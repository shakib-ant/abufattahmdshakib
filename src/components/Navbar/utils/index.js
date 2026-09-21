"use client";

import { useState, useEffect, useRef } from "react";

// Animation Variants
export const overlayVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const navContainerVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.65,
      staggerChildren: 0.12,
    },
  },
};

export const navItemVariants = {
  hidden: {
    opacity: 0,
    y: -16,
    scale: 0.96,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Active Section
export const calculateActiveSection = (links, focusRatio = 0.35) => {
  if (typeof window === "undefined") return "";

  const viewportFocusY = window.scrollY + window.innerHeight * focusRatio;
  let currentActive = "";

  links.forEach((link) => {
    if (!link.href || !link.href.startsWith("#")) return;
    const id = link.href.substring(1);
    const section = document.getElementById(id);
    if (section) {
      const rect = section.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      const elementBottom = elementTop + section.offsetHeight;

      if (viewportFocusY >= elementTop && viewportFocusY < elementBottom) {
        currentActive = link.href;
      }
    }
  });

  return currentActive;
};

// Navbar Hook
export const useNavbar = (links = []) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const isClickingRef = useRef(false);

  const handleNavClick = (href) => {
    setActiveNav(href);
    isClickingRef.current = true;
    setTimeout(() => {
      isClickingRef.current = false;
    }, 1600);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Sticky Glass
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (isClickingRef.current) return;

      const active = calculateActiveSection(links);
      setActiveNav(active);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return {
    mobileMenuOpen,
    setMobileMenuOpen,
    activeNav,
    setActiveNav,
    isScrolled,
    handleNavClick,
  };
};
