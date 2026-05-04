import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
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
    default: 'Aleksandr Hubanov | Full-Stack Engineer',
    template: '%s | eeri.dev',
  },
  description:
    'Full-stack engineer building polished web products with TypeScript, React, Next.js, and Tailwind CSS.',
  applicationName: 'eeri.dev',
  authors: [{ name: 'Aleksandr Hubanov', url: 'https://eeri.dev' }],
  creator: 'Aleksandr Hubanov',
  publisher: 'Aleksandr Hubanov',
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
    title: 'Aleksandr Hubanov | Full-Stack Engineer',
    description:
      'Full-stack engineer building polished web products with TypeScript, React, Next.js, and Tailwind CSS.',
    images: [
      {
        url: '/preview-page.png',
        width: 1440,
        height: 896,
        alt: 'Aleksandr Hubanov, full-stack engineer portfolio preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aleksandr Hubanov | Full-Stack Engineer',
    description:
      'Full-stack engineer building polished web products with TypeScript, React, Next.js, and Tailwind CSS.',
    images: ['/preview-page.png'],
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
