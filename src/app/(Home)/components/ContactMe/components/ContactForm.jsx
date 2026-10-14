"use client";

import React, { useRef, useState, useEffect } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useContactForm, alertVariants } from "../utils";

export default function ContactForm() {
  const {
    formData,
    status,
    setStatus,
    responseMsg,
    clearTimer,
    handleChange,
    handleSubmit,
  } = useContactForm();

  const buttonRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isSlideFinished, setIsSlideFinished] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
        }
      },
      { threshold: 0.85 }
    );

    const current = buttonRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <div className="w-full lg:w-[calc((863/1920)*100vw)] shrink-0 bg-[#0F0F0F] px-[calc((16/375)*100vw)] pt-[calc((40/375)*100vw)] pb-0 lg:py-[calc((40/1920)*100vw)] lg:px-[calc((40/1920)*100vw)] flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-[calc((316/375)*100vw)] lg:w-[calc((717/1920)*100vw)] mx-auto">
        {/* Status Message */}
        <AnimatePresence>
          {status === "success" && (
            <motion.div
              variants={alertVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full mb-[calc((16/375)*100vw)] lg:mb-[calc((20/1920)*100vw)] flex items-center justify-between gap-[calc((10/375)*100vw)] lg:gap-[calc((12/1920)*100vw)] p-[calc((12/375)*100vw)] lg:p-[calc((16/1920)*100vw)] rounded-[calc((8/375)*100vw)] lg:rounded-[calc((8/1920)*100vw)] bg-[#E54F1F]/15 border border-[#E54F1F]/50 backdrop-blur-md shadow-[0_0_25px_rgba(229,79,31,0.2)] font-fustat text-[calc((12/375)*100vw)] lg:text-[calc((14/1920)*100vw)]"
            >
              <div className="flex items-center gap-[calc((10/375)*100vw)] lg:gap-[calc((12/1920)*100vw)]">
                <CheckCircle2 className="w-[calc((18/375)*100vw)] h-[calc((18/375)*100vw)] lg:w-[calc((20/1920)*100vw)] lg:h-[calc((20/1920)*100vw)] text-emerald-400 shrink-0" />
                <span className="font-medium text-emerald-400">{responseMsg}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  clearTimer();
                  setStatus("idle");
                }}
                className="p-[calc((4/375)*100vw)] lg:p-[calc((4/1920)*100vw)] rounded-[calc((6/375)*100vw)] lg:rounded-[calc((8/1920)*100vw)] text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Close"
              >
                <X className="w-[calc((14/375)*100vw)] h-[calc((14/375)*100vw)] lg:w-[calc((16/1920)*100vw)] lg:h-[calc((16/1920)*100vw)]" />
              </button>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              variants={alertVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full mb-[calc((16/375)*100vw)] lg:mb-[calc((20/1920)*100vw)] flex items-center justify-between gap-[calc((10/375)*100vw)] lg:gap-[calc((12/1920)*100vw)] p-[calc((12/375)*100vw)] lg:p-[calc((16/1920)*100vw)] rounded-[calc((8/375)*100vw)] lg:rounded-[calc((8/1920)*100vw)] bg-[#E54F1F]/15 border border-[#E54F1F]/50 backdrop-blur-md shadow-[0_0_25px_rgba(229,79,31,0.2)] font-fustat text-[calc((12/375)*100vw)] lg:text-[calc((14/1920)*100vw)]"
            >
              <div className="flex items-center gap-[calc((10/375)*100vw)] lg:gap-[calc((12/1920)*100vw)]">
                <AlertCircle className="w-[calc((18/375)*100vw)] h-[calc((18/375)*100vw)] lg:w-[calc((20/1920)*100vw)] lg:h-[calc((20/1920)*100vw)] text-red-400 shrink-0" />
                <span className="font-medium text-red-400">{responseMsg}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  clearTimer();
                  setStatus("idle");
                }}
                className="p-[calc((4/375)*100vw)] lg:p-[calc((4/1920)*100vw)] rounded-[calc((6/375)*100vw)] lg:rounded-[calc((8/1920)*100vw)] text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Close"
              >
                <X className="w-[calc((14/375)*100vw)] h-[calc((14/375)*100vw)] lg:w-[calc((16/1920)*100vw)] lg:h-[calc((16/1920)*100vw)]" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Inputs Container (width: 717, height: 356 on LG / width: 316, height: 428 on Mobile) */}
        <div className="w-full flex flex-col gap-[calc((20/375)*100vw)] lg:gap-[calc((20/1920)*100vw)]">
          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            value={formData.fullName || ""}
            onChange={handleChange}
            placeholder="Full Name"
            required
            disabled={status === "loading"}
            className="w-full h-[calc((52/375)*100vw)] lg:h-[calc((52/1920)*100vw)] px-[calc((20/375)*100vw)] lg:px-[calc((20/1920)*100vw)] rounded-[calc((8/375)*100vw)] lg:rounded-[calc((8/1920)*100vw)] bg-[#1F1F1F] border border-[#282828] font-fustat font-medium text-[calc((16/375)*100vw)] lg:text-[calc((16/1920)*100vw)] text-[#D9D9D9] placeholder-[#808080] leading-[100%] outline-none focus:border-[#E54F1F] transition-colors duration-200 disabled:opacity-60"
          />

          {/* Email & Phone Inputs */}
          <div className="w-full flex flex-col lg:flex-row gap-[calc((20/375)*100vw)] lg:gap-[calc((20/1920)*100vw)]">
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              placeholder="Email Address"
              pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
              title="Please enter a valid email address (e.g. name@example.com)"
              required
              disabled={status === "loading"}
              className="w-full lg:w-[calc((348.5/1920)*100vw)] h-[calc((52/375)*100vw)] lg:h-[calc((52/1920)*100vw)] px-[calc((20/375)*100vw)] lg:px-[calc((20/1920)*100vw)] rounded-[calc((8/375)*100vw)] lg:rounded-[calc((8/1920)*100vw)] bg-[#1F1F1F] border border-[#282828] font-fustat font-medium text-[calc((16/375)*100vw)] lg:text-[calc((16/1920)*100vw)] text-[#D9D9D9] placeholder-[#808080] leading-[100%] outline-none focus:border-[#E54F1F] transition-colors duration-200 disabled:opacity-60"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
              placeholder="Phone Number"
              disabled={status === "loading"}
              className="w-full lg:w-[calc((348.5/1920)*100vw)] h-[calc((52/375)*100vw)] lg:h-[calc((52/1920)*100vw)] px-[calc((20/375)*100vw)] lg:px-[calc((20/1920)*100vw)] rounded-[calc((8/375)*100vw)] lg:rounded-[calc((8/1920)*100vw)] bg-[#1F1F1F] border border-[#282828] font-fustat font-medium text-[calc((16/375)*100vw)] lg:text-[calc((16/1920)*100vw)] text-[#D9D9D9] placeholder-[#808080] leading-[100%] outline-none focus:border-[#E54F1F] transition-colors duration-200 disabled:opacity-60"
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            name="subject"
            value={formData.subject || ""}
            onChange={handleChange}
            placeholder="Subject"
            required
            disabled={status === "loading"}
            className="w-full h-[calc((52/375)*100vw)] lg:h-[calc((52/1920)*100vw)] px-[calc((20/375)*100vw)] lg:px-[calc((20/1920)*100vw)] rounded-[calc((8/375)*100vw)] lg:rounded-[calc((8/1920)*100vw)] bg-[#1F1F1F] border border-[#282828] font-fustat font-medium text-[calc((16/375)*100vw)] lg:text-[calc((16/1920)*100vw)] text-[#D9D9D9] placeholder-[#808080] leading-[100%] outline-none focus:border-[#E54F1F] transition-colors duration-200 disabled:opacity-60"
          />

          {/* Message */}
          <textarea
            name="message"
            rows={5}
            value={formData.message || ""}
            onChange={handleChange}
            placeholder="Write down your message"
            required
            disabled={status === "loading"}
            className="w-full h-[calc((140/375)*100vw)] lg:h-[calc((140/1920)*100vw)] pt-[calc((20/375)*100vw)] lg:pt-[calc((20/1920)*100vw)] px-[calc((20/375)*100vw)] lg:px-[calc((20/1920)*100vw)] rounded-[calc((8/375)*100vw)] lg:rounded-[calc((8/1920)*100vw)] bg-[#1F1F1F] border border-[#282828] font-fustat font-medium text-[calc((16/375)*100vw)] lg:text-[calc((16/1920)*100vw)] text-[#D9D9D9] placeholder-[#808080] leading-[130%] outline-none focus:border-[#E54F1F] transition-colors duration-200 resize-none disabled:opacity-60"
          />
        </div>

        {/* Submit Button */}
        <button
          ref={buttonRef}
          type="submit"
          disabled={status === "loading"}
          className="group relative overflow-hidden inline-flex items-center justify-center w-[calc((316/375)*100vw)] lg:w-[calc((717/1920)*100vw)] h-[calc((56/375)*100vw)] lg:h-[calc((56/1920)*100vw)] rounded-[calc((40/375)*100vw)] lg:rounded-[calc((40/1920)*100vw)] bg-[#E54F1F] active:scale-[0.98] transition-transform duration-200 cursor-pointer select-none mt-[calc((40/375)*100vw)] lg:mt-[calc((40/1920)*100vw)] mb-[calc((44/375)*100vw)] lg:mb-0 disabled:opacity-70 disabled:cursor-not-allowed mx-auto"
        >
          {/* Base Layer: #E54F1F background with #FDFDFD text & Send icon beside it */}
          <div className="w-full h-full flex items-center justify-center gap-[calc((8/375)*100vw)] lg:gap-[calc((8/1920)*100vw)] text-[#FDFDFD] px-[calc((16/375)*100vw)] lg:px-[calc((16/1920)*100vw)]">
            <span className="font-fustat font-semibold text-[calc((16/375)*100vw)] lg:text-[calc((18/1920)*100vw)] leading-[100%] whitespace-nowrap">
              {status === "loading" ? "Sending Message..." : "Send Message"}
            </span>
            {status === "loading" ? (
              <Loader2 className="w-[calc((16/375)*100vw)] h-[calc((16/375)*100vw)] lg:w-[calc((18/1920)*100vw)] lg:h-[calc((18/1920)*100vw)] animate-spin" />
            ) : (
              <Send className="w-[calc((16/375)*100vw)] h-[calc((16/375)*100vw)] lg:w-[calc((18/1920)*100vw)] lg:h-[calc((18/1920)*100vw)] stroke-[2.2]" />
            )}
          </div>

          {/* Sliding Layer: Long pill button with text & send icon, dragged across from the left side */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: isRevealed ? "0%" : "-100%" }}
            transition={{ duration: 3.0, ease: "linear", delay: 0.5 }}
            onAnimationComplete={() => setIsSlideFinished(true)}
            className="absolute inset-0 w-full h-full bg-[#FDFDFD] text-[#121212] rounded-[calc((40/375)*100vw)] lg:rounded-[calc((40/1920)*100vw)] pointer-events-none flex items-center justify-center gap-[calc((8/375)*100vw)] lg:gap-[calc((8/1920)*100vw)] px-[calc((16/375)*100vw)] lg:px-[calc((16/1920)*100vw)] shadow-[4px_0_12px_rgba(0,0,0,0.18)]"
          >
            {/* Text & Send icon on the long white button */}
            <span className="font-fustat font-semibold text-[calc((16/375)*100vw)] lg:text-[calc((18/1920)*100vw)] leading-[100%] whitespace-nowrap">
              {status === "loading" ? "Sending Message..." : "Send Message"}
            </span>
            {status === "loading" ? (
              <Loader2 className="w-[calc((16/375)*100vw)] h-[calc((16/375)*100vw)] lg:w-[calc((18/1920)*100vw)] lg:h-[calc((18/1920)*100vw)] animate-spin text-[#121212]" />
            ) : (
              <motion.div
                initial={{ rotate: 45 }}
                animate={{ rotate: isSlideFinished ? 0 : 45 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-center origin-center"
              >
                <Send className="w-[calc((16/375)*100vw)] h-[calc((16/375)*100vw)] lg:w-[calc((18/1920)*100vw)] lg:h-[calc((18/1920)*100vw)] stroke-[2.2] text-[#121212]" />
              </motion.div>
            )}
          </motion.div>
        </button>
      </form>
    </div>
  );
}
