import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'profit-loss',
  title: 'Profit, loss and discount',
  level: 'intermediate',
  masteryMinutes: 150,
  reviseMinutes: 50,
  priority: 'high',
  weightage: { tier1: 2, tier2: 2 },
  tags: ['profit', 'loss', 'cost price', 'selling price', 'marked price', 'discount', 'markup', 'dishonest dealer', 'successive discount'],
  summary:
    'Three prices: cost price (CP), marked price (MP) and selling price (SP). Profit and loss are taken on CP, discount on MP. Keep the bases straight and every question becomes a chain of multipliers.',
  patterns: [
    { name: 'Markup and discount together', frequency: 'most', example: 'Marked 40% above CP, 20% discount. Profit percent?' },
    { name: 'Successive discounts', frequency: 'most', example: 'Discounts of 20% and 15%. Equal single discount?' },
    { name: 'Dishonest dealer (false weights)', frequency: 'often', example: 'Sells at CP but uses 900 g for 1 kg. Gain percent?' },
    { name: 'Same SP, x% gain and x% loss', frequency: 'often', example: 'Two phones at ₹12,000 each, 20% gain and 20% loss. Net?' },
    { name: 'CP of n equals SP of m', frequency: 'often', example: 'CP of 20 articles = SP of 16. Profit percent?' },
    { name: 'Buy x for ₹a, sell y for ₹b', frequency: 'rare', example: 'Buys 12 for ₹10, sells 10 for ₹12. Gain percent?' },
  ],
  keyPoints: [
    {
      title: 'Profit and loss are always on the cost price',
      text: 'Profit = SP − CP, loss = CP − SP. The percentage uses CP as the base, unless the question clearly says "on SP".',
      formula: 'profit % = (SP − CP)/CP × 100',
      example: 'CP ₹500, SP ₹600: profit 100/500 = **20%**.',
    },
    {
      title: 'Work with multipliers',
      text: 'A gain of r% means SP = CP × (100 + r)/100. A loss of r% means SP = CP × (100 − r)/100. To go back from SP to CP, divide by the same multiplier.',
      formula: 'SP = CP × (100 ± r)/100',
      example: 'SP ₹1,140 at a 5% loss: CP = 1,140 ÷ 0.95 = **₹1,200**.',
    },
    {
      title: 'Discount is always on the marked price',
      text: 'The marked (list) price is what is printed. Discount = MP − SP, and the discount percentage uses MP as the base.',
      formula: 'SP = MP × (100 − d)/100',
      example: 'MP ₹1,500, discount 12%: SP = 1,500 × 0.88 = **₹1,320**.',
    },
    {
      title: 'Markup then discount',
      text: 'Mark up m% over CP, then give d% discount on MP. The net profit is a successive change: m − d − md/100.',
      formula: 'profit % = m − d − md/100',
      example: 'Mark up 40%, discount 20%: 40 − 20 − 800/100 = **12% profit**.',
    },
    {
      title: 'Successive discounts',
      text: 'Discounts of a% and b% one after the other are not a + b. The single equal discount is a + b − ab/100. The order does not matter.',
      formula: 'single discount = a + b − ab/100',
      example: '20% and 15%: 20 + 15 − 300/100 = **32%**.',
    },
    {
      title: 'Same SP, x% gain on one and x% loss on the other',
      text: 'Two items sold at the same selling price, one at x% gain and one at x% loss, always give an overall **loss** of x²/100 percent. The item sold at a loss cost more, so the loss outweighs the gain.',
      formula: 'loss % = x²/100',
      example: 'Two phones at ₹12,000 each, 20% gain and 20% loss: loss = 400/100 = **4%**.',
    },
    {
      title: 'Dishonest dealer (false weight)',
      text: 'A dealer who sells at CP but gives less weight gains on the weight he keeps back. Gain % = error ÷ (true weight − error) × 100. If he also adds a profit, multiply the two effects.',
      formula: 'gain % = error/(true − error) × 100',
      example: '900 g for 1 kg: 100/900 = **11 1/9%**. Weight 20% less: 20/80 = **25%**.',
    },
    {
      title: 'CP of n articles = SP of m articles',
      text: 'If the cost of n items equals the selling price of m items, the profit (n > m) or loss (n < m) is the difference over m.',
      formula: 'profit % = (n − m)/m × 100',
      example: 'CP of 20 = SP of 16: (20 − 16)/16 = **25% profit**.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'Mark-up and discount have different bases',
      figure: {
        viewBox: '0 0 320 210',
        svg: `
<line x1="40" y1="120" x2="300" y2="120"/>
<line x1="67.5" y1="114" x2="67.5" y2="126" data-step="1"/>
<text x="67.5" y="106" text-anchor="middle" data-step="1">CP</text>
<text x="67.5" y="142" text-anchor="middle" data-step="1">100</text>
<line x1="287.5" y1="114" x2="287.5" y2="126" class="d-blue" data-step="2"/>
<text x="287.5" y="106" text-anchor="middle" class="d-blue" data-step="2">MP</text>
<text x="287.5" y="142" text-anchor="middle" class="d-blue" data-step="2">140</text>
<line x1="133.5" y1="114" x2="133.5" y2="126" class="d-red" data-step="3"/>
<text x="133.5" y="106" text-anchor="middle" class="d-red" data-step="3">SP</text>
<text x="133.5" y="142" text-anchor="middle" class="d-red" data-step="3">112</text>
<path d="M67.5,88 Q177.5,20 287.5,88" class="d-blue" data-step="2"/>
<path d="M280.5,87.8 L287.5,88 L284.2,81.8" class="d-blue" data-step="2"/>
<text x="177.5" y="46" text-anchor="middle" class="d-small d-blue" data-step="2">mark up 40% of CP = +40</text>
<path d="M287.5,152 Q210.5,200 133.5,152" class="d-red" data-step="3"/>
<path d="M140.5,152.2 L133.5,152 L136.8,158.2" class="d-red" data-step="3"/>
<text x="210.5" y="196" text-anchor="middle" class="d-small d-red" data-step="3">20% of MP = −28</text>
<line x1="67.5" y1="160" x2="133.5" y2="160" class="d-green" data-step="4"/><path d="M129.2,162.5 L133.5,160 L129.2,157.5" class="d-green" data-step="4"/><path d="M71.8,157.5 L67.5,160 L71.8,162.5" class="d-green" data-step="4"/>
<text x="100.5" y="178" text-anchor="middle" class="d-green" data-step="4">+12</text>`,
      },
      explain: [
        'Take the cost price as 100.',
        'Mark it up 40% of CP: the marked price is 140.',
        'The 20% discount is on MP, not CP: 20% of 140 = 28, so SP = 140 − 28 = 112.',
        'Profit = 112 − 100 = 12 on a cost of 100: **12%**. Shortcut: 40 − 20 − (40 × 20)/100 = 12.',
      ],
    },
    {
      type: 'diagram',
      title: 'Same selling price, x% gain and x% loss',
      figure: {
        viewBox: '0 0 320 232',
        svg: `
<line x1="24" y1="190" x2="300" y2="190"/>
<rect x="40" y="100" width="50" height="90" class="d-fill-blue" data-step="2"/>
<rect x="40" y="100" width="50" height="90" data-step="2"/>
<text x="65" y="160" text-anchor="middle" class="d-small" data-step="2">10,000</text>
<text x="65" y="206" text-anchor="middle" class="d-small" data-step="2">CP</text>
<rect x="95" y="82" width="50" height="108" class="d-fill" data-step="1"/>
<rect x="95" y="82" width="50" height="108" data-step="1"/>
<text x="120" y="160" text-anchor="middle" class="d-small" data-step="1">12,000</text>
<text x="120" y="206" text-anchor="middle" class="d-small" data-step="1">SP</text>
<rect x="175" y="55" width="50" height="135" class="d-fill-blue" data-step="3"/>
<rect x="175" y="55" width="50" height="135" data-step="3"/>
<text x="200" y="160" text-anchor="middle" class="d-small" data-step="3">15,000</text>
<text x="200" y="206" text-anchor="middle" class="d-small" data-step="3">CP</text>
<rect x="230" y="82" width="50" height="108" class="d-fill" data-step="1"/>
<rect x="230" y="82" width="50" height="108" data-step="1"/>
<text x="255" y="160" text-anchor="middle" class="d-small" data-step="1">12,000</text>
<text x="255" y="206" text-anchor="middle" class="d-small" data-step="1">SP</text>
<line x1="24" y1="82" x2="300" y2="82" class="d-dash d-soft" data-step="1"/>
<line x1="65" y1="98" x2="65" y2="84" class="d-green" data-step="2"/><path d="M67,87.5 L65,84 L63,87.5" class="d-green" data-step="2"/><path d="M63,94.5 L65,98 L67,94.5" class="d-green" data-step="2"/>
<text x="65" y="76" text-anchor="middle" class="d-small d-green" data-step="2">+2,000</text>
<line x1="255" y1="57" x2="255" y2="80" class="d-red" data-step="3"/><path d="M253,76.5 L255,80 L257,76.5" class="d-red" data-step="3"/><path d="M257,60.5 L255,57 L253,60.5" class="d-red" data-step="3"/>
<text x="255" y="49" text-anchor="middle" class="d-small d-red" data-step="3">−3,000</text>
<text x="92.5" y="224" text-anchor="middle" class="d-small" data-step="2">phone 1: 20% gain</text>
<text x="227.5" y="224" text-anchor="middle" class="d-small" data-step="3">phone 2: 20% loss</text>`,
      },
      explain: [
        'Both phones sell for ₹12,000 (the dashed line).',
        '20% gain: CP = 12,000/1.2 = 10,000, so the gain is ₹2,000.',
        '20% loss: CP = 12,000/0.8 = 15,000, so the loss is ₹3,000.',
        'The loss is bigger because it is on the costlier phone. Net loss 1,000 on CP 25,000 = **4%** = 20²/100.',
      ],
    },
  ],
  comparisons: [
    {
      title: 'Markup vs discount vs profit',
      items: ['Markup', 'Discount', 'Profit'],
      rows: [
        { aspect: 'Between which prices', values: ['CP → MP', 'MP → SP', 'CP → SP'] },
        { aspect: 'Base for the percentage', values: ['**CP**', '**MP**', '**CP**'], key: true },
        { aspect: 'CP ₹100, MP ₹140, SP ₹112', values: ['40/100 = 40%', '28/140 = 20%', '12/100 = 12%'] },
        { aspect: 'Link between them', values: ['m', 'd', 'm − d − md/100'] },
      ],
      reveal:
        'Markup and profit are both measured on CP; discount is measured on MP. That is why a 40% markup and a 20% discount leave 12% profit, not 20%.',
      whenToUse: [
        'The question says "marked above cost" or "list price is x% more than CP".',
        'The question says "off", "rebate" or "discount on the marked/list price".',
        'The question asks what the seller finally gains or loses.',
      ],
    },
    {
      title: 'Profit on CP vs profit on SP',
      items: ['Profit on CP', 'Profit on SP'],
      rows: [
        { aspect: 'Base', values: ['CP', 'SP'], key: true },
        { aspect: 'CP ₹80, SP ₹100', values: ['20/80 = 25%', '20/100 = 20%'] },
        { aspect: 'Convert to the other', values: ['r/(100 + r) × 100 on SP', 'r/(100 − r) × 100 on CP'] },
      ],
      reveal: 'The same ₹20 profit is 25% of CP but only 20% of SP. Assume CP is the base unless the question names SP.',
      whenToUse: ['Default in every question.', 'Only when the question says "profit on selling price".'],
    },
  ],
  shortcuts: [
    {
      pattern: 'Markup, then discount',
      example: 'A shopkeeper marks his goods 40% above the cost price and gives a 20% discount. What is his profit percent?',
      options: ['20%', '12%', '15%', '10%'],
      answer: '12%',
      ladder: [
        {
          name: 'Standard',
          steps: ['Take CP = 100, so MP = 140.', 'Discount 20% of 140 = 28, so SP = 112.', 'Profit 12 on CP 100 = 12%.'],
          seconds: 40,
        },
        { name: 'Shortcut', steps: ['m − d − md/100 = 40 − 20 − 800/100 = 12%.'], seconds: 10 },
        {
          name: 'Option elimination',
          steps: ['The discount is taken on a bigger number (MP), so profit is less than 40 − 20 = 20%.', 'Multipliers 1.4 × 0.8 = 1.12, so 12%.'],
          seconds: 8,
        },
      ],
    },
    {
      pattern: 'Same SP, equal gain and loss',
      example: 'Two phones are sold at ₹12,000 each, one at a 20% gain and the other at a 20% loss. What is the overall result?',
      options: ['No profit, no loss', '4% gain', '4% loss', '2% loss'],
      answer: '4% loss',
      ladder: [
        {
          name: 'Standard',
          steps: [
            'CP of first = 12,000 ÷ 1.2 = 10,000.',
            'CP of second = 12,000 ÷ 0.8 = 15,000.',
            'Total CP 25,000, total SP 24,000: loss 1,000/25,000 = 4%.',
          ],
          seconds: 50,
        },
        { name: 'Shortcut', steps: ['Same SP, x% gain and x% loss: loss of x²/100 = 400/100 = 4%.'], seconds: 5 },
        {
          name: 'Option elimination',
          steps: ['Equal gain and loss on the same SP is always a loss, so "no loss" and "gain" go.', 'x²/100 = 4, so 4% loss.'],
          seconds: 5,
        },
      ],
    },
    {
      pattern: 'Dishonest dealer with a false weight',
      example: 'A dealer claims to sell at cost price but uses a weight that is 20% less than the true weight. What is his gain percent?',
      options: ['20%', '25%', '16⅔%', '22.5%'],
      answer: '25%',
      ladder: [
        {
          name: 'Standard',
          steps: [
            'He gives 800 g but charges for 1,000 g.',
            'CP of 800 g is his cost; he is paid the price of 1,000 g.',
            'Gain = 200/800 × 100 = 25%.',
          ],
          seconds: 35,
        },
        { name: 'Shortcut', steps: ['error/(true − error) × 100 = 20/80 × 100 = 25%.'], seconds: 10 },
        { name: 'Fractions', steps: ['1/5 less given, so gain = 1/(5 − 1) = 1/4 = 25%.'], seconds: 5 },
      ],
    },
  ],
  qa: [
    {
      q: 'On which price is profit percent calculated? And discount?',
      a: ['Profit and loss: on CP.', 'Discount: on MP (marked price).'],
      tag: 'Trap',
    },
    {
      q: 'Two items are sold at the same SP, one at x% gain and one at x% loss. What is the result?',
      a: ['Always a loss.', 'Loss % = x²/100.', '10% gain and 10% loss: 1% loss.'],
      tag: 'Asked often',
    },
    {
      q: 'What single discount equals successive discounts of a% and b%?',
      a: ['a + b − ab/100.', '20% and 10%: 30 − 2 = 28%.', 'The order of the two discounts does not change the answer.'],
      tag: 'Shortcut',
    },
    {
      q: 'Goods are marked m% above CP and sold at d% discount. What is the profit?',
      a: ['m − d − md/100 percent.', '25% markup, 10% discount: 25 − 10 − 2.5 = 12.5% profit.'],
      tag: 'Shortcut',
    },
    {
      q: 'A dealer sells at CP but uses 900 g for 1 kg. What is his gain?',
      a: ['Gain = error ÷ (true − error) = 100/900.', '= 11 1/9%.', 'The base is what he actually gives, not the true weight.'],
      tag: 'Trap',
    },
    {
      q: 'How do you find CP from SP and a gain of r%?',
      a: ['CP = SP ÷ (1 + r/100).', 'SP ₹690 at 15% gain: CP = 690 ÷ 1.15 = ₹600.'],
    },
    {
      q: 'CP of 20 articles equals SP of 16. Profit or loss, and how much?',
      a: ['More articles for the same money means profit.', '(20 − 16)/16 × 100 = 25% profit.'],
      tag: 'Asked often',
    },
    {
      q: 'Profit at SP ₹1,020 equals loss at SP ₹860. What is the CP?',
      a: ['CP sits exactly halfway between the two SPs.', '(1,020 + 860)/2 = ₹940.'],
      tag: 'Shortcut',
    },
    {
      q: 'The profit is 20% on SP. What is it on CP?',
      a: ['Take SP = 100, profit 20, so CP = 80.', 'On CP: 20/80 = 25%.'],
      tag: 'Trap',
    },
    {
      q: 'A dealer gives a 10% profit and also uses 800 g for 1 kg. What is his total gain?',
      a: ['Multiply the two effects: 1.1 × 1,000/800 = 1.375.', 'Total gain = 37.5%, not 10 + 25 = 35%.'],
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'An article bought for ₹800 is sold for ₹920. What is the profit percent?',
      options: ['12%', '15%', '18%', '20%'],
      answer: 1,
      explain: 'Profit = 920 − 800 = 120. 120/800 × 100 = 15%.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'By selling an article for ₹1,140, a man loses 5%. What is its cost price?',
      options: ['₹1,200', '₹1,197', '₹1,180', '₹1,250'],
      answer: 0,
      explain: 'SP = 95% of CP, so CP = 1,140 ÷ 0.95 = ₹1,200.',
      shortcut: '1% of CP = 1,140/95 = 12, so CP = 1,200.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'The marked price of a watch is ₹1,500. It is sold at a 12% discount. What is the selling price?',
      options: ['₹1,300', '₹1,280', '₹1,320', '₹1,350'],
      answer: 2,
      explain: 'Discount = 12% of 1,500 = 180. SP = 1,500 − 180 = ₹1,320.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Two phones are sold at ₹12,000 each. One is sold at a 20% gain and the other at a 20% loss. What is the overall result?',
      options: ['No profit, no loss', '4% gain', '2% loss', '4% loss'],
      answer: 3,
      explain: 'CPs are 12,000 ÷ 1.2 = 10,000 and 12,000 ÷ 0.8 = 15,000. Total CP 25,000, SP 24,000: loss 1,000 = 4%.',
      shortcut: 'Same SP, x% gain and x% loss: loss of x²/100 = 4%.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Two successive discounts of 20% and 15% are equal to a single discount of:',
      options: ['35%', '32%', '30%', '33%'],
      answer: 1,
      explain: '100 × 0.8 × 0.85 = 68, so the single discount is 32%.',
      shortcut: '20 + 15 − (20 × 15)/100 = 32%.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A shopkeeper marks his goods 40% above the cost price and allows a discount of 20%. What is his profit percent?',
      options: ['12%', '20%', '15%', '10%'],
      answer: 0,
      explain: 'CP 100, MP 140, SP = 140 × 0.8 = 112. Profit = 12%.',
      shortcut: '40 − 20 − (40 × 20)/100 = 12%.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A dishonest dealer claims to sell at cost price but uses a weight of 900 g for 1 kg. What is his gain percent?',
      options: ['10%', '9 1/11%', '11 1/9%', '12.5%'],
      answer: 2,
      explain: 'He gives 900 g but is paid for 1,000 g. Gain = 100/900 × 100 = 11 1/9%.',
      shortcut: 'error/(true − error) = 100/900 = 1/9 = 11 1/9%.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The cost price of 20 articles is equal to the selling price of 16 articles. What is the profit percent?',
      options: ['20%', '25%', '16%', '24%'],
      answer: 1,
      explain: 'Let each article cost ₹1. SP of 16 = ₹20, so profit on 16 articles is ₹4 on a cost of ₹16 = 25%.',
      shortcut: '(20 − 16)/16 × 100 = 25%.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'By selling a table for ₹720, a trader loses 10%. At what price should he sell it to gain 15%?',
      options: ['₹900', '₹940', '₹880', '₹920'],
      answer: 3,
      explain: 'CP = 720 ÷ 0.9 = 800. SP for 15% gain = 800 × 1.15 = ₹920.',
      shortcut: 'SP₂ = 720 × 115/90 = ₹920.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'An article costs ₹600. At what price must it be marked so that after a 10% discount the trader still gains 20%?',
      options: ['₹780', '₹800', '₹750', '₹840'],
      answer: 1,
      explain: 'SP = 600 × 1.2 = 720. MP × 0.9 = 720, so MP = ₹800.',
      shortcut: 'MP = CP × 120/90 = 600 × 4/3 = ₹800.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The profit earned by selling an article for ₹1,020 is equal to the loss incurred by selling it for ₹860. What is the cost price?',
      options: ['₹920', '₹960', '₹940', '₹950'],
      answer: 2,
      explain: '1,020 − CP = CP − 860, so 2 CP = 1,880 and CP = ₹940.',
      shortcut: 'CP is the average of the two SPs.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'A vendor buys oranges at 12 for ₹10 and sells them at 10 for ₹12. What is his gain percent?',
      options: ['40%', '20%', '36%', '44%'],
      answer: 3,
      explain: 'CP of one = 10/12 = 5/6. SP of one = 12/10 = 6/5. Gain = (6/5 ÷ 5/6) − 1 = 36/25 − 1 = 44%.',
      shortcut: 'Cross multiply: (12 × 12)/(10 × 10) = 144/100, a 44% gain.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'A dealer sells his goods at a 10% profit and also uses a weight of 800 g for 1 kg. What is his total gain percent?',
      options: ['35%', '37.5%', '30%', '32.5%'],
      answer: 1,
      explain: 'He is paid 1.1 × the cost of 1,000 g but gives only 800 g. Gain = 1.1 × 1,000/800 − 1 = 0.375 = 37.5%.',
      shortcut: 'Weight effect 25%, then 10 + 25 + (10 × 25)/100 = 37.5%.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'A trader marks an article 25% above its cost price. What discount percent can he allow and still make a 10% profit?',
      options: ['15%', '10%', '12%', '13%'],
      answer: 2,
      explain: 'CP 100, MP 125, SP needed 110. Discount = 15 on 125 = 12%.',
      shortcut: 'Discount = (MP − SP)/MP = 15/125 = 12%.',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'Discount percent is calculated on the marked price, not on the cost price.',
      answer: true,
      explain: 'Discount = MP − SP, and its percentage uses MP as the base.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'Selling two items at the same price, one at a 10% gain and the other at a 10% loss, gives no overall profit or loss.',
      answer: false,
      explain: 'It is a loss of 10²/100 = 1%. The item sold at a loss cost more, so its loss is larger in rupees.',
    },
  ],
};

export default topic;
