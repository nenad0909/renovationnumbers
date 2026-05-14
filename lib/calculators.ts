import type { CalculatorDefinition } from "./types";

const commonDisclaimer =
  "This calculator provides a general estimate for planning purposes only. Actual costs may vary based on your location, labor rates, material choices, permits, contractor pricing, and project complexity. This is not professional construction, financial, or legal advice.";

export const calculatorDefinitions: CalculatorDefinition[] = [
  {
    slug: "kitchen-remodel-cost-calculator",
    name: "Kitchen Remodel Cost Calculator",
    shortName: "Kitchen Remodel",
    category: "Interior Remodeling",
    description: "Estimate cabinets, counters, flooring, appliances, labor, permits, and other kitchen renovation costs.",
    title: "Kitchen Remodel Cost Calculator | Estimate Renovation Costs",
    metaDescription:
      "Use our free kitchen remodel cost calculator to estimate cabinet, countertop, flooring, appliance, labor, and permit costs before starting your renovation.",
    intro:
      "Use this kitchen remodel cost calculator to build a planning estimate for a basic refresh, mid-range renovation, or higher-end kitchen upgrade. Adjust the main cost drivers before you talk with contractors.",
    fields: [
      { name: "size", label: "Kitchen size", type: "number", defaultValue: 180, min: 40, max: 700, step: 5, unit: "sq ft" },
      {
        name: "level",
        label: "Remodel level",
        type: "select",
        defaultValue: "mid",
        options: [
          { label: "Basic", value: "basic" },
          { label: "Mid-range", value: "mid" },
          { label: "High-end", value: "high" }
        ]
      },
      {
        name: "cabinets",
        label: "Cabinet work",
        type: "select",
        defaultValue: "reface",
        options: [
          { label: "Repaint", value: "repaint" },
          { label: "Reface", value: "reface" },
          { label: "Replace", value: "replace" }
        ]
      },
      {
        name: "countertops",
        label: "Countertop type",
        type: "select",
        defaultValue: "quartz",
        options: [
          { label: "Laminate", value: "laminate" },
          { label: "Butcher block", value: "butcher" },
          { label: "Quartz", value: "quartz" },
          { label: "Granite", value: "granite" },
          { label: "Premium stone", value: "stone" }
        ]
      },
      {
        name: "flooring",
        label: "Flooring type",
        type: "select",
        defaultValue: "lvp",
        options: [
          { label: "Vinyl plank", value: "lvp" },
          { label: "Laminate", value: "laminate" },
          { label: "Tile", value: "tile" },
          { label: "Hardwood", value: "hardwood" }
        ]
      },
      { name: "applianceBudget", label: "Appliance budget", type: "number", defaultValue: 6500, min: 0, max: 50000, step: 250, unit: "$" },
      { name: "laborMultiplier", label: "Labor multiplier", type: "range", defaultValue: 1.05, min: 0.75, max: 1.6, step: 0.05 },
      { name: "permitAllowance", label: "Permit and inspection allowance", type: "number", defaultValue: 1200, min: 0, max: 10000, step: 100, unit: "$" }
    ],
    assumptions: [
      "Cabinet pricing assumes an average kitchen layout with standard wall and base cabinets.",
      "Countertop quantity is estimated from kitchen square footage and typical counter runs.",
      "Labor multiplier represents local labor rates and project complexity.",
      commonDisclaimer
    ],
    content: {
      affectsCost: ["Cabinet replacement is often the largest single line item.", "Stone counters, layout changes, electrical work, and plumbing changes can raise the estimate quickly.", "Older homes may require code updates before finishes can be installed."],
      reduceCost: ["Keep the existing layout when possible.", "Reface or repaint cabinets if the boxes are in good condition.", "Choose durable mid-range materials instead of custom premium finishes."],
      callProfessional: ["Call licensed pros for electrical, plumbing, gas, structural changes, and permit questions.", "Get multiple itemized bids so you can compare scope, not just totals."],
      mistakes: ["Comparing bids that include different cabinet grades.", "Forgetting delivery, disposal, permits, and temporary kitchen costs.", "Skipping contingency for hidden wall or subfloor issues."],
      example: "A 180 sq ft mid-range kitchen with refaced cabinets, quartz counters, vinyl plank flooring, and a $6,500 appliance budget produces a planning range that can be adjusted for local labor."
    },
    related: ["bathroom-remodel-cost-calculator", "flooring-cost-calculator", "paint-cost-calculator", "home-renovation-budget-calculator"]
  },
  {
    slug: "bathroom-remodel-cost-calculator",
    name: "Bathroom Remodel Cost Calculator",
    shortName: "Bathroom Remodel",
    category: "Interior Remodeling",
    description: "Plan tile, vanity, fixture, plumbing, labor, and permit allowances for bathroom remodels.",
    title: "Bathroom Remodel Cost Calculator | Estimate Bathroom Renovation Costs",
    metaDescription:
      "Estimate bathroom remodel costs for half baths, full baths, and primary bathrooms with tile, vanity, plumbing, labor, and fixture assumptions.",
    intro:
      "This bathroom remodel calculator helps you estimate a planning budget for small powder rooms, full bathrooms, and primary bath renovations.",
    fields: [
      { name: "size", label: "Bathroom size", type: "number", defaultValue: 70, min: 20, max: 250, step: 5, unit: "sq ft" },
      {
        name: "bathType",
        label: "Bathroom type",
        type: "select",
        defaultValue: "full",
        options: [
          { label: "Half bath", value: "half" },
          { label: "Full bath", value: "full" },
          { label: "Primary bath", value: "primary" }
        ]
      },
      {
        name: "level",
        label: "Remodel level",
        type: "select",
        defaultValue: "mid",
        options: [
          { label: "Basic", value: "basic" },
          { label: "Mid-range", value: "mid" },
          { label: "High-end", value: "high" }
        ]
      },
      {
        name: "tileLevel",
        label: "Tile level",
        type: "select",
        defaultValue: "standard",
        options: [
          { label: "Budget", value: "budget" },
          { label: "Standard", value: "standard" },
          { label: "Premium", value: "premium" }
        ]
      },
      {
        name: "vanityLevel",
        label: "Vanity level",
        type: "select",
        defaultValue: "standard",
        options: [
          { label: "Stock", value: "stock" },
          { label: "Standard", value: "standard" },
          { label: "Custom", value: "custom" }
        ]
      },
      { name: "plumbingChanges", label: "Move plumbing lines", type: "boolean", defaultValue: false },
      { name: "laborMultiplier", label: "Labor multiplier", type: "range", defaultValue: 1, min: 0.75, max: 1.6, step: 0.05 }
    ],
    assumptions: ["Fixtures include toilet, faucets, shower hardware, ventilation, and basic accessories.", "Plumbing changes add allowance for moving supply or drain lines.", commonDisclaimer],
    content: {
      affectsCost: ["Tile coverage, waterproofing details, and plumbing changes are major cost drivers.", "Primary bathrooms usually need more fixtures, cabinetry, and finish labor.", "Permit requirements and labor rates vary by city."],
      reduceCost: ["Keep drains and supply lines in place.", "Use tile selectively and paint the remaining wall area.", "Choose a stock or semi-custom vanity in a standard size."],
      callProfessional: ["Waterproofing, electrical, ventilation, and plumbing should be handled by qualified professionals.", "Contractor bids should clearly identify what is included in demolition, disposal, and fixtures."],
      mistakes: ["Underestimating waterproofing work.", "Buying fixtures before confirming rough-in dimensions.", "Forgetting ventilation, lighting, mirrors, and accessories."],
      example: "A 70 sq ft full bathroom with standard tile and vanity selections can be modeled with or without plumbing changes to compare layout options."
    },
    related: ["kitchen-remodel-cost-calculator", "paint-cost-calculator", "flooring-cost-calculator", "home-renovation-budget-calculator"]
  },
  {
    slug: "roof-replacement-cost-calculator",
    name: "Roof Replacement Cost Calculator",
    shortName: "Roof Replacement",
    category: "Exterior Projects",
    description: "Estimate roofing material, labor, tear-off, roof complexity, and permit allowances.",
    title: "Roof Replacement Cost Calculator | Estimate Roofing Costs",
    metaDescription:
      "Estimate roof replacement costs by roof size, material, pitch, tear-off needs, and regional labor assumptions.",
    intro:
      "Use this roof replacement calculator to estimate a roofing project before requesting bids. Roof shape, pitch, material, and tear-off needs can substantially affect the final price.",
    fields: [
      { name: "size", label: "Roof size", type: "number", defaultValue: 2200, min: 300, max: 9000, step: 50, unit: "sq ft" },
      {
        name: "material",
        label: "Roofing material",
        type: "select",
        defaultValue: "asphalt",
        options: [
          { label: "Asphalt shingles", value: "asphalt" },
          { label: "Metal", value: "metal" },
          { label: "Tile", value: "tile" },
          { label: "Slate", value: "slate" }
        ]
      },
      {
        name: "pitch",
        label: "Roof pitch",
        type: "select",
        defaultValue: "standard",
        options: [
          { label: "Low", value: "low" },
          { label: "Standard", value: "standard" },
          { label: "Steep", value: "steep" }
        ]
      },
      { name: "tearOff", label: "Tear-off required", type: "boolean", defaultValue: true },
      { name: "laborMultiplier", label: "Region and labor multiplier", type: "range", defaultValue: 1, min: 0.75, max: 1.75, step: 0.05 }
    ],
    assumptions: ["Roof area should include slope, overhangs, waste, and accessory areas when known.", "Complex roofs with valleys, dormers, skylights, or steep slopes require more labor.", commonDisclaimer],
    content: {
      affectsCost: ["Material choice has a wide range, from asphalt shingles to slate.", "Steep pitch, multiple layers, damaged decking, and difficult access increase labor.", "Local codes may require underlayment, ventilation, or permit upgrades."],
      reduceCost: ["Schedule during a less busy season if local demand allows.", "Compare material warranties and installation requirements.", "Clarify whether decking repairs are included or priced separately."],
      callProfessional: ["Roofing work is safety-sensitive and typically requires licensed, insured contractors.", "Ask contractors to inspect flashing, ventilation, and roof deck condition."],
      mistakes: ["Using home floor area instead of roof surface area.", "Ignoring tear-off, disposal, flashing, and ventilation.", "Choosing a bid without checking insurance and warranty terms."],
      example: "A 2,200 sq ft asphalt shingle roof with standard pitch and tear-off included can be compared against metal roofing by changing one field."
    },
    related: ["solar-savings-calculator", "paint-cost-calculator", "home-renovation-budget-calculator", "deck-cost-calculator"]
  },
  {
    slug: "flooring-cost-calculator",
    name: "Flooring Cost Calculator",
    shortName: "Flooring",
    category: "Interior Remodeling",
    description: "Estimate new flooring material, installation, removal, and complexity costs.",
    title: "Flooring Cost Calculator | Estimate Installation Costs",
    metaDescription:
      "Estimate flooring installation costs for carpet, vinyl plank, laminate, hardwood, tile, and engineered wood with removal and complexity options.",
    intro:
      "This flooring calculator estimates material, installation, and old-floor removal costs for common flooring projects.",
    fields: [
      { name: "size", label: "Area", type: "number", defaultValue: 500, min: 50, max: 6000, step: 25, unit: "sq ft" },
      {
        name: "flooring",
        label: "Flooring type",
        type: "select",
        defaultValue: "lvp",
        options: [
          { label: "Carpet", value: "carpet" },
          { label: "Vinyl plank", value: "lvp" },
          { label: "Laminate", value: "laminate" },
          { label: "Hardwood", value: "hardwood" },
          { label: "Tile", value: "tile" },
          { label: "Engineered wood", value: "engineered" }
        ]
      },
      {
        name: "quality",
        label: "Material quality",
        type: "select",
        defaultValue: "standard",
        options: [
          { label: "Budget", value: "budget" },
          { label: "Standard", value: "standard" },
          { label: "Premium", value: "premium" }
        ]
      },
      { name: "removeOld", label: "Remove old flooring", type: "boolean", defaultValue: true },
      {
        name: "complexity",
        label: "Installation complexity",
        type: "select",
        defaultValue: "standard",
        options: [
          { label: "Simple open area", value: "simple" },
          { label: "Standard rooms", value: "standard" },
          { label: "Complex layout", value: "complex" }
        ]
      }
    ],
    assumptions: ["Waste factor is included in the estimate.", "Subfloor repair, leveling, transitions, and stairs may add cost.", commonDisclaimer],
    content: {
      affectsCost: ["Tile and hardwood usually require more skilled labor than carpet or click-lock flooring.", "Small rooms, closets, transitions, and stairs increase installation time.", "Subfloor condition can change the final bid."],
      reduceCost: ["Prepare rooms before installation.", "Use standard plank sizes and avoid complicated patterns.", "Ask whether removal and disposal can be separated from installation pricing."],
      callProfessional: ["Call a pro for moisture issues, uneven subfloors, tile waterproofing, stairs, and large hardwood installations.", "Get written details on underlayment, trim, transitions, and disposal."],
      mistakes: ["Forgetting waste and attic or closet areas.", "Comparing material-only prices to installed prices.", "Skipping acclimation requirements for wood products."],
      example: "A 500 sq ft standard vinyl plank installation with old-floor removal gives a quick planning total and per-square-foot benchmark."
    },
    related: ["paint-cost-calculator", "kitchen-remodel-cost-calculator", "bathroom-remodel-cost-calculator", "home-renovation-budget-calculator"]
  },
  {
    slug: "paint-cost-calculator",
    name: "Paint Cost Calculator",
    shortName: "Paint",
    category: "Repairs & Maintenance",
    description: "Estimate paint gallons, material cost, labor, coats, and DIY versus professional painting totals.",
    title: "Paint Cost Calculator | Estimate Interior and Exterior Painting Costs",
    metaDescription:
      "Estimate paint gallons, materials, labor, and total costs for interior or exterior painting projects.",
    intro:
      "Use this paint cost calculator to estimate gallons, materials, and professional labor for interior or exterior painting projects.",
    fields: [
      {
        name: "projectType",
        label: "Project type",
        type: "select",
        defaultValue: "interior",
        options: [
          { label: "Interior", value: "interior" },
          { label: "Exterior", value: "exterior" }
        ]
      },
      { name: "size", label: "Paintable area", type: "number", defaultValue: 900, min: 100, max: 12000, step: 50, unit: "sq ft" },
      { name: "rooms", label: "Rooms or surfaces", type: "number", defaultValue: 4, min: 1, max: 30, step: 1 },
      {
        name: "quality",
        label: "Paint quality",
        type: "select",
        defaultValue: "standard",
        options: [
          { label: "Budget", value: "budget" },
          { label: "Standard", value: "standard" },
          { label: "Premium", value: "premium" }
        ]
      },
      {
        name: "method",
        label: "DIY or professional",
        type: "select",
        defaultValue: "professional",
        options: [
          { label: "DIY", value: "diy" },
          { label: "Professional", value: "professional" }
        ]
      },
      { name: "coats", label: "Number of coats", type: "number", defaultValue: 2, min: 1, max: 4, step: 1 }
    ],
    assumptions: ["Paint coverage is estimated at about 350 sq ft per gallon before waste.", "Professional pricing includes typical prep and labor, but repairs may add cost.", commonDisclaimer],
    content: {
      affectsCost: ["Exterior work usually costs more due to preparation, access, and weather exposure.", "Trim, repairs, high ceilings, and color changes can add labor.", "Premium paint increases material cost but may improve coverage and durability."],
      reduceCost: ["Patch and clean surfaces before painters arrive.", "Use fewer colors and standard finishes.", "DIY small rooms if you have the time and tools."],
      callProfessional: ["Call a pro for multi-story exteriors, lead paint concerns, major drywall repair, or difficult access.", "Ask what prep, primer, caulk, and cleanup are included."],
      mistakes: ["Estimating floor area instead of paintable wall or surface area.", "Forgetting primer, supplies, and second coats.", "Ignoring surface repairs before painting."],
      example: "A 900 sq ft interior project with standard paint and two professional coats estimates gallons, materials, labor, and total planning cost."
    },
    related: ["flooring-cost-calculator", "kitchen-remodel-cost-calculator", "bathroom-remodel-cost-calculator", "fence-cost-calculator"]
  },
  {
    slug: "hvac-replacement-cost-calculator",
    name: "HVAC Replacement Cost Calculator",
    shortName: "HVAC Replacement",
    category: "Energy & Efficiency",
    description: "Estimate central AC, furnace, heat pump, mini-split, ductwork, equipment, and labor costs.",
    title: "HVAC Replacement Cost Calculator | Estimate System Costs",
    metaDescription:
      "Estimate HVAC replacement costs for central AC, furnaces, heat pumps, and mini-splits with efficiency, ductwork, and labor assumptions.",
    intro:
      "This HVAC replacement calculator estimates equipment, labor, ductwork, and project totals for common residential heating and cooling systems.",
    fields: [
      { name: "homeSize", label: "Home size", type: "number", defaultValue: 1800, min: 500, max: 8000, step: 100, unit: "sq ft" },
      {
        name: "systemType",
        label: "System type",
        type: "select",
        defaultValue: "heatPump",
        options: [
          { label: "Central AC", value: "centralAc" },
          { label: "Furnace", value: "furnace" },
          { label: "Heat pump", value: "heatPump" },
          { label: "Mini-split", value: "miniSplit" }
        ]
      },
      {
        name: "efficiency",
        label: "Efficiency level",
        type: "select",
        defaultValue: "high",
        options: [
          { label: "Standard", value: "standard" },
          { label: "High-efficiency", value: "high" },
          { label: "Premium", value: "premium" }
        ]
      },
      { name: "ductwork", label: "Ductwork needed", type: "boolean", defaultValue: false },
      { name: "laborMultiplier", label: "Labor multiplier", type: "range", defaultValue: 1, min: 0.75, max: 1.7, step: 0.05 }
    ],
    assumptions: ["System sizing is simplified and should not replace a Manual J load calculation.", "Ductwork allowance is a planning placeholder, not a design quote.", commonDisclaimer],
    content: {
      affectsCost: ["Equipment size, efficiency, duct condition, electrical work, and refrigerant line work can change the estimate.", "Mini-split projects depend heavily on the number of zones.", "Local rebates and incentives vary by utility and location."],
      reduceCost: ["Get a load calculation instead of replacing with the same size automatically.", "Seal or repair ducts when replacing equipment.", "Compare rebates, warranties, and financing terms."],
      callProfessional: ["HVAC sizing, refrigerant work, combustion safety, and electrical changes require qualified professionals.", "Ask contractors to explain efficiency ratings and warranty coverage."],
      mistakes: ["Oversizing equipment.", "Ignoring duct leakage or airflow problems.", "Comparing bids with different efficiency ratings or warranty terms."],
      example: "An 1,800 sq ft home with a high-efficiency heat pump and existing ductwork can be compared against a premium system or ductwork replacement."
    },
    related: ["solar-savings-calculator", "home-renovation-budget-calculator", "roof-replacement-cost-calculator", "paint-cost-calculator"]
  },
  {
    slug: "electrical-work-cost-calculator",
    name: "Electrical Work Cost Calculator",
    shortName: "Electrical Work",
    category: "Repairs & Maintenance",
    description: "Estimate outlets, fixtures, panel work, wiring, permits, and licensed electrician labor costs.",
    title: "Electrical Work Cost Calculator | Estimate Electrician Costs",
    metaDescription:
      "Estimate electrical work costs for outlets, lighting, panel upgrades, wiring, permits, and electrician labor before starting a home project.",
    intro:
      "Use this electrical work cost calculator to create a planning estimate for common residential electrical projects, from small fixture updates to more involved wiring and panel work.",
    fields: [
      {
        name: "projectType",
        label: "Electrical project type",
        type: "select",
        defaultValue: "outletsLighting",
        options: [
          { label: "Outlets and switches", value: "outletsSwitches" },
          { label: "Lighting and fixtures", value: "outletsLighting" },
          { label: "Dedicated circuit", value: "dedicatedCircuit" },
          { label: "Panel upgrade", value: "panelUpgrade" },
          { label: "Whole-room rewiring", value: "roomRewire" }
        ]
      },
      { name: "points", label: "Outlets, switches, fixtures, or circuit points", type: "number", defaultValue: 8, min: 1, max: 80, step: 1 },
      {
        name: "access",
        label: "Wall and attic access",
        type: "select",
        defaultValue: "standard",
        options: [
          { label: "Easy access", value: "easy" },
          { label: "Standard access", value: "standard" },
          { label: "Difficult access", value: "difficult" }
        ]
      },
      { name: "panelWork", label: "Include panel or breaker work", type: "boolean", defaultValue: false },
      { name: "permitAllowance", label: "Permit allowance", type: "number", defaultValue: 350, min: 0, max: 5000, step: 50, unit: "$" },
      { name: "laborMultiplier", label: "Labor multiplier", type: "range", defaultValue: 1, min: 0.75, max: 1.8, step: 0.05 }
    ],
    assumptions: [
      "Electrical work should be performed by qualified licensed professionals where required.",
      "Wall repair, paint, smart-home devices, specialty fixtures, and service utility coordination may add cost.",
      commonDisclaimer
    ],
    content: {
      affectsCost: [
        "Panel capacity, wire runs, wall access, code requirements, and permit inspections can raise the estimate.",
        "Older homes may need grounding, AFCI or GFCI protection, or wiring corrections before new work can pass inspection.",
        "Difficult access through finished walls, crawlspaces, or attics usually increases labor."
      ],
      reduceCost: [
        "Group electrical tasks into one visit when possible.",
        "Choose fixture locations before work starts to avoid rework.",
        "Use standard devices unless smart switches, dimmers, or specialty outlets are needed."
      ],
      callProfessional: [
        "Call a licensed electrician for panel work, new circuits, rewiring, EV chargers, permits, or any safety concern.",
        "Ask whether drywall repair, permit fees, breakers, devices, and inspection coordination are included."
      ],
      mistakes: [
        "Assuming a fixture swap is simple before checking box support and wiring condition.",
        "Ignoring permit and inspection requirements.",
        "Adding load without confirming panel capacity."
      ],
      example: "Eight lighting and outlet points with standard access, a small permit allowance, and no panel upgrade produces a practical early planning range."
    },
    related: ["hvac-replacement-cost-calculator", "home-renovation-budget-calculator", "kitchen-remodel-cost-calculator", "bathroom-remodel-cost-calculator", "paint-cost-calculator"]
  },
  {
    slug: "plumbing-cost-calculator",
    name: "Plumbing Cost Calculator",
    shortName: "Plumbing",
    category: "Repairs & Maintenance",
    description: "Estimate fixture installs, pipe repairs, water heater work, drain lines, labor, and permit allowances.",
    title: "Plumbing Cost Calculator | Estimate Plumber Costs",
    metaDescription:
      "Estimate plumbing costs for fixtures, pipe repairs, water heaters, drain work, labor, access complexity, and permits.",
    intro:
      "Use this plumbing cost calculator to estimate common residential plumbing projects before scheduling service or comparing contractor quotes.",
    fields: [
      {
        name: "projectType",
        label: "Plumbing project type",
        type: "select",
        defaultValue: "fixtureInstall",
        options: [
          { label: "Fixture installation", value: "fixtureInstall" },
          { label: "Pipe repair", value: "pipeRepair" },
          { label: "Drain line work", value: "drainLine" },
          { label: "Water heater replacement", value: "waterHeater" },
          { label: "Bathroom or kitchen rough-in", value: "roughIn" }
        ]
      },
      { name: "fixtures", label: "Fixtures or plumbing points", type: "number", defaultValue: 3, min: 1, max: 40, step: 1 },
      {
        name: "access",
        label: "Pipe access",
        type: "select",
        defaultValue: "standard",
        options: [
          { label: "Easy access", value: "easy" },
          { label: "Standard access", value: "standard" },
          { label: "Difficult access", value: "difficult" }
        ]
      },
      { name: "emergency", label: "Emergency or after-hours service", type: "boolean", defaultValue: false },
      { name: "permitAllowance", label: "Permit allowance", type: "number", defaultValue: 250, min: 0, max: 5000, step: 50, unit: "$" },
      { name: "laborMultiplier", label: "Labor multiplier", type: "range", defaultValue: 1, min: 0.75, max: 1.8, step: 0.05 }
    ],
    assumptions: [
      "Plumbing costs can change quickly when walls, slabs, drains, venting, or code corrections are involved.",
      "The estimate does not include mold remediation, cabinet repair, tile repair, drywall repair, or water damage restoration.",
      commonDisclaimer
    ],
    content: {
      affectsCost: [
        "Fixture type, pipe material, access, drain condition, venting, and permit requirements affect the final cost.",
        "Difficult access behind tile, cabinets, finished ceilings, or slabs can increase labor.",
        "Emergency service and water damage can make a simple repair much more expensive."
      ],
      reduceCost: [
        "Handle several non-urgent plumbing items in one scheduled visit.",
        "Choose standard fixtures that fit existing rough-in dimensions.",
        "Fix small leaks early before they damage cabinets, flooring, or walls."
      ],
      callProfessional: [
        "Call a licensed plumber for leaks, gas lines, water heaters, drain work, rough-ins, sewer issues, and permit-heavy work.",
        "Ask whether parts, haul-away, access repair, permits, and cleanup are included in the quote."
      ],
      mistakes: [
        "Buying fixtures before confirming rough-in size and connection type.",
        "Ignoring shutoff valve condition.",
        "Treating visible leak repair as the full scope before checking hidden water damage."
      ],
      example: "A three-fixture installation with standard access and a permit allowance creates a planning range for comparing plumber quotes."
    },
    related: ["bathroom-remodel-cost-calculator", "kitchen-remodel-cost-calculator", "home-renovation-budget-calculator", "flooring-cost-calculator", "paint-cost-calculator"]
  },
  {
    slug: "fence-cost-calculator",
    name: "Fence Cost Calculator",
    shortName: "Fence",
    category: "Exterior Projects",
    description: "Estimate fence material, labor, gates, height, and old-fence removal costs.",
    title: "Fence Cost Calculator | Estimate Installation Costs",
    metaDescription:
      "Estimate fence installation costs by linear feet, material, height, gates, and old fence removal.",
    intro:
      "Use this fence cost calculator to estimate material, labor, gate, removal, and total project costs before getting installation quotes.",
    fields: [
      { name: "linearFeet", label: "Fence length", type: "number", defaultValue: 160, min: 20, max: 2000, step: 10, unit: "linear ft" },
      {
        name: "material",
        label: "Fence material",
        type: "select",
        defaultValue: "wood",
        options: [
          { label: "Wood", value: "wood" },
          { label: "Vinyl", value: "vinyl" },
          { label: "Chain link", value: "chainLink" },
          { label: "Aluminum", value: "aluminum" },
          { label: "Composite", value: "composite" }
        ]
      },
      { name: "height", label: "Fence height", type: "number", defaultValue: 6, min: 3, max: 10, step: 1, unit: "ft" },
      { name: "gates", label: "Number of gates", type: "number", defaultValue: 1, min: 0, max: 8, step: 1 },
      { name: "removeOld", label: "Remove old fence", type: "boolean", defaultValue: false }
    ],
    assumptions: ["Gate pricing assumes standard walk gates.", "Difficult soil, slopes, property lines, and permits can affect cost.", commonDisclaimer],
    content: {
      affectsCost: ["Material, height, gates, slope, post depth, and soil conditions drive pricing.", "Composite and vinyl typically cost more than basic wood or chain link.", "Surveying and permit requirements vary by location."],
      reduceCost: ["Use straight runs and standard heights.", "Limit gates to where they are truly needed.", "Confirm property lines before work begins."],
      callProfessional: ["Call a pro for steep slopes, retaining walls, HOA restrictions, or uncertain property boundaries.", "Ask whether posts, concrete, haul-away, and gates are included."],
      mistakes: ["Measuring only one side of the yard.", "Forgetting gates and old-fence removal.", "Installing before confirming utility lines or property setbacks."],
      example: "A 160 linear foot, 6 ft wood fence with one gate gives a planning estimate and cost-per-linear-foot benchmark."
    },
    related: ["deck-cost-calculator", "paint-cost-calculator", "home-renovation-budget-calculator", "roof-replacement-cost-calculator"]
  },
  {
    slug: "deck-cost-calculator",
    name: "Deck Cost Calculator",
    shortName: "Deck",
    category: "Exterior Projects",
    description: "Estimate decking, railing, stairs, labor, permits, and elevated deck costs.",
    title: "Deck Cost Calculator | Estimate Deck Building Costs",
    metaDescription:
      "Estimate deck building costs by size, decking material, railing type, stairs, height, labor, and permit assumptions.",
    intro:
      "This deck cost calculator estimates a planning budget for ground-level and elevated decks using common decking, railing, stair, and permit assumptions.",
    fields: [
      { name: "size", label: "Deck size", type: "number", defaultValue: 320, min: 80, max: 2000, step: 20, unit: "sq ft" },
      {
        name: "material",
        label: "Decking material",
        type: "select",
        defaultValue: "composite",
        options: [
          { label: "Pressure-treated wood", value: "ptWood" },
          { label: "Cedar", value: "cedar" },
          { label: "Composite", value: "composite" },
          { label: "Premium composite", value: "premiumComposite" }
        ]
      },
      {
        name: "railing",
        label: "Railing type",
        type: "select",
        defaultValue: "standard",
        options: [
          { label: "None / low platform", value: "none" },
          { label: "Standard railing", value: "standard" },
          { label: "Premium railing", value: "premium" }
        ]
      },
      { name: "stairs", label: "Include stairs", type: "boolean", defaultValue: true },
      {
        name: "height",
        label: "Deck height",
        type: "select",
        defaultValue: "elevated",
        options: [
          { label: "Ground-level", value: "ground" },
          { label: "Elevated", value: "elevated" }
        ]
      }
    ],
    assumptions: ["Railing length is estimated from typical deck perimeter ratios.", "Elevated decks include added framing and permit allowance.", commonDisclaimer],
    content: {
      affectsCost: ["Deck size, material, railing, stairs, height, footings, and access all affect bids.", "Composite products cost more upfront but may reduce maintenance.", "Elevated structures often require more engineering and inspections."],
      reduceCost: ["Use a simple rectangular footprint.", "Keep stairs and railing runs efficient.", "Compare maintenance requirements, not only installation cost."],
      callProfessional: ["Call licensed contractors for elevated decks, ledger attachment, footings, stairs, and guardrails.", "Confirm permits, inspections, and structural requirements before building."],
      mistakes: ["Underestimating railing and stair cost.", "Ignoring permits and structural connection details.", "Choosing materials without considering long-term maintenance."],
      example: "A 320 sq ft elevated composite deck with standard railing and stairs estimates decking, railing, labor, and permit allowances."
    },
    related: ["fence-cost-calculator", "paint-cost-calculator", "home-renovation-budget-calculator", "roof-replacement-cost-calculator"]
  },
  {
    slug: "solar-savings-calculator",
    name: "Solar Savings Calculator",
    shortName: "Solar Savings",
    category: "Energy & Efficiency",
    description: "Estimate solar system cost, incentives, monthly savings, payback period, and long-term savings.",
    title: "Solar Savings Calculator | Estimate Payback and Long-Term Savings",
    metaDescription:
      "Estimate solar panel system cost, incentive-adjusted cost, monthly savings, payback period, and long-term electricity savings.",
    intro:
      "Use this solar savings calculator to model system cost, incentive-adjusted cost, monthly savings, payback period, and long-term estimated savings.",
    fields: [
      { name: "monthlyBill", label: "Monthly electric bill", type: "number", defaultValue: 180, min: 25, max: 1000, step: 5, unit: "$" },
      { name: "systemSize", label: "Estimated system size", type: "number", defaultValue: 7.5, min: 2, max: 25, step: 0.5, unit: "kW" },
      { name: "costPerWatt", label: "Installed cost per watt", type: "number", defaultValue: 3.1, min: 1.5, max: 6, step: 0.05, unit: "$/W" },
      { name: "incentive", label: "Federal/state incentive placeholder", type: "range", defaultValue: 30, min: 0, max: 60, step: 1, unit: "%" },
      { name: "rateIncrease", label: "Electricity rate increase", type: "range", defaultValue: 3, min: 0, max: 8, step: 0.25, unit: "%/yr" },
      { name: "years", label: "Years to calculate", type: "number", defaultValue: 25, min: 5, max: 35, step: 1 }
    ],
    assumptions: ["Monthly savings are simplified from current electric bill and assumed offset.", "Incentives vary by location, tax situation, utility program, and eligibility.", commonDisclaimer],
    content: {
      affectsCost: ["Roof orientation, shading, utility rules, battery storage, panel choice, and installer pricing affect solar economics.", "Incentive eligibility is location-specific and can change.", "Electricity rate increases can materially change long-term savings."],
      reduceCost: ["Compare several solar proposals with the same system size and equipment assumptions.", "Review utility net metering rules before signing.", "Improve home efficiency to reduce system size when practical."],
      callProfessional: ["Consult licensed solar installers, tax professionals, and local authorities for incentive and permit details.", "Ask for production estimates, warranty terms, and utility interconnection assumptions."],
      mistakes: ["Assuming all incentives apply automatically.", "Ignoring roof age before installing panels.", "Comparing quotes with different production estimates or financing terms."],
      example: "A 7.5 kW system at $3.10 per watt with a 30% incentive placeholder estimates upfront cost, payback, and long-term planning savings."
    },
    related: ["roof-replacement-cost-calculator", "hvac-replacement-cost-calculator", "home-renovation-budget-calculator", "paint-cost-calculator"]
  },
  {
    slug: "home-renovation-budget-calculator",
    name: "Home Renovation Budget Calculator",
    shortName: "Renovation Budget",
    category: "Budget Planning",
    description: "Allocate a renovation budget across contingency, labor, materials, planning, and flexible funds.",
    title: "Home Renovation Budget Calculator | Plan Your Remodeling Budget",
    metaDescription:
      "Plan a home renovation budget with recommended allocations for contingency, design, labor, materials, and flexible project funds.",
    intro:
      "Use this renovation budget calculator to divide your available budget into labor, materials, design, contingency, and flexible planning buckets.",
    fields: [
      { name: "budget", label: "Total available budget", type: "number", defaultValue: 50000, min: 1000, max: 1000000, step: 500, unit: "$" },
      {
        name: "projectType",
        label: "Project type",
        type: "select",
        defaultValue: "wholeHome",
        options: [
          { label: "Kitchen", value: "kitchen" },
          { label: "Bathroom", value: "bathroom" },
          { label: "Exterior", value: "exterior" },
          { label: "Whole-home", value: "wholeHome" },
          { label: "Maintenance", value: "maintenance" }
        ]
      },
      { name: "contingency", label: "Contingency percentage", type: "range", defaultValue: 15, min: 5, max: 30, step: 1, unit: "%" },
      { name: "design", label: "Design/planning percentage", type: "range", defaultValue: 8, min: 0, max: 20, step: 1, unit: "%" },
      { name: "labor", label: "Labor percentage", type: "range", defaultValue: 35, min: 15, max: 60, step: 1, unit: "%" },
      { name: "materials", label: "Material percentage", type: "range", defaultValue: 35, min: 15, max: 65, step: 1, unit: "%" }
    ],
    assumptions: ["Flexible budget is what remains after selected allocation percentages.", "Older homes and structural work should use higher contingency assumptions.", commonDisclaimer],
    content: {
      affectsCost: ["Project type, unknown conditions, local labor, finish level, and permit requirements affect how much contingency you need.", "Labor and material shares vary widely by project.", "Design fees may be higher for structural, permit-heavy, or custom work."],
      reduceCost: ["Set scope priorities before getting bids.", "Keep a real contingency instead of spending the entire budget on finishes.", "Separate must-haves from nice-to-haves."],
      callProfessional: ["Call licensed professionals for structural, electrical, plumbing, roofing, and permit-heavy projects.", "Use contractor quotes to replace planning percentages with real numbers."],
      mistakes: ["Using the full budget as the construction budget.", "Forgetting design, permits, temporary housing, and contingency.", "Changing scope after bids are accepted."],
      example: "A $50,000 renovation budget with 15% contingency, 8% design, 35% labor, and 35% materials leaves a flexible amount for scope changes or owner purchases."
    },
    related: ["kitchen-remodel-cost-calculator", "bathroom-remodel-cost-calculator", "roof-replacement-cost-calculator", "flooring-cost-calculator", "hvac-replacement-cost-calculator"]
  }
];

