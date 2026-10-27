import type { Metadata, Viewport } from "next";
import { Manrope, Newsreader } from "next/font/google";
import { SITE_URL, site } from "./site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  publisher: site.name,
  keywords: site.keywords,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_US",
    firstName: "Noman",
    lastName: "Akhtar",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#07101f",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
