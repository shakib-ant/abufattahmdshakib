import { fontVariables } from "@/fonts/index";
import { Env } from "@/utils/env";
import "./globals.css";
import RootWrapper from "./root-provider";

const heroImageUrl =
  "https://e-commerce-test.sgp1.digitaloceanspaces.com/shakibhero/1791210950491-meheroimage.png";

const siteUrl = Env.site_url || "https://abufattahshakib.com";

export const metadata = {
  title: {
    default: "Abu Fattah Shakib - Full Stack Web Developer",
    template: "%s | Abu Fattah Shakib",
  },
  description:
    "Full Stack Web Developer crafting modern, high-performance web applications.",
  openGraph: {
    title: "Abu Fattah Shakib - Full Stack Web Developer",
    description:
      "Full Stack Web Developer crafting modern, high-performance web applications.",
    url: siteUrl,
    type: "website",
    images: [
      {
        url: heroImageUrl,
        width: 1200,
        height: 630,
        alt: "Abu Fattah Shakib - Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abu Fattah Shakib - Full Stack Web Developer",
    description:
      "Full Stack Web Developer crafting modern, high-performance web applications.",
    images: [heroImageUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://e-commerce-test.sgp1.digitaloceanspaces.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={fontVariables} suppressHydrationWarning>
        <RootWrapper>{children}</RootWrapper>
      </body>
    </html>
  );
}
