"use client";

import React from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useContactForm, alertVariants } from "../utils";
import ResumeButton from "@/app/(Home)/components/Hero/components/ResumeButton";

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
    <div className="w-full lg:w-[calc((863/1920)*100vw)] shrink-0 bg-[#0F0F0F] p-[calc((16/375)*100vw)] lg:p-[calc((40/1920)*100vw)] flex flex-col justify-center gap-[calc((16/375)*100vw)] lg:gap-[calc((20/1920)*100vw)]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-[calc((16/375)*100vw)] lg:gap-[calc((20/1920)*100vw)] w-full">
        {/* Status Message */}
        <AnimatePresence>
          {status === "success" && (
            <motion.div
              variants={alertVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex items-center justify-between gap-[calc((10/375)*100vw)] lg:gap-[calc((12/1920)*100vw)] p-[calc((12/375)*100vw)] lg:p-[calc((16/1920)*100vw)] rounded-[calc((10/375)*100vw)] lg:rounded-[calc((12/1920)*100vw)] bg-[#E54F1F]/15 border border-[#E54F1F]/50 backdrop-blur-md shadow-[0_0_25px_rgba(229,79,31,0.2)] font-fustat text-[calc((12/375)*100vw)] lg:text-[calc((14/1920)*100vw)]"
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
              className="flex items-center justify-between gap-[calc((10/375)*100vw)] lg:gap-[calc((12/1920)*100vw)] p-[calc((12/375)*100vw)] lg:p-[calc((16/1920)*100vw)] rounded-[calc((10/375)*100vw)] lg:rounded-[calc((12/1920)*100vw)] bg-[#E54F1F]/15 border border-[#E54F1F]/50 backdrop-blur-md shadow-[0_0_25px_rgba(229,79,31,0.2)] font-fustat text-[calc((12/375)*100vw)] lg:text-[calc((14/1920)*100vw)]"
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

        {/* Full Name */}
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
          disabled={status === "loading"}
          className="w-full px-[calc((16/375)*100vw)] lg:px-[calc((20/1920)*100vw)] py-[calc((12/375)*100vw)] lg:py-[calc((16/1920)*100vw)] rounded-[calc((10/375)*100vw)] lg:rounded-[calc((12/1920)*100vw)] bg-[#1C1C1C] border border-[#282828] font-fustat text-[calc((13/375)*100vw)] lg:text-[calc((15/1920)*100vw)] text-[#F0F0F0] placeholder-[#606060] outline-none focus:border-[#E54F1F] transition-colors duration-200 disabled:opacity-60"
        />

        {/* Email Inputs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[calc((16/375)*100vw)] lg:gap-[calc((20/1920)*100vw)]">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
            title="Please enter a valid email address (e.g. name@example.com)"
            required
            disabled={status === "loading"}
            className="w-full px-[calc((16/375)*100vw)] lg:px-[calc((20/1920)*100vw)] py-[calc((12/375)*100vw)] lg:py-[calc((16/1920)*100vw)] rounded-[calc((10/375)*100vw)] lg:rounded-[calc((12/1920)*100vw)] bg-[#1C1C1C] border border-[#282828] font-fustat text-[calc((13/375)*100vw)] lg:text-[calc((15/1920)*100vw)] text-[#F0F0F0] placeholder-[#606060] outline-none focus:border-[#E54F1F] transition-colors duration-200 disabled:opacity-60"
          />
          <input
            type="email"
            name="secondaryEmail"
            value={formData.secondaryEmail}
            onChange={handleChange}
            placeholder="Secondary Email (Optional)"
            disabled={status === "loading"}
            className="w-full px-[calc((16/375)*100vw)] lg:px-[calc((20/1920)*100vw)] py-[calc((12/375)*100vw)] lg:py-[calc((16/1920)*100vw)] rounded-[calc((10/375)*100vw)] lg:rounded-[calc((12/1920)*100vw)] bg-[#1C1C1C] border border-[#282828] font-fustat text-[calc((13/375)*100vw)] lg:text-[calc((15/1920)*100vw)] text-[#F0F0F0] placeholder-[#606060] outline-none focus:border-[#E54F1F] transition-colors duration-200 disabled:opacity-60"
          />
        </div>

        {/* Subject */}
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
          disabled={status === "loading"}
          className="w-full px-[calc((16/375)*100vw)] lg:px-[calc((20/1920)*100vw)] py-[calc((12/375)*100vw)] lg:py-[calc((16/1920)*100vw)] rounded-[calc((10/375)*100vw)] lg:rounded-[calc((12/1920)*100vw)] bg-[#1C1C1C] border border-[#282828] font-fustat text-[calc((13/375)*100vw)] lg:text-[calc((15/1920)*100vw)] text-[#F0F0F0] placeholder-[#606060] outline-none focus:border-[#E54F1F] transition-colors duration-200 disabled:opacity-60"
        />

        {/* Message */}
        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Write down your message"
          required
          disabled={status === "loading"}
          className="w-full px-[calc((16/375)*100vw)] lg:px-[calc((20/1920)*100vw)] py-[calc((12/375)*100vw)] lg:py-[calc((16/1920)*100vw)] rounded-[calc((10/375)*100vw)] lg:rounded-[calc((12/1920)*100vw)] bg-[#1C1C1C] border border-[#282828] font-fustat text-[calc((13/375)*100vw)] lg:text-[calc((15/1920)*100vw)] text-[#F0F0F0] placeholder-[#606060] outline-none focus:border-[#E54F1F] transition-colors duration-200 resize-none disabled:opacity-60"
        />

        {/* Submit Button */}
        <ResumeButton
          as="button"
          type="submit"
          showLeftIcon={false}
          disabled={status === "loading"}
          loading={status === "loading"}
          text={status === "loading" ? "Sending Message..." : "Send Message"}
          rightIcon={
            <Send className="w-[calc((16/375)*100vw)] h-[calc((16/375)*100vw)] lg:w-[calc((18/1920)*100vw)] lg:h-[calc((18/1920)*100vw)] stroke-[2.2]" />
          }
          className="w-full mt-[calc((8/375)*100vw)] lg:mt-[calc((12/1920)*100vw)] disabled:opacity-70 disabled:cursor-not-allowed"
        />
      </form>
    </div>
  );
}
