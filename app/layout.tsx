import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noman Akhtar — Senior Full Stack Engineer",
  description:
    "USA-based Senior Full Stack Engineer specializing in TypeScript, Next.js, React, Node.js, Shopify, WordPress, and scalable SaaS products.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
