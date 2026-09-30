import { useCallback, useEffect, useState } from 'react';
import { Check, LayoutGrid, Layers, RotateCcw, Undo2 } from 'lucide-react';
import type { QAItem } from '@/content/types';
import { RichText } from '@/lib/RichText';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { CodeBlock } from './CodeBlock';

type Mark = 'got' | 'again';

/**
 * Flashcards as handwritten index cards. Deck mode shows one card at a time: flip it, then say
 * "Got it" or "Again". Cards marked Again come back until the deck is clear. Grid mode shows every card.
 */
export function QAPanel({ items }: { items: QAItem[] }) {
  const [mode, setMode] = useState<'deck' | 'grid'>('deck');
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-muted-foreground text-sm">Answer in your head first, then flip the card to check.</p>
        <div className="flex gap-0.5 rounded-md border p-0.5" role="group" aria-label="Card view">
          <Button size="sm" variant={mode === 'deck' ? 'secondary' : 'ghost'} aria-pressed={mode === 'deck'} onClick={() => setMode('deck')}>
            <Layers /> One at a time
          </Button>
          <Button size="sm" variant={mode === 'grid' ? 'secondary' : 'ghost'} aria-pressed={mode === 'grid'} onClick={() => setMode('grid')}>
            <LayoutGrid /> All cards
          </Button>
        </div>
      </div>
      {mode === 'deck' ? <Deck items={items} /> : <Grid items={items} />}
    </div>
  );
}

function Deck({ items }: { items: QAItem[] }) {
  const [queue, setQueue] = useState(() => items.map((_, i) => i));
  const [marks, setMarks] = useState<Record<number, Mark>>({});
  const [flipped, setFlipped] = useState(false);
  const [round, setRound] = useState(1);
  const current = queue[0];
  const got = Object.values(marks).filter((m) => m === 'got').length;

  const mark = useCallback(
    (m: Mark) => {
      if (current === undefined) return;
      setMarks((prev) => ({ ...prev, [current]: m }));
      setFlipped(false);
      setQueue((q) => q.slice(1));
    },
    [current],
  );
  const nextRound = () => {
    const again = items.map((_, i) => i).filter((i) => marks[i] === 'again');
    setQueue(again);
    setRound((r) => r + 1);
  };
  const restart = () => {
    setQueue(items.map((_, i) => i));
    setMarks({});
    setRound(1);
    setFlipped(false);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLElement && e.target.closest('input, textarea, [role="dialog"]')) return;
      if (e.key === ' ' || e.key === 'Enter') {
        if (e.target instanceof HTMLButtonElement) return;
        e.preventDefault();
        setFlipped((f) => !f);
      } else if (flipped && (e.key === '1' || e.key === 'ArrowLeft')) mark('again');
      else if (flipped && (e.key === '2' || e.key === 'ArrowRight')) mark('got');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [flipped, mark]);

  const progress = (
    <div className="flex gap-1" aria-hidden="true">
      {items.map((_, i) => (
        <span
          key={i}
          className={cn(
            'h-1.5 max-w-12 flex-1 rounded-full',
            marks[i] === 'got' ? 'bg-good' : marks[i] === 'again' ? 'bg-bad' : i === current ? 'bg-muted-foreground' : 'bg-muted',
          )}
        />
      ))}
    </div>
  );

  if (current === undefined) {
    const again = items.length - got;
    return (
      <div className="flex max-w-[640px] flex-col gap-4">
        {progress}
        <div className="index-card flex flex-col gap-2 px-6 pt-3 pb-6">
          <p className="font-script text-[34px] leading-[46px] font-bold">{again ? `${got} of ${items.length} known` : 'Deck cleared!'}</p>
          <p className="text-[17px] leading-[30px]">
            {again
              ? `${again} card${again === 1 ? '' : 's'} to go over again. Short rounds of only the missed cards work better than rereading all of them.`
              : round === 1
                ? 'You knew every card on the first go.'
                : `You cleared the deck in ${round} rounds.`}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {again > 0 && (
              <Button onClick={nextRound}>
                <Undo2 /> Go over the {again} missed
              </Button>
            )}
            <Button variant="outline" onClick={restart}>
              <RotateCcw /> Start again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const item = items[current];
  return (
    <div className="flex max-w-[640px] flex-col gap-4">
      {progress}
      <p className="text-muted-foreground text-xs font-semibold tabular-nums">
        {round > 1 ? `Round ${round} · ` : ''}
        {queue.length} left · {got} known
      </p>
      <FlipCard key={`${round}-${current}`} item={item} number={current + 1} flipped={flipped} onFlip={() => setFlipped((f) => !f)} large />
      <div className={cn('grid grid-cols-2 gap-2 transition-opacity', !flipped && 'pointer-events-none opacity-40')} aria-hidden={!flipped}>
        <Button
          variant="outline"
          size="lg"
          className="border-bad text-bad hover:bg-bad-soft"
          onClick={() => mark('again')}
          tabIndex={flipped ? 0 : -1}
        >
          <Undo2 /> Again
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-good text-good hover:bg-good-soft"
          onClick={() => mark('got')}
          tabIndex={flipped ? 0 : -1}
        >
          <Check /> Got it
        </Button>
      </div>
      <p className="text-muted-foreground hidden text-xs sm:block">Keys: Space flips the card, 1 is Again, 2 is Got it.</p>
    </div>
  );
}

function Grid({ items }: { items: QAItem[] }) {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,300px),1fr))] gap-4">
      {items.map((item, i) => (
        <FlipCard key={i} item={item} number={i + 1} flipped={!!open[i]} onFlip={() => setOpen((o) => ({ ...o, [i]: !o[i] }))} />
      ))}
    </div>
  );
}

