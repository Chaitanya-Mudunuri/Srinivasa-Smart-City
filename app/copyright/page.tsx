export default function CopyrightDisclaimer() {
  return (
    <div className="bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="mb-12">
        <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-2 block">Intellectual Property & Disclaimers</span>
        <h1 className="text-3xl sm:text-4xl font-outfit font-extrabold text-white mb-4">Copyright & Disclaimer</h1>
        <p className="text-slate-400 text-sm">Last updated: October 15, 2026</p>
      </div>

      <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
        <section className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h2 className="text-xl font-outfit font-bold text-white mb-3">1. Copyright & Intellectual Property</h2>
          <p>
            All content on this website—including text, graphics, logos, icons, master layouts, 3D architectural renders, site photographs, brochures, and downloadable documents—is the exclusive property of Sri Srinivasa Smart City and its promoters (Mudunuri Seetharamaraju & Mudunuri MuraliKrishnamRaju), protected under Indian and international copyright laws. Unauthorized reproduction, distribution, modification, or commercial exploitation of any material without prior written permission is strictly prohibited.
          </p>
        </section>

        <section className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h2 className="text-xl font-outfit font-bold text-white mb-3">2. Real Estate Project Disclaimer</h2>
          <p className="mb-3">
            The information provided on this portal is for general guidance and informational purposes only. It does not constitute an offer, legal binding commitment, or contract of sale. Prospective purchasers should independently verify all land titles, approvals, encumbrance certificates, and statutory permissions.
          </p>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-amber-400 space-y-1">
            <p>Project AP-RERA ID: P04180171449</p>
            <p>Phase 1 AP-RERA ID: P04180173203</p>
            <p>Official Portal: rera.ap.gov.in</p>
          </div>
        </section>

        <section className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h2 className="text-xl font-outfit font-bold text-white mb-3">3. Limitation of Liability</h2>
          <p>
            The promoters, developers, and associated entities shall not be held liable for any direct or indirect loss, financial damage, or inconvenience resulting from the use of this website, reliance on preliminary layout illustrations, or temporary unavailability of digital services. All dimensions, specifications, and layout plans are subject to statutory approvals and modifications as required by DTCP and AP-RERA guidelines.
          </p>
        </section>
      </div>
    </div>
  );
}
