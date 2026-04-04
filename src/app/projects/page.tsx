import type { Metadata } from 'next';
import Projects from '@/components/pages/Projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Projects page for eeri.dev with selected work and a scalable structure for future case studies.',
};

export default function ProjectsPage() {
  return <Projects />;
}
