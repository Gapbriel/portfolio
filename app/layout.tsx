import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabriel Panebianco | Frontend Portfolio",
  description:
    "Experienced Frontend Developer specialized in React and modern web technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className="transition-colors duration-300 bg-white text-gray-900 dark:bg-zinc-900 dark:text-white">
        <Navbar />
        <main className="min-h-screen px-4 md:px-8 lg:px-16 py-10">
          {children}
        </main>
        <footer className="text-center text-sm py-6 text-gray-400 dark:text-gray-500 border-t border-gray-200 dark:border-zinc-700 mt-10">
          © {new Date().getFullYear()} Gabriel Panebianco. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
