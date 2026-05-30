import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SplashScreen from "@/components/SplashScreen";
import InstallPrompt from "@/components/InstallPrompt";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Papantla Turismo | Premium Experience",
  description: "Descubre la Ciudad que Perfuma con una experiencia móvil de lujo.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Papantla",
  },
};

export const viewport: Viewport = {
  themeColor: "#C05C3E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </head>
      <body className={`${outfit.className} bg-background text-foreground antialiased selection:bg-primary/20`}>
        <SplashScreen />
        <Navbar />
        <main>
          {children}
        </main>
        <InstallPrompt />
      </body>
    </html>
  );
}

