# Source Register — Xuanbao Environmental (V3.0 Phase 2)

> Date: 2026-09-25 ｜ Updated: 2026-09-27 (CN registry research) ｜ Purpose: single source of truth for company/product claims before any content is published.
> Source classes: `COMPANY_BROCHURE` (company-provided, not independently verified) ｜ `OFFICIAL_COMPANY_SOURCE` (site/llms.txt/KB as published by company) ｜ `GOVERNMENT_SOURCE` ｜ `CERTIFICATION_SOURCE` ｜ `THIRD_PARTY_SOURCE` ｜ `PUBLIC_TECHNICAL_SOURCE` ｜ `UNVERIFIED`
> Status: VERIFIED / BROCHURE / NEEDS_CONFIRMATION / DO_NOT_USE

## 1. Company Facts

| # | Claim | Source | Status | Notes |
|---|---|---|---|---|
| C1 | Legal name: Yancheng Xuanbao Environmental Technology Co., Ltd. (CN registered name: 盐城萱宝环境科技有限公司 — ⚠️ 萱, not 轩) | OFFICIAL_COMPANY_SOURCE + THIRD_PARTY_SOURCE (CN registries) | VERIFIED | Use full English name in schema/footer/About; if Chinese text is ever needed, use 萱宝 |
| C2 | Short brand: Xuanbao Environmental | OFFICIAL_COMPANY_SOURCE | VERIFIED | V3.0 §43 |
| C3 | Location: Yancheng (company name) | OFFICIAL_COMPANY_SOURCE | VERIFIED | CN registry shows registered office 盐城市亭湖区环保大道198号1幢165室 — registered address only, NOT factory; keep street address off the site |
| C4 | Main site: xuanbaoenvironment.com; KB: data.xuanbaoenvironment.com | OFFICIAL_COMPANY_SOURCE | VERIFIED | |
| C5 | Email: 625534887@qq.com | OFFICIAL_COMPANY_SOURCE (site) | VERIFIED | Do not invent corporate email |
| C6 | Phone/WhatsApp: +86 151 6936 1313 | OFFICIAL_COMPANY_SOURCE (site) | VERIFIED | |
| C7 | Contact person "Ms. Chen" | UNVERIFIED (placeholder on site) | DO_NOT_USE | Replaced by "International Sales & Technical Support" (§39) |
| C8 | Founding year: 2020 (registered 2020-05-12) | THIRD_PARTY_SOURCE (CN registries — aiqicha, qcc, Boss Zhipin agree) | VERIFIED | tianyancha snapshot shows 2020-05-11 (stale); publish "founded in 2020" only |
| C9 | Production capacity (t/y), factory area | — | NEEDS_CONFIRMATION | Not in CN public registries either; never invent (§50) |
| C10 | Certifications (ISO etc.) | — | NEEDS_CONFIRMATION | None claimed on site nor found in CN registries; do not add |
| C11 | Customers / export countries | — | NEEDS_CONFIRMATION | Not published anywhere; site says "international industrial customers" only in FAQ — keep at that level |
| C12 | "High-tech environmental materials company" (vision) | COMPANY_BROCHURE (About page) | BROCHURE | Usable as company-stated vision, not as verified fact |
| C13 | University/research cooperation | COMPANY_BROCHURE (R&D page) | BROCHURE | Already phrased "details disclosed with formal agreements" — keep that hedge |
| C14 | Products: SCR catalysts, CO catalyst, VOC catalysts, zeolite sieves, activated carbon, heating components | OFFICIAL_COMPANY_SOURCE (products.ts) | VERIFIED | 14 product entries + heating components |
| C15 | Industries served (12): power, steel, sintering, cement, alumina, petrochemical, chemical, printing, coating, pharma, automotive, waste incineration | OFFICIAL_COMPANY_SOURCE (industries.ts) | VERIFIED | |
| C16 | Legal representative: 于洪玲 (Yu Hongling) | THIRD_PARTY_SOURCE (CN registries: aiqicha, qcc) | VERIFIED | tianyancha stale snapshot lists 王荣 — treat as superseded; do not publish on site |
| C17 | Registered capital: RMB 2,000,000; insured employees: 1 (small/micro enterprise) | THIRD_PARTY_SOURCE (qcc) | VERIFIED | Size/capital claims stay OFF the site |
| C18 | Registry business scope: goods import/export, engineering & technical R&D, environmental consulting, water/air pollution treatment, environmental equipment sales, specialty ceramics, specialty chemicals (non-hazardous) | THIRD_PARTY_SOURCE (gsxt-derived: jiuchutong, qcc) | VERIFIED | Consistent with site scope; import/export registration backs trade content |
| C19 | Risk record: 2 judicial cases, 1 judgment document, 2 case filings | THIRD_PARTY_SOURCE (qcc) | VERIFIED as record | Case details not publicly retrievable; do not discuss on site |
| C20 | B2B listing (easycarbon.cn): wood/coal/honeycomb/coconut-shell AC, catalysts, off-gas consumables, DeSOx/DeNOx, solvent recovery, water treatment, food decolorization | THIRD_PARTY_SOURCE (B2B platform) | VERIFIED | Corroborates C14 scope; CN contacts 宋经理/崔经理 — do NOT use on EN site |
| C21 | Business scope confirmed by company (owner, 2026-09-27): granular & powdered AC; nut-shell/bamboo/wood AC; gold-recovery AC; water-treatment AC | COMPANY_BROCHURE (owner confirmation) | BROCHURE | Usable as company-stated scope; gold-recovery AC not yet on site — new product page candidate |

