import type { Metadata } from 'next';

// Site metadata that follows Next.js Metadata type
export const SITE_METADATA: Metadata = {
  metadataBase: new URL('https://environment-pi.vercel.app'),
  title: "Ministry of Environment and Sanitation - Imo State",
  description: "Official website of the Imo State Ministry of Environment and Sanitation. Committed to environmental protection, sustainable development, and public health across Imo State.",
  authors: [{ name: "Imo State Government" }],
  alternates: {
    canonical: "/",
    languages: {
      'en-NG': '/en-ng',
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Ministry of Environment and Sanitation - Imo State",
    description: "Committed to environmental protection and sustainable development in Imo State",
    creator: "@ImoStateGov",
    images: ["/assets/twitter-card.jpg"]
  },
  keywords: [
    "Imo State",
    "Environment",
    "Sanitation",
    "Climate Change",
    "Waste Management",
    "Erosion Control",
    "Environmental Protection",
    "Nigeria",
    "Government"
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://environment-pi.vercel.app",
    siteName: "Imo State Ministry of Environment and Sanitation",
    title: "Ministry of Environment and Sanitation - Imo State",
    description: "Promoting environmental sustainability and public health across Imo State",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Imo State Ministry of Environment and Sanitation"
      }
    ]
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/assets/ng-logo.png",
    shortcut: "/assets/ng-logo.png",
    apple: "/assets/ng-logo.png",
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/assets/ng-logo.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/assets/ng-logo.png',
      },
    ],
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#15803d' },
    { media: '(prefers-color-scheme: dark)', color: '#15803d' },
  ]
}