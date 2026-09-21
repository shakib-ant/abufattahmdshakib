"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    secondaryEmail: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic
  };

  return (
    <div className="w-full lg:w-[863px] shrink-0 bg-[#0F0F0F] p-6 sm:p-10 flex flex-col justify-center gap-5">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
        {/* Full Name */}
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="w-full px-5 py-4 rounded-xl bg-[#1C1C1C] border border-[#282828] font-fustat text-sm text-[#F0F0F0] placeholder-[#606060] outline-none focus:border-[#E25822] transition-colors duration-200"
        />

        {/* Email Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full px-5 py-4 rounded-xl bg-[#1C1C1C] border border-[#282828] font-fustat text-sm text-[#F0F0F0] placeholder-[#606060] outline-none focus:border-[#E25822] transition-colors duration-200"
          />
          <input
            type="text"
            name="secondaryEmail"
            value={formData.secondaryEmail}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full px-5 py-4 rounded-xl bg-[#1C1C1C] border border-[#282828] font-fustat text-sm text-[#F0F0F0] placeholder-[#606060] outline-none focus:border-[#E25822] transition-colors duration-200"
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
          className="w-full px-5 py-4 rounded-xl bg-[#1C1C1C] border border-[#282828] font-fustat text-sm text-[#F0F0F0] placeholder-[#606060] outline-none focus:border-[#E25822] transition-colors duration-200"
        />

        {/* Message */}
        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Write down your message"
          required
          className="w-full px-5 py-4 rounded-xl bg-[#1C1C1C] border border-[#282828] font-fustat text-sm text-[#F0F0F0] placeholder-[#606060] outline-none focus:border-[#E25822] transition-colors duration-200 resize-none"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 rounded-full bg-white text-black font-fustat text-base font-semibold hover:bg-neutral-200 active:scale-[0.99] transition-all duration-300 shadow-xl cursor-pointer mt-2"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
