/** Módulos da marca sobrepostos à fotografia. Células vazias ficam sem cor. */
export function Modulos({ className = '' }: { className?: string }) {
  const grade = ['verde', 'claro', '', '', 'azul', 'cinza', 'claro', 'cinza', ''];
  return (
    <div className={`modulos ${className}`} aria-hidden="true">
      {grade.map((cor, i) => (
        <span key={i} className={cor ? `m m-${cor}` : 'm'} style={{ ['--i' as string]: i }} />
      ))}
    </div>
  );
}
