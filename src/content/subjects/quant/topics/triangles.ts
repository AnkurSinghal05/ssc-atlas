import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'triangles',
  title: 'Triangles',
  level: 'advanced',
  masteryMinutes: 180,
  reviseMinutes: 60,
  priority: 'high',
  weightage: { tier1: 1.5, tier2: 2 },
  tags: [
    'centroid',
    'incentre',
    'circumcentre',
    'orthocentre',
    'similar triangles',
    'congruence',
    'angle bisector theorem',
    'Apollonius',
    'Pythagorean triplets',
    'equilateral triangle',
    'Heron',
  ],
  summary:
    'Four centres, similar triangles and a handful of right-triangle facts carry most of the marks. Learn each centre with its one angle formula and you can answer in seconds.',
  patterns: [
    { name: 'Angle at the incentre, orthocentre or circumcentre', frequency: 'most', example: 'I is the incentre of △ABC and ∠A = 70°. Find ∠BIC.' },
    { name: 'Similar triangles: BPT and area ratios', frequency: 'most', example: 'DE ∥ BC and AD : DB = 2 : 3. Find area △ADE : area DECB.' },
    { name: 'Equilateral triangle: height, area, inradius, circumradius', frequency: 'often', example: 'Side 12 cm. Find the circumradius.' },
    { name: 'Medians and centroid (Apollonius, area split)', frequency: 'often', example: 'AB = 7, AC = 9, BC = 8. Find the median AD.' },
    { name: 'Right triangles and Pythagorean triplets', frequency: 'often', example: 'Legs 9 and 12. Find the inradius.' },
    { name: 'Angle bisector theorem', frequency: 'often', example: 'AB = 6, AC = 9, BC = 10. The bisector of ∠A meets BC at D. Find BD.' },
    { name: 'Angle sum, exterior angle and side rules', frequency: 'rare', example: 'Sides 7, 8 and 12. Acute, right or obtuse?' },
  ],
  keyPoints: [
    {
      title: 'Angles and sides',
      text: 'Angles add to 180°. An exterior angle equals the sum of the two interior opposite angles. The larger side faces the larger angle. Any side is less than the sum and more than the difference of the other two. With c the longest side: c² < a² + b² acute, = right, > obtuse.',
      formula: '|b − c| < a < b + c',
      example: 'Sides 7, 8, 12: 49 + 64 = 113 < 144, so the triangle is **obtuse**.',
    },
    {
      title: 'Congruence and similarity tests',
      text: 'Congruent (same shape and size): SSS, SAS, ASA, AAS, RHS. Similar (same shape): AA, SSS in the same ratio, SAS with the included angle equal. AAA proves similarity only, never congruence.',
      example: 'Two triangles with angles 50°, 60°, 70° are similar, not necessarily congruent.',
    },
    {
      title: 'Similar triangles and the basic proportionality theorem',
      text: 'If DE ∥ BC in △ABC, then AD/DB = AE/EC and △ADE ~ △ABC. In similar triangles, sides, heights, medians and perimeters are in ratio k, and areas are in ratio k².',
      formula: 'area₁/area₂ = (side₁/side₂)²',
      example: 'AD : DB = 2 : 3 gives AD : AB = 2 : 5, areas 4 : 25, so △ADE : DECB = **4 : 21**.',
    },
    {
      title: 'Right triangles and triplets',
      text: 'Know the triplets 3-4-5, 5-12-13, 8-15-17, 7-24-25, 20-21-29, 9-40-41, 12-35-37, 11-60-61 and their multiples. For legs a, b and hypotenuse c: altitude to the hypotenuse = ab/c, inradius = (a + b − c)/2, circumradius = c/2.',
      formula: 'r = (a + b − c)/2; R = c/2; altitude = ab/c',
      example: 'Legs 9 and 12: c = 15, r = (9 + 12 − 15)/2 = **3**, R = **7.5**.',
    },
    {
      title: 'The four centres and their angle formulas',
      text: 'Centroid G: medians meet. Incentre I: angle bisectors meet. Circumcentre O: perpendicular bisectors of the sides meet. Orthocentre H: altitudes meet. The excentre opposite A (centre of the circle touching BC and the extensions of AB and AC) gives 90° − A/2.',
      formula: '∠BIC = 90° + A/2; ∠BOC = 2A (acute); ∠BHC = 180° − A',
      example: '∠A = 70°: ∠BIC = **125°**, ∠BOC = **140°**, ∠BHC = **110°**.',
    },
    {
      title: 'Medians, centroid and Apollonius',
      text: 'Write a = BC, b = CA, c = AB (each side named after the opposite corner). The centroid divides each median 2 : 1 from the vertex. The three medians cut the triangle into 6 equal areas. For median AD: AB² + AC² = 2(AD² + BD²). The squares of the medians add to 3/4 of the squares of the sides.',
      formula: 'AD² = (2b² + 2c² − a²)/4',
      example: 'AB = 7, AC = 9, BC = 8: AD² = (98 + 162 − 64)/4 = 49, so AD = **7**.',
    },
    {
      title: 'Angle bisector theorem',
      text: 'The bisector of ∠A cuts BC in the ratio of the other two sides. So BD = a × c/(b + c).',
      formula: 'BD/DC = AB/AC',
      example: 'AB = 6, AC = 9, BC = 10: BD = 10 × 6/15 = **4**.',
    },
    {
      title: 'Area formulas and the equilateral triangle',
      text: 'Area = 1/2 × base × height. Heron: area = √(s(s − a)(s − b)(s − c)), where s is half the perimeter. Inradius r = (area)/s. Circumradius R = abc/(4 × area). For an equilateral triangle of side a: height = √3/2 × a and area = √3/4 × a². Also R = a/√3 and r = a/(2√3), so R = 2r. All four centres are the same point.',
      formula: 'Equilateral: area = √3/4 × a², R = a/√3, r = a/(2√3)',
      example: 'Sides 13, 14, 15: s = 21, area = √(21 × 8 × 7 × 6) = **84**.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'DE ∥ BC: the small triangle is a scaled copy',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<polygon points="150,20 102,92 206,92" class="d-fill" data-step="1 4"/>
<polygon points="102,92 206,92 290,200 30,200" class="d-fill-pink" data-step="4"/>
<polygon points="150,20 30,200 290,200"/>
<line x1="102" y1="92" x2="206" y2="92" class="d-red d-thick" data-step="2"/>
<text x="143" y="14">A</text><text x="14" y="214">B</text><text x="294" y="214">C</text>
<text x="84" y="92">D</text><text x="212" y="92">E</text>
<text x="104" y="60" class="d-blue" data-step="3">2</text><text x="54" y="152" class="d-blue" data-step="3">3</text>
<text x="190" y="60" class="d-blue" data-step="3">2</text><text x="258" y="152" class="d-blue" data-step="3">3</text>
<text x="136" y="80" class="d-small" data-step="4">4</text><text x="148" y="160" class="d-small" data-step="4">21</text>`,
        caption: 'AD : DB = 2 : 3',
      },
      explain: [
        'DE is parallel to BC, so △ADE and △ABC have the same angles: they are **similar**.',
        'Parallel line = same ratio on both sides: AD/DB = AE/EC (basic proportionality theorem).',
        'AD : DB = 2 : 3, so AD : AB = 2 : 5. The scale factor from the big triangle to the small one is 2/5.',
        'Areas go by the square: 4 : 25. Take away the small part: △ADE : DECB = 4 : (25 − 4) = **4 : 21**.',
      ],
    },
    {
      type: 'diagram',
      title: 'Incentre: why ∠BIC = 90° + A/2',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<polygon points="40,200 151.7,135.5 290,200" class="d-fill" data-step="3"/>
<circle cx="151.7" cy="135.5" r="64.5" class="d-soft d-dash"/>
<polygon points="141.9,23.5 40,200 290,200"/>
<line x1="40" y1="200" x2="151.7" y2="135.5" class="d-blue" data-step="2"/>
<line x1="290" y1="200" x2="151.7" y2="135.5" class="d-blue" data-step="2"/>
<text x="140.1" y="15.6" text-anchor="middle">A</text>
<text x="27.5" y="212.3" text-anchor="middle">B</text>
<text x="302.8" y="211.7" text-anchor="middle">C</text>
<circle cx="151.7" cy="135.5" r="3" class="d-dot"/>
<text x="163.7" y="129.5" text-anchor="middle">I</text>
<path d="M131.9,40.8 A20,20 0 0 0 154.8,38.8" class="d-red" data-step="1"/>
<text x="145" y="65.4" class="d-red d-small" text-anchor="middle" data-step="1">70°</text>
<path d="M74,200 A34,34 0 0 0 69.4,183" class="d-blue" data-step="2"/>
<text x="88.3" y="193.1" class="d-blue d-small" text-anchor="middle" data-step="2">30°</text>
<path d="M64.2,186 A28,28 0 0 0 54,175.8" class="d-blue" data-step="2"/>
<path d="M259.2,185.6 A34,34 0 0 0 256,200" class="d-blue" data-step="2"/>
<text x="241.2" y="195.2" class="d-blue d-small" text-anchor="middle" data-step="2">25°</text>
<path d="M272,178.6 A28,28 0 0 0 264.6,188.2" class="d-blue" data-step="2"/>
<path d="M137.8,143.5 A16,16 0 0 0 166.2,142.3" class="d-red" data-step="3 4"/>
<text x="151.7" y="173.5" class="d-red" text-anchor="middle" data-step="3 4">?</text>`,
        caption: '∠A = 70°, I = incentre',
      },
      explain: [
        '∠A = 70°, so ∠B + ∠C = 180° − 70° = 110°. (Here ∠B = 60° and ∠C = 50°, but only the sum matters.)',
        'BI and CI bisect ∠B and ∠C, so the halves ∠IBC + ∠ICB = 110/2 = 55°.',
        'In △BIC the angles add to 180°: ∠BIC = 180° − 55° = **125°**.',
        'Shortcut for any triangle: ∠BIC = 90° + A/2 = 90° + 35° = 125°.',
      ],
    },
    {
      type: 'diagram',
      title: 'Medians and the centroid',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<polygon points="120,24 75,112 146.7,141.3" class="d-fill-green" data-step="3"/>
<polygon points="75,112 30,200 146.7,141.3" class="d-fill-blue" data-step="3"/>
<polygon points="160,200 290,200 146.7,141.3" class="d-fill-blue" data-step="3"/>
<polygon points="290,200 205,112 146.7,141.3" class="d-fill-green" data-step="3"/>
<polygon points="205,112 120,24 146.7,141.3" class="d-fill-blue" data-step="3"/>
<polygon points="30,200 146.7,141.3 160,200" class="d-fill" data-step="4"/>
<polygon points="120,24 30,200 290,200"/>
<line x1="120" y1="24" x2="160" y2="200" data-step="1"/>
<line x1="30" y1="200" x2="205" y2="112" data-step="1"/>
<line x1="290" y1="200" x2="75" y2="112" data-step="1"/>
<text x="116.9" y="16.3" text-anchor="middle">A</text>
<text x="17.5" y="212.3" text-anchor="middle">B</text>
<text x="303" y="211.3" text-anchor="middle">C</text>
<text x="160" y="224" text-anchor="middle">D</text>
<text x="217.5" y="111.7" text-anchor="middle">E</text>
<text x="62" y="112.7" text-anchor="middle">F</text>
<circle cx="146.7" cy="141.3" r="3" class="d-dot"/>
<text x="139" y="163.6" text-anchor="middle">G</text>
<text x="123.6" y="90.9" class="d-blue" text-anchor="middle" data-step="2">2</text>
<text x="143.6" y="178.9" class="d-blue" text-anchor="middle" data-step="2">1</text>
<text x="112.2" y="186.4" class="d-red" text-anchor="middle" data-step="4">12</text>`,
        caption: 'area △ABC = 72 cm²',
      },
      explain: [
        'D, E and F are the midpoints of the sides. The medians AD, BE and CF all pass through the centroid G.',
        'G cuts every median in the ratio 2 : 1 from the vertex, so AG = 2 × GD.',
        'The three medians split △ABC into 6 small triangles, and all 6 have the same area.',
        'If area △ABC = 72 cm², then △BGD = 72 ÷ 6 = **12 cm²**.',
      ],
    },
    {
      type: 'diagram',
      title: 'Inradius of a right triangle',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<path d="M70,200 L121,200 L121,149 L70,149 Z" class="d-fill" data-step="2"/>
<polygon points="70,47 274,200 70,200"/>
<line x1="70" y1="47" x2="274" y2="200" class="d-red d-thick" data-step="1"/>
<circle cx="121" cy="149" r="51" class="d-soft"/>
<line x1="121" y1="149" x2="70" y2="149" class="d-soft d-dash" data-step="2"/>
<line x1="121" y1="149" x2="121" y2="200" class="d-soft d-dash" data-step="2"/>
<line x1="121" y1="149" x2="151.6" y2="108.2" class="d-soft d-dash"/>
<circle cx="70" cy="149" r="3" class="d-dot"/>
<circle cx="121" cy="200" r="3" class="d-dot"/>
<circle cx="151.6" cy="108.2" r="3" class="d-dot"/>
<text x="58" y="43" text-anchor="middle">A</text>
<text x="288" y="208" text-anchor="middle">B</text>
<text x="58" y="216" text-anchor="middle">C</text>
<text x="62" y="180.5" class="d-blue" text-anchor="end" data-step="2">r</text>
<text x="95.5" y="224" class="d-blue" text-anchor="middle" data-step="2">r</text>
<text x="62" y="102" class="d-green d-small" text-anchor="end" data-step="3">9 − r</text>
<text x="197.5" y="222" class="d-green d-small" text-anchor="middle" data-step="3">12 − r</text>
<text x="119.2" y="70.4" class="d-green d-small" text-anchor="middle" data-step="3">9 − r</text>
<text x="221.2" y="146.9" class="d-green d-small" text-anchor="middle" data-step="3">12 − r</text>`,
        caption: 'legs 9 and 12, hypotenuse AB',
      },
      explain: [
        'Legs 9 and 12, so the hypotenuse is √(81 + 144) = 15 (the 3-4-5 triplet × 3).',
        'At the right angle C, the two radii and the two tangents make a square: both tangents from C are r.',
        'Tangents from one point are equal, so from A both are 9 − r and from B both are 12 − r.',
        'The hypotenuse is made of those two pieces: (9 − r) + (12 − r) = 15, so 2r = 6 and r = **3**.',
      ],
    },
  ],
  comparisons: [
    {
      title: 'Centroid vs incentre vs circumcentre vs orthocentre',
      items: ['Centroid (G)', 'Incentre (I)', 'Circumcentre (O)', 'Orthocentre (H)'],
      rows: [
        { aspect: 'Meeting point of', values: ['Medians', 'Angle bisectors', 'Perpendicular bisectors of sides', 'Altitudes'] },
        { aspect: 'Angle at the centre', values: ['No simple rule', '∠BIC = 90° + A/2', '∠BOC = 2A', '∠BHC = 180° − A'], key: true },
        {
          aspect: 'Special property',
          values: [
            'Divides each median 2 : 1',
            'Equidistant from the sides (r)',
            'Equidistant from the vertices (R)',
            'Vertex of the right angle in a right triangle',
          ],
        },
        {
          aspect: 'Position',
          values: [
            'Always inside',
            'Always inside',
            'Inside if acute, midpoint of hypotenuse if right, outside if obtuse',
            'Inside if acute, at the right-angle vertex if right, outside if obtuse',
          ],
        },
        { aspect: '∠A = 60°', values: ['Not asked', '120°', '120°', '120°'] },
      ],
      reveal: 'Each centre has its own angle formula. At ∠A = 60° the last three all give 120°, which is why that value is a favourite trap.',
      whenToUse: [
        'The question mentions medians or divides a median.',
        'The question mentions angle bisectors or an inscribed circle.',
        'The question mentions a circle through all three vertices.',
        'The question mentions altitudes or perpendiculars from the vertices.',
      ],
    },
    {
      title: 'Congruent vs similar triangles',
      items: ['Congruent (≅)', 'Similar (~)'],
      rows: [
        { aspect: 'Same', values: ['Shape and size', 'Shape only'] },
        { aspect: 'Tests', values: ['SSS, SAS, ASA, AAS, RHS', 'AA, SSS ratio, SAS ratio'] },
        { aspect: 'Does AAA work?', values: ['No', 'Yes'] },
        { aspect: 'Ratio of areas', values: ['1 : 1', 'k² : 1 for sides k : 1'], key: true },
      ],
      reveal: 'Similar triangles scale every length by k but the area by k². Congruent is the case k = 1.',
      whenToUse: ['Proving two parts are equal in length.', 'Any parallel line inside a triangle, or a ratio of sides or areas.'],
    },
  ],
  shortcuts: [
    {
      pattern: 'Angle at the incentre',
      example: 'I is the incentre of △ABC and ∠A = 70°. Find ∠BIC.',
      options: ['110°', '125°', '140°', '145°'],
      answer: '125°',
      ladder: [
        { name: 'Standard', steps: ['∠B + ∠C = 180 − 70 = 110°.', '∠IBC + ∠ICB = 110/2 = 55°.', '∠BIC = 180 − 55 = 125°.'], seconds: 30 },
        {
          name: 'Option elimination',
          steps: ['∠BIC is always more than 90° and less than 180°.', '140 is 2A (circumcentre) and 110 is 180 − A (orthocentre). 125 is left.'],
          seconds: 8,
        },
        { name: 'Shortcut', steps: ['90° + A/2 = 90 + 35 = 125°.'], seconds: 5 },
      ],
    },
    {
      pattern: 'Parallel line cuts a triangle: area ratio',
      example: 'In △ABC, DE ∥ BC with D on AB and E on AC. If AD : DB = 2 : 3, find area △ADE : area of trapezium DECB.',
      options: ['4 : 25', '2 : 3', '4 : 9', '4 : 21'],
      answer: '4 : 21',
      ladder: [
        {
          name: 'Standard',
          steps: ['△ADE ~ △ABC with AD : AB = 2 : 5.', 'Areas 4 : 25.', 'Trapezium = 25 − 4 = 21, so the ratio is 4 : 21.'],
          seconds: 35,
        },
        { name: 'Shortcut', steps: ['Square the small part over the whole: 2² : 5² = 4 : 25.', 'Subtract: 4 : 21.'], seconds: 12 },
        {
          name: 'Option elimination',
          steps: ['4 : 25 compares with the whole triangle, not the trapezium.', '4 : 9 squares the wrong ratio. Only 4 : 21 is left.'],
          seconds: 8,
        },
      ],
    },
    {
      pattern: 'Equilateral triangle radius',
      example: 'Find the circumradius of an equilateral triangle of side 12 cm.',
      options: ['2√3 cm', '4√3 cm', '6√3 cm', '8 cm'],
      answer: '4√3 cm',
      ladder: [
        {
          name: 'Standard',
          steps: ['Height = √3/2 × 12 = 6√3.', 'The circumcentre is the centroid, 2/3 of the way down.', 'R = 2/3 × 6√3 = 4√3 cm.'],
          seconds: 35,
        },
        {
          name: 'Option elimination',
          steps: ['R is less than the height 6√3 ≈ 10.4, which rules out 6√3.', 'R = 2r and r = 2√3, so 4√3.'],
          seconds: 10,
        },
        { name: 'Shortcut', steps: ['R = a/√3 = 12/√3 = 4√3 cm.'], seconds: 8 },
      ],
    },
  ],
  qa: [
    {
      q: 'Angle formulas at the incentre, circumcentre and orthocentre?',
      a: ['∠BIC = 90° + A/2.', '∠BOC = 2A (acute triangle).', '∠BHC = 180° − A.'],
      tag: 'Asked often',
    },
    {
      q: 'In what ratio does the centroid divide a median?',
      a: ['2 : 1, the longer part next to the vertex.', 'So AG = 2/3 of the median AD.'],
      tag: 'Asked often',
    },
    {
      q: 'Where is the circumcentre of a right triangle?',
      a: ['At the midpoint of the hypotenuse.', 'So R = hypotenuse/2.'],
      tag: 'Shortcut',
    },
    {
      q: 'Where is the orthocentre of a right triangle?',
      a: ['At the vertex with the right angle.', 'The two legs are already altitudes.'],
      tag: 'Trap',
    },
    {
      q: 'Two similar triangles have sides in ratio 2 : 3. Ratio of areas?',
      a: ['4 : 9, the square of the side ratio.', 'Perimeters, heights and medians stay 2 : 3.'],
      tag: 'Trap',
    },
    {
      q: 'State the angle bisector theorem.',
      a: ['The bisector of ∠A meets BC at D with BD/DC = AB/AC.', 'BD = a × c/(b + c).'],
    },
    {
      q: 'State Apollonius theorem.',
      a: ['For median AD: AB² + AC² = 2(AD² + BD²).', 'So AD² = (2b² + 2c² − a²)/4.'],
    },
    {
      q: 'Equilateral triangle of side a: inradius and circumradius?',
      a: ['r = a/(2√3), R = a/√3.', 'R = 2r, and the height is 3r.'],
      tag: 'Shortcut',
    },
    {
      q: 'Inradius of a right triangle with legs a, b and hypotenuse c?',
      a: ['r = (a + b − c)/2.', '3-4-5 triangle: r = 1.'],
      tag: 'Shortcut',
    },
    {
      q: 'Is AAA a congruence test?',
      a: ['No. Equal angles give the same shape, not the same size.', 'AAA (really AA) proves similarity only.'],
      tag: 'Trap',
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'The angles of a triangle are in the ratio 2 : 3 : 4. What is the largest angle?',
      options: ['60°', '80°', '90°', '100°'],
      answer: 1,
      explain: '9 parts = 180°, so one part = 20°. Largest = 4 × 20 = 80°.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'An exterior angle of a triangle is 110° and one of the interior opposite angles is 45°. What is the other interior opposite angle?',
      options: ['65°', '70°', '55°', '135°'],
      answer: 0,
      explain: 'Exterior angle = sum of the interior opposite angles: 110 − 45 = 65°.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'What is the area of an equilateral triangle of side 8 cm?',
      options: ['8√3 cm²', '16√3 cm²', '32√3 cm²', '64 cm²'],
      answer: 1,
      explain: '√3/4 × 8² = √3/4 × 64 = 16√3 cm².',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'I is the incentre of △ABC and ∠A = 70°. What is ∠BIC?',
      options: ['110°', '140°', '125°', '145°'],
      answer: 2,
      explain: '∠B + ∠C = 180 − 70 = 110°. BI and CI take half of each, so ∠IBC + ∠ICB = 55°. In △BIC, ∠BIC = 180 − 55 = 125°.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'H is the orthocentre of an acute triangle ABC with ∠A = 65°. What is ∠BHC?',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<polygon points="148,4.3 35,200 285,200"/>
<line x1="35" y1="200" x2="202.8" y2="82.5" class="d-blue"/>
<line x1="285" y1="200" x2="97.5" y2="91.7" class="d-blue"/>
<path d="M196.2,87.1 L200.8,93.7 L207.3,89.1" class="d-blue"/>
<path d="M104.4,95.7 L100.4,102.7 L93.5,98.7" class="d-blue"/>
<text x="147.1" y="-3.7" text-anchor="middle">A</text>
<text x="22.7" y="212.6" text-anchor="middle">B</text>
<text x="297.5" y="212.3" text-anchor="middle">C</text>
<text x="214.2" y="80.5" text-anchor="middle">E</text>
<text x="85.4" y="90.7" text-anchor="middle">F</text>
<text x="148" y="106.9" text-anchor="middle">H</text>
<path d="M138,21.6 A20,20 0 0 0 159.5,20.7"/>
<text x="149.5" y="46.3" class="d-small" text-anchor="middle">65°</text>
<path d="M134.9,130.1 A16,16 0 0 0 161.8,128.9" class="d-red"/>
<text x="148" y="156.9" class="d-red" text-anchor="middle">?</text>`,
        caption: 'BE ⊥ AC, CF ⊥ AB',
      },
      options: ['115°', '130°', '65°', '122.5°'],
      answer: 0,
      explain:
        'Let the altitudes be BE and CF. In quadrilateral AFHE the angles at E and F are 90°, so ∠FHE = 360 − 90 − 90 − 65 = 115°. ∠BHC is vertically opposite ∠FHE, so ∠BHC = 115° (the rule 180° − A).',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'O is the circumcentre of an acute triangle ABC with ∠A = 50°. What is ∠BOC?',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<circle cx="160" cy="118" r="92" class="d-soft"/>
<polygon points="131.6,30.5 89.5,177.1 230.5,177.1"/>
<line x1="160" y1="118" x2="89.5" y2="177.1" class="d-blue"/>
<line x1="160" y1="118" x2="230.5" y2="177.1" class="d-blue"/>
<text x="128.9" y="22.8" text-anchor="middle">A</text>
<text x="78.6" y="191.9" text-anchor="middle">B</text>
<text x="242.4" y="190.4" text-anchor="middle">C</text>
<circle cx="160" cy="118" r="3" class="d-dot"/>
<text x="160" y="108" text-anchor="middle">O</text>
<path d="M126.1,49.7 A20,20 0 0 0 142.8,47.1"/>
<text x="137.2" y="72.1" class="d-small" text-anchor="middle">50°</text>
<path d="M147.7,128.3 A16,16 0 0 0 172.3,128.3" class="d-red"/>
<text x="160" y="156" class="d-red" text-anchor="middle">?</text>`,
        caption: 'O is the circumcentre',
      },
      options: ['50°', '100°', '130°', '80°'],
      answer: 1,
      explain: 'The angle at the centre is twice the angle at the circumference: ∠BOC = 2 × 50 = 100°.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'In △ABC, AB = 6 cm, AC = 9 cm and BC = 10 cm. The bisector of ∠A meets BC at D. What is BD?',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<polygon points="103.8,56.7 35,190 285,190"/>
<line x1="103.8" y1="56.7" x2="135" y2="190" class="d-blue"/>
<text x="98.3" y="49.8" text-anchor="middle">A</text>
<text x="22.1" y="201.4" text-anchor="middle">B</text>
<text x="298.4" y="200.1" text-anchor="middle">C</text>
<text x="135" y="214" text-anchor="middle">D</text>
<path d="M93.7,76.2 A22,22 0 0 0 108.8,78.1" class="d-blue"/>
<path d="M110.1,83.9 A28,28 0 0 0 126.3,73.3" class="d-blue"/>
<text x="58.7" y="123.8" text-anchor="middle">6</text>
<text x="201.5" y="119.7" text-anchor="middle">9</text>
<text x="85" y="214" class="d-red" text-anchor="middle">?</text>`,
        caption: 'BC = 10 cm, AD bisects ∠A',
      },
      options: ['4 cm', '6 cm', '5 cm', '3.6 cm'],
      answer: 0,
      explain: 'BD : DC = 6 : 9 = 2 : 3. BD = 10 × 2/5 = 4 cm.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'In △ABC, AB = 7 cm, AC = 9 cm and BC = 8 cm. What is the length of the median AD?',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<polygon points="110,22.3 60,190 260,190"/>
<line x1="110" y1="22.3" x2="160" y2="190" class="d-blue"/>
<text x="106" y="14.9" text-anchor="middle">A</text>
<text x="48.4" y="203.8" text-anchor="middle">B</text>
<text x="272.6" y="202" text-anchor="middle">C</text>
<text x="160" y="214" text-anchor="middle">D</text>
<text x="73.5" y="108.7" text-anchor="middle">7</text>
<text x="193.9" y="104.1" text-anchor="middle">9</text>
<text x="110" y="208" class="d-small" text-anchor="middle">4</text>
<text x="210" y="208" class="d-small" text-anchor="middle">4</text>
<text x="125.4" y="115" class="d-red" text-anchor="middle">?</text>`,
        caption: 'BC = 8 cm, D is the midpoint of BC',
      },
      options: ['6 cm', '√65 cm', '7 cm', '8 cm'],
      answer: 2,
      explain: 'Apollonius: AB² + AC² = 2(AD² + BD²). BD = 8/2 = 4, so 49 + 81 = 2(AD² + 16). 130 = 2AD² + 32, AD² = 49, so AD = 7 cm.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The legs of a right triangle are 9 cm and 12 cm. What is the radius of its incircle?',
      options: ['4 cm', '6 cm', '7.5 cm', '3 cm'],
      answer: 3,
      explain: 'Hypotenuse = 15 (3-4-5 × 3). r = (9 + 12 − 15)/2 = 3 cm.',
      shortcut: 'Or r = (area)/s = 54/18 = 3.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'What is the area of a triangle with sides 13 cm, 14 cm and 15 cm?',
      options: ['72 cm²', '84 cm²', '90 cm²', '96 cm²'],
      answer: 1,
      explain: 's = 21. Area = √(21 × 8 × 7 × 6) = √7056 = 84 cm².',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The sides of a triangle are 7 cm, 8 cm and 12 cm. The triangle is:',
      options: ['Acute', 'Right', 'Obtuse', 'Equilateral'],
      answer: 2,
      explain: 'Longest side squared is 144. 7² + 8² = 113 < 144, so the angle opposite 12 is obtuse.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'In △ABC, DE ∥ BC with D on AB and E on AC. If AD : DB = 2 : 3, what is area △ADE : area of trapezium DECB?',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<polygon points="150,22 102,94 206,94" class="d-fill"/>
