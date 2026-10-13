import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plots Near NH16 Highway | Sri Srinivasa Smart City",
  description: "Secure premium AP-RERA approved plots just 2 minutes from NH16 highway at Sri Srinivasa Smart City, Jaggampeta.",
};

export default function PlotsNearNH16Page() {
  return (
    <div className="bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-3 block">Local SEO Landing Page</span>
      <h1 className="text-3xl sm:text-5xl font-outfit font-extrabold text-white mb-6">
        Premium Plotted Layouts Near National Highway 16 (NH16)
      </h1>
      <p className="text-slate-300 text-base leading-relaxed mb-8">
        Accessibility is the cornerstone of real estate value. Sri Srinivasa Smart City is positioned just 2 kilometers from National Highway 16, providing effortless transit across Andhra Pradesh and beyond.
      </p>
    </div>
  );
}
