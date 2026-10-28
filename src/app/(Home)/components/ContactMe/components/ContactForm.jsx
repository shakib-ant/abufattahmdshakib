"use client";

import React from "react";
import { Send, CheckCircle2, AlertCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useContactForm, alertVariants } from "../utils";
import ResumeButton from "@/components/ResumeButton/ResumeButton";

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
        <ResumeButton
          type="submit"
          disabled={status === "loading"}
          loading={status === "loading"}
          text={status === "loading" ? "Sending Message..." : "Send Message"}
          icon={<Send className="w-[calc((16/375)*100vw)] h-[calc((16/375)*100vw)] lg:w-[calc((18/1920)*100vw)] lg:h-[calc((18/1920)*100vw)] text-black stroke-[2.2]" />}
          rightIcon={<Send className="w-[calc((16/375)*100vw)] h-[calc((16/375)*100vw)] lg:w-[calc((18/1920)*100vw)] lg:h-[calc((18/1920)*100vw)] text-white stroke-[2.2]" />}
          className="w-[calc((316/375)*100vw)] lg:w-[calc((717/1920)*100vw)] h-[calc((44/375)*100vw)] lg:h-[calc((56/1920)*100vw)] mt-[calc((40/375)*100vw)] lg:mt-[calc((40/1920)*100vw)] mb-[calc((44/375)*100vw)] lg:mb-0 mx-auto"
        />
      </form>
    </div>
  );
}
