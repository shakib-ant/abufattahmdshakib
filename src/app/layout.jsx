import { fontVariables } from "@/fonts/index";
import { Env } from "@/utils/env";
import "./globals.css";
import RootWrapper from "./root-provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontVariables}>
        <RootWrapper>{children}</RootWrapper>
      </body>
    </html>
  );
}

const heroImageUrl =
  "https://e-commerce-test.sgp1.digitaloceanspaces.com/shakibhero/1791210950491-meheroimage.png";

export const metadata = {
  metadataBase: new URL(Env.site_url || "http://localhost:3000"),
  title: "Abu Fattah Shakib | Web Developer",
  description: "Web Developer Portfolio - Abu Fattah Shakib",
  openGraph: {
    title: "Abu Fattah Shakib | Web Developer",
    description: "Web Developer Portfolio - Abu Fattah Shakib",
    url: Env.site_url || "http://localhost:3000",
    images: [
      {
        url: heroImageUrl,
        width: 1200,
        height: 630,
        alt: "Abu Fattah Shakib",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abu Fattah Shakib | Web Developer",
    description: "Web Developer Portfolio - Abu Fattah Shakib",
    images: [heroImageUrl],
  },
};
