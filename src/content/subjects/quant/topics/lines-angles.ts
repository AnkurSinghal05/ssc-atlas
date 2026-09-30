import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'lines-angles',
  title: 'Lines and angles',
  level: 'beginner',
  masteryMinutes: 60,
  reviseMinutes: 20,
  priority: 'medium',
  tags: ['complementary', 'supplementary', 'linear pair', 'vertically opposite', 'transversal', 'alternate angles', 'co-interior', 'angle bisectors'],
  summary: 'Straight line 180°, full turn 360°, and three rules for parallel lines. Almost every question is one equation in x built from these.',
  patterns: [
    { name: 'Parallel lines and a transversal: find x', frequency: 'most', example: 'Co-interior angles are (3x + 10)° and (2x + 20)°. Find x.' },
    { name: 'Complement and supplement word problems', frequency: 'most', example: 'An angle is 20° more than its complement. Find the angle.' },
    { name: 'Bent line between two parallel lines', frequency: 'often', example: 'AB ∥ CD, ∠BAE = 40°, ∠DCE = 55°. Find ∠AEC.' },
    {
      name: 'Vertically opposite angles and linear pairs',
      frequency: 'often',
      example: 'Vertically opposite angles are (5x − 12)° and (3x + 20)°. Find the angle.',
    },
    { name: 'Angle bisectors with parallel lines', frequency: 'rare', example: 'Bisectors of two co-interior angles meet at P. Find ∠P.' },
    { name: 'Angles around a point in a ratio', frequency: 'rare', example: 'Angles around a point are in the ratio 1 : 2 : 3 : 4. Largest?' },
  ],
  keyPoints: [
    {
      title: 'Complement and supplement',
      text: 'Two angles are complementary if they add to 90° and supplementary if they add to 180°. The supplement of any angle is always 90° more than its complement.',
      formula: 'complement = 90° − x; supplement = 180° − x',
      example: 'Complement of 38° is **52°**; supplement is **142°**; 142 − 52 = 90.',
    },
    {
      title: 'Straight line, point and crossing lines',
      text: 'Angles on a straight line (a linear pair) add to 180°. Angles around a point add to 360°. When two lines cross, vertically opposite angles are equal.',
      example: 'One angle at a crossing is 3 times its neighbour: x + 3x = 180, so the angles are 45° and **135°**.',
    },
    {
      title: 'Parallel lines cut by a transversal',
      text: 'Corresponding angles (F shape) are equal. Alternate interior angles (Z shape) are equal. Co-interior angles, on the same side between the lines (C shape), add to 180°. Each rule also works backwards to prove two lines parallel.',
      formula: 'corresponding = corresponding; alternate = alternate; co-interior sum = 180°',
      example: '(3x + 10) + (2x + 20) = 180 gives x = **30**.',
    },
    {
      title: 'A bent line between parallel lines',
      text: 'Draw a third line through the bend, parallel to both. If the bend points into the gap between the given angles (Z shapes), the bend angle is their sum. If the given angles are co-interior with the bend, all three add to 360°.',
      formula: '∠E = ∠a + ∠b, or ∠a + ∠b + ∠E = 360°',
      example: '∠BAE = 40°, ∠DCE = 55° on the Z side: ∠AEC = **95°**.',
    },
    {
      title: 'Angle as a multiple of its complement or supplement',
      text: 'If an angle is k times its supplement, split 180° in the ratio k : 1. If it is k times its complement, split 90° the same way.',
      formula: 'x = 180k/(k + 1) or x = 90k/(k + 1)',
      example: 'Angle = 4 × supplement: 180 × 4/5 = **144°**.',
    },
    {
      title: 'Sum and difference given',
      text: 'An angle that is d more than its complement is (90 + d)/2. An angle that is d more than its supplement is (180 + d)/2.',
      formula: 'larger = (sum + difference)/2',
      example: '20° more than its complement: (90 + 20)/2 = **55°**.',
    },
    {
      title: 'Angle bisectors',
      text: 'The bisectors of a linear pair are perpendicular. With parallel lines, the bisectors of two co-interior angles meet at 90°, and the bisectors of two alternate angles are parallel.',
      example: 'Co-interior angles 70° and 110°: halves 35° and 55° leave 180 − 35 − 55 = **90°**.',
    },
    {
      title: 'Counting lines and crossings',
      text: 'n points with no three in a line give n(n − 1)/2 lines. n lines with no two parallel and no three through one point cross at n(n − 1)/2 points.',
      formula: 'n(n − 1)/2',
      example: '8 such lines meet at 8 × 7/2 = **28** points.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'Parallel lines: F, Z and C angles',
      figure: {
        viewBox: '0 0 320 220',
        svg: `
<line x1="24" y1="70" x2="270" y2="70"/>
<line x1="24" y1="160" x2="270" y2="160"/>
<line x1="122.9" y1="199.5" x2="184.4" y2="30.5"/>
<text x="16" y="76" text-anchor="middle">A</text>
<text x="284" y="76" text-anchor="middle">B</text>
<text x="16" y="166" text-anchor="middle">C</text>
<text x="284" y="166" text-anchor="middle">D</text>
<text x="158" y="60" class="d-small" text-anchor="middle">P</text>
<text x="123.2" y="178" class="d-small" text-anchor="middle">Q</text>
<path d="M155.2,160 A18,18 0 0 0 143.4,143.1"/>
<text x="168.4" y="144.2" text-anchor="middle">70°</text>
<path d="M188,70 A18,18 0 0 0 176.2,53.1" class="d-blue" data-step="1"/>
<text x="201.1" y="54.2" class="d-blue" text-anchor="middle" data-step="1">70°</text>
<path d="M152,70 A18,18 0 0 0 163.8,86.9" class="d-green" data-step="2"/>
<text x="138.9" y="97.8" class="d-green" text-anchor="middle" data-step="2">70°</text>
<path d="M162.5,90.7 A22,22 0 0 0 192,70" class="d-red" data-step="3"/>
<text x="192.9" y="108.8" class="d-red" text-anchor="middle" data-step="3">110°</text>`,
        caption: 'AB ∥ CD',
      },
      explain: [
        'The transversal PQ makes 70° at Q, on the right side between the lines. Every other angle is 70° or 110°.',
        'Corresponding (F shape): the same corner at each line. So the top-right angle at P is also **70°**.',
        'Alternate (Z shape): opposite sides of PQ, both between the lines. The lower-left angle at P is **70°**.',
        'Co-interior (C shape): same side, both between the lines. They add to 180°, so the lower-right angle at P is **110°**.',
      ],
    },
    {
      type: 'diagram',
      title: 'A bent line between parallel lines',
      figure: {
        viewBox: '0 0 320 220',
        svg: `
<line x1="95" y1="115" x2="239" y2="115" class="d-dash d-soft" data-step="1"/>
<text x="85" y="121" class="d-soft" text-anchor="middle" data-step="1">F</text>
<line x1="24" y1="50" x2="280" y2="50"/>
<line x1="24" y1="180" x2="280" y2="180"/>
<line x1="137.5" y1="50" x2="215" y2="115"/>
<line x1="169.5" y1="180" x2="215" y2="115"/>
<text x="137.5" y="40" text-anchor="middle">A</text>
<text x="292" y="56" text-anchor="middle">B</text>
<text x="169.5" y="204" text-anchor="middle">C</text>
<text x="292" y="186" text-anchor="middle">D</text>
<text x="227" y="139" text-anchor="middle">E</text>
<path d="M154.4,64.1 A22,22 0 0 0 159.5,50"/>
<text x="177" y="70.4" class="d-small" text-anchor="middle">40°</text>
<path d="M191.5,180 A22,22 0 0 0 182.1,162"/>
<text x="205" y="167.5" class="d-small" text-anchor="middle">55°</text>
<path d="M198.1,100.9 A22,22 0 0 0 193,115" class="d-blue" data-step="2"/>
<text x="173.7" y="106" class="d-blue d-small" text-anchor="middle" data-step="2">40°</text>
<path d="M185,115 A30,30 0 0 0 197.8,139.6" class="d-green" data-step="3"/>
<text x="170.6" y="144.1" class="d-green d-small" text-anchor="middle" data-step="3">55°</text>
<path d="M204.3,106 A14,14 0 0 0 207,126.5" class="d-red" data-step="4"/>`,
        caption: 'AB ∥ CD',
      },
      explain: [
        'Draw a helper line EF through the bend E, parallel to AB and CD.',
        'AE cuts AB and EF: ∠AEF = ∠BAE = **40°** (alternate angles, a Z shape).',
        'CE cuts CD and EF: ∠FEC = ∠DCE = **55°** (alternate angles again).',
        'The bend is the two parts together: ∠AEC = 40° + 55° = **95°**.',
      ],
    },
    {
      type: 'diagram',
      title: 'Bisectors of co-interior angles',
      figure: {
        viewBox: '0 0 320 220',
        svg: `
<polygon points="120,50 167.3,180 212.8,115" class="d-fill" data-step="3"/>
<line x1="24" y1="50" x2="280" y2="50"/>
<line x1="24" y1="180" x2="280" y2="180"/>
<line x1="109.7" y1="21.8" x2="177.6" y2="208.2"/>
<text x="16" y="56" text-anchor="middle">A</text>
<text x="292" y="56" text-anchor="middle">B</text>
<text x="16" y="186" text-anchor="middle">C</text>
<text x="292" y="186" text-anchor="middle">D</text>
<text x="106" y="42" text-anchor="middle">G</text>
<text x="151.3" y="202" text-anchor="middle">H</text>
<line x1="120" y1="50" x2="212.8" y2="115" class="d-blue" data-step="2"/>
<line x1="167.3" y1="180" x2="212.8" y2="115" class="d-blue" data-step="2"/>
<text x="226.8" y="121" text-anchor="middle">P</text>
<path d="M125.5,65 A16,16 0 0 0 136,50" data-step="1"/>
<path d="M183.3,180 A16,16 0 0 0 161.8,165" data-step="1"/>
<path d="M130.3,78.2 A30,30 0 0 0 144.6,67.2" class="d-blue" data-step="2"/>
<text x="146.8" y="90.9" class="d-blue d-small" text-anchor="middle" data-step="2">35°</text>
<path d="M184.5,155.4 A30,30 0 0 0 157.1,151.8" class="d-blue" data-step="2"/>
<text x="173.3" y="140.4" class="d-blue d-small" text-anchor="middle" data-step="2">55°</text>
<path d="M204.6,109.3 L198.9,117.5 L207.1,123.2" class="d-red" data-step="4"/>`,
        caption: 'AB ∥ CD, ∠BGH = 70°, ∠DHG = 110°',
      },
      explain: [
        '∠BGH and ∠DHG are co-interior (same side, between the lines), so they add to 180°: 70° + 110°.',
        'Each bisector takes half its angle: ∠PGH = 35° and ∠PHG = 55°.',
        'In △GPH the two base angles add to 35° + 55° = 90°.',
        'So ∠GPH = 180° − 90° = **90°**. Bisectors of co-interior angles always meet at a right angle.',
      ],
    },
  ],
  comparisons: [
    {
      title: 'Corresponding vs alternate vs co-interior angles',
      items: ['Corresponding', 'Alternate interior', 'Co-interior'],
      rows: [
        { aspect: 'Letter shape', values: ['F', 'Z', 'C or U'] },
        {
          aspect: 'Position',
          values: [
            'Same side of the transversal, same place at each line',
            'Opposite sides of the transversal, between the lines',
            'Same side of the transversal, between the lines',
          ],
        },
        { aspect: 'Relation when lines are parallel', values: ['Equal', 'Equal', 'Add to 180°'], key: true },
        { aspect: 'Example with one angle 70°', values: ['70°', '70°', '110°'] },
      ],
      reveal: 'Only co-interior angles add up instead of being equal. Mix this up and you get 70° where the answer is 110°.',
      whenToUse: [
        'Both angles sit in the same corner at each line.',
        'The angles are on opposite sides, inside the parallel lines.',
        'The angles are on the same side, inside the parallel lines.',
      ],
    },
    {
      title: 'Complement vs supplement',
      items: ['Complement', 'Supplement'],
      rows: [
        { aspect: 'Pair adds to', values: ['90°', '180°'], key: true },
        { aspect: 'Of x', values: ['90° − x', '180° − x'] },
        { aspect: 'Exists for', values: ['Angles below 90° only', 'Angles below 180°'] },
        { aspect: 'Of 38°', values: ['52°', '142°'] },
      ],
      reveal: 'For the same angle the supplement is always exactly 90° bigger than the complement.',
      whenToUse: ['"Complementary", "complement", or parts of a right angle.', '"Supplementary", "linear pair", or parts of a straight line.'],
    },
  ],
  shortcuts: [
    {
      pattern: 'Angle is k times its supplement',
      example: 'An angle is 4 times its supplement. Find the angle.',
      options: ['36°', '144°', '135°', '120°'],
      answer: '144°',
      ladder: [
        { name: 'Standard', steps: ['x = 4(180 − x).', '5x = 720.', 'x = 144°.'], seconds: 25 },
        { name: 'Shortcut', steps: ['Split 180° in the ratio 4 : 1.', '180 × 4/5 = 144°.'], seconds: 8 },
        { name: 'Option elimination', steps: ['The angle must be 4 times what is left of 180.', '144 leaves 36, and 36 × 4 = 144.'], seconds: 6 },
      ],
    },
    {
      pattern: 'Bent line between parallel lines',
      example: 'AB ∥ CD. E lies between the lines, to the right of A and C. If ∠BAE = 40° and ∠DCE = 55°, find ∠AEC.',
      options: ['85°', '95°', '135°', '265°'],
      answer: '95°',
      ladder: [
        {
          name: 'Standard',
          steps: ['Draw EF through E parallel to AB.', '∠AEF = ∠BAE = 40° (alternate).', '∠FEC = ∠DCE = 55° (alternate).', '∠AEC = 40 + 55 = 95°.'],
          seconds: 40,
        },
        { name: 'Shortcut', steps: ['Z shape on both sides: the bend is the sum.', '40 + 55 = 95°.'], seconds: 6 },
      ],
    },
    {
      pattern: 'More than its complement by d',
      example: 'An angle is 20° more than its complement. Find the angle.',
      options: ['55°', '35°', '70°', '45°'],
      answer: '55°',
      ladder: [
        { name: 'Standard', steps: ['x = (90 − x) + 20.', '2x = 110.', 'x = 55°.'], seconds: 20 },
        { name: 'Shortcut', steps: ['(sum + difference)/2 = (90 + 20)/2 = 55°.'], seconds: 6 },
        {
          name: 'Option elimination',
          steps: ['The pair must add to 90 and differ by 20.', '55 and 35 do; the larger one is the angle.'],
          seconds: 5,
        },
      ],
    },
  ],
  qa: [
    {
      q: 'Which angle pairs are equal when a transversal cuts two parallel lines?',
      a: ['Corresponding angles (F).', 'Alternate interior and alternate exterior angles (Z).', 'Vertically opposite angles.'],
      tag: 'Asked often',
    },
    {
      q: 'Which pair adds to 180° instead of being equal?',
      a: ['Co-interior angles: same side of the transversal, between the lines.', 'Also any linear pair.'],
      tag: 'Trap',
    },
    {
      q: 'Difference between the supplement and the complement of an angle?',
      a: ['Always 90°.', '(180 − x) − (90 − x) = 90.'],
      tag: 'Shortcut',
    },
    {
      q: 'Angle at the bend of a zig-zag between parallel lines?',
      a: ['Draw a line through the bend parallel to both.', 'Z shapes: bend = sum of the two angles.', 'C shapes: the three angles add to 360°.'],
      tag: 'Asked often',
    },
    {
      q: 'The bisectors of two co-interior angles meet. At what angle?',
      a: ['90°.', 'The two halves add to 180/2 = 90, leaving 90° at the meeting point.'],
    },
    {
      q: 'The bisectors of a linear pair meet at what angle?',
      a: ['90°.', 'Half of 180° is 90°.'],
    },
    {
      q: 'Can an angle of 100° have a complement?',
      a: ['No. Only angles less than 90° have complements.', 'It does have a supplement: 80°.'],
      tag: 'Trap',
    },
    {
      q: 'Angle is k times its complement. Fast formula?',
      a: ['Split 90° in the ratio k : 1.', 'x = 90k/(k + 1). For k = 2: 60°.'],
      tag: 'Shortcut',
    },
    {
      q: 'How many angles are formed where a transversal cuts two lines?',
      a: ['8 angles: 4 at each crossing.', '4 are interior and 4 are exterior.'],
    },
    {
      q: 'Maximum crossing points of n lines?',
      a: ['n(n − 1)/2, with no two parallel and no three through one point.', '6 lines: 15 points.'],
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'What is the complement of 38°?',
      options: ['52°', '142°', '62°', '48°'],
      answer: 0,
      explain: '90 − 38 = 52°.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Two parallel lines are cut by a transversal. Two co-interior angles are (3x + 10)° and (2x + 20)°. What is x?',
      figure: {
        viewBox: '0 0 320 220',
        svg: `
<line x1="24" y1="70" x2="270" y2="70"/>
<line x1="24" y1="160" x2="270" y2="160"/>
<line x1="122.9" y1="199.5" x2="184.4" y2="30.5"/>
<text x="16" y="76" text-anchor="middle">A</text>
<text x="284" y="76" text-anchor="middle">B</text>
<text x="16" y="166" text-anchor="middle">C</text>
<text x="284" y="166" text-anchor="middle">D</text>
<text x="158" y="60" class="d-small" text-anchor="middle">P</text>
<text x="123.2" y="178" class="d-small" text-anchor="middle">Q</text>
<path d="M163.8,86.9 A18,18 0 0 0 188,70"/>
<text x="214" y="108" class="d-small" text-anchor="start">(3x + 10)°</text>
<path d="M155.2,160 A18,18 0 0 0 143.4,143.1"/>
<text x="167.2" y="150" class="d-small" text-anchor="start">(2x + 20)°</text>`,
        caption: 'AB ∥ CD',
      },
      options: ['26', '30', '34', '40'],
      answer: 1,
      explain: 'Co-interior angles add to 180: 5x + 30 = 180, so x = 30.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Two vertically opposite angles are (5x − 12)° and (3x + 20)°. What is the size of each angle?',
      figure: {
        viewBox: '0 0 320 220',
        svg: `
<line x1="282.2" y1="65.5" x2="37.8" y2="154.5"/>
<line x1="96.9" y1="19.9" x2="223.1" y2="200.1"/>
<path d="M176.9,103.8 A18,18 0 0 0 149.7,95.3"/>
<text x="182.2" y="45.5" class="d-small" text-anchor="middle">(5x − 12)°</text>
<path d="M143.1,116.2 A18,18 0 0 0 170.3,124.7"/>
<text x="137.8" y="182.5" class="d-small" text-anchor="middle">(3x + 20)°</text>`,
      },
      options: ['112°', '16°', '56°', '68°'],
      answer: 3,
      explain: '5x − 12 = 3x + 20 gives x = 16. Each angle is 5 × 16 − 12 = 68°.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Two complementary angles are such that the larger is 6° less than twice the smaller. What is the larger angle?',
      options: ['32°', '58°', '64°', '52°'],
      answer: 1,
      explain: 's + (2s − 6) = 90 gives s = 32. Larger = 58°.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'An angle is 20° more than its complement. What is the angle?',
      options: ['35°', '55°', '65°', '70°'],
      answer: 1,
      explain: 'x = (90 − x) + 20, so 2x = 110 and x = 55°.',
      shortcut: '(90 + 20)/2 = 55°.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'An angle is 4 times its supplement. What is the angle?',
      options: ['36°', '120°', '144°', '150°'],
      answer: 2,
      explain: 'x = 4(180 − x), so 5x = 720 and x = 144°.',
      shortcut: 'Split 180 in the ratio 4 : 1: 180 × 4/5 = 144.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The supplement of an angle is 4 times its complement. What is the angle?',
      options: ['60°', '45°', '30°', '75°'],
      answer: 0,
      explain: '180 − x = 4(90 − x) gives 3x = 180, so x = 60°.',
      shortcut: 'Supplement − complement = 90 = 3 × complement, so the complement is 30 and the angle 60.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'AB ∥ CD. Point E lies between the lines, to the right of A and C. If ∠BAE = 40° and ∠DCE = 55°, what is ∠AEC?',
      figure: {
        viewBox: '0 0 320 220',
        svg: `
<line x1="24" y1="50" x2="280" y2="50"/>
<line x1="24" y1="180" x2="280" y2="180"/>
<line x1="137.5" y1="50" x2="215" y2="115"/>
<line x1="169.5" y1="180" x2="215" y2="115"/>
<text x="137.5" y="40" text-anchor="middle">A</text>
<text x="292" y="56" text-anchor="middle">B</text>
<text x="169.5" y="204" text-anchor="middle">C</text>
<text x="292" y="186" text-anchor="middle">D</text>
<text x="229" y="121" text-anchor="middle">E</text>
<path d="M154.4,64.1 A22,22 0 0 0 159.5,50"/>
<text x="177" y="70.4" class="d-small" text-anchor="middle">40°</text>
<path d="M191.5,180 A22,22 0 0 0 182.1,162"/>
<text x="205" y="167.5" class="d-small" text-anchor="middle">55°</text>
<path d="M201.2,103.4 A18,18 0 0 0 204.7,129.7" class="d-red"/>
<text x="181.3" y="125.4" class="d-red" text-anchor="middle">?</text>`,
        caption: 'AB ∥ CD',
      },
      options: ['85°', '135°', '265°', '95°'],
      answer: 3,
      explain: 'Draw EF through E parallel to AB and CD. ∠AEF = ∠BAE = 40° (alternate); ∠FEC = ∠DCE = 55° (alternate). So ∠AEC = 40 + 55 = 95°.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Two lines cross. One of the four angles formed is 3 times its adjacent angle. What is the largest angle?',
      options: ['120°', '135°', '45°', '150°'],
      answer: 1,
      explain: 'Adjacent angles form a linear pair: x + 3x = 180, so x = 45 and the larger is 135°.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Four angles around a point are in the ratio 1 : 2 : 3 : 4. What is the largest angle?',
      options: ['108°', '120°', '160°', '144°'],
      answer: 3,
      explain: '10 parts = 360°, so one part = 36°. Largest = 4 × 36 = 144°.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A transversal cuts two parallel lines. Two corresponding angles are (2x + 15)° and (3x − 20)°. What is x?',
      figure: {
        viewBox: '0 0 320 220',
        svg: `
<line x1="24" y1="70" x2="270" y2="70"/>
<line x1="24" y1="160" x2="270" y2="160"/>
<line x1="122.9" y1="199.5" x2="184.4" y2="30.5"/>
<text x="16" y="76" text-anchor="middle">A</text>
<text x="284" y="76" text-anchor="middle">B</text>
<text x="16" y="166" text-anchor="middle">C</text>
<text x="284" y="166" text-anchor="middle">D</text>
<text x="158" y="60" class="d-small" text-anchor="middle">P</text>
<text x="123.2" y="178" class="d-small" text-anchor="middle">Q</text>
<path d="M188,70 A18,18 0 0 0 176.2,53.1"/>
<text x="200" y="60" class="d-small" text-anchor="start">(2x + 15)°</text>
<path d="M155.2,160 A18,18 0 0 0 143.4,143.1"/>
<text x="167.2" y="150" class="d-small" text-anchor="start">(3x − 20)°</text>`,
        caption: 'AB ∥ CD',
      },
      options: ['25', '40', '35', '45'],
      answer: 2,
      explain: 'Corresponding angles are equal: 2x + 15 = 3x − 20, so x = 35.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        'AB ∥ CD. Point E lies between the lines, to the left of A and C, with B and D to the right. If ∠BAE = 130° and ∠DCE = 125°, what is ∠AEC?',
      figure: {
        viewBox: '0 0 320 220',
        svg: `
<line x1="24" y1="50" x2="280" y2="50"/>
<line x1="24" y1="180" x2="280" y2="180"/>
<line x1="140.3" y1="50" x2="90" y2="110"/>
<line x1="139" y1="180" x2="90" y2="110"/>
<text x="140.3" y="40" text-anchor="middle">A</text>
<text x="292" y="56" text-anchor="middle">B</text>
<text x="139" y="204" text-anchor="middle">C</text>
<text x="292" y="186" text-anchor="middle">D</text>
<text x="74" y="116" text-anchor="middle">E</text>
<path d="M128.8,63.8 A18,18 0 0 0 158.3,50"/>
<text x="153.9" y="85" class="d-small" text-anchor="middle">130°</text>
<path d="M157,180 A18,18 0 0 0 128.7,165.3"/>
<text x="153.8" y="157.6" class="d-small" text-anchor="middle">125°</text>
<path d="M100.3,124.7 A18,18 0 0 0 101.6,96.2" class="d-red"/>
<text x="124" y="117.5" class="d-red" text-anchor="middle">?</text>`,
        caption: 'AB ∥ CD',
      },
      options: ['75°', '95°', '115°', '105°'],
      answer: 3,
      explain:
        'Draw EF through E parallel to AB, pointing right. ∠BAE and ∠AEF are co-interior, so ∠AEF = 180 − 130 = 50°. Likewise ∠CEF = 180 − 125 = 55°. ∠AEC = 50 + 55 = 105° (the same as 360 − 130 − 125).',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        'AB ∥ CD and a transversal meets them at G and H. The bisectors of ∠BGH and ∠DHG (on the same side) meet at P. If ∠BGH = 70°, what is ∠PHG?',
      figure: {
        viewBox: '0 0 320 220',
        svg: `
<line x1="24" y1="50" x2="280" y2="50"/>
<line x1="24" y1="180" x2="280" y2="180"/>
<line x1="109.7" y1="21.8" x2="177.6" y2="208.2"/>
<text x="16" y="56" text-anchor="middle">A</text>
<text x="292" y="56" text-anchor="middle">B</text>
<text x="16" y="186" text-anchor="middle">C</text>
<text x="292" y="186" text-anchor="middle">D</text>
<text x="106" y="42" text-anchor="middle">G</text>
<text x="151.3" y="202" text-anchor="middle">H</text>
<line x1="120" y1="50" x2="212.8" y2="115" class="d-blue"/>
<line x1="167.3" y1="180" x2="212.8" y2="115" class="d-blue"/>
<text x="226.8" y="121" text-anchor="middle">P</text>
<path d="M125.5,65 A16,16 0 0 0 136,50"/>
<path d="M179.9,162 A22,22 0 0 0 159.8,159.3" class="d-red"/>
<text x="172.5" y="146.3" class="d-red" text-anchor="middle">?</text>`,
        caption: 'AB ∥ CD, ∠BGH = 70°; GP and HP are bisectors',
      },
      options: ['35°', '70°', '55°', '45°'],
      answer: 2,
      explain: '∠BGH and ∠DHG are co-interior, so ∠DHG = 110°. Its half is ∠PHG = 55°.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'The supplement of an angle is 30° less than 3 times its complement. What is the angle?',
      options: ['30°', '45°', '60°', '20°'],
      answer: 0,
      explain: '180 − x = 3(90 − x) − 30 = 240 − 3x, so 2x = 60 and x = 30°.',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'The bisectors of two co-interior angles formed by a transversal with two parallel lines meet at right angles.',
      answer: true,
      explain: 'The co-interior angles add to 180°, their halves add to 90°, so the angle between the bisectors is 90°.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'Alternate interior angles formed by a transversal with two parallel lines are supplementary.',
      answer: false,
      explain: 'Alternate interior angles are equal. It is the co-interior angles that add to 180°.',
    },
  ],
};

export default topic;
