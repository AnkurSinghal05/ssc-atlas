import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'mensuration-3d',
  title: '3D solids: volume and surface area',
  level: 'intermediate',
  masteryMinutes: 120,
  reviseMinutes: 40,
  priority: 'high',
  weightage: { tier1: 1, tier2: 1.5 },
  tags: [
    'volume',
    'surface area',
    'cube',
    'cuboid',
    'cylinder',
    'cone',
    'sphere',
    'hemisphere',
    'frustum',
    'prism',
    'pyramid',
    'melting and recasting',
  ],
  summary:
    'Volume (the space a solid fills) and surface area (the total area of its outer faces) of cubes, cuboids, cylinders, cones and spheres. Two ideas cover most questions: volume stays the same when a solid is melted and recast, and if every length is multiplied by k, surface area is multiplied by k² and volume by k³.',
  patterns: [
    { name: 'Melting and recasting', frequency: 'most', example: 'A sphere of radius 9 cm is melted into spheres of radius 3 cm. How many?' },
    {
      name: 'Cylinder, cone and sphere: direct volume or surface area',
      frequency: 'most',
      example: 'A cone has radius 6 cm and height 8 cm. Curved surface area?',
    },
    {
      name: 'Cube and cuboid: diagonal, surface area, small cubes',
      frequency: 'often',
      example: 'Longest rod that fits in a 12 m × 9 m × 8 m room?',
    },
    {
      name: 'Ratio of volumes or surface areas',
      frequency: 'often',
      example: 'Cylinder, cone and sphere of the same radius and height 2r. Ratio of volumes?',
    },
    { name: 'Percentage change in volume or surface area', frequency: 'often', example: 'Radius of a sphere rises 10%. Change in volume?' },
    {
      name: 'Hemisphere and combined solids; water level rise',
      frequency: 'often',
      example: 'A toy is a cone on a hemisphere of radius 7 cm. Total surface area?',
    },
    { name: 'Frustum, prism and pyramid', frequency: 'rare', example: 'Frustum with radii 10 cm and 4 cm, height 8 cm. Volume?' },
  ],
  keyPoints: [
    {
      title: 'Cuboid and cube',
      text: 'Cuboid: volume lbh, total surface 2(lb + bh + hl), lateral surface (four walls) 2h(l + b), diagonal √(l² + b² + h²). Cube of side a: volume a³, surface 6a², diagonal a√3.',
      formula: 'Cuboid diagonal = √(l² + b² + h²),  cube diagonal = a√3',
      example: 'Room 12 × 9 × 8: longest rod = √(144 + 81 + 64) = √289 = **17 m**.',
    },
    {
      title: 'Cylinder',
      text: 'Volume πr²h. Curved surface area (CSA, the side only) is 2πrh. Total surface area (TSA) adds the two circular ends: 2πr(r + h). Hollow pipe with outer radius R and inner radius r: volume π(R² − r²)h.',
      formula: 'V = πr²h,  CSA = 2πrh,  TSA = 2πr(r + h)',
      example: 'r = 7, h = 10: V = 22/7 × 49 × 10 = **1,540**.',
    },
    {
      title: 'Cone',
      text: 'Volume is one third of the cylinder with the same base and height. The slant height l (tip to rim along the side) comes from Pythagoras. When a sector is rolled into a cone, the arc becomes the base circumference and the sector radius becomes the slant height.',
      formula: 'V = 1/3 πr²h,  l = √(r² + h²),  CSA = πrl,  TSA = πr(l + r)',
      example: 'r = 6, h = 8: l = 10, CSA = **60π**.',
    },
    {
      title: 'Sphere and hemisphere',
      text: 'Sphere: volume 4/3 πr³, surface 4πr². Hemisphere: volume 2/3 πr³, curved surface 2πr², total surface 3πr² (the flat circle is added).',
      formula: 'Sphere V = 4/3 πr³,  SA = 4πr²;  hemisphere TSA = 3πr²',
      example: 'Hemisphere r = 7: TSA = 3 × 22/7 × 49 = **462**.',
    },
    {
      title: 'Frustum of a cone',
      text: 'A cone with its top cut off parallel to the base. R and r are the two radii, h the height.',
      formula: 'V = 1/3 πh(R² + r² + Rr),  CSA = π(R + r)l,  l = √(h² + (R − r)²)',
      example: 'R = 10, r = 4, h = 8: V = 1/3 π × 8 × 156 = **416π**.',
    },
    {
      title: 'Prism and pyramid',
      text: 'Prism: volume = base area × height, lateral surface = base perimeter × height. Pyramid: volume = 1/3 × base area × height, lateral surface = 1/2 × base perimeter × slant height.',
      formula: 'Pyramid V = 1/3 × base area × h',
      example: 'Square base 10, height 12: slant = 13, lateral = 1/2 × 40 × 13 = **260**.',
    },
    {
      title: 'Melting and recasting',
      text: 'The volume does not change. Number of small solids = big volume ÷ one small volume. For spheres into spheres this is (R/r)³. For a sphere drawn into a wire, the wire is a long cylinder.',
      formula: 'n = (R/r)³ for spheres',
      example: 'Radius 9 into radius 3: (9/3)³ = **27** balls.',
    },
    {
      title: 'Scaling and percentage change',
      text: 'Multiply every length by k: surface area × k², volume × k³. If every length changes by x%, surface area changes 2x + x²/100 percent. For volume, multiply by (1 + x/100) three times.',
      formula: 'Volume factor = (1 + x/100)³',
      example: 'Radius +10%: 1.1³ = 1.331, volume up **33.1%**; surface up 21%.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'The longest rod in a room',
      figure: {
        viewBox: '0 0 320 220',
        svg: `
<polygon points="48,196 238.8,169 238.8,73" class="d-fill-pink" data-step="3"/>
<polygon points="48,196 192,196 192,100 48,100"/>
<polyline points="48,100 94.8,73 238.8,73 192,100"/>
<polyline points="192,196 238.8,169 238.8,73"/>
<line x1="94.8" y1="169" x2="238.8" y2="169" class="d-dash d-soft"/>
<line x1="94.8" y1="169" x2="94.8" y2="73" class="d-dash d-soft"/>
<line x1="94.8" y1="169" x2="48" y2="196" class="d-dash d-soft"/>
<line x1="48" y1="196" x2="238.8" y2="169" class="d-blue d-dash" data-step="2 3"/>
<line x1="48" y1="196" x2="238.8" y2="73" class="d-red d-thick" data-step="1 4"/>
<text x="120" y="214" text-anchor="middle" data-step="2">12</text>
<text x="223.4" y="194.5" data-step="2">9</text>
<text x="246.8" y="127" data-step="3">8</text>
<text x="178" y="164" text-anchor="middle" class="d-blue" data-step="2 3">15</text>
<text x="118" y="130" text-anchor="middle" class="d-red" data-step="4">17</text>`,
        caption: 'Hidden edges are dashed',
      },
      explain: [
        'The room is 12 m × 9 m × 8 m. The longest rod runs from a bottom corner to the opposite top corner (red).',
        'First cross the floor: floor diagonal = √(12² + 9²) = √225 = 15 m (blue).',
        'The floor diagonal and the 8 m height meet at a right angle, with the rod as the hypotenuse (shaded).',
        'Rod = √(15² + 8²) = √289 = **17 m**. In one go: √(l² + b² + h²).',
      ],
    },
    {
      type: 'diagram',
      title: 'Cone: height, radius and slant make a right triangle',
      figure: {
        viewBox: '0 0 320 210',
        svg: `
<polygon points="150,30 150,142 234,142" class="d-fill" data-step="3"/>
<path d="M66,142 A84,20 0 0 1 234,142" class="d-dash d-soft"/>
<path d="M66,142 A84,20 0 0 0 234,142"/>
<line x1="150" y1="30" x2="67.4" y2="138.4"/>
<line x1="150" y1="30" x2="232.6" y2="138.4" class="d-red d-thick" data-step="3"/>
<line x1="150" y1="30" x2="150" y2="142" class="d-blue d-dash" data-step="1"/>
<line x1="150" y1="142" x2="234" y2="142" class="d-green" data-step="2"/>
<path d="M159,142 L159,133 L150,133" class="d-thin" data-step="2"/>
<circle cx="150" cy="142" r="2.5" class="d-dot"/>
<text x="156" y="108" class="d-blue" data-step="1">h = 8</text>
<text x="192" y="178" text-anchor="middle" class="d-green" data-step="2">r = 6</text>
<text x="204" y="86" class="d-red" data-step="3 4">l = 10</text>`,
        caption: 'Back half of the base is dashed',
      },
      explain: [
        'The height h = 8 goes from the tip straight down to the centre of the base.',
        'The radius r = 6 runs from the centre to the rim, at right angles to the height.',
        'The slant height l is the hypotenuse of that triangle: l = √(6² + 8²) = √100 = 10.',
        'Curved surface = πrl = π × 6 × 10 = **60π cm²**. Volume would use h, not l: 1/3 π × 36 × 8 = 96π.',
      ],
    },
    {
      type: 'diagram',
      title: 'Rolling a sector into a cone',
      figure: {
        viewBox: '0 0 320 200',
        svg: `
<path d="M88,104 L107.2,45 A62,62 0 1 0 107.2,163 Z" class="d-fill"/>
<path d="M107.2,45 A62,62 0 1 0 107.2,163" class="d-blue d-thick" data-step="2"/>
<line x1="88" y1="104" x2="107.2" y2="45" class="d-red d-thick" data-step="1"/>
<line x1="88" y1="104" x2="107.2" y2="163" class="d-red d-thick" data-step="1"/>
<path d="M92.9,88.8 A16,16 0 1 0 92.9,119.2" class="d-thin"/>
<text x="90" y="109" text-anchor="start" class="d-small">216°</text>
<text x="105.5" y="73.7" text-anchor="start" class="d-red" data-step="1">10</text>
<text x="20" y="109" text-anchor="end" class="d-small d-blue" data-step="2">arc</text>
<path d="M152,104 L184,104 M176,98 L184,104 L176,110" class="d-soft"/>
<path d="M195,106 A51,13 0 0 1 297,106" class="d-dash d-soft"/>
<path d="M195,106 A51,13 0 0 0 297,106" class="d-blue d-thick" data-step="2"/>
<line x1="246" y1="38" x2="195.9" y2="103.5" class="d-red d-thick" data-step="1"/>
<line x1="246" y1="38" x2="296.1" y2="103.5"/>
<line x1="246" y1="38" x2="246" y2="106" class="d-dash" data-step="3"/>
<line x1="246" y1="106" x2="297" y2="106" class="d-green" data-step="2 3"/>
<path d="M254,106 L254,98 L246,98" class="d-thin" data-step="3"/>
<text x="242" y="84" text-anchor="end" data-step="3">h</text>
<text x="271.5" y="140" text-anchor="middle" class="d-green" data-step="2 3">r</text>
<text x="213" y="70.8" text-anchor="end" class="d-red" data-step="1">l = 10</text>`,
        caption: 'Sector of radius 10 and angle 216°',
      },
      explain: [
        'Roll the sector up until its two straight edges meet. The sector radius 10 becomes the slant height: l = 10.',
        'The arc becomes the rim of the base: 216/360 × 2π × 10 = 12π = 2πr, so r = 6.',
        'The height comes from the right triangle: h = √(10² − 6²) = √64 = 8.',
        'Volume = 1/3 × π × 6² × 8 = **96π**. Shortcut: r = θ/360 × R = 3/5 × 10.',
      ],
    },
  ],
  comparisons: [
    {
      title: 'Cylinder vs cone vs sphere',
      items: ['Cylinder', 'Cone', 'Sphere', 'Hemisphere'],
      rows: [
        { aspect: 'Volume', values: ['πr²h', '1/3 πr²h', '4/3 πr³', '2/3 πr³'], key: true },
        { aspect: 'Curved surface', values: ['2πrh', 'πrl', '4πr²', '2πr²'] },
        { aspect: 'Total surface', values: ['2πr(r + h)', 'πr(l + r)', '4πr²', '3πr²'] },
        { aspect: 'Same r, h = 2r: volume', values: ['2πr³ (ratio 3)', '2/3 πr³ (ratio 1)', '4/3 πr³ (ratio 2)', '2/3 πr³ (ratio 1)'] },
      ],
      reveal:
        'A cone is one third of its cylinder. A sphere that fits exactly inside a cylinder is two thirds of it. So cylinder : cone : sphere = 3 : 1 : 2.',
      whenToUse: [
        'Pipes, tanks, wells, rollers and coins.',
        'Tents, ice-cream cones, heaps of grain, and a sector rolled up.',
        'Balls, lead shots and bubbles.',
        'Bowls, domes and the base of a toy.',
      ],
    },
    {
      title: 'Cube vs cuboid',
      items: ['Cube (side a)', 'Cuboid (l, b, h)'],
      rows: [
        { aspect: 'Volume', values: ['a³', 'lbh'] },
        { aspect: 'Total surface', values: ['6a²', '2(lb + bh + hl)'] },
        { aspect: 'Lateral surface (4 walls)', values: ['4a²', '2h(l + b)'] },
        { aspect: 'Diagonal (longest rod)', values: ['a√3', '√(l² + b² + h²)'], key: true },
      ],
      reveal: 'A cube is a cuboid with l = b = h = a. Room questions ask for the four walls, so use the lateral surface.',
      whenToUse: ['Dice, boxes of equal sides, and small cubes cut from a block.', 'Rooms, bricks, tanks and boxes.'],
    },
  ],
  shortcuts: [
    {
      pattern: 'Spheres melted into smaller spheres',
      example: 'A solid sphere of radius 9 cm is melted and recast into small spheres of radius 3 cm. How many small spheres are made?',
      options: ['27', '9', '81', '3'],
      answer: '27',
      ladder: [
        { name: 'Standard', steps: ['Big volume = 4/3 π × 729.', 'Small volume = 4/3 π × 27.', 'n = 729 ÷ 27 = 27.'], seconds: 30 },
        { name: 'Shortcut', steps: ['n = (R/r)³ = 3³ = 27.'], seconds: 5 },
        {
          name: 'Option elimination',
          steps: ['Volume goes as the cube of the radius ratio 3.', '9 is only the square and 3 is only the ratio. 27 is the cube.'],
          seconds: 5,
        },
      ],
    },
    {
      pattern: 'Cylinder, cone and sphere of the same size',
      example:
        'A cylinder, a cone and a sphere have the same radius, and the height of the cylinder and cone equals the diameter of the sphere. Ratio of their volumes?',
      options: ['3 : 1 : 2', '1 : 2 : 3', '3 : 2 : 1', '2 : 1 : 3'],
      answer: '3 : 1 : 2',
      ladder: [
        {
          name: 'Standard',
          steps: [
            'Cylinder: πr² × 2r = 2πr³.',
            'Cone: 1/3 × πr² × 2r = 2/3 πr³.',
            'Sphere: 4/3 πr³.',
            'Ratio 2 : 2/3 : 4/3 = 6 : 2 : 4 = 3 : 1 : 2.',
          ],
          seconds: 45,
        },
        { name: 'Shortcut', steps: ['Cone is 1/3 of the cylinder and sphere is 2/3 of it.', '1 : 1/3 : 2/3 = 3 : 1 : 2.'], seconds: 10 },
        {
          name: 'Option elimination',
          steps: ['The cylinder is the biggest and the cone the smallest.', 'Only 3 : 1 : 2 has that order.'],
          seconds: 5,
        },
      ],
    },
    {
      pattern: 'Percentage change in volume',
      example: 'The radius of a sphere is increased by 20%. By what percent does its volume increase?',
      options: ['60%', '72.8%', '44%', '20%'],
      answer: '72.8%',
      ladder: [
        { name: 'Standard', steps: ['Take r = 10: volume ∝ 1,000.', 'New r = 12: volume ∝ 1,728.', 'Increase 728 on 1,000 = 72.8%.'], seconds: 30 },
        { name: 'Shortcut', steps: ['Apply 20% three times: 20 + 20 + 4 = 44.', '44 + 20 + 8.8 = 72.8%.'], seconds: 15 },
        {
          name: 'Option elimination',
          steps: ['Must be more than 3 × 20 = 60%, since the changes compound.', 'Only 72.8% is above 60%.'],
          seconds: 5,
        },
      ],
    },
  ],
  qa: [
    {
      q: 'What stays the same when a solid is melted and recast?',
      a: ['The volume.', 'Surface area usually changes.'],
      tag: 'Asked often',
    },
    {
      q: 'How many spheres of radius r come from one of radius R?',
      a: ['(R/r)³.', 'Radius 6 into radius 2: 27 spheres.'],
      tag: 'Shortcut',
    },
    {
      q: 'Total surface area of a solid hemisphere?',
      a: ['3πr²: curved 2πr² plus the flat circle πr².', 'A hollow bowl has only the curved 2πr².'],
      tag: 'Trap',
    },
    {
      q: 'Slant height of a cone?',
      a: ['l = √(r² + h²).', 'Common triplets: (6, 8, 10), (5, 12, 13), (7, 24, 25).'],
    },
    {
      q: "Radius doubled and height halved: what happens to a cylinder's volume?",
      a: ['πr²h becomes π(2r)²(h/2) = 2πr²h.', 'It doubles.'],
      tag: 'Asked often',
    },
    {
      q: 'Every edge of a cube is doubled. What happens to surface area and volume?',
      a: ['Surface area × 4.', 'Volume × 8.'],
      tag: 'Trap',
    },
    {
      q: 'A sector is rolled into a cone. What becomes what?',
      a: ['Sector radius → slant height of the cone.', 'Arc length → base circumference 2πr.'],
    },
    {
      q: 'Water level rise when a solid is dropped into a cylindrical vessel?',
      a: ['Rise × πR² = volume of the solid.', 'R is the radius of the vessel, not of the solid.'],
      tag: 'Asked often',
    },
    {
      q: 'Volume of a frustum?',
      a: ['1/3 πh(R² + r² + Rr).', 'Think of it as a big cone minus a small cone.'],
    },
    {
      q: 'Cylinder, cone and sphere with the same radius and height 2r: volume ratio?',
      a: ['3 : 1 : 2.', 'Cone is 1/3 and sphere is 2/3 of the cylinder.'],
      tag: 'Shortcut',
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'The total surface area of a cube is 150 cm². What is its volume?',
      options: ['125 cm³', '216 cm³', '100 cm³', '150 cm³'],
      answer: 0,
      explain: '6a² = 150, so a = 5. Volume = 125 cm³.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Find the volume of a cylinder of radius 7 cm and height 10 cm. (Take π = 22/7.)',
      options: ['770 cm³', '1,540 cm³', '3,080 cm³', '1,078 cm³'],
      answer: 1,
      explain: '22/7 × 49 × 10 = 1,540 cm³.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'A cone has base radius 6 cm and height 8 cm. What is its curved surface area?',
      options: ['48π cm²', '96π cm²', '60π cm²', '36π cm²'],
      answer: 2,
      explain: 'l = √(36 + 64) = 10. CSA = π × 6 × 10 = 60π cm².',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'A room is 12 m long, 9 m wide and 8 m high. What is the length of the longest rod that can be placed in it?',
      options: ['17 m', '15 m', '19 m', '16 m'],
      answer: 0,
      explain: '√(144 + 81 + 64) = √289 = 17 m.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A metal sphere of radius 6 cm is melted and drawn into a wire of radius 0.2 cm. How long is the wire?',
      options: ['36 m', '7.2 m', '144 m', '72 m'],
      answer: 3,
      explain:
        'Volume stays the same. Sphere: 4/3 × π × 6³ = 288π cm³. The wire is a long cylinder: π × 0.2² × L = 0.04πL. So 0.04L = 288 and L = 7,200 cm = 72 m.',
      shortcut: 'π cancels: L = 4r³/(3 × 0.04) with r³ = 216.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'What is the total surface area of a solid hemisphere of radius 7 cm? (Take π = 22/7.)',
      options: ['308 cm²', '462 cm²', '616 cm²', '231 cm²'],
      answer: 1,
      explain: '3πr² = 3 × 22/7 × 49 = 462 cm².',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'How many cubes of side 3 cm can be cut from a cuboid measuring 12 cm × 9 cm × 6 cm?',
      options: ['24', '36', '18', '48'],
      answer: 0,
      explain: '(12 × 9 × 6) ÷ 27 = 648 ÷ 27 = 24. Each edge divides by 3 exactly: 4 × 3 × 2 = 24.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        'A sphere of radius 3 cm is dropped into a cylindrical vessel of radius 6 cm that is partly filled with water. By how much does the water level rise?',
      figure: {
        viewBox: '0 0 320 210',
        svg: `
<path d="M96,120 A64,13 0 0 0 224,120 L224,186 A64,13 0 0 1 96,186 Z" class="d-fill-blue"/>
<ellipse cx="160" cy="120" rx="64" ry="13" class="d-blue"/>
<ellipse cx="160" cy="98" rx="64" ry="13" class="d-blue d-dash d-thin"/>
<ellipse cx="160" cy="40" rx="64" ry="13"/>
<line x1="96" y1="40" x2="96" y2="186"/>
<line x1="224" y1="40" x2="224" y2="186"/>
<path d="M96,186 A64,13 0 0 0 224,186"/>
<path d="M96,186 A64,13 0 0 1 224,186" class="d-dash d-soft"/>
<circle cx="160" cy="156" r="30" class="d-fill-pink"/>
<line x1="160" y1="156" x2="190" y2="156" class="d-red"/>
<text x="168" y="150" class="d-small d-red">3</text>
<line x1="160" y1="40" x2="224" y2="40" class="d-green"/>
<circle cx="160" cy="40" r="2.5" class="d-dot"/>
<text x="192" y="23" text-anchor="middle" class="d-small d-green">6 cm</text>
<line x1="236" y1="98" x2="236" y2="120" class="d-red"/>
<text x="242" y="114" class="d-small d-red">rise = ?</text>`,
      },
      options: ['1 cm', '2 cm', '0.5 cm', '1.5 cm'],
      answer: 0,
      explain:
        'The water rises by exactly the volume of the sphere. Sphere: 4/3 × π × 3³ = 36π. The risen layer is a flat cylinder of radius 6: π × 6² × h = 36πh. So 36πh = 36π and h = 1 cm.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A frustum of a cone has end radii 10 cm and 4 cm and height 8 cm. What is its volume?',
      figure: {
        viewBox: '0 0 320 210',
        svg: `
<path d="M60,176 A100,20 0 0 1 260,176" class="d-dash d-soft"/>
<path d="M60,176 A100,20 0 0 0 260,176"/>
<ellipse cx="160" cy="96" rx="40" ry="8"/>
<line x1="60" y1="176" x2="120" y2="96"/>
<line x1="260" y1="176" x2="200" y2="96"/>
<line x1="160" y1="96" x2="160" y2="176" class="d-dash"/>
<circle cx="160" cy="96" r="2.5" class="d-dot"/>
<circle cx="160" cy="176" r="2.5" class="d-dot"/>
<line x1="160" y1="96" x2="200" y2="96" class="d-green"/>
<text x="180" y="82" text-anchor="middle" class="d-small d-green">4 cm</text>
<line x1="160" y1="176" x2="260" y2="176" class="d-blue"/>
<text x="210" y="170" text-anchor="middle" class="d-small d-blue">10 cm</text>
<text x="154" y="141" text-anchor="end" class="d-small">8 cm</text>`,
        caption: 'Volume = ?',
      },
      options: ['312π cm³', '448π cm³', '416π cm³', '520π cm³'],
      answer: 2,
      explain: '1/3 π × 8 × (100 + 16 + 40) = 1/3 π × 8 × 156 = 416π cm³.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The surface area of a sphere is 616 cm². What is its volume? (Take π = 22/7.)',
      options: ['1,386 cm³', '718⅔ cm³', '2,874⅔ cm³', '1,437⅓ cm³'],
      answer: 3,
      explain: '4πr² = 616, so r² = 49 and r = 7. V = 4/3 × 22/7 × 343 = 4,312/3 = 1,437⅓ cm³.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A pyramid has a square base of side 10 cm and a height of 12 cm. What is its lateral surface area?',
      figure: {
        viewBox: '0 0 320 216',
        svg: `
<polygon points="156,37 70,196 190,196" class="d-fill"/>
<polyline points="70,196 190,196 242,166"/>
<line x1="122" y1="166" x2="70" y2="196" class="d-dash d-soft"/>
<line x1="122" y1="166" x2="242" y2="166" class="d-dash d-soft"/>
<line x1="122" y1="166" x2="156" y2="37" class="d-dash d-soft"/>
<line x1="156" y1="37" x2="70" y2="196"/>
<line x1="156" y1="37" x2="190" y2="196"/>
<line x1="156" y1="37" x2="242" y2="166"/>
<line x1="156" y1="37" x2="156" y2="181" class="d-dash"/>
<circle cx="156" cy="181" r="2.5" class="d-dot"/>
<line x1="156" y1="37" x2="130" y2="196" class="d-red d-thick"/>
<text x="130" y="214" text-anchor="middle" class="d-small">10 cm</text>
<text x="162" y="129" class="d-small">12 cm</text>
<text x="131" y="106.5" text-anchor="end" class="d-red">?</text>`,
        caption: 'Slant height (red) = ?',
      },
      options: ['240 cm²', '260 cm²', '400 cm²', '520 cm²'],
      answer: 1,
      explain: 'The slant height runs from the tip to the middle of a base edge, which is 10/2 = 5 cm from the centre. Slant height = √(12² + 5²) = 13. Lateral area = 1/2 × base perimeter × slant height = 1/2 × 40 × 13 = 260 cm².',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'A sector of radius 25 cm and angle 216° is rolled into a cone. What is the volume of the cone?',
      figure: {
        viewBox: '0 0 320 216',
        svg: `
<path d="M150,108 L176.6,26.2 A86,86 0 1 0 176.6,189.8 Z" class="d-fill"/>
<path d="M155.6,90.9 A18,18 0 1 0 155.6,125.1" class="d-thin"/>
<text x="154" y="113" class="d-small">216°</text>
<text x="173.8" y="69.8" text-anchor="start" class="d-small">25 cm</text>`,
        caption: 'Rolled up into a cone: volume = ?',
      },
      options: ['1,200π cm³', '1,500π cm³', '2,250π cm³', '1,800π cm³'],
      answer: 1,
      explain: 'Arc = 216/360 × 50π = 30π = 2πr, so r = 15. l = 25, so h = 20. V = 1/3 π × 225 × 20 = 1,500π cm³.',
      shortcut: 'r = θ/360 × R = 3/5 × 25 = 15; then 15-20-25 is a triplet.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'The radius of a sphere is increased by 10%. By what percent does its volume increase?',
      options: ['21%', '30%', '33.1%', '10%'],
      answer: 2,
      explain: '1.1³ = 1.331, so the volume rises 33.1%.',
      shortcut: '10% twice = 21%; 21 + 10 + 2.1 = 33.1%.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The radii of two cylinders are in the ratio 2 : 3 and their heights in the ratio 5 : 3. What is the ratio of their volumes?',
      options: ['10 : 9', '4 : 9', '20 : 27', '2 : 3'],
      answer: 2,
      explain: 'Volume = πr²h, so the ratio is (2² × 5) : (3² × 3) = 20 : 27. Square the radius ratio, then multiply by the height ratio.',
      shortcut: '4/9 × 5/3 = 20/27.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        'A toy is a cone mounted on a hemisphere of the same radius, 7 cm. The total height of the toy is 31 cm. What is its total surface area? (Take π = 22/7.)',
      figure: {
        viewBox: '0 0 320 200',
        svg: `
<path d="M105,152 A35,35 0 0 0 175,152"/>
<path d="M105,152 A35,8 0 0 0 175,152"/>
<path d="M105,152 A35,8 0 0 1 175,152" class="d-dash d-soft"/>
<line x1="140" y1="32" x2="105" y2="152"/>
<line x1="140" y1="32" x2="175" y2="152"/>
<line x1="140" y1="152" x2="175" y2="152" class="d-green"/>
<circle cx="140" cy="152" r="2.5" class="d-dot"/>
<text x="157.5" y="146" text-anchor="middle" class="d-small d-green">7</text>
<line x1="210" y1="32" x2="210" y2="187" class="d-blue d-thin"/>
<line x1="203" y1="32" x2="217" y2="32" class="d-blue d-thin"/>
<line x1="203" y1="187" x2="217" y2="187" class="d-blue d-thin"/>
<line x1="144" y1="32" x2="198" y2="32" class="d-dash d-soft d-thin"/>
<line x1="144" y1="187" x2="198" y2="187" class="d-dash d-soft d-thin"/>
<text x="220" y="114.5" class="d-blue">31 cm</text>`,
        caption: 'Radius 7 cm. Total surface area = ?',
      },
      options: ['858 cm²', '1,012 cm²', '704 cm²', '770 cm²'],
      answer: 0,
      explain: 'Cone height = 31 − 7 = 24, so l = √(7² + 24²) = 25. The outside is the cone\'s curved surface plus the hemisphere\'s curved surface; the flat circle where they join is hidden. Area = πrl + 2πr² = 22/7 × 7 × (25 + 14) = 22 × 39 = 858 cm².',
      shortcut: 'Take πr out: πr(l + 2r).',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'The volume of a cone is one third of the volume of a cylinder with the same base and height.',
      answer: true,
      explain: '1/3 πr²h against πr²h.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'If every edge of a cube is doubled, its surface area also doubles.',
      answer: false,
      explain: 'Surface area goes with a², so it becomes 4 times. Volume becomes 8 times.',
    },
  ],
};

export default topic;
