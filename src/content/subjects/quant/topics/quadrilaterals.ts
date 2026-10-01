import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'quadrilaterals',
  title: 'Quadrilaterals and polygons',
  level: 'intermediate',
  masteryMinutes: 60,
  reviseMinutes: 20,
  priority: 'medium',
  tags: ['polygon', 'interior angle', 'exterior angle', 'diagonals', 'parallelogram', 'rhombus', 'trapezium', 'square', 'rectangle'],
  summary:
    "Two facts carry most polygon questions: exterior angles add to 360° and diagonals number n(n − 3)/2. For quadrilaterals, know what each shape's diagonals do.",
  patterns: [
    {
      name: 'Regular polygon: find angle or number of sides',
      frequency: 'most',
      example: 'Each exterior angle of a regular polygon is 24°. How many sides?',
    },
    { name: 'Rhombus: side, diagonals and area', frequency: 'most', example: 'Diagonals of a rhombus are 16 cm and 30 cm. Find its perimeter.' },
    {
      name: 'Interior to exterior angle ratio or difference',
      frequency: 'often',
      example: 'Interior angle is 5 times the exterior angle. Number of sides?',
    },
    { name: 'Number of diagonals', frequency: 'often', example: 'A polygon has 44 diagonals. How many sides does it have?' },
    { name: 'Parallelogram angles and diagonals', frequency: 'often', example: 'In parallelogram ABCD, ∠A : ∠B = 2 : 3. Find ∠D.' },
    { name: 'Trapezium area and height', frequency: 'often', example: 'Parallel sides 20 cm and 12 cm, height 8 cm. Area?' },
    {
      name: 'Angle between angle bisectors in a quadrilateral',
      frequency: 'rare',
      example: '∠A = 100°, ∠D = 60°. Bisectors of ∠B and ∠C meet at O. Find ∠BOC.',
    },
  ],
  keyPoints: [
    {
      title: 'Sum of interior angles',
      text: 'A polygon with n sides splits into (n − 2) triangles, so its interior angles add to (n − 2) × 180°. In a regular polygon every interior angle is that sum divided by n.',
      formula: 'Each interior angle = ((n − 2) × 180°)/n',
      example: 'Octagon: 6 × 180° = 1,080°, so each angle = 1,080°/8 = **135°**.',
    },
    {
      title: 'Exterior angles always add to 360°',
      text: 'An exterior angle is the angle between one side and the next side extended. For any convex polygon (no corner pointing inwards) the exterior angles sum to 360°. In a regular polygon (all sides and angles equal) each exterior angle is 360°/n, and interior + exterior = 180°. This is the fastest way to find n.',
      formula: 'Each exterior angle = 360°/n,  n = 360°/exterior',
      example: 'Exterior angle 24°: n = 360/24 = **15** sides.',
    },
    {
      title: 'Number of diagonals',
      text: 'Each vertex joins to n − 3 others by a diagonal, and each diagonal is counted twice.',
      formula: 'Diagonals = n(n − 3)/2',
      example: 'Decagon: 10 × 7/2 = **35** diagonals. Hexagon: 6 × 3/2 = 9.',
    },
    {
      title: 'Interior : exterior = p : q',
      text: 'Interior and exterior add to 180°, so the exterior angle is 180° × q/(p + q). Then n = 360° ÷ exterior, which simplifies to n = 2(p + q)/q. For a ratio k : 1, n = 2(k + 1).',
      formula: 'n = 2(p + q)/q',
      example: 'Interior = 5 × exterior: n = 2(5 + 1) = **12**.',
    },
    {
      title: 'Parallelogram',
      text: 'Opposite sides and opposite angles are equal. Adjacent angles add to 180°. Diagonals bisect each other but are not equal in general. Area = base × height. Sides a, b and diagonals d₁, d₂ satisfy the parallelogram law.',
      formula: 'd₁² + d₂² = 2(a² + b²)',
      example: 'Sides 7 and 9, one diagonal 8: d₂² = 2(49 + 81) − 64 = 196, so d₂ = **14**.',
    },
    {
      title: 'Rhombus',
      text: 'All four sides are equal. Diagonals bisect each other at 90°, so half-diagonals and the side make a right triangle. Area is half the product of the diagonals.',
      formula: 'Area = 1/2 × d₁ × d₂,  4a² = d₁² + d₂²',
      example: 'Diagonals 16 and 30: side = √(8² + 15²) = 17, perimeter **68**, area 240.',
    },
    {
      title: 'Rectangle and square',
      text: "Rectangle diagonals are equal and bisect each other. Square diagonals are equal, perpendicular and bisect the angles. A square's diagonal is a√2, so its area is d²/2.",
      formula: 'Square: d = a√2,  Area = d²/2',
      example: 'Square with diagonal 10 cm: area = 100/2 = **50 cm²**.',
    },
    {
      title: 'Trapezium and angle bisectors',
      text: 'Trapezium area = half the sum of parallel sides × the distance between them. The line joining the midpoints of the slant sides is (a + b)/2. In any quadrilateral ABCD, bisectors of ∠B and ∠C meet at an angle of (∠A + ∠D)/2.',
      formula: 'Trapezium area = 1/2 × (a + b) × h',
      example: 'Parallel sides 20 and 12, height 8: 1/2 × 32 × 8 = **128**.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'Polygon angles: split into triangles',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<polygon points="170,30 93.8,74 93.8,162" class="d-fill" data-step="1"/>
<polygon points="170,30 93.8,162 170,206" class="d-fill-blue" data-step="1"/>
<polygon points="170,30 170,206 246.2,162" class="d-fill-green" data-step="1"/>
<polygon points="170,30 246.2,162 246.2,74" class="d-fill-pink" data-step="1"/>
<polygon points="170,30 93.8,74 93.8,162 170,206 246.2,162 246.2,74"/>
<line x1="170" y1="30" x2="93.8" y2="162" class="d-blue" data-step="1"/>
<line x1="170" y1="30" x2="170" y2="206" class="d-blue" data-step="1"/>
<line x1="170" y1="30" x2="246.2" y2="162" class="d-blue" data-step="1"/>
<text x="170" y="22" text-anchor="middle">A</text>
<text x="91.8" y="62" text-anchor="middle">B</text>
<text x="81.7" y="175" text-anchor="middle">C</text>
<text x="170" y="226" text-anchor="middle">D</text>
<text x="258.3" y="175" text-anchor="middle">E</text>
<text x="258.3" y="73" text-anchor="middle">F</text>
<path d="M93.8,92 A18,18 0 0 0 109.4,65" class="d-red" data-step="2"/>
<text x="121.5" y="96" class="d-red d-small" text-anchor="middle" data-step="2">120°</text>
<line x1="93.8" y1="74" x2="48.1" y2="100.4" class="d-dash" data-step="3"/>
<path d="M74.7,85 A22,22 0 0 0 93.8,96" class="d-green" data-step="3"/>
<text x="73.8" y="114.6" class="d-green d-small" text-anchor="middle" data-step="3">60°</text>`,
        caption: 'regular hexagon',
      },
      explain: [
        'From one corner A, draw all its diagonals. A hexagon (n = 6) splits into n − 2 = 4 triangles.',
        'Each triangle holds 180°, so the interior angles add to 4 × 180° = 720°. Each angle of a regular hexagon is 720/6 = **120°**.',
        'Extend side AB past B to see the exterior angle: 180° − 120° = 60°. Going once round the shape turns you 360°, so it is also 360/6 = **60°**.',
      ],
    },
    {
      type: 'diagram',
      title: 'Rhombus: diagonals meet at right angles',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<polygon points="160,115 271,115 160,55.8" class="d-fill" data-step="2"/>
<polygon points="49,115 160,55.8 271,115 160,174.2" data-step="3"/>
<line x1="49" y1="115" x2="271" y2="115" class="d-blue" data-step="1"/>
<line x1="160" y1="55.8" x2="160" y2="174.2" class="d-blue" data-step="1"/>
<path d="M169,115 L169,106 L160,106" class="d-blue" data-step="1"/>
<text x="35" y="121" text-anchor="middle">A</text>
<text x="160" y="47.8" text-anchor="middle">B</text>
<text x="285" y="121" text-anchor="middle">C</text>
<text x="160" y="198.2" text-anchor="middle">D</text>
<text x="148" y="135" class="d-small" text-anchor="middle">O</text>
<text x="215.5" y="109" class="d-blue" text-anchor="middle" data-step="1">15</text>
<text x="172" y="91.4" class="d-blue" text-anchor="middle" data-step="1">8</text>
<text x="222.1" y="79" class="d-red" text-anchor="middle" data-step="2">17</text>`,
        caption: 'diagonals 30 and 16',
      },
      explain: [
        'The diagonals of a rhombus bisect each other at 90°. Halves: 30/2 = 15 and 16/2 = 8.',
        'Each side is the hypotenuse of a right triangle with legs 15 and 8: √(225 + 64) = √289 = **17**.',
        'Perimeter = 4 × 17 = **68**. Area = 1/2 × 16 × 30 = **240**.',
      ],
    },
    {
      type: 'diagram',
      title: 'Bisectors of two angles of a quadrilateral',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<polygon points="68.5,200 153.1,99.2 237.7,200" class="d-fill" data-step="3"/>
<polygon points="52.3,108.4 68.5,200 237.7,200 267.7,30"/>
<line x1="68.5" y1="200" x2="153.1" y2="99.2" class="d-blue" data-step="2"/>
<line x1="237.7" y1="200" x2="153.1" y2="99.2" class="d-blue" data-step="2"/>
<text x="38.4" y="115.6" text-anchor="middle">A</text>
<text x="59.5" y="216.7" text-anchor="middle">B</text>
<text x="246.7" y="216.7" text-anchor="middle">C</text>
<text x="279.6" y="28.8" text-anchor="middle">D</text>
<text x="133.9" y="110.7" text-anchor="middle">O</text>
<path d="M55.5,126.1 A18,18 0 0 0 69.3,102.2" data-step="1"/>
<text x="83.5" y="132.4" class="d-small" text-anchor="middle" data-step="1">100°</text>
<path d="M247,37.5 A22,22 0 0 0 263.8,51.7" data-step="1"/>
<text x="241.9" y="66.6" class="d-small" text-anchor="middle" data-step="1">60°</text>
<path d="M94.5,200 A26,26 0 0 0 85.2,180.1" class="d-blue" data-step="2"/>
<path d="M87.8,177 A30,30 0 0 0 63.3,170.5" class="d-blue" data-step="2"/>
<path d="M221,180.1 A26,26 0 0 0 211.7,200" class="d-blue" data-step="2"/>
<path d="M242.9,170.5 A30,30 0 0 0 218.4,177" class="d-blue" data-step="2"/>
<path d="M142.8,111.4 A16,16 0 0 0 163.4,111.4" class="d-red" data-step="3"/>
<text x="153.1" y="135.2" class="d-red d-small" text-anchor="middle" data-step="3">80°</text>`,
        caption: '∠A = 100°, ∠D = 60°',
      },
      explain: [
        'The angles of a quadrilateral add to 360°, so ∠B + ∠C = 360° − 100° − 60° = 200°.',
        'BO and CO bisect ∠B and ∠C, so ∠OBC + ∠OCB = 200/2 = 100°.',
        'In △BOC: ∠BOC = 180° − 100° = **80°**. That is exactly (∠A + ∠D)/2.',
      ],
    },
  ],
  comparisons: [
    {
      title: 'Parallelogram vs rectangle vs rhombus vs square',
      items: ['Parallelogram', 'Rectangle', 'Rhombus', 'Square'],
      rows: [
        {
          aspect: 'Diagonals',
          values: ['Bisect each other', 'Equal, bisect each other', 'Perpendicular bisectors', 'Equal and perpendicular bisectors'],
          key: true,
        },
        { aspect: 'Sides', values: ['Opposite sides equal', 'Opposite sides equal', 'All four equal', 'All four equal'] },
        { aspect: 'Angles', values: ['Opposite angles equal', 'All 90°', 'Opposite angles equal', 'All 90°'] },
        { aspect: 'Area', values: ['base × height', 'l × b', '1/2 × d₁ × d₂', 'a² or d²/2'] },
        { aspect: 'Cyclic?', values: ['No (unless a rectangle)', 'Yes', 'No (unless a square)', 'Yes'] },
      ],
      reveal:
        'Every square is a rectangle and a rhombus. Equal diagonals means a rectangle; perpendicular diagonals means a rhombus; both means a square.',
      whenToUse: [
        'Only parallel opposite sides are given: use base × height and the parallelogram law.',
        'Right angles given: use Pythagoras on the diagonal.',
        'Diagonals given: half-diagonals and the side form a right triangle.',
        'Diagonal given: area = d²/2 directly.',
      ],
    },
    {
      title: 'Regular polygon quick table',
      items: ['Pentagon', 'Hexagon', 'Octagon', 'Decagon', 'Dodecagon'],
      rows: [
        { aspect: 'Sides n', values: ['5', '6', '8', '10', '12'] },
        { aspect: 'Each exterior angle', values: ['72°', '60°', '45°', '36°', '30°'], key: true },
        { aspect: 'Each interior angle', values: ['108°', '120°', '135°', '144°', '150°'] },
        { aspect: 'Diagonals', values: ['5', '9', '20', '35', '54'] },
      ],
      reveal: 'Know the exterior column and the rest follows: interior = 180° − exterior.',
      whenToUse: [
        'Interior 108° or exterior 72°.',
        'Interior 120°; a hexagon splits into 6 equilateral triangles.',
        'Interior 135° or exterior 45°.',
        'Interior 144° or exterior 36°.',
        'Interior 150° or exterior 30°.',
      ],
    },
  ],
  shortcuts: [
    {
      pattern: 'Interior angle is k times the exterior angle',
      example: 'Each interior angle of a regular polygon is 4 times its exterior angle. How many sides does it have?',
      options: ['8', '10', '12', '9'],
      answer: '10',
      ladder: [
        { name: 'Standard', steps: ['Let exterior = x, interior = 4x.', '4x + x = 180°, so x = 36°.', 'n = 360/36 = 10.'], seconds: 30 },
        { name: 'Shortcut', steps: ['n = 2(k + 1) = 2 × 5 = 10.'], seconds: 5 },
        { name: 'Option elimination', steps: ['Exterior must be 180/5 = 36°.', 'Only a decagon (10 sides) has a 36° exterior angle.'], seconds: 10 },
      ],
    },
    {
      pattern: 'Sides from the number of diagonals',
      example: 'A polygon has 54 diagonals. How many sides does it have?',
      options: ['9', '10', '12', '11'],
      answer: '12',
      ladder: [
        { name: 'Standard', steps: ['n(n − 3)/2 = 54, so n² − 3n − 108 = 0.', '(n − 12)(n + 9) = 0, so n = 12.'], seconds: 40 },
        { name: 'Shortcut', steps: ['n(n − 3) = 108: find two numbers 3 apart with product 108.', '12 × 9 = 108, so n = 12.'], seconds: 12 },
        { name: 'Put values', steps: ['Try options in n(n − 3)/2: 12 × 9/2 = 54. Done.'], seconds: 10 },
      ],
    },
    {
      pattern: 'Rhombus perimeter from diagonals',
      example: 'The diagonals of a rhombus are 24 cm and 10 cm. What is its perimeter?',
      options: ['52 cm', '68 cm', '48 cm', '56 cm'],
      answer: '52 cm',
      ladder: [
        { name: 'Standard', steps: ['Half-diagonals: 12 and 5.', 'Side = √(144 + 25) = √169 = 13.', 'Perimeter = 4 × 13 = 52 cm.'], seconds: 30 },
        { name: 'Shortcut', steps: ['Perimeter = 2√(d₁² + d₂²) = 2√(576 + 100) = 2 × 26 = 52.'], seconds: 15 },
        { name: 'Triplet', steps: ['12, 5 is the 5-12-13 triplet, so side 13 and perimeter 52.'], seconds: 5 },
      ],
    },
  ],
  qa: [
    {
      q: 'Sum of the exterior angles of a polygon with 20 sides?',
      a: ['360°, the same as any convex polygon.', 'The number of sides does not matter.'],
      tag: 'Trap',
    },
    {
      q: 'How do you find n from one exterior angle?',
      a: ['n = 360° ÷ exterior angle.', 'Exterior 40° gives n = 9.'],
      tag: 'Asked often',
    },
    {
      q: 'How do you find n from one interior angle?',
      a: ['First find exterior = 180° − interior.', 'Then n = 360° ÷ exterior. Interior 150°: exterior 30°, n = 12.'],
      tag: 'Shortcut',
    },
    {
      q: 'Formula for the number of diagonals?',
      a: ['n(n − 3)/2.', 'Pentagon 5, hexagon 9, octagon 20, decagon 35.'],
      tag: 'Asked often',
    },
    {
      q: 'Can a regular polygon have an exterior angle of 25°?',
      a: ['No. 360/25 = 14.4 is not a whole number.', 'The exterior angle must divide 360° exactly.'],
      tag: 'Trap',
    },
    {
      q: 'Which quadrilaterals have perpendicular diagonals?',
      a: ['Rhombus and square (also a kite).', 'Rectangle and parallelogram diagonals are not perpendicular in general.'],
    },
    {
      q: 'How is the side of a rhombus linked to its diagonals?',
      a: ['Half-diagonals and the side form a right triangle.', '4a² = d₁² + d₂².'],
      tag: 'Asked often',
    },
    {
      q: 'State the parallelogram law for diagonals.',
      a: ['d₁² + d₂² = 2(a² + b²).', 'For a rhombus (a = b) it becomes 4a² = d₁² + d₂².'],
    },
    {
      q: 'Bisectors of two adjacent angles of a parallelogram meet at what angle?',
      a: ['90°.', 'Adjacent angles add to 180°, so their halves add to 90°, leaving 90° at the meeting point.'],
      tag: 'Shortcut',
    },
    {
      q: 'Area of a square from its diagonal?',
      a: ['d²/2.', 'A square is a rhombus with equal diagonals: 1/2 × d × d.'],
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'What is each interior angle of a regular octagon?',
      options: ['120°', '135°', '140°', '144°'],
      answer: 1,
      explain: 'Exterior = 360/8 = 45°, so interior = 180 − 45 = 135°.',
      shortcut: 'Go through the exterior angle: 180 − 360/n.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'How many diagonals does a decagon have?',
      options: ['45', '40', '30', '35'],
      answer: 3,
      explain: 'n(n − 3)/2 = 10 × 7/2 = 35.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Each exterior angle of a regular polygon is 24°. How many sides does it have?',
      options: ['12', '18', '15', '20'],
      answer: 2,
      explain: 'n = 360/24 = 15.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'The diagonals of a rhombus are 16 cm and 12 cm. What is its area?',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<polygon points="64,115 160,43 256,115 160,187"/>
<line x1="64" y1="115" x2="256" y2="115" class="d-blue"/>
<line x1="160" y1="43" x2="160" y2="187" class="d-blue"/>
<path d="M168,115 L168,107 L160,107"/>
<text x="50" y="121" text-anchor="middle">A</text>
<text x="160" y="35" text-anchor="middle">B</text>
<text x="270" y="121" text-anchor="middle">C</text>
<text x="160" y="211" text-anchor="middle">D</text>`,
        caption: 'diagonals AC = 16 cm, BD = 12 cm',
      },
      options: ['192 cm²', '96 cm²', '48 cm²', '100 cm²'],
      answer: 1,
      explain: 'Area = 1/2 × 16 × 12 = 96 cm².',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The diagonals of a rhombus are 16 cm and 30 cm. What is its perimeter?',
      options: ['68 cm', '60 cm', '72 cm', '64 cm'],
      answer: 0,
      explain: 'Half-diagonals 8 and 15, so side = √(64 + 225) = 17. Perimeter = 4 × 17 = 68 cm.',
      shortcut: '8-15-17 is a Pythagorean triplet.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Each interior angle of a regular polygon is 5 times its exterior angle. How many sides does it have?',
      options: ['10', '14', '12', '15'],
      answer: 2,
      explain: 'Let the exterior angle be E. Then interior = 5E and 5E + E = 180°, so E = 30°. n = 360/30 = 12.',
      shortcut: 'n = 2(k + 1) = 2 × 6 = 12.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'In parallelogram ABCD, ∠A : ∠B = 2 : 3. What is ∠D?',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<polygon points="40,180 220,180 254,75.4 74,75.4"/>
