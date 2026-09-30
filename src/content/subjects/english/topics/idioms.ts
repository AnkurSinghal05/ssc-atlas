import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'idioms',
  title: 'Idioms and phrases',
  level: 'intermediate',
  masteryMinutes: 150,
  reviseMinutes: 50,
  priority: 'high',
  weightage: { tier1: 1, tier2: 2 },
  tags: ['idioms', 'phrases', 'figurative meaning', 'vocabulary'],
  summary:
    'An idiom means something different from its words. SSC repeats the same few hundred, so learn them in groups by theme and never pick the literal option.',
  keyPoints: [
    {
      title: 'The meaning is never literal',
      text: 'An idiom is a fixed phrase whose meaning cannot be worked out from its words. The option that repeats the literal picture (a bucket, a bush, a cake) is almost always a trap.',
      example: '**Kick the bucket** means to die, not to hit a bucket.',
    },
    {
      title: 'How to crack a question',
      text: 'First recall the idiom from your list. If you do not know it, picture the image and ask what feeling it gives, then drop the literal option. In sentence questions, read the whole sentence: the context usually points to the tone (good or bad).',
      example: '"After the scandal he was **under a cloud**": a cloud over someone suggests something bad, so "under suspicion" fits.',
    },
    {
      title: 'Secrets and speech',
      text: '**Spill the beans** / **Let the cat out of the bag**: reveal a secret. **Beat about the bush**: avoid coming to the point. **Call a spade a spade**: speak frankly. **Blow one\'s own trumpet**: boast. **Gift of the gab**: a talent for speaking. **Hit the nail on the head**: say exactly the right thing.',
      example: 'Stop beating about the bush and tell me what happened.',
    },
    {
      title: 'Effort, speed and time',
      text: '**Burn the midnight oil**: work or study late into the night. **Leave no stone unturned**: make every possible effort. **At the eleventh hour**: at the last moment. **Once in a blue moon**: very rarely. **By leaps and bounds**: very rapidly. **Nip in the bud**: stop something at an early stage. **In a nutshell**: in brief.',
      example: 'She burnt the midnight oil before her exams.',
    },
    {
      title: 'Trouble and failure',
      text: '**In hot water**: in trouble. **Face the music**: face the consequences of one\'s actions. **Bite the dust**: be defeated. **Cut a sorry figure**: make a poor impression. **Under a cloud**: under suspicion. **At sixes and sevens**: in confusion or disorder. **A fish out of water**: uncomfortable in a strange place. **Add fuel to the fire**: make a bad situation worse.',
      example: 'The house was at sixes and sevens after the party.',
    },
    {
      title: 'People and feelings',
      text: '**Apple of one\'s eye**: a very dear person. **Crocodile tears**: false sorrow. **Get cold feet**: lose courage before doing something. **Pull someone\'s leg**: tease someone. **Bury the hatchet**: make peace. **Hand in glove**: in close partnership, usually in wrongdoing. **Smell a rat**: suspect that something is wrong. **Achilles\' heel**: a weak point.',
      example: 'The two rivals finally buried the hatchet.',
    },
    {
      title: 'Events, things and actions',
      text: '**A bolt from the blue**: a sudden, unexpected event. **Red-letter day**: a memorable, happy day. **Red tape**: official delay and formality. **White elephant**: a costly possession that is of little use. **A feather in one\'s cap**: an achievement to be proud of. **A piece of cake**: something very easy. **Rain cats and dogs**: rain heavily. **Take to one\'s heels**: run away. **Throw down the gauntlet**: issue a challenge.',
      example: 'The news of his transfer came as a bolt from the blue.',
    },
  ],
  comparisons: [
    {
      title: 'Same word, different idiom: "hand"',
      items: ['Hand in glove', 'From hand to mouth', 'Hand in hand'],
      rows: [
        { aspect: 'Meaning', values: ['In close partnership, usually for something wrong', 'With just enough to survive, nothing saved', 'Together, closely linked'] },
        { aspect: 'Tone', values: ['**Negative**: partners in wrongdoing', '**Poverty**', '**Neutral or positive**'], key: true },
        {
          aspect: 'Example',
          values: ['The clerk was hand in glove with the smugglers.', 'The labourers live from hand to mouth.', 'Growth and education go hand in hand.'],
        },
      ],
      reveal: 'The shared word tells you nothing. Only the whole phrase has a meaning, so learn each one as a unit.',
      whenToUse: ['Two people secretly working together.', 'Someone who earns only enough for today.', 'Two things that always come together.'],
    },
    {
      title: 'Same word, different idiom: "red"',
      items: ['Red-letter day', 'Red tape', 'Caught red-handed'],
      rows: [
        { aspect: 'Meaning', values: ['A memorable, happy day', 'Too many official rules and delays', 'Caught in the act of doing wrong'], key: true },
        {
          aspect: 'Example',
          values: ['Her wedding was a red-letter day.', 'Red tape delayed the project for a year.', 'The thief was caught red-handed.'],
        },
      ],
      reveal: 'Red-letter day is happy, red tape is annoying, and red-handed is guilty.',
      whenToUse: ['A special occasion.', 'Government or office delays.', 'Someone found in the middle of a crime.'],
    },
  ],
  qa: [
    {
      q: 'A bolt from the blue',
      a: ['A sudden, unexpected event (usually unpleasant).', 'His resignation came as a bolt from the blue.'],
      tag: 'Asked often',
    },
    {
      q: 'A white elephant',
      a: ['A costly possession that is of little use and expensive to keep.', 'The new stadium turned out to be a white elephant.'],
      tag: 'Asked often',
    },
    {
      q: 'Cut a sorry figure',
      a: ['Make a poor impression.', 'He cut a sorry figure at the interview.'],
    },
    {
      q: 'Hold water',
      a: ['Be valid or logical (said of an argument).', 'His excuse does not hold water.'],
      tag: 'Trap',
    },
    {
      q: 'Throw down the gauntlet vs throw in the towel',
      a: ['Throw down the gauntlet: issue a challenge.', 'Throw in the towel: give up.'],
      tag: 'Trap',
    },
    {
      q: 'Take to one\'s heels / Show a clean pair of heels',
      a: ['Both mean to run away.', 'The thief took to his heels when he saw the police.'],
    },
    {
      q: 'Bell the cat',
      a: ['Take a risky step for the good of others.', 'Everyone complained, but nobody would bell the cat.'],
    },
    {
      q: 'Wash one\'s dirty linen in public',
      a: ['Discuss private or family quarrels in front of others.', 'Do not wash your dirty linen in public.'],
    },
    {
      q: 'Up to the mark',
      a: ['As good as required.', 'His work is not up to the mark.'],
    },
    {
      q: 'Turn a deaf ear',
      a: ['Refuse to listen; ignore.', 'He turned a deaf ear to his parents\' advice.'],
      tag: 'Asked often',
    },
    {
      q: 'Cry over spilt milk',
      a: ['Regret something that cannot be undone.', 'The match is lost; there is no use crying over spilt milk.'],
    },
    {
      q: 'Keep one\'s fingers crossed',
      a: ['Hope that things go well.', 'I am keeping my fingers crossed for the result.'],
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Select the most appropriate meaning of the given idiom.\nA bolt from the blue',
      options: ['A sudden, unexpected event', 'A clear blue sky', 'A long-awaited result', 'A bright idea'],
      answer: 0,
      explain: '"A bolt from the blue" is a sudden, unexpected event, like lightning from a clear sky.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Select the most appropriate meaning of the given idiom.\nBurn the midnight oil',
      options: ['Waste money', 'Work or study late into the night', 'Start a fire', 'Go to bed early'],
      answer: 1,
      explain: '"Burn the midnight oil" means to work or study late into the night.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Select the most appropriate meaning of the given idiom.\nOnce in a blue moon',
      options: ['Every month', 'Very rarely', 'Only at night', 'Very often'],
      answer: 1,
      explain: '"Once in a blue moon" means very rarely.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Select the most appropriate meaning of the given idiom.\nA piece of cake',
      options: ['Something very easy', 'A small share', 'A sweet reward', 'A costly gift'],
      answer: 0,
      explain: '"A piece of cake" means something very easy to do.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Select the most appropriate meaning of the given idiom.\nBeat about the bush',
      options: ['Search everywhere', 'Avoid coming to the point', 'Work in a garden', 'Punish someone'],
      answer: 1,
      explain: '"Beat about the bush" means to talk around a subject without coming to the point.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Select the most appropriate meaning of the given idiom.\nAt sixes and sevens',
      options: ['In a state of confusion', 'Late in the evening', 'Good at mathematics', 'Divided into groups'],
      answer: 0,
      explain: '"At sixes and sevens" means in confusion or disorder.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Select the most appropriate meaning of the given idiom.\nA white elephant',
      options: ['A rare animal', 'A costly possession that is of little use', 'A sign of good luck', 'A trusted friend'],
      answer: 1,
      explain: '"A white elephant" is something expensive to own and keep but of little use.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Select the most appropriate meaning of the given idiom.\nCut a sorry figure',
      options: ['Make a poor impression', 'Feel sorry for someone', 'Reduce expenses', 'Draw a sad picture'],
      answer: 0,
      explain: '"Cut a sorry figure" means to make a poor impression.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question:
        'Select the most appropriate idiom to fill in the blank.\nThe police searched every house in the area; they ___ to find the missing child.',
      options: ['left no stone unturned', 'turned a deaf ear', 'beat about the bush', 'took to their heels'],
      answer: 0,
      explain: '"Leave no stone unturned" means to make every possible effort, which fits a thorough search.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Select the most appropriate meaning of the given idiom.\nCrocodile tears',
      options: ['Tears of joy', 'Pretended sorrow', 'Deep grief', 'Tears caused by pain'],
      answer: 1,
      explain: '"Crocodile tears" are a false show of sorrow.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Select the most appropriate meaning of the given idiom.\nBury the hatchet',
      options: ['Hide a weapon', 'Make peace', 'Start a quarrel', 'Keep a secret'],
      answer: 1,
      explain: '"Bury the hatchet" means to end a quarrel and make peace.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Select the most appropriate meaning of the given idiom.\nHand in glove',
      options: ['In close partnership, often in wrongdoing', 'Wearing gloves', 'Holding hands in love', 'Working with bare hands'],
      answer: 0,
      explain: '"Hand in glove" means working very closely together, usually for something dishonest.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Select the most appropriate meaning of the given idiom.\nThrow down the gauntlet',
      options: ['Give up', 'Issue a challenge', 'Lose a fight', 'Apologise'],
      answer: 1,
      explain: '"Throw down the gauntlet" means to issue a challenge. "Give up" is "throw in the towel".',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Select the most appropriate meaning of the idiom in bold in the given sentence.\nAfter the scandal, the minister remained **under a cloud** for months.',
      options: ['Under suspicion', 'In bad weather', 'Travelling abroad', 'In hiding'],
      answer: 0,
      explain: '"Under a cloud" means under suspicion or in disgrace.',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: '"Spill the beans" and "let the cat out of the bag" both mean to reveal a secret.',
      answer: true,
      explain: 'Both idioms mean to reveal a secret, often by mistake.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: '"Take to one\'s heels" means to follow someone closely.',
      answer: false,
      explain: '"Take to one\'s heels" means to run away.',
    },
  ],
};

export default topic;
