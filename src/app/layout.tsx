import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import Header from "@/app/components/header";
import "./globals.css";


export const metadata: Metadata = {
  title: "we craft. - Digital-First Agentur",
  description: "Wir sind eine Digital-First Agentur. Für unsere Kund:innen bauen wir Websites, E-Commerce Stores und andere digitale Erlebnisse.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${GeistMono.className}`}>
      <body>
          <div className="relative min-h-[100dvh] flex flex-col items-between justify-between">
            <Header />
            {children}
          </div>
      </body>
    </html>
  );
}
