import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'graphs-lines',
  title: 'Graphs of linear equations',
  level: 'beginner',
  masteryMinutes: 40,
  reviseMinutes: 15,
  priority: 'low',
  tags: ['graph', 'intercepts', 'area with axes', 'intersection', 'slope', 'parallel lines', 'perpendicular lines'],
  summary:
    'Every linear equation is a straight line. Find where it cuts the axes and most questions become the area of a right triangle: half of base times height.',
  patterns: [
    {
      name: 'Area enclosed by a line and the axes',
      frequency: 'most',
      example: 'Area of the triangle formed by 3x + 4y = 12 and the coordinate axes?',
    },
    { name: 'Area between two lines and one axis', frequency: 'most', example: 'Area enclosed by x + y = 4, x − y = 2 and the y-axis?' },
    { name: 'Where a line cuts an axis, or where two lines meet', frequency: 'often', example: 'At which point does 2x − 3y = 6 cut the y-axis?' },
    { name: 'Slope, parallel and perpendicular lines', frequency: 'often', example: 'For what k are 2x + 3y = 6 and 4x + ky = 5 parallel?' },
    { name: 'Lines parallel to the axes (x = a, y = b)', frequency: 'rare', example: 'Area enclosed by x = 3, y = 4 and the two axes?' },
    { name: 'Triangle formed by three lines', frequency: 'rare', example: 'Area of the triangle formed by x = 2, y = 1 and x + y = 7?' },
  ],
  keyPoints: [
    {
      title: 'Intercepts: the two fastest points',
      text: 'Put y = 0 to get the x-intercept and x = 0 to get the y-intercept. Two points are enough to draw the line.',
      formula: 'ax + by = c cuts the axes at (c/a, 0) and (0, c/b)',
      example: '3x + 4y = 12 cuts the axes at (**4**, 0) and (0, **3**).',
    },
    {
      title: 'Intercept form',
      text: 'Divide by c to read the intercepts off directly. A line with intercepts p and q is x/p + y/q = 1.',
      formula: 'x/p + y/q = 1',
      example: '5x + 2y = 20 becomes x/4 + y/10 = 1: intercepts **4** and **10**.',
    },
    {
      title: 'Area with the axes',
      text: 'The line and the two axes make a right triangle with legs equal to the intercepts.',
      formula: 'Area = 1/2 × |c/a| × |c/b| = c²/(2|ab|)',
      example: '3x + 4y = 12: 144/(2 × 12) = **6** square units.',
    },
    {
      title: 'Lines parallel to the axes',
      text: 'x = k is a vertical line (parallel to the y-axis). y = k is a horizontal line (parallel to the x-axis). The x-axis itself is y = 0 and the y-axis is x = 0.',
      example: 'x = 3, y = 4 and the axes enclose a rectangle of area 3 × 4 = **12**.',
    },
    {
      title: 'Slope',
      text: 'In y = mx + c, m is the slope and c the y-intercept. For ax + by + c = 0 the slope is −a/b. Parallel lines have equal slopes. Perpendicular lines have slopes that multiply to −1.',
      formula: 'm = −a/b; parallel m₁ = m₂; perpendicular m₁ × m₂ = −1',
      example: '3x − 4y + 7 = 0 has slope −3/(−4) = **3/4**.',
    },
    {
      title: 'Two lines and one axis',
      text: 'Solve the pair to get the meeting point. The base lies on the axis, between the two intercepts on that axis. The height is the distance of the meeting point from that axis.',
      formula: 'Area = 1/2 × (gap between intercepts on the axis) × (other coordinate of the meeting point)',
      example: 'x + y = 4, x − y = 2 meet at (3, 1). With the y-axis: base 4 − (−2) = 6, height 3, area **9**.',
    },
    {
      title: 'Triangle from three lines',
      text: 'Find the three corners by solving the lines in pairs, then use the coordinate area formula. If two of the lines are x = a and y = b, the triangle is right-angled.',
      formula: 'Area = 1/2 × |x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|',
      example: 'x = 2, y = 1, x + y = 7: corners (2, 1), (2, 5), (6, 1). Area 1/2 × 4 × 4 = **8**.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'Intercepts and the triangle with the axes',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<polygon points="85,175 205,175 85,85" class="d-fill" data-step="3"/>
<line x1="43" y1="175" x2="283" y2="175" class="d-soft"/>
<line x1="85" y1="217" x2="85" y2="7" class="d-soft"/>
<path d="M276,171 L283,175 L276,179" class="d-soft"/>
<path d="M81,14 L85,7 L89,14" class="d-soft"/>
<text x="285" y="193" class="d-small d-soft" text-anchor="middle">x</text>
<text x="73" y="15" class="d-small d-soft" text-anchor="middle">y</text>
<line x1="55" y1="172" x2="55" y2="178" class="d-soft d-thin"/>
<line x1="115" y1="172" x2="115" y2="178" class="d-soft d-thin"/>
<line x1="145" y1="172" x2="145" y2="178" class="d-soft d-thin"/>
<line x1="175" y1="172" x2="175" y2="178" class="d-soft d-thin"/>
<line x1="205" y1="172" x2="205" y2="178" class="d-soft d-thin"/>
<line x1="235" y1="172" x2="235" y2="178" class="d-soft d-thin"/>
<line x1="265" y1="172" x2="265" y2="178" class="d-soft d-thin"/>
<line x1="82" y1="205" x2="88" y2="205" class="d-soft d-thin"/>
<line x1="82" y1="145" x2="88" y2="145" class="d-soft d-thin"/>
<line x1="82" y1="115" x2="88" y2="115" class="d-soft d-thin"/>
<line x1="82" y1="85" x2="88" y2="85" class="d-soft d-thin"/>
<line x1="82" y1="55" x2="88" y2="55" class="d-soft d-thin"/>
<line x1="82" y1="25" x2="88" y2="25" class="d-soft d-thin"/>
<text x="76" y="192" class="d-small d-soft" text-anchor="middle">O</text>
<line x1="61" y1="67" x2="237" y2="199" class="d-blue d-thick"/>
<circle cx="205" cy="175" r="3" class="d-dot d-red" data-step="1"/>
<circle cx="85" cy="85" r="3" class="d-dot d-red" data-step="2"/>
<text x="211" y="167" class="d-red d-small" text-anchor="start" data-step="1">(4, 0)</text>
<text x="95" y="79" class="d-red d-small" text-anchor="start" data-step="2">(0, 3)</text>
<text x="181" y="101" class="d-small d-blue" text-anchor="start">3x + 4y = 12</text>
<text x="145" y="193" class="d-green d-small" text-anchor="middle" data-step="3">4</text>
<text x="95" y="134" class="d-green d-small" text-anchor="start" data-step="3">3</text>`,
      },
      explain: [
        'Put y = 0: 3x = 12, so the line cuts the x-axis at (4, 0).',
        'Put x = 0: 4y = 12, so it cuts the y-axis at (0, 3).',
        'The line and the two axes make a right triangle with legs 4 and 3. Area = 1/2 × 4 × 3 = **6**.',
      ],
    },
    {
      type: 'diagram',
      title: 'Two lines and the y-axis',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<polygon points="97.5,40 97.5,190 172.5,115" class="d-fill" data-step="4"/>
<line x1="62.5" y1="140" x2="262.5" y2="140" class="d-soft"/>
<line x1="97.5" y1="225" x2="97.5" y2="0" class="d-soft"/>
<path d="M255.5,136 L262.5,140 L255.5,144" class="d-soft"/>
<path d="M93.5,7 L97.5,0 L101.5,7" class="d-soft"/>
<text x="264.5" y="158" class="d-small d-soft" text-anchor="middle">x</text>
<text x="85.5" y="8" class="d-small d-soft" text-anchor="middle">y</text>
<line x1="72.5" y1="137" x2="72.5" y2="143" class="d-soft d-thin"/>
<line x1="122.5" y1="137" x2="122.5" y2="143" class="d-soft d-thin"/>
<line x1="147.5" y1="137" x2="147.5" y2="143" class="d-soft d-thin"/>
<line x1="172.5" y1="137" x2="172.5" y2="143" class="d-soft d-thin"/>
<line x1="197.5" y1="137" x2="197.5" y2="143" class="d-soft d-thin"/>
<line x1="222.5" y1="137" x2="222.5" y2="143" class="d-soft d-thin"/>
<line x1="247.5" y1="137" x2="247.5" y2="143" class="d-soft d-thin"/>
<line x1="94.5" y1="215" x2="100.5" y2="215" class="d-soft d-thin"/>
<line x1="94.5" y1="190" x2="100.5" y2="190" class="d-soft d-thin"/>
<line x1="94.5" y1="165" x2="100.5" y2="165" class="d-soft d-thin"/>
<line x1="94.5" y1="115" x2="100.5" y2="115" class="d-soft d-thin"/>
<line x1="94.5" y1="90" x2="100.5" y2="90" class="d-soft d-thin"/>
<line x1="94.5" y1="65" x2="100.5" y2="65" class="d-soft d-thin"/>
<line x1="94.5" y1="40" x2="100.5" y2="40" class="d-soft d-thin"/>
<line x1="94.5" y1="15" x2="100.5" y2="15" class="d-soft d-thin"/>
<line x1="82.5" y1="25" x2="217.5" y2="160" class="d-blue"/>
<line x1="82.5" y1="205" x2="232.5" y2="55" class="d-green"/>
<line x1="97.5" y1="40" x2="97.5" y2="190" class="d-red d-thick" data-step="2"/>
<line x1="97.5" y1="115" x2="172.5" y2="115" class="d-dash" data-step="3"/>
<path d="M104.5,115 L104.5,108 L97.5,108" data-step="3"/>
<circle cx="97.5" cy="40" r="3" class="d-dot" data-step="1"/>
<circle cx="97.5" cy="190" r="3" class="d-dot" data-step="1"/>
<circle cx="172.5" cy="115" r="3" class="d-dot d-red" data-step="3"/>
<text x="184.5" y="119" class="d-red d-small" text-anchor="start" data-step="3">(3, 1)</text>
<text x="105.5" y="36" class="d-small" text-anchor="start" data-step="1">(0, 4)</text>
<text x="105.5" y="204" class="d-small" text-anchor="start" data-step="1">(0, −2)</text>
<text x="207.5" y="176.5" class="d-small d-blue" text-anchor="start">x + y = 4</text>
<text x="215" y="61.5" class="d-small d-green" text-anchor="end">x − y = 2</text>
<text x="73.5" y="121" class="d-red" text-anchor="middle" data-step="2">6</text>
<text x="135" y="109" text-anchor="middle" data-step="3">3</text>`,
      },
      explain: [
        'x + y = 4 meets the y-axis at (0, 4). x − y = 2 meets it at (0, −2).',
        'The base lies on the y-axis: 4 − (−2) = 6.',
        'Add the equations: 2x = 6, so x = 3 and y = 1. The corner (3, 1) is 3 away from the y-axis, so the height is 3.',
        'Area = 1/2 × 6 × 3 = **9**.',
      ],
    },
    {
      type: 'diagram',
      title: 'Three lines make a triangle',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<polygon points="127,159 127,71 215,159" class="d-fill" data-step="3"/>
<line x1="52.2" y1="181" x2="272.2" y2="181" class="d-soft"/>
<line x1="83" y1="211.8" x2="83" y2="13.8" class="d-soft"/>
<path d="M265.2,177 L272.2,181 L265.2,185" class="d-soft"/>
<path d="M79,20.8 L83,13.8 L87,20.8" class="d-soft"/>
<text x="274.2" y="199" class="d-small d-soft" text-anchor="middle">x</text>
<text x="71" y="21.8" class="d-small d-soft" text-anchor="middle">y</text>
<line x1="61" y1="178" x2="61" y2="184" class="d-soft d-thin"/>
<line x1="105" y1="178" x2="105" y2="184" class="d-soft d-thin"/>
<line x1="127" y1="178" x2="127" y2="184" class="d-soft d-thin"/>
<line x1="149" y1="178" x2="149" y2="184" class="d-soft d-thin"/>
<line x1="171" y1="178" x2="171" y2="184" class="d-soft d-thin"/>
<line x1="193" y1="178" x2="193" y2="184" class="d-soft d-thin"/>
<line x1="215" y1="178" x2="215" y2="184" class="d-soft d-thin"/>
<line x1="237" y1="178" x2="237" y2="184" class="d-soft d-thin"/>
<line x1="259" y1="178" x2="259" y2="184" class="d-soft d-thin"/>
<line x1="80" y1="203" x2="86" y2="203" class="d-soft d-thin"/>
<line x1="80" y1="159" x2="86" y2="159" class="d-soft d-thin"/>
<line x1="80" y1="137" x2="86" y2="137" class="d-soft d-thin"/>
<line x1="80" y1="115" x2="86" y2="115" class="d-soft d-thin"/>
<line x1="80" y1="93" x2="86" y2="93" class="d-soft d-thin"/>
<line x1="80" y1="71" x2="86" y2="71" class="d-soft d-thin"/>
<line x1="80" y1="49" x2="86" y2="49" class="d-soft d-thin"/>
<line x1="80" y1="27" x2="86" y2="27" class="d-soft d-thin"/>
<text x="74" y="198" class="d-small d-soft" text-anchor="middle">O</text>
<line x1="127" y1="198.6" x2="127" y2="31.4" class="d-blue" data-step="1"/>
<line x1="65.4" y1="159" x2="254.6" y2="159" class="d-blue" data-step="1"/>
<line x1="87.4" y1="31.4" x2="254.6" y2="198.6" class="d-green" data-step="2"/>
<path d="M127,151 L135,151 L135,159" data-step="1"/>
<circle cx="127" cy="159" r="3" class="d-dot" data-step="1"/>
<circle cx="127" cy="71" r="3" class="d-dot" data-step="2"/>
<circle cx="215" cy="159" r="3" class="d-dot" data-step="2"/>
<text x="121" y="177" class="d-small" text-anchor="end" data-step="1">(2, 1)</text>
<text x="135" y="67" class="d-small" text-anchor="start" data-step="2">(2, 5)</text>
<text x="211" y="177" class="d-small" text-anchor="end" data-step="2">(6, 1)</text>
<text x="131.4" y="39.8" class="d-small d-blue" text-anchor="start">x = 2</text>
<text x="254.6" y="154.2" class="d-small d-blue" text-anchor="end">y = 1</text>
<text x="190.8" y="116.8" class="d-small d-green" text-anchor="start">x + y = 7</text>
<text x="117" y="121" class="d-red" text-anchor="middle" data-step="3">4</text>
<text x="171" y="153" class="d-red" text-anchor="middle" data-step="3">4</text>`,
      },
      explain: [
        'x = 2 is vertical and y = 1 is horizontal. They meet at a right angle at (2, 1).',
        'x + y = 7 meets x = 2 at (2, 5) and meets y = 1 at (6, 1).',
        'The legs are 5 − 1 = 4 and 6 − 2 = 4, so the area is 1/2 × 4 × 4 = **8**.',
      ],
    },
  ],
  comparisons: [
    {
      title: 'Two lines with the x-axis vs with the y-axis',
      items: ['With the x-axis', 'With the y-axis'],
      rows: [
        { aspect: 'Base', values: ['Gap between the two x-intercepts', 'Gap between the two y-intercepts'], key: true },
        { aspect: 'Height', values: ['|y| of the meeting point', '|x| of the meeting point'] },
        {
          aspect: 'Example',
          values: ['2x + y = 8, x − y = 1: base 4 − 1 = 3, height 2, area 3', 'x + y = 4, x − y = 2: base 4 − (−2) = 6, height 3, area 9'],
        },
      ],
      reveal: 'The base always sits on the named axis, so the height is the other coordinate of the meeting point.',
      whenToUse: ['The question names the x-axis: put y = 0 in both lines.', 'The question names the y-axis: put x = 0 in both lines.'],
    },
    {
      title: 'Parallel vs perpendicular lines',
      items: ['Parallel', 'Perpendicular'],
      rows: [
        { aspect: 'Slope rule', values: ['m₁ = m₂', 'm₁ × m₂ = −1'], key: true },
        { aspect: 'From ax + by = c', values: ['Keep a and b, change c', 'Swap a and b and change one sign'] },
        { aspect: 'Partner of 2x − y = 4', values: ['2x − y = 7', 'x + 2y = 7'] },
      ],
      reveal: 'Parallel lines lean the same way; perpendicular lines have slopes that are negative reciprocals.',
      whenToUse: ['"Never meet", "no solution", or equal a : b ratio.', '"At right angles" or "perpendicular".'],
    },
  ],
  shortcuts: [
    {
      pattern: 'Area of a line with the axes',
      example: 'Find the area of the triangle formed by 3x + 4y = 12 and the coordinate axes.',
      options: ['12', '6', '7', '24'],
      answer: '6',
      ladder: [
        {
          name: 'Standard',
          steps: ['Plot the line through (4, 0) and (0, 3).', 'Right triangle with legs 4 and 3.', 'Area = 1/2 × 4 × 3 = 6.'],
          seconds: 40,
        },
        { name: 'Shortcut', steps: ['c²/(2ab) = 144/24 = 6.'], seconds: 8 },
      ],
    },
    {
      pattern: 'Two lines and the y-axis',
      example: 'Find the area enclosed by x + y = 4, x − y = 2 and the y-axis.',
      options: ['6', '8', '9', '12'],
      answer: '9',
      ladder: [
        {
          name: 'Standard',
          steps: ['Draw both lines on graph paper.', 'Read the corners (0, 4), (0, −2), (3, 1).', 'Count or compute the area: 9.'],
          seconds: 90,
        },
        {
          name: 'Shortcut',
          steps: ['Put x = 0: y-intercepts 4 and −2, base 6.', 'Add the lines: 2x = 6, x = 3 is the height.', 'Area = 1/2 × 6 × 3 = 9.'],
          seconds: 25,
        },
      ],
    },
    {
      pattern: 'Two lines and the x-axis',
      example: 'Find the area enclosed by 2x + y = 8, x − y = 1 and the x-axis.',
      options: ['3', '6', '4.5', '9'],
      answer: '3',
      ladder: [
        { name: 'Standard', steps: ['Plot both lines.', 'Corners (4, 0), (1, 0) and (3, 2).', 'Area = 1/2 × 3 × 2 = 3.'], seconds: 80 },
        {
          name: 'Shortcut',
          steps: ['Put y = 0: x-intercepts 4 and 1, base 3.', 'Add the lines: 3x = 9, x = 3, so y = 2 is the height.', 'Area = 1/2 × 3 × 2 = 3.'],
          seconds: 25,
        },
      ],
    },
  ],
  qa: [
    {
      q: 'How do you find where ax + by = c cuts the axes?',
      a: ['Put y = 0 for the x-axis: (c/a, 0).', 'Put x = 0 for the y-axis: (0, c/b).'],
      tag: 'Asked often',
    },
    {
      q: 'Area of the triangle made by ax + by = c with the axes?',
      a: ['1/2 × x-intercept × y-intercept.', 'Same as c²/(2|ab|).'],
      tag: 'Shortcut',
    },
    {
      q: 'Is x = 5 parallel to the x-axis?',
      a: ['No. x = 5 is vertical, parallel to the y-axis.', 'y = 5 is the one parallel to the x-axis.'],
      tag: 'Trap',
    },
    {
      q: 'What is the equation of the x-axis?',
      a: ['y = 0.', 'The y-axis is x = 0.'],
      tag: 'Trap',
    },
    {
      q: 'Slope of ax + by + c = 0?',
      a: ['−a/b.', 'Rewrite as y = (−a/b)x − c/b to see it.'],
    },
    {
      q: 'When are two lines perpendicular?',
      a: ['When the product of their slopes is −1.', 'Or a₁a₂ + b₁b₂ = 0 for lines a₁x + b₁y = c₁ and a₂x + b₂y = c₂.'],
      tag: 'Shortcut',
    },
    {
      q: 'Two lines and the y-axis enclose a triangle. What is the height?',
      a: ['The x-coordinate of the point where the two lines meet.', 'The base is the gap between their y-intercepts.'],
      tag: 'Asked often',
    },
    {
      q: 'When does a line pass through the origin?',
      a: ['When the constant term is 0.', '4x − 5y = 0 passes through (0, 0).'],
    },
    {
      q: 'What do parallel lines mean for the pair of equations?',
      a: ['No common point, so no solution.', 'a₁/a₂ = b₁/b₂ ≠ c₁/c₂.'],
    },
    {
      q: 'An intercept comes out negative. Does the area become negative?',
      a: ['No. Use the lengths, so take absolute values.', 'x − y = 2 has y-intercept −2, a length of 2.'],
      tag: 'Trap',
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'What is the area of the triangle formed by 3x + 4y = 12 and the coordinate axes?',
      options: ['12', '6', '7', '24'],
      answer: 1,
      explain: 'Intercepts 4 and 3. Area = 1/2 × 4 × 3 = 6 square units.',
      shortcut: 'c²/(2ab) = 144/24 = 6.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'At which point does the line 2x − 3y = 6 cut the y-axis?',
      options: ['(0, 2)', '(3, 0)', '(0, −2)', '(−2, 0)'],
      answer: 2,
      explain: 'Put x = 0: −3y = 6, so y = −2. The point is (0, −2).',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'What is the slope of the line 3x − 4y + 7 = 0?',
      options: ['−3/4', '3/4', '4/3', '−4/3'],
      answer: 1,
      explain: 'Slope = −a/b = −3/(−4) = 3/4.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'What is the area enclosed by the lines x = 3, y = 4 and the two coordinate axes?',
      options: ['7', '6', '24', '12'],
      answer: 3,
      explain: 'The four lines make a rectangle 3 by 4. Area = 12.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'What is the area enclosed by x + y = 4, x − y = 2 and the y-axis?',
      options: ['6', '8', '9', '12'],
      answer: 2,
      explain: 'y-intercepts 4 and −2 give base 6. The lines meet at (3, 1), so height 3. Area = 1/2 × 6 × 3 = 9.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'What is the area enclosed by 2x + y = 8, x − y = 1 and the x-axis?',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<polygon points="193,170 127,170 171,126" class="d-fill"/>
<line x1="74.2" y1="170" x2="250.2" y2="170" class="d-soft"/>
<line x1="105" y1="222.8" x2="105" y2="2.8" class="d-soft"/>
<path d="M243.2,166 L250.2,170 L243.2,174" class="d-soft"/>
<path d="M101,9.8 L105,2.8 L109,9.8" class="d-soft"/>
<text x="252.2" y="188" class="d-small d-soft" text-anchor="middle">x</text>
<text x="93" y="10.8" class="d-small d-soft" text-anchor="middle">y</text>
<text x="96" y="187" class="d-small d-soft" text-anchor="middle">O</text>
<line x1="118.2" y1="20.4" x2="211.7" y2="207.4" class="d-blue"/>
<line x1="89.6" y1="207.4" x2="232.6" y2="64.4" class="d-green"/>
<text x="138" y="37.6" class="d-small d-blue" text-anchor="start">2x + y = 8</text>
<text x="219.4" y="103.6" class="d-small d-green" text-anchor="start">x − y = 1</text>
<text x="163.7" y="161.3" class="d-red" text-anchor="middle">?</text>`,
      },
      options: ['3', '6', '4.5', '9'],
      answer: 0,
      explain: 'x-intercepts 4 and 1 give base 3. The lines meet at (3, 2), so height 2. Area = 1/2 × 3 × 2 = 3.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'What is the area of the triangle formed by 5x + 2y = 20 and the coordinate axes?',
      options: ['40', '20', '10', '25'],
      answer: 1,
      explain: 'Intercepts 4 and 10. Area = 1/2 × 4 × 10 = 20.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'For what value of k are the lines 2x + 3y = 6 and 4x + ky = 5 parallel?',
      options: ['−6', '3', '9', '6'],
      answer: 3,
      explain: 'Parallel needs 2/4 = 3/k, so k = 6. The constants 6/5 differ, so the lines do not coincide.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'At which point do the lines 3x + 2y = 12 and x − y = −1 meet?',
      options: ['(2, 3)', '(3, 2)', '(4, 0)', '(1, 2)'],
      answer: 0,
      explain: 'x = y − 1. Then 3y − 3 + 2y = 12, so y = 3 and x = 2.',
      shortcut: 'Test the options: (2, 3) gives 6 + 6 = 12 and 2 − 3 = −1.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'What is the area of the triangle formed by the lines y = x, y = −x and y = 4?',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<polygon points="160,159 248,71 72,71" class="d-fill"/>
