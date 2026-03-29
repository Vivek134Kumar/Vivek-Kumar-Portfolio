import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vivek-Kumar Portfolio",
  description: "Personal Portfolio of a Python & AI Engineer",
  icons: {
    icon: "/Logo.png",
  },
};

import SmoothScroll from "@/components/SmoothScroll";
import BootLoader from "@/components/BootLoader";
import MatrixBackground from "@/components/MatrixBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${inter.variable} antialiased bg-mission-bg text-mission-text`}
      >
        <BootLoader />
        <MatrixBackground />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
