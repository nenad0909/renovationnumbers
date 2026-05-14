import type { BreakdownItem, CalculatorDefinition, CalculatorResult, CalculatorValue } from "./types";

export type CalculatorValues = Record<string, CalculatorValue>;

const levelMultiplier: Record<string, number> = {
  basic: 0.85,
  mid: 1,
  high: 1.35
};

const qualityMultiplier: Record<string, number> = {
  budget: 0.8,
  standard: 1,
  premium: 1.35
};

function numberValue(values: CalculatorValues, key: string, fallback = 0) {
  const value = values[key];
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function stringValue(values: CalculatorValues, key: string, fallback = "") {
  const value = values[key];
  return typeof value === "string" ? value : fallback;
}

function booleanValue(values: CalculatorValues, key: string) {
  return values[key] === true;
}

function rangeFromAverage(average: number, spread = 0.16) {
  return {
    low: average * (1 - spread),
    average,
    high: average * (1 + spread)
  };
}

function totalBreakdown(items: BreakdownItem[]) {
  return items.reduce((sum, item) => sum + item.amount, 0);
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

export function formatNumber(value: number, digits = 0) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: digits
  }).format(value);
}

export function initialValues(calculator: CalculatorDefinition): CalculatorValues {
  return Object.fromEntries(calculator.fields.map((field) => [field.name, field.defaultValue]));
}

export function calculateEstimate(slug: string, values: CalculatorValues): CalculatorResult {
  switch (slug) {
    case "kitchen-remodel-cost-calculator":
      return calculateKitchen(values);
    case "bathroom-remodel-cost-calculator":
      return calculateBathroom(values);
    case "roof-replacement-cost-calculator":
      return calculateRoof(values);
    case "flooring-cost-calculator":
      return calculateFlooring(values);
    case "paint-cost-calculator":
      return calculatePaint(values);
    case "hvac-replacement-cost-calculator":
      return calculateHvac(values);
    case "electrical-work-cost-calculator":
      return calculateElectrical(values);
    case "plumbing-cost-calculator":
      return calculatePlumbing(values);
    case "fence-cost-calculator":
      return calculateFence(values);
    case "deck-cost-calculator":
      return calculateDeck(values);
    case "solar-savings-calculator":
      return calculateSolar(values);
    case "home-renovation-budget-calculator":
      return calculateBudget(values);
    default:
      return { low: 0, average: 0, high: 0, breakdown: [], notes: [] };
  }
}

function calculateKitchen(values: CalculatorValues): CalculatorResult {
  const size = numberValue(values, "size", 180);
  const laborMultiplier = numberValue(values, "laborMultiplier", 1);
  const level = levelMultiplier[stringValue(values, "level", "mid")] ?? 1;
  const cabinetRates: Record<string, number> = { repaint: 45, reface: 115, replace: 240 };
  const counterRates: Record<string, number> = { laminate: 35, butcher: 55, quartz: 95, granite: 105, stone: 150 };
  const floorRates: Record<string, number> = { lvp: 9, laminate: 8, tile: 18, hardwood: 20 };
  const counterArea = Math.max(35, size * 0.32);
  const cabinets = size * (cabinetRates[stringValue(values, "cabinets", "reface")] ?? 115) * level;
  const counters = counterArea * (counterRates[stringValue(values, "countertops", "quartz")] ?? 95);
  const flooring = size * (floorRates[stringValue(values, "flooring", "lvp")] ?? 9);
  const appliances = numberValue(values, "applianceBudget", 6500);
  const laborBase = (cabinets + counters + flooring + appliances) * 0.34 * laborMultiplier;
  const permits = numberValue(values, "permitAllowance", 1200) + size * 8 * level;
  const breakdown = [
    { label: "Cabinets", amount: cabinets },
    { label: "Countertops", amount: counters },
    { label: "Flooring", amount: flooring },
    { label: "Appliances", amount: appliances },
    { label: "Labor", amount: laborBase },
    { label: "Permits and other", amount: permits }
  ];
  const average = totalBreakdown(breakdown);
  return {
    ...rangeFromAverage(average),
    unitLabel: "Cost per sq ft",
    unitCost: average / size,
    breakdown,
    notes: ["Cabinets and labor usually drive the largest share of kitchen remodel budgets.", "Keep the same layout to reduce plumbing, electrical, and permit complexity."]
  };
}

