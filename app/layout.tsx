import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meltemi Rentals | Clear-price car hire in Kos",
  description: "Car hire in Kos from €35/day with full cover, airport handover, a second driver and no credit-card deposit already included.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
