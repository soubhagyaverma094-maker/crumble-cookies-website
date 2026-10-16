import type { Metadata, Viewport } from 'next'
import { Inter, Poppins, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Crumble Cookies | Artisan Baked Goods & Custom Cakes',
  description: 'Handcrafted cookies and custom cakes made with premium ingredients. Order online for pickup or delivery in Sweetville.',
  keywords: ['cookies', 'cakes', 'desserts', 'bakery', 'custom cakes', 'handcrafted', 'fresh baked'],
  authors: [{ name: 'Crumble Cookies' }],
  creator: 'Crumble Cookies',
  publisher: 'Crumble Cookies',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://crumblecookies.com',
    title: 'Crumble Cookies | Artisan Baked Goods & Custom Cakes',
    description: 'Handcrafted cookies and custom cakes made with premium ingredients.',
    siteName: 'Crumble Cookies',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Crumble Cookies - Fresh Baked Goods',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crumble Cookies | Artisan Baked Goods',
    description: 'Handcrafted cookies and custom cakes made with premium ingredients.',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#a48a7a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${playfair.variable}`}>
      <head />
      <body className="min-h-screen bg-cream-50 antialiased">
        {children}
      </body>
    </html>
  )
}