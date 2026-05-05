import "./globals.css";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title:
    "Husoft Solutions — SaaS for golf operators",
  description:
    "The studio behind TeeFindr, Leadr.golf, and TeeWeathr. Booking, leaderboards, and weather — built for the golf industry.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <GoogleTagManager gtmId="GTM-NW8HMRND" />
      <body>{children}</body>
    </html>
  );
}
