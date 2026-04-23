import type { Metadata } from "next";
import { Rubik, Nunito_Sans, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const rubik = Rubik({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Attentio – Nettside-utkast",
  description: "Nettside-utkast laget av Attentio AS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb"
      className={cn("h-full", "antialiased", rubik.variable, nunitoSans.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col font-body text-slate-800 bg-white">
        {children}
      </body>
    </html>
  );
}
