import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { siteConfig } from "@/content/site";
import "./globals.css";

const newsreader = localFont({
  src: "./fonts/newsreader-latin.woff2",
  variable: "--font-newsreader",
  weight: "400",
  style: "normal",
  display: "optional",
});

const ibmPlexSans = localFont({
  src: "./fonts/ibm-plex-sans-latin.woff2",
  variable: "--font-ibm-plex",
  weight: "400 600",
  style: "normal",
  display: "optional",
});

const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(configuredUrl),
  title: {
    default: `${siteConfig.name} | Clear context for complex work`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  category: "technology",
  openGraph: {
    type: "website",
    url: "/",
    title: `${siteConfig.name} | Clear context for complex work`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/assets/social/brightmatter-og.jpg",
        width: 1200,
        height: 630,
        alt: "Brightmatter AI brings scattered signals into one clear field",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Clear context for complex work`,
    description: siteConfig.description,
    images: ["/assets/social/brightmatter-og.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F27C" },
    { media: "(prefers-color-scheme: dark)", color: "#1D2E35" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${ibmPlexSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
