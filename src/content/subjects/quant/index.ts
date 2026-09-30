import type { Subject } from '@/content/types';
import meta from './meta';
import simpleInterest from './topics/simple-interest';
import compoundInterest from './topics/compound-interest';
import ratioProportion from './topics/ratio-proportion';
import mixtureAlligation from './topics/mixture-alligation';
import trains from './topics/trains';
import boatsStreams from './topics/boats-streams';
import linearEquations from './topics/linear-equations';
import graphsLines from './topics/graphs-lines';
import linesAngles from './topics/lines-angles';
import triangles from './topics/triangles';
import circles from './topics/circles';
import numberSystem from './topics/number-system';
import hcfLcm from './topics/hcf-lcm';
import simplification from './topics/simplification';
import roots from './topics/roots';
import average from './topics/average';
import quadrilaterals from './topics/quadrilaterals';
import coordinateGeometry from './topics/coordinate-geometry';
import mensuration2d from './topics/mensuration-2d';
import mensuration3d from './topics/mensuration-3d';
import heightsDistances from './topics/heights-distances';
import trigIdentities from './topics/trig-identities';
import dataInterpretation from './topics/data-interpretation';
import statisticsBasics from './topics/statistics-basics';
import probability from './topics/probability';
import percentage from './topics/percentage';
import profitLoss from './topics/profit-loss';
import timeWork from './topics/time-work';
import speedDistance from './topics/speed-distance';
import algebraIdentities from './topics/algebra-identities';

const subject: Subject = {
  ...meta,
  categories: [
    {
      id: 'arithmetic-basics',
      section: 'Basic',
      name: 'Arithmetic basics',
      blurb: 'Numbers, factors and fast simplification. The engine behind every other chapter.',
      topics: [
        numberSystem,
        hcfLcm,
        simplification,
        roots,
      ],
    },
    {
      id: 'percentage-family',
      section: 'Basic',
      name: 'Percentage family',
      blurb: 'One idea, many disguises: percentage, profit, interest, ratio and averages all run on fractions of 100.',
      topics: [
        percentage,
        profitLoss,
        simpleInterest,
        compoundInterest,
        ratioProportion,
        mixtureAlligation,
        average,
      ],
    },
    {
      id: 'time-family',
      section: 'Basic',
      name: 'Time family',
      blurb: 'Work, speed and distance share one equation: rate × time = amount.',
      topics: [
        timeWork,
        speedDistance,
        trains,
        boatsStreams,
      ],
    },
    {
      id: 'data-statistics',
      section: 'Basic',
      name: 'Data and statistics',
      blurb: 'Read a chart once, then answer a set of linked questions from it.',
      topics: [
        dataInterpretation,
        statisticsBasics,
        probability,
      ],
    },
    {
      id: 'algebra',
      section: 'Advanced',
      name: 'Algebra',
      blurb: 'Identities and the x + 1/x family carry most of the marks here.',
      topics: [
        algebraIdentities,
        linearEquations,
        graphsLines,
      ],
    },
    {
      id: 'geometry',
      section: 'Advanced',
      name: 'Geometry',
      blurb: 'Learn the theorems as pictures; most questions are one theorem and one line of arithmetic.',
      topics: [
        linesAngles,
        triangles,
        circles,
        quadrilaterals,
        coordinateGeometry,
      ],
    },
    {
      id: 'mensuration',
      section: 'Advanced',
      name: 'Mensuration',
      blurb: 'Area, perimeter, volume and surface area.',
      topics: [
        mensuration2d,
        mensuration3d,
      ],
    },
    {
      id: 'trigonometry',
      section: 'Advanced',
      name: 'Trigonometry',
      blurb: 'Standard values and three identities solve most questions.',
      topics: [
        trigIdentities,
        heightsDistances,
      ],
    },
  ],
};

export default subject;
