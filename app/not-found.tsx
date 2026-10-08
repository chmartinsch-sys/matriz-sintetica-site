import Link from 'next/link';
import { Cabecalho, Rodape } from '@/components/Estrutura';

export default function NaoEncontrada() {
  return (
    <>
      <Cabecalho />
      <main id="conteudo" className="largura pagina">
        <h1 className="titulo-pagina">Esta página não existe.</h1>
        <p className="lead">O endereço pode ter mudado ou sido digitado com erro.</p>
        <Link href="/" className="botao botao-azul">
          Ir para a página inicial
        </Link>
      </main>
      <Rodape />
    </>
  );
}
