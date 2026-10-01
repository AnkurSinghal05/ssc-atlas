import type { Topic } from '@/content/types';

const CARS = 'The bar chart shows the number of cars produced by a company (in thousands) from 2019 to 2023.';

const EXPENSE = 'The pie chart shows the monthly expenditure of a family. The total is ₹60,000.';

const SALES = 'The bar chart shows the sales (in ₹ crore) of three companies, A, B and C, in 2022 and 2023.';

const STUDENTS = 'The pie chart shows the 1,800 students of a college by stream, with the central angle of each sector.';

const MARKS = 'The bar chart shows the marks of a student out of 100 in five subjects.';

const STAFF = 'The table shows the number of employees in four departments of a company from 2021 to 2023.';

const SHOP = 'The line graph shows the monthly sales (in ₹ lakh) of a shop from January to June.';

const CARS_FIG = {
  viewBox: '0 0 320 212',
  svg: `
<text x="42" y="189" text-anchor="end" class="d-small d-soft">0</text>
<line x1="44" y1="150" x2="48" y2="150"/>
<text x="42" y="154" text-anchor="end" class="d-small d-soft">50</text>
<line x1="44" y1="115" x2="48" y2="115"/>
<text x="42" y="119" text-anchor="end" class="d-small d-soft">100</text>
<line x1="44" y1="80" x2="48" y2="80"/>
<text x="42" y="84" text-anchor="end" class="d-small d-soft">150</text>
<line x1="44" y1="45" x2="48" y2="45"/>
<text x="42" y="49" text-anchor="end" class="d-small d-soft">200</text>
<line x1="48" y1="185" x2="305" y2="185"/>
<line x1="48" y1="185" x2="48" y2="37"/>
<text x="48" y="31" class="d-small d-soft">thousand cars</text>
<rect x="57.7" y="101" width="32" height="84" class="d-fill-blue"/>
<rect x="57.7" y="101" width="32" height="84"/>
<text x="73.7" y="95" text-anchor="middle" class="d-small">120</text>
<text x="73.7" y="203" text-anchor="middle" class="d-small">2019</text>
<rect x="109.1" y="80" width="32" height="105" class="d-fill-blue"/>
<rect x="109.1" y="80" width="32" height="105"/>
<text x="125.1" y="74" text-anchor="middle" class="d-small">150</text>
<text x="125.1" y="203" text-anchor="middle" class="d-small">2020</text>
<rect x="160.5" y="90.5" width="32" height="94.5" class="d-fill-blue"/>
<rect x="160.5" y="90.5" width="32" height="94.5"/>
<text x="176.5" y="84.5" text-anchor="middle" class="d-small">135</text>
<text x="176.5" y="203" text-anchor="middle" class="d-small">2021</text>
<rect x="211.9" y="59" width="32" height="126" class="d-fill-blue"/>
<rect x="211.9" y="59" width="32" height="126"/>
<text x="227.9" y="53" text-anchor="middle" class="d-small">180</text>
<text x="227.9" y="203" text-anchor="middle" class="d-small">2022</text>
<rect x="263.3" y="45" width="32" height="140" class="d-fill-blue"/>
<rect x="263.3" y="45" width="32" height="140"/>
<text x="279.3" y="39" text-anchor="middle" class="d-small">200</text>
<text x="279.3" y="203" text-anchor="middle" class="d-small">2023</text>`,
};

const EXPENSE_FIG = {
  viewBox: '0 0 320 212',
  svg: `
<path d="M160,108 L160,32 A76,76 0 0 1 232.3,131.5 Z" class="d-fill"/>
<path d="M160,108 L160,32 A76,76 0 0 1 232.3,131.5 Z"/>
<text x="198.1" y="84.8" text-anchor="middle" class="d-small">30%</text>
<text x="230.1" y="61.1" class="d-small">Food</text>
<path d="M160,108 L232.3,131.5 A76,76 0 0 1 136.5,180.3 Z" class="d-fill-pink"/>
<path d="M160,108 L232.3,131.5 A76,76 0 0 1 136.5,180.3 Z"/>
<text x="181.4" y="154.5" text-anchor="middle" class="d-small">25%</text>
<text x="199.3" y="189.2" class="d-small">Rent</text>
<path d="M160,108 L136.5,180.3 A76,76 0 0 1 87.7,131.5 Z" class="d-fill-blue"/>
<path d="M160,108 L136.5,180.3 A76,76 0 0 1 87.7,131.5 Z"/>
<text x="126.7" y="145.8" text-anchor="middle" class="d-small">15%</text>
<text x="98.7" y="173.3" text-anchor="end" class="d-small">Education</text>
<path d="M160,108 L87.7,131.5 A76,76 0 0 1 87.7,84.5 Z"/>
<text x="112.9" y="112.5" text-anchor="middle" class="d-small">10%</text>
<text x="73.4" y="112" text-anchor="end" class="d-small">Transport</text>
<path d="M160,108 L87.7,84.5 A76,76 0 0 1 160,32 Z" class="d-fill-green"/>
<path d="M160,108 L87.7,84.5 A76,76 0 0 1 160,32 Z"/>
<text x="132.3" y="74.4" text-anchor="middle" class="d-small">20%</text>
<text x="109.1" y="41.9" text-anchor="end" class="d-small">Savings</text>`,
  caption: 'Total ₹60,000',
};

