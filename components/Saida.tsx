'use client';

import { track } from '@vercel/analytics';
import type { ReactNode } from 'react';

type Props = {
  href: string;
  evento: 'clique_compra' | 'clique_link';
  dados: Record<string, string>;
  className?: string;
  children: ReactNode;
};

/** Link de saída do site. Registra o evento antes de navegar. */
export function Saida({ href, evento, dados, className, children }: Props) {
  return (
    <a
      href={href}
      className={className}
      rel="noopener"
      onClick={() => track(evento, dados)}
    >
      {children}
    </a>
  );
}
