import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Swasyaha Solutions | Technology & Digital Solutions",
  description:
    "Swasyaha Solutions provides modern web development, cloud solutions, AI systems, and digital transformation services.",
  keywords: [
    "Swasyaha Solutions",
    "Web Development",
    "Cloud Solutions",
    "AI Solutions",
    "Software Company India"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopBar />
        <Navbar />

        {children}

        <Footer />      </body>
    </html>
  );
}