export const calculatorMap = new Map(calculatorDefinitions.map((calculator) => [calculator.slug, calculator]));

export const categories = [
  {
    name: "Interior Remodeling",
    description: "Kitchen, bath, flooring, paint, and finish planning tools.",
    href: "/remodeling"
  },
  {
    name: "Exterior Projects",
    description: "Roofing, fencing, decks, paint, and outdoor upgrade estimates.",
    href: "/exterior"
  },
  {
    name: "Repairs & Maintenance",
    description: "Practical tools for repairs, upkeep, and small project planning.",
    href: "/maintenance"
  },
  {
    name: "Energy & Efficiency",
    description: "HVAC and solar calculators for efficiency decisions.",
    href: "/calculators#energy-efficiency"
  },
  {
    name: "Budget Planning",
    description: "Budget allocation tools for managing renovation scope.",
    href: "/home-renovation-budget-calculator"
  }
];

export function getCalculator(slug: string) {
  return calculatorMap.get(slug);
}

export function getRelatedCalculators(slugs: string[]) {
  return slugs.map((slug) => calculatorMap.get(slug)).filter(Boolean) as CalculatorDefinition[];
}

export function getCalculatorsByCategory(category: string) {
  return calculatorDefinitions.filter((calculator) => calculator.category === category);
}
