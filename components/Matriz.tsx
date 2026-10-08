const CORES = ['cinza', 'verde', 'azul', 'verde', 'azul', 'cinza', 'grafite', 'azul', 'verde'];

/** Símbolo modular 3×3 da marca, usado como elemento gráfico. */
export function Matriz({ className = '' }: { className?: string }) {
  return (
    <div className={`matriz ${className}`} aria-hidden="true">
      {CORES.map((cor, i) => (
        <span key={i} className={`modulo modulo-${cor}`} style={{ ['--i' as string]: i }} />
      ))}
    </div>
  );
}
