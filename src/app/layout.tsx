import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SmoothScroll } from '@/components/providers/SmoothScroll';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://eeri.dev'),
  title: {
    default: 'eeri.dev',
    template: '%s | eeri.dev',
  },
  description:
    'Personal website and developer portfolio focused on web engineering, product work, and experiments.',
  applicationName: 'eeri.dev',
  authors: [{ name: 'eeri', url: 'https://eeri.dev' }],
  creator: 'eeri',
  publisher: 'eeri',
  keywords: [
    'eeri.dev',
    'developer portfolio',
    'web development',
    'Next.js',
    'TypeScript',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://eeri.dev',
    siteName: 'eeri.dev',
    title: 'eeri.dev',
    description:
      'Personal website and developer portfolio focused on web engineering, product work, and experiments.',
  },
  twitter: {
    card: 'summary',
    title: 'eeri.dev',
    description:
      'Personal website and developer portfolio focused on web engineering, product work, and experiments.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-background font-mono text-text-muted"
      >
        <SmoothScroll />
        <div className="relative isolate flex min-h-screen flex-col overflow-hidden">
          <Header />
          <main className="container-small flex flex-1 py-8 pt-24">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
