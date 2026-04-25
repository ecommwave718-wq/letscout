import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://letscout.com";
const SITE_NAME = "letscout";
const SITE_DESCRIPTION =
  "letscout \u2014 The all-in-one scouting and lead generation platform for store owners, email marketers, and outreach experts. Automate prospecting, enrich leads, and scale your outreach pipeline.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1120" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "letscout \u2014 Scouting & Lead Generation Platform",
    template: "%s | letscout",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "scouting",
    "lead generation",
    "outreach automation",
    "email marketing",
    "store owners",
    "prospecting",
    "lead enrichment",
    "sales intelligence",
    "ecommerce scouting",
    "business leads",
    "cold outreach",
    "email outreach",
    "lead finder",
    "scouting tool",
    "lead gen platform",
  ],
  authors: [{ name: "letscout" }],
  creator: "letscout",
  publisher: "letscout",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "letscout \u2014 Scouting & Lead Generation Platform",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "letscout \u2014 Scouting & Lead Generation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "letscout \u2014 Scouting & Lead Generation Platform",
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@letscout",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "letscout",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "2480",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
