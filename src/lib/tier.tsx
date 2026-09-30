import { createContext, useContext, useState, type ReactNode } from 'react';
import type { SubjectMeta, Tier, Topic } from '@/content/types';
import { topicTiers } from '@/content/helpers';
import { readStorage, writeStorage } from './storage';

/** Which CGL tier the learner is preparing for. "all" shows every topic. */
export type TierFilter = Tier | 'all';

const KEY = 'ssc-atlas:tier';
const Ctx = createContext<{ tier: TierFilter; setTier: (t: TierFilter) => void } | null>(null);

export function TierProvider({ children }: { children: ReactNode }) {
  const [tier, setTierState] = useState<TierFilter>(() => {
    const saved = readStorage(KEY);
    return saved === 'T1' || saved === 'T2' ? saved : 'all';
  });
  const setTier = (t: TierFilter) => {
    setTierState(t);
    writeStorage(KEY, t);
  };
  return <Ctx.Provider value={{ tier, setTier }}>{children}</Ctx.Provider>;
}

export function useTier() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useTier must be used inside TierProvider');
  return ctx;
}

export const inTier = (t: Topic, tier: TierFilter) => tier === 'all' || topicTiers(t).includes(tier);
export const subjectInTier = (s: SubjectMeta, tier: TierFilter) => tier === 'all' || (s.tiers ?? ['T1', 'T2']).includes(tier);

export const TIER_LABEL: Record<TierFilter, string> = { all: 'All', T1: 'Tier 1', T2: 'Tier 2' };
