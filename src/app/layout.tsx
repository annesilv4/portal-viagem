import type { Metadata } from "next";
import "@/styles/globals.css"
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Portal Viagens",
  description: "Bem-vindo ao Portal Viagens, o seu ponto de partida para descobrir destinos incríveis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
