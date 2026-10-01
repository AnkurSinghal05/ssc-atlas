import type { CSSProperties } from 'react';
import { ArrowRight, Timer } from 'lucide-react';
import type { Topic } from '@/content/types';
import { useAllSubjects } from '@/content/registry';
import { isReady } from '@/content/helpers';
import { recapHref, topicHref } from '@/lib/useHashRoute';
import { RichText } from '@/lib/RichText';
import { inTier, subjectInTier, TIER_LABEL, useTier, type TierFilter } from '@/lib/tier';
import { NotesHeader } from './NotesHeader';

const NOTES = ['', 'note-pink', 'note-blue', 'note-green'];
const TILTS = [-1.4, 1.1, -0.6, 1.6, -1, 0.7];

/** Questions per shift for the tier being viewed (Tier 1 when showing both). */
const perShift = (t: Topic, tier: TierFilter) => (tier === 'T2' ? t.weightage?.tier2 : (t.weightage?.tier1 ?? t.weightage?.tier2)) ?? 0;

/** Only the high-priority topics and their most asked patterns, as sticky notes: what to study when time is short. */
export function HighYieldNotes() {
  const subjects = useAllSubjects();
  const { tier } = useTier();

  const boards = (subjects ?? [])
    .filter((s) => subjectInTier(s, tier))
    .map((s) => {
      const topics = s.categories
        .flatMap((c) => c.topics)
        .filter((t) => t.priority === 'high' && inTier(t, tier))
        .sort((a, b) => perShift(b, tier) - perShift(a, tier));
      return { subject: s, topics, questions: topics.reduce((n, t) => n + perShift(t, tier), 0) };
    })
    .filter((b) => b.topics.length);
  const total = boards.reduce((n, b) => n + b.questions, 0);
  const topicCount = boards.reduce((n, b) => n + b.topics.length, 0);

  return (
    <div className="flex flex-col gap-8">
      <NotesHeader kicker="Handwritten notes" title="High-yield notes">
        Short on time? Study only these. Each note is a high-priority topic with its{' '}
        <span className="hl font-semibold text-foreground">most asked</span> question types, biggest first.
      </NotesHeader>

      {!subjects ? (
        <p className="text-muted-foreground">Opening your notebook…</p>
      ) : (
        <>
          <div className="notebook max-w-[720px]">
            <p className="font-script text-[28px] leading-[32px] font-bold">Start here ☞</p>
            <p>
              These <span className="hand-circle">{topicCount} topics</span> carry roughly{' '}
              <strong className="ink-red">{Math.round(total)} questions</strong> per shift in {tier === 'all' ? 'Tier 1' : TIER_LABEL[tier]}. Learn
              them first, then fill the gaps.
            </p>
            <p className="ink-soft text-[15px]">(Question counts are estimates from recent papers.)</p>
          </div>

          {boards.map(({ subject, topics, questions }) => (
            <section key={subject.id} className="flex flex-col gap-5">
              <h2 className="font-script flex flex-wrap items-baseline gap-x-3 text-[40px] font-bold">
                <span className="squiggle">{subject.name}</span>
                <span className="font-hand text-muted-foreground text-base font-normal">
                  {topics.length} topics · ~{Math.round(questions)} Qs per shift
                </span>
              </h2>
              <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(min(100%,260px),1fr))] gap-x-5 gap-y-8 p-0 pt-2">
                {topics.map((t, i) => {
                  const most = (t.patterns ?? []).filter((p) => p.frequency === 'most');
                  const often = (t.patterns ?? []).filter((p) => p.frequency === 'often');
                  const n = perShift(t, tier);
                  return (
                    <li
                      key={t.id}
                      className={`sticky-note ${NOTES[i % NOTES.length]} flex flex-col gap-2`}
                      style={
                        { '--tilt': `${TILTS[i % TILTS.length]}deg`, '--tape-tilt': `${-TILTS[(i + 2) % TILTS.length] * 2}deg` } as CSSProperties
                      }
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-script text-[27px] leading-7 font-bold">{t.title}</h3>
                        {n > 0 && <span className="hand-circle flex-none text-sm whitespace-nowrap">~{n} Qs</span>}
                      </div>
                      {most.length > 0 ? (
                        <ul className="m-0 flex list-none flex-col gap-1 p-0">
                          {most.map((p) => (
                            <li key={p.name}>
                              <span className="ink-red mr-1" aria-label="Most asked">
                                ★
                              </span>
                              <span className="hl font-bold">
                                <RichText text={p.name} />
                              </span>
                              {p.example && (
                                <span className="ink-soft block pl-5 text-[14.5px]">
                                  <RichText text={p.example} />
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        t.summary && (
                          <p className="ink-soft text-[15px]">
                            <RichText text={t.summary} />
                          </p>
                        )
                      )}
                      {often.length > 0 && <p className="ink-soft text-[14.5px]">Also: <RichText text={often.map((p) => p.name).join(' · ')} />
                        </p>}
                      <div className="no-print mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-1 text-[15px] font-bold">
                        {isReady(t) ? (
                          <>
                            <a href={recapHref(subject.id, t.id)} className="ink-red inline-flex items-center gap-1 hover:underline">
                              <Timer className="size-4" aria-hidden="true" /> 5-min recap
                            </a>
                            <a href={topicHref(subject.id, t.id)} className="inline-flex items-center gap-1 hover:underline">
                              Open topic <ArrowRight className="size-4" aria-hidden="true" />
                            </a>
                          </>
                        ) : (
                          <span className="ink-soft font-normal">Notes coming soon</span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </>
      )}
    </div>
  );
}
