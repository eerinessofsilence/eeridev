import Link from 'next/link';
import { focusAreas, projects } from '@/lib/site';

const quickFacts = [
  { label: 'Stack', value: 'Next.js 16 / TypeScript / Tailwind CSS v4' },
  { label: 'Format', value: 'Three-page portfolio' },
  { label: 'Status', value: 'Active build' },
] as const;

export default function Home() {
  return (
    <section className="container-small">
      <div className=""></div>
    </section>
  );
}
