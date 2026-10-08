'use client';

import { useEffect } from 'react';

/**
 * Revela com suavidade os blocos marcados com [data-revelar] quando entram na tela.
 * Sem JavaScript ou com movimento reduzido, tudo permanece visível.
 */
export function Revelar() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const alvos = [...document.querySelectorAll<HTMLElement>('[data-revelar]')].filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight * 0.9,
    );
    alvos.forEach((el) => el.classList.add('aguardando'));
    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove('aguardando');
            obs.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    alvos.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return null;
}
