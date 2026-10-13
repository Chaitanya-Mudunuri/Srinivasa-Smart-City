import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plots Near Rajahmundry Airport | Sri Srinivasa Smart City",
  description: "Invest in AP-RERA approved plotted land near Rajahmundry airport and commercial center at Jaggampeta.",
};

export default function PlotsNearRajahmundryPage() {
  return (
    <div className="bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-3 block">Local SEO Landing Page</span>
      <h1 className="text-3xl sm:text-5xl font-outfit font-extrabold text-white mb-6">
        Residential Plots Near Rajahmundry (Rajamahendravaram)
      </h1>
      <p className="text-slate-300 text-base leading-relaxed mb-8">
        Only 35 kilometers from Rajahmundry's airport, railway terminus, and medical hub, Sri Srinivasa Smart City in Jaggampeta offers peaceful suburban community living within easy reach of the city.
      </p>
    </div>
  );
}
