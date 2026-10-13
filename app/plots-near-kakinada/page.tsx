import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plots Near Kakinada Port & SEZ | Sri Srinivasa Smart City",
  description: "Invest in AP-RERA approved plots near Kakinada industrial corridor and port at Sri Srinivasa Smart City, Jaggampeta.",
};

export default function PlotsNearKakinadaPage() {
  return (
    <div className="bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-3 block">Local SEO Landing Page</span>
      <h1 className="text-3xl sm:text-5xl font-outfit font-extrabold text-white mb-6">
        Open Plots Near Kakinada Port & Industrial Corridor
      </h1>
      <p className="text-slate-300 text-base leading-relaxed mb-8">
        Located just a short drive from Kakinada's bustling deep-water port, SEZs, and industrial employment hubs, Sri Srinivasa Smart City in Jaggampeta offers the perfect balance of serene residential living and high-growth investment potential.
      </p>
    </div>
  );
}
