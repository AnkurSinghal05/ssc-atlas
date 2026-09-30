import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'subject-verb',
  title: 'Subject-verb agreement',
  level: 'beginner',
  masteryMinutes: 60,
  reviseMinutes: 20,
  priority: 'high',
  weightage: { tier1: 1, tier2: 2 },
  tags: ['agreement', 'one of', 'each', 'neither nor', 'as well as', 'the number of', 'collective nouns', 'uncountable nouns'],
  summary:
    'A singular subject takes a singular verb and a plural subject takes a plural verb. The exam hides the real subject behind phrases, so find it first, then match the verb.',
  keyPoints: [
    {
      title: 'One of + plural noun + singular verb',
      text: 'After "one of", the noun is plural but the verb follows "one", so it is singular. Exception: in "one of those who / that", the relative clause agrees with the plural noun.',
      example: 'One of my **friends is** a doctor. He is one of the best players who **have** played for India.',
    },
    {
      title: 'Each, every, either, neither: singular',
      text: 'Each, every, either and neither take a singular verb, even when followed by "of + plural noun". Two nouns joined by "and" after each or every also take a singular verb.',
      example: 'Each of the boys **has** a pen. Every man and woman **was** present.',
    },
    {
      title: 'Neither...nor, either...or: the nearer subject wins',
      text: 'With either...or, neither...nor, not only...but also, or and nor, the verb agrees with the subject closest to it. Put the plural subject last to keep the sentence natural.',
      example: 'Neither the teacher nor the **students were** present. Either you or **he is** to blame.',
    },
    {
      title: 'As well as, along with: the first subject wins',
      text: 'Phrases like as well as, along with, together with, with, besides, in addition to, like and accompanied by do not change the subject. The verb agrees with the first subject.',
      example: 'The **captain**, along with his players, **was** welcomed.',
    },
    {
      title: 'The number of vs a number of',
      text: '"The number of" means the count, so the verb is singular. "A number of" means many, so the verb is plural.',
      example: '**The number of** cars **has** increased. **A number of** cars **were** parked outside.',
    },
    {
      title: 'Collective nouns and always-plural nouns',
      text: 'A collective noun (team, jury, committee, family) takes a singular verb when it acts as one unit and a plural verb when its members act separately. Cattle, police, people, poultry, gentry and clergy are always plural.',
      example: 'The jury **has** given its verdict. The jury **were** divided in their opinions. The police **have** arrested him.',
    },
    {
      title: 'Uncountable nouns are singular',
      text: 'Information, advice, furniture, luggage, baggage, scenery, machinery, poetry and news take a singular verb and never add -s. Subjects like mathematics, physics and economics are singular too.',
      example: 'The **furniture is** new. The **news was** good. **Mathematics is** easy for her.',
    },
    {
      title: 'More than one, many a: singular in disguise',
      text: '"More than one" and "many a" are followed by a singular noun and a singular verb, though the meaning is plural.',
      example: '**More than one student was** absent. **Many a man has** tried and failed.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'Which subject does the verb look at?',
      figure: {
        viewBox: '0 0 320 195',
        svg: `
<text x="12" y="76" class="d-small">Neither the</text><text x="80" y="76" class="d-small">teacher</text><text x="128" y="76" class="d-small">nor the</text><text x="174" y="76" class="d-small d-green" data-step="2">students</text><text x="234" y="76" class="d-small d-green" data-step="1 2">were …</text>
<path d="M243,62 Q171,14 100,62" class="d-red d-dash" data-step="1"/><polyline points="104.4,54.2 100,62 108.9,60.8" class="d-red d-dash" data-step="1"/>
<text x="171" y="30" text-anchor="middle" class="d-small d-red" data-step="1">not this one</text>
<path d="M247,62 Q223,40 200,62" class="d-green" data-step="1 2"/><polyline points="203,53.6 200,62 208.5,59.4" class="d-green" data-step="1 2"/>
<text x="200" y="94" text-anchor="middle" class="d-small d-soft" data-step="2">nearer, plural</text>
<rect x="92" y="146" width="158" height="20" rx="5" class="d-dash d-soft" data-step="3"/>
<text x="12" y="160" class="d-small">The</text><text x="36" y="160" class="d-small d-blue" data-step="4">captain,</text><text x="98" y="160" class="d-small d-soft" data-step="3">along with his players,</text><text x="256" y="160" class="d-small d-blue" data-step="4">was …</text>
<text x="171" y="186" text-anchor="middle" class="d-small d-soft" data-step="3">extra phrase: skip it</text>
<path d="M264,144 Q164,96 62,144" class="d-blue" data-step="4"/><polyline points="67.5,137 62,144 70.9,144.2" class="d-blue" data-step="4"/>
<text x="164" y="112" text-anchor="middle" class="d-small d-blue" data-step="4">first subject, singular</text>`,
        caption: 'Neither the teacher nor the students were present. The captain, along with his players, was welcomed.',
      },
      explain: [
        'With neither...nor, either...or and not only...but also, the verb agrees with the subject nearest to it, not the first one.',
        'The nearer subject "the students" is plural, so the verb is **were**.',
        'Along with, as well as, together with, besides: the phrase is extra information. Skip it when you look for the subject.',
        'The verb goes back to the first subject, "the captain", which is singular, so the verb is **was**.',
      ],
    },
  ],
  comparisons: [
    {
      title: 'A number of vs the number of',
      items: ['A number of', 'The number of'],
      rows: [
        { aspect: 'Meaning', values: ['Many, several', 'The count of'] },
        { aspect: 'Verb', values: ['**Plural**', '**Singular**'], key: true },
        { aspect: 'Example', values: ['A number of students **are** absent.', 'The number of students **is** fifty.'] },
        { aspect: 'Quick test', values: ['Swap in "many": still makes sense', 'Swap in "the count": still makes sense'] },
      ],
      reveal: 'Both are followed by a plural noun. Only the article changes the verb: "a" gives plural, "the" gives singular.',
      whenToUse: ['The sentence means "many" of something.', 'The sentence talks about the figure or total itself.'],
    },
    {
      title: 'Which subject does the verb follow?',
      items: ['X and Y', 'X as well as Y', 'Neither X nor Y'],
      rows: [
        { aspect: 'Verb agrees with', values: ['Both together: **plural**', '**X**, the first subject', '**Y**, the nearer subject'], key: true },
        {
          aspect: 'Example',
          values: ['Ram and Shyam **are** here.', 'Ram, as well as his friends, **is** here.', 'Neither Ram nor his friends **are** here.'],
        },
        {
          aspect: 'Same family',
          values: ['both...and', 'along with, together with, with, besides, in addition to', 'either...or, not only...but also, or, nor'],
        },
      ],
      reveal:
        'Only "and" joins two subjects into one plural subject. "As well as" type phrases are just extra detail, and "or / nor" pairs let the nearer subject decide.',
      whenToUse: [
        'Two separate subjects joined by "and" (unless they name one person or one idea).',
        'An extra noun is added with a phrase, often between commas.',
        'A choice or double negative links the subjects.',
      ],
    },
  ],
  qa: [
    {
      q: 'Correct the error: "One of my friend are a doctor."',
      a: ['"One of" takes a plural noun: friends.', 'The verb follows "one": is.', 'One of my friends is a doctor.'],
      tag: 'Asked often',
    },
    {
      q: 'Neither the manager nor the clerks ___ present. Was or were?',
      a: ['Were.', 'With neither...nor, the verb agrees with the nearer subject, "clerks".'],
      tag: 'Asked often',
    },
    {
      q: 'Which verb follows "The captain, along with his team, ___"?',
      a: ['A singular verb: "was" or "has".', '"Along with his team" is extra detail; the subject is "the captain".'],
      tag: 'Trap',
    },
    {
      q: '"The number of" or "a number of": which takes a singular verb?',
      a: ['"The number of" takes a singular verb.', '"A number of" means many and takes a plural verb.'],
      tag: 'Asked often',
    },
    {
      q: 'Why is "The police has arrested him" wrong?',
      a: ['"Police" is always plural.', 'Correct: The police have arrested him.', 'Same for cattle, people, poultry.'],
      tag: 'Trap',
    },
    {
      q: 'Name five nouns that are uncountable and take a singular verb.',
      a: ['Information, advice, furniture, luggage, scenery.', 'Also machinery, poetry, news.', 'Never write "furnitures" or "informations".'],
    },
    {
      q: 'When does a collective noun take a plural verb?',
      a: [
        'When the members act separately or disagree.',
        'The committee **were** divided in their views.',
        'As one unit: The committee **has** made its decision.',
      ],
    },
    {
      q: 'Which verb follows "More than one" and "Many a"?',
      a: ['A singular noun and a singular verb.', 'More than one boy **was** hurt. Many a soldier **has** died.'],
      tag: 'Trap',
    },
    {
      q: 'When do two nouns joined by "and" take a singular verb?',
      a: [
        'When they name one person, thing or idea.',
        'Bread and butter **is** my breakfast. The secretary and treasurer **has** come (one person).',
        'Two people need two articles: The secretary and the treasurer **have** come.',
      ],
    },
    {
      q: 'Is "Each of the students have a book" correct?',
      a: ['No. "Each" is singular.', 'Correct: Each of the students has a book.'],
    },
    {
      q: 'Which verb follows an amount of time, money or distance?',
      a: ['A singular verb when the amount is one total.', 'Ten kilometres **is** a long walk. Five hundred rupees **is** too much.'],
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Identify the segment that contains a grammatical error.\n"One of my friend / is working / in a bank."',
      options: ['One of my friend', 'is working', 'in a bank', 'No error'],
      answer: 0,
      explain: '"One of" is followed by a plural noun: one of my friends.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Select the most appropriate option to fill in the blank.\nNeither the teacher nor the students ___ present.',
      options: ['was', 'were', 'is', 'has been'],
      answer: 1,
      explain: 'With neither...nor, the verb agrees with the nearer subject, "students", which is plural.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Select the most appropriate option to fill in the blank.\nEach of the boys ___ a new bicycle.',
      options: ['have', 'has', 'are having', 'were having'],
      answer: 1,
      explain: '"Each" is singular, so it takes a singular verb: has.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Select the most appropriate option to fill in the blank.\nThe furniture in this room ___ very old.',
      options: ['are', 'is', 'were', 'have been'],
      answer: 1,
      explain: '"Furniture" is uncountable and takes a singular verb.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Select the most appropriate option to fill in the blank.\nThe captain, along with his players, ___ been invited to the ceremony.',
      options: ['have', 'has', 'are', 'were'],
      answer: 1,
      explain: 'With "along with", the verb agrees with the first subject, "the captain": has.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Select the most appropriate option to fill in the blank.\nThe number of students in the class ___ increased this year.',
      options: ['have', 'has', 'are', 'were'],
      answer: 1,
      explain: '"The number of" means the count, so the verb is singular: has.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Identify the segment that contains a grammatical error.\n"More than one student / were absent / from the class today."',
      options: ['More than one student', 'were absent', 'from the class today', 'No error'],
      answer: 1,
      explain: '"More than one" takes a singular noun and a singular verb: was absent.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Identify the segment that contains a grammatical error.\n"The police has arrested / the man who / stole the car."',
      options: ['The police has arrested', 'the man who', 'stole the car', 'No error'],
      answer: 0,
      explain: '"Police" is always plural: the police have arrested.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Select the most appropriate option to fill in the blank.\nEither you or he ___ responsible for the loss.',
      options: ['are', 'is', 'am', 'were'],
      answer: 1,
      explain: 'With either...or, the verb agrees with the nearer subject, "he": is.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Identify the segment that contains a grammatical error.\n"Many a student / have passed / this exam easily."',
      options: ['Many a student', 'have passed', 'this exam easily', 'No error'],
      answer: 1,
      explain: '"Many a" takes a singular noun and a singular verb: has passed.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Identify the segment that contains a grammatical error.\n"The cattle is grazing / in the field / near the river."',
      options: ['The cattle is grazing', 'in the field', 'near the river', 'No error'],
      answer: 0,
      explain: '"Cattle" is always plural: the cattle are grazing.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Select the most appropriate option to fill in the blank.\nHe is one of the best players who ___ ever represented India.',
      options: ['has', 'have', 'is', 'was'],
      answer: 1,
      explain: '"Who" refers to "players", which is plural, so the verb in the relative clause is plural: have.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Identify the segment that contains a grammatical error.\n"Not only the students / but also the teacher / were enjoying the picnic."',
      options: ['Not only the students', 'but also the teacher', 'were enjoying the picnic', 'No error'],
      answer: 2,
      explain: 'With not only...but also, the verb agrees with the nearer subject, "the teacher": was enjoying.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Select the grammatically correct sentence.',
      options: [
        'Bread and butter are my usual breakfast.',
        'Bread and butter is my usual breakfast.',
        'Bread and butter were my usual breakfast.',
        'Bread and butter have been my usual breakfast.',
      ],
      answer: 1,
      explain: 'Two nouns joined by "and" that form one idea (one dish) take a singular verb.',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'In a "neither...nor" sentence, the verb agrees with the subject closer to it.',
      answer: true,
      explain: 'Proximity rule: Neither he nor his friends **are** coming.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: '"The number of" is followed by a plural verb.',
      answer: false,
      explain: '"The number of" takes a singular verb. "A number of" takes a plural verb.',
    },
  ],
};

export default topic;
