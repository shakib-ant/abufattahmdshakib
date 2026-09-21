"use client";

import React from "react";
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

  return (
    <div className="w-full lg:w-[863px] shrink-0 bg-[#0F0F0F] p-6 sm:p-10 flex flex-col justify-center gap-5">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
        {/* Status Message */}
        <AnimatePresence>
          {status === "success" && (
            <motion.div
              variants={alertVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex items-center justify-between gap-3 p-4 rounded-xl bg-[#E54F1F]/15 border border-[#E54F1F]/50 backdrop-blur-md shadow-[0_0_25px_rgba(229,79,31,0.2)] font-fustat text-sm"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="font-medium text-emerald-400">{responseMsg}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  clearTimer();
                  setStatus("idle");
                }}
                className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              variants={alertVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex items-center justify-between gap-3 p-4 rounded-xl bg-[#E54F1F]/15 border border-[#E54F1F]/50 backdrop-blur-md shadow-[0_0_25px_rgba(229,79,31,0.2)] font-fustat text-sm"
            >
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                <span className="font-medium text-red-400">{responseMsg}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  clearTimer();
                  setStatus("idle");
                }}
                className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Close"
              >
                <X className="w-4 h-4" />
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
          className="w-full px-5 py-4 rounded-xl bg-[#1C1C1C] border border-[#282828] font-fustat text-sm text-[#F0F0F0] placeholder-[#606060] outline-none focus:border-[#E54F1F] transition-colors duration-200 disabled:opacity-60"
        />

        {/* Email Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
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
            className="w-full px-5 py-4 rounded-xl bg-[#1C1C1C] border border-[#282828] font-fustat text-sm text-[#F0F0F0] placeholder-[#606060] outline-none focus:border-[#E54F1F] transition-colors duration-200 disabled:opacity-60"
          />
          <input
            type="email"
            name="secondaryEmail"
            value={formData.secondaryEmail}
            onChange={handleChange}
            placeholder="Secondary Email (Optional)"
            disabled={status === "loading"}
            className="w-full px-5 py-4 rounded-xl bg-[#1C1C1C] border border-[#282828] font-fustat text-sm text-[#F0F0F0] placeholder-[#606060] outline-none focus:border-[#E54F1F] transition-colors duration-200 disabled:opacity-60"
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
          className="w-full px-5 py-4 rounded-xl bg-[#1C1C1C] border border-[#282828] font-fustat text-sm text-[#F0F0F0] placeholder-[#606060] outline-none focus:border-[#E54F1F] transition-colors duration-200 disabled:opacity-60"
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
          className="w-full px-5 py-4 rounded-xl bg-[#1C1C1C] border border-[#282828] font-fustat text-sm text-[#F0F0F0] placeholder-[#606060] outline-none focus:border-[#E54F1F] transition-colors duration-200 resize-none disabled:opacity-60"
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-4 rounded-full bg-white text-black font-fustat text-base font-semibold hover:bg-[#E54F1F] hover:text-white active:scale-[0.99] transition-all duration-300 shadow-xl cursor-pointer mt-2 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