<line x1="19.2" y1="159" x2="305.2" y2="159" class="d-soft"/>
<line x1="160" y1="189.8" x2="160" y2="35.8" class="d-soft"/>
<path d="M298.2,155 L305.2,159 L298.2,163" class="d-soft"/>
<path d="M156,42.8 L160,35.8 L164,42.8" class="d-soft"/>
<text x="307.2" y="177" class="d-small d-soft" text-anchor="middle">x</text>
<text x="148" y="43.8" class="d-small d-soft" text-anchor="middle">y</text>
<line x1="142.4" y1="176.6" x2="265.6" y2="53.4" class="d-blue"/>
<line x1="177.6" y1="176.6" x2="54.4" y2="53.4" class="d-blue"/>
<line x1="28" y1="71" x2="292" y2="71" class="d-red"/>
<text x="263.4" y="49.7" class="d-small d-blue" text-anchor="start">y = x</text>
<text x="56.6" y="49.7" class="d-small d-blue" text-anchor="end">y = −x</text>
<text x="30" y="87" class="d-small d-red" text-anchor="start">y = 4</text>
<text x="160" y="110.4" class="d-red" text-anchor="middle">?</text>`,
      },
      options: ['8', '12', '16', '32'],
      answer: 2,
      explain: 'Corners (0, 0), (4, 4) and (−4, 4). Base 8 along y = 4, height 4. Area = 1/2 × 8 × 4 = 16.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which of these lines is perpendicular to 2x − y + 5 = 0?',
      options: ['x + 2y = 7', '2x + y = 3', 'x − 2y = 1', '2x − y = 4'],
      answer: 0,
      explain: 'The given slope is 2. A perpendicular line has slope −1/2, which is x + 2y = 7.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'The line kx + 3y = 12 passes through (2, 2). What area does it enclose with the coordinate axes?',
      options: ['16', '12', '8', '6'],
      answer: 2,
      explain: '2k + 6 = 12, so k = 3. The line 3x + 3y = 12 has intercepts 4 and 4. Area = 1/2 × 4 × 4 = 8.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'What is the area of the triangle formed by 2x − y = 4, x + 2y = 7 and the x-axis?',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<polygon points="124,139 244,139 148,91" class="d-fill"/>
<line x1="42.4" y1="139" x2="282.4" y2="139" class="d-soft"/>
<line x1="76" y1="220.6" x2="76" y2="4.6" class="d-soft"/>
<path d="M275.4,135 L282.4,139 L275.4,143" class="d-soft"/>
<path d="M72,11.6 L76,4.6 L80,11.6" class="d-soft"/>
<text x="284.4" y="157" class="d-small d-soft" text-anchor="middle">x</text>
<text x="64" y="12.6" class="d-small d-soft" text-anchor="middle">y</text>
<text x="67" y="156" class="d-small d-soft" text-anchor="middle">O</text>
<line x1="91.6" y1="203.8" x2="181.6" y2="23.8" class="d-blue"/>
<line x1="59.2" y1="46.6" x2="263.2" y2="148.6" class="d-green"/>
<text x="188.8" y="39.8" class="d-small d-blue" text-anchor="start">2x − y = 4</text>
<text x="85.6" y="49.4" class="d-small d-green" text-anchor="start">x + 2y = 7</text>
<text x="172" y="129" class="d-red" text-anchor="middle">?</text>`,
      },
      options: ['5', '10', '7.5', '4'],
      answer: 0,
      explain: 'x-intercepts 2 and 7 give base 5. The lines meet at (3, 2), so height 2. Area = 1/2 × 5 × 2 = 5.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'What is the area of the triangle formed by x = 2, y = 1 and x + y = 7?',
      options: ['4', '6', '16', '8'],
      answer: 3,
      explain: 'Corners (2, 1), (2, 5) and (6, 1). Right angle at (2, 1) with legs 4 and 4. Area = 8.',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'The graph of y = 3 is a line parallel to the x-axis.',
      answer: true,
      explain: 'y stays 3 for every x, so the line is horizontal.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'The lines 3x + 4y = 12 and 6x + 8y = 20 meet at exactly one point.',
      answer: false,
      explain: '3/6 = 4/8 but 12/20 = 3/5, so the lines are parallel and never meet.',
    },
  ],
};

export default topic;
