import type { Metadata } from "next";
import "./globals.css";
import {Rubik} from 'next/font/google'

const rubik = Rubik({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "khamoum abderraouf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
