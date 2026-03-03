import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { getAllSchemas } from "@/lib/seo";
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

const SITE_URL = "https://crescercomia.com.br";

export const viewport: Viewport = {
  themeColor: "#0b8c91",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Crescer com IA — Cursos de Inteligência Artificial para Crianças e Adolescentes",
    template: "%s | Crescer com IA",
  },

  description:
    "Cursos presenciais de Inteligência Artificial para crianças e adolescentes de 7 a 17 anos. Metodologia prática, criativa e segura. Prepare seu filho para o futuro!",

  keywords: [
    "cursos de IA para crianças",
    "inteligência artificial para adolescentes",
    "cursos presenciais de IA",
    "educação tecnológica infantil",
    "crescer com IA",
    "aulas de inteligência artificial",
    "curso de tecnologia para crianças",
    "IA para jovens",
    "programação para crianças",
    "machine learning para adolescentes",
    "curso de robótica e IA",
    "educação STEM Brasil",
  ],

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Crescer com IA — Cursos de IA para Crianças e Adolescentes",
    description:
      "Cursos presenciais que ensinam Inteligência Artificial de forma prática, criativa e segura para crianças e adolescentes de 7 a 17 anos.",
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Crescer com IA",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Crescer com IA — Cursos de Inteligência Artificial para Crianças e Adolescentes",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Crescer com IA — Cursos de IA para Crianças e Adolescentes",
    description:
      "Cursos presenciais que ensinam Inteligência Artificial de forma prática, criativa e segura para crianças e adolescentes de 7 a 17 anos.",
    images: ["/og-image.jpg"],
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Crescer com IA",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  manifest: "/manifest.json",

  // TODO: Add Google Search Console verification code
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_CODE",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemas = getAllSchemas();

  return (
    <html lang="pt-BR">
      <body className={`${jakarta.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </body>
    </html>
  );
}