<polygon points="102,94 206,94 290,202 30,202" class="d-fill-pink"/>
<polygon points="150,22 30,202 290,202"/>
<line x1="102" y1="94" x2="206" y2="94" class="d-red d-thick"/>
<text x="149.2" y="14" text-anchor="middle">A</text>
<text x="17.3" y="214" text-anchor="middle">B</text>
<text x="302.8" y="213.7" text-anchor="middle">C</text>
<text x="88" y="100" text-anchor="middle">D</text>
<text x="220" y="100" text-anchor="middle">E</text>
<text x="116" y="57.3" class="d-blue" text-anchor="middle">2</text>
<text x="56" y="147.3" class="d-blue" text-anchor="middle">3</text>
<text x="152.7" y="80" class="d-small" text-anchor="middle">?</text>
<text x="160" y="166" class="d-small" text-anchor="middle">?</text>`,
        caption: 'DE ∥ BC, AD : DB = 2 : 3',
      },
      options: ['4 : 25', '2 : 3', '4 : 9', '4 : 21'],
      answer: 3,
      explain: 'AD : AB = 2 : 5, so the areas of △ADE and △ABC are 4 : 25. The trapezium is 25 − 4 = 21 parts.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'G is the centroid of △ABC, whose area is 72 cm². D is the midpoint of BC. What is the area of △BGD?',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<polygon points="30,200 146.7,141.3 160,200" class="d-fill"/>
<polygon points="120,24 30,200 290,200"/>
<line x1="120" y1="24" x2="160" y2="200"/>
<line x1="30" y1="200" x2="205" y2="112"/>
<line x1="290" y1="200" x2="75" y2="112"/>
<text x="116.9" y="16.3" text-anchor="middle">A</text>
<text x="17.5" y="212.3" text-anchor="middle">B</text>
<text x="303" y="211.3" text-anchor="middle">C</text>
<text x="160" y="224" text-anchor="middle">D</text>
<text x="217.5" y="111.7" text-anchor="middle">E</text>
<text x="62" y="112.7" text-anchor="middle">F</text>
<circle cx="146.7" cy="141.3" r="3" class="d-dot"/>
<text x="139" y="163.6" text-anchor="middle">G</text>
<text x="112.2" y="186.4" class="d-red" text-anchor="middle">?</text>`,
        caption: 'area △ABC = 72 cm², D = midpoint of BC',
      },
      options: ['24 cm²', '18 cm²', '9 cm²', '12 cm²'],
      answer: 3,
      explain: 'The three medians split the triangle into 6 equal parts. △BGD is one of them: 72 ÷ 6 = 12 cm².',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'The inradius of an equilateral triangle is 4 cm. What is its area?',
      options: ['48√3 cm²', '16√3 cm²', '64√3 cm²', '36√3 cm²'],
      answer: 0,
      explain: 'r = a/(2√3), so a = 2√3 × 4 = 8√3 cm and a² = 64 × 3 = 192. Area = √3/4 × a² = √3/4 × 192 = 48√3 cm².',
      shortcut: 'Area of an equilateral triangle = 3√3 × r² = 3√3 × 16 = 48√3.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'In △ABC, DE ∥ BC with D on AB and E on AC. If AD = 4 cm, DB = 6 cm and DE = 6 cm, what is BC?',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<polygon points="150,22 30,202 290,202"/>
