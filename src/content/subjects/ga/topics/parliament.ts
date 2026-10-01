import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'parliament',
  title: 'Union executive and Parliament',
  level: 'intermediate',
  masteryMinutes: 120,
  reviseMinutes: 40,
  priority: 'high',
  weightage: { tier1: 1, tier2: 1 },
  tags: [
    'President',
    'Vice-President',
    'Prime Minister',
    'Lok Sabha',
    'Rajya Sabha',
    'money bill',
    'joint sitting',
    'ordinance',
    'Article 110',
    'Article 123',
  ],
  summary:
    'The President, Vice-President and council of ministers (Arts 52 to 78) and Parliament (Arts 79 to 122). Questions test article numbers, minimum ages, who presides, and what the Rajya Sabha can and cannot do.',
  keyPoints: [
    {
      title: 'President: key articles',
      text: '**Art 52**: there shall be a President. Term 5 years; minimum age **35**. **Art 61**: impeachment, only for "violation of the Constitution". **Art 72**: pardoning power. **Art 123**: ordinances when Parliament is not in session.',
      example: 'Oath is given by the **Chief Justice of India** (Art 60). The President resigns by writing to the **Vice-President**.',
    },
    {
      title: 'How the President is elected',
      text: 'Elected indirectly by an **electoral college** of the **elected** members of both Houses of Parliament and the **elected** members of state Legislative Assemblies, including Delhi and Puducherry. Voting is by proportional representation with the single transferable vote, by secret ballot.',
      example: 'Nominated MPs and members of state Legislative Councils do **not** vote. Disputes go to the **Supreme Court** (Art 71).',
    },
    {
      title: 'Vice-President',
      text: '**Art 63** there shall be a Vice-President; **Art 64** he is ex officio **Chairman of the Rajya Sabha**. Elected by **all** members of both Houses of Parliament (elected and nominated); state legislators do not vote. Minimum age 35, term 5 years. Removed by a Rajya Sabha resolution agreed to by the Lok Sabha.',
    },
    {
      title: 'PM and council of ministers',
      text: '**Art 74**: a council of ministers headed by the PM aids and advises the President. **Art 75**: the President appoints the PM; the council is **collectively responsible to the Lok Sabha**. The **91st Amendment (2003)** caps the council at **15%** of the Lok Sabha strength. Three ranks: Cabinet ministers, Ministers of State, Deputy Ministers.',
      example: '**Art 76** Attorney General, the highest law officer of the Union, appointed by the President.',
    },
    {
      title: 'Lok Sabha and Rajya Sabha basics',
      text: '**Art 79**: Parliament = President + Rajya Sabha + Lok Sabha. **Art 80** Rajya Sabha: maximum **250** (238 from states and UTs + **12 nominated** for literature, science, art and social service). **Art 81** Lok Sabha: maximum **550 elected** members. Rajya Sabha is a **permanent House**: members serve 6 years and one-third retire every second year. Lok Sabha lasts 5 years unless dissolved.',
      example: 'Minimum age: Lok Sabha **25**, Rajya Sabha **30**, President and Vice-President **35**.',
    },
    {
      title: 'Presiding officers, sessions, quorum',
      text: '**Art 93** Speaker and Deputy Speaker of the Lok Sabha; **Art 89** Chairman and Deputy Chairman of the Rajya Sabha. **Art 85**: the gap between two sessions cannot exceed **6 months**; by convention there are three sessions (Budget, Monsoon, Winter). **Art 100**: quorum is **one-tenth** of the total members of the House.',
      example: 'Question Hour is the first hour of a sitting. Zero Hour is an Indian practice not mentioned in the rules.',
    },
    {
      title: 'Bills and the joint sitting',
      text: "**Art 110** defines a money bill; the **Speaker** certifies it. It is introduced only in the Lok Sabha with the President's recommendation. The Rajya Sabha can only make recommendations within **14 days** (Art 109). **Art 108**: a joint sitting, called by the President and presided over by the **Speaker**, settles a deadlock on an ordinary bill. No joint sitting for a money bill or a constitutional amendment (Art 368).",
      example:
        'Joint sittings so far: **Dowry Prohibition Bill (1961)**, Banking Service Commission (Repeal) Bill (1978), **Prevention of Terrorism Bill (2002)**.',
    },
    {
      title: 'Other articles often asked',
      text: "**Art 112** annual financial statement (the Budget); **Art 117** financial bills; **Art 111** President's assent; **Art 249** Rajya Sabha can let Parliament make laws on a State List subject in the national interest; **Art 312** Rajya Sabha can create new all-India services. Emergencies: **352** national, **356** President's rule in a state, **360** financial.",
      example: 'The word "Budget" is not used in the Constitution; Article 112 calls it the annual financial statement.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'Parliament has three parts',
      figure: {
        viewBox: '0 0 320 225',
        svg: `
<rect x="76" y="14" width="168" height="30" rx="6" class="d-fill" data-step="1"/><rect x="76" y="14" width="168" height="30" rx="6" data-step="1"/>
<text x="160" y="35" text-anchor="middle" data-step="1">Parliament (Art 79)</text>
<line x1="160" y1="44" x2="160" y2="58" data-step="1"/><line x1="56" y1="58" x2="264" y2="58" data-step="1"/>
<line x1="56" y1="58" x2="56" y2="72" data-step="1"/>
<line x1="160" y1="58" x2="160" y2="72" data-step="1"/>
<line x1="264" y1="58" x2="264" y2="72" data-step="1"/>
<rect x="12" y="72" width="88" height="28" rx="6" class="d-fill-green" data-step="2"/><rect x="12" y="72" width="88" height="28" rx="6" data-step="2"/>
<text x="56" y="91" text-anchor="middle" data-step="2">President</text>
<text x="56" y="120" text-anchor="middle" class="d-small" data-step="2">Art 52</text>
<text x="56" y="137" text-anchor="middle" class="d-small" data-step="2">not a member</text>
<text x="56" y="154" text-anchor="middle" class="d-small" data-step="2">of either House</text>
<text x="56" y="171" text-anchor="middle" class="d-small" data-step="2">assents to bills</text>
<rect x="112" y="72" width="96" height="28" rx="6" class="d-fill-blue" data-step="3"/><rect x="112" y="72" width="96" height="28" rx="6" data-step="3"/>
<text x="160" y="91" text-anchor="middle" data-step="3">Rajya Sabha</text>
<text x="160" y="120" text-anchor="middle" class="d-small" data-step="3">Art 80</text>
<text x="160" y="137" text-anchor="middle" class="d-small" data-step="3">max 250</text>
<text x="160" y="154" text-anchor="middle" class="d-small" data-step="3">(12 nominated)</text>
<text x="160" y="171" text-anchor="middle" class="d-small" data-step="3">permanent House</text>
<text x="160" y="188" text-anchor="middle" class="d-small" data-step="3 5">chair:</text>
<text x="160" y="205" text-anchor="middle" class="d-small" data-step="3 5">Vice-President</text>
<rect x="220" y="72" width="88" height="28" rx="6" class="d-fill-pink" data-step="4"/><rect x="220" y="72" width="88" height="28" rx="6" data-step="4"/>
<text x="264" y="91" text-anchor="middle" data-step="4">Lok Sabha</text>
<text x="264" y="120" text-anchor="middle" class="d-small" data-step="4">Art 81</text>
<text x="264" y="137" text-anchor="middle" class="d-small" data-step="4">max 550 elected</text>
<text x="264" y="154" text-anchor="middle" class="d-small" data-step="4">5-year term</text>
<text x="264" y="171" text-anchor="middle" class="d-small" data-step="4">can be dissolved</text>
<text x="264" y="188" text-anchor="middle" class="d-small" data-step="4 5">chair: Speaker</text>`,
      },
      explain: [
        'Article 79: Parliament = the President + the Rajya Sabha + the Lok Sabha. Three parts, not two.',
        "The President is part of Parliament but sits in neither House. No bill becomes law without the President's assent.",
        'Rajya Sabha (Art 80): at most 250 members, 12 of them nominated. It is never dissolved; one-third of members retire every second year.',
        'Lok Sabha (Art 81): at most 550 elected members. Its term is 5 years, and it can be dissolved earlier.',
        'Who presides: the Vice-President chairs the Rajya Sabha; the Lok Sabha elects its own **Speaker**.',
      ],
    },
    {
      type: 'diagram',
      title: 'Path of a money bill',
      figure: {
        viewBox: '0 0 320 240',
        svg: `
<rect x="20" y="14" width="280" height="24" rx="6" class="d-fill" data-step="1"/><rect x="20" y="14" width="280" height="24" rx="6" data-step="1"/>
<text x="160" y="30" text-anchor="middle" class="d-small" data-step="1">Introduced in Lok Sabha only</text>
<line x1="160" y1="40" x2="160" y2="50" data-step="2"/><polyline points="156,44 160,50 164,44" data-step="2"/>
<rect x="20" y="52" width="280" height="24" rx="6" class="d-fill" data-step="2"/><rect x="20" y="52" width="280" height="24" rx="6" data-step="2"/>
<text x="160" y="68" text-anchor="middle" class="d-small" data-step="2">Speaker certifies it: money bill (Art 110)</text>
<line x1="160" y1="78" x2="160" y2="88" data-step="3"/><polyline points="156,82 160,88 164,82" data-step="3"/>
<rect x="20" y="90" width="280" height="24" rx="6" class="d-fill" data-step="3"/><rect x="20" y="90" width="280" height="24" rx="6" data-step="3"/>
<text x="160" y="106" text-anchor="middle" class="d-small" data-step="3">Lok Sabha passes it</text>
<line x1="160" y1="116" x2="160" y2="126" data-step="3"/><polyline points="156,120 160,126 164,120" data-step="3"/>
<rect x="20" y="128" width="280" height="24" rx="6" class="d-fill-pink" data-step="3"/><rect x="20" y="128" width="280" height="24" rx="6" data-step="3"/>
<text x="160" y="144" text-anchor="middle" class="d-small d-red" data-step="3">Rajya Sabha: 14 days, can only recommend</text>
<line x1="160" y1="154" x2="160" y2="164" data-step="4"/><polyline points="156,158 160,164 164,158" data-step="4"/>
<rect x="20" y="166" width="280" height="24" rx="6" class="d-fill" data-step="4"/><rect x="20" y="166" width="280" height="24" rx="6" data-step="4"/>
<text x="160" y="182" text-anchor="middle" class="d-small" data-step="4">Lok Sabha accepts or rejects them</text>
<line x1="160" y1="192" x2="160" y2="202" data-step="5"/><polyline points="156,196 160,202 164,196" data-step="5"/>
<rect x="20" y="204" width="280" height="24" rx="6" class="d-fill" data-step="5"/><rect x="20" y="204" width="280" height="24" rx="6" data-step="5"/>
<text x="160" y="220" text-anchor="middle" class="d-small" data-step="5">President: assent or withhold, no return</text>`,
      },
      explain: [
        "A money bill can start only in the Lok Sabha, and only on the President's recommendation.",
        'The Speaker certifies it as a money bill (Art 110(3)), and that decision is final.',
        'After the Lok Sabha passes it, the Rajya Sabha gets **14 days** (Art 109). It cannot amend or reject; it can only recommend.',
        'The Lok Sabha may accept or reject those recommendations. If the Rajya Sabha keeps it past 14 days, it is deemed passed by both Houses.',
        'The President gives or withholds assent but cannot return it. There is never a joint sitting on a money bill.',
      ],
    },
    {
      type: 'diagram',
      title: 'Ordinary bill: deadlock and the joint sitting',
      figure: {
        viewBox: '0 0 320 260',
        svg: `
<rect x="30" y="14" width="260" height="26" rx="6" class="d-fill" data-step="1"/><rect x="30" y="14" width="260" height="26" rx="6" data-step="1"/>
<text x="160" y="31" text-anchor="middle" class="d-small" data-step="1">Bill passed by the House where it began</text>
<line x1="85" y1="40" x2="85" y2="62" data-step="2"/><polyline points="81,56 85,62 89,56" data-step="2"/>
<line x1="233" y1="40" x2="233" y2="62" data-step="3"/><polyline points="229,56 233,62 237,56" data-step="3"/>
<rect x="20" y="62" width="130" height="40" rx="6" class="d-fill-green" data-step="2"/><rect x="20" y="62" width="130" height="40" rx="6" data-step="2"/>
<text x="85" y="78" text-anchor="middle" class="d-small" data-step="2">Other House</text>
<text x="85" y="93" text-anchor="middle" class="d-small" data-step="2">passes it too</text>
<rect x="160" y="62" width="146" height="72" rx="6" class="d-fill-pink" data-step="3"/><rect x="160" y="62" width="146" height="72" rx="6" data-step="3"/>
<text x="233" y="79" text-anchor="middle" class="d-small" data-step="3">Other House rejects it,</text>
<text x="233" y="94" text-anchor="middle" class="d-small" data-step="3">insists on changes, or</text>
<text x="233" y="109" text-anchor="middle" class="d-small" data-step="3">sits on it for more</text>
<text x="233" y="124" text-anchor="middle" class="d-small" data-step="3">than 6 months</text>
<line x1="233" y1="134" x2="233" y2="152" data-step="4"/><polyline points="229,146 233,152 237,146" data-step="4"/>
<rect x="160" y="152" width="146" height="54" rx="6" class="d-fill-blue" data-step="4"/><rect x="160" y="152" width="146" height="54" rx="6" data-step="4"/>
<text x="233" y="169" text-anchor="middle" class="d-small" data-step="4">Joint sitting (Art 108)</text>
<text x="233" y="184" text-anchor="middle" class="d-small" data-step="4">President summons it,</text>
<text x="233" y="199" text-anchor="middle" class="d-small" data-step="4">Speaker presides</text>
<line x1="233" y1="206" x2="233" y2="222" data-step="5"/><polyline points="229,216 233,222 237,216" data-step="5"/>
<line x1="85" y1="102" x2="85" y2="222" data-step="2"/><polyline points="81,216 85,222 89,216" data-step="2"/>
<rect x="20" y="222" width="280" height="26" rx="6" class="d-fill" data-step="5"/><rect x="20" y="222" width="280" height="26" rx="6" data-step="5"/>
<text x="160" y="239" text-anchor="middle" class="d-small" data-step="5">President: assents, withholds or returns once</text>`,
      },
      explain: [
        'An ordinary bill can start in either House and must be passed by both (Art 107).',
        'If the other House passes it too, the bill goes straight to the President.',
        'Deadlock: the other House rejects it, insists on amendments the first House will not accept, or lets more than 6 months pass.',
        'The President may then summon a **joint sitting** (Art 108). The Speaker presides and a majority of members present and voting decides.',
        'The President assents, withholds, or returns it once (Art 111). If both Houses pass it again, assent cannot be withheld.',
      ],
    },
  ],
  comparisons: [
    {
      title: 'Lok Sabha vs Rajya Sabha',
      items: ['Lok Sabha', 'Rajya Sabha'],
      rows: [
        { aspect: 'Article', values: ['Art 81', 'Art 80'] },
        { aspect: 'Maximum strength', values: ['550 elected', '250 (238 elected + 12 nominated)'] },
        {
          aspect: 'How members are chosen',
          values: ['Directly by voters', 'Indirectly by elected MLAs (single transferable vote); 12 nominated by the President'],
        },
        { aspect: 'Term', values: ['5 years; can be dissolved', 'Permanent; members serve 6 years, one-third retire every 2 years'], key: true },
        { aspect: 'Minimum age', values: ['25', '30'] },
        { aspect: 'Presiding officer', values: ['Speaker, elected from its members', 'Chairman, the Vice-President (ex officio)'] },
        { aspect: 'Money bills', values: ['Introduced only here; has the final say', 'Only recommends, within 14 days'], key: true },
        {
          aspect: 'No-confidence motion',
          values: ['Only here; the council of ministers is responsible to it', 'Cannot remove the government'],
          key: true,
        },
        {
          aspect: 'Special powers',
          values: [
            'Speaker certifies money bills and presides over joint sittings',
            'Art 249 (State List laws) and Art 312 (new all-India services)',
          ],
        },
      ],
      reveal:
        'The Lok Sabha controls money and the government. The Rajya Sabha is permanent and holds two special powers that protect the federal balance.',
      whenToUse: [
        'Questions on money bills, no-confidence, the Speaker or dissolution.',
        'Questions on permanence, nominated members, the Vice-President, Art 249 or Art 312.',
      ],
    },
    {
      title: 'Money bill vs financial bill vs ordinary bill',
      items: ['Money bill', 'Financial bill (Art 117(1))', 'Ordinary bill'],
      rows: [
        { aspect: 'Article', values: ['Art 110', 'Art 117(1)', 'Art 107'] },
        { aspect: 'Where introduced', values: ['Lok Sabha only', 'Lok Sabha only', 'Either House'] },
        { aspect: "President's recommendation to introduce", values: ['Needed', 'Needed', 'Not needed'] },
        { aspect: 'Rajya Sabha can amend or reject?', values: ['No; only recommends within 14 days', 'Yes', 'Yes'], key: true },
        { aspect: 'Joint sitting possible?', values: ['No', 'Yes', 'Yes'], key: true },
        {
          aspect: 'Who decides its status',
          values: ['Speaker certifies; the decision is final', 'Not certified by the Speaker', 'Not certified by the Speaker'],
        },
        { aspect: 'President can return it?', values: ['No; assents or withholds', 'Yes, once', 'Yes, once'] },
      ],
      reveal:
        'A money bill deals only with the matters in Art 110 (taxes, borrowing, the Consolidated Fund). A financial bill touches those matters but also others, so after introduction it follows the ordinary procedure.',
      whenToUse: [
        'The bill deals only with taxation, borrowing or spending from the Consolidated Fund.',
        'The bill includes some money matters along with other provisions.',
        'Any other bill.',
      ],
    },
  ],
  qa: [
    {
      q: 'Who elects the President?',
      a: [
        'Elected members of both Houses of Parliament.',
        'Elected members of state Legislative Assemblies, including Delhi and Puducherry.',
        'Nominated members do not vote.',
      ],
      tag: 'Asked often',
    },
    {
      q: 'Who elects the Vice-President?',
      a: ['All members of both Houses of Parliament, elected and nominated.', 'State legislators do not take part.'],
      tag: 'Trap',
    },
    {
      q: 'Who administers the oath to the President, and to whom does the President resign?',
      a: ['Oath: Chief Justice of India.', 'Resignation: addressed to the Vice-President.'],
    },
    {
      q: 'Which article gives the President the power to pardon? And the power to issue ordinances?',
      a: ['Pardon: Article 72 (Governor: Article 161).', 'Ordinance: Article 123 (Governor: Article 213).'],
      tag: 'Asked often',
    },
    {
      q: 'Who decides whether a bill is a money bill?',
      a: ['The Speaker of the Lok Sabha.', 'The decision is final (Article 110(3)).'],
      tag: 'Asked often',
    },
    {
      q: 'How long can the Rajya Sabha hold a money bill?',
      a: ['14 days.', 'After that it is deemed passed by both Houses in the form the Lok Sabha passed it.'],
    },
    {
      q: 'Who presides over a joint sitting of Parliament?',
      a: ['The Speaker of the Lok Sabha (Article 118(4)).', "In the Speaker's absence, the Deputy Speaker."],
      tag: 'Trap',
    },
    {
      q: 'Which bills can never go to a joint sitting?',
      a: ['Money bills.', 'Constitutional amendment bills (Article 368).'],
    },
    {
      q: 'What is the maximum gap allowed between two sessions of Parliament?',
      a: ['Six months (Article 85).', 'So Parliament must meet at least twice a year.'],
    },
    {
      q: 'Which amendment limits the size of the council of ministers?',
      a: ['91st Amendment (2003).', 'Total ministers, including the PM, cannot exceed 15% of the Lok Sabha strength.'],
    },
    {
      q: 'What is the quorum of either House?',
      a: ['One-tenth of the total number of members (Article 100).'],
    },
    {
      q: 'Name the two special powers of the Rajya Sabha.',
      a: [
        'Article 249: allow Parliament to legislate on a State List subject in the national interest.',
        'Article 312: create new all-India services.',
        'Both need a two-thirds majority of members present and voting.',
      ],
      tag: 'Asked often',
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'What is the minimum age to become a member of the Rajya Sabha?',
      options: ['21 years', '25 years', '30 years', '35 years'],
      answer: 2,
      explain: 'Rajya Sabha 30, Lok Sabha 25, President and Vice-President 35.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Who is the ex officio Chairman of the Rajya Sabha?',
      options: ['The President', 'The Vice-President', 'The Speaker', 'The Prime Minister'],
      answer: 1,
      explain: 'Article 64 makes the Vice-President ex officio Chairman of the Council of States.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'How many members can the President nominate to the Rajya Sabha?',
      options: ['2', '10', '12', '14'],
      answer: 2,
      explain: 'Article 80: 12 members with knowledge of literature, science, art or social service.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Who presides over a joint sitting of the two Houses of Parliament?',
      options: ['The President', 'The Vice-President', 'The Speaker of the Lok Sabha', 'The Chief Justice of India'],
      answer: 2,
      explain: "Article 118(4): the Speaker presides; in the Speaker's absence, the Deputy Speaker.",
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The President can issue ordinances under which article?',
      options: ['Article 72', 'Article 110', 'Article 123', 'Article 356'],
      answer: 2,
      explain: "Article 123. Article 72 is pardoning power; Article 356 is President's rule.",
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which article deals with the impeachment of the President?',
      options: ['Article 56', 'Article 61', 'Article 67', 'Article 74'],
      answer: 1,
      explain: 'Article 61: the only ground is "violation of the Constitution".',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Who certifies a bill as a money bill?',
      options: ['The President', 'The Finance Minister', 'The Speaker of the Lok Sabha', 'The Chairman of the Rajya Sabha'],
      answer: 2,
      explain: 'Article 110(3): the Speaker decides, and the decision is final.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Within how many days must the Rajya Sabha return a money bill to the Lok Sabha?',
      options: ['7 days', '14 days', '30 days', '6 months'],
      answer: 1,
      explain: 'Article 109: 14 days, with or without recommendations the Lok Sabha may ignore.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which of these does NOT take part in the election of the President?',
      options: [
        'Elected members of the Lok Sabha',
        'Elected members of the Rajya Sabha',
        'Elected members of the Delhi Legislative Assembly',
        'Nominated members of the Rajya Sabha',
      ],
      answer: 3,
      explain: 'Only elected members vote. Nominated members of either House are left out.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The council of ministers is collectively responsible to:',
      options: ['The President', 'The Rajya Sabha', 'The Lok Sabha', 'Parliament as a whole'],
      answer: 2,
      explain: 'Article 75(3). That is why a no-confidence motion can be moved only in the Lok Sabha.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The maximum gap between two sessions of Parliament is:',
      options: ['3 months', '4 months', '6 months', '1 year'],
      answer: 2,
      explain: 'Article 85 says six months must not pass between the last sitting of one session and the first of the next.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which amendment capped the size of the council of ministers at 15% of the Lok Sabha strength?',
      options: ['42nd', '61st', '91st', '101st'],
      answer: 2,
      explain: 'The 91st Amendment (2003). The 61st lowered the voting age; the 101st brought GST.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'The first joint sitting of the Indian Parliament was held on which bill?',
      options: ['Prevention of Terrorism Bill', 'Dowry Prohibition Bill', 'Banking Service Commission (Repeal) Bill', 'Hindu Code Bill'],
      answer: 1,
      explain: 'Dowry Prohibition Bill, 1961. The other two joint sittings were in 1978 and 2002.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Under which article can the Rajya Sabha authorise Parliament to make a law on a subject in the State List?',
      options: ['Article 249', 'Article 250', 'Article 312', 'Article 368'],
      answer: 0,
      explain: 'Article 249, by a resolution of two-thirds of members present and voting. Article 312 is about all-India services.',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'The Rajya Sabha is a permanent House and cannot be dissolved.',
      answer: true,
      explain: 'One-third of its members retire every second year; the House itself never dissolves.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'Nominated members of Parliament vote in the election of the Vice-President.',
      answer: true,
      explain: 'The Vice-President is elected by all members of both Houses, elected and nominated.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'A joint sitting can be called to resolve a deadlock over a constitutional amendment bill.',
      answer: false,
      explain: 'Article 368 needs each House to pass the bill separately. Joint sittings are only for ordinary and financial bills.',
    },
    {
      type: 'truefalse',
      difficulty: 'hard',
      statement: 'A financial bill under Article 117(1) can be amended or rejected by the Rajya Sabha.',
      answer: true,
      explain: 'Only a money bill limits the Rajya Sabha. A financial bill follows the ordinary procedure after introduction.',
    },
  ],
};

export default topic;
