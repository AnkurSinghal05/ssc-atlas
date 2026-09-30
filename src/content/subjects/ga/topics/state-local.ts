import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'state-local',
  title: 'State government and local bodies',
  level: 'intermediate',
  masteryMinutes: 60,
  reviseMinutes: 20,
  priority: 'medium',
  tags: [
    'Governor',
    'Chief Minister',
    'Legislative Council',
    'Article 161',
    'Article 213',
    '73rd Amendment',
    '74th Amendment',
    'Panchayati Raj',
    'Municipalities',
    'State Election Commission',
  ],
  summary:
    "The Governor and state council of ministers (Arts 153 to 167), the state legislature (Arts 168 to 171), and local government under the 73rd and 74th Amendments (Parts IX and IXA). Questions test article numbers, the Governor's powers compared with the President's, and the key numbers: 29 and 18 subjects, one-third for women, 5-year terms.",
  patterns: [
    { name: 'Governor article to power', frequency: 'most', example: 'The Governor issues ordinances under which article?' },
    { name: '73rd and 74th Amendment numbers', frequency: 'most', example: 'How many subjects are in the Eleventh Schedule?' },
    { name: 'President vs Governor', frequency: 'often', example: 'Who administers the oath to the Governor?' },
    { name: 'Legislative Council', frequency: 'often', example: 'Maximum strength of a Legislative Council?' },
    { name: 'Part and article of local bodies', frequency: 'often', example: 'The State Election Commission is provided under which article?' },
    { name: 'Panchayati Raj history', frequency: 'rare', example: 'Which state first adopted Panchayati Raj?' },
  ],
  keyPoints: [
    {
      title: 'Governor: the articles that get asked',
      text: '**Art 153** a Governor for each state (one person can be Governor of two or more states) · **Art 155** appointed by the **President** by warrant under hand and seal · **Art 156** holds office during the **pleasure of the President**; term 5 years · **Art 161** pardoning power · **Art 213** ordinances.',
      example: 'Minimum age **35** (Art 157). Oath before the **Chief Justice of the High Court** (Art 159).',
    },
    {
      title: 'Chief Minister and council of ministers',
      text: '**Art 163** council of ministers headed by the CM aids and advises the Governor, except where the Governor acts in his discretion · **Art 164** the Governor appoints the CM; the council is **collectively responsible to the Legislative Assembly** · **Art 167** the CM must keep the Governor informed of all decisions.',
      example: '91st Amendment: ministers cannot exceed **15%** of the Assembly, but not fewer than 12. **Art 165** Advocate General of the state.',
    },
    {
      title: 'Governor and state bills (Art 200)',
      text: 'On a bill passed by the state legislature, the Governor may **give assent**, **withhold assent**, **return it** for reconsideration (not a money bill), or **reserve it for the President** (Art 201). If the legislature passes a returned bill again, the Governor cannot withhold assent.',
      example: "Governor's report on a breakdown of the constitutional machinery can lead to President's rule (**Art 356**).",
    },
    {
      title: 'State legislature (Arts 168 to 171)',
      text: '**Art 168** legislature = Governor + one or two Houses · **Art 169** Parliament can create or abolish a **Legislative Council** if the Assembly passes a resolution by special majority · **Art 170** Assembly: **60 to 500** members · **Art 171** Council: at most **one-third** of the Assembly, at least **40**.',
      example: 'Small states have fewer than 60 by special provision, e.g. Sikkim (32), Goa and Mizoram (40). Minimum age: MLA 25, MLC 30.',
    },
    {
      title: '73rd Amendment (1992): Panchayats',
      text: 'Added **Part IX (Arts 243 to 243O)** and the **11th Schedule (29 subjects)**. In force on **24 April 1993** (National Panchayati Raj Day). Three tiers: village, intermediate, district; states under **20 lakh** population may skip the intermediate tier. **Art 243A** Gram Sabha · **243D** reservation, **not less than one-third for women** · **243E** term **5 years**.',
      example: 'Minimum age to contest: **21**. Rooted in **Art 40** (DPSP).',
    },
    {
      title: 'State Election Commission and State Finance Commission',
      text: '**Art 243K** State Election Commission conducts panchayat elections; the State Election Commissioner is appointed by the **Governor** and removed only like a High Court judge. **Art 243I** State Finance Commission, set up by the Governor **every 5 years**, reviews panchayat finances. The 74th Amendment applies both to municipalities (Arts 243ZA and 243Y).',
      example: 'Election due within **6 months** of a dissolution (Art 243E).',
    },
    {
      title: '74th Amendment (1992): Municipalities',
      text: 'Added **Part IXA (Arts 243P to 243ZG)** and the **12th Schedule (18 subjects)**. In force on **1 June 1993**. Three types (Art 243Q): **Nagar Panchayat** for an area in transition, **Municipal Council** for a smaller urban area, **Municipal Corporation** for a larger one. **243T** one-third seats for women · **243U** term 5 years.',
      example:
        'Wards committees for a population of 3 lakh or more (243S); District Planning Committee (243ZD); Metropolitan Planning Committee (243ZE).',
    },
    {
      title: 'History and exceptions',
      text: '**Balwant Rai Mehta Committee (1957)** recommended three-tier Panchayati Raj. **Rajasthan** was first (**Nagaur, 2 October 1959**). Part IX does not apply to **Nagaland, Meghalaya, Mizoram** and some hill areas (Art 243M). **PESA Act, 1996** extends it to Fifth Schedule areas.',
      example: 'Part IXB (Arts 243ZH to 243ZT) on cooperative societies came later, by the 97th Amendment (2011).',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'Governor and a state bill (Art 200)',
      figure: {
        viewBox: '0 0 340 210',
        svg: `
<rect x="30" y="12" width="280" height="28" rx="6" class="d-fill" data-step="1"/><rect x="30" y="12" width="280" height="28" rx="6" data-step="1"/>
<text x="170" y="31" text-anchor="middle" class="d-small" data-step="1">Bill passed by the state legislature</text>
<line x1="170" y1="42" x2="170" y2="54" data-step="1"/><polyline points="166,48 170,54 174,48" data-step="1"/>
<rect x="80" y="56" width="180" height="30" rx="6" class="d-fill-blue" data-step="1"/><rect x="80" y="56" width="180" height="30" rx="6" data-step="1"/>
<text x="170" y="76" text-anchor="middle" data-step="1">Governor (Art 200)</text>
<line x1="170" y1="86" x2="170" y2="98" data-step="1"/><line x1="47" y1="98" x2="293" y2="98" data-step="1"/>
<line x1="47" y1="98" x2="47" y2="112" data-step="2"/><line x1="129" y1="98" x2="129" y2="112" data-step="3"/>
<line x1="211" y1="98" x2="211" y2="112" data-step="4"/><line x1="293" y1="98" x2="293" y2="112" data-step="5"/>
<rect x="10" y="112" width="74" height="28" rx="6" class="d-fill-green" data-step="2"/><rect x="10" y="112" width="74" height="28" rx="6" data-step="2"/>
<text x="47" y="131" text-anchor="middle" class="d-small" data-step="2">Assent</text>
<text x="47" y="160" text-anchor="middle" class="d-small" data-step="2">becomes</text>
<text x="47" y="176" text-anchor="middle" class="d-small" data-step="2">law</text>
<rect x="92" y="112" width="74" height="28" rx="6" class="d-fill-pink" data-step="3"/><rect x="92" y="112" width="74" height="28" rx="6" data-step="3"/>
<text x="129" y="131" text-anchor="middle" class="d-small" data-step="3">Withhold</text>
<text x="129" y="160" text-anchor="middle" class="d-small" data-step="3">bill ends</text>
<rect x="174" y="112" width="74" height="28" rx="6" class="d-fill" data-step="4"/><rect x="174" y="112" width="74" height="28" rx="6" data-step="4"/>
<text x="211" y="131" text-anchor="middle" class="d-small" data-step="4">Return</text>
<text x="211" y="160" text-anchor="middle" class="d-small" data-step="4">once; never</text>
<text x="211" y="176" text-anchor="middle" class="d-small" data-step="4">money bills</text>
<rect x="256" y="112" width="74" height="28" rx="6" class="d-fill-blue" data-step="5"/><rect x="256" y="112" width="74" height="28" rx="6" data-step="5"/>
<text x="293" y="131" text-anchor="middle" class="d-small" data-step="5">Reserve</text>
<text x="293" y="160" text-anchor="middle" class="d-small" data-step="5">for the</text>
<text x="293" y="176" text-anchor="middle" class="d-small" data-step="5">President</text>
<text x="293" y="192" text-anchor="middle" class="d-small" data-step="5">(Art 201)</text>`,
      },
      explain: [
        'Every bill passed by the state legislature goes to the Governor, who has four choices under Article 200.',
        'Assent: the bill becomes law.',
        'Withhold assent: the bill does not become law.',
        'Return it for reconsideration (never a money bill). If the legislature passes it again, the Governor cannot withhold assent.',
        'Reserve it for the President (Art 201). This has no match in the Union: the President cannot reserve a bill for anyone.',
      ],
    },
    {
      type: 'diagram',
      title: 'Local bodies: rural and urban',
      figure: {
        viewBox: '0 0 360 260',
        svg: `
<text x="90" y="22" text-anchor="middle" data-step="1">Rural: Part IX</text>
<text x="270" y="22" text-anchor="middle" data-step="2">Urban: Part IXA</text>
<line x1="180" y1="8" x2="180" y2="200" class="d-soft d-dash"/>
<rect x="10" y="34" width="160" height="40" rx="6" class="d-fill-green" data-step="1"/><rect x="10" y="34" width="160" height="40" rx="6" data-step="1"/>
<text x="90" y="51" text-anchor="middle" class="d-small" data-step="1">Zila Parishad</text>
<text x="90" y="67" text-anchor="middle" class="d-small" data-step="1">district</text>
<rect x="10" y="86" width="160" height="40" rx="6" class="d-fill-green" data-step="1"/><rect x="10" y="86" width="160" height="40" rx="6" data-step="1"/>
<text x="90" y="103" text-anchor="middle" class="d-small" data-step="1">Panchayat Samiti</text>
<text x="90" y="119" text-anchor="middle" class="d-small" data-step="1">intermediate (block)</text>
<rect x="10" y="138" width="160" height="40" rx="6" class="d-fill-green" data-step="1"/><rect x="10" y="138" width="160" height="40" rx="6" data-step="1"/>
<text x="90" y="155" text-anchor="middle" class="d-small" data-step="1">Gram Panchayat</text>
<text x="90" y="171" text-anchor="middle" class="d-small" data-step="1">village</text>
<rect x="190" y="34" width="160" height="40" rx="6" class="d-fill-blue" data-step="2"/><rect x="190" y="34" width="160" height="40" rx="6" data-step="2"/>
<text x="270" y="51" text-anchor="middle" class="d-small" data-step="2">Municipal Corporation</text>
<text x="270" y="67" text-anchor="middle" class="d-small" data-step="2">larger urban area</text>
<rect x="190" y="86" width="160" height="40" rx="6" class="d-fill-blue" data-step="2"/><rect x="190" y="86" width="160" height="40" rx="6" data-step="2"/>
<text x="270" y="103" text-anchor="middle" class="d-small" data-step="2">Municipal Council</text>
<text x="270" y="119" text-anchor="middle" class="d-small" data-step="2">smaller urban area</text>
<rect x="190" y="138" width="160" height="40" rx="6" class="d-fill-blue" data-step="2"/><rect x="190" y="138" width="160" height="40" rx="6" data-step="2"/>
<text x="270" y="155" text-anchor="middle" class="d-small" data-step="2">Nagar Panchayat</text>
<text x="270" y="171" text-anchor="middle" class="d-small" data-step="2">area in transition</text>
<text x="90" y="198" text-anchor="middle" class="d-small d-red" data-step="3">11th Sch: 29 subjects</text>
<text x="270" y="198" text-anchor="middle" class="d-small d-red" data-step="3">12th Sch: 18 subjects</text>
<rect x="40" y="214" width="280" height="34" rx="6" class="d-fill-pink" data-step="4"/><rect x="40" y="214" width="280" height="34" rx="6" data-step="4"/>
<text x="180" y="236" text-anchor="middle" class="d-small" data-step="4">Both: 1/3 women · 5 years · SEC · SFC</text>`,
      },
      explain: [
        'The 73rd Amendment set up three tiers of panchayats: village, intermediate (block) and district. Small states under 20 lakh people may skip the middle tier.',
        'The 74th Amendment set up three types of municipality, chosen by the size of the urban area: Nagar Panchayat, Municipal Council, Municipal Corporation.',
        'Panchayats get the **11th Schedule (29 subjects)**; municipalities get the **12th Schedule (18 subjects)**. Tip: the rural list is the longer one.',
        'Common to both: at least one-third of seats for women, a 5-year term, elections by the State Election Commission (243K) and a State Finance Commission every 5 years (243I).',
      ],
    },
  ],
  comparisons: [
    {
      title: 'President vs Governor',
      items: ['President', 'Governor'],
      rows: [
        { aspect: 'How chosen', values: ['Elected indirectly (Art 54)', 'Appointed by the President (Art 155)'], key: true },
        {
          aspect: 'Term and removal',
          values: ['5 years; impeachment (Art 61)', '5 years, but holds office at the pleasure of the President (Art 156)'],
          key: true,
        },
        { aspect: 'Minimum age', values: ['35', '35'] },
        { aspect: 'Oath before', values: ['Chief Justice of India', 'Chief Justice of the High Court'] },
        {
          aspect: 'Pardoning power',
          values: ['**Art 72**; includes court-martial sentences', '**Art 161**; no power over court-martial sentences'],
          key: true,
        },
        { aspect: 'Ordinances', values: ['**Art 123**', '**Art 213**'] },
        {
          aspect: 'Options on a bill',
          values: ['Assent, withhold, return (Art 111)', 'Assent, withhold, return, or reserve for the President (Arts 200, 201)'],
        },
        { aspect: 'Constitutional discretion', values: ['None expressly given', 'Yes, where the Constitution allows (Art 163)'] },
      ],
      reveal:
        'The Governor mirrors the President at the state level (pardon 161 vs 72, ordinance 213 vs 123), but is appointed, not elected, and can be removed at any time at the pleasure of the President.',
      whenToUse: [
        'Union-level questions: Arts 72, 123, 111, impeachment.',
        'State-level questions: Arts 161, 213, 200, reserve for the President, discretion.',
      ],
    },
    {
      title: '73rd vs 74th Amendment',
      items: ['73rd Amendment (Panchayats)', '74th Amendment (Municipalities)'],
      rows: [
        { aspect: 'Part and articles', values: ['**Part IX**, Arts 243 to 243O', '**Part IXA**, Arts 243P to 243ZG'], key: true },
        { aspect: 'Schedule', values: ['**11th**, 29 subjects', '**12th**, 18 subjects'], key: true },
        { aspect: 'In force from', values: ['24 April 1993', '1 June 1993'] },
        {
          aspect: 'Structure',
          values: ['Three tiers: village, intermediate, district', 'Three types: Nagar Panchayat, Municipal Council, Municipal Corporation'],
        },
        { aspect: 'Reservation for women', values: ['Not less than one-third (243D)', 'Not less than one-third (243T)'] },
        { aspect: 'Term', values: ['5 years (243E)', '5 years (243U)'] },
        { aspect: 'Elections', values: ['State Election Commission (243K)', 'State Election Commission (243ZA)'] },
        { aspect: 'Finance', values: ['State Finance Commission (243I)', 'Same commission reviews them (243Y)'] },
      ],
      reveal:
        'The two amendments were passed together and are built the same way. Only the Part, the Schedule and the count of subjects differ: rural is IX, 11th, 29; urban is IXA, 12th, 18.',
      whenToUse: ['Village, block, district, Gram Sabha, 29 subjects.', 'Towns and cities, wards committees, metropolitan planning, 18 subjects.'],
    },
  ],
  qa: [
    {
      q: 'Who appoints the Governor, and how long does the Governor hold office?',
      a: ['The President, by warrant under hand and seal (Art 155).', 'Five years, but during the pleasure of the President (Art 156).'],
      tag: 'Asked often',
    },
    {
      q: 'Who administers the oath to the Governor?',
      a: ['The Chief Justice of the High Court of that state (Art 159).'],
      tag: 'Trap',
    },
    {
      q: 'Pardoning power and ordinance power of the Governor: which articles?',
      a: ['Pardon: Art 161 (President: Art 72).', 'Ordinance: Art 213 (President: Art 123).'],
      tag: 'Asked often',
    },
    {
      q: 'What can the Governor do with a bill that the President cannot?',
      a: ['Reserve it for the consideration of the President (Arts 200 and 201).'],
    },
    {
      q: 'To whom is the state council of ministers collectively responsible?',
      a: ['The Legislative Assembly (Art 164(2)).', 'Not the Governor, and not the Legislative Council.'],
      tag: 'Trap',
    },
    {
      q: 'Who can create or abolish a Legislative Council?',
      a: ['Parliament, by an ordinary law (Art 169).', 'Only after the state Assembly passes a resolution by special majority.'],
    },
    {
      q: 'Maximum and minimum size of a Legislative Council?',
      a: ['At most one-third of the Legislative Assembly.', 'At least 40 members (Art 171).'],
    },
    {
      q: 'Which Part and Schedule did the 73rd Amendment add, and how many subjects?',
      a: ['Part IX (Arts 243 to 243O).', '11th Schedule with 29 subjects.'],
      tag: 'Asked often',
    },
    {
      q: 'Which Part and Schedule did the 74th Amendment add, and how many subjects?',
      a: ['Part IXA (Arts 243P to 243ZG).', '12th Schedule with 18 subjects.'],
      tag: 'Asked often',
    },
    {
      q: 'Who conducts elections to panchayats?',
      a: [
        'The State Election Commission (Art 243K), not the Election Commission of India.',
        'The State Election Commissioner is appointed by the Governor.',
      ],
      tag: 'Trap',
    },
    {
      q: 'What reservation for women do Parts IX and IXA guarantee?',
      a: ['Not less than one-third of seats, and of chairperson posts.', 'Many states give 50% by their own laws.'],
    },
    {
      q: 'Which committee recommended Panchayati Raj, and where did it start?',
      a: ['Balwant Rai Mehta Committee (1957).', 'Rajasthan, at Nagaur, on 2 October 1959.'],
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'The Governor of a state is appointed by:',
      options: ['The Chief Minister', 'The President', 'The Prime Minister', 'The state Legislative Assembly'],
      answer: 1,
      explain: 'Art 155: the President appoints the Governor by warrant under hand and seal.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'How many subjects are listed in the Eleventh Schedule?',
      options: ['18', '22', '29', '31'],
      answer: 2,
      explain: '29 subjects for panchayats. The Twelfth Schedule has 18 for municipalities.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'The 74th Constitutional Amendment deals with:',
      options: ['Panchayats', 'Municipalities', 'Cooperative societies', 'Anti-defection'],
      answer: 1,
      explain: '74th: municipalities (Part IXA). 73rd: panchayats. 97th: cooperatives. 52nd: anti-defection.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'What is the minimum age to be appointed Governor?',
      options: ['25 years', '30 years', '35 years', '40 years'],
      answer: 2,
      explain: 'Art 157: a citizen of India who has completed 35 years.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Which article gives the Governor the power to issue ordinances?',
      options: ['Article 123', 'Article 161', 'Article 200', 'Article 213'],
      answer: 3,
      explain: "Article 213. Art 123 is the President's ordinance power; Art 161 is the Governor's pardoning power.",
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The Governor holds office during the pleasure of the President under:',
      options: ['Article 153', 'Article 155', 'Article 156', 'Article 164'],
      answer: 2,
      explain: 'Art 156. Art 153 creates the office; Art 155 is appointment; Art 164 is about the CM and ministers.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The state council of ministers is collectively responsible to:',
      options: ['The Governor', 'The Legislative Assembly', 'The Legislative Council', 'Both Houses of the state legislature'],
      answer: 1,
      explain: "Art 164(2). Ministers hold office at the Governor's pleasure, but collective responsibility is to the Assembly.",
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: "Which article deals with the Governor's pardoning power?",
      options: ['Article 72', 'Article 161', 'Article 163', 'Article 213'],
      answer: 1,
      explain: "Article 161. Article 72 is the President's pardoning power.",
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Elections to panchayats are conducted by:',
      options: ['The Election Commission of India', 'The State Election Commission', 'The District Collector', 'The State Finance Commission'],
      answer: 1,
      explain: 'Art 243K. The Election Commission of India handles Parliament, state legislatures, President and Vice-President.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The State Finance Commission under Art 243I is constituted every:',
      options: ['2 years', '3 years', '5 years', '6 years'],
      answer: 2,
      explain: 'The Governor constitutes it every five years to review the finances of panchayats (and municipalities, Art 243Y).',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The maximum strength of a state Legislative Council is:',
      options: [
        'One-half of the Legislative Assembly',
        'One-third of the Legislative Assembly',
        'One-fourth of the Legislative Assembly',
        '60 members',
      ],
      answer: 1,
      explain: 'Art 171: at most one-third of the Assembly, and at least 40.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which Part of the Constitution deals with municipalities?',
      options: ['Part VIII', 'Part IX', 'Part IXA', 'Part IXB'],
      answer: 2,
      explain: 'Part IXA (Arts 243P to 243ZG). Part IX is panchayats; Part IXB is cooperative societies.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which option does the Governor have on a bill that the President does not have on a Union bill?',
      options: ['Give assent', 'Withhold assent', 'Return it for reconsideration', 'Reserve it for the President'],
      answer: 3,
      explain: "Arts 200 and 201: the Governor may reserve a state bill for the President's consideration.",
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A panchayat, once constituted, continues for:',
      options: ['4 years', '5 years', '6 years', 'Until the state decides'],
      answer: 1,
      explain: 'Art 243E: five years from its first meeting, unless dissolved earlier. A fresh election is due within 6 months of a dissolution.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'The intermediate level of panchayat may be skipped in a state with a population of less than:',
      options: ['10 lakh', '20 lakh', '25 lakh', '50 lakh'],
      answer: 1,
      explain: 'Art 243B(2): states with a population not exceeding 20 lakh need not have the intermediate tier.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Which of these is a condition for creating or abolishing a state Legislative Council?',
      options: [
        'A constitutional amendment under Art 368',
        'A resolution of the Assembly by special majority, then a law of Parliament',
        'A recommendation of the Governor to the President',
        'Ratification by half of the states',
      ],
      answer: 1,
      explain: 'Art 169. The Parliament law is not treated as an amendment under Art 368.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Wards committees under the 74th Amendment are required in municipalities with a population of:',
      options: ['1 lakh or more', '3 lakh or more', '5 lakh or more', '10 lakh or more'],
      answer: 1,
      explain: 'Art 243S: 3 lakh or more. A Metropolitan Planning Committee is for a metropolitan area of 10 lakh or more (243ZE).',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Panchayati Raj was first launched in India at:',
      options: ['Nagaur, Rajasthan', 'Anantapur, Andhra Pradesh', 'Rae Bareli, Uttar Pradesh', 'Wardha, Maharashtra'],
      answer: 0,
      explain: 'Nagaur, Rajasthan, on 2 October 1959, following the Balwant Rai Mehta Committee (1957).',
    },
  ],
};

export default topic;
