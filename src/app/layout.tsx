import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ApolloWrapper } from "@/components/apollo-provider/ApolloWrapper";
import { Footer } from "@/components/footer";

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
    "A state-of-the-art Pokedex built with Next.js, Apollo GraphQL, and DDD principles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased font-sans">
        <ApolloWrapper>
          <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
            <div className="max-w-[1440px] w-full mx-auto px-6">
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </div>
        </ApolloWrapper>
      </body>
    </html>
  );
}
