import type { Metadata } from 'next';
import { CartaoProduto } from '@/components/CartaoProduto';
import { Cabecalho, Rodape } from '@/components/Estrutura';
import { Revelar } from '@/components/Revelar';
import { DadosEstruturados } from '@/components/DadosEstruturados';
import { produtos, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Produtos: livros e e-books sobre IA, gestão e negócios',
  description:
    'Livros e materiais digitais da Matriz Sintética para aplicar inteligência artificial na gestão e nos negócios. Conheça A parte que fica e Do Prompt ao Processo.',
  alternates: { canonical: '/produtos' },
};

export default function Produtos() {
  return (
    <>
      <DadosEstruturados
        dados={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Produtos da Matriz Sintética',
          itemListElement: produtos.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': 'Book',
              name: p.titulo,
              alternativeHeadline: p.subtitulo,
              description: p.descricao,
              image: `${site.url}${p.capa.src}`,
              inLanguage: 'pt-BR',
              bookFormat: 'https://schema.org/EBook',
              publisher: { '@id': `${site.url}/#organizacao` },
              ...(p.pagina ? { url: p.pagina } : {}),
              ...(p.checkout && p.preco
                ? {
                    offers: {
                      '@type': 'Offer',
                      price: p.preco.replace(/[^0-9,]/g, '').replace(',', '.'),
                      priceCurrency: 'BRL',
                      availability: 'https://schema.org/InStock',
                      url: p.checkout,
                    },
                  }
                : {}),
            },
          })),
        }}
      />
      <Cabecalho />
      <main id="conteudo">
        <section className="largura topo-pagina">
          <p className="rotulo">Produtos</p>
          <h1 className="titulo-pagina">Livros e materiais digitais.</h1>
          <p className="lead">Cada produto tem identidade própria e o mesmo padrão: útil, bem pesquisado e fácil de usar.</p>
        </section>
        <section className="faixa">
          <div className="secao largura">
            <div className="grade-produtos grade-lista">
              {produtos.map((p) => (
                <CartaoProduto key={p.slug} p={p} origem="produtos" nivel="h2" />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Rodape />
      <Revelar />
    </>
  );
}
