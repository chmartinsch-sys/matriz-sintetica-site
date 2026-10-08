import Link from 'next/link';
import { site } from '@/lib/site';
import { Menu } from './Menu';
import { Saida } from './Saida';

export function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="largura cabecalho-linha">
        <Link href="/" className="marca" aria-label="Matriz Sintética, página inicial">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Matriz Sintética" width={527} height={184} />
        </Link>
        <Menu instagram={site.instagram.url} />
      </div>
    </header>
  );
}

export function Seta() {
  return (
    <svg className="seta" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 9h12m0 0-4.5-4.5M15 9l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconeInstagram() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function Rodape() {
  return (
    <footer className="rodape">
      <div className="largura rodape-linha">
        <Link href="/" className="rodape-marca" aria-label="Matriz Sintética, página inicial">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Matriz Sintética" width={527} height={184} loading="lazy" />
        </Link>
        <nav aria-label="Rodapé">
          <Link href="/#sobre">Sobre</Link>
          <Link href="/produtos">Produtos</Link>
          <Link href="/links">Links</Link>
        </nav>
        <Saida
          href={site.instagram.url}
          className="rodape-social"
          evento="clique_link"
          dados={{ destino: 'instagram', origem: 'rodape' }}
        >
          <IconeInstagram />
          <span>{site.instagram.usuario}</span>
        </Saida>
        <p className="rodape-legal">
          {site.dominio}
          <br />© 2026 {site.nome}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
