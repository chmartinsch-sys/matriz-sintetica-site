import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import '@fontsource-variable/sora';
import '@fontsource-variable/inter';
import './globals.css';
import { DadosEstruturados } from '@/components/DadosEstruturados';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nome} | Inteligência artificial aplicada a negócios e gestão`,
    template: `%s | ${site.nome}`,
  },
  applicationName: site.nome,
  keywords: ['inteligência artificial', 'IA para negócios', 'gestão', 'processos', 'pequenos negócios', 'e-book de IA'],
  authors: [{ name: site.nome, url: site.url }],
  creator: site.nome,
  publisher: site.nome,
  formatDetection: { telephone: false },
  description: site.descricao,
  openGraph: {
    siteName: site.nome,
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: site.nome }],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = { themeColor: '#F5F6F4' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <DadosEstruturados
          dados={{
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': `${site.url}/#organizacao`,
                name: site.nome,
                url: site.url,
                logo: `${site.url}/apple-icon.png`,
                slogan: site.assinatura,
                description: site.descricao,
                sameAs: [site.instagram.url],
              },
              {
                '@type': 'WebSite',
                '@id': `${site.url}/#site`,
                name: site.nome,
                url: site.url,
                inLanguage: 'pt-BR',
                publisher: { '@id': `${site.url}/#organizacao` },
              },
            ],
          }}
        />
        <a className="pular" href="#conteudo">
          Ir para o conteúdo
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
