import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'statistics-basics',
  title: 'Mean, median, mode and dispersion',
  level: 'beginner',
  masteryMinutes: 60,
  reviseMinutes: 20,
  priority: 'medium',
  tags: ['mean', 'median', 'mode', 'range', 'variance', 'standard deviation', 'empirical relation', 'combined mean'],
  summary:
    'Three averages (mean, median, mode) and three spreads (range, variance, standard deviation). CGL asks direct calculations, the empirical relation and what happens when every value is shifted or scaled.',
  patterns: [
    { name: 'Mean, median or mode of a small data set', frequency: 'most', example: 'Find the median of 7, 3, 9, 5, 11, 2.' },
    { name: 'Empirical relation', frequency: 'often', example: 'Mean 30, median 27. Find the mode.' },
    { name: 'Missing value or corrected mean', frequency: 'often', example: 'A value 43 was read as 34 in a mean of 10 numbers. Correct mean?' },
    { name: 'Combined mean of two groups', frequency: 'often', example: '30 students average 60 and 20 average 70. Class average?' },
    { name: 'Variance and standard deviation', frequency: 'often', example: 'Find the variance of 2, 4, 6, 8, 10.' },
    { name: 'Effect of adding or multiplying every value', frequency: 'rare', example: 'SD is 4. Each value is tripled and 7 added. New SD?' },
  ],
  keyPoints: [
    {
      title: 'Mean',
      text: 'Add all values and divide by how many there are. For a frequency table, weight each value by its frequency.',
      formula: 'mean = Σx/n; weighted mean = (Σfx)/(Σf)',
      example: '12, 15, 18, 21, 24: 90/5 = **18**. For evenly spaced values, mean = (first + last)/2.',
    },
    {
      title: 'Median',
      text: 'Sort the data first. For odd n, the median is the middle value, at position (n + 1)/2. For even n, it is the average of the two middle values.',
      formula: 'median position = (n + 1)/2',
      example: '2, 3, 5, 7, 9, 11: (5 + 7)/2 = **6**.',
    },
    {
      title: 'Mode and the empirical relation',
      text: 'The mode is the value that occurs most often. For a moderately skewed distribution, mode, median and mean are linked.',
      formula: 'Mode = 3 Median − 2 Mean',
      example: 'Mean 30, median 27: mode = 81 − 60 = **21**.',
    },
    {
      title: 'Range, variance and standard deviation',
      text: 'Range = largest − smallest. Variance is the mean of squared deviations from the mean. SD is the square root of variance.',
      formula: 'σ² = (Σ(x − x̄)²)/n = (Σx²)/n − x̄²; σ = √σ²',
      example: '2, 4, 6, 8, 10: mean 6, squared deviations 16, 4, 0, 4, 16. Variance = 40/5 = **8**, SD = 2√2.',
    },
    {
      title: 'Corrected mean and missing value',
      text: 'Change in total ÷ n = change in mean. For a missing value, required total minus known values.',
      formula: 'new mean = old mean + (correct − wrong)/n',
      example: 'Mean of 10 numbers 25, and 43 was read as 34: 25 + 9/10 = **25.9**.',
    },
    {
      title: 'Combined mean',
      text: 'Weight each group mean by its size. The answer always lies between the two group means, closer to the bigger group.',
      formula: 'combined mean = (n₁x̄₁ + n₂x̄₂)/(n₁ + n₂)',
      example: '30 at 60 and 20 at 70: (1,800 + 1,400)/50 = **64**.',
    },
    {
      title: 'First n natural numbers',
      text: 'Useful ready values for 1, 2, 3, …, n.',
      formula: 'mean = (n + 1)/2; variance = (n² − 1)/12',
      example: 'First 10: mean 5.5, variance 99/12 = **8.25**.',
    },
    {
      title: 'Shifting and scaling the data',
      text: 'Adding k to every value adds k to mean, median and mode but leaves range, variance and SD unchanged. Multiplying by k multiplies the averages, range and SD by k and the variance by k².',
      example: 'SD 4, then ×3 and +7: new SD = 3 × 4 = **12**.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'Mode, median and mean in a skewed spread',
      figure: {
        viewBox: '0 0 320 242',
        svg: `
<path d="M30,178 C95,176 115,50 150,50 C185,50 215,150 300,174 L300,180 L30,180 Z" class="d-fill-blue" data-step="1"/>
<path d="M30,178 C95,176 115,50 150,50 C185,50 215,150 300,174" class="d-blue" data-step="1"/>
<line x1="20" y1="180" x2="305" y2="180"/>
<line x1="150" y1="50" x2="150" y2="180" class="d-green" data-step="2"/>
<text x="150" y="198" text-anchor="middle" class="d-green" data-step="2">21</text>
<line x1="210" y1="107.6" x2="210" y2="180" class="d-soft d-dash" data-step="3"/>
<text x="210" y="198" text-anchor="middle" data-step="3">27</text>
<line x1="240" y1="139.6" x2="240" y2="180" class="d-red" data-step="3"/>
<text x="240" y="198" text-anchor="middle" class="d-red" data-step="3">30</text>
<text x="150" y="40" text-anchor="middle" class="d-small d-green" data-step="2">mode</text>
<text x="206" y="172" text-anchor="end" class="d-small" data-step="3">median</text>
<text x="246" y="133.6" class="d-small d-red" data-step="3">mean</text>
<line x1="210" y1="212" x2="240" y2="212" class="d-red" data-step="4"/><path d="M235.7,214.5 L240,212 L235.7,209.5" class="d-red" data-step="4"/><path d="M214.3,209.5 L210,212 L214.3,214.5" class="d-red" data-step="4"/>
<text x="248" y="216" class="d-small d-red" data-step="4">3</text>
<line x1="150" y1="230" x2="240" y2="230" class="d-red" data-step="4"/><path d="M235.7,232.5 L240,230 L235.7,227.5" class="d-red" data-step="4"/><path d="M154.3,227.5 L150,230 L154.3,232.5" class="d-red" data-step="4"/>
<text x="248" y="234" class="d-small d-red" data-step="4">9 = 3 × 3</text>`,
        caption: 'Mean 30, median 27',
      },
      explain: [
        'Most values bunch on the left and a long tail stretches right: the data is skewed.',
        'The mode is the most common value, right under the peak: 21.',
        'The tail drags the mean furthest out (30). The median, the middle value, sits between (27).',
        'Mode = 3 × median − 2 × mean = 81 − 60 = **21**. Put another way, mean − mode (9) is 3 times mean − median (3).',
      ],
    },
  ],
  comparisons: [
    {
      title: 'Mean vs median vs mode',
      items: ['Mean', 'Median', 'Mode'],
      rows: [
        { aspect: 'What it is', values: ['Sum ÷ count', 'Middle value after sorting', 'Most frequent value'] },
        { aspect: 'Affected by extreme values', values: ['Yes, strongly', 'Hardly', 'No'], key: true },
        { aspect: 'Can be absent or repeated', values: ['Always exactly one', 'Always exactly one', 'May be none or several'] },
        { aspect: 'Data: 2, 3, 3, 4, 18', values: ['30/5 = 6', '3', '3'] },
        { aspect: 'Symmetric data', values: ['All three equal', 'All three equal', 'All three equal'] },
      ],
      reveal: 'One big value (18) drags the mean to 6 while median and mode stay at 3. That is why incomes use the median.',
      whenToUse: [
        'Values are balanced with no outliers, or you need the total.',
        'Data has outliers, such as incomes or house prices.',
        'You want the most common item, such as a shoe size.',
      ],
    },
    {
      title: 'Adding k vs multiplying by k',
      items: ['Add k to every value', 'Multiply every value by k'],
      rows: [
        { aspect: 'Mean, median, mode', values: ['Each increases by k', 'Each multiplied by k'] },
        { aspect: 'Range and SD', values: ['No change', 'Multiplied by |k|'], key: true },
        { aspect: 'Variance', values: ['No change', 'Multiplied by k²'] },
      ],
      reveal: 'Adding moves the whole data set without spreading it. Multiplying stretches it.',
      whenToUse: ['Questions that add or subtract a constant.', 'Questions that double, triple or convert units.'],
    },
  ],
  shortcuts: [
    {
      pattern: 'Corrected mean after a misread value',
      example: 'The mean of 10 numbers is 25. Later it was found that 43 was read as 34. What is the correct mean?',
      options: ['25.9', '24.1', '25.09', '26.8'],
      answer: '25.9',
      ladder: [
        { name: 'Standard', steps: ['Wrong total = 250.', 'Correct total = 250 − 34 + 43 = 259.', 'Mean = 259 ÷ 10 = 25.9.'], seconds: 30 },
        { name: 'Shortcut', steps: ['Error = 43 − 34 = +9, spread over 10 values: +0.9.', '25 + 0.9 = 25.9.'], seconds: 8 },
        {
          name: 'Option elimination',
          steps: [
            'The true value is larger, so the mean rises: drop 24.1.',
            'A rise of 9 over 10 values is below 1: drop 26.8. 25.09 is too small a shift.',
          ],
          seconds: 10,
        },
      ],
    },
    {
      pattern: 'Mode from mean and median',
      example: 'For a distribution, mean = 30 and median = 27. Find the mode.',
      options: ['21', '24', '33', '36'],
      answer: '21',
      ladder: [
        { name: 'Standard', steps: ['Mode = 3 Median − 2 Mean.', '3 × 27 − 2 × 30 = 81 − 60 = 21.'], seconds: 15 },
        { name: 'Shortcut', steps: ['Mode − Median = 2 × (Median − Mean) = 2 × (−3) = −6.', 'Mode = 27 − 6 = 21.'], seconds: 8 },
      ],
    },
    {
      pattern: 'Combined mean of two groups',
      example: '30 students average 60 marks and 20 students average 70. What is the class average?',
      options: ['64', '65', '66', '62'],
      answer: '64',
      ladder: [
        { name: 'Standard', steps: ['Totals: 30 × 60 = 1,800 and 20 × 70 = 1,400.', '3,200 ÷ 50 = 64.'], seconds: 30 },
        {
          name: 'Shortcut',
          steps: ['Gap between means = 10, split in the ratio 20 : 50 from the first group.', '60 + 10 × 20/50 = 64.'],
          seconds: 12,
        },
        {
          name: 'Option elimination',
          steps: [
            'Answer lies between 60 and 70, closer to 60 (the bigger group).',
            'Below 65: 62 or 64. 62 would need a 4 : 1 split, not 3 : 2. So 64.',
          ],
          seconds: 12,
        },
      ],
    },
  ],
  qa: [
    {
      q: 'What must you do before finding the median?',
      a: ['Sort the data.', 'Then take the middle value (odd n) or the average of the two middle values (even n).'],
      tag: 'Trap',
    },
    {
      q: 'State the empirical relation.',
      a: ['Mode = 3 Median − 2 Mean.', 'It holds for moderately skewed data.'],
      tag: 'Asked often',
    },
    {
      q: 'Which average is most affected by one very large value?',
      a: ['The mean.', 'The median and mode barely move.'],
    },
    {
      q: 'How do you correct a mean when one value was misread?',
      a: ['Add (correct − wrong)/n to the old mean.', 'Mean 25 of 10 numbers, 43 read as 34: 25 + 0.9 = 25.9.'],
      tag: 'Shortcut',
    },
    {
      q: 'What happens to the SD if 5 is added to every value?',
      a: ['Nothing. SD, variance and range stay the same.', 'Only the mean, median and mode rise by 5.'],
      tag: 'Trap',
    },
    {
      q: 'What happens to the variance if every value is doubled?',
      a: ['It becomes 4 times, since variance scales by k².', 'SD doubles.'],
      tag: 'Trap',
    },
    {
      q: 'Mean and variance of the first n natural numbers?',
      a: ['Mean = (n + 1)/2.', 'Variance = (n² − 1)/12.'],
      tag: 'Shortcut',
    },
    {
      q: 'Relation between variance and standard deviation?',
      a: ['SD = √variance.', 'Variance 8 gives SD 2√2 ≈ 2.83.'],
    },
    {
      q: 'Can a data set have more than one mode?',
      a: ['Yes. 1, 2, 2, 3, 3 has modes 2 and 3 (bimodal).', 'If every value appears once, there is no mode.'],
    },
    {
      q: 'In a symmetric distribution, how are mean, median and mode related?',
      a: ['All three are equal.', 'Skew pulls the mean towards the long tail.'],
      tag: 'Asked often',
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'What is the mean of 12, 15, 18, 21 and 24?',
      options: ['17', '18', '19', '20'],
      answer: 1,
      explain: 'Sum = 90. 90 ÷ 5 = 18.',
      shortcut: 'Evenly spaced: mean = middle value = 18.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'What is the median of 7, 3, 9, 5, 11, 2?',
      options: ['5', '7', '6', '8'],
      answer: 2,
      explain: 'Sorted: 2, 3, 5, 7, 9, 11. Median = (5 + 7)/2 = 6.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'What is the mode of 4, 6, 4, 7, 6, 4, 8?',
      options: ['4', '6', '7', '5'],
      answer: 0,
      explain: '4 appears three times, more than any other value.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'What is the range of 23, 41, 17, 56, 38?',
      options: ['33', '39', '18', '15'],
      answer: 1,
      explain: 'Range = 56 − 17 = 39.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'For a distribution, the mean is 30 and the median is 27. What is the mode?',
      options: ['24', '33', '36', '21'],
      answer: 3,
      explain: 'Mode = 3 × 27 − 2 × 30 = 81 − 60 = 21.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The mean of 10 numbers is 25. It was later found that 43 was wrongly read as 34. What is the correct mean?',
      options: ['24.1', '25.09', '25.9', '26.8'],
      answer: 2,
      explain: 'Correct total = 250 + 9 = 259. Mean = 25.9.',
      shortcut: 'Error +9 over 10 values: +0.9.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'What is the variance of 2, 4, 6, 8 and 10?',
      options: ['8', '4', '6', '2√2'],
      answer: 0,
      explain: 'Mean 6. Squared deviations 16, 4, 0, 4, 16 sum to 40. Variance = 40/5 = 8.',
      shortcut: 'This is 2 × (1, 2, 3, 4, 5); variance of 1 to 5 is (25 − 1)/12 = 2, times 2² = 8.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'In a class, 30 students average 60 marks and 20 students average 70 marks. What is the class average?',
      options: ['65', '64', '66', '62'],
      answer: 1,
      explain: '(30 × 60 + 20 × 70)/50 = 3,200/50 = 64.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The standard deviation of a data set is 4. Each value is multiplied by 3 and then 7 is added. What is the new standard deviation?',
      options: ['19', '12', '36', '7'],
      answer: 1,
      explain: 'Multiplying by 3 makes SD 12. Adding 7 does not change SD.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The mean of 5, 8, x, 12 and 15 is 10. What is x?',
      options: ['8', '12', '9', '10'],
      answer: 3,
      explain: 'Total needed = 50. Known values sum to 40. x = 10.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'What is the median of the first ten prime numbers?',
      options: ['11', '13', '12', '11.5'],
      answer: 2,
      explain: 'Primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29. Middle two are 11 and 13. Median = 12.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'What is the variance of the first 10 natural numbers?',
      options: ['10', '8.25', '5.5', '2.87'],
      answer: 1,
      explain:
        'Mean = 5.5. Mean of the squares = (1² + 2² + … + 10²)/10 = 385/10 = 38.5. Variance = mean of squares − (mean)² = 38.5 − 30.25 = 8.25. The ready formula (n² − 1)/12 = 99/12 gives the same.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        'The average of 11 numbers is 50. The average of the first six is 49 and the average of the last six is 52. What is the sixth number?',
      options: ['50', '54', '52', '56'],
      answer: 3,
      explain: 'First six total 294, last six total 312. Together they count the sixth number twice: 294 + 312 − 550 = 56.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'The mean of 20 observations is 40. If each observation is increased by 5 and then halved, what is the new mean?',
      options: ['22.5', '25', '20', '45'],
      answer: 0,
      explain: 'Mean becomes 40 + 5 = 45, then 45 ÷ 2 = 22.5.',
      shortcut: 'Apply to the mean exactly what was done to each value.',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'Adding 5 to every value in a data set changes its standard deviation.',
      answer: false,
      explain: 'Adding a constant shifts every value by the same amount; the spread, and so the SD, stays the same.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'For a perfectly symmetric distribution, the mean, median and mode are equal.',
      answer: true,
      explain: 'Symmetry puts the peak and the balance point at the centre. Check: 3 Median − 2 Mean = Mean.',
    },
  ],
};

export default topic;
