import type { CalculatorField, CalculatorValue } from "@/lib/types";

type FieldProps = {
  field: CalculatorField;
  value: CalculatorValue;
  onChange: (name: string, value: CalculatorValue) => void;
};

export function InputField({ field, value, onChange }: FieldProps) {
  const id = `field-${field.name}`;
  const numericValue = typeof value === "number" ? value : Number(field.defaultValue);

  if (field.type === "select") {
    return (
      <label className="field-label" htmlFor={id}>
        <span>{field.label}</span>
        <div className="relative">
          <select
            className="field-control appearance-none pr-9"
            id={id}
            value={String(value)}
            onChange={(event) => onChange(field.name, event.target.value)}
          >
            {field.options?.map((option) => (
              <option key={option.value} value={option.value} style={{ background: "#1A1A1A", color: "#fff" }}>
                {option.label}
              </option>
            ))}
          </select>
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#A1A1A1]"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path d="m6 9 6 6 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
        {field.helpText ? <span className="field-help">{field.helpText}</span> : null}
      </label>
    );
  }

  if (field.type === "boolean") {
    const checked = Boolean(value);
    return (
      <label
        className={`group flex cursor-pointer items-center justify-between gap-4 border bg-[#1A1A1A] px-4 py-3 text-sm font-semibold text-white transition ${
          checked ? "border-[#61F3BB]/40 shadow-glow-soft" : "border-white/15 hover:border-[#61F3BB]/25"
        }`}
      >
        <span>{field.label}</span>
        <span className="relative inline-flex">
          <input
            checked={checked}
            className="peer sr-only"
            onChange={(event) => onChange(field.name, event.target.checked)}
            type="checkbox"
          />
          <span
            aria-hidden="true"
            className="h-6 w-11 rounded-full bg-white/15 transition peer-checked:bg-[#61F3BB]"
          />
          <span
            aria-hidden="true"
            className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-card transition-transform peer-checked:translate-x-5"
          />
        </span>
      </label>
    );
  }

  if (field.type === "range") {
    return (
      <label className="field-label" htmlFor={id}>
        <span className="flex items-center justify-between gap-3">
          <span>{field.label}</span>
          <strong className="border border-[#61F3BB]/20 bg-[#61F3BB]/10 px-2 py-0.5 text-sm font-bold text-[#61F3BB]">
            {numericValue}
            {field.unit ? ` ${field.unit}` : ""}
          </strong>
        </span>
        <input
          className="h-2 w-full cursor-pointer appearance-none bg-white/10 accent-[#61F3BB]"
          id={id}
          max={field.max}
          min={field.min}
          onChange={(event) => onChange(field.name, Number(event.target.value))}
          step={field.step}
          type="range"
          value={numericValue}
          style={{ borderRadius: 0 }}
        />
        {field.helpText ? <span className="field-help">{field.helpText}</span> : null}
      </label>
    );
  }

  return (
    <label className="field-label" htmlFor={id}>
      <span>{field.label}</span>
      <div className="relative">
        {field.unit === "$" ? (
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#A1A1A1]">$</span>
        ) : null}
        <input
          className={`field-control ${field.unit === "$" ? "pl-7" : ""} ${field.unit && field.unit !== "$" ? "pr-12" : ""}`}
          id={id}
          max={field.max}
          min={field.min}
          onChange={(event) => onChange(field.name, Number(event.target.value))}
          step={field.step}
          type="number"
          value={numericValue}
        />
        {field.unit && field.unit !== "$" ? (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 border border-white/10 bg-black px-1.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-[#A1A1A1]">
            {field.unit}
          </span>
        ) : null}
      </div>
      {field.helpText ? <span className="field-help">{field.helpText}</span> : null}
    </label>
  );
}
