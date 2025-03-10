import type { Metadata } from "next";
import "@mantine/core/styles.css";
import Analytics from "@/components/Analytics";
import {
  ColorSchemeScript,
  createTheme,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";

export const metadata: Metadata = {
  title: "Chick-Bailas",
};

const theme = createTheme({
  colors: {
    "mint-green": [
      "#e7fdee",
      "#d6f6e1",
      "#aeebc3",
      "#84e0a2",
      "#60d687",
      "#49d075",
      "#3bcd6b",
      "#2bb55a",
      "#20a14e",
      "#098c40",
    ],
  },
  primaryColor: "mint-green",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark" theme={theme}>
          {children}
        </MantineProvider>
      </body>
      <Analytics />
    </html>
  );
}
