import { Flame } from 'lucide-react';
import type { QuestionPattern } from '@/content/types';
import { RichText } from '@/lib/RichText';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const LABEL = {
  most: 'Most asked',
  often: 'Often',
  rare: 'Sometimes',
} as const;

/** The question types a topic is asked as, with the most asked ones highlighted. */
export function PatternsView({ patterns }: { patterns: QuestionPattern[] }) {
  return (
    <section className="bg-card flex flex-col gap-3 rounded-xl border p-4 md:p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <p className="text-subject text-xs font-bold tracking-[0.1em] uppercase">In the exam</p>
          <h3 className="text-lg font-extrabold tracking-[-0.01em] md:text-xl">Question patterns</h3>
        </div>
        <p className="text-muted-foreground text-xs">Frequency is an estimate from recent CGL papers.</p>
      </div>
      <ul className="m-0 flex list-none flex-col gap-2 p-0">
        {patterns.map((p) => (
          <li
            key={p.name}
            className={cn(
              'flex flex-col gap-0.5 rounded-lg border px-3.5 py-2.5 sm:flex-row sm:items-center sm:gap-3',
              p.frequency === 'most' ? 'border-bad/40 bg-bad-soft' : 'bg-background/40',
            )}
          >
            <span className="flex min-w-0 flex-1 flex-col">
              <span className={cn('font-semibold', p.frequency === 'most' && 'text-bad')}>
                <RichText text={p.name} />
              </span>
              {p.example && (
                <span className="text-muted-foreground text-sm">
                  <RichText text={p.example} />
                </span>
              )}
            </span>
            <Badge
              variant="outline"
              className={cn(
                'bg-transparent',
                p.frequency === 'most'
                  ? 'border-bad text-bad'
                  : p.frequency === 'often'
                    ? 'text-accent-ink border-accent-ink'
                    : 'text-muted-foreground',
              )}
            >
              {p.frequency === 'most' && <Flame aria-hidden="true" />}
              {LABEL[p.frequency]}
            </Badge>
          </li>
        ))}
      </ul>
    </section>
  );
}
