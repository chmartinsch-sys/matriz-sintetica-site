/*
 * Fonte única de conteúdo e destinos do site.
 * Para trocar o fornecedor de checkout, altere apenas o campo `checkout`
 * do produto. Nenhuma página precisa ser editada.
 */

export type Origem = 'home' | 'produtos' | 'links' | 'sobre';

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
    'A Matriz Sintética cria conteúdos, produtos e soluções para transformar inteligência artificial em decisões, processos e resultados.',
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
    capa: { src: '/img/a-parte-que-fica.webp', largura: 720, altura: 1080 },
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
    capa: { src: '/img/do-prompt-ao-processo.webp', largura: 720, altura: 1008 },
  },
];

export const destaque = produtos[0];

/*
 * Publicações ilustrativas. O perfil ainda não tem posts: quando houver,
 * preencher `url` com o link de cada publicação real.
 */
export const publicacoes = [
  {
    tema: 'Gestão',
    titulo: '5 decisões que ainda não deveriam ser delegadas à IA.',
    estilo: 'azul',
    url: '',
  },
  {
    tema: 'Estratégia',
    titulo: 'Da ideia à execução com IA.',
    estilo: 'foto',
    url: '',
  },
  {
    tema: 'Negócios',
    titulo: 'O que muda quando você pensa como dono.',
    estilo: 'claro',
    url: '',
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
