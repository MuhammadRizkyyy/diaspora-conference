import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/PageLoader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "1st Indonesian Diaspora Business Summit 2026",
  description:
    "The 1st Indonesian Diaspora Business Summit 2026 — October 12, 2026, The Ritz-Carlton Jakarta, Pacific Place. Organized by IDN-Preneur Global Network together with IDN Global.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="font-sans text-gray-700 bg-white antialiased">
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
