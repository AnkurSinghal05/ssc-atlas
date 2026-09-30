import { planned as p } from '@/content/helpers';
import type { Subject } from '@/content/types';
import meta from './meta';

const T2 = { tiers: ['T2' as const] };

const subject: Subject = {
  ...meta,
  categories: [
    {
      id: 'basics',
      name: 'Computer basics',
      blurb: 'What a computer is made of and how it stores data.',
      topics: [
        p('fundamentals', 'Fundamentals and generations', 'beginner', 45, 15, 'medium', T2),
        p('hardware', 'Hardware and devices', 'beginner', 45, 15, 'medium', T2),
        p('memory', 'Memory and units', 'beginner', 45, 15, 'medium', T2),
        p('software-os', 'Software and operating systems', 'beginner', 45, 15, 'medium', T2),
      ],
    },
    {
      id: 'applications',
      name: 'Using computers',
      blurb: 'Office tools, the internet and staying safe on it.',
      topics: [
        p('ms-office', 'MS Office', 'beginner', 45, 15, 'medium', T2),
        p('internet', 'Internet and networking', 'beginner', 45, 15, 'medium', T2),
        p('cyber-security', 'Cyber security', 'beginner', 45, 15, 'medium', T2),
      ],
    },
  ],
};

export default subject;
