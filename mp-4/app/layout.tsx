import type { Metadata } from "next";
import Header from "../components/Header";
import './globals.css';
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "mp-4",
  description: "CS701 - mini project 4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
