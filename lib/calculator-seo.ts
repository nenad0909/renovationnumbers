import type { CalculatorDefinition } from "./types";

export type CalculatorFaq = {
  question: string;
  answer: string;
};

export const calculatorAnswerLeads: Record<string, string> = {
  "kitchen-remodel-cost-calculator":
    "A mid-range kitchen remodel for a typical 180 sq ft kitchen often falls in the $35,000–$75,000 planning range before local labor and permit differences.",
  "bathroom-remodel-cost-calculator":
    "A full bathroom remodel commonly lands between $8,000 and $25,000, while primary bath upgrades can run higher when tile, plumbing, and fixtures change.",
  "roof-replacement-cost-calculator":
    "Roof replacement for a 2,000–2,500 sq ft home often costs roughly $8,000–$18,000 with asphalt shingles, and more for metal, tile, or steep/complex roofs.",
  "flooring-cost-calculator":
    "Installed flooring for a 500 sq ft area often ranges from about $2,500 to $7,500 depending on material, removal, and room complexity.",
  "paint-cost-calculator":
    "Professional interior painting for a typical home often costs $2,000–$6,000, while exterior jobs can run higher because of prep, access, and weather exposure.",
  "hvac-replacement-cost-calculator":
    "Whole-home HVAC replacement often falls between $5,000 and $12,000, with heat pumps and high-efficiency systems at the upper end of the range.",
  "electrical-work-cost-calculator":
    "Common electrical projects such as outlets, switches, and lighting updates often cost $150–$400 per point, while panel upgrades can exceed $2,500.",
  "plumbing-cost-calculator":
    "Fixture installs and standard plumbing repairs often range from $250–$800 per fixture, with rough-ins, drain work, and water heaters costing more.",
  "fence-cost-calculator":
    "A 160 linear foot fence commonly costs about $3,200–$8,000 installed, depending on material, height, gates, and old-fence removal.",
  "deck-cost-calculator":
    "A 300–400 sq ft deck often costs roughly $12,000–$28,000 installed, with composite decking and elevated structures at the higher end.",
  "solar-savings-calculator":
    "A typical 7–8 kW residential solar system often costs $18,000–$28,000 before incentives, with payback commonly estimated at 7–12 years.",
  "home-renovation-budget-calculator":
    "Most homeowners planning a renovation set aside 10–20% contingency on top of labor and materials to cover hidden conditions and scope changes."
};

