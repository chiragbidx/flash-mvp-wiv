// Root server layout: applies global styles and mounts client-only ErrorReporter.
import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import ErrorReporter from "../components/ErrorReporter";
import { ThemeProvider } from "@/components/theme/theme-provider";

export const metadata: Metadata = {
  title: "Marketiq — The Marketing Agent Portal",
  description:
    "Marketiq is a centralized portal for agencies to manage clients, campaigns, AI-powered marketing agents, and analytics from a single dashboard.",
  openGraph: {
    title: "Marketiq — The Marketing Agent Portal",
    description:
      "AI-powered agency platform for campaign management, analytics, content, and collaboration.",
    url: process.env.BASE_URL || "https://marketiq.app",
    siteName: "Marketiq",
    images: [
      {
        url: "/hero-image-light.jpeg",
        width: 1200,
        height: 630,
        alt: "Marketiq dashboard preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@chiragdodiya",
    title: "Marketiq — The Marketing Agent Portal",
    description:
      "Manage clients, campaigns, analytics, and AI agents in one dashboard.",
    images: ["/hero-image-light.jpeg"],
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
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ErrorReporter />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}