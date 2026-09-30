import { planned as p } from '@/content/helpers';
import type { Subject } from '@/content/types';
import meta from './meta';
import percentage from './topics/percentage';
import profitLoss from './topics/profit-loss';
import timeWork from './topics/time-work';
import speedDistance from './topics/speed-distance';
import algebraIdentities from './topics/algebra-identities';

const T2 = { tiers: ['T2' as const] };

const subject: Subject = {
  ...meta,
  categories: [
    {
      id: 'arithmetic-basics',
      name: 'Arithmetic basics',
      blurb: 'Numbers, factors and fast simplification. The engine behind every other chapter.',
      topics: [
        p('number-system', 'Number system', 'intermediate', 180, 60, 'high', { weightage: { tier1: 1, tier2: 2 } }),
        p('hcf-lcm', 'HCF and LCM', 'beginner', 60, 20, 'medium', { weightage: { tier1: 0.5, tier2: 1 } }),
        p('simplification', 'Simplification, surds and indices', 'beginner', 90, 30, 'high', { weightage: { tier1: 1, tier2: 2 } }),
        p('roots', 'Square roots, cube roots and approximation', 'beginner', 45, 15, 'medium'),
      ],
    },
    {
      id: 'percentage-family',
      name: 'Percentage family',
      blurb: 'One idea, many disguises: percentage, profit, interest, ratio and averages all run on fractions of 100.',
      topics: [
        percentage,
        profitLoss,
        p('simple-interest', 'Simple interest', 'beginner', 45, 15, 'medium', { weightage: { tier1: 0.5, tier2: 1 } }),
        p('compound-interest', 'Compound interest', 'intermediate', 90, 30, 'high', { weightage: { tier1: 1, tier2: 1 } }),
        p('ratio-proportion', 'Ratio, proportion and partnership', 'beginner', 90, 30, 'high', { weightage: { tier1: 1, tier2: 1.5 } }),
        p('mixture-alligation', 'Mixture and alligation', 'intermediate', 60, 20, 'medium', { weightage: { tier1: 0.5, tier2: 1 } }),
        p('average', 'Average', 'beginner', 60, 20, 'high', { weightage: { tier1: 1, tier2: 1 } }),
      ],
    },
    {
      id: 'time-family',
      name: 'Time family',
      blurb: 'Work, speed and distance share one equation: rate × time = amount.',
      topics: [
        timeWork,
        speedDistance,
        p('trains', 'Trains', 'beginner', 60, 20, 'medium'),
        p('boats-streams', 'Boats and streams', 'beginner', 45, 15, 'medium'),
      ],
    },
    {
      id: 'algebra',
      name: 'Algebra',
      blurb: 'Identities and the x + 1/x family carry most of the marks here.',
      topics: [
        algebraIdentities,
        p('linear-equations', 'Linear equations and polynomials', 'beginner', 60, 20, 'medium'),
        p('graphs-lines', 'Graphs of linear equations', 'beginner', 40, 15, 'low'),
      ],
    },
    {
      id: 'geometry',
      name: 'Geometry',
      blurb: 'Learn the theorems as pictures; most questions are one theorem and one line of arithmetic.',
      topics: [
        p('lines-angles', 'Lines and angles', 'beginner', 60, 20, 'medium'),
        p('triangles', 'Triangles', 'advanced', 180, 60, 'high', { weightage: { tier1: 1.5, tier2: 2 } }),
        p('circles', 'Circles', 'advanced', 150, 50, 'high', { weightage: { tier1: 1, tier2: 1.5 } }),
        p('quadrilaterals', 'Quadrilaterals and polygons', 'intermediate', 60, 20, 'medium'),
        p('coordinate-geometry', 'Coordinate geometry', 'beginner', 45, 15, 'low'),
      ],
    },
    {
      id: 'mensuration',
      name: 'Mensuration',
      blurb: 'Area, perimeter, volume and surface area.',
      topics: [
        p('mensuration-2d', '2D shapes: area and perimeter', 'intermediate', 90, 30, 'high', { weightage: { tier1: 1, tier2: 1.5 } }),
        p('mensuration-3d', '3D solids: volume and surface area', 'intermediate', 120, 40, 'high', { weightage: { tier1: 1, tier2: 1.5 } }),
      ],
    },
    {
      id: 'trigonometry',
      name: 'Trigonometry',
      blurb: 'Standard values and three identities solve most questions.',
      topics: [
        p('trig-identities', 'Ratios, identities and standard angles', 'intermediate', 120, 40, 'high', { weightage: { tier1: 2, tier2: 2 } }),
        p('heights-distances', 'Heights and distances', 'beginner', 60, 20, 'medium'),
      ],
    },
    {
      id: 'data-statistics',
      name: 'Data and statistics',
      blurb: 'Read a chart once, then answer a set of linked questions from it.',
      topics: [
        p('data-interpretation', 'Data interpretation', 'intermediate', 120, 40, 'high', { weightage: { tier1: 3, tier2: 3 } }),
        p('statistics-basics', 'Mean, median, mode and dispersion', 'beginner', 60, 20, 'medium'),
        p('probability', 'Probability', 'intermediate', 60, 20, 'low', T2),
      ],
    },
  ],
};

export default subject;
