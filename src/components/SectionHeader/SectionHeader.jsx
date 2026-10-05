"use client";

import React from "react";

export default function SectionHeader({
  text,
  title,
  normalText,
  highlight,
  highlightText,
  firstLine,
  secondLine,
  lines,
  children,
  textSize = "text-[calc((40/375)*100vw)] lg:text-[calc((64/1920)*100vw)]",
  normalColor,
  titleColor,
  highlightColor,
  className = "",
  as: Component = "h2",
}) {
  // Color resolution: base color #D9D9D9, primary/highlight color #E54F1F
  const defaultNormalColor = normalColor || "text-[#D9D9D9]";
  const defaultHighlightColor = highlightColor || titleColor || "text-[#E54F1F]";

  const formatColorProps = (colorVal) => {
    if (!colorVal) return {};
    if (colorVal.startsWith("#") || colorVal.startsWith("rgb") || colorVal.startsWith("hsl")) {
      return { style: { color: colorVal } };
    }
    return { className: colorVal };
  };

  const normalColorProps = formatColorProps(defaultNormalColor);
  const highlightColorProps = formatColorProps(defaultHighlightColor);

  // Direct children
  if (children) {
    return (
      <div className={`relative z-10 text-center ${className}`}>
        <Component
          className={`font-bebasnNeue font-normal ${textSize} leading-[100%] tracking-[0] text-center select-none uppercase`}
          {...highlightColorProps}
        >
          {children}
        </Component>
      </div>
    );
  }

  // Explicit two lines passed via firstLine & secondLine
  if (firstLine && secondLine) {
    return (
      <div className={`relative z-10 text-center ${className}`}>
        <Component
          className={`font-bebasnNeue font-normal ${textSize} leading-[100%] tracking-[0] text-center select-none uppercase flex flex-col items-center justify-center gap-[calc((4/375)*100vw)] lg:gap-[calc((6/1920)*100vw)]`}
        >
          <span {...normalColorProps}>{firstLine}</span>
          <span {...highlightColorProps}>{secondLine}</span>
        </Component>
      </div>
    );
  }

  // Array of lines
  if (Array.isArray(lines) && lines.length > 0) {
    return (
      <div className={`relative z-10 text-center ${className}`}>
        <Component
          className={`font-bebasnNeue font-normal ${textSize} leading-[100%] tracking-[0] text-center select-none uppercase flex flex-col items-center justify-center gap-[calc((4/375)*100vw)] lg:gap-[calc((6/1920)*100vw)]`}
        >
          {lines.map((line, idx) => (
            <span key={idx} {...(idx === 0 ? normalColorProps : highlightColorProps)}>
              {line}
            </span>
          ))}
        </Component>
      </div>
    );
  }

  const fullText = text || title || normalText || "";
  const highlightStr = highlight || highlightText || "";

  const renderContent = () => {
    if (!fullText) return null;

    // Multi-line string with newline (e.g. "LET’S TURN YOUR\nIDEA INTO REALITY")
    if (fullText.includes("\n")) {
      const splitLines = fullText.split("\n");
      return (
        <span className="flex flex-col items-center justify-center gap-[calc((4/375)*100vw)] lg:gap-[calc((6/1920)*100vw)]">
          {splitLines.map((line, idx) => (
            <span key={idx} {...(idx === 0 ? normalColorProps : highlightColorProps)}>
              {line}
            </span>
          ))}
        </span>
      );
    }

    // Explicit highlight provided
    if (highlightStr) {
      const index = fullText.toLowerCase().indexOf(highlightStr.toLowerCase());
      if (index !== -1) {
        const before = fullText.slice(0, index);
        const matchedHighlight = fullText.slice(index, index + highlightStr.length);
        const after = fullText.slice(index + highlightStr.length);

        return (
          <>
            {before && <span {...normalColorProps}>{before}</span>}
            <span {...highlightColorProps}>{matchedHighlight}</span>
            {after && <span {...normalColorProps}>{after}</span>}
          </>
        );
      }
    }

    // Single-line title (e.g. "ABOUT ME") -> pure #E54F1F
    return <span {...highlightColorProps}>{fullText}</span>;
  };

  return (
    <div className={`relative z-10 text-center ${className}`}>
      <Component
        className={`font-bebasnNeue font-normal ${textSize} leading-[100%] tracking-[0] text-center select-none uppercase`}
      >
        {renderContent()}
      </Component>
    </div>
  );
}
