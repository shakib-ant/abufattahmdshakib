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
            className={`group p-[calc((14/375)*100vw)] lg:p-[calc((32/1920)*100vw)] flex flex-col justify-between gap-[calc((12/375)*100vw)] lg:gap-[calc((24/1920)*100vw)] transition-all duration-300 hover:bg-[#141414] cursor-pointer relative ${
              !isRightCol ? "border-r border-[#222222]" : ""
            } ${!isBottomRow ? "border-b border-[#222222]" : ""}`}
          >
            {/* Top Label */}
            <span className="font-fustat text-[calc((11/375)*100vw)] lg:text-[calc((14/1920)*100vw)] text-[#808080] group-hover:text-[#A0A0A0] transition-colors duration-200 font-medium">
              {item.label}
            </span>

            {/* Icon Box */}
            <div className="w-[calc((36/375)*100vw)] h-[calc((36/375)*100vw)] lg:w-[calc((48/1920)*100vw)] lg:h-[calc((48/1920)*100vw)] rounded-[calc((8/375)*100vw)] lg:rounded-[calc((12/1920)*100vw)] bg-[#1A1A1A] border border-[#2A2A2A] group-hover:border-[#E25822]/40 flex items-center justify-center text-[#E25822] shadow-inner transition-colors duration-200">
              {item.icon && <item.icon className="w-[calc((18/375)*100vw)] h-[calc((18/375)*100vw)] lg:w-[calc((22/1920)*100vw)] lg:h-[calc((22/1920)*100vw)] text-[#E25822]" />}
            </div>

            {/* Value & Copy Button */}
            <div className="flex items-center justify-between gap-[calc((8/375)*100vw)] lg:gap-[calc((8/1920)*100vw)] w-full">
              <span className="font-fustat text-[calc((13/375)*100vw)] lg:text-[calc((16/1920)*100vw)] font-semibold text-[#F0F0F0] group-hover:text-[#E25822] transition-colors duration-200 truncate">
                {item.value}
              </span>

              {item.copyable && (
                <button
                  type="button"
                  onClick={(e) => handleCopy(e, item.id, item.value)}
                  className="p-[calc((6/375)*100vw)] lg:p-[calc((6/1920)*100vw)] rounded-[calc((6/375)*100vw)] lg:rounded-[calc((6/1920)*100vw)] bg-[#181818] border border-transparent hover:border-[#2C2C2C] text-[#808080] hover:text-[#E25822] transition-all duration-200 outline-none shrink-0 relative z-10"
                  title="Copy to clipboard"
                >
                  {copiedId === item.id ? (
                    <Check className="w-[calc((14/375)*100vw)] h-[calc((14/375)*100vw)] lg:w-[calc((14/1920)*100vw)] lg:h-[calc((14/1920)*100vw)] text-green-400" />
                  ) : (
                    <Copy className="w-[calc((14/375)*100vw)] h-[calc((14/375)*100vw)] lg:w-[calc((14/1920)*100vw)] lg:h-[calc((14/1920)*100vw)] text-[#E25822]" />
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
