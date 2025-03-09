import type { Metadata } from "next";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "Chick-Bailas Holding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
