import { useEffect, useRef, useState } from 'react';
import { ArrowRight, BookOpen, RotateCcw } from 'lucide-react';
import type { QuizQuestion } from '@/content/types';
import { QuizQuestionView, quizTypes } from '@/quiz/registry';
import { RichText } from '@/lib/RichText';
import { useScores } from '@/lib/scores';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CodeBlock } from './CodeBlock';

interface Props {
  quiz: QuizQuestion[];
  topicTitle: string;
  scoreId: string;
  onReviewQA?: () => void;
}

export function PracticePanel({ quiz, topicTitle, scoreId, onReviewQA }: Props) {
  const { setScore } = useScores();
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState<boolean[]>([]);
  const [attempt, setAttempt] = useState(0);
  const nextRef = useRef<HTMLButtonElement>(null);

  const answered = results.length > index;
  const done = index >= quiz.length;
  const correct = results.filter(Boolean).length;

  useEffect(() => {
    if (answered) nextRef.current?.focus({ preventScroll: true });
  }, [answered]);

  const record = (ok: boolean) => {
    const next = [...results, ok];
    setResults(next);
    setScore(scoreId, { answered: next.length, correct: next.filter(Boolean).length, total: quiz.length });
  };
  const retry = () => {
    setIndex(0);
    setResults([]);
    setAttempt((a) => a + 1);
  };

  const progress = (
    <div className="flex gap-1.5" aria-label={`Question ${Math.min(index + 1, quiz.length)} of ${quiz.length}`}>
      {quiz.map((_, k) => (
        <span
          key={k}
          className={cn(
            'h-1.5 max-w-16 flex-1 rounded-full',
            k < results.length ? (results[k] ? 'bg-good' : 'bg-bad') : k === index ? 'bg-muted-foreground' : 'bg-muted',
          )}
        />
      ))}
    </div>
  );

  if (done) {
    const pct = Math.round((correct / quiz.length) * 100);
    const verdict =
      pct === 100
        ? 'Mastered. This topic is exam-ready.'
        : pct >= 70
          ? 'Solid. Review the ones you missed and try again.'
          : 'Worth another pass. Go through the flashcards, then retry.';
    return (
      <div className="flex max-w-[760px] flex-col gap-3.5">
        {progress}
        <Card className="flex-row flex-wrap items-center gap-5 p-5">
          <div
            className="grid size-24 flex-none place-items-center rounded-full"
            style={{ background: `conic-gradient(var(--good) ${pct}%, var(--muted) 0)` }}
          >
            <span className="bg-card font-display grid size-[76px] place-items-center rounded-full text-[22px] font-extrabold tabular-nums">
              {correct}/{quiz.length}
            </span>
          </div>
          <div>
            <h3 className="mb-1 text-[22px] font-bold">
              {pct}% on {topicTitle}
            </h3>
            <p className="text-muted-foreground">{verdict}</p>
          </div>
          <div className="flex basis-full flex-wrap gap-2">
            <Button onClick={retry}>
              <RotateCcw /> Retry quiz
            </Button>
            {onReviewQA && (
              <Button variant="outline" onClick={onReviewQA}>
                <BookOpen /> Review flashcards
              </Button>
            )}
          </div>
        </Card>
      </div>
    );
  }

  const q = quiz[index];
  const ok = results[index];
  return (
    <div className="flex max-w-[760px] flex-col gap-3.5">
      {progress}
      <Card className="gap-3.5 p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <span className="text-accent-ink text-xs font-bold tracking-[0.08em] uppercase">
            {quizTypes[q.type].label}
            {q.difficulty && <span className="text-muted-foreground font-semibold"> · {q.difficulty}</span>}
            {q.pyq && <span className="text-muted-foreground font-semibold"> · {q.pyq}</span>}
          </span>
          <span className="text-muted-foreground font-mono text-xs">
            {index + 1} / {quiz.length}
          </span>
        </div>
        <QuizQuestionView key={`${attempt}-${index}`} question={q} onAnswer={record} />
        {answered && (
          <div className="flex flex-col gap-3">
            <div className="red-pen">
              <span className="mark" aria-hidden="true">
                {ok ? '✓' : '✗'}
              </span>
              <strong>{ok ? 'Correct!' : 'Not quite.'}</strong>{' '}
              <span className="pen-body">
                <RichText text={q.explain} />
              </span>
            </div>
            {q.shortcut && (
              <div className="font-hand ink-green -mt-1 pl-11 text-[16px] leading-snug">
                <strong>Shortcut:</strong> <RichText text={q.shortcut} />
              </div>
            )}
            {q.explainCode && <CodeBlock code={q.explainCode} />}
            <div>
              <Button ref={nextRef} onClick={() => setIndex((n) => n + 1)}>
                {index + 1 < quiz.length ? 'Next question' : 'See my score'} <ArrowRight />
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
