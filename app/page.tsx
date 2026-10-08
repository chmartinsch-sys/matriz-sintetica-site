import Link from 'next/link';
import { CartaoProduto } from '@/components/CartaoProduto';
import { Cabecalho, Rodape, Seta } from '@/components/Estrutura';
import { Revelar } from '@/components/Revelar';
import { Saida } from '@/components/Saida';
import { pilares, produtos, publicacoes, site } from '@/lib/site';

const ICONES: Record<string, React.ReactNode> = {
  conteudo: (
    <path d="M9 4h9l5 5v15a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm9 0v5h5M12 14h7m-7 4h7m-7 4h4" />
  ),
  produtos: <path d="m15.5 4 9 5v11l-9 5-9-5V9l9-5Zm0 10.5 9-5.3m-9 5.3-9-5.3m9 5.3V25" />,
  aplicacoes: <path d="M5 25h21M8 25v-7h4v7m2 0V12h4v13m2 0V6h4v19" />,
};

/** Módulos da marca sobrepostos à fotografia. Células vazias ficam sem cor. */
function Modulos({ className = '' }: { className?: string }) {
  const grade = ['verde', 'claro', '', '', 'azul', 'cinza', 'claro', 'cinza', ''];
  return (
    <div className={`modulos ${className}`} aria-hidden="true">
      {grade.map((cor, i) => (
        <span key={i} className={cor ? `m m-${cor}` : 'm'} style={{ ['--i' as string]: i }} />
      ))}
    </div>
  );
}

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
            <p className="rotulo">Tecnologia, negócios, aplicação real</p>
            <h1>
              <span className="forte">Negócios, gestão</span>
              <span className="leve">e inteligência artificial.</span>
            </h1>
            <p className="lead">{site.descricao}</p>
            <div className="acoes">
              <Link href="/produtos" className="botao botao-verde">
                Ver produtos
              </Link>
              <Saida
                href={site.instagram.url}
                className="botao botao-linha"
                evento="clique_link"
                dados={{ destino: 'instagram', origem: 'hero' }}
              >
                Acompanhar conteúdos
              </Saida>
            </div>
          </div>
        </section>

        <section id="sobre" className="secao largura sobre">
          <div data-revelar>
            <p className="rotulo">Sobre</p>
            <h2>O que é a Matriz Sintética</h2>
            <p>{site.sobre}</p>
          </div>
          <ul className="pilares">
            {pilares.map((p) => (
              <li key={p.titulo} data-revelar>
                <span className="pilar-icone">
                  <svg width="30" height="30" viewBox="0 0 31 30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {ICONES[p.icone]}
                  </svg>
                </span>
                <h3>
                  {p.titulo}
                  {'emBreve' in p && <span className="selo selo-mini">Em breve</span>}
                </h3>
                <p>{p.texto}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="faixa">
          <div className="secao largura">
            <div className="secao-topo">
              <div>
                <p className="rotulo">Produtos em destaque</p>
                <h2>Para ler, aplicar e decidir melhor.</h2>
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

        <section className="secao largura">
          <div className="secao-topo">
            <div>
              <p className="rotulo">Acompanhe no Instagram</p>
              <h2>Ideias curtas para quem decide.</h2>
            </div>
            <Saida
              href={site.instagram.url}
              className="link-seta"
              evento="clique_link"
              dados={{ destino: 'instagram', origem: 'secao_instagram' }}
            >
              Ver no Instagram <Seta />
            </Saida>
          </div>
          <div className="grade-posts">
            {publicacoes.map((post) => (
              <Saida
                key={post.titulo}
                href={post.url || site.instagram.url}
                className={`post post-${post.estilo}`}
                evento="clique_link"
                dados={{ destino: 'instagram_post', tema: post.tema, origem: 'home' }}
              >
                <span className="rotulo">{post.tema}</span>
                <span className="post-titulo">{post.titulo}</span>
                <span className="post-pe">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/simbolo.svg" alt="" width={28} height={28} loading="lazy" />
                  {site.instagram.usuario}
                </span>
              </Saida>
            ))}
          </div>
        </section>

        <section className="fecho">
          <div className="fecho-foto" aria-hidden="true">
            <Modulos className="modulos-fecho" />
          </div>
          <div className="largura fecho-texto" data-revelar>
            <p className="rotulo">Ecossistema Matriz Sintética</p>
            <h2>Comece por onde faz mais sentido para você.</h2>
            <p>Produtos e conteúdos para pensar melhor, executar com mais clareza e usar a inteligência artificial com critério.</p>
            <div className="acoes">
              <Link href="/produtos" className="botao botao-verde">
                Explorar os produtos
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Rodape />
      <Revelar />
    </>
  );
}
