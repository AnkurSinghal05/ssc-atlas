import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'mixture-alligation',
  title: 'Mixture and alligation',
  level: 'intermediate',
  masteryMinutes: 60,
  reviseMinutes: 20,
  priority: 'medium',
  weightage: { tier1: 0.5, tier2: 1 },
  tags: ['alligation', 'mixture', 'mean price', 'replacement', 'milk and water', 'weighted average'],
  summary:
    'Alligation is a fast way to find the ratio in which two things are mixed to hit a mean value. It works for prices, concentrations, marks and profit percentages. Repeated replacement has its own formula.',
  patterns: [
    { name: 'Mix two kinds to get a mean price', frequency: 'most', example: 'Rice at ₹30 and ₹45 per kg: in what ratio to get ₹36 per kg?' },
    { name: 'Removal and replacement', frequency: 'most', example: '4 L of a 40 L can of milk is replaced by water 3 times. Milk left?' },
    { name: 'Add water to change the ratio', frequency: 'often', example: '60 L of milk and water is 2 : 1. How much water makes it 1 : 2?' },
    { name: 'Mixing with a profit', frequency: 'often', example: 'Tea at ₹60 and ₹75 per kg is sold at ₹80 with 25% profit. Ratio?' },
    {
      name: 'Part sold at one profit, rest at another',
      frequency: 'often',
      example: '50 kg sold partly at 8% and partly at 18% profit, overall 14%. Split?',
    },
    { name: 'Mixing two mixtures', frequency: 'rare', example: 'Vessels with milk : water 3 : 1 and 5 : 3 are mixed to get 2 : 1. Ratio?' },
  ],
  keyPoints: [
    {
      title: 'The alligation rule',
      text: 'Mix a cheaper item (price c) with a dearer one (price d) to get a mean price m. The quantities are in the ratio of the opposite differences.',
      formula: 'cheaper : dearer = (d − m) : (m − c)',
      example: '₹30 and ₹45 to get ₹36: (45 − 36) : (36 − 30) = 9 : 6 = **3 : 2**.',
    },
    {
      title: 'Mean price from a known ratio',
      text: 'Going the other way is a weighted average.',
      formula: 'm = (c × q₁ + d × q₂)/(q₁ + q₂)',
      example: '20 kg at ₹30 and 30 kg at ₹40: (600 + 1,200)/50 = **₹36** per kg.',
    },
    {
      title: 'Alligation works for any weighted average',
      text: 'Replace price with any "per unit" value: percent concentration, average marks, speed, profit %. Water is a liquid with price 0.',
      example: 'Boys average 70, girls 80, class 76: boys : girls = (80 − 76) : (76 − 70) = **2 : 3**.',
    },
    {
      title: 'Removal and replacement',
      text: 'From V litres of a liquid, x litres are taken out and replaced by water, n times. Each round keeps the fraction (1 − x/V) of the liquid.',
      formula: 'left = V × (1 − x/V)ⁿ',
      example: '40 L, 4 L replaced 3 times: 40 × (9/10)³ = **29.16 L** of milk.',
    },
    {
      title: 'Adding water or milk to change a ratio',
      text: 'The part you do not add stays fixed. Rescale the target ratio so that part matches, then read off how much to add.',
      example: '60 L at 2 : 1 is 40 L milk, 20 L water. For 1 : 2 water must be 80 L, so add **60 L**.',
    },
    {
      title: 'Mixing with a profit',
      text: 'First find the cost price of the mixture: CP = SP × 100/(100 + profit %). Then alligate with that mean cost.',
      formula: 'mean CP = SP × 100/(100 + gain %)',
      example: 'SP ₹80 at 25% gain: mean CP = 64. Teas at ₹60 and ₹75: (75 − 64) : (64 − 60) = **11 : 4**.',
    },
    {
      title: 'Mixing two mixtures',
      text: 'Use the fraction of one liquid in each mixture as its "price" and alligate the fractions.',
      example:
        'Milk is 3/4 in the first, 5/8 in the second, 2/3 wanted: second : first = (3/4 − 2/3) : (2/3 − 5/8) = 1/12 : 1/24 = 2 : 1. So first : second = **1 : 2**.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'The alligation cross',
      figure: {
        viewBox: '0 0 320 225',
        svg: `
<text x="60" y="22" text-anchor="middle" class="d-small d-soft" data-step="1">cheaper</text>
<text x="60" y="45" text-anchor="middle" data-step="1">₹30</text>
<text x="260" y="22" text-anchor="middle" class="d-small d-soft" data-step="1">dearer</text>
<text x="260" y="45" text-anchor="middle" data-step="1">₹45</text>
<text x="160" y="116" text-anchor="middle" class="d-blue" data-step="2">₹36</text>
<text x="160" y="134" text-anchor="middle" class="d-small d-soft" data-step="2">mean</text>
<line x1="240" y1="55" x2="182.4" y2="94.6" class="d-red" data-step="3"/>
<line x1="137.6" y1="125.4" x2="80" y2="165" class="d-red" data-step="3"/>
<text x="60" y="186" text-anchor="middle" class="d-red" data-step="3">45 − 36 = 9</text>
<line x1="80" y1="55" x2="137.6" y2="94.6" class="d-green" data-step="4"/>
<line x1="182.4" y1="125.4" x2="240" y2="165" class="d-green" data-step="4"/>
<text x="260" y="186" text-anchor="middle" class="d-green" data-step="4">36 − 30 = 6</text>
<text x="160" y="214" text-anchor="middle" data-step="5">cheaper : dearer = 9 : 6 = 3 : 2</text>`,
        caption: 'Always big minus small along each diagonal',
      },
      explain: [
        'Write the two prices at the top: cheaper ₹30 on the left, dearer ₹45 on the right.',
        'Write the mean price you want, ₹36, in the middle.',
        'Subtract along one diagonal: 45 − 36 = 9. It lands under the cheaper one.',
        'Subtract along the other: 36 − 30 = 6. It lands under the dearer one.',
        'Read across the bottom: cheaper : dearer = 9 : 6 = **3 : 2**.',
      ],
    },
    {
      type: 'diagram',
      title: 'A weighted average is a balance point',
      figure: {
        viewBox: '0 0 320 205',
        svg: `
<line x1="24" y1="120" x2="296" y2="120"/>
<line x1="87.8" y1="114" x2="87.8" y2="126" data-step="1"/>
<text x="87.8" y="142" text-anchor="middle" data-step="1">70</text>
<text x="87.8" y="158" text-anchor="middle" class="d-small d-soft" data-step="1">boys</text>
<line x1="174.4" y1="114" x2="174.4" y2="126" data-step="1"/>
<text x="174.4" y="142" text-anchor="middle" data-step="1">76</text>
<text x="174.4" y="158" text-anchor="middle" class="d-small d-soft" data-step="1">class</text>
<line x1="232.2" y1="114" x2="232.2" y2="126" data-step="1"/>
<text x="232.2" y="142" text-anchor="middle" data-step="1">80</text>
<text x="232.2" y="158" text-anchor="middle" class="d-small d-soft" data-step="1">girls</text>
<rect x="79.8" y="104" width="16" height="16" class="d-fill-blue" data-step="4"/>
<rect x="79.8" y="104" width="16" height="16" class="d-thin" data-step="4"/>
<rect x="79.8" y="88" width="16" height="16" class="d-fill-blue" data-step="4"/>
<rect x="79.8" y="88" width="16" height="16" class="d-thin" data-step="4"/>
<rect x="224.2" y="104" width="16" height="16" class="d-fill-pink" data-step="4"/>
<rect x="224.2" y="104" width="16" height="16" class="d-thin" data-step="4"/>
<rect x="224.2" y="88" width="16" height="16" class="d-fill-pink" data-step="4"/>
<rect x="224.2" y="88" width="16" height="16" class="d-thin" data-step="4"/>
<rect x="224.2" y="72" width="16" height="16" class="d-fill-pink" data-step="4"/>
<rect x="224.2" y="72" width="16" height="16" class="d-thin" data-step="4"/>
<text x="87.8" y="80" text-anchor="middle" class="d-blue" data-step="4">2</text>
<text x="232.2" y="64" text-anchor="middle" class="d-red" data-step="4">3</text>
<circle cx="174.4" cy="120" r="5" class="d-dot d-red" data-step="3"/>
<text x="174.4" y="104" text-anchor="middle" class="d-small d-red" data-step="3">balance</text>
<line x1="87.8" y1="178" x2="174.4" y2="178" class="d-blue" data-step="2"/><path d="M169.2,181 L174.4,178 L169.2,175" class="d-blue" data-step="2"/><path d="M93,175 L87.8,178 L93,181" class="d-blue" data-step="2"/>
<text x="131.1" y="196" text-anchor="middle" class="d-blue" data-step="2">6</text>
<line x1="174.4" y1="178" x2="232.2" y2="178" class="d-red" data-step="2"/><path d="M227,181 L232.2,178 L227,175" class="d-red" data-step="2"/><path d="M179.6,175 L174.4,178 L179.6,181" class="d-red" data-step="2"/>
<text x="203.3" y="196" text-anchor="middle" class="d-red" data-step="2">4</text>`,
      },
      explain: [
        'Put the three averages on one line: boys 70, class 76, girls 80.',
        'Measure from the class average: boys are 6 away, girls only 4 away.',
        'The class average balances the two groups, so it sits nearer the bigger group. Swap the distances: boys : girls = 4 : 6.',
        'So boys : girls = **2 : 3**. Check: (2 × 70 + 3 × 80)/5 = 380/5 = 76.',
      ],
    },
  ],
  comparisons: [
    {
      title: 'Alligation vs removal and replacement',
      items: ['Alligation (mixing once)', 'Removal and replacement'],
      rows: [
        { aspect: 'What happens', values: ['Two things are mixed once', 'Part of the mixture is taken out and topped up, again and again'] },
        { aspect: 'Tool', values: ['(d − m) : (m − c)', 'V × (1 − x/V)ⁿ'], key: true },
        { aspect: 'Answer is', values: ['A ratio of quantities', 'The quantity of the original liquid left'] },
        { aspect: 'Example', values: ['₹30 and ₹45 to get ₹36: 3 : 2', '40 L, 4 L out 3 times: 29.16 L'] },
      ],
      reveal: 'Alligation is one weighted average. Replacement is a repeated percentage fall, like depreciation: each round keeps the same fraction.',
      whenToUse: [
        'Two items or two strengths are mixed to reach a target value.',
        'The words "taken out and replaced" appear, especially more than once.',
      ],
    },
  ],
  shortcuts: [
    {
      pattern: 'Mix two kinds to reach a mean price',
      example: 'In what ratio must rice at ₹30 per kg be mixed with rice at ₹45 per kg to get a mixture worth ₹36 per kg?',
      options: ['3 : 2', '2 : 3', '1 : 2', '3 : 1'],
      answer: '3 : 2',
      ladder: [
        { name: 'Standard', steps: ['x kg at 30 and y kg at 45: 30x + 45y = 36(x + y).', '9y = 6x, so x : y = 3 : 2.'], seconds: 40 },
        { name: 'Shortcut', steps: ['(45 − 36) : (36 − 30) = 9 : 6 = 3 : 2.'], seconds: 10 },
        {
          name: 'Option elimination',
          steps: ['36 is nearer 30, so there is more of the cheaper rice: 3 : 2 or 3 : 1.', '3 : 1 gives (90 + 45)/4 = 33.75, not 36. So 3 : 2.'],
          seconds: 15,
        },
      ],
    },
    {
      pattern: 'Repeated removal and replacement',
      example: 'A can holds 40 L of milk. 4 L is taken out and replaced with water. This is done 3 times in all. How much milk is left?',
      options: ['29.16 L', '28 L', '30.2 L', '27.5 L'],
      answer: '29.16 L',
      ladder: [
        { name: 'Standard', steps: ['Each round removes 1/10 of the milk left.', '40 → 36 → 32.4 → 29.16 L.'], seconds: 45 },
        { name: 'Shortcut', steps: ['40 × (1 − 4/40)³ = 40 × 0.729 = 29.16 L.'], seconds: 15 },
        {
          name: 'Option elimination',
          steps: ['28 L is the trap (3 × 4 L of pure milk removed).', 'Later rounds remove some water too, so more than 28 L is left: 29.16 L.'],
          seconds: 10,
        },
      ],
    },
    {
      pattern: 'Add water to change the ratio',
      example: '60 L of a mixture has milk and water in the ratio 2 : 1. How much water must be added to make the ratio 1 : 2?',
      options: ['60 L', '40 L', '20 L', '80 L'],
      answer: '60 L',
      ladder: [
        { name: 'Standard', steps: ['Milk 40 L, water 20 L.', '40 : (20 + w) = 1 : 2 gives 20 + w = 80, so w = 60 L.'], seconds: 35 },
        {
          name: 'Shortcut',
          steps: ['Milk stays 2 parts. 1 : 2 = 2 : 4, so water goes from 1 part to 4 parts.', 'Add 3 parts; 1 part = 20 L, so add 60 L.'],
          seconds: 15,
        },
      ],
    },
  ],
  qa: [
    {
      q: 'State the rule of alligation.',
      a: ['cheaper : dearer = (d − m) : (m − c).', 'Write the two prices on top, the mean in the middle, and cross-subtract.'],
      tag: 'Asked often',
    },
    {
      q: 'What "price" does water have in an alligation question?',
      a: ['Zero.', 'Milk at ₹40 and water mixed to get ₹32: water : milk = (40 − 32) : (32 − 0) = 1 : 4.'],
      tag: 'Trap',
    },
    {
      q: 'Formula for milk left after n rounds of removal and replacement?',
      a: ['V × (1 − x/V)ⁿ.', 'x litres removed from a V litre vessel each time.'],
      tag: 'Asked often',
    },
    {
      q: '10 L is taken from 100 L of milk and replaced with water, twice. Is 80 L of milk left?',
      a: ['No. 100 × 0.9 × 0.9 = 81 L.', 'The second removal takes out some water too.'],
      tag: 'Trap',
    },
    {
      q: 'The mixture is sold at a profit. What mean price do you alligate with?',
      a: ['The mean cost price, not the selling price.', 'Mean CP = SP × 100/(100 + gain %).'],
      tag: 'Trap',
    },
    {
      q: 'How do you use alligation for averages?',
      a: ['Group averages play the prices, overall average is the mean.', 'The answer is the ratio of group sizes.'],
      tag: 'Shortcut',
    },
    {
      q: 'Part of a stock is sold at 8% profit and the rest at 18%. Overall 14%. Ratio?',
      a: ['(18 − 14) : (14 − 8) = 4 : 6 = 2 : 3.', 'That is 8% part : 18% part.'],
      tag: 'Shortcut',
    },
    {
      q: 'How do you mix two milk-water mixtures?',
      a: ['Turn each into the fraction of milk.', 'Alligate the fractions against the target fraction.'],
    },
    {
      q: 'Adding water only: which quantity stays fixed?',
      a: ['The milk.', 'Rescale the new ratio so the milk parts match, then find the extra water.'],
    },
    {
      q: 'Can alligation mix three or more items?',
      a: ['Only pairwise: pair each cheaper item with a dearer one.', 'Many answers are possible, so SSC questions stick to two.'],
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'In what ratio must tea at ₹62 per kg be mixed with tea at ₹72 per kg so that the mixture is worth ₹64.50 per kg?',
      options: ['1 : 3', '3 : 1', '2 : 1', '3 : 2'],
      answer: 1,
      explain: '(72 − 64.5) : (64.5 − 62) = 7.5 : 2.5 = 3 : 1.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: '20 kg of rice at ₹30 per kg is mixed with 30 kg of rice at ₹40 per kg. What is the price of the mixture per kg?',
      options: ['₹35', '₹37', '₹36', '₹34'],
      answer: 2,
      explain: '(20 × 30 + 30 × 40)/50 = 1,800/50 = ₹36.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: '30 L of a mixture has milk and water in the ratio 7 : 3. How much water is in it?',
      options: ['9 L', '21 L', '10 L', '7 L'],
      answer: 0,
      explain: 'Water = 3/10 × 30 = 9 L.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'In a class, the boys average 70 marks, the girls average 80, and the whole class averages 76. What is the ratio of boys to girls?',
      options: ['3 : 2', '1 : 2', '4 : 3', '2 : 3'],
      answer: 3,
      explain: 'Boys : girls = (80 − 76) : (76 − 70) = 4 : 6 = 2 : 3.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A vessel has 80 L of pure milk. 8 L is taken out and replaced with water. This is done once more. How much milk is left?',
      options: ['64.8 L', '64 L', '65.6 L', '63.2 L'],
      answer: 0,
      explain: '80 × (1 − 8/80)² = 80 × 0.81 = 64.8 L.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: '45 L of a mixture has milk and water in the ratio 4 : 1. How much water must be added to make the ratio 3 : 2?',
      options: ['12 L', '18 L', '15 L', '9 L'],
      answer: 2,
      explain: 'Milk 36 L, water 9 L. For 3 : 2, water = 36 × 2/3 = 24 L. Add 24 − 9 = 15 L.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        'Tea at ₹60 per kg is mixed with tea at ₹75 per kg. The mixture is sold at ₹80 per kg for a 25% profit. In what ratio were they mixed?',
      options: ['11 : 4', '4 : 11', '3 : 2', '5 : 4'],
      answer: 0,
      explain: 'Mean CP = 80 × 100/125 = ₹64. (75 − 64) : (64 − 60) = 11 : 4.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        'A trader has 50 kg of sugar. He sells part of it at 8% profit and the rest at 18% profit, making 14% profit overall. How much did he sell at 18% profit?',
      options: ['20 kg', '30 kg', '25 kg', '35 kg'],
      answer: 1,
      explain: '8% part : 18% part = (18 − 14) : (14 − 8) = 2 : 3. So 3/5 × 50 = 30 kg at 18%.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'How much water must be added to 12 L of milk costing ₹40 per litre so that the mixture is worth ₹32 per litre?',
      options: ['4 L', '2.5 L', '6 L', '3 L'],
      answer: 3,
      explain: 'Water : milk = (40 − 32) : (32 − 0) = 1 : 4. Water = 12/4 = 3 L.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'In what ratio should a 20% alcohol solution be mixed with a 50% alcohol solution to get a 30% solution?',
      options: ['2 : 1', '1 : 2', '3 : 2', '2 : 3'],
      answer: 0,
      explain: '(50 − 30) : (30 − 20) = 20 : 10 = 2 : 1.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        'Alloy A has copper and zinc in the ratio 5 : 3, and alloy B has them in the ratio 7 : 5. Equal weights of A and B are melted together. What is the ratio of copper to zinc in the new alloy?',
      options: ['3 : 2', '29 : 19', '31 : 17', '27 : 21'],
      answer: 1,
      explain: 'Copper = 5/8 + 7/12 = 15/24 + 14/24 = 29/24. Zinc = 3/8 + 5/12 = 19/24. Ratio 29 : 19.',
      shortcut: 'Take 24 kg of each: copper 15 + 14 = 29, zinc 9 + 10 = 19.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        'Milk from one vessel (milk : water = 3 : 1) and another vessel (milk : water = 5 : 3) is mixed to get a mixture with milk : water = 2 : 1. In what ratio are the first and second vessels mixed?',
      options: ['2 : 1', '1 : 1', '3 : 5', '1 : 2'],
      answer: 3,
      explain:
        'Use the milk fraction as the "price": first 3/4, second 5/8, target 2/3. Alligate: first : second = (2/3 − 5/8) : (3/4 − 2/3). In 24ths that is (16 − 15) : (18 − 16) = 1 : 2.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        'From a 50 L container of pure milk, some milk is taken out and replaced with water. This is done twice in all, and 32 L of milk is left. How much was taken out each time?',
      options: ['8 L', '12 L', '10 L', '15 L'],
      answer: 2,
      explain: '50 × (1 − x/50)² = 32, so (1 − x/50)² = 16/25 and 1 − x/50 = 4/5. x = 10 L.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        'A milkman mixes water with milk that costs him ₹48 per litre. By selling the mixture at ₹45 per litre he gains 25%. What is the ratio of water to milk?',
      options: ['1 : 4', '1 : 3', '3 : 1', '2 : 5'],
      answer: 1,
      explain: 'Mean CP = 45 × 100/125 = ₹36. Water : milk = (48 − 36) : (36 − 0) = 12 : 36 = 1 : 3.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A 60 L mixture has milk and water in the ratio 2 : 1. 15 L of the mixture is taken out and replaced with 15 L of pure milk. What is the new ratio of milk to water?',
      options: ['2 : 1', '5 : 2', '3 : 1', '4 : 1'],
      answer: 2,
      explain:
        'At first: milk 40 L, water 20 L. The 15 L taken out is a quarter of the mixture, so it carries away a quarter of each part: milk falls to 30 L and water to 15 L. Adding 15 L of milk makes milk 45 L. New ratio 45 : 15 = 3 : 1.',
      shortcut: 'Removing part of a mixture keeps the ratio 2 : 1; only the added liquid changes it.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        'A 60 L mixture has milk and water in the ratio 4 : 1. How much of the mixture must be taken out and replaced with water so that the ratio becomes 3 : 2?',
      options: ['12 L', '10 L', '20 L', '15 L'],
      answer: 3,
      explain:
        'Milk at first = 4/5 × 60 = 48 L. The total stays 60 L, so at 3 : 2 milk must be 3/5 × 60 = 36 L. Taking out x litres of mixture keeps the fraction (60 − x)/60 of the milk: 48 × (60 − x)/60 = 36, so (60 − x)/60 = 3/4 and x = 15 L. Check: milk 36 L, water 9 + 15 = 24 L, ratio 3 : 2.',
      shortcut: 'Milk must fall from 4/5 to 3/5 of the vessel, so keep 3/4 of the mixture: take out 1/4 of 60 = 15 L.',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'If 10 L is taken out of 100 L of milk and replaced with water, twice, exactly 80 L of milk remains.',
      answer: false,
      explain: '100 × 0.9 × 0.9 = 81 L. The second removal takes out some water too.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'Alligation can give the ratio of boys to girls from the average marks of the boys, the girls and the whole class.',
      answer: true,
      explain: 'It is a weighted average, so (girls avg − class avg) : (class avg − boys avg) = boys : girls.',
    },
  ],
};

export default topic;
