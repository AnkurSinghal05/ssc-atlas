import type { Level, Priority, Tier, Topic } from './types';

/** Strip the leading newline and trailing whitespace of a template-literal code sample. */
export const code = (s: string) => s.replace(/^\n/, '').replace(/\s+$/, '');

/** A topic that is on the map but not written yet. */
export const stub = (id: string, title: string, level: Level, masteryMinutes: number, extra: Partial<Topic> = {}): Topic => ({
  id,
  title,
  level,
  masteryMinutes,
  ...extra,
});

/** A planned topic with its CGL metadata but no content yet. Learn / revise are in minutes. */
export const planned = (
  id: string,
  title: string,
  level: Level,
  learn: number,
  revise: number,
  priority: Priority,
  extra: Partial<Topic> = {},
): Topic => ({ id, title, level, masteryMinutes: learn, reviseMinutes: revise, priority, ...extra });

export const topicTiers = (t: Topic): Tier[] => t.tiers ?? ['T1', 'T2'];

/** "~2 Qs per shift" style label for the tier being viewed, or undefined when unknown. */
export const weightageLabel = (t: Topic, tier: Tier | 'all') => {
  const w = t.weightage;
  if (!w) return undefined;
  const n = tier === 'T2' ? w.tier2 : tier === 'T1' ? w.tier1 : (w.tier1 ?? w.tier2);
  if (n === undefined) return undefined;
  return `~${n} Q${n === 1 ? '' : 's'} per shift${tier === 'all' && w.tier1 === undefined ? ' (Tier 2)' : ''}`;
};

export const isReady = (t: Topic) => Boolean(t.qa?.length || t.quiz?.length || t.problems?.length || t.shortcuts?.length);

/** Total mastery time of a list of topics, in minutes. */
export const totalMinutes = (topics: Topic[]) => topics.reduce((n, t) => n + t.masteryMinutes, 0);

/** Revision time: the topic's own value, or half the learn time rounded to 5 minutes (at least 15). */
export const reviseMinutes = (t: Topic) => t.reviseMinutes ?? Math.max(15, Math.round(t.masteryMinutes / 10) * 5);

export const totalReviseMinutes = (topics: Topic[]) => topics.reduce((n, t) => n + reviseMinutes(t), 0);

/** "45m learn · 25m revise" in short form: "45m · 25m". */
export const formatTimes = (t: Topic) => `${formatMinutes(t.masteryMinutes)} · ${formatMinutes(reviseMinutes(t))}`;

/** 45 → "45m", 90 → "1.5h", 480 → "8h". */
export const formatMinutes = (min: number) => {
  if (min < 60) return `${min}m`;
  const h = Math.round((min / 60) * 2) / 2;
  return `${h}h`;
};
