import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cropbot",
  description: "Cropbot is an automatic image cropping tool.",
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
