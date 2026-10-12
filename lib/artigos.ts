import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

/*
 * Artigos da área de conteúdos. Cada artigo é um arquivo .md em content/artigos.
 * Com `publicado: false`, o artigo existe no endereço próprio para revisão,
 * mas fica fora do Google, da lista de conteúdos, do sitemap e da home.
 */

export type Artigo = {
  slug: string;
  titulo: string;
  tituloSeo?: string;
  resumo: string;
  tema: string;
  data: string;
  capa: string;
  instagram?: string;
  produto?: string;
  publicado: boolean;
  html: string;
  minutos: number;
};

const PASTA = path.join(process.cwd(), 'content', 'artigos');

function ler(arquivo: string): Artigo {
  const bruto = fs.readFileSync(path.join(PASTA, arquivo), 'utf8');
  const { data, content } = matter(bruto);
  const palavras = content.split(/\s+/).filter(Boolean).length;
  return {
    slug: arquivo.replace(/\.md$/, ''),
    titulo: data.titulo,
    tituloSeo: data.tituloSeo,
    resumo: data.resumo,
    tema: data.tema,
    data: String(data.data),
    capa: data.capa,
    instagram: data.instagram,
    produto: data.produto,
    publicado: data.publicado === true,
    html: marked.parse(content, { async: false }) as string,
    minutos: Math.max(1, Math.round(palavras / 200)),
  };
}

/** Todos os artigos, inclusive rascunhos, do mais recente para o mais antigo. */
export function todosArtigos(): Artigo[] {
  if (!fs.existsSync(PASTA)) return [];
  return fs
    .readdirSync(PASTA)
    .filter((f) => f.endsWith('.md'))
    .map(ler)
    .sort((a, b) => b.data.localeCompare(a.data));
}

/** Apenas os artigos publicados. */
export function artigosPublicados(): Artigo[] {
  return todosArtigos().filter((a) => a.publicado);
}

export function artigoPorSlug(slug: string): Artigo | undefined {
  return todosArtigos().find((a) => a.slug === slug);
}

/** Destino do item Conteúdos no menu: a página de artigos, quando houver algum publicado. */
export function destinoConteudos() {
  return artigosPublicados().length > 0 ? '/conteudos' : '/#conteudos';
}

export function dataPorExtenso(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
