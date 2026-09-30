import type { Topic } from '@/content/types';

const topic: Topic = {
  id: 'biology',
  title: 'Biology',
  level: 'intermediate',
  masteryMinutes: 180,
  reviseMinutes: 60,
  priority: 'high',
  weightage: { tier1: 2, tier2: 2 },
  tags: [
    'cell',
    'organelles',
    'human body',
    'vitamins',
    'deficiency diseases',
    'pathogens',
    'blood groups',
    'photosynthesis',
    'plant hormones',
    'DNA',
  ],
  summary:
    'NCERT Class 6 to 10 biology, asked as one-line facts: which organelle does what, which vitamin prevents which disease, which pathogen causes which illness, and which blood group gives to whom.',
  keyPoints: [
    {
      title: 'Cell and organelles',
      text: 'Robert Hooke saw cells in cork (**1665**). Cell theory: Schleiden and Schwann. **Mitochondria**: powerhouse, makes ATP, has its own DNA. **Ribosomes**: site of protein synthesis. **Lysosomes**: "suicide bags", digestive enzymes. **Golgi apparatus**: packages and secretes. **Endoplasmic reticulum**: transport. **Nucleus**: control centre, holds DNA. **Chloroplast**: photosynthesis, plants only.',
      example:
        'Plant cells have a **cell wall** (cellulose), chloroplasts and a large vacuole; animal cells have centrioles. Bacteria are **prokaryotes**: no membrane-bound nucleus.',
    },
    {
      title: 'Vitamins and deficiency diseases',
      text: '**A** (retinol) night blindness; **B1** (thiamine) beriberi; **B3** (niacin) pellagra; **B12** (cobalamin) pernicious anaemia; **C** (ascorbic acid) scurvy; **D** (calciferol) rickets in children, osteomalacia in adults; **K** poor blood clotting. **Fat-soluble: A, D, E, K**; water-soluble: B group and C.',
      example: 'Skin makes vitamin D in sunlight. Vitamin B12 contains **cobalt**.',
    },
    {
      title: 'Minerals and other deficiencies',
      text: '**Iron**: anaemia. **Iodine**: goitre. **Calcium**: weak bones and teeth. **Protein**: kwashiorkor. **Protein and energy** (calories): marasmus.',
      example: 'Iodised salt is used to prevent goitre.',
    },
    {
      title: 'Diseases by pathogen',
      text: "**Bacteria**: tuberculosis, cholera, typhoid, tetanus, diphtheria, whooping cough, leprosy, plague. **Viruses**: AIDS (HIV), polio, measles, mumps, chickenpox, rabies, dengue, influenza, hepatitis, common cold. **Protozoa**: malaria (Plasmodium), kala-azar (Leishmania), amoebic dysentery (Entamoeba). **Fungi**: ringworm, athlete's foot. **Worms**: filariasis.",
      example:
        'Vectors: malaria by female **Anopheles**; dengue and chikungunya by **Aedes**; filariasis by **Culex**; kala-azar by the **sandfly**.',
    },
    {
      title: 'Blood and blood groups',
      text: '**RBCs** carry oxygen with haemoglobin, are made in the bone marrow, live about **120 days**, and have no nucleus when mature. **WBCs** fight infection. **Platelets** help clotting. **Karl Landsteiner** discovered the ABO groups. **O negative** is the universal donor; **AB positive** is the universal recipient.',
      example: 'Normal blood pressure is about **120/80 mm Hg**. The Rh factor is named after the rhesus monkey.',
    },
    {
      title: 'Human body systems: one-line facts',
      text: 'Largest gland: **liver** (makes bile, stored in the gall bladder). Largest organ: **skin**. Longest bone: **femur**. Smallest bone: **stapes** (ear). An adult has **206** bones. **Insulin** comes from beta cells of the islets of Langerhans in the pancreas. Pituitary: "master gland". Thyroid: thyroxine. Unit of the kidney: **nephron**. Unit of the nervous system: **neuron**. Gas exchange happens in the **alveoli** of the lungs.',
      example: 'Humans have **46 chromosomes** (23 pairs). Normal body temperature is about **37°C (98.6°F)**.',
    },
    {
      title: 'Digestion and circulation',
      text: 'Saliva has **salivary amylase**, which starts starch digestion. The stomach makes **hydrochloric acid** and **pepsin** (proteins). Most digestion and absorption happens in the **small intestine**, through villi. The human heart has **four chambers**. The **pulmonary artery** carries deoxygenated blood; the **pulmonary vein** carries oxygenated blood.',
    },
    {
      title: 'Plant basics',
      text: 'Photosynthesis happens in chloroplasts using chlorophyll: carbon dioxide + water → glucose + oxygen, with sunlight. **Xylem** carries water and minerals up; **phloem** carries food. **Stomata** allow gas exchange and transpiration. Hormones: **auxin** (growth, bending towards light), **gibberellin** (stem growth), **cytokinin** (cell division), **abscisic acid** (dormancy, closes stomata), **ethylene** (fruit ripening). **Rhizobium** in root nodules of legumes fixes nitrogen.',
      formula: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂',
    },
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'Double circulation through the heart',
      figure: {
        viewBox: '0 0 320 262',
        svg: `
<rect x="120" y="14" width="80" height="28" rx="6" data-step="3 5"/>
<text x="160" y="33" text-anchor="middle" data-step="3 5">lungs</text>
<rect x="120" y="222" width="80" height="28" rx="6" data-step="4 5"/>
<text x="160" y="241" text-anchor="middle" data-step="4 5">body</text>
<rect x="90" y="90" width="60" height="30" rx="6" class="d-fill-blue" data-step="1"/><rect x="90" y="90" width="60" height="30" rx="6" data-step="1"/>
<text x="120" y="111" text-anchor="middle" data-step="1">RA</text>
<rect x="90" y="140" width="60" height="30" rx="6" class="d-fill-blue" data-step="2"/><rect x="90" y="140" width="60" height="30" rx="6" data-step="2"/>
<text x="120" y="161" text-anchor="middle" data-step="2">RV</text>
<rect x="170" y="90" width="60" height="30" rx="6" class="d-fill-pink" data-step="3"/><rect x="170" y="90" width="60" height="30" rx="6" data-step="3"/>
<text x="200" y="111" text-anchor="middle" data-step="3">LA</text>
<rect x="170" y="140" width="60" height="30" rx="6" class="d-fill-pink" data-step="4"/><rect x="170" y="140" width="60" height="30" rx="6" data-step="4"/>
<text x="200" y="161" text-anchor="middle" data-step="4">LV</text>
<polyline points="120,236 30,236 30,105 88,105" class="d-blue" data-step="1"/><polyline points="82,101 88,105 82,109" class="d-blue" data-step="1"/>
<text x="36" y="206" class="d-small d-blue" data-step="1">vena cava</text>
<line x1="120" y1="121" x2="120" y2="138" class="d-blue" data-step="2"/><polyline points="116,132 120,138 124,132" class="d-blue" data-step="2"/>
<polyline points="150,155 160,155 160,44" class="d-blue" data-step="2"/><polyline points="156,50 160,44 164,50" class="d-blue" data-step="2"/>
<text x="154" y="62" text-anchor="end" class="d-small d-blue" data-step="2">pulmonary</text><text x="154" y="76" text-anchor="end" class="d-small d-blue" data-step="2">artery</text>
<polyline points="200,28 250,28 250,105 232,105" class="d-red" data-step="3"/><polyline points="238,101 232,105 238,109" class="d-red" data-step="3"/>
<text x="244" y="62" text-anchor="end" class="d-small d-red" data-step="3">pulmonary</text><text x="244" y="76" text-anchor="end" class="d-small d-red" data-step="3">vein</text>
<line x1="200" y1="121" x2="200" y2="138" class="d-red" data-step="4"/><polyline points="196,132 200,138 204,132" class="d-red" data-step="4"/>
<polyline points="230,155 290,155 290,236 202,236" class="d-red" data-step="4"/><polyline points="208,232 202,236 208,240" class="d-red" data-step="4"/>
<text x="284" y="206" text-anchor="end" class="d-small d-red" data-step="4">aorta</text>`,
        caption: "Front view: the heart's right side is drawn on your left.",
      },
      explain: [
        'Used (deoxygenated) blood from the body returns through the vena cava into the right atrium (RA).',
        'RA passes it to the right ventricle (RV), which pumps it through the **pulmonary artery** to the lungs: an artery carrying deoxygenated blood.',
        'The lungs load it with oxygen, and the **pulmonary vein** brings it back to the left atrium (LA).',
        'LA passes it to the left ventricle (LV), the thickest-walled chamber, which pumps it into the aorta for the whole body.',
        'Blood passes through the heart twice in one round: **double circulation**. Arteries carry blood away from the heart, veins towards it.',
      ],
    },
    {
      type: 'diagram',
      title: 'Who can give blood to whom',
      figure: {
        viewBox: '0 0 320 215',
        svg: `
<line x1="71.9" y1="96" x2="138.1" y2="54" class="d-red" data-step="2"/><polyline points="133.5,61.6 138.1,54 129.2,54.9" class="d-red" data-step="2"/>
<line x1="71.9" y1="124" x2="138.1" y2="166" class="d-red" data-step="2"/><polyline points="129.2,165.1 138.1,166 133.5,158.4" class="d-red" data-step="2"/>
<line x1="76" y1="110" x2="244" y2="110" class="d-red" data-step="2 4"/><polyline points="236,114 244,110 236,106" class="d-red" data-step="2 4"/>
<line x1="181.9" y1="54" x2="248.1" y2="96" class="d-blue" data-step="3 4"/><polyline points="239.2,95.1 248.1,96 243.5,88.4" class="d-blue" data-step="3 4"/>
<line x1="181.9" y1="166" x2="248.1" y2="124" class="d-blue" data-step="3 4"/><polyline points="243.5,131.6 248.1,124 239.2,124.9" class="d-blue" data-step="3 4"/>
<circle cx="50" cy="110" r="22" class="d-fill-pink" data-step="1 2"/><circle cx="50" cy="110" r="22" data-step="1 2"/><text x="50" y="116" text-anchor="middle" data-step="1 2">O</text>
<circle cx="160" cy="40" r="22" class="d-fill" data-step="1 3"/><circle cx="160" cy="40" r="22" data-step="1 3"/><text x="160" y="46" text-anchor="middle" data-step="1 3">A</text>
<circle cx="160" cy="180" r="22" class="d-fill" data-step="1 3"/><circle cx="160" cy="180" r="22" data-step="1 3"/><text x="160" y="186" text-anchor="middle" data-step="1 3">B</text>
<circle cx="270" cy="110" r="22" class="d-fill-blue" data-step="1 4"/><circle cx="270" cy="110" r="22" data-step="1 4"/><text x="270" y="116" text-anchor="middle" data-step="1 4">AB</text>
<text x="50" y="152" text-anchor="middle" class="d-small d-red" data-step="2">gives to all</text>
<text x="270" y="152" text-anchor="middle" class="d-small d-blue" data-step="4">takes from all</text>`,
        caption: 'ABO groups only; each group also gives to itself.',
      },
      explain: [
        'An arrow means the red cells of one group can be given to the other. Every group can also give to itself.',
        'O red cells carry neither the A nor the B antigen, so O can give to all four: the **universal donor** (O negative when Rh is counted).',
        'A gives only to A and AB; B gives only to B and AB.',
        'AB carries both antigens and has no anti-A or anti-B antibodies, so it can take from all four: the **universal recipient** (AB positive).',
      ],
    },
  ],
  comparisons: [
    {
      title: 'Arteries vs veins vs capillaries',
      items: ['Arteries', 'Veins', 'Capillaries'],
      rows: [
        { aspect: 'Direction of flow', values: ['Away from the heart', 'Towards the heart', 'Link arteries to veins'], key: true },
        {
          aspect: 'Blood carried',
          values: [
            'Oxygenated, except the pulmonary artery',
            'Deoxygenated, except the pulmonary vein',
            'Exchange of oxygen, food and waste with tissues',
          ],
          key: true,
        },
        { aspect: 'Walls', values: ['Thick and elastic', 'Thinner, less elastic', 'One cell thick'] },
        { aspect: 'Valves', values: ['No', 'Yes, to stop backflow', 'No'] },
        { aspect: 'Pressure', values: ['High', 'Lowest', 'Between the two'] },
      ],
      reveal: 'Vessels are named by direction, not by oxygen. That is why the pulmonary artery carries deoxygenated blood to the lungs.',
      whenToUse: [
        'The question is about pumping away from the heart or high pressure.',
        'The question is about return to the heart or valves.',
        'The question is about exchange with tissues.',
      ],
    },
    {
      title: 'Mitosis vs meiosis',
      items: ['Mitosis', 'Meiosis'],
      rows: [
        { aspect: 'Where', values: ['Body (somatic) cells', 'Reproductive (germ) cells'] },
        { aspect: 'Number of divisions', values: ['One', 'Two'] },
        { aspect: 'Daughter cells', values: ['**2**, identical to the parent', '**4**, different from the parent'], key: true },
        { aspect: 'Chromosome number', values: ['Stays the same (diploid)', 'Halved (haploid)'], key: true },
        { aspect: 'Crossing over', values: ['No', 'Yes, creates variation'] },
        { aspect: 'Purpose', values: ['Growth and repair', 'Forming gametes (sperm and egg)'] },
      ],
      reveal: 'Mitosis copies a cell. Meiosis halves the chromosome number so that fertilisation restores it.',
      whenToUse: ['Growth, repair, healing of wounds.', 'Gametes, sexual reproduction, variation.'],
    },
    {
      title: 'DNA vs RNA',
      items: ['DNA', 'RNA'],
      rows: [
        { aspect: 'Sugar', values: ['Deoxyribose', 'Ribose'] },
        { aspect: 'Bases', values: ['A, T, G, C', 'A, **U**, G, C (uracil replaces thymine)'], key: true },
        { aspect: 'Strands', values: ['Double helix', 'Usually single'], key: true },
        { aspect: 'Where found', values: ['Nucleus; also mitochondria and chloroplasts', 'Nucleus and cytoplasm'] },
        { aspect: 'Job', values: ['Stores genetic information', 'Helps make proteins (mRNA, tRNA, rRNA)'] },
      ],
      reveal:
        'Two differences are asked most: RNA has uracil in place of thymine, and it is usually single-stranded. Watson and Crick described the DNA double helix in 1953.',
      whenToUse: ['Questions on heredity, double helix or thymine.', 'Questions on protein synthesis or uracil.'],
    },
  ],
  qa: [
    {
      q: 'Which organelle is called the powerhouse of the cell?',
      a: ['Mitochondria.', 'They make ATP and have their own DNA.'],
      tag: 'Asked often',
    },
    {
      q: 'Which organelle is called the "suicide bag"?',
      a: ['Lysosome.', 'Its enzymes can digest the cell itself.'],
    },
    {
      q: 'Which vitamins are fat-soluble?',
      a: ['A, D, E and K.', 'B group and C are water-soluble.'],
      tag: 'Asked often',
    },
    {
      q: 'Match: beriberi, scurvy, rickets, night blindness.',
      a: ['Beriberi: B1. Scurvy: C.', 'Rickets: D. Night blindness: A.'],
      tag: 'Asked often',
    },
    {
      q: 'Which vitamin contains cobalt?',
      a: ['Vitamin B12 (cobalamin).', 'Its lack causes pernicious anaemia.'],
    },
    {
      q: 'Which mosquito spreads malaria, and which spreads dengue?',
      a: ['Malaria: female Anopheles; the pathogen is Plasmodium, a protozoan.', 'Dengue: Aedes; the pathogen is a virus.'],
      tag: 'Trap',
    },
    {
      q: 'Is malaria caused by a bacterium or a virus?',
      a: ['Neither: it is a protozoan, Plasmodium.'],
      tag: 'Trap',
    },
    {
      q: 'Universal donor and universal recipient blood groups?',
      a: ['Universal donor: O negative.', 'Universal recipient: AB positive.'],
      tag: 'Asked often',
    },
    {
      q: 'Which blood vessel carries deoxygenated blood even though it is an artery?',
      a: ['The pulmonary artery, from the heart to the lungs.', 'The pulmonary vein carries oxygenated blood back.'],
      tag: 'Trap',
    },
    {
      q: 'Largest gland, largest organ, longest and smallest bone?',
      a: ['Largest gland: liver. Largest organ: skin.', 'Longest bone: femur. Smallest: stapes, in the ear.'],
    },
    {
      q: 'Which cells make insulin?',
      a: ['Beta cells of the islets of Langerhans in the pancreas.', 'Alpha cells make glucagon.'],
    },
    {
      q: 'Which plant hormone ripens fruit, and which closes stomata?',
      a: ['Ripening: ethylene, a gas.', 'Closing stomata under stress: abscisic acid.'],
    },
  ],
  quiz: [
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Which organelle is known as the powerhouse of the cell?',
      options: ['Ribosome', 'Mitochondria', 'Golgi apparatus', 'Lysosome'],
      answer: 1,
      explain: 'Mitochondria produce ATP, the energy currency of the cell.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Deficiency of vitamin C causes:',
      options: ['Rickets', 'Beriberi', 'Scurvy', 'Night blindness'],
      answer: 2,
      explain: 'Scurvy: bleeding gums and poor wound healing. Rickets is vitamin D; beriberi B1; night blindness A.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Which is the largest gland in the human body?',
      options: ['Pancreas', 'Thyroid', 'Liver', 'Pituitary'],
      answer: 2,
      explain: 'The liver is the largest gland. The skin is the largest organ.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Which blood group is called the universal donor?',
      options: ['A positive', 'B negative', 'AB positive', 'O negative'],
      answer: 3,
      explain: 'O negative has no A, B or Rh antigens on its red cells. AB positive is the universal recipient.',
    },
    {
      type: 'mcq',
      difficulty: 'easy',
      question: 'Site of protein synthesis in a cell:',
      options: ['Ribosome', 'Lysosome', 'Nucleolus', 'Vacuole'],
      answer: 0,
      explain: 'Ribosomes join amino acids into proteins.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which of these vitamins is water-soluble?',
      options: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin K'],
      answer: 1,
      explain: 'A, D, E and K are fat-soluble. B group and C are water-soluble.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Malaria is caused by:',
      options: ['A bacterium', 'A virus', 'A protozoan', 'A fungus'],
      answer: 2,
      explain: 'Plasmodium, a protozoan, spread by the female Anopheles mosquito.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which of these diseases is caused by a virus?',
      options: ['Tuberculosis', 'Typhoid', 'Rabies', 'Cholera'],
      answer: 2,
      explain: 'Rabies is viral. Tuberculosis, typhoid and cholera are bacterial.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Dengue is spread by the:',
      options: ['Female Anopheles mosquito', 'Aedes mosquito', 'Culex mosquito', 'Sandfly'],
      answer: 1,
      explain: 'Aedes spreads dengue and chikungunya. Anopheles spreads malaria; Culex spreads filariasis.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Insulin is secreted by:',
      options: ['Alpha cells of the pancreas', 'Beta cells of the pancreas', 'The liver', 'The adrenal gland'],
      answer: 1,
      explain: 'Beta cells of the islets of Langerhans make insulin; alpha cells make glucagon.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which is the smallest bone in the human body?',
      options: ['Femur', 'Stapes', 'Incus', 'Radius'],
      answer: 1,
      explain: 'The stapes, in the middle ear. The femur is the longest.',
    },
    {
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which plant hormone speeds up the ripening of fruit?',
      options: ['Auxin', 'Gibberellin', 'Cytokinin', 'Ethylene'],
      answer: 3,
      explain: 'Ethylene is a gaseous hormone that ripens fruit.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Pellagra is caused by a deficiency of:',
      options: ['Thiamine (B1)', 'Riboflavin (B2)', 'Niacin (B3)', 'Cobalamin (B12)'],
      answer: 2,
      explain: 'Niacin (B3) deficiency causes pellagra. B1 causes beriberi; B12 pernicious anaemia.',
    },
    {
      type: 'mcq',
      difficulty: 'hard',
      question: 'Meiosis produces:',
      options: ['2 diploid cells', '2 haploid cells', '4 diploid cells', '4 haploid cells'],
      answer: 3,
      explain: 'Two divisions give 4 cells, each with half the chromosome number.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'The pulmonary vein carries oxygenated blood from the lungs to the heart.',
      answer: true,
      explain: 'Veins carry blood towards the heart. The pulmonary vein is the one vein with oxygenated blood.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'RNA contains thymine in place of uracil.',
      answer: false,
      explain: 'It is the other way round: RNA has uracil in place of thymine.',
    },
    {
      type: 'truefalse',
      difficulty: 'medium',
      statement: 'Kwashiorkor is caused by a lack of protein in the diet.',
      answer: true,
      explain: 'Kwashiorkor is protein deficiency. Marasmus is a lack of both protein and energy.',
    },
    {
      type: 'truefalse',
      difficulty: 'hard',
      statement: 'Mature human red blood cells have a nucleus.',
      answer: false,
      explain: 'Mature human RBCs lose their nucleus, leaving more room for haemoglobin.',
    },
  ],
};

export default topic;
