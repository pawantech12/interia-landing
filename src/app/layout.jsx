import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Interia — Modern Interior Design Studio",
    template: "%s | Interia",
  },
  description:
    "Interia is a modern interior design studio crafting elegant, functional, and timeless spaces for homes, offices, and commercial interiors.",
  keywords: [
    "Interia",
    "Interior Design",
    "Modern Interior Design",
    "Luxury Interiors",
    "Home Interior Design",
    "Office Interior Design",
    "Interior Studio",
    "Minimal Interior",
  ],
  authors: [{ name: "Pawan Kumavat" }],
  creator: "Pawan Kumavat",
  publisher: "Pawan Kumavat",

  openGraph: {
    title: "Interia — Modern Interior Design Studio",
    description:
      "Designing refined interiors with a balance of aesthetics, comfort, and functionality.",
    siteName: "Interia",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <WhatsAppButton />
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
