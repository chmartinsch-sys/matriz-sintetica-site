import type { Metadata } from 'next';
import Link from 'next/link';
import { Saida } from '@/components/Saida';
import { destaque, linkCompra, linkPagina, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Links',
  description: 'Os principais destinos da Matriz Sintética.',
  alternates: { canonical: '/links' },
};

export default function Links() {
  const compra = linkCompra(destaque, 'links');
  const pagina = linkPagina(destaque, 'links');

  return (
    <main id="conteudo" className="links">
      <Link href="/" className="links-marca" aria-label="Matriz Sintética, página inicial">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.svg" alt={site.nome} width={527} height={184} />
      </Link>

      <section className="links-destaque" aria-label={destaque.titulo}>
        {destaque.capa && (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="capa" src={destaque.capa} alt={`Capa de ${destaque.titulo}`} width={640} height={960} />
        )}
        <div>
          <p className="tipo">{destaque.tipo}</p>
          <h1>{destaque.titulo}</h1>
          <p>Uma IA recebeu autonomia criativa para imaginar a relação entre humanidade e inteligência artificial.</p>
        </div>
        {compra && (
          <Saida
            href={compra}
            className="botao botao-verde"
            evento="clique_compra"
            dados={{ produto: destaque.slug, origem: 'links' }}
          >
            Comprar por {destaque.preco}
          </Saida>
        )}
        {pagina && (
          <Saida
            href={pagina}
            className="botao botao-clara"
            evento="clique_link"
            dados={{ destino: 'pagina_produto', produto: destaque.slug, origem: 'links' }}
          >
            Conhecer o livro
          </Saida>
        )}
      </section>

      <nav className="links-lista" aria-label="Outros destinos">
        <Link href="/produtos">Todos os produtos</Link>
        <Link href="/">Site da Matriz Sintética</Link>
        <Saida
          href={site.instagram.url}
          evento="clique_link"
          dados={{ destino: 'instagram', origem: 'links' }}
        >
          Instagram {site.instagram.usuario}
        </Saida>
      </nav>
    </main>
  );
}
