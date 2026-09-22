"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Waitlist({ onComplete }) {
  useEffect(() => {
    // Disable page scroll during waitlist screen
    document.body.style.overflow = "hidden";

    // As soon as 3s color fill completes, slide screen down immediately
    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 3050);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      exit={{
        y: "100%",
        transition: {
          duration: 1.3,
          ease: [0.65, 0, 0.25, 1],
        },
      }}
      className="fixed inset-0 z-[99999] bg-[#0F0F0F] flex flex-col items-center justify-center select-none overflow-hidden"
    >
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-4 lg:px-8">
        <div className="relative inline-block py-4 lg:py-6">
          {/* Base Layer: Text is visible from the very beginning in dark gray */}
          <h1 className="font-signature text-6xl lg:text-9xl font-normal text-center flex flex-wrap items-center justify-center gap-x-4 lg:gap-x-6 tracking-wide leading-[1.3] text-[#333333] select-none pointer-events-none">
            <span className="whitespace-nowrap">Abu Fattah</span>
            <span className="whitespace-nowrap">Shakib</span>
          </h1>

          {/* Top Layer: Smooth 3-Second Constant Linear Color Fill */}
          <motion.h1
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{
              duration: 3.0,
              ease: "linear",
            }}
            className="font-signature text-6xl lg:text-9xl font-normal text-center flex flex-wrap items-center justify-center gap-x-4 lg:gap-x-6 tracking-wide leading-[1.3] absolute inset-0 py-4 lg:py-6 select-none pointer-events-none"
          >
            {/* Abu Fattah - Pure Solid #D9D9D9 */}
            <span className="text-[#D9D9D9] whitespace-nowrap">Abu Fattah</span>

            {/* Shakib - Pure Solid #E25822 */}
            <span className="text-[#E25822] whitespace-nowrap">Shakib</span>
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
}
