import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "The Inner Game of Life: Total Dominion | End the Inner War",
  description:
    "End the Inner War and Reclaim Your Throne. A strategic manual on how to seize the wheel of your own existence and stop being a passenger in a journey you are meant to lead.",
  keywords: [
    "inner game",
    "personal development",
    "self mastery",
    "sovereignty",
    "mindset",
    "transformation",
  ],
  openGraph: {
    title: "The Inner Game of Life: Total Dominion",
    description: "End the Inner War and Reclaim Your Throne.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
