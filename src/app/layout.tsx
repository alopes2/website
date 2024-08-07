import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Andre Lopes',
  description: 'Welcome to Andre Lopes Personal Website and Blog',
  authors: {
    name: 'Andre Lopes',
    url: 'https://github.com/alopes2',
  },
  creator: 'Andre Lopes',
  keywords: [
    'Andre',
    'Lopes',
    'Software Engineer',
    'Software',
    'Engineer',
    'Code',
    'Developer',
  ],
  robots: {
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://www.andrevitorlopes.com/',
  },
  openGraph: {
    type: 'website',
    images: [{ url: 'https://d2excru8gljel8.cloudfront.net/andre_lopes.jpg' }],
    title: 'Andre Lopes',
    description: 'Welcome to Andre Lopes Personal Website and Blog!',
  },
};

export const viewport: Viewport = {
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
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <ToastContainer position="bottom-center" />
      </body>
    </html>
  );
}