const SALES_FIG = {
  viewBox: '0 0 320 212',
  svg: `
<text x="42" y="189" text-anchor="end" class="d-small d-soft">0</text>
<line x1="44" y1="150" x2="48" y2="150"/>
<text x="42" y="154" text-anchor="end" class="d-small d-soft">100</text>
<line x1="44" y1="115" x2="48" y2="115"/>
<text x="42" y="119" text-anchor="end" class="d-small d-soft">200</text>
<line x1="44" y1="80" x2="48" y2="80"/>
<text x="42" y="84" text-anchor="end" class="d-small d-soft">300</text>
<line x1="44" y1="45" x2="48" y2="45"/>
<text x="42" y="49" text-anchor="end" class="d-small d-soft">400</text>
<line x1="48" y1="185" x2="305" y2="185"/>
<line x1="48" y1="185" x2="48" y2="37"/>
<text x="48" y="31" class="d-small d-soft">₹ crore</text>
<rect x="57.8" y="101" width="32" height="84" class="d-fill-blue"/>
<rect x="57.8" y="101" width="32" height="84"/>
<text x="73.8" y="95" text-anchor="middle" class="d-small">240</text>
<rect x="91.8" y="80" width="32" height="105" class="d-fill"/>
<rect x="91.8" y="80" width="32" height="105"/>
<text x="107.8" y="74" text-anchor="middle" class="d-small">300</text>
<text x="90.8" y="203" text-anchor="middle">A</text>
<rect x="143.5" y="73" width="32" height="112" class="d-fill-blue"/>
<rect x="143.5" y="73" width="32" height="112"/>
<text x="159.5" y="67" text-anchor="middle" class="d-small">320</text>
<rect x="177.5" y="59" width="32" height="126" class="d-fill"/>
<rect x="177.5" y="59" width="32" height="126"/>
<text x="193.5" y="53" text-anchor="middle" class="d-small">360</text>
<text x="176.5" y="203" text-anchor="middle">B</text>
<rect x="229.2" y="87" width="32" height="98" class="d-fill-blue"/>
<rect x="229.2" y="87" width="32" height="98"/>
<text x="245.2" y="81" text-anchor="middle" class="d-small">280</text>
<rect x="263.2" y="67.4" width="32" height="117.6" class="d-fill"/>
<rect x="263.2" y="67.4" width="32" height="117.6"/>
<text x="279.2" y="61.4" text-anchor="middle" class="d-small">336</text>
<text x="262.2" y="203" text-anchor="middle">C</text>
<rect x="200" y="14" width="12" height="12" class="d-fill-blue"/>
<rect x="200" y="14" width="12" height="12" class="d-thin"/>
<text x="216" y="25" class="d-small">2022</text>
<rect x="254" y="14" width="12" height="12" class="d-fill"/>
<rect x="254" y="14" width="12" height="12" class="d-thin"/>
<text x="270" y="25" class="d-small">2023</text>`,
};

const STUDENTS_FIG = {
  viewBox: '0 0 320 212',
  svg: `
<path d="M160,108 L160,32 A76,76 0 0 1 232.3,84.5 Z" class="d-fill-pink"/>
<path d="M160,108 L160,32 A76,76 0 0 1 232.3,84.5 Z"/>
<text x="187.7" y="74.4" text-anchor="middle" class="d-small">72°</text>
<text x="210.9" y="41.9" class="d-small">Arts</text>
<path d="M160,108 L232.3,84.5 A76,76 0 0 1 160,184 Z" class="d-fill"/>
<path d="M160,108 L232.3,84.5 A76,76 0 0 1 160,184 Z"/>
<text x="198.1" y="140.2" text-anchor="middle" class="d-small">108°</text>
<text x="230.1" y="162.9" class="d-small">Science</text>
<path d="M160,108 L160,184 A76,76 0 0 1 84,108 Z" class="d-fill-blue"/>
<path d="M160,108 L160,184 A76,76 0 0 1 84,108 Z"/>
<text x="126.7" y="145.8" text-anchor="middle" class="d-small">90°</text>
<text x="98.7" y="173.3" text-anchor="end" class="d-small">Commerce</text>
<path d="M160,108 L84,108 A76,76 0 0 1 115.3,46.5 Z" class="d-fill-green"/>
<path d="M160,108 L84,108 A76,76 0 0 1 115.3,46.5 Z"/>
<text x="118" y="91.1" text-anchor="middle" class="d-small">54°</text>
<text x="82.8" y="72.7" text-anchor="end" class="d-small">Engg.</text>
<path d="M160,108 L115.3,46.5 A76,76 0 0 1 160,32 Z"/>
<text x="145.4" y="67.7" text-anchor="middle" class="d-small">36°</text>
<text x="133.2" y="29.6" text-anchor="end" class="d-small">Others</text>`,
  caption: '1,800 students in all',
};

