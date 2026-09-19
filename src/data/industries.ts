export interface Industry {
  slug: string;
  name: string;
  h1: string;
  seoTitle: string;
  metaDescription: string;
  problems: string;   // HTML li
  pollutants: string; // HTML li
  conditions: string; // HTML p
  selection: string;  // HTML li (tech selection)
  products: { name: string; href: string }[];
}

export const industries: Industry[] = [
  {
    slug: 'thermal-power',
    name: 'Thermal Power',
    h1: 'Emission Control Materials for Thermal Power',
    seoTitle: 'SCR Catalyst for Thermal Power Plants | Xuanbao Environmental',
    metaDescription:
      'Plate and honeycomb SCR DeNOx catalysts for coal-fired power plant flue gas — high dust tolerance, 150–420°C operation, ≥90% NOx removal efficiency.',
    problems: '<li>NOx emissions from coal combustion</li><li>High flue gas temperature</li><li>High dust loading before the precipitator</li><li>SO₂ present in the gas stream</li>',
    pollutants: '<li>NOx</li><li>SO₂</li><li>Dust</li>',
    conditions:
      'Coal-fired flue gas typically ranges 300–400°C at the SCR position with high dust and SO₂. Catalyst geometry must resist erosion and plugging while keeping pressure drop within the fan budget.',
    selection:
      '<li>Plate-type SCR catalyst for high-dust positions</li><li>Honeycomb SCR catalyst for low-dust (tail-end) positions</li><li>CO oxidation catalyst where CO control is also required</li>',
    products: [
      { name: 'Plate-Type SCR DeNOx Catalyst', href: '/products/scr-denox-catalysts/plate-type-scr-catalyst/' },
      { name: 'Honeycomb SCR DeNOx Catalyst', href: '/products/scr-denox-catalysts/honeycomb-scr-catalyst/' },
      { name: 'CO Oxidation Catalyst', href: '/products/co-removal-catalyst/' },
    ],
  },
  {
    slug: 'steel',
    name: 'Steel',
    h1: 'Emission Control Materials for the Steel Industry',
    seoTitle: 'SCR & CO Catalysts for Steel Plants | Xuanbao Environmental',
    metaDescription:
      'SCR DeNOx and CO oxidation catalysts for steel plant flue gas — sintering, coke oven and furnace applications with complex gas compositions.',
    problems: '<li>NOx from sintering, coking and reheating furnaces</li><li>CO peaks from incomplete combustion</li><li>Complex gas composition with SO₂ and dust</li>',
    pollutants: '<li>NOx</li><li>CO</li><li>SO₂</li><li>Dust</li>',
    conditions:
      'Steel plant streams vary widely between processes — sintering flue gas is large-flow with fluctuating CO, while furnace exhaust runs hotter. Material selection is done per stream.',
    selection:
      '<li>SCR catalysts matched to temperature window and dust</li><li>CO oxidation catalysts for sintering machines</li><li>Combined DeNOx + CO removal where both apply</li>',
    products: [
      { name: 'Plate-Type SCR DeNOx Catalyst', href: '/products/scr-denox-catalysts/plate-type-scr-catalyst/' },
      { name: 'Honeycomb SCR DeNOx Catalyst', href: '/products/scr-denox-catalysts/honeycomb-scr-catalyst/' },
      { name: 'CO Oxidation Catalyst', href: '/products/co-removal-catalyst/' },
    ],
  },
  {
    slug: 'sintering',
    name: 'Sintering',
    h1: 'Sintering Machine CO & NOx Control Materials',
    seoTitle: 'Sintering Flue Gas CO Removal Catalyst | Xuanbao Environmental',
    metaDescription:
      'CO oxidation catalysts for sintering machine flue gas — documented field test achieved CO reduction from 1,499 ppm to 18 ppm.',
    problems: '<li>High and fluctuating CO concentration</li><li>Large gas flow with low pollutant concentration per volume</li><li>Dust and SO₂ in the stream</li>',
    pollutants: '<li>CO</li><li>NOx</li><li>SO₂</li><li>Dust</li>',
    conditions:
      'Sintering flue gas is characterized by large flow, moderate temperature and fluctuating CO. Catalyst design must tolerate variation while maintaining conversion.',
    selection:
      '<li>CO oxidation catalyst sized for the CO load and space velocity</li><li>SCR catalyst where NOx removal is also required</li>',
    products: [
      { name: 'CO Oxidation Catalyst', href: '/products/co-removal-catalyst/' },
      { name: 'Honeycomb SCR DeNOx Catalyst', href: '/products/scr-denox-catalysts/honeycomb-scr-catalyst/' },
    ],
  },
  {
    slug: 'cement',
    name: 'Cement',
    h1: 'Emission Control Materials for Cement Plants',
    seoTitle: 'SCR DeNOx Catalyst for Cement Plants | Xuanbao Environmental',
    metaDescription:
      'High-dust SCR DeNOx catalysts for cement kiln flue gas — plate-type designs for dusty, alkali-containing exhaust streams.',
    problems: '<li>NOx from kiln combustion</li><li>Very high dust loading</li><li>Alkali metals in the dust</li>',
    pollutants: '<li>NOx</li><li>Dust</li><li>SO₂</li>',
    conditions:
      'Cement kiln exhaust carries heavy dust with alkali content that can poison catalysts. Large-pitch plate designs reduce plugging; formulation considers alkali resistance.',
    selection:
      '<li>Plate-type SCR catalyst with large pitch for high-dust gas</li><li>Low cell density honeycomb where dust is controlled</li>',
    products: [
      { name: 'Plate-Type SCR DeNOx Catalyst', href: '/products/scr-denox-catalysts/plate-type-scr-catalyst/' },
      { name: 'Honeycomb SCR DeNOx Catalyst', href: '/products/scr-denox-catalysts/honeycomb-scr-catalyst/' },
    ],
  },
  {
    slug: 'alumina',
    name: 'Alumina',
    h1: 'Emission Control Materials for Alumina Plants',
    seoTitle: 'SCR Catalyst for Alumina Plants | Xuanbao Environmental',
    metaDescription:
      'Plate-type SCR DeNOx catalysts for alumina calcination flue gas with high dust loading and specific temperature windows.',
    problems: '<li>NOx from calcination</li><li>High dust with alumina fines</li>',
    pollutants: '<li>NOx</li><li>Dust</li>',
    conditions:
      'Alumina calcination exhaust is dusty with fine particulates. Plate-type SCR catalysts with high open area are commonly applied.',
    selection:
      '<li>Plate-type SCR DeNOx catalyst for dusty flue gas</li>',
    products: [
      { name: 'Plate-Type SCR DeNOx Catalyst', href: '/products/scr-denox-catalysts/plate-type-scr-catalyst/' },
    ],
  },
  {
    slug: 'petrochemical',
    name: 'Petrochemical',
    h1: 'VOC Control Materials for Petrochemical Plants',
    seoTitle: 'VOC Catalyst & Adsorbent for Petrochemical | Xuanbao Environmental',
    metaDescription:
      'VOC catalysts, zeolite molecular sieves and activated carbon for petrochemical VOC emission control — composition-dependent material selection.',
    problems: '<li>VOC emissions from process vents and storage</li><li>Mixed compositions including sulfur and halogen species</li><li>High flow, sometimes low concentration</li>',
    pollutants: '<li>VOCs (hydrocarbons, aromatics)</li><li>Sulfur compounds</li><li>Halogen compounds (where present)</li>',
    conditions:
      'Petrochemical streams vary from concentrated process vents to dilute tank-farm exhaust. Halogens, sulfur and polymerizable species must be identified before selecting catalysts or adsorbents.',
    selection:
      '<li>Pt / Pt-Pd VOC catalysts for clean hydrocarbon streams</li><li>Zeolite adsorption concentration for low-concentration, high-flow exhaust</li><li>Activated carbon where conditions and safety allow</li>',
    products: [
      { name: 'Platinum Honeycomb VOC Catalyst', href: '/products/voc-catalysts/platinum-catalyst/' },
      { name: 'ZSM-5 Molecular Sieve', href: '/products/zeolite-molecular-sieve/zsm-5/' },
      { name: 'Honeycomb Activated Carbon', href: '/products/activated-carbon/honeycomb-activated-carbon/' },
    ],
  },
  {
    slug: 'chemical',
    name: 'Chemical',
    h1: 'VOC Control Materials for the Chemical Industry',
    seoTitle: 'VOC Catalysts for Chemical Manufacturing | Xuanbao Environmental',
    metaDescription:
      'VOC catalytic oxidation catalysts and adsorbents for chemical process exhaust — matched to solvent composition, temperature and humidity.',
    problems: '<li>VOC emissions from reactors, dryers and vents</li><li>Varying solvent compositions between batches</li><li>Humidity and acid gases in some streams</li>',
    pollutants: '<li>VOCs (solvents)</li><li>Acid gases</li><li>Moisture</li>',
    conditions:
      'Chemical exhaust composition follows the process — batch operations produce concentration swings. Material selection starts from the solvent list and temperature/humidity profile.',
    selection:
      '<li>Pt-Pd VOC catalysts for mixed solvent oxidation</li><li>Zeolite adsorption concentration for dilute streams</li><li>Activated carbon for solvent recovery applications</li>',
    products: [
      { name: 'Platinum-Palladium Honeycomb VOC Catalyst', href: '/products/voc-catalysts/platinum-palladium-catalyst/' },
      { name: 'Non-Precious-Metal VOC Catalyst', href: '/products/voc-catalysts/non-precious-metal-catalyst/' },
      { name: 'Coal-Based Columnar Activated Carbon', href: '/products/activated-carbon/coal-based-columnar-carbon/' },
    ],
  },
  {
    slug: 'printing',
    name: 'Printing',
    h1: 'VOC Control Materials for the Printing Industry',
    seoTitle: 'VOC Catalysts for Printing Industry | Xuanbao Environmental',
    metaDescription:
      'VOC oxidation catalysts and adsorption materials for printing exhaust — benzene, toluene, xylene, esters, ketones and alcohols from inks and solvents.',
    problems: '<li>Solvent VOCs from ink drying</li><li>Mixed aromatics, esters, ketones and alcohols</li><li>Moderate temperature exhaust</li>',
    pollutants: '<li>Benzene, toluene, xylene</li><li>Esters</li><li>Ketones</li><li>Alcohols</li>',
    conditions:
      'Printing exhaust carries mixed solvent VOCs at moderate concentration. Catalytic oxidation and adsorption-concentration routes both apply depending on flow and concentration.',
    selection:
      '<li>Pt / Pt-Pd VOC catalysts for catalytic oxidation</li><li>ZSM-5 adsorption concentration for low-concentration, high-flow exhaust</li><li>Honeycomb activated carbon as an alternative adsorbent</li>',
    products: [
      { name: 'Platinum-Palladium Honeycomb VOC Catalyst', href: '/products/voc-catalysts/platinum-palladium-catalyst/' },
      { name: 'ZSM-5 Molecular Sieve', href: '/products/zeolite-molecular-sieve/zsm-5/' },
      { name: 'Honeycomb Activated Carbon', href: '/products/activated-carbon/honeycomb-activated-carbon/' },
    ],
  },
  {
    slug: 'coating',
    name: 'Coating',
    h1: 'VOC Control Materials for Coating Lines',
    seoTitle: 'VOC Catalysts for Coating & Spraying | Xuanbao Environmental',
    metaDescription:
      'Pt and Pt-Pd honeycomb VOC catalysts for coating line exhaust — design conversion ≥98% for benzene, toluene, xylene, esters and alcohols.',
    problems: '<li>VOC emissions from spray booths and drying ovens</li><li>Mixed solvent VOCs</li><li>Continuous operation with stable load</li>',
    pollutants: '<li>Benzene, toluene, xylene</li><li>Esters</li><li>Ketones</li><li>Alcohols</li>',
    conditions:
      'Coating lines produce steady VOC loads at moderate temperature — well matched to catalytic oxidation. Dilute booth exhaust can be concentrated by adsorption before oxidation.',
    selection:
      '<li>Pt honeycomb VOC catalyst (YC-XB-A) for standard loads</li><li>Pt-Pd VOC catalyst (YC-XB-B) for lower light-off requirements</li><li>Zeolite adsorption concentration for low-concentration booth exhaust</li>',
    products: [
      { name: 'Platinum Honeycomb VOC Catalyst', href: '/products/voc-catalysts/platinum-catalyst/' },
      { name: 'Platinum-Palladium Honeycomb VOC Catalyst', href: '/products/voc-catalysts/platinum-palladium-catalyst/' },
      { name: 'ZSM-5 Molecular Sieve', href: '/products/zeolite-molecular-sieve/zsm-5/' },
    ],
  },
  {
    slug: 'pharmaceutical',
    name: 'Pharmaceutical',
    h1: 'VOC Control Materials for Pharmaceutical Plants',
    seoTitle: 'VOC Adsorbents & Catalysts for Pharmaceutical | Xuanbao Environmental',
    metaDescription:
      'Zeolite molecular sieves and activated carbon for pharmaceutical VOC exhaust — adsorption and catalytic oxidation matched to batch operations.',
    problems: '<li>Organic solvent exhaust from synthesis and drying</li><li>Batch operation with concentration swings</li><li>Complex solvent mixtures</li>',
    pollutants: '<li>Organic solvents (VOCs)</li><li>Odors</li>',
    conditions:
      'Pharmaceutical exhaust is characterized by batch variation and mixed solvents. Adsorption smooths load swings; oxidation suits continuous streams. Safety requirements often dictate the route.',
    selection:
      '<li>Zeolite adsorption concentration + catalytic oxidation</li><li>Activated carbon (honeycomb / coconut-shell) for adsorption</li><li>VOC catalysts for oxidation stage</li>',
    products: [
      { name: 'ZSM-5 Molecular Sieve', href: '/products/zeolite-molecular-sieve/zsm-5/' },
      { name: 'Coconut-Shell Activated Carbon', href: '/products/activated-carbon/coconut-shell-carbon/' },
      { name: 'Platinum Honeycomb VOC Catalyst', href: '/products/voc-catalysts/platinum-catalyst/' },
    ],
  },
  {
    slug: 'automotive',
    name: 'Automotive Manufacturing',
    h1: 'VOC Control Materials for Automotive Manufacturing',
    seoTitle: 'VOC Catalysts for Automotive Painting | Xuanbao Environmental',
    metaDescription:
      'Pt / Pt-Pd honeycomb VOC catalysts for automotive paint shop exhaust — high-flow VOC oxidation for spray booths and ovens.',
    problems: '<li>VOC emissions from painting and drying</li><li>High-flow exhaust from large paint shops</li>',
    pollutants: '<li>Benzene, toluene, xylene</li><li>Esters</li><li>Ketones</li><li>Alcohols</li>',
    conditions:
      'Automotive paint shops generate high-flow VOC streams. Adsorption-concentration wheels or direct catalytic oxidation are applied according to concentration profile.',
    selection:
      '<li>Pt-Pd VOC catalyst for oxidation units</li><li>ZSM-5 zeolite for adsorption concentration wheels</li>',
    products: [
      { name: 'Platinum-Palladium Honeycomb VOC Catalyst', href: '/products/voc-catalysts/platinum-palladium-catalyst/' },
      { name: 'Platinum Honeycomb VOC Catalyst', href: '/products/voc-catalysts/platinum-catalyst/' },
      { name: 'ZSM-5 Molecular Sieve', href: '/products/zeolite-molecular-sieve/zsm-5/' },
    ],
  },
  {
    slug: 'waste-incineration',
    name: 'Waste Incineration',
    h1: 'Emission Control Materials for Waste Incineration',
    seoTitle: 'CO Catalyst for Waste Incineration | Xuanbao Environmental',
    metaDescription:
      'CO oxidation catalysts for waste incinerators — documented field test reduced CO from 11,224.2 mg/Nm³ to 16.2 mg/Nm³ on a medical waste incinerator.',
    problems: '<li>CO peaks from incomplete combustion</li><li>Temperature fluctuation</li><li>Complex composition including acid gases</li>',
    pollutants: '<li>CO</li><li>VOCs</li><li>SO₂</li><li>NOx</li><li>Dust</li><li>Acid gases</li>',
    conditions:
      'Incinerator exhaust temperature and CO load fluctuate. Catalysts must tolerate thermal cycling and multi-pollutant conditions.',
    selection:
      '<li>CO oxidation catalyst for CO control</li><li>SCR catalyst where NOx removal is required</li><li>VOC catalyst for organic pollutant polishing</li>',
    products: [
      { name: 'CO Oxidation Catalyst', href: '/products/co-removal-catalyst/' },
      { name: 'Honeycomb SCR DeNOx Catalyst', href: '/products/scr-denox-catalysts/honeycomb-scr-catalyst/' },
    ],
  },
];
