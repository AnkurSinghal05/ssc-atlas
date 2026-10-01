import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'judiciary',
  title: 'Judiciary',
  level: 'intermediate',
  masteryMinutes: 60,
  reviseMinutes: 20,
  priority: 'medium',
  tags: ['Supreme Court', 'High Courts', 'writs', 'Article 32', 'Article 226', 'Article 143', 'collegium', 'PIL', 'impeachment of judges'],
  summary:
    'The Supreme Court (Arts 124 to 147), the High Courts (Arts 214 to 231) and a quick look at subordinate courts. Questions test which article gives which jurisdiction, the five writs, retirement ages, who takes the oath, and how a judge is removed.',
  patterns: [
    { name: 'Article to power', frequency: 'most', example: 'Advisory jurisdiction of the Supreme Court is under which article?' },
    { name: 'Name the writ', frequency: 'most', example: 'Which writ means "we command"?' },
    { name: 'Ages, qualifications and oath', frequency: 'often', example: 'Retirement age of a High Court judge?' },
    { name: 'Removal of judges', frequency: 'often', example: 'On what grounds can a Supreme Court judge be removed?' },
    { name: 'Art 32 vs Art 226', frequency: 'often', example: 'Which court has wider writ jurisdiction?' },
    { name: 'Collegium, judges cases and PIL', frequency: 'rare', example: 'The collegium system came from which case?' },
  ],
  keyPoints: [
    {
      title: 'Supreme Court: the articles that get asked',
      text: '**Art 124** establishment and constitution of the SC · **Art 129** court of record (can punish for its own contempt) · **Art 131** original jurisdiction (Centre vs states disputes) · **Art 32** writs for fundamental rights · **Art 136** special leave to appeal · **Art 137** review of its own judgments · **Art 141** its law binds all courts · **Art 143** advisory opinion to the President.',
      example: 'Art 130: the seat is Delhi, or elsewhere as the CJI decides with the approval of the President.',
    },
    {
      title: 'Supreme Court judges',
      text: 'Appointed by the **President** (Art 124(2)). Qualifications: citizen, and a High Court judge for **5 years**, or a High Court advocate for **10 years**, or a distinguished jurist in the opinion of the President. Retire at **65**. Oath before the **President**; resignation to the President.',
      example: 'Parliament fixes the number of judges. 1950: 8 (CJI + 7). As of 2026: **38** including the CJI, after a 2026 law.',
    },
    {
      title: 'Removal of a judge',
      text: 'Only by an order of the **President** after an address passed by **each House** of Parliament with a **special majority**: a majority of the total membership and two-thirds of members present and voting, in the same session (Art 124(4)). Grounds: **proved misbehaviour or incapacity**. Procedure: Judges (Inquiry) Act, 1968.',
      example: 'A High Court judge is removed the same way (Art 217). The word "impeachment" is not used for judges in the Constitution.',
    },
    {
      title: 'High Courts: the articles that get asked',
      text: '**Art 214** a High Court for each state · **Art 217** appointment and conditions (retire at **62**) · **Art 226** writs for fundamental rights **and for any other purpose** · **Art 227** superintendence over all courts and tribunals in its area · **Art 231** a common High Court for two or more states.',
      example:
        'Oath of a High Court judge: before the **Governor** (Art 219). Transfer between High Courts: by the President after consulting the CJI (Art 222).',
    },
    {
      title: 'The five writs',
      text: '**Habeas corpus** "to have the body": produce a detained person. **Mandamus** "we command": a public official must do a public duty. **Prohibition**: a higher court stops a lower court or tribunal **before** it exceeds its jurisdiction. **Certiorari** "to be certified": quashes an order **already** passed. **Quo warranto** "by what authority": asks by what right a person holds a public office.',
      example: 'Mandamus does not lie against the President, a Governor or a private person.',
    },
    {
      title: 'Collegium in short',
      text: 'The Constitution only says "consultation" with the CJI. The **Second Judges case (1993)** read it as CJI primacy and created the **collegium**. The **Third Judges case (1998)**, a reference under Art 143, set the SC collegium at the **CJI + 4 senior-most judges**. The **99th Amendment (2014)** created the NJAC; the Supreme Court struck it down in **2015**.',
      example: 'High Court collegium: the Chief Justice of that High Court + 2 senior-most judges.',
    },
    {
      title: 'PIL (public interest litigation)',
      text: 'Anyone acting in good faith can approach the Supreme Court (Art 32) or a High Court (Art 226) for people who cannot come to court themselves. The rule of standing (locus standi) is relaxed; even a letter can be treated as a petition. Pioneered by Justices **P.N. Bhagwati** and **V.R. Krishna Iyer**.',
      example: 'Early landmark: Hussainara Khatoon v State of Bihar (1979), on undertrial prisoners.',
    },
    {
      title: 'Subordinate courts (briefly)',
      text: '**Arts 233 to 237**. District judges are appointed by the **Governor** in consultation with the High Court (Art 233). The High Court controls the subordinate courts (Art 235). Below the district court: civil courts and magistrate courts. **Lok Adalats** are statutory (Legal Services Authorities Act, 1987), not constitutional.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'One integrated judiciary',
      figure: {
        viewBox: '0 0 320 250',
        svg: `
<rect x="20" y="14" width="280" height="44" rx="6" class="d-fill" data-step="1"/><rect x="20" y="14" width="280" height="44" rx="6" data-step="1"/>
<text x="160" y="33" text-anchor="middle" data-step="1">Supreme Court (Art 124)</text>
<text x="160" y="50" text-anchor="middle" class="d-small" data-step="1">retire at 65 · writs under Art 32</text>
<line x1="160" y1="60" x2="160" y2="74" data-step="2"/><polyline points="156,68 160,74 164,68" data-step="2"/>
<rect x="20" y="76" width="280" height="44" rx="6" class="d-fill-blue" data-step="2"/><rect x="20" y="76" width="280" height="44" rx="6" data-step="2"/>
<text x="160" y="95" text-anchor="middle" data-step="2">High Courts (Art 214)</text>
<text x="160" y="112" text-anchor="middle" class="d-small" data-step="2">retire at 62 · writs under Art 226</text>
<line x1="160" y1="122" x2="160" y2="136" data-step="3"/><polyline points="156,130 160,136 164,130" data-step="3"/>
<rect x="20" y="138" width="280" height="44" rx="6" class="d-fill-green" data-step="3"/><rect x="20" y="138" width="280" height="44" rx="6" data-step="3"/>
<text x="160" y="157" text-anchor="middle" data-step="3">District courts (Art 233)</text>
<text x="160" y="174" text-anchor="middle" class="d-small" data-step="3">judge appointed by the Governor</text>
<line x1="160" y1="184" x2="160" y2="198" data-step="4"/><polyline points="156,192 160,198 164,192" data-step="4"/>
<rect x="20" y="200" width="280" height="36" rx="6" class="d-fill-pink" data-step="4"/><rect x="20" y="200" width="280" height="36" rx="6" data-step="4"/>
<text x="160" y="223" text-anchor="middle" class="d-small" data-step="4">Civil courts and magistrate courts</text>`,
      },
      explain: [
        'The Supreme Court (Art 124) is at the top. Its law binds every court in India (Art 141).',
        'Each state has a High Court (Art 214). A High Court judge retires at 62, three years earlier than a Supreme Court judge.',
        'District judges are appointed by the Governor in consultation with the High Court (Art 233).',
        'Below them are civil and criminal (magistrate) courts. The High Court supervises all of them (Arts 227 and 235).',
      ],
    },
    {
      type: 'diagram',
      title: 'Supreme Court: five kinds of jurisdiction',
      figure: {
        viewBox: '0 0 320 290',
        svg: `
<rect x="70" y="10" width="180" height="32" rx="6" class="d-fill" /><rect x="70" y="10" width="180" height="32" rx="6" />
<text x="160" y="32" text-anchor="middle">Supreme Court</text>
<line x1="40" y1="42" x2="40" y2="258" class="d-soft" />
<line x1="40" y1="76" x2="56" y2="76" class="d-soft" /><line x1="40" y1="120" x2="56" y2="120" class="d-soft" />
<line x1="40" y1="164" x2="56" y2="164" class="d-soft" /><line x1="40" y1="208" x2="56" y2="208" class="d-soft" />
<line x1="40" y1="252" x2="56" y2="252" class="d-soft" />
<rect x="56" y="60" width="104" height="32" rx="6" class="d-fill-green" data-step="1"/><rect x="56" y="60" width="104" height="32" rx="6" data-step="1"/>
<text x="108" y="81" text-anchor="middle" data-step="1">Original</text>
<text x="170" y="73" class="d-small" data-step="1">Art 131</text>
<text x="170" y="89" class="d-small" data-step="1">Centre vs states</text>
<rect x="56" y="104" width="104" height="32" rx="6" class="d-fill-pink" data-step="2"/><rect x="56" y="104" width="104" height="32" rx="6" data-step="2"/>
<text x="108" y="125" text-anchor="middle" data-step="2">Writ</text>
<text x="170" y="117" class="d-small" data-step="2">Art 32</text>
<text x="170" y="133" class="d-small" data-step="2">fundamental rights</text>
<rect x="56" y="148" width="104" height="32" rx="6" class="d-fill-blue" data-step="3"/><rect x="56" y="148" width="104" height="32" rx="6" data-step="3"/>
<text x="108" y="169" text-anchor="middle" data-step="3">Appellate</text>
<text x="170" y="161" class="d-small" data-step="3">Arts 132 to 134, 136</text>
<text x="170" y="177" class="d-small" data-step="3">appeals, special leave</text>
<rect x="56" y="192" width="104" height="32" rx="6" class="d-fill" data-step="4"/><rect x="56" y="192" width="104" height="32" rx="6" data-step="4"/>
<text x="108" y="213" text-anchor="middle" data-step="4">Advisory</text>
<text x="170" y="205" class="d-small" data-step="4">Art 143</text>
<text x="170" y="221" class="d-small" data-step="4">opinion to President</text>
<rect x="56" y="236" width="104" height="32" rx="6" class="d-fill-green" data-step="5"/><rect x="56" y="236" width="104" height="32" rx="6" data-step="5"/>
<text x="108" y="257" text-anchor="middle" data-step="5">Review</text>
<text x="170" y="249" class="d-small" data-step="5">Art 137</text>
<text x="170" y="265" class="d-small" data-step="5">its own judgments</text>`,
      },
      explain: [
        'Original (Art 131): disputes between the Centre and states, or between states. These start directly in the Supreme Court.',
        'Writ (Art 32): enforces fundamental rights only. Art 32 is itself a fundamental right, which Ambedkar called the "heart and soul" of the Constitution.',
        'Appellate: appeals in constitutional, civil and criminal cases (Arts 132 to 134), and **special leave** to appeal from any court or tribunal (Art 136), except military tribunals.',
        'Advisory (Art 143): the President may ask for its opinion on a question of law or fact. The opinion does not bind the President.',
        'Review (Art 137): the Supreme Court can review its own judgments. As a court of record (Art 129) it can also punish for contempt of itself.',
      ],
    },
  ],
  comparisons: [
    {
      title: 'Art 32 vs Art 226',
      items: ['Art 32 (Supreme Court)', 'Art 226 (High Court)'],
      rows: [
        { aspect: 'Which court', values: ['Supreme Court', 'High Court'] },
        { aspect: 'Purpose', values: ['Only to enforce fundamental rights', 'Fundamental rights **and any other legal right**'], key: true },
        { aspect: 'Is it a fundamental right?', values: ['Yes (Part III)', 'No; a constitutional right'], key: true },
        { aspect: 'Territorial reach', values: ['Whole of India', 'Its own territory (and a cause arising in it)'] },
        { aspect: 'Must the court hear it?', values: ['Cannot refuse when a fundamental right is violated', 'Discretionary'] },
        { aspect: 'Scope', values: ['Narrower purpose, wider territory', 'Wider purpose, narrower territory'] },
      ],
      reveal:
        'The High Court can issue writs for more purposes than the Supreme Court. Art 32 is narrower but is itself a fundamental right, so it cannot be taken away except by an amendment.',
      whenToUse: [
        'A question about fundamental rights only, "heart and soul", or all-India reach.',
        'A question about "any other purpose", ordinary legal rights, or which court has the wider writ power.',
      ],
    },
    {
      title: 'Supreme Court judge vs High Court judge',
      items: ['Supreme Court judge', 'High Court judge'],
      rows: [
        { aspect: 'Article', values: ['Art 124', 'Art 217'] },
        { aspect: 'Appointed by', values: ['President', 'President'] },
        { aspect: 'Retirement age', values: ['**65**', '**62**'], key: true },
        { aspect: 'Oath before', values: ['President', 'Governor'], key: true },
        { aspect: 'Resigns to', values: ['President', 'President'] },
        {
          aspect: 'Qualification',
          values: ['5 years HC judge, or 10 years HC advocate, or distinguished jurist', '10 years judicial office, or 10 years HC advocate'],
        },
        { aspect: 'Removal', values: ['Address by both Houses, special majority', 'Same as a Supreme Court judge'] },
      ],
      reveal:
        'Both are appointed and removed through the President and Parliament. The differences are the age (65 vs 62), the oath (President vs Governor), and the jurist route, which exists only for the Supreme Court.',
      whenToUse: ['Questions on 65, the jurist route, or an oath before the President.', 'Questions on 62, an oath before the Governor, or Art 217.'],
    },
    {
      title: 'Prohibition vs certiorari',
      items: ['Prohibition', 'Certiorari'],
      rows: [
        { aspect: 'Meaning', values: ['"To forbid"', '"To be certified" or "to be informed"'] },
        { aspect: 'When issued', values: ['**Before** the lower body decides (preventive)', '**After** the order is passed (curative)'], key: true },
        { aspect: 'Effect', values: ['Stops the proceedings', 'Quashes the order'] },
        {
          aspect: 'Against whom',
          values: ['Judicial and quasi-judicial bodies', 'Judicial and quasi-judicial bodies (also administrative, per court rulings)'],
        },
        { aspect: 'Not available against', values: ['Legislatures, private persons', 'Legislatures, private persons'] },
      ],
      reveal:
        'Both correct a lower court or tribunal that goes beyond its jurisdiction. The only real difference is timing: prohibition stops the case, certiorari cancels the result.',
      whenToUse: ['The case is still going on.', 'The order has already been made.'],
    },
  ],
  qa: [
    {
      q: 'Which article gives the Supreme Court advisory jurisdiction?',
      a: ['Article 143.', 'The President refers a question; the opinion does not bind the President.'],
      tag: 'Asked often',
    },
    {
      q: 'Name the five writs and one line on each.',
      a: [
        'Habeas corpus: produce the detained person.',
        'Mandamus: do your public duty. Prohibition: stop before exceeding jurisdiction.',
        'Certiorari: quash an order already passed. Quo warranto: by what authority do you hold this office?',
      ],
      tag: 'Asked often',
    },
    {
      q: 'Retirement age of Supreme Court and High Court judges?',
      a: ['Supreme Court: 65.', 'High Court: 62.'],
      tag: 'Asked often',
    },
    {
      q: 'Who administers the oath to a High Court judge?',
      a: ['The Governor of the state (Art 219).', 'A Supreme Court judge takes the oath before the President.'],
      tag: 'Trap',
    },
    {
      q: 'On what grounds can a Supreme Court judge be removed?',
      a: ['Proved misbehaviour or incapacity (Art 124(4)).', 'By the President after a special-majority address in each House.'],
    },
    {
      q: 'Which article makes the Supreme Court a court of record?',
      a: ['Article 129.', 'Its records are evidence, and it can punish for contempt of itself. Art 215 does the same for High Courts.'],
    },
    {
      q: 'Which article lets the Supreme Court grant special leave to appeal?',
      a: ['Article 136.', 'From any court or tribunal in India, except military tribunals.'],
    },
    {
      q: 'Which article gives the High Court power over all courts in its area?',
      a: ['Article 227 (superintendence).', 'Art 226 is its writ power.'],
      tag: 'Trap',
    },
    {
      q: 'Which writ can be sought by any person, not only the person affected?',
      a: ['Quo warranto.', 'Habeas corpus can also be filed by a friend or relative of the detained person.'],
    },
    {
      q: 'What is the collegium and where did it come from?',
      a: [
        'A group of the CJI and senior judges that recommends appointments and transfers of judges.',
        'Second Judges case (1993); expanded to CJI + 4 in the Third Judges case (1998).',
      ],
    },
    {
      q: 'Which amendment created the NJAC and what happened to it?',
      a: ['99th Amendment (2014).', 'Struck down by the Supreme Court in 2015; the collegium continued.'],
    },
    {
      q: 'Who appoints district judges?',
      a: ['The Governor, in consultation with the High Court (Art 233).'],
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Which article of the Constitution establishes the Supreme Court?',
      options: ['Article 32', 'Article 124', 'Article 214', 'Article 226'],
      answer: 1,
      explain: 'Article 124 establishes the Supreme Court. Article 214 does the same for High Courts.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'The retirement age of a High Court judge is:',
      options: ['58 years', '60 years', '62 years', '65 years'],
      answer: 2,
      explain: 'High Court judges retire at 62; Supreme Court judges at 65.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Which writ is issued to produce a detained person before the court?',
      options: ['Mandamus', 'Habeas corpus', 'Certiorari', 'Quo warranto'],
      answer: 1,
      explain: 'Habeas corpus means "to have the body". It protects against unlawful detention.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Which writ literally means "we command"?',
      options: ['Mandamus', 'Prohibition', 'Certiorari', 'Habeas corpus'],
      answer: 0,
      explain: 'Mandamus literally means "we command". It orders a public official or body to perform a public duty it has failed to do.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Who appoints the judges of the Supreme Court?',
      options: ['The Prime Minister', 'The Chief Justice of India', 'The President', 'Parliament'],
      answer: 2,
      explain: 'Art 124(2): the President appoints them, in practice on the recommendation of the collegium.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The advisory jurisdiction of the Supreme Court is given in:',
      options: ['Article 131', 'Article 136', 'Article 137', 'Article 143'],
      answer: 3,
      explain: 'Article 143. Art 131 is original jurisdiction, 136 special leave, 137 review.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A dispute between the Government of India and a state goes to the Supreme Court under its:',
      options: ['Appellate jurisdiction', 'Original jurisdiction', 'Advisory jurisdiction', 'Writ jurisdiction'],
      answer: 1,
      explain: 'Article 131 gives the Supreme Court exclusive original jurisdiction over Centre-state and inter-state disputes.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which article allows the Supreme Court to review its own judgments?',
      options: ['Article 129', 'Article 137', 'Article 141', 'Article 144'],
      answer: 1,
      explain: 'Article 137. Art 129 makes it a court of record; Art 141 makes its law binding on all courts.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The oath of office to a judge of a High Court is administered by:',
      options: ['The President', 'The Chief Justice of India', 'The Governor of the state', 'The Chief Justice of that High Court'],
      answer: 2,
      explain: 'Art 219: before the Governor or a person appointed by the Governor.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which writ is issued to quash an order already passed by a lower court or tribunal?',
      options: ['Prohibition', 'Certiorari', 'Mandamus', 'Quo warranto'],
      answer: 1,
      explain: 'Certiorari is curative (after the order). Prohibition is preventive (before the order).',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which pair of judges is credited with pioneering public interest litigation (PIL) in India?',
      options: ['H.J. Kania and Patanjali Sastri', 'P.N. Bhagwati and V.R. Krishna Iyer', 'A.N. Ray and M.H. Beg', 'J.S. Verma and A.M. Ahmadi'],
      answer: 1,
      explain: 'Justices P.N. Bhagwati and V.R. Krishna Iyer relaxed the rule of standing (locus standi) in the late 1970s and 1980s, so anyone acting in good faith, even by letter, could approach the court for people who could not.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'A judge of the Supreme Court can be removed on the ground of:',
      options: [
        'Violation of the Constitution',
        'Proved misbehaviour or incapacity',
        'Loss of confidence of the Lok Sabha',
        'Recommendation of the CJI alone',
      ],
      answer: 1,
      explain: 'Art 124(4). "Violation of the Constitution" is the ground for impeaching the President (Art 61).',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Under which article can a High Court issue writs "for any other purpose" besides fundamental rights?',
      options: ['Article 32', 'Article 214', 'Article 226', 'Article 227'],
      answer: 2,
      explain: "Article 226. That is why a High Court's writ power is wider in purpose than the Supreme Court's under Art 32.",
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Special leave to appeal to the Supreme Court is granted under:',
      options: ['Article 132', 'Article 134', 'Article 136', 'Article 143'],
      answer: 2,
      explain: 'Article 136 lets the Supreme Court hear an appeal from any court or tribunal, except military tribunals.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which article provides for a common High Court for two or more states?',
      options: ['Article 214', 'Article 217', 'Article 227', 'Article 231'],
      answer: 3,
      explain: 'Article 231. The 7th Amendment (1956) added this provision.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'The collegium of the Supreme Court was expanded to the CJI and four senior-most judges by the:',
      options: ['First Judges case (1981)', 'Second Judges case (1993)', 'Third Judges case (1998)', '99th Amendment (2014)'],
      answer: 2,
      explain: 'The Third Judges case, a presidential reference under Art 143. The Second Judges case had created the collegium.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Which of these is NOT a qualification route for appointment as a Supreme Court judge?',
      options: [
        'High Court judge for 5 years',
        'High Court advocate for 10 years',
        'Distinguished jurist in the opinion of the President',
        'District judge for 5 years',
      ],
      answer: 3,
      explain: 'Art 124(3) lists only the first three. Being a district judge alone does not qualify.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Which article makes the law declared by the Supreme Court binding on all courts in India?',
      options: ['Article 129', 'Article 137', 'Article 141', 'Article 144'],
      answer: 2,
      explain: 'Article 141. Art 144 says all authorities must act in aid of the Supreme Court.',
    },
  ],
};

export default topic;