const MARKS_FIG = {
  viewBox: '0 0 320 212',
  svg: `
<text x="42" y="189" text-anchor="end" class="d-small d-soft">0</text>
<line x1="44" y1="150" x2="48" y2="150"/>
<text x="42" y="154" text-anchor="end" class="d-small d-soft">25</text>
<line x1="44" y1="115" x2="48" y2="115"/>
<text x="42" y="119" text-anchor="end" class="d-small d-soft">50</text>
<line x1="44" y1="80" x2="48" y2="80"/>
<text x="42" y="84" text-anchor="end" class="d-small d-soft">75</text>
<line x1="44" y1="45" x2="48" y2="45"/>
<text x="42" y="49" text-anchor="end" class="d-small d-soft">100</text>
<line x1="48" y1="185" x2="305" y2="185"/>
<line x1="48" y1="185" x2="48" y2="37"/>
<text x="48" y="31" class="d-small d-soft">marks</text>
<rect x="57.7" y="67.4" width="32" height="117.6" class="d-fill-blue"/>
<rect x="57.7" y="67.4" width="32" height="117.6"/>
<text x="73.7" y="61.4" text-anchor="middle" class="d-small">84</text>
<text x="73.7" y="203" text-anchor="middle" class="d-small">Maths</text>
<rect x="109.1" y="78.6" width="32" height="106.4" class="d-fill-blue"/>
<rect x="109.1" y="78.6" width="32" height="106.4"/>
<text x="125.1" y="72.6" text-anchor="middle" class="d-small">76</text>
<text x="125.1" y="203" text-anchor="middle" class="d-small">Science</text>
<rect x="160.5" y="89.8" width="32" height="95.2" class="d-fill-blue"/>
<rect x="160.5" y="89.8" width="32" height="95.2"/>
<text x="176.5" y="83.8" text-anchor="middle" class="d-small">68</text>
<text x="176.5" y="203" text-anchor="middle" class="d-small">English</text>
<rect x="211.9" y="84.2" width="32" height="100.8" class="d-fill-blue"/>
<rect x="211.9" y="84.2" width="32" height="100.8"/>
<text x="227.9" y="78.2" text-anchor="middle" class="d-small">72</text>
<text x="227.9" y="203" text-anchor="middle" class="d-small">Hindi</text>
<rect x="263.3" y="73" width="32" height="112" class="d-fill-blue"/>
<rect x="263.3" y="73" width="32" height="112"/>
<text x="279.3" y="67" text-anchor="middle" class="d-small">80</text>
<text x="279.3" y="203" text-anchor="middle" class="d-small">SSt</text>`,
  caption: 'SSt = Social Science',
};

const STAFF_FIG = {
  viewBox: '0 0 320 152',
  svg: `
<rect x="16" y="16" width="288" height="24" class="d-fill-blue"/>
<rect x="16" y="16" width="288" height="120"/>
<line x1="16" y1="40" x2="304" y2="40" class="d-thin"/>
<line x1="16" y1="64" x2="304" y2="64" class="d-thin"/>
<line x1="16" y1="88" x2="304" y2="88" class="d-thin"/>
<line x1="16" y1="112" x2="304" y2="112" class="d-thin"/>
<line x1="112" y1="16" x2="112" y2="136" class="d-thin"/>
<line x1="176" y1="16" x2="176" y2="136" class="d-thin"/>
<line x1="240" y1="16" x2="240" y2="136" class="d-thin"/>
<text x="24" y="33" class="d-small">Department</text>
<text x="144" y="33" text-anchor="middle" class="d-small">2021</text>
<text x="208" y="33" text-anchor="middle" class="d-small">2022</text>
<text x="272" y="33" text-anchor="middle" class="d-small">2023</text>
<text x="24" y="57" class="d-small">HR</text>
<text x="144" y="57" text-anchor="middle" class="d-small">40</text>
<text x="208" y="57" text-anchor="middle" class="d-small">50</text>
<text x="272" y="57" text-anchor="middle" class="d-small">45</text>
<text x="24" y="81" class="d-small">Sales</text>
<text x="144" y="81" text-anchor="middle" class="d-small">120</text>
<text x="208" y="81" text-anchor="middle" class="d-small">150</text>
<text x="272" y="81" text-anchor="middle" class="d-small">180</text>
<text x="24" y="105" class="d-small">IT</text>
<text x="144" y="105" text-anchor="middle" class="d-small">100</text>
<text x="208" y="105" text-anchor="middle" class="d-small">120</text>
<text x="272" y="105" text-anchor="middle" class="d-small">108</text>
<text x="24" y="129" class="d-small">Accounts</text>
<text x="144" y="129" text-anchor="middle" class="d-small">60</text>
<text x="208" y="129" text-anchor="middle" class="d-small">80</text>
<text x="272" y="129" text-anchor="middle" class="d-small">96</text>`,
};

