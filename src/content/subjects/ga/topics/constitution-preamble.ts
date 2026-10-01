import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'constitution-preamble',
  title: 'Constitution making and the Preamble',
  level: 'beginner',
  masteryMinutes: 60,
  reviseMinutes: 20,
  priority: 'high',
  weightage: { tier1: 0.5, tier2: 0.5 },
  tags: [
    'Constituent Assembly',
    'Drafting Committee',
    'B.R. Ambedkar',
    'Rajendra Prasad',
    'Objectives Resolution',
    'sources',
    'Preamble',
    '42nd Amendment',
    'schedules',
    'citizenship',
  ],
  summary:
    'How the Constitution was made (the Constituent Assembly, 1946 to 1949), where its features were borrowed from, what the Preamble says, the Parts and 12 Schedules at a glance, and citizenship (Arts 5 to 11). Questions test dates, names, source countries and schedule numbers.',
  patterns: [
    { name: 'Source country of a feature', frequency: 'most', example: 'The idea of Directive Principles was borrowed from which country?' },
    { name: 'Which Schedule deals with…', frequency: 'most', example: 'The anti-defection law is in which Schedule?' },
    { name: 'Constituent Assembly dates and people', frequency: 'often', example: 'Who was the temporary President of the Constituent Assembly?' },
    { name: 'Preamble words and the 42nd Amendment', frequency: 'often', example: 'Which words were added to the Preamble in 1976?' },
    {
      name: 'Preamble case law',
      frequency: 'rare',
      example: 'In which case did the Supreme Court hold the Preamble to be a part of the Constitution?',
    },
    { name: 'Citizenship articles and the 1955 Act', frequency: 'rare', example: 'Which article lets Parliament regulate citizenship by law?' },
  ],
  keyPoints: [
    {
      title: 'The Constituent Assembly',
      text: 'Set up under the **Cabinet Mission Plan (1946)**; members elected indirectly by provincial assemblies. Strength **389** (296 British India, 93 princely states), **299** after Partition. Temporary President **Sachchidananda Sinha**; permanent President **Dr Rajendra Prasad**; Vice-President H.C. Mukherjee; constitutional adviser **B.N. Rau**. The 7-member **Drafting Committee** was chaired by **Dr B.R. Ambedkar**.',
      example: 'The idea of a Constituent Assembly was first put forward by **M.N. Roy** (1934).',
    },
    {
      title: 'Key dates to remember',
      text: '**13 Dec 1946**: Nehru moves the **Objectives Resolution** (adopted 22 Jan 1947); it later became the Preamble. **22 Jul 1947**: national flag adopted. **29 Aug 1947**: Drafting Committee set up. **26 Nov 1949**: Constitution adopted (now Constitution Day). **24 Jan 1950**: members sign it; Rajendra Prasad elected first President; anthem and song adopted. **26 Jan 1950**: comes into force.',
      example: 'Total time: **2 years, 11 months, 18 days**. 26 January was chosen because Purna Swaraj Day was celebrated on 26 Jan 1930.',
    },
    {
      title: 'Borrowed features (1)',
      text: '**Government of India Act 1935**: federal scheme, office of Governor, judiciary, Public Service Commissions, emergency provisions (the largest single source). **UK**: parliamentary government, rule of law, law-making procedure, **single citizenship**, cabinet system, writs, bicameralism. **USA**: Fundamental Rights, independent judiciary, **judicial review**, impeachment of the President, removal of judges, post of Vice-President.',
    },
    {
      title: 'Borrowed features (2)',
      text: '**Ireland**: **DPSP**, nomination of Rajya Sabha members, method of electing the President. **Canada**: federation with a strong Centre, **residuary powers** with the Centre, Governors appointed by the Centre. **Australia**: **Concurrent List**, freedom of trade, joint sitting. **USSR**: **Fundamental Duties**, ideals of justice in the Preamble. **France**: republic; liberty, equality, fraternity. **Germany (Weimar)**: suspension of FRs in emergency. **South Africa**: amendment procedure. **Japan**: "procedure established by law".',
    },
    {
      title: 'The Preamble',
      text: 'Source of authority: "**We, the people of India**". Nature of the State: **Sovereign Socialist Secular Democratic Republic**. Objectives: **Justice** (social, economic, political), **Liberty** (thought, expression, belief, faith, worship), **Equality** (status, opportunity), **Fraternity** (dignity of the individual, unity and integrity of the Nation). Date: adopted **26 Nov 1949**.',
      example:
        'Amended once: the **42nd Amendment (1976)** added **Socialist, Secular, Integrity**. **Kesavananda Bharati (1973)**: the Preamble is a part of the Constitution (Berubari, 1960, had said no). Not enforceable in court.',
    },
    {
      title: 'Parts at a glance',
      text: 'Originally **395 articles, 22 Parts, 8 Schedules**. Must-know Parts: **I** Union and its territory (1 to 4), **II** Citizenship (5 to 11), **III** Fundamental Rights (12 to 35), **IV** DPSP (36 to 51), **IVA** Duties (51A), **V** the Union (52 to 151), **VI** the States (152 to 237), **IX** Panchayats, **IXA** Municipalities, **XV** Elections (324 to 329), **XVIII** Emergency (352 to 360), **XX** Amendment (368).',
      example: 'Part VII (Part B states) was repealed by the 7th Amendment (1956).',
    },
    {
      title: 'The 12 Schedules',
      text: '**1** states and UTs; **2** salaries of President, Governors, judges, CAG and others; **3** oaths; **4** Rajya Sabha seats; **5** Scheduled Areas and Tribes; **6** tribal areas of Assam, Meghalaya, Tripura, Mizoram; **7** Union, State, Concurrent Lists; **8** languages (22 as of 2026); **9** land reforms (1st Amdt, 1951); **10** anti-defection (52nd, 1985); **11** Panchayats (73rd, 1992); **12** Municipalities (74th, 1992).',
      example: 'Schedules 9 to 12 were all added by amendments.',
    },
    {
      title: 'Citizenship (Part II, Arts 5 to 11)',
      text: '**Art 5** citizenship at the commencement (domicile in India); Art 6 migrants from Pakistan; Art 7 migrants to Pakistan; Art 8 persons of Indian origin living abroad; **Art 9** voluntarily taking a foreign citizenship ends Indian citizenship; Art 10 continuance; **Art 11** Parliament regulates citizenship by law, hence the **Citizenship Act, 1955**. India has **single citizenship** (from the UK).',
      example:
        'Under the 1955 Act: acquired by birth, descent, registration, naturalisation or incorporation of territory; lost by renunciation, termination or deprivation.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'Making of the Constitution: a timeline',
      figure: {
        viewBox: '0 0 320 330',
        svg: `
<line x1="30" y1="18" x2="30" y2="314" class="d-soft"/>
<circle cx="30" cy="24" r="5" class="d-dot" data-step="1"/>
<text x="44" y="22" class="d-blue" data-step="1">9 Dec 1946</text>
<text x="44" y="38" class="d-small" data-step="1">first meeting, Sinha temporary President</text>
<circle cx="30" cy="62" r="5" class="d-dot" data-step="1"/>
<text x="44" y="60" class="d-blue" data-step="1">11 Dec 1946</text>
<text x="44" y="76" class="d-small" data-step="1">Rajendra Prasad elected President</text>
<circle cx="30" cy="100" r="5" class="d-dot" data-step="2"/>
<text x="44" y="98" class="d-blue" data-step="2">13 Dec 1946</text>
<text x="44" y="114" class="d-small" data-step="2">Nehru: Objectives Resolution</text>
<circle cx="30" cy="138" r="5" class="d-dot" data-step="3"/>
<text x="44" y="136" class="d-blue" data-step="3">22 Jul 1947</text>
<text x="44" y="152" class="d-small" data-step="3">national flag adopted</text>
<circle cx="30" cy="176" r="5" class="d-dot" data-step="3"/>
<text x="44" y="174" class="d-blue" data-step="3">29 Aug 1947</text>
<text x="44" y="190" class="d-small" data-step="3">Drafting Committee, chair Ambedkar</text>
<rect x="38" y="202" width="276" height="36" rx="6" class="d-fill-pink" data-step="4"/>
<circle cx="30" cy="220" r="6" class="d-dot d-red" data-step="4"/>
<text x="44" y="218" class="d-red" data-step="4">26 Nov 1949</text>
<text x="44" y="233" class="d-small" data-step="4">Constitution adopted (Constitution Day)</text>
<circle cx="30" cy="258" r="5" class="d-dot" data-step="5"/>
<text x="44" y="256" class="d-blue" data-step="5">24 Jan 1950</text>
<text x="44" y="272" class="d-small" data-step="5">signed; first President; anthem, song</text>
<rect x="38" y="284" width="276" height="36" rx="6" class="d-fill-green" data-step="6"/>
<circle cx="30" cy="302" r="6" class="d-dot d-green" data-step="6"/>
<text x="44" y="300" class="d-green" data-step="6">26 Jan 1950</text>
<text x="44" y="315" class="d-small" data-step="6">comes into force (Republic Day)</text>`,
      },
      explain: [
        'The Assembly first met on 9 Dec 1946 with Sachchidananda Sinha, the oldest member, as temporary President. Dr Rajendra Prasad was elected permanent President two days later.',
        'On 13 Dec 1946 Nehru moved the Objectives Resolution. It was adopted on 22 Jan 1947 and became the basis of the Preamble.',
        'The national flag was adopted on 22 Jul 1947. The Drafting Committee under Dr B.R. Ambedkar was set up on 29 Aug 1947.',
        'The Constitution was adopted on **26 Nov 1949**, celebrated as Constitution Day. Provisions on citizenship, elections and the provisional Parliament took effect on this day itself.',
        'On 24 Jan 1950, the last sitting: members signed the Constitution, elected Rajendra Prasad as the first President, and adopted the national anthem and national song.',
        'The rest of the Constitution came into force on **26 Jan 1950**, Republic Day, in memory of Purna Swaraj Day (26 Jan 1930).',
      ],
    },
    {
      type: 'diagram',
      title: 'The Preamble in four parts',
      figure: {
        viewBox: '0 0 320 290',
        svg: `
<rect x="8" y="12" width="304" height="46" rx="6" class="d-fill-blue" data-step="1"/><rect x="8" y="12" width="304" height="46" rx="6" data-step="1"/>
<text x="18" y="32" class="d-small d-soft" data-step="1">1. Source of authority</text>
<text x="18" y="50" data-step="1">We, the people of India</text>
<rect x="8" y="68" width="304" height="66" rx="6" class="d-fill" data-step="2"/><rect x="8" y="68" width="304" height="66" rx="6" data-step="2"/>
<text x="18" y="88" class="d-small d-soft" data-step="2">2. Nature of the Indian State</text>
<text x="18" y="106" data-step="2">Sovereign</text><text x="108" y="106" class="d-red" data-step="2">Socialist Secular</text>
<text x="18" y="125" data-step="2">Democratic Republic</text>
<rect x="8" y="144" width="304" height="86" rx="6" class="d-fill-green" data-step="3"/><rect x="8" y="144" width="304" height="86" rx="6" data-step="3"/>
<text x="18" y="164" class="d-small d-soft" data-step="3">3. Objectives</text>
<text x="18" y="183" data-step="3">Justice · Liberty</text>
<text x="18" y="202" data-step="3">Equality · Fraternity</text>
<text x="18" y="221" class="d-small" data-step="3">Fraternity: unity and</text><text x="155" y="221" class="d-small d-red" data-step="3">integrity</text><text x="216" y="221" class="d-small" data-step="3">of the Nation</text>
<rect x="8" y="240" width="304" height="42" rx="6" class="d-fill-pink" data-step="4"/><rect x="8" y="240" width="304" height="42" rx="6" data-step="4"/>
<text x="18" y="259" class="d-small d-soft" data-step="4">4. Date of adoption</text>
<text x="18" y="276" data-step="4">26 November 1949</text>`,
      },
      explain: [
        'The Constitution draws its authority from the people: "We, the people of India... give to ourselves this Constitution".',
        'It declares India a Sovereign Socialist Secular Democratic Republic. The words in red, **Socialist** and **Secular**, were added by the 42nd Amendment (1976).',
        'Four objectives: Justice (social, economic, political), Liberty (thought, expression, belief, faith, worship), Equality (status, opportunity) and Fraternity. "**Integrity**" (in red) was also added in 1976.',
        'It ends by recording the date of adoption, 26 Nov 1949, "in our Constituent Assembly".',
      ],
    },
  ],
  comparisons: [
    {
      title: 'Fifth Schedule vs Sixth Schedule',
      items: ['Fifth Schedule', 'Sixth Schedule'],
      rows: [
        { aspect: 'Deals with', values: ['Scheduled Areas and Scheduled Tribes', 'Tribal areas'] },
        {
          aspect: 'Where it applies',
          values: ['All states **except** Assam, Meghalaya, Tripura and Mizoram', '**Only** Assam, Meghalaya, Tripura and Mizoram'],
          key: true,
        },
        { aspect: 'Key body', values: ['Tribes Advisory Council', 'Autonomous District Councils with law-making powers'], key: true },
        { aspect: 'Article', values: ['Art 244(1)', 'Art 244(2)'] },
      ],
      reveal:
        'Both deal with tribal areas. The Sixth Schedule gives real self-government through District Councils, and only in four north-eastern states.',
      whenToUse: ['Tribal areas anywhere except the four north-eastern states.', 'Autonomous District Councils; Assam, Meghalaya, Tripura, Mizoram.'],
    },
    {
      title: '26 November 1949 vs 26 January 1950',
      items: ['26 Nov 1949', '26 Jan 1950'],
      rows: [
        { aspect: 'What happened', values: ['Constitution **adopted** by the Constituent Assembly', 'Constitution **came into force**'], key: true },
        { aspect: 'Celebrated as', values: ['Constitution Day (Samvidhan Divas)', 'Republic Day'] },
        {
          aspect: 'Provisions in force',
          values: ['Citizenship, elections, provisional Parliament and a few others', 'The rest of the Constitution'],
        },
        { aspect: 'Why this date', values: ['Date the Assembly finished and adopted it', 'Anniversary of Purna Swaraj Day (26 Jan 1930)'] },
      ],
      reveal: 'Adopted in November 1949, in force in January 1950. The Preamble itself mentions 26 November 1949.',
      whenToUse: [
        'Questions on adoption, the date written in the Preamble, or Constitution Day.',
        'Questions on commencement, Republic Day, or why January was chosen.',
      ],
    },
  ],
  qa: [
    {
      q: 'Who presided over the first meeting of the Constituent Assembly?',
      a: ['Dr Sachchidananda Sinha, as temporary President (9 Dec 1946).', 'Dr Rajendra Prasad became permanent President on 11 Dec 1946.'],
      tag: 'Trap',
    },
    {
      q: 'Who chaired the Drafting Committee, and how many members did it have?',
      a: ['Dr B.R. Ambedkar.', 'Seven members; set up on 29 Aug 1947.'],
      tag: 'Asked often',
    },
    {
      q: 'Who moved the Objectives Resolution?',
      a: ['Jawaharlal Nehru, on 13 Dec 1946.', 'Adopted on 22 Jan 1947; it became the basis of the Preamble.'],
    },
    {
      q: 'Which committees did Nehru and Patel chair?',
      a: [
        'Nehru: Union Powers, Union Constitution and States Committees.',
        'Patel: Provincial Constitution Committee and the Advisory Committee on Fundamental Rights and Minorities.',
        'Rajendra Prasad: Steering and Rules of Procedure Committees.',
      ],
    },
    {
      q: 'How long did the Assembly take to make the Constitution?',
      a: ['2 years, 11 months and 18 days.'],
    },
    {
      q: 'Name the source country: DPSP, Fundamental Duties, Concurrent List, residuary powers.',
      a: ['DPSP: Ireland.', 'Fundamental Duties: USSR.', 'Concurrent List: Australia. Residuary powers with the Centre: Canada.'],
      tag: 'Asked often',
    },
    {
      q: 'Which single source contributed the most to the Constitution?',
      a: ['The Government of India Act, 1935.', 'Federal scheme, Governor, judiciary, PSCs, emergency provisions.'],
    },
    {
      q: 'Which words did the 42nd Amendment add to the Preamble?',
      a: ['Socialist, Secular and Integrity (1976).', 'It is the only amendment to the Preamble so far.'],
      tag: 'Asked often',
    },
    {
      q: 'In which case was the Preamble held to be a part of the Constitution?',
      a: ['Kesavananda Bharati case (1973).', 'Earlier, Berubari Union case (1960) said it was not.'],
      tag: 'Trap',
    },
    {
      q: 'Name the four schedules added by amendments.',
      a: [
        '9th: land reforms (1st Amendment, 1951).',
        '10th: anti-defection (52nd, 1985).',
        '11th: Panchayats (73rd, 1992); 12th: Municipalities (74th, 1992).',
      ],
      tag: 'Asked often',
    },
    {
      q: 'Which schedule lists the languages, and how many?',
      a: ['Eighth Schedule.', '22 languages (as of 2026); originally 14.'],
    },
    {
      q: 'Which article empowers Parliament to make laws on citizenship?',
      a: ['Article 11.', 'Parliament passed the Citizenship Act, 1955 under it.'],
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Who was the Chairman of the Drafting Committee of the Constitution?',
      options: ['Jawaharlal Nehru', 'Dr Rajendra Prasad', 'Dr B.R. Ambedkar', 'Sardar Patel'],
      answer: 2,
      explain: 'Dr B.R. Ambedkar chaired the seven-member Drafting Committee. Rajendra Prasad was President of the Constituent Assembly.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'The Constitution of India came into force on:',
      options: ['15 Aug 1947', '26 Nov 1949', '26 Jan 1950', '26 Jan 1930'],
      answer: 2,
      explain: 'It was adopted on 26 Nov 1949 and came into force on 26 Jan 1950.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'The Directive Principles of State Policy were borrowed from the constitution of:',
      options: ['USA', 'Ireland', 'Canada', 'USSR'],
      answer: 1,
      explain: 'DPSP came from Ireland. Fundamental Rights came from the USA and Fundamental Duties from the USSR.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Which Schedule contains the anti-defection law?',
      options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
      answer: 2,
      explain: 'The Tenth Schedule, added by the 52nd Amendment (1985).',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Who was the temporary President of the Constituent Assembly?',
      options: ['Dr Rajendra Prasad', 'Dr Sachchidananda Sinha', 'H.C. Mukherjee', 'B.N. Rau'],
      answer: 1,
      explain:
        'Sachchidananda Sinha, the oldest member, presided at the first meeting on 9 Dec 1946. H.C. Mukherjee was Vice-President; B.N. Rau was adviser.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which words were added to the Preamble by the 42nd Amendment?',
      options: ['Sovereign, Democratic, Unity', 'Socialist, Secular, Integrity', 'Socialist, Republic, Fraternity', 'Secular, Justice, Integrity'],
      answer: 1,
      explain: 'Socialist, Secular and Integrity were added in 1976. Sovereign, Democratic, Republic and Unity were there from the start.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The Concurrent List was borrowed from the constitution of:',
      options: ['Canada', 'USA', 'Australia', 'UK'],
      answer: 2,
      explain: 'Australia. Canada gave the strong Centre and residuary powers with the Centre.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Judicial review in the Indian Constitution is based on the constitution of:',
      options: ['UK', 'USA', 'Ireland', 'Japan'],
      answer: 1,
      explain:
        'Judicial review, independent judiciary and Fundamental Rights came from the USA. The UK has parliamentary sovereignty and no judicial review of Acts.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Who moved the Objectives Resolution in the Constituent Assembly?',
      options: ['Dr B.R. Ambedkar', 'Jawaharlal Nehru', 'Sardar Patel', 'K.M. Munshi'],
      answer: 1,
      explain: 'Nehru moved it on 13 Dec 1946. It was adopted on 22 Jan 1947 and shaped the Preamble.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'In which case did the Supreme Court hold that the Preamble is a part of the Constitution?',
      options: ['Berubari Union case', 'Golaknath case', 'Kesavananda Bharati case', 'Minerva Mills case'],
      answer: 2,
      explain: 'Kesavananda Bharati (1973) reversed the Berubari (1960) view that the Preamble is not a part.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The Seventh Schedule of the Constitution contains:',
      options: ['Forms of oaths', 'Languages', 'Union, State and Concurrent Lists', 'Allocation of Rajya Sabha seats'],
      answer: 2,
      explain: 'Seventh: the three lists. Oaths are in the Third, Rajya Sabha seats in the Fourth, languages in the Eighth.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which Schedule allocates seats in the Rajya Sabha to states and UTs?',
      options: ['Second', 'Third', 'Fourth', 'Fifth'],
      answer: 2,
      explain: 'The Fourth Schedule. The Second has salaries and allowances; the Third has oaths.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The provisions on the administration of tribal areas in Assam, Meghalaya, Tripura and Mizoram are in the:',
      options: ['Fifth Schedule', 'Sixth Schedule', 'Eighth Schedule', 'Ninth Schedule'],
      answer: 1,
      explain: 'Sixth Schedule. The Fifth Schedule covers Scheduled Areas in the other states.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The largest single source of the Indian Constitution is:',
      options: ['British Constitution', 'US Constitution', 'Government of India Act, 1935', 'Indian Independence Act, 1947'],
      answer: 2,
      explain: 'Much of the structure (federal scheme, Governor, emergency provisions, PSCs) came from the 1935 Act.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Which article says a person who voluntarily acquires the citizenship of a foreign country is no longer an Indian citizen?',
      options: ['Article 5', 'Article 8', 'Article 9', 'Article 11'],
      answer: 2,
      explain: 'Article 9. Article 5 is citizenship at commencement, 8 is persons of Indian origin abroad, 11 lets Parliament regulate citizenship.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Who chaired the Advisory Committee on Fundamental Rights and Minorities?',
      options: ['Jawaharlal Nehru', 'Sardar Vallabhbhai Patel', 'Dr Rajendra Prasad', 'Dr B.R. Ambedkar'],
      answer: 1,
      explain:
        'Sardar Patel, who also chaired the Provincial Constitution Committee. Nehru chaired the Union Powers and Union Constitution Committees.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'The Ninth Schedule was added by which amendment?',
      options: ['1st Amendment, 1951', '7th Amendment, 1956', '42nd Amendment, 1976', '44th Amendment, 1978'],
      answer: 0,
      explain: 'The 1st Amendment (1951) added the Ninth Schedule to protect land reform laws from challenge.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'The idea of "procedure established by law" was borrowed from the constitution of:',
      options: ['USA', 'UK', 'Japan', 'Germany'],
      answer: 2,
      explain: 'Japan. The USA uses "due process of law", which is a wider test.',
    },
  ],
};

export default topic;
