import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'trig-identities',
  title: 'Ratios, identities and standard angles',
  level: 'intermediate',
  masteryMinutes: 120,
  reviseMinutes: 40,
  priority: 'high',
  weightage: { tier1: 2, tier2: 2 },
  tags: ['trigonometry', 'standard angles', 'identities', 'complementary angles', 'sec tan', 'maximum minimum', 'putting values'],
  summary:
    'Learn the standard-angle table and the three Pythagorean identities cold. Most questions then fall to one of four moves: factorise a pair, use a complementary angle, apply √(a² + b²), or put θ = 0° or 45°.',
  patterns: [
    { name: 'Simplify using the three identities', frequency: 'most', example: 'Find the value of (1 − sin²θ) × sec²θ.' },
    { name: 'Standard-angle values', frequency: 'most', example: 'Find sin²30° + cos²30° + tan²45°.' },
    { name: 'secθ + tanθ = k and cosecθ + cotθ = k', frequency: 'often', example: 'If secθ + tanθ = 4, find sinθ.' },
    { name: 'Complementary angles', frequency: 'often', example: 'If sin 3A = cos(A − 26°), find A.' },
    { name: 'Maximum and minimum values', frequency: 'often', example: 'Maximum value of 5 sinθ + 12 cosθ?' },
    { name: 'Given one ratio, find an expression', frequency: 'often', example: 'If 4 tanθ = 3, find (4 sinθ − cosθ)/(4 sinθ + cosθ).' },
    { name: 'Long products and sums over angles', frequency: 'rare', example: 'tan1° × tan2° × … × tan89° = ?' },
  ],
  keyPoints: [
    {
      title: 'The six ratios',
      text: 'In a right triangle with angle θ: sin = perpendicular over hypotenuse, cos = base over hypotenuse, tan = perpendicular over base. cosec, sec and cot are their reciprocals. Know the triplets 3-4-5, 5-12-13, 8-15-17 and 7-24-25.',
      formula: 'sinθ = P/H, cosθ = B/H, tanθ = P/B = (sinθ)/(cosθ)',
      example: 'tanθ = 8/15 gives the triangle 8, 15, 17, so sinθ = 8/17 and cosθ = 15/17.',
    },
    {
      title: 'Standard-angle table (0°, 30°, 45°, 60°, 90°)',
      text: 'sin: 0, 1/2, 1/√2, √3/2, 1. cos is the same row reversed. tan: 0, 1/√3, 1, √3, not defined. Trick for sin: √0/2, √1/2, √2/2, √3/2, √4/2.',
      example: 'sin30° + cos60° = 1/2 + 1/2 = **1**.',
    },
    {
      title: 'The three Pythagorean identities',
      text: 'Every simplification question uses one of these. Read them in factor form too, because questions hide them that way.',
      formula: 'sin²θ + cos²θ = 1; sec²θ − tan²θ = 1; cosec²θ − cot²θ = 1',
      example: '(1 − sin²θ) × sec²θ = cos²θ × 1/cos²θ = **1**.',
    },
    {
      title: 'The secθ + tanθ pair',
      text: 'Since (secθ + tanθ)(secθ − tanθ) = 1, if secθ + tanθ = k then secθ − tanθ = 1/k. Add and subtract to get secθ and tanθ. The same works for cosecθ + cotθ.',
      formula: 'secθ + tanθ = k ⇒ sinθ = (k² − 1)/(k² + 1)',
      example: 'k = 4: sinθ = 15/17. Check: secθ = 17/8, tanθ = 15/8.',
    },
    {
      title: 'Complementary angles',
      text: 'sin(90° − θ) = cosθ, tan(90° − θ) = cotθ, sec(90° − θ) = cosecθ. So if sin A = cos B (both acute), then A + B = 90°. Products like tanθ × tan(90° − θ) = 1.',
      formula: 'sin A = cos B ⇒ A + B = 90°',
      example: 'sin 3A = cos(A − 26°): 3A + A − 26° = 90°, so A = **29°**.',
    },
    {
      title: 'Maximum and minimum values',
      text: 'a sinθ + b cosθ always lies between −√(a² + b²) and +√(a² + b²). For a tan²θ + b cot²θ (and the sec, cosec forms) use AM ≥ GM: minimum 2√(ab). sinθ cosθ is at most 1/2.',
      formula: 'max of a sinθ + b cosθ = √(a² + b²); min of a tan²θ + b cot²θ = 2√(ab)',
      example: '5 sinθ + 12 cosθ: max √(25 + 144) = **13**. 9 tan²θ + 4 cot²θ: min 2√36 = **12**.',
    },
    {
      title: 'Given one ratio, divide through',
      text: 'When an expression has sinθ and cosθ of the same power in every term, divide top and bottom by cosθ to get it in tanθ only.',
      formula: '(a sinθ + b cosθ)/(c sinθ + d cosθ) = (a tanθ + b)/(c tanθ + d)',
      example: '4 tanθ = 3: (4 sinθ − cosθ)/(4 sinθ + cosθ) = (3 − 1)/(3 + 1) = **1/2**.',
    },
    {
      title: 'Putting values',
      text: 'If an expression is an identity (same value for every θ), put θ = 0°, 45° or 90° and check which option matches. Choose a value where no term becomes undefined.',
      example: 'sin⁶θ + cos⁶θ + 3 sin²θ cos²θ at θ = 0°: 0 + 1 + 0 = **1**.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'Reading the ratios off one triangle',
      figure: {
        viewBox: '0 70 320 150',
        svg: `
<polygon points="262,99 58,184 262,184" class="d-fill"/>
<line x1="262" y1="184" x2="262" y2="99" class="d-red d-thick" data-step="1 3"/>
<line x1="58" y1="184" x2="262" y2="184" class="d-blue d-thick" data-step="1 3"/>
<line x1="58" y1="184" x2="262" y2="99" class="d-green d-thick" data-step="2 3"/>
<path d="M253,184 L253,175 L262,175" class="d-thin"/>
<path d="M98,184 A40,40 0 0 0 94.9,168.6" class="d-thin" data-step="1"/>
<text x="104" y="178" data-step="1">θ</text>
<path d="M238,109 A26,26 0 0 0 262,125" class="d-thin" data-step="4 5"/>
<text x="232" y="141" text-anchor="end" class="d-small" data-step="4 5">90° − θ</text>
<text x="270" y="146.5" class="d-red" data-step="1 3">P = 5</text>
<text x="160" y="204" text-anchor="middle" class="d-blue" data-step="1 3">B = 12</text>
<text x="154" y="133.5" text-anchor="end" class="d-green" data-step="2 3">H = 13</text>`,
      },
      explain: [
        'Stand at angle θ. The side facing it is the perpendicular P = 5; the side next to it is the base B = 12.',
        'The side facing the right angle is the hypotenuse H = 13 (the 5-12-13 triplet).',
        'sinθ = P/H = 5/13, cosθ = B/H = 12/13, tanθ = P/B = 5/12. Flip each one for cosec, sec and cot.',
        'The other acute angle is 90° − θ. From that corner, 12 is the side facing it and 5 is next to it.',
        'So sin(90° − θ) = 12/13 = cosθ. The **complementary-angle rule** is the same triangle seen from the other corner.',
      ],
    },
    {
      type: 'diagram',
      title: 'Where the 30°, 45° and 60° values come from',
      figure: {
        viewBox: '0 0 320 212',
        svg: `
<polygon points="26,178 26,74 130,178" class="d-fill-blue" data-step="1 2"/>
<path d="M35,178 L35,169 L26,169" class="d-thin"/>
<path d="M111.6,159.6 A26,26 0 0 0 104,178" class="d-thin" data-step="2"/>
<text x="100" y="172" text-anchor="end" class="d-small" data-step="2">45°</text>
<text x="20" y="131" text-anchor="end" data-step="1">1</text>
<text x="78" y="198" text-anchor="middle" data-step="1">1</text>
<text x="86" y="122" class="d-blue" data-step="1 2">√2</text>
<line x1="170" y1="178" x2="234" y2="67.1" class="d-dash d-soft"/>
<line x1="170" y1="178" x2="234" y2="178" class="d-dash d-soft"/>
<polygon points="234,67.1 234,178 298,178" class="d-fill-pink" data-step="3 4 5"/>
<path d="M242,178 L242,170 L234,170" class="d-thin"/>
<path d="M287,158.9 A22,22 0 0 0 276,178" class="d-thin" data-step="4"/>
<text x="272" y="172" text-anchor="end" class="d-small" data-step="4">60°</text>
<path d="M234,95.1 A28,28 0 0 0 248,91.4" class="d-thin" data-step="5"/>
<text x="238" y="111.1" class="d-small" data-step="5">30°</text>
<text x="266" y="198" text-anchor="middle" class="d-red" data-step="3 4 5">1</text>
<text x="228" y="142.6" text-anchor="end" class="d-red" data-step="3 4 5">√3</text>
<text x="274" y="120.6" class="d-red" data-step="3 4 5">2</text>`,
      },
      explain: [
        'Cut a square of side 1 along its diagonal: legs 1 and 1, hypotenuse √(1 + 1) = √2.',
        'Both acute angles are 45°, so sin45° = cos45° = 1/√2 and tan45° = 1.',
        'Cut an equilateral triangle of side 2 in half: base 1, hypotenuse 2, height √(4 − 1) = √3.',
        'At the 60° corner: sin60° = √3/2, cos60° = 1/2, tan60° = √3.',
        'At the 30° corner the two legs swap roles: sin30° = 1/2, cos30° = √3/2, tan30° = 1/√3.',
      ],
    },
    {
      type: 'diagram',
      title: 'secθ + tanθ = 4 builds an 8-15-17 triangle',
      figure: {
        viewBox: '0 0 320 218',
        svg: `
<polygon points="45.6,192 116,192 116,60" class="d-fill" data-step="3"/>
<path d="M107,192 L107,183 L116,183" class="d-thin"/>
<path d="M65.6,192 A20,20 0 0 0 55,174.4" class="d-thin" data-step="4"/>
<text x="65.6" y="185" data-step="4">θ</text>
<text x="80.8" y="210" text-anchor="middle" class="d-blue" data-step="3">8</text>
<text x="122" y="131" class="d-red" data-step="3 4">15</text>
<text x="72.8" y="126" text-anchor="end" class="d-green" data-step="3 4">17</text>
<text x="150" y="44" data-step="1">sec θ + tan θ = 4</text>
<text x="150" y="72" data-step="1 2">sec θ − tan θ = 1/4</text>
<text x="150" y="108" class="d-small d-blue" data-step="2 3">sec θ = 17/8 = H/B</text>
<text x="150" y="132" class="d-small d-blue" data-step="2 3">tan θ = 15/8 = P/B</text>
<text x="150" y="176" class="d-red" data-step="4">sin θ = 15/17</text>`,
      },
      explain: [
        'Key fact: (secθ + tanθ)(secθ − tanθ) = sec²θ − tan²θ = 1. So secθ − tanθ = 1/4.',
        'Add the two lines: 2 secθ = 4 + 1/4 = 17/4, so secθ = 17/8. Subtract them: 2 tanθ = 15/4, so tanθ = 15/8.',
        'secθ = H/B and tanθ = P/B, so the triangle has base 8, perpendicular 15 and hypotenuse 17.',
        'Read off sinθ = P/H = **15/17**. Shortcut: (k² − 1)/(k² + 1) = (16 − 1)/(16 + 1).',
      ],
    },
  ],
  comparisons: [
    {
      title: 'The three identity families',
      items: ['sin and cos', 'sec and tan', 'cosec and cot'],
      rows: [
        { aspect: 'Identity', values: ['sin²θ + cos²θ = 1', 'sec²θ − tan²θ = 1', 'cosec²θ − cot²θ = 1'] },
        {
          aspect: 'Factor form',
          values: ['(1 − sinθ)(1 + sinθ) = cos²θ', '(secθ − tanθ)(secθ + tanθ) = 1', '(cosecθ − cotθ)(cosecθ + cotθ) = 1'],
          key: true,
        },
        { aspect: 'Range', values: ['Both between −1 and 1', 'sec ≥ 1 or ≤ −1; tan any value', 'cosec ≥ 1 or ≤ −1; cot any value'] },
        { aspect: 'Complementary partner', values: ['sin(90° − θ) = cosθ', 'sec(90° − θ) = cosecθ', 'cot(90° − θ) = tanθ'] },
      ],
      reveal: 'The sec and cosec families multiply to 1 in factor form, so a sum of k always means a difference of 1/k.',
      whenToUse: [
        'Terms like 1 − sin²θ or sin⁴θ − cos⁴θ.',
        'Given secθ + tanθ or secθ − tanθ, or terms in sec² and tan².',
        'Given cosecθ + cotθ or cosecθ − cotθ, or terms in cosec² and cot².',
      ],
    },
  ],
  shortcuts: [
    {
      pattern: 'secθ + tanθ = k, find sinθ',
      example: 'If secθ + tanθ = 4, what is sinθ?',
      options: ['8/17', '15/17', '17/15', '8/15'],
      answer: '15/17',
      ladder: [
        {
          name: 'Standard',
          steps: [
            'secθ − tanθ = 1/(secθ + tanθ) = 1/4.',
            'Add: 2 secθ = 17/4, so secθ = 17/8. Subtract: tanθ = 15/8.',
            'sinθ = tanθ ÷ secθ = 15/17.',
          ],
          seconds: 60,
        },
        { name: 'Shortcut', steps: ['sinθ = (k² − 1)/(k² + 1) = 15/17.'], seconds: 10 },
        {
          name: 'Option elimination',
          steps: ['sinθ can never exceed 1, so 17/15 goes.', 'With k = 4 the triangle is 8-15-17, and sin takes the bigger side: 15/17.'],
          seconds: 15,
        },
      ],
    },
    {
      pattern: 'Maximum of a sinθ + b cosθ',
      example: 'What is the maximum value of 5 sinθ + 12 cosθ?',
      options: ['17', '13', '12', '7'],
      answer: '13',
      ladder: [
        {
          name: 'Standard',
          steps: ['Write 5 sinθ + 12 cosθ = 13 sin(θ + α) with cosα = 5/13, sinα = 12/13.', 'sin is at most 1, so the maximum is 13.'],
          seconds: 60,
        },
        { name: 'Shortcut', steps: ['√(a² + b²) = √(25 + 144) = 13.'], seconds: 8 },
        {
          name: 'Option elimination',
          steps: ['Both terms cannot peak at the same θ, so 17 is too big.', 'It must beat 12 (take θ a bit above 0°), leaving 13.'],
          seconds: 15,
        },
      ],
    },
    {
      pattern: 'Identity to simplify',
      example: 'Find the value of sin⁶θ + cos⁶θ + 3 sin²θ cos²θ.',
      options: ['0', '1', '2', '3'],
      answer: '1',
      ladder: [
        {
          name: 'Standard',
          steps: ['Let a = sin²θ, b = cos²θ, so a + b = 1.', 'a³ + b³ = (a + b)³ − 3ab(a + b) = 1 − 3ab.', 'Add 3ab: the value is 1.'],
          seconds: 50,
        },
        { name: 'Put values', steps: ['Put θ = 0°: sin = 0, cos = 1.', '0 + 1 + 0 = 1.'], seconds: 10 },
      ],
    },
  ],
  qa: [
    {
      q: 'Recite the sin row of the standard table.',
      a: ['0°: 0, 30°: 1/2, 45°: 1/√2, 60°: √3/2, 90°: 1.', 'Memory aid: √0/2, √1/2, √2/2, √3/2, √4/2.', 'cos is the same row read backwards.'],
      tag: 'Asked often',
    },
    {
      q: 'If secθ + tanθ = k, what is secθ − tanθ?',
      a: ['1/k, because their product is sec²θ − tan²θ = 1.', 'Then sinθ = (k² − 1)/(k² + 1).'],
      tag: 'Shortcut',
    },
    {
      q: 'If sin A = cos B and both are acute, what can you say?',
      a: ['A + B = 90°.', 'Same for tan A = cot B and sec A = cosec B.'],
      tag: 'Asked often',
    },
    {
      q: 'Maximum and minimum of a sinθ + b cosθ?',
      a: ['Maximum √(a² + b²), minimum −√(a² + b²).', 'Add any constant outside: 7 + 3 sinθ − 4 cosθ has maximum 7 + 5 = 12.'],
      tag: 'Shortcut',
    },
    {
      q: 'Minimum of a tan²θ + b cot²θ?',
      a: ['2√(ab), by AM ≥ GM, since tan²θ × cot²θ = 1.', '9 tan²θ + 4 cot²θ has minimum 2 × 6 = 12.'],
    },
    {
      q: 'Is tan90° equal to a very large number?',
      a: ['No. tan90° and sec90° are not defined.', 'cot0° and cosec0° are not defined either.'],
      tag: 'Trap',
    },
    {
      q: 'Is sin 2θ the same as 2 sinθ?',
      a: ['No. sin60° = √3/2, but 2 sin30° = 1.', 'Ratios are not linear in the angle.'],
      tag: 'Trap',
    },
    {
      q: 'What is tan1° × tan2° × … × tan89°?',
      a: ['1. Pair tanθ with tan(90° − θ) = cotθ; each pair is 1.', 'The middle term tan45° is also 1.'],
    },
    {
      q: 'If sinθ + sin²θ = 1, what is cos²θ + cos⁴θ?',
      a: ['sinθ = 1 − sin²θ = cos²θ.', 'So cos²θ + cos⁴θ = sinθ + sin²θ = 1.'],
      tag: 'Asked often',
    },
    {
      q: 'When can you safely "put values" to solve an identity question?',
      a: ['When the answer is a fixed number for every θ.', 'Pick 0°, 45° or 90°, avoiding any value that makes a term undefined.'],
      tag: 'Shortcut',
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'What is the value of sin30° + cos60°?',
      options: ['1/2', '1', '√3', '3/2'],
      answer: 1,
      explain: 'sin30° = 1/2 and cos60° = 1/2, so the sum is 1.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'What is the value of sin²30° + cos²30° + tan²45°?',
      options: ['1', '3/2', '2', '5/2'],
      answer: 2,
      explain: 'sin²30° + cos²30° = 1 and tan²45° = 1, so the value is 2.',
      shortcut: 'sin² + cos² of the same angle is always 1.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'If sin 3A = cos(A − 26°), where 3A is an acute angle, what is A?',
      options: ['29°', '26°', '32°', '36°'],
      answer: 0,
      explain: 'sin 3A = cos(A − 26°) means 3A + A − 26° = 90°, so 4A = 116° and A = 29°.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'If secθ + tanθ = 4, what is the value of sinθ?',
      options: ['8/17', '17/15', '15/17', '8/15'],
      answer: 2,
      explain: 'secθ − tanθ = 1/4. Adding gives secθ = 17/8; tanθ = 15/8. sinθ = tanθ ÷ secθ = 15/17.',
      shortcut: 'sinθ = (k² − 1)/(k² + 1) = 15/17.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'What is the maximum value of 5 sinθ + 12 cosθ?',
      options: ['17', '12', '7', '13'],
      answer: 3,
      explain: 'Maximum of a sinθ + b cosθ = √(a² + b²) = √(25 + 144) = 13.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'If 4 tanθ = 3, what is the value of (4 sinθ − cosθ)/(4 sinθ + cosθ)?',
      options: ['1/2', '2/3', '1/3', '3/4'],
      answer: 0,
      explain: 'Divide top and bottom by cosθ: (4 tanθ − 1)/(4 tanθ + 1) = (3 − 1)/(3 + 1) = 1/2.',
      shortcut: 'Replace 4 tanθ by 3 directly.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'What is the value of (1 − sin²θ) × sec²θ?',
      options: ['0', '1', 'tan²θ', 'cos²θ'],
      answer: 1,
      explain: '1 − sin²θ = cos²θ, and cos²θ × sec²θ = 1.',
      shortcut: 'Put θ = 0°: (1 − 0) × 1 = 1.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'If cosθ + sinθ = √2 cosθ, then cosθ − sinθ equals:',
      options: ['√2 cosθ', '2 sinθ', '√2 sinθ', 'sinθ'],
      answer: 2,
      explain:
        'Move cosθ across: sinθ = (√2 − 1)cosθ. Divide by (√2 − 1) and multiply top and bottom by (√2 + 1): cosθ = (√2 + 1)sinθ. So cosθ − sinθ = (√2 + 1)sinθ − sinθ = √2 sinθ.',
      shortcut: 'Square both: (c + s)² + (c − s)² = 2, so (c − s)² = 2 − 2c² = 2s².',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'What is the value of tan1° × tan2° × tan3° × … × tan89°?',
      options: ['0', '1', '√3', 'Not defined'],
      answer: 1,
      explain: 'tanθ × tan(90° − θ) = tanθ × cotθ = 1. All pairs give 1 and tan45° = 1.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'What is the value of sin²5° + sin²10° + sin²15° + … + sin²85°?',
      options: ['8', '9', '17/2', '19/2'],
      answer: 2,
      explain: 'There are 17 terms. Pair sin²θ with sin²(90° − θ) = cos²θ: 8 pairs give 8. The middle term sin²45° = 1/2. Total 17/2.',
      shortcut: 'For n terms that pair up this way, sum = n/2 = 17/2.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'What is the maximum value of 7 + 3 sinθ − 4 cosθ?',
      options: ['14', '12', '10', '5'],
      answer: 1,
      explain: '3 sinθ − 4 cosθ lies between −5 and 5. Maximum = 7 + 5 = 12.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'If sinθ + sin²θ = 1, what is the value of cos²θ + cos⁴θ?',
      options: ['0', '2', '1/2', '1'],
      answer: 3,
      explain: 'sinθ = 1 − sin²θ = cos²θ. So cos²θ + cos⁴θ = sinθ + sin²θ = 1.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'What is the minimum value of 9 tan²θ + 4 cot²θ?',
      options: ['13', '6', '12', '36'],
      answer: 2,
      explain: 'AM ≥ GM: 9 tan²θ + 4 cot²θ ≥ 2√(9 × 4) = 12, since tan²θ × cot²θ = 1.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'What is the value of sin⁶θ + cos⁶θ + 3 sin²θ cos²θ?',
      options: ['0', '1', '2', '3'],
      answer: 1,
      explain: 'With a = sin²θ, b = cos²θ and a + b = 1: a³ + b³ = 1 − 3ab. Adding 3ab gives 1.',
      shortcut: 'Put θ = 0°: 0 + 1 + 0 = 1.',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'sin60° = 2 × sin30°.',
      answer: false,
      explain: 'sin60° = √3/2 ≈ 0.866, but 2 × sin30° = 1.',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'sec²θ − tan²θ = 1 for every θ at which both are defined.',
      answer: true,
      explain: 'Divide sin²θ + cos²θ = 1 by cos²θ: tan²θ + 1 = sec²θ.',
    },
  ],
};

export default topic;
