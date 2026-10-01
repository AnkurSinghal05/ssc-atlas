import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'bodies-amendments',
  title: 'Bodies, amendments and schedules',
  level: 'intermediate',
  masteryMinutes: 90,
  reviseMinutes: 30,
  priority: 'high',
  weightage: { tier1: 0.5, tier2: 0.5 },
  tags: [
    'Election Commission',
    'UPSC',
    'Finance Commission',
    'CAG',
    'Attorney General',
    'NITI Aayog',
    'Article 368',
    '42nd Amendment',
    '101st Amendment',
    'Schedules',
  ],
  summary:
    'Constitutional bodies and their articles (Election Commission 324, CAG 148, Finance Commission 280 and the rest), the bodies that are not in the Constitution, how the Constitution is amended (Art 368), the landmark amendments, and the twelve Schedules in one line each.',
  patterns: [
    { name: 'Body to article', frequency: 'most', example: 'The Finance Commission is constituted under which article?' },
    { name: 'Amendment to change', frequency: 'most', example: 'Which amendment lowered the voting age from 21 to 18?' },
    { name: 'Constitutional or not', frequency: 'often', example: 'Which of these is not a constitutional body?' },
    { name: 'Schedule to content', frequency: 'often', example: 'Anti-defection provisions are in which Schedule?' },
    { name: 'Tenure, appointment, removal', frequency: 'often', example: 'The CAG holds office for how many years?' },
    { name: 'Kinds of majority in Art 368', frequency: 'rare', example: 'Which amendments need ratification by the states?' },
  ],
  keyPoints: [
    {
      title: 'Election Commission, UPSC and law officers',
      text: '**Art 324** Election Commission: at present (2026) the CEC + 2 Election Commissioners; term **6 years or age 65**; the CEC is removed like a Supreme Court judge · **Arts 315 to 323** UPSC and State PSCs; UPSC members serve 6 years or till **65** (State PSC: **62**) · **Art 76** Attorney General · **Art 165** Advocate General of a state.',
      example: 'The Solicitor General is **not** a constitutional post. The AG can speak in Parliament but cannot vote (Art 88).',
    },
    {
      title: 'CAG and Finance Commission',
      text: '**Art 148** Comptroller and Auditor General: appointed by the President, **6 years or 65**, removed like a Supreme Court judge, no further government office after retiring. Reports go to the President (**Art 151**), who lays them before Parliament. **Art 280** Finance Commission: set up by the President **every 5 years**, a chairman + **4 members**; recommends how taxes are shared between the Centre and states.',
      example: 'First Finance Commission chairman: **K.C. Neogy** (1951).',
    },
    {
      title: 'Commissions and councils in the Constitution',
      text: '**Art 338** National Commission for Scheduled Castes · **Art 338A** National Commission for Scheduled Tribes (split off by the **89th Amendment, 2003**) · **Art 338B** National Commission for Backward Classes (**102nd Amendment, 2018**) · **Art 279A** GST Council, chaired by the **Union Finance Minister** · **Art 263** Inter-State Council, set up in **1990** and chaired by the **PM**.',
    },
    {
      title: 'Bodies NOT in the Constitution',
      text: '**NITI Aayog**: executive resolution, **1 January 2015**, replaced the Planning Commission; chaired by the PM. **NHRC**: statutory, Protection of Human Rights Act, **1993**. **CVC**: set up in 1964 by resolution, statutory since **2003**. **CBI**: set up in **1963** by resolution; not statutory, gets its powers from the DSPE Act, 1946. **Lokpal**: statutory, Lokpal and Lokayuktas Act, **2013**.',
      example: 'The Santhanam Committee led to both the CVC and the CBI.',
    },
    {
      title: 'Amending the Constitution (Art 368)',
      text: "Part XX, **Art 368**. A bill can start in **either House**, by a minister or a private member, without the President's prior permission. Each House must pass it separately: **no joint sitting**. The President **must** give assent (24th Amendment). Three routes: simple majority (outside Art 368), special majority, and special majority + ratification by **half the states**.",
      example: 'Kesavananda Bharati (1973): Parliament cannot change the **basic structure**.',
    },
    {
      title: 'Landmark amendments (1951 to 1988)',
      text: '**1st (1951)** Ninth Schedule; new limits on free speech · **7th (1956)** states reorganised on linguistic lines · **24th (1971)** Parliament can amend fundamental rights; assent compulsory · **42nd (1976)** "mini-Constitution": socialist, secular, integrity; Fundamental Duties · **44th (1978)** property no longer a fundamental right · **52nd (1985)** anti-defection · **61st (1988)** voting age **21 to 18**.',
    },
    {
      title: 'Landmark amendments (1992 to 2023)',
      text: '**73rd** panchayats · **74th** municipalities · **86th (2002)** Art 21A, education for ages **6 to 14** · **101st (2016)** GST · **103rd (2019)** **10%** EWS reservation · **104th (2019)** SC/ST seats extended to 2030; Anglo-Indian nomination ended · **105th (2021)** states can again list their own backward classes · **106th (2023)** **one-third** seats for women in Lok Sabha and Assemblies.',
    },
    {
      title: 'The twelve Schedules',
      text: '**1** states and UTs · **2** salaries · **3** oaths · **4** Rajya Sabha seats · **5** Scheduled Areas · **6** tribal areas of Assam, Meghalaya, Tripura, Mizoram · **7** Union, State and Concurrent Lists · **8** languages (**22**) · **9** land reform and other laws shielded from court challenge (1st Amendment) · **10** anti-defection (52nd) · **11** panchayats (73rd) · **12** municipalities (74th).',
      example: 'The original Constitution had 8 Schedules. The 8th had 14 languages; the 92nd Amendment (2003) brought it to 22.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'Three ways to change the Constitution',
      figure: {
        viewBox: '0 0 320 256',
        svg: `
<text x="160" y="22" text-anchor="middle" class="d-small">easiest at the top, hardest at the bottom</text>
<rect x="20" y="34" width="280" height="64" rx="6" class="d-fill-green" data-step="1"/><rect x="20" y="34" width="280" height="64" rx="6" data-step="1"/>
<text x="160" y="55" text-anchor="middle" data-step="1">Simple majority</text>
<text x="160" y="73" text-anchor="middle" class="d-small" data-step="1">outside Art 368, not an "amendment"</text>
<text x="160" y="89" text-anchor="middle" class="d-small" data-step="1">new states, Councils, citizenship</text>
<rect x="20" y="106" width="280" height="64" rx="6" class="d-fill" data-step="2"/><rect x="20" y="106" width="280" height="64" rx="6" data-step="2"/>
<text x="160" y="127" text-anchor="middle" data-step="2">Special majority</text>
<text x="160" y="145" text-anchor="middle" class="d-small" data-step="2">each House: majority of total strength</text>
<text x="160" y="161" text-anchor="middle" class="d-small" data-step="2">+ 2/3 of members present and voting</text>
<rect x="20" y="178" width="280" height="64" rx="6" class="d-fill-pink" data-step="3"/><rect x="20" y="178" width="280" height="64" rx="6" data-step="3"/>
<text x="160" y="199" text-anchor="middle" data-step="3">Special + half the states</text>
<text x="160" y="217" text-anchor="middle" class="d-small" data-step="3">then ratified by half the state</text>
<text x="160" y="233" text-anchor="middle" class="d-small" data-step="3">legislatures (simple majority)</text>`,
      },
      explain: [
        'Simple majority: changes like forming new states (Arts 2 to 4) or creating a Legislative Council (Art 169). The Constitution says these are not amendments under Art 368.',
        'Special majority (Art 368(2)): most of the Constitution, including fundamental rights and DPSPs. Both conditions must be met in each House separately.',
        'Special majority + ratification by half the states: federal provisions such as the election of the President, the Supreme Court and High Courts, the Seventh Schedule, states in Parliament, and Art 368 itself. The GST (101st) went this way.',
      ],
    },
    {
      type: 'diagram',
      title: 'In the Constitution or not?',
      figure: {
        viewBox: '0 0 320 236',
        svg: `
<rect x="6" y="12" width="150" height="30" rx="6" class="d-fill-green" data-step="1"/><rect x="6" y="12" width="150" height="30" rx="6" data-step="1"/>
<text x="81" y="32" text-anchor="middle" class="d-small" data-step="1">Constitutional (Art)</text>
<rect x="164" y="12" width="150" height="30" rx="6" class="d-fill-pink" data-step="2 3"/><rect x="164" y="12" width="150" height="30" rx="6" data-step="2 3"/>
<text x="239" y="32" text-anchor="middle" class="d-small" data-step="2 3">Not constitutional</text>
<line x1="160" y1="50" x2="160" y2="224" class="d-soft d-dash"/>
<text x="12" y="66" class="d-small" data-step="1">Election Comm.</text><text x="150" y="66" text-anchor="end" class="d-small d-red" data-step="1">324</text>
<text x="12" y="90" class="d-small" data-step="1">UPSC</text><text x="150" y="90" text-anchor="end" class="d-small d-red" data-step="1">315</text>
<text x="12" y="114" class="d-small" data-step="1">Finance Comm.</text><text x="150" y="114" text-anchor="end" class="d-small d-red" data-step="1">280</text>
<text x="12" y="138" class="d-small" data-step="1">CAG</text><text x="150" y="138" text-anchor="end" class="d-small d-red" data-step="1">148</text>
<text x="12" y="162" class="d-small" data-step="1">Attorney General</text><text x="150" y="162" text-anchor="end" class="d-small d-red" data-step="1">76</text>
<text x="12" y="186" class="d-small" data-step="1">GST Council</text><text x="150" y="186" text-anchor="end" class="d-small d-red" data-step="1">279A</text>
<text x="12" y="210" class="d-small" data-step="1">NCSC</text><text x="150" y="210" text-anchor="end" class="d-small d-red" data-step="1">338</text>
<text x="168" y="62" class="d-small d-blue" data-step="2">By an Act of</text>
<text x="168" y="77" class="d-small d-blue" data-step="2">Parliament</text>
<text x="176" y="98" class="d-small" data-step="2">NHRC</text><text x="308" y="98" text-anchor="end" class="d-small" data-step="2">1993</text>
<text x="176" y="120" class="d-small" data-step="2 4">CVC</text><text x="308" y="120" text-anchor="end" class="d-small" data-step="2 4">2003</text>
<text x="176" y="142" class="d-small" data-step="2">Lokpal</text><text x="308" y="142" text-anchor="end" class="d-small" data-step="2">2013</text>
<text x="168" y="170" class="d-small d-blue" data-step="3">By a resolution</text>
<text x="176" y="194" class="d-small" data-step="3">NITI Aayog</text><text x="308" y="194" text-anchor="end" class="d-small" data-step="3">2015</text>
<text x="176" y="218" class="d-small" data-step="3 4">CBI</text><text x="308" y="218" text-anchor="end" class="d-small" data-step="3 4">1963</text>`,
      },
      explain: [
        'Constitutional bodies are named in the Constitution, so only an amendment can abolish them. Learn each with its article.',
        'Statutory bodies are created by an Act of Parliament: NHRC (1993), CVC (Act of 2003), Lokpal (2013).',
        'Executive bodies come from a government resolution: NITI Aayog (2015) and the CBI (1963).',
        'Common trap: the CVC began by resolution in 1964 and became statutory in 2003. The CBI is still not a statutory body.',
      ],
    },
  ],
  comparisons: [
    {
      title: 'Constitutional vs statutory vs executive body',
      items: ['Constitutional', 'Statutory', 'Executive'],
      rows: [
        { aspect: 'Created by', values: ['The Constitution itself', 'An Act of Parliament', 'A government resolution'], key: true },
        {
          aspect: 'Can be abolished by',
          values: ['Only a constitutional amendment', 'Repealing or amending the Act', 'Another resolution'],
          key: true,
        },
        {
          aspect: 'Examples',
          values: ['Election Commission, UPSC, Finance Commission, CAG, GST Council', 'NHRC, CVC, Lokpal', 'NITI Aayog, CBI'],
        },
        { aspect: 'Article number?', values: ['Yes, always asked', 'No; asked by year of the Act', 'No'] },
      ],
      reveal:
        'Ask where the body came from. If it has an article number it is constitutional; if it has an Act it is statutory; if neither, it is executive.',
      whenToUse: [
        'The question gives an article or asks which body is constitutional.',
        'The question names an Act (1993, 2003, 2013).',
        'The question says "resolution" or asks which body is neither.',
      ],
    },
    {
      title: 'Finance Commission vs NITI Aayog',
      items: ['Finance Commission', 'NITI Aayog'],
      rows: [
        { aspect: 'Nature', values: ['Constitutional (**Art 280**)', 'Executive (resolution, 2015)'], key: true },
        { aspect: 'Head', values: ['A chairman chosen by the President', 'The Prime Minister (chairperson)'] },
        { aspect: 'Term', values: ['Set up every 5 years (or earlier)', 'Permanent body'] },
        {
          aspect: 'Job',
          values: ['Shares tax revenue between the Centre and states, and among states', 'Policy think tank; advises on development'],
          key: true,
        },
        { aspect: 'Replaced', values: ['Nothing', 'The Planning Commission (1950)'] },
      ],
      reveal:
        'The Finance Commission is a periodic constitutional body that decides how tax money is shared. NITI Aayog is a permanent advisory body with no constitutional status.',
      whenToUse: ['Tax devolution, Art 280, "every five years".', 'Planning, think tank, replaced the Planning Commission, PM as chair.'],
    },
    {
      title: 'Attorney General vs Advocate General vs CAG',
      items: ['Attorney General', 'Advocate General', 'CAG'],
      rows: [
        { aspect: 'Article', values: ['**76**', '**165**', '**148**'], key: true },
        { aspect: 'Level', values: ['Union', 'State', 'Union (audits Centre and states)'] },
        { aspect: 'Appointed by', values: ['President', 'Governor', 'President'] },
        { aspect: 'Qualification', values: ['Qualified to be a Supreme Court judge', 'Qualified to be a High Court judge', 'Not laid down'] },
        {
          aspect: 'Term and removal',
          values: [
            'No fixed term; at the pleasure of the President',
            'No fixed term; at the pleasure of the Governor',
            '6 years or 65; removed like a Supreme Court judge',
          ],
          key: true,
        },
        { aspect: 'Speak in the legislature?', values: ['Yes, Parliament; no vote (Art 88)', 'Yes, state legislature; no vote (Art 177)', 'No'] },
      ],
      reveal:
        'The two law officers serve at pleasure and can speak in the House. The CAG has a fixed term and strong security of tenure because it audits the government.',
      whenToUse: ['Union legal adviser, Art 76.', 'State legal adviser, Art 165.', 'Audit, "guardian of the public purse", Art 148.'],
    },
  ],
  qa: [
    {
      q: 'Which article provides for the Election Commission?',
      a: ['Article 324.', 'The CEC and Election Commissioners serve 6 years or until 65.'],
      tag: 'Asked often',
    },
    {
      q: 'Finance Commission: article, how often, how many members?',
      a: ['Article 280.', 'Every 5 years (or earlier), a chairman + 4 members, appointed by the President.'],
      tag: 'Asked often',
    },
    {
      q: 'Which article provides for the CAG, and to whom does the CAG report?',
      a: ['Article 148.', 'Reports go to the President (Art 151), who lays them before Parliament. State reports go to the Governor.'],
    },
    {
      q: 'Is NITI Aayog a constitutional body?',
      a: ['No. It was set up by an executive resolution on 1 January 2015.', 'Neither constitutional nor statutory.'],
      tag: 'Trap',
    },
    {
      q: 'Which of CVC and CBI is statutory?',
      a: ['CVC: statutory since the CVC Act, 2003.', 'CBI: not statutory; set up by a resolution in 1963.'],
      tag: 'Trap',
    },
    {
      q: 'Who chairs the GST Council, and under which article?',
      a: ['The Union Finance Minister.', 'Article 279A, added by the 101st Amendment (2016).'],
    },
    {
      q: 'What is a special majority under Art 368?',
      a: ['A majority of the total membership of each House.', 'And two-thirds of the members present and voting.'],
    },
    {
      q: 'Which amendments need ratification by half the states?',
      a: [
        'Those changing federal provisions: election of the President, courts, the Seventh Schedule, states in Parliament, Art 368 itself.',
        'Ratification is by a simple majority in each state legislature.',
      ],
    },
    {
      q: 'Why is the 42nd Amendment called the "mini-Constitution"?',
      a: [
        'It made the widest changes: added socialist, secular and integrity to the Preamble.',
        'Added Fundamental Duties (Part IVA) and moved five subjects to the Concurrent List.',
      ],
      tag: 'Asked often',
    },
    {
      q: 'Which amendment removed the right to property from fundamental rights?',
      a: ['44th Amendment (1978).', 'It is now a legal right under Art 300A.'],
      tag: 'Asked often',
    },
    {
      q: 'Which Schedule has the anti-defection law, and which amendment added it?',
      a: ['Tenth Schedule.', '52nd Amendment (1985).'],
    },
    {
      q: 'What did the 106th Amendment do?',
      a: [
        'Reserved one-third of seats for women in the Lok Sabha, state Assemblies and the Delhi Assembly.',
        'It takes effect after the census and delimitation that follow it.',
      ],
    },
    {
      q: 'Which Schedule lists the official languages, and how many?',
      a: ['Eighth Schedule.', '22 languages (originally 14).'],
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'The Chief Election Commissioner and the Election Commissioners hold office for 6 years or until what age, whichever is earlier?',
      options: ['60 years', '62 years', '65 years', '70 years'],
      answer: 2,
      explain: 'As of 2026, the 2023 Act on their appointment keeps the term at 6 years or age 65, whichever comes first. The CAG has the same 6 years or 65 rule.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Which of these is NOT a constitutional body?',
      options: ['Finance Commission', 'Election Commission', 'NITI Aayog', 'Union Public Service Commission'],
      answer: 2,
      explain: 'NITI Aayog was set up by an executive resolution in 2015. The others are in the Constitution.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Which amendment reduced the voting age from 21 to 18?',
      options: ['42nd', '44th', '52nd', '61st'],
      answer: 3,
      explain: 'The 61st Amendment (1988) changed Article 326.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'NITI Aayog came into being on:',
      options: ['15 August 2014', '1 January 2015', '26 January 2015', '1 April 2016'],
      answer: 1,
      explain: 'NITI Aayog was set up by an executive resolution on 1 January 2015, replacing the Planning Commission (1950). The Prime Minister is its chairperson.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'The Comptroller and Auditor General of India is appointed under:',
      options: ['Article 76', 'Article 148', 'Article 165', 'Article 280'],
      answer: 1,
      explain: 'Art 148. Art 76 is the Attorney General, 165 the Advocate General, 280 the Finance Commission.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The Finance Commission is constituted every:',
      options: ['3 years', '4 years', '5 years', '6 years'],
      answer: 2,
      explain: 'Art 280: every fifth year or earlier, as the President thinks necessary.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Who is the chairperson of the GST Council?',
      options: ['The Prime Minister', 'The Union Finance Minister', 'The RBI Governor', 'The Chairman of the Finance Commission'],
      answer: 1,
      explain: 'Art 279A: the Union Finance Minister chairs it; state finance ministers are members.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The 106th Amendment (2023) provides for:',
      options: ['10% reservation for economically weaker sections', 'One-third of seats for women in the Lok Sabha and state Legislative Assemblies', 'Constitutional status for the National Commission for Backward Classes', 'The Goods and Services Tax'],
      answer: 1,
      explain: 'The 106th Amendment (Nari Shakti Vandan Adhiniyam, 2023) reserves one-third of seats for women, including within the SC and ST seats. It takes effect after the delimitation that follows the next census. EWS is the 103rd, NCBC the 102nd, GST the 101st.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which of these can speak in Parliament but cannot vote there?',
      options: ['The Comptroller and Auditor General', 'The Chief Election Commissioner', 'The Attorney General', 'The Chairman of the UPSC'],
      answer: 2,
      explain: 'Article 88 lets the Attorney General speak in and take part in the proceedings of either House, but not vote. The other three have no such right.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The 103rd Amendment is associated with:',
      options: [
        'GST',
        'Reservation for economically weaker sections',
        "Women's reservation in legislatures",
        'National Commission for Backward Classes',
      ],
      answer: 1,
      explain: "103rd (2019): up to 10% EWS reservation. GST is the 101st, women's reservation the 106th, NCBC the 102nd.",
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which of these bodies is statutory?',
      options: ['CBI', 'NITI Aayog', 'NHRC', 'Planning Commission'],
      answer: 2,
      explain: 'NHRC comes from the Protection of Human Rights Act, 1993. The CBI, NITI Aayog and the old Planning Commission came from resolutions.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which article provides for the Attorney General of India?',
      options: ['Article 76', 'Article 148', 'Article 165', 'Article 324'],
      answer: 0,
      explain: 'Article 76. The state counterpart, the Advocate General, is Article 165.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which amendment made the right to property a legal right instead of a fundamental right?',
      options: ['1st', '24th', '42nd', '44th'],
      answer: 3,
      explain: 'The 44th Amendment (1978) removed Art 31 and added Art 300A.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The National Commission for Backward Classes got constitutional status through the:',
      options: ['93rd Amendment', '97th Amendment', '102nd Amendment', '103rd Amendment'],
      answer: 2,
      explain: 'The 102nd Amendment (2018) added Article 338B for the NCBC. The 93rd allowed reservation in private educational institutions, the 97th covered cooperative societies, the 103rd EWS reservation.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The Goods and Services Tax (GST) was introduced by which amendment?',
      options: ['99th', '101st', '103rd', '104th'],
      answer: 1,
      explain: 'The 101st Amendment (2016) added Article 246A (power to levy GST) and Article 279A (the GST Council). GST began on 1 July 2017.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'A constitutional amendment affecting the election of the President needs:',
      options: [
        'A simple majority in Parliament',
        'A special majority in Parliament only',
        'A special majority in Parliament and ratification by half the states',
        'A joint sitting of Parliament',
      ],
      answer: 2,
      explain:
        'Election of the President is a federal provision listed in the proviso to Art 368(2). There is never a joint sitting on an amendment.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'The National Commission for Scheduled Tribes (Art 338A) was created by the:',
      options: ['65th Amendment', '89th Amendment', '102nd Amendment', '104th Amendment'],
      answer: 1,
      explain: 'The 89th Amendment (2003) split the joint SC/ST commission. The 102nd (2018) gave the NCBC constitutional status.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Which amendment ended the nomination of Anglo-Indians to the Lok Sabha?',
      options: ['95th', '103rd', '104th', '105th'],
      answer: 2,
      explain: 'The 104th Amendment (2019) ended it and extended SC/ST seat reservation to 2030.',
    },
  ],
};

export default topic;
