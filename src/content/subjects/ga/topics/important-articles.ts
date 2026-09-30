import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'important-articles',
  title: 'Important articles',
  level: 'intermediate',
  masteryMinutes: 90,
  reviseMinutes: 30,
  priority: 'high',
  weightage: { tier1: 0.5, tier2: 0.5 },
  tags: [
    'articles',
    'Parts',
    'Article 1',
    'Article 21',
    'Article 32',
    'Article 280',
    'Article 324',
    'Article 352',
    'Article 356',
    'Article 360',
    'Article 368',
  ],
  summary:
    'Only the articles SSC actually asks, grouped Part by Part: from Art 1 (India, that is Bharat) to Art 368 (amendment). Learn each one as a number-to-idea pair, then use the flashcards to drill "Which article…?" both ways.',
  patterns: [
    { name: 'Which article deals with…', frequency: 'most', example: 'Which article provides for the Finance Commission?' },
    { name: 'Article number to subject', frequency: 'most', example: 'Article 324 of the Constitution deals with:' },
    { name: 'Emergency articles', frequency: 'often', example: "President's rule in a state is imposed under which article?" },
    { name: 'Union and State pairs', frequency: 'often', example: "The Governor's power to issue ordinances is under which article?" },
    { name: 'Which Part contains…', frequency: 'rare', example: 'The provisions on elections are in which Part of the Constitution?' },
  ],
  keyPoints: [
    {
      title: 'Part I and Part II: territory and citizenship',
      text: '**Art 1**: "India, that is Bharat, shall be a **Union of States**" · Art 2: admit or set up new states · **Art 3**: form new states, change boundaries or names (simple majority, bill needs the President\'s recommendation) · Art 4: such laws are not amendments under Art 368 · **Art 5**: citizenship at commencement · Art 9: voluntary foreign citizenship ends Indian citizenship · **Art 11**: Parliament regulates citizenship by law.',
    },
    {
      title: 'Parts III, IV, IVA: headline articles only',
      text: 'Rights: Art 12 "State" · 13 laws against FRs are void · **14** equality before law · **17** untouchability abolished · **19** six freedoms · **21** life and personal liberty · **21A** education, 6 to 14 years · **32** constitutional remedies. DPSP: **40** village panchayats · **44** uniform civil code · 48A environment · **50** separate judiciary from executive. Duties: **51A**.',
      example: 'The full detail (writs, who gets which right, DPSP groups) is in the Fundamental Rights, DPSP and Duties topic.',
    },
    {
      title: 'Part V: the Union executive and Parliament',
      text: '**Art 52** President · 53 executive power in the President · **61** impeachment · **63** Vice-President · 64 VP chairs the Rajya Sabha · **72** pardoning power · **74** council of ministers aids and advises · 75 PM and ministers appointed · **76** Attorney General · 79 Parliament · **108** joint sitting · **110** money bill · **112** Budget (annual financial statement) · **123** ordinances.',
      example: 'Details (ages, elections, the money bill path) are in the Union executive and Parliament topic.',
    },
    {
      title: 'Part V: Supreme Court and CAG',
      text: '**Art 124**: Supreme Court established · **129**: a court of record · **131**: original jurisdiction (Centre vs states, state vs state) · 137: review its own judgments · **141**: its law binds all courts · **143**: President may seek its **advisory opinion** · **148**: Comptroller and Auditor General (CAG).',
    },
    {
      title: 'Part VI: the States',
      text: "**Art 153** Governor · 155 Governor appointed by the President · **161** Governor's pardoning power · 163 council of ministers · **165** Advocate General · **169** create or abolish a Legislative Council · 200 Governor may reserve a bill for the President · **213** Governor's ordinances · **214** High Courts · **226** High Court writs · 231 one High Court for two or more states.",
      example: 'Nearby: **239AA** special provisions for Delhi; Part IX Panchayats (243 to 243O); Part IXA Municipalities (243P to 243ZG).',
    },
    {
      title: 'Centre-state relations and finance',
      text: '**Art 246**: subjects of laws, via the three Lists of the Seventh Schedule · **249**: Rajya Sabha lets Parliament legislate on a State List subject · **262**: inter-state river water disputes · **263**: Inter-State Council · **266**: Consolidated Fund · **267**: Contingency Fund · **280**: Finance Commission, every 5 years · **300A**: right to property, a legal right · **301**: freedom of trade and commerce.',
    },
    {
      title: 'Services, elections, special classes',
      text: '**Art 312** all-India services · **315** UPSC and State PSCs · 323A administrative tribunals · **324** Election Commission · **326** adult suffrage (voting age 18 since the 61st Amendment) · 330 Lok Sabha seats reserved for SCs and STs · **338** National Commission for SCs · 338A for STs · 338B for Backward Classes · 340 commission on backward classes.',
    },
    {
      title: 'Language, emergency, amendment',
      text: "**Art 343**: Hindi in Devanagari, official language of the Union · 350A: primary education in the mother tongue · 351: develop Hindi · **352** national emergency · **356** President's rule · **360** financial emergency · 358 and 359: FRs during an emergency · 361: immunity of President and Governors · **368** amending the Constitution · **370** Jammu and Kashmir (inoperative since 2019) · 371: special provisions for some states.",
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'The Constitution as a strip of Parts',
      figure: {
        viewBox: '0 0 352 424',
        svg: `
<text x="14" y="18" class="d-small d-soft">Part</text><text x="76" y="18" class="d-small d-soft">what, articles</text><text x="222" y="18" class="d-small d-soft">must know</text>
<rect x="8" y="26" width="336" height="24" rx="5" class="d-fill-blue" data-step="1"/><rect x="8" y="26" width="336" height="24" rx="5" data-step="1"/>
<text x="14" y="43" class="d-blue" data-step="1">I</text><text x="76" y="42" class="d-small" data-step="1">Union, territory 1–4</text><text x="222" y="43" class="d-red" data-step="1">1, 3</text>
<rect x="8" y="52" width="336" height="24" rx="5" class="d-fill-blue" data-step="1"/><rect x="8" y="52" width="336" height="24" rx="5" data-step="1"/>
<text x="14" y="69" class="d-blue" data-step="1">II</text><text x="76" y="68" class="d-small" data-step="1">Citizenship 5–11</text><text x="222" y="69" class="d-red" data-step="1">5, 9, 11</text>
<rect x="8" y="78" width="336" height="24" rx="5" class="d-fill-green" data-step="2"/><rect x="8" y="78" width="336" height="24" rx="5" data-step="2"/>
<text x="14" y="95" class="d-blue" data-step="2">III</text><text x="76" y="94" class="d-small" data-step="2">Rights 12–35</text><text x="222" y="95" class="d-red" data-step="2">14, 21, 32</text>
<rect x="8" y="104" width="336" height="24" rx="5" class="d-fill-green" data-step="2"/><rect x="8" y="104" width="336" height="24" rx="5" data-step="2"/>
<text x="14" y="121" class="d-blue" data-step="2">IV</text><text x="76" y="120" class="d-small" data-step="2">DPSP 36–51</text><text x="222" y="121" class="d-red" data-step="2">40, 44, 50</text>
<rect x="8" y="130" width="336" height="24" rx="5" class="d-fill-green" data-step="2"/><rect x="8" y="130" width="336" height="24" rx="5" data-step="2"/>
<text x="14" y="147" class="d-blue" data-step="2">IVA</text><text x="76" y="146" class="d-small" data-step="2">Duties</text><text x="222" y="147" class="d-red" data-step="2">51A</text>
<rect x="8" y="156" width="336" height="24" rx="5" class="d-fill" data-step="3"/><rect x="8" y="156" width="336" height="24" rx="5" data-step="3"/>
<text x="14" y="173" class="d-blue" data-step="3">V</text><text x="76" y="172" class="d-small" data-step="3">President, Parliament</text><text x="222" y="173" class="d-red" data-step="3">72, 110, 123</text>
<rect x="8" y="182" width="336" height="24" rx="5" class="d-fill" data-step="3"/><rect x="8" y="182" width="336" height="24" rx="5" data-step="3"/>
<text x="14" y="199" class="d-blue" data-step="3">V</text><text x="76" y="198" class="d-small" data-step="3">Supreme Court, CAG</text><text x="222" y="199" class="d-red" data-step="3">124, 143, 148</text>
<rect x="8" y="208" width="336" height="24" rx="5" class="d-fill-pink" data-step="4"/><rect x="8" y="208" width="336" height="24" rx="5" data-step="4"/>
<text x="14" y="225" class="d-blue" data-step="4">VI</text><text x="76" y="224" class="d-small" data-step="4">States 152–237</text><text x="222" y="225" class="d-red" data-step="4">153, 213, 226</text>
<rect x="8" y="234" width="336" height="24" rx="5" data-step="5"/>
<text x="14" y="251" class="d-blue" data-step="5">XI</text><text x="76" y="250" class="d-small" data-step="5">Centre-state 245–263</text><text x="230" y="251" class="d-red" data-step="5">246, 263</text>
<rect x="8" y="260" width="336" height="24" rx="5" data-step="5"/>
<text x="14" y="277" class="d-blue" data-step="5">XII</text><text x="76" y="276" class="d-small" data-step="5">Finance 264–300A</text><text x="222" y="277" class="d-red" data-step="5">280, 300A</text>
<rect x="8" y="286" width="336" height="24" rx="5" data-step="5"/>
<text x="14" y="303" class="d-blue" data-step="5">XV</text><text x="76" y="302" class="d-small" data-step="5">Elections 324–329</text><text x="222" y="303" class="d-red" data-step="5">324, 326</text>
<rect x="8" y="312" width="336" height="24" rx="5" data-step="5"/>
<text x="14" y="329" class="d-blue" data-step="5">XVII</text><text x="76" y="328" class="d-small" data-step="5">Official language</text><text x="222" y="329" class="d-red" data-step="5">343</text>
<rect x="8" y="338" width="336" height="24" rx="5" class="d-fill-pink" data-step="6"/><rect x="8" y="338" width="336" height="24" rx="5" data-step="6"/>
<text x="14" y="355" class="d-blue" data-step="6">XVIII</text><text x="76" y="354" class="d-small" data-step="6">Emergency 352–360</text><text x="222" y="355" class="d-red" data-step="6">352, 356, 360</text>
<rect x="8" y="364" width="336" height="24" rx="5" class="d-fill-pink" data-step="6"/><rect x="8" y="364" width="336" height="24" rx="5" data-step="6"/>
<text x="14" y="381" class="d-blue" data-step="6">XX</text><text x="76" y="380" class="d-small" data-step="6">Amendment</text><text x="222" y="381" class="d-red" data-step="6">368</text>
<text x="176" y="412" text-anchor="middle" class="d-small d-soft">red = the articles SSC asks most</text>`,
      },
      explain: [
        'Part I opens with Art 1 ("India, that is Bharat, shall be a Union of States") and Art 3 (new states). Part II covers citizenship: 5 at commencement, 9 foreign citizenship, 11 Parliament regulates.',
        'Parts III, IV and IVA: Art 14 equality, Art 21 life and liberty, Art 32 remedies; DPSP 40 panchayats, 44 uniform civil code, 50 separate judiciary; Art 51A duties.',
        'Part V is the Union: Art 72 pardon, 110 money bill, 123 ordinance; then Art 124 Supreme Court, 143 advisory opinion, 148 CAG.',
        "Part VI mirrors Part V for the states: Art 153 Governor, 213 Governor's ordinance, 226 High Court writs.",
        'Further on: Art 246 the three Lists, 263 Inter-State Council, 280 Finance Commission, 300A property, 324 Election Commission, 326 adult suffrage, 343 Hindi as official language.',
        'Near the end: the three emergencies (352, 356, 360) in Part XVIII and the amendment procedure (368) in Part XX.',
      ],
    },
  ],
  comparisons: [
    {
      title: 'The three emergencies',
      items: ['National emergency', "President's rule", 'Financial emergency'],
      rows: [
        { aspect: 'Article', values: ['**Art 352**', '**Art 356**', '**Art 360**'], key: true },
        {
          aspect: 'Grounds',
          values: [
            'War, external aggression or armed rebellion',
            'Constitutional machinery fails in a state (Art 365 also counts)',
            'Financial stability or credit of India threatened',
          ],
          key: true,
        },
        { aspect: 'Approval by Parliament within', values: ['**1 month**', '2 months', '2 months'] },
        { aspect: 'Majority needed', values: ['Special majority in each House', 'Simple majority', 'Simple majority'] },
        {
          aspect: 'How long it lasts',
          values: ['6 months at a time, no upper limit', '6 months at a time, **maximum 3 years**', 'Until revoked, **no limit**'],
        },
        {
          aspect: 'Effect on Fundamental Rights',
          values: ['Art 19 suspended (war or external aggression); others under Art 359, except **Arts 20 and 21**', 'None', 'None'],
        },
        { aspect: 'Used so far', values: ['3 times: 1962, 1971, 1975', 'More than 100 times', '**Never**'], key: true },
      ],
      reveal:
        "Only Art 352 touches Fundamental Rights, and only it needs a special majority within one month. President's rule is the one used often; a financial emergency has never been declared.",
      whenToUse: [
        'The whole country or a part of it is threatened by war or armed rebellion.',
        'One state cannot be run by its own government; Parliament takes over its law-making.',
        "India's finances or credit are in danger; salaries, even of judges, can be cut.",
      ],
    },
    {
      title: 'Union articles and their State twins',
      items: ['Union', 'State'],
      rows: [
        { aspect: 'Head of the executive', values: ['President, **Art 52**', 'Governor, **Art 153**'] },
        { aspect: 'Pardoning power', values: ['**Art 72**', '**Art 161**'], key: true },
        { aspect: 'Ordinances', values: ['**Art 123**', '**Art 213**'], key: true },
        { aspect: 'Council of ministers', values: ['Art 74', 'Art 163'] },
        { aspect: 'Chief law officer', values: ['Attorney General, **Art 76**', 'Advocate General, **Art 165**'] },
        { aspect: 'Legislature', values: ['Parliament, Art 79', 'State legislature, Art 168'] },
        { aspect: 'Money bill', values: ['Art 110', 'Art 199'] },
        { aspect: 'Court and writs', values: ['Supreme Court, Art 124; writs Art 32', 'High Court, Art 214; writs Art 226'], key: true },
      ],
      reveal:
        "Part VI copies Part V for the states, so learn them as pairs. The Governor's pardon power is narrower: no pardon for a death sentence and none for court-martial.",
      whenToUse: [
        'Anything about the President, Parliament or the Supreme Court.',
        'Anything about the Governor, a state legislature or a High Court.',
      ],
    },
  ],
  qa: [
    {
      q: 'Which article says "India, that is Bharat, shall be a Union of States"?',
      a: ['Article 1.'],
      tag: 'Asked often',
    },
    {
      q: 'Which article lets Parliament form new states or change state names and boundaries?',
      a: ['Article 3.', "Simple majority; the bill needs the President's recommendation.", 'Not an amendment under Art 368 (Art 4).'],
      tag: 'Asked often',
    },
    {
      q: 'Which article provides for the Finance Commission?',
      a: ['Article 280.', 'Constituted by the President every five years.'],
      tag: 'Asked often',
    },
    {
      q: 'Which article sets up the Election Commission?',
      a: ['Article 324.', 'Article 326 gives adult suffrage.'],
      tag: 'Asked often',
    },
    {
      q: 'Which article provides for the CAG? And the Attorney General?',
      a: ['CAG: Article 148.', 'Attorney General: Article 76.', 'Advocate General of a state: Article 165.'],
    },
    {
      q: "Under which article can the President seek the Supreme Court's opinion?",
      a: ['Article 143 (advisory jurisdiction).', 'The opinion is not binding on the President.'],
    },
    {
      q: 'Which article makes the Supreme Court a court of record?',
      a: ['Article 129.', 'For High Courts: Article 215.'],
      tag: 'Trap',
    },
    {
      q: 'Which article sets up the Inter-State Council? And inter-state water disputes?',
      a: ['Inter-State Council: Article 263.', 'Water disputes: Article 262.'],
    },
    {
      q: 'Which article makes the right to property a legal (not fundamental) right?',
      a: ['Article 300A.', 'Moved there by the 44th Amendment (1978), which deleted Art 31.'],
      tag: 'Trap',
    },
    {
      q: 'Which article makes Hindi in Devanagari the official language of the Union?',
      a: ['Article 343 (Part XVII).', 'Art 350A: primary education in the mother tongue.'],
    },
    {
      q: 'Name the three emergency articles.',
      a: ['352: national emergency.', "356: President's rule in a state.", '360: financial emergency.'],
      tag: 'Asked often',
    },
    {
      q: 'Which article deals with the Consolidated Fund? The Contingency Fund?',
      a: ['Consolidated Fund: Article 266.', 'Contingency Fund: Article 267.'],
    },
    {
      q: 'Which articles cover the Union Public Service Commission and all-India services?',
      a: ['UPSC and State PSCs: Article 315.', 'All-India services: Article 312.'],
    },
    {
      q: 'Which article sets up the National Commission for Scheduled Castes?',
      a: ['Article 338.', 'STs: 338A. Backward Classes: 338B.'],
      tag: 'Trap',
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Which article declares that "India, that is Bharat, shall be a Union of States"?',
      options: ['Article 1', 'Article 3', 'Article 5', 'Article 12'],
      answer: 0,
      explain: 'Article 1. Article 3 is about new states, 5 is citizenship, 12 defines "State" for Part III.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'The Finance Commission is constituted under which article?',
      options: ['Article 148', 'Article 280', 'Article 324', 'Article 315'],
      answer: 1,
      explain: 'Article 280. 148 is the CAG, 324 the Election Commission, 315 the Public Service Commissions.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Article 324 of the Constitution deals with:',
      options: ['Finance Commission', 'Election Commission', 'Official language', 'Amendment of the Constitution'],
      answer: 1,
      explain: 'Article 324 vests the superintendence, direction and control of elections in the Election Commission.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: "President's rule in a state is imposed under:",
      options: ['Article 352', 'Article 356', 'Article 360', 'Article 368'],
      answer: 1,
      explain: 'Article 356, on failure of the constitutional machinery in a state. 352 is national, 360 financial emergency.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'The procedure for amending the Constitution is in:',
      options: ['Article 352', 'Article 360', 'Article 368', 'Article 370'],
      answer: 2,
      explain: 'Article 368, the only article in Part XX.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'The Comptroller and Auditor General of India is provided for in:',
      options: ['Article 76', 'Article 148', 'Article 165', 'Article 280'],
      answer: 1,
      explain: 'Article 148. Article 76 is the Attorney General, 165 the Advocate General.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Under which article can the President seek the advisory opinion of the Supreme Court?',
      options: ['Article 124', 'Article 131', 'Article 143', 'Article 226'],
      answer: 2,
      explain: 'Article 143. 124 establishes the Court, 131 is original jurisdiction, 226 is High Court writs.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which article gives the Governor the power to grant pardons?',
      options: ['Article 72', 'Article 123', 'Article 161', 'Article 213'],
      answer: 2,
      explain: "Article 161. Article 72 is the President's pardon, 123 and 213 are ordinances.",
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Formation of new states and alteration of boundaries of existing states is dealt with in:',
      options: ['Article 1', 'Article 2', 'Article 3', 'Article 4'],
      answer: 2,
      explain: 'Article 3. Article 2 admits new states from outside (like Sikkim), Article 4 says such laws are not amendments under 368.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which article provides for the Inter-State Council?',
      options: ['Article 262', 'Article 263', 'Article 280', 'Article 312'],
      answer: 1,
      explain: 'Article 263. Article 262 is about inter-state river water disputes.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The right to property is now a legal right under:',
      options: ['Article 19(1)(f)', 'Article 31', 'Article 300A', 'Article 301'],
      answer: 2,
      explain: 'The 44th Amendment (1978) removed Arts 19(1)(f) and 31 and added Art 300A. Article 301 is freedom of trade.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which article declares Hindi in Devanagari script the official language of the Union?',
      options: ['Article 343', 'Article 345', 'Article 350A', 'Article 351'],
      answer: 0,
      explain: 'Article 343. 350A is mother-tongue instruction, 351 is the directive to develop Hindi.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which of these emergencies has never been declared in India?',
      options: ['National emergency', "President's rule", 'Financial emergency', 'All have been declared'],
      answer: 2,
      explain: 'A financial emergency under Article 360 has never been declared. National emergencies came in 1962, 1971 and 1975.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The Contingency Fund of India is provided for in:',
      options: ['Article 112', 'Article 266', 'Article 267', 'Article 280'],
      answer: 2,
      explain: 'Article 267. Article 266 is the Consolidated Fund and Public Accounts; 112 is the Budget.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which article provides for adult suffrage in elections to the Lok Sabha and state assemblies?',
      options: ['Article 324', 'Article 325', 'Article 326', 'Article 330'],
      answer: 2,
      explain: 'Article 326. The 61st Amendment lowered the voting age from 21 to 18.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A proclamation of national emergency must be approved by Parliament within:',
      options: ['14 days', 'One month', 'Two months', 'Six months'],
      answer: 1,
      explain: 'One month, by a special majority in each House (44th Amendment). Arts 356 and 360 allow two months.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Which article allows Parliament to create or abolish a state Legislative Council?',
      options: ['Article 168', 'Article 169', 'Article 171', 'Article 213'],
      answer: 1,
      explain: 'Article 169: Parliament acts on a resolution of the state Assembly passed by a special majority.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'The National Commission for Scheduled Tribes is set up under:',
      options: ['Article 338', 'Article 338A', 'Article 338B', 'Article 340'],
      answer: 1,
      explain: 'Article 338A. 338 is for SCs, 338B for Backward Classes, 340 is a commission to study backward classes.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Which article makes the law declared by the Supreme Court binding on all courts in India?',
      options: ['Article 129', 'Article 137', 'Article 141', 'Article 143'],
      answer: 2,
      explain: 'Article 141. 129 is court of record, 137 is review of its own judgments, 143 is advisory opinion.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'During a national emergency, which Fundamental Rights cannot be suspended?',
      options: ['Articles 14 and 19', 'Articles 19 and 21', 'Articles 20 and 21', 'Articles 21 and 32'],
      answer: 2,
      explain: 'The 44th Amendment (1978) protects Arts 20 and 21 even during an emergency.',
    },
  ],
};

export default topic;
