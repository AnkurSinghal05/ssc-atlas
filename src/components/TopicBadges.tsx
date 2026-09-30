import { Clock, Star } from 'lucide-react';
import type { Topic } from '@/content/types';
import { formatMinutes, reviseMinutes, topicTiers, weightageLabel } from '@/content/helpers';
import { useTier } from '@/lib/tier';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const PRIORITY_STYLE = {
  high: 'text-bad border-bad',
  medium: 'text-accent-ink border-accent-ink',
  low: 'text-muted-foreground',
} as const;

/** Priority, weightage, tiers and learn / revise times for a topic header or preview. */
export function TopicBadges({ topic, showLevel = true }: { topic: Topic; showLevel?: boolean }) {
  const { tier } = useTier();
  const weight = weightageLabel(topic, tier);
  const tiers = topicTiers(topic);
  return (
    <>
      {topic.priority && (
        <Badge variant="outline" className={cn('bg-transparent capitalize', PRIORITY_STYLE[topic.priority])}>
          {topic.priority === 'high' && <Star aria-hidden="true" />}
          {topic.priority} priority
        </Badge>
      )}
      {weight && (
        <Badge variant="outline" className="text-muted-foreground bg-transparent" title="Average questions per exam shift in recent papers (approximate)">
          {weight}
        </Badge>
      )}
      <Badge variant="outline" className="text-muted-foreground bg-transparent">
        {tiers.length === 2 ? 'Tier 1 and 2' : tiers[0] === 'T1' ? 'Tier 1 only' : 'Tier 2 only'}
      </Badge>
      {showLevel && (
        <Badge variant="outline" className="text-muted-foreground bg-transparent capitalize">
          {topic.level}
        </Badge>
      )}
      <Badge variant="outline" className="text-muted-foreground gap-1 bg-transparent" title="Rough time to learn this topic from scratch">
        <Clock aria-hidden="true" />~{formatMinutes(topic.masteryMinutes)} to learn
      </Badge>
      <Badge variant="outline" className="text-muted-foreground gap-1 bg-transparent" title="Rough time to revise it before the exam">
        <Clock aria-hidden="true" />~{formatMinutes(reviseMinutes(topic))} to revise
      </Badge>
    </>
  );
}
