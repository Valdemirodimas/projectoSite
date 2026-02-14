import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Feliz Dia dos Namorados, Margarida Gauper ❤️",
  description: "Uma experiência digital exclusiva de amor",
  keywords: ["amor", "dia dos namorados", "Margarida Gauper"],
  authors: [{ name: "Com amor" }],
  openGraph: {
    title: "Feliz Dia dos Namorados, Margarida Gauper ❤️",
    description: "Uma experiência digital exclusiva de amor",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
