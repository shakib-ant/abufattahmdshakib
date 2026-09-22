"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import Container from "@/components/Container/Container";
import Waitlist from "./components/Waitlist/Waitlist";
import "./components/Hero/Hero.css";

// Lazy load Hero and remaining components
const Hero = dynamic(() => import("./components/Hero/Hero"), { ssr: false });
const CaseStudy = dynamic(() => import("./components/CaseStudy/CaseStudy"), { ssr: false });
const AboutMe = dynamic(() => import("./components/AboutMe/AboutMe"), { ssr: false });
const RecentWorks = dynamic(() => import("./components/RecentWorks/RecentWorks"), { ssr: false });
const Toolkit = dynamic(() => import("./components/Toolkit/Toolkit"), { ssr: false });
const ContactMe = dynamic(() => import("./components/ContactMe/ContactMe"), { ssr: false });

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Proactively preload key assets in background during the 3s intro window
    const imagesToPreload = [
      "/share/lightImage.png",
      "/share/Hero2.svg",
      "/share/shakibLogo.png",
      "https://e-commerce-test.sgp1.digitaloceanspaces.com/profileHeroImage/1790098305125-Hero2.svg"
    ];

    imagesToPreload.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white relative flex flex-col pt-[72px] md:pt-[80px]">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Waitlist key="waitlist" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Spotlight Image */}
      <div className="absolute -top-[120px] lg:-top-[243px] left-1/2 -translate-x-1/2 w-full h-[500px] lg:w-[845px] lg:h-[783px] pointer-events-none z-30 flex justify-center">
        {/* Spotlight Image */}
        <Image
          src="/share/lightImage.png"
          alt="Top Spotlight Light Effect"
          width={845}
          height={783}
          priority
          className="w-full h-full object-cover object-top"
        />

        {/* Falling Dust */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full h-[480px] lg:w-[700px] lg:h-[700px] z-40 overflow-hidden"
          style={{
            clipPath: "polygon(46% 0%, 54% 0%, 98% 100%, 2% 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 60%, transparent 95%)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 60%, transparent 95%)",
          }}
        >
          {/* Layer 1A */}
          <div
            className="animate-dust-fall-1a absolute inset-0 w-full h-[180%]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 14% 19%, rgba(128,128,128,0.7) 0 0.15px, transparent 0.75px),
                radial-gradient(circle at 67% 11%, rgba(128,128,128,0.65) 0 0.15px, transparent 0.75px),
                radial-gradient(circle at 39% 82%, rgba(217,217,217,0.8) 0 0.15px, transparent 0.75px),
                radial-gradient(circle at 83% 41%, rgba(128,128,128,0.55) 0 0.18px, transparent 0.75px),
                radial-gradient(circle at 23% 89%, rgba(128,128,128,0.6) 0 0.15px, transparent 0.7px),
                radial-gradient(circle at 78% 93%, rgba(128,128,128,0.5) 0 0.12px, transparent 0.65px),
                radial-gradient(circle at 49% 33%, rgba(217,217,217,0.85) 0 0.2px, transparent 0.8px),
                radial-gradient(circle at 11% 58%, rgba(128,128,128,0.55) 0 0.12px, transparent 0.65px),
                radial-gradient(circle at 92% 17%, rgba(128,128,128,0.65) 0 0.15px, transparent 0.7px),
                radial-gradient(circle at 31% 47%, rgba(217,217,217,0.75) 0 0.16px, transparent 0.75px),
                radial-gradient(circle at 58% 71%, rgba(217,217,217,0.8) 0 0.18px, transparent 0.75px),
                radial-gradient(circle at 73% 26%, rgba(128,128,128,0.6) 0 0.15px, transparent 0.75px),
                radial-gradient(circle at 45% 15%, rgba(217,217,217,0.85) 0 0.18px, transparent 0.8px),
                radial-gradient(circle at 85% 62%, rgba(128,128,128,0.65) 0 0.15px, transparent 0.7px),
                radial-gradient(circle at 25% 35%, rgba(128,128,128,0.6) 0 0.12px, transparent 0.65px)
              `,
              backgroundSize: "41px 61px, 67px 89px, 97px 121px, 113px 143px, 73px 99px, 53px 79px, 101px 127px, 71px 91px, 83px 109px, 59px 77px, 97px 123px, 79px 103px, 47px 71px, 89px 113px, 63px 83px",
              backgroundPosition: "11px 23px, 79px 37px, 143px 7px, 211px 67px, 41px 127px, 91px 191px, 29px 79px, 109px 47px, 17px 83px, 63px 101px, 131px 29px, 53px 167px, 23px 41px, 83px 11px, 37px 73px",
              filter: "blur(0.1px)",
            }}
          />

          {/* Layer 1B */}
          <div
            className="animate-dust-fall-1b absolute inset-0 w-full h-[180%]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 14% 19%, rgba(128,128,128,0.7) 0 0.15px, transparent 0.75px),
                radial-gradient(circle at 67% 11%, rgba(128,128,128,0.65) 0 0.15px, transparent 0.75px),
                radial-gradient(circle at 39% 82%, rgba(217,217,217,0.8) 0 0.15px, transparent 0.75px),
                radial-gradient(circle at 83% 41%, rgba(128,128,128,0.55) 0 0.18px, transparent 0.75px),
                radial-gradient(circle at 23% 89%, rgba(128,128,128,0.6) 0 0.15px, transparent 0.7px),
                radial-gradient(circle at 78% 93%, rgba(128,128,128,0.5) 0 0.12px, transparent 0.65px),
                radial-gradient(circle at 49% 33%, rgba(217,217,217,0.85) 0 0.2px, transparent 0.8px),
                radial-gradient(circle at 11% 58%, rgba(128,128,128,0.55) 0 0.12px, transparent 0.65px),
                radial-gradient(circle at 92% 17%, rgba(128,128,128,0.65) 0 0.15px, transparent 0.7px),
                radial-gradient(circle at 31% 47%, rgba(217,217,217,0.75) 0 0.16px, transparent 0.75px),
                radial-gradient(circle at 58% 71%, rgba(217,217,217,0.8) 0 0.18px, transparent 0.75px),
                radial-gradient(circle at 73% 26%, rgba(128,128,128,0.6) 0 0.15px, transparent 0.75px),
                radial-gradient(circle at 45% 15%, rgba(217,217,217,0.85) 0 0.18px, transparent 0.8px),
                radial-gradient(circle at 85% 62%, rgba(128,128,128,0.65) 0 0.15px, transparent 0.7px),
                radial-gradient(circle at 25% 35%, rgba(128,128,128,0.6) 0 0.12px, transparent 0.65px)
              `,
              backgroundSize: "41px 61px, 67px 89px, 97px 121px, 113px 143px, 73px 99px, 53px 79px, 101px 127px, 71px 91px, 83px 109px, 59px 77px, 97px 123px, 79px 103px, 47px 71px, 89px 113px, 63px 83px",
              backgroundPosition: "11px 23px, 79px 37px, 143px 7px, 211px 67px, 41px 127px, 91px 191px, 29px 79px, 109px 47px, 17px 83px, 63px 101px, 131px 29px, 53px 167px, 23px 41px, 83px 11px, 37px 73px",
              filter: "blur(0.1px)",
            }}
          />

          {/* Layer 2A */}
          <div
            className="animate-dust-fall-2a absolute inset-0 w-full h-[180%]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 29% 63%, rgba(128,128,128,0.7) 0 0.35px, transparent 1.1px),
                radial-gradient(circle at 85% 17%, rgba(128,128,128,0.65) 0 0.3px, transparent 1.0px),
                radial-gradient(circle at 15% 47%, rgba(128,128,128,0.6) 0 0.25px, transparent 0.9px),
                radial-gradient(circle at 53% 85%, rgba(217,217,217,0.8) 0 0.4px, transparent 1.2px),
                radial-gradient(circle at 91% 57%, rgba(128,128,128,0.65) 0 0.3px, transparent 1.0px),
                radial-gradient(circle at 19% 12%, rgba(128,128,128,0.55) 0 0.25px, transparent 0.9px),
                radial-gradient(circle at 71% 43%, rgba(128,128,128,0.6) 0 0.3px, transparent 1.0px),
                radial-gradient(circle at 37% 24%, rgba(217,217,217,0.75) 0 0.35px, transparent 1.1px),
                radial-gradient(circle at 64% 79%, rgba(128,128,128,0.55) 0 0.28px, transparent 0.95px),
                radial-gradient(circle at 81% 91%, rgba(128,128,128,0.55) 0 0.32px, transparent 1.0px),
                radial-gradient(circle at 41% 33%, rgba(217,217,217,0.8) 0 0.35px, transparent 1.1px)
              `,
              backgroundSize: "53px 77px, 79px 101px, 113px 137px, 65px 89px, 89px 119px, 71px 97px, 97px 127px, 73px 103px, 101px 133px, 81px 113px, 61px 83px",
              backgroundPosition: "37px 67px, 97px 17px, 173px 131px, 57px 217px, 187px 53px, 19px 91px, 127px 37px, 43px 109px, 151px 71px, 83px 197px, 29px 43px",
              filter: "blur(0.15px)",
            }}
          />

          {/* Layer 2B */}
          <div
            className="animate-dust-fall-2b absolute inset-0 w-full h-[180%]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 29% 63%, rgba(128,128,128,0.7) 0 0.35px, transparent 1.1px),
                radial-gradient(circle at 85% 17%, rgba(128,128,128,0.65) 0 0.3px, transparent 1.0px),
                radial-gradient(circle at 15% 47%, rgba(128,128,128,0.6) 0 0.25px, transparent 0.9px),
                radial-gradient(circle at 53% 85%, rgba(217,217,217,0.8) 0 0.4px, transparent 1.2px),
                radial-gradient(circle at 91% 57%, rgba(128,128,128,0.65) 0 0.3px, transparent 1.0px),
                radial-gradient(circle at 19% 12%, rgba(128,128,128,0.55) 0 0.25px, transparent 0.9px),
                radial-gradient(circle at 71% 43%, rgba(128,128,128,0.6) 0 0.3px, transparent 1.0px),
                radial-gradient(circle at 37% 24%, rgba(217,217,217,0.75) 0 0.35px, transparent 1.1px),
                radial-gradient(circle at 64% 79%, rgba(128,128,128,0.55) 0 0.28px, transparent 0.95px),
                radial-gradient(circle at 81% 91%, rgba(128,128,128,0.55) 0 0.32px, transparent 1.0px),
                radial-gradient(circle at 41% 33%, rgba(217,217,217,0.8) 0 0.35px, transparent 1.1px)
              `,
              backgroundSize: "53px 77px, 79px 101px, 113px 137px, 65px 89px, 89px 119px, 71px 97px, 97px 127px, 73px 103px, 101px 133px, 81px 113px, 61px 83px",
              backgroundPosition: "37px 67px, 97px 17px, 173px 131px, 57px 217px, 187px 53px, 19px 91px, 127px 37px, 43px 109px, 151px 71px, 83px 197px, 29px 43px",
              filter: "blur(0.15px)",
            }}
          />

          {/* Layer 3A */}
          <div
            className="animate-dust-fall-3a absolute inset-0 w-full h-[180%]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 43% 29%, rgba(217,217,217,0.9) 0 0.45px, transparent 1.45px),
                radial-gradient(circle at 76% 73%, rgba(128,128,128,0.7) 0 0.38px, transparent 1.3px),
                radial-gradient(circle at 21% 81%, rgba(128,128,128,0.65) 0 0.36px, transparent 1.3px),
                radial-gradient(circle at 62% 19%, rgba(128,128,128,0.65) 0 0.35px, transparent 1.25px),
                radial-gradient(circle at 35% 55%, rgba(217,217,217,0.85) 0 0.42px, transparent 1.4px)
              `,
              backgroundSize: "127px 163px, 181px 223px, 149px 193px, 205px 257px, 137px 181px",
              backgroundPosition: "47px 29px, 148px 133px, 25px 97px, 107px 59px, 35px 71px",
              filter: "blur(0.18px)",
            }}
          />

          {/* Layer 3B */}
          <div
            className="animate-dust-fall-3b absolute inset-0 w-full h-[180%]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 43% 29%, rgba(217,217,217,0.9) 0 0.45px, transparent 1.45px),
                radial-gradient(circle at 76% 73%, rgba(128,128,128,0.7) 0 0.38px, transparent 1.3px),
                radial-gradient(circle at 21% 81%, rgba(128,128,128,0.65) 0 0.36px, transparent 1.3px),
                radial-gradient(circle at 62% 19%, rgba(128,128,128,0.65) 0 0.35px, transparent 1.25px),
                radial-gradient(circle at 35% 55%, rgba(217,217,217,0.85) 0 0.42px, transparent 1.4px)
              `,
              backgroundSize: "127px 163px, 181px 223px, 149px 193px, 205px 257px, 137px 181px",
              backgroundPosition: "47px 29px, 148px 133px, 25px 97px, 107px 59px, 35px 71px",
              filter: "blur(0.18px)",
            }}
          />
        </div>
      </div>

      <Navbar />
      <Container>
        <Hero />
        <CaseStudy />
        <AboutMe />
        <RecentWorks />
        <Toolkit />
        <ContactMe />
      </Container>
    </main>
  );
}

export default Home;