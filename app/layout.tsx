import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Plexus AI | ZK-Powered Platform for Autonomous Intelligence",
  description:
    "Plexus AI is a decentralized, zero-knowledge powered network for building, training, and deploying secure AI for robotics and autonomous systems.",
  keywords: [
    "Plexus AI",
    "ZK AI",
    "Autonomous Intelligence",
    "Decentralized AI",
    "Zero-Knowledge Proofs",
    "Secure Robotics",
    "AI Blockchain",
  ],
  authors: [{ name: "Plexus AI Team", url: "http://plexusai.tech" }],
  creator: "Plexus AI",
  metadataBase: new URL("http://plexusai.tech"),
  openGraph: {
    title: "Plexus AI | ZK-Powered Platform for Autonomous Intelligence",
    description:
      "Build, train, and deploy zero-knowledge powered AI for robotics and autonomous systems securely on the decentralized Plexus network.",
    url: "http://plexusai.tech",
    siteName: "Plexus AI",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "http://plexusai.tech/MetaData.png",
        width: 1200,
        height: 630,
        alt: "Plexus AI - Decentralized ZK-Powered Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plexus AI | ZK-Powered Platform for Autonomous Intelligence",
    description:
      "Decentralized platform for secure AI in robotics using zero-knowledge proofs.",
    images: ["http://plexusai.tech/MetaData.png"],
    creator: "cdslabs",
  },
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