function calculateBathroom(values: CalculatorValues): CalculatorResult {
  const size = numberValue(values, "size", 70);
  const laborMultiplier = numberValue(values, "laborMultiplier", 1);
  const bathMultiplier: Record<string, number> = { half: 0.75, full: 1, primary: 1.35 };
  const level = levelMultiplier[stringValue(values, "level", "mid")] ?? 1;
  const type = bathMultiplier[stringValue(values, "bathType", "full")] ?? 1;
  const tileRate: Record<string, number> = { budget: 28, standard: 42, premium: 68 };
  const vanityCost: Record<string, number> = { stock: 1200, standard: 2400, custom: 5200 };
  const tile = size * (tileRate[stringValue(values, "tileLevel", "standard")] ?? 42) * type;
  const vanity = (vanityCost[stringValue(values, "vanityLevel", "standard")] ?? 2400) * type;
  const fixtures = 2600 * level * type;
  const plumbing = booleanValue(values, "plumbingChanges") ? 4200 * type : 900 * type;
  const labor = (tile + vanity + fixtures + plumbing) * 0.42 * laborMultiplier;
  const permits = 850 * level * type;
  const breakdown = [
    { label: "Tile and waterproofing", amount: tile },
    { label: "Vanity", amount: vanity },
    { label: "Fixtures", amount: fixtures },
    { label: "Plumbing", amount: plumbing },
    { label: "Labor", amount: labor },
    { label: "Permits and other", amount: permits }
  ];
  const average = totalBreakdown(breakdown);
  return {
    ...rangeFromAverage(average),
    unitLabel: "Cost per sq ft",
    unitCost: average / size,
    breakdown,
    notes: ["Tile, waterproofing, and plumbing changes can shift bathroom bids substantially.", "Primary bathrooms often need more cabinetry, fixtures, and finish labor."]
  };
}

function calculateRoof(values: CalculatorValues): CalculatorResult {
  const size = numberValue(values, "size", 2200);
  const materialRate: Record<string, number> = { asphalt: 4.2, metal: 9.5, tile: 13.5, slate: 22 };
  const pitchMultiplier: Record<string, number> = { low: 0.92, standard: 1, steep: 1.22 };
  const laborMultiplier = numberValue(values, "laborMultiplier", 1);
  const rate = materialRate[stringValue(values, "material", "asphalt")] ?? 4.2;
  const pitch = pitchMultiplier[stringValue(values, "pitch", "standard")] ?? 1;
  const material = size * rate;
  const labor = size * rate * 0.62 * pitch * laborMultiplier;
  const tearOff = booleanValue(values, "tearOff") ? size * 1.6 : 0;
  const complexity = size * 0.95 * (pitch - 0.85);
  const permits = Math.max(450, size * 0.35);
  const breakdown = [
    { label: "Material", amount: material },
    { label: "Labor", amount: labor },
    { label: "Tear-off and disposal", amount: tearOff },
    { label: "Complexity", amount: complexity },
    { label: "Permits and other", amount: permits }
  ];
  const average = totalBreakdown(breakdown);
  return {
    ...rangeFromAverage(average, 0.14),
    unitLabel: "Cost per sq ft",
    unitCost: average / size,
    breakdown,
    notes: ["Roof slope, layers, access, flashing, and decking repairs can change bids.", "Use roof surface area, not home floor area, when possible."]
  };
}

function calculateFlooring(values: CalculatorValues): CalculatorResult {
  const size = numberValue(values, "size", 500);
  const materialRates: Record<string, number> = { carpet: 2.8, lvp: 4.2, laminate: 3.6, hardwood: 9.5, tile: 6.8, engineered: 7.2 };
  const laborRates: Record<string, number> = { carpet: 2.2, lvp: 3.2, laminate: 3, hardwood: 5.5, tile: 8.5, engineered: 4.8 };
  const complexity: Record<string, number> = { simple: 0.9, standard: 1, complex: 1.22 };
  const type = stringValue(values, "flooring", "lvp");
  const quality = qualityMultiplier[stringValue(values, "quality", "standard")] ?? 1;
  const complexityMultiplier = complexity[stringValue(values, "complexity", "standard")] ?? 1;
  const wasteArea = size * 1.08;
  const material = wasteArea * (materialRates[type] ?? 4.2) * quality;
  const labor = size * (laborRates[type] ?? 3.2) * complexityMultiplier;
  const removal = booleanValue(values, "removeOld") ? size * 1.35 : 0;
  const breakdown = [
    { label: "Material", amount: material },
    { label: "Labor", amount: labor },
    { label: "Removal", amount: removal }
  ];
  const average = totalBreakdown(breakdown);
  return {
    ...rangeFromAverage(average),
    unitLabel: "Cost per sq ft",
    unitCost: average / size,
    breakdown,
    notes: ["The estimate includes a simple waste factor.", "Subfloor repair, transitions, stairs, and moisture issues may add cost."]
  };
}

