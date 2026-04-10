import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Messer Financial Group",
  description: "Full-service insurance FMO helping independent agents grow their business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}