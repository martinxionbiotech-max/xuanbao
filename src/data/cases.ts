export interface CaseStudy {
  slug: string;
  name: string;
  h1: string;
  seoTitle: string;
  metaDescription: string;
  testDate: string;
  result: string;
  intro: string;
  sections: { h2: string; body: string; list?: string }[];
  products: { name: string; href: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'sintering-machine-co-removal',
    name: 'Sintering Machine CO Removal',
    h1: 'Sintering Machine CO Removal — Field Test',
    seoTitle: 'Sintering Machine CO Removal Case Study | Xuanbao Environmental',
    metaDescription:
      'CO oxidation catalyst field test on a sintering machine: CO reduced from 1,499 ppm to 18 ppm, tested 2022-08-23.',
    testDate: '2022-08-23',
    result: 'CO: 1,499 ppm → 18 ppm',
    intro:
      'Field test of CO oxidation catalyst performance on an industrial sintering machine flue gas stream.',
    sections: [
      {
        h2: 'Reported result',
        body:
          'The original field test record reports CO concentration reduced from <strong>1,499 ppm to 18 ppm</strong> on 2022-08-23.',
      },
      {
        h2: 'Data completeness note',
        body:
          'For full engineering evaluation, the following data should be attached to the original record:',
        list:
          '<li>Gas flow rate</li><li>Operating temperature</li><li>O₂ concentration</li><li>CO inlet / outlet concentration</li><li>Catalyst volume</li><li>Space velocity</li><li>Reactor dimensions</li><li>Continuous operating time</li><li>Test instrument and testing organization</li>',
      },
      {
        h2: 'What this case demonstrates',
        body:
          'The test shows the CO oxidation catalyst achieving high single-pass conversion on a real sintering stream. Sintering flue gas CO control is one of our documented application areas.',
      },
    ],
    products: [
      { name: 'CO Oxidation Catalyst', href: '/products/co-removal-catalyst/' },
    ],
  },
  {
    slug: 'medical-waste-incinerator-co-removal',
    name: 'Medical Waste Incinerator CO Removal',
    h1: 'Medical Waste Incinerator CO Removal — Field Test',
    seoTitle: 'Medical Waste Incinerator CO Removal Case Study | Xuanbao',
    metaDescription:
      'CO oxidation catalyst field test on a medical waste incinerator: CO reduced from 11,224.2 mg/Nm³ to 16.2 mg/Nm³, tested 2023-03-20.',
    testDate: '2023-03-20',
    result: 'CO: 11,224.2 mg/Nm³ → 16.2 mg/Nm³',
    intro:
      'Field test of CO oxidation catalyst performance on a medical waste pyrolysis / incineration exhaust stream.',
    sections: [
      {
        h2: 'Reported result',
        body:
          'The original field test record reports CO concentration reduced from <strong>11,224.2 mg/Nm³ to 16.2 mg/Nm³</strong> on 2023-03-20.',
      },
      {
        h2: 'Data completeness note',
        body:
          'For full engineering evaluation, the following data should be attached to the original record:',
        list:
          '<li>Gas flow rate</li><li>Operating temperature</li><li>Oxygen content</li><li>Continuous operating time</li><li>Detection method and instrument</li>',
      },
      {
        h2: 'What this case demonstrates',
        body:
          'The test shows high CO conversion on a fluctuating incineration stream — evidence of the catalyst\u2019s tolerance to thermal cycling and multi-pollutant conditions.',
      },
    ],
    products: [
      { name: 'CO Oxidation Catalyst', href: '/products/co-removal-catalyst/' },
    ],
  },
];
