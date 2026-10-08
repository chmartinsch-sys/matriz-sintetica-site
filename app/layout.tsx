import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import '@fontsource-variable/sora';
import '@fontsource-variable/inter';
import './globals.css';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.nome} | ${site.assinatura}`, template: `%s | ${site.nome}` },
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
        <a className="pular" href="#conteudo">
          Ir para o conteúdo
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
