import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'money-banking',
  title: 'Money, banking and RBI',
  level: 'intermediate',
  masteryMinutes: 60,
  reviseMinutes: 20,
  priority: 'high',
  weightage: { tier1: 1, tier2: 1 },
  tags: ['RBI', 'repo rate', 'reverse repo', 'CRR', 'SLR', 'bank rate', 'SDF', 'MSF', 'MPC', 'money supply', 'M3', 'nationalisation'],
  summary:
    'What the RBI does, how each policy tool moves money in or out of banks, how money supply is measured (M0 to M4), and the years banks were nationalised. Learn what each rate means, not its current value.',
  keyPoints: [
    {
      title: 'RBI: history',
      text: "Set up on **1 April 1935** under the **RBI Act, 1934**, on the recommendation of the Hilton Young Commission. Started as a private shareholders' bank; **nationalised on 1 January 1949**. Central office moved from Calcutta to **Mumbai** in **1937**. First Governor: **Sir Osborne Smith**. First Indian Governor: **C.D. Deshmukh**.",
      example: 'The **Banking Regulation Act, 1949** gives the RBI its powers to license and supervise banks.',
    },
    {
      title: 'RBI: functions',
      text: "**Bank of issue**: issues all currency notes except the ₹1 note. **Banker to the government**: Centre and states. **Bankers' bank** and **lender of last resort**. **Controller of credit** through monetary policy. **Custodian of foreign exchange reserves** and manager of the rupee's exchange rate. **Regulator and supervisor** of banks and the payment system.",
      example:
        'The **₹1 note and all coins** are issued by the **Government of India**; the ₹1 note carries the signature of the **Finance Secretary**, other notes that of the RBI Governor.',
    },
    {
      title: 'Monetary Policy Committee',
      text: 'Created by an amendment to the RBI Act; first constituted in **2016**. **Six members**: three from the RBI (the Governor chairs and has a casting vote) and three external members appointed by the Central Government. It sets the **repo rate** and must meet at least four times a year. The inflation target, set by the government, was fixed in 2016 at **4% CPI inflation with a band of ±2%**.',
    },
    {
      title: 'Liquidity tools: repo, reverse repo, SDF, MSF',
      text: '**Repo rate**: rate at which the RBI lends to banks for short periods against government securities; the main policy rate. **Reverse repo rate**: rate at which the RBI absorbs money from banks against securities. **Standing Deposit Facility (SDF, 2022)**: banks park surplus money with the RBI **without collateral**; it is the floor of the corridor. **Marginal Standing Facility (MSF, 2011)**: banks borrow overnight at a rate above repo, and may dip into their SLR holdings up to a limit; it is the ceiling of the corridor.',
      example: 'Corridor, lowest to highest: **SDF rate < repo rate < MSF rate**.',
    },
    {
      title: 'Reserve ratios and other tools',
      text: "**CRR** (Cash Reserve Ratio): share of a bank's net demand and time liabilities (NDTL) kept as **cash with the RBI**; earns no interest. **SLR** (Statutory Liquidity Ratio): share of NDTL the bank keeps **with itself** in cash, gold or approved securities. **Bank rate**: rate at which the RBI lends for longer periods **without collateral**; now aligned with the MSF rate. **Open market operations (OMO)**: buying government securities injects money; selling absorbs it.",
      example:
        'Raise repo, CRR or SLR, or sell securities: **less money** with banks, used against inflation. Cut them, or buy securities: **more money**.',
    },
    {
      title: 'Quantitative vs qualitative tools',
      text: '**Quantitative** (general) tools change the total amount of credit: repo, reverse repo, bank rate, CRR, SLR, OMO. **Qualitative** (selective) tools direct credit to or away from particular uses: margin requirements, credit rationing, moral suasion, direct action.',
      example: 'Moral suasion means the RBI persuades banks through advice and meetings rather than orders.',
    },
    {
      title: 'Money supply: M0 to M4',
      text: "**M0** (reserve money) = currency in circulation + bankers' deposits with the RBI + other deposits with the RBI. **M1** = currency with the public + demand deposits with banks + other deposits with the RBI. **M2** = M1 + savings deposits with post office savings banks. **M3** = M1 + time deposits with banks. **M4** = M3 + total post office deposits (excluding NSC).",
      formula: 'M3 = M1 + time deposits of banks',
      example: 'M1 is the most liquid, M4 the least. **M1 and M2 are narrow money; M3 and M4 are broad money.** M3 is the measure most used.',
    },
    {
      title: 'Nationalisation and other banks',
      text: 'Three presidency banks merged into the **Imperial Bank of India (1921)**, which became the **State Bank of India on 1 July 1955**. **14 banks** were nationalised on **19 July 1969** (deposits of ₹50 crore or more) and **6 more** on **15 April 1980** (₹200 crore or more). **Regional Rural Banks**: from **1975**. **NABARD**: **1982**, apex bank for agriculture and rural development. **SIDBI**: 1990, for small industries.',
      example: 'A loan becomes a **non-performing asset (NPA)** when interest or principal stays overdue for **more than 90 days**.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'The policy corridor: SDF, repo, MSF',
      figure: {
        viewBox: '0 0 320 200',
        svg: `
<rect x="50" y="60" width="150" height="100" class="d-fill-blue" data-step="4"/>
<line x1="40" y1="190" x2="40" y2="22" class="d-soft"/><polyline points="36,28 40,22 44,28" class="d-soft"/>
<text x="46" y="30" class="d-small d-soft">rate</text>
<line x1="50" y1="60" x2="200" y2="60" class="d-red d-thick" data-step="2 4"/>
<line x1="50" y1="110" x2="200" y2="110" class="d-thick" data-step="1"/>
<line x1="50" y1="160" x2="200" y2="160" class="d-green d-thick" data-step="3 4"/>
<text x="125" y="84" text-anchor="middle" class="d-small d-soft" data-step="4">overnight rates</text>
<text x="125" y="98" text-anchor="middle" class="d-small d-soft" data-step="4">stay in here</text>
<text x="208" y="65" class="d-red" data-step="2">MSF</text><text x="208" y="80" class="d-small" data-step="2">ceiling: borrow</text>
<text x="208" y="115" data-step="1">repo rate</text><text x="208" y="130" class="d-small" data-step="1">set by the MPC</text>
<text x="208" y="165" class="d-green" data-step="3">SDF</text><text x="208" y="180" class="d-small" data-step="3">floor: park money</text>`,
      },
      explain: [
        'The repo rate, set by the MPC, is the main policy rate: the RBI lends to banks at it against government securities.',
        'MSF is the ceiling: a bank short of money can borrow overnight from the RBI at a rate above repo.',
        'SDF is the floor: a bank with spare money can park it with the RBI, with **no collateral** needed.',
        'Overnight market rates stay inside this band, so the order is always **SDF < repo < MSF**.',
      ],
    },
    {
      type: 'diagram',
      title: 'Building M1 to M4',
      figure: {
        viewBox: '0 0 320 200',
        svg: `
<text x="14" y="39">M1</text>
<rect x="50" y="20" width="80" height="26" class="d-fill" data-step="1"/><rect x="50" y="20" width="80" height="26" data-step="1"/><text x="90" y="37" text-anchor="middle" class="d-small" data-step="1">cash + DD</text>
<text x="138" y="38" class="d-small d-soft">narrow money</text>
<text x="14" y="77">M2</text>
<rect x="50" y="58" width="80" height="26" class="d-fill" data-step="1"/><rect x="50" y="58" width="80" height="26" data-step="1"/><text x="90" y="75" text-anchor="middle" class="d-small" data-step="1">M1</text>
<rect x="130" y="58" width="90" height="26" class="d-fill-green" data-step="2"/><rect x="130" y="58" width="90" height="26" data-step="2"/><text x="175" y="75" text-anchor="middle" class="d-small" data-step="2">PO savings</text>
<text x="228" y="76" class="d-small d-soft">narrow</text>
<text x="14" y="115">M3</text>
<rect x="50" y="96" width="80" height="26" class="d-fill" data-step="1"/><rect x="50" y="96" width="80" height="26" data-step="1"/><text x="90" y="113" text-anchor="middle" class="d-small" data-step="1">M1</text>
<rect x="130" y="96" width="90" height="26" class="d-fill-pink" data-step="3"/><rect x="130" y="96" width="90" height="26" data-step="3"/><text x="175" y="113" text-anchor="middle" class="d-small" data-step="3">time deposits</text>
<text x="228" y="114" class="d-small d-soft">broad</text>
<text x="14" y="153">M4</text>
<rect x="50" y="134" width="80" height="26" class="d-fill" data-step="1"/><rect x="50" y="134" width="80" height="26" data-step="1"/><text x="90" y="151" text-anchor="middle" class="d-small" data-step="1">M1</text>
<rect x="130" y="134" width="90" height="26" class="d-fill-pink" data-step="3"/><rect x="130" y="134" width="90" height="26" data-step="3"/><text x="175" y="151" text-anchor="middle" class="d-small" data-step="3">time deposits</text>
<rect x="220" y="134" width="80" height="26" class="d-fill-blue" data-step="4"/><rect x="220" y="134" width="80" height="26" data-step="4"/><text x="260" y="151" text-anchor="middle" class="d-small" data-step="4">PO deposits</text>
<text x="50" y="186" class="d-small d-soft">Liquidity falls going down: M1 most, M4 least.</text>`,
        caption: 'Cash = currency with the public; DD = demand deposits; PO = post office.',
      },
      explain: [
        'M1 = currency with the public + demand deposits with banks + other deposits with the RBI.',
        'M2 = M1 + savings deposits with post office savings banks.',
        'M3 = M1 + time deposits with banks. This is **broad money**, the measure used most.',
        'M4 = M3 + all post office deposits (except NSC). M1 and M2 are narrow money; M3 and M4 are broad.',
      ],
    },
  ],
  comparisons: [
    {
      title: 'Repo vs reverse repo vs CRR vs SLR',
      items: ['Repo rate', 'Reverse repo rate', 'CRR', 'SLR'],
      rows: [
        {
          aspect: 'What it is',
          values: [
            'Rate at which the RBI lends to banks',
            'Rate at which the RBI borrows from banks',
            'Share of NDTL kept as cash with the RBI',
            'Share of NDTL kept by the bank in liquid assets',
          ],
          key: true,
        },
        { aspect: 'Type', values: ['Rate (%)', 'Rate (%)', 'Ratio (% of NDTL)', 'Ratio (% of NDTL)'] },
        {
          aspect: 'Where the money sits',
          values: ['Moves from RBI to banks', 'Moves from banks to RBI', 'With the RBI', 'With the bank itself'],
          key: true,
        },
        {
          aspect: 'Form',
          values: ['Loan against government securities', 'Deposit against securities', 'Cash only', 'Cash, gold or approved securities'],
        },
        { aspect: 'Bank earns interest?', values: ['No, the bank pays it', 'Yes', 'No', 'Yes, on securities held'] },
        { aspect: 'Legal basis', values: ['RBI Act', 'RBI Act', 'Section 42, RBI Act, 1934', 'Section 24, Banking Regulation Act, 1949'] },
        {
          aspect: 'Raising it',
          values: ['Makes loans costlier; less money', 'Pulls money out of the market', 'Leaves banks less to lend', 'Leaves banks less to lend'],
        },
      ],
      reveal:
        'Repo and reverse repo are prices of short-term money between the RBI and banks. CRR and SLR are portions of deposits banks must set aside. Raising any of them tightens money.',
      whenToUse: [
        'Banks borrow short-term from the RBI.',
        'Banks lend surplus to the RBI against securities.',
        'Deposits kept as cash with the RBI.',
        'Deposits kept by banks in gold, cash or government securities.',
      ],
    },
    {
      title: 'Monetary vs fiscal policy',
      items: ['Monetary policy', 'Fiscal policy'],
      rows: [
        { aspect: 'Made by', values: ['Reserve Bank of India (MPC sets the repo rate)', 'Central Government (Ministry of Finance)'], key: true },
        { aspect: 'Tools', values: ['Repo rate, CRR, SLR, OMO, bank rate', 'Taxes, government spending, borrowing'], key: true },
        { aspect: 'Main aim', values: ['Price stability while keeping growth in mind', 'Growth, redistribution, public services'] },
        {
          aspect: 'Main document or event',
          values: ['MPC policy statement, at least four meetings a year', 'Union Budget (Art 112, annual financial statement)'],
        },
        { aspect: 'Needs Parliament?', values: ['No', "Yes: taxes and spending need Parliament's approval"] },
      ],
      reveal: "Monetary policy works through the cost and quantity of money. Fiscal policy works through the government's own income and spending.",
      whenToUse: [
        'The question is about interest rates, liquidity or inflation targeting.',
        'The question is about taxes, subsidies, deficits or the Budget.',
      ],
    },
  ],
  qa: [
    {
      q: 'When was the RBI set up and when was it nationalised?',
      a: ['Set up on 1 April 1935 under the RBI Act, 1934.', 'Nationalised on 1 January 1949.'],
      tag: 'Asked often',
    },
    {
      q: 'Who issues the ₹1 note?',
      a: ['The Government of India, not the RBI.', 'It is signed by the Finance Secretary. Coins are also issued by the government.'],
      tag: 'Trap',
    },
    {
      q: 'Repo rate vs reverse repo rate?',
      a: ['Repo: the RBI lends to banks.', 'Reverse repo: the RBI borrows from banks.'],
      tag: 'Asked often',
    },
    {
      q: 'What is the difference between CRR and SLR?',
      a: ['CRR is kept as cash with the RBI and earns nothing.', 'SLR is kept by the bank itself in cash, gold or approved securities.'],
      tag: 'Asked often',
    },
    {
      q: 'What does the RBI do to control inflation?',
      a: [
        'Raise the repo rate, CRR or SLR.',
        'Sell government securities through open market operations.',
        'Each move leaves less money with banks.',
      ],
    },
    {
      q: 'What is the Standing Deposit Facility?',
      a: ['A window, from 2022, where banks park surplus money with the RBI without collateral.', 'Its rate is the floor of the policy corridor.'],
    },
    {
      q: 'What is the Marginal Standing Facility?',
      a: [
        'Overnight borrowing from the RBI at a rate above repo, introduced in 2011.',
        'Banks can dip into their SLR holdings up to a limit. Its rate is the ceiling of the corridor.',
      ],
    },
    {
      q: 'How is the Monetary Policy Committee made up?',
      a: ['Six members: three from the RBI and three appointed by the Central Government.', 'The Governor chairs it and has a casting vote.'],
      tag: 'Asked often',
    },
    {
      q: 'Which money measure is called broad money?',
      a: ['M3 = M1 + time deposits with banks.', 'M1 is narrow money, the most liquid.'],
      tag: 'Trap',
    },
    {
      q: 'When were banks nationalised?',
      a: ['14 banks on 19 July 1969.', '6 banks on 15 April 1980.', 'Imperial Bank became SBI in 1955.'],
      tag: 'Asked often',
    },
    {
      q: 'Is monetary policy made by the Finance Ministry?',
      a: ['No. The RBI makes monetary policy.', 'The Finance Ministry makes fiscal policy (taxes, spending, borrowing).'],
      tag: 'Trap',
    },
    {
      q: 'When does a loan become an NPA?',
      a: ['When interest or principal is overdue for more than 90 days.'],
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'The Reserve Bank of India was established in:',
      options: ['1935', '1947', '1949', '1955'],
      answer: 0,
      explain: 'The RBI began on 1 April 1935. It was nationalised in 1949.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'The rate at which the RBI lends short-term money to commercial banks is called the:',
      options: ['Reverse repo rate', 'Repo rate', 'CRR', 'SLR'],
      answer: 1,
      explain: 'Repo rate. The reverse repo rate is the rate at which the RBI borrows from banks.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Who issues the ₹1 currency note in India?',
      options: ['Reserve Bank of India', 'Government of India', 'State Bank of India', 'Security Printing and Minting Corporation'],
      answer: 1,
      explain: 'The Government of India issues the ₹1 note and coins. The RBI issues all other notes.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Who was the first Indian Governor of the RBI?',
      options: ['Sir Osborne Smith', 'C.D. Deshmukh', 'Benegal Rama Rau', 'Manmohan Singh'],
      answer: 1,
      explain: 'C.D. Deshmukh. Sir Osborne Smith was the first Governor.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The portion of deposits that banks must keep as cash with the RBI is the:',
      options: ['Statutory Liquidity Ratio', 'Cash Reserve Ratio', 'Bank rate', 'Capital adequacy ratio'],
      answer: 1,
      explain: 'CRR is held with the RBI as cash. SLR is kept by the bank itself.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'To control inflation, the RBI is most likely to:',
      options: ['Cut the repo rate', 'Cut the CRR', 'Buy government securities in the open market', 'Raise the repo rate'],
      answer: 3,
      explain: 'A higher repo rate makes borrowing costlier and reduces money in the economy. The other three add money.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'How many members does the Monetary Policy Committee have?',
      options: ['4', '5', '6', '7'],
      answer: 2,
      explain: 'Six: three from the RBI including the Governor, and three appointed by the Central Government.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which of these is NOT a quantitative tool of monetary policy?',
      options: ['Repo rate', 'CRR', 'Moral suasion', 'Open market operations'],
      answer: 2,
      explain: 'Moral suasion is a qualitative (selective) tool. The others change the overall amount of credit.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The first nationalisation of 14 commercial banks took place in:',
      options: ['1955', '1969', '1980', '1991'],
      answer: 1,
      explain: '14 banks on 19 July 1969. Six more followed on 15 April 1980.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which measure of money supply is known as broad money?',
      options: ['M0', 'M1', 'M2', 'M3'],
      answer: 3,
      explain: 'M3 = M1 + time deposits with banks. M1 is narrow money.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'The State Bank of India was formed in 1955 from which bank?',
      options: ['Bank of Bengal', 'Imperial Bank of India', 'Allahabad Bank', 'Punjab National Bank'],
      answer: 1,
      explain: 'The Imperial Bank of India, itself a 1921 merger of the three presidency banks, became SBI.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Fiscal policy in India is framed by the:',
      options: ['Reserve Bank of India', 'Ministry of Finance', 'NITI Aayog', 'SEBI'],
      answer: 1,
      explain: "Fiscal policy (taxes, spending, borrowing) is the government's, through the Ministry of Finance. The RBI handles monetary policy.",
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Which facility lets banks park surplus money with the RBI without providing collateral?',
      options: ['Marginal Standing Facility', 'Reverse repo', 'Standing Deposit Facility', 'Liquidity Adjustment Facility repo'],
      answer: 2,
      explain: 'The SDF, introduced in 2022, needs no collateral. Reverse repo requires the RBI to give securities.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'The Statutory Liquidity Ratio is maintained under which law?',
      options: ['RBI Act, 1934', 'Banking Regulation Act, 1949', 'FEMA, 1999', 'Negotiable Instruments Act, 1881'],
      answer: 1,
      explain: 'SLR comes from Section 24 of the Banking Regulation Act. CRR comes from Section 42 of the RBI Act.',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'Banks earn interest on the money they keep with the RBI as CRR.',
      answer: false,
      explain: 'CRR balances earn no interest. That is why a CRR cut is valuable to banks.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'M1 is a more liquid measure of money than M3.',
      answer: true,
      explain: 'M1 holds currency and demand deposits. M3 adds time deposits, which are less liquid.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'The Marginal Standing Facility rate is lower than the repo rate.',
      answer: false,
      explain: 'MSF is a penal window above repo; it forms the ceiling of the corridor. SDF forms the floor.',
    },
    {
      type: 'truefalse',
      difficulty: 'hard',
      statement: "The RBI was set up as a shareholders' bank and was nationalised only in 1949.",
      answer: true,
      explain: 'It was privately owned by shareholders from 1935 until nationalisation on 1 January 1949.',
    },
  ],
};

export default topic;
