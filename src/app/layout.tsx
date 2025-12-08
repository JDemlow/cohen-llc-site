// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cohen, LLC | Trial & Business Litigation",
  description:
    "Cohen, LLC is a boutique Denver law firm focused on commercial litigation, franchise disputes, and complex bankruptcy matters.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto max-w-6xl px-4">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
