import type { Metadata } from "next";
import { Inter, Oswald, Space_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroller } from "@/components/SmoothScroller";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Clix Media - Real Estate Video Marketing",
  description: "Real estate marketing agency website",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/clixmedia_logo.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <div className="noise-overlay" />
        <SmoothScroller>
          <Navbar />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  );
}
