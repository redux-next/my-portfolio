
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gyanam | Full-Stack Developer",
  description:
    "Gyanam's developer portfolio featuring full-stack web applications, AI-powered projects, and software development work.",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "Gyanam | Full-Stack Developer",
    description:
      "Explore Gyanam's projects, technical skills, and work in web development and AI.",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Gyanam | Full-Stack Developer",
    description:
      "Explore Gyanam's projects, technical skills, and work in web development and AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}