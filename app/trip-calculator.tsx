"use client";

import { useState, type CSSProperties } from "react";
import { Minus, Plus } from "lucide-react";

const DAILY_RATE = 35;
const MIN_DAYS = 1;
const MAX_DAYS = 21;

export function TripCalculator() {
  const [days, setDays] = useState(7);

  return (
    <div className="trip-calculator">
      <div className="flex items-center justify-between gap-3">
        <label htmlFor="trip-days" className="text-sm font-extrabold">Your July escape</label>
        <div className="flex items-center gap-2">
          <button type="button" className="day-step" aria-label="One fewer rental day" disabled={days === MIN_DAYS} onClick={() => setDays((value) => value - 1)}><Minus size={14} aria-hidden="true" /></button>
          <span className="min-w-12 text-center text-sm font-bold tabular-nums">{days} {days === 1 ? "day" : "days"}</span>
          <button type="button" className="day-step" aria-label="One more rental day" disabled={days === MAX_DAYS} onClick={() => setDays((value) => value + 1)}><Plus size={14} aria-hidden="true" /></button>
        </div>
      </div>
      <input id="trip-days" type="range" min={MIN_DAYS} max={MAX_DAYS} step={1} value={days} onChange={(event) => setDays(Number(event.target.value))} aria-valuetext={`${days} ${days === 1 ? "day" : "days"}, ${days * DAILY_RATE} euros total`} className="trip-range" style={{ "--range-progress": `${((days - MIN_DAYS) / (MAX_DAYS - MIN_DAYS)) * 100}%` } as CSSProperties} />
      <div className="flex justify-between text-[11px] font-semibold text-[#60737d]" aria-hidden="true"><span>1 day</span><span>21 days</span></div>
      <div className="trip-total">
        <span><span className="block text-xs font-semibold text-white/75">{days} × €{DAILY_RATE} · Mini in July</span><span className="mt-1 block text-sm font-bold">Your rental total</span></span>
        <output htmlFor="trip-days" className="text-3xl font-extrabold tracking-tight tabular-nums">€{days * DAILY_RATE}</output>
      </div>
      <p className="mt-3 text-xs leading-5 text-[#60737d]">All inclusions above. Subject to availability; dates are confirmed in your request.</p>
    </div>
  );
}
