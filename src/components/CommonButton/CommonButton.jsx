"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const CommonButton = ({
  text = "Explore Our Works",
  children,
  icon: Icon,
  href,
  onClick,
  className = "",
  showIcon = true,
  target,
  ...props
}) => {
  const content = (
    <>
      {/* Expanding Hover Background (Acts as icon circle initially, then expands on hover) */}
      <div className="absolute right-[8px] top-1/2 -translate-y-1/2 w-[26px] h-[26px] rounded-full bg-[#FDFDFD] transition-transform duration-700 ease-in-out group-hover:scale-[25] origin-center pointer-events-none z-0" />

      {/* Content Container */}
      <div className="relative z-10 inline-flex items-center justify-center gap-3">
        {/* Button Text */}
        <span className="font-fustat font-semibold text-xs md:text-sm leading-none text-white group-hover:text-[#E54F1F] transition-colors duration-700 ease-in-out whitespace-nowrap">
          {children || text}
        </span>

        {/* Right Icon */}
        {showIcon && (
          <div className="w-[26px] h-[26px] flex items-center justify-center shrink-0">
            {Icon ? (
              React.isValidElement(Icon) ? (
                Icon
              ) : (
                <Icon className="w-3.5 h-3.5 text-[#000000] group-hover:text-[#E54F1F] transition-colors duration-700 ease-in-out stroke-[2.2]" />
              )
            ) : (
              <ArrowUpRight className="w-3.5 h-3.5 text-[#000000] group-hover:text-[#E54F1F] transition-colors duration-700 ease-in-out stroke-[2.2]" />
            )}
          </div>
        )}
      </div>
    </>
  );

  const baseClasses =
    "group relative overflow-hidden inline-flex items-center justify-center bg-[#0F0F0F] border border-[#E6E6E6] hover:border-[#E54F1F] rounded-full pl-[16px] pr-[8px] py-[8px] transition-all duration-700 ease-in-out cursor-pointer select-none";

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        className={`${baseClasses} ${className}`}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};

export default CommonButton;
