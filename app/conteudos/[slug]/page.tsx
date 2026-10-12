import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DadosEstruturados } from '@/components/DadosEstruturados';
import { Cabecalho, Rodape, Seta } from '@/components/Estrutura';
import { Saida } from '@/components/Saida';
import { artigoPorSlug, artigosPublicados, dataPorExtenso, todosArtigos } from '@/lib/artigos';
import { linkCompra, produtos, site } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return todosArtigos().map((a) => ({ slug: a.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = artigoPorSlug(slug);
  if (!a) return {};
  return {
    title: a.tituloSeo ?? a.titulo,
    description: a.resumo,
    alternates: { canonical: `/conteudos/${a.slug}` },
    robots: a.publicado ? undefined : { index: false, follow: false },
    openGraph: {
      type: 'article',
      title: a.tituloSeo ?? a.titulo,
      description: a.resumo,
      url: `/conteudos/${a.slug}`,
      siteName: site.nome,
      locale: 'pt_BR',
      publishedTime: a.data,
      images: [{ url: a.capa, width: 720, height: 900, alt: a.titulo }],
    },
  };
}

export default async function PaginaArtigo({ params }: Props) {
  const { slug } = await params;
  const a = artigoPorSlug(slug);
  if (!a) notFound();

  const produto = produtos.find((p) => p.slug === a.produto);
  const compra = produto ? linkCompra(produto, 'artigo') : undefined;
  const outros = artigosPublicados().filter((o) => o.slug !== a.slug).slice(0, 3);

  return (
    <>
      {a.publicado && (
        <DadosEstruturados
          dados={{
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: a.titulo,
            description: a.resumo,
            image: `${site.url}${a.capa}`,
            datePublished: a.data,
            inLanguage: 'pt-BR',
            mainEntityOfPage: `${site.url}/conteudos/${a.slug}`,
            author: { '@id': `${site.url}/#organizacao` },
            publisher: { '@id': `${site.url}/#organizacao` },
          }}
        />
      )}
      <Cabecalho />
      <main id="conteudo">
        <article className="artigo largura">
          {!a.publicado && <p className="aviso-rascunho">Rascunho em revisão. Esta página não aparece no Google.</p>}
          <header className="artigo-topo">
            <p className="rotulo">{a.tema}</p>
            <h1>{a.titulo}</h1>
            <p className="lead">{a.resumo}</p>
            <p className="artigo-meta">
              <time dateTime={a.data}>{dataPorExtenso(a.data)}</time>, {a.minutos} min de leitura
            </p>
          </header>

          <div className="artigo-corpo" dangerouslySetInnerHTML={{ __html: a.html }} />

          {a.instagram && (
            <aside className="artigo-instagram">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={a.capa} alt="" width={720} height={900} loading="lazy" />
              <div>
                <p className="rotulo">No Instagram</p>
                <p>Este tema também está em carrossel no perfil da Matriz Sintética.</p>
                <Saida
                  href={a.instagram}
                  className="link-seta"
                  evento="clique_link"
                  dados={{ destino: 'instagram_post', origem: 'artigo', artigo: a.slug }}
                >
                  Ver o carrossel <Seta />
                </Saida>
              </div>
            </aside>
          )}

          {produto && (
            <aside className="artigo-produto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="capa"
                src={produto.capa.src}
                alt={`Capa de ${produto.titulo}`}
                width={produto.capa.largura}
                height={produto.capa.altura}
                loading="lazy"
              />
              <div>
                <p className="rotulo">Para aprofundar</p>
                <h2>{produto.titulo}</h2>
                {produto.subtitulo && <p className="cartao-sub">{produto.subtitulo}</p>}
                <p>{produto.descricao}</p>
                {produto.status === 'em-breve' ? (
                  <p className="selo">Em breve</p>
                ) : (
                  compra && (
                    <div className="acoes">
                      <Saida
                        href={compra}
                        className="botao botao-verde"
                        evento="clique_compra"
                        dados={{ produto: produto.slug, origem: 'artigo' }}
                      >
                        Comprar por {produto.preco}
                      </Saida>
                    </div>
                  )
                )}
              </div>
            </aside>
          )}
        </article>

        {outros.length > 0 && (
          <section className="faixa">
            <div className="secao largura">
              <div className="secao-topo">
                <h2>Leia também</h2>
                <Link href="/conteudos" className="link-seta">
                  Todos os conteúdos <Seta />
                </Link>
              </div>
              <div className="grade-artigos">
                {outros.map((o) => (
                  <Link key={o.slug} href={`/conteudos/${o.slug}`} className="cartao-artigo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={o.capa} alt="" width={720} height={900} loading="lazy" />
                    <span className="rotulo">{o.tema}</span>
                    <span className="cartao-artigo-titulo">{o.titulo}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Rodape />
    </>
  );
}
