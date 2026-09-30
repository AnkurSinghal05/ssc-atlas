import { useState } from 'react';
import { Eye, Timer } from 'lucide-react';
import type { Shortcut } from '@/content/types';
import { RichText } from '@/lib/RichText';
import { tintStyle } from '@/lib/tint';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

/**
 * Each question pattern solved several ways, slowest first: the standard method, then the
 * shortcut, then option elimination. Same idea as the DSA brute force → optimal ladder.
 */
export function ShortcutsPanel({ shortcuts }: { shortcuts: Shortcut[] }) {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-muted-foreground text-sm">
        Try each example first. Then open the ladder: the same question solved the slow way, the fast way, and by ruling out options.
      </p>
      {shortcuts.map((s, i) => (
        <ShortcutCard key={s.pattern} shortcut={s} index={i} />
      ))}
    </div>
  );
}

function ShortcutCard({ shortcut: s, index }: { shortcut: Shortcut; index: number }) {
  const [open, setOpen] = useState(false);
  const slowest = Math.max(...s.ladder.map((r) => r.seconds));
  return (
    <section style={tintStyle(index)} className="tint bg-tint border-tint-border border-t-tint-strong flex flex-col gap-3 rounded-xl border border-t-4 p-4 sm:p-5">
      <p className="text-tint-ink text-xs font-bold tracking-[0.1em] uppercase">Pattern {index + 1}</p>
      <h3 className="-mt-1.5 text-xl font-bold">
        <RichText text={s.pattern} />
      </h3>
      <p className="text-[16px] font-medium">
        <RichText text={s.example} />
      </p>
      {s.options && (
        <ul className="m-0 grid list-none grid-cols-2 gap-2 p-0 sm:grid-cols-4">
          {s.options.map((o) => (
            <li
              key={o}
              className={cn(
                'bg-card rounded-lg border-[1.5px] px-3 py-2 text-sm',
                open && o === s.answer && 'border-good bg-good-soft font-semibold',
                open && o !== s.answer && 'opacity-55',
              )}
            >
              <RichText text={o} />
            </li>
          ))}
        </ul>
      )}
      {!open ? (
        <div>
          <Button variant="outline" onClick={() => setOpen(true)}>
            <Eye /> Show the answer and the ladder
          </Button>
        </div>
      ) : (
        <>
          <p className="text-[15px]">
            Answer: <strong className="text-good">{s.answer}</strong>
          </p>
          <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-3 p-0">
            {s.ladder.map((rung, k) => (
              <li key={rung.name} className="bg-card flex flex-col gap-2 rounded-lg border p-3.5">
                <div className="flex items-center gap-2">
                  <span className="text-tint-ink font-mono text-xs font-bold">{k + 1}</span>
                  <span className="font-bold">{rung.name}</span>
                  <Badge variant="outline" className="text-muted-foreground ml-auto gap-1 bg-transparent">
                    <Timer aria-hidden="true" />~{rung.seconds}s
                  </Badge>
                </div>
                <div className="bg-muted h-1.5 overflow-hidden rounded-full" aria-hidden="true">
                  <div
                    className={cn('h-full rounded-full', k === s.ladder.length - 1 ? 'bg-good' : 'bg-tint-strong')}
                    style={{ width: `${Math.max(6, (rung.seconds / slowest) * 100)}%` }}
                  />
                </div>
                <ul className="marker:text-tint-strong flex list-disc flex-col gap-1 pl-5 text-sm">
                  {rung.steps.map((step, j) => (
                    <li key={j}>
                      <RichText text={step} />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </>
      )}
    </section>
  );
}
