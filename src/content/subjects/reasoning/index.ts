import { planned as p } from '@/content/helpers';
import type { Subject } from '@/content/types';
import meta from './meta';
import analogy from './topics/analogy';
import series from './topics/series';
import codingDecoding from './topics/coding-decoding';
import syllogism from './topics/syllogism';
import mathOperations from './topics/math-operations';

const subject: Subject = {
  ...meta,
  categories: [
    {
      id: 'verbal',
      name: 'Verbal relations',
      blurb: 'Find the rule linking the given items, then apply it once more.',
      topics: [
        analogy,
        p('classification', 'Classification (odd one out)', 'beginner', 45, 15, 'high', { weightage: { tier1: 2, tier2: 2 } }),
        series,
        codingDecoding,
        p('blood-relations', 'Blood relations', 'beginner', 60, 20, 'medium', { weightage: { tier1: 1, tier2: 1 } }),
        p('direction', 'Direction and distance', 'beginner', 45, 15, 'medium', { weightage: { tier1: 1, tier2: 1 } }),
        p('order-ranking', 'Order and ranking', 'beginner', 45, 15, 'medium'),
        p('seating-puzzles', 'Seating arrangement and puzzles', 'intermediate', 120, 40, 'medium', { weightage: { tier1: 1, tier2: 2 } }),
      ],
    },
    {
      id: 'logic',
      name: 'Logic',
      blurb: 'Draw the Venn diagram before you read the conclusions.',
      topics: [
        syllogism,
        p('statement-conclusion', 'Statement and conclusion', 'beginner', 45, 15, 'low'),
        p('venn-diagrams', 'Venn diagrams', 'beginner', 40, 15, 'medium', { weightage: { tier1: 1, tier2: 1 } }),
      ],
    },
    {
      id: 'math-based',
      name: 'Math-based',
      blurb: 'Arithmetic in disguise: missing numbers, sign swaps, dates and clock hands.',
      topics: [
        p('missing-number', 'Missing number', 'intermediate', 60, 20, 'high', { weightage: { tier1: 1.5, tier2: 2 } }),
        mathOperations,
        p('calendar', 'Calendar', 'intermediate', 45, 15, 'low'),
        p('clocks', 'Clocks', 'intermediate', 45, 15, 'low'),
        p('dictionary-order', 'Dictionary order', 'beginner', 30, 15, 'medium', { weightage: { tier1: 1, tier2: 1 } }),
      ],
    },
    {
      id: 'non-verbal',
      name: 'Non-verbal',
      blurb: 'The figure questions that come every shift. Quick marks once you know the rules.',
      topics: [
        p('mirror-water', 'Mirror and water images', 'beginner', 30, 15, 'high', { weightage: { tier1: 1, tier2: 1 } }),
        p('paper-folding', 'Paper folding and cutting', 'beginner', 30, 15, 'high', { weightage: { tier1: 1, tier2: 1 } }),
        p('embedded-figures', 'Embedded figures', 'beginner', 30, 15, 'high', { weightage: { tier1: 1, tier2: 1 } }),
        p('counting-figures', 'Counting figures', 'intermediate', 45, 15, 'high', { weightage: { tier1: 1, tier2: 1 } }),
        p('figure-series', 'Figure series and completion', 'beginner', 45, 15, 'medium', { weightage: { tier1: 1, tier2: 1 } }),
        p('dice-cubes', 'Dice and cubes', 'intermediate', 60, 20, 'medium', { weightage: { tier1: 0.5, tier2: 1 } }),
      ],
    },
  ],
};

export default subject;
