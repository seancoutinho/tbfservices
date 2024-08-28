import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/home/header/page";
import { Nunito_Sans } from "@next/font/google";
import Footer from "@/components/home/footer/page";

const nunitoSans = Nunito_Sans({
  weight: ["400", "700", "900"], // Specify the weights you need
  subsets: ["latin"], // Specify the subsets you need
});

export const metadata: Metadata = {
  title: "TBF Services",
  description: "Solutions for truckers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
