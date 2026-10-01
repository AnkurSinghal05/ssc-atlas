import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'time-work',
  title: 'Time and work (with pipes)',
  level: 'intermediate',
  masteryMinutes: 120,
  reviseMinutes: 40,
  priority: 'high',
  weightage: { tier1: 1, tier2: 1.5 },
  tags: ['time and work', 'efficiency', 'LCM method', 'man-days', 'wages', 'pipes and cisterns', 'leak', 'alternate days'],
  summary:
    'Work = efficiency × time. Take the total work as the LCM of the given days, turn each person into units per day, and most questions become one division. Pipes are the same idea, with a leak as negative work.',
  patterns: [
    { name: 'Two or three people working together', frequency: 'most', example: 'A in 10 days, B in 15. Together?' },
    { name: 'Efficiency ratios', frequency: 'most', example: 'A is twice as efficient as B; together 14 days. A alone?' },
    { name: 'Someone leaves or joins midway', frequency: 'often', example: 'A and B work 6 days, then A leaves. B finishes in?' },
    { name: 'Pipes and cisterns with a leak', frequency: 'often', example: 'Fills in 10 h, with a leak in 12 h. Leak empties in?' },
    { name: 'Men, days and hours (MDH)', frequency: 'often', example: '10 men × 8 h × 12 days. 8 men at 6 h take?' },
    { name: 'Wages shared by work done', frequency: 'rare', example: 'A in 10 days, B in 15, paid ₹5,000. A’s share?' },
    { name: 'Alternate days', frequency: 'rare', example: 'A and B work on alternate days starting with A. Days?' },
  ],
  keyPoints: [
    {
      title: 'The LCM (total work) method',
      text: "Take the total work as the LCM of the days given. A person's efficiency is the units of work they do in one day: total ÷ their days. Add efficiencies for people working together.",
      formula: 'time = (total work)/(combined efficiency)',
      example: 'A in 10 days, B in 15: work = 30 units, A = 3, B = 2 per day. Together 30/5 = **6 days**.',
    },
    {
      title: 'Two people together',
      text: 'If A takes a days and B takes b days, together they take ab/(a + b) days. If A and B together take a days and A alone takes b, then B alone takes ab/(b − a).',
      formula: 'together = ab/(a + b)',
      example: 'A 12 days, B 24 days: 288/36 = **8 days**.',
    },
    {
      title: 'Efficiency and time are inversely proportional',
      text: 'If A is twice as efficient as B, A takes half the time. Efficiency ratio 3 : 2 means time ratio 2 : 3.',
      formula: 'efficiency ∝ 1/time',
      example: 'A is twice as fast as B; together 14 days. Work = 3 × 14 = 42 units, A alone = 42/2 = **21 days**.',
    },
    {
      title: 'Man-days (M × D × H)',
      text: 'For the same job, men × days × hours per day stays constant. If the work changes too, divide by the work on each side.',
      formula: 'M₁D₁H₁/W₁ = M₂D₂H₂/W₂',
      example: '10 men × 8 h × 12 days = 960. 8 men at 6 h/day need 960/48 = **20 days**.',
    },
    {
      title: 'Pairs given, all three wanted',
      text: 'If (A + B), (B + C) and (C + A) times are given, adding the three pair rates counts each person twice. Halve the sum to get A + B + C.',
      formula: 'A + B + C = ½ [(A + B) + (B + C) + (C + A)]',
      example: 'Pairs 12, 15, 20 days: LCM 60, rates 5 + 4 + 3 = 12 = 2(A + B + C). All three: 60/6 = **10 days**.',
    },
    {
      title: 'Wages follow the work done',
      text: 'Wages are shared in the ratio of work done. If everyone works the same number of days, that is the ratio of efficiencies.',
      example: 'A 10 days, B 15 days, paid ₹5,000 together: ratio 3 : 2, A gets **₹3,000**.',
    },
    {
      title: 'Pipes and cisterns',
      text: 'A filling pipe does positive work, an emptying pipe or leak does negative work. Use the same LCM method and subtract the outlet.',
      formula: 'net rate = fill rates − empty rates',
      example: 'Fill 20 min, fill 30 min, empty 15 min: LCM 60, rates 3 + 2 − 4 = 1. Tank full in **60 min**.',
    },
    {
      title: 'Leak from delayed filling',
      text: 'A pipe fills a tank in a hours, but with a leak it takes b hours. The leak alone empties the full tank in ab/(b − a) hours.',
      formula: 'leak time = ab/(b − a)',
      example: '10 h, but 12 h with a leak: 120/2 = **60 h**.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'The LCM method: the job as a bar of units',
      figure: {
        viewBox: '0 0 320 190',
        svg: `
<rect x="34" y="24" width="14" height="14" class="d-fill" data-step="2"/>
<rect x="34" y="24" width="14" height="14" class="d-thin" data-step="2"/>
<text x="56" y="36" class="d-small" data-step="2">A: 30/10 = 3 units a day</text>
<rect x="34" y="48" width="14" height="14" class="d-fill-blue" data-step="3"/>
<rect x="34" y="48" width="14" height="14" class="d-thin" data-step="3"/>
<text x="56" y="60" class="d-small" data-step="3">B: 30/15 = 2 units a day</text>
<rect x="25" y="100" width="27" height="30" class="d-fill" data-step="2"/>
<rect x="52" y="100" width="18" height="30" class="d-fill-blue" data-step="3"/>
<rect x="70" y="100" width="27" height="30" class="d-fill" data-step="2"/>
<rect x="97" y="100" width="18" height="30" class="d-fill-blue" data-step="3"/>
<rect x="115" y="100" width="27" height="30" class="d-fill" data-step="2"/>
<rect x="142" y="100" width="18" height="30" class="d-fill-blue" data-step="3"/>
<rect x="160" y="100" width="27" height="30" class="d-fill" data-step="2"/>
<rect x="187" y="100" width="18" height="30" class="d-fill-blue" data-step="3"/>
<rect x="205" y="100" width="27" height="30" class="d-fill" data-step="2"/>
<rect x="232" y="100" width="18" height="30" class="d-fill-blue" data-step="3"/>
<rect x="250" y="100" width="27" height="30" class="d-fill" data-step="2"/>
<rect x="277" y="100" width="18" height="30" class="d-fill-blue" data-step="3"/>
<line x1="34" y1="100" x2="34" y2="130" class="d-thin d-soft"/>
<line x1="43" y1="100" x2="43" y2="130" class="d-thin d-soft"/>
<line x1="52" y1="100" x2="52" y2="130" class="d-thin d-soft"/>
<line x1="61" y1="100" x2="61" y2="130" class="d-thin d-soft"/>
<line x1="79" y1="100" x2="79" y2="130" class="d-thin d-soft"/>
<line x1="88" y1="100" x2="88" y2="130" class="d-thin d-soft"/>
<line x1="97" y1="100" x2="97" y2="130" class="d-thin d-soft"/>
<line x1="106" y1="100" x2="106" y2="130" class="d-thin d-soft"/>
<line x1="124" y1="100" x2="124" y2="130" class="d-thin d-soft"/>
<line x1="133" y1="100" x2="133" y2="130" class="d-thin d-soft"/>
<line x1="142" y1="100" x2="142" y2="130" class="d-thin d-soft"/>
<line x1="151" y1="100" x2="151" y2="130" class="d-thin d-soft"/>
<line x1="169" y1="100" x2="169" y2="130" class="d-thin d-soft"/>
<line x1="178" y1="100" x2="178" y2="130" class="d-thin d-soft"/>
<line x1="187" y1="100" x2="187" y2="130" class="d-thin d-soft"/>
<line x1="196" y1="100" x2="196" y2="130" class="d-thin d-soft"/>
<line x1="214" y1="100" x2="214" y2="130" class="d-thin d-soft"/>
<line x1="223" y1="100" x2="223" y2="130" class="d-thin d-soft"/>
<line x1="232" y1="100" x2="232" y2="130" class="d-thin d-soft"/>
<line x1="241" y1="100" x2="241" y2="130" class="d-thin d-soft"/>
<line x1="259" y1="100" x2="259" y2="130" class="d-thin d-soft"/>
<line x1="268" y1="100" x2="268" y2="130" class="d-thin d-soft"/>
<line x1="277" y1="100" x2="277" y2="130" class="d-thin d-soft"/>
<line x1="286" y1="100" x2="286" y2="130" class="d-thin d-soft"/>
<line x1="70" y1="96" x2="70" y2="134" data-step="4"/>
<line x1="115" y1="96" x2="115" y2="134" data-step="4"/>
<line x1="160" y1="96" x2="160" y2="134" data-step="4"/>
<line x1="205" y1="96" x2="205" y2="134" data-step="4"/>
<line x1="250" y1="96" x2="250" y2="134" data-step="4"/>
<rect x="25" y="100" width="270" height="30" class="d-thick" data-step="1"/>
<text x="160" y="90" text-anchor="middle" data-step="1">whole job = LCM(10, 15) = 30 units</text>
<text x="47.5" y="150" text-anchor="middle" class="d-small" data-step="4">day 1</text>
<text x="92.5" y="150" text-anchor="middle" class="d-small" data-step="4">day 2</text>
<text x="137.5" y="150" text-anchor="middle" class="d-small" data-step="4">day 3</text>
<text x="182.5" y="150" text-anchor="middle" class="d-small" data-step="4">day 4</text>
<text x="227.5" y="150" text-anchor="middle" class="d-small" data-step="4">day 5</text>
<text x="272.5" y="150" text-anchor="middle" class="d-small" data-step="4">day 6</text>
<text x="160" y="178" text-anchor="middle" class="d-red" data-step="4">5 units a day: 30/5 = 6 days</text>`,
        caption: 'Each small cell is 1 unit of work',
      },
      explain: [
        'A takes 10 days and B takes 15. Call the whole job LCM(10, 15) = 30 units.',
        'A does 30/10 = 3 units a day (yellow).',
        'B does 30/15 = 2 units a day (blue).',
        'Together they fill 3 + 2 = 5 units each day, so the bar is full after 30/5 = **6 days**.',
      ],
    },
    {
      type: 'diagram',
      title: 'Pipes: inlets add, outlets subtract',
      figure: {
        viewBox: '0 0 320 215',
        svg: `
<rect x="110" y="135" width="120" height="45" class="d-fill-blue"/>
<path d="M110,70 L110,180 L230,180 L230,70" class="d-thick" data-step="1"/>
<text x="170" y="112" text-anchor="middle" class="d-small" data-step="1">tank = 60 units</text>
<path d="M18,40 L140,40 L140,64" class="d-green" data-step="2"/>
<line x1="140" y1="58" x2="140" y2="80" class="d-green" data-step="2"/><path d="M136.5,73.9 L140,80 L143.5,73.9" class="d-green" data-step="2"/>
<text x="20" y="30" class="d-small d-green" data-step="2">A (20 min): +3</text>
<path d="M302,40 L200,40 L200,64" class="d-green" data-step="2"/>
<line x1="200" y1="58" x2="200" y2="80" class="d-green" data-step="2"/><path d="M196.5,73.9 L200,80 L203.5,73.9" class="d-green" data-step="2"/>
<text x="300" y="30" text-anchor="end" class="d-small d-green" data-step="2">B (30 min): +2</text>
<path d="M110,170 L60,170 L60,184" class="d-red" data-step="3"/>
<line x1="60" y1="180" x2="60" y2="204" class="d-red" data-step="3"/><path d="M56.5,197.9 L60,204 L63.5,197.9" class="d-red" data-step="3"/>
<text x="10" y="150" class="d-small d-red" data-step="3">C (15 min): −4</text>
<text x="170" y="204" text-anchor="middle" class="d-small" data-step="4">net 3 + 2 − 4 = +1 a minute</text>`,
      },
      explain: [
        'Take the tank as LCM(20, 30, 15) = 60 units.',
        'Inlets: A fills 60/20 = 3 units a minute and B fills 60/30 = 2.',
        'The outlet C empties 60/15 = 4 units a minute, so it counts as −4.',
        'Net rate = 3 + 2 − 4 = 1 unit a minute, so the tank is full in 60/1 = **60 minutes**.',
      ],
    },
  ],
  comparisons: [
    {
      title: 'Time and work vs pipes and cisterns',
      items: ['Time and work', 'Pipes and cisterns'],
      rows: [
        { aspect: 'Total work', values: ['The job', 'One full tank'] },
        { aspect: 'Who works', values: ['People or machines', 'Inlet pipes (fill) and outlets or leaks (empty)'] },
        { aspect: 'Can a rate be negative?', values: ['No, everyone adds work', '**Yes**: outlets and leaks subtract'], key: true },
        { aspect: 'Together formula', values: ['ab/(a + b)', 'Two fill pipes: ab/(a + b). One fills in a, one empties in b (b > a): ab/(b − a)'] },
        { aspect: 'Method', values: ['LCM of days as total work', 'LCM of hours or minutes as tank capacity'] },
      ],
      reveal: 'It is one model: rate × time = work. Pipes only add the idea of a negative rate, so always check which pipes empty.',
      whenToUse: ['People, machines, men and days, wages.', 'Tanks, taps, leaks, or any question where something undoes the work.'],
    },
  ],
  shortcuts: [
    {
      pattern: 'Two people working together',
      example: 'A can finish a job in 10 days and B in 15 days. In how many days can they finish it together?',
      options: ['6 days', '12.5 days', '4 days', '25 days'],
      answer: '6 days',
      ladder: [
        {
          name: 'Standard',
          steps: ['A does 1/10 per day, B does 1/15 per day.', 'Together 1/10 + 1/15 = 5/30 = 1/6 per day.', 'Time = 6 days.'],
          seconds: 35,
        },
        { name: 'Shortcut', steps: ['ab/(a + b) = 150/25 = 6 days.'], seconds: 10 },
        {
          name: 'Option elimination',
          steps: [
            'Together is faster than the faster person, so less than 10: drop 12.5 and 25.',
            'Even two copies of A would take 5 days, so the answer is more than 5: drop 4. Only 6 is left.',
          ],
          seconds: 8,
        },
      ],
    },
    {
      pattern: 'Leak found from a delay',
      example: 'A pipe can fill a tank in 10 hours. Because of a leak it takes 12 hours. In how many hours can the leak alone empty the full tank?',
      options: ['60 h', '22 h', '2 h', '120 h'],
      answer: '60 h',
      ladder: [
        {
          name: 'Standard',
          steps: ['Pipe rate 1/10, pipe with leak 1/12.', 'Leak rate = 1/10 − 1/12 = 1/60.', 'Leak empties the tank in 60 h.'],
          seconds: 35,
        },
        { name: 'Shortcut', steps: ['ab/(b − a) = (10 × 12)/(12 − 10) = 60 h.'], seconds: 10 },
        {
          name: 'Option elimination',
          steps: ['Tank = LCM 60 units: pipe 6/h, pipe with leak 5/h, so leak = 1/h.', '60 units ÷ 1 = 60 h.'],
          seconds: 12,
        },
      ],
    },
    {
      pattern: 'Pairs given, all three together',
      example: 'A and B can do a job in 12 days, B and C in 15 days, and C and A in 20 days. In how many days can A, B and C together do it?',
      options: ['8 days', '15 days', '10 days', '47 days'],
      answer: '10 days',
      ladder: [
        {
          name: 'Standard',
          steps: ['2(A + B + C) = 1/12 + 1/15 + 1/20 = 12/60 = 1/5.', 'A + B + C = 1/10 per day.', 'Time = 10 days.'],
          seconds: 45,
        },
        {
          name: 'Shortcut',
          steps: ['Work = LCM(12, 15, 20) = 60 units.', 'Pair rates 5 + 4 + 3 = 12 = twice the team, so team = 6 units per day.', '60/6 = 10 days.'],
          seconds: 20,
        },
        {
          name: 'Formula',
          steps: ['2xyz/(xy + yz + zx) = 2 × 12 × 15 × 20/(180 + 300 + 240).', '= 7,200/720 = 10 days.'],
          seconds: 15,
        },
      ],
    },
  ],
  qa: [
    {
      q: 'What is the LCM method in time and work?',
      a: [
        'Take total work = LCM of the given days.',
        'Efficiency = total ÷ days for each person.',
        'Add efficiencies, then divide the total by the sum.',
      ],
      tag: 'Shortcut',
    },
    {
      q: 'A takes a days and B takes b days. How long together?',
      a: ['ab/(a + b) days.', '10 and 15 days: 150/25 = 6 days.'],
      tag: 'Asked often',
    },
    {
      q: 'A is twice as efficient as B. Does A take twice as many days?',
      a: ['No, A takes half as many days.', 'Efficiency and time are inversely proportional.'],
      tag: 'Trap',
    },
    {
      q: 'How do you handle a leak or an outlet pipe?',
      a: ['Give it a negative rate.', 'Net rate = inlets − outlets.'],
      tag: 'Asked often',
    },
    {
      q: 'A pipe fills a tank in a hours, but takes b hours with a leak. When does the leak empty the tank?',
      a: ['ab/(b − a) hours.', '10 h and 12 h: 120/2 = 60 h.'],
      tag: 'Shortcut',
    },
    {
      q: 'A + B, B + C and C + A times are given. How do you get all three?',
      a: ['Add the three pair rates: that is 2(A + B + C).', 'Halve it for the team rate.'],
    },
    {
      q: 'What stays constant in men-days-hours questions?',
      a: ['M × D × H ÷ W for the same kind of work.', '10 men, 8 h, 12 days = 960 man-hours.'],
    },
    {
      q: 'How are wages split between workers?',
      a: ['In the ratio of work done.', 'Same days worked: ratio of efficiencies. A 10 days, B 15 days: 3 : 2.'],
      tag: 'Trap',
    },
    {
      q: 'A and B work on alternate days, starting with A. How do you solve it?',
      a: ['Treat a 2-day block as one unit of A + B work.', 'Count full blocks, then check the last day or two by hand.'],
    },
    {
      q: 'A and B together take a days; A alone takes b days. How long does B take alone?',
      a: ['ab/(b − a) days.', 'Together 10, A 15: 150/5 = 30 days.'],
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'A can finish a job in 10 days and B in 15 days. In how many days can they finish it together?',
      options: ['12.5 days', '6 days', '8 days', '5 days'],
      answer: 1,
      explain: 'Take the work as LCM(10, 15) = 30 units. A does 30/10 = 3 and B does 30/15 = 2 units a day, 5 together. Time = 30/5 = 6 days.',
      shortcut: 'ab/(a + b) = 150/25 = 6.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'A, B and C can do a job in 12, 24 and 8 days respectively. In how many days can they do it together?',
      options: ['4 days', '5 days', '6 days', '3 days'],
      answer: 0,
      explain: 'Take the work as LCM(12, 24, 8) = 24 units. Rates 24/12 + 24/24 + 24/8 = 2 + 1 + 3 = 6 units a day. 24/6 = 4 days.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A is twice as efficient as B. Together they finish a job in 14 days. How long would A take alone?',
      options: ['28 days', '42 days', '21 days', '18 days'],
      answer: 2,
      explain: 'Efficiencies 2 : 1. Work = 3 × 14 = 42 units. A alone = 42/2 = 21 days.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A and B can do a job in 12 days, B and C in 15 days, and C and A in 20 days. In how many days can A, B and C together finish it?',
      options: ['8 days', '12 days', '9 days', '10 days'],
      answer: 3,
      explain: 'Work = 60 units. Pair rates 5 + 4 + 3 = 12 = 2(A + B + C), so A + B + C = 6. 60/6 = 10 days.',
      shortcut: '2xyz/(xy + yz + zx) = 7,200/720 = 10.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        'A can do a job in 20 days and B in 30 days. They work together for 6 days, then A leaves. In how many more days will B finish the job?',
      options: ['12 days', '15 days', '18 days', '10 days'],
      answer: 1,
      explain: 'Work = LCM(20, 30) = 60 units, A = 3, B = 2 units a day. In 6 days together: 6 × 5 = 30 units. Left 30 units, B takes 30/2 = 15 days.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Pipe A fills a tank in 6 hours and pipe B fills it in 8 hours. If both are opened together, how long will they take to fill it?',
      options: ['3 3/7 hours', '7 hours', '3 1/2 hours', '4 hours'],
      answer: 0,
      explain: 'Tank = LCM(6, 8) = 24 units. Rates 24/6 + 24/8 = 4 + 3 = 7 units an hour. 24/7 = 3 3/7 hours.',
      shortcut: 'ab/(a + b) = 48/14 = 24/7.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        'A pipe can fill a tank in 10 hours. Because of a leak at the bottom, it takes 12 hours. In how many hours can the leak alone empty the full tank?',
      options: ['50 hours', '120 hours', '60 hours', '22 hours'],
      answer: 2,
      explain: 'Leak rate = 1/10 − 1/12 = 1/60. The leak empties the tank in 60 hours.',
      shortcut: 'ab/(b − a) = 120/2 = 60.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        'Pipes A and B can fill a tank in 20 and 30 minutes. Pipe C can empty it in 15 minutes. If all three are opened together, how long will the empty tank take to fill?',
      options: ['30 minutes', '45 minutes', '50 minutes', '60 minutes'],
      answer: 3,
      explain: 'Tank = LCM(20, 30, 15) = 60 units. A fills 3, B fills 2 and C empties 4 units a minute. Net rate = 3 + 2 − 4 = 1 unit a minute, so full in 60 minutes.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: '10 men working 8 hours a day finish a job in 12 days. In how many days will 8 men working 6 hours a day finish the same job?',
      options: ['16 days', '20 days', '18 days', '24 days'],
      answer: 1,
      explain: '10 × 8 × 12 = 8 × 6 × D, so D = 960/48 = 20 days.',
      shortcut: 'M₁D₁H₁ = M₂D₂H₂.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A alone can do a job in 15 days. A and B together can do it in 10 days. How long will B take alone?',
      options: ['25 days', '20 days', '30 days', '35 days'],
      answer: 2,
      explain: 'B = 1/10 − 1/15 = 1/30 per day, so 30 days.',
      shortcut: 'ab/(b − a) = 150/5 = 30.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'A is three times as fast as B and takes 40 days less than B to finish a job. In how many days can they finish it together?',
      options: ['15 days', '20 days', '12 days', '18 days'],
      answer: 0,
      explain: 'Times are t and 3t, so 3t − t = 40 gives t = 20. A = 20 days, B = 60 days. Together 1/20 + 1/60 = 1/15, so 15 days.',
      shortcut: 'Efficiency 3 : 1, time 1 : 3. Difference 2 parts = 40, so A = 20 and B = 60 days. Work 60 units at 3 + 1 = 4 per day = 15 days.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: "A can do a job in 10 days and B in 15 days. Working together, they are paid ₹5,000. What is A's share?",
      options: ['₹2,500', '₹2,000', '₹3,500', '₹3,000'],
      answer: 3,
      explain: 'Work = 30 units, so A does 3 and B does 2 units a day. They work the same days, so pay is split 3 : 2. A gets 3/5 × 5,000 = ₹3,000.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        'Two pipes can fill a tank in 12 and 15 minutes. Both are opened together, and after 3 minutes the first pipe is closed. How much more time will the second pipe take to fill the tank?',
      options: ['8 min 30 s', '8 min 15 s', '9 min', '7 min 45 s'],
      answer: 1,
      explain: 'Tank = LCM(12, 15) = 60 units, rates 5 and 4 units a minute. In 3 minutes together: 3 × 9 = 27 units. Left 33 units at 4 units a minute = 33/4 = 8.25 min = 8 min 15 s.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        'A can do a job in 10 days and B in 15 days. They work on alternate days, starting with A. In how many days will the job be finished?',
      options: ['11 days', '12 days', '13 days', '6 days'],
      answer: 1,
      explain: 'Work = 30 units, A = 3 and B = 2 units a day. Each 2-day block (A then B) does 3 + 2 = 5 units. 30/5 = 6 blocks = 12 days, and the work ends exactly on day 12.',
      shortcut: 'Check the day before: after 11 days only 25 + 3 = 28 units are done, so 12 days.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A is 50% more efficient than B. B alone can finish a job in 30 days. In how many days can A and B finish it together?',
      options: ['15 days', '12 days', '18 days', '10 days'],
      answer: 1,
      explain: 'Efficiency A : B = 150 : 100 = 3 : 2. Work = B\'s rate × B\'s days = 2 × 30 = 60 units. Together they do 3 + 2 = 5 units a day, so 60/5 = 12 days.',
      shortcut: 'A alone takes 30 × 2/3 = 20 days. Together: 20 × 30/(20 + 30) = 12 days.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'A can do a job in 20 days and B in 30 days. They start together, but A leaves 5 days before the job is finished. In how many days is the job finished?',
      options: ['12 days', '15 days', '14 days', '17 days'],
      answer: 1,
      explain: 'Work = 60 units, A = 3, B = 2 units a day. In the last 5 days only B works: 5 × 2 = 10 units. The other 50 units are done together at 5 a day: 10 days. Total = 10 + 5 = 15 days.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: '3 men, or 4 women, or 6 children can finish a job in 20 days. In how many days will 1 man, 2 women and 3 children finish it together?',
      options: ['12 days', '16 days', '15 days', '18 days'],
      answer: 2,
      explain:
        'One man alone takes 3 × 20 = 60 days, one woman 4 × 20 = 80 days and one child 6 × 20 = 120 days. Take the job as LCM(60, 80, 120) = 240 units. A man does 4, a woman 3 and a child 2 units a day. The team does 4 + 2 × 3 + 3 × 2 = 16 units a day, so 240/16 = 15 days.',
      shortcut: '3 men = 4 women = 6 children, so 1 man = 2 children and 1 woman = 1.5 children. Team = 2 + 3 + 3 = 8 children; 6 children take 20 days, so 8 take 20 × 6/8 = 15 days.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        '20 men working 6 hours a day lay 120 m of a road in 8 days. How many men are needed to lay 240 m of the road in 10 days, working 8 hours a day?',
      options: ['20', '30', '24', '32'],
      answer: 2,
      explain:
        'The work changes, so use M₁D₁H₁/W₁ = M₂D₂H₂/W₂. Left side: 20 × 8 × 6/120 = 8. Right side: M × 10 × 8/240 = M/3. So M/3 = 8 and M = 24 men.',
      shortcut: 'Start from 20 men and scale: double the road (× 2), more days (× 8/10), more hours (× 6/8). 20 × 2 × 8/10 × 6/8 = 24.',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'If A is twice as efficient as B, then A takes twice as many days as B to finish the same job.',
      answer: false,
      explain: 'Efficiency and time are inversely proportional, so A takes half as many days.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'A leak can be treated as a pipe with a negative rate: subtract its rate from the filling rate.',
      answer: true,
      explain: 'Net rate = inlets − outlets. A leak is just an outlet.',
    },
  ],
};

export default topic;
