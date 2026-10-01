import { useState } from 'react';
import { Printer } from 'lucide-react';
import { useAllSubjects } from '@/content/registry';
import { topicHref } from '@/lib/useHashRoute';
import { RichText } from '@/lib/RichText';
import { inTier, useTier } from '@/lib/tier';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { NotesHeader } from './NotesHeader';

const HIGHLIGHTS = ['hl', 'hl-pink', 'hl-green', 'hl-blue'];

/** Every formula from every topic's key ideas, as one handwritten, printable sheet. */
export function FormulaSheet() {
  const subjects = useAllSubjects();
  const { tier } = useTier();
  const [only, setOnly] = useState<string>('all');

  const sheets = (subjects ?? [])
    .map((s) => ({
      subject: s,
      areas: s.categories
        .map((c) => ({
          area: c,
          topics: c.topics
            .filter((t) => inTier(t, tier))
            .map((t) => ({ topic: t, formulas: (t.keyPoints ?? []).filter((k) => k.formula) }))
            .filter((x) => x.formulas.length),
        }))
        .filter((a) => a.topics.length),
    }))
    .filter((x) => x.areas.length);
  const shown = sheets.filter((x) => only === 'all' || x.subject.id === only);
  const count = shown.reduce((n, x) => n + x.areas.reduce((m, a) => m + a.topics.reduce((k, t) => k + t.formulas.length, 0), 0), 0);

  return (
    <div className="flex flex-col gap-7">
      <NotesHeader
        kicker="Handwritten notes"
        title="Formula sheet"
        actions={
          <Button variant="outline" onClick={() => window.print()}>
            <Printer /> Print
          </Button>
        }
      >
        Every formula from the key ideas, on one page. Read it the night before, or print it and stick it by your desk. Tap a topic name to open it.
      </NotesHeader>

      {sheets.length > 1 && (
        <div className="no-print flex flex-wrap gap-1.5" role="group" aria-label="Subject">
          {[{ id: 'all', name: 'All subjects' }, ...sheets.map((x) => x.subject)].map((s) => (
            <Button key={s.id} size="sm" variant={only === s.id ? 'secondary' : 'ghost'} aria-pressed={only === s.id} onClick={() => setOnly(s.id)}>
              {s.name}
            </Button>
          ))}
        </div>
      )}

      {!subjects ? (
        <p className="text-muted-foreground">Opening your notebook…</p>
      ) : (
        shown.map(({ subject, areas }) => (
          <article key={subject.id} className="notebook">
            <h2 className="mb-2 text-[40px]">
              {subject.name}{' '}
              <span className="ink-soft font-hand text-base font-normal">({count && only !== 'all' ? `${count} formulas` : subject.glyph})</span>
            </h2>
            <div className="gap-10 md:columns-2">
              {areas.map(({ area, topics }, ai) => (
                <section key={area.id} className="mb-4 break-inside-avoid-column">
                  <h3 className="mb-1 text-[28px]">
                    <span className={HIGHLIGHTS[ai % HIGHLIGHTS.length]}>
                      <RichText text={area.name} />
                    </span>
                  </h3>
                  {topics.map(({ topic, formulas }) => (
                    <div key={topic.id} className="mb-3 break-inside-avoid">
                      <a href={topicHref(subject.id, topic.id)} className="ink-red font-bold underline decoration-dotted">
                        {topic.title}
                      </a>
                      <ul className="m-0 list-none p-0">
                        {formulas.map((k) => (
                          <li key={k.title} className="flex gap-2">
                            <span aria-hidden="true" className="ink-soft">
                              ✎
                            </span>
                            <span>
                              <span className="ink-soft">
                                <RichText text={k.title} />:
                              </span>{' '}
                              <strong className={cn('font-bold whitespace-normal')}>
                                <RichText text={k.formula!} />
                              </strong>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </section>
              ))}
            </div>
          </article>
        ))
      )}
    </div>
  );
}
