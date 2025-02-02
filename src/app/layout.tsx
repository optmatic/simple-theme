import type { Metadata } from "next";
import Navbar from '@/components/navigation/Navbar'
import {  Merriweather } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import Footer from '@/components/navigation/Footer'

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});


export const metadata: Metadata = {
  title: "Simple Theme | Optmatic",
  description: "This is a simple theme by Optmatic",
  icons: {
    apple: '/apple-touch-icon.png',
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${merriweather.className}`}>
      <body className="w-full">
        <Navbar />
        <div className="min-h-screen flex flex-col w-full">
          <main className="flex-grow w-full overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}