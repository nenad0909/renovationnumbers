"use client";

import { useMemo, useState } from "react";
import { calculateEstimate, initialValues } from "@/lib/calculator-utils";
import type { CalculatorDefinition, CalculatorValue } from "@/lib/types";
import { CostBreakdown } from "./CostBreakdown";
import { InputField } from "./InputField";
import { PrintButton } from "./PrintButton";
import { ResultCard } from "./ResultCard";

export function CalculatorForm({ calculator }: { calculator: CalculatorDefinition }) {
  const defaults = useMemo(() => initialValues(calculator), [calculator]);
  const [values, setValues] = useState(defaults);
  const result = useMemo(() => calculateEstimate(calculator.slug, values), [calculator.slug, values]);

  function updateValue(name: string, value: CalculatorValue) {
    setValues((current) => ({ ...current, [name]: value }));
  }

  function reset() {
    setValues(defaults);
  }

  return (
    <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <form
        className="relative overflow-hidden border border-white/10 bg-[#1A1A1A] p-6"
        onSubmit={(event) => event.preventDefault()}
      >
        <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#61F3BB] via-[#3de0a5] to-[#61F3BB]" />
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center border border-[#61F3BB]/20 bg-[#61F3BB]/10 text-[#61F3BB]">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24">
              <path d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm2 4h8M8 12h8M8 16h5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white">Calculator Inputs</h2>
        </div>
        <div className="mt-6 grid gap-5">
          {calculator.fields.map((field) => (
            <InputField field={field} key={field.name} onChange={updateValue} value={values[field.name]} />
          ))}
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
          <button className="btn-primary" type="submit">
            Update Estimate
            <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
              <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
          <button
            className="inline-flex items-center gap-2 border border-white/15 bg-transparent px-4 py-2.5 text-sm font-semibold text-white/70 transition hover:border-white/30 hover:text-white"
            onClick={reset}
            type="button"
          >
            <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
              <path d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            Reset
          </button>
          <PrintButton />
        </div>
      </form>
      <div className="grid content-start gap-5" id="estimate-results">
        <ResultCard result={result} />
        <CostBreakdown items={result.breakdown} />
        <div className="border border-white/10 bg-[#111111] p-6">
          <div className="flex items-center gap-3">
            <span className="h-1 w-8 bg-[#61F3BB]" />
            <h3 className="text-base font-semibold text-white">What affects this estimate</h3>
          </div>
          <ul className="mt-4 space-y-2.5 text-sm leading-7 text-[#A1A1A1]">
            {result.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
