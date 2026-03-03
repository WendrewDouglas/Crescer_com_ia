import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crescer com IA — Cursos de Inteligência Artificial para Crianças e Adolescentes",
  description:
    "Cursos presenciais de Inteligência Artificial para crianças e adolescentes de 7 a 17 anos. Metodologia prática, criativa e segura. Prepare seu filho para o futuro!",
  keywords: [
    "cursos de IA para crianças",
    "inteligência artificial para adolescentes",
    "cursos presenciais de IA",
    "educação tecnológica infantil",
    "crescer com IA",
  ],
  openGraph: {
    title: "Crescer com IA — Cursos de IA para Crianças e Adolescentes",
    description:
      "Cursos presenciais que ensinam Inteligência Artificial de forma prática, criativa e segura para crianças e adolescentes de 7 a 17 anos.",
    type: "website",
    locale: "pt_BR",
    siteName: "Crescer com IA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${jakarta.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
