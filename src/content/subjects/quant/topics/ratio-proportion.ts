import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'ratio-proportion',
  title: 'Ratio, proportion and partnership',
  level: 'beginner',
  masteryMinutes: 90,
  reviseMinutes: 30,
  priority: 'high',
  weightage: { tier1: 1, tier2: 1.5 },
  tags: ['ratio', 'proportion', 'mean proportional', 'partnership', 'ages', 'coins', 'income and expenditure'],
  summary:
    'A ratio compares parts; one multiplier x turns parts into real values. Combine ratios by matching the common term, and share profit in partnership by capital × time.',
  patterns: [
    { name: 'Combine ratios and divide an amount', frequency: 'most', example: 'A : B = 2 : 3 and B : C = 4 : 5. Find A : B : C.' },
    {
      name: 'Partnership: profit by capital × time',
      frequency: 'most',
      example: 'A puts ₹40,000 for a year, B ₹60,000 for 8 months. Split ₹35,000.',
    },
    { name: 'Income, expenditure and savings', frequency: 'often', example: "Incomes 3 : 4, expenses 2 : 3, each saves ₹5,000. Find A's income." },
    { name: 'Ages in a ratio', frequency: 'often', example: "Ages are 7 : 2 now and 9 : 4 after 10 years. Father's age?" },
    { name: 'Mean, third and fourth proportional', frequency: 'often', example: 'Find the mean proportional between 9 and 25.' },
    { name: 'Coins in a bag', frequency: 'often', example: '₹1, 50p and 25p coins in the ratio 5 : 6 : 8 total ₹210. How many 50p coins?' },
    {
      name: 'Add or subtract a number to change a ratio',
      frequency: 'rare',
      example: 'What must be subtracted from 15, 19, 27 and 37 to make them proportional?',
    },
  ],
  keyPoints: [
    {
      title: 'Ratio and dividing an amount',
      text: 'a : b means a/b. Multiplying both terms by the same number keeps the ratio. To divide N in a : b, each share is its part over the total parts.',
      formula: "A's share = a/(a + b) × N",
      example: '₹1,540 in 5 : 6: A = 5/11 × 1,540 = **₹700**, B = ₹840.',
    },
    {
      title: 'Combine two ratios',
      text: 'Make the common term equal using the LCM. Quick form for A : B = a : b and B : C = c : d: A : B : C = ac : bc : bd.',
      formula: 'A : B : C = ac : bc : bd',
      example: '2 : 3 and 4 : 5: (2 × 4) : (3 × 4) : (3 × 5) = **8 : 12 : 15**.',
    },
    {
      title: 'Proportion and the three proportionals',
      text: 'a : b = c : d means ad = bc (product of extremes = product of means).',
      formula: 'fourth = bc/a,  third = b²/a,  mean = √(ab)',
      example: 'Fourth proportional to 4, 9, 12 = 108/4 = **27**. Third to 16, 36 = 1,296/16 = **81**. Mean of 9, 25 = **15**.',
    },
    {
      title: 'Adding a number to change a ratio',
      text: 'Adding the same x to both terms of a : b to make c : d: solve (a + x)/(b + x) = c/d.',
      formula: 'x = (bc − ad)/(d − c)',
      example: '3 : 5 to 5 : 6: x = (25 − 18)/(6 − 5) = **7**. Check: 10 : 12 = 5 : 6.',
    },
    {
      title: 'Income, expenditure and savings',
      text: 'Income = expenditure + savings. Write incomes as ax, bx and expenses as cy, dy, then use the savings to get two equations.',
      example: "Incomes 3 : 4, expenses 2 : 3, each saves ₹5,000: 3x − 2y = 4x − 3y, so x = y = 5,000. A's income = **₹15,000**.",
    },
    {
      title: 'Partnership',
      text: "Profit is shared in the ratio of capital × time (in months). A working partner's salary comes out of the profit first; the rest is shared.",
      formula: 'P₁ : P₂ = C₁T₁ : C₂T₂',
      example: 'A ₹40,000 × 12, B ₹60,000 × 8: 4,80,000 : 4,80,000 = **1 : 1**.',
    },
    {
      title: 'Ages',
      text: "Write ages as ax and bx. The gap between two people's ages never changes, and both ages rise by the same number of years.",
      example: 'Now 7 : 2, after 10 years 9 : 4: (7x + 10)/(2x + 10) = 9/4 gives x = 5. Father = **35**.',
    },
    {
      title: 'Coins: count ratio to value ratio',
      text: 'Multiply each count term by its coin value to get the value ratio. Split the total money by value, then divide by the coin value to get the count.',
      example: '₹1, 50p, 25p in count 5 : 6 : 8 → value 5 : 3 : 2. ₹210 → 50p coins are worth ₹63, so **126 coins**.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'Dividing in a ratio: count the parts',
      figure: {
        viewBox: '0 0 320 188',
        svg: `
<rect x="70" y="60" width="26" height="26" class="d-fill" data-step="1"/>
<rect x="70" y="60" width="26" height="26" data-step="1"/>
<text x="83" y="78" text-anchor="middle" class="d-small" data-step="2">140</text>
<rect x="96" y="60" width="26" height="26" class="d-fill" data-step="1"/>
<rect x="96" y="60" width="26" height="26" data-step="1"/>
<text x="109" y="78" text-anchor="middle" class="d-small" data-step="2">140</text>
<rect x="122" y="60" width="26" height="26" class="d-fill" data-step="1"/>
<rect x="122" y="60" width="26" height="26" data-step="1"/>
<text x="135" y="78" text-anchor="middle" class="d-small" data-step="2">140</text>
<rect x="148" y="60" width="26" height="26" class="d-fill" data-step="1"/>
<rect x="148" y="60" width="26" height="26" data-step="1"/>
<text x="161" y="78" text-anchor="middle" class="d-small" data-step="2">140</text>
<rect x="174" y="60" width="26" height="26" class="d-fill" data-step="1"/>
<rect x="174" y="60" width="26" height="26" data-step="1"/>
<text x="187" y="78" text-anchor="middle" class="d-small" data-step="2">140</text>
<rect x="70" y="104" width="26" height="26" class="d-fill-blue" data-step="1"/>
<rect x="70" y="104" width="26" height="26" data-step="1"/>
<text x="83" y="122" text-anchor="middle" class="d-small" data-step="2">140</text>
<rect x="96" y="104" width="26" height="26" class="d-fill-blue" data-step="1"/>
<rect x="96" y="104" width="26" height="26" data-step="1"/>
<text x="109" y="122" text-anchor="middle" class="d-small" data-step="2">140</text>
<rect x="122" y="104" width="26" height="26" class="d-fill-blue" data-step="1"/>
<rect x="122" y="104" width="26" height="26" data-step="1"/>
<text x="135" y="122" text-anchor="middle" class="d-small" data-step="2">140</text>
<rect x="148" y="104" width="26" height="26" class="d-fill-blue" data-step="1"/>
<rect x="148" y="104" width="26" height="26" data-step="1"/>
<text x="161" y="122" text-anchor="middle" class="d-small" data-step="2">140</text>
<rect x="174" y="104" width="26" height="26" class="d-fill-blue" data-step="1"/>
<rect x="174" y="104" width="26" height="26" data-step="1"/>
<text x="187" y="122" text-anchor="middle" class="d-small" data-step="2">140</text>
<rect x="200" y="104" width="26" height="26" class="d-fill-blue" data-step="1"/>
<rect x="200" y="104" width="26" height="26" data-step="1"/>
<text x="213" y="122" text-anchor="middle" class="d-small" data-step="2">140</text>
<text x="58" y="79" text-anchor="end" data-step="1">A</text>
<text x="58" y="123" text-anchor="end" data-step="1">B</text>
<text x="208" y="79" class="d-red" data-step="3">= ₹700</text>
<text x="234" y="123" class="d-red" data-step="3">= ₹840</text>
<text x="70" y="40" class="d-small d-soft" data-step="1">5 parts</text>
<text x="70" y="150" class="d-small d-soft" data-step="1">6 parts</text>
<text x="160" y="176" text-anchor="middle" data-step="2">11 parts = ₹1,540, 1 part = ₹140</text>`,
        caption: '₹1,540 in the ratio 5 : 6',
      },
      explain: [
        'A gets 5 parts and B gets 6 equal parts: 11 parts in all.',
        '11 parts make ₹1,540, so one part is 1,540/11 = ₹140.',
        'A = 5 × 140 = **₹700** and B = 6 × 140 = **₹840**. Check: 700 + 840 = 1,540.',
      ],
    },
    {
      type: 'diagram',
      title: 'Partnership: capital × time is the area',
      figure: {
        viewBox: '0 0 320 228',
        svg: `
<rect x="50" y="64" width="180" height="36" class="d-fill" data-step="2"/>
<rect x="50" y="64" width="180" height="36" data-step="2"/>
<text x="140" y="86" text-anchor="middle" class="d-small" data-step="2">60,000 × 9</text>
<rect x="230" y="76" width="60" height="24" class="d-fill" data-step="2"/>
<rect x="230" y="76" width="60" height="24" data-step="2"/>
<text x="268" y="68" text-anchor="middle" class="d-small" data-step="2">40,000 × 3</text>
<rect x="110" y="122" width="180" height="48" class="d-fill-blue" data-step="3"/>
<rect x="110" y="122" width="180" height="48" data-step="3"/>
<text x="200" y="151" text-anchor="middle" class="d-small" data-step="3">80,000 × 9</text>
<text x="38" y="88" text-anchor="end" data-step="1">A</text>
<text x="38" y="152" text-anchor="end" data-step="1">B</text>
<line x1="110" y1="170" x2="110" y2="186" class="d-dash d-soft" data-step="3"/>
<line x1="230" y1="100" x2="230" y2="186" class="d-dash d-soft" data-step="2"/>
<line x1="50" y1="186" x2="290" y2="186"/>
<line x1="50" y1="182" x2="50" y2="190"/>
<text x="50" y="202" text-anchor="middle" class="d-small">0</text>
<line x1="110" y1="182" x2="110" y2="190"/>
<text x="110" y="202" text-anchor="middle" class="d-small">3</text>
<line x1="170" y1="182" x2="170" y2="190"/>
<text x="170" y="202" text-anchor="middle" class="d-small">6</text>
<line x1="230" y1="182" x2="230" y2="190"/>
<text x="230" y="202" text-anchor="middle" class="d-small">9</text>
<line x1="290" y1="182" x2="290" y2="190"/>
<text x="290" y="202" text-anchor="middle" class="d-small">12</text>
<text x="170" y="220" text-anchor="middle" class="d-small d-soft">months</text>
<text x="170" y="36" text-anchor="middle" class="d-small d-red" data-step="4">A : B = 6,60,000 : 7,20,000 = 11 : 12</text>`,
      },
      explain: [
        'Profit is shared by capital × months. Draw each capital as a height and each stay as a width: the share is the area.',
        'A: ₹60,000 for 9 months, then ₹40,000 for 3 months = 5,40,000 + 1,20,000 = 6,60,000.',
        'B joins at month 3 with ₹80,000 for 9 months = 7,20,000.',
        'A : B = 66 : 72 = 11 : 12, so B gets 12/23 × 46,000 = **₹24,000**.',
      ],
    },
  ],
  comparisons: [
    {
      title: 'Mean vs third vs fourth proportional',
      items: ['Mean proportional', 'Third proportional', 'Fourth proportional'],
      rows: [
        { aspect: 'Given', values: ['a and b', 'a and b', 'a, b and c'] },
        { aspect: 'Proportion set up', values: ['a : x = x : b', 'a : b = b : x', 'a : b = c : x'] },
        { aspect: 'Formula', values: ['√(ab)', 'b²/a', 'bc/a'], key: true },
        { aspect: 'Example', values: ['9 and 25 → 15', '16 and 36 → 81', '4, 9, 12 → 27'] },
      ],
      reveal: 'All three come from "product of extremes = product of means". Only the place of the unknown changes.',
      whenToUse: ['The unknown sits in the middle twice.', 'The second number repeats as the middle term.', 'Three different numbers are given.'],
    },
    {
      title: 'Coins: count ratio vs value ratio',
      items: ['Count ratio', 'Value ratio'],
      rows: [
        { aspect: 'What it compares', values: ['How many coins of each kind', 'How much money each kind is worth'] },
        { aspect: 'Get it from the other', values: ['Value term ÷ coin value', 'Count term × coin value'], key: true },
        { aspect: '₹1, 50p, 25p', values: ['5 : 6 : 8', '5 : 3 : 2'] },
      ],
      reveal: 'The total is given in rupees, so split it by the value ratio. Then turn value back into a count.',
      whenToUse: ['The question asks "how many coins".', 'The question gives or asks a total in rupees.'],
    },
  ],
  shortcuts: [
    {
      pattern: 'Combine two ratios',
      example: 'A : B = 2 : 3 and B : C = 4 : 5. Find A : B : C.',
      options: ['8 : 12 : 15', '2 : 3 : 5', '8 : 12 : 10', '6 : 9 : 10'],
      answer: '8 : 12 : 15',
      ladder: [
        {
          name: 'Standard',
          steps: ['LCM of the B terms 3 and 4 is 12.', 'A : B = 8 : 12 and B : C = 12 : 15.', 'A : B : C = 8 : 12 : 15.'],
          seconds: 30,
        },
        { name: 'Shortcut', steps: ['ac : bc : bd = (2 × 4) : (3 × 4) : (3 × 5) = 8 : 12 : 15.'], seconds: 10 },
        { name: 'Option elimination', steps: ['B : C must reduce to 4 : 5.', 'Only 12 : 15 does.'], seconds: 5 },
      ],
    },
    {
      pattern: 'Ages after n years',
      example: "The ages of A and B are in the ratio 4 : 5. After 6 years the ratio will be 5 : 6. Find A's present age.",
      options: ['24 years', '20 years', '30 years', '28 years'],
      answer: '24 years',
      ladder: [
        { name: 'Standard', steps: ['(4x + 6)/(5x + 6) = 5/6.', '24x + 36 = 25x + 30, so x = 6.', 'A = 4 × 6 = 24.'], seconds: 40 },
        {
          name: 'Shortcut',
          steps: ['The gap is 1 part in both ratios, so parts do not rescale.', 'Each term rises by 1 part = 6 years, so A = 4 × 6 = 24.'],
          seconds: 10,
        },
        { name: 'Put values', steps: ['A = 24 gives B = 30. After 6 years: 30 : 36 = 5 : 6. It fits.'], seconds: 10 },
      ],
    },
    {
      pattern: 'Coins in a bag',
      example: 'A bag has ₹1, 50p and 25p coins in the ratio 5 : 6 : 8. The total is ₹210. How many 50p coins are there?',
      options: ['126', '105', '168', '120'],
      answer: '126',
      ladder: [
        { name: 'Standard', steps: ['Counts 5x, 6x, 8x. Value = 5x + 3x + 2x = 10x = 210.', 'x = 21, so 50p coins = 6 × 21 = 126.'], seconds: 40 },
        { name: 'Shortcut', steps: ['Value ratio 5 : 3 : 2, so 50p coins are worth 3/10 × 210 = ₹63.', '₹63 ÷ 0.5 = 126 coins.'], seconds: 15 },
        {
          name: 'Option elimination',
          steps: ['The count must be a multiple of 6: 126 or 120.', '120 gives x = 20 and a total of ₹200, so 126.'],
          seconds: 12,
        },
      ],
    },
  ],
  qa: [
    {
      q: 'How do you combine A : B and B : C quickly?',
      a: ['Multiply across: ac : bc : bd.', '2 : 3 and 4 : 5 give 8 : 12 : 15.'],
      tag: 'Shortcut',
    },
    {
      q: 'Formulas for mean, third and fourth proportional?',
      a: ['Mean of a and b: √(ab).', 'Third of a and b: b²/a.', 'Fourth of a, b, c: bc/a.'],
      tag: 'Asked often',
    },
    {
      q: "In partnership, what decides each partner's share?",
      a: ['Capital × time in months.', "Take out a working partner's salary first."],
      tag: 'Asked often',
    },
    {
      q: 'Ages are 3 : 5 today. Will they still be 3 : 5 after 10 years?',
      a: ['No. Both ages rise by 10, so the ratio moves towards 1.', 'Only the difference of ages stays fixed.'],
      tag: 'Trap',
    },
    {
      q: 'What is a duplicate ratio and a sub-duplicate ratio of a : b?',
      a: ['Duplicate: a² : b².', 'Sub-duplicate: √a : √b.', 'Triplicate: a³ : b³.'],
    },
    {
      q: 'How do you turn a coin count ratio into a value ratio?',
      a: ['Multiply each term by the coin value.', '₹1, 50p, 25p in 4 : 6 : 8 → 4 : 3 : 2.'],
      tag: 'Trap',
    },
    {
      q: 'If a : b = 3 : 4, what is (5a − 2b)/(3a + b)?',
      a: ['Put a = 3, b = 4.', '(15 − 8)/(9 + 4) = 7/13.'],
      tag: 'Shortcut',
    },
    {
      q: 'Why does partnership use months, not only capital?',
      a: ['Money kept in the business longer earns a bigger share.', '₹60,000 for 8 months = ₹40,000 for 12 months.'],
    },
    {
      q: 'Incomes are 3 : 4 and expenses 2 : 3. Each saves ₹5,000. What trick solves it?',
      a: ['Savings equal: 3x − 2y = 4x − 3y, so x = y.', "Then 3x − 2x = 5,000, so A's income = 15,000."],
    },
    {
      q: 'A ratio a : b becomes c : d when x is added to both. Formula for x?',
      a: ['x = (bc − ad)/(d − c).', 'Check by putting x back.'],
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: "Divide ₹1,540 between A and B in the ratio 5 : 6. What is A's share?",
      options: ['₹840', '₹700', '₹770', '₹660'],
      answer: 1,
      explain: 'A = 5/11 × 1,540 = ₹700.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'If A : B = 2 : 3 and B : C = 4 : 5, what is A : C?',
      options: ['8 : 15', '2 : 5', '3 : 5', '10 : 12'],
      answer: 0,
      explain: 'A : B : C = 8 : 12 : 15, so A : C = 8 : 15.',
      shortcut: 'A/C = A/B × B/C = 2/3 × 4/5 = 8/15.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Find the fourth proportional to 4, 9 and 12.',
      options: ['24', '30', '27', '36'],
      answer: 2,
      explain: '4 : 9 = 12 : x, so x = 9 × 12/4 = 27.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Find the mean proportional between 9 and 25.',
      options: ['17', '12', '16', '15'],
      answer: 3,
      explain: '√(9 × 25) = √225 = 15.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'What number must be subtracted from each of 15, 19, 27 and 37 so that the results are in proportion?',
      options: ['5', '7', '8', '6'],
      answer: 1,
      explain: '(15 − x)(37 − x) = (19 − x)(27 − x) gives 555 − 52x = 513 − 46x, so x = 7.',
      shortcut: 'Check 7: 8 : 12 = 20 : 30 = 2 : 3.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        "The present ages of a father and his son are in the ratio 7 : 2. After 10 years they will be in the ratio 9 : 4. What is the father's present age?",
      options: ['42 years', '35 years', '28 years', '40 years'],
      answer: 1,
      explain: '(7x + 10)/(2x + 10) = 9/4 gives 28x + 40 = 18x + 90, so x = 5. Father = 35.',
      shortcut: 'Try 35: son 10. After 10 years 45 : 20 = 9 : 4.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        "A starts a business with ₹40,000. After 4 months B joins with ₹60,000. The profit at the end of the year is ₹35,000. What is B's share?",
      options: ['₹21,000', '₹14,000', '₹15,000', '₹17,500'],
      answer: 3,
      explain: 'A: 40,000 × 12 = 4,80,000. B: 60,000 × 8 = 4,80,000. Ratio 1 : 1, so B gets ₹17,500.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A bag has ₹1, 50p and 25p coins in the ratio 2 : 3 : 4. The total value is ₹180. How many 25p coins are there?',
      options: ['120', '160', '80', '140'],
      answer: 1,
      explain: 'Value ratio = 2 : 1.5 : 1 = 4 : 3 : 2. 25p coins are worth 2/9 × 180 = ₹40, so 40 ÷ 0.25 = 160 coins.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: "The incomes of A and B are in the ratio 3 : 4 and their expenses are in the ratio 2 : 3. Each saves ₹5,000. What is A's income?",
      options: ['₹12,000', '₹20,000', '₹15,000', '₹18,000'],
      answer: 2,
      explain: "3x − 2y = 5,000 and 4x − 3y = 5,000. Subtracting gives x = y, so x = 5,000 and A's income = ₹15,000.",
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Find the third proportional to 16 and 36.',
      options: ['81', '72', '64', '54'],
      answer: 0,
      explain: '16 : 36 = 36 : x, so x = 36²/16 = 1,296/16 = 81.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'If a : b = 3 : 4, find (5a − 2b) : (3a + b).',
      options: ['7 : 12', '1 : 2', '7 : 13', '11 : 13'],
      answer: 2,
      explain: 'Put a = 3, b = 4: (15 − 8) : (9 + 4) = 7 : 13.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        'A and B start a business with ₹50,000 and ₹30,000. A, as the working partner, first gets 10% of the profit as salary, and the rest is shared in the ratio of capitals. The total profit is ₹48,000. How much does A get in all?',
      options: ['₹30,000', '₹27,000', '₹32,400', '₹31,800'],
      answer: 3,
      explain: 'Salary = 4,800. Rest 43,200 in 5 : 3: A gets 27,000. Total = 4,800 + 27,000 = ₹31,800.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        "A starts a business with ₹60,000. After 3 months B joins with ₹80,000. After 9 months from the start, A withdraws ₹20,000. The profit for the year is ₹46,000. What is B's share?",
      options: ['₹24,000', '₹22,000', '₹23,000', '₹25,000'],
      answer: 0,
      explain: 'A: 60,000 × 9 + 40,000 × 3 = 6,60,000. B: 80,000 × 9 = 7,20,000. Ratio 11 : 12, so B gets 12/23 × 46,000 = ₹24,000.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Three numbers are in the ratio 2 : 3 : 5 and the sum of their squares is 1,368. What is the largest number?',
      options: ['25', '30', '35', '36'],
      answer: 1,
      explain: '(4 + 9 + 25)x² = 38x² = 1,368, so x² = 36 and x = 6. Largest = 5 × 6 = 30.',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: "If the ratio of two people's ages is 3 : 5 today, it will still be 3 : 5 after 10 years.",
      answer: false,
      explain: 'Both ages rise by 10, so the ratio changes. Only the difference stays the same.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'The mean proportional between 4 and 16 is 8.',
      answer: true,
      explain: '√(4 × 16) = √64 = 8.',
    },
  ],
};

export default topic;
