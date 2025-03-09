import type { Metadata } from "next";
import "@/styles/globals.css";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title: "Chick-Bailas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
