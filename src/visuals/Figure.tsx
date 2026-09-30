import { useEffect, useId, useRef } from 'react';
import type { Figure } from '@/content/types';
import { cn } from '@/lib/utils';

/**
 * Draws a content figure in pen on paper. A light displacement filter makes the straight
 * lines wobble like hand-drawn ones. With `active`, parts tagged data-step="active" stand
 * out and the other tagged parts fade.
 */
export function FigureSvg({ figure, active, className }: { figure: Figure; active?: number | null; className?: string }) {
  const id = useId().replace(/:/g, '');
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    const g = ref.current;
    if (!g) return;
    for (const el of g.querySelectorAll<SVGElement>('[data-step]')) {
      const steps = (el.dataset.step ?? '').split(/[\s,]+/).map(Number);
      el.classList.toggle('d-on', active != null && steps.includes(active));
      el.classList.toggle('d-off', active != null && !steps.includes(active));
    }
  }, [active, figure.svg]);

  return (
    <figure className={cn('diagram m-0 flex flex-col items-center gap-1', className)}>
      <svg viewBox={figure.viewBox} className="h-auto w-full max-w-[420px]" role="img" aria-label={figure.caption ?? 'Figure'}>
        <filter id={`rough-${id}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="3" />
          <feDisplacementMap in="SourceGraphic" scale="1.6" />
        </filter>
        <g ref={ref} filter={`url(#rough-${id})`} dangerouslySetInnerHTML={{ __html: figure.svg }} />
      </svg>
      {figure.caption && <figcaption className="font-hand ink-soft text-center text-[15px] leading-snug">{figure.caption}</figcaption>}
    </figure>
  );
}
