"use client";

import React from "react";

export default function SectionHeader({
  text,
  title,
  normalText,
  highlight,
  highlightText,
  children,
  textSize = "text-4xl sm:text-5xl md:text-6xl xl:text-[64px]",
  normalColor,
  titleColor,
  highlightColor,
  className = "",
  as: Component = "h2",
}) {
  // Color resolution
  const defaultTitleColor = titleColor || normalColor || "text-[#E54F1F]";
  const defaultHighlightColor = highlightColor || "text-[#D9D9D9]";

  const formatColorProps = (colorVal) => {
    if (!colorVal) return {};
    if (colorVal.startsWith("#") || colorVal.startsWith("rgb") || colorVal.startsWith("hsl")) {
      return { style: { color: colorVal } };
    }
    return { className: colorVal };
  };

  const titleColorProps = formatColorProps(defaultTitleColor);
  const highlightColorProps = formatColorProps(defaultHighlightColor);

  // Direct children
  if (children) {
    return (
      <div className={`relative z-10 text-center ${className}`}>
        <Component
          className={`font-bebasnNeue font-normal ${textSize} leading-[100%] tracking-normal text-center select-none uppercase`}
          {...titleColorProps}
        >
          {children}
        </Component>
      </div>
    );
  }

  const fullText = text || title || normalText || "";
  const highlightStr = highlight || highlightText || "";

  const renderContent = () => {
    if (!fullText) return null;

    if (!highlightStr) {
      return <span {...titleColorProps}>{fullText}</span>;
    }

    const index = fullText.toLowerCase().indexOf(highlightStr.toLowerCase());
    if (index === -1) {
      return <span {...titleColorProps}>{fullText}</span>;
    }

    const before = fullText.slice(0, index);
    const matchedHighlight = fullText.slice(index, index + highlightStr.length);
    const after = fullText.slice(index + highlightStr.length);

    return (
      <>
        {before && <span {...titleColorProps}>{before}</span>}
        <span {...highlightColorProps}>{matchedHighlight}</span>
        {after && <span {...titleColorProps}>{after}</span>}
      </>
    );
  };

  return (
    <div className={`relative z-10 text-center ${className}`}>
      <Component
        className={`font-bebasnNeue font-normal ${textSize} leading-[100%] tracking-normal text-center select-none uppercase`}
      >
        {renderContent()}
      </Component>
    </div>
  );
}
