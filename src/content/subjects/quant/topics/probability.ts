import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'probability',
  title: 'Probability',
  level: 'intermediate',
  masteryMinutes: 60,
  reviseMinutes: 20,
  priority: 'low',
  tiers: ['T2'],
  tags: ['probability', 'coins', 'dice', 'cards', 'balls', 'complement', 'addition rule', 'permutation', 'combination'],
  summary:
    'Probability = favourable outcomes over total outcomes. Know the sample spaces for coins, dice and cards, use "1 − P(none)" for "at least one", and count balls with combinations.',
  patterns: [
    { name: 'Two dice: sum, doublet or product', frequency: 'most', example: 'Two dice are thrown. Probability that the sum is 9?' },
    { name: 'Drawing balls from a bag', frequency: 'often', example: 'Bag has 4 red and 6 black balls. Two drawn. Probability both red?' },
    { name: 'Cards from a pack of 52', frequency: 'often', example: 'One card is drawn. Probability it is a king or a red card?' },
    { name: 'Coins tossed together', frequency: 'often', example: 'Three coins are tossed. Probability of exactly two heads?' },
    { name: '"At least one" by complement', frequency: 'often', example: 'Three balls are drawn. Probability that at least one is green?' },
    { name: 'Calendar and other classics', frequency: 'rare', example: 'Probability that a leap year has 53 Sundays?' },
  ],
  keyPoints: [
    {
      title: 'The basic definition',
      text: 'Count the outcomes that suit you and divide by all equally likely outcomes. A probability always lies between 0 (impossible) and 1 (certain).',
      formula: 'P(E) = (favourable outcomes)/(total outcomes)',
      example: 'One die, a prime number (2, 3, 5): 3/6 = **1/2**.',
    },
    {
      title: 'Complement: the "at least one" tool',
      text: 'P(not E) = 1 − P(E). "At least one" is 1 minus "none", which is usually one short calculation.',
      formula: 'P(at least one) = 1 − P(none)',
      example: 'Three coins, at least one tail: 1 − 1/8 = **7/8**.',
    },
    {
      title: 'Addition rule for "or"',
      text: 'For A or B, add the two and subtract the overlap once. If A and B cannot happen together, the overlap is 0. In the formula, ∪ means "or" and ∩ means "and".',
      formula: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)',
      example: 'King or red card: 4/52 + 26/52 − 2/52 = 28/52 = **7/13**.',
    },
    {
      title: 'Coins',
      text: 'n coins give 2ⁿ outcomes. Exactly r heads can happen in ⁿCᵣ ways.',
      formula: 'P(exactly r heads) = ⁿCᵣ/2ⁿ',
      example: 'Three coins, exactly two heads: ³C₂/8 = **3/8**.',
    },
    {
      title: 'Dice',
      text: 'One die: 6 outcomes. Two dice: 36. Ways to get a sum s with two dice: s − 1 for s up to 7, and 13 − s for s from 7 to 12. Sum 7 is the most likely (6 ways). There are 6 doublets.',
      formula: 'ways(sum s) = s − 1 (s ≤ 7), 13 − s (s ≥ 7)',
      example: 'Sum 9: 13 − 9 = 4 ways, so 4/36 = **1/9**.',
    },
    {
      title: 'Cards',
      text: '52 cards, 4 suits of 13. Spades and clubs are black, hearts and diamonds red (26 each). 12 face cards (J, Q, K in each suit), 4 aces, 4 of each rank.',
      example: 'A face card: 12/52 = **3/13**.',
    },
    {
      title: 'Balls from a bag',
      text: 'Drawing several balls at once is a combination count. Draw without replacement unless the question says otherwise.',
      formula: 'P = (ways to choose the wanted balls)/(ways to choose any balls)',
      example: '4 red, 6 black, two drawn, both red: ⁴C₂/¹⁰C₂ = 6/45 = **2/15**.',
    },
    {
      title: 'Permutation and combination counts',
      text: 'Arrangements (order matters) use ⁿPᵣ. Selections (order does not matter) use ⁿCᵣ. Here n! (n factorial) means n × (n − 1) × … × 1, so 3! = 6. Quick count: ⁿC₂ = n(n − 1)/2, so ¹⁰C₂ = 45. ⁿPᵣ = ⁿCᵣ × r!.',
      formula: 'ⁿPᵣ = (n!)/((n − r)!); ⁿCᵣ = (n!)/(r! × (n − r)!)',
      example: '⁷P₃ = 210 and ⁷C₃ = 35.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'Two dice: the 36-square grid',
      figure: {
        viewBox: '0 0 320 215',
        svg: `
<rect x="80" y="45" width="26" height="26" class="d-fill-green" data-step="4"/>
<rect x="80" y="175" width="26" height="26" class="d-fill" data-step="2"/>
<rect x="106" y="71" width="26" height="26" class="d-fill-green" data-step="4"/>
<rect x="106" y="149" width="26" height="26" class="d-fill" data-step="2"/>
<rect x="132" y="97" width="26" height="26" class="d-fill-green" data-step="4"/>
<rect x="132" y="123" width="26" height="26" class="d-fill" data-step="2"/>
<rect x="132" y="175" width="26" height="26" class="d-fill-pink" data-step="3"/>
<rect x="158" y="97" width="26" height="26" class="d-fill" data-step="2"/>
<rect x="158" y="123" width="26" height="26" class="d-fill-green" data-step="4"/>
<rect x="158" y="149" width="26" height="26" class="d-fill-pink" data-step="3"/>
<rect x="184" y="71" width="26" height="26" class="d-fill" data-step="2"/>
<rect x="184" y="123" width="26" height="26" class="d-fill-pink" data-step="3"/>
<rect x="184" y="149" width="26" height="26" class="d-fill-green" data-step="4"/>
<rect x="210" y="45" width="26" height="26" class="d-fill" data-step="2"/>
<rect x="210" y="97" width="26" height="26" class="d-fill-pink" data-step="3"/>
<rect x="210" y="175" width="26" height="26" class="d-fill-green" data-step="4"/>
<line x1="106" y1="45" x2="106" y2="201" class="d-thin d-soft"/>
<line x1="80" y1="71" x2="236" y2="71" class="d-thin d-soft"/>
<line x1="132" y1="45" x2="132" y2="201" class="d-thin d-soft"/>
<line x1="80" y1="97" x2="236" y2="97" class="d-thin d-soft"/>
<line x1="158" y1="45" x2="158" y2="201" class="d-thin d-soft"/>
<line x1="80" y1="123" x2="236" y2="123" class="d-thin d-soft"/>
<line x1="184" y1="45" x2="184" y2="201" class="d-thin d-soft"/>
<line x1="80" y1="149" x2="236" y2="149" class="d-thin d-soft"/>
<line x1="210" y1="45" x2="210" y2="201" class="d-thin d-soft"/>
<line x1="80" y1="175" x2="236" y2="175" class="d-thin d-soft"/>
<rect x="80" y="45" width="156" height="156" data-step="1"/>
<text x="93" y="62.5" text-anchor="middle" class="d-small">2</text>
<text x="93" y="88.5" text-anchor="middle" class="d-small">3</text>
<text x="93" y="114.5" text-anchor="middle" class="d-small">4</text>
<text x="93" y="140.5" text-anchor="middle" class="d-small">5</text>
<text x="93" y="166.5" text-anchor="middle" class="d-small">6</text>
<text x="93" y="192.5" text-anchor="middle" class="d-small">7</text>
<text x="119" y="62.5" text-anchor="middle" class="d-small">3</text>
<text x="119" y="88.5" text-anchor="middle" class="d-small">4</text>
<text x="119" y="114.5" text-anchor="middle" class="d-small">5</text>
<text x="119" y="140.5" text-anchor="middle" class="d-small">6</text>
<text x="119" y="166.5" text-anchor="middle" class="d-small">7</text>
<text x="119" y="192.5" text-anchor="middle" class="d-small">8</text>
<text x="145" y="62.5" text-anchor="middle" class="d-small">4</text>
<text x="145" y="88.5" text-anchor="middle" class="d-small">5</text>
<text x="145" y="114.5" text-anchor="middle" class="d-small">6</text>
<text x="145" y="140.5" text-anchor="middle" class="d-small">7</text>
<text x="145" y="166.5" text-anchor="middle" class="d-small">8</text>
<text x="145" y="192.5" text-anchor="middle" class="d-small">9</text>
<text x="171" y="62.5" text-anchor="middle" class="d-small">5</text>
<text x="171" y="88.5" text-anchor="middle" class="d-small">6</text>
<text x="171" y="114.5" text-anchor="middle" class="d-small">7</text>
<text x="171" y="140.5" text-anchor="middle" class="d-small">8</text>
<text x="171" y="166.5" text-anchor="middle" class="d-small">9</text>
<text x="171" y="192.5" text-anchor="middle" class="d-small">10</text>
<text x="197" y="62.5" text-anchor="middle" class="d-small">6</text>
<text x="197" y="88.5" text-anchor="middle" class="d-small">7</text>
<text x="197" y="114.5" text-anchor="middle" class="d-small">8</text>
<text x="197" y="140.5" text-anchor="middle" class="d-small">9</text>
<text x="197" y="166.5" text-anchor="middle" class="d-small">10</text>
<text x="197" y="192.5" text-anchor="middle" class="d-small">11</text>
<text x="223" y="62.5" text-anchor="middle" class="d-small">7</text>
<text x="223" y="88.5" text-anchor="middle" class="d-small">8</text>
<text x="223" y="114.5" text-anchor="middle" class="d-small">9</text>
<text x="223" y="140.5" text-anchor="middle" class="d-small">10</text>
<text x="223" y="166.5" text-anchor="middle" class="d-small">11</text>
<text x="223" y="192.5" text-anchor="middle" class="d-small">12</text>
<text x="93" y="37" text-anchor="middle" class="d-small d-blue" data-step="1">1</text>
<text x="72" y="62.5" text-anchor="end" class="d-small d-blue" data-step="1">1</text>
<text x="119" y="37" text-anchor="middle" class="d-small d-blue" data-step="1">2</text>
<text x="72" y="88.5" text-anchor="end" class="d-small d-blue" data-step="1">2</text>
<text x="145" y="37" text-anchor="middle" class="d-small d-blue" data-step="1">3</text>
<text x="72" y="114.5" text-anchor="end" class="d-small d-blue" data-step="1">3</text>
<text x="171" y="37" text-anchor="middle" class="d-small d-blue" data-step="1">4</text>
<text x="72" y="140.5" text-anchor="end" class="d-small d-blue" data-step="1">4</text>
<text x="197" y="37" text-anchor="middle" class="d-small d-blue" data-step="1">5</text>
<text x="72" y="166.5" text-anchor="end" class="d-small d-blue" data-step="1">5</text>
<text x="223" y="37" text-anchor="middle" class="d-small d-blue" data-step="1">6</text>
<text x="72" y="192.5" text-anchor="end" class="d-small d-blue" data-step="1">6</text>
<text x="80" y="20" class="d-small d-blue" data-step="1">die 1 →</text>
<text x="18" y="128" class="d-small d-blue" data-step="1">die 2</text>
<rect x="246" y="69" width="12" height="12" class="d-fill" data-step="2"/>
<rect x="246" y="69" width="12" height="12" class="d-thin" data-step="2"/>
<text x="262" y="80" class="d-small" data-step="2">sum 7: 6</text>
<rect x="246" y="109" width="12" height="12" class="d-fill-pink" data-step="3"/>
<rect x="246" y="109" width="12" height="12" class="d-thin" data-step="3"/>
<text x="262" y="120" class="d-small" data-step="3">sum 9: 4</text>
<rect x="246" y="149" width="12" height="12" class="d-fill-green" data-step="4"/>
<rect x="246" y="149" width="12" height="12" class="d-thin" data-step="4"/>
<text x="262" y="160" class="d-small" data-step="4">doubles: 6</text>`,
        caption: 'Each step away from 7 loses one square',
      },
      explain: [
        'Two dice give 6 × 6 = 36 equally likely outcomes, one square each. Each square shows the sum.',
        'Sum 7 fills a whole diagonal: 6 squares, so 6/36 = 1/6. No other sum has more.',
        'Sum 9 is a shorter diagonal: 4 squares, so 4/36 = **1/9**.',
        'Doubles, (1, 1) to (6, 6), lie on the other diagonal: 6/36 = 1/6.',
      ],
    },
    {
      type: 'diagram',
      title: 'King or red: count the overlap once',
      figure: {
        viewBox: '0 0 320 232',
        svg: `
<rect x="20" y="30" width="280" height="172" data-step="1"/>
<text x="290" y="50" text-anchor="end" class="d-small" data-step="1">52 cards</text>
<circle cx="130" cy="118" r="72" class="d-fill-pink" data-step="2"/>
<circle cx="222" cy="118" r="42" class="d-fill-blue" data-step="3"/>
<circle cx="130" cy="118" r="72" class="d-red" data-step="2"/>
<circle cx="222" cy="118" r="42" class="d-blue" data-step="3"/>
<text x="112" y="98" text-anchor="middle" class="d-small d-red" data-step="2">red (26)</text>
<text x="112" y="132" text-anchor="middle" data-step="2">24</text>
<text x="240" y="68" text-anchor="middle" class="d-small d-blue" data-step="3">kings (4)</text>
<text x="238" y="132" text-anchor="middle" data-step="3">2</text>
<text x="191" y="124" text-anchor="middle" class="d-red" data-step="3">2</text>
<text x="160" y="222" text-anchor="middle" data-step="4">26 + 4 − 2 = 28 cards</text>`,
      },
      explain: [
        'The box is the whole pack: 52 cards.',
        'The red circle holds the 26 red cards.',
        'The king circle holds the 4 kings. The 2 red kings sit in both circles.',
        'King or red = 26 + 4 − 2 = 28 cards, so P = 28/52 = **7/13**.',
      ],
    },
  ],
  comparisons: [
    {
      title: 'Permutation vs combination',
      items: ['Permutation', 'Combination'],
      rows: [
        { aspect: 'Order', values: ['Matters (AB ≠ BA)', 'Does not matter (AB = BA)'], key: true },
        { aspect: 'Formula', values: ['(n!)/((n − r)!)', '(n!)/(r! × (n − r)!)'] },
        { aspect: '3 from 7', values: ['⁷P₃ = 210', '⁷C₃ = 35'] },
        { aspect: 'Key words', values: ['Arrange, order, rank, password', 'Choose, select, committee, draw'] },
      ],
      reveal: 'Every selection of r items can be arranged in r! ways, so ⁿPᵣ = ⁿCᵣ × r!.',
      whenToUse: ['Seating, codes, first and second prizes.', 'Balls drawn from a bag, cards in a hand, a team.'],
    },
    {
      title: 'With replacement vs without replacement',
      items: ['With replacement', 'Without replacement'],
      rows: [
        { aspect: 'Total after the first draw', values: ['Same as before', 'One less'], key: true },
        { aspect: '4 red of 10, two red in a row', values: ['4/10 × 4/10 = 4/25', '4/10 × 3/9 = 2/15'] },
        { aspect: 'Draws independent?', values: ['Yes', 'No'] },
      ],
      reveal: 'Without replacement, both the count of the colour and the total fall by one after each draw.',
      whenToUse: ['The ball is put back before the next draw.', 'Balls are drawn together or not put back (the default).'],
    },
  ],
  shortcuts: [
    {
      pattern: 'Two dice, a given sum',
      example: 'Two dice are thrown. What is the probability that the sum is 9?',
      options: ['1/6', '1/9', '5/36', '1/12'],
      answer: '1/9',
      ladder: [
        { name: 'Standard', steps: ['List pairs: (3, 6), (4, 5), (5, 4), (6, 3).', '4 of 36 outcomes: 4/36 = 1/9.'], seconds: 30 },
        { name: 'Shortcut', steps: ['Sum above 7: ways = 13 − 9 = 4.', '4/36 = 1/9.'], seconds: 8 },
      ],
    },
    {
      pattern: 'At least one',
      example: 'A bag has 5 red and 4 green balls. Three balls are drawn at random. What is the probability that at least one is green?',
      options: ['5/42', '37/42', '10/21', '31/42'],
      answer: '37/42',
      ladder: [
        {
          name: 'Standard',
          steps: ['Add the cases 1, 2 and 3 green: ⁴C₁ × ⁵C₂ + ⁴C₂ × ⁵C₁ + ⁴C₃ = 40 + 30 + 4 = 74.', '74 out of ⁹C₃ = 84: 74/84 = 37/42.'],
          seconds: 75,
        },
        { name: 'Shortcut', steps: ['No green means all three red: ⁵C₃/⁹C₃ = 10/84 = 5/42.', '1 − 5/42 = 37/42.'], seconds: 25 },
        {
          name: 'Option elimination',
          steps: ['5/42 is the "none" case, a trap.', 'At least one of 4 green in 3 draws is very likely, so pick the largest: 37/42.'],
          seconds: 10,
        },
      ],
    },
    {
      pattern: 'Card: A or B',
      example: 'One card is drawn from a pack of 52. What is the probability that it is a king or a red card?',
      options: ['15/26', '7/13', '8/13', '1/2'],
      answer: '7/13',
      ladder: [
        { name: 'Standard', steps: ['Red cards 26, black kings 2 more: 28 favourable.', '28/52 = 7/13.'], seconds: 30 },
        { name: 'Shortcut', steps: ['4/52 + 26/52 − 2/52 (red kings counted twice) = 28/52 = 7/13.'], seconds: 15 },
        {
          name: 'Option elimination',
          steps: ['Red alone is 1/2, and kings add a little: must be just above 1/2.', '15/26 (30 cards) forgets the overlap. 7/13 is it.'],
          seconds: 12,
        },
      ],
    },
  ],
  qa: [
    {
      q: 'How many outcomes do two dice and three coins have?',
      a: ['Two dice: 6 × 6 = 36.', 'Three coins: 2³ = 8.'],
      tag: 'Asked often',
    },
    {
      q: 'Which sum is most likely with two dice?',
      a: ['7, with 6 ways: probability 1/6.', 'Ways fall by one each side: 6 and 8 have 5 ways.'],
      tag: 'Shortcut',
    },
    {
      q: 'Fastest way to find "at least one"?',
      a: ['1 − P(none).', 'At least one head in 3 coins: 1 − 1/8 = 7/8.'],
      tag: 'Shortcut',
    },
    {
      q: 'How many face cards are in a pack?',
      a: ['12: jack, queen and king of each of 4 suits.', 'Aces are not face cards.'],
      tag: 'Trap',
    },
    {
      q: 'Why subtract in P(king or red)?',
      a: ['The 2 red kings are counted in both groups.', 'Subtract the overlap once: 4 + 26 − 2 = 28.'],
      tag: 'Trap',
    },
    {
      q: 'Probability that a leap year has 53 Sundays?',
      a: ['A leap year has 52 weeks and 2 extra days.', 'Of 7 possible pairs, 2 contain a Sunday: 2/7.'],
      tag: 'Asked often',
    },
    {
      q: 'Can a probability be more than 1 or negative?',
      a: ['No. 0 ≤ P(E) ≤ 1.', 'An option like 7/5 can be struck off at once.'],
    },
    {
      q: 'Permutation or combination for drawing 2 balls from a bag?',
      a: ['Combination. The order of the balls does not matter.', 'Two red from 4 red: ⁴C₂ = 6 ways.'],
    },
    {
      q: 'Relation between ⁿPᵣ and ⁿCᵣ?',
      a: ['ⁿPᵣ = ⁿCᵣ × r!.', '⁷C₃ = 35, so ⁷P₃ = 35 × 6 = 210.'],
    },
    {
      q: 'Two dice: probability that the product is even?',
      a: ['Product is odd only if both are odd: 3/6 × 3/6 = 1/4.', 'Even = 1 − 1/4 = 3/4.'],
      tag: 'Shortcut',
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Two coins are tossed together. What is the probability of getting at least one head?',
      options: ['1/2', '1/4', '3/4', '1'],
      answer: 2,
      explain: 'Outcomes HH, HT, TH, TT. Only TT has no head. 1 − 1/4 = 3/4.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'A die is thrown once. What is the probability of getting a prime number?',
      options: ['1/2', '1/3', '2/3', '1/6'],
      answer: 0,
      explain: 'Primes on a die: 2, 3, 5. 3/6 = 1/2.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Two dice are thrown together. What is the probability that the sum is 7?',
      options: ['1/9', '5/36', '7/36', '1/6'],
      answer: 3,
      explain: '(1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1): 6 of 36 = 1/6.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Two dice are thrown together. What is the probability that the sum is 9?',
      options: ['1/9', '1/12', '5/36', '1/6'],
      answer: 0,
      explain: '(3, 6), (4, 5), (5, 4), (6, 3): 4 of 36 = 1/9.',
      shortcut: 'Sum above 7: 13 − 9 = 4 ways.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A card is drawn from a well-shuffled pack of 52. What is the probability that it is a king or a red card?',
      options: ['15/26', '1/2', '7/13', '8/13'],
      answer: 2,
      explain: '4/52 + 26/52 − 2/52 = 28/52 = 7/13. The 2 red kings are counted once.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'A card is drawn from a pack of 52. What is the probability that it is a face card?',
      options: ['1/13', '3/13', '4/13', '3/26'],
      answer: 1,
      explain: '12 face cards (J, Q, K of 4 suits). 12/52 = 3/13.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A bag has 5 red, 3 blue and 2 green balls. One ball is drawn at random. What is the probability that it is blue?',
      options: ['1/3', '3/7', '1/5', '3/10'],
      answer: 3,
      explain: '3 blue out of 10 balls: 3/10.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A bag has 4 red and 6 black balls. Two balls are drawn at random. What is the probability that both are red?',
      options: ['2/15', '4/25', '2/5', '1/15'],
      answer: 0,
      explain: 'Ways to pick 2 red from 4: ⁴C₂ = (4 × 3)/2 = 6. Ways to pick any 2 from 10: ¹⁰C₂ = (10 × 9)/2 = 45. Probability = 6/45 = 2/15.',
      shortcut: 'One after another: 4/10 × 3/9 = 2/15.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Three coins are tossed. What is the probability of getting exactly two heads?',
      options: ['1/4', '3/8', '1/2', '1/8'],
      answer: 1,
      explain: 'HHT, HTH, THH: 3 of 8 outcomes = 3/8.',
      shortcut: '³C₂/2³ = 3/8.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Two dice are thrown. What is the probability that the product of the numbers is even?',
      options: ['1/2', '1/4', '2/3', '3/4'],
      answer: 3,
      explain: 'Odd product needs both odd: 9 of 36 = 1/4. Even = 1 − 1/4 = 3/4.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'If P(A) = 0.4, P(B) = 0.5 and P(A and B) = 0.2, what is P(A or B)?',
      options: ['0.9', '0.7', '0.2', '0.5'],
      answer: 1,
      explain: 'P(A or B) = 0.4 + 0.5 − 0.2 = 0.7.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'A bag has 5 red and 4 green balls. Three balls are drawn at random. What is the probability that at least one is green?',
      options: ['5/42', '31/42', '37/42', '10/21'],
      answer: 2,
      explain: 'None green means all three are red. ⁵C₃ = (5 × 4 × 3)/(3 × 2 × 1) = 10 and ⁹C₃ = (9 × 8 × 7)/(3 × 2 × 1) = 84. So P(none green) = 10/84 = 5/42. At least one green = 1 − 5/42 = 37/42.',
      shortcut: 'Use 1 − P(none).',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'What is the probability that a leap year, chosen at random, has 53 Sundays?',
      options: ['1/7', '2/7', '3/7', '53/366'],
      answer: 1,
      explain: '366 days = 52 weeks + 2 days. The 2 extra days form one of 7 pairs (Sun-Mon, …, Sat-Sun); 2 contain Sunday. 2/7.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'A number is chosen at random from 1 to 50. What is the probability that it is divisible by 3 or 5?',
      options: ['23/50', '13/25', '9/25', '1/2'],
      answer: 0,
      explain: 'Multiples of 3: 16. Multiples of 5: 10. Multiples of 15 (counted twice): 3. 16 + 10 − 3 = 23, so 23/50.',
      shortcut: 'Addition rule: subtract the overlap (multiples of 15) once.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        'A bag has 3 red and 5 blue balls. A ball is drawn, its colour noted, and it is put back. A second ball is then drawn. What is the probability that both balls are blue?',
      options: ['5/14', '25/64', '15/64', '5/8'],
      answer: 1,
      explain:
        'The ball is put back (with replacement), so the bag is the same for both draws and the draws are independent. P(blue) = 5/8 each time. P(both blue) = 5/8 × 5/8 = 25/64.',
      shortcut: '5/14 = 5/8 × 4/7 is the answer without replacement. Read whether the ball goes back.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        'Two dice are thrown. What is the probability of getting a doublet (the same number on both dice) or a sum of 4?',
      options: ['1/4', '1/6', '2/9', '5/18'],
      answer: 2,
      explain:
        'Doublets: (1, 1) to (6, 6), 6 outcomes. Sum 4: (1, 3), (2, 2), (3, 1), 3 outcomes. (2, 2) is in both lists, so count it once: 6 + 3 − 1 = 8 outcomes of 36. P = 8/36 = 2/9.',
      shortcut: 'Addition rule: P(A or B) = P(A) + P(B) − P(both) = 6/36 + 3/36 − 1/36.',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'The probability of an event can be 1.2 if the event is very likely.',
      answer: false,
      explain: 'Every probability lies between 0 and 1. A certain event has probability exactly 1.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'The number of ways to choose 3 people from 7 is greater than the number of ways to arrange 3 of 7 people in a row.',
      answer: false,
      explain: '⁷C₃ = 35 but ⁷P₃ = 210. Arranging counts each selection 3! = 6 times.',
    },
  ],
};

export default topic;
