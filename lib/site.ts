/*
 * Fonte única de conteúdo e destinos do site.
 * Para trocar o fornecedor de checkout, altere apenas o campo `checkout`
 * do produto. Nenhuma página precisa ser editada.
 */

export type Origem = 'home' | 'produtos' | 'links';

export type Produto = {
  slug: string;
  titulo: string;
  tipo: string;
  descricao: string;
  status: 'disponivel' | 'em-breve';
  preco?: string;
  capa?: string;
  /** Destino de compra. Hoje: Hotmart. */
  checkout?: string;
  /** Página de vendas própria do produto, quando existir. */
  pagina?: string;
};

export const site = {
  nome: 'Matriz Sintética',
  assinatura: 'Negócios, gestão e inteligência artificial.',
  url: 'https://matrizsintetica.com.br',
  // Texto institucional provisório, pendente de aprovação da Área 01.
  descricao:
    'A Matriz Sintética publica livros e materiais digitais sobre negócios, gestão e inteligência artificial.',
  padrao: 'Soluções úteis, bem pesquisadas, confiáveis e fáceis de usar.',
  instagram: {
    usuario: '@matrizsintetica',
    url: 'https://www.instagram.com/matrizsintetica',
  },
};

export const produtos: Produto[] = [
  {
    slug: 'a-parte-que-fica',
    titulo: 'A parte que fica',
    tipo: 'Romance e entrevista em PDF',
    descricao:
      'Uma IA recebeu autonomia criativa para imaginar a relação entre humanidade e inteligência artificial. Leia o romance e, depois, a entrevista com a autora.',
    status: 'disponivel',
    preco: 'R$ 29,90',
    // Provisório: capa servida pela página de vendas atual. Substituir por arquivo local.
    capa: 'https://apartequefica.vercel.app/images/romance-640.webp',
    checkout: 'https://pay.hotmart.com/D107811025F',
    pagina: 'https://apartequefica.vercel.app',
  },
  {
    slug: 'do-prompt-ao-processo',
    titulo: 'Do Prompt ao Processo',
    tipo: 'E-book',
    descricao: 'IA para pequenos negócios.',
    status: 'em-breve',
  },
];

export const destaque = produtos[0];

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
