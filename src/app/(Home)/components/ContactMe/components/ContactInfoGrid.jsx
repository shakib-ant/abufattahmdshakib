"use client";

import React, { useState } from "react";
import { Copy, Check, Phone, Mail, Linkedin, Github, Instagram, Palette } from "lucide-react";
import { contactInfoData } from "../data";

const BehanceIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 text-[#E25822]"
  >
    <path d="M22 7h-7v-2h7v2zm-11.83 3.29c.77-.42 1.33-1.04 1.33-2.07 0-1.74-1.35-2.22-3.12-2.22h-4.38v11h4.74c2.16 0 3.63-1.08 3.63-2.83 0-1.63-1.05-2.58-2.2-2.88zm-3.87-2.38h1.65c.78 0 1.25.32 1.25.97 0 .68-.53.98-1.28.98h-1.62v-1.95zm1.88 6.18h-1.88v-2.17h1.92c.86 0 1.39.38 1.39 1.07 0 .76-.56 1.1-1.43 1.10zm11.75-2.09c-.21-2.26-1.84-3.9-4.22-3.9-2.53 0-4.36 1.84-4.36 4.39 0 2.65 1.76 4.41 4.47 4.41 2.05 0 3.63-1.02 4.14-2.8h-1.94c-.31.78-.97 1.14-1.95 1.14-1.25 0-2.18-.75-2.35-2.11h6.24c.02-.37.03-.76.01-1.13zm-6.24-.76c.18-1.12 1.01-1.77 2.08-1.77 1.05 0 1.91.66 2.05 1.77h-4.13z" />
  </svg>
);

const getContactIcon = (id) => {
  switch (id) {
    case 1:
      return <Phone className="w-5 h-5 text-[#E25822]" />;
    case 2:
      return <Mail className="w-5 h-5 text-[#E25822]" />;
    case 3:
      return <Linkedin className="w-5 h-5 text-[#E25822]" />;
    case 4:
      return <Github className="w-5 h-5 text-[#E25822]" />;
    case 5:
      return <BehanceIcon />;
    case 6:
      return <Instagram className="w-5 h-5 text-[#E25822]" />;
    default:
      return <Palette className="w-5 h-5 text-[#E25822]" />;
  }
};

export default function ContactInfoGrid() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex-1 w-full grid grid-cols-2 border-t lg:border-t-0 lg:border-r border-[#222222] bg-[#0E0E0E]">
      {contactInfoData.map((item, index) => {
        const isRightCol = (index + 1) % 2 === 0;
        const isBottomRow = index >= contactInfoData.length - 2;

        return (
          <div
            key={item.id}
            className={`p-3.5 sm:p-6 md:p-8 flex flex-col justify-between gap-3 sm:gap-6 transition-colors duration-300 hover:bg-[#121212] ${
              !isRightCol ? "border-r border-[#222222]" : ""
            } ${!isBottomRow ? "border-b border-[#222222]" : ""}`}
          >
            {/* Top Label */}
            <span className="font-fustat text-[11px] sm:text-sm text-[#808080] font-medium">
              {item.label}
            </span>

            {/* Icon Box */}
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-[#E25822] shadow-inner">
              {getContactIcon(item.id)}
            </div>

            {/* Copy Button */}
            <div className="flex items-center gap-2">
              <a
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
                className="font-fustat text-sm sm:text-base font-semibold text-[#F0F0F0] hover:text-[#E25822] transition-colors duration-200 truncate"
              >
                {item.value}
              </a>

              {item.copyable && (
                <button
                  type="button"
                  onClick={() => handleCopy(item.id, item.value)}
                  className="p-1 rounded text-[#808080] hover:text-[#E25822] transition-colors duration-200 outline-none shrink-0"
                  title="Copy to clipboard"
                >
                  {copiedId === item.id ? (
                    <Check className="w-3.5 h-3.5 text-green-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-[#E25822]" />
                  )}
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
