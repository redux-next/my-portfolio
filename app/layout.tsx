
import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gyanam — Full-stack developer',
  description:
    'Gyanam is a full-stack developer exploring the modern web, AI, and Web3 through thoughtful digital products.',
  applicationName: 'Gyanam',
  keywords: [
    'Gyanam',
    'Full-stack developer',
    'Next.js',
    'AI',
    'TypeScript',
    'Web development',
    'Web3',
  ],
  authors: [{ name: 'Gyanam', url: 'https://github.com/redux-next' }],
  creator: 'Gyanam',
  openGraph: {
    title: 'Gyanam — Full-stack developer',
    description:
      'Thoughtful digital products, modern web development, AI, and Web3.',
    type: 'website',
    siteName: 'Gyanam',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Gyanam — Full-stack developer',
    description:
      'Thoughtful digital products, modern web development, AI, and Web3.',
  },
};

export const viewport: Viewport = {
  themeColor: '#100f17',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
