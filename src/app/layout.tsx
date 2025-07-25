import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Your Page Title",
    description: "Short and meaningful description",
    keywords: ["jwt", "auth", "spring boot", "nextjs", "typescript"],
    authors: [{ name: "Milad Rostami", url: "https://github.com/miladrostami-devjava" }],
    creator: "Milad Rostami",
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#ffffff",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      {/*   <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>*/}
      <body className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          p-8 
          bg-gray-100 
        `}
      >
      <Navbar />
      {children}
      </body>
      </html>
  );
}
