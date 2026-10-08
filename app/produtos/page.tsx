import type { Metadata } from 'next';
import { Cabecalho, Rodape } from '@/components/Estrutura';
import { Saida } from '@/components/Saida';
import { linkCompra, linkPagina, produtos } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Produtos',
  description: 'Livros e materiais digitais da Matriz Sintética.',
  alternates: { canonical: '/produtos' },
};

export default function Produtos() {
  return (
    <>
      <Cabecalho />
      <main id="conteudo" className="largura pagina">
        <h1 className="titulo-pagina">Produtos</h1>
        <ul className="lista-produtos">
          {produtos.map((p) => {
            const compra = linkCompra(p, 'produtos');
            const pagina = linkPagina(p, 'produtos');
            return (
              <li key={p.slug} className="produto">
                {p.capa ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className="capa"
                    src={p.capa}
                    alt={`Capa de ${p.titulo}`}
                    width={640}
                    height={960}
                    loading="lazy"
                  />
                ) : (
                  <div className="capa capa-vazia" aria-hidden="true" />
                )}
                <div>
                  <p className="tipo">{p.tipo}</p>
                  <h2>{p.titulo}</h2>
                  <p>{p.descricao}</p>
                  {p.status === 'em-breve' ? (
                    <p className="selo">Em breve</p>
                  ) : (
                    <div className="acoes">
                      {compra && (
                        <Saida
                          href={compra}
                          className="botao botao-verde"
                          evento="clique_compra"
                          dados={{ produto: p.slug, origem: 'produtos' }}
                        >
                          Comprar por {p.preco}
                        </Saida>
                      )}
                      {pagina && (
                        <Saida
                          href={pagina}
                          className="botao botao-linha"
                          evento="clique_link"
                          dados={{ destino: 'pagina_produto', produto: p.slug, origem: 'produtos' }}
                        >
                          Conhecer o livro
                        </Saida>
                      )}
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </main>
      <Rodape />
    </>
  );
}