<text x="28" y="196" text-anchor="middle">A</text>
<text x="232" y="196" text-anchor="middle">B</text>
<text x="266" y="73.4" text-anchor="middle">C</text>
<text x="62" y="73.4" text-anchor="middle">D</text>
<path d="M60,180 A20,20 0 0 0 46.2,161"/>
<text x="70.7" y="163.7" class="d-small" text-anchor="middle">2x</text>
<path d="M226.2,161 A20,20 0 0 0 200,180"/>
<text x="197.7" y="155.3" class="d-small" text-anchor="middle">3x</text>
<path d="M67.8,94.4 A20,20 0 0 0 94,75.4" class="d-red"/>
<text x="96.3" y="112.1" class="d-red" text-anchor="middle">?</text>`,
        caption: '∠A : ∠B = 2 : 3',
      },
      options: ['72°', '108°', '144°', '54°'],
      answer: 1,
      explain: '∠A + ∠B = 180°, so ∠A = 72° and ∠B = 108°. ∠D is opposite ∠B, so ∠D = 108°.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The parallel sides of a trapezium are 20 cm and 12 cm, and the distance between them is 8 cm. What is its area?',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<polygon points="40,185 280,185 220,89 76,89"/>
<line x1="76" y1="89" x2="76" y2="185" class="d-dash"/>
<path d="M76,177 L84,177 L84,185"/>
<text x="160" y="207" text-anchor="middle">20</text>
<text x="148" y="81" text-anchor="middle">12</text>
<text x="88" y="143" class="d-blue" text-anchor="middle">8</text>`,
        caption: 'parallel sides 20 cm and 12 cm, 8 cm apart',
      },
      options: ['96 cm²', '144 cm²', '128 cm²', '160 cm²'],
      answer: 2,
      explain: '1/2 × (20 + 12) × 8 = 128 cm².',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A polygon has 44 diagonals. How many sides does it have?',
      options: ['10', '12', '11', '9'],
      answer: 2,
      explain: 'n(n − 3)/2 = 44, so n(n − 3) = 88 = 11 × 8. n = 11.',
      shortcut: 'Look for two numbers 3 apart whose product is 2 × diagonals.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The sides of a parallelogram are 7 cm and 9 cm, and one diagonal is 8 cm. What is the other diagonal?',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<polygon points="36,173.4 212.2,173.4 284,56.6 107.8,56.6"/>
