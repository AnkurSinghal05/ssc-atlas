import type { Topic } from '@/content/types';

const CARS = 'Cars produced by a company (in thousands):\n2019: 120\n2020: 150\n2021: 135\n2022: 180\n2023: 200';

const EXPENSE =
  'Monthly expenditure of a family (total ₹60,000), shown as a pie chart:\nFood: 30%\nRent: 25%\nEducation: 15%\nTransport: 10%\nSavings: 20%';

const SALES = 'Sales of three companies (₹ crore):\nCompany | 2022 | 2023\nA | 240 | 300\nB | 320 | 360\nC | 280 | 336';

const STUDENTS =
  'A pie chart shows 1,800 students of a college by stream (central angles):\nArts: 72°\nScience: 108°\nCommerce: 90°\nEngineering: 54°\nOthers: 36°';

const MARKS = 'Marks of a student out of 100:\nMaths: 84\nScience: 76\nEnglish: 68\nHindi: 72\nSocial Science: 80';

const topic: Topic = {
  id: 'data-interpretation',
  title: 'Data interpretation',
  level: 'intermediate',
  masteryMinutes: 120,
  reviseMinutes: 40,
  priority: 'high',
  weightage: { tier1: 3, tier2: 3 },
  tags: ['DI', 'table', 'bar graph', 'pie chart', 'line graph', 'percentage', 'ratio', 'average', 'growth', 'approximation'],
  summary:
    'One chart, three to five linked questions. Almost every question is a percentage, a ratio, an average or a growth rate. Read the units first, then approximate hard.',
  patterns: [
    { name: 'Table: percentage change and percentage share', frequency: 'most', example: 'By what percent did production rise from 2019 to 2022?' },
    { name: 'Bar graph: ratio and difference', frequency: 'most', example: 'Ratio of sales of A in 2022 to sales of C in 2023?' },
    { name: 'Pie chart: degrees to values', frequency: 'often', example: 'Science has a 108° sector out of 1,800 students. How many students?' },
    { name: 'Average of a row or column', frequency: 'often', example: 'Average production over the five years?' },
    { name: 'Line graph: highest growth year', frequency: 'often', example: 'In which year was the rise over the previous year the highest?' },
    { name: 'One value as a percentage of another', frequency: 'often', example: 'Savings are what percent of spending on food?' },
    { name: 'Mixed charts or missing values', frequency: 'rare', example: 'A table gives totals and a pie gives shares. Find one part.' },
  ],
  keyPoints: [
    {
      title: 'Read the chart before the question',
      text: 'Check the units (thousands, lakhs, ₹ crore), whether values are absolute or percent, and what the total is. Most wrong answers come from a missed unit.',
      example: '"Production (in thousands)" with a value 120 means 1,20,000 cars.',
    },
    {
      title: 'Percentage change',
      text: 'Always divide by the earlier value. "Growth in 2022" means over 2021 unless the question says otherwise.',
      formula: '% change = (new − old)/old × 100',
      example: '120 → 180: 60/120 × 100 = **50%** rise.',
    },
    {
      title: 'Percentage share and "what percent of"',
      text: 'Share of one part = part over total × 100. "X is what percent of Y" puts Y in the denominator.',
      formula: 'X as % of Y = X/Y × 100',
      example: 'Savings 20% and food 30%: 20/30 × 100 = **66⅔%**.',
    },
    {
      title: 'Pie chart in degrees',
      text: 'The whole pie is 360° or 100%. So 1% = 3.6°. A sector of d degrees stands for d/360 of the total.',
      formula: 'value = d/360 × total; angle = percent × 3.6',
      example: '108° of 1,800 students: 108/360 × 1,800 = **540**.',
    },
    {
      title: 'Ratios and averages',
      text: 'Cancel common factors before dividing. For an average of many values, take a round base and average the deviations.',
      formula: 'average = base + (sum of deviations)/n',
      example: '120, 150, 135, 180, 200 with base 150: deviations −30, 0, −15, 30, 50 sum to 35, so average = 150 + 7 = **157**.',
    },
    {
      title: 'Approximate with fractions',
      text: 'Round to two significant figures and use the fraction table (1/8 = 12.5%, 1/6 = 16.67%, 1/7 = 14.28%). Options are usually far enough apart.',
      example: '4,987 out of 20,113 ≈ 5,000/20,000 = **25%**.',
    },
    {
      title: 'Compare growth rates, not growth amounts',
      text: 'The biggest jump in value is not always the biggest percentage jump. A rise of 45 on 135 (33%) beats a rise of 20 on 180 (11%).',
      example: 'Highest growth year: compare rise ÷ previous value for each year.',
    },
  ],
  comparisons: [
    {
      title: 'Pie chart in percent vs pie chart in degrees',
      items: ['Pie in percent', 'Pie in degrees'],
      rows: [
        { aspect: 'Whole pie', values: ['100%', '360°'] },
        { aspect: 'Value of a sector', values: ['p/100 × total', 'd/360 × total'], key: true },
        { aspect: 'Convert to the other', values: ['angle = p × 3.6', 'percent = d/3.6'] },
        { aspect: 'Example (total 1,800)', values: ['30% → 540', '108° → 540'] },
      ],
      reveal: 'Both are the same pie. Divide by 100 for percent, by 360 for degrees.',
      whenToUse: ['Shares are printed as percentages.', 'Shares are printed as central angles.'],
    },
    {
      title: 'Percent change vs share vs ratio',
      items: ['Percent change', 'Percent share', 'Ratio'],
      rows: [
        { aspect: 'Question words', values: ['"increase", "growth", "fall"', '"what percent of the total"', '"ratio of", "A : B"'] },
        { aspect: 'Denominator', values: ['The earlier value', 'The total', 'The second quantity'], key: true },
        { aspect: 'Example', values: ['150 → 200 = 33⅓%', '200 of 785 ≈ 25.5%', '150 : 200 = 3 : 4'] },
      ],
      reveal: 'All three are one division. What changes is the number you divide by.',
      whenToUse: [
        'Two values of the same thing at different times.',
        'One part of a known whole.',
        'Two separate quantities side by side.',
      ],
    },
  ],
  shortcuts: [
    {
      pattern: 'Highest growth over the previous year',
      example: 'Cars (thousands): 2019: 120, 2020: 150, 2021: 135, 2022: 180, 2023: 200. In which year was the percentage rise over the previous year the highest?',
      options: ['2020', '2021', '2022', '2023'],
      answer: '2022',
      ladder: [
        {
          name: 'Standard',
          steps: ['2020: 30/120 = 25%.', '2021: a fall.', '2022: 45/135 = 33.3%.', '2023: 20/180 = 11.1%. Highest is 2022.'],
          seconds: 60,
        },
        { name: 'Fractions', steps: ['2020: 30/120 = 1/4. 2022: 45/135 = 1/3. 2023: 20/180 = 1/9.', '1/3 is the biggest: 2022.'], seconds: 25 },
        {
          name: 'Option elimination',
          steps: ['2021 fell, so drop it.', '2023 rose only 20 on a big base, so drop it.', '1/3 beats 1/4: 2022.'],
          seconds: 15,
        },
      ],
    },
    {
      pattern: 'Pie chart degrees to a value',
      example: 'Out of 1,800 students, Science has a central angle of 108°. How many students study Science?',
      options: ['480', '540', '600', '360'],
      answer: '540',
      ladder: [
        { name: 'Standard', steps: ['Share = 108/360 = 0.3.', '0.3 × 1,800 = 540.'], seconds: 25 },
        { name: 'Shortcut', steps: ['1,800 students on 360° means 5 students per degree.', '108 × 5 = 540.'], seconds: 8 },
      ],
    },
    {
      pattern: 'Approximate a percentage',
      example: 'A state had 20,113 candidates and 4,987 passed. The pass percentage is closest to:',
      options: ['20%', '25%', '30%', '33%'],
      answer: '25%',
      ladder: [
        { name: 'Standard', steps: ['4,987 ÷ 20,113 by long division = 0.2479.', 'About 24.8%, closest to 25%.'], seconds: 60 },
        { name: 'Shortcut', steps: ['Round: 5,000/20,000 = 1/4 = 25%.'], seconds: 8 },
      ],
    },
  ],
  qa: [
    {
      q: 'What is the first thing to check on any chart?',
      a: ['The units and what the total is.', 'Values "in thousands" or "₹ crore" change the answer by a factor.'],
      tag: 'Trap',
    },
    {
      q: 'How many degrees does 1% of a pie chart take?',
      a: ['3.6°, since 100% = 360°.', 'So 25% = 90° and 20% = 72°.'],
      tag: 'Asked often',
    },
    {
      q: 'How do you find a value from a sector of d degrees?',
      a: ['d/360 × total.', 'Faster: find the value of 1° (total ÷ 360) first.'],
      tag: 'Shortcut',
    },
    {
      q: '"Percentage increase in 2023" without a base year: over which year?',
      a: ['Over the previous year, 2022.', 'Divide by the 2022 value.'],
      tag: 'Trap',
    },
    {
      q: 'Is the largest rise in value always the largest percentage rise?',
      a: ['No. The base matters.', '+45 on 135 is 33%, but +50 on 400 is only 12.5%.'],
      tag: 'Trap',
    },
    {
      q: 'A rises 80 → 100 and then falls 100 → 80. Are the two percentages equal?',
      a: ['No. The rise is 20/80 = 25%.', 'The fall is 20/100 = 20%.'],
    },
    {
      q: 'Quick way to average five values like 120, 150, 135, 180, 200?',
      a: ['Pick a base such as 150 and add the deviations: −30, 0, −15, 30, 50 = 35.', 'Average = 150 + 35/5 = 157.'],
      tag: 'Shortcut',
    },
    {
      q: 'How do you compare two fractions like 45/135 and 30/120 fast?',
      a: ['Cancel: 1/3 and 1/4.', 'Or cross-multiply: 45 × 120 = 5,400 > 30 × 135 = 4,050.'],
      tag: 'Shortcut',
    },
    {
      q: 'When is approximation safe in DI?',
      a: ['When the options differ by more than 2 to 3 percent.', 'If two options are close, calculate more exactly.'],
    },
    {
      q: 'In a ratio question, should you simplify the numbers first?',
      a: ['Yes. Cancel common factors before anything else.', '240 : 336 → divide by 48 → 5 : 7.'],
      tag: 'Asked often',
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: `${CARS}\n\nBy what percent did production rise from 2019 to 2022?`,
      options: ['40%', '45%', '50%', '60%'],
      answer: 2,
      explain: 'Rise = 180 − 120 = 60. 60/120 × 100 = 50%.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: `${CARS}\n\nWhat is the ratio of production in 2020 to production in 2023?`,
      options: ['3 : 4', '4 : 5', '2 : 3', '5 : 6'],
      answer: 0,
      explain: '150 : 200 = 3 : 4.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: `${CARS}\n\nWhat is the average yearly production (in thousands) over the five years?`,
      options: ['150', '155', '160', '157'],
      answer: 3,
      explain: 'Total = 120 + 150 + 135 + 180 + 200 = 785. 785 ÷ 5 = 157.',
      shortcut: 'Base 150, deviations −30, 0, −15, 30, 50 sum to 35; 150 + 7 = 157.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: `${CARS}\n\nIn which year was the percentage increase over the previous year the highest?`,
      options: ['2020', '2022', '2023', '2021'],
      answer: 1,
      explain: '2020: 30/120 = 25%. 2021: fall. 2022: 45/135 = 33.3%. 2023: 20/180 = 11.1%. Highest is 2022.',
      shortcut: 'Compare 1/4, 1/3 and 1/9. 1/3 wins.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: `${EXPENSE}\n\nWhat is the central angle of the sector for Rent?`,
      options: ['72°', '90°', '108°', '100°'],
      answer: 1,
      explain: '25% of 360° = 90°.',
      shortcut: '1% = 3.6°, so 25 × 3.6 = 90°.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: `${EXPENSE}\n\nBy how much does spending on Food exceed spending on Transport?`,
      options: ['₹10,000', '₹15,000', '₹12,000', '₹18,000'],
      answer: 2,
      explain: 'Gap = 30% − 10% = 20% of ₹60,000 = ₹12,000.',
      shortcut: 'Subtract the percentages first, then take one percentage of the total.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: `${EXPENSE}\n\nSavings are what percent of spending on Food?`,
      options: ['60%', '66⅔%', '150%', '75%'],
      answer: 1,
      explain: 'Savings ÷ Food = 20/30 × 100 = 66⅔%.',
      shortcut: 'Same total, so use the percentages directly: 20/30 = 2/3.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: `${EXPENSE}\n\nIf the total grows to ₹72,000 with the same shares, how much more is spent on Education?`,
      options: ['₹1,200', '₹1,500', '₹2,000', '₹1,800'],
      answer: 3,
      explain: 'Education is 15%. The total rose by ₹12,000, so Education rose by 15% of ₹12,000 = ₹1,800.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: `${SALES}\n\nWhich company had the highest percentage growth in sales from 2022 to 2023?`,
      options: ['B', 'C', 'A', 'All equal'],
      answer: 2,
      explain: 'A: 60/240 = 25%. B: 40/320 = 12.5%. C: 56/280 = 20%. A is highest.',
      shortcut: 'A: 1/4, B: 1/8, C: 1/5. 1/4 is the largest.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: `${SALES}\n\nWhat is the ratio of sales of A in 2022 to sales of C in 2023?`,
      options: ['5 : 7', '4 : 5', '5 : 6', '6 : 7'],
      answer: 0,
      explain: '240 : 336. Divide both by 48: 5 : 7.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: `${SALES}\n\nTotal sales of the three companies in 2023 are about what percent more than in 2022?`,
      options: ['15.2%', '16.4%', '18.6%', '20.5%'],
      answer: 2,
      explain: '2022 total = 840. 2023 total = 996. Rise = 156/840 × 100 ≈ 18.57%.',
      shortcut: '156/840 is a bit less than 160/840 ≈ 19%. Only 18.6% fits.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: `${STUDENTS}\n\nHow many students study Science?`,
      options: ['480', '600', '360', '540'],
      answer: 3,
      explain: '108/360 × 1,800 = 540.',
      shortcut: '1,800 ÷ 360 = 5 students per degree. 108 × 5 = 540.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: `${STUDENTS}\n\nArts and Commerce students together are what percent more than Science students?`,
      options: ['40%', '45%', '50%', '60%'],
      answer: 2,
      explain: 'Arts + Commerce = 72° + 90° = 162°. Science = 108°. (162 − 108)/108 × 100 = 50%.',
      shortcut: 'Work in degrees; no need to convert to students. 54/108 = 1/2.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: `${MARKS}\n\nThe student takes a sixth subject. What must he score in it to raise his average to 78?`,
      options: ['84', '86', '88', '90'],
      answer: 2,
      explain: 'Old total = 84 + 76 + 68 + 72 + 80 = 380. Needed total = 6 × 78 = 468. Sixth score = 468 − 380 = 88.',
      shortcut: 'Old average 76. The new subject must cover its own 78 plus 2 for each of the 5 old subjects: 78 + 10 = 88.',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'In a pie chart, a sector of 72° stands for 20% of the total.',
      answer: true,
      explain: '72/360 = 1/5 = 20%.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'If a value rises from 80 to 100 and then falls back to 80, the percentage rise equals the percentage fall.',
      answer: false,
      explain: 'Rise = 20/80 = 25%. Fall = 20/100 = 20%. The bases differ.',
    },
  ],
};

export default topic;
