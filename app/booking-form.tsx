"use client";

import { FormEvent, useMemo, useState } from "react";
import { Check, LoaderCircle, Send } from "lucide-react";

type SubmissionState = { status: "idle" } | { status: "submitting" } | { status: "success"; reference: string; emailed: boolean } | { status: "error"; message: string };

const categories = ["Mini — from €35/day", "Compact — from €44/day", "SUV — from €62/day", "7 Seater — from €78/day", "No preference — show me what’s available"];

export function BookingForm() {
  const [state, setState] = useState<SubmissionState>({ status: "idle" });
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setState({ status: "submitting" });
    try {
      const response = await fetch("/api/booking", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(Object.fromEntries(data.entries())) });
      const result = (await response.json()) as { reference?: string; error?: string; emailed?: boolean };
      if (!response.ok || !result.reference) throw new Error(result.error || "We couldn’t send your request.");
      form.reset();
      setState({ status: "success", reference: result.reference, emailed: Boolean(result.emailed) });
    } catch (error) {
      setState({ status: "error", message: error instanceof Error ? error.message : "We couldn’t send your request. Please try again." });
    }
  }

  if (state.status === "success") {
    return (
      <div className="grid min-h-[510px] place-items-center rounded-[2rem] border border-[#cfe0e3] bg-white p-7 text-center shadow-[0_30px_80px_rgba(16,55,70,.1)] sm:p-10" role="status" aria-live="polite">
        <div className="max-w-[480px]"><span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#daf2ed] text-[#127267]"><Check className="h-8 w-8" aria-hidden="true" /></span><p className="eyebrow mt-7">Request received</p><h3 className="font-display mt-3 text-4xl font-semibold tracking-[-0.04em]">Your dates are on their way.</h3><p className="mt-5 text-base leading-7 text-[#60737d]">We’ll check the fleet and reply with availability, your exact total, and the full terms before you decide.{state.emailed ? " We sent a copy of this request to the email you entered." : " The confirmation email did not send. Check EmailJS security, the template ID, and spam."}</p><p className="mt-5 rounded-xl bg-[#f3f5f2] px-4 py-3 text-sm font-bold text-[#36515d]">Reference: {state.reference}</p><button type="button" onClick={() => setState({ status: "idle" })} className="mt-6 text-sm font-extrabold text-[#0b6071] underline decoration-[#7bb8bc] underline-offset-4">Send another request</button></div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-[#cfe0e3] bg-white p-6 shadow-[0_30px_80px_rgba(16,55,70,.1)] sm:p-9" aria-label="Request car availability">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="form-field sm:col-span-2"><span>Full name</span><input name="name" type="text" autoComplete="name" required maxLength={100} placeholder="e.g. Anna Müller" /></label>
        <label className="form-field sm:col-span-2"><span>Email</span><input name="email" type="email" autoComplete="email" required maxLength={160} inputMode="email" placeholder="anna@example.com" /></label>
        <label className="form-field"><span>Pick-up date</span><input name="pickupDate" type="date" required min={today} /></label>
        <label className="form-field"><span>Return date</span><input name="returnDate" type="date" required min={today} /></label>
        <label className="form-field sm:col-span-2"><span>Car category</span><select name="carCategory" required defaultValue=""><option value="" disabled>Select a category</option>{categories.map((category) => <option key={category} value={category}>{category}</option>)}</select></label>
        <label className="honeypot" aria-hidden="true">Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
      </div>
      {state.status === "error" && <div className="mt-5 rounded-xl border border-[#e9bdb7] bg-[#fff2f0] px-4 py-3 text-sm font-semibold text-[#8d332c]" role="alert">{state.message} Your details are still here—please try once more.</div>}
      <button disabled={state.status === "submitting"} type="submit" className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#0d5b70] px-6 text-base font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#08485c] disabled:cursor-wait disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0d5b70]">
        {state.status === "submitting" ? <><LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending request…</> : <>Request availability <Send className="h-4 w-4" aria-hidden="true" /></>}
      </button>
      <p className="mt-4 text-center text-xs leading-5 text-[#7a8d95]">No payment or card details. By sending, you agree to be contacted about this availability request.</p>
    </form>
  );
}