<line x1="212.2" y1="173.4" x2="107.8" y2="56.6" class="d-blue"/>
<line x1="36" y1="173.4" x2="284" y2="56.6" class="d-dash"/>
<text x="24" y="189.4" text-anchor="middle">A</text>
<text x="224.2" y="189.4" text-anchor="middle">B</text>
<text x="296" y="54.6" text-anchor="middle">C</text>
<text x="95.8" y="54.6" text-anchor="middle">D</text>
<text x="124.1" y="195.4" text-anchor="middle">9</text>
<text x="61.7" y="114.7" text-anchor="middle">7</text>
<text x="180.9" y="132.3" class="d-blue" text-anchor="middle">8</text>
<text x="214.6" y="107.3" class="d-red" text-anchor="middle">?</text>`,
        caption: 'AB = 9 cm, AD = 7 cm, BD = 8 cm',
      },
      options: ['12 cm', '14 cm', '16 cm', '10 cm'],
      answer: 1,
      explain: 'd₁² + d₂² = 2(a² + b²): 64 + d₂² = 2(49 + 81) = 260, so d₂² = 196 and d₂ = 14 cm.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Each side of a rhombus is 13 cm and one diagonal is 10 cm. What is its area?',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<polygon points="122,115 160,23.8 198,115 160,206.2"/>
<line x1="122" y1="115" x2="198" y2="115" class="d-blue"/>
<line x1="160" y1="23.8" x2="160" y2="206.2" class="d-dash"/>
<path d="M168,115 L168,107 L160,107"/>
<text x="108" y="121" text-anchor="middle">A</text>
<text x="160" y="15.8" text-anchor="middle">B</text>
<text x="212" y="121" text-anchor="middle">C</text>
<text x="160" y="230.2" text-anchor="middle">D</text>
<text x="191.9" y="70" text-anchor="middle">13</text>
<text x="141" y="131" class="d-blue d-small" text-anchor="middle">5</text>
<text x="179" y="131" class="d-blue d-small" text-anchor="middle">5</text>
<text x="172" y="166.6" class="d-red" text-anchor="middle">?</text>`,
        caption: 'AC = 10 cm, each side 13 cm',
      },
      options: ['130 cm²', '120 cm²', '240 cm²', '60 cm²'],
      answer: 1,
      explain: 'Half of the other diagonal = √(169 − 25) = 12, so it is 24 cm. Area = 1/2 × 10 × 24 = 120 cm².',
      shortcut: '5-12-13 triplet gives the half-diagonal 12 at once.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'The difference between the interior and exterior angles of a regular polygon is 108°. How many sides does it have?',
      options: ['8', '12', '10', '9'],
      answer: 2,
      explain: 'I + E = 180 and I − E = 108, so E = 36°. n = 360/36 = 10.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'In quadrilateral ABCD, ∠A = 100° and ∠D = 60°. The bisectors of ∠B and ∠C meet at O. What is ∠BOC?',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<polygon points="52.3,108.4 68.5,200 237.7,200 267.7,30"/>
