import type { Metadata } from "next";

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
        {children}
      </body>
    </html>
  );
}