## 2. Product Specifications

| # | Claim | Source | Status | Notes |
|---|---|---|---|---|
| P1 | Plate SCR: V-Mo-Ti, 150–420°C, ≥90% DeNOx | OFFICIAL_COMPANY_SOURCE | VERIFIED | Pitch 5.6–7.4 mm; several (*) values have OCR/unit ambiguity — keep markers |
| P2 | Honeycomb SCR: 13×13…60×60, SSA 302–1,347 m²/m³ | OFFICIAL_COMPANY_SOURCE | VERIFIED | Table reproduced from company data |
| P3 | CO catalyst: 150–600°C, 10k–15k h⁻¹, cordierite/alumina | OFFICIAL_COMPANY_SOURCE | VERIFIED | "up to ≥95%" marked (*) |
| P4 | VOC YC-XB-A/B/C: 200 cpsi cordierite 100×100×50, temps 220–600 / 240–400 / 260–450°C | OFFICIAL_COMPANY_SOURCE | VERIFIED | concentration/conversion/lifetime marked (*) |
| P5 | ZSM-5: SiO₂/Al₂O₃ ≈300, BET ≥380 m²/g, D50 ≤10 μm | OFFICIAL_COMPANY_SOURCE | VERIFIED | |
| P6 | NaY: SiO₂/Al₂O₃ ≈100, BET ≥700 m²/g | OFFICIAL_COMPANY_SOURCE | VERIFIED | formed-product spec "being confirmed by R&D" — keep |
| P7 | 5A / 13X: modification per application | OFFICIAL_COMPANY_SOURCE | VERIFIED | no numeric spec published |
| P8 | Honeycomb AC SFW-10/SFW-5: iodine 600–900, BET 700–1,000 | OFFICIAL_COMPANY_SOURCE | VERIFIED | some (*) values |
| P9 | Columnar AC: 1.5/4/6/8 mm, BET ≥600–1,000, iodine ≥600–1,000 | OFFICIAL_COMPANY_SOURCE | VERIFIED | |
| P10 | Coconut-shell AC: hardness/purity claims, no numbers | OFFICIAL_COMPANY_SOURCE | VERIFIED | no numeric spec published |
| P11 | AC fiber: benzene/xylene/formaldehyde/methanol/odor | OFFICIAL_COMPANY_SOURCE | VERIFIED | |
| P12 | Heating components: no public spec | OFFICIAL_COMPANY_SOURCE | VERIFIED | "specified per project" — keep |

## 3. Case Study Field Data (§51 policy)

| # | Claim | Source | Status | Notes |
|---|---|---|---|---|
| F1 | Sintering machine: CO 1,499 → 18 ppm, 2022-08-23 (≈98.8% reduction) | OFFICIAL_COMPANY_SOURCE (cases.ts) | VERIFIED | Never phrase as guarantee; "under the stated test conditions" |
| F2 | Medical waste incinerator: CO 11,224.2 → 16.2 mg/Nm³, 2023-03-20 (≈99.86%) | OFFICIAL_COMPANY_SOURCE (cases.ts) | VERIFIED | Same restriction |
| F3 | Flow, temperature, SO₂, dust, catalyst volume for F1/F2 | — | NEEDS_CONFIRMATION | Do NOT invent (§29) |

## 4. Technical Knowledge Claims

| # | Topic | Source | Status |
|---|---|---|---|
| T1 | SCR/CO/VOC/zeolite/AC engineering content | KB (`data.xuanbaoenvironment.com`, 72 pages) | PUBLIC_TECHNICAL_SOURCE (company-published) |
| T2 | Chinese technical sources for future articles | per chinese-web-research skill | to be cited per-article |
| T3 | R&D capabilities: BET, XRF, XRD, ICP, dynamic simulation | OFFICIAL_COMPANY_SOURCE (R&D page) | VERIFIED as claimed; equipment photos not available |
| T4 | Manufacturing: 3 catalyst process lines | OFFICIAL_COMPANY_SOURCE (manufacturing page) | VERIFIED; AC production line details NOT published — do not imply one |

## 5. Rules Locked by This Register

- §50 Technical Claim Policy: never invent capacity/area/exports/customers/certs/patents/equipment/test results/specs/efficiencies/lifetime.
- §51 Case Data Policy: always date + inlet/outlet + units; never universal guarantee.
- §52 Comparison Policy: no universal ranking between raw materials; use factor tables.
- §53 Terminology: primary term "activated carbon"; "bamboo charcoal ≠ bamboo activated carbon".
- Values with (*) in products.ts stay marked as OCR/unverified-reference values.