function calculatePaint(values: CalculatorValues): CalculatorResult {
  const size = numberValue(values, "size", 900);
  const coats = numberValue(values, "coats", 2);
  const rooms = numberValue(values, "rooms", 4);
  const quality = stringValue(values, "quality", "standard");
  const method = stringValue(values, "method", "professional");
  const projectType = stringValue(values, "projectType", "interior");
  const paintPerGallon: Record<string, number> = { budget: 32, standard: 48, premium: 72 };
  const gallons = Math.ceil((size * coats) / 350) + Math.ceil(rooms * 0.2);
  const material = gallons * (paintPerGallon[quality] ?? 48) + rooms * 24;
  const laborRate = projectType === "exterior" ? 2.2 : 1.55;
  const labor = method === "professional" ? size * laborRate * coats * 0.72 + rooms * 95 : 0;
  const prep = method === "professional" ? size * 0.28 : rooms * 18;
  const breakdown = [
    { label: "Paint and supplies", amount: material },
    { label: "Labor", amount: labor },
    { label: "Prep allowance", amount: prep }
  ];
  const average = totalBreakdown(breakdown);
  return {
    ...rangeFromAverage(average, method === "professional" ? 0.18 : 0.12),
    unitLabel: "Cost per sq ft",
    unitCost: average / size,
    breakdown,
    extras: [{ label: "Estimated gallons", value: `${gallons} gallons` }],
    notes: ["Paintable surface area is more useful than floor area.", "Exterior access, repairs, trim, primer, and color changes can increase labor."]
  };
}

function calculateHvac(values: CalculatorValues): CalculatorResult {
  const homeSize = numberValue(values, "homeSize", 1800);
  const systemBase: Record<string, number> = { centralAc: 5200, furnace: 4800, heatPump: 7600, miniSplit: 6800 };
  const efficiency: Record<string, number> = { standard: 1, high: 1.22, premium: 1.48 };
  const laborMultiplier = numberValue(values, "laborMultiplier", 1);
  const sizeFactor = Math.max(0.75, homeSize / 1800);
  const equipment = (systemBase[stringValue(values, "systemType", "heatPump")] ?? 7600) * sizeFactor * (efficiency[stringValue(values, "efficiency", "high")] ?? 1.22);
  const labor = equipment * 0.38 * laborMultiplier + 950;
  const ductwork = booleanValue(values, "ductwork") ? homeSize * 6.5 : 0;
  const permits = 450 + homeSize * 0.12;
  const breakdown = [
    { label: "Equipment", amount: equipment },
    { label: "Labor", amount: labor },
    { label: "Ductwork", amount: ductwork },
    { label: "Permits and other", amount: permits }
  ];
  const average = totalBreakdown(breakdown);
  return {
    ...rangeFromAverage(average, 0.18),
    unitLabel: "Cost per home sq ft",
    unitCost: average / homeSize,
    breakdown,
    notes: ["A load calculation is needed for real equipment sizing.", "Rebates, duct condition, and electrical work can meaningfully affect bids."]
  };
}

function calculateElectrical(values: CalculatorValues): CalculatorResult {
  const projectType = stringValue(values, "projectType", "outletsLighting");
  const points = numberValue(values, "points", 8);
  const laborMultiplier = numberValue(values, "laborMultiplier", 1);
  const accessMultiplier: Record<string, number> = { easy: 0.85, standard: 1, difficult: 1.35 };
  const projectBase: Record<string, number> = {
    outletsSwitches: 145,
    outletsLighting: 210,
    dedicatedCircuit: 425,
    panelUpgrade: 1800,
    roomRewire: 520
  };
  const materialBase: Record<string, number> = {
    outletsSwitches: 48,
    outletsLighting: 85,
    dedicatedCircuit: 155,
    panelUpgrade: 1050,
    roomRewire: 180
  };
  const access = accessMultiplier[stringValue(values, "access", "standard")] ?? 1;
  const projectMinimum = projectType === "panelUpgrade" ? 1 : points;
  const materials = projectMinimum * (materialBase[projectType] ?? 85) * access;
  const labor = projectMinimum * (projectBase[projectType] ?? 210) * access * laborMultiplier;
  const panelWork = booleanValue(values, "panelWork") || projectType === "panelUpgrade" ? 850 : 0;
  const permits = numberValue(values, "permitAllowance", 350);
  const breakdown = [
    { label: "Materials and devices", amount: materials },
    { label: "Licensed electrician labor", amount: labor },
    { label: "Panel or breaker work", amount: panelWork },
    { label: "Permits and inspection", amount: permits }
  ];
  const average = totalBreakdown(breakdown);
  return {
    ...rangeFromAverage(average, 0.2),
    unitLabel: "Cost per point",
    unitCost: average / Math.max(1, projectMinimum),
    breakdown,
    notes: [
      "Panel capacity, wire runs, access, code requirements, and inspection rules can change electrical bids.",
      "Electrical work should be handled by qualified licensed professionals where required."
    ]
  };
}

