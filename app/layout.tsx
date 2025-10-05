import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });


export const metadata: Metadata = {
  title: 'Royalwood - Luxury Furniture Collection',
  description: 'Discover exceptional luxury furniture crafted with premium materials and timeless design. Transform your space with Royalwood.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body
        className="font-inter bg-black text-white overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
