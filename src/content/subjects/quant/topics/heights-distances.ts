import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'heights-distances',
  title: 'Heights and distances',
  level: 'beginner',
  masteryMinutes: 60,
  reviseMinutes: 20,
  priority: 'medium',
  tags: ['angle of elevation', 'angle of depression', 'tower', 'shadow', '30-60-90', '45-45-90', 'two observers'],
  summary:
    'Finding the height of a tower, tree or cliff, or a distance on the ground, from the angle at which its top is seen. Almost every question uses 30°, 45° or 60°, so it is a right-triangle ratio problem. Learn the side ratios 1 : √3 : 2 and 1 : 1 : √2 and a few ready formulas.',
  patterns: [
    {
      name: 'Observer walks toward the tower (two angles, same side)',
      frequency: 'most',
      example: 'Angle changes from 30° to 60° after walking 40 m toward a tower. Height?',
    },
    {
      name: 'Single angle: find height or distance',
      frequency: 'most',
      example: 'The top of a tower 50√3 m high is seen at 60°. How far away is the observer?',
    },
    {
      name: 'Angle of depression from a cliff, building or plane',
      frequency: 'often',
      example: 'From a 75 m cliff a boat is seen at a depression of 30°. Distance of the boat?',
    },
    {
      name: 'Two buildings: elevation and depression from one top',
      frequency: 'often',
      example: 'From a 60 m building the top and foot of a tower are at depressions 30° and 60°. Tower height?',
    },
    { name: "Shadow length and the sun's altitude", frequency: 'often', example: 'A shadow is 60 m longer at 30° than at 60°. Height of the tower?' },
    {
      name: 'Observers on opposite sides of a tower',
      frequency: 'often',
      example: 'A 100 m tower is seen at 30° and 45° from two sides. Distance between observers?',
    },
    {
      name: 'Complementary angles; flagstaff on a building; ladders',
      frequency: 'rare',
      example: 'Angles from 9 m and 16 m are complementary. Height of the tower?',
    },
  ],
  keyPoints: [
    {
      title: 'Elevation and depression',
      text: 'Elevation is measured up from the horizontal, depression down from the horizontal. The angle of depression from A to B equals the angle of elevation from B to A (alternate angles). Put the depression angle at the bottom of your figure.',
      example: 'Depression 30° from a cliff top to a boat = elevation 30° from the boat to the cliff top.',
    },
    {
      title: 'Values you use every time',
      text: 'tan 30° = 1/√3, tan 45° = 1, tan 60° = √3. sin 30° = cos 60° = 1/2, sin 60° = cos 30° = √3/2. Use √3 ≈ 1.732 when options are decimals.',
      formula: 'tan θ = height/(horizontal distance)',
      example: 'Tower 50√3 at 60°: distance = 50√3/√3 = **50 m**.',
    },
    {
      title: '30-60-90 and 45-45-90 triangles',
      text: 'Sides opposite 30°, 60°, 90° are in the ratio 1 : √3 : 2. In a 45-45-90 triangle the legs are equal and the hypotenuse is leg × √2. No trig needed once you know these.',
      formula: '1 : √3 : 2  and  1 : 1 : √2',
      example: 'Kite string 100 m at 30°: height = half the string = **50 m**.',
    },
    {
      title: 'Same side: observer moves distance d toward the tower',
      text: 'Angles α (near, larger) and β (far, smaller). The distance walked is the difference of the two ground distances. Here cot = 1/tan, so ground distance = h cot(angle): h√3 at 30°, h at 45°, h/√3 at 60°.',
      formula: 'h = d/(cot β − cot α)',
      example: '30° → 60°, d = 40: h = 40/(√3 − 1/√3) = 40 × √3/2 = **20√3 m**.',
    },
    {
      title: '30° and 60° shortcut',
      text: 'For 30° then 60°: h = √3/2 × d, and the near point is d/2 from the foot. The far distance is 3 times the near one. For 30° then 45°: h = d/(√3 − 1) = d(√3 + 1)/2.',
      formula: '30° and 60°: h = √3/2 × d;  30° and 45°: h = (√3 + 1)/2 × d',
      example: '30° → 45° after 100 m: h = 50(√3 + 1) ≈ **136.6 m**.',
    },
    {
      title: 'Opposite sides of the tower',
      text: 'Two observers on either side see the top at α and β. The distance between them is the sum of the two ground distances.',
      formula: 'd = h(cot α + cot β),  h = d/(cot α + cot β)',
      example: 'h = 100, angles 30° and 45°: d = 100(√3 + 1) ≈ **273.2 m**.',
    },
    {
      title: 'From the top of a building',
      text: 'Observer at height H. The depression to the foot of a tower gives the gap x = H cot(depression). Then use that x for the second angle: tower height = H ± x tan(second angle).',
      example: '60 m building, depressions 30° (top) and 60° (foot): x = 20√3, drop = 20√3 × 1/√3 = 20, tower = **40 m**.',
    },
    {
      title: 'Complementary angles and shadows',
      text: 'If the elevations from distances a and b (same line, same side) add to 90°, then h = √(ab). The shadow of a height h at sun altitude θ is h cot θ; lower sun means a longer shadow.',
      formula: 'h = √(ab)',
      example: 'From 4 m and 9 m: h = √36 = **6 m**.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'Walking closer: 30° becomes 60°',
      figure: {
        viewBox: '0 0 320 214',
        svg: `
<polygon points="282,59.5 205.5,192 52.5,192" class="d-fill-pink" data-step="4"/>
<line x1="20" y1="192" x2="300" y2="192" class="d-soft"/>
<line x1="282" y1="192" x2="282" y2="59.5" class="d-thick"/>
<line x1="205.5" y1="192" x2="282" y2="59.5" class="d-blue" data-step="1 4"/>
<line x1="52.5" y1="192" x2="282" y2="59.5" class="d-red" data-step="2 4"/>
<path d="M273,192 L273,183 L282,183" class="d-thin"/>
<path d="M225.5,192 A20,20 0 0 0 215.5,174.7" class="d-blue" data-step="1"/>
<text x="225.5" y="184" class="d-small d-blue" data-step="1">60°</text>
<path d="M86.5,192 A34,34 0 0 0 81.9,175" class="d-red" data-step="2"/>
<text x="90.5" y="187" class="d-small d-red" data-step="2">30°</text>
<path d="M269,82 A26,26 0 0 0 282,85.5" class="d-thin" data-step="4"/>
<path d="M256,74.5 A30,30 0 0 0 267,85.5" class="d-thin" data-step="4"/>
<text x="272" y="53.5" text-anchor="end">A</text>
<text x="288" y="210">B</text>
<text x="205.5" y="210" text-anchor="middle">C</text>
<text x="52.5" y="210" text-anchor="middle">D</text>
<text x="129" y="210" text-anchor="middle" class="d-red" data-step="2 3">60 m</text>
<text x="243.8" y="210" text-anchor="middle" class="d-blue" data-step="1 5">x</text>
<text x="290" y="125.7" data-step="3 5">h</text>`,
      },
      explain: [
        'From C the top is at 60°: tan 60° = h/x, so x = h/√3.',
        'From D, 60 m further back, it is at 30°: tan 30° = h/(x + 60), so x + 60 = h√3.',
        'Subtract: h√3 − h/√3 = 2h/√3 = 60, so h = **30√3 m** (about 52 m).',
        'Quick check: ∠CAD = 60° − 30° = 30° = ∠D, so △ACD is isosceles: AC = CD = 60 and h = 60 × sin 60° = 30√3.',
        'Shortcut for 30° then 60°: h = √3/2 × d, and the near point is d/2 = 30 m from the foot.',
      ],
    },
    {
      type: 'diagram',
      title: 'Depression at the top = elevation at the bottom',
      figure: {
        viewBox: '0 0 320 214',
        svg: `
<polygon points="28,192 58,192 58,77 28,77" class="d-fill-green"/>
<line x1="20" y1="192" x2="300" y2="192" class="d-soft"/>
<line x1="58" y1="77" x2="300" y2="77" class="d-dash" data-step="1 2"/>
<line x1="58" y1="77" x2="257.2" y2="192" class="d-red" data-step="3"/>
<path d="M96.1,99 A44,44 0 0 0 102,77" class="d-blue" data-step="1"/>
<text x="108" y="95" class="d-small d-blue" data-step="1">30°</text>
<path d="M219.1,170 A44,44 0 0 0 213.2,192" class="d-blue" data-step="2"/>
<text x="207.2" y="186" text-anchor="end" class="d-small d-blue" data-step="2">30°</text>
<polygon points="245.2,186 269.2,186 263.2,192 251.2,192" class="d-fill-blue"/>
<text x="257.2" y="210" text-anchor="middle" class="d-small">boat</text>
<text x="52" y="69" text-anchor="middle" class="d-small d-soft" data-step="1">eye</text>
<text x="64" y="139.5" data-step="3">50 m</text>
<text x="157.6" y="210" text-anchor="middle" data-step="3 4">x</text>`,
        caption: 'A 50 m cliff, boat seen at a depression of 30°',
      },
      explain: [
        'The angle of depression is measured down from the horizontal at the eye (dashed line), here 30°.',
        'The dashed line and the ground are parallel, so the angle at the boat is also 30° (alternate angles).',
        'Now use the right triangle at the boat: tan 30° = 50/x.',
        'x = 50 ÷ (1/√3) = 50√3 ≈ **86.6 m**.',
      ],
    },
    {
      type: 'diagram',
      title: 'From a rooftop: two angles of depression',
      figure: {
        viewBox: '0 0 320 214',
        svg: `
<polygon points="96,192 96,36 76,36 76,192" class="d-fill-green"/>
<line x1="20" y1="192" x2="300" y2="192" class="d-soft"/>
<line x1="186.1" y1="192" x2="186.1" y2="88" class="d-thick" data-step="3"/>
<line x1="96" y1="36" x2="300" y2="36" class="d-dash"/>
<line x1="96" y1="36" x2="186.1" y2="192" class="d-blue" data-step="1"/>
<line x1="96" y1="36" x2="186.1" y2="88" class="d-red" data-step="2"/>
<line x1="186.1" y1="88" x2="96" y2="88" class="d-dash d-soft d-thin" data-step="2 3"/>
<path d="M116,70.6 A40,40 0 0 0 136,36" class="d-blue" data-step="1"/>
<text x="126.8" y="75.4" class="d-small d-blue" data-step="1">60°</text>
<path d="M151.4,68 A64,64 0 0 0 160,36" class="d-red" data-step="2"/>
<text x="166" y="52" class="d-small d-red" data-step="2">30°</text>
<text x="90" y="30" text-anchor="end">Q</text>
<text x="72" y="210">P</text>
<text x="186.1" y="210" text-anchor="middle">R</text>
<text x="192.1" y="84">S</text>
<text x="70" y="119" text-anchor="end">60 m</text>
<text x="141" y="210" text-anchor="middle" class="d-blue" data-step="1">x</text>
<text x="86" y="67" text-anchor="middle" class="d-red d-small" data-step="2">20</text>
<text x="194.1" y="145" data-step="3 4">40 m</text>`,
        caption: 'Building 60 m high',
      },
      explain: [
        'Depression 60° to the foot R: the gap x = 60 × cot 60° = 60/√3 = 20√3 m.',
        'Depression 30° to the top S: across the same gap the line drops x × tan 30° = 20√3 × 1/√3 = 20 m.',
        'So the tower top is 20 m below the roof: tower = 60 − 20 = **40 m**.',
        'Pattern: with 30° and 60° the drop is 1/3 of the building, so the tower is 2/3 of it.',
      ],
    },
  ],
  comparisons: [
    {
      title: '30-60-90 vs 45-45-90 triangle',
      items: ['30-60-90 triangle', '45-45-90 triangle'],
      rows: [
        { aspect: 'Side ratio', values: ['1 : √3 : 2 (opposite 30°, 60°, 90°)', '1 : 1 : √2'], key: true },
        { aspect: 'tan values', values: ['tan 30° = 1/√3, tan 60° = √3', 'tan 45° = 1'] },
        { aspect: 'Height h, ground distance', values: ['h√3 at 30°, h/√3 at 60°', 'Equal to h'] },
        { aspect: 'Hypotenuse (string, ladder)', values: ['2h at 30°, 2h/√3 at 60°', 'h√2'] },
      ],
      reveal: 'At 45° height equals distance. At 30° the distance is √3 times the height; at 60° the height is √3 times the distance.',
      whenToUse: [
        'Angles 30° or 60°: answers usually carry √3.',
        'Angle 45°: height and distance are equal; answers carry √2 only with a hypotenuse.',
      ],
    },
    {
      title: 'Same side vs opposite sides',
      items: ['Same side (observer walks closer)', 'Opposite sides of the tower'],
      rows: [
        { aspect: 'Given distance d is', values: ['Difference of ground distances', 'Sum of ground distances'], key: true },
        { aspect: 'Formula', values: ['h = d/(cot β − cot α)', 'h = d/(cot α + cot β)'] },
        { aspect: '30° and 60°, d = 100 m', values: ['h = 50√3 ≈ 86.6 m', 'h = 25√3 ≈ 43.3 m'] },
      ],
      reveal: 'Draw the figure: if both points are on one side, subtract; if the tower is between them, add.',
      whenToUse: [
        '"Walks towards", "moves closer", "shadow becomes longer by".',
        '"On either side", "on opposite sides", "two ships on both sides of a lighthouse".',
      ],
    },
  ],
  shortcuts: [
    {
      pattern: 'Angle changes from 30° to 60° as you walk closer',
      example: 'The angle of elevation of the top of a tower changes from 30° to 60° as a man walks 60 m toward it. What is the height of the tower?',
      options: ['30√3 m', '60√3 m', '20√3 m', '30 m'],
      answer: '30√3 m',
      ladder: [
        {
          name: 'Standard',
          steps: [
            'Let height h, near distance x.',
            'tan 60° = h/x, so x = h/√3.',
            'tan 30° = h/(x + 60), so x + 60 = h√3.',
            'h√3 − h/√3 = 60, so 2h/√3 = 60 and h = 30√3.',
          ],
          seconds: 60,
        },
        { name: 'Shortcut', steps: ['For 30° and 60°: h = √3/2 × d = √3/2 × 60 = 30√3.'], seconds: 8 },
        { name: 'Ratio', steps: ['Far distance is 3 times the near one, so 60 m is 2 parts: near = 30 m.', 'h = 30 × tan 60° = 30√3.'], seconds: 15 },
      ],
    },
    {
      pattern: 'Complementary angles of elevation',
      example:
        'The angles of elevation of the top of a tower from two points 4 m and 9 m from its base, on the same line, are complementary. Find the height.',
      options: ['6 m', '6.5 m', '5 m', '13 m'],
      answer: '6 m',
      ladder: [
        { name: 'Standard', steps: ['tan θ = h/4 and tan(90° − θ) = cot θ = h/9.', 'tan θ × cot θ = 1, so h²/36 = 1.', 'h = 6 m.'], seconds: 40 },
        { name: 'Shortcut', steps: ['h = √(ab) = √(4 × 9) = 6 m.'], seconds: 5 },
        {
          name: 'Option elimination',
          steps: ['The height is the geometric mean, so it lies between 4 and 9 but below their average 6.5.', 'Only 6 m fits.'],
          seconds: 8,
        },
      ],
    },
    {
      pattern: 'Top of a building: elevation to one top, depression to its foot',
      example:
        'From the top of a 20 m building, the angle of elevation of the top of a tower is 60° and the angle of depression of its foot is 45°. What is the height of the tower?',
      options: ['20(1 + √3) m', '20√3 m', '40 m', '20(√3 − 1) m'],
      answer: '20(1 + √3) m',
      ladder: [
        {
          name: 'Standard',
          steps: [
            'Depression 45° to the foot: gap x = 20 × cot 45° = 20.',
            'Rise above the building: 20 × tan 60° = 20√3.',
            'Tower = 20 + 20√3 = 20(1 + √3).',
          ],
          seconds: 40,
        },
        { name: 'Shortcut', steps: ['Tower = H(1 + tan α ÷ tan β) = 20(1 + √3/1).'], seconds: 12 },
        {
          name: 'Option elimination',
          steps: ['The tower is taller than the building (elevation seen) and more than 20 + 20 = 40.', 'Only 20(1 + √3) ≈ 54.6 m is above 40.'],
          seconds: 8,
        },
      ],
    },
  ],
  qa: [
    {
      q: 'Is the angle of depression measured from the vertical?',
      a: ["No, from the horizontal line at the observer's eye.", 'It equals the angle of elevation from the other point.'],
      tag: 'Trap',
    },
    {
      q: 'Side ratio of a 30-60-90 triangle?',
      a: ['1 : √3 : 2, opposite 30°, 60° and 90°.', 'The side opposite 30° is half the hypotenuse.'],
      tag: 'Asked often',
    },
    {
      q: 'Angle changes 30° → 60° after walking d. Height?',
      a: ['h = √3/2 × d.', 'The near point is d/2 from the foot.'],
      tag: 'Shortcut',
    },
    {
      q: 'Angle changes 30° → 45° after walking d. Height?',
      a: ['h = d/(√3 − 1) = d(√3 + 1)/2.', 'd = 100 gives about 136.6 m.'],
      tag: 'Shortcut',
    },
    {
      q: 'Angles from distances a and b are complementary. Height?',
      a: ['h = √(ab).', 'From 9 m and 16 m: h = 12 m.'],
      tag: 'Asked often',
    },
    {
      q: "Sun's altitude falls. What happens to a shadow?",
      a: ['It gets longer: shadow = h cot θ.', 'At 45° the shadow equals the height.'],
      tag: 'Trap',
    },
    {
      q: 'Shadow at altitude 30° vs 60°: how much longer?',
      a: ['h√3 − h/√3 = 2h/√3.', 'So h = √3/2 × (difference).'],
    },
    {
      q: 'Observers on opposite sides: add or subtract distances?',
      a: ['Add: d = h(cot α + cot β).', 'Same side: subtract.'],
      tag: 'Trap',
    },
    {
      q: 'Car approaching a tower: depression 30° → 60° in t minutes. Time left to reach the foot?',
      a: ['Far distance is 3 times the near one, so 2 parts take t minutes.', 'The last 1 part takes t/2 minutes.'],
      tag: 'Asked often',
    },
    {
      q: 'Ladder of length L makes angle θ with the ground. Height reached on the wall?',
      a: ['L sin θ. Foot is L cos θ from the wall.', 'At 60° the foot is L/2 from the wall.'],
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'A ladder makes an angle of 60° with the ground and its foot is 5 m from the wall. How long is the ladder?',
      figure: {
        viewBox: '0 0 320 214',
        svg: `
<polygon points="240,192 240,30 256,30 256,192" class="d-fill-green"/>
<line x1="40" y1="192" x2="290" y2="192" class="d-soft"/>
<line x1="165" y1="192" x2="240" y2="62.1" class="d-thick"/>
<path d="M231,192 L231,183 L240,183" class="d-thin"/>
<path d="M187,192 A22,22 0 0 0 176,172.9"/>
<text x="189" y="184" class="d-small">60°</text>
<text x="202.5" y="210" text-anchor="middle" class="d-small">5 m</text>
<text x="192.5" y="127" text-anchor="end" class="d-red">L = ?</text>`,
      },
      options: ['10 m', '5√3 m', '5√2 m', '8 m'],
      answer: 0,
      explain: 'cos 60° = 5/L = 1/2, so L = 10 m.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'The angle of elevation of the top of a tower 50√3 m high is 60°. How far is the observer from the foot of the tower?',
      figure: {
        viewBox: '0 0 320 214',
        svg: `
<line x1="40" y1="192" x2="290" y2="192" class="d-soft"/>
<line x1="230" y1="192" x2="230" y2="53.4" class="d-thick"/>
<line x1="150" y1="192" x2="230" y2="53.4" class="d-thin"/>
<path d="M221,192 L221,183 L230,183" class="d-thin"/>
<path d="M172,192 A22,22 0 0 0 161,172.9"/>
<text x="172" y="184" class="d-small">60°</text>
<text x="238" y="122.7" class="d-small">50√3 m</text>
<text x="190" y="210" text-anchor="middle" class="d-red">?</text>`,
      },
      options: ['50√3 m', '150 m', '50 m', '100 m'],
      answer: 2,
      explain: 'tan 60° = 50√3/x = √3, so x = 50 m.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'A pole 12 m high casts a shadow 12√3 m long. What is the angle of elevation of the sun?',
      figure: {
        viewBox: '0 0 320 214',
        svg: `
<line x1="30" y1="192" x2="300" y2="192" class="d-soft"/>
<line x1="80" y1="192" x2="80" y2="108" class="d-thick"/>
<line x1="80" y1="108" x2="225.5" y2="192" class="d-dash d-thin"/>
<line x1="80" y1="192" x2="225.5" y2="192" class="d-blue d-thick"/>
<path d="M89,192 L89,183 L80,183" class="d-thin"/>
<path d="M196,175 A34,34 0 0 0 191.5,192"/>
<text x="199.5" y="168" text-anchor="start" class="d-small d-red">θ = ?</text>
<text x="74" y="155" text-anchor="end" class="d-small">12 m</text>
<text x="152.7" y="210" text-anchor="middle" class="d-small d-blue">shadow 12√3 m</text>`,
      },
      options: ['60°', '30°', '45°', '90°'],
      answer: 1,
      explain: 'tan θ = 12/(12√3) = 1/√3, so θ = 30°.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question:
        'A kite is flying on a string 100 m long that makes an angle of 30° with the ground. How high is the kite? (Assume the string is straight.)',
      figure: {
        viewBox: '0 0 320 214',
        svg: `
<line x1="30" y1="192" x2="300" y2="192" class="d-soft"/>
<line x1="46" y1="192" x2="245.2" y2="77"/>
<line x1="245.2" y1="77" x2="245.2" y2="192" class="d-dash d-red"/>
<path d="M236.2,192 L236.2,183 L245.2,183" class="d-thin d-red"/>
<polygon points="245.2,65 254.2,77 245.2,89 236.2,77" class="d-fill-pink"/>
<path d="M86,192 A40,40 0 0 0 80.6,172"/>
<text x="90" y="186" class="d-small">30°</text>
<text x="139" y="124.4" text-anchor="end" class="d-small">100 m</text>
<text x="253.2" y="139.5" class="d-red">?</text>`,
      },
      options: ['25 m', '50√3 m', '100 m', '50 m'],
      answer: 3,
      explain: 'Height = 100 × sin 30° = 50 m.',
      shortcut: 'Opposite 30° is half the hypotenuse.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        'The angle of elevation of the top of a tower changes from 30° to 60° as a man walks 40 m toward it. What is the height of the tower?',
      figure: {
        viewBox: '0 0 320 214',
        svg: `
<line x1="20" y1="192" x2="300" y2="192" class="d-soft"/>
<line x1="266" y1="192" x2="266" y2="55.7" class="d-thick"/>
<line x1="187.3" y1="192" x2="266" y2="55.7" class="d-thin"/>
<line x1="30" y1="192" x2="266" y2="55.7" class="d-thin"/>
<path d="M257,192 L257,183 L266,183" class="d-thin"/>
<path d="M205.3,192 A18,18 0 0 0 196.3,176.4"/>
<text x="205.3" y="184" class="d-small">60°</text>
<path d="M62,192 A32,32 0 0 0 57.7,176"/>
<text x="66" y="187" class="d-small">30°</text>
<text x="108.7" y="210" text-anchor="middle" class="d-small">40 m</text>
<text x="272" y="128.9" class="d-small d-red">h = ?</text>`,
      },
      options: ['20√3 m', '40√3 m', '20 m', '40 m'],
      answer: 0,
      explain: 'Let the near distance be x. At 60°: x = h/√3. At 30°: x + 40 = h√3. Subtract: h√3 − h/√3 = 2h/√3 = 40, so h = 20√3 m.',
      shortcut: 'h = √3/2 × 40 = 20√3.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'From the top of a cliff 75 m high, the angle of depression of a boat is 30°. How far is the boat from the foot of the cliff?',
      figure: {
        viewBox: '0 0 320 214',
        svg: `
<polygon points="28,192 58,192 58,79.5 28,79.5" class="d-fill-green"/>
<line x1="20" y1="192" x2="300" y2="192" class="d-soft"/>
<line x1="58" y1="79.5" x2="300" y2="79.5" class="d-dash"/>
<line x1="58" y1="79.5" x2="252.9" y2="192" class="d-thin"/>
<path d="M96.1,101.5 A44,44 0 0 0 102,79.5"/>
<text x="108" y="97.5" class="d-small">30°</text>
<polygon points="240.9,186 264.9,186 258.9,192 246.9,192" class="d-fill-blue"/>
<text x="64" y="140.8" class="d-small">75 m</text>
<text x="155.4" y="210" text-anchor="middle" class="d-red">?</text>`,
        caption: 'Angle of depression 30°',
      },
      options: ['25√3 m', '75√3 m', '150 m', '75 m'],
      answer: 1,
      explain: 'tan 30° = 75/x, so x = 75√3 m.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Two men on opposite sides of a tower 100 m high see its top at angles of elevation of 30° and 45°. How far apart are they?',
      figure: {
        viewBox: '0 0 320 224',
        svg: `
<line x1="14" y1="192" x2="306" y2="192" class="d-soft"/>
<line x1="190.5" y1="192" x2="190.5" y2="97" class="d-thick"/>
<line x1="26" y1="192" x2="190.5" y2="97" class="d-thin"/>
<line x1="285.5" y1="192" x2="190.5" y2="97" class="d-thin"/>
<path d="M62,192 A36,36 0 0 0 57.2,174"/>
<text x="66" y="187" class="d-small">30°</text>
<path d="M267.2,173.6 A26,26 0 0 0 259.5,192"/>
<text x="255.5" y="186" text-anchor="end" class="d-small">45°</text>
<text x="196.5" y="164.5" class="d-small">100 m</text>
<line x1="26" y1="206" x2="285.5" y2="206" class="d-red d-thin"/>
<line x1="26" y1="201" x2="26" y2="211" class="d-red d-thin"/>
<line x1="285.5" y1="201" x2="285.5" y2="211" class="d-red d-thin"/>
<text x="155.8" y="222" text-anchor="middle" class="d-red">?</text>`,
      },
      options: ['100(√3 − 1) m', '100(√3 + 1) m', '200 m', '100√3 m'],
      answer: 1,
      explain: 'Ground distance = height ÷ tan(angle). At 30°: 100 ÷ (1/√3) = 100√3. At 45°: 100 ÷ 1 = 100. The tower is between them, so add: 100(√3 + 1) ≈ 273.2 m.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: "The shadow of a tower is 60 m longer when the sun's altitude is 30° than when it is 60°. What is the height of the tower?",
      figure: {
        viewBox: '0 0 320 214',
        svg: `
<line x1="20" y1="192" x2="300" y2="192" class="d-soft"/>
<line x1="266" y1="192" x2="266" y2="67.3" class="d-thick"/>
<line x1="194" y1="192" x2="266" y2="67.3" class="d-dash d-thin"/>
<line x1="50" y1="192" x2="266" y2="67.3" class="d-dash d-thin"/>
<path d="M257,192 L257,183 L266,183" class="d-thin"/>
<line x1="50" y1="192" x2="266" y2="192" class="d-blue"/>
<path d="M212,192 A18,18 0 0 0 203,176.4"/>
<text x="212" y="184" class="d-small">60°</text>
<path d="M82,192 A32,32 0 0 0 77.7,176"/>
<text x="86" y="187" class="d-small">30°</text>
<text x="122" y="210" text-anchor="middle" class="d-small d-blue">60 m longer</text>
<text x="272" y="134.6" class="d-small d-red">h = ?</text>`,
        caption: 'Sun rays at 60° and at 30°',
      },
      options: ['60√3 m', '20√3 m', '30 m', '30√3 m'],
      answer: 3,
      explain: 'Shadow = h × cot(altitude). At 30° it is h√3; at 60° it is h/√3. Difference: h√3 − h/√3 = 2h/√3 = 60, so h = 30√3 m.',
      shortcut: 'h = √3/2 × 60 = 30√3.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        'The angles of elevation of the top of a tower from two points 9 m and 16 m from its base, on the same side and in line with it, are complementary. What is the height of the tower?',
      figure: {
        viewBox: '0 0 320 248',
        svg: `
<line x1="30" y1="190" x2="300" y2="190" class="d-soft"/>
<line x1="268" y1="190" x2="268" y2="46" class="d-thick"/>
<line x1="160" y1="190" x2="268" y2="46" class="d-thin"/>
<line x1="76" y1="190" x2="268" y2="46" class="d-thin"/>
<path d="M259,190 L259,181 L268,181" class="d-thin"/>
<path d="M106,190 A30,30 0 0 0 100,172"/>
<text x="110" y="185" class="d-small">θ</text>
<path d="M178,190 A18,18 0 0 0 170.8,175.6"/>
<text x="180" y="172" class="d-small">90° − θ</text>
<text x="274" y="123" class="d-red">?</text>
<line x1="160" y1="204" x2="268" y2="204" class="d-thin"/>
<line x1="160" y1="199" x2="160" y2="209" class="d-thin"/>
<line x1="268" y1="199" x2="268" y2="209" class="d-thin"/>
<text x="214" y="219" text-anchor="middle" class="d-small">9 m</text>
<line x1="76" y1="228" x2="268" y2="228" class="d-thin"/>
<line x1="76" y1="223" x2="76" y2="233" class="d-thin"/>
<line x1="268" y1="223" x2="268" y2="233" class="d-thin"/>
<text x="72" y="233" text-anchor="end" class="d-small">16 m</text>`,
      },
      options: ['12 m', '12.5 m', '25 m', '7 m'],
      answer: 0,
      explain: 'Let the angle at the near point (9 m) be θ, so tan θ = h/9. The far angle is 90° − θ, and tan(90° − θ) = cot θ, so cot θ = h/16. Multiply: tan θ × cot θ = 1, so h²/144 = 1 and h = 12 m.',
      shortcut: 'h = √(9 × 16) = 12.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        'From the top of a building 60 m high, the angles of depression of the top and the bottom of a tower are 30° and 60°. What is the height of the tower?',
      options: ['20 m', '30 m', '40 m', '45 m'],
      answer: 2,
      explain: 'Gap = 60 cot 60° = 20√3. Drop to the tower top = 20√3 × tan 30° = 20. Tower = 60 − 20 = 40 m.',
      shortcut: 'For 30° and 60° the drop is 1/3 of the building, so the tower is 2/3 × 60 = 40.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        'The angle of elevation of the top of a tower changes from 30° to 45° as an observer walks 100 m toward it. What is the height of the tower?',
      figure: {
        viewBox: '0 0 320 214',
        svg: `
<line x1="20" y1="192" x2="300" y2="192" class="d-soft"/>
<line x1="266" y1="192" x2="266" y2="55.7" class="d-thick"/>
<line x1="129.7" y1="192" x2="266" y2="55.7" class="d-thin"/>
<line x1="30" y1="192" x2="266" y2="55.7" class="d-thin"/>
<path d="M257,192 L257,183 L266,183" class="d-thin"/>
<path d="M147.7,192 A18,18 0 0 0 142.5,179.3"/>
<text x="147.7" y="184" class="d-small">45°</text>
<path d="M62,192 A32,32 0 0 0 57.7,176"/>
<text x="66" y="187" class="d-small">30°</text>
<text x="79.9" y="210" text-anchor="middle" class="d-small">100 m</text>
<text x="272" y="128.9" class="d-small d-red">h = ?</text>`,
      },
      options: ['50(√3 − 1) m', '100√3 m', '100 m', '50(√3 + 1) m'],
      answer: 3,
      explain:
        'At 45° the near distance equals h. At 30° the far distance is h√3. They differ by 100: h√3 − h = 100, so h = 100/(√3 − 1). Multiply top and bottom by (√3 + 1): h = 50(√3 + 1) ≈ 136.6 m.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        'A man on top of a tower sees a car moving toward it at a steady speed. The angle of depression changes from 30° to 60° in 12 minutes. How much longer will the car take to reach the tower?',
      figure: {
        viewBox: '0 0 320 224',
        svg: `
<line x1="20" y1="192" x2="300" y2="192" class="d-soft"/>
<line x1="54" y1="192" x2="54" y2="64" class="d-thick"/>
<line x1="54" y1="64" x2="300" y2="64" class="d-dash"/>
<line x1="54" y1="64" x2="275.7" y2="192" class="d-thin"/>
<line x1="54" y1="64" x2="127.9" y2="192" class="d-thin"/>
<path d="M106,94 A60,60 0 0 0 114,64"/>
<text x="118" y="86" class="d-small">30°</text>
<path d="M67,86.5 A26,26 0 0 0 80,64"/>
<text x="70" y="100" class="d-small">60°</text>
<circle cx="275.7" cy="192" r="5" class="d-dot"/>
<circle cx="127.9" cy="192" r="5" class="d-dot"/>
<path d="M267.7,204 L135.9,204 M141.9,199 L135.9,204 L141.9,209" class="d-blue d-thin"/>
<text x="201.8" y="220" text-anchor="middle" class="d-small d-blue">12 min</text>
<text x="91" y="220" text-anchor="middle" class="d-small d-red">? min</text>`,
      },
      options: ['12 min', '8 min', '4 min', '6 min'],
      answer: 3,
      explain:
        'Tower height h. At 30° the car is h√3 away; at 60° it is h/√3 away. h√3 : h/√3 = 3 : 1. So it covered 3 − 1 = 2 parts in 12 min, 6 min per part. The last 1 part takes 6 min.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        'A 10 m flagstaff stands on a building. From a point on the ground, the angles of elevation of the top of the building and the top of the flagstaff are 30° and 45°. What is the height of the building?',
      figure: {
        viewBox: '0 0 320 214',
        svg: `
<polygon points="206.9,192 206.9,99.1 242.9,99.1 242.9,192" class="d-fill-green"/>
<line x1="20" y1="192" x2="300" y2="192" class="d-soft"/>
<line x1="206.9" y1="99.1" x2="206.9" y2="31.1" class="d-red d-thick"/>
<line x1="46" y1="192" x2="206.9" y2="99.1" class="d-thin"/>
<line x1="46" y1="192" x2="206.9" y2="31.1" class="d-thin"/>
<path d="M122,192 A76,76 0 0 0 111.8,154"/>
<text x="133.7" y="171.8" text-anchor="middle" class="d-small">30°</text>
<path d="M76,192 A30,30 0 0 0 67.2,170.8" class="d-red"/>
<text x="82.7" y="164.3" text-anchor="middle" class="d-small d-red">45°</text>
<text x="200.9" y="70.1" text-anchor="end" class="d-small d-red">10 m</text>
<text x="248.9" y="150.6" class="d-red">?</text>`,
      },
      options: ['5(√3 + 1) m', '5(√3 − 1) m', '10√3 m', '10(√3 + 1) m'],
      answer: 0,
      explain:
        'Let the ground distance be x. At 45° the flagstaff top is x high. At 30° the building top is x/√3 high. The flagstaff is the gap: x − x/√3 = 10, so x(√3 − 1)/√3 = 10 and x/√3 = 10/(√3 − 1) = 5(√3 + 1). Building = x/√3 = 5(√3 + 1) ≈ 13.66 m.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        'Two towers stand 60 m apart. From the foot of the shorter tower, the angle of elevation of the top of the taller one is 60°. From the foot of the taller tower, the angle of elevation of the top of the shorter one is 30°. What is the ratio of their heights (taller : shorter)?',
      figure: {
        viewBox: '0 0 320 214',
        svg: `
<line x1="40" y1="192" x2="280" y2="192" class="d-soft"/>
<line x1="110" y1="192" x2="110" y2="138.3" class="d-thick"/>
<line x1="203" y1="192" x2="203" y2="30.9" class="d-thick"/>
<line x1="110" y1="192" x2="203" y2="30.9" class="d-blue d-thin"/>
<line x1="203" y1="192" x2="110" y2="138.3" class="d-red d-thin"/>
<path d="M130,192 A20,20 0 0 0 120,174.7" class="d-blue"/>
<text x="137" y="174" text-anchor="middle" class="d-small d-blue">60°</text>
<path d="M177,177 A30,30 0 0 0 173,192" class="d-red"/>
<text x="155" y="189" text-anchor="middle" class="d-small d-red">30°</text>
<text x="156.5" y="210" text-anchor="middle" class="d-small">60 m</text>
<text x="104" y="170.2" text-anchor="end" class="d-small">shorter</text>
<text x="209" y="116.5" class="d-small">taller</text>`,
        caption: 'Taller : shorter = ?',
      },
      options: ['√3 : 1', '2 : 1', '3 : 1', '9 : 1'],
      answer: 2,
      explain: 'Taller = 60 × tan 60° = 60√3. Shorter = 60 × tan 30° = 20√3. Ratio 3 : 1.',
      shortcut: 'tan 60° ÷ tan 30° = √3 × √3 = 3.',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'The angle of elevation of B from A equals the angle of depression of A from B.',
      answer: true,
      explain: 'They are alternate angles between two parallel horizontal lines.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: "As the sun's altitude increases, the shadow of a tower gets longer.",
      answer: false,
      explain: 'Shadow = h cot θ, and cot θ falls as θ rises, so the shadow gets shorter.',
    },
  ],
};

export default topic;
