'use client';

import Link from 'next/link';
import { track } from '@vercel/analytics';
import { useState } from 'react';

/** Navegação principal: links em linha no desktop, painel recolhível no celular. */
export function Menu({ instagram }: { instagram: string }) {
  const [aberto, setAberto] = useState(false);
  const fechar = () => setAberto(false);

  return (
    <>
      <nav id="menu" className={`menu ${aberto ? 'menu-aberto' : ''}`} aria-label="Principal">
        <Link href="/#sobre" onClick={fechar}>
          Sobre
        </Link>
        <Link href="/produtos" onClick={fechar}>
          Produtos
        </Link>
        <a
          href={instagram}
          rel="noopener"
          onClick={() => {
            track('clique_link', { destino: 'instagram', origem: 'cabecalho' });
            fechar();
          }}
        >
          Instagram
        </a>
      </nav>
      <Link href="/produtos" className="botao botao-azul botao-compacto cabecalho-acao">
        Ver produtos
      </Link>
      <button
        type="button"
        className="menu-botao"
        aria-expanded={aberto}
        aria-controls="menu"
        onClick={() => setAberto((v) => !v)}
      >
        <span className="oculto">{aberto ? 'Fechar menu' : 'Abrir menu'}</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {aberto ? (
            <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
      </button>
    </>
  );
}
