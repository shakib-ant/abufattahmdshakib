import { Fustat, Bebas_Neue } from "next/font/google";

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

// Font list
const fontList = [fustat, bebasNeue];

export const fontVariables = fontList.map((font) => font.variable).join(" ");
