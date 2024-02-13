import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Husoft Solutions",
  description: "We know tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-NW8HMRND" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
