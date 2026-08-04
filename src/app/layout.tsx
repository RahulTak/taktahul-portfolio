import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import {
  PersonSchema,
  WebsiteSchema,
  WebPageSchema,
} from "@/components/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://buildswiftly.in"),

  title: {
    default:
      "Rahul Tak | Senior iOS Engineer | iOS Portfolio",
    template: "%s | Rahul Tak",
  },

  description:
    "Rahul Tak is a Senior iOS Engineer with 9+ years of experience in Swift, SwiftUI, UIKit, Objective-C, MVVM, VIPER and scalable mobile architecture. Explore my resume, projects and professional experience.",

  keywords: [
    "Rahul Tak",
    "Senior iOS Engineer",
    "iOS Developer",
    "Swift Developer",
    "SwiftUI",
    "UIKit",
    "Objective-C",
    "Mobile Architect",
    "Portfolio",
    "Resume",
    "BuildSwiftly",
  ],

  authors: [
    {
      name: "Rahul Tak",
      url: "https://buildswiftly.in",
    },
  ],

  creator: "Rahul Tak",

  publisher: "Rahul Tak",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buildswiftly.in",
    siteName: "BuildSwiftly",

    title:
      "Rahul Tak | Senior iOS Engineer | Resume & Portfolio",

    description:
      "Senior iOS Engineer with 9+ years of experience building scalable iOS applications using Swift, SwiftUI and UIKit.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rahul Tak - Senior iOS Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Rahul Tak | Senior iOS Engineer",

    description:
      "Senior iOS Engineer | Swift | SwiftUI | UIKit",

    creator: "@iHR_ahul",

    images: ["/og-image.png"],
  },

  category: "Technology",
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
        <PersonSchema />
        <WebsiteSchema />
        <WebPageSchema />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
