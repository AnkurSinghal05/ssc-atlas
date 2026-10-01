import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'boats-streams',
  title: 'Boats and streams',
  level: 'beginner',
  masteryMinutes: 45,
  reviseMinutes: 15,
  priority: 'medium',
  tags: ['boats', 'streams', 'upstream', 'downstream', 'still water', 'current', 'round trip'],
  summary:
    "The stream helps the boat one way and slows it the other. Downstream = B + S, upstream = B − S. Half their sum is the boat's speed and half their difference is the stream's.",
  patterns: [
    {
      name: 'Boat and stream speed from downstream and upstream',
      frequency: 'most',
      example: 'A boat goes 30 km downstream in 2 h and 18 km upstream in 2 h. Speed of the stream?',
    },
    { name: 'Round trip: time or distance', frequency: 'most', example: 'Boat 10 km/h, stream 2 km/h, round trip takes 5 h. How far is the place?' },
    {
      name: 'Upstream takes k times as long',
      frequency: 'often',
      example: 'Rowing up takes twice as long as rowing down. Ratio of boat to stream speed?',
    },
    { name: 'Two trips, two equations', frequency: 'often', example: '30 km up and 44 km down in 10 h; 40 km up and 55 km down in 13 h. Speeds?' },
    {
      name: 'Distances in the same time',
      frequency: 'often',
      example: 'A boat goes 26 km down and 14 km up in the same time. Boat 10 km/h. Stream?',
    },
    { name: 'Average speed of a round trip', frequency: 'rare', example: 'Boat 12 km/h, stream 3 km/h. Average speed for the round trip?' },
  ],
  keyPoints: [
    {
      title: 'Downstream and upstream speed',
      text: 'B is the boat\'s speed in still water, S the stream\'s speed. "With the current" is downstream, "against the current" is upstream.',
      formula: 'D = B + S,  U = B − S',
      example: 'B = 12, S = 3: downstream **15 km/h**, upstream **9 km/h**.',
    },
    {
      title: 'Boat and stream from D and U',
      text: 'Add the two speeds and halve for the boat. Subtract and halve for the stream.',
      formula: 'B = (D + U)/2,  S = (D − U)/2',
      example: 'D = 15, U = 9: B = 24/2 = **12 km/h**, S = 6/2 = **3 km/h**.',
    },
    {
      title: 'Always turn distance and time into speed first',
      text: 'Most questions give a distance and a time each way. Divide to get D and U, then use the halves.',
      example: '30 km down in 2 h: D = 15. 18 km up in 2 h: U = 9. S = **3 km/h**.',
    },
    {
      title: 'Upstream takes k times as long',
      text: 'Same distance, so speeds are in the inverse ratio of times: D = kU. That gives B + S = k(B − S).',
      formula: 'B : S = (k + 1) : (k − 1)',
      example: 'Twice as long upstream: B : S = 3 : 1. If B = 18, S = **6 km/h**.',
    },
    {
      title: 'Round trip to a place d km away',
      text: 'Total time = d/(B + S) + d/(B − S). Solve for d directly with the formula.',
      formula: 'd = (T × (B² − S²))/(2B)',
      example: 'B = 10, S = 2, T = 5 h: d = 5 × 96/20 = **24 km**.',
    },
    {
      title: 'Distances in the same time',
      text: 'In equal times, distances are in the ratio of speeds: x km down and y km up means D : U = x : y.',
      example: 'B = 10, 26 km down and 14 km up: (10 + S) : (10 − S) = 13 : 7, so **S = 3 km/h**.',
    },
    {
      title: 'Average speed of a round trip',
      text: 'The round trip covers equal distances, so use 2DU/(D + U). It simplifies to (B² − S²)/B, always less than B.',
      formula: 'average = (B² − S²)/B',
      example: 'B = 12, S = 3: 135/12 = **11.25 km/h**.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'With the stream and against it',
      figure: {
        viewBox: '0 0 320 200',
        svg: `
<rect x="10" y="60" width="300" height="100" class="d-fill-blue"/>
<line x1="10" y1="60" x2="310" y2="60" class="d-blue"/>
<line x1="10" y1="160" x2="310" y2="160" class="d-blue"/>
<line x1="28" y1="112" x2="72" y2="112" class="d-blue d-thin" data-step="2"/><path d="M66.8,115 L72,112 L66.8,109" class="d-blue d-thin" data-step="2"/>
<line x1="222" y1="112" x2="266" y2="112" class="d-blue d-thin" data-step="2"/><path d="M260.8,115 L266,112 L260.8,109" class="d-blue d-thin" data-step="2"/>
<text x="160" y="117" text-anchor="middle" class="d-small d-blue" data-step="2">stream 3 km/h</text>
<path d="M98,70 L142,70 L134,82 L106,82 Z" class="d-fill" data-step="1"/>
<path d="M98,70 L142,70 L134,82 L106,82 Z" data-step="1"/>
<line x1="150" y1="76" x2="200" y2="76" class="d-red d-thick" data-step="3"/><path d="M193.9,79.5 L200,76 L193.9,72.5" class="d-red d-thick" data-step="3"/>
<path d="M178,138 L222,138 L214,150 L186,150 Z" class="d-fill" data-step="1"/>
<path d="M178,138 L222,138 L214,150 L186,150 Z" data-step="1"/>
<line x1="170" y1="144" x2="120" y2="144" class="d-green d-thick" data-step="4"/><path d="M126.1,140.5 L120,144 L126.1,147.5" class="d-green d-thick" data-step="4"/>
<text x="160" y="44" text-anchor="middle" class="d-red" data-step="3">downstream: 12 + 3 = 15 km/h</text>
<text x="160" y="186" text-anchor="middle" class="d-green" data-step="4">upstream: 12 − 3 = 9 km/h</text>
<text x="90" y="81" text-anchor="end" class="d-small" data-step="1">boat 12</text>
<text x="230" y="149" class="d-small" data-step="1">boat 12</text>`,
      },
      explain: [
        'In still water the boat moves at B = 12 km/h.',
        'The stream carries everything on it at S = 3 km/h, left to right.',
        'Going with the stream, the two speeds add: downstream = 12 + 3 = **15 km/h**.',
        'Going against it, the stream pulls back: upstream = 12 − 3 = **9 km/h**.',
      ],
    },
    {
      type: 'diagram',
      title: 'B is halfway between upstream and downstream',
      figure: {
        viewBox: '0 0 320 165',
        svg: `
<line x1="24" y1="120" x2="296" y2="120"/>
<line x1="95" y1="113" x2="95" y2="127" class="d-green" data-step="1"/>
<text x="95" y="146" text-anchor="middle" class="d-green" data-step="1">U = 9</text>
<line x1="225" y1="113" x2="225" y2="127" class="d-red" data-step="1"/>
<text x="225" y="146" text-anchor="middle" class="d-red" data-step="1">D = 15</text>
<circle cx="160" cy="120" r="4.5" class="d-dot" data-step="3"/>
<text x="160" y="146" text-anchor="middle" data-step="3">B = 12</text>
<line x1="95" y1="100" x2="160" y2="100" class="d-blue" data-step="2"/><path d="M154.8,103 L160,100 L154.8,97" class="d-blue" data-step="2"/><path d="M100.2,97 L95,100 L100.2,103" class="d-blue" data-step="2"/>
<text x="127.5" y="92" text-anchor="middle" class="d-blue" data-step="2">S</text>
<line x1="160" y1="100" x2="225" y2="100" class="d-blue" data-step="2"/><path d="M219.8,103 L225,100 L219.8,97" class="d-blue" data-step="2"/><path d="M165.2,97 L160,100 L165.2,103" class="d-blue" data-step="2"/>
<text x="192.5" y="92" text-anchor="middle" class="d-blue" data-step="2">S</text>
<line x1="95" y1="60" x2="95" y2="112" class="d-dash d-soft" data-step="4"/>
<line x1="225" y1="60" x2="225" y2="112" class="d-dash d-soft" data-step="4"/>
<line x1="95" y1="60" x2="225" y2="60" data-step="4"/><path d="M219.8,63 L225,60 L219.8,57" data-step="4"/><path d="M100.2,57 L95,60 L100.2,63" data-step="4"/>
<text x="160" y="50" text-anchor="middle" data-step="4">D − U = 6 = 2S</text>`,
      },
      explain: [
        'Mark the two speeds you can measure: upstream U = 9 and downstream D = 15.',
        'Each is one stream-speed S away from the boat speed B, on opposite sides.',
        'So B sits exactly in the middle: B = (15 + 9)/2 = **12 km/h**.',
        'The whole gap D − U holds two streams: S = (15 − 9)/2 = **3 km/h**.',
      ],
    },
  ],
  comparisons: [
    {
      title: 'Upstream vs downstream',
      items: ['Downstream', 'Upstream'],
      rows: [
        { aspect: 'Direction', values: ['With the current', 'Against the current'] },
        { aspect: 'Speed', values: ['B + S', 'B − S'], key: true },
        { aspect: 'B = 12 km/h, S = 3 km/h', values: ['15 km/h', '9 km/h'] },
        { aspect: 'Time for 45 km', values: ['3 h', '5 h'] },
        { aspect: 'Which one takes longer', values: ['Shorter time', 'Longer time'] },
      ],
      reveal: 'The stream adds to the boat one way and takes away the other. So B = (D + U)/2 and S = (D − U)/2.',
      whenToUse: ['"Along", "with" or "down" the stream.', '"Against", "up" or "into" the stream.'],
    },
  ],
  shortcuts: [
    {
      pattern: 'Stream speed from two trips',
      example: 'A boat goes 30 km downstream in 2 hours and 18 km upstream in 2 hours. What is the speed of the stream?',
      options: ['3 km/h', '6 km/h', '12 km/h', '4 km/h'],
      answer: '3 km/h',
      ladder: [
        { name: 'Standard', steps: ['D = 15, U = 9.', 'B + S = 15 and B − S = 9.', 'Subtract: 2S = 6, so S = 3 km/h.'], seconds: 30 },
        { name: 'Shortcut', steps: ['S = (D − U)/2 = (15 − 9)/2 = 3 km/h.'], seconds: 10 },
        {
          name: 'Option elimination',
          steps: ['12 km/h is the boat, not the stream.', '6 km/h forgets to halve the difference. So 3 km/h.'],
          seconds: 8,
        },
      ],
    },
    {
      pattern: 'Round trip, find the distance',
      example:
        "A boat's speed in still water is 10 km/h and the stream flows at 2 km/h. It goes to a place and comes back in 5 hours. How far is the place?",
      options: ['24 km', '20 km', '25 km', '30 km'],
      answer: '24 km',
      ladder: [
        { name: 'Standard', steps: ['d/12 + d/8 = 5.', 'd × (2 + 3)/24 = 5, so d = 24 km.'], seconds: 40 },
        { name: 'Shortcut', steps: ['d = T(B² − S²)/(2B) = 5 × 96/20 = 24 km.'], seconds: 15 },
        { name: 'Put values', steps: ['24 km: 24/12 + 24/8 = 2 + 3 = 5 h. It fits.'], seconds: 12 },
      ],
    },
    {
      pattern: 'Upstream takes k times as long',
      example:
        'A boat takes twice as long to go upstream as to go the same distance downstream. Its speed in still water is 18 km/h. What is the speed of the stream?',
      options: ['6 km/h', '9 km/h', '4.5 km/h', '3 km/h'],
      answer: '6 km/h',
      ladder: [
        { name: 'Standard', steps: ['Same distance, time ratio 2 : 1, so B + S = 2(B − S).', 'B = 3S, so S = 18/3 = 6 km/h.'], seconds: 30 },
        { name: 'Shortcut', steps: ['B : S = (k + 1) : (k − 1) = 3 : 1.', 'S = 18/3 = 6 km/h.'], seconds: 10 },
        { name: 'Put values', steps: ['S = 6: D = 24, U = 12. U is half of D, so upstream takes twice as long. It fits.'], seconds: 12 },
      ],
    },
  ],
  qa: [
    {
      q: 'Formulas for downstream and upstream speed?',
      a: ['Downstream = B + S.', 'Upstream = B − S.'],
      tag: 'Asked often',
    },
    {
      q: "How do you get the boat's and the stream's speed from D and U?",
      a: ['B = (D + U)/2.', 'S = (D − U)/2.'],
      tag: 'Asked often',
    },
    {
      q: 'D = 16 and U = 10. Is the stream 6 km/h?',
      a: ['No. 6 is the difference D − U.', 'The stream is half of it: 3 km/h.'],
      tag: 'Trap',
    },
    {
      q: 'What does "speed in still water" mean?',
      a: ["The boat's own speed, B.", 'It is the speed with no current at all.'],
    },
    {
      q: 'Upstream takes k times as long as downstream. Ratio B : S?',
      a: ['(k + 1) : (k − 1).', 'Three times as long gives 4 : 2 = 2 : 1.'],
      tag: 'Shortcut',
    },
    {
      q: 'Formula for the distance of a round trip in total time T?',
      a: ['d = T(B² − S²)/(2B).', 'Check with d/(B + S) + d/(B − S) = T.'],
      tag: 'Shortcut',
    },
    {
      q: "Is the average speed of a round trip equal to the boat's speed B?",
      a: ['No. It is (B² − S²)/B, always less than B.', 'More time is spent going slowly upstream.'],
      tag: 'Trap',
    },
    {
      q: 'Two trips with different distances up and down are given. How do you solve?',
      a: ['Let x = 1/U and y = 1/D.', 'Write two linear equations in x and y and eliminate one.'],
    },
    {
      q: 'A boat covers x km down and y km up in the same time. What follows?',
      a: ['D : U = x : y.', 'Put D = B + S and U = B − S.'],
    },
    {
      q: 'How is a swimmer or a man rowing different from a boat?',
      a: ['It is not. His speed in still water plays the role of B.', 'Same formulas.'],
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: "A boat's downstream speed is 20 km/h and its upstream speed is 12 km/h. What is its speed in still water?",
      options: ['4 km/h', '16 km/h', '8 km/h', '14 km/h'],
      answer: 1,
      explain: 'B = (20 + 12)/2 = 16 km/h.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: "A boat's speed in still water is 12 km/h and the stream flows at 3 km/h. How long does it take to go 45 km downstream?",
      options: ['5 h', '4 h', '3 h', '3.75 h'],
      answer: 2,
      explain: 'Downstream speed = 15 km/h. 45/15 = 3 h.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'A man rows 24 km upstream in 6 hours and 20 km downstream in 4 hours. What is the speed of the stream?',
      options: ['1 km/h', '4.5 km/h', '1.5 km/h', '0.5 km/h'],
      answer: 3,
      explain: 'U = 4, D = 5. S = (5 − 4)/2 = 0.5 km/h.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'A swimmer swims 3 km against the current in 1.5 hours and comes back with the current in 1 hour. What is his speed in still water?',
      options: ['2.5 km/h', '2 km/h', '3 km/h', '0.5 km/h'],
      answer: 0,
      explain: 'U = 2, D = 3. B = (3 + 2)/2 = 2.5 km/h.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        "A boat's speed in still water is 15 km/h and the stream flows at 3 km/h. It goes 36 km downstream and returns. How long does the round trip take?",
      options: ['4.8 h', '5.5 h', '5 h', '4.5 h'],
      answer: 2,
      explain: '36/18 + 36/12 = 2 + 3 = 5 h.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        "A boat's speed in still water is 15 km/h and the stream flows at 5 km/h. It goes to a place and back in 6 hours. How far is the place?",
      options: ['45 km', '36 km', '40 km', '50 km'],
      answer: 2,
      explain: 'd/20 + d/10 = 6 gives 3d/20 = 6, so d = 40 km.',
      shortcut: 'd = T(B² − S²)/(2B) = 6 × 200/30 = 40 km.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        "A boat takes 3 times as long to go upstream as to go the same distance downstream. What is the ratio of the boat's speed in still water to the speed of the stream?",
      options: ['3 : 1', '2 : 1', '4 : 1', '3 : 2'],
      answer: 1,
      explain:
        'Same distance, so speeds go inversely as times: D : U = 3 : 1. Take D = 3 and U = 1. Then B = (3 + 1)/2 = 2 and S = (3 − 1)/2 = 1, so B : S = 2 : 1.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'In one hour a boat goes 11 km along the stream and 5 km against the stream. What is its speed in still water?',
      options: ['6 km/h', '3 km/h', '8 km/h', '16 km/h'],
      answer: 2,
      explain: 'D = 11, U = 5. B = (11 + 5)/2 = 8 km/h.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: "A boat's speed in still water is 12 km/h and the stream flows at 3 km/h. What is its average speed for a round trip?",
      options: ['12 km/h', '11 km/h', '10.5 km/h', '11.25 km/h'],
      answer: 3,
      explain: 'D = 15, U = 9. Average = 2 × 15 × 9/(15 + 9) = 270/24 = 11.25 km/h.',
      shortcut: '(B² − S²)/B = 135/12 = 11.25.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        'A man can row at 9 km/h in still water. It takes him twice as long to row upstream as to row the same distance downstream. What is the speed of the stream?',
      options: ['4.5 km/h', '3 km/h', '6 km/h', '2 km/h'],
      answer: 1,
      explain: 'Twice the time for the same distance means D = 2U. So B + S = 2(B − S), which gives B = 3S. With B = 9, S = 9/3 = 3 km/h.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A boat goes 48 km downstream in 4 hours and returns in 6 hours. What is the speed of the stream?',
      options: ['2 km/h', '4 km/h', '10 km/h', '1 km/h'],
      answer: 0,
      explain: 'D = 12, U = 8. S = (12 − 8)/2 = 2 km/h.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        'A boat goes 30 km upstream and 44 km downstream in 10 hours. It goes 40 km upstream and 55 km downstream in 13 hours. What is the speed of the stream?',
      options: ['8 km/h', '3 km/h', '5 km/h', '2.5 km/h'],
      answer: 1,
      explain: 'Let x = 1/U and y = 1/D: 30x + 44y = 10 and 40x + 55y = 13. Multiply the first by 4 and the second by 3: 120x + 176y = 40 and 120x + 165y = 39. Subtract: 11y = 1, so y = 1/11 and D = 11. Then 30x = 10 − 4 = 6, so x = 1/5 and U = 5. S = (11 − 5)/2 = 3 km/h.',
      shortcut: 'Put values: U = 5, D = 11 gives 6 + 4 = 10 h and 8 + 5 = 13 h.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        'A man rows to a place 48 km away and back in 14 hours. He can row 4 km downstream in the same time as 3 km upstream. What is the speed of the stream?',
      options: ['2 km/h', '1.5 km/h', '1 km/h', '0.5 km/h'],
      answer: 2,
      explain: 'In the same time he goes 4 km down and 3 km up, so D : U = 4 : 3. Let D = 4k and U = 3k. Then 48/(4k) + 48/(3k) = 14, so 12/k + 16/k = 28/k = 14 and k = 2. D = 8, U = 6, so S = (8 − 6)/2 = 1 km/h.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        "A boat's speed in still water is 10 km/h. It goes 26 km downstream and 14 km upstream in the same time. What is the speed of the stream?",
      options: ['4 km/h', '2 km/h', '2.5 km/h', '3 km/h'],
      answer: 3,
      explain: '(10 + S)/(10 − S) = 26/14 = 13/7. 70 + 7S = 130 − 13S, so S = 3 km/h.',
      shortcut: 'Sum of distances 40 = 2 × 10 × time, so time = 2 h. D = 13, S = 3.',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: "When a stream is flowing, a boat's downstream speed is always greater than its upstream speed.",
      answer: true,
      explain: 'B + S is greater than B − S whenever S is more than 0.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: "If a boat's downstream and upstream speeds are 16 km/h and 10 km/h, the stream flows at 6 km/h.",
      answer: false,
      explain: 'S = (16 − 10)/2 = 3 km/h. 6 is the difference, not the stream.',
    },
  ],
};

export default topic;
