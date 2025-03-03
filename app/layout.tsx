import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav} from "@/components/nav";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sajib Chandra Saha",
  description: "Portfolio website powered by Sajib Chandra Saha",
  icons: [
    {
      url: "/",
      href: "/logo.svg",
    },
  ],
  openGraph: {
    title: "Sajib Chandra Saha",
    description: "Portfolio website powered by Sajib Chandra Saha",
    url: `${process.env.NEXT_PUBLIC_URL!}`, 
    siteName: "Sajib Chandra Saha",
    images: [
      {
        url: '/background.jpg', 
        width: 1200,
        height: 630,
        alt: "Sajib Chandra Saha Portfolio",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sajib Chandra Saha",
    description: "Portfolio website powered by Sajib Chandra Saha",
    images:['/background.jpg'], // Replace with your Twitter card image URL
    site: "@your_twitter_handle", // Replace with your Twitter handle
    creator: "@your_twitter_handle",
    
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
        <main className="max-w-7xl mx-auto px-4">
          <Nav/>
        {children}
        <Toaster />
        </main>
        <Footer/>
      </body>
    </html>
  );
}
