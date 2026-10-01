import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'coordinate-geometry',
  title: 'Coordinate geometry',
  level: 'beginner',
  masteryMinutes: 45,
  reviseMinutes: 15,
  priority: 'low',
  tags: ['distance formula', 'section formula', 'midpoint', 'centroid', 'slope', 'intercepts', 'area of triangle', 'collinear'],
  summary:
    'Six formulas cover the whole chapter: distance, section, midpoint, centroid, slope and area. The line-with-axes triangle is the most asked question.',
  patterns: [
    {
      name: 'Area of the triangle a line makes with the axes',
      frequency: 'most',
      example: 'Find the area of the triangle formed by 4x + 3y = 24 and the axes.',
    },
    { name: 'Intercepts: where a line cuts the axes', frequency: 'often', example: 'At which point does 2x + 5y = 10 cut the y-axis?' },
    { name: 'Slope, parallel and perpendicular lines', frequency: 'often', example: '2x + ky = 5 is perpendicular to 3x − 6y = 7. Find k.' },
    { name: 'Distance between two points', frequency: 'often', example: 'Find the distance between (3, 4) and (−3, −4).' },
    {
      name: 'Section formula, midpoint and centroid',
      frequency: 'often',
      example: 'In what ratio does the y-axis divide the join of (−4, 5) and (6, −2)?',
    },
    { name: 'Area of a triangle from vertices and collinearity', frequency: 'rare', example: 'For what k are (2, 3), (4, k) and (6, −3) collinear?' },
  ],
  keyPoints: [
    {
      title: 'Distance formula',
      text: 'The distance between (x₁, y₁) and (x₂, y₂) is Pythagoras on the horizontal and vertical gaps. Distance from the origin to (x, y) is √(x² + y²). Use it to test the type of triangle.',
      formula: 'd = √((x₂ − x₁)² + (y₂ − y₁)²)',
      example: '(3, 4) to (−3, −4): √(36 + 64) = **10**.',
    },
    {
      title: 'Section formula and midpoint',
      text: 'This gives the point P on the segment from A(x₁, y₁) to B(x₂, y₂) with AP : PB = m : n. Cross over: m multiplies the far point B, n multiplies A. The midpoint is the case m = n.',
      formula: 'x = (mx₂ + nx₁)/(m + n),  y = (my₂ + ny₁)/(m + n)',
      example: '(2, 3) and (8, 9) in 1 : 2: x = (8 + 4)/3 = 4, y = (9 + 6)/3 = 5, so **(4, 5)**.',
    },
    {
      title: 'Ratio in which an axis divides a segment',
      text: 'The x-axis divides the join in the ratio of the sizes of the y-coordinates, |y₁| : |y₂|. The y-axis uses the x-coordinates, |x₁| : |x₂|. The points must lie on opposite sides of that axis.',
      formula: 'x-axis: |y₁| : |y₂|,  y-axis: |x₁| : |x₂|',
      example: 'Join of (2, −3) and (5, 6) meets the x-axis in the ratio 3 : 6 = **1 : 2**.',
    },
    {
      title: 'Centroid',
      text: 'The centroid is where the medians meet. It divides each median 2 : 1 from the vertex. Its coordinates are the averages of the three vertices.',
      formula: 'G = ((x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3)',
      example: '(1, 2), (4, 6), (7, −2): G = (12/3, 6/3) = **(4, 2)**.',
    },
    {
      title: 'Area of a triangle from its vertices',
      text: 'Take the absolute value. If the area is zero the three points are collinear.',
      formula: 'Area = 1/2 × |x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|',
      example: '(1, 1), (4, 5), (7, 2): 1/2 × |3 + 4 − 28| = **10.5**.',
    },
    {
      title: 'Slope of a line',
      text: 'Slope through two points is rise over run. For ax + by + c = 0 the slope is −a/b. Parallel lines have equal slopes; perpendicular lines have slopes whose product is −1.',
      formula: 'm = (y₂ − y₁)/(x₂ − x₁),  ax + by + c = 0 ⇒ m = −a/b',
      example: '3x − 4y + 7 = 0: m = −3/(−4) = **3/4**.',
    },
    {
      title: 'Intercepts and the triangle with the axes',
      text: 'The line ax + by = c cuts the x-axis at (c/a, 0) and the y-axis at (0, c/b). With the axes it makes a right triangle whose legs are those intercepts. Intercept form: x/p + y/q = 1.',
      formula: 'Area with axes = c²/(2|ab|)',
      example: '3x + 4y = 12: intercepts 4 and 3, area = 144/24 = **6**.',
    },
    {
      title: 'Quadrants and special lines',
      text: 'Signs of (x, y): I (+, +), II (−, +), III (−, −), IV (+, −). x = k is a vertical line, y = k is horizontal. y = x and y = −x are at 45° to the axes. A point on the x-axis has y = 0.',
      example: '(−3, 4) is in quadrant **II**. Lines y = x, y = −x and y = 6 make a triangle of area 36.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'Distance formula is Pythagoras',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<polygon points="100,165 260,165 260,45" class="d-fill" data-step="1"/>
<line x1="32" y1="205" x2="292" y2="205" class="d-soft"/>
<line x1="40" y1="213" x2="40" y2="13" class="d-soft"/>
<path d="M285,201 L292,205 L285,209" class="d-soft"/>
<path d="M36,20 L40,13 L44,20" class="d-soft"/>
<text x="294" y="223" class="d-small d-soft" text-anchor="middle">x</text>
<text x="28" y="21" class="d-small d-soft" text-anchor="middle">y</text>
<line x1="60" y1="202" x2="60" y2="208" class="d-soft d-thin"/>
<line x1="80" y1="202" x2="80" y2="208" class="d-soft d-thin"/>
<line x1="100" y1="202" x2="100" y2="208" class="d-soft d-thin"/>
<line x1="120" y1="202" x2="120" y2="208" class="d-soft d-thin"/>
<line x1="140" y1="202" x2="140" y2="208" class="d-soft d-thin"/>
<line x1="160" y1="202" x2="160" y2="208" class="d-soft d-thin"/>
<line x1="180" y1="202" x2="180" y2="208" class="d-soft d-thin"/>
<line x1="200" y1="202" x2="200" y2="208" class="d-soft d-thin"/>
<line x1="220" y1="202" x2="220" y2="208" class="d-soft d-thin"/>
<line x1="240" y1="202" x2="240" y2="208" class="d-soft d-thin"/>
<line x1="260" y1="202" x2="260" y2="208" class="d-soft d-thin"/>
<line x1="280" y1="202" x2="280" y2="208" class="d-soft d-thin"/>
<line x1="37" y1="185" x2="43" y2="185" class="d-soft d-thin"/>
<line x1="37" y1="165" x2="43" y2="165" class="d-soft d-thin"/>
<line x1="37" y1="145" x2="43" y2="145" class="d-soft d-thin"/>
<line x1="37" y1="125" x2="43" y2="125" class="d-soft d-thin"/>
<line x1="37" y1="105" x2="43" y2="105" class="d-soft d-thin"/>
<line x1="37" y1="85" x2="43" y2="85" class="d-soft d-thin"/>
<line x1="37" y1="65" x2="43" y2="65" class="d-soft d-thin"/>
<line x1="37" y1="45" x2="43" y2="45" class="d-soft d-thin"/>
<line x1="37" y1="25" x2="43" y2="25" class="d-soft d-thin"/>
<text x="31" y="222" class="d-small d-soft" text-anchor="middle">O</text>
<line x1="100" y1="165" x2="260" y2="165" class="d-blue d-dash" data-step="1 2"/>
<line x1="260" y1="165" x2="260" y2="45" class="d-green d-dash" data-step="1 2"/>
<path d="M252,165 L252,157 L260,157" data-step="1"/>
<line x1="100" y1="165" x2="260" y2="45" class="d-red d-thick" data-step="3"/>
<circle cx="100" cy="165" r="3" class="d-dot"/>
<circle cx="260" cy="45" r="3" class="d-dot"/>
<text x="96" y="183" class="d-small" text-anchor="end">A(3, 2)</text>
<text x="254" y="37" class="d-small" text-anchor="end">B(11, 8)</text>
<text x="180" y="185" class="d-blue" text-anchor="middle" data-step="2">8</text>
<text x="272" y="111" class="d-green" text-anchor="middle" data-step="2">6</text>
<text x="172.8" y="101.4" class="d-red" text-anchor="middle" data-step="3">10</text>`,
      },
      explain: [
        'Plot A(3, 2) and B(11, 8). Walk across from A, then up to B: the two walks and AB make a right triangle.',
        'Across: 11 − 3 = 8. Up: 8 − 2 = 6.',
        'AB is the hypotenuse: √(8² + 6²) = √100 = **10**. That is the distance formula.',
      ],
    },
    {
      type: 'diagram',
      title: 'Section formula: walk part of the way',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<line x1="64.5" y1="212.5" x2="259.4" y2="212.5" class="d-soft"/>
<line x1="72.2" y1="220.3" x2="72.2" y2="5.8" class="d-soft"/>
<path d="M252.4,208.5 L259.4,212.5 L252.4,216.5" class="d-soft"/>
<path d="M68.2,12.8 L72.2,5.8 L76.2,12.8" class="d-soft"/>
<text x="261.4" y="230.5" class="d-small d-soft" text-anchor="middle">x</text>
<text x="60.2" y="13.8" class="d-small d-soft" text-anchor="middle">y</text>
<line x1="91.8" y1="209.5" x2="91.8" y2="215.5" class="d-soft d-thin"/>
<line x1="111.2" y1="209.5" x2="111.2" y2="215.5" class="d-soft d-thin"/>
<line x1="130.8" y1="209.5" x2="130.8" y2="215.5" class="d-soft d-thin"/>
<line x1="150.2" y1="209.5" x2="150.2" y2="215.5" class="d-soft d-thin"/>
<line x1="169.8" y1="209.5" x2="169.8" y2="215.5" class="d-soft d-thin"/>
<line x1="189.2" y1="209.5" x2="189.2" y2="215.5" class="d-soft d-thin"/>
<line x1="208.8" y1="209.5" x2="208.8" y2="215.5" class="d-soft d-thin"/>
<line x1="228.2" y1="209.5" x2="228.2" y2="215.5" class="d-soft d-thin"/>
<line x1="247.8" y1="209.5" x2="247.8" y2="215.5" class="d-soft d-thin"/>
<line x1="69.2" y1="193" x2="75.2" y2="193" class="d-soft d-thin"/>
<line x1="69.2" y1="173.5" x2="75.2" y2="173.5" class="d-soft d-thin"/>
<line x1="69.2" y1="154" x2="75.2" y2="154" class="d-soft d-thin"/>
<line x1="69.2" y1="134.5" x2="75.2" y2="134.5" class="d-soft d-thin"/>
<line x1="69.2" y1="115" x2="75.2" y2="115" class="d-soft d-thin"/>
<line x1="69.2" y1="95.5" x2="75.2" y2="95.5" class="d-soft d-thin"/>
<line x1="69.2" y1="76" x2="75.2" y2="76" class="d-soft d-thin"/>
<line x1="69.2" y1="56.5" x2="75.2" y2="56.5" class="d-soft d-thin"/>
<line x1="69.2" y1="37" x2="75.2" y2="37" class="d-soft d-thin"/>
<line x1="69.2" y1="17.5" x2="75.2" y2="17.5" class="d-soft d-thin"/>
<text x="150.2" y="230.5" class="d-small d-soft" text-anchor="middle">4</text>
<text x="62.2" y="119" class="d-small d-soft" text-anchor="middle">5</text>
<text x="63.2" y="229.5" class="d-small d-soft" text-anchor="middle">O</text>
<line x1="111.2" y1="154" x2="228.2" y2="154" class="d-blue d-dash" data-step="1"/>
<line x1="228.2" y1="154" x2="228.2" y2="37" class="d-blue d-dash" data-step="1"/>
<text x="195.1" y="174" class="d-blue" text-anchor="middle" data-step="1">6</text>
<text x="240.2" y="101.5" class="d-blue" text-anchor="middle" data-step="1">6</text>
<line x1="111.2" y1="154" x2="150.2" y2="115" class="d-red d-thick" data-step="2"/>
<line x1="150.2" y1="115" x2="228.2" y2="37" class="d-green d-thick" data-step="2"/>
<line x1="150.2" y1="115" x2="150.2" y2="154" class="d-dash" data-step="3"/>
<line x1="150.2" y1="115" x2="111.2" y2="115" class="d-dash" data-step="3"/>
<circle cx="111.2" cy="154" r="3" class="d-dot"/>
<circle cx="228.2" cy="37" r="3" class="d-dot"/>
<circle cx="150.2" cy="115" r="3" class="d-dot d-red" data-step="3"/>
<circle cx="189.2" cy="76" r="3" class="d-dot" data-step="2"/>
<text x="115.2" y="172" class="d-small" text-anchor="start">A(2, 3)</text>
<text x="222.2" y="31" class="d-small" text-anchor="end">B(8, 9)</text>
<text x="140.2" y="107" class="d-red" text-anchor="end" data-step="3">P</text>
<text x="123.7" y="131.4" class="d-red d-small" text-anchor="middle" data-step="2">1</text>
<text x="182.2" y="72.9" class="d-green d-small" text-anchor="middle" data-step="2">2</text>`,
        caption: 'P divides AB in the ratio 1 : 2',
      },
      explain: [
        'From A(2, 3) to B(8, 9), x goes up by 6 and y goes up by 6.',
        'Ratio 1 : 2 cuts AB into 1 + 2 = 3 equal steps, and P is 1 step from A: 1/3 of the way.',
        'Add 1/3 of each rise to A: x = 2 + 2 = 4, y = 3 + 2 = 5. So P = **(4, 5)**, the same as the section formula.',
      ],
    },
    {
      type: 'diagram',
      title: 'Which ratio does the x-axis cut?',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<polygon points="133,196 133,142 151,142" class="d-fill-blue" data-step="2"/>
<polygon points="187,34 187,142 151,142" class="d-fill-green" data-step="2"/>
<line x1="89.8" y1="142" x2="233.8" y2="142" class="d-soft"/>
<line x1="97" y1="221.2" x2="97" y2="5.2" class="d-soft"/>
<path d="M226.8,138 L233.8,142 L226.8,146" class="d-soft"/>
<path d="M93,12.2 L97,5.2 L101,12.2" class="d-soft"/>
<text x="235.8" y="160" class="d-small d-soft" text-anchor="middle">x</text>
<text x="85" y="13.2" class="d-small d-soft" text-anchor="middle">y</text>
<line x1="115" y1="139" x2="115" y2="145" class="d-soft d-thin"/>
<line x1="133" y1="139" x2="133" y2="145" class="d-soft d-thin"/>
<line x1="151" y1="139" x2="151" y2="145" class="d-soft d-thin"/>
<line x1="169" y1="139" x2="169" y2="145" class="d-soft d-thin"/>
<line x1="187" y1="139" x2="187" y2="145" class="d-soft d-thin"/>
<line x1="205" y1="139" x2="205" y2="145" class="d-soft d-thin"/>
<line x1="223" y1="139" x2="223" y2="145" class="d-soft d-thin"/>
<line x1="94" y1="214" x2="100" y2="214" class="d-soft d-thin"/>
<line x1="94" y1="196" x2="100" y2="196" class="d-soft d-thin"/>
<line x1="94" y1="178" x2="100" y2="178" class="d-soft d-thin"/>
<line x1="94" y1="160" x2="100" y2="160" class="d-soft d-thin"/>
<line x1="94" y1="124" x2="100" y2="124" class="d-soft d-thin"/>
<line x1="94" y1="106" x2="100" y2="106" class="d-soft d-thin"/>
<line x1="94" y1="88" x2="100" y2="88" class="d-soft d-thin"/>
<line x1="94" y1="70" x2="100" y2="70" class="d-soft d-thin"/>
<line x1="94" y1="52" x2="100" y2="52" class="d-soft d-thin"/>
<line x1="94" y1="34" x2="100" y2="34" class="d-soft d-thin"/>
<line x1="94" y1="16" x2="100" y2="16" class="d-soft d-thin"/>
<text x="88" y="159" class="d-small d-soft" text-anchor="middle">O</text>
<line x1="133" y1="196" x2="187" y2="34" class="d-thick" data-step="1"/>
<line x1="133" y1="196" x2="133" y2="142" class="d-blue d-dash" data-step="2"/>
<line x1="187" y1="34" x2="187" y2="142" class="d-green d-dash" data-step="2"/>
<circle cx="133" cy="196" r="3" class="d-dot"/>
<circle cx="187" cy="34" r="3" class="d-dot"/>
<circle cx="151" cy="142" r="3" class="d-dot d-red" data-step="1"/>
<text x="139" y="206" class="d-small" text-anchor="start">A(2, −3)</text>
<text x="181" y="30" class="d-small" text-anchor="end">B(5, 6)</text>
<text x="161" y="162" class="d-red" text-anchor="middle" data-step="1">P</text>
<text x="125" y="175" class="d-blue" text-anchor="end" data-step="2">3</text>
<text x="199" y="94" class="d-green" text-anchor="middle" data-step="2">6</text>`,
      },
      explain: [
        'The segment from A(2, −3) to B(5, 6) crosses the x-axis at P.',
        'A is 3 below the axis and B is 6 above it. These are just the sizes of the y-coordinates.',
        'The blue and green triangles are similar, so AP : PB = 3 : 6 = **1 : 2**. (For the y-axis, use the x-coordinates.)',
      ],
    },
  ],
  comparisons: [
    {
      title: 'Parallel vs perpendicular lines',
      items: ['Parallel lines', 'Perpendicular lines'],
      rows: [
        { aspect: 'Slopes', values: ['m₁ = m₂', 'm₁ × m₂ = −1'], key: true },
        { aspect: 'Line parallel or perpendicular to ax + by + c = 0', values: ['ax + by + k = 0', 'bx − ay + k = 0'] },
        { aspect: 'Example with 2x + 3y = 6', values: ['2x + 3y = k', '3x − 2y = k'] },
        { aspect: 'a₁/a₂ vs b₁/b₂', values: ['a₁/a₂ = b₁/b₂ (no solution if c differs)', 'a₁a₂ + b₁b₂ = 0'] },
      ],
      reveal: 'Parallel keeps the x and y coefficients; perpendicular swaps them and flips one sign.',
      whenToUse: ['The lines never meet, or the pair of equations has no solution.', 'The lines meet at a right angle.'],
    },
  ],
  shortcuts: [
    {
      pattern: 'Triangle made by a line with the axes',
      example: 'Find the area of the triangle formed by the line 3x + 4y = 12 and the coordinate axes.',
      options: ['6', '12', '7', '24'],
      answer: '6',
      ladder: [
        {
          name: 'Standard',
          steps: ['Put y = 0: x = 4. Put x = 0: y = 3.', 'Right triangle with legs 4 and 3.', 'Area = 1/2 × 4 × 3 = 6.'],
          seconds: 25,
        },
        { name: 'Shortcut', steps: ['c²/(2ab) = 144/(2 × 3 × 4) = 144/24 = 6.'], seconds: 8 },
        { name: 'Option elimination', steps: ['Legs are c/a and c/b, whole numbers here: 4 and 3.', 'Half their product must be 6.'], seconds: 8 },
      ],
    },
    {
      pattern: 'Ratio in which an axis cuts a segment',
      example: 'In what ratio does the x-axis divide the line segment joining (2, −3) and (5, 6)?',
      options: ['1 : 2', '2 : 1', '3 : 5', '2 : 3'],
      answer: '1 : 2',
      ladder: [
        {
          name: 'Standard',
          steps: ['Let the ratio be m : n. On the x-axis y = 0.', '(6m − 3n)/(m + n) = 0, so 6m = 3n.', 'm : n = 1 : 2.'],
          seconds: 30,
        },
        { name: 'Shortcut', steps: ['x-axis: ratio = |y₁| : |y₂| = 3 : 6 = 1 : 2.'], seconds: 5 },
      ],
    },
    {
      pattern: 'Missing coordinate from a distance',
      example: 'The distance between (k, 3) and (5, 7) is 5 units. Which of these is a value of k?',
      options: ['8', '6', '4', '9'],
      answer: '8',
      ladder: [
        { name: 'Standard', steps: ['(k − 5)² + (3 − 7)² = 25.', '(k − 5)² = 9, so k − 5 = ±3.', 'k = 8 or 2.'], seconds: 35 },
        {
          name: 'Triplet',
          steps: ['Vertical gap is 4 and distance is 5: the 3-4-5 triplet.', 'Horizontal gap must be 3, so k = 5 ± 3 = 8 or 2.'],
          seconds: 10,
        },
        { name: 'Put values', steps: ['k = 8: gaps 3 and 4 give 5. It fits.'], seconds: 10 },
      ],
    },
  ],
  qa: [
    {
      q: 'Where does the line ax + by = c cut the axes?',
      a: ['x-axis at (c/a, 0): put y = 0.', 'y-axis at (0, c/b): put x = 0.'],
      tag: 'Asked often',
    },
    {
      q: 'Quick formula for the area a line makes with the axes?',
      a: ['For ax + by = c: area = c²/(2|ab|).', '4x + 3y = 24: 576/24 = 24.'],
      tag: 'Shortcut',
    },
    {
      q: 'Slope of the line ax + by + c = 0?',
      a: ['−a/b.', 'Write it as y = −(a/b)x − c/b and read the x coefficient.'],
      tag: 'Asked often',
    },
    {
      q: 'In the section formula, which ratio part goes with which point?',
      a: ['Cross over: m multiplies the second point, n the first.', 'x = (mx₂ + nx₁)/(m + n).'],
      tag: 'Trap',
    },
    {
      q: 'How do you test if three points are collinear?',
      a: ['Area of the triangle they form is 0.', 'Or: slope AB = slope BC.'],
    },
    {
      q: 'Centroid of a triangle with given vertices?',
      a: ['Average the x values and the y values.', 'It divides each median 2 : 1 from the vertex.'],
    },
    {
      q: 'Condition for two lines to be perpendicular?',
      a: ['Product of slopes = −1.', 'For a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0: a₁a₂ + b₁b₂ = 0.'],
      tag: 'Asked often',
    },
    {
      q: 'When do two linear equations have no solution?',
      a: ['When the lines are parallel and distinct.', 'a₁/a₂ = b₁/b₂ ≠ c₁/c₂.'],
      tag: 'Trap',
    },
    {
      q: 'Signs of coordinates in each quadrant?',
      a: ['I (+, +), II (−, +), III (−, −), IV (+, −).', 'Points on an axis lie in no quadrant.'],
    },
    {
      q: 'Distance of the point (x, y) from each axis?',
      a: ['From the x-axis: |y|. From the y-axis: |x|.', 'From the origin: √(x² + y²).'],
      tag: 'Trap',
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'What is the distance between the points (3, 4) and (−3, −4)?',
      options: ['10', '5', '14', '8'],
      answer: 0,
      explain: '√(6² + 8²) = √100 = 10.',
      shortcut: 'Each point is 5 from the origin and they are opposite, so 2 × 5 = 10.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'What is the midpoint of the segment joining (−2, 6) and (8, −4)?',
      options: ['(5, 1)', '(3, 1)', '(3, 5)', '(6, 2)'],
      answer: 1,
      explain: '((−2 + 8)/2, (6 − 4)/2) = (3, 1).',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'What is the slope of the line 3x − 4y + 7 = 0?',
      options: ['−3/4', '4/3', '3/4', '−4/3'],
      answer: 2,
      explain: 'Slope = −a/b = −3/(−4) = 3/4.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'At which point does the line 2x + 5y = 10 cut the y-axis?',
      options: ['(0, 5)', '(5, 0)', '(2, 0)', '(0, 2)'],
      answer: 3,
      explain: 'Put x = 0: 5y = 10, so y = 2. The point is (0, 2).',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'What is the area of the triangle formed by the line 4x + 3y = 24 and the coordinate axes?',
      options: ['48', '24', '12', '36'],
      answer: 1,
      explain: 'Intercepts are 6 (x-axis) and 8 (y-axis). Area = 1/2 × 6 × 8 = 24.',
      shortcut: 'c²/(2ab) = 576/24 = 24.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Find the point that divides the segment joining (2, 3) and (8, 9) internally in the ratio 1 : 2.',
      options: ['(4, 5)', '(6, 7)', '(5, 6)', '(4, 6)'],
      answer: 0,
      explain: 'x = (1 × 8 + 2 × 2)/3 = 4, y = (1 × 9 + 2 × 3)/3 = 5.',
      shortcut: 'The point is 1/3 of the way from (2, 3): add 1/3 of (6, 6), giving (4, 5).',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'What is the centroid of the triangle with vertices (1, 2), (4, 6) and (7, −2)?',
      options: ['(4, 3)', '(4, 2)', '(3, 2)', '(6, 3)'],
      answer: 1,
      explain: '((1 + 4 + 7)/3, (2 + 6 − 2)/3) = (4, 2).',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'What is the area of the triangle with vertices (1, 1), (4, 5) and (7, 2)?',
      options: ['21', '9.5', '12', '10.5'],
      answer: 3,
      explain: '1/2 × |1(5 − 2) + 4(2 − 1) + 7(1 − 5)| = 1/2 × |3 + 4 − 28| = 21/2 = 10.5.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'For what value of k are the points (2, 3), (4, k) and (6, −3) collinear?',
      options: ['1', '−1', '0', '3'],
      answer: 2,
      explain: 'x = 4 is midway between 2 and 6, so (4, k) must be the midpoint: k = (3 − 3)/2 = 0.',
      shortcut: 'Equal x-steps mean equal y-steps on a straight line.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'In what ratio does the y-axis divide the segment joining (−4, 5) and (6, −2)?',
      options: ['3 : 2', '2 : 3', '4 : 5', '5 : 4'],
      answer: 1,
      explain: 'On the y-axis x = 0: (6m − 4n)/(m + n) = 0, so m : n = 4 : 6 = 2 : 3.',
      shortcut: 'y-axis ratio = |x₁| : |x₂| = 4 : 6 = 2 : 3.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The lines 2x + ky = 5 and 3x − 6y = 7 are perpendicular. What is k?',
      options: ['4', '−1', '−4', '1'],
      answer: 3,
      explain: 'Slopes are −2/k and 3/6 = 1/2. Product = −1/k = −1, so k = 1.',
      shortcut: 'a₁a₂ + b₁b₂ = 0: 6 − 6k = 0, so k = 1.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'A(−1, 3), B(1, −1) and C(5, 1) are the vertices of a triangle. What is the length of the median through A?',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<line x1="28" y1="145" x2="298" y2="145" class="d-soft"/>
<line x1="100" y1="217" x2="100" y2="7" class="d-soft"/>
<path d="M291,141 L298,145 L291,149" class="d-soft"/>
<path d="M96,14 L100,7 L104,14" class="d-soft"/>
<text x="300" y="163" class="d-small d-soft" text-anchor="middle">x</text>
<text x="88" y="15" class="d-small d-soft" text-anchor="middle">y</text>
<line x1="40" y1="142" x2="40" y2="148" class="d-soft d-thin"/>
<line x1="70" y1="142" x2="70" y2="148" class="d-soft d-thin"/>
<line x1="130" y1="142" x2="130" y2="148" class="d-soft d-thin"/>
<line x1="160" y1="142" x2="160" y2="148" class="d-soft d-thin"/>
<line x1="190" y1="142" x2="190" y2="148" class="d-soft d-thin"/>
<line x1="220" y1="142" x2="220" y2="148" class="d-soft d-thin"/>
<line x1="250" y1="142" x2="250" y2="148" class="d-soft d-thin"/>
<line x1="280" y1="142" x2="280" y2="148" class="d-soft d-thin"/>
<line x1="97" y1="205" x2="103" y2="205" class="d-soft d-thin"/>
<line x1="97" y1="175" x2="103" y2="175" class="d-soft d-thin"/>
<line x1="97" y1="115" x2="103" y2="115" class="d-soft d-thin"/>
<line x1="97" y1="85" x2="103" y2="85" class="d-soft d-thin"/>
<line x1="97" y1="55" x2="103" y2="55" class="d-soft d-thin"/>
<line x1="97" y1="25" x2="103" y2="25" class="d-soft d-thin"/>
<text x="91" y="162" class="d-small d-soft" text-anchor="middle">O</text>
<polygon points="70,55 130,175 250,115"/>
<line x1="70" y1="55" x2="190" y2="145" class="d-blue d-dash"/>
<circle cx="70" cy="55" r="3" class="d-dot"/>
<circle cx="130" cy="175" r="3" class="d-dot"/>
<circle cx="250" cy="115" r="3" class="d-dot"/>
<circle cx="190" cy="145" r="3" class="d-dot"/>
<text x="194" y="165" class="d-small" text-anchor="middle">D</text>
<text x="64" y="49" class="d-small" text-anchor="end">A(−1, 3)</text>
<text x="138" y="191" class="d-small" text-anchor="start">B(1, −1)</text>
<text x="256" y="107" class="d-small" text-anchor="start">C(5, 1)</text>
<text x="124" y="114" class="d-red" text-anchor="middle">?</text>`,
        caption: 'AD is the median to BC',
      },
      options: ['√26', '4', '5', '√29'],
      answer: 2,
      explain: 'Midpoint of BC = (3, 0). Distance from A = √(4² + 3²) = 5.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'The points (1, 1), (−1, −1) and (−√3, √3) form which type of triangle?',
      options: ['Isosceles right-angled', 'Equilateral', 'Scalene', 'Right-angled scalene'],
      answer: 1,
      explain:
        'AB² = 2² + 2² = 8. BC² = (−√3 + 1)² + (√3 + 1)² = (4 − 2√3) + (4 + 2√3) = 8. CA² = (1 + √3)² + (1 − √3)² = (4 + 2√3) + (4 − 2√3) = 8. All three sides are √8, so the triangle is equilateral.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'What is the area of the triangle formed by the lines y = x, y = −x and y = 6?',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<polygon points="160,166 262,64 58,64" class="d-fill"/>
