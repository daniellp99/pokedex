import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PaginationContextProvider } from "@/components/PaginationContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PokeNext",
  description: "PokeNext is a Pokedex app built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PaginationContextProvider>{children}</PaginationContextProvider>
      </body>
    </html>
  );
}
