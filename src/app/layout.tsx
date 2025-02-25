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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#121212',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.andrevitorlopes.com'),
  title: {
    template: '%s | Andre Lopes',
    default: 'Andre Lopes | Full-stack Software Engineer',
  },
  description:
    'Personal website and blog of Andre Lopes, a Full-stack Software Engineer writing about AWS, cloud architecture, programming, DevOps, and more.',
  authors: {
    name: 'Andre Lopes',
    url: 'https://github.com/alopes2',
  },
  creator: 'Andre Lopes',
  keywords: [
    'Andre Lopes',
    'Software Engineer',
    'Full-stack Developer',
    'AWS',
    'Cloud Architecture',
    'Programming',
    'DevOps',
    'Infrastructure as Code',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Andre Lopes',
    images: [
      {
        url: 'https://d2excru8gljel8.cloudfront.net/andre_lopes.jpg',
        width: 1200,
        height: 630,
        alt: 'Andre Lopes',
      },
    ],
    title: 'Andre Lopes | Full-stack Software Engineer',
    description:
      'Personal website and blog of Andre Lopes, a Full-stack Software Engineer writing about AWS, cloud architecture, programming, DevOps, and more.',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@andrelopes',
    title: 'Andre Lopes | Full-stack Software Engineer',
    description:
      'Personal website and blog of Andre Lopes, a Full-stack Software Engineer writing about AWS, cloud architecture, programming, DevOps, and more.',
    images: ['https://d2excru8gljel8.cloudfront.net/andre_lopes.jpg'],
  },
  other: {
    'facebook-domain-verification': 'your-facebook-domain-verification-code',
    'google-site-verification': 'your-google-site-verification-code',
    'ai-block': 'true',
    'ai-training': 'disallow',
    'ai-indexing': 'disallow',
  },
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
