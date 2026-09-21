"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CommonButton from "@/components/CommonButton/CommonButton";
import "./Navbar.css";

// Navigation Links Data
export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Resume", href: "#resume" },
  { label: "About", href: "#about" },
];

// Social Links Data
export const socialLinks = [
  {
    title: "Phone",
    href: "tel:+1234567890",
    icon: "/share/phone.png",
  },
  {
    title: "Facebook",
    href: "https://facebook.com",
    icon: "/share/facebook.png",
    target: "_blank",
    rel: "noreferrer",
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com",
    icon: "/share/linkdeni.png",
    target: "_blank",
    rel: "noreferrer",
  },
];

// Animation variants
const overlayVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const navContainerVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.65,
      staggerChildren: 0.12,
    },
  },
};

const navItemVariants = {
  hidden: {
    opacity: 0,
    y: -16,
    scale: 0.96,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#work");
  const isClickingRef = useRef(false);

  const handleNavClick = (href) => {
    setActiveNav(href);
    isClickingRef.current = true;
    setTimeout(() => {
      isClickingRef.current = false;
    }, 1600);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isClickingRef.current) return;

      // Page section order from top to bottom
      const pageSections = ["about", "work", "resume"];
      const scrollPosition = window.scrollY + 300;

      for (let i = pageSections.length - 1; i >= 0; i--) {
        const section = document.getElementById(pageSections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          if (scrollPosition >= elementTop) {
            setActiveNav(`#${pageSections[i]}`);
            return;
          }
        }
      }

      if (window.scrollY < 350) {
        setActiveNav("#work");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`relative w-full border-b border-[#1F1F1F] opacity-100 px-4 transition-colors duration-300 ${mobileMenuOpen ? "z-[100] bg-[#0F0F0F]" : "z-20 bg-transparent"}`}>
      <div className="max-w-[1439px] mx-auto w-full">
        {/* Desktop Navbar */}
        <nav className="hidden md:flex w-full py-[16px] px-4 md:px-6 items-center justify-between">
          {/* Nav links */}
          <div className="flex items-center gap-8 md:gap-12">
            <Link href="/" className="flex items-center">
              <Image
                src="/share/shakibLogo.png"
                alt="Shakib Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain hover:opacity-80 transition-opacity"
              />
            </Link>
            {navLinks.map((link) => {
              const isActive = activeNav === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative group py-1 text-sm md:text-base font-fustat inline-flex flex-col items-center transition-colors duration-200 ${
                    isActive ? "text-white font-medium" : "text-neutral-400"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-1 left-0 w-full h-[2px] bg-[#E54F1F] rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out shadow-[0_0_8px_rgba(229,79,31,0.7)]" />

                  {/* Active Indicator: 5px rounded dot with #E54F1F glow shadow */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavDot"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-[#E54F1F] shadow-[0_0_8px_#E54F1F,0_0_12px_#E54F1F]"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Contact Button */}
          <CommonButton
            text="Contact with Me"
            href="#contact"
            icon={Phone}
          />
        </nav>

        {/* Mobile Navbar */}
        <nav className="flex md:hidden items-center justify-between h-[72px] px-[20px] w-full">
          {/* Logo Image */}
          <Link href="/" className="flex items-center">
            <Image
              src="/share/shakibLogo.png"
              alt="Shakib Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
          </Link>

          {/* Hamburger Button */}
          <div className="menu__btn">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${mobileMenuOpen ? "sidebar_active" : ""} menu__icon`}
              aria-label="Toggle navigation menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed inset-0 top-0 left-0 w-screen h-screen h-[100dvh] min-h-screen bg-[#0F0F0F] z-[100] flex flex-col overflow-hidden md:hidden"
              style={{
                background: "linear-gradient(180deg, #3D1609 0%, #241009 12%, #160B07 25%, #160B07 75%, #241009 88%, #3D1609 100%)",
              }}
            >
              {/* Top Header */}
              <div className="w-full border-b border-[#1F1F1F] px-4 shrink-0 z-10">
                <div className="max-w-[1439px] mx-auto w-full">
                  <div className="flex items-center justify-between h-[72px] px-[20px] w-full">
                    <Link
                      href="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center"
                    >
                      <Image
                        src="/share/shakibLogo.png"
                        alt="Shakib Logo"
                        width={40}
                        height={40}
                        className="w-10 h-10 object-contain"
                      />
                    </Link>

                    <div className="menu__btn">
                      <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="menu__icon sidebar_active"
                        aria-label="Close navigation menu"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu Links */}
              <motion.div
                variants={navContainerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col justify-center items-center w-full flex-1 my-auto px-6 py-4 gap-16 z-10 overflow-y-auto"
              >
                <motion.ul variants={navContainerVariants} className="flex flex-col items-center justify-center w-full max-w-[340px]">
                  {navLinks.map((link, index) => {
                    const isMiddle = index === 1;
                    const isActive = activeNav === link.href;
                    return (
                      <motion.li
                        key={link.label}
                        variants={navItemVariants}
                        className={`w-full py-5 text-center ${
                          isMiddle ? "relative border-t border-b border-[#1F1F1F] overflow-hidden" : ""
                        }`}
                      >
                        {isMiddle && (
                          <>
                            {/* Top Beam */}
                            <div className="animate-horizontal-border-beam top-0" style={{ animationDelay: "2s" }} />
                            {/* Bottom Beam */}
                            <div className="animate-horizontal-border-beam bottom-0 top-auto" style={{ animationDelay: "4.5s" }} />
                          </>
                        )}
                        <Link
                          href={link.href}
                          onClick={() => {
                            handleNavClick(link.href);
                            setMobileMenuOpen(false);
                          }}
                          className={`font-extrabold text-2xl sm:text-3xl active:scale-95 transition-transform duration-150 inline-flex flex-col items-center gap-2 ${
                            isActive ? "text-[#E54F1F]" : "text-white"
                          } ${isMiddle ? "relative z-10" : ""}`}
                        >
                          <span>{link.label}</span>
                          {isActive && (
                            <span className="w-[6px] h-[6px] rounded-full bg-[#E54F1F] shadow-[0_0_8px_#E54F1F,0_0_12px_#E54F1F]" />
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </motion.ul>

                {/* Social Icons */}
                <motion.div variants={navContainerVariants} className="flex items-center justify-center gap-6 pt-4 pb-4 shrink-0">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.title}
                      variants={navItemVariants}
                      href={social.href}
                      target={social.target}
                      rel={social.rel}
                      className="flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
                      title={social.title}
                    >
                      <Image
                        src={social.icon}
                        alt={social.title}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                      />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
