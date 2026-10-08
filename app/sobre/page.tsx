import type { Metadata } from 'next';
import Link from 'next/link';
import { Cabecalho, Rodape } from '@/components/Estrutura';
import { Modulos } from '@/components/Modulos';
import { Revelar } from '@/components/Revelar';
import { Saida } from '@/components/Saida';
import { destaque, linkPagina } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'A Matriz Sintética cria produtos, ferramentas e soluções com qualidade em inteligência artificial, gestão e negócios.',
  alternates: { canonical: '/sobre' },
};

const eixos = [
  {
    titulo: 'Inteligência artificial',
    texto: 'Usada como ferramenta de trabalho, com método e limite claro do que ela faz bem e do que ainda exige decisão humana.',
  },
  {
    titulo: 'Gestão',
    texto: 'Processos, rotinas e decisões organizados para que a tecnologia melhore o trabalho em vez de complicá-lo.',
  },
  {
    titulo: 'Negócios',
    texto: 'Cada solução nasce de um problema real e é medida pelo retorno que gera para quem a usa.',
  },
];

const passos = [
  { titulo: 'Pesquisar', texto: 'Mapear problemas reais, públicos e evidências antes de qualquer criação.' },
  { titulo: 'Analisar', texto: 'Separar fato de hipótese e decidir o que merece existir.' },
  { titulo: 'Criar', texto: 'Desenvolver a solução com padrão premium de conteúdo, design e uso.' },
  { titulo: 'Testar', texto: 'Colocar diante de pessoas reais e observar o que funciona.' },
  { titulo: 'Aprender', texto: 'Ajustar com base em dados e levar o aprendizado para a próxima solução.' },
];

const criterios = [
  { titulo: 'Útil', texto: 'Resolve um problema concreto de quem usa.' },
  { titulo: 'Bem pesquisado', texto: 'Parte de evidência, não de tendência.' },
  { titulo: 'Confiável', texto: 'Diz o que entrega e entrega o que diz.' },
  { titulo: 'Fácil de usar', texto: 'Funciona sem exigir conhecimento técnico.' },
];

export default function Sobre() {
  const pagina = linkPagina(destaque, 'sobre');

  return (
    <>
      <Cabecalho />
      <main id="conteudo">
        <section className="sobre-abertura">
          <div className="sobre-foto" aria-hidden="true">
            <Modulos />
          </div>
          <div className="largura sobre-abertura-texto">
            <p className="rotulo">Sobre a Matriz Sintética</p>
            <h1>Produtos, ferramentas e soluções com qualidade, para uso prático e retorno real.</h1>
            <p className="lead">
              A Matriz Sintética é um ecossistema dedicado à qualidade em inteligência artificial, gestão e negócios.
              Criamos o que nós mesmos gostaríamos de usar: soluções que funcionam no trabalho real, testadas antes de
              chegar até você.
            </p>
          </div>
        </section>

        <section className="secao largura">
          <div className="secao-topo">
            <div>
              <p className="rotulo">A proposta</p>
              <h2>Três frentes, um mesmo padrão.</h2>
            </div>
          </div>
          <ul className="eixos">
            {eixos.map((e, i) => (
              <li key={e.titulo} data-revelar>
                <span className={`eixo-modulo eixo-${i}`} aria-hidden="true" />
                <h3>{e.titulo}</h3>
                <p>{e.texto}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="faixa-azul">
          <div className="secao largura metodo">
            <div data-revelar>
              <p className="rotulo">Como trabalhamos</p>
              <h2>Tudo passa pela Fábrica de Soluções.</h2>
              <p>
                A Fábrica de Soluções é o método de desenvolvimento da Matriz Sintética. Nenhum produto chega ao mercado
                sem percorrer as cinco etapas, e o que aprendemos em cada lançamento volta para o início do ciclo.
              </p>
            </div>
            <ol className="passos">
              {passos.map((p, i) => (
                <li key={p.titulo} data-revelar>
                  <span className="passo-num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{p.titulo}</h3>
                    <p>{p.texto}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="secao largura experimento">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="capa"
            src={destaque.capa.src}
            alt={`Capa de ${destaque.titulo}`}
            width={destaque.capa.largura}
            height={destaque.capa.altura}
            loading="lazy"
            data-revelar
          />
          <div data-revelar>
            <p className="rotulo">Experimentos</p>
            <h2>Testamos até onde a inteligência artificial consegue criar.</h2>
            <p>
              A parte que fica é um romance escrito com autonomia criativa por uma IA. O protocolo humano definiu apenas a
              pergunta, a relação futura entre humanidade e inteligência artificial, o formato e a extensão. Gênero,
              mundo, personagens, estrutura e final foram decisões da IA autora.
            </p>
            <p>Experimentos como este mostram, na prática, o que a tecnologia já faz e onde ela ainda precisa de nós.</p>
            {pagina && (
              <div className="acoes">
                <Saida
                  href={pagina}
                  className="botao botao-linha"
                  evento="clique_link"
                  dados={{ destino: 'pagina_produto', produto: destaque.slug, origem: 'sobre' }}
                >
                  Conhecer o experimento
                </Saida>
              </div>
            )}
          </div>
        </section>

        <section className="faixa">
          <div className="secao largura">
            <div className="secao-topo">
              <div>
                <p className="rotulo">Padrão de qualidade</p>
                <h2>O que todo produto precisa ser.</h2>
              </div>
            </div>
            <ul className="criterios">
              {criterios.map((c) => (
                <li key={c.titulo} data-revelar>
                  <h3>{c.titulo}</h3>
                  <p>{c.texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="fecho">
          <div className="fecho-foto" aria-hidden="true">
            <Modulos className="modulos-fecho" />
          </div>
          <div className="largura fecho-texto" data-revelar>
            <p className="rotulo">Produtos</p>
            <h2>Veja o que já saiu da Fábrica.</h2>
            <div className="acoes">
              <Link href="/produtos" className="botao botao-verde">
                Ver produtos
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
