import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'trains',
  title: 'Trains',
  level: 'beginner',
  masteryMinutes: 60,
  reviseMinutes: 20,
  priority: 'medium',
  tags: ['trains', 'relative speed', 'platform', 'pole', 'bridge', 'crossing', 'km/h to m/s'],
  summary:
    'A train question is speed × time = distance with two twists: the train has a length, and the other object may be moving. Decide the distance (whose lengths?) and the speed (add or subtract?) before any arithmetic.',
  patterns: [
    { name: 'Crossing a pole, platform or bridge', frequency: 'most', example: 'A 240 m train at 72 km/h crosses a 360 m platform. Time?' },
    {
      name: 'Two trains crossing each other',
      frequency: 'most',
      example: 'Trains of 150 m and 100 m at 60 and 30 km/h in opposite directions. Time to cross?',
    },
    {
      name: 'Length or speed from two crossing times',
      frequency: 'often',
      example: 'A train passes a pole in 15 s and a 150 m platform in 25 s. Its length?',
    },
    {
      name: 'Train passes a moving man or cyclist',
      frequency: 'often',
      example: 'A 250 m train at 50 km/h passes a man walking at 5 km/h the same way. Time?',
    },
    {
      name: 'Trains starting from two stations',
      frequency: 'often',
      example: 'Stations 330 km apart; trains at 60 and 75 km/h, one starting an hour later. When do they meet?',
    },
    { name: 'Times taken after meeting', frequency: 'rare', example: 'After meeting, trains take 9 h and 4 h to finish. Ratio of speeds?' },
    { name: 'Stoppage time per hour', frequency: 'rare', example: 'Speed 54 km/h without stops and 45 km/h with stops. Minutes stopped per hour?' },
  ],
  keyPoints: [
    {
      title: 'km/h and m/s',
      text: 'Lengths are in metres, so speeds are usually changed to m/s. Learn the table: 18 → 5, 36 → 10, 54 → 15, 72 → 20, 90 → 25, 108 → 30.',
      formula: 'km/h × 5/18 = m/s,  m/s × 18/5 = km/h',
      example: '54 km/h = 54 × 5/18 = **15 m/s**.',
    },
    {
      title: 'Crossing a pole, a signal or a standing man',
      text: 'The object has no length, so the train covers only its own length.',
      formula: 't = L/S',
      example: '150 m at 54 km/h (15 m/s): 150/15 = **10 s**.',
    },
    {
      title: 'Crossing a platform, bridge or tunnel',
      text: 'The train covers its own length plus the length of the platform.',
      formula: 't = (L + P)/S',
      example: '240 m train, 360 m platform, 72 km/h (20 m/s): 600/20 = **30 s**.',
    },
    {
      title: 'Two trains, opposite directions',
      text: 'Speeds add. The distance is the sum of both lengths.',
      formula: 't = (L₁ + L₂)/(S₁ + S₂)',
      example: '150 m and 100 m at 60 and 30 km/h: 90 km/h = 25 m/s, 250/25 = **10 s**.',
    },
    {
      title: 'Two trains, same direction',
      text: 'Speeds subtract. The faster train still covers both lengths to pass the slower one completely.',
      formula: 't = (L₁ + L₂)/(S₁ − S₂)',
      example: '200 m and 250 m at 72 and 54 km/h: 18 km/h = 5 m/s, 450/5 = **90 s**.',
    },
    {
      title: 'Passing a moving man or car',
      text: "Treat the man as a pole with a speed: the distance is the train's length, and the speed is relative.",
      example: '250 m train at 50 km/h, man at 5 km/h the same way: 45 km/h = 12.5 m/s, 250/12.5 = **20 s**.',
    },
    {
      title: 'Speeds from times after meeting',
      text: 'Two trains start towards each other at the same time. After meeting they take t₁ and t₂ hours to finish.',
      formula: 'S₁ : S₂ = √t₂ : √t₁',
      example: 'Times 9 h and 4 h after meeting: S₁ : S₂ = 2 : 3.',
    },
    {
      title: 'Stoppage time per hour',
      text: 'Speed drops because the train stands still part of each hour.',
      formula: 'stop minutes per hour = (S − s)/S × 60',
      example: '54 km/h without stops, 45 km/h with: 9/54 × 60 = **10 minutes**.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'Crossing a platform: the train covers its own length too',
      figure: {
        viewBox: '0 0 320 205',
        svg: `
<line x1="8" y1="100" x2="312" y2="100"/>
<rect x="96" y="102" width="120" height="12" class="d-fill-blue"/>
<rect x="96" y="102" width="120" height="12" class="d-thin"/>
<text x="156" y="134" text-anchor="middle" class="d-small d-blue">platform 360 m</text>
<text x="56" y="64" text-anchor="middle" class="d-small d-soft" data-step="1">start</text>
<rect x="16" y="80" width="80" height="18" class="d-fill" data-step="1"/>
<rect x="16" y="80" width="80" height="18" data-step="1"/>
<text x="56" y="94" text-anchor="middle" class="d-small" data-step="1">240 m</text>
<circle cx="96" cy="89" r="3.5" class="d-dot d-red" data-step="1"/>
<text x="256" y="64" text-anchor="middle" class="d-small d-soft" data-step="2">end</text>
<rect x="216" y="80" width="80" height="18" class="d-fill" data-step="2"/>
<rect x="216" y="80" width="80" height="18" data-step="2"/>
<text x="256" y="94" text-anchor="middle" class="d-small" data-step="2">240 m</text>
<circle cx="296" cy="89" r="3.5" class="d-dot d-red" data-step="2"/>
<line x1="96" y1="116" x2="96" y2="150" class="d-dash d-soft" data-step="3"/>
<line x1="296" y1="102" x2="296" y2="150" class="d-dash d-soft" data-step="3"/>
<line x1="96" y1="150" x2="296" y2="150" class="d-red" data-step="3"/><path d="M289.9,153.5 L296,150 L289.9,146.5" class="d-red" data-step="3"/>
<text x="196" y="170" text-anchor="middle" class="d-small d-red" data-step="3">front moves 240 + 360 = 600 m</text>
<text x="196" y="192" text-anchor="middle" data-step="4">600/20 = 30 s</text>`,
        caption: 'Distance = train + platform',
      },
      explain: [
        'Start: the front of the 240 m train (red dot) reaches the platform.',
        'End: the rear of the train leaves the far end, so the whole train is past.',
        'Follow the front: it moved the platform plus the train, 240 + 360 = 600 m.',
        'At 72 km/h = 20 m/s: 600/20 = **30 s**. A pole has no length, so a pole takes only 240/20 = 12 s.',
      ],
    },
    {
      type: 'diagram',
      title: 'Two trains crossing in opposite directions',
      figure: {
        viewBox: '0 0 320 200',
        svg: `
<line x1="8" y1="80" x2="312" y2="80"/>
<line x1="8" y1="125" x2="312" y2="125"/>
<rect x="40" y="62" width="150" height="18" class="d-fill"/>
<rect x="40" y="62" width="150" height="18"/>
<text x="115" y="76" text-anchor="middle" class="d-small">A: 150 m</text>
<rect x="190" y="107" width="100" height="18" class="d-fill-pink"/>
<rect x="190" y="107" width="100" height="18"/>
<text x="240" y="121" text-anchor="middle" class="d-small">B: 100 m</text>
<line x1="190" y1="44" x2="190" y2="140" class="d-dash d-red" data-step="1"/>
<text x="190" y="36" text-anchor="middle" class="d-small d-red" data-step="1">fronts meet</text>
<text x="40" y="52" class="d-small" data-step="2">60 km/h</text>
<line x1="100" y1="48" x2="140" y2="48" data-step="2"/><path d="M133.9,51.5 L140,48 L133.9,44.5" data-step="2"/>
<line x1="292" y1="145" x2="256" y2="145" data-step="2"/><path d="M262.1,141.5 L256,145 L262.1,148.5" data-step="2"/>
<text x="248" y="150" text-anchor="end" class="d-small" data-step="2">30 km/h</text>
<line x1="40" y1="82" x2="40" y2="170" class="d-dash d-soft" data-step="3"/>
<line x1="290" y1="127" x2="290" y2="170" class="d-dash d-soft" data-step="3"/>
<line x1="40" y1="170" x2="290" y2="170" class="d-blue" data-step="3"/><path d="M284.8,173 L290,170 L284.8,167" class="d-blue" data-step="3"/><path d="M45.2,167 L40,170 L45.2,173" class="d-blue" data-step="3"/>
<text x="165" y="190" text-anchor="middle" class="d-blue" data-step="3">150 + 100 = 250 m</text>`,
      },
      explain: [
        'The crossing starts when the two fronts meet at the red line.',
        'They move towards each other, so the speeds add: 60 + 30 = 90 km/h = 25 m/s.',
        'It ends when the two rears pass each other: together they cover 150 + 100 = 250 m.',
        'Time = 250/25 = **10 s**.',
      ],
    },
  ],
  comparisons: [
    {
      title: 'Crossing a pole vs a platform vs another train',
      items: ['A pole or standing man', 'A platform or bridge', 'Another train'],
      rows: [
        { aspect: 'Distance covered', values: ["Train's own length", 'Train + platform', "Both trains' lengths"], key: true },
        { aspect: 'Speed used', values: ["Train's speed", "Train's speed", 'S₁ + S₂ opposite, S₁ − S₂ same way'] },
        { aspect: 'Formula', values: ['L/S', '(L + P)/S', '(L₁ + L₂)/(S₁ ± S₂)'] },
        { aspect: 'Example', values: ['150 m at 54 km/h: 10 s', '200 m + 300 m at 90 km/h: 20 s', '150 m + 100 m, 60 + 30 km/h: 10 s'] },
      ],
      reveal:
        'The front of the train starts at the start of the object; the rear must clear its end. So every length involved is added, and only moving objects change the speed.',
      whenToUse: [
        'Pole, post, tree, signal or a standing person.',
        'Platform, bridge, tunnel or another object that does not move.',
        'Another train, or a moving car or person with a length.',
      ],
    },
  ],
  shortcuts: [
    {
      pattern: 'Crossing a platform',
      example: 'A 240 m train running at 72 km/h crosses a 360 m platform. How long does it take?',
      options: ['30 s', '20 s', '25 s', '33 s'],
      answer: '30 s',
      ladder: [
        { name: 'Standard', steps: ['Distance = 240 + 360 = 600 m.', 'Speed = 72 × 1,000/3,600 = 20 m/s.', 'Time = 600/20 = 30 s.'], seconds: 35 },
        { name: 'Shortcut', steps: ['72 km/h = 20 m/s from the table.', '600/20 = 30 s.'], seconds: 10 },
        {
          name: 'Option elimination',
          steps: ['Pole time alone is 240/20 = 12 s, and the platform is longer than the train.', 'Time must be more than 24 s; 600/20 = 30 s.'],
          seconds: 10,
        },
      ],
    },
    {
      pattern: 'Length from two crossing times',
      example: 'A train passes a pole in 15 s and a 150 m platform in 25 s. What is its length?',
      options: ['225 m', '250 m', '200 m', '300 m'],
      answer: '225 m',
      ladder: [
        { name: 'Standard', steps: ['L = 15S and L + 150 = 25S.', '10S = 150, so S = 15 m/s.', 'L = 15 × 15 = 225 m.'], seconds: 40 },
        { name: 'Shortcut', steps: ['The extra 10 s is for the platform: S = 150/10 = 15 m/s.', 'L = 15 × 15 = 225 m.'], seconds: 12 },
        { name: 'Put values', steps: ['225 m: speed 225/15 = 15 m/s.', '(225 + 150)/15 = 25 s. It fits.'], seconds: 15 },
      ],
    },
    {
      pattern: 'Two trains in opposite directions',
      example: 'Two trains 150 m and 100 m long run at 60 km/h and 30 km/h in opposite directions. How long do they take to cross each other?',
      options: ['10 s', '12 s', '15 s', '30 s'],
      answer: '10 s',
      ladder: [
        { name: 'Standard', steps: ['60 km/h = 50/3 m/s and 30 km/h = 25/3 m/s.', 'Sum = 25 m/s; distance 250 m.', '250/25 = 10 s.'], seconds: 45 },
        { name: 'Shortcut', steps: ['Add first, convert once: 90 × 5/18 = 25 m/s.', '250/25 = 10 s.'], seconds: 12 },
        {
          name: 'Option elimination',
          steps: ['30 s is the same-direction trap: 250/(30 × 5/18) = 30 s.', 'Opposite is faster, so 10 s.'],
          seconds: 10,
        },
      ],
    },
  ],
  qa: [
    {
      q: 'How do you change 72 km/h to m/s in your head?',
      a: ['Multiply by 5/18: 72 ÷ 18 = 4, × 5 = 20 m/s.', 'Multiples of 18 give whole numbers.'],
      tag: 'Shortcut',
    },
    {
      q: 'What distance does a train cover when it crosses a platform?',
      a: ['Its own length plus the platform length.', 'Front enters at one end, rear leaves at the other.'],
      tag: 'Asked often',
    },
    {
      q: 'What distance when it passes a man standing on the platform?',
      a: ['Only its own length.', 'The man has no length.'],
      tag: 'Trap',
    },
    {
      q: 'Two trains cross each other. Which speed do you use?',
      a: ['Opposite directions: S₁ + S₂.', 'Same direction: S₁ − S₂.', 'Distance is L₁ + L₂ in both cases.'],
      tag: 'Asked often',
    },
    {
      q: 'A train passes a pole in t₁ and a platform of length P in t₂. Find its speed and length.',
      a: ['Speed = P/(t₂ − t₁).', 'Length = speed × t₁.'],
      tag: 'Shortcut',
    },
    {
      q: 'A man sits in a moving train. Another train passes him. What distance counts?',
      a: ['Only the length of the other train.', "The man is a point; his train's length does not matter."],
      tag: 'Trap',
    },
    {
      q: 'Formula for speeds when two trains take t₁ and t₂ after meeting?',
      a: ['S₁ : S₂ = √t₂ : √t₁.', 'Note the swap: the faster train takes less time.'],
    },
    {
      q: 'A train runs at 60 km/h without stops and 45 km/h with stops. Minutes stopped per hour?',
      a: ['(60 − 45)/60 × 60 = 15 minutes.'],
    },
    {
      q: 'Two trains start from stations d km apart towards each other at the same time. When do they meet?',
      a: ['After d/(S₁ + S₂) hours.', 'If one starts later, first subtract the distance the other covers alone.'],
    },
    {
      q: 'Do you add the lengths when a train overtakes a slower train?',
      a: ['Yes. The faster train must clear the slower train completely.', 'Distance L₁ + L₂, speed S₁ − S₂.'],
      tag: 'Trap',
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'A 150 m long train is running at 54 km/h. How long does it take to pass a pole?',
      options: ['9 s', '10 s', '12 s', '15 s'],
      answer: 1,
      explain: '54 km/h = 15 m/s. 150/15 = 10 s.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'A 300 m long train passes a pole in 15 seconds. What is its speed in km/h?',
      options: ['60 km/h', '80 km/h', '72 km/h', '54 km/h'],
      answer: 2,
      explain: '300/15 = 20 m/s = 20 × 18/5 = 72 km/h.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'A 200 m long train running at 90 km/h crosses a 300 m long bridge. How long does it take?',
      options: ['12 s', '18 s', '25 s', '20 s'],
      answer: 3,
      explain: '90 km/h = 25 m/s. (200 + 300)/25 = 20 s.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A 250 m long train running at 50 km/h passes a man walking at 5 km/h in the same direction. How long does it take?',
      options: ['18 s', '16.4 s', '20 s', '22 s'],
      answer: 2,
      explain: 'Relative speed = 45 km/h = 12.5 m/s. 250/12.5 = 20 s.',
      shortcut: '16.4 s is the trap: that uses 50 + 5 (opposite directions).',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Two trains 120 m and 180 m long run at 50 km/h and 40 km/h in opposite directions. How long do they take to cross each other?',
      options: ['12 s', '30 s', '10 s', '108 s'],
      answer: 0,
      explain: 'Relative speed = 90 km/h = 25 m/s. 300/25 = 12 s.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        'Two trains 200 m and 250 m long run on parallel tracks in the same direction at 72 km/h and 54 km/h. How long does the faster train take to pass the slower one completely?',
      options: ['15 s', '45 s', '90 s', '60 s'],
      answer: 2,
      explain: 'Relative speed = 18 km/h = 5 m/s. 450/5 = 90 s.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A train passes a pole in 10 seconds and a 180 m long platform in 19 seconds. What is the length of the train?',
      options: ['180 m', '200 m', '220 m', '240 m'],
      answer: 1,
      explain: 'The extra 9 s covers the platform: speed = 180/9 = 20 m/s. Length = 20 × 10 = 200 m.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A train crosses a 150 m platform in 20 seconds and a 250 m platform in 25 seconds. What is the length of the train?',
      options: ['200 m', '250 m', '300 m', '225 m'],
      answer: 1,
      explain: 'Extra 100 m takes 5 s, so speed = 20 m/s. Length = 20 × 20 − 150 = 250 m.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        'Stations A and B are 330 km apart. A train leaves A at 8 am at 60 km/h towards B. Another leaves B at 9 am at 75 km/h towards A. When do they meet?',
      options: ['10:30 am', '10 am', '11:30 am', '11 am'],
      answer: 3,
      explain: 'By 9 am the first covers 60 km, leaving 270 km. 270/(60 + 75) = 2 h after 9 am: 11 am.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Without stoppages a train runs at 54 km/h, and with stoppages at 45 km/h. For how many minutes does it stop per hour?',
      options: ['10 min', '9 min', '12 min', '15 min'],
      answer: 0,
      explain: '(54 − 45)/54 × 60 = 9/54 × 60 = 10 minutes.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A train running at 72 km/h passes a man running at 18 km/h in the same direction in 16 seconds. What is the length of the train?',
      options: ['320 m', '240 m', '288 m', '200 m'],
      answer: 1,
      explain: 'Relative speed = 54 km/h = 15 m/s. Length = 15 × 16 = 240 m.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        'Two trains start at the same time from two stations towards each other. After meeting, they take 9 hours and 4 hours to reach their destinations. The first train runs at 60 km/h. What is the speed of the second train?',
      options: ['40 km/h', '90 km/h', '80 km/h', '135 km/h'],
      answer: 1,
      explain:
        'Say they meet after t hours. The stretch the first train still has left (9 h at S₁) is what the second covered in t h: 9S₁ = tS₂. Likewise 4S₂ = tS₁. Dividing, 9S₁/(4S₂) = S₂/S₁, so S₂² : S₁² = 9 : 4 and S₁ : S₂ = 2 : 3. S₂ = 60 × 3/2 = 90 km/h.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        'A train passes a man standing on a platform in 8 seconds and passes the whole 264 m platform in 20 seconds. What is the length of the train?',
      figure: {
        viewBox: '0 58 320 120',
        svg: `
<line x1="10" y1="110" x2="310" y2="110"/>
<rect x="120" y="112" width="176" height="12" class="d-fill-blue"/>
<rect x="120" y="112" width="176" height="12" class="d-thin"/>
<text x="208" y="145" text-anchor="middle" class="d-blue">264 m</text>
<rect x="26" y="90" width="90" height="18" class="d-fill"/>
<rect x="26" y="90" width="90" height="18"/>
<text x="71" y="104" text-anchor="middle" class="d-small">x m</text>
<line x1="40" y1="76" x2="90" y2="76"/><path d="M83.9,79.5 L90,76 L83.9,72.5"/>
<circle cx="134" cy="80" r="4.5"/>
<line x1="134" y1="85" x2="134" y2="100"/>
<line x1="128" y1="91" x2="140" y2="91"/>
<line x1="134" y1="100" x2="129" y2="111"/>
<line x1="134" y1="100" x2="139" y2="111"/>
<text x="146" y="86" class="d-small">man: 8 s</text>
<text x="208" y="165" text-anchor="middle" class="d-small">whole platform: 20 s</text>`,
      },
      options: ['160 m', '192 m', '176 m', '180 m'],
      answer: 2,
      explain: 'The extra 12 s covers 264 m, so speed = 22 m/s. Length = 22 × 8 = 176 m.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        'A man sitting in a train running at 42 km/h sees a 150 m long train coming from the opposite direction pass him in 6 seconds. What is the speed of the other train?',
      options: ['54 km/h', '45 km/h', '50 km/h', '48 km/h'],
      answer: 3,
      explain: 'Relative speed = 150/6 = 25 m/s = 90 km/h. Other train = 90 − 42 = 48 km/h.',
      shortcut: "Only the 150 m train's length counts; the man is a point.",
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'To cross a platform, a train must cover its own length plus the length of the platform.',
      answer: true,
      explain: 'The rear of the train must clear the far end of the platform.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'Two trains cross each other faster when running in the same direction than in opposite directions.',
      answer: false,
      explain: 'Same direction uses S₁ − S₂, which is slower, so it takes longer.',
    },
  ],
};

export default topic;
