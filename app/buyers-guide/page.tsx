"use client";

import React, { useState } from "react";
import { ShieldCheck, FileCheck, CheckCircle2, AlertTriangle, ExternalLink, HelpCircle } from "lucide-react";
import siteData from "../../data/site.json";

export default function BuyersGuidePage() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: 1,
      title: "AP-RERA Verification",
      description: "Always verify project registration directly on the official AP-RERA portal before committing funds.",
      details: [
        `Sri Srinivasa Smart City RERA ID: ${siteData.rera[0].id}`,
        `Sri Venkateswara Smart City (Phase 1) RERA ID: ${siteData.rera[1].id}`,
        "Ensure layout map matches the sanctioned DTCP and RERA permits."
      ],
      link: "https://rera.ap.gov.in"
    },
    {
      number: 2,
      title: "13-Year Encumbrance Certificate (EC)",
      description: "Check the Encumbrance Certificate at the local Sub-Registrar Office (SRO) in Jaggampeta.",
      details: [
        "Confirms clear title ownership history for the past 13+ years.",
        "Ensures no undisclosed mortgages, bank hypothecations, or legal disputes exist on the land."
      ],
      link: "https://registration.ap.gov.in"
    },
    {
      number: 3,
      title: "Meebhoomi Land Records (Adangal & 1-B)",
      description: "Cross-verify survey numbers and pattadar passbook details on the Government of AP Meebhoomi portal.",
      details: [
        "Review Adangal / 1-B extracts to verify land classification (Ryotwari Patta).",
        "Confirm promoter ownership names match official government records."
      ],
      link: "https://meebhoomi.ap.gov.in"
    },
    {
      number: 4,
      title: "Bhunaksha Map Verification",
      description: "Verify cadastral map boundaries and plot dimensions against the official AP Bhunaksha portal.",
      details: [
        "Ensures exact plot boundaries, road widths (30ft / 40ft), and public open spaces conform to DTCP layout standards."
      ],
      link: "https://bhunaksha.ap.gov.in"
    }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-3 block">Buyer Protection & Due Diligence</span>
        <h1 className="text-3xl sm:text-5xl font-outfit font-extrabold text-white mb-4">
          The Smart Buyer's Guide
        </h1>
        <p className="text-slate-400 text-base sm:text-lg">
          We believe in absolute transparency. Follow our step-by-step due diligence checklist to independently verify the legality and safety of your plot investment.
        </p>
      </div>

      {/* Steps Accordion / Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {steps.map((step) => (
          <div
            key={step.number}
            onClick={() => setActiveStep(step.number)}
            className={`cursor-pointer bg-slate-900 border rounded-3xl p-8 transition-all shadow-xl ${
              activeStep === step.number ? "border-amber-500 shadow-amber-500/10" : "border-slate-800 hover:border-slate-700"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`w-10 h-10 rounded-2xl flex items-center justify-center font-outfit font-bold text-sm ${
                activeStep === step.number ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20" : "bg-slate-800 text-slate-300"
              }`}>
                0{step.number}
              </span>
              <span className="text-xs text-slate-400 font-mono">Verification Step</span>
            </div>

            <h3 className="text-xl font-outfit font-bold text-white mb-2">{step.title}</h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">{step.description}</p>

            <ul className="space-y-2 mb-6">
              {step.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <a
              href={step.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 underline"
            >
              <span>Access Official Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>

      {/* FAQs */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
        <h2 className="text-2xl font-outfit font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div>
            <h3 className="text-base font-outfit font-bold text-white mb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Are bank loans available for plots at Sri Srinivasa Smart City?</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Yes. Because the layout is 100% AP-RERA approved with clear titles, major nationalized and scheduled banks readily approve plot purchase loans.
            </p>
          </div>

          <div className="border-t border-slate-800 pt-6">
            <h3 className="text-base font-outfit font-bold text-white mb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>What is the registration process after booking?</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Once payment terms are fulfilled, immediate registered sale deed execution is conducted at the Jaggampeta Sub-Registrar Office with full legal support from our team.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
