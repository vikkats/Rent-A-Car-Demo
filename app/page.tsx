import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Clock3,
  CreditCard,
  Fuel,
  Gauge,
  Headphones,
  Mail,
  MapPin,
  PlaneLanding,
  ShieldCheck,
  Users,
} from "lucide-react";
import { BookingForm } from "./booking-form";
import { StickyBookingCta } from "./sticky-booking-cta";

const inclusions = [
  { icon: ShieldCheck, label: "Full cover", detail: "Zero excess" },
  { icon: PlaneLanding, label: "Airport handover", detail: "Delivery included" },
  { icon: Users, label: "Second driver", detail: "No extra charge" },
  { icon: CreditCard, label: "No card deposit", detail: "€0 held on your card" },
  { icon: Fuel, label: "Full-to-full", detail: "Pay only for what you use" },
  { icon: Headphones, label: "24/7 support", detail: "A real person answers" },
];

const cars = [
  {
    name: "Toyota Aygo",
    similar: "or similar",
    category: "Mini",
    price: 35,
    transmission: "Manual",
    passengers: 4,
    bags: 1,
    image: "/images/car-mini.webp",
    alt: "Orange Toyota Aygo compact city car parked on a quiet street",
  },
  {
    name: "Ford Focus",
    similar: "or similar",
    category: "Compact",
    price: 44,
    transmission: "Manual",
    passengers: 5,
    bags: 2,
    image: "/images/car-economy.webp",
    alt: "White Ford Focus compact hatchback parked outdoors",
  },
  {
    name: "Hyundai Kona",
    similar: "or similar",
    category: "SUV",
    price: 62,
    transmission: "Automatic",
    passengers: 5,
    bags: 3,
    image: "/images/car-suv.webp",
    alt: "Silver Hyundai Kona compact SUV photographed from the side",
  },
  {
    name: "Hyundai Staria",
    similar: "or similar",
    category: "7 Seater",
    price: 78,
    transmission: "Automatic",
    passengers: 7,
    bags: 4,
    image: "/images/car-van.webp",
    alt: "White Hyundai Staria passenger van parked beside the sea at sunset",
  },
];

const comparisonQuestions = [
  ["Full insurance with zero excess?", "Included"],
  ["Credit-card deposit hold?", "€0"],
  ["Kos Airport delivery and collection?", "Included"],
  ["Second driver?", "Included"],
  ["Clear full-to-full fuel policy?", "Yes"],
];

