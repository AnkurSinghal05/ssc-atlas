import { planned as p } from '@/content/helpers';
import type { Subject } from '@/content/types';
import meta from './meta';

const T2 = { tiers: ['T2' as const] };

const subject: Subject = {
  ...meta,
  categories: [
    {
      id: 'descriptive',
      name: 'Describing data',
      blurb: 'Collecting, charting and summarising data.',
      topics: [
        p('data-collection', 'Collection and representation of data', 'beginner', 60, 20, 'medium', T2),
        p('central-tendency', 'Measures of central tendency', 'beginner', 90, 30, 'high', T2),
        p('dispersion', 'Measures of dispersion', 'intermediate', 90, 30, 'high', T2),
        p('moments', 'Moments, skewness and kurtosis', 'intermediate', 60, 20, 'medium', T2),
        p('correlation-regression', 'Correlation and regression', 'intermediate', 120, 40, 'high', T2),
      ],
    },
    {
      id: 'probability-inference',
      name: 'Probability and inference',
      blurb: 'From chance to conclusions about a population.',
      topics: [
        p('probability-theory', 'Probability theory', 'intermediate', 120, 40, 'high', T2),
        p('distributions', 'Random variables and distributions', 'advanced', 150, 50, 'high', T2),
        p('sampling', 'Sampling theory', 'intermediate', 90, 30, 'medium', T2),
        p('inference', 'Statistical inference', 'advanced', 120, 40, 'medium', T2),
        p('anova', 'Analysis of variance', 'advanced', 60, 20, 'low', T2),
      ],
    },
    {
      id: 'applied',
      name: 'Applied statistics',
      blurb: 'Series over time and price indices.',
      topics: [
        p('time-series', 'Time series analysis', 'intermediate', 60, 20, 'medium', T2),
        p('index-numbers', 'Index numbers', 'intermediate', 60, 20, 'medium', T2),
      ],
    },
  ],
};

export default subject;