<line x1="102" y1="94" x2="206" y2="94" class="d-blue d-thick"/>
<text x="149.2" y="14" text-anchor="middle">A</text>
<text x="17.3" y="214" text-anchor="middle">B</text>
<text x="302.8" y="213.7" text-anchor="middle">C</text>
<text x="88" y="100" text-anchor="middle">D</text>
<text x="220" y="100" text-anchor="middle">E</text>
<text x="113" y="57.3" class="d-small" text-anchor="end">4 cm</text>
<text x="53" y="147.3" class="d-small" text-anchor="end">6 cm</text>
<text x="154" y="86" class="d-small d-blue" text-anchor="middle">6 cm</text>
<text x="160" y="222" class="d-red" text-anchor="middle">?</text>`,
        caption: 'DE ∥ BC',
      },
      options: ['9 cm', '15 cm', '12 cm', '10 cm'],
      answer: 1,
      explain:
        'DE ∥ BC, so △ADE ~ △ABC (they share ∠A, and the parallel lines make the base angles equal). Matching sides are in one ratio: DE/BC = AD/AB. AB = 4 + 6 = 10, so 6/BC = 4/10 and BC = 15 cm.',
      shortcut: 'Compare with the whole side AB, not with DB: 6 × 10/4 = 15. Using DB gives the trap answer 9.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The height of an equilateral triangle is 9 cm. What is the radius of its circumcircle?',
      options: ['4.5 cm', '3√3 cm', '6 cm', '3 cm'],
      answer: 2,
      explain:
        'In an equilateral triangle every height is also a median, and all four centres are the same point. The centroid divides a median 2 : 1 from the vertex, so the circumradius (distance from the centre to a corner) is 2/3 of the height: 2/3 × 9 = 6 cm.',
      shortcut: 'R = 2/3 of the height, r = 1/3 of it. Here R = 6 and r = 3.',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'In an equilateral triangle, the circumradius is twice the inradius.',
      answer: true,
      explain: 'R = a/√3 and r = a/(2√3), so R = 2r.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'Two triangles with all three angles equal are always congruent.',
      answer: false,
      explain: 'Equal angles only make them similar. One can be a scaled-up copy of the other.',
    },
  ],
};

export default topic;
