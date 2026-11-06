import type { Metadata, Viewport } from "next";
import { Manrope, Ms_Madi } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const msMadi = Ms_Madi({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ms-madi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Centinela",
  description: "Centinela centro veterinario · Tandil",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const themeInitScript = `(function(){try{var dark=window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.dataset.theme=dark?"dark":"light";}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} ${msMadi.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
