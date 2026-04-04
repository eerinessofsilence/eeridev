import type { Metadata } from 'next';
import About from '@/components/pages/About';

export const metadata: Metadata = {
  title: 'About',
  description:
    'About page for eeri.dev with background, work approach, and current frontend stack.',
};

export default function AboutPage() {
  return <About />;
}
