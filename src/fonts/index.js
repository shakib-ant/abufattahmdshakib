import { Fustat, Bebas_Neue, Syne, Unbounded, Great_Vibes } from "next/font/google";

const fustat = Fustat({
  subsets: ["latin"],
  variable: "--font-fustat",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  weight: ["400"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
});

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  weight: ["700", "800", "900"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-signature",
  weight: ["400"],
});

// Font list
const fontList = [fustat, bebasNeue, syne, unbounded, greatVibes];

export const fontVariables = fontList.map((font) => font.variable).join(" ");
