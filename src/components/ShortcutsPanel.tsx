import { useState } from 'react';
import { Eye } from 'lucide-react';
import type { Shortcut } from '@/content/types';
import { RichText } from '@/lib/RichText';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

/**
 * Each question pattern solved several ways, slowest first: the standard method, then the
 * shortcut, then option elimination. Drawn as rough work on a notebook page, with the fastest
 * method circled in red.
 */
export function ShortcutsPanel({ shortcuts }: { shortcuts: Shortcut[] }) {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-muted-foreground text-sm">
        Try each example first. Then open the rough work: the same question solved the slow way, the fast way, and by ruling out options.
      </p>
      {shortcuts.map((s, i) => (
        <ShortcutCard key={s.pattern} shortcut={s} index={i} />
      ))}
    </div>
  );
}

const LETTERS = ['a', 'b', 'c', 'd', 'e'];

function ShortcutCard({ shortcut: s, index }: { shortcut: Shortcut; index: number }) {
  const [open, setOpen] = useState(false);
  const slowest = Math.max(...s.ladder.map((r) => r.seconds));
  const fastest = s.ladder.reduce((best, r, k) => (r.seconds < s.ladder[best].seconds ? k : best), 0);
  return (
    <section className="notebook flex flex-col">
      <p className="ink-red font-bold">Pattern {index + 1}</p>
      <h3 className="font-script text-[30px] leading-[32px] font-bold">
        <span className="squiggle">
          <RichText text={s.pattern} />
        </span>
      </h3>
      <p className="mt-2 font-bold">
        <span className="ink-red mr-1.5">Q.</span>
        <RichText text={s.example} />
      </p>
      {s.options && (
        <ul className="m-0 flex list-none flex-wrap gap-x-7 p-0">
          {s.options.map((o, k) => (
            <li key={o} className={cn(open && o !== s.answer && 'opacity-45')}>
              <span className={cn('px-1', open && o === s.answer && 'hand-circle')}>
                ({LETTERS[k]}) <RichText text={o} />
              </span>
            </li>
          ))}
        </ul>
      )}
      {!open ? (
        <div className="no-print mt-3">
          <Button variant="outline" className="font-hand text-[15px]" onClick={() => setOpen(true)}>
            <Eye /> Show the rough work
          </Button>
        </div>
      ) : (
        <>
          <p>
            Ans: <strong className="ink-green hl-green text-[19px]">{s.answer}</strong>
          </p>
          <ol className="m-0 mt-3 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,230px),1fr))] gap-x-5 gap-y-4 p-0">
            {s.ladder.map((rung, k) => {
              const best = k === fastest;
              return (
                <li key={rung.name} className={cn('relative flex flex-col self-start px-3 py-1', best && 'rough-circle')}>
                  {best && <span className="font-script ink-red absolute -top-5 right-2 rotate-[-4deg] text-[22px] font-bold">fastest! ↓</span>}
                  <div className="flex items-baseline gap-2">
                    <span className="ink-red font-bold">{k + 1}.</span>
                    <span className="font-bold underline decoration-current/40 decoration-wavy underline-offset-4">{rung.name}</span>
                    <span className="ink-soft ml-auto text-[15px]">~{rung.seconds}s</span>
                  </div>
                  <div className="my-1 h-[5px] overflow-hidden rounded-full" aria-hidden="true">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${Math.max(6, (rung.seconds / slowest) * 100)}%`,
                        background: best ? 'var(--ink-green)' : 'var(--ink-soft)',
                        opacity: best ? 1 : 0.45,
                      }}
                    />
                  </div>
                  <ul className="m-0 flex list-none flex-col p-0">
                    {rung.steps.map((step, j) => (
                      <li key={j} className="pl-4 -indent-4">
                        <span className="ink-soft mr-1.5">→</span>
                        <RichText text={step} />
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ol>
        </>
      )}
    </section>
  );
}