const SHOP_FIG = {
  viewBox: '0 0 320 212',
  svg: `
<text x="42" y="189" text-anchor="end" class="d-small d-soft">0</text>
<line x1="44" y1="157" x2="48" y2="157"/>
<text x="42" y="161" text-anchor="end" class="d-small d-soft">20</text>
<line x1="44" y1="129" x2="48" y2="129"/>
<text x="42" y="133" text-anchor="end" class="d-small d-soft">40</text>
<line x1="44" y1="101" x2="48" y2="101"/>
<text x="42" y="105" text-anchor="end" class="d-small d-soft">60</text>
<line x1="44" y1="73" x2="48" y2="73"/>
<text x="42" y="77" text-anchor="end" class="d-small d-soft">80</text>
<line x1="44" y1="45" x2="48" y2="45"/>
<text x="42" y="49" text-anchor="end" class="d-small d-soft">100</text>
<line x1="48" y1="185" x2="305" y2="185"/>
<line x1="48" y1="185" x2="48" y2="37"/>
<text x="48" y="31" class="d-small d-soft">₹ lakh</text>
<line x1="72" y1="129" x2="117" y2="115" class="d-blue d-thick"/>
<line x1="117" y1="115" x2="162" y2="122" class="d-blue d-thick"/>
<line x1="162" y1="122" x2="207" y2="101" class="d-blue d-thick"/>
<line x1="207" y1="101" x2="252" y2="80" class="d-blue d-thick"/>
<line x1="252" y1="80" x2="297" y2="59" class="d-blue d-thick"/>
<circle cx="72" cy="129" r="3.5" class="d-dot"/>
<text x="72" y="119" text-anchor="middle" class="d-small">40</text>
<text x="72" y="203" text-anchor="middle" class="d-small">Jan</text>
<circle cx="117" cy="115" r="3.5" class="d-dot"/>
<text x="117" y="105" text-anchor="middle" class="d-small">50</text>
<text x="117" y="203" text-anchor="middle" class="d-small">Feb</text>
<circle cx="162" cy="122" r="3.5" class="d-dot"/>
<text x="162" y="112" text-anchor="middle" class="d-small">45</text>
<text x="162" y="203" text-anchor="middle" class="d-small">Mar</text>
<circle cx="207" cy="101" r="3.5" class="d-dot"/>
<text x="207" y="91" text-anchor="middle" class="d-small">60</text>
<text x="207" y="203" text-anchor="middle" class="d-small">Apr</text>
<circle cx="252" cy="80" r="3.5" class="d-dot"/>
<text x="252" y="70" text-anchor="middle" class="d-small">75</text>
<text x="252" y="203" text-anchor="middle" class="d-small">May</text>
<circle cx="297" cy="59" r="3.5" class="d-dot"/>
<text x="297" y="49" text-anchor="middle" class="d-small">90</text>
<text x="297" y="203" text-anchor="middle" class="d-small">Jun</text>
`,
};

