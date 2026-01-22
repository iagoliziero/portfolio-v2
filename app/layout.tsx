import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { CustomCursor } from "@/components/ui/custom-cursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Iago Liziero",
  description: "Portfólio Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${newsreader.variable} bg-background text-foreground flex flex-col items-center justify-center font-sans`}
      >
        <LenisProvider>
          <CustomCursor />
          <Header />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