const faqs = [
  {
    question: "Is €35 really the final daily price?",
    answer:
      "For a Mini in July, yes. Full cover with zero excess, a second driver, airport delivery and collection, and 24/7 phone support are already included. We confirm the exact total before you commit.",
  },
  {
    question: "Will you block a deposit on my credit card?",
    answer:
      "No. Meltemi Rentals does not place a security hold on your credit card. Your available holiday balance stays available to you.",
  },
  {
    question: "Can I collect the car at Kos Airport?",
    answer:
      "Yes. Tell us your arrival date in the request form and airport handover is included in the quoted price.",
  },
  {
    question: "Does this form confirm my booking instantly?",
    answer:
      "It sends a real availability request to our team. We then confirm the available vehicle, your exact total, and the rental terms before anything is final.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f6f1] text-[#102c3c]">
      <section className="relative isolate min-h-[760px] overflow-hidden bg-[#082f4b] text-white lg:min-h-[820px]">
        <img
          src="/images/hero.webp"
          alt="Rental car overlooking the Aegean coast in Kos"
          width="1920"
          height="1280"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[66%_center]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,33,53,.96)_0%,rgba(5,33,53,.84)_40%,rgba(5,33,53,.24)_77%,rgba(5,33,53,.12)_100%)] max-lg:bg-[linear-gradient(180deg,rgba(5,33,53,.96)_0%,rgba(5,33,53,.86)_58%,rgba(5,33,53,.58)_100%)]" />

        <header className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-5 py-6 sm:px-8 lg:px-10">
          <a href="#top" className="group flex items-center gap-3" aria-label="Meltemi Rentals home">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-white/35 bg-white/10 text-sm font-black tracking-[-0.08em] backdrop-blur">MR</span>
            <span>
              <span className="block text-base font-extrabold tracking-[0.04em]">MELTEMI</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-white/65">Rentals · Kos</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-white/82 md:flex" aria-label="Main navigation">
            <a className="transition hover:text-white" href="#cars">Cars</a>
            <a className="transition hover:text-white" href="#included">What’s included</a>
            <a className="transition hover:text-white" href="#faq">FAQ</a>
          </nav>
          <a href="#booking" className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#ffd166] px-5 text-sm font-extrabold text-[#082f4b] shadow-[0_10px_30px_rgba(0,0,0,.15)] transition hover:-translate-y-0.5 hover:bg-[#ffdc82] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Check availability</a>
        </header>

        <div id="top" className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[minmax(0,1.12fr)_minmax(330px,.58fr)] lg:px-10 lg:pb-28 lg:pt-24">
          <div className="max-w-[720px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white/90 backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-[#64d7d0]" aria-hidden="true" /> Kos Airport handover included
            </div>
            <h1 className="font-display max-w-[700px] text-[clamp(3.4rem,8vw,6.9rem)] font-medium leading-[.87] tracking-[-0.055em] text-balance">
              €35 a day.<span className="mt-3 block text-[#ffd166]">Still €35 at the desk.</span>
            </h1>
            <p className="mt-7 max-w-[590px] text-lg leading-8 text-white/82 sm:text-xl">Full cover, airport delivery, a second driver and zero card deposit are already included. One clear price from arrival to return.</p>
            <div id="hero-ctas" className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#booking" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#ffd166] px-7 text-base font-extrabold text-[#082f4b] transition hover:-translate-y-0.5 hover:bg-[#ffdc82] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Check your dates <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
              <a href="#compare" className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/30 bg-white/8 px-7 text-base font-bold text-white backdrop-blur transition hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Compare what’s included</a>
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/62"><Check className="h-4 w-4 text-[#64d7d0]" aria-hidden="true" />Availability request only · no payment required</p>
          </div>

          <aside className="self-end rounded-[2rem] border border-white/25 bg-white/94 p-6 text-[#102c3c] shadow-[0_30px_90px_rgba(0,0,0,.28)] backdrop-blur sm:p-7 lg:translate-y-10" aria-label="July Mini rate summary">
            <div className="flex items-start justify-between gap-5 border-b border-[#dce5e9] pb-5">
              <div><p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#2b7f89]">July Mini rate</p><p className="font-display mt-1 text-5xl font-semibold tracking-[-0.04em]">€35<span className="font-sans text-base font-bold text-[#60737d]"> / day</span></p></div>
              <span className="rounded-full bg-[#dff5f1] px-3 py-1.5 text-xs font-extrabold text-[#176b67]">ALL IN</span>
            </div>
            <ul className="mt-5 space-y-3.5 text-sm font-semibold">
              {["Zero-excess full cover", "€0 credit-card hold", "Airport handover", "Second driver", "24/7 phone support"].map((item) => (
                <li key={item} className="flex items-center gap-3"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#e6f7f4] text-[#17786f]"><Check className="h-3.5 w-3.5" aria-hidden="true" /></span>{item}</li>
              ))}
            </ul>
            <p className="mt-6 rounded-2xl bg-[#f3f1ea] px-4 py-3 text-sm leading-6 text-[#4c626d]">Seven July days in a Mini: <strong className="text-[#102c3c]">€245 total</strong>. You see the full cost before you say yes.</p>
          </aside>
        </div>
      </section>

      <section id="included" className="relative z-10 mx-auto -mt-1 w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="grid overflow-hidden rounded-b-[2rem] bg-white shadow-[0_22px_70px_rgba(18,55,70,.09)] sm:grid-cols-2 lg:grid-cols-6">
          {inclusions.map(({ icon: Icon, label, detail }) => (
            <div key={label} className="flex items-center gap-3 border-b border-[#e5ecee] p-5 last:border-0 sm:border-r lg:border-b-0">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#e8f5f3] text-[#16766f]"><Icon className="h-5 w-5" aria-hidden="true" /></span>
              <span><strong className="block text-sm font-extrabold">{label}</strong><span className="mt-0.5 block text-xs leading-4 text-[#697c84]">{detail}</span></span>
            </div>
          ))}
        </div>
      </section>

      <section id="compare" className="mx-auto grid w-full max-w-[1240px] items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[.78fr_1.22fr] lg:px-10 lg:py-32">
        <div>
          <p className="eyebrow">The honest comparison</p>
          <h2 className="font-display mt-4 text-[clamp(2.7rem,5vw,4.7rem)] font-semibold leading-[.98] tracking-[-0.045em] text-balance">Compare the final price, not the first number.</h2>
          <p className="mt-6 max-w-[540px] text-lg leading-8 text-[#5e727c]">A low headline rate can leave out the things you cannot drive away without. Before choosing any car in Kos, ask these five questions.</p>
          <p className="mt-5 border-l-4 border-[#f0b84f] pl-5 text-base font-bold leading-7 text-[#284553]">With Meltemi, every answer is written down before you arrive—so your holiday budget stays your holiday budget.</p>
        </div>
        <div className="rounded-[2rem] border border-[#d9e4e7] bg-white p-5 shadow-[0_24px_70px_rgba(17,58,74,.09)] sm:p-8">
          <div className="grid grid-cols-[1fr_auto] items-end gap-5 border-b border-[#dce5e9] pb-5"><div><p className="text-sm font-extrabold text-[#627781]">Ask before you book</p><p className="mt-1 text-xs text-[#819198]">No small print. No awkward desk surprise.</p></div><p className="text-right text-xs font-extrabold uppercase tracking-[0.12em] text-[#17786f]">Meltemi</p></div>
          <dl>
            {comparisonQuestions.map(([question, answer]) => (
              <div key={question} className="grid grid-cols-[1fr_auto] items-center gap-5 border-b border-[#e5ecee] py-4 last:border-0"><dt className="text-sm font-bold text-[#294653] sm:text-base">{question}</dt><dd className="flex items-center gap-2 rounded-full bg-[#e6f7f4] px-3 py-1.5 text-sm font-extrabold text-[#176b67]"><Check className="h-3.5 w-3.5" aria-hidden="true" /> {answer}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <section id="cars" className="bg-white py-24 lg:py-30">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="eyebrow">Four easy choices</p><h2 className="font-display mt-4 text-[clamp(2.7rem,5vw,4.5rem)] font-semibold leading-none tracking-[-0.045em]">Pick the shape of your trip.</h2></div><p className="max-w-[390px] text-base leading-7 text-[#60737d]">Every category follows the same clear-price promise. Final availability is confirmed personally.</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {cars.map((car) => (
              <article key={car.name} className="group overflow-hidden rounded-[1.6rem] border border-[#dfe8ea] bg-[#faf9f5] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(16,54,69,.11)]">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#e8eef0]"><img src={car.image} alt={car.alt} width="720" height="540" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" /><span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1.5 text-xs font-extrabold text-[#174e66] shadow-sm backdrop-blur">{car.category}</span></div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3"><div><h3 className="text-lg font-extrabold">{car.name}</h3><p className="text-xs text-[#77888f]">{car.similar}</p></div><p className="text-right text-2xl font-black tracking-[-0.04em] text-[#0c566d]">€{car.price}<span className="block text-[10px] font-bold uppercase tracking-[0.1em] text-[#7a8a91]">per day</span></p></div>
                  <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold text-[#526b76]"><span className="feature-chip"><Users className="h-3.5 w-3.5" aria-hidden="true" /> {car.passengers}</span><span className="feature-chip"><BriefcaseBusiness className="h-3.5 w-3.5" aria-hidden="true" /> {car.bags}</span><span className="feature-chip"><Gauge className="h-3.5 w-3.5" aria-hidden="true" /> {car.transmission}</span></div>
                  <a href="#booking" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#b9d0d5] px-4 py-3 text-sm font-extrabold text-[#0b5369] transition hover:border-[#0b5369] hover:bg-[#0b5369] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b5369]">Request this category <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d5268] py-24 text-white lg:py-30">
        <div className="mx-auto grid w-full max-w-[1240px] gap-12 px-5 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:px-10">
          <div><p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#7ce1d7]">Why Meltemi</p><h2 className="font-display mt-4 text-[clamp(2.8rem,5vw,4.7rem)] font-semibold leading-[.98] tracking-[-0.045em]">Less desk time. More island.</h2></div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[["01", "No surprise maths", "Your cover and useful extras are already inside the price you compare."], ["02", "Airport made easy", "Handover and return at Kos Airport are included—no extra transfer to arrange."], ["03", "Help that answers", "If plans change on the road, 24/7 phone support is part of every rental."]].map(([number, title, copy]) => (
              <article key={number} className="rounded-[1.6rem] border border-white/16 bg-white/8 p-6"><p className="font-display text-3xl font-semibold text-[#ffd166]">{number}</p><h3 className="mt-7 text-lg font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/70">{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="relative overflow-hidden bg-[#f8f6f1] py-24 lg:py-32">
        <div className="absolute -right-48 top-10 h-[420px] w-[420px] rounded-full bg-[#dcefeb] blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-[1240px] gap-12 px-5 sm:px-8 lg:grid-cols-[.78fr_1.22fr] lg:px-10">
          <div>
            <p className="eyebrow">No payment. Just availability.</p><h2 className="font-display mt-4 text-[clamp(3rem,5vw,5rem)] font-semibold leading-[.96] tracking-[-0.05em] text-balance">Tell us when you land.</h2><p className="mt-6 max-w-[500px] text-lg leading-8 text-[#5d727c]">Send your dates and preferred car. We’ll reply with availability, your exact total and the rental terms before you decide.</p>
            <ul className="mt-8 space-y-3 text-sm font-bold text-[#31515f]">{["No card details requested", "No obligation to book", "Your quoted inclusions stay included"].map((item) => (<li key={item} className="flex items-center gap-3"><span className="grid h-6 w-6 place-items-center rounded-full bg-[#dff3ef] text-[#16766f]"><Check className="h-3.5 w-3.5" aria-hidden="true" /></span>{item}</li>))}</ul>
          </div>
          <BookingForm />
        </div>
      </section>

      <section id="faq" className="bg-white py-24 lg:py-30">
        <div className="mx-auto grid w-full max-w-[1060px] gap-12 px-5 sm:px-8 lg:grid-cols-[.62fr_1.38fr] lg:px-10">
          <div><p className="eyebrow">Straight answers</p><h2 className="font-display mt-4 text-5xl font-semibold leading-none tracking-[-0.045em]">Before you request.</h2></div>
          <div className="divide-y divide-[#dfe8ea] border-y border-[#dfe8ea]">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group py-5" open={index === 0}><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-extrabold marker:hidden sm:text-lg">{faq.question}<span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#eaf3f2] text-[#176b67] transition group-open:rotate-45" aria-hidden="true">+</span></summary><p className="max-w-[680px] pb-2 pt-4 text-base leading-7 text-[#60737d]">{faq.answer}</p></details>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#062b45] px-5 pb-28 pt-16 text-white sm:px-8 lg:px-10 lg:pb-10">
        <div className="mx-auto grid w-full max-w-[1240px] gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div><a href="#top" className="inline-flex items-center gap-3" aria-label="Back to top"><span className="grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/10 text-sm font-black tracking-[-0.08em]">MR</span><span><strong className="block tracking-[0.05em]">MELTEMI RENTALS</strong><span className="text-xs text-white/55">Clear car hire in Kos</span></span></a><p className="mt-6 max-w-[470px] text-sm leading-6 text-white/58">A small fleet of 12 well-kept cars, one transparent rate and support whenever the island changes your plans.</p></div>
          <div className="grid gap-3 text-sm text-white/75 sm:grid-cols-3 lg:grid-cols-1"><span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#7ce1d7]" aria-hidden="true" /> Kos, Greece</span><span className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#7ce1d7]" aria-hidden="true" /> Daily, 08:00–22:00</span><span className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#7ce1d7]" aria-hidden="true" /> hello@meltemi-rentals.example</span></div>
        </div>
        <div className="mx-auto mt-12 flex w-full max-w-[1240px] flex-col gap-2 border-t border-white/12 pt-6 text-xs text-white/40 sm:flex-row sm:justify-between"><span>© 2026 Meltemi Rentals</span><span>Transparent prices. Simple island driving.</span></div>
      </footer>

      <StickyBookingCta />
    </main>
  );
}