const topic: Topic = {
  id: 'data-interpretation',
  title: 'Data interpretation',
  level: 'intermediate',
  masteryMinutes: 120,
  reviseMinutes: 40,
  priority: 'high',
  weightage: { tier1: 3, tier2: 3 },
  tags: ['DI', 'table', 'bar graph', 'pie chart', 'line graph', 'percentage', 'ratio', 'average', 'growth', 'approximation'],
  summary:
    'Data interpretation (DI) means reading numbers off a table, bar graph, line graph or pie chart and doing quick arithmetic with them. One chart usually comes with three to five linked questions. Almost every question is a percentage, a ratio, an average or a growth rate. Read the units first, then approximate hard.',
  patterns: [
    { name: 'Table: percentage change and percentage share', frequency: 'most', example: 'By what percent did production rise from 2019 to 2022?' },
    { name: 'Bar graph: ratio and difference', frequency: 'most', example: 'Ratio of sales of A in 2022 to sales of C in 2023?' },
    { name: 'Pie chart: degrees to values', frequency: 'often', example: 'Science has a 108° sector out of 1,800 students. How many students?' },
    { name: 'Average of a row or column', frequency: 'often', example: 'Average production over the five years?' },
    { name: 'Line graph: highest growth year', frequency: 'often', example: 'In which year was the rise over the previous year the highest?' },
    { name: 'One value as a percentage of another', frequency: 'often', example: 'Savings are what percent of spending on food?' },
    { name: 'Mixed charts or missing values', frequency: 'rare', example: 'A table gives totals and a pie gives shares. Find one part.' },
  ],
  keyPoints: [
    {
      title: 'Read the chart before the question',
      text: 'Check the units (thousands, lakhs, ₹ crore), whether values are absolute or percent, and what the total is. Most wrong answers come from a missed unit.',
      example: '"Production (in thousands)" with a value 120 means 1,20,000 cars.',
    },
    {
      title: 'Percentage change',
      text: 'Always divide by the earlier value. "Growth in 2022" means over 2021 unless the question says otherwise.',
      formula: '% change = (new − old)/old × 100',
      example: '120 → 180: 60/120 × 100 = **50%** rise.',
    },
    {
      title: 'Percentage share and "what percent of"',
      text: 'Share of one part = part over total × 100. "X is what percent of Y" puts Y in the denominator.',
      formula: 'X as % of Y = X/Y × 100',
      example: 'Savings 20% and food 30%: 20/30 × 100 = **66⅔%**.',
    },
    {
      title: 'Pie chart in degrees',
      text: 'The whole pie is 360° or 100%. So 1% = 3.6°. A sector of d degrees stands for d/360 of the total.',
      formula: 'value = d/360 × total; angle = percent × 3.6',
      example: '108° of 1,800 students: 108/360 × 1,800 = **540**.',
    },
    {
      title: 'Ratios and averages',
      text: 'Cancel common factors before dividing. For an average of many values, take a round base and average the deviations.',
      formula: 'average = base + (sum of deviations)/n',
      example: '120, 150, 135, 180, 200 with base 150: deviations −30, 0, −15, 30, 50 sum to 35, so average = 150 + 7 = **157**.',
    },
    {
      title: 'Approximate with fractions',
      text: 'Round to two significant figures and use the fraction table (1/8 = 12.5%, 1/6 = 16.67%, 1/7 = 14.28%). Options are usually far enough apart.',
      example: '4,987 out of 20,113 ≈ 5,000/20,000 = **25%**.',
    },
    {
      title: 'Compare growth rates, not growth amounts',
      text: 'The biggest jump in value is not always the biggest percentage jump. A rise of 45 on 135 (33%) beats a rise of 20 on 180 (11%).',
      example: 'Highest growth year: compare rise ÷ previous value for each year.',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'Line graph: judge growth by its base',
      figure: {
        viewBox: '0 0 320 218',
        svg: `
<text x="42" y="194" text-anchor="end" class="d-small d-soft">0</text>
<line x1="44" y1="155" x2="48" y2="155"/>
<text x="42" y="159" text-anchor="end" class="d-small d-soft">50</text>
<line x1="44" y1="120" x2="48" y2="120"/>
<text x="42" y="124" text-anchor="end" class="d-small d-soft">100</text>
<line x1="44" y1="85" x2="48" y2="85"/>
<text x="42" y="89" text-anchor="end" class="d-small d-soft">150</text>
<line x1="44" y1="50" x2="48" y2="50"/>
<text x="42" y="54" text-anchor="end" class="d-small d-soft">200</text>
<line x1="48" y1="190" x2="305" y2="190"/>
<line x1="48" y1="190" x2="48" y2="42"/>
<text x="48" y="36" class="d-small d-soft">thousand cars</text>
<line x1="72" y1="106" x2="127" y2="85" class="d-blue" data-step="3"/>
<text x="99.5" y="119.5" text-anchor="middle" class="d-small d-blue" data-step="3">+25%</text>
<line x1="127" y1="85" x2="182" y2="95.5" class="d-soft" data-step="2"/>
<text x="154.5" y="114.2" text-anchor="middle" class="d-small d-soft" data-step="2">fall</text>
<line x1="182" y1="95.5" x2="237" y2="64" class="d-red d-thick" data-step="3 4"/>
<text x="209.5" y="103.8" text-anchor="middle" class="d-small d-red" data-step="3 4">+33%</text>
<line x1="237" y1="64" x2="292" y2="50" class="d-blue" data-step="3"/>
<text x="264.5" y="81" text-anchor="middle" class="d-small d-blue" data-step="3">+11%</text>
<circle cx="72" cy="106" r="4" class="d-dot" data-step="1"/>
<text x="72" y="96" text-anchor="middle" class="d-small" data-step="1">120</text>
<text x="72" y="208" text-anchor="middle" class="d-small">2019</text>
<circle cx="127" cy="85" r="4" class="d-dot" data-step="1"/>
<text x="127" y="75" text-anchor="middle" class="d-small" data-step="1">150</text>
<text x="127" y="208" text-anchor="middle" class="d-small">2020</text>
<circle cx="182" cy="95.5" r="4" class="d-dot" data-step="1"/>
<text x="182" y="85.5" text-anchor="middle" class="d-small" data-step="1">135</text>
<text x="182" y="208" text-anchor="middle" class="d-small">2021</text>
<circle cx="237" cy="64" r="4" class="d-dot" data-step="1"/>
<text x="231" y="58" text-anchor="end" class="d-small" data-step="1">180</text>
<text x="237" y="208" text-anchor="middle" class="d-small">2022</text>
<circle cx="292" cy="50" r="4" class="d-dot" data-step="1"/>
<text x="292" y="40" text-anchor="middle" class="d-small" data-step="1">200</text>
<text x="292" y="208" text-anchor="middle" class="d-small">2023</text>`,
      },
      explain: [
        'Read each point first (thousand cars): 120, 150, 135, 180, 200.',
        '2021 falls from 150 to 135, so it cannot be the highest growth year.',
        'Growth rate = rise ÷ previous value: 2020 30/120 = 25%, 2022 45/135 = 33.3%, 2023 20/180 = 11.1%.',
        'The biggest rise against its base is **2022**. A tall jump from a high base (2023) can still be a small percentage.',
      ],
    },
    {
      type: 'diagram',
      title: 'Pie chart: turn degrees into people',
      figure: {
        viewBox: '0 0 320 222',
        svg: `
<circle cx="150" cy="112" r="74" class="d-thick" data-step="1"/>
<path d="M150,112 L150,38 A74,74 0 0 1 220.4,89.1 Z" class="d-fill-pink" data-step="4"/>
<path d="M150,112 L150,38 A74,74 0 0 1 220.4,89.1 Z" data-step="4"/>
<text x="177" y="79.4" text-anchor="middle" class="d-small" data-step="4">72°</text>
<text x="199.6" y="47.8" class="d-small" data-step="4">Arts</text>
<path d="M150,112 L220.4,89.1 A74,74 0 0 1 150,186 Z" class="d-fill" data-step="3"/>
<path d="M150,112 L220.4,89.1 A74,74 0 0 1 150,186 Z" data-step="3"/>
<text x="187.1" y="143.5" text-anchor="middle" class="d-small" data-step="3">108°</text>
<text x="218.2" y="165.6" class="d-small" data-step="3">Science</text>
<path d="M150,112 L150,186 A74,74 0 0 1 76,112 Z" class="d-fill-blue" data-step="4"/>
<path d="M150,112 L150,186 A74,74 0 0 1 76,112 Z" data-step="4"/>
<text x="117.6" y="148.9" text-anchor="middle" class="d-small" data-step="4">90°</text>
<text x="90.3" y="175.7" text-anchor="end" class="d-small" data-step="4">Commerce</text>
<path d="M150,112 L76,112 A74,74 0 0 1 106.5,52.1 Z" data-step="1"/>
<text x="109.1" y="95.7" text-anchor="middle" class="d-small" data-step="1">54°</text>
<text x="74.8" y="77.7" text-anchor="end" class="d-small" data-step="1">Engg.</text>
<path d="M150,112 L106.5,52.1 A74,74 0 0 1 150,38 Z" data-step="1"/>
<text x="135.8" y="72.9" text-anchor="middle" class="d-small" data-step="1">36°</text>
<text x="123.9" y="35.8" text-anchor="end" class="d-small" data-step="1">Others</text>
<text x="160" y="214" text-anchor="middle" class="d-small d-red" data-step="2">360° = 1,800 students, so 1° = 5 students</text>`,
      },
      explain: [
        'The whole circle is 360°, and it stands for all 1,800 students.',
        'So each degree is 1,800/360 = 5 students.',
        'Science has 108°: 108 × 5 = **540 students**.',
        'Arts + Commerce = 72° + 90° = 162°, which is 54° more than Science: 54/108 = 50% more. Compare degrees; no need to convert.',
      ],
    },
  ],
  comparisons: [
    {
      title: 'Pie chart in percent vs pie chart in degrees',
      items: ['Pie in percent', 'Pie in degrees'],
      rows: [
        { aspect: 'Whole pie', values: ['100%', '360°'] },
        { aspect: 'Value of a sector', values: ['p/100 × total', 'd/360 × total'], key: true },
        { aspect: 'Convert to the other', values: ['angle = p × 3.6', 'percent = d/3.6'] },
        { aspect: 'Example (total 1,800)', values: ['30% → 540', '108° → 540'] },
      ],
      reveal: 'Both are the same pie. Divide by 100 for percent, by 360 for degrees.',
      whenToUse: ['Shares are printed as percentages.', 'Shares are printed as central angles.'],
    },
    {
      title: 'Percent change vs share vs ratio',
      items: ['Percent change', 'Percent share', 'Ratio'],
      rows: [
        { aspect: 'Question words', values: ['"increase", "growth", "fall"', '"what percent of the total"', '"ratio of", "A : B"'] },
        { aspect: 'Denominator', values: ['The earlier value', 'The total', 'The second quantity'], key: true },
        { aspect: 'Example', values: ['150 → 200 = 33⅓%', '200 of 785 ≈ 25.5%', '150 : 200 = 3 : 4'] },
      ],
      reveal: 'All three are one division. What changes is the number you divide by.',
      whenToUse: ['Two values of the same thing at different times.', 'One part of a known whole.', 'Two separate quantities side by side.'],
    },
  ],
  shortcuts: [
    {
      pattern: 'Highest growth over the previous year',
      example:
        'Cars (thousands): 2019: 120, 2020: 150, 2021: 135, 2022: 180, 2023: 200. In which year was the percentage rise over the previous year the highest?',
      options: ['2020', '2021', '2022', '2023'],
      answer: '2022',
      ladder: [
        {
          name: 'Standard',
          steps: ['2020: 30/120 = 25%.', '2021: a fall.', '2022: 45/135 = 33.3%.', '2023: 20/180 = 11.1%. Highest is 2022.'],
          seconds: 60,
        },
        { name: 'Fractions', steps: ['2020: 30/120 = 1/4. 2022: 45/135 = 1/3. 2023: 20/180 = 1/9.', '1/3 is the biggest: 2022.'], seconds: 25 },
        {
          name: 'Option elimination',
          steps: ['2021 fell, so drop it.', '2023 rose only 20 on a big base, so drop it.', '1/3 beats 1/4: 2022.'],
          seconds: 15,
        },
      ],
    },
    {
      pattern: 'Pie chart degrees to a value',
      example: 'Out of 1,800 students, Science has a central angle of 108°. How many students study Science?',
      options: ['480', '540', '600', '360'],
      answer: '540',
      ladder: [
        { name: 'Standard', steps: ['Share = 108/360 = 0.3.', '0.3 × 1,800 = 540.'], seconds: 25 },
        { name: 'Shortcut', steps: ['1,800 students on 360° means 5 students per degree.', '108 × 5 = 540.'], seconds: 8 },
      ],
    },
    {
      pattern: 'Approximate a percentage',
      example: 'A state had 20,113 candidates and 4,987 passed. The pass percentage is closest to:',
      options: ['20%', '25%', '30%', '33%'],
      answer: '25%',
      ladder: [
        { name: 'Standard', steps: ['4,987 ÷ 20,113 by long division = 0.2479.', 'About 24.8%, closest to 25%.'], seconds: 60 },
        { name: 'Shortcut', steps: ['Round: 5,000/20,000 = 1/4 = 25%.'], seconds: 8 },
      ],
    },
  ],
  qa: [
    {
      q: 'What is the first thing to check on any chart?',
      a: ['The units and what the total is.', 'Values "in thousands" or "₹ crore" change the answer by a factor.'],
      tag: 'Trap',
    },
    {
      q: 'How many degrees does 1% of a pie chart take?',
      a: ['3.6°, since 100% = 360°.', 'So 25% = 90° and 20% = 72°.'],
      tag: 'Asked often',
    },
    {
      q: 'How do you find a value from a sector of d degrees?',
      a: ['d/360 × total.', 'Faster: find the value of 1° (total ÷ 360) first.'],
      tag: 'Shortcut',
    },
    {
      q: '"Percentage increase in 2023" without a base year: over which year?',
      a: ['Over the previous year, 2022.', 'Divide by the 2022 value.'],
      tag: 'Trap',
    },
    {
      q: 'Is the largest rise in value always the largest percentage rise?',
      a: ['No. The base matters.', '+45 on 135 is 33%, but +50 on 400 is only 12.5%.'],
      tag: 'Trap',
    },
    {
      q: 'A rises 80 → 100 and then falls 100 → 80. Are the two percentages equal?',
      a: ['No. The rise is 20/80 = 25%.', 'The fall is 20/100 = 20%.'],
    },
    {
      q: 'Quick way to average five values like 120, 150, 135, 180, 200?',
      a: ['Pick a base such as 150 and add the deviations: −30, 0, −15, 30, 50 = 35.', 'Average = 150 + 35/5 = 157.'],
      tag: 'Shortcut',
    },
    {
      q: 'How do you compare two fractions like 45/135 and 30/120 fast?',
      a: ['Cancel: 1/3 and 1/4.', 'Or cross-multiply: 45 × 120 = 5,400 > 30 × 135 = 4,050.'],
      tag: 'Shortcut',
    },
    {
      q: 'When is approximation safe in DI?',
      a: ['When the options differ by more than 2 to 3 percent.', 'If two options are close, calculate more exactly.'],
    },
    {
      q: 'In a ratio question, should you simplify the numbers first?',
      a: ['Yes. Cancel common factors before anything else.', '240 : 336 → divide by 48 → 5 : 7.'],
      tag: 'Asked often',
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: `${CARS}\n\nBy what percent did production rise from 2019 to 2022?`,
      figure: CARS_FIG,
      options: ['40%', '45%', '50%', '60%'],
      answer: 2,
      explain: 'Rise = 180 − 120 = 60. 60/120 × 100 = 50%.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: `${CARS}\n\nWhat is the ratio of production in 2020 to production in 2023?`,
      figure: CARS_FIG,
      options: ['3 : 4', '4 : 5', '2 : 3', '5 : 6'],
      answer: 0,
      explain: '150 : 200 = 3 : 4.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: `${CARS}\n\nWhat is the average yearly production (in thousands) over the five years?`,
      figure: CARS_FIG,
      options: ['150', '155', '160', '157'],
      answer: 3,
      explain: 'Total = 120 + 150 + 135 + 180 + 200 = 785. 785 ÷ 5 = 157.',
      shortcut: 'Base 150, deviations −30, 0, −15, 30, 50 sum to 35; 150 + 7 = 157.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: `${CARS}\n\nIn which year was the percentage increase over the previous year the highest?`,
      figure: CARS_FIG,
      options: ['2020', '2022', '2023', '2021'],
      answer: 1,
      explain: 'Rise ÷ previous year. 2020: 30/120 = 25%. 2021: a fall (150 → 135), so no increase. 2022: 45/135 = 33.3%. 2023: 20/180 = 11.1%. Highest is 2022.',
      shortcut: 'Compare 1/4, 1/3 and 1/9. 1/3 wins.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: `${EXPENSE}\n\nWhat is the central angle of the sector for Rent?`,
      figure: EXPENSE_FIG,
      options: ['72°', '90°', '108°', '100°'],
      answer: 1,
      explain: '25% of 360° = 90°.',
      shortcut: '1% = 3.6°, so 25 × 3.6 = 90°.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: `${EXPENSE}\n\nBy how much does spending on Food exceed spending on Transport?`,
      figure: EXPENSE_FIG,
      options: ['₹10,000', '₹15,000', '₹12,000', '₹18,000'],
      answer: 2,
      explain: 'Gap = 30% − 10% = 20% of ₹60,000 = ₹12,000.',
      shortcut: 'Subtract the percentages first, then take one percentage of the total.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: `${EXPENSE}\n\nSavings are what percent of spending on Food?`,
      figure: EXPENSE_FIG,
      options: ['60%', '66⅔%', '150%', '75%'],
      answer: 1,
      explain: 'Savings ÷ Food = 20/30 × 100 = 66⅔%.',
      shortcut: 'Same total, so use the percentages directly: 20/30 = 2/3.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: `${EXPENSE}\n\nIf the total grows to ₹72,000 with the same shares, how much more is spent on Education?`,
      figure: EXPENSE_FIG,
      options: ['₹1,200', '₹1,500', '₹2,000', '₹1,800'],
      answer: 3,
      explain: 'Education is 15%. The total rose by ₹12,000, so Education rose by 15% of ₹12,000 = ₹1,800.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: `${SALES}\n\nWhich company had the highest percentage growth in sales from 2022 to 2023?`,
      figure: SALES_FIG,
      options: ['B', 'C', 'A', 'All equal'],
      answer: 2,
      explain: 'A: 60/240 = 25%. B: 40/320 = 12.5%. C: 56/280 = 20%. A is highest.',
      shortcut: 'A: 1/4, B: 1/8, C: 1/5. 1/4 is the largest.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: `${SALES}\n\nWhat is the ratio of sales of A in 2022 to sales of C in 2023?`,
      figure: SALES_FIG,
      options: ['5 : 7', '4 : 5', '5 : 6', '6 : 7'],
      answer: 0,
      explain: '240 : 336. Divide both by 48: 5 : 7.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: `${SALES}\n\nTotal sales of the three companies in 2023 are about what percent more than in 2022?`,
      figure: SALES_FIG,
      options: ['15.2%', '16.4%', '18.6%', '20.5%'],
      answer: 2,
      explain: '2022 total = 240 + 320 + 280 = 840. 2023 total = 300 + 360 + 336 = 996. Rise = 996 − 840 = 156, and 156/840 × 100 ≈ 18.57%.',
      shortcut: '156/840 is a bit less than 160/840 ≈ 19%. Only 18.6% fits.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: `${STUDENTS}\n\nHow many students study Science?`,
      figure: STUDENTS_FIG,
      options: ['480', '600', '360', '540'],
      answer: 3,
      explain: '108/360 × 1,800 = 540.',
      shortcut: '1,800 ÷ 360 = 5 students per degree. 108 × 5 = 540.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: `${STUDENTS}\n\nArts and Commerce students together are what percent more than Science students?`,
      figure: STUDENTS_FIG,
      options: ['40%', '45%', '50%', '60%'],
      answer: 2,
      explain: 'Arts + Commerce = 72° + 90° = 162°. Science = 108°. (162 − 108)/108 × 100 = 50%.',
      shortcut: 'Work in degrees; no need to convert to students. 54/108 = 1/2.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: `${MARKS}\n\nThe student takes a sixth subject. What must he score in it to raise his average to 78?`,
      figure: MARKS_FIG,
      options: ['84', '86', '88', '90'],
      answer: 2,
      explain: 'Old total = 84 + 76 + 68 + 72 + 80 = 380. Needed total = 6 × 78 = 468. Sixth score = 468 − 380 = 88.',
      shortcut: 'Old average 76. The new subject must cover its own 78 plus 2 for each of the 5 old subjects: 78 + 10 = 88.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: `${STAFF}\n\nWhat percent of the company's employees in 2022 worked in IT?`,
      figure: STAFF_FIG,
      options: ['25%', '28%', '30%', '37.5%'],
      answer: 2,
      explain: 'Total in 2022 = 50 + 150 + 120 + 80 = 400. IT share = 120/400 × 100 = 30%.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: `${STAFF}\n\nWhich department had the highest percentage growth in employees from 2021 to 2023?`,
      figure: STAFF_FIG,
      options: ['Sales', 'Accounts', 'HR', 'IT'],
      answer: 1,
      explain:
        'Growth ÷ 2021 value. HR: 5/40 = 12.5%. Sales: 60/120 = 50%. IT: 8/100 = 8%. Accounts: 36/60 = 60%. Accounts is highest, even though Sales added more people.',
      shortcut: 'Sales 1/2, Accounts 3/5. 3/5 is bigger.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: `${STAFF}\n\nThe average number of employees per department in 2021 is what percent less than the average in 2022?`,
      figure: STAFF_FIG,
      options: ['25%', '20%', '18%', '22.5%'],
      answer: 1,
      explain:
        'Totals: 2021 = 40 + 120 + 100 + 60 = 320, 2022 = 400. Averages over 4 departments: 80 and 100. "Less than 2022" puts 2022 in the denominator: (100 − 80)/100 × 100 = 20%.',
      shortcut: 'Same number of departments, so compare the totals: 80/400 = 20%. 25% is the trap (it divides by 2021).',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: `${SHOP}\n\nWhat are the average monthly sales over the six months?`,
      figure: SHOP_FIG,
      options: ['₹55 lakh', '₹60 lakh', '₹62.5 lakh', '₹65 lakh'],
      answer: 1,
      explain: 'Total = 40 + 50 + 45 + 60 + 75 + 90 = 360. 360 ÷ 6 = ₹60 lakh.',
      shortcut: 'Base 60, deviations −20, −10, −15, 0, 15, 30 add to 0, so the average is 60.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: `${SHOP}\n\nIn which month was the percentage increase in sales over the previous month the highest?`,
      figure: SHOP_FIG,
      options: ['February', 'May', 'June', 'April'],
      answer: 3,
      explain:
        'Rise ÷ previous month. Feb: 10/40 = 25%. Mar: a fall. Apr: 15/45 = 33.3%. May: 15/60 = 25%. Jun: 15/75 = 20%. April is highest.',
      shortcut: 'April, May and June all rise by 15; the smallest base (45) gives the biggest percentage.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: `${SHOP}\n\nTotal sales in the first three months are what percent of total sales in the last three months?`,
      figure: SHOP_FIG,
      options: ['60%', '40%', '62.5%', '66⅔%'],
      answer: 0,
      explain: 'First three months: 40 + 50 + 45 = 135. Last three: 60 + 75 + 90 = 225. 135/225 × 100 = 60%.',
      shortcut: '135/225: divide both by 45 to get 3/5 = 60%.',
    },
    {
      type: 'truefalse',
      difficulty: 'easy',
      statement: 'In a pie chart, a sector of 72° stands for 20% of the total.',
      answer: true,
      explain: '72/360 = 1/5 = 20%.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'If a value rises from 80 to 100 and then falls back to 80, the percentage rise equals the percentage fall.',
      answer: false,
      explain: 'Rise = 20/80 = 25%. Fall = 20/100 = 20%. The bases differ.',
    },
  ],
};

export default topic;
