export type CalculatorCategory =
  | "Interior Remodeling"
  | "Exterior Projects"
  | "Repairs & Maintenance"
  | "Energy & Efficiency"
  | "Budget Planning";

export type FieldOption = {
  label: string;
  value: string;
  description?: string;
};

export type CalculatorField = {
  name: string;
  label: string;
  type: "number" | "select" | "boolean" | "range";
  defaultValue: number | string | boolean;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  helpText?: string;
  options?: FieldOption[];
};

export type CalculatorValue = number | string | boolean;

export type BreakdownItem = {
  label: string;
  amount: number;
};

export type CalculatorResult = {
  low: number;
  average: number;
  high: number;
  unitLabel?: string;
  unitCost?: number;
  breakdown: BreakdownItem[];
  notes: string[];
  extras?: {
    label: string;
    value: string;
  }[];
};

export type CalculatorDefinition = {
  slug: string;
  name: string;
  shortName: string;
  category: CalculatorCategory;
  description: string;
  title: string;
  metaDescription: string;
  intro: string;
  fields: CalculatorField[];
  assumptions: string[];
  content: {
    affectsCost: string[];
    reduceCost: string[];
    callProfessional: string[];
    mistakes: string[];
    example: string;
  };
  related: string[];
};
