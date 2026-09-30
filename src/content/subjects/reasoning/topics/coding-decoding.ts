import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'coding-decoding',
  title: 'Coding-decoding',
  level: 'intermediate',
  masteryMinutes: 90,
  reviseMinutes: 30,
  priority: 'high',
  weightage: { tier1: 2, tier2: 2 },
  tags: ['letter shift', 'opposite letters', 'reverse coding', 'position sum', 'substitution', 'code language', 'EJOTY'],
  summary:
    'Line up the word and its code letter by letter, write the positions, and read off the rule: a fixed shift, a growing shift, the opposite letter, a reversal, or a sum of positions. Apply the same rule to the new word.',
  keyPoints: [
    {
      title: 'Write positions under both words',
      text: 'Put each letter and its code letter one above the other and write their positions (A = 1 … Z = 26). The gap between them is the rule. Use EJOTY (E 5, J 10, O 15, T 20, Y 25) to get positions fast.',
      example: 'CAT → DBU: C→D, A→B, T→U, all +1. So DOG → **EPH**.',
    },
    {
      title: 'Shift that grows',
      text: 'If the gaps are +1, +2, +3… or +2, +3, +4…, the shift depends on the place of the letter. Write the gap for each place, then use the same gaps on the new word.',
      example: 'BOOK → CQRO is +1, +2, +3, +4. So WORD → **XQUH**.',
    },
    {
      title: 'Opposite letters add up to 27',
      text: 'If A becomes Z and B becomes Y, each letter is swapped for its opposite. A letter at position n becomes 27 − n. Learn the pairs: AZ, BY, CX, DW, EV, FU, GT, HS, IR, JQ, KP, LO, MN.',
      formula: 'code = 27 − n',
      example: 'LAMP → OZNK. DESK → **WVHP**.',
    },
    {
      title: 'Reversal, then a shift',
      text: 'If the code looks like the word backwards, reverse it first and then look for a shift. Check both orders on the example before you apply them.',
      example: 'MONKEY → shift −1 = LNMJDX → reverse = **XDJMNL**.',
    },
    {
      title: 'Number codes from positions',
      text: 'A word can become its positions written side by side, or their sum. Check the example: 3120 for CAT is 3, 1, 20 joined; 24 would be the sum.',
      formula: 'sum code = sum of letter positions',
      example: 'GOLD = 7 + 15 + 12 + 4 = **38**.',
    },
    {
      title: 'Letter-to-digit codes',
      text: 'When each letter has its own digit (ROSE = 6821), build a small table from the given words. Letters that repeat across words confirm the table.',
      example: 'R 6, O 8, S 2, E 1. From CHAIR = 73456: C 7, H 3, A 4, I 5.',
    },
    {
      title: 'Word substitution and code languages',
      text: 'In "sky is called sea" questions, find the real answer first, then give its code name. In sentence codes, a word common to two sentences has the code common to both.',
      example: 'Fish live in water; water is called air, so the answer is **air**.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'Opposite letters: one table for every code',
      figure: {
        viewBox: '0 0 320 175',
        svg: `
<rect x="12" y="32" width="20" height="130" rx="6" class="d-fill" data-step="3"/>
<rect x="81" y="32" width="20" height="130" rx="6" class="d-fill-green" data-step="4"/>
<rect x="104" y="32" width="20" height="130" rx="6" class="d-fill-green" data-step="4"/>
<rect x="173" y="32" width="20" height="130" rx="6" class="d-fill-green" data-step="4"/>
<rect x="242" y="32" width="20" height="130" rx="6" class="d-fill" data-step="3 4"/>
<rect x="265" y="32" width="20" height="130" rx="6" class="d-fill" data-step="3"/>
<rect x="288" y="32" width="20" height="130" rx="6" class="d-fill" data-step="3"/>
<text x="22" y="46" text-anchor="middle" class="d-small d-red" data-step="2">1</text><text x="22" y="72" text-anchor="middle" data-step="1">A</text>
<line x1="22" y1="80" x2="22" y2="110" class="d-thin d-soft" data-step="1"/>
<text x="22" y="130" text-anchor="middle" data-step="1">Z</text><text x="22" y="154" text-anchor="middle" class="d-small d-red" data-step="2">26</text>
<text x="45" y="46" text-anchor="middle" class="d-small d-soft">2</text><text x="45" y="72" text-anchor="middle" data-step="1">B</text>
<line x1="45" y1="80" x2="45" y2="110" class="d-thin d-soft" data-step="1"/>
<text x="45" y="130" text-anchor="middle" data-step="1">Y</text><text x="45" y="154" text-anchor="middle" class="d-small d-soft">25</text>
<text x="68" y="46" text-anchor="middle" class="d-small d-soft">3</text><text x="68" y="72" text-anchor="middle" data-step="1">C</text>
<line x1="68" y1="80" x2="68" y2="110" class="d-thin d-soft" data-step="1"/>
<text x="68" y="130" text-anchor="middle" data-step="1">X</text><text x="68" y="154" text-anchor="middle" class="d-small d-soft">24</text>
<text x="91" y="46" text-anchor="middle" class="d-small d-soft">4</text><text x="91" y="72" text-anchor="middle" data-step="1">D</text>
<line x1="91" y1="80" x2="91" y2="110" class="d-thin d-soft" data-step="1"/>
<text x="91" y="130" text-anchor="middle" data-step="1">W</text><text x="91" y="154" text-anchor="middle" class="d-small d-soft">23</text>
<text x="114" y="46" text-anchor="middle" class="d-small d-soft">5</text><text x="114" y="72" text-anchor="middle" data-step="1">E</text>
<line x1="114" y1="80" x2="114" y2="110" class="d-thin d-soft" data-step="1"/>
<text x="114" y="130" text-anchor="middle" data-step="1">V</text><text x="114" y="154" text-anchor="middle" class="d-small d-soft">22</text>
<text x="137" y="46" text-anchor="middle" class="d-small d-soft">6</text><text x="137" y="72" text-anchor="middle" data-step="1">F</text>
<line x1="137" y1="80" x2="137" y2="110" class="d-thin d-soft" data-step="1"/>
<text x="137" y="130" text-anchor="middle" data-step="1">U</text><text x="137" y="154" text-anchor="middle" class="d-small d-soft">21</text>
<text x="160" y="46" text-anchor="middle" class="d-small d-soft">7</text><text x="160" y="72" text-anchor="middle" data-step="1">G</text>
<line x1="160" y1="80" x2="160" y2="110" class="d-thin d-soft" data-step="1"/>
<text x="160" y="130" text-anchor="middle" data-step="1">T</text><text x="160" y="154" text-anchor="middle" class="d-small d-soft">20</text>
<text x="183" y="46" text-anchor="middle" class="d-small d-soft">8</text><text x="183" y="72" text-anchor="middle" data-step="1">H</text>
<line x1="183" y1="80" x2="183" y2="110" class="d-thin d-soft" data-step="1"/>
<text x="183" y="130" text-anchor="middle" data-step="1">S</text><text x="183" y="154" text-anchor="middle" class="d-small d-soft">19</text>
<text x="206" y="46" text-anchor="middle" class="d-small d-soft">9</text><text x="206" y="72" text-anchor="middle" data-step="1">I</text>
<line x1="206" y1="80" x2="206" y2="110" class="d-thin d-soft" data-step="1"/>
<text x="206" y="130" text-anchor="middle" data-step="1">R</text><text x="206" y="154" text-anchor="middle" class="d-small d-soft">18</text>
<text x="229" y="46" text-anchor="middle" class="d-small d-soft">10</text><text x="229" y="72" text-anchor="middle" data-step="1">J</text>
<line x1="229" y1="80" x2="229" y2="110" class="d-thin d-soft" data-step="1"/>
<text x="229" y="130" text-anchor="middle" data-step="1">Q</text><text x="229" y="154" text-anchor="middle" class="d-small d-soft">17</text>
<text x="252" y="46" text-anchor="middle" class="d-small d-soft">11</text><text x="252" y="72" text-anchor="middle" data-step="1">K</text>
<line x1="252" y1="80" x2="252" y2="110" class="d-thin d-soft" data-step="1"/>
<text x="252" y="130" text-anchor="middle" data-step="1">P</text><text x="252" y="154" text-anchor="middle" class="d-small d-soft">16</text>
<text x="275" y="46" text-anchor="middle" class="d-small d-soft">12</text><text x="275" y="72" text-anchor="middle" data-step="1">L</text>
<line x1="275" y1="80" x2="275" y2="110" class="d-thin d-soft" data-step="1"/>
<text x="275" y="130" text-anchor="middle" data-step="1">O</text><text x="275" y="154" text-anchor="middle" class="d-small d-soft">15</text>
<text x="298" y="46" text-anchor="middle" class="d-small d-red" data-step="2">13</text><text x="298" y="72" text-anchor="middle" data-step="1">M</text>
<line x1="298" y1="80" x2="298" y2="110" class="d-thin d-soft" data-step="1"/>
<text x="298" y="130" text-anchor="middle" data-step="1">N</text><text x="298" y="154" text-anchor="middle" class="d-small d-red" data-step="2">14</text>`,
      },
      explain: [
        'Write A to M in a row and Z back to N under it. Each column is an opposite pair.',
        'The positions in a column always add to 27: A 1 + Z 26, M 13 + N 14.',
        'LAMP: L → O, A → Z, M → N, P → K. So LAMP is coded **OZNK**.',
        'DESK, read off the same table: D → W, E → V, S → H, K → P. So DESK is **WVHP**.',
      ],
    },
    {
      type: 'diagram',
      title: 'A shift that grows',
      figure: {
        viewBox: '0 0 320 160',
        svg: `
<text x="25" y="46" text-anchor="middle" data-step="1">B</text><text x="25" y="64" text-anchor="middle" class="d-small d-soft" data-step="1">2</text>
<line x1="25" y1="72" x2="25" y2="106" class="d-red" data-step="2"/><polyline points="21,100 25,107 29,100" class="d-red" data-step="2"/>
<text x="31" y="93" class="d-small d-red" data-step="2">+1</text>
<text x="25" y="128" text-anchor="middle" class="d-blue" data-step="2">C</text><text x="25" y="146" text-anchor="middle" class="d-small d-soft" data-step="2">3</text>
<text x="60" y="46" text-anchor="middle" data-step="1">O</text><text x="60" y="64" text-anchor="middle" class="d-small d-soft" data-step="1">15</text>
<line x1="60" y1="72" x2="60" y2="106" class="d-red" data-step="2"/><polyline points="56,100 60,107 64,100" class="d-red" data-step="2"/>
<text x="66" y="93" class="d-small d-red" data-step="2">+2</text>
<text x="60" y="128" text-anchor="middle" class="d-blue" data-step="2">Q</text><text x="60" y="146" text-anchor="middle" class="d-small d-soft" data-step="2">17</text>
<text x="95" y="46" text-anchor="middle" data-step="1">O</text><text x="95" y="64" text-anchor="middle" class="d-small d-soft" data-step="1">15</text>
<line x1="95" y1="72" x2="95" y2="106" class="d-red" data-step="2"/><polyline points="91,100 95,107 99,100" class="d-red" data-step="2"/>
<text x="101" y="93" class="d-small d-red" data-step="2">+3</text>
<text x="95" y="128" text-anchor="middle" class="d-blue" data-step="2">R</text><text x="95" y="146" text-anchor="middle" class="d-small d-soft" data-step="2">18</text>
<text x="130" y="46" text-anchor="middle" data-step="1">K</text><text x="130" y="64" text-anchor="middle" class="d-small d-soft" data-step="1">11</text>
<line x1="130" y1="72" x2="130" y2="106" class="d-red" data-step="2"/><polyline points="126,100 130,107 134,100" class="d-red" data-step="2"/>
<text x="136" y="93" class="d-small d-red" data-step="2">+4</text>
<text x="130" y="128" text-anchor="middle" class="d-blue" data-step="2">O</text><text x="130" y="146" text-anchor="middle" class="d-small d-soft" data-step="2">15</text>
<text x="185" y="46" text-anchor="middle" data-step="3">W</text><text x="185" y="64" text-anchor="middle" class="d-small d-soft" data-step="3">23</text>
<line x1="185" y1="72" x2="185" y2="106" class="d-red" data-step="3"/><polyline points="181,100 185,107 189,100" class="d-red" data-step="3"/>
<text x="191" y="93" class="d-small d-red" data-step="3">+1</text>
<text x="185" y="128" text-anchor="middle" class="d-blue" data-step="4">X</text><text x="185" y="146" text-anchor="middle" class="d-small d-soft" data-step="4">24</text>
<text x="220" y="46" text-anchor="middle" data-step="3">O</text><text x="220" y="64" text-anchor="middle" class="d-small d-soft" data-step="3">15</text>
<line x1="220" y1="72" x2="220" y2="106" class="d-red" data-step="3"/><polyline points="216,100 220,107 224,100" class="d-red" data-step="3"/>
<text x="226" y="93" class="d-small d-red" data-step="3">+2</text>
<text x="220" y="128" text-anchor="middle" class="d-blue" data-step="4">Q</text><text x="220" y="146" text-anchor="middle" class="d-small d-soft" data-step="4">17</text>
<text x="255" y="46" text-anchor="middle" data-step="3">R</text><text x="255" y="64" text-anchor="middle" class="d-small d-soft" data-step="3">18</text>
<line x1="255" y1="72" x2="255" y2="106" class="d-red" data-step="3"/><polyline points="251,100 255,107 259,100" class="d-red" data-step="3"/>
<text x="261" y="93" class="d-small d-red" data-step="3">+3</text>
<text x="255" y="128" text-anchor="middle" class="d-blue" data-step="4">U</text><text x="255" y="146" text-anchor="middle" class="d-small d-soft" data-step="4">21</text>
<text x="290" y="46" text-anchor="middle" data-step="3">D</text><text x="290" y="64" text-anchor="middle" class="d-small d-soft" data-step="3">4</text>
<line x1="290" y1="72" x2="290" y2="106" class="d-red" data-step="3"/><polyline points="286,100 290,107 294,100" class="d-red" data-step="3"/>
<text x="296" y="93" class="d-small d-red" data-step="3">+4</text>
<text x="290" y="128" text-anchor="middle" class="d-blue" data-step="4">H</text><text x="290" y="146" text-anchor="middle" class="d-small d-soft" data-step="4">8</text>
<line x1="157" y1="28" x2="157" y2="150" class="d-dash d-soft"/>`,
        caption: 'BOOK → CQRO, so WORD → ?',
      },
      explain: [
        "Write each letter's position under it: B 2, O 15, O 15, K 11.",
        'Compare with CQRO (3, 17, 18, 15): the shifts are +1, +2, +3, +4, growing by one.',
        'Give WORD (23, 15, 18, 4) the same shifts, place by place.',
        '24, 17, 21, 8 are X, Q, U, H, so WORD is **XQUH**.',
      ],
    },
  ],
  comparisons: [
    {
      title: 'Coding by position vs by shift vs by reverse',
      items: ['By position', 'By shift', 'By reverse'],
      rows: [
        {
          aspect: 'Rule',
          values: ['Letter → its number (A = 1)', 'Letter → letter k steps on', 'Letter → its opposite (27 − n), or word written backwards'],
        },
        {
          aspect: 'How to spot it',
          values: [
            'The code is made of digits',
            'Code letters sit a fixed or growing distance away',
            'A ↔ Z style pairs, or the code reads well from the end',
          ],
          key: true,
        },
        { aspect: 'Example', values: ['CAT → 3120', 'CAT → DBU (+1)', 'LAMP → OZNK (opposites)'] },
        { aspect: 'Check', values: ['Join or add the positions', 'Same gap on every letter, or +1, +2, +3…', 'Each pair adds to 27'] },
      ],
      reveal:
        'All three start the same way: write the positions. A digit code uses the positions directly, a shift adds to them, and the opposite rule subtracts them from 27.',
      whenToUse: [
        'The code is a number, or a mix of digits.',
        'Letters in the code are close to the letters in the word.',
        'Letters near the start of the alphabet become letters near the end, or the code reads backwards.',
      ],
    },
  ],
  shortcuts: [
    {
      pattern: 'Fixed letter shift',
      example: 'In a code, GARDEN is written as HBSEFO. How is FLOWER written?',
      options: ['GMPXFS', 'GMPWFS', 'GLPXFS', 'HMPXFS'],
      answer: 'GMPXFS',
      ladder: [
        {
          name: 'Standard',
          steps: ['Compare every letter: G→H, A→B, R→S, D→E, E→F, N→O. All +1.', 'Shift FLOWER by +1: G, M, P, X, F, S.'],
          seconds: 40,
        },
        { name: 'Shortcut', steps: ['Check two letters only: G→H, A→B, so +1.', 'Write FLOWER +1 = GMPXFS.'], seconds: 20 },
        {
          name: 'Option elimination',
          steps: ['F + 1 = G: HMPXFS is out.', 'L + 1 = M: GLPXFS is out.', 'W + 1 = X: GMPWFS is out. GMPXFS is left.'],
          seconds: 10,
        },
      ],
    },
    {
      pattern: 'Opposite-letter code',
      example: 'If GOLD is written as TLOW, how is SILK written?',
      options: ['HROP', 'HRPO', 'GROP', 'HQOP'],
      answer: 'HROP',
      ladder: [
        {
          name: 'Standard',
          steps: [
            'Write two alphabets, one forwards and one backwards.',
            'G↔T, O↔L, L↔O, D↔W: each letter is its opposite.',
            'Read S, I, L, K across: H, R, O, P.',
          ],
          seconds: 45,
        },
        { name: 'Shortcut', steps: ['G 7 + T 20 = 27, so code = 27 − n.', 'S 19 → 8 = H, I 9 → 18 = R, L 12 → 15 = O, K 11 → 16 = P.'], seconds: 20 },
        {
          name: 'Option elimination',
          steps: ['S ↔ H (pair HS): GROP is out.', 'I ↔ R (pair IR): HQOP is out.', 'L ↔ O comes third: HRPO is out. HROP is left.'],
          seconds: 10,
        },
      ],
    },
    {
      pattern: 'Sentence code language',
      example: '"pit na sa" means "you are good", "na ho pa" means "they are bad" and "ka pa ta" means "bad and ugly". What is the code for "they"?',
      options: ['na', 'pa', 'ho', 'ka'],
      answer: 'ho',
      ladder: [
        {
          name: 'Standard',
          steps: [
            'Sentences 1 and 2 share "are" and the code "na".',
            'Sentences 2 and 3 share "bad" and the code "pa".',
            'Sentence 2 has one word left, "they", and one code left, "ho".',
          ],
          seconds: 45,
        },
        {
          name: 'Shortcut',
          steps: ['"they" appears only in sentence 2.', 'Strike out the codes that sentence 2 shares with the others (na, pa): ho is left.'],
          seconds: 15,
        },
      ],
    },
  ],
  qa: [
    {
      q: 'What is the first step in any letter-coding question?',
      a: ['Write the word and its code one above the other.', 'Write positions and find the gap for each letter.'],
      tag: 'Asked often',
    },
    {
      q: 'How do you get the opposite of a letter fast?',
      a: ['Opposite = 27 − its position.', 'Learn the pairs: AZ, BY, CX, DW, EV, FU, GT, HS, IR, JQ, KP, LO, MN.'],
      tag: 'Shortcut',
    },
    {
      q: 'The shift runs past Z. What do you do?',
      a: ['Wrap round to A: subtract 26 from the position.', 'Y (25) + 3 = 28 → 28 − 26 = 2 = B.'],
      tag: 'Trap',
    },
    {
      q: 'The code looks like the word backwards. What next?',
      a: [
        'Reverse the word first, then check for a shift.',
        'Test the order on the example: reverse then shift can differ from shift then reverse when the shift is not the same for every letter.',
      ],
      tag: 'Trap',
    },
    {
      q: 'CAT = 3120. Is it a sum or a join?',
      a: ['A join: 3, 1, 20 written side by side.', 'The sum would be 24. Always test both on the example.'],
      tag: 'Asked often',
    },
    {
      q: 'How do you crack a sentence code language?',
      a: ['A word shared by two sentences has the code shared by both.', 'Remove known words one by one until each word has one code.'],
    },
    {
      q: 'In "sky is called sea" questions, what is the trap?',
      a: ['You must give the code name, not the real word.', 'Find the real answer first (water), then its new name (air).'],
      tag: 'Trap',
    },
    {
      q: 'Which letters code to themselves under the opposite rule?',
      a: ['None. n = 27 − n has no whole-number answer.', 'M and N are the closest: they swap with each other.'],
    },
    {
      q: 'How do you check a growing shift like +1, +2, +3?',
      a: ['Write the gap under every letter of the example.', 'If the gaps form a sequence, use the same gaps, place by place, on the new word.'],
      tag: 'Shortcut',
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'If CAT is coded as DBU, how is DOG coded?',
      options: ['EPG', 'EPH', 'FPH', 'DPH'],
      answer: 1,
      explain: 'Each letter moves +1: C→D, A→B, T→U. So D→E, O→P, G→H gives EPH.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'If CAT is written as 3120, how is DOG written?',
      options: ['4158', '4157', '4167', '3157'],
      answer: 1,
      explain: 'Each letter is replaced by its position, written side by side: C 3, A 1, T 20. D 4, O 15, G 7 gives 4157.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'If FAT = 27, what is FAITH?',
      options: ['42', '44', '46', '40'],
      answer: 1,
      explain: 'The code is the sum of positions: F 6 + A 1 + T 20 = 27. FAITH = 6 + 1 + 9 + 20 + 8 = 44.',
      shortcut: 'FAITH is FAT plus I (9) and H (8): 27 + 17 = 44.',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'Under the opposite-letter rule (A↔Z, B↔Y and so on), the positions of a letter and its code always add up to 27.',
      answer: true,
      explain: 'A 1 + Z 26 = 27, B 2 + Y 25 = 27, and so on for every pair. So code = 27 − n.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'If LAMP is written as OZNK, how is DESK written?',
      options: ['WUHP', 'WVHP', 'XVHP', 'WVIP'],
      answer: 1,
      explain: 'Each letter is replaced by its opposite (positions add to 27): L↔O, A↔Z, M↔N, P↔K. D→W, E→V, S→H, K→P gives WVHP.',
      shortcut: 'Code = 27 − n. D 4 → 23 W, E 5 → 22 V, S 19 → 8 H, K 11 → 16 P.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'If each letter of a word is moved two places forward in the alphabet, how is PENCIL written?',
      options: ['RGPEJN', 'RGPEKN', 'QFODJM', 'RGPDKN'],
      answer: 1,
      explain: 'P→R, E→G, N→P, C→E, I→K, L→N gives RGPEKN.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'If GOLD = 38, what is SILVER?',
      options: ['83', '85', '87', '80'],
      answer: 1,
      explain: 'The code is the sum of positions: G 7 + O 15 + L 12 + D 4 = 38. SILVER = 19 + 9 + 12 + 22 + 5 + 18 = 85.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        "If 'sky' is called 'sea', 'sea' is called 'water', 'water' is called 'air', 'air' is called 'cloud' and 'cloud' is called 'rain', where do fish live?",
      options: ['Water', 'Air', 'Sea', 'Cloud'],
      answer: 1,
      explain: "Fish live in water, and 'water' is called 'air'. So the answer is air.",
      shortcut: 'Find the real answer first, then read its new name from the list.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'If ROSE is coded as 6821, CHAIR as 73456 and PREACH as 961473, how is SEARCH coded?',
      options: ['214673', '214763', '241673', '214637'],
      answer: 0,
      explain: 'From the given words: R 6, O 8, S 2, E 1, C 7, H 3, A 4, I 5, P 9. SEARCH = S 2, E 1, A 4, R 6, C 7, H 3 = 214673.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        'In a code language, "pit na sa" means "you are good", "na ho pa" means "they are bad" and "ka pa ta" means "bad and ugly". What is the code for "they"?',
      options: ['na', 'pa', 'ho', 'ka'],
      answer: 2,
      explain:
        '"are" is common to sentences 1 and 2, so are = na. "bad" is common to sentences 2 and 3, so bad = pa. The word left in sentence 2 is "they" = ho.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'If BRAIN is written as CSBJO, which word is written as EPPS?',
      options: ['DEER', 'DOOR', 'FQQT', 'DOER'],
      answer: 1,
      explain: 'The code moves each letter +1, so decode by moving each letter −1: E→D, P→O, P→O, S→R gives DOOR.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'If MONKEY is written as XDJMNL, how is TIGER written?',
      options: ['SHFDQ', 'QDFHS', 'QDFGS', 'RDFHS'],
      answer: 1,
      explain: 'Each letter moves −1 (MONKEY → LNMJDX) and the result is written backwards (XDJMNL). TIGER → SHFDQ → reversed QDFHS.',
      shortcut: 'SHFDQ is the trap: it is the shift without the reversal.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'If BOOK is written as CQRO, how is WORD written?',
      options: ['XPUH', 'XQUH', 'XQTH', 'XQUI'],
      answer: 1,
      explain: 'The shift grows with the place: +1, +2, +3, +4 (B→C, O→Q, O→R, K→O). W+1 = X, O+2 = Q, R+3 = U, D+4 = H gives XQUH.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'If FRIEND is written as HUMJTK, how is CANDLE written?',
      options: ['EDRJRL', 'EDRIRL', 'EDQIRL', 'FDRIRL'],
      answer: 1,
      explain:
        'The shifts are +2, +3, +4, +5, +6, +7 (F→H, R→U, I→M, E→J, N→T, D→K). C+2 = E, A+3 = D, N+4 = R, D+5 = I, L+6 = R, E+7 = L gives EDRIRL.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'If COMPUTER is written as RFUVQNPC, how is MEDICINE written?',
      options: ['EOJDJEFM', 'EOJDEJFM', 'MFEJDJOE', 'EOJCJEFM'],
      answer: 0,
      explain:
        'The first and last letters swap places, and the middle letters are written backwards with each moved +1. MEDICINE: E … M, middle EDICIN reversed = NICIDE, +1 = OJDJEF. Code: EOJDJEFM.',
      shortcut: 'The code must start with E and end with M. Then check the second letter: N + 1 = O.',
    },
  ],
};

export default topic;
