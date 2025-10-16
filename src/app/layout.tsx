import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pivetis FC - Pro Clubs Dashboard",
  description: "Dashboard informativo do time Pivetis FC no Pro Clubs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
