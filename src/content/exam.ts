/*
 * The SSC CGL scheme of examination, as given in the 2026 notice.
 * Re-check against the latest notice on ssc.gov.in every exam cycle.
 */
import type { Comparison } from './types';

export interface ExamRow {
  part: string;
  subject: string;
  questions: number;
  marks: number;
  time: string;
  /** Link to the subject map, if the site covers it. */
  subjectId?: string;
}

export interface ExamPaper {
  id: string;
  name: string;
  who: string;
  rows: ExamRow[];
  total?: { questions: number; marks: number; time: string };
  marking: string;
  notes: string[];
}

export const EXAM_CHECKED = 'Scheme as in the SSC CGL 2026 notice. Confirm against the latest notice on ssc.gov.in.';

export const papers: ExamPaper[] = [
  {
    id: 'tier1',
    name: 'Tier 1',
    who: 'Every candidate. A screening test: it decides who goes to Tier 2, and its marks do not count in the final merit.',
    rows: [
      { part: 'Part 1', subject: 'General Intelligence and Reasoning', questions: 25, marks: 50, time: '15 min', subjectId: 'reasoning' },
      { part: 'Part 2', subject: 'General Awareness', questions: 25, marks: 50, time: '15 min', subjectId: 'ga' },
      { part: 'Part 3', subject: 'Quantitative Aptitude', questions: 25, marks: 50, time: '15 min', subjectId: 'quant' },
      { part: 'Part 4', subject: 'English Comprehension', questions: 25, marks: 50, time: '15 min', subjectId: 'english' },
    ],
    total: { questions: 100, marks: 200, time: '60 min' },
    marking: '+2 for a right answer, −0.50 for a wrong one.',
    notes: [
      'Each section has its own 15-minute timer. When a section’s time runs out you move on and cannot go back to it.',
      'Tier 1 is held in many shifts over several days, so scores are normalised across shifts.',
    ],
  },
  {
    id: 'tier2-paper1',
    name: 'Tier 2, Paper I',
    who: 'Every candidate who clears Tier 1. Its marks decide the final merit for all posts.',
    rows: [
      { part: 'Session I, Section I, Module I', subject: 'Mathematical Abilities', questions: 30, marks: 90, time: '30 min', subjectId: 'quant' },
      { part: 'Session I, Section I, Module II', subject: 'Reasoning and General Intelligence', questions: 30, marks: 90, time: '30 min', subjectId: 'reasoning' },
      { part: 'Session I, Section II, Module I', subject: 'English Language and Comprehension', questions: 45, marks: 135, time: '40 min', subjectId: 'english' },
      { part: 'Session I, Section II, Module II', subject: 'General Awareness', questions: 25, marks: 75, time: '20 min', subjectId: 'ga' },
      { part: 'Session I, Section III, Module I', subject: 'Computer Knowledge (qualifying)', questions: 20, marks: 60, time: '15 min', subjectId: 'computer' },
      { part: 'Session II, Section III, Module II', subject: 'Data Entry Speed Test (qualifying)', questions: 1, marks: 0, time: '15 min' },
    ],
    marking: '+3 for a right answer, −1 for a wrong one, in Sections I and II and in Computer Knowledge.',
    notes: [
      'Sections I and II (180 + 210 = 390 marks) count towards merit. Computer Knowledge and the Data Entry Speed Test are qualifying only.',
      'Data Entry Speed Test: type 2,000 key depressions in 15 minutes from a given passage.',
      'Both sessions are held on the same day.',
    ],
  },
  {
    id: 'tier2-paper2',
    name: 'Tier 2, Paper II',
    who: 'Only for candidates who applied for Junior Statistical Officer and Statistical Investigator Grade II.',
    rows: [{ part: 'Paper II', subject: 'Statistics', questions: 100, marks: 200, time: '2 hours', subjectId: 'statistics' }],
    marking: '+2 for a right answer, −0.50 for a wrong one.',
    notes: ['Syllabus at graduation level with Statistics as a subject.'],
  },
  {
    id: 'tier2-paper3',
    name: 'Tier 2, Paper III',
    who: 'Only for candidates who applied for Assistant Audit Officer and Assistant Accounts Officer.',
    rows: [{ part: 'Paper III', subject: 'General Studies (Finance and Economics)', questions: 100, marks: 200, time: '2 hours' }],
    marking: '+2 for a right answer, −0.50 for a wrong one.',
    notes: ['Not covered on this site yet.'],
  },
];

export const tierComparison: Comparison = {
  title: 'Tier 1 vs Tier 2',
  items: ['Tier 1', 'Tier 2, Paper I'],
  rows: [
    { aspect: 'Purpose', values: ['Screening for Tier 2', 'Decides the final merit'], key: true },
    { aspect: 'Questions', values: ['100', '150 plus the typing test'] },
    { aspect: 'Marks per question', values: ['2', '3'] },
    { aspect: 'Wrong answer', values: ['−0.50 (a quarter of the marks)', '−1 (a third of the marks)'], key: true },
    { aspect: 'Time', values: ['60 min, 15 per section', '2 h 15 min in Session I, plus 15 min typing'] },
    { aspect: 'Quant / Reasoning', values: ['25 each', '30 each'] },
    { aspect: 'English / GA', values: ['25 each', '45 English, 25 GA'] },
    { aspect: 'Computer', values: ['Not asked', '20 questions, qualifying'] },
    { aspect: 'Depth', values: ['Same syllabus, easier mix', 'Same syllabus, harder and more calculation-heavy'] },
  ],
  reveal:
    'Both tiers test the same four subjects. Tier 1 only gets you in; Tier 2 ranks you, and its heavier negative marking means guessing costs more.',
  whenToUse: [
    'Aim for speed and a safe cut-off score. With −0.50 on 2 marks, a guess between two options still pays on average.',
    'Aim for accuracy. English carries the most marks (135), so it is the biggest lever on your rank.',
  ],
};

export const sectionTips: { title: string; text: string }[] = [
  { title: 'GA first, in under 10 minutes', text: 'You either know a GA fact or you do not. Answer fast and bank the spare minutes for reading, since each section’s timer is separate.' },
  { title: 'Quant: two passes', text: 'First pass: every question you can do in under a minute. Second pass: the long ones. Skip data-heavy sets if a single question takes more than two minutes.' },
  { title: 'Reasoning: figures before puzzles', text: 'Mirror images, paper folding, embedded and counting figures take seconds once practised. Leave seating puzzles for last.' },
  { title: 'English: reading is half the marks', text: 'Cloze and comprehension carry many questions. Read the passage once for the idea, then answer, instead of rereading for every question.' },
  { title: 'When to guess', text: 'In Tier 1 a wrong answer costs a quarter of a right one, so ruling out two options makes a guess worth it. In Tier 2 it costs a third, so guess only after ruling out two.' },
];
