import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plots in Jaggampeta | Sri Srinivasa Smart City",
  description: "Looking for premium AP-RERA approved plots in Jaggampeta, East Godavari district? Discover Sri Srinivasa Smart City by Mudunuri Seetharamaraju & Mudunuri MuraliKrishnamRaju.",
};

export default function PlotsInJaggampetaPage() {
  return (
    <div className="bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-3 block">Local SEO Landing Page</span>
      <h1 className="text-3xl sm:text-5xl font-outfit font-extrabold text-white mb-6">
        Premium Plotted Layouts & Open Plots in Jaggampeta
      </h1>
      <p className="text-slate-300 text-base leading-relaxed mb-8">
        Sri Srinivasa Smart City represents the pinnacle of plotted real estate development in Jaggampeta, East Godavari District, Andhra Pradesh. Developed under the visionary leadership of <strong className="text-white">Mudunuri Seetharamaraju</strong> and <strong className="text-white">Mudunuri MuraliKrishnamRaju</strong>, our layout offers unmatched connectivity, elite infrastructure, and 100% AP-RERA compliance.
      </p>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-8">
        <h2 className="text-xl font-outfit font-bold text-white mb-4">Why Invest in Jaggampeta Real Estate?</h2>
        <ul className="space-y-3 text-sm text-slate-300">
          <li className="flex items-start gap-2">
            <span className="text-amber-400 font-bold">✓</span>
            <span>Rapid commercial and residential expansion along the NH16 growth corridor.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400 font-bold">✓</span>
            <span>Seamless travel to Rajahmundry, Kakinada port city, and Samalkot railway junction.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400 font-bold">✓</span>
            <span>DTCP and AP-RERA approved titles guaranteeing absolute legal security.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
