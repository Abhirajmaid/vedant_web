import { Footer, Header } from "@/components";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const myFont = localFont({
  src: "../public/HousttelySignature-GOonZ.ttf",
  variable: "--font-house",
});

export const metadata: Metadata = {
  title: "Vedant Construction",
  description:
    "The Company Has Been In The Business For Over Seven (12) Years And Their Success Rate In This Industry, Residential And Commercial Industry Speaks For Itself With Its Management In Depth Knowledge Of This Business The Company Is In A Good Position To Grow And Expand Its Business And Increase It’s Turn-Over Profit. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body data-barba="wrapper">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
