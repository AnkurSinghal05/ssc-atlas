import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'speed-distance',
  title: 'Time, speed and distance',
  level: 'intermediate',
  masteryMinutes: 120,
  reviseMinutes: 40,
  priority: 'high',
  weightage: { tier1: 1, tier2: 1.5 },
  tags: ['speed', 'distance', 'km/h to m/s', 'average speed', 'relative speed', 'late and early', 'chase', 'trains', 'boats'],
  summary:
    'Distance = speed × time. Convert units first, use 2xy/(x + y) for equal distances, and add or subtract speeds for things moving towards or after each other.',
  patterns: [
    { name: 'Average speed for equal distances', frequency: 'most', example: '40 km/h one way, 60 km/h back. Average speed?' },
    {
      name: 'Relative speed (meeting and overtaking)',
      frequency: 'most',
      example: 'Two cars start towards each other 300 km apart. When do they meet?',
    },
    {
      name: 'Late and early (same distance, two speeds)',
      frequency: 'often',
      example: 'At 4 km/h he is 10 min late; at 5 km/h, 5 min early. Distance?',
    },
    { name: 'Speed ratio and time ratio', frequency: 'often', example: 'Walking at 3/4 of his speed he is 20 min late. Usual time?' },
    { name: 'Unit conversion', frequency: 'rare', example: '72 km/h in m/s?' },
  ],
  keyPoints: [
    {
      title: 'The one equation',
      text: 'Distance = speed × time. Keep units matched: km with hours, metres with seconds.',
      formula: 'D = S × T',
      example: '360 km in 6 h: speed = **60 km/h**.',
    },
    {
      title: 'km/h and m/s',
      text: 'To go from km/h to m/s multiply by 5/18. From m/s to km/h multiply by 18/5. Handy pairs: 18 ↔ 5, 36 ↔ 10, 54 ↔ 15, 72 ↔ 20, 90 ↔ 25.',
      formula: 'km/h × 5/18 = m/s',
      example: '72 km/h × 5/18 = **20 m/s**.',
    },
    {
      title: 'Average speed for equal distances',
      text: 'Average speed = total distance ÷ total time, never the plain average of speeds. For two equal distances at x and y, it is 2xy/(x + y).',
      formula: 'average speed = 2xy/(x + y)',
      example: '40 km/h there, 60 km/h back: 4,800/100 = **48 km/h**.',
    },
    {
      title: 'Average speed for equal times',
      text: 'If you travel equal times at x and y, the average speed is the plain average (x + y)/2.',
      formula: 'average speed = (x + y)/2',
      example: '1 h at 40, 1 h at 60: 100 km in 2 h = **50 km/h**.',
    },
    {
      title: 'Relative speed',
      text: 'Two bodies moving towards each other close the gap at the sum of their speeds. Moving the same way, the faster one gains at the difference.',
      formula: 'opposite: S₁ + S₂; same: S₁ − S₂',
      example: '300 km apart, 40 and 60 km/h towards each other: 300/100 = **3 h**.',
    },
    {
      title: 'Constant distance: speed and time are inverse',
      text: 'If speed becomes a/b of usual, time becomes b/a of usual. The change in time gives the usual time.',
      formula: 'S₁ × T₁ = S₂ × T₂',
      example: 'At 4/5 speed, time is 5/4 of usual. Late by 10 min = 1/4 of usual, so usual = **40 min**.',
    },
    {
      title: 'Late at one speed, early at another',
      text: 'Distance = product of speeds ÷ difference of speeds × total time gap. The time gap is late + early (in hours).',
      formula: 'D = S₁S₂/(S₂ − S₁) × (t₁ + t₂)',
      example: '5 km/h late 7 min, 6 km/h early 5 min: 30/1 × 12/60 = **6 km**.',
    },
    {
      title: 'Trains and boats in one line',
      text: "Trains: distance is the train's length (plus the platform or other train). Boats: downstream = boat + stream, upstream = boat − stream. Both have their own topics.",
      formula: 'stream = (down − up)/2',
      example: '150 m train at 54 km/h (15 m/s) passes a pole in **10 s**.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'Meeting: the gap closes at the sum of the speeds',
      figure: {
        viewBox: '0 0 320 190',
        svg: `
<line x1="30" y1="55" x2="290" y2="55" class="d-soft" data-step="1"/><path d="M284.8,58 L290,55 L284.8,52" class="d-soft" data-step="1"/><path d="M35.2,52 L30,55 L35.2,58" class="d-soft" data-step="1"/>
<text x="160" y="45" text-anchor="middle" data-step="1">300 km</text>
<line x1="20" y1="110" x2="300" y2="110" class="d-thick"/>
<circle cx="30" cy="110" r="4" class="d-dot"/>
<circle cx="290" cy="110" r="4" class="d-dot"/>
<text x="30" y="134" text-anchor="middle">A</text>
<text x="290" y="134" text-anchor="middle">B</text>
<line x1="34" y1="90" x2="74" y2="90" class="d-blue" data-step="2"/><path d="M67.9,93.5 L74,90 L67.9,86.5" class="d-blue" data-step="2"/>
<text x="34" y="80" class="d-blue d-small" data-step="2">40 km/h</text>
<line x1="286" y1="90" x2="246" y2="90" class="d-red" data-step="2"/><path d="M252.1,86.5 L246,90 L252.1,93.5" class="d-red" data-step="2"/>
<text x="286" y="80" text-anchor="end" class="d-red d-small" data-step="2">60 km/h</text>
<line x1="64.7" y1="105" x2="64.7" y2="115" class="d-blue" data-step="3"/>
<text x="64.7" y="130" text-anchor="middle" class="d-small d-blue" data-step="3">1 h</text>
<line x1="238" y1="105" x2="238" y2="115" class="d-red" data-step="3"/>
<text x="238" y="130" text-anchor="middle" class="d-small d-red" data-step="3">1 h</text>
<line x1="99.3" y1="105" x2="99.3" y2="115" class="d-blue" data-step="3"/>
<text x="99.3" y="130" text-anchor="middle" class="d-small d-blue" data-step="3">2 h</text>
<line x1="186" y1="105" x2="186" y2="115" class="d-red" data-step="3"/>
<text x="186" y="130" text-anchor="middle" class="d-small d-red" data-step="3">2 h</text>
<circle cx="134" cy="110" r="5" class="d-dot d-red" data-step="4"/>
<text x="134" y="97" text-anchor="middle" data-step="4">M</text>
<line x1="30" y1="158" x2="134" y2="158" class="d-blue" data-step="4"/><path d="M128.8,161 L134,158 L128.8,155" class="d-blue" data-step="4"/><path d="M35.2,155 L30,158 L35.2,161" class="d-blue" data-step="4"/>
<text x="82" y="178" text-anchor="middle" class="d-blue" data-step="4">120 km</text>
<line x1="134" y1="158" x2="290" y2="158" class="d-red" data-step="4"/><path d="M284.8,161 L290,158 L284.8,155" class="d-red" data-step="4"/><path d="M139.2,155 L134,158 L139.2,161" class="d-red" data-step="4"/>
<text x="212" y="178" text-anchor="middle" class="d-red" data-step="4">180 km</text>`,
        caption: 'Opposite directions: add the speeds',
      },
      explain: [
        'A and B are 300 km apart and start at the same time towards each other.',
        'Every hour A covers 40 km and B covers 60 km, both eating into the same gap.',
        'So the gap shrinks by 40 + 60 = 100 km each hour (see the 1 h and 2 h marks).',
        'Time = 300/100 = **3 h**. A has gone 40 × 3 = 120 km and B 180 km, so they meet at M.',
      ],
    },
    {
      type: 'diagram',
      title: 'Chasing: the gap closes at the difference of the speeds',
      figure: {
        viewBox: '0 0 320 200',
        svg: `
<line x1="290" y1="58" x2="290" y2="145" class="d-dash d-soft" data-step="3"/>
<text x="290" y="50" text-anchor="middle" class="d-small" data-step="3">caught</text>
<circle cx="30" cy="80" r="4" class="d-dot"/>
<line x1="30" y1="80" x2="287" y2="80" class="d-blue"/><path d="M280.9,83.5 L287,80 L280.9,76.5" class="d-blue"/>
<text x="38" y="70" class="d-small d-blue" data-step="2">police, 10 km/h</text>
<text x="180" y="98" text-anchor="middle" class="d-small d-blue" data-step="4">1,000 m</text>
<circle cx="82" cy="130" r="4" class="d-dot"/>
<line x1="82" y1="130" x2="287" y2="130" class="d-red" data-step="4"/><path d="M280.9,133.5 L287,130 L280.9,126.5" class="d-red" data-step="4"/>
<text x="90" y="120" class="d-small d-red" data-step="2">thief, 8 km/h</text>
<text x="196" y="148" text-anchor="middle" class="d-red" data-step="4">800 m</text>
<line x1="30" y1="86" x2="30" y2="172" class="d-dash d-soft" data-step="1"/>
<line x1="82" y1="136" x2="82" y2="172" class="d-dash d-soft" data-step="1"/>
<line x1="30" y1="168" x2="82" y2="168" data-step="1"/><path d="M76.8,171 L82,168 L76.8,165" data-step="1"/><path d="M35.2,165 L30,168 L35.2,171" data-step="1"/>
<text x="56" y="188" text-anchor="middle" data-step="1">200 m</text>
<text x="108" y="186" class="d-small" data-step="2">gap shrinks 10 − 8 = 2 km/h</text>`,
        caption: 'Same direction: subtract the speeds',
      },
      explain: [
        'The thief starts 200 m ahead of the policeman.',
        'Both run the same way, so the gap shrinks only by 10 − 8 = 2 km/h.',
        'Time to close 0.2 km at 2 km/h = 0.2/2 = 0.1 h (6 minutes).',
        'In 0.1 h the thief runs 8 × 0.1 = 0.8 km = **800 m**; the policeman runs 1,000 m.',
      ],
    },
  ],
  comparisons: [
    {
      title: 'Relative speed: same direction vs opposite direction',
      items: ['Same direction', 'Opposite direction'],
      rows: [
        { aspect: 'Relative speed', values: ['**S₁ − S₂**', '**S₁ + S₂**'], key: true },
        {
          aspect: 'Typical question',
          values: [
            'Police chases a thief; a fast train overtakes a slow one',
            'Two people walk towards each other; trains cross going opposite ways',
          ],
        },
        { aspect: 'Gap to cover', values: ['Head start between them', 'Distance between them'] },
        { aspect: '50 and 40 km/h', values: ['10 km/h', '90 km/h'] },
        { aspect: 'Two trains 200 m and 150 m', values: ['350 m at 10 km/h = 126 s', '350 m at 90 km/h = 14 s'] },
      ],
      reveal: 'The distance to cover is the same idea in both cases. Only the closing speed changes: subtract when chasing, add when meeting.',
      whenToUse: ['One is catching up with or overtaking the other.', 'They move towards each other, meet or cross.'],
    },
  ],
  shortcuts: [
    {
      pattern: 'Average speed for equal distances',
      example: 'A car goes from A to B at 40 km/h and returns at 60 km/h. What is its average speed for the whole trip?',
      options: ['50 km/h', '48 km/h', '52 km/h', '55 km/h'],
      answer: '48 km/h',
      ladder: [
        {
          name: 'Standard',
          steps: ['Take the distance as 120 km (LCM of 40 and 60).', 'Time = 3 h + 2 h = 5 h for 240 km.', 'Average = 240/5 = 48 km/h.'],
          seconds: 35,
        },
        { name: 'Shortcut', steps: ['2xy/(x + y) = 2 × 40 × 60/100 = 48 km/h.'], seconds: 10 },
        {
          name: 'Option elimination',
          steps: ['More time is spent at the slower speed, so the average is below (40 + 60)/2 = 50.', 'Only 48 is below 50.'],
          seconds: 5,
        },
      ],
    },
    {
      pattern: 'Two trains crossing in opposite directions',
      example: 'Two trains 200 m and 150 m long run at 50 km/h and 40 km/h in opposite directions. How long do they take to cross each other?',
      options: ['14 s', '70 s', '12 s', '126 s'],
      answer: '14 s',
      ladder: [
        {
          name: 'Standard',
          steps: ['50 km/h = 125/9 m/s, 40 km/h = 100/9 m/s.', 'Relative speed = 225/9 = 25 m/s.', 'Time = (200 + 150)/25 = 14 s.'],
          seconds: 45,
        },
        { name: 'Shortcut', steps: ['Add first, convert once: 90 × 5/18 = 25 m/s.', '350/25 = 14 s.'], seconds: 15 },
        {
          name: 'Option elimination',
          steps: ['126 s uses the same-direction speed of 10 km/h: wrong for opposite directions.', '350 m must divide by 25 m/s: 14 s.'],
          seconds: 10,
        },
      ],
    },
    {
      pattern: 'Late at one speed, early at another',
      example: 'Walking at 5 km/h a man is 7 minutes late. Walking at 6 km/h he is 5 minutes early. How far is his office?',
      options: ['5 km', '6 km', '7.2 km', '4 km'],
      answer: '6 km',
      ladder: [
        {
          name: 'Standard',
          steps: ['D/5 − D/6 = (7 + 5)/60 h.', 'D/30 = 1/5, so D = 6 km.'],
          seconds: 40,
        },
        { name: 'Shortcut', steps: ['S₁S₂/(S₂ − S₁) × time gap = 30/1 × 12/60 = 6 km.'], seconds: 15 },
        {
          name: 'Put values',
          steps: ['Try 6 km: at 5 km/h 72 min, at 6 km/h 60 min.', 'Gap 12 min = 7 + 5. It fits.'],
          seconds: 15,
        },
      ],
    },
  ],
  qa: [
    {
      q: 'How do you convert km/h to m/s and back?',
      a: ['km/h to m/s: × 5/18.', 'm/s to km/h: × 18/5.', '54 km/h = 15 m/s.'],
      tag: 'Asked often',
    },
    {
      q: 'Is the average of 40 and 60 km/h over equal distances 50 km/h?',
      a: ['No. Average speed = total distance ÷ total time.', 'Equal distances: 2xy/(x + y) = 48 km/h.'],
      tag: 'Trap',
    },
    {
      q: 'When is the average speed exactly (x + y)/2?',
      a: ['When equal times are spent at each speed.', '1 h at 40 and 1 h at 60: 50 km/h.'],
      tag: 'Trap',
    },
    {
      q: 'Average speed for three equal distances at x, y and z?',
      a: ['3xyz/(xy + yz + zx).', '10, 20 and 60 km/h: 36,000/2,000 = 18 km/h.'],
      tag: 'Shortcut',
    },
    {
      q: 'Two bodies move towards each other. What is the relative speed?',
      a: ['The sum of their speeds.', 'Same direction: the difference.'],
      tag: 'Asked often',
    },
    {
      q: 'A policeman chases a thief who is d metres ahead. How long until he catches him?',
      a: ['Time = d ÷ (police speed − thief speed).', 'Use the difference, since they run the same way.'],
    },
    {
      q: 'Speed drops to 3/4 of usual and the man is 20 minutes late. What is his usual time?',
      a: ['Time becomes 4/3 of usual, so extra = 1/3 of usual.', '1/3 of usual = 20 min, so usual = 60 min.'],
      tag: 'Shortcut',
    },
    {
      q: 'Late at S₁, early at S₂. What is the distance?',
      a: ['D = S₁S₂/(S₂ − S₁) × (late + early).', 'Put the time gap in hours.'],
      tag: 'Shortcut',
    },
    {
      q: 'What distance does a train cover when it crosses a pole? A platform?',
      a: ['Pole: its own length.', 'Platform: its own length + the platform length.'],
    },
    {
      q: 'Downstream 15 km/h, upstream 9 km/h. What are the boat and stream speeds?',
      a: ['Boat = (15 + 9)/2 = 12 km/h.', 'Stream = (15 − 9)/2 = 3 km/h.'],
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'A speed of 72 km/h is equal to:',
      options: ['25 m/s', '20 m/s', '18 m/s', '15 m/s'],
      answer: 1,
      explain: '72 × 5/18 = 20 m/s.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'A speed of 15 m/s is equal to:',
      options: ['50 km/h', '45 km/h', '54 km/h', '60 km/h'],
      answer: 2,
      explain: '15 × 18/5 = 54 km/h.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'A car goes from A to B at 40 km/h and comes back at 60 km/h. What is its average speed for the whole journey?',
      options: ['48 km/h', '50 km/h', '45 km/h', '52 km/h'],
      answer: 0,
      explain: 'Equal distances: 2 × 40 × 60/(40 + 60) = 4,800/100 = 48 km/h.',
      shortcut: 'It must be below the plain average 50.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A man cycles to his office at 30 km/h and returns at 20 km/h. What is his average speed?',
      options: ['25 km/h', '26 km/h', '22 km/h', '24 km/h'],
      answer: 3,
      explain: '2 × 30 × 20/(30 + 20) = 1,200/50 = 24 km/h.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A person covers three equal distances at 10 km/h, 20 km/h and 60 km/h. What is his average speed?',
      options: ['30 km/h', '18 km/h', '20 km/h', '15 km/h'],
      answer: 1,
      explain: 'Take each part as 60 km. Times 6 + 3 + 1 = 10 h for 180 km. Average = 18 km/h.',
      shortcut: '3xyz/(xy + yz + zx) = 36,000/2,000 = 18.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        'Two towns are 300 km apart. Two cars start from them at the same time towards each other at 40 km/h and 60 km/h. After how long do they meet?',
      options: ['2.5 h', '3.5 h', '3 h', '4 h'],
      answer: 2,
      explain: 'Relative speed = 40 + 60 = 100 km/h. Time = 300/100 = 3 h.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        'A thief is spotted by a policeman 200 m away. The thief runs at 8 km/h and the policeman chases at 10 km/h. How far will the thief have run before he is caught?',
      options: ['1 km', '600 m', '900 m', '800 m'],
      answer: 3,
      explain: 'Relative speed = 2 km/h. Time = 0.2/2 = 0.1 h. Thief runs 8 × 0.1 = 0.8 km = 800 m.',
      shortcut: 'Speeds 8 : 10, so the thief runs 8/(10 − 8) × 200 = 800 m.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Walking at 4/5 of his usual speed, a man reaches his office 10 minutes late. What is his usual time to reach the office?',
      options: ['40 min', '50 min', '30 min', '45 min'],
      answer: 0,
      explain: 'At 4/5 speed, time is 5/4 of usual. Extra 1/4 of usual = 10 min, so usual = 40 min.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Walking at 5 km/h, a man reaches his office 7 minutes late. Walking at 6 km/h, he reaches 5 minutes early. How far is his office?',
      options: ['5 km', '7.2 km', '6 km', '4.5 km'],
      answer: 2,
      explain: 'D/5 − D/6 = 12/60 h, so D/30 = 1/5 and D = 6 km.',
      shortcut: 'S₁S₂/(S₂ − S₁) × gap = 30 × 12/60 = 6 km.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A 120 m long train running at 54 km/h crosses a 180 m long platform. How long does it take?',
      options: ['15 s', '20 s', '8 s', '12 s'],
      answer: 1,
      explain: '54 km/h = 15 m/s. Distance = 120 + 180 = 300 m. Time = 300/15 = 20 s.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'A boat goes downstream at 15 km/h and upstream at 9 km/h. What is the speed of the stream?',
      options: ['6 km/h', '12 km/h', '3 km/h', '4 km/h'],
      answer: 2,
      explain: 'Stream = (downstream − upstream)/2 = (15 − 9)/2 = 3 km/h.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        'Two trains 200 m and 150 m long run at 50 km/h and 40 km/h in opposite directions on parallel tracks. How long do they take to cross each other?',
      options: ['14 s', '126 s', '12 s', '16 s'],
      answer: 0,
      explain: 'Relative speed = 90 km/h = 25 m/s. Distance = 350 m. Time = 350/25 = 14 s.',
      shortcut: 'Add the speeds first, then convert once.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        'A man covers a journey in 5 hours. He travels the first half of the distance at 4 km/h and the second half at 6 km/h. What is the total distance?',
      options: ['20 km', '25 km', '30 km', '24 km'],
      answer: 3,
      explain: 'D/8 + D/12 = 5, so 5D/24 = 5 and D = 24 km.',
      shortcut: 'Average speed = 2 × 4 × 6/10 = 4.8 km/h; 4.8 × 5 = 24 km.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        'A car leaves a point at 40 km/h. One hour later, a second car leaves the same point on the same road at 50 km/h. How far from the start will the second car catch the first?',
      options: ['160 km', '200 km', '240 km', '180 km'],
      answer: 1,
      explain: 'Head start = 40 km. Gap closes at 10 km/h, so 4 h. Second car covers 50 × 4 = 200 km.',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'To convert a speed from km/h to m/s, multiply it by 18/5.',
      answer: false,
      explain: 'km/h to m/s is × 5/18. The factor 18/5 goes from m/s to km/h.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'If a car travels for equal times at 40 km/h and 60 km/h, its average speed is 50 km/h.',
      answer: true,
      explain: 'Equal times: in 2 h it covers 40 + 60 = 100 km, so 50 km/h. The 2xy/(x + y) rule is for equal distances.',
    },
  ],
};

export default topic;