function calculatePlumbing(values: CalculatorValues): CalculatorResult {
  const projectType = stringValue(values, "projectType", "fixtureInstall");
  const fixtures = numberValue(values, "fixtures", 3);
  const laborMultiplier = numberValue(values, "laborMultiplier", 1);
  const accessMultiplier: Record<string, number> = { easy: 0.85, standard: 1, difficult: 1.4 };
  const projectBase: Record<string, number> = {
    fixtureInstall: 260,
    pipeRepair: 360,
    drainLine: 520,
    waterHeater: 1250,
    roughIn: 780
  };
  const materialBase: Record<string, number> = {
    fixtureInstall: 180,
    pipeRepair: 125,
    drainLine: 260,
    waterHeater: 1050,
    roughIn: 310
  };
  const access = accessMultiplier[stringValue(values, "access", "standard")] ?? 1;
  const projectUnits = projectType === "waterHeater" ? 1 : fixtures;
  const materials = projectUnits * (materialBase[projectType] ?? 180) * access;
  const labor = projectUnits * (projectBase[projectType] ?? 260) * access * laborMultiplier;
  const emergency = booleanValue(values, "emergency") ? Math.max(250, labor * 0.35) : 0;
  const permits = numberValue(values, "permitAllowance", 250);
  const breakdown = [
    { label: "Parts and materials", amount: materials },
    { label: "Plumber labor", amount: labor },
    { label: "Emergency service", amount: emergency },
    { label: "Permits and other", amount: permits }
  ];
  const average = totalBreakdown(breakdown);
  return {
    ...rangeFromAverage(average, 0.2),
    unitLabel: "Cost per plumbing point",
    unitCost: average / Math.max(1, projectUnits),
    breakdown,
    notes: [
      "Fixture type, pipe access, drain condition, venting, and permit requirements can shift plumbing estimates.",
      "Leaks, gas lines, water heaters, sewer issues, and rough-ins should be reviewed by licensed professionals."
    ]
  };
}

function calculateFence(values: CalculatorValues): CalculatorResult {
  const linearFeet = numberValue(values, "linearFeet", 160);
  const materialRates: Record<string, number> = { wood: 18, vinyl: 30, chainLink: 13, aluminum: 34, composite: 46 };
  const laborRates: Record<string, number> = { wood: 16, vinyl: 18, chainLink: 12, aluminum: 18, composite: 22 };
  const material = stringValue(values, "material", "wood");
  const height = numberValue(values, "height", 6);
  const heightMultiplier = height <= 4 ? 0.82 : height <= 6 ? 1 : 1 + (height - 6) * 0.15;
  const materials = linearFeet * (materialRates[material] ?? 18) * heightMultiplier;
  const labor = linearFeet * (laborRates[material] ?? 16) * heightMultiplier;
  const gates = numberValue(values, "gates", 1) * 475;
  const removal = booleanValue(values, "removeOld") ? linearFeet * 5 : 0;
  const breakdown = [
    { label: "Material", amount: materials },
    { label: "Labor", amount: labor },
    { label: "Gates", amount: gates },
    { label: "Removal", amount: removal }
  ];
  const average = totalBreakdown(breakdown);
  return {
    ...rangeFromAverage(average),
    unitLabel: "Cost per linear ft",
    unitCost: average / linearFeet,
    breakdown,
    notes: ["Slope, soil, gates, permits, and property-line issues can change fence pricing.", "Call utility locating services before digging."]
  };
}

