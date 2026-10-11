import Link from 'next/link';
import { CartaoProduto } from '@/components/CartaoProduto';
import { Cabecalho, Rodape, Seta } from '@/components/Estrutura';
import { Modulos } from '@/components/Modulos';
import { Revelar } from '@/components/Revelar';
import { Saida } from '@/components/Saida';
import { produtos, publicacoes, site } from '@/lib/site';

export default function Home() {
  return (
    <>
      <Cabecalho />
      <main id="conteudo">
        <section className="hero">
          <div className="hero-foto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/arquitetura.webp"
              srcSet="/img/arquitetura-960.webp 960w, /img/arquitetura.webp 1672w"
              sizes="(min-width: 60rem) 70vw, 100vw"
              alt=""
              width={1672}
              height={941}
              fetchPriority="high"
            />
            <Modulos />
          </div>
          <div className="largura hero-texto">
            <h1>
              <span className="forte">Negócios, gestão</span>
              <span className="leve">e inteligência artificial.</span>
            </h1>
            <p className="lead">{site.descricao}</p>
            <div className="acoes">
              <Link href="/produtos" className="botao botao-verde">
                Ver produtos
              </Link>
              <Link href="#conteudos" className="botao botao-linha">
                Acompanhar conteúdos
              </Link>
            </div>
          </div>
        </section>

        <section id="conteudos" className="secao largura">
          <div className="secao-topo">
            <h2>Conteúdos em destaque</h2>
            <Saida
              href={site.instagram.url}
              className="link-seta"
              evento="clique_link"
              dados={{ destino: 'instagram', origem: 'secao_conteudos' }}
            >
              Ver no Instagram <Seta />
            </Saida>
          </div>
          <div className="grade-posts">
            {publicacoes.map((post) => (
              <Saida
                key={post.titulo}
                href={post.url || site.instagram.url}
                className="post"
                evento="clique_link"
                dados={{ destino: 'instagram_post', tema: post.tema, origem: 'home' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.imagem} alt={post.titulo} width={720} height={900} loading="lazy" />
              </Saida>
            ))}
          </div>
        </section>

        <section id="produtos" className="faixa">
          <div className="secao largura">
            <div className="secao-topo">
              <div>
                <p className="rotulo">Produtos</p>
                <h2>Explore a Matriz Sintética</h2>
              </div>
              <Link href="/produtos" className="link-seta">
                Ver todos os produtos <Seta />
              </Link>
            </div>
            <div className="grade-produtos">
              {produtos.map((p) => (
                <CartaoProduto key={p.slug} p={p} origem="home" />
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
