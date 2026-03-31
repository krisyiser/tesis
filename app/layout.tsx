import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import InstallPrompt from "@/components/InstallPrompt";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Papantla Turismo | Explora y Descubre",
  description: "Plataforma digital para la promoción turística de Papantla, Veracruz.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Papantla PWA",
  },
};

export const viewport: Viewport = {
  themeColor: "#F16B24",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </head>
      <body className={`${outfit.className} bg-[#F8F8F8] text-[#1A1A1A] antialiased pb-20 md:pb-0`}>
        <Navbar />
        <main className="max-w-4xl mx-auto min-h-screen">
          {children}
        </main>
        <InstallPrompt />
      </body>
    </html>
  );
}
