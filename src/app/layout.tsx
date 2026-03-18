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
    default:
      "Crescer com IA | Curso de Inteligência Artificial para Crianças em Araçatuba",
    template: "%s | Crescer com IA",
  },

  description:
    "Curso presencial de Inteligência Artificial para crianças de 7 a 12 anos em Araçatuba e região. Metodologia prática, criativa e segura. Prepare seu filho para o futuro!",

  keywords: [
    "curso de IA para crianças",
    "inteligência artificial para crianças",
    "curso de tecnologia Araçatuba",
    "curso presencial de IA",
    "educação tecnológica infantil",
    "crescer com IA",
    "aulas de inteligência artificial",
    "curso de tecnologia para crianças Araçatuba",
    "programação para crianças",
    "educação digital Araçatuba",
    "curso de IA Araçatuba",
    "tecnologia para crianças",
    "educação STEM Brasil",
    "IA para crianças 7 a 12 anos",
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
    title: "Crescer com IA | Curso de IA para Crianças em Araçatuba",
    description:
      "Curso presencial que ensina Inteligência Artificial de forma prática, criativa e segura para crianças de 7 a 12 anos em Araçatuba e região.",
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Crescer com IA",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Crescer com IA | Curso de Inteligência Artificial para Crianças",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Crescer com IA | Curso de IA para Crianças em Araçatuba",
    description:
      "Curso presencial que ensina Inteligência Artificial de forma prática, criativa e segura para crianças de 7 a 12 anos.",
    images: ["/og-image.jpg"],
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Crescer com IA",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemas = getAllSchemas();

  return (
    <html lang="pt-BR">
      <body
        className={`${jakarta.variable} ${spaceGrotesk.variable} antialiased`}
      >
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
