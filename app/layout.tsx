import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  variable: "--font-serif",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Camping Moby Dick | Bungalows y Camping Calella de Palafrugell",
  description: "Disfruta de la naturaleza a 150 metros del mar en uno de los campings más emblemáticos de la Costa Brava, en Calella de Palafrugell. Bungalows y parcelas con encanto.",
  keywords: ["camping costa brava", "calella de palafrugell", "bungalows costa brava", "camping moby dick", "alojamiento calella"],
  openGraph: {
    title: "Camping Moby Dick | Un pequeño tesoro de calma",
    description: "Camping emblemático en el corazón de la Costa Brava.",
    url: "https://www.campingmobydick.com",
    siteName: "Camping Moby Dick",
    images: [
      {
        url: "/images/camping-top.jpg",
        width: 1200,
        height: 630,
        alt: "Camping Moby Dick - Calella de Palafrugell",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${dmSerif.variable} ${manrope.variable} antialiased bg-stone-50 text-stone-900`}
      >
        {children}
      </body>
    </html>
  );
}