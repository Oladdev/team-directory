import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import TaskWidget from "@/components/TaskWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modular Dashboard",
  description: "Personal dashboard built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900 min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-1 max-w-5xl w-full mx-auto p-6 md:p-8">
          {children}
        </main>
      </body>
    </html>
  );
}