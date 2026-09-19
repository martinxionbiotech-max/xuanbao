// Extra long-form content sections injected into industry / solution / case pages.
// Kept separate from the main data files so page depth can be tuned independently.

export const industryDetails: Record<string, string> = {
  'thermal-power': `
<p>In a typical coal-fired unit the SCR reactor sits between the economizer and the air preheater — the high-dust
position — where it sees the full fly ash load at 300–400°C. Catalyst geometry therefore matters as much as
chemistry: large-pitch plate elements resist plugging and erosion, and the spare layer position is planned from
day one so that future replacement does not force a full reactor rebuild.</p>
<p>Ammonia injection and mixing determine how much of the installed catalyst is actually used. A badly tuned AIG
creates local ammonia-rich and ammonia-starved zones — the plant then over-injects to hold NOx compliance and pays
for it in ammonium bisulfate fouling downstream. For this reason we recommend measuring the velocity and NOx
distribution at the reactor inlet before finalizing catalyst volume.</p>
<p>Fuel quality drives deactivation: high-arsenic coals poison pores irreversibly, while alkali-rich fuels
neutralize acid sites. The same DeNOx target can require 20–40% more catalyst volume on a difficult fuel, which is
a material-selection decision rather than a price decision.</p>`,
  steel: `
<p>Steel plants generate NOx and CO from multiple sources — sintering machines, coke ovens, reheat furnaces and
pelletizing lines — each with a different temperature window and dust profile. There is no single catalyst that
fits all of them; the correct approach treats each source as its own duty.</p>
<p>Sintering machine exhaust is the largest and most difficult stream: moderate temperature, thousands of ppm of
CO, SO₂, moisture and residual dust after the electrostatic precipitator. A combined CO oxidation plus SCR layout
is common, with the CO catalyst sized for the exotherm of a concentrated stream and the SCR catalyst chosen for
dust tolerance.</p>
<p>Because steel production is continuous and outages are expensive, replacement planning matters. We track the
pressure drop and conversion trends with the plant and recommend ordering the spare layer before the active layer
crosses its deactivation limit.</p>`,
  sintering: `
<p>Sintering machine flue gas combines three hard conditions at once: large flow, moderate temperature and a gas
that contains CO, SO₂, moisture and dust simultaneously. The CO concentration itself fluctuates with the sintering
bed, so catalyst duty is dynamic rather than steady-state.</p>
<p>CO oxidation and SCR are frequently deployed together. The CO catalyst typically works at the temperature
available downstream of dedusting; if the stream is too cold for light-off, heating-tube catalyst systems or
partial heat recovery are used to bridge the gap. SCR follows with dust-tolerant geometry.</p>
<p>Field experience on sintering exhaust shows that inlet CO can swing by an order of magnitude within hours. The
reactor must therefore be sized for the peak load, not the average, and the catalyst must survive repeated
excursions without thermal damage.</p>`,
  cement: `
<p>Cement kiln exhaust is high in temperature, dust and alkali — the classic hard duty for SCR catalysts. Kiln dust
contains potassium and sodium that neutralize catalyst acid sites, so deactivation runs faster than in power-plant
flue gas unless the design anticipates it.</p>
<p>Catalyst placement options include high-dust (between preheater stages), low-dust (after the dust filter) and
tail-end positions. High-dust placement avoids reheating but exposes the catalyst to the full alkali load;
low-dust placement protects the catalyst but may need temperature boosting. The economics differ plant by plant.</p>
<p>Dust abrasiveness also drives geometry: plate-type elements with reinforced leading edges are the standard
answer where the dust load is high, while honeycomb is reserved for clean positions.</p>`,
  alumina: `
<p>Alumina calcination and roasting lines emit NOx in high-temperature process gas with a dust that is abrasive
and chemically reactive. The SCR system must sit at a point in the process where the temperature is inside the
catalyst window and the dust has been largely removed.</p>
<p>Because alumina plants often operate continuously with limited outage windows, catalyst layer management
follows the same principle as power plants: a spare layer position, planned layer replacement and pressure drop
monitoring to catch plugging early.</p>
<p>Where CO is also present — roasting off-gas can carry significant CO — a combined CO oxidation + SCR sequence
is evaluated on the actual gas data before design.</p>`,
  petrochemical: `
<p>Petrochemical vents are compositionally complex: VOCs, NOx, CO and process-specific trace species may share the
same stream, and the composition can change when the unit changes product. Catalyst selection must start from a
species-level analysis of the actual gas, not a generic "VOC" number.</p>
<p>Catalyst poisons deserve special attention in this industry. Sulfur species poison precious metals; halogenated
traces attack washcoats; silicones from sealants and maintenance materials can kill a VOC catalyst in weeks. The
poison check happens before the catalyst choice, not after failure.</p>
<p>Flaring remains common for discontinuous vents; catalytic oxidation becomes attractive for continuous, moderate
concentration streams where the exotherm covers the preheating demand.</p>`,
  chemical: `
<p>Chemical process exhaust spans an enormous range — from dilute, nearly clean vents to concentrated streams that
are close to flammability limits. Concentration determines the technology zone: below roughly 1 g/Nm³ adsorption
economics dominate, 1–4 g/Nm³ is the catalytic oxidation sweet spot, and above that thermal oxidation or
oxidation with heat recovery takes over.</p>
<p>Halogenated and sulfur-containing VOCs require either upstream scrubbing or dedicated catalyst formulations;
siloxanes and heavy metals must be excluded before a catalytic unit. Where the species list is unknown, we
recommend a measurement campaign before committing to a system.</p>
<p>Batch operations add a cold-start dimension: the catalyst must light off quickly each campaign, so pre-heating
and light-off margin are part of the design basis.</p>`,
  printing: `
<p>Printing exhaust is a classic high-flow, low-concentration VOC stream: large volumes of air carrying solvents at
a few hundred milligrams per cubic meter. Treating the entire flow by direct oxidation is fuel-expensive, which is
why adsorption concentration — carbon or zeolite — combined with a small oxidizer is the standard architecture.</p>
<p>The solvent mix matters. Ethanol and ethyl acetate desorb easily; high boilers accumulate and foul adsorbents.
Humidity from drying sections displaces VOC on hydrophilic adsorbents, favoring hydrophobic zeolites in humid
lines.</p>
<p>Where the plant runs continuously and the stream is clean, catalytic oxidation with regenerative heat recovery
(RCO) delivers the lowest operating cost; intermittent lines lean toward adsorption or quick-light-off catalytic
units.</p>`,
  coating: `
<p>Coating and paint shops emit VOCs from spraying and drying, often at low concentration but with significant
particulate — overspray mist — that must be filtered before any catalyst or adsorbent bed. Paint mist is the
fastest way to blind a honeycomb catalyst face.</p>
<p>The VOC species list includes aromatics, esters, ketones and glycol ethers. Ketones deserve special attention
on activated carbon: their adsorption exotherm can push a poorly ventilated bed toward ignition. Zeolite or
catalytic routes are preferred for ketone-rich streams.</p>
<p>Two-stage treatment is common: dry filtration plus adsorption concentration, followed by catalytic oxidation of
the concentrate. The concentration ratio — typically 5–15× — is set by the VOC load and the adsorbent's desorption
characteristics.</p>`,
  pharmaceutical: `
<p>Pharmaceutical vents mix solvents, process variability and strict compliance. Streams are often intermittent —
batch reactors vent at different points of a cycle — so the treatment system must handle wide flow and
concentration swings without losing destruction efficiency.</p>
<p>Solvent recovery is sometimes economically interesting in this industry; adsorption with regeneration can
return solvent value while meeting emission limits. Where recovery is not justified, catalytic oxidation with
strong light-off performance handles the intermittent duty.</p>
<p>Species-level analysis is essential: halogenated solvents require scrubbing or special oxidizer designs, and
catalyst poisons from process aids must be identified before system selection.</p>`,
  automotive: `
<p>Automotive plants emit VOCs from paint shops — spray booths, ovens and curing lines — plus smaller streams from
degreasing and component coating. Paint shop exhaust is the dominant source and shares the coating-industry
challenges: overspray particulate, mixed solvents and large dilute flows.</p>
<p>Oven exhausts are hot enough for direct catalytic oxidation; spray booth exhaust is near ambient and suits
adsorption concentration. A combined design — concentration wheels or carbon beds feeding one oxidizer — is the
industry-standard architecture for large plants.</p>
<p>Production schedules vary by shift, so the system must run efficiently at partial load; that favors equipment
with good turndown and fast light-off.</p>`,
  'waste-incineration': `
<p>Waste incineration flue gas is the most aggressive stream in emission control: HCl, SO₂, heavy metals, dioxin
precursors, dynamic CO spikes and moisture in one gas. Catalysts and adsorbents are placed downstream of the
dedicated gas-cleaning stages — acid scrubbers, bag filters and reagent injection — never in the raw gas.</p>
<p>CO is both a pollutant and a combustion-quality signal; plants use CO oxidation catalyst as a polishing stage
and monitor CO spikes as evidence of incomplete burnout. Dioxin control is typically handled by activated carbon
injection or fixed-bed polishing upstream of the stack.</p>
<p>Every material in this service needs a defined replacement cycle: carbon saturates in months, catalyst faces
chloride and metal exposure, and bag filters carry the particulate load. Lifecycle budgeting is part of the
design.</p>`,
};

