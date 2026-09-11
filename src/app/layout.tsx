import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/animations/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StacksAman — Digital Products & Software Development",
  description: "StacksAman is the personal digital product studio of Aman, building websites, web applications, custom software and digital experiences around the needs of each project.",
  openGraph: {
    title: "StacksAman — Digital Products & Software Development",
    description: "StacksAman is the personal digital product studio of Aman.",
    url: "https://stacksaman.in",
    siteName: "StacksAman",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <PageTransition>
          <main className="flex-grow flex flex-col">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
