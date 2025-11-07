import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.texaspllc.com'),
  title: {
    default: "Texas PLLC Formation | $749 All-Inclusive | 48-Hour Filing",
    template: "%s | Texas PLLC",
  },
  description: "Form your Texas Professional Limited Liability Company in 48 hours. $749 all-inclusive pricing. Transparent, profession-specific expertise. No upsells.",
  keywords: [
    'Texas PLLC',
    'PLLC formation',
    'Texas professional LLC',
    'PLLC formation service',
  ],
  authors: [{ name: 'Incaroo' }],
  creator: 'Incaroo',
  publisher: 'Incaroo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.texaspllc.com',
    siteName: 'Texas PLLC Formation',
    title: 'Texas PLLC Formation | $749 All-Inclusive | 48-Hour Filing',
    description: 'Form your Texas Professional Limited Liability Company in 48 hours. $749 all-inclusive pricing. Transparent, profession-specific expertise.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Texas PLLC Formation | $749 All-Inclusive',
    description: 'Form your Texas PLLC in 48 hours. $749 all-inclusive. Transparent pricing.',
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {GA_MEASUREMENT_ID && (
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
        )}
        {GA_MEASUREMENT_ID && (
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        )}
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
