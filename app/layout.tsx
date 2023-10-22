import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next e-Commerce 13",
  description: "Next e-Commerce 13 by reldev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "bg-slate-700")}>
        <Navbar />
        <main className="h-screen p-16">{children}</main>
      </body>
    </html>
  );
}
