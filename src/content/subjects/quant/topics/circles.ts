import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'circles',
  title: 'Circles',
  level: 'advanced',
  masteryMinutes: 150,
  reviseMinutes: 50,
  priority: 'high',
  weightage: { tier1: 1, tier2: 1.5 },
  tags: [
    'chord',
    'tangent',
    'secant',
    'angle in a semicircle',
    'cyclic quadrilateral',
    'alternate segment',
    'common tangents',
    'intersecting chords',
  ],
  summary:
    'Most circle questions hide a right triangle: radius, half-chord and distance, or radius, tangent and distance to the centre. Add the angle rules and the cyclic quadrilateral and you cover nearly all of it.',
  patterns: [
    {
      name: 'Chord length and distance from the centre',
      frequency: 'most',
      example: 'A chord of 16 cm lies in a circle of radius 10 cm. How far is it from the centre?',
    },
    {
      name: 'Tangent length and two tangents from a point',
      frequency: 'most',
      example: 'P is 13 cm from the centre of a circle of radius 5 cm. Length of the tangent?',
    },
    {
      name: 'Direct and transverse common tangents',
      frequency: 'often',
      example: 'Radii 8 and 3 cm, centres 13 cm apart. Length of the direct common tangent?',
    },
    { name: 'Angle at the centre, same segment, semicircle', frequency: 'often', example: '∠AOB = 110°. Find ∠ACB for C on the major arc.' },
    { name: 'Cyclic quadrilateral angles', frequency: 'often', example: 'ABCD is cyclic and ∠A = 75°. Find ∠C.' },
    { name: 'Intersecting chords and tangent-secant', frequency: 'often', example: 'PA = 4, AB = 5 on a secant, PT a tangent. Find PT.' },
    { name: 'Alternate segment theorem', frequency: 'rare', example: 'A chord makes 65° with the tangent at its end. Angle in the other segment?' },
  ],
  keyPoints: [
    {
      title: 'Chords',
      text: 'The perpendicular from the centre bisects a chord. So radius, half-chord and distance from the centre make a right triangle. Equal chords are equally far from the centre, and a longer chord is nearer the centre.',
      formula: 'chord = 2√(r² − d²)',
      example: 'r = 10, chord 16: half-chord 8, so d = √(100 − 64) = **6**.',
    },
    {
      title: 'Angles in a circle',
      text: 'The angle an arc makes at the centre is twice the angle it makes anywhere on the rest of the circle. Angles in the same segment are equal. The angle in a semicircle is 90°.',
      formula: '∠AOB = 2∠ACB',
      example: '∠AOB = 110°, so ∠ACB = **55°** for C on the major arc.',
    },
    {
      title: 'Cyclic quadrilateral',
      text: 'When all four corners lie on a circle, opposite angles add to 180°. An exterior angle equals the interior opposite angle.',
      formula: '∠A + ∠C = 180°, ∠B + ∠D = 180°',
      example: '∠A = 75° gives ∠C = **105°**.',
    },
    {
      title: 'Tangents from a point',
      text: 'A tangent is perpendicular to the radius at the point of contact. The two tangents from an outside point are equal. The angle between them and the angle at the centre add to 180°.',
      formula: 'tangent = √(d² − r²); ∠APB + ∠AOB = 180°',
      example: 'd = 13, r = 5: tangent = √(169 − 25) = **12**.',
    },
    {
      title: 'Alternate segment theorem',
      text: 'The angle between a tangent and a chord through the point of contact equals the angle the chord makes in the other segment.',
      example: 'Tangent-chord angle 65°, so the angle in the alternate segment is **65°**.',
    },
    {
      title: 'Intersecting chords and tangent-secant',
      text: 'Chords AB and CD meeting at P (inside or outside the circle): PA × PB = PC × PD. For a tangent PT and a secant PAB from the same outside point: PT² = PA × PB.',
      formula: 'PA × PB = PC × PD; PT² = PA × PB',
      example: 'PA = 4, AB = 5, so PB = 9 and PT = √36 = **6**.',
    },
    {
      title: 'Common tangents of two circles',
      text: 'A direct common tangent does not cross the line of centres; a transverse one does. With d the distance between the centres:',
      formula: 'direct = √(d² − (r₁ − r₂)²); transverse = √(d² − (r₁ + r₂)²)',
      example: 'r₁ = 8, r₂ = 3, d = 13: direct √(169 − 25) = **12**, transverse √(169 − 121) = **4√3**.',
    },
    {
      title: 'Quadrilateral around a circle',
      text: 'When a circle touches all four sides of a quadrilateral, the sums of opposite sides are equal, since the tangents from each corner are equal.',
      formula: 'AB + CD = AD + BC',
      example: 'AB = 6, BC = 7, CD = 4: AD = 6 + 4 − 7 = **3**.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'Angle at the centre is twice the angle on the circle',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<circle cx="160" cy="118" r="88"/>
<line x1="160" y1="118" x2="87.9" y2="168.5" class="d-blue" data-step="1"/>
<line x1="160" y1="118" x2="232.1" y2="168.5" class="d-blue" data-step="1"/>
<circle cx="160" cy="118" r="3" class="d-dot"/>
<line x1="87.9" y1="67.5" x2="87.9" y2="168.5" class="d-red" data-step="2"/>
<line x1="87.9" y1="67.5" x2="232.1" y2="168.5" class="d-red" data-step="2"/>
<line x1="182.8" y1="33" x2="87.9" y2="168.5" class="d-green d-dash" data-step="3"/>
<line x1="182.8" y1="33" x2="232.1" y2="168.5" class="d-green d-dash" data-step="3"/>
<text x="76.4" y="182.5" text-anchor="middle">A</text>
<text x="243.6" y="182.5" text-anchor="middle">B</text>
<text x="76.4" y="65.5" text-anchor="middle">C</text>
<text x="186.4" y="25.5" text-anchor="middle">D</text>
<text x="168" y="110.1" text-anchor="middle">O</text>
<path d="M145.3,128.3 A18,18 0 0 0 174.7,128.3" class="d-blue" data-step="1"/>
<text x="160" y="158" class="d-blue d-small" text-anchor="middle" data-step="1">110°</text>
<path d="M87.9,89.5 A22,22 0 0 0 105.9,80.1" class="d-red" data-step="2"/>
<text x="105.5" y="107.2" class="d-red d-small" text-anchor="middle" data-step="2">55°</text>
<path d="M170.2,51 A22,22 0 0 0 190.3,53.7" class="d-green" data-step="3"/>
<text x="177.8" y="76.7" class="d-green d-small" text-anchor="middle" data-step="3">55°</text>`,
        caption: '∠AOB = 110°',
      },
      explain: [
        'The minor arc AB makes ∠AOB = 110° at the centre O.',
        'The same arc makes ∠ACB at a point C on the major arc. It is half the centre angle: 110/2 = **55°**.',
        'Move the point to D, still on the major arc: ∠ADB is again 55°. Angles in the same segment are equal.',
      ],
    },
    {
      type: 'diagram',
      title: 'Tangents from an outside point',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<polygon points="78,115 100.1,61.9 227.5,115" class="d-fill" data-step="2"/>
<circle cx="78" cy="115" r="57.5"/>
<line x1="78" y1="115" x2="100.1" y2="61.9" class="d-blue" data-step="1"/>
<line x1="78" y1="115" x2="100.1" y2="168.1" class="d-blue" data-step="4"/>
<line x1="78" y1="115" x2="227.5" y2="115" class="d-soft d-dash" data-step="2"/>
<line x1="227.5" y1="115" x2="100.1" y2="61.9" class="d-red" data-step="2"/>
<line x1="227.5" y1="115" x2="100.1" y2="168.1" class="d-red" data-step="3"/>
<path d="M96.7,70.2 L105,73.7 L108.4,65.4" class="d-blue" data-step="1"/>
<path d="M96.7,159.8 L105,156.3 L108.4,164.6" class="d-blue" data-step="4"/>
<circle cx="78" cy="115" r="3" class="d-dot"/>
<text x="64" y="125" text-anchor="middle">O</text>
<text x="105.5" y="55" text-anchor="middle">A</text>
<text x="105.5" y="187" text-anchor="middle">B</text>
<text x="241.5" y="121" text-anchor="middle">P</text>
<text x="79.8" y="90.6" class="d-blue" text-anchor="middle" data-step="1">5</text>
<text x="152.8" y="133" class="d-soft" text-anchor="middle" data-step="2">13</text>
<text x="169.2" y="81.5" class="d-red" text-anchor="middle" data-step="2">12</text>
<text x="169.2" y="160.5" class="d-red" text-anchor="middle" data-step="3">12</text>
<path d="M203.5,105 A26,26 0 0 0 203.5,125" data-step="4"/>
<path d="M84.2,129.8 A16,16 0 0 0 84.2,100.2" data-step="4"/>`,
        caption: 'r = 5, OP = 13',
      },
      explain: [
        'A tangent is perpendicular to the radius at the point of contact: OA ⊥ PA.',
        'So △OAP is right-angled at A: PA = √(OP² − OA²) = √(169 − 25) = **12**.',
        'The two tangents from one outside point are equal: PB = PA = 12.',
        'In OAPB the angles at A and B are 90° each, so ∠APB + ∠AOB = 360° − 180° = 180°.',
      ],
    },
    {
      type: 'diagram',
      title: 'Direct common tangent of two circles',
      figure: {
        viewBox: '0 0 320 240',
        svg: `
<polygon points="92,150 111.2,103.8 222,140" class="d-fill" data-step="3"/>
<circle cx="92" cy="150" r="80"/>
<circle cx="222" cy="140" r="30"/>
<line x1="95.1" y1="67.1" x2="283.4" y2="128.6" class="d-red d-thick"/>
<line x1="92" y1="150" x2="122.8" y2="76.2" class="d-blue" data-step="1"/>
<line x1="222" y1="140" x2="233.5" y2="112.3" class="d-blue" data-step="1"/>
<path d="M119.7,83.5 L127.3,86 L130.4,78.6" class="d-blue" data-step="1"/>
<path d="M230.5,119.7 L222.9,117.2 L225.9,109.8" class="d-blue" data-step="1"/>
<line x1="92" y1="150" x2="222" y2="140" class="d-soft"/>
<line x1="111.2" y1="103.8" x2="222" y2="140" class="d-green d-dash" data-step="2"/>
<path d="M108.2,111.2 L115.8,113.7 L118.8,106.3" class="d-green" data-step="2"/>
<circle cx="92" cy="150" r="3" class="d-dot"/>
<circle cx="222" cy="140" r="3" class="d-dot"/>
<text x="86" y="174" text-anchor="middle">O₁</text>
<text x="224" y="164" text-anchor="middle">O₂</text>
<text x="128.2" y="69.2" text-anchor="middle">T₁</text>
<text x="237.5" y="102.3" text-anchor="middle">T₂</text>
<text x="97.2" y="105.8" class="d-green" text-anchor="middle" data-step="2">M</text>
<text x="109.9" y="134.4" class="d-green d-small" text-anchor="middle" data-step="2">5</text>
<text x="157.9" y="161" class="d-small" text-anchor="middle" data-step="3">13</text>
<text x="170.6" y="113.6" class="d-green d-small" text-anchor="middle" data-step="3">12</text>`,
        caption: 'r₁ = 8, r₂ = 3, O₁O₂ = 13',
      },
      explain: [
        'Both radii meet the tangent at 90°, so O₁T₁ ∥ O₂T₂. Radii 8 and 3, centres 13 apart.',
        'Draw O₂M parallel to the tangent. T₁MO₂T₂ is a rectangle, so MO₂ = T₁T₂ and O₁M = 8 − 3 = 5.',
        '△O₁MO₂ is right-angled with hypotenuse 13: T₁T₂ = MO₂ = √(169 − 25) = **12**. For a transverse tangent, use 8 + 3 in place of 8 − 3.',
      ],
    },
  ],
  comparisons: [
    {
      title: 'Direct vs transverse common tangent',
      items: ['Direct common tangent', 'Transverse common tangent'],
      rows: [
        { aspect: 'Crosses the line of centres?', values: ['No', 'Yes, between the circles'] },
        { aspect: 'Length', values: ['√(d² − (r₁ − r₂)²)', '√(d² − (r₁ + r₂)²)'], key: true },
        { aspect: 'Exists when', values: ['Neither circle lies inside the other', 'The circles do not overlap (d ≥ r₁ + r₂)'] },
        { aspect: 'r = 8 and 3, d = 13', values: ['12', '4√3'] },
      ],
      reveal: 'The only change is the sign between the radii: minus for direct, plus for transverse. So the direct tangent is always the longer one.',
      whenToUse: [
        '"Direct", "external" or both circles on the same side of the tangent.',
        '"Transverse", "internal" or the tangent passes between the circles.',
      ],
    },
    {
      title: 'Number of common tangents',
      items: ['Apart', 'Touch outside', 'Cross', 'Touch inside', 'One inside other'],
      rows: [
        { aspect: 'Distance d', values: ['d > r₁ + r₂', 'd = r₁ + r₂', 'r₁ − r₂ < d < r₁ + r₂', 'd = r₁ − r₂', 'd < r₁ − r₂'] },
        { aspect: 'Common tangents', values: ['4', '3', '2', '1', '0'], key: true },
      ],
      reveal: 'Each step closer loses one tangent: 4, 3, 2, 1, 0.',
      whenToUse: [
        'Compare d with the sum of the radii first.',
        'd equals the sum exactly.',
        'd is between the difference and the sum.',
        'd equals the difference exactly.',
        'd is smaller than the difference.',
      ],
    },
  ],
  shortcuts: [
    {
      pattern: 'Distance of a chord from the centre',
      example: 'A chord of length 16 cm is drawn in a circle of radius 10 cm. How far is it from the centre?',
      options: ['6 cm', '8 cm', '4 cm', '5 cm'],
      answer: '6 cm',
      ladder: [
        { name: 'Standard', steps: ['Drop the perpendicular: it bisects the chord, half-chord 8.', 'd² = 10² − 8² = 36.', 'd = 6 cm.'], seconds: 25 },
        { name: 'Shortcut', steps: ['Spot the triplet 6-8-10: d = 6 cm.'], seconds: 5 },
      ],
    },
    {
      pattern: 'Direct common tangent',
      example: 'Two circles of radii 8 cm and 3 cm have centres 13 cm apart. Find the length of the direct common tangent.',
      options: ['10 cm', '12 cm', '4√3 cm', '11 cm'],
      answer: '12 cm',
      ladder: [
        {
          name: 'Standard',
          steps: [
            'Draw the tangent and both radii to it.',
            'Draw a line from the small centre parallel to the tangent.',
            'Right triangle with hypotenuse 13 and one leg 8 − 3 = 5.',
            'Tangent = √(169 − 25) = 12 cm.',
          ],
          seconds: 60,
        },
        { name: 'Shortcut', steps: ['√(d² − (r₁ − r₂)²) = √(169 − 25) = 12 cm.'], seconds: 12 },
        { name: 'Option elimination', steps: ['5-12-13 triplet: legs 5 and 12.', '4√3 is the transverse tangent, a trap.'], seconds: 6 },
      ],
    },
    {
      pattern: 'Tangent length from an outside point',
      example: 'A point is 17 cm from the centre of a circle of radius 8 cm. Find the length of the tangent from it.',
      options: ['15 cm', '9 cm', '12 cm', '16 cm'],
      answer: '15 cm',
      ladder: [
        { name: 'Standard', steps: ['Tangent ⟂ radius, so a right triangle with hypotenuse 17.', 't² = 289 − 64 = 225.', 't = 15 cm.'], seconds: 25 },
        { name: 'Shortcut', steps: ['8-15-17 triplet: t = 15 cm.'], seconds: 5 },
      ],
    },
  ],
  qa: [
    {
      q: 'Length of a chord at distance d from the centre of a circle of radius r?',
      a: ['2√(r² − d²).', 'The perpendicular from the centre bisects the chord.'],
      tag: 'Asked often',
    },
    {
      q: 'Length of the tangent from a point at distance d from the centre?',
      a: ['√(d² − r²).', 'The tangent meets the radius at 90°.'],
      tag: 'Asked often',
    },
    {
      q: 'Two tangents PA and PB meet at P. How are ∠APB and ∠AOB related?',
      a: ['They add to 180°.', 'OAPB has two right angles at A and B.'],
      tag: 'Shortcut',
    },
    {
      q: 'Angle at the centre vs angle at the circumference on the same arc?',
      a: ['Centre angle = 2 × circumference angle.', 'In a semicircle the centre angle is 180°, so the angle is 90°.'],
    },
    {
      q: 'Are the opposite angles of a cyclic quadrilateral equal?',
      a: ['No, they add to 180°.', 'They are equal only when both are 90°.'],
      tag: 'Trap',
    },
    {
      q: 'Formulas for the direct and transverse common tangents?',
      a: ['Direct: √(d² − (r₁ − r₂)²).', 'Transverse: √(d² − (r₁ + r₂)²).', 'Direct uses minus, transverse uses plus.'],
      tag: 'Trap',
    },
    {
      q: 'How many common tangents do two circles touching externally have?',
      a: ['3: two direct and one at the point of contact.', 'Apart 4, crossing 2, touching inside 1, one inside the other 0.'],
      tag: 'Asked often',
    },
    {
      q: 'Tangent PT and secant PAB from the same point. Rule?',
      a: ['PT² = PA × PB.', 'PB is the whole secant, not AB.'],
      tag: 'Trap',
    },
    {
      q: 'State the alternate segment theorem.',
      a: [
        'Angle between a tangent and a chord = angle in the alternate segment.',
        'The alternate segment is the one on the other side of the chord.',
      ],
    },
    {
      q: 'A circle touches all four sides of ABCD. What is equal?',
      a: ['AB + CD = AD + BC.', 'A rhombus is the only parallelogram that works.'],
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'O is the centre of a circle and ∠AOB = 110°. C is a point on the major arc. What is ∠ACB?',
      options: ['110°', '55°', '125°', '70°'],
      answer: 1,
      explain: 'The angle at the circumference is half the angle at the centre: 110 ÷ 2 = 55°.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'AB is a diameter and C is a point on the circle. If ∠CAB = 35°, what is ∠CBA?',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<circle cx="160" cy="125" r="90"/>
<line x1="70" y1="125" x2="250" y2="125"/>
<line x1="70" y1="125" x2="190.8" y2="40.4"/>
<line x1="190.8" y1="40.4" x2="250" y2="125"/>
<circle cx="160" cy="125" r="3" class="d-dot"/>
<text x="56" y="131" text-anchor="middle">A</text>
<text x="264" y="131" text-anchor="middle">B</text>
<text x="195.6" y="33.3" text-anchor="middle">C</text>
<text x="160" y="149" text-anchor="middle">O</text>
<path d="M98,125 A28,28 0 0 0 92.9,108.9"/>
<text x="113.9" y="117.2" class="d-small" text-anchor="middle">35°</text>
<path d="M236.2,105.3 A24,24 0 0 0 226,125" class="d-red"/>
<text x="212.7" y="111.6" class="d-red" text-anchor="middle">?</text>`,
        caption: 'AB is a diameter',
      },
      options: ['55°', '35°', '90°', '45°'],
      answer: 0,
      explain: '∠ACB = 90° (angle in a semicircle), so ∠CBA = 180 − 90 − 35 = 55°.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'A point is 13 cm from the centre of a circle of radius 5 cm. What is the length of the tangent from the point?',
      options: ['8 cm', '10 cm', '12 cm', '18 cm'],
      answer: 2,
      explain: '√(13² − 5²) = √144 = 12 cm.',
      shortcut: '5-12-13 triplet.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'ABCD is a cyclic quadrilateral with ∠A = 75°. What is ∠C?',
      options: ['75°', '105°', '115°', '95°'],
      answer: 1,
      explain: 'Opposite angles of a cyclic quadrilateral add to 180°: 180 − 75 = 105°.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A chord of length 16 cm is drawn in a circle of radius 10 cm. What is its distance from the centre?',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<circle cx="160" cy="110" r="95"/>
<line x1="84" y1="167" x2="236" y2="167"/>
<line x1="160" y1="110" x2="84" y2="167" class="d-blue"/>
<line x1="160" y1="110" x2="160" y2="167" class="d-dash"/>
<circle cx="160" cy="110" r="3" class="d-dot"/>
<path d="M160,159 L168,159 L168,167"/>
<text x="160" y="100" text-anchor="middle">O</text>
<text x="72.8" y="181.4" text-anchor="middle">A</text>
<text x="247.2" y="181.4" text-anchor="middle">B</text>
<text x="172" y="185" class="d-small" text-anchor="middle">M</text>
<text x="116" y="136.5" class="d-blue" text-anchor="middle">10</text>
<text x="150" y="144.5" class="d-red" text-anchor="middle">?</text>`,
        caption: 'chord AB = 16 cm, radius 10 cm',
      },
      options: ['8 cm', '4 cm', '5 cm', '6 cm'],
      answer: 3,
      explain: 'Half-chord = 8. Distance = √(100 − 64) = 6 cm.',
      shortcut: '6-8-10 triplet.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'PA and PB are tangents from P to a circle with centre O. If ∠APB = 50°, what is ∠AOB?',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<circle cx="80" cy="115" r="52"/>
<line x1="203" y1="115" x2="102" y2="67.9"/>
<line x1="203" y1="115" x2="102" y2="162.1"/>
<line x1="80" y1="115" x2="102" y2="67.9" class="d-blue"/>
<line x1="80" y1="115" x2="102" y2="162.1" class="d-blue"/>
<circle cx="80" cy="115" r="3" class="d-dot"/>
<path d="M98.6,75.1 L105.8,78.5 L109.2,71.3"/>
<path d="M98.6,154.9 L105.8,151.5 L109.2,158.7"/>
<text x="66" y="125" text-anchor="middle">O</text>
<text x="107.9" y="61.2" text-anchor="middle">A</text>
<text x="107.9" y="180.8" text-anchor="middle">B</text>
<text x="217" y="121" text-anchor="middle">P</text>
<path d="M175.9,102.3 A30,30 0 0 0 175.9,127.7"/>
<text x="155" y="121" class="d-small" text-anchor="middle">50°</text>
<path d="M86.8,129.5 A16,16 0 0 0 86.8,100.5" class="d-red"/>
<text x="112" y="121" class="d-red" text-anchor="middle">?</text>`,
        caption: 'PA and PB are tangents',
      },
      options: ['50°', '100°', '130°', '65°'],
      answer: 2,
      explain: '∠OAP = ∠OBP = 90°, so ∠AOB = 360 − 90 − 90 − 50 = 130°.',
      shortcut: '∠APB + ∠AOB = 180°.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Two circles of radii 8 cm and 3 cm have their centres 13 cm apart. What is the length of the direct common tangent?',
      options: ['10 cm', '4√3 cm', '11 cm', '12 cm'],
      answer: 3,
      explain: '√(13² − (8 − 3)²) = √(169 − 25) = 12 cm.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Two circles of radii 6 cm and 3 cm have their centres 15 cm apart. What is the length of the transverse common tangent?',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<circle cx="84" cy="118" r="69"/>
<circle cx="256.5" cy="118" r="34.5"/>
<line x1="108.8" y1="50.4" x2="257.9" y2="162.2" class="d-red"/>
<line x1="84" y1="118" x2="256.5" y2="118" class="d-soft d-dash"/>
<line x1="84" y1="118" x2="125.4" y2="62.8" class="d-blue"/>
<line x1="256.5" y1="118" x2="235.8" y2="145.6" class="d-blue"/>
<circle cx="84" cy="118" r="3" class="d-dot"/>
<circle cx="256.5" cy="118" r="3" class="d-dot"/>
<text x="80" y="142" text-anchor="middle">O₁</text>
<text x="272.5" y="126" text-anchor="middle">O₂</text>
<text x="96.7" y="90.4" class="d-blue" text-anchor="middle">6</text>
<text x="254.2" y="143.8" class="d-blue" text-anchor="middle">3</text>
<text x="169.4" y="86.8" class="d-red" text-anchor="middle">?</text>
<text x="130.2" y="140" class="d-small" text-anchor="middle">15</text>`,
        caption: 'transverse common tangent',
      },
      options: ['12 cm', '6√6 cm', '9 cm', '10 cm'],
      answer: 0,
      explain: '√(15² − (6 + 3)²) = √(225 − 81) = 12 cm.',
      shortcut: '9-12-15 is 3-4-5 × 3. (6√6 is the direct tangent, a trap.)',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Chords AB and CD of a circle meet at P inside the circle. If AP = 4 cm, PB = 6 cm and CP = 3 cm, what is PD?',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<circle cx="160" cy="115" r="90"/>
