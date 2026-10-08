import { linkCompra, linkPagina, type Origem, type Produto } from '@/lib/site';
import { Saida } from './Saida';

export function CartaoProduto({ p, origem, nivel = 'h3' }: { p: Produto; origem: Origem; nivel?: 'h2' | 'h3' }) {
  const compra = linkCompra(p, origem);
  const pagina = linkPagina(p, origem);
  const Titulo = nivel;

  return (
    <article className="cartao-produto" data-revelar>
      <div className="cartao-palco">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="capa"
          src={p.capa.src}
          alt={`Capa de ${p.titulo}`}
          width={p.capa.largura}
          height={p.capa.altura}
          loading="lazy"
        />
      </div>
      <div className="cartao-texto">
        <p className="rotulo">{p.tipo}</p>
        <Titulo>{p.titulo}</Titulo>
        {p.subtitulo && <p className="cartao-sub">{p.subtitulo}</p>}
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
                dados={{ produto: p.slug, origem }}
              >
                Comprar por {p.preco}
              </Saida>
            )}
            {pagina && (
              <Saida
                href={pagina}
                className="botao botao-linha"
                evento="clique_link"
                dados={{ destino: 'pagina_produto', produto: p.slug, origem }}
              >
                Conhecer o livro
              </Saida>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
