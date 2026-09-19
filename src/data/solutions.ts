export interface Solution {
  slug: string;
  name: string;
  h1: string;
  seoTitle: string;
  metaDescription: string;
  intro: string;
  flow?: { title: string; steps: string[] };
  sections: { h2: string; body: string; list?: string; table?: string }[];
  products: { name: string; href: string }[];
}

export const solutions: Solution[] = [
  {
    slug: 'voc-catalytic-oxidation',
    name: 'VOC Catalytic Oxidation',
    h1: 'VOC Catalytic Oxidation',
    seoTitle: 'VOC Catalytic Oxidation Solution | Xuanbao Environmental',
    metaDescription:
      'VOC catalytic oxidation with Pt, Pt-Pd and non-precious-metal honeycomb catalysts — lower-temperature VOC destruction for coating, printing and chemical exhaust.',
    intro:
      'Catalytic oxidation destroys VOCs at 220–600°C — far below thermal oxidation — using honeycomb catalysts that suit medium-to-high concentration streams.',
    flow: {
      title: 'Typical flow path',
      steps: ['VOC exhaust', 'Pretreatment / filtration', 'Preheating', 'Catalyst bed', 'Heat recovery', 'Clean gas discharge'],
    },
    sections: [
      {
        h2: 'Typical VOC components',
        body:
          'Benzene, toluene, xylene, alcohols, ketones, esters, ethers, aldehydes and general hydrocarbons are typical oxidation targets.',
      },
      {
        h2: 'Catalyst selection',
        table: `<thead><tr><th>Condition</th><th>Candidate technology</th></tr></thead><tbody>
          <tr><td>Standard VOC streams</td><td>Pt / Pd honeycomb catalyst</td></tr>
          <tr><td>Lower light-off temperature required</td><td>Pt-Pd bimetallic catalyst</td></tr>
          <tr><td>Some chlorine-containing streams</td><td>Non-precious-metal catalyst, subject to testing</td></tr>
          <tr><td>Low concentration, high flow</td><td>Zeolite adsorption concentration + catalytic oxidation</td></tr>
          <tr><td>High temperature flue gas</td><td>Selected by catalyst temperature rating</td></tr>
          <tr><td>High humidity</td><td>Water-resistance verification required</td></tr>
          <tr><td>High SO₂</td><td>Sulfur-resistance verification required</td></tr>
        </tbody>`,
      },
      {
        h2: 'Design considerations',
        body:
          'Catalyst volume is determined by VOC load, space velocity (typically 10,000–20,000 h⁻¹) and target conversion. Heat recovery from the exothermic oxidation reaction reduces operating cost.',
      },
    ],
    products: [
      { name: 'Platinum Honeycomb VOC Catalyst', href: '/products/voc-catalysts/platinum-catalyst/' },
      { name: 'Platinum-Palladium Honeycomb VOC Catalyst', href: '/products/voc-catalysts/platinum-palladium-catalyst/' },
      { name: 'Non-Precious-Metal VOC Catalyst', href: '/products/voc-catalysts/non-precious-metal-catalyst/' },
    ],
  },
  {
    slug: 'molecular-sieve-adsorption-concentration',
    name: 'Zeolite Adsorption Concentration',
    h1: 'Zeolite Adsorption Concentration + Catalytic Oxidation',
    seoTitle: 'Zeolite Adsorption Concentration System | Xuanbao Environmental',
    metaDescription:
      'Zeolite adsorption concentration + catalytic oxidation for low-concentration, high-flow VOC exhaust — ZSM-5 adsorbent with selective adsorption and high-temperature desorption.',
    intro:
      'For low-concentration, high-flow VOC exhaust, zeolite adsorption first concentrates the pollutants into a small desorption stream, which is then oxidized catalytically — cutting heating energy dramatically.',
    flow: {
      title: 'Process flow',
      steps: ['VOC exhaust', 'Pretreatment', 'Zeolite adsorption', 'Adsorption concentration', 'Desorption', 'Catalytic oxidation', 'Heat recovery', 'Clean gas'],
    },
    sections: [
      {
        h2: 'Technical logic',
        body:
          'The system is built around selective adsorption, high-temperature desorption and heat recovery:',
        list:
          '<li>Selective VOC adsorption on high-silica zeolite</li><li>High-temperature desorption into a small, concentrated stream</li><li>Thermal energy recovery from the oxidation stage</li><li>Reactor heat storage to smooth temperature</li><li>Differential pressure control</li><li>Variable-frequency fan energy saving</li><li>Closed-loop thermal circulation within the system</li><li>Long-cycle continuous operation</li>',
      },
      {
        h2: 'Where it fits',
        body:
          'The route suits large gas flows with low VOC concentration — common in printing, coating and pharmaceutical plants — where direct oxidation would waste energy on heating the full stream.',
      },
    ],
    products: [
      { name: 'ZSM-5 Molecular Sieve', href: '/products/zeolite-molecular-sieve/zsm-5/' },
      { name: 'Platinum-Palladium Honeycomb VOC Catalyst', href: '/products/voc-catalysts/platinum-palladium-catalyst/' },
    ],
  },
  {
    slug: 'scr-denox',
    name: 'SCR DeNOx',
    h1: 'SCR DeNOx Catalyst Solutions',
    seoTitle: 'SCR DeNOx Solution — Catalyst Selection & Engineering | Xuanbao',
    metaDescription:
      'SCR DeNOx solutions for power, cement, alumina and steel flue gas — catalyst selection by temperature, dust, SO₂ and NH₃/NOx ratio.',
    intro:
      'SCR removes NOx by reacting it with ammonia over a catalyst. Success depends on correct catalyst selection for the actual flue gas conditions.',
    flow: {
      title: 'Typical process',
      steps: ['Boiler / furnace', 'Flue gas', 'Dust control / pretreatment', 'NH₃ injection', 'Mixing', 'SCR catalyst', 'SO₂ / dust control', 'Desulfurization', 'Clean gas'],
    },
    sections: [
      {
        h2: 'Typical applications',
        body:
          'Thermal power and coal-fired systems, cement, alumina, steel, metallurgy and industrial furnaces.',
      },
      {
        h2: 'Catalyst selection factors',
        list:
          '<li>Flue gas temperature</li><li>NOx concentration</li><li>NH₃/NOx ratio</li><li>SO₂ concentration</li><li>Dust loading</li><li>Arsenic</li><li>Mercury</li><li>Alkali metals</li><li>Water vapor</li><li>Target NOx concentration</li><li>Pressure drop allowance</li><li>Required service life</li>',
      },
    ],
    products: [
      { name: 'Plate-Type SCR DeNOx Catalyst', href: '/products/scr-denox-catalysts/plate-type-scr-catalyst/' },
      { name: 'Honeycomb SCR DeNOx Catalyst', href: '/products/scr-denox-catalysts/honeycomb-scr-catalyst/' },
    ],
  },
  {
    slug: 'co-removal',
    name: 'CO Removal',
    h1: 'CO Removal & Catalytic Oxidation',
    seoTitle: 'CO Removal Solution — Catalytic Oxidation | Xuanbao Environmental',
    metaDescription:
      'CO removal by catalytic oxidation for sintering machines, coke ovens, waste incinerators and industrial boilers — design factors from temperature to SO₂.',
    intro:
      'Catalytic CO oxidation converts carbon monoxide to CO₂ at elevated temperature, applied where CO peaks or continuous loads must be controlled.',
    sections: [
      {
        h2: 'Typical applications',
        body:
          'Sintering machines, coke ovens, pellet plants, industrial furnaces, waste incinerators and industrial boilers.',
      },
      {
        h2: 'Installation design principles',
        list:
          '<li>Reaction temperature</li><li>CO concentration</li><li>Space velocity</li><li>SO₂</li><li>Water vapor</li><li>Dust</li><li>Waste heat utilization</li><li>Coordination with the SCR stage</li><li>Catalyst service life</li><li>System pressure drop</li>',
      },
      {
        h2: 'Documented field results',
        body:
          'Sintering machine: CO 1,499 ppm → 18 ppm (2022-08-23). Medical waste incinerator: CO 11,224.2 mg/Nm³ → 16.2 mg/Nm³ (2023-03-20). See the case study pages for context.',
      },
    ],
    products: [
      { name: 'CO Oxidation Catalyst', href: '/products/co-removal-catalyst/' },
    ],
  },
  {
    slug: 'adsorption-catalytic-combustion',
    name: 'Adsorption + Catalytic Combustion',
    h1: 'Adsorption + Catalytic Combustion',
    seoTitle: 'Activated Carbon vs Zeolite Adsorption for VOC | Xuanbao Environmental',
    metaDescription:
      'Activated carbon vs zeolite molecular sieve comparison for VOC adsorption + catalytic combustion — material selection by flammability, regeneration and operating cost.',
    intro:
      'Adsorption followed by catalytic combustion couples a concentrator stage with an oxidation stage. Choosing the right adsorbent — activated carbon or zeolite — decides safety, regeneration and operating cost.',
    sections: [
      {
        h2: 'Activated carbon vs zeolite molecular sieve',
        table: `<thead><tr><th>Item</th><th>Activated carbon</th><th>Zeolite molecular sieve</th></tr></thead><tbody>
          <tr><td>Base material</td><td>Carbonaceous</td><td>Inorganic aluminosilicate</td></tr>
          <tr><td>Combustibility</td><td>Combustion / self-heating risk</td><td>Generally non-combustible</td></tr>
          <tr><td>High-temperature desorption</td><td>Limited by safety</td><td>Possible at higher temperature, subject to material &amp; VOC verification</td></tr>
          <tr><td>VOC selectivity</td><td>Depends on pore structure and surface properties</td><td>Tunable via pore structure, polarity and modification</td></tr>
          <tr><td>Regeneration</td><td>Process-dependent</td><td>Thermal regeneration can be designed</td></tr>
          <tr><td>Service life</td><td>Closely tied to pollutants and operating conditions</td><td>Tied to material, conditions and regeneration</td></tr>
          <tr><td>Spent material</td><td>Managed according to actual material properties</td><td>Determined by pollutant type and regulations</td></tr>
          <tr><td>Capital cost</td><td>Usually lower</td><td>Usually higher</td></tr>
          <tr><td>Operating cost</td><td>Depends on replacement, regeneration and safety management</td><td>Depends on regeneration energy, fans, heating and system design</td></tr>
        </tbody>`,
      },
      {
        h2: 'Engineering position',
        body:
          'Neither material is universally superior — each fits different operating conditions. The economic conclusion for your plant should be supported by measured data: adsorption capacity, regeneration energy and replacement intervals for your actual VOC composition.',
      },
    ],
    products: [
      { name: 'ZSM-5 Molecular Sieve', href: '/products/zeolite-molecular-sieve/zsm-5/' },
      { name: 'Honeycomb Activated Carbon', href: '/products/activated-carbon/honeycomb-activated-carbon/' },
      { name: 'Coal-Based Columnar Activated Carbon', href: '/products/activated-carbon/coal-based-columnar-carbon/' },
    ],
  },
];
