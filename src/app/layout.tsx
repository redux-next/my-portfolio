import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gyanam — Developer, building at the edge of the web',
  description: 'Portfolio of Gyanam, a full-stack developer exploring the intersection of useful software, AI, and the decentralized web.',
  applicationName: 'Gyanam Portfolio',
  keywords: ['Gyanam', 'Full-stack developer', 'Web3', 'Next.js', 'AI', 'TypeScript'],
  openGraph: { title: 'Gyanam — Digital systems, built with intent', description: 'Full-stack development • AI experiments • Web3 curiosity', type: 'website' }
};
export const viewport: Viewport = { themeColor: '#080611', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
