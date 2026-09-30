import { useState } from 'react';
import { ArrowRight, Flame, Star, Timer } from 'lucide-react';
import type { Priority, Subject, Topic } from '@/content/types';
import { formatMinutes, formatTimes, isReady, totalMinutes, totalReviseMinutes, weightageLabel } from '@/content/helpers';
import { inTier, subjectInTier, TIER_LABEL, useTier } from '@/lib/tier';
import { recapHref, topicHref } from '@/lib/useHashRoute';
import { RichText } from '@/lib/RichText';
import { scoreKey, useScores } from '@/lib/scores';
import { tintStyle } from '@/lib/tint';
import { useExpandOrigin } from '@/lib/useExpandOrigin';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TopicBadges } from './TopicBadges';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { StatusDot } from './StatusDot';

function topicCounts(t: Topic) {
  const parts: string[] = [];
  if (t.qa?.length) parts.push(`${t.qa.length} flashcards`);
  if (t.shortcuts?.length) parts.push(`${t.shortcuts.length} shortcuts`);
  if (t.problems?.length) parts.push(`${t.problems.length} problems`);
  if (t.quiz?.length) parts.push(`${t.quiz.length} quiz`);
  return parts.join(' · ');
}

export function SubjectOverview({ subject }: { subject: Subject }) {
  const { scores } = useScores();
  const [preview, setPreview] = useState<{
    topic: Topic;
    area: string;
    hue: number;
  }>();
  const [previewOpen, setPreviewOpen] = useState(false);
  const origin = useExpandOrigin();
  const { tier } = useTier();
  const [priority, setPriority] = useState<Priority | 'all'>('all');
  const keep = (t: Topic) => inTier(t, tier) && (priority === 'all' || t.priority === priority);
  const categories = subject.categories.map((c) => ({ ...c, topics: c.topics.filter(keep) })).filter((c) => c.topics.length);
  const topics = categories.flatMap((c) => c.topics);
  // Consecutive areas with the same `section` (e.g. Basic, Advanced) share a heading.
  const sections: {
    name?: string;
    cats: { cat: (typeof categories)[number]; ci: number }[];
  }[] = [];
  categories.forEach((cat, ci) => {
    const last = sections.at(-1);
    if (last && last.name === cat.section) last.cats.push({ cat, ci });
    else sections.push({ name: cat.section, cats: [{ cat, ci }] });
  });
  const ready = topics.filter(isReady);
  const questions = ready.reduce((n, t) => n + (t.qa?.length ?? 0) + (t.problems?.length ?? 0) + (t.quiz?.length ?? 0), 0);
  const stats: [number | string, string][] = [
    [categories.length, 'areas'],
    [topics.length, 'topics'],
    [ready.length, 'ready to study'],
    [questions, 'questions'],
    [formatMinutes(totalMinutes(topics)), 'to learn'],
    [formatMinutes(totalReviseMinutes(topics)), 'to revise'],
  ];

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-wrap items-end justify-between gap-6">
        <div className="flex max-w-[560px] flex-col gap-2.5">
          <p className="text-accent-ink text-xs font-bold tracking-[0.1em] uppercase">Subject</p>
          <h1 className="text-[40px] leading-none font-extrabold tracking-[-0.03em] md:text-[64px]">{subject.name}</h1>
          <p className="text-muted-foreground text-[17px]">
            <RichText text={subject.tagline} />
          </p>
        </div>
        <dl className="m-0 grid w-full grid-cols-2 gap-2 sm:w-auto sm:grid-cols-3 lg:grid-cols-6">
          {stats.map(([n, label]) => (
            <Card key={label} className="min-w-[92px] flex-col-reverse rounded-lg px-3.5 py-2.5">
              <dt className="text-muted-foreground text-xs">{label}</dt>
              <dd className="font-display m-0 text-2xl leading-tight font-bold tabular-nums">{n}</dd>
            </Card>
          ))}
        </dl>
      </header>

      <div className="text-muted-foreground flex flex-wrap gap-x-5 gap-y-2 text-[13px]">
        <span className="inline-flex items-center gap-1.5">
          <StatusDot state="ready" /> Ready
        </span>
        <span className="inline-flex items-center gap-1.5">
          <StatusDot state="stub" /> Coming in the content pass
        </span>
        <span className="inline-flex items-center gap-1.5">
          <StatusDot state="done" /> Practised this visit
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Star className="text-bad size-3.5" aria-hidden="true" /> High priority
        </span>
        <span>Times read learn · revise: learning a topic from scratch, then revising it before the exam.</span>
      </div>

      <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter by priority">
        <span className="text-muted-foreground mr-1 text-[13px] font-semibold">Priority</span>
        {(['all', 'high', 'medium', 'low'] as const).map((p) => (
          <Button
            key={p}
            size="sm"
            variant={priority === p ? 'secondary' : 'ghost'}
            aria-pressed={priority === p}
            className="capitalize"
            onClick={() => setPriority(p)}
          >
            {p}
          </Button>
        ))}
      </div>

      {!subjectInTier(subject, tier) && (
        <p className="text-muted-foreground rounded-lg border border-dashed p-4">
          {subject.name} is not asked in {TIER_LABEL[tier]}. Switch the tier in the sidebar to see its topics.
        </p>
      )}
      {subjectInTier(subject, tier) && !topics.length && <p className="text-muted-foreground">No topics match these filters.</p>}

      {sections.map((sec) => (
        <section key={sec.name ?? 'areas'} className="flex flex-col gap-3">
          {sec.name && (
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b pb-1.5">
              <h2 className="text-2xl font-extrabold tracking-[-0.02em]">{sec.name}</h2>
              <span className="text-muted-foreground text-sm">{sec.cats.map((c) => c.cat.name).join(' · ')}</span>
              <span className="text-muted-foreground ml-auto text-xs font-semibold tabular-nums" title="Time to learn · time to revise this section">
                {formatMinutes(totalMinutes(sec.cats.flatMap((c) => c.cat.topics)))} ·{' '}
                {formatMinutes(totalReviseMinutes(sec.cats.flatMap((c) => c.cat.topics)))}
              </span>
            </div>
          )}
          <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,290px),1fr))] gap-3.5">
            {sec.cats.map(({ cat, ci }) => (
              <Card
                key={cat.id}
                style={tintStyle(ci)}
                className="tint bg-tint border-tint-border border-t-tint-strong gap-1.5 border-t-4 px-3.5 pt-4 pb-3"
              >
                <div className="flex items-baseline gap-2.5 px-1.5">
                  <span className="text-tint-ink font-mono text-xs font-semibold">{String(ci + 1).padStart(2, '0')}</span>
                  <h2 className="text-[19px] font-bold">{cat.name}</h2>
                  <span
                    className="text-muted-foreground ml-auto text-xs font-semibold whitespace-nowrap tabular-nums"
                    title="Time to learn · time to revise this area"
                  >
                    {formatMinutes(totalMinutes(cat.topics))} · {formatMinutes(totalReviseMinutes(cat.topics))}
                  </span>
                </div>
                {cat.blurb && (
                  <p className="text-muted-foreground px-1.5 pb-1.5 text-[13px]">
                    <RichText text={cat.blurb} />
                  </p>
                )}
                <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
                  {cat.topics.map((t) => {
                    const sc = scores[scoreKey(subject.id, t.id)];
                    const r = isReady(t);
                    return (
                      <li key={t.id}>
                        <a
                          href={topicHref(subject.id, t.id)}
                          onClick={(e) => {
                            // Plain clicks open a preview; modified clicks still open the topic (e.g. in a new tab).
                            if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
                            e.preventDefault();
                            origin.from(e.currentTarget);
                            setPreview({ topic: t, area: cat.name, hue: ci });
                            setPreviewOpen(true);
                          }}
                          className={cn(
                            'flex items-center gap-2.5 rounded-md px-2 py-1.5 text-sm transition-[background-color,transform] duration-150 hover:translate-x-0.5',
                            r ? 'bg-tint-strong/15 hover:bg-tint-strong/25 font-semibold' : 'text-muted-foreground hover:bg-tint-hover',
                          )}
                        >
                          <StatusDot state={sc && sc.answered === sc.total ? 'done' : r ? 'ready' : 'stub'} />
                          <span className="flex min-w-0 flex-1 flex-col">
                            <span>
                              {t.title}
                              {t.priority === 'high' && <Star className="text-bad ml-1 inline size-3 -translate-y-px" aria-label="High priority" />}
                            </span>
                            <span className="text-muted-foreground text-xs font-medium tabular-nums">
                              {[sc ? `${sc.correct}/${sc.total} correct` : r ? topicCounts(t) : 'soon', weightageLabel(t, tier)]
                                .filter(Boolean)
                                .join(' · ')}
                            </span>
                          </span>
                          <span
                            className="text-muted-foreground text-right text-xs font-semibold whitespace-nowrap tabular-nums"
                            title="Time to learn · time to revise"
                          >
                            {formatTimes(t)}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </Card>
            ))}
          </div>
        </section>
      ))}

      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        {preview && (
          <DialogContent
            style={{ ...origin.style, ...tintStyle(preview.hue) }}
            className="tint bg-tint border-tint-border border-t-tint-strong max-w-[600px] border-t-4"
          >
            <TopicPreview subjectId={subject.id} area={preview.area} topic={preview.topic} />
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}

function TopicPreview({ subjectId, area, topic }: { subjectId: string; area: string; topic: Topic }) {
  const ready = isReady(topic);
  return (
    <>
      <p className="text-tint-ink text-xs font-bold tracking-[0.1em] uppercase">{area}</p>
      <DialogTitle className="font-display -mt-2 pr-8 text-2xl font-extrabold tracking-[-0.02em] md:text-3xl">{topic.title}</DialogTitle>
      <div className="flex flex-wrap gap-2">
        <TopicBadges topic={topic} />
        {ready && <Badge className="bg-tint-strong/20 text-tint-ink border-transparent">{topicCounts(topic)}</Badge>}
      </div>
      <DialogDescription asChild>
        <p className="text-muted-foreground text-[16px]">
          {topic.summary ? (
            <RichText text={topic.summary} />
          ) : ready ? (
            'Open the topic to study it.'
          ) : (
            'On the map, not written yet. It gets its key ideas, flashcards and practice questions in a later content pass.'
          )}
        </p>
      </DialogDescription>
      {!!topic.patterns?.length && (
        <div className="flex flex-col gap-2">
          <p className="text-sm font-bold">Question patterns</p>
          <ul className="flex list-none flex-wrap gap-1.5 p-0">
            {topic.patterns.map((p) => (
              <li key={p.name}>
                <Badge
                  variant="outline"
                  className={cn(
                    'bg-background/50 text-[12.5px] font-medium whitespace-normal',
                    p.frequency === 'most' && 'border-bad text-bad font-semibold',
                  )}
                  title={p.frequency === 'most' ? 'Most asked' : undefined}
                >
                  {p.frequency === 'most' && <Flame aria-label="Most asked" />}
                  {p.name}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      )}
      {!!topic.keyPoints?.length && (
        <div className="flex flex-col gap-2">
          <p className="text-sm font-bold">Key ideas</p>
          <ul className="marker:text-tint-strong flex list-disc flex-col gap-1 pl-5 text-sm">
            {topic.keyPoints.map((kp) => (
              <li key={kp.title}>
                <RichText text={kp.title} />
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-1 flex flex-wrap justify-end gap-2">
        {ready && (
          <Button asChild variant="outline">
            <a href={recapHref(subjectId, topic.id)}>
              <Timer /> 5-min recap
            </a>
          </Button>
        )}
        <Button asChild>
          <a href={topicHref(subjectId, topic.id)}>
            {ready ? 'Study this topic' : 'Open topic'} <ArrowRight />
          </a>
        </Button>
      </div>
    </>
  );
}
