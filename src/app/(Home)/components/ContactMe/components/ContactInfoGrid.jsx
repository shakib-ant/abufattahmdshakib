"use client";

import React from "react";
import { Copy, Check } from "lucide-react";
import { contactInfoData } from "../data";
import { useCopyClipboard } from "../utils";

export default function ContactInfoGrid() {
  const { copiedId, handleCopy } = useCopyClipboard();

  return (
    <div className="flex-1 w-full grid grid-cols-2 border-t lg:border-t-0 lg:border-r border-[#222222] bg-[#0E0E0E]">
      {contactInfoData.map((item, index) => {
        const isRightCol = (index + 1) % 2 === 0;
        const isBottomRow = index >= contactInfoData.length - 2;

        return (
          <a
            key={item.id}
            href={item.link}
            target={item.link.startsWith("http") ? "_blank" : "_self"}
            rel="noreferrer"
            className={`group p-3.5 sm:p-6 md:p-8 flex flex-col justify-between gap-3 sm:gap-6 transition-all duration-300 hover:bg-[#141414] cursor-pointer relative ${
              !isRightCol ? "border-r border-[#222222]" : ""
            } ${!isBottomRow ? "border-b border-[#222222]" : ""}`}
          >
            {/* Top Label */}
            <span className="font-fustat text-[11px] sm:text-sm text-[#808080] group-hover:text-[#A0A0A0] transition-colors duration-200 font-medium">
              {item.label}
            </span>

            {/* Icon Box */}
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] group-hover:border-[#E25822]/40 flex items-center justify-center text-[#E25822] shadow-inner transition-colors duration-200">
              {item.icon && <item.icon className="w-5 h-5 text-[#E25822]" />}
            </div>

            {/* Value & Copy Button */}
            <div className="flex items-center justify-between gap-2 w-full">
              <span className="font-fustat text-sm sm:text-base font-semibold text-[#F0F0F0] group-hover:text-[#E25822] transition-colors duration-200 truncate">
                {item.value}
              </span>

              {item.copyable && (
                <button
                  type="button"
                  onClick={(e) => handleCopy(e, item.id, item.value)}
                  className="p-1.5 rounded-md bg-[#181818] border border-transparent hover:border-[#2C2C2C] text-[#808080] hover:text-[#E25822] transition-all duration-200 outline-none shrink-0 relative z-10"
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
          </a>
        );
      })}
    </div>
  );
}