function FlipCard({ item, number, flipped, onFlip, large }: { item: QAItem; number: number; flipped: boolean; onFlip: () => void; large?: boolean }) {
  const tag = item.tag && (
    <span
      className={cn(
        'font-sans rounded-sm px-1.5 py-0.5 text-[11px] font-bold tracking-wide uppercase',
        item.tag === 'Trap' ? 'bg-bad-soft text-bad' : 'bg-[var(--hl-yellow)]',
      )}
    >
      {item.tag}
    </span>
  );
  return (
    <button
      type="button"
      onClick={onFlip}
      aria-pressed={flipped}
      aria-label={flipped ? `Card ${number}, answer showing. Flip back.` : `Card ${number}. Flip to see the answer.`}
      className={cn(
        'flip group w-full text-left outline-none focus-visible:[&_.index-card]:ring-[3px] focus-visible:[&_.index-card]:ring-ring/50',
        flipped && 'is-flipped',
      )}
    >
      <div className="flip-inner">
        <div className={cn('flip-face index-card flex flex-col px-5 pb-5', large ? 'min-h-[280px]' : 'min-h-[190px]')} aria-hidden={flipped}>
          <div className="flex h-[46px] items-center gap-2">
            <span className="ink-red font-script text-[22px] font-bold">Q{number}</span>
            {tag}
            <span className="ink-soft ml-auto text-[13px] opacity-0 transition-opacity group-hover:opacity-100">tap to flip ↻</span>
          </div>
          <p className={cn('flex flex-1 items-center pt-2 font-bold', large ? 'text-[24px] leading-[34px]' : 'text-[19px] leading-[30px]')}>
            <span>
              <RichText text={item.q} />
            </span>
          </p>
        </div>
        <div className={cn('flip-face flip-back index-card flex flex-col px-5 pb-5')} aria-hidden={!flipped}>
          <div className="flex h-[46px] items-center gap-2">
            <span className="ink-green font-script text-[22px] font-bold">A{number}</span>
            {tag}
          </div>
          <ul className={cn('m-0 flex list-none flex-col p-0 pt-[2px]', large ? 'text-[19px] leading-[30px]' : 'text-[16.5px] leading-[30px]')}>
            {([] as string[]).concat(item.a).map((p, k) => (
              <li key={k} className="flex gap-2">
                <span className="ink-red flex-none" aria-hidden="true">
                  ✓
                </span>
                <span>
                  <RichText text={p} />
                </span>
              </li>
            ))}
          </ul>
          {item.code && <CodeBlock code={item.code} />}
        </div>
      </div>
    </button>
  );
}
