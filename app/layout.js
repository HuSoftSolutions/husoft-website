import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Husoft Solutions",
  description: "We know tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
			   <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-S07SNYEVS3"
      />
      <Script
        strategy="afterInteractive"
				id="google-analytics"
      >
				{`
			
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'G-S07SNYEVS3');

				`}

			</Script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
