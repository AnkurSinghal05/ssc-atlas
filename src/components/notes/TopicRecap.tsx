import { useEffect, useState } from 'react';
import { ArrowLeft, Timer } from 'lucide-react';
import type { Subject, Topic } from '@/content/types';
import { weightageLabel } from '@/content/helpers';
import { topicHref } from '@/lib/useHashRoute';
import { RichText } from '@/lib/RichText';
import { shuffle } from '@/lib/shuffle';
import { useTier } from '@/lib/tier';
import { cn } from '@/lib/utils';
import { FigureSvg } from '@/visuals/Figure';
import { PracticePanel } from '../PracticePanel';

const RECAP_SECONDS = 5 * 60;
const QUICK_CHECK = 5;

/** Pick up to n questions, mixing difficulties so the check is not all easy. */
function pickQuestions(topic: Topic) {
  const quiz = shuffle(topic.quiz ?? []);
  const byLevel = ['medium', 'hard', 'easy'].map((d) => quiz.filter((q) => (q.difficulty ?? 'medium') === d));
  const picked = [...byLevel[0].slice(0, 2), ...byLevel[1].slice(0, 1), ...byLevel[2].slice(0, 2)];
  for (const q of quiz) if (picked.length < QUICK_CHECK && !picked.includes(q)) picked.push(q);
  return shuffle(picked.slice(0, QUICK_CHECK));
}

function useCountdown(seconds: number) {
  const [left, setLeft] = useState(seconds);
  useEffect(() => {
    if (left <= 0) return;
    const id = window.setTimeout(() => setLeft((s) => s - 1), 1000);
    return () => window.clearTimeout(id);
  }, [left]);
  return left;
}

/** A topic squeezed onto one handwritten page, then five questions: the "Revise in 5 minutes" view. */
export function TopicRecap({ subject, topic }: { subject: Subject; topic: Topic }) {
  const { tier } = useTier();
  const [quiz] = useState(() => pickQuestions(topic));
  const left = useCountdown(RECAP_SECONDS);
  const weight = weightageLabel(topic, tier);
  const patterns = topic.patterns ?? [];
  const diagrams = (topic.visuals ?? []).flatMap((v) => (v.type === 'diagram' ? [v] : []));
  const traps = (topic.qa ?? []).filter((q) => q.tag === 'Trap').slice(0, 3);
  const reveals = (topic.comparisons ?? []).filter((c) => c.reveal);
  const mm = Math.floor(left / 60);
  const ss = String(left % 60).padStart(2, '0');

  return (
    <div className="flex flex-col gap-6">
      <div className="no-print flex flex-wrap items-center justify-between gap-3">
        <a
          href={topicHref(subject.id, topic.id)}
          className="text-muted-foreground inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
        >
          <ArrowLeft className="size-4" aria-hidden="true" /> Back to {topic.title}
        </a>
        <span
          className={cn(
            'font-hand inline-flex items-center gap-1.5 rounded-full border-2 px-3 py-0.5 text-lg font-bold tabular-nums',
            left === 0 ? 'border-bad text-bad' : 'border-foreground/60',
          )}
          role="timer"
          aria-label={left === 0 ? 'Time is up' : `${mm} minutes ${ss} seconds left`}
        >
          <Timer className="size-4" aria-hidden="true" />
          {left === 0 ? "Time's up: do the quick check" : `${mm}:${ss}`}
        </span>
      </div>

      <article className="notebook">
        <p className="ink-soft text-[15px]">{subject.name} · 5-minute recap</p>
        <h1 className="flex flex-wrap items-baseline gap-x-4 text-[46px] md:text-[56px]">
          <span className="squiggle">{topic.title}</span>
          {weight && <span className="hand-circle font-hand text-base font-bold">{weight}</span>}
        </h1>

        {patterns.length > 0 && (
          <section className="mt-4">
            <h2 className="text-[30px]">What they ask</h2>
            <ul className="m-0 list-none p-0">
              {patterns.map((p) => (
                <li key={p.name} className={cn(p.frequency === 'rare' && 'ink-soft')}>
                  {p.frequency === 'most' ? (
                    <>
                      <span className="ink-red font-bold">★ </span>
                      <span className="hl font-bold">
                        <RichText text={p.name} />
                      </span>
                      <span className="ink-red text-[14px] font-bold"> most asked!</span>
                    </>
                  ) : (
                    <>
                      <span aria-hidden="true">– </span>
                      <RichText text={p.name} />
                    </>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {!!topic.keyPoints?.length && (
          <section className="mt-5">
            <h2 className="text-[30px]">Remember</h2>
            <ol className="m-0 flex list-none flex-col gap-2 p-0">
              {topic.keyPoints.map((k, i) => (
                <li key={k.title} className="flex gap-3">
                  <span className="ink-red font-script w-6 flex-none text-right text-[24px] font-bold">{i + 1}.</span>
                  <div className="min-w-0">
                    <strong className="font-bold">
                      <RichText text={k.title} />
                    </strong>{' '}
                    {!k.formula && (
                      <span className="ink-soft">
                        <RichText text={k.text} />
                      </span>
                    )}
                    {k.formula && (
                      <div className="my-1">
                        <span className="hand-box ink-green font-bold" style={{ transform: `rotate(${i % 2 ? 0.6 : -0.6}deg)` }}>
                          <RichText text={k.formula} />
                        </span>
                      </div>
                    )}
                    {k.example && (
                      <div className="ink-soft text-[15.5px]">
                        e.g. <RichText text={k.example} />
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        {diagrams.length > 0 && (
          <section className="mt-5">
            <h2 className="text-[30px]">Picture it</h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,240px),1fr))] gap-4">
              {diagrams.map((d) => (
                <FigureSvg key={d.title} figure={{ ...d.figure, caption: d.title }} />
              ))}
            </div>
          </section>
        )}

        {(traps.length > 0 || reveals.length > 0) && (
          <section className="mt-5">
            <h2 className="text-[30px]">Don't get caught</h2>
            <ul className="m-0 list-none p-0">
              {reveals.map((c) => (
                <li key={c.title ?? c.items.join()}>
                  <span className="ink-red font-bold">⚡ {c.title ?? c.items.join(' vs ')}: </span>
                  <RichText text={c.reveal!} />
                </li>
              ))}
              {traps.map((q) => (
                <li key={q.q}>
                  <span className="ink-red font-bold">⚠ </span>
                  <RichText text={q.q} /> <span className="ink-soft">→ {<RichText text={([] as string[]).concat(q.a)[0]} />}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {!!topic.shortcuts?.length && (
          <section className="mt-5">
            <h2 className="text-[30px]">Fast ways</h2>
            <ul className="m-0 list-none p-0">
              {topic.shortcuts.map((s) => {
                const fast = s.ladder[s.ladder.length - 1];
                return (
                  <li key={s.pattern}>
                    <span className="hl-green font-bold">
                      <RichText text={s.pattern} />
                    </span>{' '}
                    <span aria-hidden="true">☞ </span>
                    <RichText text={fast.steps.join(' ')} /> <span className="ink-soft text-[14px]">(~{fast.seconds}s)</span>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
      </article>

      {quiz.length > 0 && (
        <section className="flex flex-col gap-3">
          <h2 className="font-script text-[36px] font-bold">Quick check: {quiz.length} questions</h2>
          <PracticePanel quiz={quiz} topicTitle={topic.title} scoreId={`${subject.id}.${topic.id}.recap`} />
        </section>
      )}
    </div>
  );
}
