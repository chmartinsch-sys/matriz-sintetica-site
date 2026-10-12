/*
 * Fonte única de conteúdo e destinos do site.
 * Para trocar o fornecedor de checkout, altere apenas o campo `checkout`
 * do produto. Nenhuma página precisa ser editada.
 */

export type Origem = 'home' | 'produtos' | 'links' | 'sobre' | 'artigo';

export type Produto = {
  slug: string;
  titulo: string;
  subtitulo?: string;
  tipo: string;
  descricao: string;
  status: 'disponivel' | 'em-breve';
  preco?: string;
  capa: { src: string; largura: number; altura: number };
  /** Destino de compra. Hoje: Hotmart. */
  checkout?: string;
  /** Página de vendas própria do produto, quando existir. */
  pagina?: string;
};

export const site = {
  nome: 'Matriz Sintética',
  assinatura: 'Negócios, gestão e inteligência artificial.',
  url: 'https://matrizsintetica.com.br',
  dominio: 'matrizsintetica.com.br',
  descricao:
    'Conteúdo, soluções e aplicações práticas para transformar tecnologia em decisões, processos e resultados.',
  instagram: {
    usuario: '@matrizsintetica',
    url: 'https://www.instagram.com/matrizsintetica',
  },
};

export const produtos: Produto[] = [
  {
    slug: 'a-parte-que-fica',
    titulo: 'A parte que fica',
    tipo: 'Romance e entrevista',
    descricao:
      'Uma IA recebeu autonomia criativa para imaginar a relação entre humanidade e inteligência artificial. Leia o romance e, depois, a entrevista com a autora.',
    status: 'disponivel',
    preco: 'R$ 29,90',
    capa: { src: '/img/a-parte-que-fica.webp', largura: 480, altura: 720 },
    checkout: 'https://pay.hotmart.com/D107811025F',
    pagina: 'https://apartequefica.vercel.app',
  },
  {
    slug: 'do-prompt-ao-processo',
    titulo: 'Do Prompt ao Processo',
    subtitulo: 'IA para pequenos negócios',
    tipo: 'E-book',
    descricao:
      'Como usar inteligência artificial de forma prática em vendas, atendimento, gestão, marketing e na rotina do negócio, sem precisar entender de tecnologia.',
    status: 'em-breve',
    capa: { src: '/img/do-prompt-ao-processo.webp', largura: 480, altura: 672 },
  },
];

export const destaque = produtos[0];

/*
 * Capas dos carrosséis em destaque. Quando o artigo do tema está publicado,
 * a capa leva ao artigo; sem artigo, leva ao post no Instagram.
 */
export const publicacoes = [
  {
    tema: 'Inteligência artificial',
    titulo: 'A melhor dica que posso te dar para aprender a usar inteligência artificial. E quase ninguém faz.',
    imagem: '/img/post-melhor-dica.webp',
    artigo: '',
    url: 'https://www.instagram.com/p/DeXwX95mOE2/',
  },
  {
    tema: 'Processos',
    titulo: 'O problema não é o prompt. É o processo.',
    imagem: '/img/post-prompt-processo.webp',
    artigo: 'o-problema-nao-e-o-prompt-e-o-processo',
    url: 'https://www.instagram.com/p/DeReVNblqxH/',
  },
  {
    tema: 'Gestão',
    titulo: '5 decisões que uma empresa não deveria delegar à IA.',
    imagem: '/img/post-5-decisoes.webp',
    artigo: '',
    url: 'https://www.instagram.com/p/DeQbOg7ADCu/',
  },
] as const;

function comUtm(base: string, origem: Origem, extra: Record<string, string> = {}) {
  const url = new URL(base);
  url.searchParams.set('utm_source', 'matrizsintetica');
  url.searchParams.set('utm_medium', origem);
  url.searchParams.set('utm_campaign', 'site');
  for (const [k, v] of Object.entries(extra)) url.searchParams.set(k, v);
  return url.toString();
}

/** Link de compra com UTMs e o parâmetro de origem da Hotmart (sck). */
export function linkCompra(p: Produto, origem: Origem) {
  return p.checkout ? comUtm(p.checkout, origem, { sck: `ms_${origem}` }) : undefined;
}

/** Link para a página de vendas do produto, com UTMs. */
export function linkPagina(p: Produto, origem: Origem) {
  return p.pagina ? comUtm(p.pagina, origem) : undefined;
}
