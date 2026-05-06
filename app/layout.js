import "./globals.css";
import Script from "next/script";
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
    "The studio behind TeeFindr, Leadr, and TeeWeathr. Booking, leaderboards, and weather — built for the golf industry.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <GoogleTagManager gtmId="GTM-NW8HMRND" />
      <body>
        {children}
        <Script
          src="https://www.teeweathr.com/api/embed-script/corner?key=c22b7a69-275b-4a85-a1ab-65df066a8e92&course=fox-run-golf-club-ny"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
