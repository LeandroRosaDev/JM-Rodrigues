import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/componentes/Header";
import Footer from "@/componentes/Footer";
import WppButton from "@/componentes/WppButton";
import ScrollToTopButton from "@/componentes/ScrollToTopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JM Rodrigues",
  description:
    "Encontre tudo que você precisa para a sua obra, compre madeira para telhado, acabamentos e obras em geral",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-slate-100">
        <Header />
        {children}
        <Footer />
        <WppButton />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
