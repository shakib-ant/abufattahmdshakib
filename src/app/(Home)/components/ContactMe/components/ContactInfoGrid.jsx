"use client";

import React from "react";
import { Copy, Check } from "lucide-react";
import { contactInfoData } from "../data";
import { useCopyClipboard } from "../utils";

export default function ContactInfoGrid() {
  const { copiedId, handleCopy } = useCopyClipboard();

  return (
    <div className="w-full h-[calc((403/375)*100vw)] lg:w-[calc((575.6/1920)*100vw)] lg:h-[calc((600/1920)*100vw)] shrink-0 grid grid-cols-2 grid-rows-3 border-t lg:border-t-0 border-[#222222] bg-[#0E0E0E] mx-auto lg:mx-0">
      {contactInfoData.map((item, index) => {
        const isRightCol = (index + 1) % 2 === 0;
        const isBottomRow = index >= contactInfoData.length - 2;

        return (
          <a
            key={item.id}
            href={item.link}
            target={item.link.startsWith("http") ? "_blank" : "_self"}
            rel="noreferrer"
            className={`group py-[calc((24/375)*100vw)] px-[calc((16/375)*100vw)] lg:p-[calc((30/1920)*100vw)] lg:w-[calc((287.8/1920)*100vw)] lg:h-[calc((200/1920)*100vw)] flex flex-col justify-between transition-all duration-300 hover:bg-[#141414] cursor-pointer relative ${
              !isRightCol ? "border-r border-[#222222]" : "lg:border-r lg:border-[#222222]"
            } ${!isBottomRow ? "border-b border-[#222222]" : ""}`}
          >
            {/* Top Label */}
            <span className="font-fustat font-medium text-[calc((14/375)*100vw)] lg:text-[calc((14/1920)*100vw)] leading-[130%] text-[#B3B3B3] transition-colors duration-200">
              {item.label}
            </span>

            {/* Icon Box */}
            <div className="w-[calc((24/375)*100vw)] h-[calc((24/375)*100vw)] lg:w-[calc((48/1920)*100vw)] lg:h-[calc((48/1920)*100vw)] rounded-[calc((6.86/375)*100vw)] lg:rounded-[calc((13.71/1920)*100vw)] bg-[#1A1A1A] border border-[#2A2A2A] group-hover:border-[#E25822]/40 flex items-center justify-center text-[#E25822] shadow-inner transition-colors duration-200">
              {item.icon && (
                <item.icon className="w-[calc((10.63/375)*100vw)] h-[calc((10.53/375)*100vw)] lg:w-[calc((20.5/1920)*100vw)] lg:h-[calc((20.32/1920)*100vw)] text-[#E25822]" />
              )}
            </div>

            {/* Value & Copy Button */}
            <div className="flex items-center justify-between gap-[calc((8/375)*100vw)] lg:gap-[calc((8/1920)*100vw)] w-full">
              <span className="font-fustat font-semibold text-[calc((14/375)*100vw)] lg:text-[calc((16/1920)*100vw)] leading-[130%] text-[#D9D9D9] group-hover:text-[#E25822] transition-colors duration-200 truncate">
                {item.value}
              </span>

              {item.copyable && (
                <button
                  type="button"
                  onClick={(e) => handleCopy(e, item.id, item.value)}
                  className="p-[calc((4/375)*100vw)] lg:p-[calc((6/1920)*100vw)] rounded-[calc((6/375)*100vw)] lg:rounded-[calc((6/1920)*100vw)] bg-[#181818] border border-transparent hover:border-[#2C2C2C] text-[#808080] hover:text-[#E25822] transition-all duration-200 outline-none shrink-0 relative z-10"
                  title="Copy to clipboard"
                >
                  {copiedId === item.id ? (
                    <Check className="w-[calc((10/375)*100vw)] h-[calc((10/375)*100vw)] lg:w-[calc((20/1920)*100vw)] lg:h-[calc((20/1920)*100vw)] text-green-400" />
                  ) : (
                    <Copy className="w-[calc((10/375)*100vw)] h-[calc((10/375)*100vw)] lg:w-[calc((20/1920)*100vw)] lg:h-[calc((20/1920)*100vw)] text-[#E25822]" />
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
