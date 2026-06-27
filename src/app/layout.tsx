import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: "AssamPrep | Premium Mock Test Platform for Assam Govt Exams",
  description: "The most comprehensive online mock test platform tailored for Government Exam Aspirants of Assam. Prepare for APSC, ADRE, Assam Police, and more.",
  keywords: ["Assam Mock Test", "APSC CCE Mock Test", "ADRE Mock Test", "Assam Police Mock Test", "Assam Govt Exams", "Assam TET", "Online Test Series Assam"],
  openGraph: {
    title: "AssamPrep | Premium Mock Test Platform",
    description: "Prepare for APSC, ADRE, Assam Police, and more with our premium mock tests and analytics.",
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: "/logo.jpg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
