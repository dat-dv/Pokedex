import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ApolloWrapper } from "@/components/apollo-provider/ApolloWrapper";
import StickyFooter from "@/components/footer";
import { APP_CONFIG } from "@/constants/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pokédex | Ultra Premium Pokemon Explorer",
  description:
    "A state-of-the-art Pokedex built with Next.js, Apollo GraphQL, and DDD principles. Experience the galaxy of Pokemon.",
  metadataBase: new URL(APP_CONFIG.SITE_URL),
  applicationName: "UltraDex",
  authors: [{ name: "datdv", url: "https://datdoan.dev" }],
  keywords: ["Pokemon", "Pokedex", "GraphQL", "Next.js", "Ultra Premium", "UX"],
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "UltraDex | The Future of Pokémon Exploration",
    description:
      "Discover Pokémon with a futuristic, high-performance interface. Try the Ultra Premium Pokedex now.",
    url: APP_CONFIG.SITE_URL,
    siteName: "UltraDex",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UltraDex Social Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UltraDex | The Future of Pokémon Exploration",
    description:
      "Discover Pokémon with a futuristic, high-performance interface.",
    images: ["/og-image.png"],
    creator: "@datdv",
  },
  alternates: {
    canonical: APP_CONFIG.SITE_URL,
  },
};

export const viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased font-sans overflow-x-hidden">
        <ApolloWrapper>
          <div className="max-w-[1200px] w-full mx-auto px-6 flex flex-col min-h-screen">
            <main className="flex-grow pb-48">{children}</main>
            <StickyFooter />
          </div>
        </ApolloWrapper>
      </body>
    </html>
  );
}
