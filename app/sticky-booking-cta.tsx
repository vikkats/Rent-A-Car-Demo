"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export function StickyBookingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroCtas = document.getElementById("hero-ctas");
    const booking = document.getElementById("booking");
    if (!heroCtas) return;

    const state = { heroInView: true, bookingInView: false };
    const update = () => setVisible(!state.heroInView && !state.bookingInView);

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === heroCtas) state.heroInView = entry.isIntersecting;
        if (entry.target === booking) state.bookingInView = entry.isIntersecting;
      }
      update();
    });

    observer.observe(heroCtas);
    if (booking) observer.observe(booking);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="#booking"
      aria-hidden={!visible}
      tabIndex={visible ? undefined : -1}
      className={`raised-button raised-button-light fixed inset-x-4 bottom-4 z-50 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#ffd166] px-6 text-sm font-extrabold text-[#082f4b] shadow-[0_16px_50px_rgba(3,31,48,.3)] transition duration-300 md:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      Check availability <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}