export const solutionDetails: Record<string, string> = {
  'scr-denox': `
<p>SCR project economics are dominated by three inputs: catalyst volume, ammonia consumption and outage planning.
Catalyst volume is set by the required conversion, the operating temperature window and the poisoning margin for
the actual fuel; ammonia consumption follows the NH₃/NOx ratio needed to hold that conversion with acceptable
slip.</p>
<p>Before sizing, we ask for the fuel analysis (sulfur, arsenic, alkali), the flue gas conditions at the reactor
position and the measured velocity distribution. These determine geometry (plate vs honeycomb), pitch and volume
margin more than any catalogue number.</p>`,
  'co-removal': `
<p>CO removal projects live or die on the temperature profile. If the stream at the treatment point sits below the
catalyst light-off temperature, the system needs pre-heating — electric heating tubes, heat exchange or process
integration — which becomes part of the capital and operating cost.</p>
<p>The CO range matters as much as the average: streams that spike during batch charging or upset conditions must
be sized for the peak, and the catalyst must tolerate the associated temperature swings without thermal shock
damage.</p>`,
  'voc-catalytic-oxidation': `
<p>A VOC catalytic oxidation project starts with the species list. The total VOC number tells you the heat
balance; the species list tells you the catalyst chemistry and the deactivation risks. Silicones, halogens and
heavy metals are the showstoppers that must be screened before committing to catalytic oxidation.</p>
<p>For clean streams in the 1–4 g/Nm³ range, the reaction exotherm covers preheating at steady state, and
regenerative heat recovery (RCO) drives fuel consumption close to zero. The design check is the adiabatic
temperature rise at the maximum concentration — it must stay inside the catalyst's safe window.</p>`,
  'adsorption-catalytic-combustion': `
<p>Combining adsorption concentration with catalytic combustion splits the problem into two solvable halves: the
adsorbent handles a large dilute flow at near-ambient temperature, and the oxidizer handles a small concentrated
flow where the exotherm pays for itself.</p>
<p>The design hinge is the concentration ratio and the desorption energy. Higher ratios shrink the oxidizer but
raise desorption temperature and incomplete-desorption risk; the optimum usually sits between 5× and 15× depending
on the VOC boiling range.</p>`,
  'molecular-sieve-adsorption-concentration': `
<p>Zeolite-based concentration suits streams that defeat activated carbon: humid exhausts, ketone-bearing vents
and applications where the adsorbent must survive hundreds of thermal desorption cycles. The hydrophobic
high-silica zeolites hold working capacity at high relative humidity and cannot burn — the two properties that
decide the carbon-versus-zeolite question.</p>
<p>The rotor design parameters — rotation speed, desorption temperature and zone sizing — are set from the VOC
boiling range and the required concentration ratio. Light solvents desorb too easily and slip through; heavy
species foul the rotor unless pre-treated.</p>`,
};

