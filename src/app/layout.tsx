import type { Metadata } from "next";
import { Inter } from 'next/font/google'

import Header from "@/app/components/header";
import "./globals.css";


export const metadata: Metadata = {
  title: "narrengold - Thomas Böhmer",
  description: "",
};

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.className}`}>
      <body>
          <div className="relative min-h-[100dvh] flex flex-col items-between justify-between">
            <Header />
            {children}
          </div>
      </body>
    </html>
  );
}
