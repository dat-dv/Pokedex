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
  title: "Pokédex | Pokemon Explorer",
  description:
    "A state-of-the-art Pokedex built with Next.js, Apollo GraphQL, and DDD principles. Experience the galaxy of Pokemon.",
  metadataBase: new URL(APP_CONFIG.SITE_URL),
  applicationName: "UltraDex",
  authors: [{ name: "datdv", url: "https://datdoan.dev" }],
  keywords: ["Pokemon", "Pokedex", "GraphQL", "Next.js", "UX"],
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "UltraDex | The Future of Pokémon Exploration",
    description:
      "Discover Pokémon with a futuristic, high-performance interface. Try the Ultra Pokedex now.",
    url: APP_CONFIG.SITE_URL,
    siteName: "UltraDex",
    images: [
      {
        url: `${APP_CONFIG.SITE_URL}/og-image.svg`,
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
    images: [`${APP_CONFIG.SITE_URL}/og-image.svg`],
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
      <body className="antialiased font-sans bg-[#0a0a0a]">
        <div className="max-w-[1200px] w-full mx-auto px-6">
          <main className="pb-48 pt-10">
            <ApolloWrapper>{children}</ApolloWrapper>
          </main>
          <StickyFooter />
        </div>
      </body>
    </html>
  );
}