<line x1="68.5" y1="200" x2="153.1" y2="99.2" class="d-blue"/>
<line x1="237.7" y1="200" x2="153.1" y2="99.2" class="d-blue"/>
<text x="38.4" y="115.6" text-anchor="middle">A</text>
<text x="59.5" y="216.7" text-anchor="middle">B</text>
<text x="246.7" y="216.7" text-anchor="middle">C</text>
<text x="279.6" y="28.8" text-anchor="middle">D</text>
<text x="133.9" y="110.7" text-anchor="middle">O</text>
<path d="M55.5,126.1 A18,18 0 0 0 69.3,102.2"/>
<text x="83.5" y="132.4" class="d-small" text-anchor="middle">100°</text>
<path d="M247,37.5 A22,22 0 0 0 263.8,51.7"/>
<text x="241.9" y="66.6" class="d-small" text-anchor="middle">60°</text>
<path d="M142.8,111.4 A16,16 0 0 0 163.4,111.4" class="d-red"/>
<text x="153.1" y="137.2" class="d-red" text-anchor="middle">?</text>`,
        caption: 'BO and CO bisect ∠B and ∠C',
      },
      options: ['80°', '100°', '60°', '70°'],
      answer: 0,
      explain: '∠B + ∠C = 360 − 160 = 200°. ∠BOC = 180 − (∠B + ∠C)/2 = 180 − 100 = 80°.',
      shortcut: '∠BOC = (∠A + ∠D)/2 = 160/2 = 80°.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        'The numbers of sides of two regular polygons are in the ratio 5 : 4, and their interior angles differ by 6°. How many sides do they have?',
      options: ['10 and 8', '20 and 16', '25 and 20', '15 and 12'],
      answer: 3,
      explain:
        'Let the sides be 5k and 4k. Interior = 180° − exterior, so the interior angles differ by exactly as much as the exterior angles. Exterior angles: 360/(4k) = 90/k and 360/(5k) = 72/k. Their difference 18/k = 6 gives k = 3, so the sides are 15 and 12.',
      shortcut: 'Check options: 360/12 − 360/15 = 30 − 24 = 6. Done.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'The diagonal of a square is 14 cm. What is its area?',
      options: ['196 cm²', '98 cm²', '49 cm²', '108 cm²'],
      answer: 1,
      explain:
        'The diagonal of a square of side a is a√2, so a = 14/√2 = 7√2 cm and the area a² = 49 × 2 = 98 cm².',
      shortcut: 'Area = d²/2 = 196/2 = 98. (A square is a rhombus, so ½ × d × d works too.)',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'The diagonals of a rhombus are always equal.',
      answer: false,
      explain: 'They are perpendicular bisectors, but equal only when the rhombus is a square.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'The exterior angles of any convex polygon add up to 360°.',
      answer: true,
      explain: 'Walking round the polygon you turn through one full turn, 360°, whatever the number of sides.',
    },
  ],
};

export default topic;
