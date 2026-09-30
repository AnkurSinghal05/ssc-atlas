import { useState } from 'react';
import type { DiagramVisual } from '@/content/types';
import { RichText } from '@/lib/RichText';
import { cn } from '@/lib/utils';
import { FigureSvg } from './Figure';

/** A hand-drawn diagram on a notebook page with numbered notes; pick a note to light up its part of the figure. */
export function Diagram({ visual }: { visual: DiagramVisual }) {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section className="notebook flex flex-col gap-2">
      <h3 className="font-script text-[28px] leading-[32px] font-bold">
        <span className="squiggle">
          <RichText text={visual.title} />
        </span>
      </h3>
      <div className="grid grid-cols-1 items-start gap-x-6 gap-y-3 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <FigureSvg figure={visual.figure} active={active} />
        <ol className="m-0 flex list-none flex-col p-0" onMouseLeave={() => setActive(null)}>
          {visual.explain.map((line, i) => (
            <li key={i}>
              <button
                type="button"
                onMouseEnter={() => setActive(i + 1)}
                onFocus={() => setActive(i + 1)}
                onClick={() => setActive((a) => (a === i + 1 ? null : i + 1))}
                className={cn(
                  'flex w-full gap-2 rounded-sm px-1.5 text-left transition-colors outline-none',
                  active === i + 1 ? 'bg-[var(--hl-yellow)]' : 'hover:bg-[var(--hl-blue)]',
                )}
              >
                <span className="ink-red flex-none font-bold">{i + 1}.</span>
                <span>
                  <RichText text={line} />
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
