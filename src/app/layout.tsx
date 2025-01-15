import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';

import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { CssBaseline } from '@mui/material';

import Navigation from '@/components/layout/navigation';
import { ToastContainer } from 'react-toastify';
import Footer from '@/components/layout/footer';
import theme from './theme';

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme} defaultMode="dark">
            <InitColorSchemeScript attribute="class" defaultMode="dark" />
            <CssBaseline enableColorScheme />
            <Navigation />
            <main>{children}</main>
            <Footer />
            <ToastContainer position="bottom-center" />
            <SpeedInsights />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
