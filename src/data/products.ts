export interface Product {
  slug: string[];        // route segments, e.g. ['scr-denox-catalysts','plate-type-scr-catalyst']
  path?: string;         // set by the route
  name: string;
  h1: string;
  model?: string;
  category: string;      // schema category
  seoTitle: string;
  metaDescription: string;
  intro: string;
  overview?: string;
  specs?: string;        // HTML table markup
  features?: string;     // HTML <li> items
  applications?: string; // HTML <li> items
  limitations?: string;
  custom?: string;
  faqs?: { q: string; a: string }[];
  crumbs: { name: string; href?: string }[];
}

export const products: Product[] = [
  // ===== SCR DeNOx =====
  {
    slug: ['scr-denox-catalysts', 'plate-type-scr-catalyst'],
    name: 'Plate-Type SCR DeNOx Catalyst',
    h1: 'Plate-Type SCR DeNOx Catalyst',
    category: 'SCR DeNOx Catalysts',
    seoTitle: 'Plate-Type SCR DeNOx Catalyst Manufacturer | Xuanbao Environmental',
    metaDescription:
      'Plate-type SCR denitrification catalyst with V-Mo-Ti active system, 150–420°C operating range and ≥90% DeNOx efficiency for high-dust flue gas in power, cement and alumina plants.',
    intro:
      'Plate-type SCR catalysts with a V-Mo-Ti active system, designed for high-dust flue gas denitrification with large pitch, high open area and low pressure drop.',
    overview:
      'Plate-type SCR catalysts use a metal mesh support coated with a V-Mo-Ti catalytic layer. Compared with honeycomb structures, the plate design provides larger pitch, higher gas-passage area and lower flow resistance, which makes it suitable for flue gas with high dust loading where plugging and erosion are key concerns.',
    specs: `<thead><tr><th>Parameter</th><th>Value</th></tr></thead><tbody>
      <tr><td>Active system</td><td>V-Mo-Ti</td></tr>
      <tr><td>Operating temperature</td><td>150–420°C</td></tr>
      <tr><td>DeNOx efficiency</td><td>≥90%</td></tr>
      <tr><td>Pitch</td><td>5.6–7.4 mm</td></tr>
      <tr><td>Specific surface area</td><td>300 / 350 / 390 m²/m³ *</td></tr>
      <tr><td>SO₂/SO₃ conversion</td><td>≤1% *</td></tr>
      <tr><td>Dust resistance</td><td>≥45 g/m² *</td></tr>
      <tr><td>Wear resistance</td><td>&lt;130 mg/100 cycles *</td></tr>
    </tbody>`,
    features:
      '<li>High mechanical strength</li><li>Good erosion resistance</li><li>Low pressure drop</li><li>Good dust tolerance</li><li>Resistance to catalyst poisoning</li><li>Good sulfur resistance</li><li>Good anti-clogging performance</li>',
    applications:
      '<li>Coal-fired power plants</li><li>Alumina plants</li><li>Cement plants</li><li>High-dust industrial flue gas</li>',
    limitations:
      'Parameters marked (*) are reproduced from original documentation and contain unit/OCR ambiguities; they are shown as reference values only and must be confirmed against the current product specification before use in engineering design.',
    faqs: [
      {
        q: 'When is a plate-type SCR catalyst preferred over honeycomb?',
        a: 'Plate-type catalysts are typically preferred for high-dust flue gas — for example upstream of the precipitator — because the larger pitch and open area reduce clogging and erosion while keeping pressure drop low.',
      },
      {
        q: 'What NOx removal efficiency can be expected?',
        a: 'The documented design efficiency is ≥90% under the specified operating window. Actual efficiency depends on temperature, NH₃/NOx ratio, space velocity and flue gas composition.',
      },
      {
        q: 'Can plate-type catalysts be supplied as complete modules?',
        a: 'Yes — catalysts are assembled into unit and module frames according to the reactor layout, and installation guidance is provided.',
      },
    ],
    crumbs: [{ name: 'SCR DeNOx Catalysts', href: '/products/scr-denox-catalysts/' }],
  },
  {
    slug: ['scr-denox-catalysts', 'honeycomb-scr-catalyst'],
    name: 'Honeycomb SCR DeNOx Catalyst',
    h1: 'Honeycomb SCR DeNOx Catalyst',
    category: 'SCR DeNOx Catalysts',
    seoTitle: 'Honeycomb SCR DeNOx Catalyst Manufacturer | Xuanbao Environmental',
    metaDescription:
      'Honeycomb SCR denitrification catalysts with cell structures from 13×13 to 60×60, specific surface area up to 1,347 m²/m³, for low-to-medium dust NOx removal applications.',
    intro:
      'Extruded honeycomb SCR catalysts available in a wide range of cell structures, matched to dust loading, pressure drop and NOx removal requirements.',
    overview:
      'Honeycomb SCR catalysts are extruded with different cell densities and wall thicknesses so the catalyst geometry can be matched to the actual flue gas conditions — dust concentration, flow velocity and pressure drop allowance. The table below lists the standard structure range.',
    specs: `<thead><tr><th>Structure</th><th>cpsi</th><th>Pitch (mm)</th><th>Wall (mm)</th><th>Open area (%)</th><th>Specific surface (m²/m³)</th></tr></thead><tbody>
      <tr><td>13×13</td><td>5</td><td>11.26</td><td>1.30</td><td>75.54</td><td>302.30</td></tr>
      <tr><td>18×18</td><td>10</td><td>8.18</td><td>0.85</td><td>78.07</td><td>425.00</td></tr>
      <tr><td>20×20</td><td>12</td><td>7.37</td><td>0.80</td><td>77.38</td><td>470.18</td></tr>
      <tr><td>22×22</td><td>14</td><td>6.70</td><td>0.83</td><td>74.60</td><td>508.10</td></tr>
      <tr><td>25×25</td><td>18</td><td>5.90</td><td>0.75</td><td>74.27</td><td>576.00</td></tr>
      <tr><td>30×30</td><td>26</td><td>4.93</td><td>0.65</td><td>73.69</td><td>688.37</td></tr>
      <tr><td>35×35</td><td>35</td><td>4.24</td><td>0.55</td><td>74.29</td><td>806.02</td></tr>
      <tr><td>40×40</td><td>46</td><td>3.71</td><td>0.50</td><td>73.57</td><td>916.62</td></tr>
      <tr><td>55×55</td><td>87</td><td>2.70</td><td>0.40</td><td>71.57</td><td>1124.53</td></tr>
      <tr><td>60×60</td><td>100</td><td>2.48</td><td>0.38</td><td>70.73</td><td>1347.88</td></tr>
    </tbody>`,
    features:
      '<li>Optimized pore structure</li><li>Wide operating temperature range</li><li>High specific surface area</li><li>Good physical properties</li><li>High chemical activity</li><li>Good water resistance</li>',
    applications:
      '<li>Thermal power plants</li><li>Steel and sintering flue gas</li><li>Cement and building materials</li><li>Industrial furnaces</li><li>Low-to-medium dust NOx removal</li>',
    limitations:
      'For high-dust positions (before dust removal), the plate-type design or low cell density structures are usually more suitable. Cell structure selection must consider dust loading and erosion conditions.',
    custom:
      'Cell density, pitch and wall thickness can be selected from the standard range above; module dimensions are customized to the reactor layout.',
    faqs: [
      {
        q: 'How do I choose the right cell structure?',
        a: 'High cell densities give more catalytic surface but lower open area and higher pressure drop. Low-dust flue gas allows higher cpsi; dusty gas needs larger pitch. We select the structure from your dust loading, flow rate and pressure drop budget.',
      },
      {
        q: 'What is the typical operating temperature window?',
        a: 'Standard V-Mo-Ti systems operate around 150–420°C. For other windows, the formulation can be adjusted — please share your actual temperature profile.',
      },
    ],
    crumbs: [{ name: 'SCR DeNOx Catalysts', href: '/products/scr-denox-catalysts/' }],
  },

  // ===== CO Oxidation =====
  {
    slug: ['co-removal-catalyst'],
    name: 'CO Oxidation Catalyst',
    h1: 'Carbon Monoxide Oxidation Catalyst',
    category: 'CO Oxidation Catalysts',
    seoTitle: 'CO Oxidation Catalyst Manufacturer — Carbon Monoxide Removal | Xuanbao',
    metaDescription:
      'CO oxidation catalysts on cordierite honeycomb or activated alumina substrates, 150–600°C, up to ≥95% conversion, for sintering machines, waste incinerators and industrial furnaces.',
    intro:
      'Honeycomb-supported catalysts that promote the oxidation of carbon monoxide to CO₂ at elevated temperature, applied to sintering machines, waste incinerators, industrial boilers and furnaces.',
    overview:
      'The CO oxidation catalyst uses a honeycomb ceramic (or activated alumina) substrate with a washcoat and precious-metal / oxide active system. It accelerates the reaction <strong>2CO + O₂ → 2CO₂</strong> so CO is removed before the gas is discharged. Active components can involve Pt, Pd, Rh, Zr and Ce; the formulation is selected from the actual gas conditions.',
    specs: `<thead><tr><th>Parameter</th><th>Value</th></tr></thead><tbody>
      <tr><td>Operating temperature</td><td>150–600°C</td></tr>
      <tr><td>Conversion</td><td>up to ≥95% *</td></tr>
      <tr><td>Design space velocity</td><td>10,000–15,000 h⁻¹</td></tr>
      <tr><td>Substrate</td><td>Cordierite honeycomb / activated alumina</td></tr>
      <tr><td>Thermal shock resistance</td><td>up to 800°C *</td></tr>
    </tbody>`,
    features:
      '<li>SO₂ resistance</li><li>Water resistance</li><li>Alkali / alkaline-earth resistance</li><li>Low CO light-off temperature</li><li>Wide operating temperature range</li><li>High conversion</li><li>Long service life</li>',
    applications:
      '<li>Sintering machines</li><li>Coke ovens and pellet plants</li><li>Industrial furnaces</li><li>Medical waste incinerators</li><li>Industrial boilers</li><li>Internal combustion exhaust (where applicable)</li>',
    limitations:
      'Conversion marked (*) is a reported value from original documentation; it must be confirmed against the current test report. Performance depends on CO concentration, oxygen content, temperature, SO₂ and water vapor.',
    faqs: [
      {
        q: 'What CO conversion has been achieved in field tests?',
        a: 'Documented field tests include a sintering machine where CO dropped from 1,499 ppm to 18 ppm (2022-08-23) and a medical waste incinerator where CO fell from 11,224.2 mg/Nm³ to 16.2 mg/Nm³ (2023-03-20). See our case studies for details.',
      },
      {
        q: 'Does the catalyst tolerate SO₂ and water vapor?',
        a: 'The formulation is designed for SO₂ and water resistance, but the acceptable limits depend on concentration and temperature. Provide your gas composition for evaluation.',
      },
      {
        q: 'What substrates are available?',
        a: 'Cordierite honeycomb and activated alumina. The choice depends on temperature, thermal shock and mechanical requirements.',
      },
    ],
    crumbs: [],
  },

  // ===== VOC Catalysts =====
  {
    slug: ['voc-catalysts', 'platinum-catalyst'],
    name: 'Platinum Honeycomb VOC Catalyst',
    h1: 'Platinum Honeycomb Catalyst — YC-XB-A',
    model: 'YC-XB-A',
    category: 'VOC Catalysts',
    seoTitle: 'Platinum Honeycomb VOC Catalyst YC-XB-A | Xuanbao Environmental',
    metaDescription:
      'Single-metal nano-platinum VOC oxidation catalyst YC-XB-A on 200 cpsi cordierite, 220–600°C, design conversion ≥98%, for coating, printing, chemical and automotive VOC exhaust.',
    intro:
      'A single precious-metal (nano Pt) honeycomb catalyst for catalytic oxidation of VOCs in coating, printing, chemical and automotive manufacturing exhaust.',
    overview:
      'YC-XB-A is a cordierite honeycomb catalyst loaded with nano-scale platinum. It oxidizes benzene, toluene, xylene, alcohols, ketones, esters and other VOCs to CO₂ and H₂O within its operating temperature window, and is suitable for medium-to-high concentration VOC streams.',
    specs: `<thead><tr><th>Parameter</th><th>Specification</th></tr></thead><tbody>
      <tr><td>Substrate</td><td>Cordierite</td></tr>
      <tr><td>Size</td><td>100×100×50 mm, customizable</td></tr>
      <tr><td>Cell density</td><td>200 cpsi</td></tr>
      <tr><td>Active component</td><td>Nano Pt</td></tr>
      <tr><td>Water absorption</td><td>&lt;25%</td></tr>
      <tr><td>Axial compressive strength</td><td>≥10 MPa</td></tr>
      <tr><td>Lateral compressive strength</td><td>≥4 MPa</td></tr>
      <tr><td>Operating temperature</td><td>220–600°C</td></tr>
      <tr><td>Maximum temperature</td><td>800°C</td></tr>
      <tr><td>Typical space velocity</td><td>10,000–20,000 h⁻¹</td></tr>
      <tr><td>Concentration range</td><td>1,500–8,000 mg/m³ *</td></tr>
      <tr><td>Design conversion</td><td>≥98% *</td></tr>
      <tr><td>Expected service life</td><td>&gt;2 years *</td></tr>
    </tbody>`,
    features:
      '<li>Nano Pt active component with good low-temperature activity</li><li>Wide VOC applicability — aromatics, alcohols, ketones, esters</li><li>High mechanical strength</li><li>Customizable element dimensions</li>',
    applications:
      '<li>Coating lines</li><li>Printing</li><li>Chemical manufacturing</li><li>Automotive manufacturing</li><li>Organic chemical processes</li>',
    limitations:
      'Concentration range, conversion and service life marked (*) are reported values from original documentation and depend strongly on VOC composition, temperature and space velocity. Streams containing catalyst poisons (halogens, heavy metals, polymerizable compounds) require prior evaluation and testing.',
    custom:
      'Element size can be customized; larger catalyst volumes are assembled from standard elements.',
    faqs: [
      {
        q: 'What VOCs can the YC-XB-A oxidize?',
        a: 'Typical targets are benzene, toluene, xylene, alcohols, ketones, esters, ethers, aldehydes and general hydrocarbons within the specified concentration and temperature window.',
      },
      {
        q: 'What is the difference between YC-XB-A and YC-XB-B?',
        a: 'YC-XB-A is a single Pt system with a wide temperature window (220–600°C). YC-XB-B adds Pd for lower light-off and better performance on certain VOC mixtures (240–400°C).',
      },
    ],
    crumbs: [{ name: 'VOC Catalysts', href: '/products/voc-catalysts/' }],
  },
  {
    slug: ['voc-catalysts', 'platinum-palladium-catalyst'],
    name: 'Platinum-Palladium Honeycomb VOC Catalyst',
    h1: 'Platinum-Palladium Honeycomb Catalyst — YC-XB-B',
    model: 'YC-XB-B',
    category: 'VOC Catalysts',
    seoTitle: 'Platinum-Palladium VOC Catalyst YC-XB-B | Xuanbao Environmental',
    metaDescription:
      'Dual precious-metal Pt-Pd honeycomb VOC catalyst YC-XB-B on 200 cpsi cordierite, 240–400°C, lower light-off temperature for mixed VOC streams in coating and printing exhaust.',
    intro:
      'A dual precious-metal (Pt + Pd) honeycomb catalyst with lower light-off temperature and a wider VOC applicability window for catalytic combustion systems.',
    overview:
      'YC-XB-B combines nano Pt and Pd active components. The bimetallic system lowers the light-off temperature compared with single-metal catalysts and extends applicability across mixed VOC compositions, making it a common choice for coating and printing exhaust treatment.',
    specs: `<thead><tr><th>Parameter</th><th>Specification</th></tr></thead><tbody>
      <tr><td>Substrate</td><td>Cordierite</td></tr>
      <tr><td>Size</td><td>100×100×50 mm, customizable</td></tr>
      <tr><td>Cell density</td><td>200 cpsi</td></tr>
      <tr><td>Active components</td><td>Nano Pt / Pd</td></tr>
      <tr><td>Water absorption</td><td>&lt;25%</td></tr>
      <tr><td>Axial strength</td><td>≥10 MPa</td></tr>
      <tr><td>Lateral strength</td><td>≥2 MPa</td></tr>
      <tr><td>Operating temperature</td><td>240–400°C</td></tr>
      <tr><td>Maximum temperature</td><td>900°C</td></tr>
      <tr><td>Typical space velocity</td><td>15,000–20,000 h⁻¹</td></tr>
      <tr><td>Concentration range</td><td>1,500–8,000 mg/m³ *</td></tr>
      <tr><td>Design conversion</td><td>≥98% *</td></tr>
      <tr><td>Expected service life</td><td>&gt;2 years *</td></tr>
    </tbody>`,
    features:
      '<li>Pt-Pd bimetallic system with lower light-off temperature</li><li>Wider VOC applicability on mixed streams</li><li>Higher maximum operating temperature (900°C)</li><li>High mechanical strength</li>',
    applications:
      '<li>Coating</li><li>Printing</li><li>Chemical manufacturing</li><li>Automotive manufacturing</li>',
    limitations:
      'Values marked (*) are reported values from original documentation and depend on VOC composition, temperature and space velocity. Halogenated or catalyst-poisoning streams require prior testing.',
    faqs: [
      {
        q: 'Why choose Pt-Pd over a single Pt catalyst?',
        a: 'The Pd addition lowers the light-off temperature and improves conversion on certain VOC mixtures, which reduces preheating energy in catalytic oxidation systems.',
      },
    ],
    crumbs: [{ name: 'VOC Catalysts', href: '/products/voc-catalysts/' }],
  },
  {
    slug: ['voc-catalysts', 'non-precious-metal-catalyst'],
    name: 'Non-Precious-Metal VOC Catalyst',
    h1: 'Non-Precious-Metal VOC Catalyst — YC-XB-C',
    model: 'YC-XB-C',
    category: 'VOC Catalysts',
    seoTitle: 'Non-Precious-Metal VOC Catalyst YC-XB-C | Xuanbao Environmental',
    metaDescription:
      'Ag-Cu-Mn composite oxide VOC catalyst YC-XB-C on 200 cpsi cordierite, 260–450°C, a lower-cost alternative for non-hydrocarbon VOC catalytic oxidation.',
    intro:
      'A silver-copper-manganese composite oxide honeycomb catalyst offering a lower-cost catalytic oxidation option for suitable VOC streams.',
    overview:
      'YC-XB-C uses Ag/Cu/Mn composite oxides instead of platinum-group metals. It targets cost-sensitive applications and non-hydrocarbon VOC streams where the operating conditions fall within its window. Suitability must be confirmed by testing against the actual VOC composition.',
    specs: `<thead><tr><th>Parameter</th><th>Specification</th></tr></thead><tbody>
      <tr><td>Substrate</td><td>Cordierite</td></tr>
      <tr><td>Size</td><td>100×100×50 mm</td></tr>
      <tr><td>Cell density</td><td>200 cpsi</td></tr>
      <tr><td>Active components</td><td>Ag / Cu / Mn</td></tr>
      <tr><td>Operating temperature</td><td>260–450°C</td></tr>
      <tr><td>Maximum temperature</td><td>500°C</td></tr>
      <tr><td>Space velocity</td><td>10,000–15,000 h⁻¹</td></tr>
      <tr><td>Concentration range</td><td>1,500–4,000 mg/m³ *</td></tr>
      <tr><td>Design conversion</td><td>≥98% *</td></tr>
      <tr><td>Expected service life</td><td>&gt;1 year *</td></tr>
    </tbody>`,
    features:
      '<li>No platinum-group metals — lower material cost</li><li>Suitable for non-hydrocarbon VOC streams</li><li>Good thermal stability within its window</li>',
    applications:
      '<li>Non-hydrocarbon VOC catalytic oxidation</li><li>Cost-sensitive VOC abatement projects</li>',
    limitations:
      'Values marked (*) are reported values from original documentation. Because the system contains no precious metals, light-off temperature is higher and the applicable VOC range is narrower. Halogenated compounds and high-humidity streams require prior evaluation.',
    faqs: [
      {
        q: 'When should I consider the non-precious-metal catalyst?',
        a: 'When the VOC stream is suitable (non-hydrocarbon, within 260–450°C) and material cost is a major constraint. We test your gas composition before confirming applicability.',
      },
    ],
    crumbs: [{ name: 'VOC Catalysts', href: '/products/voc-catalysts/' }],
  },

  // ===== Zeolite Molecular Sieves =====
  {
    slug: ['zeolite-molecular-sieve', 'modified-5a'],
    name: 'Modified 5A Molecular Sieve',
    h1: 'Modified 5A Molecular Sieve',
    category: 'Zeolite Molecular Sieves',
    seoTitle: 'Modified 5A Molecular Sieve Manufacturer | Xuanbao Environmental',
    metaDescription:
      'Modified 5A molecular sieve for selective adsorption, drying and gas separation — water, methanol, ethanol, H₂S, SO₂, CO₂, ethylene, propylene and gas purification.',
    intro:
      'A-type 5A molecular sieve for selective adsorption, drying and gas separation, customized to the target medium and operating conditions.',
    overview:
      '5A molecular sieves are A-type zeolites with a ~5Å effective pore opening, widely used for selective adsorption and drying. Modification adjusts adsorption selectivity and capacity for the target gas or liquid system.',
    features:
      '<li>Selective adsorption of polar and small molecules</li><li>Good drying depth for gas streams</li><li>Customizable modification to the target medium</li>',
    applications:
      '<li>Natural gas drying</li><li>Chemical gas drying</li><li>Refrigerants</li><li>Pharmaceutical gases</li><li>Electronic materials</li><li>Argon purification</li><li>Gas separation</li>',
    custom:
      'Modification is adjusted according to the target medium, concentration, humidity and adsorption/regeneration cycle.',
    faqs: [
      {
        q: 'Which molecules does 5A selectively adsorb?',
        a: 'Typical adsorbates include water, methanol, ethanol, H₂S, SO₂, CO₂, ethylene and propylene. Selectivity is tuned by modification.',
      },
    ],
    crumbs: [{ name: 'Zeolite Molecular Sieves', href: '/products/zeolite-molecular-sieve/' }],
  },
  {
    slug: ['zeolite-molecular-sieve', 'modified-13x'],
    name: 'Modified 13X Molecular Sieve',
    h1: 'Modified 13X Molecular Sieve',
    category: 'Zeolite Molecular Sieves',
    seoTitle: 'Modified 13X Molecular Sieve Manufacturer | Xuanbao Environmental',
    metaDescription:
      'Modified 13X sodium X-type zeolite molecular sieve with large pore structure for gas drying, CO₂ adsorption and catalyst support applications.',
    intro:
      'Sodium X-type (13X) molecular sieve with large pore structure and strong adsorption capacity, available with different modification systems for specific applications.',
    overview:
      '13X is a sodium X-type zeolite whose ~10Å pore structure adsorbs larger molecules than A-type sieves, giving it strong capacity for drying and for adsorbing CO₂, H₂S and other species. Modification systems are selected per application.',
    features:
      '<li>Larger pore structure than A-type sieves</li><li>Strong adsorption capacity</li><li>Multiple modification systems available</li>',
    applications:
      '<li>Medical gas drying</li><li>Compressed air drying</li><li>CO₂ adsorption</li><li>H₂O / H₂S adsorption</li><li>Catalyst support applications</li>',
    custom:
      'Different modification systems are applied according to the application; regeneration temperature and cycles are confirmed per project.',
    faqs: [
      {
        q: 'What is the difference between 13X and 5A?',
        a: '13X has a larger pore structure (~10Å vs ~5Å), so it can adsorb larger molecules and generally offers higher capacity for CO₂ and water, while 5A gives sharper size selectivity.',
      },
    ],
    crumbs: [{ name: 'Zeolite Molecular Sieves', href: '/products/zeolite-molecular-sieve/' }],
  },
  {
    slug: ['zeolite-molecular-sieve', 'zsm-5'],
    name: 'ZSM-5 Molecular Sieve for VOC Adsorption',
    h1: 'ZSM-5 Molecular Sieve for VOC Adsorption',
    category: 'Zeolite Molecular Sieves',
    seoTitle: 'ZSM-5 Molecular Sieve for VOC Adsorption | Xuanbao Environmental',
    metaDescription:
      'High-silica ZSM-5 zeolite (SiO₂/Al₂O₃ ≈300) for VOC adsorption concentration systems — honeycomb blocks with ≥90% relative crystallinity and ≥380 m²/g BET surface area.',
    intro:
      'High-silica ZSM-5 zeolite with strong hydrophobicity, high thermal/hydrothermal stability and selective VOC adsorption, supplied as powder or honeycomb blocks for adsorption concentration systems.',
    overview:
      'ZSM-5 with a SiO₂/Al₂O₃ ratio around 300 offers a hydrophobic, thermally stable adsorption surface that selectively captures VOCs even in humid exhaust, and releases them cleanly during hot-air desorption — the core material of zeolite wheel / fixed-bed adsorption concentration systems.',
    specs: `<thead><tr><th>Powder property</th><th>Specification</th></tr></thead><tbody>
      <tr><td>SiO₂/Al₂O₃</td><td>~300</td></tr>
      <tr><td>Na₂O</td><td>&lt;0.05 wt%</td></tr>
      <tr><td>Powder D50</td><td>≤10 μm</td></tr>
      <tr><td>Relative crystallinity</td><td>≥90%</td></tr>
      <tr><td>BET surface area</td><td>≥380 m²/g</td></tr>
      <tr><td>T-plot micropore surface area</td><td>≥260 m²/g</td></tr>
      <tr><td>Total pore volume</td><td>0.25 ml/g</td></tr>
      <tr><td>T-plot micropore volume</td><td>0.12 ml/g</td></tr>
      <tr><td>Average pore diameter</td><td>2.5–3.0 nm</td></tr>
    </tbody>`,
    features:
      '<li>High silica — hydrophobic surface, works in humid exhaust</li><li>High thermal and hydrothermal stability</li><li>Good selective VOC adsorption</li><li>Strong acid resistance</li><li>Formed honeycomb blocks for low pressure drop</li>',
    applications:
      '<li>VOC adsorption concentration + catalytic oxidation systems</li><li>Low-concentration, large-flow VOC exhaust</li><li>Coating, printing and chemical process exhaust</li>',
    limitations:
      'Recommended application window: low VOC concentration, large gas flow, relative humidity below 60%, temperature below 50°C, superficial velocity ≤1 m/s and bed height around 800 mm. Not recommended without further evaluation: polymerizable compounds, halogens, heavy-metal salts and certain curing agents.',
    custom:
      'Formed products: 100×100×100 mm honeycomb blocks, 16 cells/cm² (*), wall thickness 0.6 mm, bulk density 0.40–0.45 g/cm³. Formed-product parameters marked (*) contain OCR ambiguities in the original documentation and must be confirmed before engineering use.',
    faqs: [
      {
        q: 'Why is ZSM-5 preferred for humid VOC exhaust?',
        a: 'Its high SiO₂/Al₂O₃ ratio makes the surface hydrophobic, so water vapor competes less for adsorption sites and VOCs are captured more selectively.',
      },
      {
        q: 'What VOCs can ZSM-5 adsorb?',
        a: 'Typical targets are benzene, toluene, xylene, alcohols, ketones, aldehydes, some esters and hydrocarbons. Polymerizable compounds, halogens and heavy-metal salts are not recommended without testing.',
      },
    ],
    crumbs: [{ name: 'Zeolite Molecular Sieves', href: '/products/zeolite-molecular-sieve/' }],
  },
  {
    slug: ['zeolite-molecular-sieve', 'nay'],
    name: 'NaY Molecular Sieve',
    h1: 'NaY Molecular Sieve',
    category: 'Zeolite Molecular Sieves',
    seoTitle: 'NaY Molecular Sieve | Xuanbao Environmental',
    metaDescription:
      'NaY zeolite molecular sieve with SiO₂/Al₂O₃ ≈100, BET surface area ≥700 m²/g, for VOC adsorption and catalytic support applications.',
    intro:
      'Y-type zeolite with high specific surface area and large pore volume, applied in VOC adsorption and catalyst support roles.',
    overview:
      'NaY offers a three-dimensional large-pore structure with very high BET surface area (≥700 m²/g), making it effective for VOC adsorption and as a catalyst / adsorbent support. It is available as powder and, where specified, formed products.',
    specs: `<thead><tr><th>Parameter</th><th>Specification</th></tr></thead><tbody>
      <tr><td>SiO₂/Al₂O₃</td><td>~100</td></tr>
      <tr><td>Na₂O</td><td>&lt;0.05 wt%</td></tr>
      <tr><td>Powder D50</td><td>3.5 μm</td></tr>
      <tr><td>Relative crystallinity</td><td>≥90%</td></tr>
      <tr><td>BET surface area</td><td>≥700 m²/g</td></tr>
      <tr><td>Total pore volume</td><td>0.5 ml/g</td></tr>
      <tr><td>Average pore diameter</td><td>3.0 nm</td></tr>
    </tbody>`,
    features:
      '<li>Very high specific surface area (≥700 m²/g)</li><li>Large pore volume (0.5 ml/g)</li><li>Good hydrothermal stability</li>',
    applications:
      '<li>VOC adsorption</li><li>Catalyst and adsorbent support</li><li>Gas purification and separation</li>',
    limitations:
      'Formed-product specifications for NaY are being confirmed by our R&D department; powder specifications above are as documented. Contact us for the current formed-product data sheet.',
    faqs: [
      {
        q: 'How does NaY compare with ZSM-5?',
        a: 'NaY has a larger pore system and higher surface area but is more hydrophilic and less acid-resistant than high-silica ZSM-5. Selection depends on humidity, VOC composition and regeneration conditions.',
      },
    ],
    crumbs: [{ name: 'Zeolite Molecular Sieves', href: '/products/zeolite-molecular-sieve/' }],
  },

  // ===== Activated Carbon =====
  {
    slug: ['activated-carbon', 'honeycomb-activated-carbon'],
    name: 'Honeycomb Activated Carbon',
    h1: 'Honeycomb Activated Carbon',
    category: 'Activated Carbon',
    seoTitle: 'Honeycomb Activated Carbon Manufacturer | Xuanbao Environmental',
    metaDescription:
      'Honeycomb activated carbon SFW-10 / SFW-5 with 600–900 mg/g iodine value and 700–1,000 m²/g BET surface area, low pressure drop for gas-phase VOC adsorption.',
    intro:
      'Formed honeycomb activated carbon with high contact area and relatively low airflow resistance for gas-phase pollutant adsorption.',
    overview:
      'Honeycomb activated carbon is formed from powdered activated carbon into a low-pressure-drop honeycomb structure. It is used where a large contact area is needed with limited fan power — typical of industrial VOC adsorption units. Two standard block sizes are offered: SFW-10 (100×100×100 mm) and SFW-5 (100×100×50 mm).',
    specs: `<thead><tr><th>Parameter</th><th>SFW-10</th><th>SFW-5</th></tr></thead><tbody>
      <tr><td>Size</td><td>100×100×100 mm</td><td>100×100×50 mm</td></tr>
      <tr><td>Iodine value</td><td>600–900 mg/g</td><td>600–900 mg/g</td></tr>
      <tr><td>BET surface area</td><td>700–1,000 m²/g</td><td>700–1,000 m²/g</td></tr>
      <tr><td>Moisture</td><td>≤10%</td><td>≤10%</td></tr>
      <tr><td>Ash</td><td>≤10%</td><td>≤10%</td></tr>
      <tr><td>CCl₄ adsorption</td><td>45–65%</td><td>45–65%</td></tr>
      <tr><td>Compressive strength</td><td>1.2 MPa</td><td>1.2 MPa</td></tr>
      <tr><td>Bulk density</td><td>~500 kg/m³ *</td><td>~500 kg/m³ *</td></tr>
      <tr><td>Benzene adsorption</td><td>25–35%</td><td>—</td></tr>
      <tr><td>Wall thickness</td><td>1 mm</td><td>—</td></tr>
      <tr><td>Pressure drop</td><td>~490 Pa *</td><td>—</td></tr>
    </tbody>`,
    features:
      '<li>Large contact area with low pressure drop</li><li>Good mechanical strength</li><li>Standard block formats, customizable sizes</li>',
    applications:
      '<li>Industrial VOC adsorption units</li><li>Odor control</li><li>Gas-phase purification</li>',
    limitations:
      'Carbon-based adsorbents are combustible — fire-safety measures and temperature limits apply during adsorption and regeneration. Saturated carbon requires replacement or regeneration and is managed as waste according to local regulations.',
    custom:
      'Block size and specifications can be customized to the equipment layout.',
    faqs: [
      {
        q: 'What is the typical pressure drop of honeycomb activated carbon?',
        a: 'The documented value is around 490 Pa (*, to be confirmed) under standard conditions — far lower than granular beds, which is why honeycomb blocks are used for high-flow, low-pressure-drop applications.',
      },
      {
        q: 'How often is the carbon replaced?',
        a: 'Replacement depends on inlet concentration, humidity, temperature and duty cycle. We help size the bed and estimate replacement intervals from your conditions.',
      },
    ],
    crumbs: [{ name: 'Activated Carbon', href: '/products/activated-carbon/' }],
  },
  {
    slug: ['activated-carbon', 'coal-based-columnar-carbon'],
    name: 'Coal-Based Columnar Activated Carbon',
    h1: 'Columnar Activated Carbon',
    category: 'Activated Carbon',
    seoTitle: 'Coal-Based Columnar Activated Carbon Manufacturer | Xuanbao',
    metaDescription:
      'Coal-based columnar activated carbon in 1.5–8 mm diameters, BET 600–1,000 m²/g, iodine 600–1,000 mg/g, for gas purification and industrial adsorption.',
    intro:
      'Extruded coal-based columnar activated carbon in 1.5 / 4 / 6 / 8 mm diameters for gas purification and industrial adsorption applications.',
    overview:
      'Produced from selected coal by crushing, blending, extrusion forming, carbonization and activation, columnar activated carbon offers high mechanical strength and good adsorption capacity, and is widely used in gas-phase purification and solvent recovery.',
    specs: `<thead><tr><th>Parameter</th><th>Typical range</th></tr></thead><tbody>
      <tr><td>Diameter</td><td>1.5 / 4 / 6 / 8 mm</td></tr>
      <tr><td>BET surface area</td><td>≥600–1,000 m²/g</td></tr>
      <tr><td>CCl₄ adsorption</td><td>≥40–65%</td></tr>
      <tr><td>Iodine value</td><td>≥600–1,000 mg/g</td></tr>
      <tr><td>Strength</td><td>≥93–96%</td></tr>
      <tr><td>Moisture</td><td>≤10%</td></tr>
      <tr><td>Bulk density</td><td>~500–700 g/L *</td></tr>
    </tbody>`,
    features:
      '<li>High mechanical strength</li><li>Multiple standard diameters</li><li>Good capacity for organic vapor adsorption</li>',
    applications:
      '<li>Industrial gas purification</li><li>Solvent recovery</li><li>Odor and VOC control</li>',
    limitations:
      'Carbon is combustible; temperature limits and fire-safety measures apply. Bulk density marked (*) is from original documentation and should be confirmed per batch.',
    faqs: [
      {
        q: 'Which diameter should I choose?',
        a: 'Smaller diameters give faster adsorption kinetics but higher pressure drop. We select the diameter from flow rate, bed geometry and pressure drop budget.',
      },
    ],
    crumbs: [{ name: 'Activated Carbon', href: '/products/activated-carbon/' }],
  },
  {
    slug: ['activated-carbon', 'coconut-shell-carbon'],
    name: 'Coconut-Shell Activated Carbon',
    h1: 'Coconut-Shell Activated Carbon',
    category: 'Activated Carbon',
    seoTitle: 'Coconut-Shell Activated Carbon | Xuanbao Environmental',
    metaDescription:
      'Coconut-shell activated carbon with high hardness and purity for gas purification, catalyst support, food decolorization, pharmaceutical and water purification.',
    intro:
      'High-hardness, high-purity activated carbon produced from coconut shell by carbonization, crushing, screening, steam activation and refining.',
    overview:
      'Coconut-shell activated carbon combines high hardness with low ash content, making it suitable for gas purification, catalyst support, food decolorization, pharmaceutical processing and water purification where purity and durability matter.',
    features:
      '<li>High hardness and low dusting</li><li>Low ash, high purity</li><li>Steam-activated microporous structure</li>',
    applications:
      '<li>Gas purification</li><li>Catalyst support</li><li>Food decolorization</li><li>Pharmaceutical applications</li><li>Water purification</li>',
    limitations:
      'For each application the correct grade (particle size, iodine value, hardness) must be specified; contact us with your target medium.',
    faqs: [
      {
        q: 'Why choose coconut-shell over coal-based carbon?',
        a: 'Coconut-shell carbon typically offers higher hardness, lower ash and a more microporous structure, which suits gas purification, catalyst support and food/pharma applications.',
      },
    ],
    crumbs: [{ name: 'Activated Carbon', href: '/products/activated-carbon/' }],
  },
  {
    slug: ['activated-carbon', 'activated-carbon-fiber'],
    name: 'Activated Carbon Fiber',
    h1: 'Activated Carbon Fiber',
    category: 'Activated Carbon',
    seoTitle: 'Activated Carbon Fiber | Xuanbao Environmental',
    metaDescription:
      'Activated carbon fiber for low-concentration gas-phase pollutant and odor adsorption — benzene, xylene, formaldehyde, methanol and dust filtration.',
    intro:
      'Fiber-form activated carbon filter material for low-concentration gas-phase pollutants, odors and combined dust filtration.',
    overview:
      'Activated carbon fiber provides fast adsorption kinetics in a flexible filter format, used for low-concentration VOC and odor control in air handling and ventilation systems.',
    features:
      '<li>Fast adsorption kinetics</li><li>Flexible filter formats</li><li>Low pressure drop</li>',
    applications:
      '<li>Odor removal</li><li>Benzene adsorption</li><li>Xylene adsorption</li><li>Formaldehyde adsorption</li><li>Methanol adsorption</li><li>Dust filtration (combined use)</li>',
    limitations:
      'Best suited to low-concentration, low-temperature gas streams; capacity is limited compared with granular beds and replacement cycles must be managed.',
    faqs: [
      {
        q: 'What concentrations suit activated carbon fiber?',
        a: 'Low-concentration streams — typical of indoor air handling, ventilation and light odor control. For concentrated industrial VOC streams, honeycomb or columnar carbon beds are usually more cost-effective.',
      },
    ],
    crumbs: [{ name: 'Activated Carbon', href: '/products/activated-carbon/' }],
  },
];

