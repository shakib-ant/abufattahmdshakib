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
      <div className="relative z-10 flex flex-col items-center px-[calc((16/375)*100vw)] lg:px-[calc((32/1920)*100vw)]">
        <div className="relative inline-block py-[calc((16/375)*100vw)] lg:py-[calc((24/1920)*100vw)]">
          {/* Base Layer: Text is visible from the very beginning in dark gray */}
          <h1 className="font-signature text-[calc((52/375)*100vw)] lg:text-[calc((128/1920)*100vw)] font-normal text-center flex flex-wrap items-center justify-center gap-x-[calc((16/375)*100vw)] lg:gap-x-[calc((24/1920)*100vw)] leading-[calc((65/375)*100vw)] lg:leading-[calc((160/1920)*100vw)] text-[#333333] select-none pointer-events-none">
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
            className="font-signature text-[calc((52/375)*100vw)] lg:text-[calc((128/1920)*100vw)] font-normal text-center flex flex-wrap items-center justify-center gap-x-[calc((16/375)*100vw)] lg:gap-x-[calc((24/1920)*100vw)] leading-[calc((65/375)*100vw)] lg:leading-[calc((160/1920)*100vw)] absolute inset-0 py-[calc((16/375)*100vw)] lg:py-[calc((24/1920)*100vw)] select-none pointer-events-none"
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
