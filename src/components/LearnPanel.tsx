import { useState, type CSSProperties } from 'react';
import { Maximize2 } from 'lucide-react';
import type { KeyPoint, Topic } from '@/content/types';
import { VisualView } from '@/visuals/registry';
import { RichText } from '@/lib/RichText';
import { cn } from '@/lib/utils';
import { useExpandOrigin } from '@/lib/useExpandOrigin';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { CodeBlock } from './CodeBlock';
import { PopupNav } from './PopupNav';
import { ComparisonView } from './ComparisonView';
import { PatternsView } from './PatternsView';

export function LearnPanel({ topic }: { topic: Topic }) {
  const points = topic.keyPoints ?? [];
  const [open, setOpen] = useState(false);
  const [openIdx, setOpenIdx] = useState(0);
  const origin = useExpandOrigin();
  const kp = points[openIdx];

  return (
    <div className="flex flex-col gap-5">
      {!!topic.patterns?.length && <PatternsView patterns={topic.patterns} />}
      {!!points.length && (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,230px),1fr))] gap-x-5 gap-y-8 pt-3">
          {points.map((kp, i) => (
            <button
              key={kp.title}
              type="button"
              style={{ '--tilt': `${TILTS[i % TILTS.length]}deg`, '--tape-tilt': `${-TILTS[(i + 1) % TILTS.length] * 2}deg` } as CSSProperties}
              onClick={(e) => {
                origin.from(e.currentTarget);
                setOpenIdx(i);
                setOpen(true);
              }}
              className={cn(
                'sticky-note group focus-visible:ring-ring/50 relative flex min-w-0 flex-col gap-1.5 text-left outline-none focus-visible:ring-[3px]',
                NOTES[i % NOTES.length],
              )}
            >
              <Maximize2
                className="absolute top-3 right-3 size-3.5 opacity-0 transition-opacity group-hover:opacity-60 group-focus-visible:opacity-60"
                aria-hidden="true"
              />
              <h3 className="font-script pr-5 text-[24px] leading-tight font-bold">
                <RichText text={kp.title} />
              </h3>
              <p className="ink-soft line-clamp-4 text-[15px]">
                <RichText text={kp.text} />
              </p>
              {kp.formula && <Formula text={kp.formula} tilt={i % 2 ? 0.6 : -0.6} />}
              {kp.code && (
                <div className="pointer-events-none max-h-32 overflow-hidden [mask-image:linear-gradient(black_65%,transparent)]">
                  <CodeBlock code={kp.code} />
                </div>
              )}
            </button>
          ))}
        </div>
      )}
      {topic.comparisons?.map((c, i) => (
        <ComparisonView key={i} comparison={c} />
      ))}
      {topic.visuals?.map((v, i) => (
        <VisualView key={i} visual={v} />
      ))}

      <Dialog open={open} onOpenChange={setOpen}>
        {kp && (
          <DialogContent
            style={{ ...origin.style, '--tilt': '0deg' } as CSSProperties}
            className={cn('sticky-note border-0', NOTES[openIdx % NOTES.length])}
          >
            <KeyPointBody kp={kp} />
            <PopupNav index={openIdx} count={points.length} onGo={setOpenIdx} label="Key idea" />
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}

function KeyPointBody({ kp }: { kp: KeyPoint }) {
  return (
    <>
      <p className="ink-red font-hand text-sm font-bold">Key idea</p>
      <DialogTitle className="font-script -mt-2 pr-8 text-3xl leading-tight font-bold md:text-4xl">
        <RichText text={kp.title} />
      </DialogTitle>
      <DialogDescription asChild>
        <p className="text-[17px] leading-relaxed">
          <RichText text={kp.text} />
        </p>
      </DialogDescription>
      {kp.formula && <Formula text={kp.formula} large />}
      {kp.example && (
        <p className="border-l-2 border-dashed border-current/30 pl-3 text-[16px]">
          <span className="ink-red mr-1.5 font-bold">e.g.</span>
          <RichText text={kp.example} />
        </p>
      )}
      {kp.code && <CodeBlock code={kp.code} numbered />}
    </>
  );
}

const NOTES = ['', 'note-pink', 'note-blue', 'note-green'];
const TILTS = [-1.2, 0.9, -0.5, 1.3, -0.9, 0.6];

/** A formula boxed by hand in green ink. */
function Formula({ text, large, tilt = -0.6 }: { text: string; large?: boolean; tilt?: number }) {
  return (
    <p className={cn('hand-box ink-green w-fit max-w-full font-bold', large ? 'text-xl' : 'text-[16px]')} style={{ rotate: `${tilt}deg` }}>
      <RichText text={text} />
    </p>
  );
}
