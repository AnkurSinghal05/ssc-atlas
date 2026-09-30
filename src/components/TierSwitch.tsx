import { TIER_LABEL, useTier, type TierFilter } from '@/lib/tier';
import { cn } from '@/lib/utils';

const OPTIONS: TierFilter[] = ['all', 'T1', 'T2'];

/** Segmented control that filters every map and list to one CGL tier. */
export function TierSwitch({ className }: { className?: string }) {
  const { tier, setTier } = useTier();
  return (
    <div className={cn('bg-muted flex w-full gap-0.5 rounded-lg p-0.5', className)} role="group" aria-label="Exam tier">
      {OPTIONS.map((t) => (
        <button
          key={t}
          type="button"
          aria-pressed={tier === t}
          onClick={() => setTier(t)}
          className={cn(
            'flex-1 rounded-md px-2 py-1 text-[13px] font-semibold transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50',
            tier === t ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground',
          )}
        >
          {TIER_LABEL[t]}
        </button>
      ))}
    </div>
  );
}
