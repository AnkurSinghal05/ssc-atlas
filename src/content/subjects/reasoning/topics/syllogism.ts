import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'syllogism',
  title: 'Syllogism',
  level: 'intermediate',
  masteryMinutes: 90,
  reviseMinutes: 30,
  priority: 'high',
  weightage: { tier1: 1, tier2: 1 },
  tags: ['all', 'some', 'no', 'Venn diagram', 'definite conclusion', 'possibility', 'either or', 'conversion'],
  summary:
    'Treat the statements as true even if they sound silly. Draw the Venn diagram with the least overlap the statements allow. A definite conclusion must hold in every diagram; a possibility needs just one diagram where it holds.',
  keyPoints: [
    {
      title: 'Three statements, three shapes',
      text: '"All A are B": circle A inside circle B. "Some A are B": two circles that overlap. "No A is B": two circles apart. "Some A are not B": part of A lies outside B.',
      example: 'All cats are dogs: draw the cat circle inside the dog circle.',
    },
    {
      title: '"Some" means at least one, maybe all',
      text: '"Some A are B" only promises one A that is B. It does not say that some A are not B. All A being B is still possible.',
      example: 'From "Some boys are tall", "All boys are tall" is a possibility, not a fact.',
    },
    {
      title: 'Turning a statement round',
      text: '"All A are B" gives "Some B are A", never "All B are A". "Some A are B" gives "Some B are A". "No A is B" gives "No B is A". "Some A are not B" cannot be turned round.',
      formula: 'All A→B ⇒ Some B→A,  Some A→B ⇔ Some B→A,  No A→B ⇔ No B→A',
      example: 'All apples are fruits ⇒ Some fruits are apples.',
    },
    {
      title: 'Joining two statements',
      text: 'Link the statements through the common middle term. All + All gives All. All + No gives No. Some + All gives Some. Some + No gives "Some … are not". All + Some and Some + Some give no definite link between the end terms.',
      formula: 'All + All = All,  All + No = No,  Some + All = Some,  Some + No = Some not',
      example: 'Some chairs are tables + No table is a bed ⇒ Some chairs are not beds.',
    },
    {
      title: 'Definite conclusion: true in every diagram',
      text: 'Draw the diagram that gives the conclusion the least chance (keep circles apart unless a statement forces overlap). If the conclusion still holds, it follows.',
      example:
        'All cats are dogs, some dogs are rats: the rat circle can touch dogs outside the cat circle, so "Some cats are rats" does not follow.',
    },
    {
      title: 'Possibility: true in at least one diagram',
      text: 'A conclusion like "All A being B is a possibility" follows unless a statement forbids it. Only a definite "No" or "Some … not" link can block it.',
      example: 'All roses are flowers, some flowers are red: all roses being red is possible, so it follows.',
    },
    {
      title: 'Either I or II',
      text: 'Choose "Either I or II" when the two conclusions have the same two terms, one is "Some A are B" and the other "No A is B" (or "All" and "Some … not"), and neither follows on its own.',
      example: 'Some doctors are teachers, some teachers are singers. I: Some doctors are singers. II: No doctor is a singer. **Either I or II**.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'All, Some, No: three pictures',
      figure: {
        viewBox: '0 0 320 170',
        svg: `
<circle cx="58" cy="90" r="42" class="d-fill-blue" data-step="1 4"/>
<circle cx="52" cy="102" r="20" class="d-fill-pink" data-step="1"/>
<circle cx="58" cy="90" r="42" data-step="1 4"/>
<circle cx="52" cy="102" r="20" data-step="1"/>
<text x="58" y="72" text-anchor="middle">B</text><text x="52" y="108" text-anchor="middle">A</text>
<path d="M164,69.4 A28,28 0 0,1 164,110.6 A28,28 0 0,1 164,69.4 Z" class="d-fill" data-step="2 4"/>
<circle cx="145" cy="90" r="28" data-step="2"/>
<circle cx="183" cy="90" r="28" data-step="2"/>
<text x="135" y="96" text-anchor="middle">A</text><text x="194" y="96" text-anchor="middle">B</text>
<circle cx="244" cy="90" r="20" data-step="3 4"/>
<circle cx="288" cy="90" r="20" data-step="3 4"/>
<text x="244" y="96" text-anchor="middle">A</text><text x="288" y="96" text-anchor="middle">B</text>
<text x="58" y="152" text-anchor="middle" class="d-small">All A are B</text>
<text x="164" y="152" text-anchor="middle" class="d-small">Some A are B</text>
<text x="266" y="152" text-anchor="middle" class="d-small">No A is B</text>`,
      },
      explain: [
        'All A are B: circle A sits fully inside circle B. B may still have members outside A.',
        'Some A are B: the circles overlap. Only the shaded part (at least one member) is promised.',
        'No A is B: the circles stay apart. Nothing can sit in both.',
        'Turning round: "All A are B" gives only **Some B are A**. "Some" and "No" turn round fully.',
      ],
    },
    {
      type: 'diagram',
      title: 'All + Some: draw two diagrams',
      figure: {
        viewBox: '0 0 320 180',
        svg: `
<text x="80" y="30" text-anchor="middle" class="d-small d-soft">Diagram 1</text>
<text x="235" y="30" text-anchor="middle" class="d-small d-soft">Diagram 2</text>
<circle cx="80" cy="105" r="55" data-step="1 4"/>
<circle cx="66" cy="110" r="24" class="d-fill-pink" data-step="1 3"/>
<circle cx="66" cy="110" r="24" data-step="1 3"/>
<circle cx="112" cy="125" r="30" class="d-blue" data-step="2 3 4"/>
<text x="80" y="72" text-anchor="middle">dogs</text>
<text x="62" y="114" text-anchor="middle" class="d-small">cats</text>
<text x="130" y="170" text-anchor="middle" class="d-small d-blue">rats</text>
<circle cx="235" cy="105" r="55" data-step="1 4"/>
<circle cx="212" cy="105" r="22" class="d-fill-pink" data-step="1 3"/>
<circle cx="212" cy="105" r="22" data-step="1 3"/>
<circle cx="280" cy="130" r="24" class="d-blue" data-step="2 3 4"/>
<text x="235" y="72" text-anchor="middle">dogs</text>
<text x="212" y="109" text-anchor="middle" class="d-small">cats</text>
<text x="292" y="170" text-anchor="middle" class="d-small d-blue">rats</text>`,
        caption: 'All cats are dogs. Some dogs are rats.',
      },
      explain: [
        'All cats are dogs: the cat circle goes inside the dog circle, in every diagram.',
        'Some dogs are rats: the rat circle must cut the dog circle, but it may cut it anywhere.',
        'Diagram 1 lets rats touch cats; diagram 2 keeps them apart. Both are valid, so "Some cats are rats" is **not definite**.',
        'Rats cut dogs in both diagrams, so "Some rats are dogs" **follows**. Answer: **Only II**.',
      ],
    },
    {
      type: 'diagram',
      title: 'Some + No gives "Some … are not"',
      figure: {
        viewBox: '0 0 320 180',
        svg: `
<path d="M125,71.7 A45,45 0 0,1 125,128.3 A45,45 0 0,1 125,71.7 Z" class="d-fill" data-step="1 3"/>
<circle cx="90" cy="100" r="45" data-step="1 4"/>
<circle cx="160" cy="100" r="45" data-step="1 2"/>
<circle cx="262" cy="100" r="40" class="d-fill-blue" data-step="2"/>
<circle cx="262" cy="100" r="40" data-step="2"/>
<text x="78" y="106" text-anchor="middle">chairs</text>
<text x="172" y="106" text-anchor="middle">tables</text>
<text x="262" y="106" text-anchor="middle">beds</text>
<text x="125" y="160" text-anchor="middle" class="d-small d-red" data-step="3">not beds</text>
<line x1="125" y1="147" x2="125" y2="118" class="d-red d-thin" data-step="3"/>`,
        caption: 'Some chairs are tables. No table is a bed.',
      },
      explain: [
        'Some chairs are tables: the circles overlap. The shaded part is chairs that are tables.',
        'No table is a bed: the bed circle stays clear of the whole table circle.',
        'The shaded chairs are tables, so they can never be beds: **Some chairs are not beds** is definite.',
        'The other chairs may or may not be beds, so neither "Some chairs are beds" nor "No chair is a bed" is definite.',
      ],
    },
  ],
  comparisons: [
    {
      title: 'All / Some / No and their Venn shapes',
      items: ['All A are B', 'Some A are B', 'No A is B'],
      rows: [
        { aspect: 'Venn shape', values: ['A inside B', 'A and B overlap', 'A and B apart'], key: true },
        { aspect: 'Turned round', values: ['Some B are A', 'Some B are A', 'No B is A'] },
        { aspect: 'What it rules out', values: ['Any A outside B', '"No A is B"', 'Any A that is B'] },
        { aspect: 'Still possible', values: ['All B are A (circles equal)', 'All A are B, all B are A', 'Nothing that puts A in B'] },
      ],
      reveal:
        '"All" and "No" are strong: each rules out a whole region. "Some" is weak: it only promises one shared member, so almost everything else stays possible.',
      whenToUse: [
        'Put A fully inside B, and do not assume B is inside A.',
        'Draw a small overlap only; do not assume more.',
        'Keep the circles apart and use this to block possibilities.',
      ],
    },
    {
      title: 'Definite vs possibility conclusions',
      items: ['Definite conclusion', 'Possibility conclusion'],
      rows: [
        { aspect: 'Question it answers', values: ['Is it true in **every** diagram?', 'Is it true in **at least one** diagram?'], key: true },
        { aspect: 'Wording', values: ['"Some A are B", "No A is B"', '"All A being B is a possibility", "Some A can be B"'] },
        { aspect: 'How to test', values: ['Draw the least-overlap diagram and check', 'Try to draw one diagram where it holds'] },
        { aspect: 'Fails when', values: ['Any one valid diagram breaks it', 'A statement forbids it (a "No" or "Some … not" link)'] },
      ],
      reveal: 'Same diagram, different question. A definite conclusion must survive the worst case; a possibility only needs the best case.',
      whenToUse: ['The conclusion states a fact about A and B.', 'The conclusion says "is a possibility", "can be" or "may be".'],
    },
  ],
  shortcuts: [
    {
      pattern: 'All + Some: does the end link follow?',
      example: 'Statements: All cats are dogs. Some dogs are rats. Conclusions: I. Some cats are rats. II. Some rats are dogs.',
      options: ['Only I follows', 'Only II follows', 'Both I and II follow', 'Neither I nor II follows'],
      answer: 'Only II follows',
      ladder: [
        {
          name: 'Standard',
          steps: [
            'Draw cats inside dogs.',
            'Draw rats overlapping dogs but away from cats: still valid, so I fails.',
            'Rats overlap dogs in every diagram, so II holds.',
          ],
          seconds: 45,
        },
        {
          name: 'Rules',
          steps: [
            'All + Some gives no definite link between cats and rats: I fails.',
            '"Some dogs are rats" turned round is "Some rats are dogs": II follows.',
          ],
          seconds: 15,
        },
        {
          name: 'Option elimination',
          steps: [
            'II is just statement 2 turned round, so it follows.',
            'Only "Only II" and "Both" survive; All + Some never gives a definite link, so Only II.',
          ],
          seconds: 10,
        },
      ],
    },
    {
      pattern: 'Either-or pair',
      example:
        'Statements: Some doctors are teachers. Some teachers are singers. Conclusions: I. Some doctors are singers. II. No doctor is a singer.',
      options: ['Only I follows', 'Only II follows', 'Either I or II follows', 'Neither I nor II follows'],
      answer: 'Either I or II follows',
      ladder: [
        {
          name: 'Standard',
          steps: [
            'Diagram 1: singers touch doctors. I holds.',
            'Diagram 2: singers touch teachers only. II holds.',
            'Neither is certain, but one of them must be true.',
          ],
          seconds: 50,
        },
        {
          name: 'Checklist',
          steps: [
            'Same two terms (doctors, singers)? Yes.',
            'One "Some", one "No"? Yes.',
            'Neither follows alone (Some + Some gives nothing)? Yes. So Either I or II.',
          ],
          seconds: 15,
        },
      ],
    },
    {
      pattern: 'Possibility conclusion',
      example:
        'Statements: All roses are flowers. Some flowers are red. Conclusions: I. All roses being red is a possibility. II. Some roses are red.',
      options: ['Only I follows', 'Only II follows', 'Both I and II follow', 'Neither I nor II follows'],
      answer: 'Only I follows',
      ladder: [
        {
          name: 'Standard',
          steps: [
            'Draw roses inside flowers, red overlapping flowers.',
            'Stretch red to cover the rose circle: nothing breaks, so I holds.',
            'Red can also miss roses, so II is not definite.',
          ],
          seconds: 45,
        },
        {
          name: 'Rules',
          steps: [
            'No "No" or "Some … not" links roses and red, so any possibility about them follows: I.',
            'All + Some gives no definite link: II fails.',
          ],
          seconds: 12,
        },
      ],
    },
  ],
  qa: [
    {
      q: 'Does "All A are B" mean "All B are A"?',
      a: ['No. It only gives "Some B are A".', 'All apples are fruits, but not all fruits are apples.'],
      tag: 'Trap',
    },
    {
      q: 'What does "Some A are B" promise?',
      a: ['At least one A is B.', 'It does not say some A are not B; all A being B is still possible.'],
      tag: 'Trap',
    },
    {
      q: 'All + Some between the middle term: what follows about the ends?',
      a: ['Nothing definite.', 'All cats are dogs + Some dogs are rats: cats and rats may or may not meet.'],
      tag: 'Asked often',
    },
    {
      q: 'Some + No: what follows?',
      a: ['"Some A are not C", taken from the "Some" side.', 'Some chairs are tables + No table is a bed ⇒ Some chairs are not beds.'],
      tag: 'Shortcut',
    },
    {
      q: 'When is the answer "Either I or II"?',
      a: ['Both conclusions use the same two terms.', 'One is "Some", the other "No" (or "All" vs "Some … not").', 'Neither follows by itself.'],
      tag: 'Asked often',
    },
    {
      q: 'I follows definitely and II is its opposite. Is it "Either I or II"?',
      a: ['No. The answer is "Only I follows".', 'Either-or is only for pairs where neither is definite.'],
      tag: 'Trap',
    },
    {
      q: 'When does a possibility conclusion fail?',
      a: ['When a statement forbids it.', 'All A are B + No B is C: "Some A being C is a possibility" fails.'],
    },
    {
      q: 'What is the least-overlap diagram?',
      a: ['The diagram that keeps circles apart unless a statement forces them together.', 'If a conclusion holds even there, it is definite.'],
      tag: 'Shortcut',
    },
    {
      q: 'The statements are against common sense. What do you do?',
      a: ['Take them as true anyway.', 'Judge only from the statements, never from real-world facts.'],
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Statements: All cats are dogs. All dogs are rats. Conclusions: I. All cats are rats. II. Some rats are cats.',
      options: ['Only I follows', 'Only II follows', 'Both I and II follow', 'Neither I nor II follows'],
      answer: 2,
      explain: 'Cats sit inside dogs, and dogs inside rats, so all cats are rats (I). Turning I round gives "Some rats are cats" (II).',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Statement: All apples are fruits. Conclusions: I. Some fruits are apples. II. All fruits are apples.',
      options: ['Only I follows', 'Only II follows', 'Both I and II follow', 'Neither I nor II follows'],
      answer: 0,
      explain: '"All A are B" turns round to "Some B are A", so I follows. It never gives "All B are A", so II does not.',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'From "Some A are B", the conclusion "Some B are A" always follows.',
      answer: true,
      explain: 'The overlap is shared by both circles. If at least one A is B, that member is a B that is A.',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'From "All A are B", the conclusion "All B are A" always follows.',
      answer: false,
      explain: 'A can sit inside a bigger B circle. Only "Some B are A" follows.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Statements: All cats are dogs. Some dogs are rats. Conclusions: I. Some cats are rats. II. Some rats are dogs.',
      options: ['Only I follows', 'Only II follows', 'Both I and II follow', 'Neither I nor II follows'],
      answer: 1,
      explain: 'The rat circle can overlap dogs outside the cat circle, so I is not definite. II is statement 2 turned round, so it follows.',
      shortcut: 'All + Some gives no definite link between the end terms.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Statements: No pen is a book. All books are copies. Conclusions: I. No copy is a pen. II. Some copies are not pens.',
      options: ['Only I follows', 'Only II follows', 'Both I and II follow', 'Neither I nor II follows'],
      answer: 1,
      figure: {
        viewBox: '0 0 320 180',
        svg: `
<circle cx="190" cy="95" r="70"/>
<circle cx="215" cy="108" r="30" class="d-fill-blue"/>
<circle cx="215" cy="108" r="30"/>
<circle cx="70" cy="95" r="42" class="d-dash"/>
<text x="175" y="52" text-anchor="middle">copies</text>
<text x="215" y="114" text-anchor="middle">books</text>
<text x="70" y="101" text-anchor="middle">pens</text>`,
        caption: 'Dashed circle: pens can move anywhere that keeps them clear of books.',
      },
      explain:
        'Books are copies and no book is a pen, so those copies are not pens (II). Pens may still overlap the part of the copy circle outside books, so I is not definite.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        'Statements: Some doctors are teachers. Some teachers are singers. Conclusions: I. Some doctors are singers. II. No doctor is a singer.',
      options: ['Only I follows', 'Only II follows', 'Either I or II follows', 'Neither I nor II follows'],
      answer: 2,
      explain:
        'Some + Some gives no definite link, so neither follows alone. I and II use the same terms, one "Some" and one "No", so one of them must be true: Either I or II.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        'Statements: All roses are flowers. Some flowers are red. Conclusions: I. All roses being red is a possibility. II. Some roses are red.',
      options: ['Only I follows', 'Only II follows', 'Both I and II follow', 'Neither I nor II follows'],
      answer: 0,
      explain:
        'Nothing forbids the red circle from covering all roses, so the possibility (I) follows. The red circle can also miss roses, so II is not definite.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Statements: Some boys are girls. All girls are students. Conclusions: I. Some boys are students. II. All students are boys.',
      options: ['Only I follows', 'Only II follows', 'Both I and II follow', 'Neither I nor II follows'],
      answer: 0,
      explain:
        'The boys who are girls are also students, so I follows (Some + All = Some). The student circle can be much bigger than boys, so II does not follow.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        'Statements: All mangoes are fruits. No fruit is a vegetable. Conclusions: I. No mango is a vegetable. II. Some vegetables are mangoes.',
      options: ['Only I follows', 'Only II follows', 'Both I and II follow', 'Neither I nor II follows'],
      answer: 0,
      explain:
        'Mangoes sit inside fruits, which are apart from vegetables, so no mango is a vegetable (All + No = No). II goes against I, so it cannot follow.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        'Statements: Some students are players. No player is lazy. Conclusions: I. Some students are not lazy. II. Some lazy people are students.',
      options: ['Only I follows', 'Only II follows', 'Both I and II follow', 'Neither I nor II follows'],
      answer: 0,
      explain:
        'The students who are players are not lazy, so I follows (Some + No = Some not). The lazy circle may or may not touch the other students, so II is not definite.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Statements: All X are Y. No Y is Z. Which conclusion definitely follows?',
      options: ['Some Z are Y', 'No X is Z', 'All Z are X', 'Some X are Z'],
      answer: 1,
      explain: 'X sits inside Y, and Y is apart from Z, so X is apart from Z. All + No = No.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        'Statements: Some chairs are tables. No table is a bed. All beds are sofas. Conclusions: I. Some chairs are not beds. II. Some sofas are not tables.',
      options: ['Only I follows', 'Only II follows', 'Both I and II follow', 'Neither I nor II follows'],
      answer: 2,
      figure: {
        viewBox: '0 0 320 180',
        svg: `
<path d="M132.5,63.8 A38,38 0 0,1 132.5,116.2 A38,38 0 0,1 132.5,63.8 Z" class="d-fill"/>
<circle cx="105" cy="90" r="38"/>
<circle cx="160" cy="90" r="38"/>
<circle cx="262" cy="95" r="46" class="d-dash"/>
<circle cx="266" cy="104" r="24" class="d-fill-blue"/>
<circle cx="266" cy="104" r="24"/>
<text x="90" y="95" text-anchor="middle" class="d-small">chairs</text>
<text x="176" y="95" text-anchor="middle" class="d-small">tables</text>
<text x="262" y="72" text-anchor="middle" class="d-small">sofas</text>
<text x="266" y="109" text-anchor="middle" class="d-small">beds</text>`,
        caption: 'Dashed circle: sofas must hold every bed; the rest of it can move.',
      },
      explain:
        'I: the chairs that are tables cannot be beds (Some + No = Some not). II: every bed is a sofa and no bed is a table, so those sofas are not tables.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question:
        'Statements: All pens are pencils. Some pencils are erasers. No eraser is a sharpener. Conclusions: I. Some pens are not sharpeners. II. All pencils being sharpeners is a possibility.',
      options: ['Only I follows', 'Only II follows', 'Both I and II follow', 'Neither I nor II follows'],
      answer: 3,
      figure: {
        viewBox: '0 0 320 180',
        svg: `
<path d="M170.8,63 A60,60 0 0,1 170.8,127 A35,35 0 0,1 170.8,63 Z" class="d-fill"/>
<circle cx="120" cy="95" r="60"/>
<circle cx="185" cy="95" r="35"/>
<circle cx="95" cy="104" r="22" class="d-dash"/>
<circle cx="270" cy="95" r="32" class="d-dash"/>
<text x="112" y="62" text-anchor="middle" class="d-small">pencils</text>
<text x="95" y="108" text-anchor="middle" class="d-small">pens</text>
<text x="198" y="146" text-anchor="middle" class="d-small">erasers</text>
<text x="270" y="146" text-anchor="middle" class="d-small">sharpeners</text>`,
        caption: 'Dashed circles can move: pens stay inside pencils, sharpeners stay clear of erasers.',
      },
      explain:
        'I: pens can sit in the part of pencils away from erasers, fully inside sharpeners, so I is not definite. II: the pencils that are erasers can never be sharpeners, so II is impossible.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Statements: Some cats are dogs. All dogs are rats. Conclusions: I. Some cats are rats. II. No cat is a rat.',
      options: ['Only I follows', 'Only II follows', 'Either I or II follows', 'Neither I nor II follows'],
      answer: 0,
      explain:
        'The cats that are dogs are also rats, so I is definite (Some + All = Some). Either-or applies only when neither conclusion follows alone, so the answer is Only I.',
      shortcut: 'Check whether one conclusion is definite before you pick Either I or II.',
    },
  ],
};

export default topic;
