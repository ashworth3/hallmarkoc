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
  title: "HallmarkOC | IT & Marketing Solutions",
  description:
    "Custom IT consulting, marketing strategy, and real estate flyer design services for business professionals across Orange County. Helping clients improve systems, visibility, and growth since 2019.",
  keywords: [
    "IT consulting Orange County",
    "digital marketing services",
    "real estate flyers",
    "SEO for small business",
    "tech support Orange County",
    "custom marketing strategy",
    "HallmarkOC"
  ],
  openGraph: {
    title: "HallmarkOC | IT & Marketing Solutions",
    description:
      "Tech & marketing solutions tailored for business professionals in Orange County. From IT support to SEO and real estate flyers.",
    url: "https://hallmarkoc.com",
    siteName: "HallmarkOC",
    type: "website"
  },
  twitter: {
  card: "summary_large_image",
  title: "HallmarkOC | IT & Marketing Solutions",
  description:
    "Tech & marketing solutions tailored for business professionals in Orange County.",
  images: ["https://hallmarkoc.com/computer.jpg"]
  },
  metadataBase: new URL("https://hallmarkoc.com")
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
