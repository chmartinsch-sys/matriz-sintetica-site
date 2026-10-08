import type { Metadata } from 'next';
import { CartaoProduto } from '@/components/CartaoProduto';
import { Cabecalho, Rodape } from '@/components/Estrutura';
import { Revelar } from '@/components/Revelar';
import { produtos } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Produtos',
  description: 'Livros e materiais digitais da Matriz Sintética.',
  alternates: { canonical: '/produtos' },
};

export default function Produtos() {
  return (
    <>
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