function calculateDeck(values: CalculatorValues): CalculatorResult {
  const size = numberValue(values, "size", 320);
  const materialRates: Record<string, number> = { ptWood: 18, cedar: 26, composite: 38, premiumComposite: 52 };
  const railingRates: Record<string, number> = { none: 0, standard: 58, premium: 115 };
  const heightMultiplier = stringValue(values, "height", "elevated") === "elevated" ? 1.22 : 1;
  const decking = size * (materialRates[stringValue(values, "material", "composite")] ?? 38) * heightMultiplier;
  const perimeter = Math.sqrt(size) * 4;
  const railing = perimeter * (railingRates[stringValue(values, "railing", "standard")] ?? 58);
  const stairs = booleanValue(values, "stairs") ? (stringValue(values, "height", "elevated") === "elevated" ? 3600 : 1400) : 0;
  const labor = (decking + railing + stairs) * 0.58;
  const permits = stringValue(values, "height", "elevated") === "elevated" ? 1250 : 550;
  const breakdown = [
    { label: "Decking and framing", amount: decking },
    { label: "Railing", amount: railing },
    { label: "Stairs", amount: stairs },
    { label: "Labor", amount: labor },
    { label: "Permits and other", amount: permits }
  ];
  const average = totalBreakdown(breakdown);
  return {
    ...rangeFromAverage(average, 0.17),
    unitLabel: "Cost per sq ft",
    unitCost: average / size,
    breakdown,
    notes: ["Elevated decks require more structural work than ground-level platforms.", "Railing and stairs can be a large share of the final bid."]
  };
}

function calculateSolar(values: CalculatorValues): CalculatorResult {
  const monthlyBill = numberValue(values, "monthlyBill", 180);
  const systemSize = numberValue(values, "systemSize", 7.5);
  const costPerWatt = numberValue(values, "costPerWatt", 3.1);
  const incentive = numberValue(values, "incentive", 30) / 100;
  const rateIncrease = numberValue(values, "rateIncrease", 3) / 100;
  const years = numberValue(values, "years", 25);
  const systemCost = systemSize * 1000 * costPerWatt;
  const incentiveAmount = systemCost * incentive;
  const adjustedCost = systemCost - incentiveAmount;
  const monthlySavings = monthlyBill * 0.82;
  const firstYearSavings = monthlySavings * 12;
  const longTermSavings = Array.from({ length: years }).reduce<number>(
    (sum, _, index) => sum + firstYearSavings * Math.pow(1 + rateIncrease, index),
    0
  );
  const payback = adjustedCost / Math.max(1, firstYearSavings);
  const breakdown = [
    { label: "Estimated system cost", amount: systemCost },
    { label: "Incentive placeholder", amount: -incentiveAmount },
    { label: "Incentive-adjusted cost", amount: adjustedCost }
  ];
  return {
    low: adjustedCost * 0.9,
    average: adjustedCost,
    high: adjustedCost * 1.12,
    unitLabel: "Installed cost per watt",
    unitCost: costPerWatt,
    breakdown,
    extras: [
      { label: "Estimated monthly savings", value: formatCurrency(monthlySavings) },
      { label: "Estimated payback period", value: `${formatNumber(payback, 1)} years` },
      { label: `${years}-year estimated savings`, value: formatCurrency(longTermSavings - adjustedCost) }
    ],
    notes: ["Solar incentives vary by location, tax situation, utility program, and eligibility.", "This is a simplified planning model, not a solar production guarantee."]
  };
}

function calculateBudget(values: CalculatorValues): CalculatorResult {
  const budget = numberValue(values, "budget", 50000);
  const contingency = budget * (numberValue(values, "contingency", 15) / 100);
  const design = budget * (numberValue(values, "design", 8) / 100);
  const labor = budget * (numberValue(values, "labor", 35) / 100);
  const materials = budget * (numberValue(values, "materials", 35) / 100);
  const allocated = contingency + design + labor + materials;
  const flexible = budget - allocated;
  const breakdown = [
    { label: "Contingency", amount: contingency },
    { label: "Design and planning", amount: design },
    { label: "Labor", amount: labor },
    { label: "Materials", amount: materials },
    { label: "Remaining flexible budget", amount: flexible }
  ];
  return {
    low: budget,
    average: budget,
    high: budget,
    unitLabel: "Allocated",
    unitCost: allocated / budget,
    breakdown,
    extras: [
      { label: "Recommended contingency", value: formatCurrency(contingency) },
      { label: "Flexible budget", value: formatCurrency(flexible) }
    ],
    notes: ["A healthy contingency protects the budget when hidden conditions appear.", "If allocations exceed 100%, reduce one category or increase the total budget."]
  };
}
