import type { Metadata } from 'next';
import Link from 'next/link';
import { Cabecalho, Rodape, Seta } from '@/components/Estrutura';
import { Saida } from '@/components/Saida';
import { artigosPublicados, dataPorExtenso } from '@/lib/artigos';
import { site } from '@/lib/site';

export function generateMetadata(): Metadata {
  return {
    title: 'Conteúdos sobre IA, gestão e negócios',
    description:
      'Artigos da Matriz Sintética sobre como aplicar inteligência artificial na gestão e nos negócios, com método, critério e resultado.',
    alternates: { canonical: '/conteudos' },
    robots: artigosPublicados().length > 0 ? undefined : { index: false, follow: true },
  };
}

export default function Conteudos() {
  const artigos = artigosPublicados();

  return (
    <>
      <Cabecalho />
      <main id="conteudo">
        <section className="largura topo-pagina">
          <p className="rotulo">Conteúdos</p>
          <h1 className="titulo-pagina">Ideias para aplicar inteligência artificial com método.</h1>
          <p className="lead">Cada artigo aprofunda um tema publicado no Instagram da Matriz Sintética.</p>
        </section>
        <section className="faixa">
          <div className="secao largura">
            {artigos.length > 0 ? (
              <div className="grade-artigos">
                {artigos.map((a) => (
                  <Link key={a.slug} href={`/conteudos/${a.slug}`} className="cartao-artigo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={a.capa} alt="" width={720} height={900} loading="lazy" />
                    <span className="rotulo">{a.tema}</span>
                    <span className="cartao-artigo-titulo">{a.titulo}</span>
                    <span className="cartao-artigo-resumo">{a.resumo}</span>
                    <span className="artigo-meta">
                      {dataPorExtenso(a.data)}, {a.minutos} min de leitura
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="vazio">
                <p>Os primeiros artigos estão em preparação. Enquanto isso, os temas já estão no Instagram.</p>
                <Saida
                  href={site.instagram.url}
                  className="link-seta"
                  evento="clique_link"
                  dados={{ destino: 'instagram', origem: 'conteudos_vazio' }}
                >
                  Ver no Instagram <Seta />
                </Saida>
              </div>
            )}
          </div>
        </section>
      </main>
      <Rodape />
    </>
  );
}
