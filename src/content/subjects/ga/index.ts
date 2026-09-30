import { planned as p } from '@/content/helpers';
import type { Subject } from '@/content/types';
import meta from './meta';
import rightsDpspDuties from './topics/rights-dpsp-duties';
import parliament from './topics/parliament';
import modernHistory from './topics/modern-history';
import biology from './topics/biology';
import moneyBanking from './topics/money-banking';
import constitutionPreamble from './topics/constitution-preamble';
import importantArticles from './topics/important-articles';
import judiciary from './topics/judiciary';
import stateLocal from './topics/state-local';
import bodiesAmendments from './topics/bodies-amendments';

const subject: Subject = {
  ...meta,
  categories: [
    {
      id: 'history',
      name: 'History',
      blurb: 'Dates, dynasties and movements. Learn them as timelines, then test them as flashcards.',
      topics: [
        p('ancient-history', 'Ancient India', 'intermediate', 150, 50, 'high', { weightage: { tier1: 1, tier2: 1 } }),
        p('medieval-history', 'Medieval India', 'intermediate', 150, 50, 'high', { weightage: { tier1: 1, tier2: 1 } }),
        modernHistory,
        p('art-culture', 'Art and culture', 'intermediate', 120, 40, 'high', { weightage: { tier1: 1.5, tier2: 1.5 } }),
      ],
    },
    {
      id: 'polity',
      name: 'Polity',
      blurb: 'Articles, amendments and bodies. Most questions test one article number or one power.',
      topics: [constitutionPreamble, importantArticles, rightsDpspDuties, parliament, judiciary, stateLocal, bodiesAmendments],
    },
    {
      id: 'geography',
      name: 'Geography',
      blurb: 'Maps in your head: rivers, mountains, soils, crops and parks.',
      topics: [
        p('physical-geography', 'Physical geography', 'beginner', 90, 30, 'medium'),
        p('indian-geography', 'Indian physical geography', 'intermediate', 150, 50, 'high', { weightage: { tier1: 1.5, tier2: 1.5 } }),
        p('economic-geography', 'Economic geography', 'intermediate', 90, 30, 'medium'),
        p('world-geography', 'World geography', 'beginner', 60, 20, 'low'),
      ],
    },
    {
      id: 'economy',
      name: 'Economy',
      blurb: 'Definitions and institutions: GDP, inflation, RBI tools, budget terms and schemes.',
      topics: [
        p('economy-basics', 'Basic concepts', 'beginner', 60, 20, 'medium'),
        moneyBanking,
        p('budget-taxation', 'Budget, taxation and fiscal policy', 'intermediate', 60, 20, 'medium'),
        p('plans-schemes', 'Plans, NITI Aayog and schemes', 'beginner', 60, 20, 'medium'),
      ],
    },
    {
      id: 'science',
      name: 'Science',
      blurb: 'NCERT-level physics, chemistry and biology. Around a quarter of the GA section.',
      topics: [
        p('physics', 'Physics', 'intermediate', 150, 50, 'high', { weightage: { tier1: 2, tier2: 2 } }),
        p('chemistry', 'Chemistry', 'intermediate', 150, 50, 'high', { weightage: { tier1: 2, tier2: 2 } }),
        biology,
      ],
    },
    {
      id: 'static-gk',
      name: 'Static GK',
      blurb: 'Books, awards, sports, days and firsts.',
      topics: [p('static-gk', 'Books, awards, sports, days and firsts', 'beginner', 120, 40, 'high', { weightage: { tier1: 3, tier2: 3 } })],
    },
    {
      id: 'current-affairs',
      name: 'Current affairs',
      blurb: 'The last 12 months, month by month. Dated, because it goes stale.',
      topics: [p('current-affairs', 'Month by month', 'beginner', 240, 80, 'high', { weightage: { tier1: 4, tier2: 4 } })],
    },
  ],
};

export default subject;
