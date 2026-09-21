"use client";

import { useState, useEffect } from "react";

// Loop Array
export const createLoopArray = (arr, minLength = 8) => {
  if (!arr || arr.length === 0) return [];
  let base = [...arr];
  while (base.length < minLength) {
    base = [...base, ...arr];
  }
  return [...base, ...base];
};

// Modal Variants
export const modalOverlayVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const modalContentVariants = {
  initial: { scale: 0.88, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.88, opacity: 0 },
  transition: { type: "spring", stiffness: 350, damping: 25 },
};

// Modal Hook
export const useCaseStudyModal = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return {
    selectedProject,
    mounted,
    handleCardClick,
    handleCloseModal,
  };
};
