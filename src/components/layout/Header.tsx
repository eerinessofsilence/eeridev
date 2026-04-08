'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const navigation = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
  ];

  const pathName = usePathname();
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/25 bg-foreground/50 backdrop-blur-md">
      <div className="container-small flex justify-between gap-6 py-4">
        <Link href="/" className="group font-medium tracking-tight text-text">
          eeri.dev
        </Link>

        <nav aria-label="Primary navigation" className="flex flex-wrap gap-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full text-sm transition-colors ${item.href == pathName ? 'text-text' : 'hover:text-text hover:underline'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