export const productBySlug: Record<string, Product> = Object.fromEntries(
  products.map((p) => [p.slug.join('/'), p])
);

export const categoryMeta: Record<
  string,
  { name: string; h1: string; seoTitle: string; metaDescription: string; intro: string; overview: string }
> = {
  'scr-denox-catalysts': {
    name: 'SCR DeNOx Catalysts',
    h1: 'SCR DeNOx Catalysts',
    seoTitle: 'SCR DeNOx Catalyst Manufacturer — Plate & Honeycomb | Xuanbao Environmental',
    metaDescription:
      'SCR denitrification catalysts for NOx removal in power, steel, cement and alumina flue gas — plate-type for high-dust gas, honeycomb with structures from 13×13 to 60×60.',
    intro:
      'Selective catalytic reduction (SCR) catalysts for NOx removal across industrial flue gas conditions.',
    overview:
      'SCR catalysts promote the reaction of NOx with ammonia to form nitrogen and water. Xuanbao supplies two structural families — plate-type and honeycomb — plus V-Mo-Ti formulation systems. The right choice depends on dust loading, temperature window, SO₂ concentration and reactor geometry.',
  },
  'voc-catalysts': {
    name: 'VOC Catalysts',
    h1: 'VOC Oxidation Catalysts',
    seoTitle: 'VOC Catalyst Manufacturer — Pt, Pt-Pd & Non-Precious Metal | Xuanbao',
    metaDescription:
      'VOC catalytic oxidation catalysts: platinum YC-XB-A, platinum-palladium YC-XB-B and non-precious-metal YC-XB-C on 200 cpsi cordierite honeycomb.',
    intro:
      'Honeycomb catalysts for catalytic oxidation (combustion) of VOCs at lower temperatures than thermal oxidation.',
    overview:
      'Three catalyst families cover different VOC compositions and budgets: single-metal Pt (YC-XB-A), bimetallic Pt-Pd (YC-XB-B) and non-precious-metal composite oxide (YC-XB-C). All are supplied on 200 cpsi cordierite honeycomb elements that assemble into larger beds.',
  },
  'zeolite-molecular-sieve': {
    name: 'Zeolite Molecular Sieves',
    h1: 'Zeolite Molecular Sieves',
    seoTitle: 'Zeolite Molecular Sieve Manufacturer — 5A, 13X, ZSM-5, NaY | Xuanbao',
    metaDescription:
      'Modified 5A, 13X, ZSM-5 and NaY zeolite molecular sieves for VOC adsorption concentration, gas drying, CO₂ adsorption and catalyst support applications.',
    intro:
      'Zeolite molecular sieves for selective adsorption, drying, separation and VOC concentration.',
    overview:
      'Xuanbao supplies A-type (5A), X-type (13X) and high-silica / Y-type zeolites (ZSM-5, NaY) with application-specific modification. High-silica ZSM-5 is the core adsorbent for zeolite-wheel VOC adsorption concentration systems.',
  },
  'activated-carbon': {
    name: 'Activated Carbon',
    h1: 'Activated Carbon Products',
    seoTitle: 'Activated Carbon Manufacturer — Honeycomb, Columnar, Coconut Shell, Fiber | Xuanbao',
    metaDescription:
      'Honeycomb, coal-based columnar, coconut-shell and fiber activated carbon for VOC adsorption, gas purification, solvent recovery and odor control.',
    intro:
      'Activated carbon products in honeycomb, columnar, coconut-shell and fiber forms for gas-phase adsorption.',
    overview:
      'Carbon adsorbents offer high capacity per unit cost and are widely used for VOC adsorption, solvent recovery and odor control. Form selection — honeycomb, columnar, coconut-shell or fiber — is driven by flow rate, pressure drop budget and regeneration method.',
  },
};
