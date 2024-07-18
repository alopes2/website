import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Andre Lopes',
  description: 'Andre Lopes personal website',
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
      </body>
    </html>
  );
}
