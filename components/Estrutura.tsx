import Link from 'next/link';
import { site } from '@/lib/site';
import { Saida } from './Saida';

export function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="largura cabecalho-linha">
        <Link href="/" className="marca" aria-label="Matriz Sintética, página inicial">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Matriz Sintética" width={527} height={184} />
        </Link>
        <nav aria-label="Principal">
          <Link href="/produtos">Produtos</Link>
          <Saida
            href={site.instagram.url}
            evento="clique_link"
            dados={{ destino: 'instagram', origem: 'cabecalho' }}
          >
            Instagram
          </Saida>
        </nav>
      </div>
    </header>
  );
}

export function Rodape() {
  return (
    <footer className="rodape">
      <div className="largura rodape-linha">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/simbolo.svg" alt="" width={32} height={32} />
        <p>
          {site.nome}. {site.assinatura}
        </p>
        <Saida
          href={site.instagram.url}
          evento="clique_link"
          dados={{ destino: 'instagram', origem: 'rodape' }}
        >
          {site.instagram.usuario}
        </Saida>
      </div>
    </footer>
  );
}
