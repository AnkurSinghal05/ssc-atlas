import { planned as p } from '@/content/helpers';
import type { Subject } from '@/content/types';
import meta from './meta';
import subjectVerb from './topics/subject-verb';
import activePassive from './topics/active-passive';
import directIndirect from './topics/direct-indirect';
import idioms from './topics/idioms';
import oneWord from './topics/one-word';

const subject: Subject = {
  ...meta,
  categories: [
    {
      id: 'grammar',
      name: 'Grammar',
      blurb: 'A few dozen rules cover most error-spotting and sentence-improvement questions.',
      topics: [
        p('parts-of-speech', 'Parts of speech', 'beginner', 90, 30, 'medium'),
        subjectVerb,
        p('tenses', 'Tenses', 'beginner', 90, 30, 'high', { weightage: { tier1: 1, tier2: 2 } }),
        p('articles-prepositions', 'Articles, prepositions and conjunctions', 'intermediate', 90, 30, 'high', { weightage: { tier1: 1, tier2: 2 } }),
        p('error-spotting', 'Error spotting', 'intermediate', 120, 40, 'high', { weightage: { tier1: 2, tier2: 4 } }),
        p('sentence-improvement', 'Sentence improvement', 'intermediate', 60, 20, 'high', { weightage: { tier1: 2, tier2: 3 } }),
        activePassive,
        directIndirect,
      ],
    },
    {
      id: 'vocabulary',
      name: 'Vocabulary',
      blurb: 'Pure memory. Flashcards and spaced revision beat reading lists.',
      topics: [
        p('synonyms-antonyms', 'Synonyms and antonyms', 'intermediate', 180, 60, 'high', { weightage: { tier1: 2, tier2: 4 } }),
        idioms,
        oneWord,
        p('spelling', 'Spelling', 'beginner', 60, 20, 'high', { weightage: { tier1: 1, tier2: 2 } }),
        p('confusable-words', 'Confusable words', 'beginner', 45, 15, 'medium'),
      ],
    },
    {
      id: 'reading',
      name: 'Reading',
      blurb: 'Passages and blanks: read for the idea, then check the grammar of your pick.',
      topics: [
        p('fill-blanks', 'Fill in the blanks', 'beginner', 45, 15, 'high', { weightage: { tier1: 1, tier2: 2 } }),
        p('cloze', 'Cloze test', 'intermediate', 60, 20, 'high', { weightage: { tier1: 5, tier2: 5 } }),
        p('para-jumbles', 'Para jumbles', 'intermediate', 60, 20, 'medium', { weightage: { tier1: 1, tier2: 2 } }),
        p('reading-comprehension', 'Reading comprehension', 'intermediate', 90, 30, 'high', { weightage: { tier1: 5, tier2: 10 } }),
      ],
    },
  ],
};

export default subject;