export const calculatorFaqs: Record<string, CalculatorFaq[]> = {
  "kitchen-remodel-cost-calculator": [
    {
      question: "How much does a kitchen remodel cost?",
      answer:
        "Many mid-range kitchen remodels fall between $35,000 and $75,000, but cabinets, layout changes, appliances, and local labor can push costs higher or lower."
    },
    {
      question: "What is the biggest cost in a kitchen remodel?",
      answer:
        "Cabinet replacement or refacing, countertops, and labor are usually the largest line items, followed by appliances, flooring, and permits."
    }
  ],
  "bathroom-remodel-cost-calculator": [
    {
      question: "How much does a bathroom remodel cost?",
      answer:
        "Half baths often cost less than full baths, while primary bathrooms can exceed $25,000 when tile, plumbing, and premium fixtures are involved."
    },
    {
      question: "Does moving plumbing increase bathroom remodel cost?",
      answer:
        "Yes. Relocating drains or supply lines adds demolition, rerouting, waterproofing, and inspection work, which can materially raise the estimate."
    }
  ],
  "roof-replacement-cost-calculator": [
    {
      question: "How much does roof replacement cost?",
      answer:
        "Asphalt shingle replacement is often the most affordable option, while metal, tile, steep pitch, and tear-off requirements increase the total."
    },
    {
      question: "Should I use roof square footage or home square footage?",
      answer:
        "Use roof surface area, not living area. Pitch, overhangs, valleys, and waste factor all affect the correct size for estimating."
    }
  ],
  "flooring-cost-calculator": [
    {
      question: "How much does new flooring cost per square foot?",
      answer:
        "Installed costs often range from about $3 to $12+ per square foot depending on carpet, vinyl plank, hardwood, or tile and whether old flooring is removed."
    },
    {
      question: "What makes flooring installation more expensive?",
      answer:
        "Subfloor repairs, stairs, small rooms, transitions, and premium materials usually add labor and material cost beyond a simple open-area install."
    }
  ],
  "paint-cost-calculator": [
    {
      question: "How much does it cost to paint a house interior?",
      answer:
        "Interior painting often costs a few thousand dollars for several rooms and can rise with high ceilings, repairs, premium paint, and multiple coats."
    },
    {
      question: "Is exterior painting more expensive than interior painting?",
      answer:
        "Usually yes. Exterior work typically requires more prep, access equipment, and weather-resistant materials, which increases labor and material cost."
    }
  ],
  "hvac-replacement-cost-calculator": [
    {
      question: "How much does HVAC replacement cost?",
      answer:
        "System type, home size, efficiency level, duct condition, and electrical work all affect price. Heat pumps and premium efficiency equipment cost more upfront."
    },
    {
      question: "Should I replace HVAC with the same size system?",
      answer:
        "Not always. A load calculation helps confirm the right size; oversized equipment can reduce comfort and efficiency."
    }
  ],
  "electrical-work-cost-calculator": [
    {
      question: "How much do electricians charge for common home projects?",
      answer:
        "Simple device swaps may cost less, but new circuits, difficult access, and panel work can increase the total quickly."
    },
    {
      question: "When should I hire a licensed electrician?",
      answer:
        "Use a licensed electrician for panel work, new circuits, rewiring, EV chargers, and any project requiring permits or inspection."
    }
  ],
  "plumbing-cost-calculator": [
    {
      question: "How much does a plumber cost for fixture installation?",
      answer:
        "Standard fixture installs are often a few hundred dollars each, while rough-ins, drain repairs, and water heater replacement cost more."
    },
    {
      question: "Why do plumbing estimates vary so much?",
      answer:
        "Access, pipe material, hidden damage, venting, permits, and emergency service can all change the final price."
    }
  ],
  "fence-cost-calculator": [
    {
      question: "How much does fence installation cost?",
      answer:
        "Wood and chain link are often more affordable than vinyl, aluminum, or composite fencing, especially when gates and removal are included."
    },
    {
      question: "What affects fence cost the most?",
      answer:
        "Linear footage, material, height, number of gates, slope, soil conditions, and old-fence removal are the main drivers."
    }
  ],
  "deck-cost-calculator": [
    {
      question: "How much does it cost to build a deck?",
      answer:
        "Pressure-treated wood is usually the lowest upfront cost, while composite decking, railings, stairs, and elevated framing increase the total."
    },
    {
      question: "Do elevated decks cost more than ground-level decks?",
      answer:
        "Yes. Elevated decks typically need more framing, footings, railing, and permit work, which raises both materials and labor."
    }
  ],
  "solar-savings-calculator": [
    {
      question: "How much does a home solar system cost?",
      answer:
        "Residential systems are often priced by system size and cost per watt, with incentives reducing the net upfront cost in many areas."
    },
    {
      question: "How long is solar payback?",
      answer:
        "Payback depends on system cost, electricity rates, production, and incentives. Many homeowners see rough payback estimates in the 7–12 year range."
    }
  ],
  "home-renovation-budget-calculator": [
    {
      question: "How much contingency should I budget for a renovation?",
      answer:
        "Many planners use 10–20% contingency, with older homes and structural work often needing the higher end."
    },
    {
      question: "How should I split a renovation budget?",
      answer:
        "Separate labor, materials, design, permits, and contingency before choosing finishes so the budget reflects the full project scope."
    }
  ]
};

export function getCalculatorAnswerLead(calculator: CalculatorDefinition) {
  return calculatorAnswerLeads[calculator.slug] ?? calculator.metaDescription;
}

export function getCalculatorFaqs(calculator: CalculatorDefinition) {
  return calculatorFaqs[calculator.slug] ?? [];
}