<line x1="229.3" y1="172.4" x2="186" y2="28.8"/>
<line x1="244.4" y1="83.9" x2="125.4" y2="198.1"/>
<circle cx="212" cy="115" r="3" class="d-dot"/>
<text x="240.1" y="187.4" text-anchor="middle">A</text>
<text x="190" y="21.4" text-anchor="middle">B</text>
<text x="257.6" y="85" text-anchor="middle">C</text>
<text x="120" y="217" text-anchor="middle">D</text>
<text x="228" y="123" text-anchor="middle">P</text>
<text x="230.2" y="146.8" class="d-blue" text-anchor="middle">4</text>
<text x="208.5" y="75" class="d-blue" text-anchor="middle">6</text>
<text x="221.3" y="98.2" class="d-green" text-anchor="middle">3</text>
<text x="161.7" y="155.3" class="d-red" text-anchor="middle">?</text>`,
        caption: 'chords AB and CD meet at P',
      },
      options: ['4.5 cm', '8 cm', '2 cm', '9 cm'],
      answer: 1,
      explain: 'AP × PB = CP × PD: 24 = 3 × PD, so PD = 8 cm.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'From an outside point P, a tangent PT and a secant PAB are drawn to a circle. If PA = 4 cm and AB = 5 cm, what is PT?',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<circle cx="218" cy="115" r="90"/>
<line x1="68" y1="115" x2="224" y2="204.8"/>
<line x1="68" y1="115" x2="164" y2="43" class="d-red"/>
<circle cx="137.3" cy="154.9" r="3" class="d-dot"/>
<circle cx="224" cy="204.8" r="3" class="d-dot"/>
<circle cx="164" cy="43" r="3" class="d-dot"/>
<text x="56" y="121" text-anchor="middle">P</text>
<text x="124.8" y="167.1" text-anchor="middle">A</text>
<text x="224.9" y="224.8" text-anchor="middle">B</text>
<text x="155.6" y="37.8" text-anchor="middle">T</text>
<text x="96.7" y="151.4" class="d-blue" text-anchor="middle">4</text>
<text x="174.7" y="196.3" class="d-blue" text-anchor="middle">5</text>
<text x="108.8" y="75.4" class="d-red" text-anchor="middle">?</text>`,
        caption: 'PT is a tangent, PAB a secant',
      },
      options: ['6 cm', '√20 cm', '3 cm', '4.5 cm'],
      answer: 0,
      explain: 'PB = 4 + 5 = 9. PT² = PA × PB = 36, so PT = 6 cm.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The tangent at A makes an angle of 65° with the chord AB. C is a point on the circle in the alternate segment. What is ∠ACB?',
      figure: {
        viewBox: '0 0 320 230',
        svg: `
<circle cx="160" cy="105" r="80"/>
<line x1="30" y1="185" x2="290" y2="185"/>
<line x1="160" y1="185" x2="221.3" y2="53.6"/>
<line x1="90.7" y1="65" x2="160" y2="185"/>
<line x1="90.7" y1="65" x2="221.3" y2="53.6"/>
<text x="160" y="209" text-anchor="middle">A</text>
<text x="232" y="50.6" text-anchor="middle">B</text>
<text x="78.6" y="64" text-anchor="middle">C</text>
<path d="M186,185 A26,26 0 0 0 171,161.4"/>
<text x="197.1" y="167.4" class="d-small" text-anchor="middle">65°</text>
<path d="M101.7,84.1 A22,22 0 0 0 112.6,63.1" class="d-red"/>
<text x="124.4" y="88.5" class="d-red" text-anchor="middle">?</text>`,
        caption: 'tangent at A',
      },
      options: ['25°', '115°', '65°', '130°'],
      answer: 2,
      explain:
        'Alternate segment theorem: the angle between the tangent at A and the chord AB equals the angle AB makes at any point C in the other segment. So ∠ACB = 65°.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'ABCD is a cyclic quadrilateral in which AB is a diameter and ∠BCD = 120°. What is ∠ABD?',
      figure: {
        viewBox: '0 0 320 240',
        svg: `
<circle cx="160" cy="140" r="100"/>
<polygon points="60,140 260,140 217.4,58.1 110,53.4"/>
<line x1="260" y1="140" x2="110" y2="53.4" class="d-dash"/>
<circle cx="160" cy="140" r="3" class="d-dot"/>
<text x="46" y="146" text-anchor="middle">A</text>
<text x="274" y="146" text-anchor="middle">B</text>
<text x="225.4" y="52.6" text-anchor="middle">C</text>
<text x="103" y="47.3" text-anchor="middle">D</text>
<text x="160" y="164" text-anchor="middle">O</text>
<path d="M201.4,57.4 A16,16 0 0 0 224.7,72.3"/>
<text x="201.2" y="89.4" class="d-small" text-anchor="middle">120°</text>
<path d="M234,125 A30,30 0 0 0 230,140" class="d-red"/>
<text x="213.6" y="133.6" class="d-red" text-anchor="middle">?</text>`,
        caption: 'AB is a diameter',
      },
      options: ['60°', '30°', '45°', '40°'],
      answer: 1,
      explain: '∠BAD = 180 − 120 = 60° (opposite angles). ∠ADB = 90° (semicircle). So ∠ABD = 180 − 90 − 60 = 30°.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Two circles of radii 5 cm and 3 cm have their centres 8 cm apart. How many common tangents do they have?',
      options: ['1', '2', '3', '4'],
      answer: 2,
      explain: 'd = 5 + 3, so the circles touch externally and have 3 common tangents.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'A circle touches all four sides of quadrilateral ABCD. If AB = 6 cm, BC = 7 cm and CD = 4 cm, what is AD?',
      figure: {
        viewBox: '0 0 320 240',
        svg: `
<polygon points="102.3,45.2 256.7,66.9 127.2,194.8 63.3,112.8"/>
<circle cx="132.9" cy="107.9" r="57.8" class="d-soft"/>
<text x="96.1" y="38.7" text-anchor="middle">A</text>
<text x="270" y="68.5" text-anchor="middle">B</text>
<text x="126.3" y="214.7" text-anchor="middle">C</text>
<text x="49.3" y="119.8" text-anchor="middle">D</text>
<text x="181.2" y="50.2" text-anchor="middle">6</text>
<text x="200.4" y="145.4" text-anchor="middle">7</text>
<text x="85.8" y="167.2" text-anchor="middle">4</text>
<text x="72.4" y="79" class="d-red" text-anchor="middle">?</text>`,
      },
      options: ['3 cm', '5 cm', '4 cm', '9 cm'],
      answer: 0,
      explain: 'AB + CD = AD + BC: 6 + 4 = AD + 7, so AD = 3 cm.',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'The opposite angles of a cyclic quadrilateral are equal.',
      answer: false,
      explain: 'They add to 180°. They are equal only when both are 90°.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'Two circles that cross each other at two points have exactly two common tangents.',
      answer: true,
      explain: 'Crossing circles have only the two direct common tangents; no tangent can pass between them.',
    },
  ],
};

export default topic;
