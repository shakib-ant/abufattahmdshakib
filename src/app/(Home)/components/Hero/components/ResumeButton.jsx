"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Clipboard Icon
const ResumeDocIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-[calc((18/375)*100vw)] h-[calc((18/375)*100vw)] lg:w-[calc((22/1920)*100vw)] lg:h-[calc((22/1920)*100vw)] text-black shrink-0"
    {...props}
  >
    <rect x="4" y="4" width="16" height="17" rx="3" />
    <path d="M9 2h6a1 1 0 0 1 1 1v2H8V3a1 1 0 0 1 1-1Z" />
    <path d="M8 11h8" />
    <path d="M8 15h5" />
  </svg>
);

import { Loader2 } from "lucide-react";

// Resume Button
export default function ResumeButton({
  as: ComponentProp,
  href = "/share/Abu-Fattah-Md-Shaki-CV.pdf",
  download = "Abu-Fattah-Md-Shakib-CV.pdf",
  target = "_blank",
  rel = "noopener noreferrer",
  type,
  disabled = false,
  loading = false,
  onClick,
  text = "View My Resume",
  icon: LeftIcon,
  rightIcon: RightIcon,
  showLeftIcon = true,
  className = "",
  ...props
}) {
  const isButton = ComponentProp === "button" || type === "submit" || type === "button";
  const Component = isButton ? "button" : Link;

  const widthClasses = className.includes("w-")
    ? ""
    : "w-[calc((204/375)*100vw)] lg:w-[calc((204/1920)*100vw)]";

  const heightClasses = className.includes("h-")
    ? ""
    : "h-[calc((56/375)*100vw)] lg:h-[calc((56/1920)*100vw)]";

  const buttonProps = isButton
    ? {
      type: type || "button",
      disabled: disabled || loading,
      onClick,
    }
    : {
      href,
      download,
      target,
      rel,
    };

  return (
    <Component
      {...buttonProps}
      {...props}
      className={`group relative overflow-hidden inline-flex items-center justify-center bg-white ${widthClasses} ${heightClasses} rounded-[calc((40/375)*100vw)] lg:rounded-[calc((40/1920)*100vw)] p-[calc((16/375)*100vw)] lg:p-[calc((16/1920)*100vw)] active:scale-95 cursor-pointer select-none shrink-0 transition-transform duration-200 ${className}`}
    >
      {/* Circle Sweep */}
      <span className="absolute left-1/2 -bottom-[calc((8/375)*100vw)] lg:-bottom-[calc((8/1920)*100vw)] -translate-x-1/2 translate-y-1/2 w-[calc((240/375)*100vw)] h-[calc((240/375)*100vw)] lg:w-[calc((280/1920)*100vw)] lg:h-[calc((280/1920)*100vw)] bg-[#E25822]/90 rounded-full scale-0 group-hover:scale-[3] transition-transform duration-1000 ease-in-out z-0 pointer-events-none origin-center" />

      {/* Content */}
      {loading ? (
        <div className="relative z-10 flex items-center justify-center gap-[calc((8/375)*100vw)] lg:gap-[calc((8/1920)*100vw)]">
          <Loader2 className="w-[calc((18/375)*100vw)] h-[calc((18/375)*100vw)] lg:w-[calc((22/1920)*100vw)] lg:h-[calc((22/1920)*100vw)] animate-spin text-black" />
          <span className="font-fustat font-[600] text-[calc((16/375)*100vw)] lg:text-[calc((18/1920)*100vw)] leading-[100%] tracking-[0] whitespace-nowrap text-black">
            {text}
          </span>
        </div>
      ) : !showLeftIcon ? (
        <div className="relative z-10 flex items-center justify-center gap-[calc((8/375)*100vw)] lg:gap-[calc((10/1920)*100vw)]">
          <span className="font-fustat font-[600] text-[calc((16/375)*100vw)] lg:text-[calc((18/1920)*100vw)] leading-[100%] tracking-[0] whitespace-nowrap text-black group-hover:text-white transition-colors duration-700 ease-in-out">
            {text}
          </span>
          <span className="flex items-center justify-center shrink-0 transition-all duration-300 transform group-hover:translate-x-[calc((4/375)*100vw)] lg:group-hover:translate-x-[calc((4/1920)*100vw)] group-hover:-translate-y-[calc((2/375)*100vw)] lg:group-hover:-translate-y-[calc((2/1920)*100vw)] text-black group-hover:text-white">
            {RightIcon ? (
              RightIcon
            ) : LeftIcon ? (
              LeftIcon
            ) : (
              <ChevronRight className="w-[calc((18/375)*100vw)] h-[calc((18/375)*100vw)] lg:w-[calc((22/1920)*100vw)] lg:h-[calc((22/1920)*100vw)] stroke-[2.2]" />
            )}
          </span>
        </div>
      ) : (
        <div className="relative z-10 flex items-center gap-[calc((8/375)*100vw)] lg:gap-[calc((8/1920)*100vw)] transform translate-x-[calc((12/375)*100vw)] lg:translate-x-[calc((16/1920)*100vw)] group-hover:-translate-x-[calc((12/375)*100vw)] lg:group-hover:-translate-x-[calc((16/1920)*100vw)] transition-transform duration-700 ease-in-out">
          {/* Left Slot */}
          <span className="w-[calc((18/375)*100vw)] h-[calc((18/375)*100vw)] lg:w-[calc((22/1920)*100vw)] lg:h-[calc((22/1920)*100vw)] flex items-center justify-center shrink-0 overflow-hidden">
            <span className="transition-all duration-700 ease-in-out transform group-hover:-translate-x-[calc((16/375)*100vw)] lg:group-hover:-translate-x-[calc((16/1920)*100vw)] group-hover:opacity-0 flex items-center justify-center">
              {LeftIcon ? LeftIcon : <ResumeDocIcon />}
            </span>
          </span>

          <span className="font-fustat font-[600] text-[calc((16/375)*100vw)] lg:text-[calc((18/1920)*100vw)] leading-[100%] tracking-[0] whitespace-nowrap text-black group-hover:text-white transition-colors duration-700 ease-in-out">
            {text}
          </span>

          {/* Right Slot */}
          <span className="w-[calc((18/375)*100vw)] h-[calc((18/375)*100vw)] lg:w-[calc((22/1920)*100vw)] lg:h-[calc((22/1920)*100vw)] flex items-center justify-center shrink-0 overflow-hidden">
            <span className="transition-all duration-700 ease-in-out transform translate-x-[calc((16/375)*100vw)] lg:translate-x-[calc((16/1920)*100vw)] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 flex items-center justify-center">
              {RightIcon ? (
                RightIcon
              ) : (
                <ChevronRight className="w-[calc((18/375)*100vw)] h-[calc((18/375)*100vw)] lg:w-[calc((22/1920)*100vw)] lg:h-[calc((22/1920)*100vw)] text-white stroke-[2.2]" />
              )}
            </span>
          </span>
        </div>
      )}
    </Component>
  );
}
