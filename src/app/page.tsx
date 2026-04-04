import type { Metadata } from 'next';
import Home from '@/components/pages/Home';

export const metadata: Metadata = {
  description:
    'Landing page for eeri.dev with a concise introduction, focus areas, and selected work.',
};

export default function HomePage() {
  return <Home />;
}