export const caseDetails: Record<string, string> = {
  'sintering-machine-co-removal': `
<p>What the record shows is a point measurement: CO at the catalyst outlet reduced from a reported inlet of
1,499 ppm to 18 ppm under the test conditions of 2022-08-23. What a full evaluation needs is the accompanying
context — flow rate, temperature profile, oxygen content, moisture, SO₂ and dust at the test position — to convert
a point result into a sizing basis.</p>
<p>For engineering follow-up we recommend a repeat measurement campaign that captures the CO range over normal
operation, including charge cycles and upset periods, plus catalyst inlet/outlet temperature. That data supports
reactor sizing for the peak rather than the average.</p>`,
  'medical-waste-incinerator-co-removal': `
<p>The reported field data — CO reduced from 11,224.2 mg/Nm³ to 16.2 mg/Nm³ on 2023-03-20 — was measured on a
medical waste incinerator, a stream that also carries HCl, SO₂, heavy metals and moisture. Catalyst survival in
this duty depends on the upstream gas cleaning: the acid and particulate removal stages protect the catalyst from
rapid poisoning and blinding.</p>
<p>For a permanent installation, the follow-up questions are the operating temperature at the catalyst position,
the CO spike behaviour during batch charging, and the expected chloride exposure — all of which set the
deactivation margin in the sizing calculation.</p>`,
};
