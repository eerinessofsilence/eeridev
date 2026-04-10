'use client';

import dynamic from 'next/dynamic';
import { ContributionMapFallback } from '@/components/home/ContributionMapFallback';

const ContributionMap = dynamic(
  () =>
    import('@/components/home/ContributionMap').then((module) => ({
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
