import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "devanagari"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EverGreenRP - Advanced Fivem Roleplay Server",
  description:
    "Join EverGreenRP, an advanced Fivem Roleplay server with a real economy, active community, and immersive gameplay. Play for free and experience the best Romanian RP server.",
  keywords: [
    "Fivem",
    "Roleplay",
    "RP",
    "EverGreen",
    "Romania",
    "GTA V",
    "Server",
    "Gaming",
    "Community",
    "Online",
    "Free",
    "Economy",
    "Discord",
    "Shop",
    "Rust Server",
    "EverGreenRP",
  ],
  openGraph: {
    title: "EverGreenRP - Advanced Fivem Roleplay Server",
    description:
      "Join EverGreenRP, an advanced Fivem Roleplay server with a real economy, active community, and immersive gameplay. Play for free and experience the best Romanian RP server.",
    url: "https://evergreenrp.ro",
    siteName: "EverGreenRP",
    images: [
      {
        url: "/OG-IMAGE.png",
        width: 400,
        height: 400,
        alt: "EverGreenRP",
      },
    ],
    locale: "en_US , ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EverGreenRP - Advanced Fivem Roleplay Server",
    description:
      "Join EverGreenRP, an advanced Fivem Roleplay server with a real economy, active community, and immersive gameplay. Play for free and experience the best Romanian RP server.",
    images: ["/OG-IMAGE.png"],
    site: "@EverGreenRP",
  },
  metadataBase: new URL("https://evergreenrp-one.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1f1f1f" />
        <meta name="author" content="EverGreenRP Team" />
        <meta name="copyright" content="EverGreenRP 2024" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo 1.png" />
      </head>
      <body
        className={`${poppins.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
