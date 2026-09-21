"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CommonButton from "@/components/CommonButton/CommonButton";
import "./Navbar.css";

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
            <Link
              href="#work"
              className="text-neutral-400 hover:text-white transition-colors text-sm md:text-base font-fustat"
            >
              Work
            </Link>
            <Link
              href="#resume"
              className="text-neutral-400 hover:text-white transition-colors text-sm md:text-base font-fustat"
            >
              Resume
            </Link>
            <Link
              href="#about"
              className="text-neutral-400 hover:text-white transition-colors text-sm md:text-base font-fustat"
            >
              About
            </Link>
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
                  <motion.li variants={navItemVariants} className="w-full py-5 text-center">
                    <Link
                      href="#work"
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-extrabold text-2xl sm:text-3xl text-white active:scale-95 transition-transform duration-150 block"
                    >
                      Work
                    </Link>
                  </motion.li>

                  {/* Middle Item */}
                  <motion.li variants={navItemVariants} className="relative border-t border-b border-[#1F1F1F] w-full py-5 text-center overflow-hidden">
                    {/* Top Beam */}
                    <div className="animate-horizontal-border-beam top-0" style={{ animationDelay: "2s" }} />
                    {/* Bottom Beam */}
                    <div className="animate-horizontal-border-beam bottom-0 top-auto" style={{ animationDelay: "4.5s" }} />

                    <Link
                      href="#resume"
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-extrabold text-2xl sm:text-3xl text-white active:scale-95 transition-transform duration-150 block relative z-10"
                    >
                      Resume
                    </Link>
                  </motion.li>

                  <motion.li variants={navItemVariants} className="w-full py-5 text-center">
                    <Link
                      href="#about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-extrabold text-2xl sm:text-3xl text-white active:scale-95 transition-transform duration-150 block"
                    >
                      About
                    </Link>
                  </motion.li>
                </motion.ul>

                {/* Social Icons */}
                <motion.div variants={navContainerVariants} className="flex items-center justify-center gap-6 pt-4 pb-4 shrink-0">
                  {/* Phone */}
                  <motion.a
                    variants={navItemVariants}
                    href="tel:+1234567890"
                    className="flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
                    title="Phone"
                  >
                    <Image
                      src="/share/phone.png"
                      alt="Phone"
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                  </motion.a>

                  {/* Facebook */}
                  <motion.a
                    variants={navItemVariants}
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
                    title="Facebook"
                  >
                    <Image
                      src="/share/facebook.png"
                      alt="Facebook"
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                  </motion.a>

                  {/* LinkedIn */}
                  <motion.a
                    variants={navItemVariants}
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
                    title="LinkedIn"
                  >
                    <Image
                      src="/share/linkdeni.png"
                      alt="LinkedIn"
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}


