import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'mensuration-2d',
  title: '2D shapes: area and perimeter',
  level: 'intermediate',
  masteryMinutes: 90,
  reviseMinutes: 30,
  priority: 'high',
  weightage: { tier1: 1, tier2: 1.5 },
  tags: ['area', 'perimeter', 'triangle', "Heron's formula", 'circle', 'sector', 'ring', 'rhombus', 'trapezium', 'path', 'wheel'],
  summary:
    'Learn the area formulas cold and the numbers 22/7, 7, 14, 21 and 154. Most questions are one formula plus one Pythagorean triplet or one percentage-change step.',
  patterns: [
    {
      name: 'Circle, sector, arc and ring (circular path)',
      frequency: 'most',
      example: 'A 7 m wide path runs round a circular garden of radius 21 m. Area of the path?',
    },
    { name: "Triangles: equilateral, right and Heron's formula", frequency: 'most', example: 'Sides are 17 cm, 25 cm and 28 cm. Find the area.' },
    { name: 'Percentage change in area', frequency: 'often', example: 'Length rises 25% and breadth falls 20%. Change in area?' },
    {
      name: 'Rectangle and square: diagonal, paths and crossing roads',
      frequency: 'often',
      example: 'Two 3 m roads cross a 60 m × 40 m park. Area of the roads?',
    },
    {
      name: 'Same wire bent into another shape',
      frequency: 'often',
      example: 'A wire bent into a square of area 121 cm² is rebent into a circle. Its area?',
    },
    {
      name: 'Inradius and circumradius of triangles',
      frequency: 'often',
      example: 'Ratio of the circumcircle to the incircle area of an equilateral triangle?',
    },
    { name: 'Wheel revolutions', frequency: 'rare', example: 'A wheel of radius 35 cm covers 1.1 km. How many revolutions?' },
  ],
  keyPoints: [
    {
      title: "Triangle and Heron's formula",
      text: "Use 1/2 × base × height when a height is known. With three sides, use Heron's formula with the semi-perimeter s. Remember 13, 14, 15 → 84 and any right triangle: half the product of the legs.",
      formula: 'Area = √(s(s − a)(s − b)(s − c)),  s = (a + b + c)/2',
      example: '17, 25, 28: s = 35, √(35 × 18 × 10 × 7) = √44,100 = **210**.',
    },
    {
      title: 'Equilateral triangle',
      text: 'Side a: height √3/2 × a, area √3/4 × a². The inradius is one third of the height and the circumradius two thirds, so R = 2r.',
      formula: 'Area = √3/4 × a²,  r = a/(2√3),  R = a/√3',
      example: 'a = 8√3: area = √3/4 × 192 = **48√3**.',
    },
    {
      title: 'Right triangle radii',
      text: 'In a right triangle the hypotenuse is a diameter of the circumcircle, so R = h/2. The inradius is (p + b − h)/2, where p and b are the legs.',
      formula: 'r = (p + b − h)/2,  R = h/2',
      example: 'Legs 8 and 15, hypotenuse 17: r = (8 + 15 − 17)/2 = **3**, R = 8.5.',
    },
    {
      title: 'Rectangle, square and paths',
      text: 'Rectangle: area lb, perimeter 2(l + b), diagonal √(l² + b²). Square: area a² = d²/2. A path of width w outside: (l + 2w)(b + 2w) − lb. Two crossing roads of width w: w(l + b − w), since the centre square is counted once.',
      formula: 'Crossing roads = w(l + b − w)',
      example: '60 × 40 park, roads 3 m wide: 3 × (60 + 40 − 3) = **291 m²**.',
    },
    {
      title: 'Circle and semicircle',
      text: 'Area πr², circumference 2πr. A semicircle has area 1/2 × πr² and perimeter πr + 2r, which is 36/7 × r with π = 22/7. Circumference 44 means r = 7; 88 means r = 14.',
      formula: 'Area = πr²,  C = 2πr,  semicircle perimeter = 36/7 × r',
      example: 'Circumference 88: r = 14, area = 22/7 × 196 = **616**.',
    },
    {
      title: 'Sector and arc',
      text: 'A sector of angle θ is θ/360 of the circle. Its perimeter is the arc plus two radii. Sector area is also 1/2 × arc × radius. A minute hand sweeps 6° a minute.',
      formula: 'Arc = θ/360 × 2πr,  Area = θ/360 × πr²',
      example: 'r = 21, θ = 72°: 1/5 × 1,386 = **277.2**.',
    },
    {
      title: 'Ring (circular path)',
      text: 'The area between two circles of radii R and r. Factor it: the sum times the difference of the radii.',
      formula: 'Ring area = π(R² − r²) = π(R + r)(R − r)',
      example: 'R = 28, r = 21: 22/7 × 49 × 7 = **1,078**.',
    },
    {
      title: 'Rhombus, trapezium, wheels and % change in area',
      text: 'Rhombus 1/2 × d₁ × d₂. Trapezium 1/2 × (a + b) × h. Revolutions = distance ÷ circumference. If length and breadth change a% and b%, area changes a + b + ab/100 percent; if every side or the radius changes x%, area changes 2x + x²/100 percent.',
      formula: '% change in area = 2x + x²/100',
      example: 'Radius +10%: 20 + 1 = **21%** more area.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'A path round a circle is a ring',
      figure: {
        viewBox: '0 0 320 224',
        svg: `
<path d="M64.8,112 A95.2,95.2 0 1 1 255.2,112 A95.2,95.2 0 1 1 64.8,112 Z M88.6,112 A71.4,71.4 0 1 0 231.4,112 A71.4,71.4 0 1 0 88.6,112 Z" class="d-fill-pink" data-step="3"/>
<circle cx="160" cy="112" r="95.2"/>
<circle cx="160" cy="112" r="71.4" class="d-green" data-step="1"/>
<circle cx="160" cy="112" r="2.5" class="d-dot"/>
<line x1="160" y1="112" x2="227.1" y2="87.6" class="d-green" data-step="1"/>
<text x="193.3" y="91.2" text-anchor="middle" class="d-green" data-step="1">21</text>
<line x1="227.1" y1="87.6" x2="249.5" y2="79.4" class="d-red d-thick" data-step="2"/>
<text x="228.5" y="74" text-anchor="middle" class="d-red" data-step="2">7</text>
<line x1="160" y1="112" x2="87.1" y2="50.8" class="d-blue d-dash" data-step="2"/>
<text x="126.4" y="65.8" text-anchor="middle" class="d-blue" data-step="2">28</text>
<text x="160" y="148" text-anchor="middle" class="d-small d-soft">garden</text>
<text x="160" y="199.2" text-anchor="middle" class="d-small" data-step="3">path</text>`,
        caption: 'Path 7 m wide round a garden of radius 21 m',
      },
      explain: [
        'The garden is the inner circle: r = 21 m.',
        'The path adds 7 m all the way round, so the outer radius is R = 21 + 7 = 28 m.',
        'The path is the ring between the circles: area = π(R² − r²) = π(R + r)(R − r).',
        '22/7 × (28 + 21) × (28 − 21) = 22/7 × 49 × 7 = **1,078 m²**.',
      ],
    },
    {
      type: 'diagram',
      title: 'Two crossing roads: count the middle once',
      figure: {
        viewBox: '0 0 320 214',
        svg: `
<polygon points="40,110 280,110 280,122 40,122" class="d-fill" data-step="1"/>
<polygon points="154,36 166,36 166,196 154,196" class="d-fill-blue" data-step="2"/>
<polygon points="154,110 166,110 166,122 154,122" class="d-fill-pink d-red" data-step="3"/>
<polygon points="40,36 280,36 280,196 40,196"/>
<text x="160" y="26" text-anchor="middle" data-step="1">60 m</text>
<text x="35" y="76" text-anchor="end" data-step="2">40</text><text x="35" y="94" text-anchor="end" data-step="2">m</text>
<text x="88" y="104" text-anchor="middle" class="d-small" data-step="1">3 m</text>
<text x="170" y="154" text-anchor="start" class="d-small" data-step="2">3 m</text>
<text x="182" y="104" text-anchor="start" class="d-small d-red" data-step="3 4">3 × 3</text>`,
        caption: '60 m × 40 m park, roads 3 m wide',
      },
      explain: [
        'The road along the length is a 60 m × 3 m strip: 180 m².',
        'The road along the breadth is a 40 m × 3 m strip: 120 m².',
        'The 3 m × 3 m square where they cross is inside both strips, so it has been counted twice.',
        'Take it off once: 180 + 120 − 9 = **291 m²**. Shortcut: w(l + b − w) = 3 × 97.',
      ],
    },
    {
      type: 'diagram',
      title: '13-14-15: the height splits it into two triplets',
      figure: {
        viewBox: '0 0 320 224',
        svg: `
<polygon points="134.5,46 72,196 134.5,196" class="d-fill-green" data-step="2"/>
<polygon points="134.5,46 134.5,196 247,196" class="d-fill-blue" data-step="3"/>
<polygon points="134.5,46 72,196 247,196"/>
<line x1="134.5" y1="46" x2="134.5" y2="196" class="d-red d-dash" data-step="1"/>
<path d="M143.5,196 L143.5,187 L134.5,187" class="d-thin d-red" data-step="1"/>
<text x="134.5" y="38" text-anchor="middle">A</text>
<text x="56" y="200">B</text>
<text x="252" y="200">C</text>
<text x="134.5" y="214" text-anchor="middle" class="d-small">D</text>
<text x="91.2" y="121" text-anchor="end" data-step="2">13</text>
<text x="202.8" y="121" data-step="3">15</text>
<text x="103.2" y="214" text-anchor="middle" class="d-blue" data-step="1 2">5</text>
<text x="190.8" y="214" text-anchor="middle" class="d-blue" data-step="1 3">9</text>
<text x="140.5" y="141" class="d-red" data-step="2 3 4">12</text>`,
        caption: 'Sides 13, 14 and 15',
      },
      explain: [
        'Drop the height AD onto the side of 14. It cuts 14 into BD = 5 and DC = 9.',
        'Left piece: 5-12-13 is a triplet, so the height AD = 12.',
        'Right piece: 9-12-15 (three times 3-4-5) fits the same height 12. The split checks out.',
        'Area = 1/2 × 14 × 12 = **84 cm²**. Heron agrees: √(21 × 8 × 7 × 6) = √7,056 = 84.',
      ],
    },
  ],
  comparisons: [
    {
      title: 'Circle vs semicircle vs sector vs ring',
      items: ['Circle', 'Semicircle', 'Sector (angle θ)', 'Ring'],
      rows: [
        { aspect: 'Area', values: ['πr²', '1/2 × πr²', 'θ/360 × πr²', 'π(R² − r²)'], key: true },
        { aspect: 'Perimeter', values: ['2πr', 'πr + 2r', 'θ/360 × 2πr + 2r', '2π(R + r)'] },
        { aspect: 'Example', values: ['r = 7: area 154', 'r = 7: area 77, perimeter 36', 'r = 7, θ = 90°: area 38.5', 'R = 14, r = 7: area 462'] },
      ],
      reveal: 'Each is a fraction of the full circle. The perimeters trip people up: a semicircle and a sector add the straight edges.',
      whenToUse: [
        'Full round field, wheel or plate.',
        'Half-round window or a semicircular end of a track.',
        'A horse tied to a corner, a clock hand, or a pie slice.',
        'A path round a circular garden, or the cross-section of a pipe.',
      ],
    },
    {
      title: 'Inradius vs circumradius',
      items: ['Equilateral triangle (side a)', 'Right triangle (legs p, b, hypotenuse h)', 'Square (side a)'],
      rows: [
        { aspect: 'Inradius r', values: ['a/(2√3)', '(p + b − h)/2', 'a/2'] },
        { aspect: 'Circumradius R', values: ['a/√3', 'h/2', 'a/√2'], key: true },
        { aspect: 'R : r', values: ['2 : 1', 'Depends on sides', '√2 : 1'] },
        { aspect: 'Area of circumcircle : incircle', values: ['4 : 1', 'Depends on sides', '2 : 1'] },
      ],
      reveal:
        "For the equilateral triangle R = 2r, so the areas are 4 : 1. For a square the diagonal is the circumcircle's diameter and the side is the incircle's diameter.",
      whenToUse: [
        'Circle inside or around an equilateral triangle.',
        'Circle inside or around a right triangle.',
        'Circle inside or around a square.',
      ],
    },
  ],
  shortcuts: [
    {
      pattern: 'Percentage change in the area of a circle',
      example: 'The radius of a circle is increased by 10%. By what percent does its area increase?',
      options: ['20%', '21%', '10%', '11%'],
      answer: '21%',
      ladder: [
        { name: 'Standard', steps: ['Take r = 10: area 100π.', 'New r = 11: area 121π.', 'Increase 21π on 100π = 21%.'], seconds: 30 },
        { name: 'Shortcut', steps: ['2x + x²/100 = 20 + 1 = 21%.'], seconds: 5 },
        { name: 'Option elimination', steps: ['Area grows faster than twice the radius change, so above 20%.', 'Only 21% fits.'], seconds: 5 },
      ],
    },
    {
      pattern: 'Area of a scalene triangle from its sides',
      example: 'Find the area of a triangle whose sides are 13 cm, 14 cm and 15 cm.',
      options: ['84 cm²', '72 cm²', '91 cm²', '96 cm²'],
      answer: '84 cm²',
      ladder: [
        { name: 'Standard', steps: ["Heron's formula: s = 21.", '√(21 × 8 × 7 × 6) = √7,056 = 84.'], seconds: 45 },
        {
          name: 'Shortcut',
          steps: ['Drop the height 12 on side 14: it splits 14 into 5 + 9.', '5-12-13 and 9-12-15 are triplets, so area = 1/2 × 14 × 12 = 84.'],
          seconds: 15,
        },
        { name: 'Memory', steps: ['13-14-15 is a standard triangle: area 84. Worth remembering.'], seconds: 3 },
      ],
    },
    {
      pattern: 'Wheel revolutions',
      example: 'A wheel of radius 35 cm covers a distance of 1.1 km. How many revolutions does it make?',
      options: ['500', '250', '550', '1,000'],
      answer: '500',
      ladder: [
        { name: 'Standard', steps: ['Circumference = 2 × 22/7 × 35 = 220 cm.', '1.1 km = 1,10,000 cm.', '1,10,000 ÷ 220 = 500.'], seconds: 30 },
        { name: 'Shortcut', steps: ['Work in metres: circumference 2.2 m.', '1,100 ÷ 2.2 = 500.'], seconds: 12 },
        {
          name: 'Option elimination',
          steps: ['Diameter 0.7 m, so one turn is a little over 2 m.', '1,100 ÷ 2.2 is about 500; 250 and 1,000 are off by a factor of 2.'],
          seconds: 10,
        },
      ],
    },
  ],
  qa: [
    {
      q: "State Heron's formula.",
      a: ['Area = √(s(s − a)(s − b)(s − c)).', 's = (a + b + c)/2, the semi-perimeter.'],
      tag: 'Asked often',
    },
    {
      q: 'Area of an equilateral triangle of side a?',
      a: ['√3/4 × a².', 'Height = √3/2 × a.'],
      tag: 'Asked often',
    },
    {
      q: 'If the radius is doubled, what happens to the area?',
      a: ['It becomes 4 times.', 'Area scales with the square of the radius.'],
      tag: 'Trap',
    },
    {
      q: 'Perimeter of a semicircle of radius r?',
      a: ['πr + 2r, not just πr.', 'With π = 22/7 it is 36/7 × r. r = 7 gives 36.'],
      tag: 'Trap',
    },
    {
      q: 'Area of a sector in terms of arc length?',
      a: ['1/2 × arc × radius.', 'Like a triangle with base = arc and height = radius.'],
      tag: 'Shortcut',
    },
    {
      q: 'Area of the path when two roads cross a rectangular park?',
      a: ['w(l + b − w).', 'Subtract w² because the crossing square is counted twice.'],
      tag: 'Trap',
    },
    {
      q: 'Area of a square from its diagonal?',
      a: ['d²/2.', 'Diagonal 16 gives area 128.'],
    },
    {
      q: 'All sides of a square rise by 20%. Change in area?',
      a: ['2x + x²/100 = 40 + 4 = 44% increase.', 'Same rule for the radius of a circle.'],
      tag: 'Shortcut',
    },
    {
      q: 'Inradius of a right triangle with legs p, b and hypotenuse h?',
      a: ['(p + b − h)/2.', 'Legs 6 and 8, hypotenuse 10: r = 2.'],
    },
    {
      q: 'Which radii make π = 22/7 cancel neatly?',
      a: ['Multiples of 7: 7, 14, 21, 28, 35.', 'r = 7: area 154, circumference 44.'],
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'What is the area of an equilateral triangle with side 8√3 cm?',
      options: ['48√3 cm²', '64√3 cm²', '36√3 cm²', '24√3 cm²'],
      answer: 0,
      explain: '√3/4 × (8√3)² = √3/4 × 192 = 48√3 cm².',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'The circumference of a circle is 88 cm. What is its area? (Take π = 22/7.)',
      options: ['154 cm²', '616 cm²', '308 cm²', '1,232 cm²'],
      answer: 1,
      explain: '2πr = 88, so r = 14. Area = 22/7 × 196 = 616 cm².',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'A rectangle is 24 cm long and 7 cm wide. What is the length of its diagonal?',
      options: ['26 cm', '24 cm', '25 cm', '31 cm'],
      answer: 2,
      explain: '√(24² + 7²) = √625 = 25 cm.',
      shortcut: '7-24-25 is a triplet.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'The diagonal of a square is 16 cm. What is its area?',
      options: ['256 cm²', '128 cm²', '64 cm²', '112 cm²'],
      answer: 1,
      explain: 'Area = d²/2 = 256/2 = 128 cm².',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Find the area of a triangle whose sides are 17 cm, 25 cm and 28 cm.',
      options: ['210 cm²', '180 cm²', '240 cm²', '196 cm²'],
      answer: 0,
      explain: 's = (17 + 25 + 28)/2 = 35. Then s − a, s − b, s − c = 18, 10 and 7. Area = √(35 × 18 × 10 × 7) = √44,100 = 210 cm².',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Find the area of a sector of a circle of radius 21 cm with a central angle of 72°. (Take π = 22/7.)',
      figure: {
        viewBox: '0 0 320 210',
        svg: `
<path d="M96,186 L222,186 A126,126 0 0 0 134.9,66.2 Z" class="d-fill"/>
<path d="M120,186 A24,24 0 0 0 103.4,163.2" class="d-thin"/>
<text x="128.4" y="162.5" text-anchor="middle" class="d-small">72°</text>
<text x="159" y="204" text-anchor="middle">21 cm</text>`,
        caption: 'Area of the shaded sector = ?',
      },
      options: ['138.6 cm²', '231 cm²', '277.2 cm²', '554.4 cm²'],
      answer: 2,
      explain: '72/360 = 1/5. Circle area = 22/7 × 441 = 1,386. Sector = 1,386 ÷ 5 = 277.2 cm².',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A path 7 m wide runs around the outside of a circular garden of radius 21 m. What is the area of the path? (Take π = 22/7.)',
      figure: {
        viewBox: '0 0 320 220',
        svg: `
<path d="M67.6,110 A92.4,92.4 0 1 1 252.4,110 A92.4,92.4 0 1 1 67.6,110 Z M90.7,110 A69.3,69.3 0 1 0 229.3,110 A69.3,69.3 0 1 0 90.7,110 Z" class="d-fill-pink"/>
<circle cx="160" cy="110" r="92.4"/>
<circle cx="160" cy="110" r="69.3"/>
<circle cx="160" cy="110" r="2.5" class="d-dot"/>
<line x1="160" y1="110" x2="225.1" y2="86.3"/>
<text x="191.6" y="88.7" text-anchor="middle" class="d-small">21 m</text>
<line x1="225.1" y1="86.3" x2="246.8" y2="78.4" class="d-red d-thick"/>
<text x="256.5" y="82.3" text-anchor="start" class="d-small d-red">7 m</text>
<text x="160" y="144" text-anchor="middle" class="d-small d-soft">garden</text>`,
        caption: 'Area of the shaded path = ?',
      },
      options: ['924 m²', '1,078 m²', '1,386 m²', '1,232 m²'],
      answer: 1,
      explain: 'Outer radius 28. Area = π(28² − 21²) = 22/7 × 343 = 1,078 m².',
      shortcut: 'π(R + r)(R − r) = 22/7 × 49 × 7 = 1,078.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The length of a rectangle is increased by 25% and its breadth is decreased by 20%. What is the change in its area?',
      options: ['5% increase', '5% decrease', 'No change', '1% decrease'],
      answer: 2,
      explain: '25 − 20 + (25 × −20)/100 = 25 − 20 − 5 = 0. No change.',
      shortcut: '5/4 × 4/5 = 1.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The area of a trapezium is 180 cm² and its parallel sides are 16 cm and 20 cm. What is the distance between them?',
      figure: {
        viewBox: '0 0 320 200',
        svg: `
<polygon points="90,60 250,60 270,160 70,160" class="d-fill"/>
<line x1="120" y1="60" x2="120" y2="160" class="d-red d-dash"/>
<path d="M128,160 L128,152 L120,152" class="d-thin d-red"/>
<text x="170" y="50" text-anchor="middle">16 cm</text>
<text x="170" y="182" text-anchor="middle">20 cm</text>
<text x="128" y="116" class="d-red">h = ?</text>`,
        caption: 'Area = 180 cm²',
      },
      options: ['9 cm', '10 cm', '12 cm', '8 cm'],
      answer: 1,
      explain: '180 = 1/2 × (16 + 20) × h = 18h, so h = 10 cm.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        'A rectangular park is 60 m long and 40 m wide. Two roads, each 3 m wide, run through the middle parallel to the sides. What is the total area of the roads?',
      figure: {
        viewBox: '0 0 320 210',
        svg: `
<polygon points="44,104 284,104 284,116 44,116" class="d-fill"/>
<polygon points="158,30 170,30 170,190 158,190" class="d-fill"/>
<polygon points="44,30 284,30 284,190 44,190"/>
<text x="164" y="20" text-anchor="middle">60 m</text>
<text x="39" y="70" text-anchor="end">40</text>
<text x="39" y="88" text-anchor="end">m</text>
<text x="92" y="98" text-anchor="middle" class="d-small">3 m</text>
<text x="174" y="150" text-anchor="start" class="d-small">3 m</text>`,
        caption: 'Area of the two roads = ?',
      },
      options: ['300 m²', '294 m²', '297 m²', '291 m²'],
      answer: 3,
      explain: 'Roads = 60 × 3 + 40 × 3 − 3 × 3 = 180 + 120 − 9 = 291 m².',
      shortcut: 'w(l + b − w) = 3 × 97 = 291.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The legs of a right triangle are 8 cm and 15 cm. What is the radius of its incircle?',
      figure: {
        viewBox: '0 0 320 214',
        svg: `
<polygon points="62,104 62,192 227,192"/>
<path d="M72,192 L72,182 L62,182" class="d-thin"/>
<circle cx="95" cy="159" r="33" class="d-blue"/>
<circle cx="95" cy="159" r="2.5" class="d-dot"/>
<line x1="95" y1="159" x2="95" y2="192" class="d-red"/>
<text x="133" y="186" class="d-small d-red">r = ?</text>
<text x="54" y="153" text-anchor="end" class="d-small">8 cm</text>
<text x="164.5" y="210" text-anchor="middle" class="d-small">15 cm</text>`,
      },
      options: ['4 cm', '2.5 cm', '3.5 cm', '3 cm'],
      answer: 3,
      explain: 'Hypotenuse 17. r = (8 + 15 − 17)/2 = 3 cm.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'What is the ratio of the area of the circumcircle to the area of the incircle of an equilateral triangle?',
      options: ['2 : 1', '4 : 1', '3 : 1', '√3 : 1'],
      answer: 1,
      explain:
        'The centre sits on each height at 1/3 of the way up, so r = h/3 and R = 2h/3. So R = 2r. Circle areas go with the square of the radius: 2² : 1 = 4 : 1.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        'A wire bent into a square encloses 121 cm². The same wire is bent into a circle. What area does the circle enclose? (Take π = 22/7.)',
      options: ['176 cm²', '132 cm²', '154 cm²', '144 cm²'],
      answer: 2,
      explain: 'Side 11, so the wire is 44 cm. 2πr = 44 gives r = 7. Area = 154 cm².',
      shortcut: 'Wire 44 is the circumference for r = 7, the most common radius.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        'Four circles of radius 7 cm are placed so that each touches two others, their centres forming a square. What is the area of the region enclosed between them? (Take π = 22/7.)',
      figure: {
        viewBox: '0 0 320 220',
        svg: `
<path d="M160,68 A42,42 0 0 0 202,110 A42,42 0 0 0 160,152 A42,42 0 0 0 118,110 A42,42 0 0 0 160,68 Z" class="d-fill-pink"/>
<circle cx="118" cy="68" r="42"/>
<circle cx="202" cy="68" r="42"/>
<circle cx="202" cy="152" r="42"/>
<circle cx="118" cy="152" r="42"/>
<polygon points="118,68 202,68 202,152 118,152" class="d-dash d-soft d-thin"/>
<circle cx="118" cy="68" r="2.5" class="d-dot"/>
<circle cx="202" cy="68" r="2.5" class="d-dot"/>
<circle cx="202" cy="152" r="2.5" class="d-dot"/>
<circle cx="118" cy="152" r="2.5" class="d-dot"/>
<line x1="118" y1="68" x2="88.3" y2="38.3" class="d-blue"/>
<text x="109.3" y="46.6" text-anchor="middle" class="d-blue">7</text>`,
        caption: 'Shaded region = ?',
      },
      options: ['42 cm²', '49 cm²', '56 cm²', '35 cm²'],
      answer: 0,
      explain: 'Centres form a square of side 14: area 196. Inside it are four quarter circles = one full circle = 154. Gap = 196 − 154 = 42 cm².',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'If the radius of a circle is doubled, its area is also doubled.',
      answer: false,
      explain: 'Area goes with r², so it becomes 4 times.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'The area of a square is half the square of its diagonal.',
      answer: true,
      explain: 'd = a√2, so d² = 2a² and a² = d²/2.',
    },
  ],
};

export default topic;
