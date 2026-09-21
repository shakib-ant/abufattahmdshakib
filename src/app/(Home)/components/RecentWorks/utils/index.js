"use client";

import { useState } from "react";

// Image Hook
export const useImageFallback = () => {
  const [imgError, setImgError] = useState(false);

  const handleImageError = () => {
    setImgError(true);
  };

  return { imgError, handleImageError };
};
