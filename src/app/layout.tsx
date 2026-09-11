import type { Metadata } from "next";
import "./globals.css";
import { themeScript } from "./lib/theme";

export const metadata: Metadata = {
  title: "Luis Flores Rodríguez",
  description: "Ingeniero de Software Seemi-Senior / FullStack",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
