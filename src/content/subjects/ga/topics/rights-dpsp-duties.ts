import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'rights-dpsp-duties',
  title: 'Fundamental Rights, DPSP and Duties',
  level: 'intermediate',
  masteryMinutes: 90,
  reviseMinutes: 30,
  priority: 'high',
  weightage: { tier1: 1, tier2: 1 },
  tags: ['Part III', 'Part IV', 'Part IVA', 'Article 21', 'Article 32', 'writs', 'DPSP', 'Article 51A', '42nd Amendment', '86th Amendment'],
  summary:
    'Three parts of the Constitution in a row: Part III (Fundamental Rights, Arts 12 to 35), Part IV (Directive Principles, Arts 36 to 51) and Part IVA (Fundamental Duties, Art 51A). Most questions test one article number, one amendment or one source country.',
  keyPoints: [
    {
      title: 'Fundamental Rights by group (Part III)',
      text: 'Art 12 defines "State"; Art 13 voids laws that violate FRs. **Equality** 14 to 18, **Freedom** 19 to 22, **Against exploitation** 23 to 24, **Religion** 25 to 28, **Cultural and educational** 29 to 30, **Constitutional remedies** 32. Arts 33 to 35 cover armed forces, martial law and laws to give effect to Part III.',
      example:
        'Six groups today. The Right to Property (Art 31) was removed by the **44th Amendment (1978)** and is now a legal right under **Art 300A**.',
    },
    {
      title: 'Articles you must know by number',
      text: '14 equality before law; 15 no discrimination on religion, race, caste, sex, place of birth; 16 equal opportunity in public jobs; 17 abolition of untouchability; 18 abolition of titles; 19 six freedoms (speech, assembly, association, movement, residence, profession); 20 protection in respect of conviction; 21 life and personal liberty; 21A education for 6 to 14 years; 22 protection against arrest and detention.',
      example: '**Art 21A** was added by the **86th Amendment (2002)**. Art 19 had seven freedoms until the 44th Amendment dropped property.',
    },
    {
      title: 'Exploitation, religion, minorities, remedies',
      text: '23 bans traffic in human beings and forced labour; 24 bans employing children below 14 in factories, mines and hazardous work; 25 freedom of conscience and religion; 26 manage religious affairs; 27 no tax to promote a religion; 28 no religious instruction in wholly State-funded schools; 29 protects language, script and culture of minorities; 30 lets minorities set up educational institutions; 32 move the Supreme Court to enforce FRs.',
      example: 'Dr B.R. Ambedkar called **Art 32** the "heart and soul" of the Constitution.',
    },
    {
      title: 'Who gets which right',
      text: 'Only citizens: Arts **15, 16, 19, 29, 30**. Everyone, including foreigners: Arts 14, 20, 21, 22 and the rest. During a national emergency, **Arts 20 and 21 cannot be suspended** (44th Amendment).',
    },
    {
      title: 'The five writs',
      text: 'Supreme Court issues writs under **Art 32**, High Courts under **Art 226**. Habeas corpus ("to have the body"), Mandamus ("we command"), Prohibition (stops a lower court before it acts), Certiorari (quashes a lower court order already made), Quo warranto ("by what authority").',
      example: 'A High Court can issue writs for FRs **and "for any other purpose"**, so its writ power is wider than the Supreme Court\'s.',
    },
    {
      title: 'Directive Principles (Part IV, Arts 36 to 51)',
      text: 'Borrowed from the **Irish** Constitution. **Not enforceable** by courts (Art 37) but "fundamental in the governance of the country". The Constitution does not classify them; books group them as socialistic, Gandhian and liberal-intellectual.',
      example:
        'Gandhian: **Art 40** village panchayats, Art 43 cottage industries, Art 46 weaker sections, Art 47 prohibition of intoxicants, Art 48 ban on cow slaughter. Liberal: **Art 44** uniform civil code, Art 45 early childhood care, Art 49 monuments, **Art 50** separate judiciary from executive, Art 51 international peace.',
    },
    {
      title: 'DPSPs added by amendments',
      text: '**42nd (1976)**: 39A equal justice and free legal aid, 43A workers in management, 48A protect environment, forests and wildlife. **44th (1978)**: 38(2) reduce inequalities in income. **86th (2002)**: Art 45 changed to early childhood care up to age 6. **97th (2011)**: 43B cooperative societies.',
    },
    {
      title: 'Fundamental Duties (Part IVA, Art 51A)',
      text: 'Added by the **42nd Amendment (1976)** on the **Swaran Singh Committee** report; inspired by the **USSR** Constitution. Ten duties at first; the **86th Amendment (2002)** added the 11th: parents or guardians must give children aged 6 to 14 the opportunity for education (51A(k)). Duties apply to citizens only and are not enforceable by courts.',
      example: 'Sources in one line: FRs from the **USA**, DPSP from **Ireland**, Duties from the **USSR**.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'Part III to Part IVA on one strip',
      figure: {
        viewBox: '0 0 320 300',
        svg: `
<text x="12" y="22" class="d-small d-soft">Part III: Fundamental Rights</text>
<rect x="12" y="32" width="208" height="24" rx="5" class="d-fill" data-step="1"/><rect x="12" y="32" width="208" height="24" rx="5" data-step="1"/><text x="18" y="50" class="d-blue" data-step="1">14–18</text><text x="80" y="49" class="d-small" data-step="1">Equality</text>
<rect x="12" y="60" width="208" height="24" rx="5" class="d-fill" data-step="1"/><rect x="12" y="60" width="208" height="24" rx="5" data-step="1"/><text x="18" y="78" class="d-blue" data-step="1">19–22</text><text x="80" y="77" class="d-small" data-step="1">Freedom</text>
<rect x="12" y="88" width="208" height="24" rx="5" class="d-fill" data-step="2"/><rect x="12" y="88" width="208" height="24" rx="5" data-step="2"/><text x="18" y="106" class="d-blue" data-step="2">23–24</text><text x="80" y="105" class="d-small" data-step="2">Against exploitation</text>
<rect x="12" y="116" width="208" height="24" rx="5" class="d-fill" data-step="2"/><rect x="12" y="116" width="208" height="24" rx="5" data-step="2"/><text x="18" y="134" class="d-blue" data-step="2">25–28</text><text x="80" y="133" class="d-small" data-step="2">Freedom of religion</text>
<rect x="12" y="144" width="208" height="24" rx="5" class="d-fill" data-step="2"/><rect x="12" y="144" width="208" height="24" rx="5" data-step="2"/><text x="18" y="162" class="d-blue" data-step="2">29–30</text><text x="80" y="161" class="d-small" data-step="2">Cultural, educational</text>
<text x="18" y="186" class="d-small d-red" data-step="4">31: property, removed in 1978</text>
<rect x="12" y="194" width="208" height="24" rx="5" class="d-fill-pink" data-step="3"/><rect x="12" y="194" width="208" height="24" rx="5" data-step="3"/><text x="18" y="212" class="d-blue" data-step="3">32</text><text x="80" y="211" class="d-small" data-step="3">Constitutional remedies</text>
<path d="M226,32 L234,32 L234,218 L226,218" class="d-green" data-step="3"/>
<text x="241" y="112" class="d-small d-green" data-step="3">enforceable</text>
<text x="241" y="126" class="d-small d-green" data-step="3">in court</text>
<text x="241" y="140" class="d-small d-green" data-step="3">(Art 32,</text>
<text x="241" y="154" class="d-small d-green" data-step="3">Art 226)</text>
<rect x="12" y="234" width="208" height="24" rx="5" class="d-fill-blue" data-step="5"/><rect x="12" y="234" width="208" height="24" rx="5" class="d-dash" data-step="5"/><text x="18" y="252" class="d-blue" data-step="5">36–51</text><text x="80" y="251" class="d-small" data-step="5">Directive Principles</text>
<rect x="12" y="264" width="208" height="24" rx="5" class="d-fill-blue" data-step="5"/><rect x="12" y="264" width="208" height="24" rx="5" class="d-dash" data-step="5"/><text x="18" y="282" class="d-blue" data-step="5">51A</text><text x="80" y="281" class="d-small" data-step="5">Fundamental Duties</text>
<path d="M226,234 L234,234 L234,288 L226,288" class="d-red" data-step="5"/>
<text x="241" y="258" class="d-small d-red" data-step="5">not</text><text x="241" y="272" class="d-small d-red" data-step="5">enforceable</text>`,
      },
      explain: [
        'Equality is Arts 14 to 18 (17 abolishes untouchability). Freedom is Arts 19 to 22 (21 is life and personal liberty).',
        'Against exploitation 23 to 24, freedom of religion 25 to 28, cultural and educational rights 29 to 30.',
        'Art 32 lets you go straight to the Supreme Court to enforce these rights: Ambedkar\'s "heart and soul". High Courts use Art 226.',
        'Art 31 (right to property) was removed by the 44th Amendment (1978). That is why the list jumps from 30 to 32.',
        'Part IV (Arts 36 to 51, DPSP) and Part IVA (Art 51A, duties) come next, but **no court can enforce** them.',
      ],
    },
  ],
  comparisons: [
    {
      title: 'Fundamental Rights vs DPSP vs Fundamental Duties',
      items: ['Fundamental Rights', 'DPSP', 'Fundamental Duties'],
      rows: [
        { aspect: 'Part and articles', values: ['Part III, Arts 12 to 35', 'Part IV, Arts 36 to 51', 'Part IVA, Art 51A'] },
        { aspect: 'Enforceable in court?', values: ['**Yes**, via Art 32 and Art 226', '**No** (Art 37)', '**No**'], key: true },
        { aspect: 'Borrowed from', values: ['USA (Bill of Rights)', 'Ireland', 'USSR'], key: true },
        { aspect: 'In the original Constitution?', values: ['Yes', 'Yes', 'No, added by the 42nd Amendment (1976)'] },
        { aspect: 'Nature', values: ['Limits on the State; mostly negative', 'Instructions to the State; positive', 'Obligations of citizens'] },
        { aspect: 'Who it is about', values: ['Citizens, and some rights for foreigners too', 'The State', 'Citizens only'] },
      ],
      reveal:
        'Rights restrain the State and can be enforced in court. Directives guide the State but cannot be enforced. Duties bind citizens and also cannot be enforced directly.',
      whenToUse: [
        'The question mentions a remedy, a writ or a court being moved.',
        'The question is about welfare goals: free legal aid, uniform civil code, panchayats, environment.',
        'The question is about what a citizen must do: respect the flag, protect the environment, educate a child.',
      ],
    },
    {
      title: 'The five writs',
      items: ['Habeas corpus', 'Mandamus', 'Prohibition', 'Certiorari', 'Quo warranto'],
      rows: [
        { aspect: 'Meaning', values: ['To have the body', 'We command', 'To forbid', 'To be certified', 'By what authority'] },
        {
          aspect: 'Purpose',
          values: [
            'Produce a detained person and test the detention',
            'Order a public official to do a public duty',
            'Stop a lower court or tribunal from exceeding its jurisdiction',
            'Quash an order a lower court or tribunal already passed',
            'Ask a person by what right they hold a public office',
          ],
          key: true,
        },
        {
          aspect: 'Timing',
          values: [
            'Any time during detention',
            'When a duty is not done',
            'Before the order (preventive)',
            'After the order (curative)',
            'While the office is held',
          ],
        },
        { aspect: 'Can be against private persons?', values: ['Yes', 'No', 'No', 'No', 'No, only a public office'] },
      ],
      reveal:
        'Prohibition and certiorari are the pair most often confused: prohibition stops a case before a decision; certiorari quashes a decision already made.',
      whenToUse: [
        'Someone is illegally detained.',
        'An official refuses a duty the law requires.',
        'A lower court is about to act beyond its powers.',
        'A lower court has already acted beyond its powers.',
        'A person holds a public office they are not entitled to.',
      ],
    },
  ],
  qa: [
    {
      q: 'Which article is the "heart and soul" of the Constitution, and who said so?',
      a: ['Article 32, right to constitutional remedies.', 'Said by Dr B.R. Ambedkar.'],
      tag: 'Asked often',
    },
    {
      q: 'Which amendment removed the Right to Property from Fundamental Rights?',
      a: ['44th Amendment, 1978.', 'It is now a legal right under Article 300A.'],
      tag: 'Asked often',
    },
    {
      q: 'Which Fundamental Rights are available only to citizens?',
      a: ['Articles 15, 16, 19, 29 and 30.', 'Articles 14, 20, 21 and 22 are available to foreigners too.'],
      tag: 'Trap',
    },
    {
      q: 'Which articles cannot be suspended during a national emergency?',
      a: ['Articles 20 and 21.', 'Made so by the 44th Amendment (1978).'],
    },
    {
      q: 'Right to education: which article and which amendment?',
      a: [
        'Article 21A, education for children aged 6 to 14.',
        'Added by the 86th Amendment (2002).',
        'The same amendment added the 11th Fundamental Duty.',
      ],
      tag: 'Asked often',
    },
    {
      q: 'Under which articles do the Supreme Court and High Courts issue writs?',
      a: ['Supreme Court: Article 32.', 'High Courts: Article 226, which is wider ("for any other purpose").'],
    },
    {
      q: 'Prohibition vs certiorari?',
      a: ['Prohibition stops a lower court before it decides.', 'Certiorari quashes a decision already made.'],
      tag: 'Trap',
    },
    {
      q: 'Which writ can be issued against a private person?',
      a: ['Habeas corpus.', 'Mandamus, prohibition and certiorari lie against public bodies or courts.'],
      tag: 'Trap',
    },
    {
      q: 'Which DPSP articles did the 42nd Amendment add?',
      a: ['39A free legal aid, 43A workers in management, 48A environment and wildlife.'],
    },
    {
      q: 'Uniform civil code and separation of judiciary: which articles?',
      a: ['Article 44: uniform civil code.', 'Article 50: separate the judiciary from the executive.'],
      tag: 'Asked often',
    },
    {
      q: 'Which committee recommended Fundamental Duties?',
      a: ['Swaran Singh Committee (1976).', 'Added as Article 51A by the 42nd Amendment.'],
    },
    {
      q: 'Sources: FRs, DPSP and Duties were borrowed from which countries?',
      a: ['Fundamental Rights: USA.', 'DPSP: Ireland.', 'Fundamental Duties: USSR.'],
      tag: 'Asked often',
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Which article of the Constitution abolishes untouchability?',
      options: ['Article 14', 'Article 17', 'Article 19', 'Article 23'],
      answer: 1,
      explain: 'Article 17 abolishes untouchability and forbids its practice in any form.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Dr B.R. Ambedkar called which article the "heart and soul" of the Constitution?',
      options: ['Article 21', 'Article 14', 'Article 32', 'Article 226'],
      answer: 2,
      explain: 'Article 32, the right to move the Supreme Court to enforce Fundamental Rights.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'The Directive Principles of State Policy were borrowed from the constitution of:',
      options: ['USA', 'Ireland', 'USSR', 'Canada'],
      answer: 1,
      explain: 'DPSP came from the Irish Constitution. Fundamental Duties came from the USSR.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Fundamental Duties are contained in:',
      options: ['Part III', 'Part IV', 'Part IVA', 'Part V'],
      answer: 2,
      explain: 'Part IVA has a single article, Article 51A, listing the Fundamental Duties.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which amendment inserted Article 21A (right to education) into the Constitution?',
      options: ['42nd Amendment', '44th Amendment', '73rd Amendment', '86th Amendment'],
      answer: 3,
      explain: 'The 86th Amendment (2002) added Article 21A for children aged 6 to 14.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The Right to Property was removed from the list of Fundamental Rights by the:',
      options: ['42nd Amendment, 1976', '44th Amendment, 1978', '52nd Amendment, 1985', '61st Amendment, 1989'],
      answer: 1,
      explain: 'The 44th Amendment (1978) removed it; it is now a legal right under Article 300A.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which writ is issued to a public official ordering them to perform a duty they have refused to perform?',
      options: ['Habeas corpus', 'Mandamus', 'Quo warranto', 'Certiorari'],
      answer: 1,
      explain: 'Mandamus means "we command". It orders a public authority to do its legal duty.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which writ literally means "by what authority"?',
      options: ['Prohibition', 'Certiorari', 'Quo warranto', 'Mandamus'],
      answer: 2,
      explain: 'Quo warranto asks a person to show by what right they hold a public office.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which of the following Fundamental Rights is available only to citizens of India?',
      options: [
        'Equality before law (Art 14)',
        'Protection of life and personal liberty (Art 21)',
        'Freedom of speech and expression (Art 19)',
        'Protection against arrest and detention (Art 22)',
      ],
      answer: 2,
      explain: 'Article 19 freedoms are for citizens only, as are Arts 15, 16, 29 and 30.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Organisation of village panchayats is a Directive Principle under which article?',
      options: ['Article 40', 'Article 44', 'Article 48A', 'Article 50'],
      answer: 0,
      explain: 'Article 40 asks the State to organise village panchayats. It is a Gandhian principle.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Article 44 of the Constitution deals with:',
      options: ['Free legal aid', 'Uniform civil code', 'Protection of monuments', 'Separation of judiciary from executive'],
      answer: 1,
      explain: 'Article 44 asks the State to secure a uniform civil code for citizens.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The Fundamental Duties were added on the recommendation of which committee?',
      options: ['Sarkaria Commission', 'Swaran Singh Committee', 'Balwant Rai Mehta Committee', 'Kothari Commission'],
      answer: 1,
      explain: 'The Swaran Singh Committee (1976) recommended them; the 42nd Amendment added Article 51A.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Which pair of Directive Principles was added by the 42nd Amendment?',
      options: ['Article 39A and Article 48A', 'Article 40 and Article 44', 'Article 43B and Article 45', 'Article 38(2) and Article 50'],
      answer: 0,
      explain: '42nd added 39A (free legal aid), 43A and 48A (environment). 38(2) came with the 44th, 43B with the 97th.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'During a proclamation of national emergency, which Fundamental Rights cannot be suspended?',
      options: ['Articles 14 and 19', 'Articles 19 and 21', 'Articles 20 and 21', 'Articles 21 and 32'],
      answer: 2,
      explain: 'After the 44th Amendment (1978), Articles 20 and 21 stay enforceable even in an emergency.',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'Directive Principles of State Policy can be enforced in a court of law.',
      answer: false,
      explain: 'Article 37 says they are not enforceable by any court, though they are fundamental to governance.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'The 86th Amendment added the 11th Fundamental Duty, about providing education to children aged 6 to 14.',
      answer: true,
      explain: 'The 86th Amendment (2002) added Article 51A(k), along with Article 21A.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'Certiorari is issued to stop a lower court before it passes an order.',
      answer: false,
      explain: 'That is prohibition. Certiorari quashes an order the lower court has already passed.',
    },
    {
      type: 'truefalse',
      difficulty: 'hard',
      statement: 'The writ jurisdiction of a High Court under Article 226 is wider than that of the Supreme Court under Article 32.',
      answer: true,
      explain: 'Article 226 covers Fundamental Rights and "any other purpose"; Article 32 covers Fundamental Rights only.',
    },
  ],
};

export default topic;
