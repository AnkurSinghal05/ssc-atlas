import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'math-operations',
  title: 'Mathematical operations and sign swap',
  level: 'beginner',
  masteryMinutes: 45,
  reviseMinutes: 15,
  priority: 'high',
  weightage: { tier1: 1.5, tier2: 2 },
  tags: ['symbol substitution', 'sign interchange', 'BODMAS', 'fill the signs', 'number interchange'],
  summary:
    'Rewrite the expression with the real signs first, then solve with BODMAS: division and multiplication left to right, then addition and subtraction left to right. For "which two signs to swap", test the options one by one and drop any that give a fraction or the wrong size.',
  keyPoints: [
    {
      title: 'BODMAS order',
      text: 'Brackets, Of, then Division and Multiplication, then Addition and Subtraction. ÷ and × have the same rank, so work them left to right. + and − also share a rank and go left to right.',
      formula: 'Brackets → Of → ÷ × (left to right) → + − (left to right)',
      example: '12 + 18 ÷ 3 × 2 − 4 = 12 + 6 × 2 − 4 = 12 + 12 − 4 = **20**.',
    },
    {
      title: 'Rewrite first, then solve',
      text: 'When symbols are given new meanings, write the whole expression again with the real signs before doing any arithmetic. Change every sign in one pass so none is changed twice.',
      example: '"+ means ×, − means ÷": 8 + 4 − 2 becomes 8 × 4 ÷ 2 = **16**.',
    },
    {
      title: 'Letters standing for signs',
      text: 'Some questions use letters such as P, Q, R, S for the signs. Replace each letter with its sign and solve with BODMAS as usual.',
      example: 'P = +, Q = −, R = ×, S = ÷: 18 S 3 R 4 P 6 Q 5 = 18 ÷ 3 × 4 + 6 − 5 = **25**.',
    },
    {
      title: 'Which two signs must be interchanged?',
      text: 'Swap the two signs in the given expression (every copy of each), solve, and compare with the right-hand side. Only one option should match.',
      example: '20 − 4 ÷ 2 + 6 × 3 = 21. Swap − and ÷: 20 ÷ 4 − 2 + 6 × 3 = 5 − 2 + 18 = **21**.',
    },
    {
      title: 'Throw out options fast',
      text: 'An option that leaves a fraction, or a result far too big or too small, is wrong. A large answer usually needs × moved onto the bigger numbers.',
      example: 'If the target is 46 and a swap gives 40/3, reject it without finishing.',
    },
    {
      title: 'Number and sign interchange together',
      text: 'When two numbers and two signs are both swapped, change the numbers and the signs in the expression first, then solve once. Missing one of the two swaps is the usual mistake.',
      example: '5 + 3 × 4 − 6 with + ↔ × and 3 ↔ 6: 5 × 6 + 4 − 3 = **31**.',
    },
  ],
  comparisons: [
    {
      title: 'Symbol substitution vs sign interchange',
      items: ['Symbol substitution', 'Sign interchange'],
      rows: [
        { aspect: 'What is given', values: ['A table: "+ means ×, − means ÷…"', 'A wrong equation and four pairs of signs'] },
        { aspect: 'What you find', values: ['The value of the expression', 'The pair that makes the equation true'], key: true },
        { aspect: 'Method', values: ['Rewrite with real signs, then BODMAS', 'Swap each pair, solve, compare with the right side'] },
        { aspect: 'Common slip', values: ['Changing a sign twice', 'Swapping only one copy of a sign'] },
      ],
      reveal: 'Both end in one BODMAS calculation. Substitution tells you the new signs; interchange makes you test up to four sets of signs.',
      whenToUse: [
        'The question says what each sign "means" and asks for a value.',
        'The question gives an equation and asks which signs to swap to make it correct.',
      ],
    },
  ],
  shortcuts: [
    {
      pattern: 'Symbol substitution',
      example: 'If + means −, − means ×, × means ÷ and ÷ means +, then 20 × 5 − 3 + 4 ÷ 6 = ?',
      options: ['14', '10', '22', '8'],
      answer: '14',
      ladder: [
        {
          name: 'Standard',
          steps: ['Rewrite: 20 ÷ 5 × 3 − 4 + 6.', 'Divide and multiply left to right: 4 × 3 = 12.', '12 − 4 + 6 = 14.'],
          seconds: 40,
        },
        {
          name: 'Shortcut',
          steps: ['Rewrite only the ÷ × part first: 20 ÷ 5 × 3 = 12.', 'Then read the tail: − 4 + 6 = +2. Answer 14.'],
          seconds: 20,
        },
      ],
    },
    {
      pattern: 'Which two signs to interchange',
      example: 'Which two signs should be interchanged to make the equation correct? 6 + 4 × 3 − 8 ÷ 2 = 23',
      options: ['+ and ×', '− and ÷', '× and ÷', '+ and −'],
      answer: '+ and ×',
      ladder: [
        {
          name: 'Standard',
          steps: ['Swap each pair and solve all four.', '+ and ×: 6 × 4 + 3 − 8 ÷ 2 = 24 + 3 − 4 = 23. Match.'],
          seconds: 60,
        },
        {
          name: 'Shortcut',
          steps: ['As written, the left side is 6 + 12 − 4 = 14, well below 23.', 'To grow, × must move onto 6 × 4 = 24: try + and × first. It gives 23.'],
          seconds: 20,
        },
        {
          name: 'Option elimination',
          steps: ['− and ÷: 6 + 4 × 3 ÷ 8 − 2 leaves a fraction. Out.', '× and ÷: 4 ÷ 3 leaves a fraction. Out.', '+ and −: 6 − 12 + 4 = −2. Out. So + and ×.'],
          seconds: 25,
        },
      ],
    },
    {
      pattern: 'Fill in the signs',
      example: 'Select the order of signs that replaces * to make the equation correct: 16 * 4 * 5 * 3 * 7 = 20',
      options: ['÷, −, +, ×', '÷, +, ×, −', '÷, ×, +, −', '÷, ×, −, +'],
      answer: '÷, −, +, ×',
      ladder: [
        {
          name: 'Standard',
          steps: ['Put each option in and solve all four.', '÷, −, +, ×: 16 ÷ 4 − 5 + 3 × 7 = 4 − 5 + 21 = 20. Match.'],
          seconds: 60,
        },
        {
          name: 'Option elimination',
          steps: ['All options start with 16 ÷ 4 = 4, so look at the rest.', '÷, ×, … gives 4 × 5 = 20 before the tail; + 3 − 7 or − 3 + 7 moves it to 16 or 24. Out.', '÷, +, ×, −: 4 + 15 − 7 = 12. Out. The first option is left.'],
          seconds: 30,
        },
      ],
    },
  ],
  qa: [
    {
      q: 'What does BODMAS stand for?',
      a: ['Brackets, Of, Division, Multiplication, Addition, Subtraction.', 'D and M share a rank; so do A and S.'],
      tag: 'Asked often',
    },
    {
      q: 'Is 10 − 4 + 2 equal to 4 or 8?',
      a: ['8. + and − are worked left to right: 10 − 4 = 6, then 6 + 2 = 8.', 'Doing + first (giving 4) is the classic slip.'],
      tag: 'Trap',
    },
    {
      q: 'Is 24 ÷ 4 × 2 equal to 3 or 12?',
      a: ['12. ÷ and × go left to right: 24 ÷ 4 = 6, then 6 × 2 = 12.', '× does not come before ÷ just because M is in BODMAS.'],
      tag: 'Trap',
    },
    {
      q: 'What is the safest way to handle "+ means ×, × means +"?',
      a: ['Rewrite the whole expression with real signs in one pass.', 'Swapping signs one at a time can change the same sign twice.'],
      tag: 'Shortcut',
    },
    {
      q: 'When two signs are interchanged, how many places change?',
      a: ['Every place where either sign appears.', 'If + appears twice, both copies become the other sign.'],
      tag: 'Trap',
    },
    {
      q: 'How do you rule out a sign-interchange option quickly?',
      a: ['It leaves a fraction in a whole-number question.', 'Or its result is far above or below the right-hand side.'],
      tag: 'Shortcut',
    },
    {
      q: 'The target is much bigger than the expression as written. Which swap to try first?',
      a: ['The one that puts × between the two biggest numbers.', 'Or the one that turns a − into +.'],
    },
    {
      q: 'Numbers and signs are both interchanged. What order?',
      a: ['Make both changes in the expression first.', 'Then solve once with BODMAS.'],
    },
    {
      q: 'What does "of" mean in BODMAS?',
      a: ['Multiplication, done before ordinary ÷ and ×.', '½ of 8 ÷ 2 = 4 ÷ 2 = 2.'],
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: "If '+' means '×', '−' means '÷', '×' means '−' and '÷' means '+', then 8 + 4 − 2 × 6 ÷ 3 = ?",
      options: ['13', '15', '11', '19'],
      answer: 0,
      explain: 'Rewrite: 8 × 4 ÷ 2 − 6 + 3. Then 32 ÷ 2 = 16, and 16 − 6 + 3 = 13.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: "If P means '+', Q means '−', R means '×' and S means '÷', then 18 S 3 R 4 P 6 Q 5 = ?",
      options: ['23', '25', '29', '19'],
      answer: 1,
      explain: 'Rewrite: 18 ÷ 3 × 4 + 6 − 5. Then 6 × 4 = 24, and 24 + 6 − 5 = 25.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Find the value of 12 + 18 ÷ 3 × 2 − 4.',
      options: ['14', '16', '20', '26'],
      answer: 2,
      explain: '÷ and × first, left to right: 18 ÷ 3 = 6, 6 × 2 = 12. Then 12 + 12 − 4 = 20.',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'By BODMAS, 10 − 4 + 2 = 4.',
      answer: false,
      explain: '+ and − share a rank and are worked left to right: 10 − 4 = 6, then 6 + 2 = 8.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which two signs should be interchanged to make the equation correct? 20 − 4 ÷ 2 + 6 × 3 = 21',
      options: ['+ and −', '− and ÷', '× and ÷', '+ and ×'],
      answer: 1,
      explain: 'Swap − and ÷: 20 ÷ 4 − 2 + 6 × 3 = 5 − 2 + 18 = 21. The other swaps give 4, 14 and 11.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which two signs should be interchanged to make the equation correct? 18 ÷ 6 × 3 + 4 − 2 = 38',
      options: ['+ and −', '× and ÷', '− and ÷', '+ and ×'],
      answer: 1,
      explain: 'Swap × and ÷: 18 × 6 ÷ 3 + 4 − 2 = 36 + 4 − 2 = 38. The other swaps give 7, 2 and 13.',
      shortcut: '38 is big, so × must act on 18 × 6. Only the × and ÷ swap does that.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which two signs should be interchanged to make the equation correct? 7 × 3 − 12 ÷ 4 + 5 = 19',
      options: ['+ and ÷', '× and ÷', '− and ×', '+ and −'],
      answer: 3,
      explain: 'Swap + and −: 7 × 3 + 12 ÷ 4 − 5 = 21 + 3 − 5 = 19. The other swaps give a fraction or 3.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which two signs should be interchanged to make the equation correct? 24 ÷ 6 + 3 × 4 − 10 = 22',
      options: ['+ and ×', '− and ÷', '+ and ÷', '× and −'],
      answer: 2,
      explain: 'Swap + and ÷: 24 + 6 ÷ 3 × 4 − 10 = 24 + 8 − 10 = 22. The other swaps give 6, a fraction and −33.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: "If '×' means '+', '+' means '÷', '−' means '×' and '÷' means '−', then 36 + 4 − 3 × 10 ÷ 5 = ?",
      options: ['32', '22', '37', '27'],
      answer: 0,
      explain: 'Rewrite: 36 ÷ 4 × 3 + 10 − 5. Then 9 × 3 = 27, and 27 + 10 − 5 = 32.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Select the order of signs that replaces * to make the equation correct: 16 * 4 * 5 * 3 * 7 = 20',
      options: ['÷, +, ×, −', '÷, −, +, ×', '÷, ×, +, −', '÷, ×, −, +'],
      answer: 1,
      explain: '16 ÷ 4 − 5 + 3 × 7 = 4 − 5 + 21 = 20. The other orders give 12, 16 and 24.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: "If A means '+', B means '−', C means '×' and D means '÷', then 45 D 5 C 4 A 6 B 8 = ?",
      options: ['34', '38', '30', '26'],
      answer: 0,
      explain: 'Rewrite: 45 ÷ 5 × 4 + 6 − 8. Then 9 × 4 = 36, and 36 + 6 − 8 = 34.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'By BODMAS, 24 ÷ 4 × 2 = 12.',
      answer: true,
      explain: '÷ and × share a rank and go left to right: 24 ÷ 4 = 6, then 6 × 2 = 12.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Which two signs should be interchanged to make the equation correct? 15 + 3 × 4 − 9 ÷ 3 = 46',
      options: ['+ and −', '+ and ×', '× and ÷', '− and ÷'],
      answer: 1,
      explain: 'Swap + and ×: 15 × 3 + 4 − 9 ÷ 3 = 45 + 4 − 3 = 46. The other swaps give 6 or a fraction.',
      shortcut: '46 is big, so × must land on 15. Only the + and × swap gives 15 × 3.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: "If '+' and '×' are interchanged and the numbers 3 and 6 are interchanged, what is the value of 5 + 3 × 4 − 6?",
      options: ['11', '13', '26', '31'],
      answer: 3,
      explain: 'After both swaps: 5 × 6 + 4 − 3 = 30 + 4 − 3 = 31. Swapping only the signs gives 13, only the numbers gives 26, and neither gives 11.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: "If '×' and '−' are interchanged, which of these equations becomes correct?",
      options: ['8 × 3 − 4 = 20', '6 − 5 × 2 = 28', '9 − 2 × 3 = 3', '7 × 4 − 2 = 20'],
      answer: 1,
      explain: 'Swap the signs in each: 8 − 3 × 4 = −4, 6 × 5 − 2 = 28, 9 × 2 − 3 = 15, 7 − 4 × 2 = −1. Only 6 × 5 − 2 = 28 is correct.',
      shortcut: 'Options that are already true before the swap (8 × 3 − 4 = 20) are traps: after the swap they break.',
    },
  ],
};

export default topic;
