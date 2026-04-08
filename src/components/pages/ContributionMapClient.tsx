'use client';

import dynamic from 'next/dynamic';
import { ContributionMapFallback } from '@/components/pages/ContributionMapFallback';

const ContributionMap = dynamic(
  () =>
    import('@/components/pages/ContributionMap').then((module) => ({
      default: module.ContributionMap,
    })),
  {
    loading: () => <ContributionMapFallback />,
    ssr: false,
  },
);

export function ContributionMapClient() {
  return <ContributionMap />;
}
