import '../styles/globals.css'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://airstars.asia'),
  title: {
    default: 'Airstars Asia - Enterprise IT Solutions for Small Business',
    template: '%s | Airstars Asia'
  },
  description: 'Professional IT services, wireless networking, and Mac deployment solutions for small businesses. CWNP certified expertise with enterprise-grade results.',
  keywords: 'IT services, wireless networking, Mac deployment, small business IT, CWNP certified, network security, Google Workspace, Microsoft 365',
  authors: [{ name: 'Airstars Asia' }],
  creator: 'Airstars Asia',
  publisher: 'Airstars Asia',
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
    url: 'https://airstars.asia',
    siteName: 'Airstars Asia',
    title: 'Airstars Asia - Enterprise IT Solutions for Small Business',
    description: 'Professional IT services, wireless networking, and Mac deployment solutions for small businesses. CWNP certified expertise with enterprise-grade results.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airstars Asia - Enterprise IT Solutions for Small Business',
    description: 'Professional IT services, wireless networking, and Mac deployment solutions for small businesses. CWNP certified expertise with enterprise-grade results.',
  },
  alternates: {
    canonical: 'https://airstars.asia',
    languages: {
      'en-US': 'https://airstars.asia',
      'ja-JP': 'https://airstars.jp',
    },
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script
          id="crisp-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp=[];
              window.CRISP_WEBSITE_ID="a4a2a053-9d9a-4ef3-b448-de3f0e08ac0a";
            `
          }}
        />
        <Script
          src="https://client.crisp.chat/l.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}