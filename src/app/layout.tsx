import type { Metadata } from 'next';
import { Young_Serif, Outfit } from 'next/font/google';
import './globals.css';

const youngSerif = Young_Serif({
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
  weight: '400',
  variable: '--font-young-serif',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | Recipe page',
  description:
    'A responsive recipe page built for a Frontend Mentor challenge.',
  generator: 'Next.js',
  applicationName: 'Recipe Page',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Frontend Mentor Challenge',
    'Recipe page',
    'Next.js',
    'Tailwind CSS',
    'Typescript',
  ],
  authors: [
    {
      name: 'jaceleedev',
      url: 'https://github.com/jaceleedev/recipe-page',
    },
  ],
  creator: 'jaceleedev',
  publisher: 'jaceleedev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://recipe-page-nine-pi.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Frontend Mentor | Recipe page',
    description:
      'A responsive recipe page built for a Frontend Mentor challenge.',
    url: 'https://recipe-page-nine-pi.vercel.app',
    siteName: 'Frontend Mentor | Recipe page',
    images: [
      {
        url: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1705499311/Challenges/r9vofhtakdayebyafjun.jpg',
        width: 1440,
        height: 1955,
        alt: 'Recipe page desktop size',
      },
      {
        url: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1705499311/Challenges/orl97nbevrn7wwn4hfss.jpg',
        width: 375,
        height: 2043,
        alt: 'Recipe page mobile size',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frontend Mentor | Recipe page',
    description:
      'A responsive recipe page component built for a Frontend Mentor challenge.',
    images: [
      'https://res.cloudinary.com/dz209s6jk/image/upload/v1705499311/Challenges/r9vofhtakdayebyafjun.jpg',
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${youngSerif.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
