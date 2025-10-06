import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HR Management System",
  description: "Complete HR Management System with Thai-English support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
