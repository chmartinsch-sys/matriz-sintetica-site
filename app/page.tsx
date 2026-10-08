import Link from 'next/link';
import { Cabecalho, Rodape } from '@/components/Estrutura';
import { Matriz } from '@/components/Matriz';
import { Saida } from '@/components/Saida';
import { destaque, linkCompra, linkPagina, site } from '@/lib/site';

export default function Home() {
  const compra = linkCompra(destaque, 'home');
  const pagina = linkPagina(destaque, 'home');

  return (
    <>
      <Cabecalho />
      <main id="conteudo">
        <section className="hero largura">
          <div className="hero-texto">
            <h1>
              <span className="forte">Negócios, gestão</span>
              <span className="leve">e inteligência artificial.</span>
            </h1>
            <p className="lead">{site.descricao}</p>
            <Link href="/produtos" className="botao botao-azul">
              Ver produtos
            </Link>
          </div>
          <Matriz className="hero-matriz" />
        </section>

        <section className="faixa">
          <div className="largura destaque">
            {destaque.capa && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className="capa"
                src={destaque.capa}
                alt={`Capa de ${destaque.titulo}`}
                width={640}
                height={960}
                loading="lazy"
              />
            )}
            <div>
              <p className="tipo">{destaque.tipo}</p>
              <h2>{destaque.titulo}</h2>
              <p>{destaque.descricao}</p>
              <div className="acoes">
                {compra && (
                  <Saida
                    href={compra}
                    className="botao botao-verde"
                    evento="clique_compra"
                    dados={{ produto: destaque.slug, origem: 'home' }}
                  >
                    Comprar por {destaque.preco}
                  </Saida>
                )}
                {pagina && (
                  <Saida
                    href={pagina}
                    className="botao botao-linha"
                    evento="clique_link"
                    dados={{ destino: 'pagina_produto', produto: destaque.slug, origem: 'home' }}
                  >
                    Conhecer o livro
                  </Saida>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="largura fecho">
          <p className="padrao">{site.padrao}</p>
          <Link href="/produtos" className="link">
            Ver todos os produtos
          </Link>
        </section>
      </main>
      <Rodape />
    </>
  );
}
