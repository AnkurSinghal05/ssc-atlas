import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'direct-indirect',
  title: 'Direct and indirect speech',
  level: 'beginner',
  masteryMinutes: 60,
  reviseMinutes: 20,
  priority: 'high',
  weightage: { tier1: 1, tier2: 2 },
  tags: ['narration', 'reported speech', 'backshift', 'pronouns', 'time words', 'questions', 'commands', 'exclamations'],
  summary:
    'Indirect speech reports what someone said without quoting them. A past reporting verb shifts every tense one step back, and pronouns, time words and place words change to fit the reporter.',
  keyPoints: [
    {
      title: 'The reporting verb decides the tense',
      text: 'If the reporting verb is in the present or future tense (says, will say), the tense inside the quote does not change. If it is in the past (said), the tenses shift one step back.',
      example: 'He says, "I am busy." → He says that he is busy. He said, "I am busy." → He said that he was busy.',
    },
    {
      title: 'Backshift: one step into the past',
      text: 'After a past reporting verb: present becomes past, simple past and present perfect become past perfect, and will / shall / can / may become would / should / could / might. The past perfect does not change.',
      formula: 'is → was · has → had · did → had done · will → would · can → could · may → might',
      example: 'She said, "I have lost my key." → She said that she had lost her key.',
    },
    {
      title: 'Pronouns: the SON rule',
      text: 'First person changes to match the **S**ubject of the reporting verb. Second person changes to match the **O**bject of the reporting verb. Third person does **N**ot change.',
      example: 'He said to me, "You are late." → He told me that I was late.',
    },
    {
      title: 'Time and place words move away',
      text: 'now → then, today → that day, tomorrow → the next day, yesterday → the previous day, tonight → that night, last week → the previous week, next week → the following week, ago → before, here → there, this → that, these → those.',
      example: 'He said, "I will come tomorrow." → He said that he would come the next day.',
    },
    {
      title: 'Universal truths do not change',
      text: 'Scientific facts, universal truths, proverbs and habitual facts keep their present tense even after a past reporting verb.',
      example: 'The teacher said, "The earth moves round the sun." → The teacher said that the earth moves round the sun.',
    },
    {
      title: 'Questions: asked + if / whether or the wh- word',
      text: '"Said to" becomes "asked" or "enquired of". Yes/no questions use "if" or "whether". Wh- questions keep the wh- word as the link. The question becomes a statement: subject before verb, no question mark.',
      example: 'She said to him, "Where do you live?" → She asked him where he lived.',
    },
    {
      title: 'Commands and requests: verb + object + to + V1',
      text: 'Use told, ordered, commanded, requested, advised or begged, then the listener, then "to + verb". A negative command uses "not to". "Please" disappears into "requested".',
      example:
        'He said to me, "Please help me." → He requested me to help him. She said to them, "Don\'t make a noise." → She told them not to make a noise.',
    },
    {
      title: 'Exclamations, wishes and "Let\'s"',
      text: 'Exclamations use "exclaimed with joy / sorrow / surprise that" and turn "What a / How" into "very". Wishes use "wished" or "prayed". "Let us" becomes "suggested / proposed that they should".',
      example:
        'He said, "What a lovely view!" → He exclaimed that it was a very lovely view. He said, "Let us go." → He suggested that they should go.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'Backshift: every tense steps down once',
      figure: {
        viewBox: '0 0 320 250',
        svg: `
<polyline points="12,80 112,80 112,150 212,150 212,220 308,220" class="d-thick" data-step="1"/>
<text x="62" y="102" text-anchor="middle" data-step="1">present</text>
<text x="162" y="172" text-anchor="middle" data-step="1">past</text>
<text x="258" y="242" text-anchor="middle" class="d-red" data-step="1 4">past perfect</text>
<text x="122" y="34" class="d-small d-blue" data-step="2">is / am → was</text>
<text x="122" y="50" class="d-small d-blue" data-step="2">are → were</text>
<text x="122" y="66" class="d-small d-blue" data-step="2 5">has / have → had</text>
<text x="122" y="82" class="d-small d-blue" data-step="2">writes → wrote</text>
<text x="122" y="98" class="d-small d-blue" data-step="2">will → would</text>
<text x="122" y="114" class="d-small d-blue" data-step="2">can → could, may → might</text>
<text x="222" y="168" class="d-small d-green" data-step="3">wrote →</text>
<text x="222" y="183" class="d-small d-green" data-step="3">had written</text>
<text x="222" y="202" class="d-small d-green" data-step="3">was → had been</text>`,
        caption: 'After a past reporting verb such as "said".',
      },
      explain: [
        'After a past reporting verb, the first verb of the reported words moves one step down. Nothing moves after "says".',
        'Present to past: is → was, has → had, writes → wrote, will → would, can → could, may → might.',
        'Past to past perfect: wrote → had written, was writing → had been writing.',
        'The past perfect is the bottom step, so **had written stays had written**.',
        'Example: He said, "I have lost my key." → He said that he **had lost** his key.',
      ],
    },
  ],
  comparisons: [
    {
      title: 'Tense backshift after a past reporting verb',
      items: ['Direct', 'Indirect'],
      rows: [
        { aspect: 'Simple present', values: ['"I **write**."', 'he **wrote**'] },
        { aspect: 'Present continuous', values: ['"I **am writing**."', 'he **was writing**'] },
        { aspect: 'Present perfect', values: ['"I **have written**."', 'he **had written**'] },
        { aspect: 'Present perfect continuous', values: ['"I **have been writing**."', 'he **had been writing**'] },
        { aspect: 'Simple past', values: ['"I **wrote**."', 'he **had written**'], key: true },
        { aspect: 'Past continuous', values: ['"I **was writing**."', 'he **had been writing**'] },
        { aspect: 'Past perfect', values: ['"I **had written**."', 'he **had written** (no change)'] },
        { aspect: 'will / shall', values: ['"I **will write**."', 'he **would write**'], key: true },
        { aspect: 'can', values: ['"I **can write**."', 'he **could write**'] },
        { aspect: 'may', values: ['"I **may write**."', 'he **might write**'] },
        { aspect: 'must', values: ['"I **must write**."', 'he **had to write** (or must)'] },
      ],
      reveal: 'Each tense steps one place into the past. The past perfect is already as far back as it goes, so it stays.',
      whenToUse: [
        'Quoting the exact words, inside inverted commas.',
        'Reporting the words in your own sentence, usually after "that", "if" or "to".',
      ],
    },
    {
      title: 'Reporting by sentence type',
      items: ['Statement', 'Question', 'Command / request', 'Exclamation'],
      rows: [
        { aspect: 'Reporting verb', values: ['said / told', 'asked / enquired', 'ordered / requested / advised', 'exclaimed / cried out'] },
        { aspect: 'Link word', values: ['that', 'if / whether, or the wh- word', 'to + V1 (not to + V1)', 'that'], key: true },
        { aspect: 'Word order', values: ['Statement', 'Statement, no question mark', 'Infinitive', 'Statement; "what a / how" → "very"'] },
        {
          aspect: 'Example',
          values: [
            'He told me that he was ill.',
            'He asked me if I was ready.',
            'He told me to sit down.',
            'She exclaimed with joy that she had won.',
          ],
        },
      ],
      reveal: 'Only statements and exclamations use "that". Questions use "if / whether" or the wh- word, and commands use "to".',
      whenToUse: [
        'The quote states a fact or opinion.',
        'The quote ends in a question mark.',
        'The quote gives an order, advice or a polite request.',
        'The quote starts with "What a", "How", "Alas", "Hurrah" and ends in "!".',
      ],
    },
  ],
  qa: [
    {
      q: 'Indirect form of: He said, "I am tired."',
      a: ['He said that he was tired.', 'Past reporting verb, so "am" → "was"; "I" → "he".'],
      tag: 'Asked often',
    },
    {
      q: 'When does the tense NOT change in indirect speech?',
      a: [
        'When the reporting verb is present or future (says, will say).',
        'When the quote is a universal truth or habitual fact.',
        'When the verb is already past perfect.',
      ],
      tag: 'Trap',
    },
    {
      q: 'What is the SON rule for pronouns?',
      a: [
        'First person → like the Subject of the reporting verb.',
        'Second person → like the Object of the reporting verb.',
        'Third person → No change.',
      ],
    },
    {
      q: 'What do "yesterday" and "tomorrow" become?',
      a: ['yesterday → the previous day (or the day before).', 'tomorrow → the next day (or the following day).'],
      tag: 'Asked often',
    },
    {
      q: 'What does "ago" become, and what does "here" become?',
      a: ['ago → before.', 'here → there.'],
    },
    {
      q: 'Indirect form of: She said to me, "Are you coming?"',
      a: ['She asked me if (or whether) I was coming.', 'Yes/no question: asked + if / whether, statement order.'],
      tag: 'Asked often',
    },
    {
      q: 'Why is "He asked me where did I live" wrong?',
      a: ['Indirect questions use statement order and no helping "did".', 'Correct: He asked me where I lived.'],
      tag: 'Trap',
    },
    {
      q: 'Indirect form of: The teacher said to us, "Do not talk."',
      a: ['The teacher told us not to talk.', 'Negative command: told / ordered + object + not to + V1.'],
    },
    {
      q: 'Indirect form of: He said, "Let us go for a walk."',
      a: ['He suggested that they should go for a walk.', '"Let us" as a proposal → suggested / proposed that ... should.'],
    },
    {
      q: 'Indirect form of: She said, "Alas! I have failed."',
      a: ['She exclaimed with sorrow that she had failed.', 'Interjections are dropped; their feeling goes into the reporting verb.'],
    },
    {
      q: 'Which reporting verb follows "said" directly, and which needs an object?',
      a: [
        '"Said that" needs no object: He said that he was busy.',
        '"Told" needs an object: He told me that he was busy.',
        'Never "He told that" or "He said me".',
      ],
      tag: 'Trap',
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Select the option that expresses the given sentence in indirect speech.\nHe said, "I am tired."',
      options: ['He said that he is tired.', 'He said that he was tired.', 'He said that I was tired.', 'He said that he had been tired.'],
      answer: 1,
      explain: 'Past reporting verb: "am" → "was", and "I" → "he".',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Select the option that expresses the given sentence in indirect speech.\nShe says, "I like mangoes."',
      options: [
        'She says that she likes mangoes.',
        'She says that she liked mangoes.',
        'She said that she liked mangoes.',
        'She says that I like mangoes.',
      ],
      answer: 0,
      explain: 'The reporting verb "says" is present, so the tense does not change.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Select the option that expresses the given sentence in indirect speech.\nThe teacher said, "The sun rises in the east."',
      options: [
        'The teacher said that the sun rose in the east.',
        'The teacher said that the sun rises in the east.',
        'The teacher said that the sun had risen in the east.',
        'The teacher told that the sun rises in the east.',
      ],
      answer: 1,
      explain: 'A universal truth keeps its present tense. "Told" needs an object, so the last option is wrong.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Select the option that expresses the given sentence in indirect speech.\nHe said to me, "Where do you live?"',
      options: ['He asked me where I lived.', 'He asked me where did I live.', 'He told me where I lived.', 'He asked me where do you live.'],
      answer: 0,
      explain: 'Wh- question: asked + wh- word + statement order, with the tense shifted back.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Select the option that expresses the given sentence in indirect speech.\nRavi said, "I will go to Delhi tomorrow."',
      options: [
        'Ravi said that he will go to Delhi the next day.',
        'Ravi said that he would go to Delhi the next day.',
        'Ravi said that he would go to Delhi tomorrow.',
        'Ravi said that I would go to Delhi the next day.',
      ],
      answer: 1,
      explain: '"will" → "would", "tomorrow" → "the next day", "I" → "he".',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Select the option that expresses the given sentence in indirect speech.\nShe said to me, "Are you coming to the party?"',
      options: [
        'She asked me that I was coming to the party.',
        'She asked me if I was coming to the party.',
        'She asked me if I am coming to the party.',
        'She told me whether I was coming to the party.',
      ],
      answer: 1,
      explain: 'Yes/no question: asked + if / whether, with "are" shifted to "was". Questions never use "that".',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Select the option that expresses the given sentence in indirect speech.\nHe said, "I saw a snake yesterday."',
      options: [
        'He said that he saw a snake yesterday.',
        'He said that he had seen a snake the previous day.',
        'He said that he has seen a snake the previous day.',
        'He said that he had seen a snake the next day.',
      ],
      answer: 1,
      explain: 'Simple past → past perfect ("saw" → "had seen"), and "yesterday" → "the previous day".',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Select the option that expresses the given sentence in indirect speech.\nMother said to me, "Do not play in the sun."',
      options: [
        'Mother told me do not play in the sun.',
        'Mother forbade me not to play in the sun.',
        'Mother told me not to play in the sun.',
        'Mother said me not to play in the sun.',
      ],
      answer: 2,
      explain: 'Negative command: told + object + not to + V1. "Forbade ... not to" is a double negative, and "said me" is wrong.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Select the option that expresses the given sentence in indirect speech.\nHe said to her, "Please lend me your pen."',
      options: [
        'He requested her to lend him her pen.',
        'He requested her to lend me your pen.',
        'He told her please to lend him her pen.',
        'He requested to her that she lend him her pen.',
      ],
      answer: 0,
      explain: 'Request: requested + object + to + V1. "Me" → "him" (speaker) and "your" → "her" (listener).',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Select the option that expresses the given sentence in indirect speech.\nShe said, "What a beautiful garden this is!"',
      options: [
        'She exclaimed that it was a very beautiful garden.',
        'She exclaimed that what a beautiful garden this is.',
        'She said that what a beautiful garden it was.',
        'She asked that it was a very beautiful garden.',
      ],
      answer: 0,
      explain: 'Exclamation: exclaimed that, with "What a" turned into "very" and the tense shifted back.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Select the option that expresses the given sentence in direct speech.\nHe told me that he was busy then.',
      options: [
        'He said to me, "I am busy now."',
        'He said to me, "I was busy now."',
        'He said to me, "He is busy then."',
        'He says to me, "I am busy now."',
      ],
      answer: 0,
      explain: 'Reverse the changes: "told" → "said to", "was" → "am", "he" → "I", "then" → "now".',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Select the option that expresses the given sentence in indirect speech.\nHe said, "I have been waiting here for an hour."',
      options: [
        'He said that he had been waiting here for an hour.',
        'He said that he had been waiting there for an hour.',
        'He said that he has been waiting there for an hour.',
        'He said that he was waiting there for an hour.',
      ],
      answer: 1,
      explain: 'Present perfect continuous → past perfect continuous, and "here" → "there".',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Select the option that expresses the given sentence in indirect speech.\nThe boy said, "Let us play football."',
      options: [
        'The boy suggested that they should play football.',
        'The boy suggested them to play football.',
        'The boy said that let us play football.',
        'The boy suggested that let them play football.',
      ],
      answer: 0,
      explain: '"Let us" as a proposal becomes "suggested that ... should". "Suggest" is never followed by object + to-infinitive.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Select the option that expresses the given sentence in indirect speech.\nHe said, "I can swim, but my brother cannot."',
      options: [
        'He said that he can swim but his brother cannot.',
        'He said that he could swim but his brother could not.',
        'He said that he could swim but my brother could not.',
        'He said that he could swim but his brother cannot.',
      ],
      answer: 1,
      explain: 'Both clauses shift: "can" → "could". "My" → "his" because the speaker is "he".',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'When the reporting verb is in the present tense, the tense of the reported speech does not change.',
      answer: true,
      explain: 'He says, "I am busy." → He says that he is busy.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'In indirect speech, "yesterday" becomes "the next day".',
      answer: false,
      explain: '"Yesterday" becomes "the previous day" or "the day before". "Tomorrow" becomes "the next day".',
    },
  ],
};

export default topic;