<line x1="17.2" y1="166" x2="306.2" y2="166" class="d-soft"/>
<line x1="160" y1="189.8" x2="160" y2="36.8" class="d-soft"/>
<path d="M299.2,162 L306.2,166 L299.2,170" class="d-soft"/>
<path d="M156,43.8 L160,36.8 L164,43.8" class="d-soft"/>
<text x="308.2" y="184" class="d-small d-soft" text-anchor="middle">x</text>
<text x="148" y="44.8" class="d-small d-soft" text-anchor="middle">y</text>
<line x1="146.4" y1="179.6" x2="275.6" y2="50.4" class="d-blue"/>
<line x1="173.6" y1="179.6" x2="44.4" y2="50.4" class="d-blue"/>
<line x1="24" y1="64" x2="296" y2="64" class="d-red"/>
<text x="272.2" y="49.3" class="d-small d-blue" text-anchor="start">y = x</text>
<text x="47.8" y="49.3" class="d-small d-blue" text-anchor="end">y = −x</text>
<text x="26" y="80" class="d-small d-red" text-anchor="start">y = 6</text>
<text x="160" y="108.8" class="d-red" text-anchor="middle">?</text>`,
      },
      options: ['18', '72', '36', '24'],
      answer: 2,
      explain: 'Vertices (0, 0), (6, 6) and (−6, 6). Base 12 along y = 6, height 6. Area = 1/2 × 12 × 6 = 36.',
      shortcut: 'For y = x, y = −x and y = k the area is k².',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'The point (−3, 4) lies in the second quadrant.',
      answer: true,
      explain: 'x negative, y positive: quadrant II.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'The lines 3x + 2y = 5 and 6x + 4y = 9 meet at exactly one point.',
      answer: false,
      explain: '3/6 = 2/4 but 5/9 is different, so the lines are parallel and never meet.',
    },
  ],
};

export default topic;
